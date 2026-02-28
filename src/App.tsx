
import React, { useState, Suspense, useMemo, useEffect } from 'react';
import { useOnboardingFlow } from '@/hooks/useOnboardingFlow';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import RequireAuth from '@/components/RequireAuth';
import FloatingActionButton from '@/components/ui/FloatingActionButton';
const AuthModal = React.lazy(() => import('@/components/modals/AuthModal'));
import { Logo } from '@/components/ui/Logo';
import { TourGuide } from '@/components/onboarding/TourGuide';
// Lazy Load Modals
const PaywallModal = React.lazy(() => import('@/components/modals/PaywallModal').then(m => ({ default: m.PaywallModal })));
const LevainOnboardingModal = React.lazy(() => import('@/components/onboarding/LevainOnboardingModal'));
const OnboardingWizard = React.lazy(() => import('@/components/onboarding/OnboardingWizard').then(m => ({ default: m.OnboardingWizard })));
const DoughyAssistant = React.lazy(() => import('@/components/tools/DoughyAssistant').then(m => ({ default: m.DoughyAssistant })));
import { FloatingNotificationWidget } from '@/components/notifications/FloatingNotificationWidget';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';
import { AppProviders } from '@/components/providers/AppProviders';

// Contexts
import { ToastProvider, useToast } from '@/components/ToastProvider';
import { UserProvider, useUser } from '@/contexts/UserProvider';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { useTranslation } from '@/i18n';
import { CalculatorProvider, useCalculator } from '@/contexts/CalculatorContext';
import { DoughSessionProvider, useDoughSession } from '@/contexts/DoughSessionContext';
import { StylesProvider } from '@/contexts/StylesProvider';
import { RouterProvider, useRouter } from '@/contexts/RouterContext';
import { NotificationProvider } from '@/contexts/NotificationContext';

// Domain-specific providers
import { BatchesProviderComponent } from '@/contexts/BatchesProvider';
import { LevainProvider } from '@/contexts/LevainProvider';
import { GoalsProvider } from '@/contexts/GoalsProvider';
import { FloursProvider } from '@/contexts/FloursProvider';
import { ConsistencyProvider } from '@/contexts/ConsistencyProvider';
import { InsightsProvider } from '@/contexts/InsightsProvider';
import { RecipesProvider } from '@/contexts/RecipesProvider';
import { DoughsProvider } from '@/contexts/DoughsProvider';
import { SensoryProvider } from '@/contexts/SensoryProvider';
import { TimelineProvider } from '@/contexts/TimelineProvider';
import { MarketingProvider } from '@/marketing/MarketingContext';

// Lazy load AppRouter
const AppRouter = React.lazy(() => import('@/AppRouter'));
import { PrimaryPage, BatchStatus } from '@/types';
import { FLOURS } from '@/flours-constants';

// Lazy Load Assistant
const AssistantPage = React.lazy(() => import('@/components/AssistantPage'));


