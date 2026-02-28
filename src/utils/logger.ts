/**
 * Centralized logging utility.
 * Helps to manage logging across environments and ensures that production logs
 * are handled appropriately (e.g., sent to a monitoring service instead of console).
 */

const isProduction = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.PROD : process.env.NODE_ENV === 'production';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
    private static instance: Logger;

    private constructor() { }

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(level: LogLevel, message: string, ...args: any[]) {
        // In production, we typically want to silence debug/info logs 
        // unless explicitly configured otherwise, or redirect them to a service.
        if (isProduction) {
            if (level === 'error') {
                // Errors should still be visible or reported
                console.error(`[${level.toUpperCase()}] ${message}`, ...args);
            } else if (level === 'warn') {
                console.warn(`[${level.toUpperCase()}] ${message}`, ...args);
            }
            // Debug and Info are suppressed in production by default
            return;
        }

        // Development logging
        const prefix = `[${level.toUpperCase()}]`;
        switch (level) {
            case 'error':
                console.error(prefix, message, ...args);
                break;
            case 'warn':
                console.warn(prefix, message, ...args);
                break;
            case 'info':
                console.info(prefix, message, ...args);
                break;
            case 'debug':
                console.debug(prefix, message, ...args);
                break;
        }
    }

    debug(message: string, ...args: any[]) {
        this.log('debug', message, ...args);
    }

    info(message: string, ...args: any[]) {
        this.log('info', message, ...args);
    }

    warn(message: string, ...args: any[]) {
        this.log('warn', message, ...args);
    }

    error(message: string, ...args: any[]) {
        this.log('error', message, ...args);
    }
}

export const logger = Logger.getInstance();
