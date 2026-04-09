import React from 'react';
import { CanonicalRoute } from '@/app/routing';
import { DoughConfig, DoughStyleDefinition, Page } from '@/types';
import { FeatureKey } from '@/permissions';

type ProtectFn = (component: React.ReactNode) => React.ReactNode;
type ProtectFeatureFn = (component: React.ReactNode, featureKey: FeatureKey) => React.ReactNode;
type NavigateFn = (page: Page, params?: string) => void;

interface LibraryRouteContext {
  route: CanonicalRoute;
  routeParams: string | null;
  navigate: NavigateFn;
  protect: ProtectFn;
  protectWithFeature: ProtectFeatureFn;
  handleLoadStyleFromModule: (style: DoughStyleDefinition, navigate: NavigateFn) => void;
  components: {
    LearnPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    AllArticlesPage: React.ComponentType;
    SearchResultsPage: React.ComponentType;
    CategoryPage: React.ComponentType<{ categoryId?: string }>;
    LearnArticlePage: React.ComponentType<{ articleId: string }>;
    FundamentalsPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    MethodsPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    CriticalIngredientsPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    OvensHeatPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    TroubleshootingGuidePage: React.ComponentType<{ onNavigate: NavigateFn }>;
    TechniquesPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    OvenSciencePage: React.ComponentType;
    BakingSciencePage: React.ComponentType<{ onNavigate: NavigateFn }>;
    BakingProfilesPage: React.ComponentType;
    BakingSurfacesPage: React.ComponentType;
    CrustFormationPage: React.ComponentType;
    StarchGelatinizationPage: React.ComponentType;
    TemperatureControlPage: React.ComponentType;
    StoragePage: React.ComponentType;
    HygieneSafetyPage: React.ComponentType;
    EquipmentPage: React.ComponentType;
    TroubleshootingPage: React.ComponentType;
    IngredientsPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    IngredientsFloursPage: React.ComponentType;
    YeastsPage: React.ComponentType;
    CheesesPage: React.ComponentType;
    MeatsPage: React.ComponentType;
    VegetablesPage: React.ComponentType;
    SaucesPage: React.ComponentType;
    OilsSpicesPage: React.ComponentType;
    OilsPage: React.ComponentType;
    ClassicCombosPage: React.ComponentType;
    BoldCombosPage: React.ComponentType;
    SensoryGuidePage: React.ComponentType;
    PairingToolPage: React.ComponentType;
    ReadyToppingsPage: React.ComponentType;
    ChemistryLibraryPage: React.ComponentType;
    StyleGuidePage: React.ComponentType;
    GlossaryPage: React.ComponentType;
    FermentationBiochemistryPage: React.ComponentType;
    CrumbStructurePage: React.ComponentType;
    ParbakingPage: React.ComponentType;
    TomatoPreservationPage: React.ComponentType;
    WhiteSaucesPage: React.ComponentType;
    SpecialSaucesPage: React.ComponentType;
    SensoryProfilesPage: React.ComponentType;
    ReferencesPage: React.ComponentType;
    DoughStylesPage: React.ComponentType<{ onNavigateToDetail: (id: string) => void; onUseInCalculator: (style: DoughStyleDefinition) => void }>;
    StyleDetailPage: React.ComponentType<{ styleId?: string | null; onLoadAndNavigate: (style: DoughStyleDefinition) => void; onBack: () => void; onNavigate?: (page: string, params?: string) => void }>;
    ToolsPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    OvenAnalysisPage: React.ComponentType;
    DoughbotPage: React.ComponentType;
    HydrationConverterPage: React.ComponentType;
  };
}

