import { collection, addDoc, query, where, getDocs, Timestamp, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase/db';

export interface NotificationAnalyticsEvent {
    userId: string;
    notificationId: string;
    event: 'sent' | 'delivered' | 'clicked' | 'dismissed' | 'snoozed' | 'action_taken';
    notificationType: string;
    metadata?: Record<string, any>;
    timestamp: string;
    deviceId?: string;
    platform?: 'web' | 'ios' | 'android';
}

export interface NotificationEngagementMetrics {
    totalSent: number;
    totalDelivered: number;
    totalClicked: number;
    totalDismissed: number;
    totalSnoozed: number;
    clickThroughRate: number;
    engagementRate: number;
    averageTimeToClick?: number;
    popularActions: Array<{ action: string; count: number }>;
}

export interface NotificationTypeMetrics {
    type: string;
    sent: number;
    clicked: number;
    dismissed: number;
    snoozed: number;
    ctr: number;
    avgTimeToClick?: number;
}

/**
 * Notification Analytics Service
 * Tracks and analyzes notification engagement
 */
export class NotificationAnalyticsService {
    private userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    /**
     * Track notification event
     */
    async trackEvent(event: Omit<NotificationAnalyticsEvent, 'userId' | 'timestamp'>): Promise<void> {
        try {
            await addDoc(collection(db, 'notificationAnalytics'), {
                userId: this.userId,
                ...event,
                timestamp: new Date().toISOString(),
                deviceId: this.getDeviceId(),
                platform: 'web',
            });
        } catch (error) {
            console.error('Failed to track notification event:', error);
        }
    }

    /**
     * Track notification sent
     */
    async trackSent(notificationId: string, notificationType: string, metadata?: Record<string, any>): Promise<void> {
        await this.trackEvent({
            notificationId,
            event: 'sent',
            notificationType,
            metadata,
        });
    }

    /**
     * Track notification delivered
     */
    async trackDelivered(notificationId: string, notificationType: string): Promise<void> {
        await this.trackEvent({
            notificationId,
            event: 'delivered',
            notificationType,
        });
    }

    /**
     * Track notification clicked
     */
    async trackClicked(notificationId: string, notificationType: string, metadata?: Record<string, any>): Promise<void> {
        await this.trackEvent({
            notificationId,
            event: 'clicked',
            notificationType,
            metadata,
        });
    }

    /**
     * Track notification dismissed
     */
    async trackDismissed(notificationId: string, notificationType: string): Promise<void> {
        await this.trackEvent({
            notificationId,
            event: 'dismissed',
            notificationType,
        });
    }

    /**
     * Track notification snoozed
     */
    async trackSnoozed(notificationId: string, notificationType: string, snoozeMinutes: number): Promise<void> {
        await this.trackEvent({
            notificationId,
            event: 'snoozed',
            notificationType,
            metadata: { snoozeMinutes },
        });
    }

    /**
     * Track quick action taken
     */
    async trackAction(notificationId: string, notificationType: string, action: string): Promise<void> {
        await this.trackEvent({
            notificationId,
            event: 'action_taken',
            notificationType,
            metadata: { action },
        });
    }

    /**
     * Get engagement metrics for a time period
     */
    async getEngagementMetrics(startDate: Date, endDate: Date): Promise<NotificationEngagementMetrics> {
        try {
            const q = query(
                collection(db, 'notificationAnalytics'),
                where('userId', '==', this.userId),
                where('timestamp', '>=', startDate.toISOString()),
                where('timestamp', '<=', endDate.toISOString())
            );

            const snapshot = await getDocs(q);
            const events = snapshot.docs.map(doc => doc.data() as NotificationAnalyticsEvent);

            const sent = events.filter(e => e.event === 'sent').length;
            const delivered = events.filter(e => e.event === 'delivered').length;
            const clicked = events.filter(e => e.event === 'clicked').length;
            const dismissed = events.filter(e => e.event === 'dismissed').length;
            const snoozed = events.filter(e => e.event === 'snoozed').length;

            const clickThroughRate = delivered > 0 ? (clicked / delivered) * 100 : 0;
            const engagementRate = delivered > 0 ? ((clicked + snoozed) / delivered) * 100 : 0;

            // Calculate average time to click
            const clickEvents = events.filter(e => e.event === 'clicked');
            const sentEvents = events.filter(e => e.event === 'sent');
            let avgTimeToClick: number | undefined;

            if (clickEvents.length > 0 && sentEvents.length > 0) {
                const times: number[] = [];
                clickEvents.forEach(click => {
                    const sent = sentEvents.find(s => s.notificationId === click.notificationId);
                    if (sent) {
                        const diff = new Date(click.timestamp).getTime() - new Date(sent.timestamp).getTime();
                        times.push(diff / 1000); // Convert to seconds
                    }
                });
                avgTimeToClick = times.length > 0 ? times.reduce((a, b) => a + b, 0) / times.length : undefined;
            }

            // Get popular actions
            const actionEvents = events.filter(e => e.event === 'action_taken');
            const actionCounts = new Map<string, number>();
            actionEvents.forEach(e => {
                const action = e.metadata?.action || 'unknown';
                actionCounts.set(action, (actionCounts.get(action) || 0) + 1);
            });
            const popularActions = Array.from(actionCounts.entries())
                .map(([action, count]) => ({ action, count }))
                .sort((a, b) => b.count - a.count)
                .slice(0, 5);

            return {
                totalSent: sent,
                totalDelivered: delivered,
                totalClicked: clicked,
                totalDismissed: dismissed,
                totalSnoozed: snoozed,
                clickThroughRate,
                engagementRate,
                averageTimeToClick: avgTimeToClick,
                popularActions,
            };
        } catch (error) {
            console.error('Failed to get engagement metrics:', error);
            return {
                totalSent: 0,
                totalDelivered: 0,
                totalClicked: 0,
                totalDismissed: 0,
                totalSnoozed: 0,
                clickThroughRate: 0,
                engagementRate: 0,
                popularActions: [],
            };
        }
    }

    /**
     * Get metrics by notification type
     */
    async getMetricsByType(startDate: Date, endDate: Date): Promise<NotificationTypeMetrics[]> {
        try {
            const q = query(
                collection(db, 'notificationAnalytics'),
                where('userId', '==', this.userId),
                where('timestamp', '>=', startDate.toISOString()),
                where('timestamp', '<=', endDate.toISOString())
            );

            const snapshot = await getDocs(q);
            const events = snapshot.docs.map(doc => doc.data() as NotificationAnalyticsEvent);

            const typeMap = new Map<string, NotificationAnalyticsEvent[]>();
            events.forEach(event => {
                const type = event.notificationType;
                if (!typeMap.has(type)) {
                    typeMap.set(type, []);
                }
                typeMap.get(type)!.push(event);
            });

            const metrics: NotificationTypeMetrics[] = [];
            typeMap.forEach((events, type) => {
                const sent = events.filter(e => e.event === 'sent').length;
                const clicked = events.filter(e => e.event === 'clicked').length;
                const dismissed = events.filter(e => e.event === 'dismissed').length;
                const snoozed = events.filter(e => e.event === 'snoozed').length;
                const ctr = sent > 0 ? (clicked / sent) * 100 : 0;

                metrics.push({
                    type,
                    sent,
                    clicked,
                    dismissed,
                    snoozed,
                    ctr,
                });
            });

            return metrics.sort((a, b) => b.sent - a.sent);
        } catch (error) {
            console.error('Failed to get metrics by type:', error);
            return [];
        }
    }

    /**
     * Get most engaged notification types
     */
    async getMostEngagedTypes(limit: number = 5): Promise<Array<{ type: string; engagementRate: number }>> {
        const last30Days = new Date();
        last30Days.setDate(last30Days.getDate() - 30);

        const metrics = await this.getMetricsByType(last30Days, new Date());

        return metrics
            .map(m => ({
                type: m.type,
                engagementRate: m.sent > 0 ? ((m.clicked + m.snoozed) / m.sent) * 100 : 0,
            }))
            .sort((a, b) => b.engagementRate - a.engagementRate)
            .slice(0, limit);
    }

    /**
     * Get notification performance over time
     */
    async getPerformanceOverTime(days: number = 30): Promise<Array<{ date: string; sent: number; clicked: number; ctr: number }>> {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);

        try {
            const q = query(
                collection(db, 'notificationAnalytics'),
                where('userId', '==', this.userId),
                where('timestamp', '>=', startDate.toISOString())
            );

            const snapshot = await getDocs(q);
            const events = snapshot.docs.map(doc => doc.data() as NotificationAnalyticsEvent);

            const dailyMap = new Map<string, { sent: number; clicked: number }>();

            events.forEach(event => {
                const date = new Date(event.timestamp).toISOString().split('T')[0];
                if (!dailyMap.has(date)) {
                    dailyMap.set(date, { sent: 0, clicked: 0 });
                }
                const day = dailyMap.get(date)!;
                if (event.event === 'sent') day.sent++;
                if (event.event === 'clicked') day.clicked++;
            });

            return Array.from(dailyMap.entries())
                .map(([date, data]) => ({
                    date,
                    sent: data.sent,
                    clicked: data.clicked,
                    ctr: data.sent > 0 ? (data.clicked / data.sent) * 100 : 0,
                }))
                .sort((a, b) => a.date.localeCompare(b.date));
        } catch (error) {
            console.error('Failed to get performance over time:', error);
            return [];
        }
    }

    /**
     * Get device ID
     */
    private getDeviceId(): string {
        let deviceId = localStorage.getItem('deviceId');
        if (!deviceId) {
            deviceId = `web_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            localStorage.setItem('deviceId', deviceId);
        }
        return deviceId;
    }
}

/**
 * Hook for notification analytics
 */
export const useNotificationAnalytics = (userId: string) => {
    const analytics = new NotificationAnalyticsService(userId);

    return {
        trackSent: analytics.trackSent.bind(analytics),
        trackDelivered: analytics.trackDelivered.bind(analytics),
        trackClicked: analytics.trackClicked.bind(analytics),
        trackDismissed: analytics.trackDismissed.bind(analytics),
        trackSnoozed: analytics.trackSnoozed.bind(analytics),
        trackAction: analytics.trackAction.bind(analytics),
        getEngagementMetrics: analytics.getEngagementMetrics.bind(analytics),
        getMetricsByType: analytics.getMetricsByType.bind(analytics),
        getMostEngagedTypes: analytics.getMostEngagedTypes.bind(analytics),
        getPerformanceOverTime: analytics.getPerformanceOverTime.bind(analytics),
    };
};
