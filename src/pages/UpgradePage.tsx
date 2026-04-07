import React, { useState } from 'react';
import { checkoutProSubscription, getPaymentErrorMessage, openBillingPortal } from '@/services/payment';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { useTranslation } from '@/i18n';
<<<<<<< HEAD
import { useLocalizedPricing } from '@/hooks/useLocalizedPricing';
import { useToast } from '@/components/ToastProvider';
import { useUser } from '@/contexts/UserProvider';
import AppShellHeader from '@/components/ui/AppShellHeader';
import AppSurface from '@/components/ui/AppSurface';
import { getPageMeta } from '@/app/appShell';
=======
// import { useNavigate } from 'react-router-dom'; // Unused in this version as we use window.location
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839

interface UpgradePageProps {
    success?: boolean;
    cancel?: boolean;
}

export const UpgradePage: React.FC<UpgradePageProps> = ({ success, cancel }) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
    const [isPortalLoading, setIsPortalLoading] = useState(false);
    const [checkoutError, setCheckoutError] = useState<string | null>(null);
    const { symbol, currency, countryCode, planPrices, isProvisional } = useLocalizedPricing();
    const { addToast } = useToast();
    const { hasProAccess, user } = useUser();
    const upgradeMeta = getPageMeta('upgrade');
    const canManageBilling = hasProAccess && !!user?.stripeCustomerId;
=======
    // Standard subscription plan key
    const PRO_PLAN_KEY = "standard";
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839

    const handleUpgrade = async () => {
        setIsLoading(true);
        setCheckoutError(null);
        try {
<<<<<<< HEAD
            await checkoutProSubscription(countryCode);
=======
            await checkoutProSubscription(PRO_PLAN_KEY);
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
        } catch (error) {
            console.error(error);
            setCheckoutError(getPaymentErrorMessage(error, 'checkout'));
            setIsLoading(false);
        }
    };

    const handleManageSubscription = async () => {
        setIsPortalLoading(true);
        setCheckoutError(null);
        try {
            await openBillingPortal();
        } catch (error) {
            console.error(error);
            const message = getPaymentErrorMessage(error, 'billingPortal');
            setCheckoutError(message);
            addToast(message, "error");
            setIsPortalLoading(false);
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
                    onClick={() => { window.location.hash = '#/mylab'; }}
                    className="dlp-button-primary rounded-xl px-6 py-3"
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
                    onClick={() => { window.location.hash = '#/plans'; }}
                    className="dlp-button-primary rounded-xl px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-brand focus-visible:ring-offset-2"
                >{t('common.try_again')}</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-transparent py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <AppShellHeader
                    eyebrow={upgradeMeta.eyebrow}
                    title={upgradeMeta.title}
                    description={upgradeMeta.description}
                >
                    <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                        Monthly subscription, cancel anytime
                    </div>
                </AppShellHeader>

                <AppSurface className="max-w-6xl mx-auto overflow-hidden lg:flex">
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
                    <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 lg:min-w-[360px]">
                        <p className="text-lg leading-6 font-medium text-gray-900">Monthly subscription</p>
                        <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
<<<<<<< HEAD
                            <span>{symbol}{planPrices.standard.toFixed(2)}</span>
                            <span className="ml-3 text-xl font-medium text-gray-500">{currency}</span>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            Cancel anytime. Secure billing is finalized by your payment country.
=======
                            <span>$4.99</span>
                            <span className="ml-3 text-xl font-medium text-gray-500">/{t('general.month')}</span>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            {t('paywall.pricing.cancel_anytime', { currency: 'USD' })}
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
                        </p>
                        {isProvisional && (
                            <p className="mt-2 text-xs text-gray-400">
                                We are previewing your regional price for {countryCode}.
                            </p>
                        )}
                        {checkoutError && (
                            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-left text-sm text-red-700" role="alert" aria-live="polite">
                                {checkoutError}
                            </div>
                        )}
                        <div className="mt-6">
                            {canManageBilling ? (
                                <div className="space-y-3">
                                    <div className="rounded-xl bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                                        Active plan: <span className="font-semibold text-slate-900">{user?.plan === 'lab_pro' ? 'DoughLab Pro' : 'Billing active'}</span>
                                    </div>
                                    <button
                                        onClick={handleManageSubscription}
                                        disabled={isPortalLoading}
                                        className="w-full flex items-center justify-center px-5 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-900 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                                    >
                                        {isPortalLoading ? <LoadingSpinner size="sm" color="gray" /> : 'Manage Subscription & Billing'}
                                    </button>
                                </div>
                            ) : hasProAccess ? (
                                <div className="space-y-3">
                                    <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-left text-sm text-amber-800">
                                        Your Pro access is active, but this account does not have a Stripe billing profile linked yet.
                                    </div>
                                    <button
                                        type="button"
                                        disabled
                                        className="w-full flex items-center justify-center px-5 py-3 border border-slate-200 text-base font-medium rounded-md text-slate-400 bg-white cursor-not-allowed"
                                    >
                                        Billing portal available after first Stripe checkout
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={handleUpgrade}
                                    disabled={isLoading}
                                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
                                >
                                    {isLoading ? <LoadingSpinner size="sm" color="white" /> : t('ui.upgrade_now_3')}
                                </button>
                            )}
                        </div>
                    </div>
                </AppSurface>
            </div>
        </div>
    );
};

export default UpgradePage;
