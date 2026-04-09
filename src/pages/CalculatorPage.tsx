import React, { useMemo, useState, useRef, useEffect } from 'react';
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
  QuantityInputMode,
  DifficultyLevel,
  OnboardingState,
} from '@/types';
import UnitSelector from '@/components/calculator/UnitSelector';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';
import { InfoIcon } from '@/components/ui/Icons';
import AppPageLayout from '@/components/ui/AppPageLayout';
import AppSurface from '@/components/ui/AppSurface';
import OnboardingTooltip from '@/components/onboarding/OnboardingTooltip';
import { AdCard } from '@/marketing/ads/AdCard';
import { ModeSelectionScreen } from '@/components/calculator/ModeSelectionScreen';
import { SchedulerSection } from '@/components/dashboard/sections/SchedulerSection';
import { AssemblySection as ProductionAssemblySection } from '@/components/dashboard/sections/AssemblySection';
import { LogisticsSection } from '@/components/dashboard/sections/LogisticsSection';
import { Calendar, Layers, Truck } from 'lucide-react';
import DifficultyLevelSelector from '@/components/calculator/DifficultyLevelSelector';
import { logCalculatorEvent } from '@/services/analytics';
import { ReverseSchedule } from '@/components/calculator/ReverseSchedule';
import { RecommendedProducts } from '@/components/ui/RecommendedProducts';
import { AssemblySection as ToppingsAssemblySection } from '@/components/calculator/ingredients/AssemblySection';
import { getCalculatorStyleById } from '@/features/calculator/data/stylePresets';

const ProductionDashboardTabs = () => {
  const { t, locale } = useTranslation();
  const isPortuguese = locale === 'pt-BR';
  const [activeTab, setActiveTab] = useState<'scheduler' | 'batch' | 'logistics'>('scheduler');
  const tabs: Array<{ id: 'scheduler' | 'batch' | 'logistics'; icon: typeof Calendar; label: string }> = [
    { id: 'scheduler', icon: Calendar, label: t('ui.schedule_309') },
    { id: 'batch', icon: Layers, label: t('ui.batch_310') },
    { id: 'logistics', icon: Truck, label: t('ui.logistics_311') }
  ];

  return (
    <div className="dlp-surface-soft rounded-2xl overflow-hidden flex flex-col">
      <div className="border-b border-dlp-border px-3 py-2">
        <div className="px-2 py-2 flex items-center justify-between">
          <h3 className="text-xs font-bold text-[#1B4332] flex items-center gap-2 uppercase tracking-wider">
            <Layers size={16} className="text-[#51a145]" />
            {isPortuguese ? 'Producao e Logistica' : 'Production & Logistics'}
          </h3>
          <span className="text-[9px] font-bold text-dlp-text-muted bg-white/70 px-2 py-1 rounded-full uppercase tracking-widest">
            {isPortuguese ? 'Ferramentas comerciais' : 'Commercial Tools'}
          </span>
        </div>

        <div className="flex bg-white/70 p-1 rounded-xl border border-white/70">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
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

      <div className="p-4 bg-white/80 min-h-[220px]">
        {activeTab === 'scheduler' && <SchedulerSection />}
        {activeTab === 'batch' && <ProductionAssemblySection />}
        {activeTab === 'logistics' && <LogisticsSection />}
      </div>
    </div>
  );
};

