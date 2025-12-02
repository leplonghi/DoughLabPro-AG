import React from 'react';
import { useRouter } from '@/contexts/RouterContext';
import { FeatureKey, canUseFeature, getCurrentPlan } from '@/permissions';
import { useUser } from '@/contexts/UserProvider';
import { LockClosedIcon } from '@/components/ui/Icons';
import { PaywallOrigin } from '@/types';

interface LockFeatureProps {
    featureKey: FeatureKey;
    children: React.ReactNode;
    fallback?: React.ReactNode;
    mode?: 'blur' | 'block' | 'tooltip';
    customMessage?: string;
    showLockIcon?: boolean;
    className?: string;
    origin?: PaywallOrigin;
}

export const LockFeature: React.FC<LockFeatureProps> = ({
    featureKey,
    children,
    fallback,
    mode = 'blur',
    customMessage,
    showLockIcon = true,
    className = '',
    origin,
}) => {
    const { user, openPaywall, userLoading, planLoading } = useUser();
    const { navigate } = useRouter();

    if (userLoading || planLoading) {
        return <div className="opacity-40 pointer-events-none select-none">{children}</div>;
    }

    const plan = getCurrentPlan(user);
    const isAllowed = canUseFeature(plan, featureKey);

    if (isAllowed) {
        return <>{children}</>;
    }

    if (fallback) {
        return <>{fallback}</>;
    }

    const handleUnlockClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        if (openPaywall) {
            openPaywall(origin || 'general');
        } else {
            navigate('plans');
        }
    };

    if (mode === 'tooltip') {
        return (
            <div
                onClick={handleUnlockClick}
                className={`relative group cursor-pointer ${className}`}
                title={customMessage || "Unlock full Community"}
            >
                <div className="pointer-events-none opacity-60 grayscale">
                    {children}
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dlp-text-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                    {customMessage || "Unlock full Community"}
                </div>
            </div>
        );
    }

    return (
        <div className={`relative group overflow-hidden rounded-lg ${className}`}>
            {/* Content */}
            <div className={`${mode === 'blur' ? 'blur-sm opacity-50' : 'hidden'} pointer-events-none select-none`}>
                {children}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-dlp-bg/40 backdrop-blur-[1px] z-10 p-3 text-center transition-all duration-300">
                <div className="flex flex-col items-center justify-center p-3 bg-dlp-bg-card/90 backdrop-blur-md rounded-xl shadow-dlp-lg border border-dlp-border transform transition-all hover:scale-105">
                    {showLockIcon && (
                        <div className="bg-dlp-accent/10 text-dlp-accent p-2 rounded-full mb-2 shadow-dlp-sm">
                            <LockClosedIcon className="w-4 h-4" />
                        </div>
                    )}

                    <h3 className="text-sm font-bold text-dlp-text-primary mb-0.5">
                        Unlock Feature
                    </h3>

                    <p className="text-[10px] text-dlp-text-secondary mb-2 max-w-[150px] leading-tight">
                        {customMessage || "Unlock full Community"}
                    </p>

                    <button
                        onClick={handleUnlockClick}
                        className="bg-dlp-accent hover:bg-dlp-accent-hover text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors shadow-dlp-sm"
                    >
                        View Plans
                    </button>
                </div>
            </div>
        </div>
    );
};
