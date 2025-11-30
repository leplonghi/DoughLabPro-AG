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

// Contexts
import { ToastProvider, useToast } from '@/components/ToastProvider';
import { UserProvider, useUser } from '@/contexts/UserProvider';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { I18nProvider, useTranslation } from '@/i18n';
import { CalculatorProvider, useCalculator } from '@/contexts/CalculatorContext';
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

import AppRouter from '@/AppRouter';
import { PrimaryPage, BatchStatus } from '@/types';
import { FLOURS } from '@/flours-constants';

// Lazy Load Assistant
const AssistantPage = React.lazy(() => import('@/components/AssistantPage'));

console.log('[App] BatchesProvider imported:', BatchesProviderComponent);

function AppContent() {
  console.log('[App] AppContent rendering');
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
  const { addToast } = useToast();
  const { t } = useTranslation();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [showLevainOnboarding, setShowLevainOnboarding] = useState(false);

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
      console.error("Failed to save onboarding status to localStorage", error);
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
      addToast(`Bake "${newBatch.name}" started!`, 'success');
      navigate('mylab/fornadas');
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-lime-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="z-10 text-center max-w-md w-full">
          <div className="mb-8 flex justify-center">
            <Logo className="h-24 w-auto" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Welcome to your digital dough lab</h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            The ultimate precision tool for professional and home bakers.
            <br />
            <span className="text-sm text-slate-500 mt-2 block">Sign in to access your lab, recipes, and tools.</span>
          </p>

          <div className="space-y-4">
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg shadow-slate-900/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign In / Create Account
            </button>

            <p className="text-xs text-slate-400 mt-6">
              By continuing, you agree to our Terms of Service and Privacy Policy.
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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 flex flex-col">
      <Navigation
        activePage={route as PrimaryPage}
        onNavigate={navigate}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-10 mt-20">
        {isAssistantOpen ? (
          <Suspense fallback={<LoadingSpinner />}>
            <RequireAuth onOpenAuth={() => setIsAuthModalOpen(true)}>
              <AssistantPage
                config={config}
                results={results}
                defaultOven={ovens.find(o => o.isDefault) || ovens[0]}
                selectedFlour={FLOURS.find(f => f.id === config.flourId)}
                lastBatch={lastBatch}
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

      {!isAssistantOpen && (
        <FloatingActionButton
          onClick={() => setIsAssistantOpen(true)}
          label="Doughy"
          isShifted={isSummaryBarVisible}
        />
      )}

      {showLevainOnboarding && (
        <LevainOnboardingModal
          onComplete={handleOnboardingComplete}
          onNavigate={navigate}
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
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <I18nProvider>
          <UserProvider>
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
                                  <CalculatorProvider>
                                    <AppContent />
                                  </CalculatorProvider>
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
          </UserProvider>
        </I18nProvider>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
