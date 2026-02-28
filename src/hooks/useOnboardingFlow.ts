import { useState, useEffect } from 'react';
import { User } from '@/types';

interface UseOnboardingFlowProps {
    user: User | null;
    isAuthenticated: boolean;
    route: string;
    t: (key: string) => string;
}

export function useOnboardingFlow({ user, isAuthenticated, route, t }: UseOnboardingFlowProps) {
    const [showLevainOnboarding, setShowLevainOnboarding] = useState(false);
    const [showMainOnboarding, setShowMainOnboarding] = useState(false);

    // Main Onboarding Logic
    useEffect(() => {
        if (user && isAuthenticated && !user.onboardingCompleted) {
            // Check if we maybe stored it locally for guests/interim
            const localCompleted = localStorage.getItem('dlp_onboarding_completed') === 'true';
            if (!localCompleted) {
                setShowMainOnboarding(true);
            }
        }
    }, [user, isAuthenticated]);

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
        setShowMainOnboarding // Exported if needed to manually trigger
    };
}
