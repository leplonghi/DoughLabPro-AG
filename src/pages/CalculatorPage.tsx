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
import { SchedulerSection } from '@/components/dashboard/sections/SchedulerSection';
import { AssemblySection } from '@/components/dashboard/sections/AssemblySection';
import { LogisticsSection } from '@/components/dashboard/sections/LogisticsSection';
import { Calendar, Layers, Truck } from 'lucide-react';

const ProductionDashboardTabs = () => {
  const [activeTab, setActiveTab] = useState<'scheduler' | 'assembly' | 'logistics'>('scheduler');

  return (
    <div className="flex flex-col h-full bg-transparent">
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/20">
        <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-950 dark:text-white">
          <Layers size={16} className="text-emerald-700 dark:text-emerald-300" />
          Production & Logistics
        </h3>
        <p className="text-xs text-emerald-900/70 dark:text-emerald-100/70 mt-1 max-w-2xl font-medium">
          Advanced tools for planning. Schedule your start time, manage variants, and check logistics.
        </p>
      </div>

      {/* Tabs - Glassmorphic */}
      <div className="flex border-b border-white/20 bg-white/10 backdrop-blur-md">
        <button
          onClick={() => setActiveTab('scheduler')}
          className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${activeTab === 'scheduler' ? 'text-emerald-900 dark:text-white bg-white/40 border-b-2 border-emerald-600 shadow-sm' : 'text-emerald-800/60 dark:text-emerald-200/60 hover:text-emerald-900 hover:bg-white/20'}`}
        >
          <Calendar size={14} /> Schedule
        </button>
        <button
          onClick={() => setActiveTab('assembly')}
          className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${activeTab === 'assembly' ? 'text-emerald-900 dark:text-white bg-white/40 border-b-2 border-emerald-600 shadow-sm' : 'text-emerald-800/60 dark:text-emerald-200/60 hover:text-emerald-900 hover:bg-white/20'}`}
        >
          <Layers size={14} /> Assembly
        </button>
        <button
          onClick={() => setActiveTab('logistics')}
          className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${activeTab === 'logistics' ? 'text-emerald-900 dark:text-white bg-white/40 border-b-2 border-emerald-600 shadow-sm' : 'text-emerald-800/60 dark:text-emerald-200/60 hover:text-emerald-900 hover:bg-white/20'}`}
        >
          <Truck size={14} /> Logistics
        </button>
      </div>

      <div className="p-4">
        {activeTab === 'scheduler' && <SchedulerSection />}
        {activeTab === 'assembly' && <AssemblySection />}
        {activeTab === 'logistics' && <LogisticsSection />}
      </div>
    </div>
  );
};

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

          {/* Integrated Production Tools (Advanced) */}
          <div className="mt-8 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900 dark:to-teal-900 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30 overflow-hidden">
            <ProductionDashboardTabs />
          </div>

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
