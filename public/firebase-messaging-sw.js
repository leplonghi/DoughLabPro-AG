/**
 * Firebase Cloud Messaging Service Worker
 * Handles background notifications, actions, and sync
 */

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Initialize Firebase
firebase.initializeApp({
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
});

const messaging = firebase.messaging();

const CACHE_NAME = 'doughlabpro-notifications-v2';
const NOTIFICATION_ICON = '/icons/notification-icon.png';
const NOTIFICATION_BADGE = '/icons/notification-badge.png';

// Install event
self.addEventListener('install', (event) => {
    console.log('[SW] Installing FCM service worker');
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating FCM service worker');
    event.waitUntil(self.clients.claim());
});

// Handle background messages from FCM
messaging.onBackgroundMessage((payload) => {
    console.log('[SW] Background message received:', payload);

    const notificationTitle = payload.notification?.title || 'DoughLabPro';
    const notificationOptions = {
        body: payload.notification?.body || 'You have a new notification',
        icon: payload.notification?.icon || NOTIFICATION_ICON,
        badge: payload.notification?.badge || NOTIFICATION_BADGE,
        data: payload.data || {},
        requireInteraction: payload.data?.requiresInteraction === 'true',
        vibrate: payload.data?.vibrate ? JSON.parse(payload.data.vibrate) : [200, 100, 200],
        tag: payload.data?.type || 'general',
        image: payload.notification?.image,
        actions: getNotificationActions(payload.data?.type),
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

/**
 * Get quick actions based on notification type
 */
function getNotificationActions(type) {
    const actions = {
        BULK_FERMENTATION_COMPLETE: [
            { action: 'view', title: '👀 View', icon: '/icons/view.png' },
            { action: 'snooze', title: '⏰ Snooze 15min', icon: '/icons/snooze.png' },
            { action: 'dismiss', title: '✖️ Dismiss', icon: '/icons/dismiss.png' },
        ],
        FOLD_REMINDER: [
            { action: 'done', title: '✅ Done', icon: '/icons/check.png' },
            { action: 'snooze', title: '⏰ Snooze 10min', icon: '/icons/snooze.png' },
        ],
        PROOF_COMPLETE: [
            { action: 'view', title: '👀 View Batch', icon: '/icons/view.png' },
            { action: 'preheat', title: '🔥 Start Preheat', icon: '/icons/oven.png' },
            { action: 'snooze', title: '⏰ Snooze 15min', icon: '/icons/snooze.png' },
        ],
        LEVAIN_FEED_REMINDER: [
            { action: 'fed', title: '✅ Fed', icon: '/icons/check.png' },
            { action: 'snooze', title: '⏰ Snooze 1h', icon: '/icons/snooze.png' },
        ],
        PREHEAT_OVEN: [
            { action: 'preheating', title: '🔥 Preheating', icon: '/icons/oven.png' },
            { action: 'snooze', title: '⏰ Snooze 10min', icon: '/icons/snooze.png' },
        ],
        READY_TO_BAKE: [
            { action: 'baking', title: '🍕 Baking Now', icon: '/icons/pizza.png' },
            { action: 'snooze', title: '⏰ Snooze 5min', icon: '/icons/snooze.png' },
        ],
    };

    return actions[type] || [
        { action: 'view', title: '👀 View', icon: '/icons/view.png' },
        { action: 'dismiss', title: '✖️ Dismiss', icon: '/icons/dismiss.png' },
    ];
}

/**
 * Handle notification click
 */
self.addEventListener('notificationclick', (event) => {
    console.log('[SW] Notification clicked:', event);

    event.notification.close();

    const action = event.action;
    const data = event.notification.data;

    // Handle quick actions
    if (action === 'snooze') {
        handleSnooze(data);
        return;
    }

    if (action === 'done' || action === 'fed' || action === 'preheating' || action === 'baking') {
        handleQuickAction(action, data);
        return;
    }

    if (action === 'preheat') {
        handlePreheatAction(data);
        return;
    }

    // Default action: open app
    const urlToOpen = data.actionUrl || '/notifications';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then((clientList) => {
                // Check if there's already a window open
                for (const client of clientList) {
                    if (client.url.includes(self.location.origin) && 'focus' in client) {
                        return client.focus().then(client => {
                            if (urlToOpen !== '/notifications') {
                                return client.navigate(urlToOpen);
                            }
                            return client;
                        });
                    }
                }
                // If no window is open, open a new one
                if (clients.openWindow) {
                    return clients.openWindow(urlToOpen);
                }
            })
            .then(() => {
                // Track analytics
                trackNotificationClick(data);
            })
    );
});

/**
 * Handle snooze action
 */
async function handleSnooze(data) {
    const snoozeMinutes = {
        BULK_FERMENTATION_COMPLETE: 15,
        FOLD_REMINDER: 10,
        PROOF_COMPLETE: 15,
        LEVAIN_FEED_REMINDER: 60,
        PREHEAT_OVEN: 10,
        READY_TO_BAKE: 5,
    };

    const minutes = snoozeMinutes[data.type] || 15;
    const snoozeTime = new Date(Date.now() + minutes * 60 * 1000);

    // Send message to all clients to reschedule
    const clients = await self.clients.matchAll();
    clients.forEach(client => {
        client.postMessage({
            type: 'SNOOZE_NOTIFICATION',
            data: {
                ...data,
                scheduledFor: snoozeTime.toISOString(),
            },
        });
    });

    // Show confirmation
    self.registration.showNotification('Snoozed', {
        body: `Reminder set for ${minutes} minutes`,
        icon: NOTIFICATION_ICON,
        badge: NOTIFICATION_BADGE,
        tag: 'snooze-confirmation',
        requireInteraction: false,
    });

    trackNotificationAction(data, 'snooze', { minutes });
}

/**
 * Handle quick actions (done, fed, etc.)
 */
async function handleQuickAction(action, data) {
    const clients = await self.clients.matchAll();
    clients.forEach(client => {
        client.postMessage({
            type: 'QUICK_ACTION',
            action,
            data,
        });
    });

    const messages = {
        done: 'Marked as done ✅',
        fed: 'Levain fed ✅',
        preheating: 'Oven preheating 🔥',
        baking: 'Baking started 🍕',
    };

    self.registration.showNotification('Action Completed', {
        body: messages[action] || 'Action completed',
        icon: NOTIFICATION_ICON,
        badge: NOTIFICATION_BADGE,
        tag: 'action-confirmation',
        requireInteraction: false,
    });

    trackNotificationAction(data, action);
}

/**
 * Handle preheat action
 */
async function handlePreheatAction(data) {
    const clients = await self.clients.matchAll();
    clients.forEach(client => {
        client.postMessage({
            type: 'START_PREHEAT_TIMER',
            data,
        });
    });

    self.registration.showNotification('Preheat Timer Started', {
        body: 'Oven preheat timer started (45 minutes)',
        icon: NOTIFICATION_ICON,
        badge: NOTIFICATION_BADGE,
        tag: 'preheat-confirmation',
        requireInteraction: false,
    });

    trackNotificationAction(data, 'preheat');
}

/**
 * Handle notification close
 */
self.addEventListener('notificationclose', (event) => {
    console.log('[SW] Notification closed:', event);
    trackNotificationAction(event.notification.data, 'dismissed');
});

/**
 * Track notification click analytics
 */
async function trackNotificationClick(data) {
    try {
        await fetch('/api/trackNotificationEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                notificationId: data.notificationId,
                event: 'clicked',
                metadata: {
                    type: data.type,
                    timestamp: new Date().toISOString(),
                },
            }),
        });
    } catch (error) {
        console.error('Failed to track notification click:', error);
    }
}

