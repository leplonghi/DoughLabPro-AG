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
}

export const FlourSelector: React.FC<FlourSelectorProps> = ({
    selectedFlourId,
    onFlourChange,
    currentHydration,
    className = '',
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
        <div className={`rounded-xl border border-dlp-border bg-white shadow-sm transition-all overflow-hidden ${className}`}>
            {/* Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-dlp-border/50">
                <label htmlFor="flourId" className="text-sm font-bold text-dlp-text-secondary flex items-center gap-2">
                    <Wheat className="h-4 w-4 text-dlp-accent" />
                    {t('calculator.flour_type')}
                </label>
            </div>

            <div className="p-4 space-y-4">
                {/* Flour Selector Dropdown */}
                <div>
                    <select
                        id="flourId"
                        name="flourId"
                        value={selectedFlourId}
                        onChange={(e) => onFlourChange(e.target.value)}
                        className="block w-full rounded-md border-dlp-border shadow-dlp-sm focus:border-dlp-accent focus:ring-dlp-accent sm:text-sm py-2"
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

                {/* Blend Builder (Pro Feature) */}
                {isBlend && (
                    <div className="rounded-lg border border-dlp-border bg-dlp-bg-muted p-3">
                        <LockedTeaser featureKey="calculator.flour_blend">
                            <div className="space-y-3">
                                <h4 className="text-sm font-bold text-dlp-text-primary">Custom Blend Builder</h4>
                                <p className="text-xs text-dlp-text-secondary mb-2">
                                    Mix two flours to achieve specific protein/W targets.
                                </p>

                                {/* Placeholder UI for Blend - Non-functional visual only for now */}
                                <div className="grid grid-cols-2 gap-2 text-xs opacity-75">
                                    <div className="p-2 border border-dlp-border rounded bg-white">
                                        <div className="font-bold text-dlp-accent">70%</div>
                                        <div>High Gluten</div>
                                    </div>
                                    <div className="p-2 border border-dlp-border rounded bg-white">
                                        <div className="font-bold text-dlp-accent">30%</div>
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

                {/* Flour Info Card (Tech Specs Style) - Integrated into the body */}
                {selectedFlour && !isBlend && (
                    <div className="bg-slate-50/50 rounded-lg border border-dlp-border/60 p-3 relative overflow-hidden">
                        {/* Decorative Background Hint */}
                        <div className="absolute -right-4 -top-4 opacity-[0.03] pointer-events-none">
                            <Activity className="w-24 h-24" />
                        </div>

                        <div className="flex flex-col gap-3 relative z-10">
                            {/* Title */}
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <h4 className="text-xs font-bold uppercase text-dlp-text-muted tracking-wider">Flour Specs</h4>
                            </div>

                            {/* Specs Row */}
                            <div className="flex flex-wrap gap-2">
                                {selectedFlour.protein && (
                                    <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100 shadow-sm">
                                        <Activity className="w-3.5 h-3.5 mr-1.5" />
                                        {selectedFlour.protein}% Protein
                                    </div>
                                )}
                                {selectedFlour.strengthW && (
                                    <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 text-xs font-bold border border-slate-100 shadow-sm">
                                        <Dumbbell className="w-3.5 h-3.5 mr-1.5" />
                                        W {selectedFlour.strengthW}
                                    </div>
                                )}
                            </div>

                            {/* Hydration Hint */}
                            {selectedFlour.hydrationHint && (
                                <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100 shadow-sm w-fit">
                                    <Droplets className="w-3.5 h-3.5 mr-1.5" />
                                    Recommended: {selectedFlour.hydrationHint.min}% - {selectedFlour.hydrationHint.max}%
                                </div>
                            )}

                            {/* Notes */}
                            {selectedFlour.notes && (
                                <div className="flex items-start gap-2 pt-1">
                                    <ScrollText className="w-3.5 h-3.5 text-dlp-text-muted mt-0.5 flex-shrink-0" />
                                    <p className="text-xs text-dlp-text-secondary italic leading-relaxed">
                                        "{selectedFlour.notes}"
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Hydration Warning/Info */}
                {
                    hydrationWarning && !isBlend && (
                        <div
                            className={`rounded-lg p-3 flex items-start gap-2 animate-fade-in ${hydrationWarning.level === 'high'
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
                                <CheckCircleIcon className="h-5 w-5 text-dlp-brand-hover flex-shrink-0 mt-0.5" />
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
            </div>
        </div >
    );
};


