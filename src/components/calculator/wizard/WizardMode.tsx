import React, { useState } from 'react';
import { DoughConfig, FormErrors, BakeType, YeastType, FlourDefinition, Levain, DoughResult } from '@/types';
import { useTranslation } from '@/i18n';
import StyleSection from '@/components/calculator/sections/StyleSection';
import QuantitySection from '@/components/calculator/sections/QuantitySection';
import { FlourSelector } from '@/components/calculator/FlourSelector';
import {
    CheckCircleIcon,
    ArrowRightIcon,
    BeakerIcon,
    ClockIcon,
    FireIcon,
    FlourIcon,
    CubeIcon,
    ScaleIcon,
    CloudIcon,
    RocketIcon,
    MoonIcon,
    LightBulbIcon,
    SparklesIcon
} from '@/components/ui/Icons';
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

    const StepIndicator = ({ step, title, description, active }: { step: number, title: string, description: string, active: boolean }) => (
        <div className={`mb-8 p-6 rounded-2xl border-2 transition-all duration-300 ${active ? 'bg-gradient-to-br from-white to-[#51a145]/5 border-[#51a145] shadow-xl shadow-[#51a145]/10' : 'bg-slate-50/50 border-slate-200'}`}>
            <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl transition-all duration-300 ${active ? 'bg-gradient-to-br from-[#51a145] to-[#36782c] text-white shadow-lg shadow-[#51a145]/30 scale-110' : 'bg-white border-2 border-slate-200 text-slate-300'}`}>
                    {step}
                </div>
                <div className="flex-1">
                    <h3 className={`text-base font-black uppercase tracking-wider mb-2 ${active ? 'text-[#1B4332]' : 'text-slate-400'}`}>
                        {title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${active ? 'text-slate-600' : 'text-slate-400'}`}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-4">
            {/* Steps Navigation - Enhanced Mobile Scrollable */}
            <div className="flex gap-3 overflow-x-auto pb-3 no-scrollbar sm:hidden">
                {[1, 2, 3, 4].map(s => (
                    <button
                        key={s}
                        onClick={() => s < currentStep && setCurrentStep(s)}
                        className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-base font-black border-2 transition-all duration-300
                            ${s === currentStep ? 'bg-gradient-to-br from-[#51a145] to-[#36782c] border-[#51a145] text-white shadow-lg shadow-[#51a145]/30 scale-110' : s < currentStep ? 'bg-emerald-50 border-emerald-300 text-emerald-700 hover:scale-105' : 'bg-white border-slate-200 text-slate-300'}
                        `}
                    >
                        {s}
                    </button>
                ))}
            </div>

            {/* Header Enhanced */}
            <div className="mb-6 pt-4 text-center sm:hidden">
                <h2 className="text-2xl font-black text-[#1B4332] flex items-center justify-center gap-2">
                    <span className="bg-gradient-to-br from-[#51a145] to-[#36782c] p-2 rounded-2xl shadow-lg shadow-[#51a145]/20"><SparklesIcon className="w-6 h-6 text-white" /></span>
                    {t('calculator.wizard_mode_title', { defaultValue: 'Dough Wizard' })}
                </h2>
            </div>

            {/* Step 1: Style */}
            {currentStep === 1 && (
                <div className="animate-fade-in space-y-4">
                    <StepIndicator
                        step={1}
                        title={t('calculator.choose_style', { defaultValue: 'Choose Your Style' })}
                        description={t('calculator.choose_style_desc', { defaultValue: 'Select a dough style to start with. Each style comes with preset parameters based on authentic recipes.' })}
                        active={true}
                    />
                    <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50 mb-4">
                        <p className="text-[11px] text-dlp-brand flex items-start gap-2 italic">
                            <span className="bg-white p-1 rounded-full shadow-sm"><LightBulbIcon className="w-3 h-3 text-dlp-brand" /></span>
                            {t('calculator.wizard_style_tip', { defaultValue: 'Start with a classic style. You can customize everything later.' })}
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
                                    ? 'bg-gradient-to-br from-[#51a145] to-[#36782c] hover:brightness-110 shadow-lg hover:shadow-xl translate-y-0'
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
                <div className="animate-fade-in space-y-4">
                    <StepIndicator
                        step={2}
                        title={t('calculator.define_quantity', { defaultValue: 'Define Quantity' })}
                        description={t('calculator.define_quantity_desc', { defaultValue: 'Set the number of pizzas/loaves and their weight. This calculates the total flour needed.' })}
                        active={true}
                    />
                    <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50 mb-4">
                        <p className="text-[11px] text-dlp-brand flex items-start gap-2 italic">
                            <span className="bg-white p-1 rounded-full shadow-sm"><LightBulbIcon className="w-3 h-3 text-dlp-brand" /></span> {t('calculator.wizard_quantity_tip', { defaultValue: 'You can define the total flour weight or the number of units.' })}
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
                                    ? 'bg-gradient-to-br from-[#51a145] to-[#36782c] hover:brightness-110 shadow-lg'
                                    : 'bg-slate-300 cursor-not-allowed'
                                }
                  `}
                        >
                            {t('general.next')} <ArrowRightIcon className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Step 3: Dough Characteristics */}
            {currentStep === 3 && (
                <div className="animate-fade-in space-y-4">
                    <StepIndicator
                        step={3}
                        title={t('calculator.dough_characteristics', { defaultValue: 'Dough Characteristics' })}
                        description={t('calculator.dough_char_desc', { defaultValue: 'Fine-tune hydration, salt, and yeast to control the texture and fermentation speed.' })}
                        active={true}
                    />
                    <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50 mb-4">
                        <p className="text-[11px] text-dlp-brand flex items-start gap-2 italic">
                            <span className="bg-white p-1 rounded-full shadow-sm"><BeakerIcon className="w-3 h-3 text-dlp-brand" /></span> {t('calculator.wizard_dough_tip', { defaultValue: 'Higher hydration makes softer dough but harder to handle.' })}
                        </p>
                    </div>

                    {/* Flour Selector (Crucial for Hydration) */}
                    <div>
                        <h3 className="text-lg font-bold text-dlp-text-primary mb-3 flex items-center gap-2">
                            <span className="bg-white p-1.5 rounded-full shadow-sm border border-slate-100"><FlourIcon className="w-5 h-5 text-dlp-brand" /></span>
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
                        <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <span className="bg-white p-1.5 rounded-full shadow-sm border border-slate-100"><BeakerIcon className="w-5 h-5 text-dlp-brand" /></span>
                            {t('calculator.wz_texture_title', { defaultValue: 'Consistency & Texture' })}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Option 1: Easy/Crispy */}
                            <button
                                onClick={() => handleTextureSelect('easy')}
                                className={`
                                    relative p-4 rounded-2xl border-2 text-left transition-all duration-300 hover:scale-[1.02]
                                    ${config.hydration < 60
                                        ? 'border-dlp-brand bg-gradient-to-br from-dlp-brand to-dlp-brand-hover/5 shadow-sm'
                                        : 'border-slate-100 bg-white hover:border-dlp-brand/20'}
                                `}
                            >
                                <div className="mb-3 inline-flex p-2 rounded-full bg-white shadow-sm border border-slate-100">
                                    <CubeIcon className="w-6 h-6 text-dlp-brand" />
                                </div>
                                <h4 className={`font-bold mb-1 ${config.hydration < 60 ? 'text-dlp-brand' : 'text-slate-800'}`}>{t('calculator.wz_texture_easy_title', { defaultValue: 'Firm & Easy' })}</h4>
                                <p className="text-[11px] text-slate-500 mb-2">{t('calculator.wz_texture_easy_desc', { defaultValue: 'Easier to handle dough. Ideal for beginners. Results in crispier crusts.' })}</p>
                                <span className="inline-block px-2 py-1 bg-slate-100 text-slate-500 rounded text-[9px] font-bold uppercase tracking-widest">{t('calculator.wz_hydration_easy', { defaultValue: '~58% Hydration' })}</span>
                            </button>

                            {/* Option 2: Balanced */}
                            <button
                                onClick={() => handleTextureSelect('balanced')}
                                className={`
                                    relative p-4 rounded-2xl border-2 text-left transition-all duration-300 hover:scale-[1.02]
                                    ${config.hydration >= 60 && config.hydration < 68
                                        ? 'border-dlp-brand bg-gradient-to-br from-dlp-brand to-dlp-brand-hover/5 shadow-sm'
                                        : 'border-slate-100 bg-white hover:border-dlp-brand/30'}
                                `}
                            >
                                <div className="mb-3 inline-flex p-2 rounded-full bg-white shadow-sm border border-slate-100">
                                    <ScaleIcon className="w-6 h-6 text-dlp-brand" />
                                </div>
                                <h4 className={`font-bold mb-1 ${config.hydration >= 60 && config.hydration < 68 ? 'text-dlp-brand' : 'text-slate-800'}`}>{t('calculator.wz_texture_balanced_title', { defaultValue: 'Balanced' })}</h4>
                                <p className="text-[11px] text-slate-500 mb-2">{t('calculator.wz_texture_balanced_desc', { defaultValue: 'The sweet spot between ease and lightness. Airy and soft crusts.' })}</p>
                                <span className="inline-block px-2 py-1 bg-slate-100 text-slate-500 rounded text-[9px] font-bold uppercase tracking-widest">{t('calculator.wz_hydration_balanced', { defaultValue: '~63% Hydration' })}</span>
                            </button>

                            {/* Option 3: Airy */}
                            <button
                                onClick={() => handleTextureSelect('airy')}
                                className={`
                                    relative p-4 rounded-2xl border-2 text-left transition-all duration-300 hover:scale-[1.02]
                                    ${config.hydration >= 68
                                        ? 'border-dlp-brand bg-gradient-to-br from-dlp-brand to-dlp-brand-hover/5 shadow-sm'
                                        : 'border-slate-100 bg-white hover:border-dlp-brand/30'}
                                `}
                            >
                                <div className="mb-3 inline-flex p-2 rounded-full bg-white shadow-sm border border-slate-100">
                                    <CloudIcon className="w-6 h-6 text-dlp-brand" />
                                </div>
                                <h4 className={`font-bold mb-1 ${config.hydration >= 68 ? 'text-dlp-brand' : 'text-slate-800'}`}>{t('calculator.wz_texture_airy_title', { defaultValue: 'Cloud (Advanced)' })}</h4>
                                <p className="text-[11px] text-slate-500 mb-2">{t('calculator.wz_texture_airy_desc', { defaultValue: 'Very wet and sticky dough. Requires technique, but produces incredible alveoli.' })}</p>
                                <span className="inline-block px-2 py-1 bg-slate-100 text-slate-500 rounded text-[9px] font-bold uppercase tracking-widest">{t('calculator.wz_hydration_airy', { defaultValue: '70%+ Hydration' })}</span>
                            </button>
                        </div>
                    </div>

                    {/* Time Selector */}
                    <div>
                        <h3 className="text-lg font-bold text-dlp-text-primary mb-3 flex items-center gap-2">
                            <span className="bg-white p-1.5 rounded-full shadow-sm border border-slate-100"><ClockIcon className="w-5 h-5 text-dlp-brand" /></span>
                            {t('calculator.wz_ferment_title', { defaultValue: 'Fermentation' })}
                        </h3>
                        {/* Note: We just simulate simplified choice, assuming Direct for simplicity in Wizard. */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button
                                onClick={() => handleTimeSelect('asap')}
                                className={`
                                    flex items-start gap-4 p-4 rounded-2xl border-2 transition-all duration-300
                                    ${config.yeastPercentage > 0.4
                                        ? 'border-dlp-brand bg-gradient-to-br from-dlp-brand to-dlp-brand-hover/5 shadow-sm'
                                        : 'border-slate-100 bg-white hover:border-dlp-brand/20'}
                                `}
                            >
                                <div className="flex-shrink-0 p-2 rounded-full bg-white shadow-sm border border-slate-100">
                                    <RocketIcon className="w-6 h-6 text-dlp-brand" />
                                </div>
                                <div>
                                    <h4 className={`font-bold ${config.yeastPercentage > 0.4 ? 'text-dlp-brand' : 'text-slate-800'}`}>{t('calculator.wz_time_fast_title', { defaultValue: 'Fast (Today)' })}</h4>
                                    <p className="text-[11px] text-slate-500 mt-1">{t('calculator.wz_time_fast_desc', { defaultValue: "Ready in 3-4 hours. Mild flavor, ideal for when you're in a rush." })}</p>
                                </div>
                            </button>

                            <button
                                onClick={() => handleTimeSelect('tomorrow')}
                                className={`
                                    flex items-start gap-4 p-4 rounded-2xl border-2 transition-all duration-300
                                    ${config.yeastPercentage <= 0.4
                                        ? 'border-dlp-brand bg-gradient-to-br from-dlp-brand to-dlp-brand-hover/5 shadow-sm'
                                        : 'border-slate-100 bg-white hover:border-dlp-brand/20'}
                                `}
                            >
                                <div className="flex-shrink-0 p-2 rounded-full bg-white shadow-sm border border-slate-100">
                                    <MoonIcon className="w-6 h-6 text-dlp-brand" />
                                </div>
                                <div>
                                    <h4 className={`font-bold ${config.yeastPercentage <= 0.4 ? 'text-dlp-brand' : 'text-slate-800'}`}>{t('calculator.wz_time_slow_title', { defaultValue: 'Slow (Tomorrow+)' })}</h4>
                                    <p className="text-[11px] text-slate-500 mt-1">{t('calculator.wz_time_slow_desc', { defaultValue: 'Rest in the fridge (Cold Ferment). Complex flavor and maximum digestibility.' })}</p>
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
                            className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-gradient-to-br from-[#51a145] to-[#36782c] hover:brightness-110 shadow-lg transition-all"
                        >
                            {t('general.next')} <ArrowRightIcon className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )
            }

            {/* Step 4: Environment */}
            {
                currentStep === 4 && (
                    <div className="animate-fade-in space-y-4">
                        <StepIndicator
                            step={4}
                            title={t('calculator.environment', { defaultValue: 'Baking Environment' })}
                            description={t('calculator.environment_desc', { defaultValue: 'Adjust for room temperature and oven limits to perfect the final bake.' })}
                            active={true}
                        />
                        <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50 mb-4">
                            <p className="text-[11px] text-dlp-brand flex items-start gap-2 italic">
                                <span className="bg-white p-1 rounded-full shadow-sm"><FireIcon className="w-3 h-3 text-dlp-brand" /></span> {t('calculator.wizard_env_tip', { defaultValue: 'Tell us about your kitchen and oven for the best results.' })}
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
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">All set!</p>
                                <button
                                    disabled
                                    className="px-8 py-3 rounded-2xl font-bold text-white bg-gradient-to-br from-[#51a145] to-[#36782c] shadow-xl shadow-[#51a145]/20 cursor-default animate-pulse"
                                >
                                    {t('calculator.scroll_for_recipe', { defaultValue: 'Recipe Ready!' })}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

        </div >
    );
};


