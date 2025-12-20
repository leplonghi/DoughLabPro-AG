import React, { useState, useEffect } from 'react';
import { DoughConfig, Levain, TimelineStep } from '@/types';
import { useTranslation } from '@/i18n';
import { calculateReverseTimeline } from '@/logic/reverseTimeline';
import { useBakingNotifications } from '@/hooks/useBakingNotifications';
import {
    ClockIcon,
    CalendarIcon,
    ShareIcon,
    BellIcon,
    SolidBellIcon
} from '@/components/ui/Icons';

// Simple formatter
const formatDate = (date: Date, locale: string) => {
    return new Intl.DateTimeFormat(locale, {
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
};

export interface ReverseScheduleProps {
    config: DoughConfig;
    levain?: Levain;
    targetDate?: string;
    onTargetDateChange?: (date: string) => void;
    onScheduleChange?: (schedule: TimelineStep[]) => void;
}

export const ReverseSchedule: React.FC<ReverseScheduleProps> = ({
    config,
    levain,
    targetDate,
    onTargetDateChange,
    onScheduleChange
}) => {
    const { t, locale } = useTranslation();

    // Default target: Tonight at 20:00 or Tomorrow 20:00
    // Only use default if targetDate is NOT provided
    const [internalTargetDate, setInternalTargetDate] = useState(() => {
        if (targetDate) return targetDate;
        const d = new Date();
        d.setHours(20, 0, 0, 0);
        if (d < new Date()) {
            d.setDate(d.getDate() + 1);
        }
        // Return local datetime string for input
        // Note: datetime-local expects YYYY-MM-DDThh:mm
        // toISOString gives UTC. We need local.
        const offset = d.getTimezoneOffset() * 60000;
        return new Date(d.getTime() - offset).toISOString().slice(0, 16);
    });

    const activeTargetDate = targetDate || internalTargetDate;
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    // Sync input value with prop if controlled
    useEffect(() => {
        if (targetDate) {
            setInternalTargetDate(targetDate);
        }
    }, [targetDate]);

    const [schedule, setSchedule] = useState<TimelineStep[]>([]);

    useEffect(() => {
        const target = new Date(activeTargetDate);
        const calc = calculateReverseTimeline(target, config, levain);
        setSchedule(calc);
        if (onScheduleChange) {
            onScheduleChange(calc);
        }
    }, [activeTargetDate, config, levain, onScheduleChange]);

    // Enable Notifications Hook
    useBakingNotifications(schedule, notificationsEnabled);

    const toggleNotifications = () => {
        if (!notificationsEnabled) {
            // Request permission immediately on click
            if (Notification.permission === 'default') {
                Notification.requestPermission().then(perm => {
                    if (perm === 'granted') setNotificationsEnabled(true);
                });
            } else if (Notification.permission === 'granted') {
                setNotificationsEnabled(true);
            } else {
                alert(t('common.notifications_blocked', { defaultValue: 'Notifications are blocked. Please enable them in your browser settings.' }));
            }
        } else {
            setNotificationsEnabled(false);
        }
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value;
        setInternalTargetDate(newVal);
        if (onTargetDateChange) {
            onTargetDateChange(newVal);
        }
    };

    const addToCalendar = () => {
        // ... (existing logic)
        if (schedule.length === 0) return;
        const startEvent = schedule[0];

        const text = encodeURIComponent(`Start DoughLab: ${startEvent.title}`);
        const details = encodeURIComponent(startEvent.description || '');
        const dates = startEvent.startTime.toISOString().replace(/-|:|\.\d\d\d/g, "");
        const datesEnd = startEvent.endTime.toISOString().replace(/-|:|\.\d\d\d/g, "");

        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&dates=${dates}/${datesEnd}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <ClockIcon className="w-5 h-5 text-amber-600" />
                        {t('calc.schedule.title', { defaultValue: 'Smart Schedule' })}
                    </h3>
                    <p className="text-xs text-slate-500">{t('calc.schedule.subtitle', { defaultValue: 'Plan backwards from eating time' })}</p>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                    {/* Notification Toggle */}
                    <button
                        onClick={toggleNotifications}
                        title={notificationsEnabled ? "Disable Alerts" : "Enable Live Alerts"}
                        className={`p-2 rounded-lg transition-colors ${notificationsEnabled ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-400 hover:text-slate-600'}`}
                    >
                        {notificationsEnabled ? <SolidBellIcon className="w-5 h-5" /> : <BellIcon className="w-5 h-5" />}
                    </button>

                    {/* Date Picker */}
                    <input
                        type="datetime-local"
                        value={activeTargetDate}
                        onChange={handleDateChange}
                        className="flex-1 sm:flex-none border border-slate-300 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                </div>
            </div>

            <div className="relative border-l-2 border-slate-200 ml-3 space-y-6">
                {schedule.map((step, idx) => {
                    const isFirst = idx === 0;
                    const isLast = idx === schedule.length - 1;

                    return (
                        <div key={step.id} className="ml-6 relative">
                            {/* Dot */}
                            <div className={`absolute -left-[31px] w-4 h-4 rounded-full border-2 border-white shadow-sm ${isFirst ? 'bg-dlp-brand' : isLast ? 'bg-amber-600' : 'bg-slate-300'}`}></div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                <div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide block mb-0.5">
                                        {formatDate(step.startTime, locale)}
                                    </span>
                                    <h4 className="font-semibold text-slate-800 text-sm">{step.title}</h4>
                                </div>
                                <div className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded inline-block self-start sm:self-auto">
                                    {Math.round(step.durationMinutes / 60) > 0 ? `${(step.durationMinutes / 60).toFixed(1)}h` : `${step.durationMinutes}m`}
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">{step.description}</p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                    onClick={addToCalendar}
                    className="w-full flex items-center justify-center gap-2 text-sm font-medium text-amber-700 hover:bg-amber-50 py-2 rounded-lg transition"
                >
                    <CalendarIcon className="w-4 h-4" />
                    {t('calc.schedule.add_to_calendar', { defaultValue: 'Add Start to Calendar' })}
                </button>
            </div>
        </div>
    );
};

