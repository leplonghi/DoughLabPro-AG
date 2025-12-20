/**
 * Service Worker for DoughLabPro Push Notifications
 * Handles background notifications for timers, fermentation, and baking events
 */

const CACHE_NAME = 'doughlabpro-notifications-v1';
const NOTIFICATION_ICON = '/icons/notification-icon.png';
const NOTIFICATION_BADGE = '/icons/notification-badge.png';

// Install event
self.addEventListener('install', (event) => {
    console.log('[SW] Installing notification service worker');
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating notification service worker');
    event.waitUntil(self.clients.claim());
});

// Push event - handle incoming push notifications
self.addEventListener('push', (event) => {
    console.log('[SW] Push notification received', event);

    let notificationData = {
        title: 'DoughLabPro',
        body: 'You have a new notification',
        icon: NOTIFICATION_ICON,
        badge: NOTIFICATION_BADGE,
    };

    if (event.data) {
        try {
            const data = event.data.json();
            notificationData = {
                title: data.title || notificationData.title,
                body: data.body || notificationData.body,
                icon: data.icon || notificationData.icon,
                badge: data.badge || notificationData.badge,
                data: data.data || {},
                requireInteraction: data.requiresInteraction || false,
                vibrate: data.vibrate || [200, 100, 200],
                tag: data.type || 'general',
                image: data.image,
            };
        } catch (error) {
            console.error('[SW] Error parsing push data:', error);
        }
    }

    event.waitUntil(
        self.registration.showNotification(notificationData.title, notificationData)
    );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
    console.log('[SW] Notification clicked', event);

    event.notification.close();

    const urlToOpen = event.notification.data?.actionUrl || '/';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then((clientList) => {
                // Check if there's already a window open
                for (const client of clientList) {
                    if (client.url.includes(self.location.origin) && 'focus' in client) {
                        return client.focus().then(client => {
                            if (urlToOpen !== '/') {
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
    );
});

// Handle notification close
self.addEventListener('notificationclose', (event) => {
    console.log('[SW] Notification closed', event);

    // Track notification dismissal if needed
    const notification = event.notification;
    const data = notification.data;

    // Could send analytics here
    if (data?.trackDismissal) {
        // Send to analytics endpoint
    }
});

// Message event - handle messages from the main app
self.addEventListener('message', (event) => {
    console.log('[SW] Message received', event.data);

    if (event.data.type === 'SCHEDULE_NOTIFICATION') {
        scheduleNotification(event.data.payload);
    } else if (event.data.type === 'CANCEL_NOTIFICATION') {
        cancelNotification(event.data.notificationId);
    } else if (event.data.type === 'TEST_NOTIFICATION') {
        showTestNotification();
    }
});

/**
 * Schedule a notification to be shown at a specific time
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
        body: 'Notifications are working! 🍕',
        icon: NOTIFICATION_ICON,
        badge: NOTIFICATION_BADGE,
        vibrate: [200, 100, 200, 100, 200],
        tag: 'test',
    });
}
