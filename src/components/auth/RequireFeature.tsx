import React from 'react';
import { useUser } from '@/contexts/UserProvider';
import { FeatureKey, canUseFeature, getCurrentPlan } from '@/permissions';
import { useRouter } from '@/contexts/RouterContext';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useTranslation } from '@/i18n';

interface RequireFeatureProps {
    featureKey: FeatureKey;
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

export const RequireFeature: React.FC<RequireFeatureProps> = ({ featureKey, children, fallback }) => {
    const { t } = useTranslation();
    const { user, userLoading, planLoading, openPaywall } = useUser();
    const { navigate } = useRouter();

    if (userLoading || planLoading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <LoadingSpinner />
            </div>
        );
    }

    const plan = getCurrentPlan(user);
    const isAllowed = canUseFeature(plan, featureKey);

    if (!isAllowed) {
        if (fallback) {
            return <>{fallback}</>;
        }

        // Default fallback: Upgrade UI
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center animate-fade-in">
                <div className="bg-slate-100 p-4 rounded-full mb-6">
                    <span className="text-4xl">🔒</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{t('auth.feature_locked')}</h2>
                <p className="text-slate-600 mb-8 max-w-md">
                    This feature requires a specific plan. Upgrade your account to access it.
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={() => navigate('mylab')}
                        className="px-6 py-2.5 rounded-xl font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                    >{t('auth.back_to_lab')}</button>
                    <button
                        onClick={() => openPaywall ? openPaywall('general') : navigate('plans')}
                        className="px-6 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-lime-500 to-green-600 hover:shadow-lg hover:scale-105 transition-all"
                    >{t('auth.view_plans')}</button>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};
