import React from 'react';
import { useNotifications } from '../../contexts/NotificationContext';
import { ScheduledNotification, NotificationPriority } from '../../types/notifications';
import { Bell, Clock, X, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const getPriorityColor = (priority: NotificationPriority): string => {
    switch (priority) {
        case NotificationPriority.URGENT:
            return 'border-red-500 bg-red-50 dark:bg-red-900/20';
        case NotificationPriority.HIGH:
            return 'border-orange-500 bg-orange-50 dark:bg-orange-900/20';
        case NotificationPriority.MEDIUM:
            return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
        case NotificationPriority.LOW:
        default:
            return 'border-blue-500 bg-blue-50 dark:bg-blue-900/20';
    }
};

const getPriorityIcon = (priority: NotificationPriority) => {
    switch (priority) {
        case NotificationPriority.URGENT:
            return <AlertCircle className="w-5 h-5 text-red-600" />;
        case NotificationPriority.HIGH:
            return <AlertTriangle className="w-5 h-5 text-orange-600" />;
        case NotificationPriority.MEDIUM:
            return <Bell className="w-5 h-5 text-yellow-600" />;
        case NotificationPriority.LOW:
        default:
            return <Info className="w-5 h-5 text-blue-600" />;
    }
};

const getStatusBadge = (status: ScheduledNotification['status']): React.ReactElement => {
    const badges = {
        PENDING: <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Pending</span>,
        SENT: <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Sent</span>,
        CANCELLED: <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">Cancelled</span>,
        FAILED: <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Failed</span>,
    };
    return badges[status];
};

interface NotificationItemProps {
    notification: ScheduledNotification;
    onCancel: (id: string) => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ notification, onCancel }) => {
    const scheduledDate = new Date(notification.scheduledFor);
    const now = new Date();
    const isPast = scheduledDate < now;
    const timeUntil = scheduledDate.getTime() - now.getTime();
    const hoursUntil = Math.floor(timeUntil / (1000 * 60 * 60));
    const minutesUntil = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));

    const formatTimeUntil = (): string => {
        if (isPast) return 'Past due';
        if (hoursUntil > 24) {
            const days = Math.floor(hoursUntil / 24);
            return `in ${days} day${days > 1 ? 's' : ''}`;
        }
        if (hoursUntil > 0) {
            return `in ${hoursUntil}h ${minutesUntil}m`;
        }
        return `in ${minutesUntil}m`;
    };

    return (
        <div className={`border-l-4 rounded-lg p-4 ${getPriorityColor(notification.priority)}`}>
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                    <div className="mt-1">
                        {getPriorityIcon(notification.priority)}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white truncate">
                                {notification.title}
                            </h4>
                            {getStatusBadge(notification.status)}
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                            {notification.body}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{scheduledDate.toLocaleString()}</span>
                            </div>
                            {notification.status === 'PENDING' && !isPast && (
                                <span className="font-medium text-green-600 dark:text-green-400">
                                    {formatTimeUntil()}
                                </span>
                            )}
                        </div>
                        {notification.batchId && (
                            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                Batch: {notification.batchId}
                            </div>
                        )}
                    </div>
                </div>
                {notification.status === 'PENDING' && (
                    <button
                        onClick={() => onCancel(notification.id)}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                        title="Cancel notification"
                    >
                        <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                )}
            </div>
        </div>
    );
};

export const NotificationList: React.FC = () => {
    const { scheduledNotifications, cancelNotification, clearHistory } = useNotifications();

    const pendingNotifications = scheduledNotifications.filter(n => n.status === 'PENDING');
    const pastNotifications = scheduledNotifications.filter(n => n.status !== 'PENDING');

    return (
        <div className="space-y-6">
            {/* Pending Notifications */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Bell className="w-6 h-6 text-green-600" />
                        Upcoming Notifications
                        {pendingNotifications.length > 0 && (
                            <span className="ml-2 px-2 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                {pendingNotifications.length}
                            </span>
                        )}
                    </h2>
                </div>

                {pendingNotifications.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Bell className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-600 dark:text-gray-400">No upcoming notifications</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                            Start a timer or schedule a recipe to receive notifications
                        </p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {pendingNotifications
                            .sort((a, b) => new Date(a.scheduledFor).getTime() - new Date(b.scheduledFor).getTime())
                            .map((notification) => (
                                <NotificationItem
                                    key={notification.id}
                                    notification={notification}
                                    onCancel={cancelNotification}
                                />
                            ))}
                    </div>
                )}
            </div>

            {/* Past Notifications */}
            {pastNotifications.length > 0 && (
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            History
                        </h2>
                        <button
                            onClick={clearHistory}
                            className="text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                        >
                            Clear History
                        </button>
                    </div>
                    <div className="space-y-3">
                        {pastNotifications
                            .sort((a, b) => new Date(b.scheduledFor).getTime() - new Date(a.scheduledFor).getTime())
                            .slice(0, 10)
                            .map((notification) => (
                                <NotificationItem
                                    key={notification.id}
                                    notification={notification}
                                    onCancel={cancelNotification}
                                />
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};
