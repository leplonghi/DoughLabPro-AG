import React, { useState } from 'react';
import { DoughConfig, FormErrors, BakeType, YeastType, FlourDefinition, Levain, DoughResult } from '@/types';
import { useTranslation } from '@/i18n';
import StyleSection from '@/components/calculator/sections/StyleSection';
import QuantitySection from '@/components/calculator/sections/QuantitySection';
import { FlourSelector } from '@/components/calculator/FlourSelector';
import { CheckCircleIcon, ArrowRightIcon, BeakerIcon, ClockIcon, FireIcon } from '@/components/ui/Icons';
import EnvironmentSection from '@/components/calculator/sections/EnvironmentSection';
import { DOUGH_STYLE_PRESETS } from '@/constants';
import { getStyleById } from '@/data/styles/registry';

interface WizardModeProps {
    config: DoughConfig;
    errors: FormErrors;
    onConfigChange: (newConfig: Partial<DoughConfig>) => void;
    onBakeTypeChange: (bakeType: BakeType) => void;
    onStyleChange: (presetId: string) => void;
    onYeastTypeChange: (yeastType: YeastType) => void;
    levains: Levain[];
    selectedLevain?: Levain;
    inputRefs?: {
        numPizzas?: React.RefObject<HTMLInputElement>;
    };
    defaultOven?: any;
    selectedFlour?: FlourDefinition;
    calculationMode: any;
    onCalculationModeChange: any;
    hasProAccess: boolean;
    onOpenPaywall: () => void;
    results: DoughResult | null;
    customPresets?: any[];
    isFavorite?: (id: string, type: string) => boolean;
}

