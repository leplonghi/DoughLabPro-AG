"use strict";
/**
 * Firebase Cloud Function for sending push notifications
 * Deploy with: firebase deploy --only functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackNotificationEvent = exports.syncNotificationState = exports.processScheduledNotifications = exports.scheduleNotification = exports.sendNotification = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
/**
 * Send push notification to multiple devices
 */
exports.sendNotification = functions.https.onCall(async (data, context) => {
    var _a, _b, _c;
    // Verify authentication
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
    }
    const { tokens, payload } = data;
    if (!tokens || tokens.length === 0) {
        throw new functions.https.HttpsError('invalid-argument', 'No tokens provided');
    }
    try {
        const message = {
            tokens,
            notification: {
                title: payload.title,
                body: payload.body,
                imageUrl: payload.image,
            },
            data: payload.data || {},
            webpush: {
                notification: {
                    icon: payload.icon || '/icons/notification-icon.png',
                    badge: payload.badge || '/icons/notification-badge.png',
                    requireInteraction: ((_a = payload.data) === null || _a === void 0 ? void 0 : _a.requiresInteraction) === 'true',
                    vibrate: ((_b = payload.data) === null || _b === void 0 ? void 0 : _b.vibrate) ? JSON.parse(payload.data.vibrate) : [200, 100, 200],
                    actions: payload.actions,
                },
                fcmOptions: {
                    link: ((_c = payload.data) === null || _c === void 0 ? void 0 : _c.actionUrl) || '/',
                },
            },
        };
        const response = await admin.messaging().sendMulticast(message);
        console.log(`Successfully sent ${response.successCount} messages`);
        // Handle failed tokens
        if (response.failureCount > 0) {
            const failedTokens = [];
            response.responses.forEach((resp, idx) => {
                if (!resp.success) {
                    failedTokens.push(tokens[idx]);
                    console.error(`Failed to send to token ${tokens[idx]}:`, resp.error);
                }
            });
            // Remove invalid tokens from Firestore
            await cleanupInvalidTokens(failedTokens);
        }
        return {
            success: true,
            successCount: response.successCount,
            failureCount: response.failureCount,
        };
    }
    catch (error) {
        console.error('Error sending notification:', error);
        throw new functions.https.HttpsError('internal', 'Failed to send notification');
    }
});
/**
 * Schedule notification to be sent at a specific time
 */
exports.scheduleNotification = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
    }
    const { userId, notification, scheduledFor } = data;
    try {
        // Save to Firestore scheduled notifications collection
        await admin.firestore().collection('scheduledNotifications').add({
            userId,
            notification,
            scheduledFor,
            status: 'PENDING',
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });
        return { success: true };
    }
    catch (error) {
        console.error('Error scheduling notification:', error);
        throw new functions.https.HttpsError('internal', 'Failed to schedule notification');
    }
});
/**
 * Process scheduled notifications (runs every minute)
 */
exports.processScheduledNotifications = functions.pubsub
    .schedule('every 1 minutes')
    .onRun(async (context) => {
    const now = new Date();
    const db = admin.firestore();
    try {
        const snapshot = await db
            .collection('scheduledNotifications')
            .where('status', '==', 'PENDING')
            .where('scheduledFor', '<=', now.toISOString())
            .limit(100)
            .get();
        const promises = snapshot.docs.map(async (doc) => {
            const data = doc.data();
            try {
                // Get user tokens
                const tokensSnapshot = await db
                    .collection('fcmTokens')
                    .where('userId', '==', data.userId)
                    .get();
                const tokens = tokensSnapshot.docs.map(d => d.data().token);
                if (tokens.length > 0) {
                    // Send notification
                    await admin.messaging().sendMulticast({
                        tokens,
                        notification: data.notification,
                        data: data.notification.data || {},
                    });
                    // Update status
                    await doc.ref.update({
                        status: 'SENT',
                        sentAt: admin.firestore.FieldValue.serverTimestamp(),
                    });
                    console.log(`Sent scheduled notification ${doc.id}`);
                }
                else {
                    // No tokens, mark as failed
                    await doc.ref.update({
                        status: 'FAILED',
                        error: 'No tokens found',
                    });
                }
            }
            catch (error) {
                console.error(`Error processing notification ${doc.id}:`, error);
                await doc.ref.update({
                    status: 'FAILED',
                    error: error.message,
                });
            }
        });
        await Promise.all(promises);
        console.log(`Processed ${snapshot.size} scheduled notifications`);
    }
    catch (error) {
        console.error('Error processing scheduled notifications:', error);
    }
});
/**
 * Sync notification state across devices
 */
exports.syncNotificationState = functions.firestore
    .document('users/{userId}/notifications/{notificationId}')
    .onWrite(async (change, context) => {
    const userId = context.params.userId;
    const notificationId = context.params.notificationId;
    try {
        // Get all user tokens
        const tokensSnapshot = await admin.firestore()
            .collection('fcmTokens')
            .where('userId', '==', userId)
            .get();
        const tokens = tokensSnapshot.docs.map(d => d.data().token);
        if (tokens.length === 0)
            return;
        // Send sync message to all devices
        await admin.messaging().sendMulticast({
            tokens,
            data: {
                type: 'SYNC_NOTIFICATION_STATE',
                notificationId,
                state: JSON.stringify(change.after.data()),
            },
        });
        console.log(`Synced notification state for ${notificationId}`);
    }
    catch (error) {
        console.error('Error syncing notification state:', error);
    }
});
/**
 * Clean up invalid/expired tokens
 */
async function cleanupInvalidTokens(tokens) {
    const db = admin.firestore();
    const batch = db.batch();
    for (const token of tokens) {
        const snapshot = await db.collection('fcmTokens').where('token', '==', token).get();
        snapshot.docs.forEach(doc => {
            batch.delete(doc.ref);
        });
    }
    await batch.commit();
    console.log(`Cleaned up ${tokens.length} invalid tokens`);
}
/**
 * Track notification analytics
 */
exports.trackNotificationEvent = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
    }
    const { notificationId, event, metadata } = data;
    try {
        await admin.firestore().collection('notificationAnalytics').add({
            userId: context.auth.uid,
            notificationId,
            event,
            metadata,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });
        return { success: true };
    }
    catch (error) {
        console.error('Error tracking notification event:', error);
        throw new functions.https.HttpsError('internal', 'Failed to track event');
    }
});
//# sourceMappingURL=notifications.js.map