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
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
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
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 dark:bg-black/40 backdrop-blur-[1px] z-10 p-3 text-center transition-all duration-300">
                <div className="flex flex-col items-center justify-center p-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-xl shadow-lg border border-slate-200 dark:border-zinc-700 transform transition-all hover:scale-105">
                    {showLockIcon && (
                        <div className="bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400 p-2 rounded-full mb-2 shadow-sm">
                            <LockClosedIcon className="w-4 h-4" />
                        </div>
                    )}

                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">
                        Unlock Feature
                    </h3>

                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-2 max-w-[150px] leading-tight">
                        {customMessage || "Unlock full Community"}
                    </p>

                    <button
                        onClick={handleUnlockClick}
                        className="bg-lime-500 hover:bg-lime-400 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors shadow-sm"
                    >
                        View Plans
                    </button>
                </div>
            </div>
        </div>
    );
};
