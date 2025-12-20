import React, { useState } from 'react';
import { useLevainNotifications } from '@/hooks/useNotificationIntegration';
import { Levain } from '@/types';
import { Bell, Clock, AlertCircle } from 'lucide-react';

interface LevainNotificationCardProps {
    levain: Levain;
}

export const LevainNotificationCard: React.FC<LevainNotificationCardProps> = ({ levain }) => {
    const { scheduleNextFeeding, scheduleLevainReadyNotification, checkOverdueFeeding } = useLevainNotifications();
    const [customHours, setCustomHours] = useState(levain.idealFeedingIntervalHours || 12);
    const [loading, setLoading] = useState(false);

    const handleScheduleFeeding = async () => {
        setLoading(true);
        try {
            await scheduleNextFeeding(levain.id, levain.name, customHours);
        } catch (error) {
            console.error('Failed to schedule feeding reminder:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleScheduleReady = async () => {
        setLoading(true);
        try {
            // Levain typically peaks 4-6 hours after feeding
            await scheduleLevainReadyNotification(levain.id, levain.name, 5);
        } catch (error) {
            console.error('Failed to schedule ready notification:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCheckOverdue = async () => {
        if (!levain.idealFeedingIntervalHours) return;

        setLoading(true);
        try {
            await checkOverdueFeeding(
                levain.id,
                levain.name,
                levain.lastFeeding,
                levain.idealFeedingIntervalHours
            );
        } catch (error) {
            console.error('Failed to check overdue feeding:', error);
        } finally {
            setLoading(false);
        }
    };

    const hoursSinceFeeding = levain.lastFeeding
        ? Math.floor((Date.now() - new Date(levain.lastFeeding).getTime()) / (1000 * 60 * 60))
        : 0;

    const isOverdue = levain.idealFeedingIntervalHours
        ? hoursSinceFeeding > levain.idealFeedingIntervalHours * 1.5
        : false;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Feeding Reminders</h3>
                </div>
                {isOverdue && (
                    <span className="flex items-center gap-1 text-xs font-medium text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-full">
                        <AlertCircle className="w-3 h-3" />
                        Overdue
                    </span>
                )}
            </div>

            {levain.lastFeeding && (
                <div className="text-sm text-gray-600 dark:text-gray-400">
                    Last fed: {hoursSinceFeeding}h ago
                </div>
            )}

            <div className="space-y-3">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Feeding Interval (hours)
                    </label>
                    <input
                        type="number"
                        min="4"
                        max="48"
                        value={customHours}
                        onChange={(e) => setCustomHours(parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                </div>

                <button
                    onClick={handleScheduleFeeding}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">Schedule Next Feeding</span>
                </button>

                <button
                    onClick={handleScheduleReady}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Bell className="w-4 h-4" />
                    <span className="font-medium">Notify When Ready (5h)</span>
                </button>

                {levain.idealFeedingIntervalHours && (
                    <button
                        onClick={handleCheckOverdue}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <AlertCircle className="w-4 h-4" />
                        <span className="font-medium">Check if Overdue</span>
                    </button>
                )}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <p className="text-xs text-blue-800 dark:text-blue-200">
                    💡 <strong>Tip:</strong> Enable notifications in settings to receive feeding reminders even when the app is closed.
                </p>
            </div>
        </div>
    );
};
