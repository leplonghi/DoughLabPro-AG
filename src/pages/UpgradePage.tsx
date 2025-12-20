import React, { useState } from 'react';
import { checkoutProSubscription } from '@/services/payment';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { useTranslation } from '@/i18n';
// import { useNavigate } from 'react-router-dom'; // Unused in this version as we use window.location

interface UpgradePageProps {
    success?: boolean;
    cancel?: boolean;
}

export const UpgradePage: React.FC<UpgradePageProps> = ({ success, cancel }) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    // Standard subscription plan key
    const PRO_PLAN_KEY = "standard";

    const handleUpgrade = async () => {
        setIsLoading(true);
        try {
            await checkoutProSubscription(PRO_PLAN_KEY);
        } catch (error) {
            console.error(error);
            alert(t('upgrade_page.checkout_error'));
            setIsLoading(false);
        }
    };

    if (success) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
                <CheckCircleIcon className="h-16 w-16 text-dlp-brand mb-4" />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('ui.upgrade_successful')}</h1>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    {t('upgrade_page.thank_you_desc')}
                </p>
                <button
                    onClick={() => window.location.href = '/'} // Reload to refresh permissions if needed
                    className="px-6 py-3 bg-dlp-brand-hover text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >{t('common.go_to_home')}</button>
            </div>
        );
    }

    if (cancel) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
                <XCircleIcon className="h-16 w-16 text-red-500 mb-4" />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('general.upgrade_cancelled')}</h1>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    {t('upgrade_page.cancelled_desc')}
                </p>
                <button
                    onClick={() => window.location.href = '/upgrade'}
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                >{t('common.try_again')}</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">{t('general.doughlab_pro_3')}</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{t('common.unlock_the_full_potential')}</p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    {t('upgrade_page.hero_desc')}
                </p>

                <div className="mt-12 max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                    <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{t('common.pro_membership')}</h3>
                        <p className="mt-6 text-base text-gray-500">
                            {t('upgrade_page.pro_desc')}
                        </p>
                        <div className="mt-8">
                            <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-amber-600">
                                    {t('upgrade_page.whats_included')}
                                </h4>
                                <div className="flex-1 border-t-2 border-gray-200" />
                            </div>
                            <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                {[
                                    'unlimited_recipes',
                                    'advanced_calcs',
                                    'levain_tracking',
                                    'oven_analysis',
                                    'priority_support',
                                    'community_badges',
                                ].map((featureKey) => (
                                    <li key={featureKey} className="flex items-start lg:col-span-1">
                                        <div className="flex-shrink-0">
                                            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                        </div>
                                        <p className="ml-3 text-sm text-gray-700">{t(`upgrade_page.features.${featureKey}`)}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                        <p className="text-lg leading-6 font-medium text-gray-900">
                            {t('upgrade_page.pay_once')}
                        </p>
                        <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                            <span>$4.99</span>
                            <span className="ml-3 text-xl font-medium text-gray-500">/{t('general.month')}</span>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            {t('paywall.pricing.cancel_anytime', { currency: 'USD' })}
                        </p>
                        <div className="mt-6">
                            <button
                                onClick={handleUpgrade}
                                disabled={isLoading}
                                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? <LoadingSpinner size="sm" color="white" /> : t('ui.upgrade_now_3')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpgradePage;
