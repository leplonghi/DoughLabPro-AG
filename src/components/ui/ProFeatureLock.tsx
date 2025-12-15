import React from 'react';
import { useUser } from '@/contexts/UserProvider';
import { LockClosedIcon, SparklesIcon } from '@/components/ui/Icons';
import { canUseFeature, PlanType, PermissionKey } from '@/permissions';
import { useTranslation } from '@/i18n';

interface ProFeatureLockProps {
    children: React.ReactNode;
    featureKey?: PermissionKey;
    customMessage?: string;
    className?: string;
    blurAmount?: 'sm' | 'md' | 'lg';
}

export const ProFeatureLock: React.FC<ProFeatureLockProps> = ({
    children,
    featureKey,
    customMessage,
    className = "",
    blurAmount = 'sm'
}) => {
    const { t } = useTranslation();
    const { user, openPaywall } = useUser();
    const currentPlan: PlanType = user?.plan as PlanType || 'free';

    // If key is provided, check permission. If not, assume locked for non-pro.
    const isUnlocked = featureKey
        ? canUseFeature(currentPlan, featureKey)
        : currentPlan === 'lab_pro';

    if (isUnlocked) {
        return <>{children}</>;
    }

    const getBlurClass = () => {
        switch (blurAmount) {
            case 'sm': return 'blur-[2px]';
            case 'md': return 'blur-[4px]';
            case 'lg': return 'blur-[8px]';
            default: return 'blur-[2px]';
        }
    };

    return (
        <div className={`relative overflow-hidden rounded-xl group ${className}`}>
            {/* Blurred Content */}
            <div className={`pointer-events-none select-none ${getBlurClass()} opacity-60 transition-all duration-300 group-hover:opacity-40`}>
                {children}
            </div>

            {/* Lock Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-[1px] z-10 p-6 text-center transition-all duration-300">
                <div className="rounded-full bg-slate-900 p-3 mb-3 shadow-lg group-hover:scale-110 transition-transform">
                    <LockClosedIcon className="h-6 w-6 text-lime-400" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">{t('common.pro_feature')}</h3>

                <p className="text-sm text-slate-600 mb-4 max-w-[250px] leading-relaxed">
                    {customMessage || t('ui.upgrade_to_doughlab_pro_to_unlock_this_advanced_to')}
                </p>

                <button
                    onClick={() => openPaywall('general')}
                    className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group-hover:scale-105"
                >
                    <SparklesIcon className="h-4 w-4 text-lime-400" />{t('common.unlock_now')}</button>
            </div>
        </div>
    );
};
