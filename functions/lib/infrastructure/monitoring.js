"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitoring = exports.logger = void 0;
const functions = require("firebase-functions");
/**
 * Structured Monitoring Utility
 * Provides standardized logging and metrics tracking
 */
exports.logger = {
    info: (message, context) => {
        functions.logger.info(message, Object.assign({ structured_log: true, severity: "INFO" }, context));
    },
    warn: (message, context) => {
        functions.logger.warn(message, Object.assign({ structured_log: true, severity: "WARNING" }, context));
    },
    error: (message, context) => {
        functions.logger.error(message, Object.assign({ structured_log: true, severity: "ERROR" }, context));
    },
    /**
     * Track vital metrics (latency, hits, etc.)
     * These can be viewed in Google Cloud Monitoring/Metrics Explorer
     */
    trackMetric: (name, value, labels = {}) => {
        // Structured log that GCP can parse as a custom metric
        functions.logger.info(`Metric: ${name}`, {
            metric_type: "CUSTOM",
            metric_name: name,
            metric_value: value,
            labels
        });
    }
};
exports.monitoring = {
    /**
     * Wrap any function to measure execution time
     */
    measure: async (name, fn) => {
        const start = Date.now();
        try {
            const result = await fn();
            const duration = Date.now() - start;
            exports.logger.trackMetric(`${name}_latency_ms`, duration);
            return result;
        }
        catch (error) {
            const duration = Date.now() - start;
            exports.logger.trackMetric(`${name}_error_latency_ms`, duration);
            throw error;
        }
    }
};
//# sourceMappingURL=monitoring.js.map