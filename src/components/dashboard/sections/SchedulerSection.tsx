import React, { useState, useMemo } from 'react';
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
                <div className="bg-white/40 dark:bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/40 dark:border-emerald-500/20 shadow-sm">
                    <div className="flex flex-col space-y-4">
                        <label className="text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-200 flex items-center gap-2 font-bold">
                            <Calendar size={14} />
                            When do you want to eat?
                        </label>
                        <input
                            type="datetime-local"
                            className="bg-white/80 dark:bg-black/30 border border-emerald-100 dark:border-emerald-800/50 rounded-lg p-3 text-lg font-mono text-emerald-950 dark:text-emerald-50 focus:ring-2 focus:ring-emerald-500 outline-none placeholder-emerald-900/30 shadow-inner"
                            onChange={handleDateChange}
                            value={pickerValue}
                        />

                        {startTimeParams && (
                            <div className="mt-4 pt-4 border-t border-emerald-100/50 dark:border-emerald-800/30">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">Total Duration</span>
                                    <span className="text-sm font-bold text-emerald-900 dark:text-white">
                                        {/* Simple diff display */}
                                        {schedule.targetDate && (
                                            Math.round((new Date(schedule.targetDate).getTime() - new Date().getTime()) / (1000 * 60 * 60))
                                        )} Hours
                                    </span>
                                </div>

                                {/* Vertical Timeline Preview */}
                                <div className="relative pl-6 space-y-6 border-l-2 border-emerald-200 dark:border-emerald-800 ml-2">
                                    {/* Start */}
                                    <div className="relative">
                                        <div className="absolute -left-[31px] bg-emerald-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-sm">1</div>
                                        <span className="text-xs text-emerald-600 dark:text-emerald-400 uppercase block mb-0.5">Start Process</span>
                                        <p className="font-mono text-sm font-bold text-emerald-900 dark:text-emerald-100">
                                            {startTimeParams.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            <span className="text-xs font-normal text-emerald-600 dark:text-emerald-400 ml-2">
                                                {startTimeParams.toLocaleDateString()}
                                            </span>
                                        </p>
                                    </div>

                                    {/* Prep/Poolish would go here if logic exposed it specifically, simplified for now */}

                                    {/* Eat */}
                                    <div className="relative">
                                        <div className="absolute -left-[31px] bg-emerald-700 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-sm">2</div>
                                        <span className="text-xs text-emerald-600 dark:text-emerald-400 uppercase block mb-0.5">Bake & Eat</span>
                                        <p className="font-mono text-sm font-bold text-emerald-900 dark:text-emerald-100">
                                            {new Date(schedule.targetDate!).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {!startTimeParams && (
                            <div className="text-center text-emerald-600/50 dark:text-emerald-400/50 text-sm py-4 italic">
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

