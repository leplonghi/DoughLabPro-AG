import React, { Suspense, useState } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import RequireAuth from '@/components/RequireAuth';
import RequirePro from '@/components/RequirePro';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { useUser } from '@/contexts/UserProvider';
import { useRouter } from '@/contexts/RouterContext';
import { useCalculator } from '@/contexts/CalculatorContext';
import { FLOURS } from '@/flours-constants';
import { getStyleById } from '@/data/stylesData';
import AuthModal from '@/components/AuthModal';
import { LearnProvider } from '@/contexts/LearnContext';

// Lazy Load Pages
const CalculatorPage = React.lazy(() => import('@/pages/CalculatorPage'));
const BatchDetailPage = React.lazy(() => import('@/pages/BatchDetailPage'));
const ProfilePage = React.lazy(() => import('@/pages/ProfilePage'));
const PlansPage = React.lazy(() => import('@/components/PlansPage'));
const LearnPage = React.lazy(() => import('@/pages/learn/LearnPage'));
const ReferencesPage = React.lazy(() => import('@/pages/ReferencesPage'));
const MyLabPage = React.lazy(() => import('@/pages/MyLabPage'));
const OvenAnalysisPage = React.lazy(() => import('@/pages/OvenAnalysisPage'));
const DoughStylesPage = React.lazy(() => import('@/pages/styles/DoughStylesPage'));
const StyleDetailPage = React.lazy(() => import('@/pages/styles/StyleDetailPage').then(module => ({ default: module.StyleDetailPage })));
const SettingsPage = React.lazy(() => import('@/pages/SettingsPage'));
const LanguagePage = React.lazy(() => import('@/pages/settings/LanguagePage'));
const TermsPage = React.lazy(() => import('@/pages/legal/TermsPage'));
const PrivacyPage = React.lazy(() => import('@/pages/legal/PrivacyPage'));
const CookiesPage = React.lazy(() => import('@/pages/legal/CookiesPage'));
const EulaPage = React.lazy(() => import('@/pages/legal/EulaPage'));
const IpPage = React.lazy(() => import('@/pages/legal/IpPage'));
const ContactPage = React.lazy(() => import('@/pages/legal/ContactPage'));
const LegalIndexPage = React.lazy(() => import('@/pages/legal/LegalIndexPage'));

// Lazy Load Learn Sub-Pages
const FundamentalsPage = React.lazy(() => import('@/pages/learn/FundamentalsPage'));
const MethodsPage = React.lazy(() => import('@/pages/learn/MethodsPage'));
const CriticalIngredientsPage = React.lazy(() => import('@/pages/learn/CriticalIngredientsPage'));
const OvensHeatPage = React.lazy(() => import('@/pages/learn/OvensHeatPage'));
const TroubleshootingGuidePage = React.lazy(() => import('@/pages/learn/TroubleshootingGuidePage'));
const TroubleshootingPage = React.lazy(() => import('@/pages/learn/TroubleshootingPage'));
const IngredientsPage = React.lazy(() => import('@/pages/learn/IngredientsPage'));
const ChemistryLibraryPage = React.lazy(() => import('@/pages/learn/ChemistryLibraryPage'));
const StyleGuidePage = React.lazy(() => import('@/pages/learn/StyleGuidePage'));
const GlossaryPage = React.lazy(() => import('@/pages/learn/GlossaryPage'));
const OvenSciencePage = React.lazy(() => import('@/pages/learn/OvenSciencePage'));
const FermentationBiochemistryPage = React.lazy(() => import('@/pages/learn/FermentationBiochemistryPage'));
const CrumbStructurePage = React.lazy(() => import('@/pages/learn/CrumbStructurePage'));
const ParbakingPage = React.lazy(() => import('@/pages/learn/ParbakingPage'));
const TomatoPreservationPage = React.lazy(() => import('@/pages/learn/TomatoPreservationPage'));
const WhiteSaucesPage = React.lazy(() => import('@/pages/learn/WhiteSaucesPage'));
const SpecialSaucesPage = React.lazy(() => import('@/pages/learn/SpecialSaucesPage'));
const SensoryProfilesPage = React.lazy(() => import('@/pages/learn/SensoryProfilesPage'));
const TechniquesPage = React.lazy(() => import('@/pages/learn/TechniquesPage'));
const TemperatureControlPage = React.lazy(() => import('@/pages/learn/TemperatureControlPage'));
const StoragePage = React.lazy(() => import('@/pages/learn/StoragePage'));
const HygieneSafetyPage = React.lazy(() => import('@/pages/learn/HygieneSafetyPage'));
const EquipmentPage = React.lazy(() => import('@/pages/learn/EquipmentPage'));
const SensoryGuidePage = React.lazy(() => import('@/pages/learn/SensoryGuidePage'));
const BakingSciencePage = React.lazy(() => import('@/pages/learn/BakingSciencePage'));
const LearnArticlePage = React.lazy(() => import('@/pages/learn/LearnArticlePage'));
const AllArticlesPage = React.lazy(() => import('@/pages/learn/AllArticlesPage'));
const CategoryPage = React.lazy(() => import('@/pages/learn/CategoryPage'));
const SearchResultsPage = React.lazy(() => import('@/pages/learn/SearchResultsPage'));

