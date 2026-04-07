import React from 'react';
import { useNotifications } from '@/contexts/NotificationContext';
import { NotificationType, NotificationPriority } from '@/types/notifications';
import { Batch } from '@/types';
import { TechnicalStep } from '@/types';

/**
 * Hook to automatically schedule notifications for batch events
 */
export const useBatchNotifications = () => {
    const { scheduleNotification, scheduleFoldingReminders, startTimer } = useNotifications();

    const scheduleBatchNotifications = async (batch: Batch, steps: TechnicalStep[]) => {
        if (!batch.targetBakeTime) return;

        const bakeTime = new Date(batch.targetBakeTime);
        const notifications = [];

        // Parse steps and create notifications
        for (const step of steps) {
            if (!step.durationLabel) continue;

            // Parse duration (e.g., "2-4h", "30-60m", "12-16h")
            const durationMatch = step.durationLabel.match(/(\d+)(?:-(\d+))?([hm])/);
            if (!durationMatch) continue;

            const minDuration = parseInt(durationMatch[1]);
            const unit = durationMatch[3];
            const durationMinutes = unit === 'h' ? minDuration * 60 : minDuration;

            // Schedule notification based on phase
            switch (step.phase) {
                case 'BULK':
                    if (step.title.toLowerCase().includes('ferment')) {
                        notifications.push({
                            type: NotificationType.BULK_FERMENTATION_START,
                            priority: NotificationPriority.MEDIUM,
                            title: `Bulk Fermentation Started`,
                            body: step.title,
                            scheduledFor: new Date(Date.now()).toISOString(),
                            batchId: batch.id,
                        });

                        notifications.push({
                            type: NotificationType.BULK_FERMENTATION_COMPLETE,
                            priority: NotificationPriority.HIGH,
                            title: `Bulk Fermentation Complete!`,
                            body: `Time to check your ${batch.name}`,
                            scheduledFor: new Date(Date.now() + durationMinutes * 60 * 1000).toISOString(),
                            requiresInteraction: true,
                            batchId: batch.id,
                            actionUrl: `/mylab#batch-${batch.id}`,
                        });
                    }
                    break;

                case 'KNEAD':
                    if (step.title.toLowerCase().includes('fold')) {
                        // Schedule folding reminders every 30 minutes
                        const foldCount = 4;
                        const foldInterval = 30;
                        const foldTimes = Array.from({ length: foldCount }, (_, i) =>
                            new Date(Date.now() + (i + 1) * foldInterval * 60 * 1000)
                        );
                        await scheduleFoldingReminders(batch.id, foldTimes);
                    }
                    break;

                case 'PROOF':
                    notifications.push({
                        type: NotificationType.PROOF_START,
                        priority: NotificationPriority.MEDIUM,
                        title: `Final Proof Started`,
                        body: `${batch.name} is now proofing`,
                        scheduledFor: new Date(Date.now()).toISOString(),
                        batchId: batch.id,
                    });

                    notifications.push({
                        type: NotificationType.PROOF_COMPLETE,
                        priority: NotificationPriority.HIGH,
                        title: `Proof Complete!`,
                        body: `${batch.name} is ready to bake`,
                        scheduledFor: new Date(Date.now() + durationMinutes * 60 * 1000).toISOString(),
                        requiresInteraction: true,
                        batchId: batch.id,
                        actionUrl: `/mylab#batch-${batch.id}`,
                    });
                    break;

                case 'BAKE':
                    // Preheat notification 45 minutes before bake
                    notifications.push({
                        type: NotificationType.PREHEAT_OVEN,
                        priority: NotificationPriority.HIGH,
                        title: `Preheat Your Oven!`,
                        body: `Time to preheat for ${batch.name}`,
                        scheduledFor: new Date(bakeTime.getTime() - 45 * 60 * 1000).toISOString(),
                        requiresInteraction: true,
                        batchId: batch.id,
                    });

                    notifications.push({
                        type: NotificationType.READY_TO_BAKE,
                        priority: NotificationPriority.URGENT,
                        title: `Ready to Bake!`,
                        body: `${batch.name} - Oven should be ready`,
                        scheduledFor: bakeTime.toISOString(),
                        requiresInteraction: true,
                        batchId: batch.id,
                        actionUrl: `/mylab#batch-${batch.id}`,
                    });
                    break;
            }
        }

        // Schedule all notifications
        for (const notif of notifications) {
            await scheduleNotification(notif);
        }
    };

    const startBulkFermentationTimer = async (batch: Batch, durationMinutes: number) => {
        const now = new Date();
        const end = new Date(now.getTime() + durationMinutes * 60 * 1000);

        await startTimer({
            name: `${batch.name} - Bulk Fermentation`,
            type: NotificationType.BULK_FERMENTATION_COMPLETE,
            durationMinutes,
            startTime: now.toISOString(),
            endTime: end.toISOString(),
            batchId: batch.id,
            notifications: {
                atStart: true,
                atHalfway: true,
                atEnd: true,
                customMinutesBefore: [30, 15],
            },
        });
    };

    const startProofTimer = async (batch: Batch, durationMinutes: number) => {
        const now = new Date();
        const end = new Date(now.getTime() + durationMinutes * 60 * 1000);

        await startTimer({
            name: `${batch.name} - Final Proof`,
            type: NotificationType.PROOF_COMPLETE,
            durationMinutes,
            startTime: now.toISOString(),
            endTime: end.toISOString(),
            batchId: batch.id,
            notifications: {
                atHalfway: true,
                atEnd: true,
                customMinutesBefore: [15],
            },
        });
    };

    return {
        scheduleBatchNotifications,
        startBulkFermentationTimer,
        startProofTimer,
    };
};

