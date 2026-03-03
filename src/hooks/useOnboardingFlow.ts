import { useState, useEffect } from 'react';
import { User } from '@/types';

interface UseOnboardingFlowProps {
    user: User | null;
    isAuthenticated: boolean;
    route: string;
    t: (key: string) => string;
    isPaywallOpen?: boolean;
    isAuthModalOpen?: boolean;
}

export function useOnboardingFlow({
    user,
    isAuthenticated,
    route,
    t,
    isPaywallOpen = false,
    isAuthModalOpen = false,
}: UseOnboardingFlowProps) {
    const [showLevainOnboarding, setShowLevainOnboarding] = useState(false);
    const [showMainOnboarding, setShowMainOnboarding] = useState(false);

    // Main Onboarding Logic — with robust guards
    useEffect(() => {
        // Guard 1: Only for authenticated users without completed onboarding
        if (!user || !isAuthenticated) return;
        if (user.onboardingCompleted) return;

        // Guard 2: Respect local flag (avoids re-triggering on every reload)
        const localCompleted = localStorage.getItem('dlp_onboarding_completed') === 'true';
        if (localCompleted) return;

        // Guard 3: 800ms delay so we don't compete with loading modals
        const timer = setTimeout(() => {
            // Guard 4: Don't show if another modal is already open
            if (!isPaywallOpen && !isAuthModalOpen) {
                setShowMainOnboarding(true);
            }
        }, 800);

        return () => clearTimeout(timer);
    }, [user, isAuthenticated, isPaywallOpen, isAuthModalOpen]);

    const handleMainOnboardingComplete = () => {
        localStorage.setItem('dlp_onboarding_completed', 'true');
        setShowMainOnboarding(false);
    };

    // Levain Onboarding Logic
    useEffect(() => {
        const hasSeenOnboarding = localStorage.getItem('levain_pet_onboarding_seen_v1');
        if (!hasSeenOnboarding && route.startsWith('mylab/levain')) {
            setShowLevainOnboarding(true);
        }
    }, [route]);

    const handleLevainOnboardingComplete = () => {
        try {
            localStorage.setItem('levain_pet_onboarding_seen_v1', 'true');
        } catch (error) {
            console.error(t('common.failed_to_save_onboarding_status_to_localstorage'), error);
        }
        setShowLevainOnboarding(false);
    };

    return {
        showMainOnboarding,
        showLevainOnboarding,
        handleMainOnboardingComplete,
        handleLevainOnboardingComplete,
        setShowMainOnboarding,
    };
}
