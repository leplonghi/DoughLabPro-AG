type AnalyticsParams = Record<string, unknown>;

const ANALYTICS_QUEUE_KEY = 'doughlab.analytics.queue';
const PII_KEYS = new Set([
    'email',
    'userId',
    'uid',
    'stripeCustomerId',
    'stripeSubscriptionId',
]);

declare global {
    interface Window {
        dataLayer?: Array<Record<string, unknown>>;
        gtag?: (...args: unknown[]) => void;
        plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
    }
}

function anonymizeValue(value: unknown): string {
    if (typeof value !== 'string') return '[redacted]';

    if (value.includes('@')) {
        const [name, domain] = value.split('@');
        return `${name.slice(0, 2)}***@${domain}`;
    }

    if (value.length <= 6) return '[redacted]';
    return `${value.slice(0, 3)}***${value.slice(-2)}`;
}

function sanitizeParams(params?: AnalyticsParams): AnalyticsParams | undefined {
    if (!params) return undefined;

    return Object.entries(params).reduce<AnalyticsParams>((acc, [key, value]) => {
        if (value === undefined || typeof value === 'function') {
            return acc;
        }

        acc[key] = PII_KEYS.has(key) ? anonymizeValue(value) : value;
        return acc;
    }, {});
}

function persistEvent(eventName: string, params?: AnalyticsParams) {
    if (typeof window === 'undefined') return;

    try {
        const existing = JSON.parse(localStorage.getItem(ANALYTICS_QUEUE_KEY) || '[]') as Array<Record<string, unknown>>;
        existing.push({
            eventName,
            params,
            createdAt: new Date().toISOString(),
        });
        localStorage.setItem(ANALYTICS_QUEUE_KEY, JSON.stringify(existing.slice(-100)));
    } catch {
        // Ignore local analytics persistence failures.
    }
}

export const logEvent = (eventName: string, params?: AnalyticsParams) => {
    const safeParams = sanitizeParams(params);

    if (typeof window !== 'undefined') {
        if (typeof window.gtag === 'function') {
            window.gtag('event', eventName, safeParams || {});
        }

        if (Array.isArray(window.dataLayer)) {
            window.dataLayer.push({ event: eventName, ...(safeParams || {}) });
        }

        if (typeof window.plausible === 'function') {
            window.plausible(eventName, { props: safeParams });
        }

        persistEvent(eventName, safeParams);
    }

    if (import.meta.env.DEV) {
        console.debug(`[Analytics] ${eventName}`, safeParams || {});
    }
};
