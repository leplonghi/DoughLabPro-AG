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
  OnboardingState,
} from '@/types';
import UnitSelector from '@/components/calculator/UnitSelector';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';
import { InfoIcon, SettingsIcon } from '@/components/ui/Icons';
import AppShellHeader from '@/components/ui/AppShellHeader';
import AppSurface from '@/components/ui/AppSurface';
import OnboardingTooltip from '@/components/onboarding/OnboardingTooltip';
import { AdCard } from '@/marketing/ads/AdCard';
import { ModeSelectionScreen } from '@/components/calculator/ModeSelectionScreen';
import { SchedulerSection } from '@/components/dashboard/sections/SchedulerSection';
import { AssemblySection } from '@/components/dashboard/sections/AssemblySection';
import { LogisticsSection } from '@/components/dashboard/sections/LogisticsSection';
import { FloatingHelpButton } from '@/components/ui/FloatingHelpButton';
import { Calendar, Layers, Truck } from 'lucide-react';
import { getPageMeta } from '@/app/appShell';

const ProductionDashboardTabs = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'scheduler' | 'batch' | 'logistics'>('scheduler');

  return (
    <div className="dlp-surface-soft rounded-2xl overflow-hidden flex flex-col">
      {/* Header & Tabs Container */}
      <div className="border-b border-dlp-border px-3 py-2">
        {/* Title Area */}
        <div className="px-2 py-2 flex items-center justify-between">
          <h3 className="text-xs font-bold text-[#1B4332] flex items-center gap-2 uppercase tracking-wider">
            <Layers size={16} className="text-[#51a145]" />
            Production & Logistics
          </h3>
          <span className="text-[9px] font-bold text-dlp-text-muted bg-white/70 px-2 py-1 rounded-full uppercase tracking-widest">Commercial Tools</span>
        </div>

        {/* Cleaner Tabs */}
        <div className="flex bg-white/70 p-1 rounded-xl border border-white/70">
          {[
            { id: 'scheduler', icon: Calendar, label: t('ui.schedule_309') },
            { id: 'batch', icon: Layers, label: t('ui.batch_310') },
            { id: 'logistics', icon: Truck, label: t('ui.logistics_311') }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-200
                ${activeTab === tab.id
                  ? 'bg-white text-[#51a145] shadow-sm border border-white/80'
                  : 'text-dlp-text-muted hover:text-dlp-text-secondary hover:bg-white/60'}`}
            >
              <tab.icon size={14} className={activeTab === tab.id ? 'text-[#51a145]' : 'text-slate-400'} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 bg-white/80 min-h-[220px]">
        {activeTab === 'scheduler' && <SchedulerSection />}
        {activeTab === 'batch' && <AssemblySection />}
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
  const { t } = useTranslation(['common', 'calculator', 'dashboard', 'method', 'ui']);
  const { levains, addCustomPreset, customPresets, isFavorite } = useUser();
  const formRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const saveButtonRef = useRef<HTMLButtonElement>(null);
  const calculatorMeta = getPageMeta('calculator');

  const selectedLevain = useMemo(() => {
    if (props.config.yeastType === YeastType.USER_LEVAIN) {
      return levains.find(l => l.id === props.config.levainId) || levains.find(l => l.isDefault) || levains[0];
    }
    return null;
  }, [props.config.yeastType, props.config.levainId, levains]);

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
    <div className="space-y-8 animate-slide-up pb-24">
      <AppShellHeader
        eyebrow={calculatorMeta.eyebrow}
        title={calculatorMeta.title}
        description={calculatorMeta.description}
        size="compact"
      >
        <div className="rounded-full border border-emerald-200/70 bg-white/80 px-3 py-1 text-xs font-semibold text-dlp-text-secondary shadow-sm">
          {props.hasProAccess ? 'Pro bake workspace active' : 'Free bake workspace'}
        </div>
      </AppShellHeader>

      <AppSurface className="p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-black font-heading uppercase tracking-[0.2em] text-slate-400">
              {t('calculator.mode', { defaultValue: 'MODE:' })}
            </p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">Choose the right build surface for this bake</h2>
          </div>
          <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500 sm:block">
            Switch between guided, basic, and advanced control
          </div>
        </div>
        <ModeSelectionScreen
          selectedMode={props.calculatorMode}
          onSelectMode={props.onCalculatorModeChange}
        />
      </AppSurface>

      {/* 2. Laboratory Interface Area */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        {/* Left Form: Calibration */}
        <div className="space-y-8" ref={formRef}>
          <AppSurface className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{t('calculator.settings', { defaultValue: 'Settings:' })}</span>
              <UnitSelector unit={props.unit} onUnitChange={props.onUnitChange} />
            </div>
            <div className="group relative">
              <div className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-[#1B4332] hover:bg-emerald-50 transition-all cursor-help">
                <span className="sr-only">Info</span>
                <InfoIcon size={16} />
              </div>
              <div className="pointer-events-none absolute bottom-full right-0 z-10 mb-4 w-64 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="bg-[#1B4332] text-white p-4 rounded-2xl text-[11px] leading-relaxed shadow-xl border border-white/10 italic">
                  {t('form.tooltips.ui_mode')}
                </div>
              </div>
            </div>
          </AppSurface>

          <AppSurface className="p-0.5">
            <CalculatorForm
              {...props}
              levains={levains}
              customPresets={customPresets}
              selectedLevain={selectedLevain}
              onSavePreset={handleSavePreset}
              isFavorite={isFavorite}
            />
          </AppSurface>
        </div>

        {/* Right Panel: Results & Analytics */}
        <div className="lg:sticky lg:top-24 space-y-8" ref={resultsRef}>
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

          {!props.hasProAccess && <AdCard context="calculator_sidebar" />}

          {/* Business Insights Tab Bar */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
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
    </div>
  );
};

export default CalculatorPage;


