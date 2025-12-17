import React, { useMemo, useState, useRef } from 'react';
import CalculatorForm from '@/components/CalculatorForm';
import { ResultsDisplay } from '@/components/ResultsDisplay';
import {
  DoughConfig,
  DoughResult,
  BakeType,
  YeastType,
  Unit,
  UnitSystem,
  FormErrors,
  Oven,
  FlourDefinition,
  CalculationMode,
  Levain,
  OnboardingState,
} from '@/types';
import UnitSelector from '@/components/calculator/UnitSelector';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';
import { InfoIcon } from '@/components/ui/Icons';
import OnboardingTooltip from '@/components/onboarding/OnboardingTooltip';
import { AdCard } from '@/marketing/ads/AdCard';
import { ModeSelectionScreen } from '@/components/calculator/ModeSelectionScreen';
import { ProductionTimeline } from '@/components/calculator/ProductionTimeline';

interface CalculatorPageProps {
  config: DoughConfig;
  errors: FormErrors;
  onConfigChange: (newConfig: Partial<DoughConfig>) => void;
  onBakeTypeChange: (bakeType: BakeType) => void;
  onStyleChange: (presetId: string) => void;
  onYeastTypeChange: (yeastType: YeastType) => void;
  onReset: () => void;
  results: DoughResult | null;
  unit: Unit;
  onUnitChange: (unit: Unit) => void;
  unitSystem: UnitSystem;
  onStartBatch: () => void;
  defaultOven?: Oven;
  selectedFlour?: FlourDefinition;
  calculationMode: CalculationMode;
  onCalculationModeChange: (mode: CalculationMode) => void;
  calculatorMode: 'wizard' | 'basic' | 'advanced';
  onCalculatorModeChange: (mode: 'wizard' | 'basic' | 'advanced') => void;
  hasProAccess: boolean;
  onOpenPaywall: () => void;
  onboardingState?: OnboardingState;
  onOnboardingNextStep?: () => void;
  onOnboardingBackStep?: () => void;
  inputRefs?: {
    numPizzas?: React.RefObject<HTMLInputElement>;
  };
}

const CalculatorPage: React.FC<CalculatorPageProps> = (props) => {
  const { t } = useTranslation(['common', 'calculator', 'dashboard', 'method']);
  const { levains, addCustomPreset, customPresets, isFavorite } = useUser();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isModeSelectionExpanded, setIsModeSelectionExpanded] = useState(true);

  // Refs for onboarding targets
  const formRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const numPizzasRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const saveButtonRef = useRef<HTMLButtonElement>(null);

  const selectedLevain = useMemo(() => {
    if (props.config.yeastType === YeastType.USER_LEVAIN) {
      return levains.find(l => l.id === props.config.levainId) || levains.find(l => l.isDefault) || levains[0];
    }
    return null;
  }, [props.config.yeastType, props.config.levainId, levains]);

  const handleModeSelect = (mode: 'wizard' | 'basic' | 'advanced') => {
    props.onCalculatorModeChange(mode);
  };

  const handleSavePreset = async (name: string) => {
    try {
      await addCustomPreset({
        name,
        config: props.config,
        description: `Created on ${new Date().toLocaleDateString()}`
      });
    } catch (err) {
      console.error("Failed to save preset:", err);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* 1. Mode Selection - Distinct and Separated */}
      <section className="bg-white rounded-2xl shadow-sm border border-dlp-border p-4 md:p-6 mb-8">
        <ModeSelectionScreen
          selectedMode={props.calculatorMode}
          onSelectMode={handleModeSelect}
        />
      </section>

      {/* 2. Calculator Area */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6" ref={formRef}>
          <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-lg border border-dlp-border shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-dlp-text-secondary">{t('calculator.settings', { defaultValue: 'Settings' })}:</span>
              <UnitSelector
                unit={props.unit}
                onUnitChange={props.onUnitChange}
              />
            </div>
            {/* Info/Help */}
            <div className="group relative">
              <InfoIcon className="h-4 w-4 cursor-help text-dlp-text-muted " />
              <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-72 -translate-x-1/2 rounded-xl bg-dlp-bg-card p-3 text-xs text-dlp-text-primary opacity-0 shadow-dlp-md transition-opacity duration-300 group-hover:opacity-100 border border-dlp-border ">
                <p dangerouslySetInnerHTML={{ __html: t('form.tooltips.ui_mode') }} />
              </div>
            </div>
          </div>

          <CalculatorForm
            {...props}
            levains={levains}
            customPresets={customPresets}
            selectedLevain={selectedLevain}
            inputRefs={{ numPizzas: props.inputRefs?.numPizzas }}
            onSavePreset={handleSavePreset}
            isFavorite={isFavorite}
          />
        </div>



        <div className="lg:sticky lg:top-24" ref={resultsRef}>
          <ResultsDisplay
            results={props.results}
            config={props.config}
            unit={props.unit}
            onUnitChange={props.onUnitChange}
            unitSystem={props.unitSystem}
            onConfigChange={props.onConfigChange}
            onStartBatch={props.onStartBatch}
            selectedFlour={props.selectedFlour}
            calculatorMode={props.calculatorMode}
            calculationMode={props.calculationMode}
            hasProAccess={props.hasProAccess}
            onOpenPaywall={props.onOpenPaywall}
            saveButtonRef={saveButtonRef}
            onboardingStep={props.onboardingState?.step}
            selectedLevain={selectedLevain}
          />

          {props.calculationMode === 'TARGET_TIME' && (
            <ProductionTimeline config={props.config} hasProAccess={props.hasProAccess} />
          )}
        </div>
      </div>

      {props.onboardingState?.isActive && (
        <OnboardingTooltip
          targetElement={
            props.onboardingState.step === 1 ? formRef.current :
              props.onboardingState.step === 3 ? resultsRef.current :
                props.onboardingState.step === 4 ? saveButtonRef.current : null
          }
          step={props.onboardingState.step}
          totalSteps={6}
          title={t(`onboarding.step${props.onboardingState.step}_title`)}
          description={t(`onboarding.step${props.onboardingState.step}_desc`)}
          onNext={props.onOnboardingNextStep!}
          onBack={props.onOnboardingBackStep!}
          onFinish={() => { }}
        />
      )}
      <AdCard context="calculator_footer" className="mt-8 mb-4" />
    </div>
  );
};

export default CalculatorPage;