// Ingredient Sub-Pages
const IngredientsFloursPage = React.lazy(() => import('@/pages/learn/ingredients/FloursPage'));
const CheesesPage = React.lazy(() => import('@/pages/learn/ingredients/CheesesPage'));
const MeatsPage = React.lazy(() => import('@/pages/learn/ingredients/MeatsPage'));
const VegetablesPage = React.lazy(() => import('@/pages/learn/ingredients/VegetablesPage'));
const SaucesPage = React.lazy(() => import('@/pages/learn/ingredients/SaucesPage'));
const OilsSpicesPage = React.lazy(() => import('@/pages/learn/ingredients/OilsSpicesPage'));
const OilsPage = React.lazy(() => import('@/pages/learn/ingredients/OilsPage'));
const ClassicCombosPage = React.lazy(() => import('@/pages/learn/ingredients/ClassicCombosPage'));
const BoldCombosPage = React.lazy(() => import('@/pages/learn/ingredients/BoldCombosPage'));
const PairingToolPage = React.lazy(() => import('@/pages/learn/ingredients/PairingToolPage'));
const ReadyToppingsPage = React.lazy(() => import('@/pages/learn/ingredients/ReadyToppingsPage'));

// My Lab Pages
const MyLabRecipesPage = React.lazy(() => import('@/pages/mylab/MyLabRecipesPage'));
const MyLabLevainPetPage = React.lazy(() => import('@/pages/mylab/MyLabLevainPetPage'));
const MyLabBatchesPage = React.lazy(() => import('@/pages/mylab/MyLabBatchesPage'));
const MyLabFloursPage = React.lazy(() => import('@/pages/mylab/MyLabFloursPage'));
const MyLabDoughsPage = React.lazy(() => import('@/pages/mylab/MyLabDoughsPage'));
const MyLabSensoryDiaryPage = React.lazy(() => import('@/pages/mylab/MyLabSensoryDiaryPage'));
const MyLabComparisonsPage = React.lazy(() => import('@/pages/mylab/MyLabComparisonsPage'));
const MyLabInsightsPage = React.lazy(() => import('@/pages/mylab/MyLabInsightsPage'));
const TimelinePage = React.lazy(() => import('@/pages/mylab/TimelinePage'));
const ObjectivesPage = React.lazy(() => import('@/pages/mylab/ObjectivesPage'));
const LevainListPage = React.lazy(() => import('@/pages/mylab/levain/LevainListPage'));
const LevainDetailPage = React.lazy(() => import('@/pages/mylab/levain/LevainDetailPage'));
const CompareRecipesPage = React.lazy(() => import('@/pages/mylab/CompareRecipesPage'));
const ConsistencyListPage = React.lazy(() => import('@/pages/mylab/ConsistencyListPage'));
const ConsistencyDetailPage = React.lazy(() => import('@/pages/mylab/ConsistencyDetailPage'));

