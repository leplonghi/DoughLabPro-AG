
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DoughConfig } from '@/types';
import { calculateReverseTimeline, TimelineStep } from '@/logic/reverseTimeline';
import { ClockIcon, CalendarIcon, ShareIcon } from '@heroicons/react/24/outline'; // Adjust import based on your icon system or use standard ones

// Simple formatter
const formatDate = (date: Date, locale: string) => {
    return new Intl.DateTimeFormat(locale, {
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
};

interface ReverseScheduleProps {
    config: DoughConfig;
}

export const ReverseSchedule: React.FC<ReverseScheduleProps> = ({ config }) => {
    const { t, i18n } = useTranslation();

    // Default target: Tonight at 20:00 or Tomorrow 20:00
    const defaultDate = new Date();
    defaultDate.setHours(20, 0, 0, 0);
    if (defaultDate < new Date()) {
        defaultDate.setDate(defaultDate.getDate() + 1);
    }

    const [targetDateStr, setTargetDateStr] = useState(defaultDate.toISOString().slice(0, 16));
    const [schedule, setSchedule] = useState<TimelineStep[]>([]);

    useEffect(() => {
        const target = new Date(targetDateStr);
        const calc = calculateReverseTimeline(target, config);
        setSchedule(calc);
    }, [targetDateStr, config]);

    const addToCalendar = () => {
        // Placeholder for Google Calendar URL generation
        // Start Time = schedule[0].startTime
        // End Time = schedule[last].endTime
        // This is complex because it's multiple events. Usually you add the 'Eat' event or the 'Start' event.
        // Let's make a simple google calendar link for the "Start Baking" moment.

        if (schedule.length === 0) return;
        const startEvent = schedule[0];

        const text = encodeURIComponent(`Start DoughLab: ${startEvent.title}`);
        const details = encodeURIComponent(startEvent.description || '');
        const dates = startEvent.startTime.toISOString().replace(/-|:|\.\d\d\d/g, ""); // Basic ISO cleanup for GCal
        const datesEnd = startEvent.endTime.toISOString().replace(/-|:|\.\d\d\d/g, "");

        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&dates=${dates}/${datesEnd}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <ClockIcon className="w-5 h-5 text-amber-600" />
                        {t('calc.schedule.title', 'Smart Schedule')}
                    </h3>
                    <p className="text-xs text-slate-500">{t('calc.schedule.subtitle', 'Plan backwards from eating time')}</p>
                </div>

                {/* Date Picker */}
                <input
                    type="datetime-local"
                    value={targetDateStr}
                    onChange={(e) => setTargetDateStr(e.target.value)}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
            </div>

            <div className="relative border-l-2 border-slate-200 ml-3 space-y-6">
                {schedule.map((step, idx) => {
                    const isFirst = idx === 0;
                    const isLast = idx === schedule.length - 1;

                    return (
                        <div key={step.id} className="ml-6 relative">
                            {/* Dot */}
                            <div className={`absolute -left-[31px] w-4 h-4 rounded-full border-2 border-white shadow-sm ${isFirst ? 'bg-green-500' : isLast ? 'bg-amber-600' : 'bg-slate-300'}`}></div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                <div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide block mb-0.5">
                                        {formatDate(step.startTime, i18n.language)}
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
                    {t('calc.schedule.add_to_calendar', 'Add Start to Calendar')}
                </button>
            </div>
        </div>
    );
};
