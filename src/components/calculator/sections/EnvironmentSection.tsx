import React from 'react';
import { DoughConfig, AmbientTemperature, Oven } from '@/types';
import { SunIcon, InfoIcon, TargetIcon } from '@/components/ui/Icons';
import AccordionSection from '@/components/calculator/AccordionSection';
import { AMBIENT_TEMPERATURE_OPTIONS, ENVIRONMENT_TEMPERATURE_GUIDELINES } from '@/constants';
import { useToast } from '@/components/ToastProvider';
import { useTranslation } from '@/i18n';
import { TemperatureDetector } from '@/components/weather';
import { getAmbientTemperatureCategory } from '@/services/geolocation';

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
        if (oldTemp === newTemp) return;

        const oldGuideline = ENVIRONMENT_TEMPERATURE_GUIDELINES[oldTemp];
        const newGuideline = ENVIRONMENT_TEMPERATURE_GUIDELINES[newTemp];

        let updates: Partial<DoughConfig> = { ambientTemperature: newTemp };

        if (oldGuideline && newGuideline && config.yeastPercentage > 0) {
            const factor = newGuideline.yeastAdjustment / oldGuideline.yeastAdjustment;
            const newYeast = Math.round((config.yeastPercentage * factor) * 100) / 100;

            if (newYeast !== config.yeastPercentage) {
                updates.yeastPercentage = newYeast;
                const noteText = t(newGuideline.notesKey as any) || t('calculator.temp_ideal');
                addToast(`${t('calculator.yeast_adjusted_to')} ${newYeast}% (${noteText})`, 'info');
            }
        }
        onConfigChange(updates);
    };

    const handleTemperatureDetected = (tempCelsius: number) => {
        const category = getAmbientTemperatureCategory(tempCelsius);
        handleTempChange(AmbientTemperature[category]);
        addToast(`${t('calculator.temperature_detected')}: ${tempCelsius}°C (${t(`form.temp_${category.toLowerCase()}`)})`, 'success');
    };

    const currentGuideline = ENVIRONMENT_TEMPERATURE_GUIDELINES[config.ambientTemperature];
    const isUsingDefaultOvenMax = defaultOven && config.bakingTempC === defaultOven.maxTemperature;

    return (
        <AccordionSection
            title={t('calculator.environment')}
            description={t('calculator.impact_on_fermentation')}
            icon={<SunIcon />}
        >
            <div className="space-y-6 animate-slide-up">
                <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#385343] dark:text-emerald-100">{t('calculator.ambient_temperature')}</label>
                    <div className="dlp-calc-rail grid grid-cols-3 gap-2 rounded-[1.6rem] p-1.5">
                        {AMBIENT_TEMPERATURE_OPTIONS.map((option) => {
                            const isActive = config.ambientTemperature === option.value;
                            return (
                                <button
                                    key={option.value}
                                    onClick={() => handleTempChange(option.value)}
                                    className={`dlp-calc-option flex items-center justify-center rounded-[1.15rem] px-3 py-3 text-[11px] font-bold uppercase tracking-[0.18em]
                                        ${isActive
                                            ? 'dlp-calc-option--active'
                                            : ''}
                                    `}
                                >
                                    {t(option.labelKey)}
                                </button>
                            );
                        })}
                    </div>

                    {/* Auto-detect Temperature Button */}
                    <div className="mt-3 flex justify-center">
                        <TemperatureDetector
                            onTemperatureDetected={handleTemperatureDetected}
                        />
                    </div>
                </div>

                {currentGuideline && (
                    <div className="rounded-[1.8rem] border border-emerald-200/70 bg-[linear-gradient(180deg,rgba(236,250,238,0.96),rgba(248,252,248,0.98))] p-5 flex gap-4 items-start dark:border-emerald-900/50 dark:bg-[linear-gradient(180deg,rgba(17,41,27,0.95),rgba(11,24,16,0.97))]">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#51a145] shadow-[0_14px_24px_-18px_rgba(47,139,73,0.4)] dark:bg-emerald-950/70">
                            <InfoIcon size={20} />
                        </div>
                        <div>
                            <p className="mb-1 text-xs font-bold font-heading text-[#16351f] dark:text-emerald-50">{t('calculator.impact_on_fermentation')}</p>
                            <p className="mb-3 text-[12px] leading-relaxed text-[#35513c] dark:text-emerald-100/80">"{t(currentGuideline.notesKey as any)}"</p>
                            {currentGuideline.yeastAdjustment !== 1.0 && (
                                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-3 py-1 dark:border-emerald-800/70 dark:bg-emerald-950/55">
                                    <TargetIcon size={10} className="text-[#51a145]" />
                                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#16351f] dark:text-emerald-50">Yeast Adjustment: {currentGuideline.yeastAdjustment}x</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <div className="border-t border-slate-200/70 pt-4">
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#385343] dark:text-emerald-100">
                            {t('common.baking_profile') || "Baking Specification"}
                        </label>
                        {isUsingDefaultOvenMax && (
                            <div className="flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/55 dark:text-emerald-100">
                                <div className="w-1 h-1 rounded-full bg-dlp-primary animate-pulse" />
                                {defaultOven?.name} PROfILE
                            </div>
                        )}
                    </div>

                    <div className="dlp-calc-field relative rounded-[1.3rem]">
                        <input
                            type="number"
                            value={config.bakingTempC || ''}
                            onChange={(e) => onConfigChange({ bakingTempC: parseFloat(e.target.value) })}
                            className="block w-full rounded-[1.3rem] border-0 bg-transparent py-4 px-4 text-xl font-semibold text-slate-900 outline-none dark:text-slate-50"
                            placeholder="250"
                            min={100}
                            max={500}
                        />
                        <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Celsius</span>
                        </div>
                    </div>

                    {defaultOven && !isUsingDefaultOvenMax && (
                        <div className="mt-3 text-right">
                            <button
                                onClick={() => onConfigChange({ bakingTempC: defaultOven.maxTemperature })}
                                className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1B4332] hover:underline decoration-dlp-primary decoration-2 underline-offset-4 dark:text-emerald-100"
                            >
                                Revert to {defaultOven.name} ({defaultOven.maxTemperature}°C)
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </AccordionSection>
    );
};

export default EnvironmentSection;


