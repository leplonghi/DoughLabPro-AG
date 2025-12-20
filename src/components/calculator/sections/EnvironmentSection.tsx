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
                {/* 1. Ambient Thermal Profile */}
                <div>
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B4332] mb-2 block">{t('calculator.ambient_temperature')}</label>
                    <div className="bg-slate-100/80 p-1 rounded-2xl border border-slate-100 grid grid-cols-3 gap-2">
                        {AMBIENT_TEMPERATURE_OPTIONS.map((option) => {
                            const isActive = config.ambientTemperature === option.value;
                            return (
                                <button
                                    key={option.value}
                                    onClick={() => handleTempChange(option.value)}
                                    className={`flex items-center justify-center py-2.5 px-4 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300
                                        ${isActive
                                            ? 'bg-[#51a145] text-white shadow-lg shadow-[#51a145]/20 scale-[1.02]'
                                            : 'bg-transparent text-slate-500 hover:text-[#51a145] hover:bg-emerald-50/50'}
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

                {/* 2. Fermentation Insight Panel */}
                {currentGuideline && (
                    <div className="bg-[#D8F3DC]/30 rounded-[2rem] border border-[#D8F3DC]/60 p-4 flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#51a145] shadow-sm shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                            <InfoIcon size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold font-heading text-[#1B4332] mb-1">{t('calculator.impact_on_fermentation')}</p>
                            <p className="text-[11px] text-[#1B4332]/70 leading-relaxed italic mb-3">"{t(currentGuideline.notesKey as any)}"</p>
                            {currentGuideline.yeastAdjustment !== 1.0 && (
                                <div className="inline-flex items-center gap-2 bg-white/60 px-3 py-1 rounded-full border border-white/40 transition-all duration-300 group-hover:bg-white">
                                    <TargetIcon size={10} className="text-[#51a145]" />
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#1B4332]">Yeast Adjustment: {currentGuideline.yeastAdjustment}x</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* 3. Baking Specification */}
                <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B4332]">
                            {t('common.baking_profile') || "Baking Specification"}
                        </label>
                        {isUsingDefaultOvenMax && (
                            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border border-emerald-100">
                                <div className="w-1 h-1 rounded-full bg-dlp-brand animate-pulse" />
                                {defaultOven?.name} PROfILE
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <input
                            type="number"
                            value={config.bakingTempC || ''}
                            onChange={(e) => onConfigChange({ bakingTempC: parseFloat(e.target.value) })}
                            className="block w-full rounded-2xl border-slate-200 bg-slate-50 py-2.5 px-4 text-xl font-bold text-slate-800 focus:border-[#1B4332] focus:bg-white focus:ring-4 focus:ring-dlp-brand/5 transition-all outline-none"
                            placeholder="250"
                            min={100}
                            max={500}
                        />
                        <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                            <span className="text-sm font-bold text-slate-400">°CELSIUS</span>
                        </div>
                    </div>

                    {defaultOven && !isUsingDefaultOvenMax && (
                        <div className="mt-3 text-right">
                            <button
                                onClick={() => onConfigChange({ bakingTempC: defaultOven.maxTemperature })}
                                className="text-[10px] text-[#1B4332] font-bold uppercase tracking-widest hover:underline decoration-dlp-brand decoration-2 underline-offset-4"
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


