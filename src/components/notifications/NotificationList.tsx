import React from 'react';
import { useNotifications } from '../../contexts/NotificationContext';
import { ScheduledNotification, NotificationPriority } from '../../types/notifications';
import { Bell, Clock, X, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import AppSurface from '@/components/ui/AppSurface';
import { useTranslation } from '@/i18n';

const getPriorityColor = (priority: NotificationPriority): string => {
    switch (priority) {
        case NotificationPriority.URGENT:
            return 'border-rose-300 bg-rose-50/80';
        case NotificationPriority.HIGH:
            return 'border-amber-300 bg-amber-50/85';
        case NotificationPriority.MEDIUM:
            return 'border-emerald-300 bg-emerald-50/85';
        case NotificationPriority.LOW:
        default:
            return 'border-sky-300 bg-sky-50/85';
    }
};

const getPriorityIcon = (priority: NotificationPriority) => {
    switch (priority) {
        case NotificationPriority.URGENT:
            return <AlertCircle className="w-5 h-5 text-red-600" />;
        case NotificationPriority.HIGH:
            return <AlertTriangle className="w-5 h-5 text-amber-600" />;
        case NotificationPriority.MEDIUM:
            return <Bell className="w-5 h-5 text-emerald-600" />;
        case NotificationPriority.LOW:
        default:
            return <Info className="w-5 h-5 text-sky-600" />;
    }
};

const getStatusBadge = (status: ScheduledNotification['status']): React.ReactElement => {
    const badges = {
        PENDING: <span className="rounded-full border border-sky-200 bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-700">Pending</span>,
        SENT: <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">Sent</span>,
        CANCELLED: <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-600">Cancelled</span>,
        FAILED: <span className="rounded-full border border-rose-200 bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-700">Failed</span>,
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
        <AppSurface
            surface="glass"
            tone="neutral"
            density="compact"
            className={`rounded-[1.2rem] border ${getPriorityColor(notification.priority)}`}
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                    <div className="mt-1 rounded-full bg-white/85 p-2 shadow-sm">
                        {getPriorityIcon(notification.priority)}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h4 className="truncate text-sm font-bold text-slate-950">
                                {notification.title}
                            </h4>
                            {getStatusBadge(notification.status)}
                        </div>
                        <p className="mb-2 text-sm text-dlp-text-secondary">
                            {notification.body}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-dlp-text-muted">
                            <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{scheduledDate.toLocaleString()}</span>
                            </div>
                            {notification.status === 'PENDING' && !isPast && (
                                <span className="font-medium text-emerald-700">
                                    {formatTimeUntil()}
                                </span>
                            )}
                        </div>
                        {notification.batchId && (
                            <div className="mt-2 text-xs text-dlp-text-muted">
                                Batch: {notification.batchId}
                            </div>
                        )}
                    </div>
                </div>
                {notification.status === 'PENDING' && (
                    <button
                        onClick={() => onCancel(notification.id)}
                        className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-white/85 hover:text-slate-700"
                        title="Cancel notification"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>
        </AppSurface>
    );
};

export const NotificationList: React.FC = () => {
    const { t } = useTranslation(['notifications']);
    const { scheduledNotifications, cancelNotification, clearHistory } = useNotifications();

    const pendingNotifications = scheduledNotifications.filter(n => n.status === 'PENDING');
    const pastNotifications = scheduledNotifications.filter(n => n.status !== 'PENDING');

    return (
        <div className="space-y-6">
            {/* Pending Notifications */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="flex items-center gap-2 text-lg font-black tracking-tight text-slate-950">
                        <Bell className="h-5 w-5 text-emerald-600" />
                        {t('notifications.upcoming_notifications', { defaultValue: 'Upcoming Notifications' })}
                        {pendingNotifications.length > 0 && (
                            <span className="ml-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                                {pendingNotifications.length}
                            </span>
                        )}
                    </h2>
                </div>

                {pendingNotifications.length === 0 ? (
                    <AppSurface surface="soft" tone="neutral" className="rounded-[1.2rem] p-8 text-center">
                        <Bell className="mx-auto mb-3 h-10 w-10 text-emerald-300" />
                        <p className="text-sm font-semibold text-dlp-text-primary">{t('notifications.no_upcoming', { defaultValue: 'No upcoming notifications' })}</p>
                        <p className="mt-1 text-sm text-dlp-text-secondary">
                            {t('notifications.no_upcoming_desc', { defaultValue: 'Start a timer or schedule a recipe to receive notifications.' })}
                        </p>
                    </AppSurface>
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
                        <h2 className="text-lg font-black tracking-tight text-slate-950">
                            {t('notifications.history', { defaultValue: 'History' })}
                        </h2>
                        <button
                            onClick={clearHistory}
                            className="text-sm font-semibold text-rose-600 transition hover:text-rose-700"
                        >
                            {t('notifications.clear_history', { defaultValue: 'Clear History' })}
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
