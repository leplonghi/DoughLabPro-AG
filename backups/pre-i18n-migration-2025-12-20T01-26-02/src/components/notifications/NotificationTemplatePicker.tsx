import React, { useState } from 'react';
import { STYLE_NOTIFICATION_PLANS, scheduleStyleNotifications, NotificationTemplate } from '@/services/notificationTemplates';
import { useNotifications } from '@/contexts/NotificationContext';
import { RecipeStyle } from '@/types';
import { Bell, Clock, Zap, ChevronRight, Check } from 'lucide-react';

interface TemplatePickerProps {
    styleId?: RecipeStyle;
    onApply?: () => void;
}

export const NotificationTemplatePicker: React.FC<TemplatePickerProps> = ({ styleId, onApply }) => {
    const { scheduleNotification } = useNotifications();
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [startTime, setStartTime] = useState<string>(new Date().toISOString().slice(0, 16));
    const [variables, setVariables] = useState<Record<string, string>>({
        duration: '4',
        count: '6',
        temp: '250',
        foldNumber: '1',
        style: 'Neapolitan',
    });
    const [loading, setLoading] = useState(false);

    const plans = Object.values(STYLE_NOTIFICATION_PLANS);
    const currentPlan = selectedPlan ? STYLE_NOTIFICATION_PLANS[selectedPlan] : null;

    const handleApplyTemplate = async () => {
        if (!currentPlan) return;

        setLoading(true);
        try {
            await scheduleStyleNotifications(
                currentPlan.styleId,
                new Date(startTime),
                variables,
                async (notification, offsetMinutes) => {
                    await scheduleNotification(notification);
                }
            );

            onApply?.();
        } catch (error) {
            console.error('Failed to apply template:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Notification Templates
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pre-configured notification plans for different dough styles
                </p>
            </div>

            {/* Style Plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {plans.map((plan) => (
                    <button
                        key={plan.styleId}
                        onClick={() => setSelectedPlan(plan.styleId)}
                        className={`text-left p-6 rounded-lg border-2 transition-all ${selectedPlan === plan.styleId
                                ? 'border-green-600 bg-green-50 dark:bg-green-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700'
                            }`}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                {plan.styleName}
                            </h3>
                            {selectedPlan === plan.styleId && (
                                <Check className="w-5 h-5 text-green-600" />
                            )}
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <Bell className="w-4 h-4" />
                                <span>{plan.templates.length} notifications</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{Math.floor(plan.estimatedDuration / 60)}h {plan.estimatedDuration % 60}m</span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Template Details */}
            {currentPlan && (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            {currentPlan.styleName} - Notification Timeline
                        </h3>

                        {/* Start Time Input */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Start Time
                            </label>
                            <input
                                type="datetime-local"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                        </div>

                        {/* Variables */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Template Variables
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {Object.keys(variables).map((key) => (
                                    <div key={key}>
                                        <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1 capitalize">
                                            {key}
                                        </label>
                                        <input
                                            type="text"
                                            value={variables[key]}
                                            onChange={(e) => setVariables({ ...variables, [key]: e.target.value })}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="space-y-3">
                            {currentPlan.templates.map((template, index) => (
                                <TemplateTimelineItem
                                    key={template.id}
                                    template={template}
                                    index={index}
                                    startTime={new Date(startTime)}
                                    variables={variables}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Apply Button */}
                    <button
                        onClick={handleApplyTemplate}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                    >
                        {loading ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                                Applying...
                            </>
                        ) : (
                            <>
                                <Zap className="w-5 h-5" />
                                Apply Template ({currentPlan.templates.length} notifications)
                            </>
                        )}
                    </button>
                </div>
            )}

            {/* Info Box */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                    💡 <strong>Tip:</strong> Templates automatically schedule all notifications for the selected style.
                    You can customize variables like temperature, duration, and count before applying.
                </p>
            </div>
        </div>
    );
};

const TemplateTimelineItem: React.FC<{
    template: NotificationTemplate;
    index: number;
    startTime: Date;
    variables: Record<string, string>;
}> = ({ template, index, startTime, variables }) => {
    const interpolate = (text: string): string => {
        return text.replace(/\{\{(\w+)\}\}/g, (_, key) => variables[key] || '');
    };

    const getScheduledTime = (): string => {
        if (!template.defaultSchedule) return 'Not scheduled';

        let scheduledTime: Date;
        if (template.defaultSchedule.relativeTo === 'now') {
            scheduledTime = new Date(Date.now() + template.defaultSchedule.offsetMinutes * 60 * 1000);
        } else if (template.defaultSchedule.relativeTo === 'start') {
            scheduledTime = new Date(startTime.getTime() + template.defaultSchedule.offsetMinutes * 60 * 1000);
        } else {
            scheduledTime = new Date(startTime.getTime() + template.defaultSchedule.offsetMinutes * 60 * 1000);
        }

        return scheduledTime.toLocaleString();
    };

    const getPriorityColor = (priority: string): string => {
        switch (priority) {
            case 'URGENT':
                return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200';
            case 'HIGH':
                return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-200';
            case 'MEDIUM':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200';
            default:
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200';
        }
    };

    return (
        <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                </div>
                {index < 10 && (
                    <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-600 mt-2" />
                )}
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                        {interpolate(template.titleTemplate)}
                    </h4>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(template.priority)}`}>
                        {template.priority}
                    </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {interpolate(template.bodyTemplate)}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>{getScheduledTime()}</span>
                </div>
            </div>
        </div>
    );
};
