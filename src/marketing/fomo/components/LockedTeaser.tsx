import React from 'react';
import { FeatureKey, canUseFeature, getCurrentPlan } from '../../../permissions';
import { useUser } from '../../../contexts/UserProvider';
import { useFomo } from '../useFomo';

interface LockedTeaserProps {
    featureKey: FeatureKey;
    children: React.ReactNode;
    className?: string;
}

export const LockedTeaser: React.FC<LockedTeaserProps> = ({ featureKey, children, className = '' }) => {
    const { user } = useUser();
    const { triggerFomo } = useFomo();

    // Determine if user has access
    const plan = getCurrentPlan(user);
    const hasAccess = canUseFeature(plan, featureKey);

    if (hasAccess) {
        return <>{children}</>;
    }

    return (
        <div className={`relative group overflow-hidden rounded-xl ${className}`}>
            <div className="blur-[2px] opacity-60 grayscale transition-all duration-500 pointer-events-none select-none">
                {children}
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/40 dark:bg-black/40 backdrop-blur-[1px]">
                <div
                    className="flex flex-col items-center justify-center p-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-xl shadow-lg border border-slate-200 dark:border-zinc-700 transform transition-all hover:scale-105 cursor-pointer max-w-[200px]"
                    onClick={() => triggerFomo({ action: 'save_preset' })}
                >
                    <div className="w-8 h-8 bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Pro Feature</h4>
                    <button className="mt-2 text-[10px] font-bold uppercase tracking-wider bg-lime-500 hover:bg-lime-400 text-white px-3 py-1.5 rounded-full transition-colors shadow-sm">
                        Unlock
                    </button>
                </div>
            </div>
        </div>
    );
};
