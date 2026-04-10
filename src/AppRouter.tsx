import React, { Suspense, useState } from 'react';
import AppLoadingScreen from '@/components/ui/AppLoadingScreen';
import RequireAuth from '@/components/RequireAuth';
import { RequireFeature } from '@/components/auth/RequireFeature';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { useUser } from '@/contexts/UserProvider';
import { useRouter } from '@/contexts/RouterContext';
import { useCalculator } from '@/contexts/CalculatorContext';
import { FLOURS } from '@/flours-constants';
import { FeatureKey } from '@/permissions';
import { logCalculatorEvent } from '@/services/analytics';
import { resolveCommunityRoute } from '@/app/routes/communityRoutes';
import { resolveLibraryRoute } from '@/app/routes/libraryRoutes';
import { resolveSupportRoute } from '@/app/routes/supportRoutes';
import { resolveWorkspaceRoute } from '@/app/routes/workspaceRoutes';
import { lazyWithChunkRecovery } from '@/utils/chunkRecovery';

// Lazy Load Pages
const CalculatorPage = lazyWithChunkRecovery(() => import('@/pages/CalculatorPage'));
const BatchDetailPage = lazyWithChunkRecovery(() => import('@/pages/BatchDetailPage'));
const ProfilePage = lazyWithChunkRecovery(() => import('@/pages/ProfilePage'));
const PlansPage = lazyWithChunkRecovery(() => import('@/components/PlansPage'));
const LearnPage = lazyWithChunkRecovery(() => import('@/pages/learn/LearnPage'));
const ReferencesPage = lazyWithChunkRecovery(() => import('@/pages/ReferencesPage'));
const MyLabPage = lazyWithChunkRecovery(() => import('@/pages/MyLabPage'));
const OvenAnalysisPage = lazyWithChunkRecovery(() => import('@/pages/OvenAnalysisPage'));
const DoughStylesPage = lazyWithChunkRecovery(() => import('@/pages/StylesLibrary').then(module => ({ default: module.StylesLibraryPage })));
const StyleDetailPage = lazyWithChunkRecovery(() => import('@/pages/styles/StyleDetailPage').then(module => ({ default: module.StyleDetailPage })));
const SettingsPage = lazyWithChunkRecovery(() => import('@/pages/SettingsPage'));
const NotificationsPage = lazyWithChunkRecovery(() => import('@/pages/NotificationsPage').then(module => ({ default: module.NotificationsPage })));
const LanguagePage = lazyWithChunkRecovery(() => import('@/pages/settings/LanguagePage'));
const DesignSystemPage = lazyWithChunkRecovery(() => import('@/pages/DesignSystemPage'));
const TermsPage = lazyWithChunkRecovery(() => import('@/pages/legal/TermsPage'));
const PrivacyPage = lazyWithChunkRecovery(() => import('@/pages/legal/PrivacyPage'));
const CookiesPage = lazyWithChunkRecovery(() => import('@/pages/legal/CookiesPage'));
const EulaPage = lazyWithChunkRecovery(() => import('@/pages/legal/EulaPage'));
const IpPage = lazyWithChunkRecovery(() => import('@/pages/legal/IpPage'));
const ContactPage = lazyWithChunkRecovery(() => import('@/pages/legal/ContactPage'));
const LegalIndexPage = lazyWithChunkRecovery(() => import('@/pages/legal/LegalIndexPage'));

