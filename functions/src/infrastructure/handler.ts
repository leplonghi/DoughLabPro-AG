import * as functions from "firebase-functions";
import { monitoring, logger } from "./monitoring";
import { checkRateLimit, RateLimitOptions } from "./rateLimiter";

export interface HandlerOptions {
    rateLimit?: RateLimitOptions;
    requireAuth?: boolean;
}

/**
 * Standardized Https Callable Handler
 * Automatically handles:
 * 1. Authentication Check
 * 2. Rate Limiting
 * 3. Monitoring (Latency & Errors)
 * 4. Error Normalization
 */
export function createHandler<T_Req, T_Res>(
    name: string,
    options: HandlerOptions,
    logic: (data: T_Req, context: functions.https.CallableContext) => Promise<T_Res>
) {
    return functions.https.onCall(async (data: T_Req, context: functions.https.CallableContext) => {
        return await monitoring.measure(name, async () => {
            try {
                // 1. Auth Check
                if (options.requireAuth && !context.auth) {
                    throw new functions.https.HttpsError(
                        "unauthenticated",
                        "Authentication required."
                    );
                }

                // 2. Rate Limit
                if (options.rateLimit && context.auth) {
                    await checkRateLimit(context.auth.uid, options.rateLimit);
                }

                // 3. Execute Logic
                const result = await logic(data, context);

                logger.info(`Function ${name} success`, { userId: context.auth?.uid });
                return result;

            } catch (error: any) {
                // 4. Log and Re-throw HttpsErrors
                if (error instanceof functions.https.HttpsError) {
                    throw error;
                }

                logger.error(`Function ${name} failed`, {
                    error: error.message,
                    stack: error.stack,
                    userId: context.auth?.uid
                });

                throw new functions.https.HttpsError(
                    "internal",
                    "An internal error occurred.",
                    error.message
                );
            }
        });
    });
}
