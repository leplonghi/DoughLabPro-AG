import React, { useState, Suspense, useMemo, useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import RequireAuth from '@/components/RequireAuth';
import FloatingActionButton from '@/components/ui/FloatingActionButton';
import AuthModal from '@/components/AuthModal';
import { PaywallModal } from '@/components/PaywallModal';
import LevainOnboardingModal from '@/components/onboarding/LevainOnboardingModal';
import { Logo } from '@/components/ui/Logo';
import { TourGuide } from '@/components/onboarding/TourGuide';
import { OnboardingWizard } from '@/components/onboarding/OnboardingWizard';
import { DoughyAssistant } from '@/components/tools/DoughyAssistant';

// Contexts
import { ToastProvider, useToast } from '@/components/ToastProvider';
import { UserProvider, useUser } from '@/contexts/UserProvider';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { I18nProvider, useTranslation } from '@/i18n';
import { CalculatorProvider, useCalculator } from '@/contexts/CalculatorContext';
import { DoughSessionProvider, useDoughSession } from '@/contexts/DoughSessionContext';
import { StylesProvider } from '@/contexts/StylesProvider';
import { RouterProvider, useRouter } from '@/contexts/RouterContext';

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

import AppRouter from '@/AppRouter';
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
  const [showLevainOnboarding, setShowLevainOnboarding] = useState(false);
  const [showMainOnboarding, setShowMainOnboarding] = useState(false);

  // Main Onboarding Logic
  // Main Onboarding Logic - DISABLED BY USER REQUEST
  // useEffect(() => {
  //   if (user && isAuthenticated && !user.onboardingCompleted) {
  //     // Check if we maybe stored it locally for guests/interim
  //     const localCompleted = localStorage.getItem('dlp_onboarding_completed') === 'true';
  //     if (!localCompleted) {
  //       setShowMainOnboarding(true);
  //     }
  //   }
  // }, [user, isAuthenticated]);

  const handleMainOnboardingComplete = () => {
    localStorage.setItem('dlp_onboarding_completed', 'true');
    setShowMainOnboarding(false);
  };

  // Last batch calculation
  const lastBatch = useMemo(() => {
    if (batches.length === 0) return undefined;
    return [...batches]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
  }, [batches]);

  // Levain Onboarding Logic
  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('levain_pet_onboarding_seen_v1');
    if (!hasSeenOnboarding && route.startsWith('mylab/levain')) {
      setShowLevainOnboarding(true);
    }
  }, [route]);

  const handleOnboardingComplete = () => {
    try {
      localStorage.setItem('levain_pet_onboarding_seen_v1', 'true');
    } catch (error) {
      console.error(t('common.failed_to_save_onboarding_status_to_localstorage'), error);
    }
    setShowLevainOnboarding(false);
  };

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
          <div className="mb-8 flex justify-center">
            <Logo className="h-24 w-auto" />
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

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dlp-bg-soft font-sans text-dlp-text-primary transition-colors duration-300 flex flex-col">
      <Navigation
        activePage={route as PrimaryPage}
        onNavigate={navigate}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 py-8 md:py-10 mt-20">
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

      <DoughyAssistant />

      {showLevainOnboarding && (
        <LevainOnboardingModal
          onComplete={handleOnboardingComplete}
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
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
      <TourGuide />

      {/* Persistence Indicator */}
      {lastSaved && (
        <div className="fixed bottom-4 right-4 bg-dlp-bg-surface border border-dlp-border shadow-lg rounded-full px-4 py-2 text-xs text-dlp-text-muted transition-opacity duration-1000 animate-fade-in-out pointer-events-none z-50 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-dlp-brand"></div>
          {t('ui.changes_saved')}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <I18nProvider>
      <AuthProvider>
        <ToastProvider>
          <UserProvider>
            <MarketingProvider>
              {/* Domain-specific providers */}
              <BatchesProviderComponent>
                <LevainProvider>
                  <GoalsProvider>
                    <FloursProvider>
                      <ConsistencyProvider>
                        <InsightsProvider>
                          <RecipesProvider>
                            <DoughsProvider>
                              <SensoryProvider>
                                <TimelineProvider>
                                  <RouterProvider>
                                    <DoughSessionProvider>
                                      <CalculatorProvider>
                                        <StylesProvider>
                                          <AppContent />
                                        </StylesProvider>
                                      </CalculatorProvider>
                                    </DoughSessionProvider>
                                  </RouterProvider>
                                </TimelineProvider>
                              </SensoryProvider>
                            </DoughsProvider>
                          </RecipesProvider>
                        </InsightsProvider>
                      </ConsistencyProvider>
                    </FloursProvider>
                  </GoalsProvider>
                </LevainProvider>
              </BatchesProviderComponent>
            </MarketingProvider>
          </UserProvider>
        </ToastProvider>
      </AuthProvider>
    </I18nProvider>
  );
}

export default App;