// Lazy Load Learn Sub-Pages
const FundamentalsPage = lazyWithChunkRecovery(() => import('@/pages/learn/FundamentalsPage'));
const MethodsPage = lazyWithChunkRecovery(() => import('@/pages/learn/MethodsPage'));
const CriticalIngredientsPage = lazyWithChunkRecovery(() => import('@/pages/learn/CriticalIngredientsPage'));
const OvensHeatPage = lazyWithChunkRecovery(() => import('@/pages/learn/OvensHeatPage'));
const TroubleshootingGuidePage = lazyWithChunkRecovery(() => import('@/pages/learn/TroubleshootingGuidePage'));
const TroubleshootingPage = lazyWithChunkRecovery(() => import('@/pages/learn/TroubleshootingPage'));
const IngredientsPage = lazyWithChunkRecovery(() => import('@/pages/learn/IngredientsPage'));
const ChemistryLibraryPage = lazyWithChunkRecovery(() => import('@/pages/learn/ChemistryLibraryPage'));
const StyleGuidePage = lazyWithChunkRecovery(() => import('@/pages/learn/StyleGuidePage'));
const GlossaryPage = lazyWithChunkRecovery(() => import('@/pages/learn/GlossaryPage'));
const OvenSciencePage = lazyWithChunkRecovery(() => import('@/pages/learn/OvenSciencePage'));
const FermentationBiochemistryPage = lazyWithChunkRecovery(() => import('@/pages/learn/FermentationBiochemistryPage'));
const CrumbStructurePage = lazyWithChunkRecovery(() => import('@/pages/learn/CrumbStructurePage'));
const ParbakingPage = lazyWithChunkRecovery(() => import('@/pages/learn/ParbakingPage'));
const TomatoPreservationPage = lazyWithChunkRecovery(() => import('@/pages/learn/TomatoPreservationPage'));
const WhiteSaucesPage = lazyWithChunkRecovery(() => import('@/pages/learn/WhiteSaucesPage'));
const SpecialSaucesPage = lazyWithChunkRecovery(() => import('@/pages/learn/SpecialSaucesPage'));
const SensoryProfilesPage = lazyWithChunkRecovery(() => import('@/pages/learn/SensoryProfilesPage'));
const TechniquesPage = lazyWithChunkRecovery(() => import('@/pages/learn/TechniquesPage'));
const TemperatureControlPage = lazyWithChunkRecovery(() => import('@/pages/learn/TemperatureControlPage'));
const StoragePage = lazyWithChunkRecovery(() => import('@/pages/learn/StoragePage'));
const HygieneSafetyPage = lazyWithChunkRecovery(() => import('@/pages/learn/HygieneSafetyPage'));
const EquipmentPage = lazyWithChunkRecovery(() => import('@/pages/learn/EquipmentPage'));
const SensoryGuidePage = lazyWithChunkRecovery(() => import('@/pages/learn/SensoryGuidePage'));
const BakingSciencePage = lazyWithChunkRecovery(() => import('@/pages/learn/BakingSciencePage'));
const BakingProfilesPage = lazyWithChunkRecovery(() => import('@/pages/learn/baking/BakingProfilesPage'));
const BakingSurfacesPage = lazyWithChunkRecovery(() => import('@/pages/learn/baking/BakingSurfacesPage'));
const CrustFormationPage = lazyWithChunkRecovery(() => import('@/pages/learn/baking/CrustFormationPage'));
const StarchGelatinizationPage = lazyWithChunkRecovery(() => import('@/pages/learn/baking/StarchGelatinizationPage'));
const LearnArticlePage = lazyWithChunkRecovery(() => import('@/pages/learn/LearnArticlePage'));
const AllArticlesPage = lazyWithChunkRecovery(() => import('@/pages/learn/AllArticlesPage'));
const CategoryPage = lazyWithChunkRecovery(() => import('@/pages/learn/CategoryPage'));
const SearchResultsPage = lazyWithChunkRecovery(() => import('@/pages/learn/SearchResultsPage'));

// Ingredient Sub-Pages
const IngredientsFloursPage = lazyWithChunkRecovery(() => import('@/pages/learn/ingredients/FloursPage'));
const YeastsPage = lazyWithChunkRecovery(() => import('@/pages/learn/ingredients/YeastsPage'));
const CheesesPage = lazyWithChunkRecovery(() => import('@/pages/learn/ingredients/CheesesPage'));
const MeatsPage = lazyWithChunkRecovery(() => import('@/pages/learn/ingredients/MeatsPage'));
const VegetablesPage = lazyWithChunkRecovery(() => import('@/pages/learn/ingredients/VegetablesPage'));
const SaucesPage = lazyWithChunkRecovery(() => import('@/pages/learn/ingredients/SaucesPage'));
const OilsSpicesPage = lazyWithChunkRecovery(() => import('@/pages/learn/ingredients/OilsSpicesPage'));
const OilsPage = lazyWithChunkRecovery(() => import('@/pages/learn/ingredients/OilsPage'));
const ClassicCombosPage = lazyWithChunkRecovery(() => import('@/pages/learn/ingredients/ClassicCombosPage'));
const BoldCombosPage = lazyWithChunkRecovery(() => import('@/pages/learn/ingredients/BoldCombosPage'));
const PairingToolPage = lazyWithChunkRecovery(() => import('@/pages/learn/ingredients/PairingToolPage'));
const ReadyToppingsPage = lazyWithChunkRecovery(() => import('@/pages/learn/ingredients/ReadyToppingsPage'));

