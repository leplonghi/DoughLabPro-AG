import React from 'react';

// Main Pages
export const CalculatorPage = React.lazy(() => import('@/pages/CalculatorPage'));
export const BatchDetailPage = React.lazy(() => import('@/pages/BatchDetailPage'));
export const ProfilePage = React.lazy(() => import('@/pages/ProfilePage'));
export const PlansPage = React.lazy(() => import('@/components/PlansPage'));
export const LearnPage = React.lazy(() => import('@/pages/learn/LearnPage'));
export const ReferencesPage = React.lazy(() => import('@/pages/ReferencesPage'));
export const MyLabPage = React.lazy(() => import('@/pages/MyLabPage'));
export const OvenAnalysisPage = React.lazy(() => import('@/pages/OvenAnalysisPage'));
export const DoughStylesPage = React.lazy(() => import('@/pages/StylesLibrary').then(module => ({ default: module.StylesLibraryPage })));
export const StyleDetailPage = React.lazy(() => import('@/pages/styles/StyleDetailPage').then(module => ({ default: module.StyleDetailPage })));
export const SettingsPage = React.lazy(() => import('@/pages/SettingsPage'));
export const LanguagePage = React.lazy(() => import('@/pages/settings/LanguagePage'));

// Legal Pages
export const TermsPage = React.lazy(() => import('@/pages/legal/TermsPage'));
export const PrivacyPage = React.lazy(() => import('@/pages/legal/PrivacyPage'));
export const CookiesPage = React.lazy(() => import('@/pages/legal/CookiesPage'));
export const EulaPage = React.lazy(() => import('@/pages/legal/EulaPage'));
export const IpPage = React.lazy(() => import('@/pages/legal/IpPage'));
export const ContactPage = React.lazy(() => import('@/pages/legal/ContactPage'));
export const LegalIndexPage = React.lazy(() => import('@/pages/legal/LegalIndexPage'));

// Learn Sub-Pages
export const FundamentalsPage = React.lazy(() => import('@/pages/learn/FundamentalsPage'));
export const MethodsPage = React.lazy(() => import('@/pages/learn/MethodsPage'));
export const CriticalIngredientsPage = React.lazy(() => import('@/pages/learn/CriticalIngredientsPage'));
export const OvensHeatPage = React.lazy(() => import('@/pages/learn/OvensHeatPage'));
export const TroubleshootingGuidePage = React.lazy(() => import('@/pages/learn/TroubleshootingGuidePage'));
export const TroubleshootingPage = React.lazy(() => import('@/pages/learn/TroubleshootingPage'));
export const IngredientsPage = React.lazy(() => import('@/pages/learn/IngredientsPage'));
export const ChemistryLibraryPage = React.lazy(() => import('@/pages/learn/ChemistryLibraryPage'));
export const StyleGuidePage = React.lazy(() => import('@/pages/learn/StyleGuidePage'));
export const GlossaryPage = React.lazy(() => import('@/pages/learn/GlossaryPage'));
export const OvenSciencePage = React.lazy(() => import('@/pages/learn/OvenSciencePage'));
export const FermentationBiochemistryPage = React.lazy(() => import('@/pages/learn/FermentationBiochemistryPage'));
export const CrumbStructurePage = React.lazy(() => import('@/pages/learn/CrumbStructurePage'));
export const ParbakingPage = React.lazy(() => import('@/pages/learn/ParbakingPage'));
export const TomatoPreservationPage = React.lazy(() => import('@/pages/learn/TomatoPreservationPage'));
export const WhiteSaucesPage = React.lazy(() => import('@/pages/learn/WhiteSaucesPage'));
export const SpecialSaucesPage = React.lazy(() => import('@/pages/learn/SpecialSaucesPage'));
export const SensoryProfilesPage = React.lazy(() => import('@/pages/learn/SensoryProfilesPage'));
export const TechniquesPage = React.lazy(() => import('@/pages/learn/TechniquesPage'));
export const TemperatureControlPage = React.lazy(() => import('@/pages/learn/TemperatureControlPage'));
export const StoragePage = React.lazy(() => import('@/pages/learn/StoragePage'));
export const HygieneSafetyPage = React.lazy(() => import('@/pages/learn/HygieneSafetyPage'));
export const EquipmentPage = React.lazy(() => import('@/pages/learn/EquipmentPage'));
export const SensoryGuidePage = React.lazy(() => import('@/pages/learn/SensoryGuidePage'));
export const BakingSciencePage = React.lazy(() => import('@/pages/learn/BakingSciencePage'));
export const LearnArticlePage = React.lazy(() => import('@/pages/learn/LearnArticlePage'));
export const AllArticlesPage = React.lazy(() => import('@/pages/learn/AllArticlesPage'));
export const CategoryPage = React.lazy(() => import('@/pages/learn/CategoryPage'));
export const SearchResultsPage = React.lazy(() => import('@/pages/learn/SearchResultsPage'));

