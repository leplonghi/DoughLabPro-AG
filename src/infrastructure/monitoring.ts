/**
 * Client-side Monitoring Wrapper
 * standardizes event tracking and error reporting
 */

type LogLevel = 'info' | 'warn' | 'error';

interface MonitoringContext {
    userId?: string;
    page?: string;
    [key: string]: any;
}

class MonitoringService {
    private static instance: MonitoringService;
    private context: MonitoringContext = {};

    private constructor() {
        this.context.page = window.location.pathname;
    }

    static getInstance() {
        if (!MonitoringService.instance) {
            MonitoringService.instance = new MonitoringService();
        }
        return MonitoringService.instance;
    }

    setUserId(userId: string) {
        this.context.userId = userId;
    }

    log(level: LogLevel, message: string, data?: any) {
        const payload = {
            message,
            level,
            timestamp: new Date().toISOString(),
            context: { ...this.context, ...data },
        };

        // In production, send to a service like Sentry, LogRocket, or GA4
        if (process.env.NODE_ENV === 'production') {
            // example: Sentry.captureMessage(message, { level, extra: data });
            console.log(`[MONITORING] ${JSON.stringify(payload)}`);
        } else {
            const colors = { info: 'blue', warn: 'orange', error: 'red' };
            console.log(`%c[${level.toUpperCase()}] ${message}`, `color: ${colors[level]}`, data || '');
        }
    }

    trackError(error: Error, extra?: any) {
        this.log('error', error.message, { stack: error.stack, ...extra });
    }

    trackEvent(name: string, data?: any) {
        this.log('info', `Event: ${name}`, data);
    }
}

export const monitor = MonitoringService.getInstance();
