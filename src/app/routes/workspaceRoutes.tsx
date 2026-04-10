import React from 'react';
import { CanonicalRoute } from '@/app/routing';
import { FeatureKey } from '@/permissions';
import {
  DifficultyLevel,
  DoughConfig,
  DoughResult,
  FlourDefinition,
  FormErrors,
  Oven,
  Page,
  QuantityInputMode,
  Unit,
  UnitSystem,
  YeastType,
  BakeType,
} from '@/types';

type ProtectFn = (component: React.ReactNode) => React.ReactNode;
type ProtectFeatureFn = (component: React.ReactNode, featureKey: FeatureKey) => React.ReactNode;
type NavigateFn = (page: Page, params?: string) => void;

interface WorkspaceRouteContext {
  route: CanonicalRoute;
  routeParams: string | null;
  navigate: NavigateFn;
  protect: ProtectFn;
  protectWithFeature: ProtectFeatureFn;
  onCreateDraftBatch: () => void;
  onStartBatch: () => void;
  handleLoadAndNavigate: (config: Partial<DoughConfig>, navigate: NavigateFn) => void;
  onRequireAuth: () => void;
  openCalculatorPaywall: () => void;
  calculator: {
    config: DoughConfig;
    errors: FormErrors;
    results: DoughResult | null;
    unit: Unit;
    unitSystem: UnitSystem;
    defaultOven?: Oven;
    selectedFlour?: FlourDefinition;
    quantityInputMode: QuantityInputMode;
    calculatorMode: 'wizard' | 'basic' | 'advanced';
    difficultyLevel: DifficultyLevel;
    handleConfigChange: (newConfig: Partial<DoughConfig>) => void;
    handleBakeTypeChange: (bakeType: BakeType) => void;
    handleStyleChange: (presetId: string) => void;
    handleYeastTypeChange: (yeastType: YeastType) => void;
    resetConfig: () => void;
    setUnit: (unit: Unit) => void;
    setQuantityInputMode: (mode: QuantityInputMode) => void;
    setCalculatorMode: (mode: 'wizard' | 'basic' | 'advanced') => void;
    setDifficultyLevel: (level: DifficultyLevel) => void;
  };
  hasProAccess: boolean;
  components: {
    BatchDetailPage: React.ComponentType<{ batchId: string | null; onNavigate: NavigateFn; onLoadAndNavigate: (config: Partial<DoughConfig>) => void }>;
    CalculatorPage: React.ComponentType<{
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
    }>;
    MyLabPage: React.ComponentType<{
      onNavigate: NavigateFn;
      onCreateDraftBatch: () => void;
      onLoadAndNavigate: (config: Partial<DoughConfig>) => void;
    }>;
    MyLabRecipesPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    CompareRecipesPage: React.ComponentType<{ onNavigate: NavigateFn; onLoadAndNavigate: (config: Partial<DoughConfig>) => void }>;
    MyLabDoughsPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    MyLabFloursPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    MyLabBatchesPage: React.ComponentType<{ onLoadAndNavigate: (config: Partial<DoughConfig>) => void; onNavigate: NavigateFn; onCreateDraftBatch: () => void }>;
    MyLabSensoryDiaryPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    MyLabComparisonsPage: React.ComponentType<{ onNavigate: NavigateFn; onLoadAndNavigate: (config: Partial<DoughConfig>) => void }>;
    MyLabInsightsPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    TimelinePage: React.ComponentType<{ onNavigate: NavigateFn }>;
    ObjectivesPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    ConsistencyListPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    ConsistencyDetailPage: React.ComponentType<{ seriesId: string; onNavigate: NavigateFn }>;
    MyLabLevainPetPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    LevainListPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    LevainDetailPage: React.ComponentType<{ levainId: string; onNavigate: NavigateFn }>;
    PlansPage: React.ComponentType<{ onRequireAuth: () => void }>;
    ProActivatedPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    ProfilePage: React.ComponentType<{ onNavigate: NavigateFn }>;
    SettingsPage: React.ComponentType;
    NotificationsPage: React.ComponentType;
    LanguagePage: React.ComponentType;
  };
}