// My Lab Pages
const MyLabRecipesPage = lazyWithChunkRecovery(() => import('@/pages/mylab/MyLabRecipesPage'));
const MyLabLevainPetPage = lazyWithChunkRecovery(() => import('@/pages/mylab/MyLabLevainPetPage'));
const MyLabBatchesPage = lazyWithChunkRecovery(() => import('@/pages/mylab/MyLabBatchesPage'));
const MyLabFloursPage = lazyWithChunkRecovery(() => import('@/pages/mylab/MyLabFloursPage'));
const MyLabDoughsPage = lazyWithChunkRecovery(() => import('@/pages/mylab/MyLabDoughsPage'));
const MyLabSensoryDiaryPage = lazyWithChunkRecovery(() => import('@/pages/mylab/MyLabSensoryDiaryPage'));
const MyLabComparisonsPage = lazyWithChunkRecovery(() => import('@/pages/mylab/MyLabComparisonsPage'));
const MyLabInsightsPage = lazyWithChunkRecovery(() => import('@/pages/mylab/MyLabInsightsPage'));
const TimelinePage = lazyWithChunkRecovery(() => import('@/pages/mylab/TimelinePage'));
const ObjectivesPage = lazyWithChunkRecovery(() => import('@/pages/mylab/ObjectivesPage'));
const LevainListPage = lazyWithChunkRecovery(() => import('@/pages/mylab/levain/LevainListPage'));
const LevainDetailPage = lazyWithChunkRecovery(() => import('@/pages/mylab/levain/LevainDetailPage'));
const CompareRecipesPage = lazyWithChunkRecovery(() => import('@/pages/mylab/CompareRecipesPage'));
const ConsistencyListPage = lazyWithChunkRecovery(() => import('@/pages/mylab/ConsistencyListPage'));
const ConsistencyDetailPage = lazyWithChunkRecovery(() => import('@/pages/mylab/ConsistencyDetailPage'));

// Feature Pages
const CommunityPage = lazyWithChunkRecovery(() => import('@/community/pages/CommunityPage').then(module => ({ default: module.CommunityPage })));
const CommunityPostPage = lazyWithChunkRecovery(() => import('@/community/pages/CommunityPostPage').then(module => ({ default: module.CommunityPostPage })));
const CommunityUserProfilePage = lazyWithChunkRecovery(() => import('@/community/pages/CommunityUserProfilePage').then(module => ({ default: module.CommunityUserProfilePage })));
const CommunityCreatePostPage = lazyWithChunkRecovery(() => import('@/community/pages/CommunityCreatePostPage').then(module => ({ default: module.CommunityCreatePostPage })));
const ProActivatedPage = lazyWithChunkRecovery(() => import('@/pages/pro/ProActivatedPage'));
const DoughbotPage = lazyWithChunkRecovery(() => import('@/pages/DoughbotPage'));
const ToolsPage = lazyWithChunkRecovery(() => import('@/pages/ToolsPage'));
const HydrationConverterPage = lazyWithChunkRecovery(() => import('@/pages/HydrationConverterPage'));
const ProductionDashboard = lazyWithChunkRecovery(() => import('@/pages/ProductionDashboard'));

