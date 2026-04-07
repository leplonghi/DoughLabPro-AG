import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
    NotificationContextType,
    NotificationSettings,
    NotificationPayload,
    ScheduledNotification,
    TimerConfig,
    NotificationType,
    NotificationPriority,
} from '../types/notifications';

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

const DEFAULT_SETTINGS: NotificationSettings = {
    enabled: true,
    soundEnabled: true,
    vibrationEnabled: true,
    showOnLockScreen: true,
    fermentationNotifications: true,
    foldingNotifications: true,
    proofingNotifications: true,
    levainNotifications: true,
    bakingNotifications: true,
    recipeNotifications: true,
    advanceNoticeMinutes: 5,
    quietHoursEnabled: false,
    quietHoursStart: '22:00',
    quietHoursEnd: '07:00',
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [settings, setSettings] = useState<NotificationSettings>(DEFAULT_SETTINGS);
    const [permissionStatus, setPermissionStatus] = useState<NotificationPermission>('default');
    const [scheduledNotifications, setScheduledNotifications] = useState<ScheduledNotification[]>([]);
    const [activeTimers, setActiveTimers] = useState<TimerConfig[]>([]);
    const [serviceWorkerRegistration, setServiceWorkerRegistration] = useState<ServiceWorkerRegistration | null>(null);

    // Initialize service worker and load settings
    useEffect(() => {
        initializeNotifications();
        loadSettings();
        loadScheduledNotifications();
        loadActiveTimers();
    }, []);

    const initializeNotifications = async () => {
        if ('serviceWorker' in navigator && 'Notification' in window) {
            try {
                const registration = await navigator.serviceWorker.register('/sw-notifications.js');
                setServiceWorkerRegistration(registration);
                console.log('Notification service worker registered');

                // Check current permission status
                setPermissionStatus(Notification.permission);
            } catch (error) {
                console.error('Failed to register notification service worker:', error);
            }
        }
    };

    const loadSettings = () => {
        const stored = localStorage.getItem('doughlabpro_notification_settings');
        if (stored) {
            try {
                setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(stored) });
            } catch (error) {
                console.error('Failed to load notification settings:', error);
            }
        }
    };

    const loadScheduledNotifications = () => {
        const stored = localStorage.getItem('doughlabpro_scheduled_notifications');
        if (stored) {
            try {
                const notifications = JSON.parse(stored);
                setScheduledNotifications(notifications);
            } catch (error) {
                console.error('Failed to load scheduled notifications:', error);
            }
        }
    };

    const loadActiveTimers = () => {
        const stored = localStorage.getItem('doughlabpro_active_timers');
        if (stored) {
            try {
                const timers = JSON.parse(stored);
                setActiveTimers(timers);
            } catch (error) {
                console.error('Failed to load active timers:', error);
            }
        }
    };

    const updateSettings = useCallback(async (newSettings: Partial<NotificationSettings>) => {
        const updated = { ...settings, ...newSettings };
        setSettings(updated);
        localStorage.setItem('doughlabpro_notification_settings', JSON.stringify(updated));
    }, [settings]);

    const requestPermission = useCallback(async (): Promise<NotificationPermission> => {
        if (!('Notification' in window)) {
            console.error('This browser does not support notifications');
            return 'denied';
        }

        const permission = await Notification.requestPermission();
        setPermissionStatus(permission);

        if (permission === 'granted') {
            await updateSettings({ enabled: true });
        }

        return permission;
    }, [updateSettings]);

    const isInQuietHours = useCallback((): boolean => {
        if (!settings.quietHoursEnabled || !settings.quietHoursStart || !settings.quietHoursEnd) {
            return false;
        }

        const now = new Date();
        const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

        const start = settings.quietHoursStart;
        const end = settings.quietHoursEnd;

        if (start < end) {
            return currentTime >= start && currentTime < end;
        } else {
            return currentTime >= start || currentTime < end;
        }
    }, [settings]);

    const scheduleNotification = useCallback(async (
        notification: Omit<NotificationPayload, 'id' | 'createdAt'>
    ): Promise<ScheduledNotification> => {
        if (!settings.enabled || permissionStatus !== 'granted') {
            throw new Error('Notifications are not enabled or permission not granted');
        }

        const scheduled: ScheduledNotification = {
            ...notification,
            id: `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            createdAt: new Date().toISOString(),
            status: 'PENDING',
        };

        const updated = [...scheduledNotifications, scheduled];
        setScheduledNotifications(updated);
        localStorage.setItem('doughlabpro_scheduled_notifications', JSON.stringify(updated));

        // Schedule with service worker
        if (serviceWorkerRegistration) {
            serviceWorkerRegistration.active?.postMessage({
                type: 'SCHEDULE_NOTIFICATION',
                payload: scheduled,
            });
        } else {
            // Fallback to setTimeout for browsers without service worker
            const delay = new Date(scheduled.scheduledFor).getTime() - Date.now();
            if (delay > 0) {
                setTimeout(() => {
                    showNotification(scheduled);
                }, delay);
            }
        }

        return scheduled;
    }, [settings, permissionStatus, scheduledNotifications, serviceWorkerRegistration]);

    const showNotification = useCallback((notification: ScheduledNotification) => {
        if (isInQuietHours()) {
            console.log('Notification suppressed due to quiet hours');
            return;
        }

        if ('Notification' in window && Notification.permission === 'granted') {
            const notif = new Notification(notification.title, {
                body: notification.body,
                icon: notification.icon || '/icons/notification-icon.png',
                badge: notification.badge || '/icons/notification-badge.png',
                tag: notification.id,
                requireInteraction: notification.requiresInteraction || false,
                silent: notification.silent || !settings.soundEnabled,
                data: notification.data,
            });

            notif.onclick = () => {
                if (notification.actionUrl) {
                    window.focus();
                    window.location.href = notification.actionUrl;
                }
                notif.close();
            };

            // Update status
            const updated = scheduledNotifications.map(n =>
                n.id === notification.id ? { ...n, status: 'SENT' as const, sentAt: new Date().toISOString() } : n
            );
            setScheduledNotifications(updated);
            localStorage.setItem('doughlabpro_scheduled_notifications', JSON.stringify(updated));
        }
    }, [isInQuietHours, settings, scheduledNotifications]);

    const cancelNotification = useCallback(async (id: string) => {
        const updated = scheduledNotifications.map(n =>
            n.id === id ? { ...n, status: 'CANCELLED' as const, cancelledAt: new Date().toISOString() } : n
        );
        setScheduledNotifications(updated);
        localStorage.setItem('doughlabpro_scheduled_notifications', JSON.stringify(updated));

        if (serviceWorkerRegistration) {
            serviceWorkerRegistration.active?.postMessage({
                type: 'CANCEL_NOTIFICATION',
                notificationId: id,
            });
        }
    }, [scheduledNotifications, serviceWorkerRegistration]);

    const cancelAllNotifications = useCallback(async () => {
        const updated = scheduledNotifications.map(n => ({
            ...n,
            status: 'CANCELLED' as const,
            cancelledAt: new Date().toISOString(),
        }));
        setScheduledNotifications(updated);
        localStorage.setItem('doughlabpro_scheduled_notifications', JSON.stringify(updated));
    }, [scheduledNotifications]);

    const startTimer = useCallback(async (
        config: Omit<TimerConfig, 'id' | 'isActive' | 'isPaused'>
    ): Promise<TimerConfig> => {
        const timer: TimerConfig = {
            ...config,
            id: `timer_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            isActive: true,
            isPaused: false,
        };

        const updated = [...activeTimers, timer];
        setActiveTimers(updated);
        localStorage.setItem('doughlabpro_active_timers', JSON.stringify(updated));

        // Schedule notifications for this timer
        const notifications = [];

        if (config.notifications.atStart) {
            notifications.push({
                type: config.type,
                priority: NotificationPriority.MEDIUM,
                title: `${config.name} Started`,
                body: `Your ${config.name} timer has started`,
                scheduledFor: config.startTime,
                batchId: config.batchId,
            });
        }

        if (config.notifications.atHalfway) {
            const halfwayTime = new Date(
                new Date(config.startTime).getTime() + (config.durationMinutes * 60 * 1000) / 2
            ).toISOString();
            notifications.push({
                type: config.type,
                priority: NotificationPriority.MEDIUM,
                title: `${config.name} Halfway`,
                body: `Your ${config.name} is halfway done`,
                scheduledFor: halfwayTime,
                batchId: config.batchId,
            });
        }

        if (config.notifications.atEnd) {
            notifications.push({
                type: config.type,
                priority: NotificationPriority.HIGH,
                title: `${config.name} Complete!`,
                body: `Your ${config.name} timer has finished`,
                scheduledFor: config.endTime,
                requiresInteraction: true,
                batchId: config.batchId,
            });
        }

        // Schedule custom notifications
        if (config.notifications.customMinutesBefore) {
            for (const minutes of config.notifications.customMinutesBefore) {
                const notifTime = new Date(
                    new Date(config.endTime).getTime() - minutes * 60 * 1000
                ).toISOString();
                notifications.push({
                    type: config.type,
                    priority: NotificationPriority.MEDIUM,
                    title: `${config.name} Reminder`,
                    body: `${minutes} minutes until ${config.name} is complete`,
                    scheduledFor: notifTime,
                    batchId: config.batchId,
                });
            }
        }

        // Schedule all notifications
        for (const notif of notifications) {
            await scheduleNotification(notif);
        }

        return timer;
    }, [activeTimers, scheduleNotification]);

    const pauseTimer = useCallback(async (id: string) => {
        const updated = activeTimers.map(t => {
            if (t.id === id && !t.isPaused) {
                const elapsed = Date.now() - new Date(t.startTime).getTime();
                const remaining = t.durationMinutes - elapsed / 60000;
                return { ...t, isPaused: true, pausedAt: new Date().toISOString(), remainingMinutes: remaining };
            }
            return t;
        });
        setActiveTimers(updated);
        localStorage.setItem('doughlabpro_active_timers', JSON.stringify(updated));
    }, [activeTimers]);

    const resumeTimer = useCallback(async (id: string) => {
        const updated = activeTimers.map(t => {
            if (t.id === id && t.isPaused && t.remainingMinutes) {
                const newStartTime = new Date().toISOString();
                const newEndTime = new Date(Date.now() + t.remainingMinutes * 60000).toISOString();
                return {
                    ...t,
                    isPaused: false,
                    pausedAt: undefined,
                    startTime: newStartTime,
                    endTime: newEndTime,
                };
            }
            return t;
        });
        setActiveTimers(updated);
        localStorage.setItem('doughlabpro_active_timers', JSON.stringify(updated));
    }, [activeTimers]);

    const stopTimer = useCallback(async (id: string) => {
        const updated = activeTimers.filter(t => t.id !== id);
        setActiveTimers(updated);
        localStorage.setItem('doughlabpro_active_timers', JSON.stringify(updated));

        // Cancel related notifications
        const relatedNotifs = scheduledNotifications.filter(n =>
            n.data?.timerId === id && n.status === 'PENDING'
        );
        for (const notif of relatedNotifs) {
            await cancelNotification(notif.id);
        }
    }, [activeTimers, scheduledNotifications, cancelNotification]);

    const scheduleRecipeNotifications = useCallback(async (batchId: string, steps: any[]) => {
        // Implementation for scheduling all recipe step notifications
        for (const step of steps) {
            if (step.durationLabel) {
                // Parse duration and schedule notification
                // This is a simplified version - you'd need to parse the duration properly
            }
        }
    }, [scheduleNotification]);

    const scheduleLevainReminder = useCallback(async (levainId: string, intervalHours: number) => {
        const nextFeedTime = new Date(Date.now() + intervalHours * 60 * 60 * 1000).toISOString();

        await scheduleNotification({
            type: NotificationType.LEVAIN_FEED_REMINDER,
            priority: NotificationPriority.HIGH,
            title: 'Time to Feed Your Levain!',
            body: `Your levain needs feeding`,
            scheduledFor: nextFeedTime,
            levainId,
            requiresInteraction: true,
            actionUrl: '/mylab#levains',
        });
    }, [scheduleNotification]);

    const scheduleFoldingReminders = useCallback(async (batchId: string, foldTimes: Date[]) => {
        for (let i = 0; i < foldTimes.length; i++) {
            await scheduleNotification({
                type: NotificationType.FOLD_REMINDER,
                priority: NotificationPriority.MEDIUM,
                title: `Fold #${i + 1} Reminder`,
                body: 'Time to perform a fold on your dough',
                scheduledFor: foldTimes[i].toISOString(),
                batchId,
                vibrate: [200, 100, 200],
                actionUrl: `/mylab#batch-${batchId}`,
            });
        }
    }, [scheduleNotification]);

    const testNotification = useCallback(async () => {
        if (permissionStatus !== 'granted') {
            await requestPermission();
        }

        if (serviceWorkerRegistration) {
            serviceWorkerRegistration.active?.postMessage({ type: 'TEST_NOTIFICATION' });
        } else {
            new Notification('DoughLabPro Test', {
                body: 'Notifications are working! 🍕',
                icon: '/icons/notification-icon.png',
                });
        }
    }, [permissionStatus, requestPermission, serviceWorkerRegistration]);

    const clearHistory = useCallback(async () => {
        const pending = scheduledNotifications.filter(n => n.status === 'PENDING');
        setScheduledNotifications(pending);
        localStorage.setItem('doughlabpro_scheduled_notifications', JSON.stringify(pending));
    }, [scheduledNotifications]);

    const value: NotificationContextType = {
        settings,
        updateSettings,
        permissionStatus,
        requestPermission,
        scheduledNotifications,
        scheduleNotification,
        cancelNotification,
        cancelAllNotifications,
        activeTimers,
        startTimer,
        pauseTimer,
        resumeTimer,
        stopTimer,
        scheduleRecipeNotifications,
        scheduleLevainReminder,
        scheduleFoldingReminders,
        testNotification,
        clearHistory,
    };

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotifications = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotifications must be used within NotificationProvider');
    }
    return context;
};
