"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRateLimit = void 0;
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const monitoring_1 = require("./monitoring");
const db = admin.firestore();
/**
 * Distributed Rate Limiter using Firestore
 * Ensures that users don't abuse the API across multiple function instances
 */
async function checkRateLimit(userId, options) {
    const { points, duration, keyPrefix } = options;
    const now = Date.now();
    const windowStart = now - (duration * 1000);
    const limitRef = db.collection("rate_limits").doc(`${keyPrefix}_${userId}`);
    try {
        await db.runTransaction(async (transaction) => {
            const doc = await transaction.get(limitRef);
            const data = doc.data();
            if (!doc.exists || ((data === null || data === void 0 ? void 0 : data.timestamp) < windowStart)) {
                // First request in the window or window expired
                transaction.set(limitRef, {
                    count: 1,
                    timestamp: now
                });
            }
            else {
                // Increment count
                const newCount = ((data === null || data === void 0 ? void 0 : data.count) || 0) + 1;
                if (newCount > points) {
                    monitoring_1.logger.warn("Rate limit exceeded", { userId, keyPrefix, count: newCount });
                    throw new functions.https.HttpsError("resource-exhausted", `Rate limit exceeded. Try again in ${duration} seconds.`);
                }
                transaction.update(limitRef, {
                    count: newCount
                });
            }
        });
    }
    catch (error) {
        if (error instanceof functions.https.HttpsError)
            throw error;
        monitoring_1.logger.error("Rate Limiter Error", { error, userId });
        // Fallback: allowed on internal error to not block users
    }
}
exports.checkRateLimit = checkRateLimit;
//# sourceMappingURL=rateLimiter.js.map