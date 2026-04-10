import React, { useState, Suspense, useMemo, useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import AppLoadingScreen from '@/components/ui/AppLoadingScreen';
import RequireAuth from '@/components/RequireAuth';
import { Logo } from '@/components/ui/Logo';
import GuidanceHost from '@/components/guidance/GuidanceHost';
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
import type { DoughyAssistantContextSnapshot } from '@/components/tools/doughyAssistant.types';

import AppRouter from '@/AppRouter';
import { PrimaryPage, BatchStatus } from '@/types';
import { FLOURS } from '@/flours-constants';
import { lazyWithChunkRecovery } from '@/utils/chunkRecovery';

// Lazy Load Assistant
const AssistantPage = lazyWithChunkRecovery(() => import('@/components/AssistantPage'));
const AuthModal = lazyWithChunkRecovery(() => import('@/components/AuthModal'));
const DoughyAssistantShell = lazyWithChunkRecovery(() => import('@/components/tools/DoughyAssistantShell'));
const PaywallModal = lazyWithChunkRecovery(() => import('@/components/PaywallModal').then((module) => ({ default: module.PaywallModal })));

function AppContent() {
  const { route, navigate, isNavigating } = useRouter();
  const { loading: authLoading } = useAuth();
  const {
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

  const { config, results } = useCalculator();
  const { session } = useDoughSession();
  const lastSaved = session.meta.lastSaved;
  const { addToast } = useToast();
  const { t } = useTranslation();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [shouldMountAssistantShell, setShouldMountAssistantShell] = useState(false);

  useEffect(() => {
    if (shouldMountAssistantShell) return;
    if (PUBLIC_ROUTES.has(route)) return;
    const id = window.setTimeout(() => setShouldMountAssistantShell(true), 900);
    return () => window.clearTimeout(id);
  }, [route, shouldMountAssistantShell]);

  // Last batch calculation
  const lastBatch = useMemo(() => {
    if (batches.length === 0) return undefined;
    return [...batches]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
  }, [batches]);

  const assistantContextSnapshot = useMemo<DoughyAssistantContextSnapshot>(() => ({
    doughConfig: config,
    doughResult: results,
    flour: FLOURS.find((flour) => flour.id === config.flourId),
    oven: ovens.find((oven) => oven.isDefault) || ovens[0],
    lastBatch,
    userPlan: hasProAccess ? 'pro' : 'free',
  }), [config, results, ovens, lastBatch, hasProAccess]);

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
    return <AppLoadingScreen fullScreen />;
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
              className="w-full rounded-xl bg-dlp-primary py-3.5 font-bold text-[#065F46] shadow-dlp-sm transition-all transform hover:scale-[1.02] hover:bg-dlp-primary-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-primary focus-visible:ring-offset-2"
            >
              Access Your Lab
            </button>
            <button
              onClick={() => navigate('plans')}
              className="w-full rounded-xl border border-dlp-border bg-white py-3.5 font-bold text-dlp-text-primary transition-colors hover:bg-dlp-bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-primary focus-visible:ring-offset-2"
            >
              Compare Plans & Pricing
            </button>
            <button
              onClick={() => navigate('landing')}
              className="w-full py-2 text-sm font-medium text-dlp-text-muted transition-colors hover:text-dlp-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-primary focus-visible:ring-offset-2"
            >
              Explore Product Tour
            </button>

            <p className="text-xs text-dlp-text-muted mt-6">
              {t('ui.terms_agreement')}
            </p>
          </div>

        </div>

        {isAuthModalOpen && (
          <Suspense fallback={null}>
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
    <div className="min-h-screen overflow-x-clip bg-dlp-bg-soft font-sans text-dlp-text-primary transition-colors duration-300 flex flex-col">
      <a
        href="#main-content"
        className="sr-only z-[120] rounded-lg bg-white px-4 py-2 text-sm font-semibold text-dlp-text-primary shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <Navigation
        activePage={route as PrimaryPage}
        onNavigate={navigate}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />
      <div
        className={[
          'pointer-events-none fixed inset-x-0 top-0 z-[110] h-1 origin-left bg-gradient-to-r from-lime-300 via-emerald-500 to-lime-300 shadow-[0_0_18px_rgba(16,185,129,0.35)] transition-all duration-200',
          isNavigating ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0',
        ].join(' ')}
        aria-hidden="true"
      />

      <main
        id="main-content"
        className="mx-auto mt-16 flex w-full max-w-[1680px] min-w-0 flex-grow overflow-x-clip px-3 pt-3 pb-28 sm:px-4 lg:px-6 xl:px-8 md:pt-4 md:pb-10"
      >
        {isAssistantOpen ? (
          <Suspense fallback={<AppLoadingScreen fullScreen={false} />}>
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

      {shouldMountAssistantShell && (
        <Suspense fallback={null}>
          <DoughyAssistantShell contextSnapshot={assistantContextSnapshot} />
        </Suspense>
      )}

      {isPaywallOpen && (
        <Suspense fallback={null}>
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
      )}
      {isAuthModalOpen && (
        <Suspense fallback={null}>
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
          />
        </Suspense>
      )}
      <GuidanceHost />

      {/* Persistence Indicator */}
      {lastSaved && (
        <div className="fixed bottom-24 right-4 bg-dlp-bg-surface border border-dlp-border shadow-lg rounded-full px-4 py-2 text-xs text-dlp-text-muted transition-opacity duration-1000 animate-fade-in-out pointer-events-none z-50 flex items-center gap-2 sm:bottom-4">
          <div className="w-2 h-2 rounded-full bg-dlp-primary"></div>
          {t('ui.changes_saved')}
        </div>
      )}
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