export function resolveLibraryRoute({
  route,
  routeParams,
  navigate,
  protect,
  protectWithFeature,
  handleLoadStyleFromModule,
  components,
}: LibraryRouteContext): React.ReactNode | null {
  switch (route) {
    case 'learn':
      return protect(<components.LearnPage onNavigate={navigate} />);
    case 'learn/all':
      return protect(<components.AllArticlesPage />);
    case 'learn/search':
      return protect(<components.SearchResultsPage />);
    case 'learn/category':
      return protect(<components.CategoryPage categoryId={routeParams || undefined} />);
    case 'learn/article':
      return routeParams ? protect(<components.LearnArticlePage articleId={routeParams} />) : protect(<components.LearnPage onNavigate={navigate} />);
    case 'learn/fundamentals':
      return protect(<components.FundamentalsPage onNavigate={navigate} />);
    case 'learn/methods':
      return protect(<components.MethodsPage onNavigate={navigate} />);
    case 'learn/critical-ingredients':
      return protect(<components.CriticalIngredientsPage onNavigate={navigate} />);
    case 'learn/ovens-heat':
      return protect(<components.OvensHeatPage onNavigate={navigate} />);
    case 'learn/troubleshooting-guide':
      return protect(<components.TroubleshootingGuidePage onNavigate={navigate} />);
    case 'learn/techniques':
      return protect(<components.TechniquesPage onNavigate={navigate} />);
    case 'learn/oven-science':
      return protect(<components.OvenSciencePage />);
    case 'learn/baking-science':
      return protect(<components.BakingSciencePage onNavigate={navigate} />);
    case 'learn/baking-profiles':
      return protect(<components.BakingProfilesPage />);
    case 'learn/baking-surfaces':
      return protect(<components.BakingSurfacesPage />);
    case 'learn/crust-formation':
      return protect(<components.CrustFormationPage />);
    case 'learn/starch-gelatinization':
      return protect(<components.StarchGelatinizationPage />);
    case 'learn/temperature-control':
      return protect(<components.TemperatureControlPage />);
    case 'learn/storage':
      return protect(<components.StoragePage />);
    case 'learn/hygiene-safety':
      return protect(<components.HygieneSafetyPage />);
    case 'learn/equipment':
      return protect(<components.EquipmentPage />);
    case 'learn/troubleshooting':
      return protect(<components.TroubleshootingPage />);
    case 'learn/ingredients':
      return protect(<components.IngredientsPage onNavigate={navigate} />);
    case 'learn/ingredients/flours':
      return protect(<components.IngredientsFloursPage />);
    case 'learn/ingredients/yeasts':
      return protect(<components.YeastsPage />);
    case 'learn/ingredients/cheeses':
      return protect(<components.CheesesPage />);
    case 'learn/ingredients/meats':
      return protect(<components.MeatsPage />);
    case 'learn/ingredients/vegetables':
      return protect(<components.VegetablesPage />);
    case 'learn/ingredients/sauces':
      return protect(<components.SaucesPage />);
    case 'learn/ingredients/oils-spices':
      return protect(<components.OilsSpicesPage />);
    case 'learn/ingredients/oils':
      return protect(<components.OilsPage />);
    case 'learn/ingredients/classic-combos':
      return protect(<components.ClassicCombosPage />);
    case 'learn/ingredients/bold-combos':
      return protect(<components.BoldCombosPage />);
    case 'learn/sensory-guide':
      return protect(<components.SensoryGuidePage />);
    case 'learn/ingredients/pairing-tool':
      return protect(<components.PairingToolPage />);
    case 'learn/ingredients/ready-toppings':
      return protect(<components.ReadyToppingsPage />);
    case 'learn/chemistry-library':
      return protect(<components.ChemistryLibraryPage />);
    case 'learn/style-guide':
      return protect(<components.StyleGuidePage />);
    case 'learn/glossary':
      return protect(<components.GlossaryPage />);
    case 'learn/fermentation-biochemistry':
      return protect(<components.FermentationBiochemistryPage />);
    case 'learn/crumb-structure':
      return protect(<components.CrumbStructurePage />);
    case 'learn/parbaking':
      return protect(<components.ParbakingPage />);
    case 'learn/tomato-preservation':
      return protect(<components.TomatoPreservationPage />);
    case 'learn/white-sauces':
      return protect(<components.WhiteSaucesPage />);
    case 'learn/special-sauces':
      return protect(<components.SpecialSaucesPage />);
    case 'learn/sensory-profiles':
      return protect(<components.SensoryProfilesPage />);
    case 'learn/references':
      return protect(<components.ReferencesPage />);
    case 'styles':
      return protect(
        <components.DoughStylesPage
          onNavigateToDetail={(id) => navigate('styles/detail', id)}
          onUseInCalculator={(style) => handleLoadStyleFromModule(style, navigate)}
        />,
      );
    case 'styles/detail': {
      return protect(
        <components.StyleDetailPage
          styleId={routeParams}
          onLoadAndNavigate={(selectedStyle) => handleLoadStyleFromModule(selectedStyle, navigate)}
          onBack={() => navigate('styles')}
          onNavigate={navigate}
        />,
      );
    }
    case 'tools':
      return protect(<components.ToolsPage onNavigate={navigate} />);
    case 'tools/oven-profiler':
      return protectWithFeature(<components.OvenAnalysisPage />, 'tools.oven_analysis');
    case 'tools/doughbot':
      return protectWithFeature(<components.DoughbotPage />, 'tools.doughbot');
    case 'tools/hydration-converter':
      return protect(<components.HydrationConverterPage />);
    default:
      return null;
  }
}
