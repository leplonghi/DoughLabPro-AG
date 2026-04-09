import React, { Suspense, useCallback, useState } from 'react';
import type { DoughyAssistantContextSnapshot } from '@/components/tools/doughyAssistant.types';

const LazyDoughyAssistantPanel = React.lazy(() =>
    import('@/components/tools/DoughyAssistantPanel')
);

const preloadDoughyAssistantPanel = () => import('@/components/tools/DoughyAssistantPanel');

const AbstractDoughyAvatar = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="doughyShellGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#84CC16" />
                <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#doughyShellGradient)" />
        <path d="M30 40 Q50 20 70 40 T90 60" stroke="white" strokeWidth="4" fill="none" opacity="0.5" />
        <circle cx="35" cy="45" r="5" fill="white" />
        <circle cx="65" cy="45" r="5" fill="white" />
        <path d="M35 65 Q50 75 65 65" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
);

interface DoughyAssistantShellProps {
    contextSnapshot: DoughyAssistantContextSnapshot;
}

const DoughyAssistantShell: React.FC<DoughyAssistantShellProps> = ({ contextSnapshot }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPanelRequested, setIsPanelRequested] = useState(false);

    const ensurePanelLoaded = useCallback(() => {
        if (!isPanelRequested) {
            setIsPanelRequested(true);
            void preloadDoughyAssistantPanel();
        }
    }, [isPanelRequested]);

    const handleOpen = useCallback(() => {
        ensurePanelLoaded();
        setIsOpen(true);
    }, [ensurePanelLoaded]);

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

            <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+5.6rem)] right-3 z-[101] print:hidden sm:bottom-6 sm:right-6">
                <button
                    type="button"
                    onClick={handleOpen}
                    onMouseEnter={ensurePanelLoaded}
                    onFocus={ensurePanelLoaded}
                    className="relative group h-14 w-14 sm:h-16 sm:w-16 rounded-full shadow-2xl flex items-center justify-center transition-all bg-white border-[3px] border-white overflow-hidden hover:shadow-emerald-900/20"
                    aria-label="Open Doughy assistant"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#51a145] to-[#1B4332] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="w-full h-full p-2 z-10 relative">
                        <AbstractDoughyAvatar />
                    </div>
                    {!isOpen && (
                        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full z-20 shadow-sm animate-bounce"></span>
                    )}
                </button>
            </div>
        </>
    );
};

export default DoughyAssistantShell;