// --- Placeholder Pages ---
const HelpPage = lazyWithChunkRecovery(() => import('@/pages/HelpPage'));
const UpgradePage = lazyWithChunkRecovery(() => import('@/pages/UpgradePage'));
const AuthModal = lazyWithChunkRecovery(() => import('@/components/AuthModal'));

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
        difficultyLevel,
        setDifficultyLevel,
        quantityInputMode,
        setQuantityInputMode,
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

    const protectWithFeature = (component: React.ReactNode, featureKey: FeatureKey) => (
        <RequireAuth onOpenAuth={() => setIsAuthModalOpen(true)}>
            <RequireFeature featureKey={featureKey}>
                {component}
            </RequireFeature>
        </RequireAuth>
    );

    const renderPage = () =>
        resolveWorkspaceRoute({
            route,
            routeParams,
            navigate,
            protect,
            protectWithFeature,
            onCreateDraftBatch,
            onStartBatch,
            handleLoadAndNavigate,
            onRequireAuth: () => setIsAuthModalOpen(true),
            openCalculatorPaywall: () => {
                logCalculatorEvent('paywall_opened_from_calculator', { source: 'calculator_page' });
                setIsAuthModalOpen(true);
                openPaywall('calculator');
            },
            calculator: {
                config,
                errors,
                results,
                unit,
                unitSystem,
                defaultOven,
                selectedFlour,
                quantityInputMode,
                calculatorMode,
                difficultyLevel,
                handleConfigChange,
                handleBakeTypeChange,
                handleStyleChange,
                handleYeastTypeChange,
                resetConfig,
                setUnit,
                setQuantityInputMode,
                setCalculatorMode,
                setDifficultyLevel,
            },
            hasProAccess,
            components: {
                BatchDetailPage,
                CalculatorPage,
                MyLabPage,
                MyLabRecipesPage,
                CompareRecipesPage,
                MyLabDoughsPage,
                MyLabFloursPage,
                MyLabBatchesPage,
                MyLabSensoryDiaryPage,
                MyLabComparisonsPage,
                MyLabInsightsPage,
                TimelinePage,
                ObjectivesPage,
                ConsistencyListPage,
                ConsistencyDetailPage,
                MyLabLevainPetPage,
                LevainListPage,
                LevainDetailPage,
                PlansPage,
                ProActivatedPage,
                ProfilePage,
                SettingsPage,
                NotificationsPage,
                LanguagePage,
                DesignSystemPage,
            },
        }) ||
        resolveLibraryRoute({
            route,
            routeParams,
            navigate,
            protect,
            protectWithFeature,
            handleLoadStyleFromModule,
            components: {
                LearnPage,
                AllArticlesPage,
                SearchResultsPage,
                CategoryPage,
                LearnArticlePage,
                FundamentalsPage,
                MethodsPage,
                CriticalIngredientsPage,
                OvensHeatPage,
                TroubleshootingGuidePage,
                TechniquesPage,
                OvenSciencePage,
                BakingSciencePage,
                BakingProfilesPage,
                BakingSurfacesPage,
                CrustFormationPage,
                StarchGelatinizationPage,
                TemperatureControlPage,
                StoragePage,
                HygieneSafetyPage,
                EquipmentPage,
                TroubleshootingPage,
                IngredientsPage,
                IngredientsFloursPage,
                YeastsPage,
                CheesesPage,
                MeatsPage,
                VegetablesPage,
                SaucesPage,
                OilsSpicesPage,
                OilsPage,
                ClassicCombosPage,
                BoldCombosPage,
                SensoryGuidePage,
                PairingToolPage,
                ReadyToppingsPage,
                ChemistryLibraryPage,
                StyleGuidePage,
                GlossaryPage,
                FermentationBiochemistryPage,
                CrumbStructurePage,
                ParbakingPage,
                TomatoPreservationPage,
                WhiteSaucesPage,
                SpecialSaucesPage,
                SensoryProfilesPage,
                ReferencesPage,
                DoughStylesPage,
                StyleDetailPage,
                ToolsPage,
                OvenAnalysisPage,
                DoughbotPage,
                HydrationConverterPage,
            },
        }) ||
        resolveCommunityRoute({
            route,
            routeParams,
            protect,
            components: {
                CommunityPage,
                CommunityPostPage,
                CommunityUserProfilePage,
                CommunityCreatePostPage,
            },
        }) ||
        resolveSupportRoute({
            route,
            navigate,
            onOpenAuth: () => setIsAuthModalOpen(true),
            components: {
                HelpPage,
                LegalIndexPage,
                TermsPage,
                PrivacyPage,
                CookiesPage,
                EulaPage,
                IpPage,
                ContactPage,
                UpgradePage,
            },
        }) ||
        protect(
            <MyLabPage
                onNavigate={navigate}
                onCreateDraftBatch={onCreateDraftBatch}
                onLoadAndNavigate={(c) => handleLoadAndNavigate(c, navigate)}
            />
        );

    return (
        <>
            <ErrorBoundary>
                <Suspense fallback={<AppLoadingScreen fullScreen={false} />}>
                    {renderPage()}
                </Suspense>
            </ErrorBoundary>
            <Suspense fallback={null}>
                <AuthModal
                    isOpen={isAuthModalOpen}
                    onClose={() => setIsAuthModalOpen(false)}
                />
            </Suspense>
        </>
    );
}
