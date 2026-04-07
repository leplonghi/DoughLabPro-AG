"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHandler = void 0;
const functions = require("firebase-functions");
const monitoring_1 = require("./monitoring");
const rateLimiter_1 = require("./rateLimiter");
/**
 * Standardized Https Callable Handler
 * Automatically handles:
 * 1. Authentication Check
 * 2. Rate Limiting
 * 3. Monitoring (Latency & Errors)
 * 4. Error Normalization
 */
function createHandler(name, options, logic) {
    return functions.https.onCall(async (data, context) => {
        return await monitoring_1.monitoring.measure(name, async () => {
            var _a, _b;
            try {
                // 1. Auth Check
                if (options.requireAuth && !context.auth) {
                    throw new functions.https.HttpsError("unauthenticated", "Authentication required.");
                }
                // 2. Rate Limit
                if (options.rateLimit && context.auth) {
                    await (0, rateLimiter_1.checkRateLimit)(context.auth.uid, options.rateLimit);
                }
                // 3. Execute Logic
                const result = await logic(data, context);
                monitoring_1.logger.info(`Function ${name} success`, { userId: (_a = context.auth) === null || _a === void 0 ? void 0 : _a.uid });
                return result;
            }
            catch (error) {
                // 4. Log and Re-throw HttpsErrors
                if (error instanceof functions.https.HttpsError) {
                    throw error;
                }
                monitoring_1.logger.error(`Function ${name} failed`, {
                    error: error.message,
                    stack: error.stack,
                    userId: (_b = context.auth) === null || _b === void 0 ? void 0 : _b.uid
                });
                throw new functions.https.HttpsError("internal", "An internal error occurred.", error.message);
            }
        });
    });
}
exports.createHandler = createHandler;
//# sourceMappingURL=handler.js.map