// Feature Pages
const CommunityPage = React.lazy(() => import('@/pages/CommunityPage'));
const CommunityBatchDetailPage = React.lazy(() => import('@/pages/CommunityBatchDetailPage'));
const ProActivatedPage = React.lazy(() => import('@/pages/pro/ProActivatedPage'));
const DoughbotPage = React.lazy(() => import('@/pages/DoughbotPage'));
const ToolsPage = React.lazy(() => import('@/pages/ToolsPage'));

// --- Placeholder Pages ---
function HelpPage() {
    return <div className="p-8 text-center">Help & Support (Coming Soon)</div>;
}
function LandingPage() {
    return <div className="p-8 text-center">Landing Page (Coming Soon)</div>;
}

interface AppRouterProps {
    onStartBatch: () => void;
    onCreateDraftBatch: () => void;
}

export default function AppRouter({ onStartBatch, onCreateDraftBatch }: AppRouterProps) {
    const { route, routeParams, navigate } = useRouter();
    const {
        config,
        errors,
        handleConfigChange,
        handleBakeTypeChange,
        handleStyleChange,
        handleYeastTypeChange,
        resetConfig,
        results,
        unit,
        setUnit,
        unitSystem,
        calculatorMode,
        setCalculatorMode,
        handleLoadAndNavigate,
        handleLoadStyleFromModule,
        handleLoadProRecipe
    } = useCalculator();

    const { ovens, hasProAccess, openPaywall } = useUser();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const defaultOven = ovens.find(o => o.isDefault) || (ovens.length > 0 ? ovens[0] : undefined);
    const selectedFlour = FLOURS.find(f => f.id === config.flourId);

    const protect = (component: React.ReactNode) => (
        <RequireAuth onOpenAuth={() => setIsAuthModalOpen(true)}>
            {component}
        </RequireAuth>
    );

    const protectPro = (component: React.ReactNode) => (
        <RequireAuth onOpenAuth={() => setIsAuthModalOpen(true)}>
            <RequirePro>
                {component}
            </RequirePro>
        </RequireAuth>
    );

    const renderPage = () => {
        if (route === 'batch') {
            return protect(<BatchDetailPage batchId={routeParams} onNavigate={navigate} onLoadAndNavigate={(c) => handleLoadAndNavigate(c, navigate)} />);
        }
        if (route === 'mylab/levain/detail' && routeParams) {
            return protect(<LevainDetailPage levainId={routeParams} onNavigate={navigate} />);
        }
        if (route === 'mylab/consistency/detail' && routeParams) {
            return protectPro(<ConsistencyDetailPage seriesId={routeParams} onNavigate={navigate} />);
        }
        if (route === 'styles/detail' && routeParams) {
            const style = getStyleById(routeParams);
            if (style) {
                return protect(<StyleDetailPage style={style} onLoadAndNavigate={(s) => handleLoadStyleFromModule(s, navigate)} onBack={() => navigate('styles')} />);
            }
        }

        if (route === 'community/detail' && routeParams) {
            return protect(<CommunityBatchDetailPage batchId={routeParams} onLoadAndNavigate={(c) => handleLoadAndNavigate(c, navigate)} onNavigate={navigate} />);
        }

        // Dynamic Article Route
        if (route === 'learn/article' && routeParams) {
            return protect(
                <LearnProvider>
                    <LearnArticlePage articleId={routeParams} />
                </LearnProvider>
            );
        }

        switch (route) {
            case 'mylab':
            case 'lab':
                return protect(
                    <MyLabPage
                        onNavigate={navigate}
                        onCreateDraftBatch={onCreateDraftBatch}
                        onLoadAndNavigate={(c) => handleLoadAndNavigate(c, navigate)}
                    />
                );
            case 'mylab/receitas':
                return protectPro(<MyLabRecipesPage onNavigate={navigate} />);
            case 'mylab/receitas/comparar':
                return protectPro(<CompareRecipesPage onNavigate={navigate} onLoadAndNavigate={(c) => handleLoadAndNavigate(c, navigate)} />);
            case 'mylab/massas':
                return protectPro(<MyLabDoughsPage onNavigate={navigate} />);
            case 'mylab/flours':
            case 'mylab/farinhas': // Legacy
                return protectPro(<MyLabFloursPage onNavigate={navigate} />);
            case 'mylab/bakes':
            case 'mylab/fornadas': // Legacy
                return protect(<MyLabBatchesPage onLoadAndNavigate={(c) => handleLoadAndNavigate(c, navigate)} onNavigate={navigate} onCreateDraftBatch={onCreateDraftBatch} />);
            case 'mylab/diario-sensorial':
                return protectPro(<MyLabSensoryDiaryPage onNavigate={navigate} />);
            case 'mylab/comparisons':
            case 'mylab/comparacoes': // Legacy
                return protect(<MyLabComparisonsPage onNavigate={navigate} onLoadAndNavigate={(c) => handleLoadAndNavigate(c, navigate)} />);
            case 'mylab/insights':
                return protect(<MyLabInsightsPage onNavigate={navigate} />);
            case 'mylab/timeline':
                return protect(<TimelinePage onNavigate={navigate} />);
            case 'mylab/goals':
            case 'mylab/objetivos': // Legacy
                return protectPro(<ObjectivesPage onNavigate={navigate} />);
            case 'mylab/consistency':
                return protectPro(<ConsistencyListPage onNavigate={navigate} />);
            case 'mylab/levain-pet':
                return protectPro(<MyLabLevainPetPage />);
            case 'mylab/levain':
                return protect(<LevainListPage onNavigate={navigate} />);
            case 'plans':
                return protect(
                    <PlansPage
                        onGrantAccess={() => { }}
                        onNavigateHome={() => navigate('mylab')}
                    />
                );
            case 'pro/activated':
                return protect(<ProActivatedPage onNavigate={navigate} />);

            case 'learn':
                return protect(<LearnPage onNavigate={navigate} />);
            case 'learn/all':
                return protect(<AllArticlesPage />);
            case 'learn/search':
                return protect(<SearchResultsPage />);
            case 'learn/category':
                return protect(<CategoryPage categoryId={routeParams || undefined} />);
            case 'learn/article':
                // Fallback if routeParams is missing or direct navigation
                return protect(<LearnPage onNavigate={navigate} />);
            case 'learn/fundamentals':
                return protect(<FundamentalsPage onNavigate={navigate} />);
            case 'learn/methods':
                return protect(<MethodsPage onNavigate={navigate} />);
            case 'learn/critical-ingredients':
                return protect(<CriticalIngredientsPage onNavigate={navigate} />);
            case 'learn/ovens-heat':
                return protect(<OvensHeatPage onNavigate={navigate} />);
            case 'learn/troubleshooting-guide':
                return protect(<TroubleshootingGuidePage onNavigate={navigate} />);
            case 'learn/techniques':
                return protect(<TechniquesPage onNavigate={navigate} />);
            case 'learn/oven-science':
                return protect(<OvenSciencePage />);
            case 'learn/baking-science':
                return protect(<BakingSciencePage onNavigate={navigate} />);
            case 'learn/temperature-control':
                return protect(<TemperatureControlPage />);
            case 'learn/storage':
                return protect(<StoragePage />);
            case 'learn/hygiene-safety':
                return protect(<HygieneSafetyPage />);
            case 'learn/equipment':
                return protect(<EquipmentPage />);
            case 'learn/troubleshooting':
                return protect(<TroubleshootingPage />);
            case 'learn/ingredients':
                return protect(<IngredientsPage onNavigate={navigate} />);
            case 'learn/ingredients/flours':
                return protect(<IngredientsFloursPage />);
            case 'learn/ingredients/cheeses':
                return protect(<CheesesPage />);
            case 'learn/ingredients/meats':
                return protect(<MeatsPage />);
            case 'learn/ingredients/vegetables':
                return protect(<VegetablesPage />);
            case 'learn/ingredients/sauces':
                return protect(<SaucesPage />);
            case 'learn/ingredients/oils-spices':
                return protect(<OilsSpicesPage />);
            case 'learn/ingredients/oils':
                return protect(<OilsPage />);
            case 'learn/ingredients/classic-combos':
                return protect(<ClassicCombosPage />);
            case 'learn/ingredients/bold-combos':
                return protect(<BoldCombosPage />);
            case 'learn/sensory-guide':
                return protect(<SensoryGuidePage />);
            case 'learn/ingredients/pairing-tool':
                return protect(<PairingToolPage />);
            case 'learn/ingredients/ready-toppings':
                return protect(<ReadyToppingsPage />);
            case 'learn/chemistry-library':
                return protect(<ChemistryLibraryPage />);
            case 'learn/style-guide':
                return protect(<StyleGuidePage />);
            case 'learn/glossary':
                return protect(<GlossaryPage />);
            case 'learn/fermentation-biochemistry':
                return protect(<FermentationBiochemistryPage />);
            case 'learn/crumb-structure':
                return protect(<CrumbStructurePage />);
            case 'learn/parbaking':
                return protect(<ParbakingPage />);
            case 'learn/tomato-preservation':
                return protect(<TomatoPreservationPage />);
            case 'learn/white-sauces':
                return protect(<WhiteSaucesPage />);
            case 'learn/special-sauces':
                return protect(<SpecialSaucesPage />);
            case 'learn/sensory-profiles':
                return protect(<SensoryProfilesPage />);
            case 'learn/references':
                return protect(<ReferencesPage />);
            case 'profile':
                return protect(<ProfilePage onNavigate={navigate} />);
            case 'help':
                return <HelpPage />; // Keeping public for assistance
            case 'settings':
                return protect(<SettingsPage />);
            case 'settings/language':
                return protect(<LanguagePage />);
            case 'legal':
                return <LegalIndexPage onNavigate={navigate} />;
            case 'legal/terms':
            case 'terms':
                return <TermsPage />;
            case 'legal/privacy':
            case 'privacy':
                return <PrivacyPage />;
            case 'legal/cookies':
                return <CookiesPage />;
            case 'legal/eula':
                return <EulaPage />;
            case 'legal/ip':
                return <IpPage />;
            case 'legal/contact':
                return <ContactPage />;
            case 'landing':
                return <LandingPage />;
            case 'styles':
                return protect(<DoughStylesPage onNavigateToDetail={(id) => navigate('styles/detail', id)} onUseInCalculator={(s) => handleLoadStyleFromModule(s, navigate)} />);
            case 'tools':
                return protect(<ToolsPage onNavigate={navigate} />);
            case 'tools/oven-profiler':
                return protectPro(<OvenAnalysisPage />);
            case 'tools/doughbot':
                return protectPro(<DoughbotPage />);

            case 'calculator':
                return protect(
                    <CalculatorPage
                        config={config}
                        errors={errors}
                        onConfigChange={handleConfigChange}
                        onBakeTypeChange={handleBakeTypeChange}
                        onStyleChange={handleStyleChange}
                        onYeastTypeChange={handleYeastTypeChange}
                        onReset={resetConfig}
                        results={results}
                        unit={unit}
                        onUnitChange={setUnit}
                        unitSystem={unitSystem}
                        onStartBatch={onStartBatch}
                        defaultOven={defaultOven}
                        selectedFlour={selectedFlour}
                        calculationMode={calculatorMode}
                        onCalculationModeChange={setCalculatorMode}
                        calculatorMode={calculatorMode}
                        onCalculatorModeChange={setCalculatorMode}
                        hasProAccess={hasProAccess}
                        onOpenPaywall={() => openPaywall('calculator')}
                    />
                );
            case 'community':
                return protect(<CommunityPage onLoadInspiration={(c) => handleLoadAndNavigate(c, navigate)} onNavigate={navigate} />);
            default:
                return protect(
                    <MyLabPage
                        onNavigate={navigate}
                        onCreateDraftBatch={onCreateDraftBatch}
                        onLoadAndNavigate={(c) => handleLoadAndNavigate(c, navigate)}
                    />
                );
        }
    };

    return (
        <>
            <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                    {renderPage()}
                </Suspense>
            </ErrorBoundary>
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
        </>
    );
}
