import { useState, useEffect, useCallback } from 'react';

// Interface para o evento nativo do Chrome
interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function usePWAInstall() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        // 1. Detectar iOS
        const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        setIsIOS(isIosDevice);

        // 2. Detectar se já está instalado (Standalone)
        const isRunningStandalone = window.matchMedia('(display-mode: standalone)').matches ||
            (navigator as any).standalone ||
            window.location.search.includes('source=pwa');
        setIsStandalone(isRunningStandalone);

        // 3. Capturar evento de instalação (Android/Desktop)
        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault(); // Impede o mini-infobar padrão do Chrome
            setDeferredPrompt(e as BeforeInstallPromptEvent);

            // Só mostra o prompt se não estiver instalado
            if (!isRunningStandalone) {
                setShowPrompt(true);
            }
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }, []);

    // Função para disparar a instalação
    const triggerInstall = async () => {
        if (!deferredPrompt) return;

        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            setShowPrompt(false);
        }
        setDeferredPrompt(null);
    };

    const hidePrompt = () => setShowPrompt(false);

    return {
        isIOS,
        isStandalone,
        showPrompt,
        triggerInstall,
        hidePrompt
    };
}
