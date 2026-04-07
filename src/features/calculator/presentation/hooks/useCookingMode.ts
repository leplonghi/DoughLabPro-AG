
import { useState, useCallback, useEffect } from 'react';

/**
 * Hook to request a Wake Lock (keep screen on) for "Cooking Mode".
 */
export function useCookingMode() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isSupported, setIsSupported] = useState(false);
    const [sentinel, setSentinel] = useState<WakeLockSentinel | null>(null);

    useEffect(() => {
        if ('wakeLock' in navigator) {
            setIsSupported(true);
        }
    }, []);

    const enable = useCallback(async () => {
        if (!isSupported) return;
        try {
            const lock = await navigator.wakeLock.request('screen');
            setSentinel(lock);
            setIsEnabled(true);

            lock.addEventListener('release', () => {
                setIsEnabled(false);
                setSentinel(null);
            });
        } catch (err) {
            console.error('Failed to acquire wake lock:', err);
            // Optionally handle error state
        }
    }, [isSupported]);

    const disable = useCallback(async () => {
        if (sentinel) {
            await sentinel.release();
            setSentinel(null);
            setIsEnabled(false);
        }
    }, [sentinel]);

    const toggle = useCallback(() => {
        if (isEnabled) {
            disable();
        } else {
            enable();
        }
    }, [isEnabled, enable, disable]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (sentinel) {
                sentinel.release();
            }
        };
    }, [sentinel]);

    return {
        isEnabled,
        isSupported,
        toggle,
        enable,
        disable
    };
}