function AppContent() {
  const { route, navigate } = useRouter();
  const { loading: authLoading } = useAuth();
  const {
    user,
    isAuthenticated,
    hasProAccess,
    ovens,
    batches,
    addBatch,
    createDraftBatch,
    isPaywallOpen,
    closePaywall,
    openPaywall,
    paywallOrigin,
    grantSessionProAccess
  } = useUser();

  const { config, results, hasInteracted } = useCalculator();
  const { session, isSaving } = useDoughSession();
  const lastSaved = session.meta.lastSaved;
  const { addToast } = useToast();
  const { t } = useTranslation();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  // Extracted Onboarding Logic
  const {
    showMainOnboarding,
    showLevainOnboarding,
    setShowMainOnboarding,
    handleMainOnboardingComplete,
    handleLevainOnboardingComplete
  } = useOnboardingFlow({ user, isAuthenticated, route, t });



  // Last batch calculation
  const lastBatch = useMemo(() => {
    if (batches.length === 0) return undefined;
    return [...batches]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
  }, [batches]);



  // Test Pro Logic
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('test_pro') === 'true') {
      grantSessionProAccess();
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [grantSessionProAccess]);

  const isSummaryBarVisible = route === 'calculator' && !!results;

  const handleStartBatch = React.useCallback(async () => {
    if (!results) return;

    const savedBatches = batches.filter(b => b.status !== BatchStatus.DRAFT);
    if (!hasProAccess && savedBatches.length >= 1) {
      addToast("Free plan includes 1 saved bake. Pro gives you unlimited bake history.", "error");
      setTimeout(() => addToast("One failed dough costs more than Pro.", "info"), 2000);
      openPaywall('mylab');
      return;
    }

    const batchName = prompt("Name this bake:", `${config.recipeStyle} Bake`);
    if (batchName) {
      const newBatch = await addBatch({
        name: batchName,
        doughConfig: config,
        doughResult: results,
        status: BatchStatus.PLANNED,
        isFavorite: false,
      });
      addToast(`${t('ui.bake_')}${newBatch.name}" started!`, 'success');
      // Deep Linking: Navigate to the specific batch so the URL updates
      navigate(`batch/${newBatch.id}`);
    }
  }, [results, batches, hasProAccess, addToast, openPaywall, config, addBatch, navigate]);

  const handleCreateDraftAndNavigate = React.useCallback(async () => {
    const draft = await createDraftBatch();
    navigate(`batch/${draft.id}`);
  }, [createDraftBatch, navigate]);

  // Global Authentication Check
  if (authLoading) {
    return <div className="flex h-screen items-center justify-center"><LoadingSpinner /></div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dlp-bg-soft p-4 relative overflow-hidden">
        <div className="z-10 text-center max-w-md w-full">
          <div className="mb-8 flex flex-col items-center gap-4">
            <div className="w-24 h-24 bg-white rounded-full p-1 shadow-xl border-2 border-emerald-100 overflow-hidden relative group">
              <img src="/doughy-avatar.png" alt={t('ui:assistant_page.title_short')} className="w-full h-full object-cover scale-110 transition-transform group-hover:scale-125 duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <Logo className="h-12 w-auto" />
          </div>

          <h1 className="text-2xl font-semibold text-dlp-text-primary mb-3 tracking-tight">{t('ui.welcome_title')}</h1>
          <p className="text-lg text-dlp-text-secondary mb-8 leading-relaxed">
            {t('ui.app_tagline')}
            <br />
            <span className="text-sm text-dlp-text-muted mt-2 block">{t('ui.sign_in_to_access_your_lab_recipes_and_tools')}</span>
          </p>

          <div className="space-y-4">
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full py-3.5 bg-dlp-accent hover:bg-dlp-accent-hover text-[#065F46] font-bold rounded-xl shadow-dlp-sm transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {t('ui.sign_in_button')}
            </button>

            <p className="text-xs text-dlp-text-muted mt-6">
              {t('ui.terms_agreement')}
            </p>
          </div>

        </div>

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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent font-sans text-dlp-text-primary transition-colors duration-300 flex flex-col">
      <Navigation
        activePage={route as PrimaryPage}
        onNavigate={navigate}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      <main id="main-content" tabIndex={-1} className="flex-grow w-full max-w-[1440px] mx-auto px-4 py-8 md:py-10 mt-20 pb-24 sm:pb-8 focus:outline-none">
        {isAssistantOpen ? (
          <Suspense fallback={<LoadingSpinner />}>
            <RequireAuth onOpenAuth={() => setIsAuthModalOpen(true)}>
              <AssistantPage
                config={config}
                results={results}
                defaultOven={ovens.find(o => o.isDefault) || ovens[0]}
                selectedFlour={FLOURS.find(f => f.id === config.flourId)}
                lastBatch={lastBatch}
                userPlan={hasProAccess ? 'pro' : 'free'}
                t={t}
              />
            </RequireAuth>
          </Suspense>
        ) : (
          <AppRouter
            onStartBatch={handleStartBatch}
            onCreateDraftBatch={handleCreateDraftAndNavigate}
          />
        )}
      </main>

      <Footer onNavigate={navigate} />

      <Suspense fallback={null}>
        <DoughyAssistant />
      </Suspense>
      <FloatingNotificationWidget />

      <Suspense fallback={null}>
        {showLevainOnboarding && (
          <LevainOnboardingModal
            onComplete={handleLevainOnboardingComplete}
            onNavigate={navigate}
          />
        )}

        {showMainOnboarding && (
          <OnboardingWizard
            onComplete={handleMainOnboardingComplete}
            onClose={() => setShowMainOnboarding(false)}
          />
        )}

        <PaywallModal
          isOpen={isPaywallOpen}
          onClose={closePaywall}
          onNavigateToPlans={() => {
            closePaywall();
            navigate('plans');
          }}
          origin={paywallOrigin}
        />
      </Suspense>
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
      <TourGuide />

      {/* PWA Install Prompt */}
      <PWAInstallPrompt />
    </div>
  );
}

function App() {
  return (
    <AppProviders>
      <AppContent />
    </AppProviders>
  );
}

export default App;

