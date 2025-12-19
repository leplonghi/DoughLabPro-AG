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
            <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
                <button
                    onClick={toggleMode}
                    className={`
                        flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200
                        ${isManual
                            ? 'bg-[#51a145] text-white shadow-md'
                            : 'text-slate-400 hover:text-[#51a145] hover:bg-white/50'}
                    `}
                >
                    Manual Duration
                </button>
                <button
                    onClick={toggleMode}
                    className={`
                         flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200
                        ${!isManual
                            ? 'bg-[#51a145] text-white shadow-md'
                            : 'text-slate-400 hover:text-[#51a145] hover:bg-white/50'}
                    `}
                >
                    Target Time <span className="text-[9px] bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded ml-1">NEW</span>
                </button>
            </div>

            {/* Content */}
            {!isManual && (
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex flex-col space-y-4">
                        <label className="text-xs uppercase tracking-wider text-slate-500 font-bold flex items-center gap-2">
                            <Calendar size={14} className="text-[#51a145]" />
                            When do you want to eat?
                        </label>
                        <input
                            type="datetime-local"
                            className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-lg font-mono font-bold text-slate-800 focus:ring-2 focus:ring-[#51a145] focus:bg-white outline-none transition-all"
                            onChange={handleDateChange}
                            value={pickerValue}
                        />

                        {startTimeParams && (
                            <div className="mt-4 pt-4 border-t border-slate-100">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-bold text-slate-500">Total Duration</span>
                                    <span className="text-sm font-black text-[#1B4332]">
                                        {/* Simple diff display */}
                                        {schedule.targetDate && (
                                            Math.round((new Date(schedule.targetDate).getTime() - new Date().getTime()) / (1000 * 60 * 60))
                                        )} Hours
                                    </span>
                                </div>

                                {/* Vertical Timeline Preview */}
                                <div className="relative pl-6 space-y-6 border-l-2 border-emerald-100 ml-2">
                                    {/* Start */}
                                    <div className="relative">
                                        <div className="absolute -left-[31px] bg-[#51a145] text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-sm font-bold">1</div>
                                        <span className="text-[10px] font-bold text-[#51a145] uppercase block mb-0.5 tracking-wider">Start Process</span>
                                        <p className="font-mono text-sm font-bold text-slate-800">
                                            {startTimeParams.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            <span className="text-xs font-medium text-slate-400 ml-2">
                                                {startTimeParams.toLocaleDateString()}
                                            </span>
                                        </p>
                                    </div>

                                    {/* Prep/Poolish would go here if logic exposed it specifically, simplified for now */}

                                    {/* Eat */}
                                    <div className="relative">
                                        <div className="absolute -left-[31px] bg-[#1B4332] text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-sm font-bold">2</div>
                                        <span className="text-[10px] font-bold text-[#1B4332] uppercase block mb-0.5 tracking-wider">Bake & Eat</span>
                                        <p className="font-mono text-sm font-bold text-slate-800">
                                            {new Date(schedule.targetDate!).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {!startTimeParams && (
                            <div className="text-center text-slate-400 text-sm py-4 italic">
                                Pick a date to calculate schedule
                            </div>
                        )}
                    </div>
                </div>
            )}

            {isManual && (
                <div className="p-6 text-center text-slate-400 italic border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
                    Manual Duration Mode (Classic) is active. Adjust yeast manually in The Lab.
                </div>
            )}
        </div>
    );
};



