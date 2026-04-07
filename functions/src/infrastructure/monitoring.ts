import * as functions from "firebase-functions";

/**
 * Structured Monitoring Utility
 * Provides standardized logging and metrics tracking
 */
export const logger = {
    info: (message: string, context?: any) => {
        functions.logger.info(message, {
            structured_log: true,
            severity: "INFO",
            ...context
        });
    },
    warn: (message: string, context?: any) => {
        functions.logger.warn(message, {
            structured_log: true,
            severity: "WARNING",
            ...context
        });
    },
    error: (message: string, context?: any) => {
        functions.logger.error(message, {
            structured_log: true,
            severity: "ERROR",
            ...context
        });
    },
    /**
     * Track vital metrics (latency, hits, etc.)
     * These can be viewed in Google Cloud Monitoring/Metrics Explorer
     */
    trackMetric: (name: string, value: number, labels: Record<string, string> = {}) => {
        // Structured log that GCP can parse as a custom metric
        functions.logger.info(`Metric: ${name}`, {
            metric_type: "CUSTOM",
            metric_name: name,
            metric_value: value,
            labels
        });
    }
};

export const monitoring = {
    /**
     * Wrap any function to measure execution time
     */
    measure: async <T>(name: string, fn: () => Promise<T>): Promise<T> => {
        const start = Date.now();
        try {
            const result = await fn();
            const duration = Date.now() - start;
            logger.trackMetric(`${name}_latency_ms`, duration);
            return result;
        } catch (error) {
            const duration = Date.now() - start;
            logger.trackMetric(`${name}_error_latency_ms`, duration);
            throw error;
        }
    }
};
