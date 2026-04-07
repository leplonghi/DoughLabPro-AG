import React, { useMemo, useState } from 'react';
import {
  DoughConfig,
  YeastType,
  BakeType,
  FormErrors,
  CalculationMode,
  Levain,
  Oven,
  FlourDefinition,
  OnboardingState,
  DoughResult,
  CustomPreset,
} from '@/types';
import { WizardMode } from '@/components/calculator/wizard/WizardMode';
import {
  BookmarkSquareIcon,
  SparklesIcon,
  RotateCcwIcon,
} from '@/components/ui/Icons';
import FormSection from '@/components/calculator/AccordionSection';
import IngredientsSection from '@/components/calculator/sections/IngredientsSection';
import StyleSection from '@/components/calculator/sections/StyleSection';
import FermentationSection from '@/components/calculator/sections/FermentationSection';
import QuantitySection from '@/components/calculator/sections/QuantitySection';
import EnvironmentSection from '@/components/calculator/sections/EnvironmentSection';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import { getRange } from '@/logic/validationLogic';
import { getAllowedFermentationTechniques } from '@/logic/fermentationLogic';
import { YEAST_OPTIONS, DOUGH_STYLE_PRESETS, DOUGH_WEIGHT_RANGES } from '@/constants';
import { STYLES_DATA, getStyleById } from '@/data/styles/registry';
import { suggestPresetName } from '@/logic/customPresets';
import { useTranslation } from '@/i18n';
import { AssemblySection } from '@/components/calculator/ingredients/AssemblySection';

import { LockFeature } from "@/components/auth/LockFeature";

