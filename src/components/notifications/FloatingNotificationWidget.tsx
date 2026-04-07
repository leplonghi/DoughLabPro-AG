import React, { useState } from 'react';
import { useNotifications } from '@/contexts/NotificationContext';
import { useRouter } from '@/contexts/RouterContext';
import { Bell, X, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { NotificationPriority } from '@/types/notifications';
import { useTranslation } from 'react-i18next';


export const FloatingNotificationWidget: React.FC = () => {
  const { t } = useTranslation();

    const { scheduledNotifications, activeTimers, cancelNotification } = useNotifications();
    const { navigate } = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    const pendingNotifications = scheduledNotifications
        .filter(n => n.status === 'PENDING')
        .sort((a, b) => new Date(a.scheduledFor).getTime() - new Date(b.scheduledFor).getTime())
        .slice(0, 3);

    const nextNotification = pendingNotifications[0];
    const hasActiveTimers = activeTimers.length > 0;
    const hasPendingNotifications = pendingNotifications.length > 0;

    if (!hasActiveTimers && !hasPendingNotifications) {
        return null;
    }

    if (isMinimized) {
        return (
            <button
                onClick={() => setIsMinimized(false)}
                className="fixed bottom-4 right-4 z-40 flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all"
            >
                <Bell className="w-5 h-5" />
                {pendingNotifications.length > 0 && (
                    <span className="font-bold">{pendingNotifications.length}</span>
                )}
            </button>
        );
    }

    const formatTimeUntil = (scheduledFor: string): string => {
        const now = Date.now();
        const target = new Date(scheduledFor).getTime();
        const diff = target - now;

        if (diff < 0) return 'Now';

        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days}d`;
        if (hours > 0) return `${hours}h ${minutes % 60}m`;
        return `${minutes}m`;
    };

    const getPriorityColor = (priority: NotificationPriority): string => {
        switch (priority) {
            case NotificationPriority.URGENT:
                return 'border-l-red-500 bg-red-50 dark:bg-red-900/20';
            case NotificationPriority.HIGH:
                return 'border-l-orange-500 bg-orange-50 dark:bg-orange-900/20';
            case NotificationPriority.MEDIUM:
                return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
            default:
                return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20';
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-40 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700">
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-t-lg">
                <div className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {hasActiveTimers ? t('notifications.active_timers_402') : t('notifications.upcoming_403')}
                    </span>
                    {pendingNotifications.length > 0 && (
                        <span className="px-2 py-0.5 text-xs font-bold bg-green-600 text-white rounded-full">
                            {pendingNotifications.length}
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                    >
                        {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                    </button>
                    <button
                        onClick={() => setIsMinimized(true)}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="max-h-96 overflow-y-auto">
                {/* Active Timers */}
                {hasActiveTimers && (
                    <div className="p-3 space-y-2">
                        {activeTimers.slice(0, 2).map((timer) => {
                            const remaining = new Date(timer.endTime).getTime() - Date.now();
                            const progress = ((new Date(timer.endTime).getTime() - new Date(timer.startTime).getTime() - remaining) /
                                (new Date(timer.endTime).getTime() - new Date(timer.startTime).getTime())) * 100;

                            return (
                                <div key={timer.id} className="bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600 rounded-lg p-3 border-l-4 border-green-600">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium text-sm text-gray-900 dark:text-white truncate">
                                            {timer.name}
                                        </span>
                                        <Clock className="w-4 h-4 text-green-600 animate-pulse" />
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                                        <div
                                            className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                    <div className="text-xs text-gray-600 dark:text-gray-300">
                                        {formatTimeUntil(timer.endTime)} remaining
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Pending Notifications */}
                {isExpanded && hasPendingNotifications && (
                    <div className="p-3 space-y-2 border-t border-gray-200 dark:border-gray-700">
                        {pendingNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`rounded-lg p-3 border-l-4 ${getPriorityColor(notification.priority)}`}
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm text-gray-900 dark:text-white truncate">
                                            {notification.title}
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                                            {formatTimeUntil(notification.scheduledFor)}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => cancelNotification(notification.id)}
                                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors flex-shrink-0"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* View All Button */}
                <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={() => navigate('notifications')}
                        className="w-full py-2 text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                    >
                        View All Notifications →
                    </button>
                </div>
            </div>
        </div>
    );
};
