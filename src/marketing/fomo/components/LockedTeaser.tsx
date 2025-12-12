import React from 'react';
import { FeatureKey, canUseFeature, getCurrentPlan } from '../../../permissions';
import { useUser } from '../../../contexts/UserProvider';
import { useFomo } from '../useFomo';
import { useTranslation } from '@/i18n';

interface LockedTeaserProps {
    featureKey: FeatureKey;
    children: React.ReactNode;
    className?: string;
}

export const LockedTeaser: React.FC<LockedTeaserProps> = ({ featureKey, children, className = '' }) => {
  const { t } = useTranslation();
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

            <div className="absolute inset-0 flex items-center justify-center z-10 bg-dlp-bg/40 backdrop-blur-[1px]">
                <div
                    className="flex flex-col items-center justify-center p-4 bg-dlp-bg-card/90 backdrop-blur-md rounded-xl shadow-dlp-lg border border-dlp-border transform transition-all hover:scale-105 cursor-pointer max-w-[200px]"
                    onClick={() => triggerFomo({ action: 'save_preset' })}
                >
                    <div className="w-8 h-8 bg-dlp-accent/10 text-dlp-accent rounded-full flex items-center justify-center mb-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h4 className="text-sm font-bold text-dlp-text-primary mb-0.5">{t('general.pro_feature')}</h4>
                    <button className="mt-2 text-[10px] font-bold uppercase tracking-wider bg-dlp-accent hover:bg-dlp-accent-hover text-white px-3 py-1.5 rounded-full transition-colors shadow-dlp-sm">{t('marketing.unlock')}</button>
                </div>
            </div>
        </div>
    );
};
