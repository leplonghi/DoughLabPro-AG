import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from '@/i18n';
import type { DoughyAssistantContextSnapshot } from '@/components/tools/doughyAssistant.types';
import DoughyAvatar from '@/components/tools/DoughyAvatar';
import { importWithChunkRecovery, lazyWithChunkRecovery } from '@/utils/chunkRecovery';

const LazyDoughyAssistantPanel = lazyWithChunkRecovery(() =>
    import('@/components/tools/DoughyAssistantPanel')
);

const preloadDoughyAssistantPanel = () =>
    importWithChunkRecovery(() => import('@/components/tools/DoughyAssistantPanel'));

interface DoughyAssistantShellProps {
    contextSnapshot: DoughyAssistantContextSnapshot;
}

const DOUGHY_INTRO_STORAGE_KEY = 'dlp_doughy_intro_seen_v1';

const DoughyAssistantShell: React.FC<DoughyAssistantShellProps> = ({ contextSnapshot }) => {
    const { t } = useTranslation('ui');
    const [isOpen, setIsOpen] = useState(false);
    const [isPanelRequested, setIsPanelRequested] = useState(false);
    const [showIntro, setShowIntro] = useState(false);

    const ensurePanelLoaded = useCallback(() => {
        if (!isPanelRequested) {
            setIsPanelRequested(true);
            void preloadDoughyAssistantPanel();
        }
    }, [isPanelRequested]);

    const dismissIntro = useCallback(() => {
        setShowIntro(false);
        if (typeof window === 'undefined') return;
        window.localStorage.setItem(DOUGHY_INTRO_STORAGE_KEY, '1');
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (window.localStorage.getItem(DOUGHY_INTRO_STORAGE_KEY) === '1') return;

        const timer = window.setTimeout(() => {
            setShowIntro(true);
        }, 1600);

        const autoDismissTimer = window.setTimeout(() => {
            setShowIntro(false);
        }, 7600);

        return () => {
            window.clearTimeout(timer);
            window.clearTimeout(autoDismissTimer);
        };
    }, []);

    const handleOpen = useCallback(() => {
        ensurePanelLoaded();
        dismissIntro();
        setIsOpen(true);
    }, [dismissIntro, ensurePanelLoaded]);

    return (
        <>
            {isPanelRequested && (
                <Suspense fallback={null}>
                    <LazyDoughyAssistantPanel
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        contextSnapshot={contextSnapshot}
                    />
                </Suspense>
            )}

            <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+5.25rem)] right-3 z-[101] flex max-w-[calc(100vw-1rem)] flex-col items-end gap-2 print:hidden sm:bottom-5 sm:right-5">
                {showIntro && !isOpen && (
                    <div className="relative mr-1 w-[min(15rem,calc(100vw-2.5rem))] rounded-2xl border border-emerald-100 bg-white/96 px-3.5 py-3 pr-9 shadow-[0_16px_40px_rgba(15,23,42,0.14)] backdrop-blur-xl">
                        <button
                            type="button"
                            onClick={dismissIntro}
                            className="absolute right-3 top-3 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                            aria-label={t('doughy_assistant.close_intro')}
                        >
                            <X className="h-4 w-4" />
                        </button>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700/75">
                            {t('doughy_assistant.launcher_badge')}
                        </p>
                        <p className="mt-1 text-sm font-medium leading-relaxed text-slate-700">
                            {t('doughy_assistant.intro_description')}
                        </p>
                        <div className="pointer-events-none absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-b border-r border-emerald-100 bg-white/96" />
                    </div>
                )}

                <button
                    type="button"
                    onClick={handleOpen}
                    onMouseEnter={ensurePanelLoaded}
                    onFocus={ensurePanelLoaded}
                    className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/80 bg-white/95 shadow-[0_14px_32px_rgba(15,23,42,0.18)] ring-1 ring-emerald-950/5 transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(6,95,70,0.22)] sm:h-14 sm:w-14"
                    aria-label={t('doughy_assistant.button_label')}
                    title={t('doughy_assistant.launcher_description')}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-lime-50 opacity-95 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#a7f3d0] via-[#86efac] to-[#22c55e] shadow-inner ring-2 ring-white">
                        <DoughyAvatar
                            className="h-full w-full"
                            imageClassName="h-full w-full scale-[1.08] object-contain p-1.5 drop-shadow-[0_8px_18px_rgba(21,128,61,0.24)] sm:p-1"
                            alt={t('doughy_assistant.avatar_alt')}
                        />
                    </div>
                    {!isOpen && (
                        <span className="absolute right-0.5 top-0.5 z-20 h-3 w-3 rounded-full border-2 border-white bg-red-500 shadow-sm animate-bounce" />
                    )}
                </button>
            </div>
        </>
    );
};

export default DoughyAssistantShell;
