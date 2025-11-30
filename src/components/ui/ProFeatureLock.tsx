import React from 'react';
import { useRouter } from '@/contexts/RouterContext';
import { FeatureKey, canUseFeature, getCurrentPlan } from '@/permissions';
import { useUser } from '@/contexts/UserProvider';
import { LockClosedIcon } from '@/components/ui/Icons';

interface ProFeatureLockProps {
    featureKey: FeatureKey;
    children: React.ReactNode;
    fallback?: React.ReactNode; // Optional custom fallback instead of the default overlay
    blur?: boolean; // Whether to blur the children or hide them completely
    customMessage?: string;
    showLockIcon?: boolean;
    className?: string;
}

export const ProFeatureLock: React.FC<ProFeatureLockProps> = ({
    featureKey,
    children,
    fallback,
    blur = true,
    customMessage,
    showLockIcon = true,
    className = '',
}) => {
    const { user, openPaywall } = useUser();
    const { navigate } = useRouter();

    const plan = getCurrentPlan(user);
    const isAllowed = canUseFeature(plan, featureKey);

    // Comprehensive debug logging
    console.group(`[ProFeatureLock] ${featureKey}`);
    console.log('User Object:', user);
    console.log('User Plan (raw):', user?.plan);
    console.log('User isPro:', user?.isPro);
    console.log('Detected Plan:', plan);
    console.log('Feature Key:', featureKey);
    console.log('Is Allowed:', isAllowed);
    console.groupEnd();

    if (isAllowed) {
        return <>{children}</>;
    }

    if (fallback) {
        return <>{fallback}</>;
    }

    return (
        <div className={`relative group overflow-hidden rounded-lg ${className}`}>
            {/* Content - Blurred or Hidden */}
            <div className={`${blur ? 'blur-sm opacity-50 pointer-events-none select-none' : 'hidden'}`}>
                {children}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-[2px] z-10 p-4 text-center transition-all duration-300">
                {showLockIcon && (
                    <div className="bg-lime-500 text-white p-3 rounded-full mb-3 shadow-lg transform group-hover:scale-110 transition-transform">
                        <LockClosedIcon className="w-6 h-6" />
                    </div>
                )}

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Unlock this feature
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 max-w-[250px]">
                    {customMessage || "Temperature control, flour strength and fermentation timing are part of Lab Pro."}
                </p>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        if (openPaywall) {
                            openPaywall('general'); // Or map featureKey to PaywallOrigin if needed
                        } else {
                            navigate('plans');
                        }
                    }}
                    className="bg-slate-900 dark:bg-lime-500 text-white dark:text-slate-900 px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-md"
                >
                    See Plans
                </button>
            </div>
        </div>
    );
};
