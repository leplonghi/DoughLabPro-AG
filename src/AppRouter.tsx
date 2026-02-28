import React, { Suspense, useState } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import RequireAuth from '@/components/RequireAuth';
import { RequireFeature } from '@/components/auth/RequireFeature';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { useUser } from '@/contexts/UserProvider';
import { useRouter } from '@/contexts/RouterContext';
import { useCalculator } from '@/contexts/CalculatorContext';
import { FLOURS } from '@/flours-constants';
import { useStyles } from '@/contexts/StylesProvider';
import { LearnProvider } from '@/contexts/LearnContext';
import { FeatureKey } from '@/permissions';
import * as Pages from '@/lazyPages';

const AuthModal = React.lazy(() => import('@/components/modals/AuthModal'));

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
        calculationMode,
        setCalculationMode,
        handleLoadAndNavigate,
        handleLoadStyleFromModule,
    } = useCalculator();

    const { getStyleById } = useStyles();
    const { ovens, hasProAccess, openPaywall, isAuthenticated } = useUser();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const defaultOven = ovens.find(o => o.isDefault) || (ovens.length > 0 ? ovens[0] : undefined);
    const selectedFlour = FLOURS.find(f => f.id === config.flourId);

    const protect = (component: React.ReactNode) => (
        <RequireAuth onOpenAuth={() => setIsAuthModalOpen(true)}>
            {component}
        </RequireAuth>
    );

    const protectWithFeature = (component: React.ReactNode, featureKey: FeatureKey) => (
        <RequireAuth onOpenAuth={() => setIsAuthModalOpen(true)}>
            <RequireFeature featureKey={featureKey}>
                {component}
            </RequireFeature>
        </RequireAuth>
    );

    const renderPage = () => {
        if (route === 'batch') {
            return protect(<Pages.BatchDetailPage batchId={routeParams} onNavigate={navigate} onLoadAndNavigate={(c) => handleLoadAndNavigate(c, navigate)} />);
        }
        if (route === 'mylab/levain/detail' && routeParams) {
            return protect(<Pages.LevainDetailPage levainId={routeParams} onNavigate={navigate} />);
        }
        if (route === 'mylab/consistency/detail' && routeParams) {
            return protectWithFeature(<Pages.ConsistencyDetailPage seriesId={routeParams} onNavigate={navigate} />, 'mylab.unlimited_advanced');
        }
        if (route === 'styles/detail' && routeParams) {
            const style = getStyleById(routeParams);
            return protect(<Pages.StyleDetailPage style={style || null} onLoadAndNavigate={(s) => handleLoadStyleFromModule(s, navigate)} onBack={() => navigate('styles')} onNavigate={navigate} />);
        }

        if ((route === 'community/detail' || route === 'community/post') && routeParams) {
            return protect(<Pages.CommunityPostPage postId={routeParams} />);
        }

        if (route === 'community/user' && routeParams) {
            return protect(<Pages.CommunityUserProfilePage uid={routeParams} />);
        }

        if (route === 'community/create') {
            return protect(<Pages.CommunityCreatePostPage />);
        }

        // Dynamic Article Route
        if (route === 'learn/article' && routeParams) {
            return protect(
                <LearnProvider>
                    <Pages.LearnArticlePage articleId={routeParams} />
                </LearnProvider>
            );
        }

        // If not authenticated and targeting primary entry points, show the Landing Page
        if (!isAuthenticated && (route === 'mylab' || route === 'landing' || !route)) {
            return (
                <Pages.LandingPage
                    onNavigate={navigate}
                    onOpenAuth={() => setIsAuthModalOpen(true)}
                />
            );
        }

        switch (route) {
            case 'mylab':
            case 'lab':
                return protect(
                    <Pages.MyLabPage
                        onNavigate={navigate}
                        onCreateDraftBatch={onCreateDraftBatch}
                        onLoadAndNavigate={(c) => handleLoadAndNavigate(c, navigate)}
                    />
                );
            case 'mylab/recipes':
                return protectWithFeature(<Pages.MyLabRecipesPage onNavigate={navigate} />, 'mylab.unlimited_advanced');
            case 'mylab/recipes/compare':
                return protectWithFeature(<Pages.CompareRecipesPage onNavigate={navigate} onLoadAndNavigate={(c) => handleLoadAndNavigate(c, navigate)} />, 'mylab.unlimited_advanced');
            case 'mylab/doughs':
                return protectWithFeature(<Pages.MyLabDoughsPage onNavigate={navigate} />, 'mylab.unlimited_advanced');
            case 'mylab/flours':

                return protectWithFeature(<Pages.MyLabFloursPage onNavigate={navigate} />, 'mylab.unlimited_advanced');
            case 'mylab/bakes':

                return protect(<Pages.MyLabBatchesPage onLoadAndNavigate={(c) => handleLoadAndNavigate(c, navigate)} onNavigate={navigate} onCreateDraftBatch={onCreateDraftBatch} />);
            case 'mylab/sensory-diary':
                return protectWithFeature(<Pages.MyLabSensoryDiaryPage onNavigate={navigate} />, 'mylab.unlimited_advanced');
            case 'mylab/comparisons':

                return protect(<Pages.MyLabComparisonsPage onNavigate={navigate} onLoadAndNavigate={(c) => handleLoadAndNavigate(c, navigate)} />);
            case 'mylab/insights':
                return protect(<Pages.MyLabInsightsPage onNavigate={navigate} />);
            case 'mylab/timeline':
                return protectWithFeature(<Pages.TimelinePage onNavigate={navigate} />, 'mylab.timeline');
            case 'mylab/goals':

                return protectWithFeature(<Pages.ObjectivesPage onNavigate={navigate} />, 'mylab.unlimited_advanced');
            case 'mylab/consistency':
                return protectWithFeature(<Pages.ConsistencyListPage onNavigate={navigate} />, 'mylab.unlimited_advanced');
            case 'mylab/levain-pet':
                return protectWithFeature(<Pages.MyLabLevainPetPage onNavigate={navigate} />, 'levain.lab_full');
            case 'mylab/levain':
                return protect(<Pages.LevainListPage onNavigate={navigate} />);
            case 'plans':
                return protect(
                    <Pages.PlansPage
                        onGrantAccess={() => { }}
                        onNavigateHome={() => navigate('mylab')}
                    />
                );
            case 'pro/activated':
                return protect(<Pages.ProActivatedPage onNavigate={navigate} />);

            case 'learn':
                return protect(<Pages.LearnPage onNavigate={navigate} />);
            case 'learn/all':
                return protect(<Pages.AllArticlesPage />);
            case 'learn/search':
                return protect(<Pages.SearchResultsPage />);
            case 'learn/category':
                return protect(<Pages.CategoryPage categoryId={routeParams || undefined} />);
            case 'learn/article':
                return protect(<Pages.LearnPage onNavigate={navigate} />);
            case 'learn/fundamentals':
                return protect(<Pages.FundamentalsPage onNavigate={navigate} />);
            case 'learn/methods':
                return protect(<Pages.MethodsPage onNavigate={navigate} />);
            case 'learn/critical-ingredients':
                return protect(<Pages.CriticalIngredientsPage onNavigate={navigate} />);
            case 'learn/ovens-heat':
                return protect(<Pages.OvensHeatPage onNavigate={navigate} />);
            case 'learn/troubleshooting-guide':
                return protect(<Pages.TroubleshootingGuidePage onNavigate={navigate} />);
            case 'learn/techniques':
                return protect(<Pages.TechniquesPage onNavigate={navigate} />);
            case 'learn/oven-science':
                return protect(<Pages.OvenSciencePage />);
            case 'learn/baking-science':
                return protect(<Pages.BakingSciencePage onNavigate={navigate} />);
            case 'learn/temperature-control':
                return protect(<Pages.TemperatureControlPage />);
            case 'learn/storage':
                return protect(<Pages.StoragePage />);
            case 'learn/hygiene-safety':
                return protect(<Pages.HygieneSafetyPage />);
            case 'learn/equipment':
                return protect(<Pages.EquipmentPage />);
            case 'learn/troubleshooting':
                return protect(<Pages.TroubleshootingPage />);
            case 'learn/ingredients':
                return protect(<Pages.IngredientsPage onNavigate={navigate} />);
            case 'learn/ingredients/flours':
                return protect(<Pages.IngredientsFloursPage />);
            case 'learn/ingredients/cheeses':
                return protect(<Pages.CheesesPage />);
            case 'learn/ingredients/meats':
                return protect(<Pages.MeatsPage />);
            case 'learn/ingredients/vegetables':
                return protect(<Pages.VegetablesPage />);
            case 'learn/ingredients/sauces':
                return protect(<Pages.SaucesPage />);
            case 'learn/ingredients/oils-spices':
                return protect(<Pages.OilsSpicesPage />);
            case 'learn/ingredients/oils':
                return protect(<Pages.OilsPage />);
            case 'learn/ingredients/classic-combos':
                return protect(<Pages.ClassicCombosPage />);
            case 'learn/ingredients/bold-combos':
                return protect(<Pages.BoldCombosPage />);
            case 'learn/sensory-guide':
                return protect(<Pages.SensoryGuidePage />);
            case 'learn/ingredients/pairing-tool':
                return protect(<Pages.PairingToolPage />);
            case 'learn/ingredients/ready-toppings':
                return protect(<Pages.ReadyToppingsPage />);
            case 'learn/chemistry-library':
                return protect(<Pages.ChemistryLibraryPage />);
            case 'learn/style-guide':
                return protect(<Pages.StyleGuidePage />);
            case 'learn/glossary':
                return protect(<Pages.GlossaryPage />);
            case 'learn/fermentation-biochemistry':
                return protect(<Pages.FermentationBiochemistryPage />);
            case 'learn/crumb-structure':
                return protect(<Pages.CrumbStructurePage />);
            case 'learn/parbaking':
                return protect(<Pages.ParbakingPage />);
            case 'learn/tomato-preservation':
                return protect(<Pages.TomatoPreservationPage />);
            case 'learn/white-sauces':
                return protect(<Pages.WhiteSaucesPage />);
            case 'learn/special-sauces':
                return protect(<Pages.SpecialSaucesPage />);
            case 'learn/sensory-profiles':
                return protect(<Pages.SensoryProfilesPage />);
            case 'learn/references':
                return protect(<Pages.ReferencesPage />);
            case 'profile':
                return protect(<Pages.ProfilePage onNavigate={navigate} />);
            case 'help':
                return <Pages.HelpPage />;
            case 'settings':
                return protect(<Pages.SettingsPage />);
            case 'settings/language':
                return protect(<Pages.LanguagePage />);
            case 'legal':
                return <Pages.LegalIndexPage onNavigate={navigate} />;
            case 'legal/terms':
            case 'terms':
                return <Pages.TermsPage />;
            case 'legal/privacy':
            case 'privacy':
                return <Pages.PrivacyPage />;
            case 'legal/cookies':
                return <Pages.CookiesPage />;
            case 'legal/eula':
                return <Pages.EulaPage />;
            case 'legal/ip':
                return <Pages.IpPage />;
            case 'legal/contact':
                return <Pages.ContactPage />;
            case 'landing':
                return (
                    <Pages.LandingPage
                        onNavigate={navigate}
                        onOpenAuth={() => setIsAuthModalOpen(true)}
                    />
                );

            case 'styles':
                return protect(<Pages.DoughStylesPage onNavigateToDetail={(id) => navigate('styles/detail', id)} onUseInCalculator={(s) => handleLoadStyleFromModule(s, navigate)} />);
            case 'tools':
                return protect(<Pages.ToolsPage onNavigate={navigate} />);
            case 'tools/oven-profiler':
                return protectWithFeature(<Pages.OvenAnalysisPage />, 'tools.oven_analysis');
            case 'tools/doughbot':
                return protectWithFeature(<Pages.DoughbotPage />, 'tools.doughbot');
            case 'tools/hydration-converter':
                return protect(<Pages.HydrationConverterPage />);

            case 'calculator':
                return protect(
                    <Pages.CalculatorPage
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
                        calculationMode={calculationMode}
                        onCalculationModeChange={setCalculationMode}
                        calculatorMode={calculatorMode}
                        onCalculatorModeChange={setCalculatorMode}
                        hasProAccess={hasProAccess}
                        onOpenPaywall={() => openPaywall('calculator')}
                    />
                );
            case 'community':
                return protect(<Pages.CommunityPage />);
            case 'notifications':
                return protect(<Pages.NotificationsPage />);
            case 'upgrade':
                return protect(<Pages.UpgradePage />);
            case 'upgrade/success':
                return protect(<Pages.UpgradePage success={true} />);
            case 'upgrade/cancel':
                return protect(<Pages.UpgradePage cancel={true} />);
            default:
                return protect(
                    <Pages.CalculatorPage
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
                        calculationMode={calculationMode}
                        onCalculationModeChange={setCalculationMode}
                        calculatorMode={calculatorMode}
                        onCalculatorModeChange={setCalculatorMode}
                        hasProAccess={hasProAccess}
                        onOpenPaywall={() => openPaywall('calculator')}
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
            {isAuthModalOpen && (
                <Suspense fallback={
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                        <LoadingSpinner className="h-12 w-12 text-dlp-accent" />
                    </div>
                }>
                    <AuthModal
                        isOpen={isAuthModalOpen}
                        onClose={() => setIsAuthModalOpen(false)}
                    />
                </Suspense>
            )}
        </>
    );
}