interface CalculatorFormProps {
  config: DoughConfig;
  errors: FormErrors;
  onConfigChange: (newConfig: Partial<DoughConfig>) => void;
  onBakeTypeChange: (bakeType: BakeType) => void;
  onStyleChange: (presetId: string) => void;
  onYeastTypeChange: (yeastType: YeastType) => void;
  onReset: () => void;
  levains: Levain[];
  selectedLevain?: Levain;
  inputRefs?: {
    numPizzas?: React.RefObject<HTMLInputElement>;
  };
  defaultOven?: Oven;
  selectedFlour?: FlourDefinition;
  calculationMode: CalculationMode;
  onCalculationModeChange: (mode: CalculationMode) => void;
  calculatorMode: 'wizard' | 'basic' | 'advanced';
  hasProAccess: boolean;
  onOpenPaywall: () => void;
  onboardingState?: OnboardingState;
  results: DoughResult | null;
  onSavePreset?: (name: string) => Promise<void>;
  customPresets?: CustomPreset[];
  isFavorite: (id: string, type: string) => boolean;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
  config,
  errors,
  onConfigChange,
  onBakeTypeChange,
  onStyleChange,
  onYeastTypeChange,
  onReset,
  levains,
  selectedLevain,
  inputRefs,
  defaultOven,
  selectedFlour,
  calculationMode,
  onCalculationModeChange,
  calculatorMode,
  hasProAccess,
  onOpenPaywall,
  onboardingState,
  results,
  onSavePreset,
  customPresets = [],
  isFavorite,
}) => {
  const { t } = useTranslation(['common', 'calculator']);
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
  const [presetName, setPresetName] = useState('');
  const [presetError, setPresetError] = useState<string | null>(null);
  const [isSavingPreset, setIsSavingPreset] = useState(false);
  const isWizard = calculatorMode === 'wizard';
  const isBasic = calculatorMode === 'basic';
  const isAnySourdough = config.yeastType === YeastType.SOURDOUGH_STARTER || config.yeastType === YeastType.USER_LEVAIN;

  const allowedTechniques = useMemo(() => {
    return getAllowedFermentationTechniques(config.recipeStyle, config.bakeType, config.stylePresetId);
  }, [config.recipeStyle, config.bakeType, config.stylePresetId]);

  const recipeStylesToShow = useMemo(() => {
    return DOUGH_STYLE_PRESETS.filter(p => p.type === config.bakeType);
  }, [config.bakeType]);

  const currentPreset = useMemo(() => {
    return DOUGH_STYLE_PRESETS.find(p => p.id === config.stylePresetId);
  }, [config.stylePresetId]);

  const hasStyle = !!config.stylePresetId || !!config.selectedStyleId || !!config.baseStyleName;
  const hasQuantity = hasStyle && config.numPizzas > 0 && config.doughBallWeight > 0;
  const minW = 10, maxW = 2000;
  const assemblyStyle = config.stylePresetId ? getStyleById(config.stylePresetId) : getStyleById('new_york_slice_v2');

  const handleStyleChange = (id: string) => {
    const custom = customPresets.find(p => p.id === id);
    if (custom) {
      onConfigChange({ ...custom.config, stylePresetId: id });
    } else {
      onStyleChange(id);
    }
  };

  if (isWizard) {
    return (
      <WizardMode
        config={config}
        errors={errors}
        onConfigChange={onConfigChange}
        onBakeTypeChange={onBakeTypeChange}
        onStyleChange={handleStyleChange}
        onYeastTypeChange={onYeastTypeChange}
        levains={levains}
        selectedLevain={selectedLevain}
        inputRefs={inputRefs}
        defaultOven={defaultOven}
        selectedFlour={selectedFlour}
        calculationMode={calculationMode}
        onCalculationModeChange={onCalculationModeChange}
        hasProAccess={hasProAccess}
        onOpenPaywall={onOpenPaywall}
        results={results}
        customPresets={customPresets}
      />
    );
  }

  const handleNumberChange = (name: string, value: number) => {
    onConfigChange({ [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'yeastType') {
      onYeastTypeChange(value as YeastType);
    } else {
      onConfigChange({ [name]: value });
    }
  };

  const handleIngredientsUpdate = (ingredients: any[]) => {
    onConfigChange({ ingredients });
  };

  const handleSavePreset = async () => {
    if (!onSavePreset) return;
    const defaultName = suggestPresetName(config);
    setPresetName(defaultName);
    setPresetError(null);
    setIsSaveDialogOpen(true);
  };

  const handleConfirmSavePreset = async () => {
    if (!onSavePreset) return;
    const trimmedName = presetName.trim();

    if (!trimmedName) {
      setPresetError('Enter a name for this preset.');
      return;
    }

    setIsSavingPreset(true);
    setPresetError(null);

    try {
      await onSavePreset(trimmedName);
      setIsSaveDialogOpen(false);
    } catch (error) {
      console.error(error);
      setPresetError('We could not save this preset right now.');
    } finally {
      setIsSavingPreset(false);
    }
  };

  const StepBanner = ({ step, title, description }: { step: number, title: string, description: string }) => {
    if (!isBasic) return null;
    return (
      <div className="mb-3 flex items-start gap-3 animate-slide-up">
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white border-2 border-[#51a145] text-[#51a145] flex items-center justify-center text-[10px] font-bold shadow-sm">
          {step}
        </div>
        <div>
          <h4 className="text-[13px] font-bold font-heading text-slate-800 uppercase tracking-wide">{title}</h4>
          <p className="text-[10px] text-slate-500 mt-0.5">{description}</p>
        </div>
      </div>
    );
  };


  return (
    <div className="space-y-4 max-w-4xl mx-auto px-1 py-4">
      {/* 1. Style Selection */}
      <div className="animate-slide-up">
        <StepBanner step={1} title={t('common.general.choose_your_style')} description={t('calculator.choose_style_desc')} />
        <StyleSection
          config={config}
          onBakeTypeChange={onBakeTypeChange}
          onStyleChange={handleStyleChange}
          recipeStylesToShow={recipeStylesToShow}
          isBasic={isBasic}
          currentPreset={currentPreset}
          onResetPreset={() => onStyleChange('')}
          customPresets={customPresets}
          isFavorite={isFavorite}
        />
      </div>

      {/* 2. Quantity */}
      {(!isBasic || hasStyle) && (
        <div className="animate-slide-up">
          <StepBanner step={2} title={t('common.general.define_quantity')} description={t('calculator.define_quantity_desc')} />
          <QuantitySection
            config={config}
            onConfigChange={onConfigChange}
            calculationMode={calculationMode}
            onCalculationModeChange={onCalculationModeChange}
            errors={errors}
            numPizzasRef={inputRefs?.numPizzas}
            minDoughBallWeight={minW}
            maxDoughBallWeight={maxW}
          />
        </div>
      )}

      {/* 3+ Flow */}
      {(!isBasic || hasQuantity) && (
        <div className="space-y-4">
          <div className="animate-slide-up">
            <StepBanner step={3} title={t('common.general.customize_ingredients')} description={t('calculator.customize_ing_desc')} />
            <IngredientsSection
              config={config}
              onConfigChange={onConfigChange}
              errors={errors}
              handleNumberChange={handleNumberChange}
              handleSelectChange={handleSelectChange}
              handleIngredientsUpdate={handleIngredientsUpdate}
              isBasic={isBasic}
              isAnySourdough={isAnySourdough}
              levains={levains}
              selectedLevain={selectedLevain}
              YEAST_OPTIONS={YEAST_OPTIONS}
              getRange={(field) => getRange(field, config.bakeType)}
              getSelectClasses={() => "w-full bg-slate-100 border-none rounded-xl py-2 px-3 text-sm font-bold text-slate-700 outline-none"}
              results={results}
            />
          </div>

          <div className="animate-slide-up">
            <StepBanner step={4} title={t('common.general.fermentation_strategy')} description={t('calculator.fermentation_strategy_desc')} />
            <FermentationSection
              config={config}
              onConfigChange={onConfigChange}
              errors={errors}
              isBasic={isBasic}
              isAnySourdough={isAnySourdough}
              hasProAccess={hasProAccess}
              onOpenPaywall={onOpenPaywall}
              selectedLevain={selectedLevain}
              allowedTechniques={allowedTechniques}
            />
          </div>

          <div className="animate-slide-up">
            <StepBanner step={5} title={t('common.general.baking_environment')} description={t('calculator.baking_env_desc')} />
            <EnvironmentSection
              config={config}
              onConfigChange={onConfigChange}
              defaultOven={defaultOven}
            />
          </div>

          {assemblyStyle && (
            <div className="animate-slide-up">
              <StepBanner step={6} title={t('calculator.assembly_toppings')} description={t('calculator.assembly_toppings_desc_pizza')} />
              <AssemblySection
                style={assemblyStyle}
                selectedIncrements={config.assemblyIncrements || []}
                onUpdateIncrements={(incs) => onConfigChange({ assemblyIncrements: incs })}
                bakingTempC={config.bakingTempC}
                bakeType={config.bakeType}
              />
            </div>
          )}
        </div>
      )}

      {/* Action Area */}
      <div className="pt-6 border-t border-slate-100 space-y-3">
        {!isBasic && (
          <LockFeature featureKey="calculator.save_preset">
            <button
              onClick={handleSavePreset}
              className="w-full flex items-center justify-center gap-3 rounded-2xl bg-white border border-slate-200 py-3.5 px-6 text-sm font-bold text-[#1B4332] shadow-sm hover:border-[#1B4332] hover:bg-emerald-50/30 transition-all active:scale-[0.98]"
            >
              <BookmarkSquareIcon size={18} />
              {t('calculator.save_as_custom_style')}
            </button>
          </LockFeature>
        )}

        <button
          type="button"
          onClick={onReset}
          className="w-full flex items-center justify-center gap-3 rounded-2xl bg-slate-50 py-3.5 px-6 text-sm font-bold text-slate-500 hover:bg-slate-100 transition-all active:scale-[0.98]"
        >
          <RotateCcwIcon size={18} />
          {t('calculator.reset_fields')}
        </button>
      </div>

      {/* Pro Teaser */}
      {!hasProAccess && (
        <div className="mt-6 group relative overflow-hidden rounded-[2.5rem] bg-[#1B4332] p-6 text-white shadow-2xl transition-all hover:scale-[1.01]">
          <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-700">
            <SparklesIcon size={120} />
          </div>
          <div className="relative z-10 text-center max-w-sm mx-auto">
            <h3 className="text-xl font-bold font-heading mb-2">{t('calculator.stop_guessing_start_mastering')}</h3>
            <p className="text-sm text-emerald-100/70 mb-8 leading-relaxed">{t('calculator.professional_tools_for_less_than_25_a_day')}</p>
            <button
              onClick={onOpenPaywall}
              className="bg-gradient-to-br from-[#51a145] to-[#10B981] hover:brightness-110 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl transition-all hover:shadow-[#51a145]/20"
            >
              {t('calculator.upgrade_to_pro')}
            </button>
          </div>
        </div>
      )}

      {isSaveDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={() => setIsSaveDialogOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="save-preset-title"
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="save-preset-title" className="text-xl font-bold text-slate-900">
              Save Custom Preset
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Save this formula so you can load it again from the calculator and My Lab.
            </p>

            <label htmlFor="preset-name" className="mt-5 block text-sm font-medium text-slate-700">
              Preset name
            </label>
            <input
              id="preset-name"
              name="preset-name"
              type="text"
              autoComplete="off"
              value={presetName}
              onChange={(event) => setPresetName(event.target.value)}
              className="mt-2 block w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 shadow-sm transition-colors focus:border-dlp-brand focus:outline-none focus:ring-2 focus:ring-dlp-brand"
              placeholder="Saturday dough setup…"
            />

            {presetError && (
              <div className="mt-3 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                {presetError}
              </div>
            )}

            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={() => setIsSaveDialogOpen(false)}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmSavePreset}
                disabled={isSavingPreset}
                className="flex-1 rounded-xl bg-dlp-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-dlp-brand-hover disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSavingPreset ? 'Saving…' : 'Save Preset'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorForm;


