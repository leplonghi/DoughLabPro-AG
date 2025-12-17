import React from 'react';
import { DoughConfig, FermentationTechnique } from '@/types';
import { useReverseSchedule, ScheduleStep } from '@/hooks/useReverseSchedule';
import { format } from '@/logic/dateUtils';
import {
    ClockIcon,
    BeakerIcon,
    FireIcon,
    ExclamationTriangleIcon,
    ArrowDownIcon
} from '@heroicons/react/24/outline';
import { PizzaSliceIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface ProductionTimelineProps {
    config: DoughConfig;
    hasProAccess: boolean;
}

const TimelineStep: React.FC<{ step: ScheduleStep; index: number; isLast: boolean }> = ({ step, index, isLast }) => {

    const getIcon = () => {
        switch (step.id) {
            case 'target': return <PizzaSliceIcon className="h-6 w-6 text-dlp-accent" />;
            case 'preheat': return <FireIcon className="h-6 w-6 text-orange-500" />;
            case 'mix_poolish':
            case 'mix_biga': return <BeakerIcon className="h-6 w-6 text-indigo-500" />;
            case 'mix_final': return <span className="text-xl">🥣</span>;
            case 'ball': return <span className="text-xl">⚪</span>;
            default: return <ClockIcon className="h-6 w-6 text-gray-500" />;
        }
    };

    return (
        <div className="relative flex gap-4 pb-8 last:pb-0 group">
            {!isLast && (
                <div className="absolute top-10 left-[19px] bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 group-last:hidden" />
            )}

            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border-2 border-dlp-bg-muted shadow-sm z-10 group-hover:border-dlp-accent transition-colors">
                {getIcon()}
            </div>

            <div className="flex-1 pt-1.5 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start justify-between">
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">{step.title}</h4>
                        <p className="text-xs text-gray-500 mt-1 max-w-[240px] leading-relaxed">{step.description}</p>

                        {step.affiliate && (
                            <a href={step.affiliate.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-[10px] uppercase font-bold text-indigo-500 hover:text-indigo-700 hover:underline">
                                <span>🛒</span> {step.affiliate.text}
                            </a>
                        )}
                    </div>
                    <div className="text-right">
                        <span className="block font-mono text-sm font-bold text-dlp-accent bg-dlp-accent/10 px-2 py-1 rounded">
                            {format(step.time, 'HH:mm')}
                        </span>
                        <span className="text-[10px] text-gray-400 block mt-1">
                            {format(step.time, 'MMM d')}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ProductionTimeline: React.FC<ProductionTimelineProps> = ({ config, hasProAccess }) => {
    const { t } = useTranslation();

    // Safety check for valid date
    const targetDate = config.targetTime ? new Date(config.targetTime) : new Date();

    // If invalid date, default to tomorrow
    const validTargetDate = isNaN(targetDate.getTime()) ? new Date(new Date().setDate(new Date().getDate() + 1)) : targetDate;

    const schedule = useReverseSchedule(
        validTargetDate,
        config.fermentationTechnique,
        2, // default bulk
        6  // default ball
    );

    if (schedule.isImpossible) {
        return (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 animate-shake">
                <div className="flex items-start gap-3">
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-500 shrink-0" />
                    <div>
                        <h3 className="text-sm font-bold text-red-800">Mission Impossible</h3>
                        <p className="text-xs text-red-600 mt-1">
                            {schedule.errors[0] || "We can't go back in time (yet). Pick a later date!"}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm border border-dlp-border">
            <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                    <h3 className="text-base font-bold text-gray-900">Production Timeline</h3>
                    <p className="text-xs text-gray-500">Reverse engineered from your target</p>
                </div>
                <div className="text-center">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Starts</span>
                    <span className="text-indigo-600 font-bold font-mono">
                        {format(schedule.prefermentMixTime || schedule.finalMixTime, 'HH:mm')}
                    </span>
                </div>
            </div>

            <div className="relative">
                {schedule.steps.map((step, index) => (
                    <TimelineStep
                        key={step.id}
                        step={step}
                        index={index}
                        isLast={index === schedule.steps.length - 1}
                    />
                ))}
            </div>

            {/* Pro Tip Teaser */}
            {!hasProAccess && (
                <div className="mt-6 rounded-lg bg-gray-50 p-3 text-center text-xs text-gray-500 italic">
                    Unlock Pro to sync this schedule with Google Calendar.
                </div>
            )}
        </div>
    );
};
