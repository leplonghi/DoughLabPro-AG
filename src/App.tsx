import React, { useState, Suspense, useMemo, useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import RequireAuth from '@/components/RequireAuth';
import FloatingActionButton from '@/components/ui/FloatingActionButton';
import { PaywallModal } from '@/components/PaywallModal';
import LevainOnboardingModal from '@/components/onboarding/LevainOnboardingModal';
import { Logo } from '@/components/ui/Logo';
import { TourGuide } from '@/components/onboarding/TourGuide';
import { OnboardingWizard } from '@/components/onboarding/OnboardingWizard';
<<<<<<< HEAD
import { useToast } from '@/components/ToastProvider';
import { useUser } from '@/contexts/UserProvider';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from '@/i18n';
import { useCalculator } from '@/contexts/CalculatorContext';
import { useDoughSession } from '@/contexts/DoughSessionContext';
import { useRouter } from '@/contexts/RouterContext';
import AppProviders from '@/app/AppProviders';
import { PUBLIC_ROUTES } from '@/app/appShell';
import { logEvent } from '@/services/analytics';
=======
import { DoughyAssistant } from '@/components/tools/DoughyAssistant';
import { FloatingNotificationWidget } from '@/components/notifications/FloatingNotificationWidget';

// Contexts
import { ToastProvider, useToast } from '@/components/ToastProvider';
import { UserProvider, useUser } from '@/contexts/UserProvider';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { I18nProvider, useTranslation } from '@/i18n';
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
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839

import AppRouter from '@/AppRouter';
import { PrimaryPage, BatchStatus } from '@/types';
import { FLOURS } from '@/flours-constants';

// Lazy Load Assistant
const AssistantPage = React.lazy(() => import('@/components/AssistantPage'));
<<<<<<< HEAD
const AuthModal = React.lazy(() => import('@/components/AuthModal'));
const DoughyAssistant = React.lazy(() => import('@/components/tools/DoughyAssistant').then((module) => ({ default: module.DoughyAssistant })));
=======

>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839

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
    paywallOrigin
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
      logEvent('bake_started', {
        source: 'calculator',
        batchId: newBatch.id,
        firstBake: batches.length === 0,
        style: config.recipeStyle,
      });
      addToast(`${t('ui.bake_')}${newBatch.name}" started!`, 'success');
      // Deep Linking: Navigate to the specific batch so the URL updates
      navigate(`batch/${newBatch.id}`);
    }
  }, [results, batches, hasProAccess, addToast, openPaywall, config, addBatch, navigate]);

  const handleCreateDraftAndNavigate = React.useCallback(async () => {
    const draft = await createDraftBatch();
    logEvent('draft_bake_created', {
      source: route,
      firstDraft: batches.length === 0,
      batchId: draft.id,
    });
    navigate(`batch/${draft.id}`);
  }, [batches.length, createDraftBatch, navigate, route]);

  // Global Authentication Check
  if (authLoading) {
    return <div className="flex h-screen items-center justify-center"><LoadingSpinner /></div>;
  }

  if (!isAuthenticated && !PUBLIC_ROUTES.has(route)) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dlp-bg-soft p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(81,161,69,0.15),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(187,247,208,0.5),_transparent_35%)]" />
          <div className="z-10 text-center max-w-xl w-full rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-dlp-lg backdrop-blur-sm">
            <div className="mb-8 flex justify-center">
              <Logo className="h-24 w-auto" />
            </div>

          <h1 className="text-3xl font-semibold text-dlp-text-primary mb-3 tracking-tight text-balance">{t('ui.welcome_title')}</h1>
          <p className="text-lg text-dlp-text-secondary mb-2 leading-relaxed">
            {t('ui.app_tagline')}
          </p>
          <span className="text-sm text-dlp-text-muted block mb-8">{t('ui.sign_in_to_access_your_lab_recipes_and_tools')}</span>

          <div className="space-y-3">
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full rounded-xl bg-dlp-accent py-3.5 font-bold text-[#065F46] shadow-dlp-sm transition-all transform hover:scale-[1.02] hover:bg-dlp-accent-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-accent focus-visible:ring-offset-2"
            >
              Access Your Lab
            </button>
            <button
              onClick={() => navigate('plans')}
              className="w-full rounded-xl border border-dlp-border bg-white py-3.5 font-bold text-dlp-text-primary transition-colors hover:bg-dlp-bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-accent focus-visible:ring-offset-2"
            >
              Compare Plans & Pricing
            </button>
            <button
              onClick={() => navigate('landing')}
              className="w-full py-2 text-sm font-medium text-dlp-text-muted transition-colors hover:text-dlp-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-accent focus-visible:ring-offset-2"
            >
              Explore Product Tour
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
      <a
        href="#main-content"
        className="sr-only z-[120] rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <Navigation
        activePage={route as PrimaryPage}
        onNavigate={navigate}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      <main
        id="main-content"
        className="flex-grow w-full max-w-[1440px] mx-auto mt-20 px-4 py-8 pb-28 md:py-10 md:pb-10"
      >
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

<<<<<<< HEAD
      <Suspense fallback={null}>
        <DoughyAssistant />
      </Suspense>
=======
      <DoughyAssistant />
      <FloatingNotificationWidget />
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839

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
      <Suspense fallback={null}>
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </Suspense>
      <TourGuide />

      {/* Persistence Indicator */}
      {lastSaved && (
        <div className="fixed bottom-24 right-4 bg-dlp-bg-surface border border-dlp-border shadow-lg rounded-full px-4 py-2 text-xs text-dlp-text-muted transition-opacity duration-1000 animate-fade-in-out pointer-events-none z-50 flex items-center gap-2 sm:bottom-4">
          <div className="w-2 h-2 rounded-full bg-dlp-brand"></div>
          {t('ui.changes_saved')}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
<<<<<<< HEAD
    <AppProviders>
      <AppContent />
    </AppProviders>
=======
    <I18nProvider>
      <AuthProvider>
        <ToastProvider>
          <UserProvider>
            <MarketingProvider>
              <NotificationProvider>
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
              </NotificationProvider>
            </MarketingProvider>
          </UserProvider>
        </ToastProvider>
      </AuthProvider>
    </I18nProvider>
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
  );
}

export default App;