export const WizardMode: React.FC<WizardModeProps> = ({
    config,
    errors,
    onConfigChange,
    onBakeTypeChange,
    onStyleChange,
    onYeastTypeChange,
    levains,
    selectedLevain,
    inputRefs,
    defaultOven,
    selectedFlour,
    calculationMode,
    onCalculationModeChange,
    hasProAccess,
    onOpenPaywall,
    results,
    customPresets = [],
    isFavorite,
}) => {
    const { t } = useTranslation();
    const [currentStep, setCurrentStep] = useState(1);

    // Helper to move to next step
    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => Math.max(1, prev - 1));

    // Determine if we can proceed
    const canProceedStep1 = !!config.stylePresetId;
    const canProceedStep2 = config.numPizzas > 0 && config.doughBallWeight > 0;

    // Custom Wizard Step 3 Logic (Texture & Time)
    const handleTextureSelect = (type: 'easy' | 'balanced' | 'airy') => {
        let hydration = 60;
        let oil = config.oil;

        // Adjust based on style defaults + user preference
        // For now, simpler overrides:
        if (type === 'easy') {
            hydration = 58;
            oil = config.bakeType === 'PIZZAS' ? 2 : config.oil; // Little oil helps handling
        } else if (type === 'balanced') {
            hydration = 63;
        } else if (type === 'airy') {
            hydration = 70;
        }

        // Check flour limits if possible (simplified here)
        onConfigChange({ hydration, oil });
    };

    const handleTimeSelect = (type: 'asap' | 'tomorrow' | 'weekend') => {
        // This simplifies Fermentation logic dramatically
        if (type === 'asap') {
            // Direct, 2-4 hours roughly. High yeast.
            // We rely on the core engine to calculate yeast amount based on time?
            // Or we just set "Direct" and maybe the user manually sets time in Step 4?
            // Actually, the prompt says "Basic". The user shouldn't calculate yeast.
            // We might need to implement a "Smart Yeast" feature here or just set defaults.
            // But preserving `fermentationTechnique` is key.
            onConfigChange({
                fermentationTechnique: 'DIRECT' as any,
                yeastPercentage: 0.8 // Faster for same-day
            });
        } else {
            // Cold fermentation cases
            onConfigChange({
                fermentationTechnique: 'DIRECT' as any, // Most people do direct to fridge
                // We might want to set a "Cold Fermentation" flag if we had one, 
                // but typically this is implied by process.
                yeastPercentage: 0.3 // Lower yeast for longer times
            });
        }
    };

    const StepIndicator = () => (
        <div className="flex items-center justify-between mb-8 px-2">
            {[1, 2, 3, 4].map(step => (
                <div
                    key={step}
                    onClick={() => step < currentStep && setCurrentStep(step)}
                    className={`flex flex-col items-center gap-2 cursor-pointer ${step <= currentStep ? 'text-dlp-accent' : 'text-slate-300'}`}
                >
                    <div className={`
            w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all
            ${step === currentStep
                            ? 'bg-dlp-accent text-white border-dlp-accent shadow-md scale-110'
                            : step < currentStep
                                ? 'bg-green-50 text-green-600 border-green-200'
                                : 'bg-white text-slate-300 border-slate-200'
                        }
          `}>
                        {step < currentStep ? <CheckCircleIcon className="w-5 h-5" /> : step}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider">
                        {step === 1 && t('general.style')}
                        {step === 2 && t('general.quantity')}
                        {step === 3 && t('general.dough')}
                        {step === 4 && t('general.environment')}
                    </span>
                </div>
            ))}
            <div className="absolute top-4 left-0 w-full h-0.5 bg-slate-100 -z-10 hidden sm:block" />
        </div>
    );

    return (
        <div className="bg-white rounded-xl shadow-sm border border-dlp-border p-4 sm:p-6 min-h-[600px]">

            {/* Header */}
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-dlp-text-primary mb-2">
                    {t('calculator.wizard_mode_title', { defaultValue: 'Dough Wizard' })} 🪄
                </h2>
                <p className="text-sm text-dlp-text-secondary max-w-md mx-auto">
                    {t('calculator.wizard_mode_subtitle', { defaultValue: 'Create your perfect dough in 4 simple steps.' })}
                </p>
            </div>

            <StepIndicator />

            {/* Step 1: Style */}
            {currentStep === 1 && (
                <div className="animate-fade-in space-y-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                        <p className="text-sm text-blue-800 flex items-start gap-2">
                            <span className="text-lg">💡</span>
                            {t('calculator.wizard_tip_style', { defaultValue: 'Choose the style of pizza you want to make. This sets the foundation for your recipe.' })}
                        </p>
                    </div>

                    <StyleSection
                        config={config}
                        onBakeTypeChange={onBakeTypeChange}
                        onStyleChange={(id) => {
                            onStyleChange(id);
                            // Optional: Auto advance? No, nice to see what you picked.
                        }}
                        recipeStylesToShow={DOUGH_STYLE_PRESETS.filter(p => p.type === config.bakeType)}
                        isBasic={true} // Use guided visuals
                        currentPreset={DOUGH_STYLE_PRESETS.find(p => p.id === config.stylePresetId)}
                        onResetPreset={() => onStyleChange('')}
                        customPresets={customPresets}
                        isFavorite={isFavorite || (() => false)}
                    />

                    <div className="flex justify-end pt-4">
                        <button
                            onClick={nextStep}
                            disabled={!canProceedStep1}
                            className={`
                    flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-all
                    ${canProceedStep1
                                    ? 'bg-dlp-accent hover:bg-dlp-accent-hover shadow-lg hover:shadow-xl translate-y-0'
                                    : 'bg-slate-300 cursor-not-allowed'
                                }
                  `}
                        >
                            {t('general.next')} <ArrowRightIcon className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Step 2: Quantity */}
            {currentStep === 2 && (
                <div className="animate-fade-in space-y-6">
                    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mb-4">
                        <p className="text-sm text-indigo-800 flex items-start gap-2">
                            <span className="text-lg">💡</span>
                            {t('calculator.wizard_tip_quantity', { defaultValue: 'How much dough do you need? Use the sliders to adjust.' })}
                        </p>
                    </div>

                    <QuantitySection
                        config={config}
                        onConfigChange={onConfigChange}
                        calculationMode={calculationMode}
                        onCalculationModeChange={onCalculationModeChange}
                        errors={errors}
                        getInputClasses={(err) => `block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${err ? 'border-red-300' : ''}`}
                        numPizzasRef={inputRefs?.numPizzas}
                        // Determine min/max based on style if possible
                        minDoughBallWeight={getStyleById(config.stylePresetId || 'neapolitan')?.technicalProfile?.ballWeight?.min || 150}
                        maxDoughBallWeight={getStyleById(config.stylePresetId || 'neapolitan')?.technicalProfile?.ballWeight?.max || 1000}
                    />

                    <div className="flex justify-between pt-6 border-t border-slate-100">
                        <button
                            onClick={prevStep}
                            className="px-4 py-2 text-slate-500 font-medium hover:text-slate-800"
                        >
                            {t('general.back')}
                        </button>
                        <button
                            onClick={nextStep}
                            disabled={!canProceedStep2}
                            className={`
                    flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-all
                    ${canProceedStep2
                                    ? 'bg-dlp-accent hover:bg-dlp-accent-hover shadow-lg'
                                    : 'bg-slate-300 cursor-not-allowed'
                                }
                  `}
                        >
                            {t('general.next')} <ArrowRightIcon className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Step 3: Dough Characteristics (The Simplified "Methods") */}
            {currentStep === 3 && (
                <div className="animate-fade-in space-y-8">
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <p className="text-sm text-emerald-800 flex items-start gap-2">
                            <span className="text-lg">🧪</span>
                            {t('calculator.wizard_tip_magic', { defaultValue: 'Customize the texture and timing of your dough. No math required!' })}
                        </p>
                    </div>

                    {/* Flour Selector (Crucial for Hydration) */}
                    <div>
                        <h3 className="text-lg font-bold text-dlp-text-primary mb-3 flex items-center gap-2">
                            <span className="text-xl">🌾</span>
                            {t('calculator.wz_flour_title', { defaultValue: 'Your Flour' })}
                        </h3>
                        <div className="bg-white p-4 rounded-xl border border-slate-200">
                            <FlourSelector
                                selectedFlourId={config.flourId}
                                onFlourChange={(id) => onConfigChange({ flourId: id })}
                                currentHydration={config.hydration}
                                className="max-w-xl"
                            />
                        </div>
                    </div>

                    {/* Texture Selector */}
                    <div>
                        <h3 className="text-lg font-bold text-dlp-text-primary mb-3 flex items-center gap-2">
                            <BeakerIcon className="w-5 h-5 text-dlp-accent" />
                            {t('calculator.wz_texture_title', { defaultValue: 'Consistency & Texture' })}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Option 1: Easy/Crispy */}
                            <button
                                onClick={() => handleTextureSelect('easy')}
                                className={`
                            relative p-4 rounded-xl border-2 text-left transition-all hover:scale-[1.02]
                            ${config.hydration < 60 ? 'border-dlp-accent bg-dlp-accent/5 ring-1 ring-dlp-accent' : 'border-slate-100 bg-white hover:border-dlp-accent/30'}
                        `}
                            >
                                <div className="text-2xl mb-2">🧱</div>
                                <h4 className="font-bold text-dlp-text-primary mb-1">{t('calculator.wz_texture_easy_title', { defaultValue: 'Firm & Easy' })}</h4>
                                <p className="text-xs text-slate-500 mb-2">{t('calculator.wz_texture_easy_desc', { defaultValue: 'Easier to handle dough. Ideal for beginners. Results in crispier crusts.' })}</p>
                                <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-mono">~58% Hidratação</span>
                            </button>

                            {/* Option 2: Balanced */}
                            <button
                                onClick={() => handleTextureSelect('balanced')}
                                className={`
                            relative p-4 rounded-xl border-2 text-left transition-all hover:scale-[1.02]
                            ${config.hydration >= 60 && config.hydration < 68 ? 'border-dlp-accent bg-dlp-accent/5 ring-1 ring-dlp-accent' : 'border-slate-100 bg-white hover:border-dlp-accent/30'}
                        `}
                            >
                                <div className="text-2xl mb-2">⚖️</div>
                                <h4 className="font-bold text-dlp-text-primary mb-1">{t('calculator.wz_texture_balanced_title', { defaultValue: 'Balanced' })}</h4>
                                <p className="text-xs text-slate-500 mb-2">{t('calculator.wz_texture_balanced_desc', { defaultValue: 'The sweet spot between ease and lightness. Airy and soft crusts.' })}</p>
                                <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-mono">~63% Hidratação</span>
                            </button>

                            {/* Option 3: Airy */}
                            <button
                                onClick={() => handleTextureSelect('airy')}
                                className={`
                            relative p-4 rounded-xl border-2 text-left transition-all hover:scale-[1.02]
                            ${config.hydration >= 68 ? 'border-dlp-accent bg-dlp-accent/5 ring-1 ring-dlp-accent' : 'border-slate-100 bg-white hover:border-dlp-accent/30'}
                        `}
                            >
                                <div className="text-2xl mb-2">☁️</div>
                                <h4 className="font-bold text-dlp-text-primary mb-1">{t('calculator.wz_texture_airy_title', { defaultValue: 'Cloud (Advanced)' })}</h4>
                                <p className="text-xs text-slate-500 mb-2">{t('calculator.wz_texture_airy_desc', { defaultValue: 'Very wet and sticky dough. Requires technique, but produces incredible alveoli.' })}</p>
                                <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-mono">70%+ Hidratação</span>
                            </button>
                        </div>
                    </div>

                    {/* Time Selector */}
                    <div>
                        <h3 className="text-lg font-bold text-dlp-text-primary mb-3 flex items-center gap-2">
                            <ClockIcon className="w-5 h-5 text-dlp-accent" />
                            {t('calculator.wz_ferment_title', { defaultValue: 'Fermentação' })}
                        </h3>
                        {/* Note: We just simulate simplified choice, assuming Direct for simplicity in Wizard. */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button
                                onClick={() => handleTimeSelect('asap')}
                                className={`
                           flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all
                           ${config.yeastPercentage > 0.4 ? 'border-dlp-accent bg-dlp-accent/5' : 'border-slate-100 bg-white'}
                        `}
                            >
                                <span className="text-2xl">🚀</span>
                                <div>
                                    <h4 className="font-bold text-dlp-text-primary">{t('calculator.wz_time_fast_title', { defaultValue: 'Fast (Today)' })}</h4>
                                    <p className="text-xs text-slate-500 mt-1">{t('calculator.wz_time_fast_desc', { defaultValue: 'Ready in 3-4 hours. Mild flavor, ideal for when you\'re in a rush.' })}</p>
                                </div>
                            </button>

                            <button
                                onClick={() => handleTimeSelect('tomorrow')}
                                className={`
                           flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all
                           ${config.yeastPercentage <= 0.4 ? 'border-dlp-accent bg-dlp-accent/5' : 'border-slate-100 bg-white'}
                        `}
                            >
                                <span className="text-2xl">🌙</span>
                                <div>
                                    <h4 className="font-bold text-dlp-text-primary">{t('calculator.wz_time_slow_title', { defaultValue: 'Slow (Tomorrow+)' })}</h4>
                                    <p className="text-xs text-slate-500 mt-1">{t('calculator.wz_time_slow_desc', { defaultValue: 'Rest in the fridge (Cold Ferment). Complex flavor and maximum digestibility.' })}</p>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between pt-6 border-t border-slate-100">
                        <button
                            onClick={prevStep}
                            className="px-4 py-2 text-slate-500 font-medium hover:text-slate-800"
                        >
                            {t('general.back')}
                        </button>
                        <button
                            onClick={nextStep}
                            className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-dlp-accent hover:bg-dlp-accent-hover shadow-lg"
                        >
                            {t('general.next')} <ArrowRightIcon className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Step 4: Environment */}
            {currentStep === 4 && (
                <div className="animate-fade-in space-y-6">
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mb-4">
                        <p className="text-sm text-amber-800 flex items-start gap-2">
                            <span className="text-lg">🔥</span>
                            {t('calculator.wizard_tip_env', { defaultValue: 'Last step! Tell us about your kitchen and oven.' })}
                        </p>
                    </div>

                    <EnvironmentSection
                        config={config}
                        onConfigChange={onConfigChange}
                        defaultOven={defaultOven}
                    />

                    <div className="flex justify-between pt-6 border-t border-slate-100">
                        <button
                            onClick={prevStep}
                            className="px-4 py-2 text-slate-500 font-medium hover:text-slate-800"
                        >
                            {t('general.back')}
                        </button>
                        <div className="text-center">
                            <p className="text-xs text-slate-400 mb-2">All set!</p>
                            <button
                                disabled
                                className="px-6 py-3 rounded-xl font-bold text-white bg-green-500 shadow-lg cursor-default"
                            >
                                {t('calculator.scroll_for_recipe', { defaultValue: 'Recipe Ready!' })}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};