/**
 * Hook to schedule levain feeding reminders
 */
export const useLevainNotifications = () => {
    const { scheduleLevainReminder, scheduleNotification } = useNotifications();

    const scheduleNextFeeding = async (levainId: string, levainName: string, intervalHours: number) => {
        await scheduleLevainReminder(levainId, intervalHours);
    };

    const scheduleLevainReadyNotification = async (levainId: string, levainName: string, hoursUntilReady: number) => {
        await scheduleNotification({
            type: NotificationType.LEVAIN_READY,
            priority: NotificationPriority.MEDIUM,
            title: `${levainName} is Ready!`,
            body: `Your levain has peaked and is ready to use`,
            scheduledFor: new Date(Date.now() + hoursUntilReady * 60 * 60 * 1000).toISOString(),
            levainId,
            actionUrl: `/mylab/levain/detail?id=${levainId}`,
        });
    };

    const checkOverdueFeeding = async (levainId: string, levainName: string, lastFeedingDate: string, idealIntervalHours: number) => {
        const lastFeeding = new Date(lastFeedingDate);
        const now = new Date();
        const hoursSinceFeeding = (now.getTime() - lastFeeding.getTime()) / (1000 * 60 * 60);

        if (hoursSinceFeeding > idealIntervalHours * 1.5) {
            await scheduleNotification({
                type: NotificationType.LEVAIN_OVERDUE,
                priority: NotificationPriority.URGENT,
                title: `${levainName} Needs Feeding!`,
                body: `It's been ${Math.floor(hoursSinceFeeding)} hours since last feeding`,
                scheduledFor: new Date().toISOString(),
                requiresInteraction: true,
                levainId,
                actionUrl: `/mylab/levain/detail?id=${levainId}`,
            });
        }
    };

    return {
        scheduleNextFeeding,
        scheduleLevainReadyNotification,
        checkOverdueFeeding,
    };
};

/**
 * Component to display notification badge
 */
export const NotificationBadge: React.FC<{ count: number }> = ({ count }) => {
    if (count === 0) return null;

    return (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            {count > 9 ? '9+' : count}
        </span>
    );
};
