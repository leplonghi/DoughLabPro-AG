import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { logger } from "./monitoring";

const db = admin.firestore();

export interface RateLimitOptions {
    points: number;       // Number of allowed requests
    duration: number;     // Time window in seconds
    keyPrefix: string;    // Prefix for the limit key (e.g., 'auth', 'api')
}

/**
 * Distributed Rate Limiter using Firestore
 * Ensures that users don't abuse the API across multiple function instances
 */
export async function checkRateLimit(userId: string, options: RateLimitOptions): Promise<void> {
    const { points, duration, keyPrefix } = options;
    const now = Date.now();
    const windowStart = now - (duration * 1000);

    const limitRef = db.collection("rate_limits").doc(`${keyPrefix}_${userId}`);

    try {
        await db.runTransaction(async (transaction) => {
            const doc = await transaction.get(limitRef);
            const data = doc.data();

            if (!doc.exists || (data?.timestamp < windowStart)) {
                // First request in the window or window expired
                transaction.set(limitRef, {
                    count: 1,
                    timestamp: now
                });
            } else {
                // Increment count
                const newCount = (data?.count || 0) + 1;
                if (newCount > points) {
                    logger.warn("Rate limit exceeded", { userId, keyPrefix, count: newCount });
                    throw new functions.https.HttpsError(
                        "resource-exhausted",
                        `Rate limit exceeded. Try again in ${duration} seconds.`
                    );
                }
                transaction.update(limitRef, {
                    count: newCount
                });
            }
        });
    } catch (error) {
        if (error instanceof functions.https.HttpsError) throw error;
        logger.error("Rate Limiter Error", { error, userId });
        // Fallback: allowed on internal error to not block users
    }
}
