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
import { YEAST_OPTIONS, DOUGH_STYLE_PRESETS } from '@/constants';

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
}) => {
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

  const handleSavePreset = () => {
    // Placeholder for save preset logic
    console.log("Save preset clicked");
  };

  const recipeStylesToShow = useMemo(() => {
    return DOUGH_STYLE_PRESETS.filter(p => p.type === config.bakeType);
  }, [config.bakeType]);

  const currentPreset = useMemo(() => {
    return DOUGH_STYLE_PRESETS.find(p => p.id === config.stylePresetId);
  }, [config.stylePresetId]);

  return (
    <div className="space-y-6">
      <StyleSection
        config={config}
        onBakeTypeChange={onBakeTypeChange}
        onStyleChange={onStyleChange}
        recipeStylesToShow={recipeStylesToShow}
        isBasic={isBasic}
        currentPreset={currentPreset}
        onResetPreset={() => onStyleChange('')}
      />

      <QuantitySection
        config={config}
        onConfigChange={onConfigChange}
        calculationMode={calculationMode}
        onCalculationModeChange={onCalculationModeChange}
        errors={errors}
        inputRef={inputRefs?.numPizzas}
      />

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
        getRange={getRange}
        getSelectClasses={getSelectClasses}
      />

      <FermentationSection
        config={config}
        onConfigChange={onConfigChange}
        errors={errors}
        isBasic={isBasic}
        isAnySourdough={isAnySourdough}
        hasProAccess={hasProAccess}
        onOpenPaywall={onOpenPaywall}
        allowedTechniques={currentPreset?.fermentationMethods || []}
      />

      <EnvironmentSection
        config={config}
        onConfigChange={onConfigChange}
      />

      {!isBasic && (
        <LockedTeaser featureKey="calculator.save_preset">
          <FormSection
            title="Save Custom Preset"
            description="Save the current configuration for future use."
            icon={<BookmarkSquareIcon className="h-6 w-6" />}
          >
            <button
              onClick={handleSavePreset}
              className="w-full flex items-center justify-center gap-2 rounded-md bg-dlp-accent py-2 px-3 text-sm font-semibold text-white shadow-dlp-sm transition-colors hover:bg-dlp-accent-hover"
            >
              Save as Custom Style
            </button>
          </FormSection>
        </LockedTeaser>
      )}

      <div>
        <button
          type="button"
          onClick={onReset}
          className="w-full rounded-lg bg-dlp-bg-muted py-3 px-4 text-sm font-semibold text-dlp-text-secondary shadow-dlp-sm transition-all hover:bg-dlp-border-strong focus:outline-none focus:ring-2 focus:ring-dlp-accent focus:ring-offset-2"
        >
          Reset Fields
        </button>
      </div>

      {!hasProAccess && (
        <div className="mt-6 rounded-lg bg-dlp-bg-muted border border-dlp-border p-4 text-center shadow-dlp-sm">
          <p className="text-sm font-bold text-dlp-text-primary">Stop guessing. Start mastering.</p>
          <p className="mt-0.5 text-xs text-dlp-text-secondary">Professional tools for less than 25¢ a day.</p>
          <button
            onClick={onOpenPaywall}
            className="mt-3 rounded-full bg-dlp-accent px-4 py-1.5 text-xs font-bold text-white transition-transform hover:scale-105 hover:bg-dlp-accent-hover shadow-dlp-sm"
          >
            Upgrade to Pro
          </button>
        </div>
      )}
    </div>
  );
};

export default CalculatorForm;
