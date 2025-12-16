
import React from 'react';
import { DoughConfig, AmbientTemperature, Oven } from '@/types';
import { SunIcon, InfoIcon } from '@/components/ui/Icons';
import AccordionSection from '@/components/calculator/AccordionSection';
import { AMBIENT_TEMPERATURE_OPTIONS, ENVIRONMENT_TEMPERATURE_GUIDELINES } from '@/constants';
import ChoiceButton from '@/components/ui/ChoiceButton';
import { useToast } from '@/components/ToastProvider';
import { useTranslation } from '@/i18n';


interface EnvironmentSectionProps {
    config: DoughConfig;
    onConfigChange: (newConfig: Partial<DoughConfig>) => void;
    defaultOven?: Oven | undefined;
}

const EnvironmentSection: React.FC<EnvironmentSectionProps> = ({
    config,
    onConfigChange,
    defaultOven,
}) => {
    const { t } = useTranslation();
    const { addToast } = useToast();

    const handleTempChange = (newTemp: AmbientTemperature) => {
        const oldTemp = config.ambientTemperature;

        // If no change, do nothing
        if (oldTemp === newTemp) return;

        const oldGuideline = ENVIRONMENT_TEMPERATURE_GUIDELINES[oldTemp];
        const newGuideline = ENVIRONMENT_TEMPERATURE_GUIDELINES[newTemp];

        let updates: Partial<DoughConfig> = { ambientTemperature: newTemp };

        // Calculate yeast adjustment
        if (oldGuideline && newGuideline && config.yeastPercentage > 0) {
            // Calculate relative factor: New / Old
            // e.g. Mild(1.0) -> Cold(1.25) = 1.25
            // e.g. Cold(1.25) -> Mild(1.0) = 0.8
            const factor = newGuideline.yeastAdjustment / oldGuideline.yeastAdjustment;

            // Apply factor and round to 2 decimals
            const newYeast = Math.round((config.yeastPercentage * factor) * 100) / 100;

            if (newYeast !== config.yeastPercentage) {
                updates.yeastPercentage = newYeast;
                const noteText = t(newGuideline.notesKey as any) || t('calculator.temp_ideal');
                addToast(`${t('calculator.yeast_adjusted_to')} ${newYeast}% (${noteText})`, 'info');
            }
        }

        onConfigChange(updates);
    };

    const currentGuideline = ENVIRONMENT_TEMPERATURE_GUIDELINES[config.ambientTemperature];
    const isUsingDefaultOvenMax = defaultOven && config.bakingTempC === defaultOven.maxTemperature;

    return (
        <AccordionSection
            title={t('calculator.environment')}
            description={t('calculator.impact_on_fermentation')}
            icon={<SunIcon className="h-6 w-6" />}
        >
            <div className="space-y-6">
                {/* Ambient Temperature */}
                <div>
                    <label className="mb-2 block text-xs font-bold text-dlp-text-secondary">{t('calculator.ambient_temperature')}</label>
                    <div className="grid grid-cols-3 gap-2">
                        {AMBIENT_TEMPERATURE_OPTIONS.map((option) => (
                            <ChoiceButton
                                key={option.value}
                                active={config.ambientTemperature === option.value}
                                onClick={() => handleTempChange(option.value)}
                                label={t(option.labelKey)}
                                className="text-xs"
                            />
                        ))}
                    </div>
                </div>

                {currentGuideline && (
                    <div className="rounded-md bg-dlp-bg-muted p-3 text-xs text-dlp-text-secondary flex gap-2 items-start border border-dlp-border">
                        <InfoIcon className="h-4 w-4 flex-shrink-0 mt-0.5 text-dlp-accent" />
                        <div>
                            <p className="font-semibold text-dlp-text-primary">{t('calculator.impact_on_fermentation')}</p>
                            <p>{t(currentGuideline.notesKey as any)}</p>
                            {currentGuideline.yeastAdjustment !== 1.0 && (
                                <p className="mt-1 font-mono text-[10px] bg-dlp-bg-card inline-block px-1 rounded border border-dlp-border">
                                    Yeast Factor: {currentGuideline.yeastAdjustment}x
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {/* Baking Temperature */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-bold text-dlp-text-secondary">
                            {t('common.baking_profile') || "Baking Temperature"} (°C)
                        </label>
                        {isUsingDefaultOvenMax && (
                            <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium border border-indigo-200">
                                {defaultOven?.name}
                            </span>
                        )}
                    </div>
                    <div className="relative">
                        <input
                            type="number"
                            value={config.bakingTempC || ''}
                            onChange={(e) => onConfigChange({ bakingTempC: parseFloat(e.target.value) })}
                            className="block w-full rounded-md border-dlp-border shadow-dlp-sm focus:border-dlp-accent focus:ring-dlp-accent sm:text-sm pl-4 pr-12 py-2"
                            placeholder="e.g. 250"
                            min={100}
                            max={500}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">°C</span>
                        </div>
                    </div>
                    {defaultOven && !isUsingDefaultOvenMax && (
                        <div className="mt-1 text-right">
                            <button
                                onClick={() => onConfigChange({ bakingTempC: defaultOven.maxTemperature })}
                                className="text-[10px] text-dlp-accent hover:underline font-medium"
                            >
                                Use {defaultOven.name} ({defaultOven.maxTemperature}°C)
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </AccordionSection>
    );
};

export default EnvironmentSection;
