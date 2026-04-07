import React from 'react';
import { useBatchNotifications } from '@/hooks/useNotificationIntegration';
import { Batch, TechnicalStep } from '@/types';
import { Clock, Bell, Play } from 'lucide-react';

interface BatchTimerActionsProps {
    batch: Batch;
    steps?: TechnicalStep[];
}

export const BatchTimerActions: React.FC<BatchTimerActionsProps> = ({ batch, steps = [] }) => {
    const { startBulkFermentationTimer, startProofTimer, scheduleBatchNotifications } = useBatchNotifications();
    const [loading, setLoading] = React.useState(false);

    const handleStartBulkTimer = async () => {
        setLoading(true);
        try {
            // Default 4 hours bulk fermentation
            await startBulkFermentationTimer(batch, 240);
        } catch (error) {
            console.error('Failed to start bulk fermentation timer:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleStartProofTimer = async () => {
        setLoading(true);
        try {
            // Default 3 hours proof
            await startProofTimer(batch, 180);
        } catch (error) {
            console.error('Failed to start proof timer:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleScheduleAll = async () => {
        if (!steps.length) return;

        setLoading(true);
        try {
            await scheduleBatchNotifications(batch, steps);
        } catch (error) {
            console.error('Failed to schedule batch notifications:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-3">
            <div className="flex items-center gap-2 mb-3">
                <Bell className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Timer Actions</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                    onClick={handleStartBulkTimer}
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Play className="w-4 h-4" />
                    <span className="font-medium">Start Bulk (4h)</span>
                </button>

                <button
                    onClick={handleStartProofTimer}
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Play className="w-4 h-4" />
                    <span className="font-medium">Start Proof (3h)</span>
                </button>
            </div>

            {steps.length > 0 && (
                <button
                    onClick={handleScheduleAll}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">Schedule All Notifications</span>
                </button>
            )}

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Timers will send notifications at key moments
            </p>
        </div>
    );
};
