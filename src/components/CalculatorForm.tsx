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
} from '@/types';
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
import { STYLES_DATA } from '@/data/styles/registry';
import { useTranslation } from '@/i18n';

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
  calculatorMode: 'basic' | 'advanced';
  hasProAccess: boolean;
  onOpenPaywall: () => void;
  onboardingState?: OnboardingState;
  results: DoughResult | null;
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
}) => {
  const { t } = useTranslation(['common', 'calculator']);
  const isBasic = calculatorMode === 'basic';
  const isAnySourdough = config.yeastType === YeastType.SOURDOUGH_STARTER || config.yeastType === YeastType.USER_LEVAIN;

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

  const handleSavePreset = () => {
    // Placeholder for save preset logic
    console.log(t('calculator.save_preset_clicked'));
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
  const StepBanner = ({ step, title, description }: { step: number, title: string, description: string }) => {
    if (!isBasic) return null;
    return (
      <div className="mb-4 rounded-lg bg-dlp-bg-muted border border-dlp-border p-4 animate-fade-in">
        <h4 className="text-sm font-bold text-dlp-text-primary flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-dlp-accent text-white text-[10px]">
            {step}
          </span>
          {title}
        </h4>
        <p className="text-xs text-dlp-text-secondary mt-1 ml-7">{description}</p>
      </div>
    );
  };

  // Calculate dynamic weight limits
  let minW = 10;
  let maxW = 2000;
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
    <div className="space-y-8">

      {/* Step 1: Style Selection */}
      <div className="animate-fade-in">
        <StepBanner
          step={1}
          title={t('general.choose_your_style')}
          description={t('calculator.choose_style_desc')}
        />
        <StyleSection
          config={config}
          onBakeTypeChange={onBakeTypeChange}
          onStyleChange={onStyleChange}
          recipeStylesToShow={recipeStylesToShow}
          isBasic={isBasic}
          currentPreset={currentPreset}
          onResetPreset={() => onStyleChange('')}
        />
      </div>

      {/* Step 2: Quantity */}
      {(!isBasic || hasStyle) && (
        <div className="animate-fade-in-up">
          <StepBanner
            step={2}
            title={t('general.define_quantity')}
            description={t('calculator.define_quantity_desc')}
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
        <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>

          <div>
            <StepBanner
              step={3}
              title={t('general.customize_ingredients')}
              description={t('calculator.customize_ing_desc')}
            />
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 mb-6">
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
              title={t('general.fermentation_strategy')}
              description={t('calculator.fermentation_strategy_desc')}
            />
            <FermentationSection
              config={config}
              onConfigChange={onConfigChange}
              errors={errors}
              isBasic={isBasic}
              isAnySourdough={isAnySourdough}
              hasProAccess={hasProAccess}
              onOpenPaywall={onOpenPaywall}
              allowedTechniques={getAllowedFermentationTechniques(config.recipeStyle, config.bakeType)}
            />
          </div>

          <div>
            <StepBanner
              step={5}
              title={t('general.baking_environment')}
              description={t('calculator.baking_env_desc')}
            />
            <EnvironmentSection
              config={config}
              onConfigChange={onConfigChange}
              defaultOven={defaultOven}
            />
          </div>

        </div>
      )}

      {!isBasic && (
        <LockedTeaser featureKey="calculator.save_preset">
          <FormSection
            title={t('general.save_custom_preset')}
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