const getCalculatorVariant = (): 'A' | 'B' => {
  if (typeof window === 'undefined') return 'A';
  const storageKey = 'doughlab-calculator-variant';
  const stored = window.localStorage.getItem(storageKey);
  if (stored === 'A' || stored === 'B') return stored;
  const assigned = Math.random() > 0.5 ? 'B' : 'A';
  window.localStorage.setItem(storageKey, assigned);
  return assigned;
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
  quantityInputMode: QuantityInputMode;
  onQuantityInputModeChange: (mode: QuantityInputMode) => void;
  calculatorMode: 'wizard' | 'basic' | 'advanced';
  onCalculatorModeChange: (mode: 'wizard' | 'basic' | 'advanced') => void;
  difficultyLevel: DifficultyLevel;
  onDifficultyLevelChange: (level: DifficultyLevel) => void;
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
  const { t, locale } = useTranslation(['common', 'calculator', 'dashboard', 'method', 'ui']);
  const isPortuguese = locale === 'pt-BR';
  const { levains, addCustomPreset, customPresets, isFavorite } = useUser();
  const formRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const saveButtonRef = useRef<HTMLButtonElement>(null);
  const hasTrackedOpenRef = useRef(false);
  const hasTrackedFirstResultRef = useRef(false);
  const [showExtrasDrawer, setShowExtrasDrawer] = useState(false);
  const [calculatorVariant] = useState<'A' | 'B'>(() => getCalculatorVariant());
  const toppingsAssemblyStyle = useMemo(
    () => getCalculatorStyleById(props.config.stylePresetId || 'new_york_slice_v2'),
    [props.config.stylePresetId]
  );

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

  useEffect(() => {
    if (!hasTrackedOpenRef.current) {
      logCalculatorEvent('calculator_opened', {
        calculatorMode: props.calculatorMode,
        difficultyLevel: props.difficultyLevel,
        variant: calculatorVariant
      });
      hasTrackedOpenRef.current = true;
    }
  }, [props.calculatorMode, props.difficultyLevel, calculatorVariant]);

  useEffect(() => {
    if (props.results && !hasTrackedFirstResultRef.current) {
      logCalculatorEvent('first_result_generated', {
        calculatorMode: props.calculatorMode,
        difficultyLevel: props.difficultyLevel,
        variant: calculatorVariant
      });
      hasTrackedFirstResultRef.current = true;
    }
  }, [props.results, props.calculatorMode, props.difficultyLevel, calculatorVariant]);

  return (
    <AppPageLayout width="wide" density="default" pageHeader={{ page: 'calculator' }}>
      <div className="space-y-8 animate-slide-up pb-24">
      <AppSurface surface="rail" className="p-4 sm:p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-slate-50">
              {isPortuguese ? 'Escolha seu fluxo' : t('calculator.choose_workflow', { defaultValue: 'Choose your workflow' })}
            </h2>
            <p className="text-[12px] leading-relaxed text-slate-500 dark:text-slate-300">
              {isPortuguese ? 'Comece no guiado, use o wizard para passo a passo e o avancado para controle total.' : t('calculator.workflow_hint', { defaultValue: 'Guided first, Wizard for step-by-step, Advanced for full control.' })}
            </p>
          </div>
        </div>
        <ModeSelectionScreen
          selectedMode={props.calculatorMode}
          onSelectMode={props.onCalculatorModeChange}
        />
        {props.calculatorMode === 'advanced' && (
          <div className="mt-4 border-t border-emerald-100 pt-4">
            <DifficultyLevelSelector
              value={props.difficultyLevel}
              onChange={props.onDifficultyLevelChange}
            />
          </div>
        )}
      </AppSurface>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <div className="space-y-8" ref={formRef}>
          <AppSurface surface="rail" className="flex items-center justify-between px-6 py-3">
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

          <AppSurface surface="soft" className="p-1.5">
            <CalculatorForm
              {...props}
              quantityInputMode={props.quantityInputMode}
              onQuantityInputModeChange={props.onQuantityInputModeChange}
              levains={levains}
              customPresets={customPresets}
              selectedLevain={selectedLevain}
              onSavePreset={handleSavePreset}
              isFavorite={isFavorite}
            />
          </AppSurface>
        </div>

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
            quantityInputMode={props.quantityInputMode}
            hasProAccess={props.hasProAccess}
            onOpenPaywall={props.onOpenPaywall}
            saveButtonRef={saveButtonRef}
            onboardingStep={props.onboardingState?.step}
            selectedLevain={selectedLevain}
            showExtras={false}
          />

          {!props.hasProAccess && <AdCard context="calculator_sidebar" />}

          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <AppSurface surface="rail" tone="neutral" className="p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    {isPortuguese ? 'EXTRAS' : t('calculator.extras', { defaultValue: 'EXTRAS' })}
                  </p>
                  <h3 className="mt-1 text-sm font-bold text-slate-800">
                    {isPortuguese ? 'Abra as ferramentas de producao e logistica' : t('calculator.open_extras_drawer', { defaultValue: 'Open production and logistics tools' })}
                  </h3>
                </div>
                <button
                  onClick={() => setShowExtrasDrawer(true)}
                  className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-emerald-700"
                >
                  {isPortuguese ? 'Abrir extras' : t('calculator.open_extras', { defaultValue: 'Open Extras' })}
                </button>
              </div>
            </AppSurface>
          </div>
        </div>
      </div>

      {showExtrasDrawer && (
        <div className="fixed inset-0 z-[90] bg-black/45 backdrop-blur-sm p-4 sm:p-6" onClick={() => setShowExtrasDrawer(false)}>
          <div
            className="mx-auto mt-12 max-w-4xl rounded-3xl border border-emerald-100 bg-white p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  {isPortuguese ? 'EXTRAS' : t('calculator.extras', { defaultValue: 'EXTRAS' })}
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {isPortuguese ? 'Producao e Logistica' : t('calculator.production_and_logistics', { defaultValue: 'Production & Logistics' })}
                </h3>
              </div>
              <button
                onClick={() => setShowExtrasDrawer(false)}
                className="rounded-full border border-slate-200 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50"
              >
                {isPortuguese ? 'Fechar' : t('common.close', { defaultValue: 'Close' })}
              </button>
            </div>
            <ProductionDashboardTabs />
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <AppSurface surface="glass" tone="neutral" className="p-4">
                <ReverseSchedule config={props.config} levain={selectedLevain || undefined} />
              </AppSurface>
              <AppSurface surface="glass" tone="neutral" className="p-4">
                <RecommendedProducts
                  tags={[props.config.recipeStyle?.toLowerCase() || 'general', 'calculator', 'baking']}
                  title={t('common.general.tools_for_this_formula')}
                />
              </AppSurface>
            </div>
            {toppingsAssemblyStyle && (
              <div className="mt-4">
                <AppSurface surface="glass" tone="neutral" className="p-4">
                  <ToppingsAssemblySection
                    style={toppingsAssemblyStyle}
                    selectedIncrements={props.config.assemblyIncrements || []}
                    onUpdateIncrements={(incs) => props.onConfigChange({ assemblyIncrements: incs })}
                    bakingTempC={props.config.bakingTempC}
                    bakeType={props.config.bakeType}
                  />
                </AppSurface>
              </div>
            )}
          </div>
        </div>
      )}

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
    </AppPageLayout>
  );
};

export default CalculatorPage;
