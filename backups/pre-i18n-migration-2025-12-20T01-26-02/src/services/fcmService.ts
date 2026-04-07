import { getMessaging, getToken, onMessage, deleteToken } from 'firebase/messaging';
import { doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/db';

const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY;

export interface FCMToken {
    token: string;
    userId: string;
    deviceId: string;
    platform: 'web' | 'ios' | 'android';
    createdAt: string;
    lastUsed: string;
}

export interface PushNotificationPayload {
    title: string;
    body: string;
    icon?: string;
    badge?: string;
    image?: string;
    data?: Record<string, any>;
    actions?: Array<{
        action: string;
        title: string;
        icon?: string;
    }>;
}

/**
 * Firebase Cloud Messaging Service
 * Handles push notifications across devices
 */
export class FCMService {
    private messaging: any;
    private currentToken: string | null = null;

    constructor() {
        try {
            this.messaging = getMessaging();
        } catch (error) {
            console.error('Failed to initialize FCM:', error);
        }
    }

    /**
     * Request permission and get FCM token
     */
    async requestPermissionAndGetToken(userId: string): Promise<string | null> {
        try {
            const permission = await Notification.requestPermission();

            if (permission !== 'granted') {
                console.log('Notification permission denied');
                return null;
            }

            const token = await getToken(this.messaging, { vapidKey: VAPID_KEY });

            if (token) {
                this.currentToken = token;
                await this.saveTokenToFirestore(token, userId);
                return token;
            }

            return null;
        } catch (error) {
            console.error('Error getting FCM token:', error);
            return null;
        }
    }

    /**
     * Save FCM token to Firestore for multi-device sync
     */
    private async saveTokenToFirestore(token: string, userId: string): Promise<void> {
        try {
            const deviceId = this.getDeviceId();
            const tokenData: FCMToken = {
                token,
                userId,
                deviceId,
                platform: 'web',
                createdAt: new Date().toISOString(),
                lastUsed: new Date().toISOString(),
            };

            await setDoc(doc(db, 'fcmTokens', deviceId), tokenData);
            console.log('FCM token saved to Firestore');
        } catch (error) {
            console.error('Error saving FCM token:', error);
        }
    }

    /**
     * Get all tokens for a user (multi-device)
     */
    async getUserTokens(userId: string): Promise<FCMToken[]> {
        try {
            const tokensRef = collection(db, 'fcmTokens');
            const q = query(tokensRef, where('userId', '==', userId));
            const snapshot = await getDocs(q);

            return snapshot.docs.map(doc => doc.data() as FCMToken);
        } catch (error) {
            console.error('Error getting user tokens:', error);
            return [];
        }
    }

    /**
     * Update last used timestamp for token
     */
    async updateTokenLastUsed(deviceId: string): Promise<void> {
        try {
            await updateDoc(doc(db, 'fcmTokens', deviceId), {
                lastUsed: new Date().toISOString(),
            });
        } catch (error) {
            console.error('Error updating token last used:', error);
        }
    }

    /**
     * Delete FCM token (logout/unsubscribe)
     */
    async deleteCurrentToken(): Promise<void> {
        try {
            if (this.currentToken) {
                await deleteToken(this.messaging);
                const deviceId = this.getDeviceId();
                await setDoc(doc(db, 'fcmTokens', deviceId), { deleted: true }, { merge: true });
                this.currentToken = null;
            }
        } catch (error) {
            console.error('Error deleting FCM token:', error);
        }
    }

    /**
     * Listen for foreground messages
     */
    onForegroundMessage(callback: (payload: any) => void): () => void {
        if (!this.messaging) return () => { };

        return onMessage(this.messaging, (payload) => {
            console.log('Foreground message received:', payload);
            callback(payload);
        });
    }

    /**
     * Send notification to specific user (all devices)
     */
    async sendToUser(userId: string, payload: PushNotificationPayload): Promise<void> {
        try {
            const tokens = await this.getUserTokens(userId);

            if (tokens.length === 0) {
                console.log('No tokens found for user');
                return;
            }

            // Call Cloud Function to send notification
            const response = await fetch('/api/sendNotification', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tokens: tokens.map(t => t.token),
                    payload,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send notification');
            }

            console.log('Notification sent to all user devices');
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    }

    /**
     * Send notification to specific device
     */
    async sendToDevice(deviceId: string, payload: PushNotificationPayload): Promise<void> {
        try {
            const tokenDoc = await getDoc(doc(db, 'fcmTokens', deviceId));

            if (!tokenDoc.exists()) {
                console.log('Token not found for device');
                return;
            }

            const tokenData = tokenDoc.data() as FCMToken;

            const response = await fetch('/api/sendNotification', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tokens: [tokenData.token],
                    payload,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send notification');
            }

            await this.updateTokenLastUsed(deviceId);
            console.log('Notification sent to device');
        } catch (error) {
            console.error('Error sending notification to device:', error);
        }
    }

    /**
     * Get unique device ID
     */
    private getDeviceId(): string {
        let deviceId = localStorage.getItem('deviceId');

        if (!deviceId) {
            deviceId = `web_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            localStorage.setItem('deviceId', deviceId);
        }

        return deviceId;
    }

    /**
     * Check if FCM is supported
     */
    isSupported(): boolean {
        return 'Notification' in window && 'serviceWorker' in navigator && !!this.messaging;
    }

    /**
     * Get current token
     */
    getCurrentToken(): string | null {
        return this.currentToken;
    }
}

// Singleton instance
export const fcmService = new FCMService();