export function resolveWorkspaceRoute({
  route,
  routeParams,
  navigate,
  protect,
  protectWithFeature,
  onCreateDraftBatch,
  onStartBatch,
  handleLoadAndNavigate,
  onRequireAuth,
  openCalculatorPaywall,
  calculator,
  hasProAccess,
  components,
}: WorkspaceRouteContext): React.ReactNode | null {
  switch (route) {
    case 'batch':
      return protect(
        <components.BatchDetailPage
          batchId={routeParams}
          onNavigate={navigate}
          onLoadAndNavigate={(config) => handleLoadAndNavigate(config, navigate)}
        />,
      );
    case 'mylab':
    case 'lab':
      return protect(
        <components.MyLabPage
          onNavigate={navigate}
          onCreateDraftBatch={onCreateDraftBatch}
          onLoadAndNavigate={(config) => handleLoadAndNavigate(config, navigate)}
        />,
      );
    case 'mylab/receitas':
      return protectWithFeature(<components.MyLabRecipesPage onNavigate={navigate} />, 'mylab.unlimited_advanced');
    case 'mylab/receitas/comparar':
      return protectWithFeature(
        <components.CompareRecipesPage onNavigate={navigate} onLoadAndNavigate={(config) => handleLoadAndNavigate(config, navigate)} />,
        'mylab.unlimited_advanced',
      );
    case 'mylab/massas':
      return protectWithFeature(<components.MyLabDoughsPage onNavigate={navigate} />, 'mylab.unlimited_advanced');
    case 'mylab/flours':
    case 'mylab/farinhas':
      return protectWithFeature(<components.MyLabFloursPage onNavigate={navigate} />, 'mylab.unlimited_advanced');
    case 'mylab/bakes':
    case 'mylab/fornadas':
      return protect(
        <components.MyLabBatchesPage
          onLoadAndNavigate={(config) => handleLoadAndNavigate(config, navigate)}
          onNavigate={navigate}
          onCreateDraftBatch={onCreateDraftBatch}
        />,
      );
    case 'mylab/diario-sensorial':
      return protectWithFeature(<components.MyLabSensoryDiaryPage onNavigate={navigate} />, 'mylab.unlimited_advanced');
    case 'mylab/comparisons':
    case 'mylab/comparacoes':
      return protect(
        <components.MyLabComparisonsPage onNavigate={navigate} onLoadAndNavigate={(config) => handleLoadAndNavigate(config, navigate)} />,
      );
    case 'mylab/insights':
      return protect(<components.MyLabInsightsPage onNavigate={navigate} />);
    case 'mylab/timeline':
      return protectWithFeature(<components.TimelinePage onNavigate={navigate} />, 'mylab.timeline');
    case 'mylab/goals':
    case 'mylab/objetivos':
      return protectWithFeature(<components.ObjectivesPage onNavigate={navigate} />, 'mylab.unlimited_advanced');
    case 'mylab/consistency':
      return protectWithFeature(<components.ConsistencyListPage onNavigate={navigate} />, 'mylab.unlimited_advanced');
    case 'mylab/consistency/detail':
      return routeParams
        ? protectWithFeature(<components.ConsistencyDetailPage seriesId={routeParams} onNavigate={navigate} />, 'mylab.unlimited_advanced')
        : null;
    case 'mylab/levain-pet':
      return protectWithFeature(<components.MyLabLevainPetPage onNavigate={navigate} />, 'levain.lab_full');
    case 'mylab/levain':
      return protect(<components.LevainListPage onNavigate={navigate} />);
    case 'mylab/levain/detail':
      return routeParams ? protect(<components.LevainDetailPage levainId={routeParams} onNavigate={navigate} />) : null;
    case 'plans':
    case 'upgrade':
      return <components.PlansPage onRequireAuth={onRequireAuth} />;
    case 'pro/activated':
      return protect(<components.ProActivatedPage onNavigate={navigate} />);
    case 'profile':
      return protect(<components.ProfilePage onNavigate={navigate} />);
    case 'settings':
      return protect(<components.SettingsPage />);
    case 'design-system':
      return protect(<components.DesignSystemPage />);
    case 'notifications':
      return protect(<components.NotificationsPage />);
    case 'settings/language':
      return protect(<components.LanguagePage />);
    case 'calculator':
      return protect(
        <components.CalculatorPage
          config={calculator.config}
          errors={calculator.errors}
          onConfigChange={calculator.handleConfigChange}
          onBakeTypeChange={calculator.handleBakeTypeChange}
          onStyleChange={calculator.handleStyleChange}
          onYeastTypeChange={calculator.handleYeastTypeChange}
          onReset={calculator.resetConfig}
          results={calculator.results}
          unit={calculator.unit}
          onUnitChange={calculator.setUnit}
          unitSystem={calculator.unitSystem}
          onStartBatch={onStartBatch}
          defaultOven={calculator.defaultOven}
          selectedFlour={calculator.selectedFlour}
          quantityInputMode={calculator.quantityInputMode}
          onQuantityInputModeChange={calculator.setQuantityInputMode}
          calculatorMode={calculator.calculatorMode}
          onCalculatorModeChange={calculator.setCalculatorMode}
          difficultyLevel={calculator.difficultyLevel}
          onDifficultyLevelChange={calculator.setDifficultyLevel}
          hasProAccess={hasProAccess}
          onOpenPaywall={openCalculatorPaywall}
        />,
      );
    default:
      return null;
  }
}
