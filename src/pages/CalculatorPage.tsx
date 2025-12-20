import React, { useMemo, useState, useRef } from 'react';
import CalculatorForm from '@/components/CalculatorForm';
import { DoughyAssistant } from '@/components/tools/DoughyAssistant';
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
import OnboardingTooltip from '@/components/onboarding/OnboardingTooltip';
import { AdCard } from '@/marketing/ads/AdCard';
import { ModeSelectionScreen } from '@/components/calculator/ModeSelectionScreen';
import { SchedulerSection } from '@/components/dashboard/sections/SchedulerSection';
import { AssemblySection } from '@/components/dashboard/sections/AssemblySection';
import { LogisticsSection } from '@/components/dashboard/sections/LogisticsSection';
import { FloatingHelpButton } from '@/components/ui/FloatingHelpButton';
import { Calendar, Layers, Truck } from 'lucide-react';

const ProductionDashboardTabs = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'scheduler' | 'batch' | 'logistics'>('scheduler');

  return (
    <div className="bg-white rounded-2xl border-[0.5px] border-slate-100 shadow-sm overflow-hidden flex flex-col h-full">
      {/* Header & Tabs Container */}
      <div className="border-b border-slate-100 p-2">
        {/* Title Area */}
        <div className="px-4 py-3 flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#1B4332] flex items-center gap-2 uppercase tracking-wider">
            <Layers size={16} className="text-[#51a145]" />
            Production & Logistics
          </h3>
          <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-full uppercase tracking-widest">Commercial Tools</span>
        </div>

        {/* Cleaner Tabs */}
        <div className="flex bg-slate-50 p-1 rounded-xl">
          {[
            { id: 'scheduler', icon: Calendar, label: t('ui.schedule_309') },
            { id: 'batch', icon: Layers, label: t('ui.batch_310') },
            { id: 'logistics', icon: Truck, label: t('ui.logistics_311') }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all duration-200
                ${activeTab === tab.id
                  ? 'bg-white text-[#51a145] shadow-sm border border-slate-100/50'
                  : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'}`}
            >
              <tab.icon size={14} className={activeTab === tab.id ? 'text-[#51a145]' : 'text-slate-400'} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 bg-white min-h-[300px]">
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
  const { t } = useTranslation(['common', 'calculator', 'dashboard', 'method']);
  const { levains, addCustomPreset, customPresets, isFavorite } = useUser();
  const formRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const saveButtonRef = useRef<HTMLButtonElement>(null);

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
      {/* 1. Scientific Control Center Selection */}
      <section className="p-0 border-none shadow-none">
        <div className="flex items-center gap-2 mb-2 px-6">
          <h2 className="text-[10px] font-black font-heading text-slate-400 uppercase tracking-[0.2em]">{t('calculator.mode', { defaultValue: 'MODE:' })}</h2>
        </div>
        <ModeSelectionScreen
          selectedMode={props.calculatorMode}
          onSelectMode={props.onCalculatorModeChange}
        />
      </section>

      {/* 2. Laboratory Interface Area */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        {/* Left Form: Calibration */}
        <div className="space-y-8" ref={formRef}>
          <div className="flex items-center justify-between bg-white px-6 py-3 rounded-xl border-[0.5px] border-slate-100 shadow-sm">
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
          </div>

          <div className="bg-white rounded-2xl border-[0.5px] border-slate-100 p-0.5 shadow-sm">
            <CalculatorForm
              {...props}
              levains={levains}
              customPresets={customPresets}
              selectedLevain={selectedLevain}
              onSavePreset={handleSavePreset}
              isFavorite={isFavorite}
            />
          </div>
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

      {/* Floating Help with Contextual Tips */}
      <FloatingHelpButton
        tips={[
          {
            id: 'hydration',
            title: 'Hidratação',
            icon: '💧',
            content: (
              <div className="space-y-2">
                <p><strong>O que é?</strong> Percentual de água em relação à farinha.</p>
                <div className="bg-emerald-50 rounded-lg p-2 text-xs">
                  <p className="font-bold mb-1">Guia Rápido:</p>
                  <ul className="space-y-0.5">
                    <li>• 55-60%: Firme (bagels)</li>
                    <li>• 60-65%: Clássica (NY pizza)</li>
                    <li>• 70-80%: Úmida (ciabatta)</li>
                  </ul>
                </div>
              </div>
            )
          },
          {
            id: 'fermentation',
            title: 'Fermentação',
            icon: '🦠',
            content: (
              <div className="space-y-2">
                <p><strong>Tipos principais:</strong></p>
                <ul className="text-xs space-y-1">
                  <li>• <strong>Direta:</strong> Rápida, 2-4h</li>
                  <li>• <strong>Fria:</strong> 24-72h na geladeira</li>
                  <li>• <strong>Biga/Poolish:</strong> Pré-fermentos</li>
                  <li>• <strong>Sourdough:</strong> Fermento natural</li>
                </ul>
                <p className="text-xs mt-2 text-emerald-700">💡 Mais tempo = mais sabor!</p>
              </div>
            )
          },
          {
            id: 'flour',
            title: t('ui.escolha_da_farinha_312'),
            icon: '🌾',
            content: (
              <div className="space-y-2">
                <p className="text-xs"><strong>Proteína é chave:</strong></p>
                <ul className="text-xs space-y-1">
                  <li>• 8-10%: Bolos, biscoitos</li>
                  <li>• 10-12%: Pães macios</li>
                  <li>• 12-14%: Pizza, pães artesanais</li>
                  <li>• 14%+: Bagels, massas resistentes</li>
                </ul>
                <p className="text-xs mt-2 bg-amber-50 p-2 rounded">⚠️ Mais proteína = mais glúten = mais estrutura</p>
              </div>
            )
          },
          {
            id: 'salt',
            title: 'Sal: Controle Total',
            icon: '🧂',
            content: (
              <div className="space-y-2">
                <p className="text-xs"><strong>Funções:</strong></p>
                <ul className="text-xs space-y-0.5">
                  <li>✓ Fortalece glúten</li>
                  <li>✓ Controla fermentação</li>
                  <li>✓ Realça sabor</li>
                </ul>
                <div className="bg-red-50 rounded p-2 mt-2">
                  <p className="text-xs font-bold text-red-800">⚠️ Nunca misture sal direto com fermento!</p>
                </div>
              </div>
            )
          },
          {
            id: 'temperature',
            title: t('ui.temperatura_da_massa_313'),
            icon: '🌡️',
            content: (
              <div className="space-y-2">
                <p className="text-xs"><strong>Temperatura ideal:</strong> 24-26°C</p>
                <div className="bg-blue-50 rounded p-2 text-xs">
                  <p className="font-bold mb-1">Dica Pro:</p>
                  <p>Use água gelada em dias quentes e morna em dias frios para manter a massa na temperatura ideal.</p>
                </div>
                <p className="text-xs mt-2">💡 Massa muito quente = fermentação rápida demais!</p>
              </div>
            )
          }
        ]}
      />

      <DoughyAssistant />
    </div>
  );
};

export default CalculatorPage;


