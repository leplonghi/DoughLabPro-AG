import React, { useState, useEffect } from 'react';
import { useNotificationAnalytics } from '@/services/notificationAnalytics';
import { useUser } from '@/contexts/UserProvider';
import { BarChart3, TrendingUp, Bell, MousePointer, X, Clock, Zap } from 'lucide-react';

export const NotificationAnalyticsDashboard: React.FC = () => {
    const { user } = useUser();
    const analytics = useNotificationAnalytics(user?.uid || '');

    const [timeRange, setTimeRange] = useState<7 | 30 | 90>(30);
    const [metrics, setMetrics] = useState<any>(null);
    const [typeMetrics, setTypeMetrics] = useState<any[]>([]);
    const [performance, setPerformance] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadAnalytics();
    }, [timeRange]);

    const loadAnalytics = async () => {
        setLoading(true);
        try {
            const endDate = new Date();
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - timeRange);

            const [metricsData, typeData, perfData] = await Promise.all([
                analytics.getEngagementMetrics(startDate, endDate),
                analytics.getMetricsByType(startDate, endDate),
                analytics.getPerformanceOverTime(timeRange),
            ]);

            setMetrics(metricsData);
            setTypeMetrics(typeData);
            setPerformance(perfData);
        } catch (error) {
            console.error('Failed to load analytics:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
        );
    }

    if (!metrics) {
        return (
            <div className="text-center py-12">
                <Bell className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 dark:text-gray-400">No analytics data available</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Notification Analytics
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Track engagement and performance
                    </p>
                </div>

                {/* Time Range Selector */}
                <div className="flex gap-2">
                    {[7, 30, 90].map((days) => (
                        <button
                            key={days}
                            onClick={() => setTimeRange(days as 7 | 30 | 90)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${timeRange === days
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {days}d
                        </button>
                    ))}
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard
                    icon={<Bell className="w-6 h-6" />}
                    label="Total Sent"
                    value={metrics.totalSent}
                    color="blue"
                />
                <MetricCard
                    icon={<MousePointer className="w-6 h-6" />}
                    label="Clicked"
                    value={metrics.totalClicked}
                    color="green"
                />
                <MetricCard
                    icon={<TrendingUp className="w-6 h-6" />}
                    label="CTR"
                    value={`${metrics.clickThroughRate.toFixed(1)}%`}
                    color="purple"
                />
                <MetricCard
                    icon={<Zap className="w-6 h-6" />}
                    label="Engagement"
                    value={`${metrics.engagementRate.toFixed(1)}%`}
                    color="orange"
                />
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    label="Dismissed"
                    value={metrics.totalDismissed}
                    icon={<X className="w-5 h-5 text-red-500" />}
                />
                <StatCard
                    label="Snoozed"
                    value={metrics.totalSnoozed}
                    icon={<Clock className="w-5 h-5 text-yellow-500" />}
                />
                <StatCard
                    label="Avg Time to Click"
                    value={metrics.averageTimeToClick ? `${Math.round(metrics.averageTimeToClick)}s` : 'N/A'}
                    icon={<Clock className="w-5 h-5 text-blue-500" />}
                />
            </div>

            {/* Popular Actions */}
            {metrics.popularActions.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Popular Actions
                    </h3>
                    <div className="space-y-3">
                        {metrics.popularActions.map((action: any, index: number) => (
                            <div key={index} className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                                    {action.action}
                                </span>
                                <div className="flex items-center gap-3">
                                    <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-green-600 h-2 rounded-full"
                                            style={{
                                                width: `${(action.count / metrics.popularActions[0].count) * 100}%`,
                                            }}
                                        />
                                    </div>
                                    <span className="text-sm font-bold text-gray-900 dark:text-white w-12 text-right">
                                        {action.count}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Performance by Type */}
            {typeMetrics.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Performance by Type
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Type
                                    </th>
                                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Sent
                                    </th>
                                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Clicked
                                    </th>
                                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        CTR
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {typeMetrics.slice(0, 10).map((type: any, index: number) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                                            {type.type.replace(/_/g, ' ')}
                                        </td>
                                        <td className="py-3 px-4 text-sm text-right text-gray-700 dark:text-gray-300">
                                            {type.sent}
                                        </td>
                                        <td className="py-3 px-4 text-sm text-right text-gray-700 dark:text-gray-300">
                                            {type.clicked}
                                        </td>
                                        <td className="py-3 px-4 text-sm text-right">
                                            <span
                                                className={`font-medium ${type.ctr > 50
                                                        ? 'text-green-600'
                                                        : type.ctr > 25
                                                            ? 'text-yellow-600'
                                                            : 'text-red-600'
                                                    }`}
                                            >
                                                {type.ctr.toFixed(1)}%
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Performance Chart */}
            {performance.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Performance Over Time
                    </h3>
                    <div className="h-64 flex items-end justify-between gap-1">
                        {performance.map((day: any, index: number) => {
                            const maxSent = Math.max(...performance.map((d: any) => d.sent));
                            const height = maxSent > 0 ? (day.sent / maxSent) * 100 : 0;

                            return (
                                <div key={index} className="flex-1 flex flex-col items-center gap-1">
                                    <div className="w-full flex flex-col gap-1">
                                        <div
                                            className="w-full bg-green-600 rounded-t transition-all hover:bg-green-700"
                                            style={{ height: `${height}%`, minHeight: day.sent > 0 ? '4px' : '0' }}
                                            title={`Sent: ${day.sent}, Clicked: ${day.clicked}`}
                                        />
                                    </div>
                                    <span className="text-[10px] text-gray-500 dark:text-gray-400 rotate-45 origin-left">
                                        {new Date(day.date).getDate()}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

const MetricCard: React.FC<{
    icon: React.ReactNode;
    label: string;
    value: string | number;
    color: 'blue' | 'green' | 'purple' | 'orange';
}> = ({ icon, label, value, color }) => {
    const colorClasses = {
        blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600',
        green: 'bg-green-50 dark:bg-green-900/20 text-green-600',
        purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600',
        orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600',
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className={`inline-flex p-3 rounded-lg ${colorClasses[color]} mb-3`}>
                {icon}
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
                {label}
            </div>
        </div>
    );
};

const StatCard: React.FC<{
    label: string;
    value: string | number;
    icon: React.ReactNode;
}> = ({ label, value, icon }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center gap-4">
            <div className="flex-shrink-0">
                {icon}
            </div>
            <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {label}
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                    {value}
                </div>
            </div>
        </div>
    );
};
