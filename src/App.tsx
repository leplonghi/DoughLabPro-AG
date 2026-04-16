
import React, { useState, Suspense, useMemo, useEffect } from 'react';
import { useOnboardingFlow } from '@/hooks/useOnboardingFlow';
import Navigation from '@/components/layout/Navigation';
import { BottomNav } from '@/components/BottomNav';
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
import { Toaster } from 'react-hot-toast';

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


import { UpgradeModal } from '@/components/UpgradeModal';

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
    grantSessionProAccess,
    upgradeModalConfig,
    setUpgradeModalConfig
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
  } = useOnboardingFlow({ user, isAuthenticated, route, t, isPaywallOpen, isAuthModalOpen });

  // Last batch calculation
  const lastBatch = useMemo(() => {
    if (batches.length === 0) return undefined;
    return [...batches]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
  }, [batches]);

  // Moment 4: Re-engagement (R1-03)
  useEffect(() => {
    if (!isAuthenticated || hasProAccess) return;

    const lastVisit = localStorage.getItem('last_visit');
    const now = new Date();
    localStorage.setItem('last_visit', now.toISOString());

    if (lastVisit) {
      const diff = now.getTime() - new Date(lastVisit).getTime();
      const days = diff / (1000 * 60 * 60 * 24);

      if (days > 7) {
        setTimeout(() => {
          setUpgradeModalConfig({
            isOpen: true,
            title: 'Sentimos sua falta!',
            description: 'Que tal levar suas massas ao próximo nível hoje? O Pro está com novos estilos premium esperando por você.',
          });
        }, 3000);
      }
    }
  }, [isAuthenticated, hasProAccess, setUpgradeModalConfig]);

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
    return createDraftBatch();
  }, [createDraftBatch]);

  // Global Authentication Check
  if (authLoading) {
    return <div className="flex h-screen items-center justify-center"><LoadingSpinner /></div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="h-[100dvh] w-full flex flex-col items-center justify-between premium-bg p-8 pt-12 pb-16 text-center select-none overflow-hidden touch-none overscroll-none">
        {/* Immersive Floating Orbs */}
        <div className="floating-orb w-[500px] h-[500px] -top-32 -left-32 bg-dlp-accent opacity-20" />
        <div className="floating-orb w-[400px] h-[400px] -bottom-32 -right-32 bg-dlp-brand opacity-20" style={{ animationDelay: '-10s' }} />
        <div className="floating-orb w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white opacity-40 blur-[120px]" />

        <div className="relative z-10 w-full max-w-sm flex flex-col items-center justify-between h-full gap-8">
          {/* Mascot Section - Removed checkerboard circle */}
          <div className="animate-slideDown" style={{ animationFillMode: 'both' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-dlp-accent/10 blur-3xl rounded-full scale-150 group-hover:opacity-30 transition-opacity duration-1000" />
              <div className="relative z-10 transform transition-all duration-1000 group-hover:scale-110 group-hover:rotate-3 animate-float px-2">
                <img
                  src="/doughy-avatar.png"
                  alt="Doughy"
                  className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
                />
                {/* Subtle reflection under character */}
                <div className="w-20 h-2 bg-black/5 blur-md rounded-full mx-auto mt-[-5px] scale-x-150 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Branding Section - Removed redundant title */}
          <div className="space-y-4 animate-fadeIn" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            <Logo className="h-14 md:h-20 w-auto mx-auto drop-shadow-2xl" />
            <p className="text-xl md:text-2xl text-dlp-text-secondary font-semibold tracking-tight leading-tight px-4">
              {t('ui:app_tagline')}
            </p>
            <div className="w-10 h-1 bg-gradient-to-r from-transparent via-dlp-accent/40 to-transparent mx-auto mt-6" />
          </div>

          {/* Action Section - Tightened for mobile fit */}
          <div className="w-full space-y-6 animate-slideUp" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
            <div className="space-y-6">
              <p className="text-sm md:text-base text-dlp-text-muted/80 font-medium max-w-[280px] mx-auto leading-relaxed">
                {t('ui:sign_in_to_access_your_lab_recipes_and_tools')}
              </p>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="lab-button w-full text-base md:text-lg uppercase tracking-[0.2em] py-5 shadow-2xl active:scale-95 transition-transform"
              >
                {t('ui:sign_in_button')}
              </button>
            </div>

            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-dlp-text-muted/40 px-6 leading-relaxed">
              {t('ui:terms_agreement')}
            </p>
          </div>
        </div>

        {isAuthModalOpen && (
          <Suspense fallback={
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
              <LoadingSpinner className="h-16 w-16 text-dlp-accent" />
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

      <UpgradeModal
        isOpen={upgradeModalConfig.isOpen}
        onClose={() => setUpgradeModalConfig({ ...upgradeModalConfig, isOpen: false })}
        title={upgradeModalConfig.title}
        description={upgradeModalConfig.description}
        onUpgrade={() => {
          setUpgradeModalConfig({ ...upgradeModalConfig, isOpen: false });
          navigate('plans');
        }}
      />

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

      {/* Mobile Bottom Navigation */}
      <BottomNav />
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'var(--dlp-bg-card)',
            color: 'var(--dlp-text-primary)',
            border: '1px solid var(--dlp-border)',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: 'var(--dlp-shadow-lg)',
          },
          success: { iconTheme: { primary: 'var(--dlp-accent)', secondary: 'white' } },
          error: { iconTheme: { primary: '#ef4444', secondary: 'white' } },
        }}
      />
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