/**
 * Track notification action analytics
 */
async function trackNotificationAction(data, action, metadata = {}) {
    try {
        await fetch('/api/trackNotificationEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                notificationId: data.notificationId,
                event: action,
                metadata: {
                    type: data.type,
                    ...metadata,
                    timestamp: new Date().toISOString(),
                },
            }),
        });
    } catch (error) {
        console.error('Failed to track notification action:', error);
    }
}

/**
 * Handle sync events for multi-device
 */
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-notifications') {
        event.waitUntil(syncNotifications());
    }
});

/**
 * Sync notifications across devices
 */
async function syncNotifications() {
    try {
        const response = await fetch('/api/syncNotifications');
        const data = await response.json();

        // Update local state
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
            client.postMessage({
                type: 'SYNC_NOTIFICATIONS',
                data,
            });
        });
    } catch (error) {
        console.error('Failed to sync notifications:', error);
    }
}

/**
 * Handle messages from the app
 */
self.addEventListener('message', (event) => {
    console.log('[SW] Message received:', event.data);

    if (event.data.type === 'SCHEDULE_NOTIFICATION') {
        scheduleNotification(event.data.payload);
    } else if (event.data.type === 'CANCEL_NOTIFICATION') {
        cancelNotification(event.data.notificationId);
    } else if (event.data.type === 'TEST_NOTIFICATION') {
        showTestNotification();
    } else if (event.data.type === 'SYNC_REQUEST') {
        syncNotifications();
    }
});

/**
 * Schedule a notification
 */
function scheduleNotification(payload) {
    const { scheduledFor, ...notificationData } = payload;
    const scheduledTime = new Date(scheduledFor).getTime();
    const now = Date.now();
    const delay = scheduledTime - now;

    if (delay > 0) {
        setTimeout(() => {
            self.registration.showNotification(notificationData.title, {
                body: notificationData.body,
                icon: notificationData.icon || NOTIFICATION_ICON,
                badge: notificationData.badge || NOTIFICATION_BADGE,
                data: notificationData.data,
                requireInteraction: notificationData.requiresInteraction || false,
                vibrate: notificationData.vibrate || [200, 100, 200],
                tag: notificationData.type || 'scheduled',
                image: notificationData.image,
                actions: getNotificationActions(notificationData.type),
            });
        }, delay);
    }
}

/**
 * Cancel a scheduled notification
 */
async function cancelNotification(notificationId) {
    const notifications = await self.registration.getNotifications({ tag: notificationId });
    notifications.forEach(notification => notification.close());
}

/**
 * Show a test notification
 */
function showTestNotification() {
    self.registration.showNotification('DoughLabPro Test', {
        body: 'Push notifications are working! 🍕',
        icon: NOTIFICATION_ICON,
        badge: NOTIFICATION_BADGE,
        vibrate: [200, 100, 200, 100, 200],
        tag: 'test',
        actions: [
            { action: 'view', title: '👀 View' },
            { action: 'dismiss', title: '✖️ Dismiss' },
        ],
    });
}
