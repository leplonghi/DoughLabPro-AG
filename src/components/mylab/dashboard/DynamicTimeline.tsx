
import React from 'react';
import { useTranslation } from '@/i18n';
import { TimelineMilestone } from '@/logic/timelineBuilder';
import { ClockIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';

interface DynamicTimelineProps {
    milestones: TimelineMilestone[];
    ambientTemp: number;
}

export const DynamicTimeline: React.FC<DynamicTimelineProps> = ({ milestones, ambientTemp }) => {
    const { t } = useTranslation();

    if (milestones.length === 0) return null;

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-dlp-brand" />
                    {t('timeline.title')}
                </h3>
                <div className="px-2 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-600 uppercase tracking-widest border border-slate-200">
                    Ambient: {ambientTemp}°C
                </div>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                {milestones.map((ms, idx) => (
                    <div key={ms.id} className="relative">
                        {/* Dot */}
                        <div className={`
                            absolute -left-[27px] w-4 h-4 rounded-full border-2 border-white shadow-sm z-10
                            ${ms.isCritical ? 'bg-dlp-brand ring-4 ring-lime-100' : 'bg-slate-300'}
                        `} />

                        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-1">
                                <span className={`text-[10px] font-black uppercase tracking-widest ${ms.isCritical ? 'text-dlp-brand' : 'text-slate-400'}`}>
                                    {t(ms.label)}
                                </span>
                                <span className="font-mono text-xs font-bold text-slate-900 bg-slate-50 px-2 py-1 rounded-lg">
                                    {format(ms.expectedTime, 'HH:mm')}
                                    <span className="text-[10px] text-slate-400 ml-1 font-sans">
                                        ({format(ms.expectedTime, 'dd/MM')})
                                    </span>
                                </span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                {t(ms.description)}
                            </p>

                            {ms.temperatureImpact && (
                                <div className="mt-2 flex items-center gap-1.5 text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100">
                                    <InformationCircleIcon className="w-3.5 h-3.5" />
                                    {t(ms.temperatureImpact)}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
