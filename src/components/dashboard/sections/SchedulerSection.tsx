
import React, { useState } from 'react';
import { useDoughSession } from '@/contexts/DoughSessionContext';
import { useReverseScheduling } from '@/hooks/useReverseScheduling';
import { Calendar, Clock, ArrowDown } from 'lucide-react';

export const SchedulerSection: React.FC = () => {
    const { session, updateSchedule } = useDoughSession();
    const { applySchedule } = useReverseScheduling();
    const { schedule } = session;

    const [pickerValue, setPickerValue] = useState<string>('');

    // If we have a computed start time, parse it
    const startTimeParams = useMemo(() => {
        if (!schedule.computedStartTime) return null;
        return new Date(schedule.computedStartTime);
    }, [schedule.computedStartTime]);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dateStr = e.target.value;
        if (!dateStr) return;
        setPickerValue(dateStr);

        const target = new Date(dateStr);
        applySchedule(target);
    };

    const isManual = schedule.mode === 'MANUAL_TIME';

    const toggleMode = () => {
        updateSchedule({ mode: isManual ? 'TARGET_TIME' : 'MANUAL_TIME' });
    };

    return (
        <div className="space-y-6">
            {/* Toggle */}
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                <button
                    onClick={toggleMode}
                    className={`
                        flex-1 py-2 text-sm font-medium rounded-md transition-all
                        ${isManual
                            ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white'
                            : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}
                    `}
                >
                    Manual Duration
                </button>
                <button
                    onClick={toggleMode}
                    className={`
                         flex-1 py-2 text-sm font-medium rounded-md transition-all
                        ${!isManual
                            ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white'
                            : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}
                    `}
                >
                    Target Time <span className="text-xs text-amber-500 font-bold ml-1">NEW</span>
                </button>
            </div>

            {/* Content */}
            {!isManual && (
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex flex-col space-y-4">
                        <label className="text-xs uppercase tracking-wider text-slate-500 flex items-center gap-2">
                            <Calendar size={14} />
                            When do you want to eat?
                        </label>
                        <input
                            type="datetime-local"
                            className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg p-3 text-lg font-mono focus:ring-2 focus:ring-orange-500 outline-none"
                            onChange={handleDateChange}
                            value={pickerValue}
                        />

                        {startTimeParams && (
                            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Duration</span>
                                    <span className="text-sm font-bold">
                                        {/* Simple diff display */}
                                        {schedule.targetDate && (
                                            Math.round((new Date(schedule.targetDate).getTime() - new Date().getTime()) / (1000 * 60 * 60))
                                        )} Hours
                                    </span>
                                </div>

                                {/* Vertical Timeline Preview */}
                                <div className="relative pl-6 space-y-6 border-l-2 border-slate-200 dark:border-slate-700 ml-2">
                                    {/* Start */}
                                    <div className="relative">
                                        <div className="absolute -left-[31px] bg-orange-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">1</div>
                                        <span className="text-xs text-slate-500 uppercase block mb-0.5">Start Process</span>
                                        <p className="font-mono text-sm font-bold">
                                            {startTimeParams.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            <span className="text-xs font-normal text-slate-400 ml-2">
                                                {startTimeParams.toLocaleDateString()}
                                            </span>
                                        </p>
                                    </div>

                                    {/* Prep/Poolish would go here if logic exposed it specifically, simplified for now */}

                                    {/* Eat */}
                                    <div className="relative">
                                        <div className="absolute -left-[31px] bg-green-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">2</div>
                                        <span className="text-xs text-slate-500 uppercase block mb-0.5">Bake & Eat</span>
                                        <p className="font-mono text-sm font-bold">
                                            {new Date(schedule.targetDate!).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {!startTimeParams && (
                            <div className="text-center text-slate-400 text-sm py-4">
                                Pick a date to calculate schedule
                            </div>
                        )}
                    </div>
                </div>
            )}

            {isManual && (
                <div className="p-4 text-center text-slate-500 italic border border-dashed border-slate-300 dark:border-slate-700 rounded-xl">
                    Manual Duration Mode (Classic) is active. Adjust yeast manually in The Lab.
                </div>
            )}
        </div>
    );
};
import { useMemo } from 'react';
