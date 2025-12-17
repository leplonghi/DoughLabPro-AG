import React, { useMemo } from 'react';
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
import { Increment, UserIngredient } from '@/types/ingredients';

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
  const isWizard = calculatorMode === 'wizard';

  const handleStyleChange = (id: string) => {
    // Check if it's a custom preset
    const custom = customPresets.find(p => p.id === id);
    if (custom) {
      // It's a custom preset! Load its config.
      // We keep the ID so the UI shows it as selected.
      onConfigChange({
        ...custom.config,
        stylePresetId: id,
      });
    } else {
      // Standard behavior (Parent loads standard styles or just sets ID)
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

  const isBasic = calculatorMode === 'basic'; // Wizard is now separate
  const isAnySourdough = config.yeastType === YeastType.SOURDOUGH_STARTER || config.yeastType === YeastType.USER_LEVAIN;

  // Calculate allowed fermentation techniques based on selected style
  const allowedTechniques = useMemo(() => {
    return getAllowedFermentationTechniques(config.recipeStyle, config.bakeType, config.stylePresetId);
  }, [config.recipeStyle, config.bakeType, config.stylePresetId]);

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

  const getSelectClasses = () => {
    return "block w-full rounded-md border-dlp-border shadow-dlp-sm focus:border-dlp-accent focus:ring-dlp-accent sm:text-sm";
  };

  const getInputClasses = (hasError: boolean) => {
    return `block w-full rounded-md border-dlp-border shadow-dlp-sm focus:border-dlp-accent focus:ring-dlp-accent sm:text-sm ${hasError ? 'border-dlp-error focus:border-dlp-error focus:ring-dlp-error' : ''
      }`;
  };



  const handleSavePreset = async () => {
    if (!onSavePreset) return;

    // Suggest a name
    const defaultName = suggestPresetName(config);
    const name = window.prompt(t('calculator.enter_preset_name', { defaultValue: 'Enter a name for your custom preset:' }), defaultName);

    if (name) {
      await onSavePreset(name);
    }
  };

  const recipeStylesToShow = useMemo(() => {
    return DOUGH_STYLE_PRESETS.filter(p => p.type === config.bakeType);
  }, [config.bakeType]);

  const currentPreset = useMemo(() => {
    return DOUGH_STYLE_PRESETS.find(p => p.id === config.stylePresetId);
  }, [config.stylePresetId]);

  // Guided Mode Logic
  const hasStyle = !!config.stylePresetId || !!config.selectedStyleId || !!config.baseStyleName;
  // Quantity is considered "valid" if we have valid numbers. Since defaults strictly exist, this is usually true.
  // But purely for the t('calculator.reveal') effect, it works because initially it renders, and subsequent steps depend on it.
  // To truly force "choice", we rely on the fact that Style is the primary trigger.
  const hasQuantity = hasStyle && config.numPizzas > 0 && config.doughBallWeight > 0;

  // Helper for instruction banners
  const StepBanner = ({ step, title, description, tip }: { step: number, title: string, description: string, tip?: string }) => {
    if (!isBasic) return null;

    return (
      <div className={`mb-3 rounded-lg border p-4 animate-fade-in ${isWizard
        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-sm'
        : 'bg-dlp-bg-muted border-dlp-border'
        }`}>
        <div className="flex items-start gap-3">
          <span className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-white text-sm font-bold ${isWizard ? 'bg-blue-500 shadow-md' : 'bg-dlp-accent'
            }`}>
            {step}
          </span>
          <div className="flex-1">
            <h4 className={`text-sm font-bold ${isWizard ? 'text-blue-900' : 'text-dlp-text-primary'
              }`}>
              {title}
            </h4>
            <p className={`text-xs mt-1 ${isWizard ? 'text-blue-700' : 'text-dlp-text-secondary'
              }`}>
              {description}
            </p>
            {isWizard && tip && (
              <div className="mt-2 flex items-start gap-2 bg-white/60 rounded-md p-2 border border-blue-100">
                <span className="text-sm">💡</span>
                <p className="text-xs text-blue-800 font-medium">{tip}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Calculate dynamic weight limits
  let minW = 10;
  let maxW = 2000;
  // Use existing style lookup or fallback for Assembly
  const assemblyStyle = config.stylePresetId ? getStyleById(config.stylePresetId) : getStyleById('new_york_slice_v2');
  const fullStyle = STYLES_DATA.find(s => s.id === config.stylePresetId);

  if (fullStyle?.technicalProfile?.ballWeight) {
    minW = fullStyle.technicalProfile.ballWeight.min;
    maxW = fullStyle.technicalProfile.ballWeight.max;
  } else if (config.recipeStyle && DOUGH_WEIGHT_RANGES[config.recipeStyle]) {
    // Fallback to legacy string parsing if needs be, or just keep strict defaults
    const rangeStr = DOUGH_WEIGHT_RANGES[config.recipeStyle] || '';
    const nums = rangeStr.replace('g', '').split('-').map(s => parseFloat(s.trim()));
    if (nums.length === 2 && !isNaN(nums[0]) && !isNaN(nums[1])) {
      minW = nums[0];
      maxW = nums[1];
    }
  }

  return (
    <div className="space-y-5">

      {/* Wizard Welcome Banner */}
      {isWizard && (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 text-4xl">🪄</div>
            <div>
              <h3 className="text-lg font-bold mb-1">{t('calculator.wizard_welcome_title')}</h3>
              <p className="text-sm text-blue-50">{t('calculator.wizard_welcome_desc')}</p>
            </div>
          </div>
        </div>
      )}

      {/* Step 1: Style Selection */}
      <div className="animate-fade-in">
        <StepBanner
          step={1}
          title={t('common.general.choose_your_style')}
          description={t('calculator.choose_style_desc')}
          tip={t('calculator.wizard_tip_style')}
        />
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

      {/* Step 2: Quantity */}
      {(!isBasic || hasStyle) && (
        <div className="animate-fade-in-up">
          <StepBanner
            step={2}
            title={t('common.general.define_quantity')}
            description={t('calculator.define_quantity_desc')}
            tip={t('calculator.wizard_tip_quantity')}
          />
          <QuantitySection
            config={config}
            onConfigChange={onConfigChange}
            calculationMode={calculationMode}
            onCalculationModeChange={onCalculationModeChange}
            errors={errors}
            getInputClasses={getInputClasses}
            numPizzasRef={inputRefs?.numPizzas}
            minDoughBallWeight={minW}
            maxDoughBallWeight={maxW}
          />
        </div>
      )}

      {/* Step 3: Ingredients & Fermentation (Grouped for flow) */}
      {(!isBasic || hasQuantity) && (
        <div className="space-y-5 animate-fade-in-up" style={{ animationDelay: '100ms' }}>

          <div>
            <StepBanner
              step={3}
              title={t('common.general.customize_ingredients')}
              description={t('calculator.customize_ing_desc')}
              tip={t('calculator.wizard_tip_ingredients')}
            />
            <div className="bg-white rounded-2xl shadow-sm border border-dlp-border p-4 mb-2">
              <IngredientsSection
                config={config}
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
                getInputClasses={getInputClasses}
                getSelectClasses={getSelectClasses}
                selectedFlour={selectedFlour}
                results={results}
              />
            </div>
          </div>

          <div>
            <StepBanner
              step={4}
              title={t('common.general.fermentation_strategy')}
              description={t('calculator.fermentation_strategy_desc')}
              tip={t('calculator.wizard_tip_fermentation')}
            />
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



          <div>
            <StepBanner
              step={5}
              title={t('common.general.baking_environment')}
              description={t('calculator.baking_env_desc')}
              tip={t('calculator.wizard_tip_environment')}
            />
            <EnvironmentSection
              config={config}
              onConfigChange={onConfigChange}
              defaultOven={defaultOven}
            />
          </div>

          {/* Assembly Lab (Step 6) */}
          {assemblyStyle && (
            <div>
              <StepBanner
                step={6}
                title={t('calculator.assembly_toppings')}
                description={
                  config.bakeType === 'PIZZAS' ? t('calculator.assembly_toppings_desc_pizza') :
                    config.bakeType === 'BREADS_SAVORY' ? t('calculator.assembly_toppings_desc_bread') :
                      t('calculator.assembly_toppings_desc_pastry')
                }
                tip={t('calculator.wizard_tip_assembly')}
              />
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

      {!isBasic && (
        <LockedTeaser featureKey="calculator.save_preset">
          <FormSection
            title={t('common.general.save_custom_preset')}
            description={t('calculator.save_preset_desc')}
            icon={<BookmarkSquareIcon className="h-6 w-6" />}
          >
            <button
              onClick={handleSavePreset}
              className="w-full flex items-center justify-center gap-2 rounded-md bg-dlp-accent py-2 px-3 text-sm font-semibold text-white shadow-dlp-sm transition-colors hover:bg-dlp-accent-hover"
            >{t('calculator.save_as_custom_style')}</button>
          </FormSection>
        </LockedTeaser>
      )}

      <div>
        <button
          type="button"
          onClick={onReset}
          className="w-full rounded-lg bg-dlp-bg-muted py-3 px-4 text-sm font-semibold text-dlp-text-secondary shadow-dlp-sm transition-all hover:bg-dlp-border-strong focus:outline-none focus:ring-2 focus:ring-dlp-accent focus:ring-offset-2"
        >{t('calculator.reset_fields')}</button>
      </div>

      {!hasProAccess && (
        <div className="mt-6 rounded-lg bg-dlp-bg-muted border border-dlp-border p-4 text-center shadow-dlp-sm">
          <p className="text-sm font-bold text-dlp-text-primary">{t('calculator.stop_guessing_start_mastering')}</p>
          <p className="mt-0.5 text-xs text-dlp-text-secondary">{t('calculator.professional_tools_for_less_than_25_a_day')}</p>
          <button
            onClick={onOpenPaywall}
            className="mt-3 rounded-full bg-dlp-accent px-4 py-1.5 text-xs font-bold text-white transition-transform hover:scale-105 hover:bg-dlp-accent-hover shadow-dlp-sm"
          >{t('calculator.upgrade_to_pro')}</button>
        </div>
      )}
    </div>
  );
};

export default CalculatorForm;