// Ingredient Sub-Pages
export const IngredientsFloursPage = React.lazy(() => import('@/pages/learn/ingredients/FloursPage'));
export const CheesesPage = React.lazy(() => import('@/pages/learn/ingredients/CheesesPage'));
export const MeatsPage = React.lazy(() => import('@/pages/learn/ingredients/MeatsPage'));
export const VegetablesPage = React.lazy(() => import('@/pages/learn/ingredients/VegetablesPage'));
export const SaucesPage = React.lazy(() => import('@/pages/learn/ingredients/SaucesPage'));
export const OilsSpicesPage = React.lazy(() => import('@/pages/learn/ingredients/OilsSpicesPage'));
export const OilsPage = React.lazy(() => import('@/pages/learn/ingredients/OilsPage'));
export const ClassicCombosPage = React.lazy(() => import('@/pages/learn/ingredients/ClassicCombosPage'));
export const BoldCombosPage = React.lazy(() => import('@/pages/learn/ingredients/BoldCombosPage'));
export const PairingToolPage = React.lazy(() => import('@/pages/learn/ingredients/PairingToolPage'));
export const ReadyToppingsPage = React.lazy(() => import('@/pages/learn/ingredients/ReadyToppingsPage'));

// My Lab Pages
export const MyLabRecipesPage = React.lazy(() => import('@/pages/mylab/MyLabRecipesPage'));
export const MyLabLevainPetPage = React.lazy(() => import('@/pages/mylab/MyLabLevainPetPage'));
export const MyLabBatchesPage = React.lazy(() => import('@/pages/mylab/MyLabBatchesPage'));
export const MyLabFloursPage = React.lazy(() => import('@/pages/mylab/MyLabFloursPage'));
export const MyLabDoughsPage = React.lazy(() => import('@/pages/mylab/MyLabDoughsPage'));
export const MyLabSensoryDiaryPage = React.lazy(() => import('@/pages/mylab/MyLabSensoryDiaryPage'));
export const MyLabComparisonsPage = React.lazy(() => import('@/pages/mylab/MyLabComparisonsPage'));
export const MyLabInsightsPage = React.lazy(() => import('@/pages/mylab/MyLabInsightsPage'));
export const TimelinePage = React.lazy(() => import('@/pages/mylab/TimelinePage'));
export const ObjectivesPage = React.lazy(() => import('@/pages/mylab/ObjectivesPage'));
export const LevainListPage = React.lazy(() => import('@/pages/mylab/levain/LevainListPage'));
export const LevainDetailPage = React.lazy(() => import('@/pages/mylab/levain/LevainDetailPage'));
export const CompareRecipesPage = React.lazy(() => import('@/pages/mylab/CompareRecipesPage'));
export const ConsistencyListPage = React.lazy(() => import('@/pages/mylab/ConsistencyListPage'));
export const ConsistencyDetailPage = React.lazy(() => import('@/pages/mylab/ConsistencyDetailPage'));

// Feature Pages
export const CommunityPage = React.lazy(() => import('@/community/pages/CommunityPage').then(module => ({ default: module.CommunityPage })));
export const CommunityPostPage = React.lazy(() => import('@/community/pages/CommunityPostPage').then(module => ({ default: module.CommunityPostPage })));
export const CommunityUserProfilePage = React.lazy(() => import('@/community/pages/CommunityUserProfilePage').then(module => ({ default: module.CommunityUserProfilePage })));
export const CommunityCreatePostPage = React.lazy(() => import('@/community/pages/CommunityCreatePostPage').then(module => ({ default: module.CommunityCreatePostPage })));
export const ProActivatedPage = React.lazy(() => import('@/pages/pro/ProActivatedPage'));
export const DoughbotPage = React.lazy(() => import('@/pages/DoughbotPage'));
export const ToolsPage = React.lazy(() => import('@/pages/ToolsPage'));
export const HydrationConverterPage = React.lazy(() => import('@/pages/HydrationConverterPage'));
export const ProductionDashboard = React.lazy(() => import('@/pages/ProductionDashboard'));

// Placeholder Pages
export const HelpPage = React.lazy(() => import('@/pages/HelpPage'));
export const UpgradePage = React.lazy(() => import('@/pages/UpgradePage'));
export const NotificationsPage = React.lazy(() => import('@/pages/NotificationsPage'));
export const LandingPage = React.lazy(() => import('@/pages/LandingPage'));
