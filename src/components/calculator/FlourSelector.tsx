import React, { useMemo } from 'react';
import { FlourDefinition } from '@/types';
import { FLOURS } from '@/flours-constants';
import { useTranslation } from '@/i18n';
import { AlertTriangleIcon, CheckCircleIcon, InfoIcon } from '@/components/ui/Icons';
import { Droplets, Activity, Dumbbell, ScrollText, Wheat } from 'lucide-react';
import { LockedTeaser } from '@/marketing/fomo/components/LockedTeaser';

interface FlourSelectorProps {
    selectedFlourId: string;
    onFlourChange: (flourId: string) => void;
    currentHydration: number;
    className?: string;
    disabled?: boolean;
    disabledReason?: string;
}

export const FlourSelector: React.FC<FlourSelectorProps> = ({
    selectedFlourId,
    onFlourChange,
    currentHydration,
    className = '',
    disabled = false,
    disabledReason,
}) => {
    const { t } = useTranslation(['calculator']);

    const selectedFlour = useMemo(() => {
        return FLOURS.find(f => f.id === selectedFlourId);
    }, [selectedFlourId]);

    const isBlend = selectedFlourId === 'blend';

    // Group flours by category for better UX
    const floursByCategory = useMemo(() => {
        const categories: Record<string, FlourDefinition[]> = {
            '00': [],
            'bread': [],
            'all_purpose': [],
            'whole': [],
            'other': [],
        };

        FLOURS.forEach(flour => {
            if (categories[flour.category]) {
                categories[flour.category].push(flour);
            }
        });

        return categories;
    }, []);

    // Determine hydration warning level
    const hydrationWarning = useMemo(() => {
        if (!selectedFlour?.hydrationHint) return null;

        const { min, max } = selectedFlour.hydrationHint;

        if (currentHydration < (min || 0)) {
            return {
                level: 'low',
                message: t('calculator.flour_hydration_too_low', { currentHydration, min }),
                icon: 'info',
            };
        }

        if (currentHydration > (max || 100)) {
            return {
                level: 'high',
                message: t('calculator.flour_hydration_too_high', { currentHydration, max }),
                icon: 'warning',
            };
        }

        return {
            level: 'ok',
            message: t('calculator.flour_hydration_optimal', { min, max }),
            icon: 'check',
        };
    }, [selectedFlour, currentHydration, t]);

    const getCategoryLabel = (category: string): string => {
        const labels: Record<string, string> = {
            '00': t('calculator.flour_category_00'),
            'bread': t('calculator.flour_category_bread'),
            'all_purpose': t('calculator.flour_category_all_purpose'),
            'whole': t('calculator.flour_category_whole'),
            'other': t('calculator.flour_category_specialty'),
        };
        return labels[category] || category;
    };

    return (
        <div className={`dlp-calc-panel overflow-hidden rounded-[1.7rem] border transition-all ${className}`}>
            <div className="flex items-center justify-between border-b border-slate-200/70 px-4 py-3">
                <label htmlFor="flourId" className="flex items-center gap-2 text-sm font-bold text-dlp-text-secondary dark:text-slate-100">
                    <Wheat className="h-4 w-4 text-dlp-primary" />
                    {t('calculator.flour_type')}
                </label>
            </div>

            <div className="p-4 space-y-4">
                <div>
                    <select
                        id="flourId"
                        name="flourId"
                        value={selectedFlourId}
                        onChange={(e) => onFlourChange(e.target.value)}
                        disabled={disabled}
                        className="dlp-calc-field block w-full rounded-[1rem] border bg-transparent px-3 py-3 text-sm font-medium text-slate-800 outline-none disabled:cursor-not-allowed disabled:opacity-70 dark:text-slate-100"
                    >
                        {Object.entries(floursByCategory).map(([category, items]) => {
                            const flours = items as FlourDefinition[];
                            if (flours.length === 0) return null;
                            return (
                                <optgroup key={category} label={getCategoryLabel(category)}>
                                    {flours.map(flour => (
                                        <option key={flour.id} value={flour.id}>
                                            {flour.name}
                                            {flour.protein ? ` (${flour.protein}% protein)` : ''}
                                        </option>
                                    ))}
                                </optgroup>
                            );
                        })}
                        <option value="blend">Custom Flour Blend (Pro)</option>
                    </select>
                </div>

                {isBlend && (
                    <div className="dlp-calc-panel--subtle rounded-[1.2rem] border p-3">
                        <LockedTeaser featureKey="calculator.flour_blend">
                            <div className="space-y-3">
                                <h4 className="text-sm font-bold text-dlp-text-primary dark:text-slate-50">Custom Blend Builder</h4>
                                <p className="mb-2 text-xs text-dlp-text-secondary dark:text-slate-300">
                                    Mix two flours to achieve specific protein/W targets.
                                </p>

                                <div className="grid grid-cols-2 gap-2 text-xs opacity-75">
                                    <div className="dlp-calc-metric rounded-xl p-2">
                                        <div className="font-bold text-dlp-primary">70%</div>
                                        <div>High Gluten</div>
                                    </div>
                                    <div className="dlp-calc-metric rounded-xl p-2">
                                        <div className="font-bold text-dlp-primary">30%</div>
                                        <div>Whole Wheat</div>
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-dlp-border mt-2">
                                    <div className="flex justify-between text-xs">
                                        <span>Est. Protein: <span className="font-bold">13.8%</span></span>
                                        <span>Est. W: <span className="font-bold">380</span></span>
                                    </div>
                                </div>
                            </div>
                        </LockedTeaser>
                    </div>
                )}

                {selectedFlour && !isBlend && (
                    <div className="dlp-calc-panel--subtle relative overflow-hidden rounded-[1.25rem] border p-4">
                        <div className="absolute -right-4 -top-4 opacity-[0.03] pointer-events-none">
                            <Activity className="w-24 h-24" />
                        </div>

                        <div className="flex flex-col gap-3 relative z-10">
                            <div className="flex items-center justify-between border-b border-slate-200/70 pb-2">
                                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-dlp-text-muted">Flour Specs</h4>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {selectedFlour.protein && (
                                    <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">
                                        <Activity className="w-3.5 h-3.5 mr-1.5" />
                                        {selectedFlour.protein}% Protein
                                    </div>
                                )}
                                {selectedFlour.strengthW && (
                                    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100">
                                        <Dumbbell className="w-3.5 h-3.5 mr-1.5" />
                                        W {selectedFlour.strengthW}
                                    </div>
                                )}
                            </div>

                            {selectedFlour.hydrationHint && (
                                <div className="inline-flex w-fit items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                                    <Droplets className="w-3.5 h-3.5 mr-1.5" />
                                    Recommended: {selectedFlour.hydrationHint.min}% - {selectedFlour.hydrationHint.max}%
                                </div>
                            )}

                            {selectedFlour.notes && (
                                <div className="flex items-start gap-2 pt-1">
                                    <ScrollText className="w-3.5 h-3.5 text-dlp-text-muted mt-0.5 flex-shrink-0" />
                                    <p className="text-xs italic leading-relaxed text-dlp-text-secondary dark:text-slate-300">
                                        "{selectedFlour.notes}"
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {
                    hydrationWarning && !isBlend && (
                        <div
                            className={`animate-fade-in flex items-start gap-2 rounded-[1.15rem] p-3 ${hydrationWarning.level === 'high'
                                ? 'bg-red-50 border border-red-200'
                                : hydrationWarning.level === 'low'
                                    ? 'bg-blue-50 border border-blue-200'
                                    : 'bg-green-50 border border-green-200'
                                }`}
                        >
                            {hydrationWarning.icon === 'warning' && (
                                <AlertTriangleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                            )}
                            {hydrationWarning.icon === 'info' && (
                                <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            )}
                            {hydrationWarning.icon === 'check' && (
                                <CheckCircleIcon className="h-5 w-5 text-dlp-primary-hover flex-shrink-0 mt-0.5" />
                            )}
                            <div className="flex-1">
                                <p
                                    className={`text-sm font-bold ${hydrationWarning.level === 'high'
                                        ? 'text-red-900'
                                        : hydrationWarning.level === 'low'
                                            ? 'text-blue-900'
                                            : 'text-green-900'
                                        }`}
                                >
                                    {hydrationWarning.level === 'high' && t('calculator.flour_warning_title')}
                                    {hydrationWarning.level === 'low' && t('calculator.flour_info_title')}
                                    {hydrationWarning.level === 'ok' && t('calculator.flour_optimal_title')}
                                </p>
                                <p
                                    className={`text-xs mt-1 ${hydrationWarning.level === 'high'
                                        ? 'text-red-700'
                                        : hydrationWarning.level === 'low'
                                            ? 'text-blue-700'
                                            : 'text-green-700'
                                        }`}
                                >
                                    {hydrationWarning.message}
                                </p>
                            </div>
                        </div>
                    )
                }

                {disabled && (
                    <div className="rounded-[1rem] border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
                        {disabledReason || 'This parameter is locked in Guided mode.'}
                    </div>
                )}
            </div>
        </div >
    );
};


