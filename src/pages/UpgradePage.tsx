import React, { useState } from 'react';
import { checkoutProSubscription } from '@/services/payment';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { useTranslation } from '@/i18n';
import { logEvent } from '@/services/analytics';
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
    React.useEffect(() => {
        if (success) {
            logEvent('monetization_upgrade_success', { planId: 'pro' });
        }
    }, [success]);
    const handleUpgrade = async () => {
        logEvent('monetization_upgrade_attempt', { planId: 'pro' });
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
                    className="px-6 py-3 bg-gray-50 text-white rounded-lg font-semibold hover:bg-white transition-colors"
                >{t('common.try_again')}</button>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-base text-amber-600 font-bold tracking-widest uppercase">{t('learn:doughlab_pro')}</h2>
                <h1 className="mt-2 text-4xl leading-10 font-black tracking-tight text-slate-900 sm:text-5xl">{t('common:bake_with_confidence_every_time')}</h1>
                <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">{t('common:stop_guessing')}<br />{t('common:start_understanding_your_dough')}</p>
                <div className="mt-12 max-w-lg mx-auto rounded-3xl shadow-2xl overflow-hidden lg:max-w-none lg:flex border border-slate-100">
                    <div className="flex-1 bg-white px-6 py-8 lg:p-12 text-left">
                        <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">{t('common:pro_baking_experience')}</h3>
                        <p className="mt-6 text-base text-slate-500 font-medium">{t('common:join_thousands_of_bakers_using_advanced_science_and_data_to_')}</p>
                        <div className="mt-8">
                            <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 bg-white text-xs tracking-[0.2em] font-black uppercase text-amber-600">{t('common:benefits')}</h4>
                                <div className="flex-1 border-t border-slate-100" />
                            </div>
                            <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                {[
                                    'Unlimited baking history',
                                    'Smart scheduling for future bakes',
                                    'Dough behavior insights',
                                    'Compare results and improve every batch',
                                    'Less waste. More consistency.'
                                ].map((benefit) => (
                                    <li key={benefit} className="flex items-start lg:col-span-1">
                                        <div className="flex-shrink-0">
                                            <CheckCircleIcon className="h-6 w-6 text-emerald-500" aria-hidden="true" />
                                        </div>
                                        <p className="ml-3 text-base text-slate-700 font-medium">{benefit}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="py-12 px-6 text-center bg-slate-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 min-w-[320px]">
                        <p className="text-sm leading-6 font-bold text-slate-400 uppercase tracking-widest">{t('common:price')}</p>
                        <div className="mt-4 flex items-center justify-center text-6xl font-black text-slate-900">
                            <span>$5.99</span>
                            <span className="ml-2 text-lg font-bold text-slate-400 uppercase tracking-wider">/mo</span>
                        </div>
                        <p className="mt-4 text-sm font-bold text-slate-500">{t('common:cancel_anytime')}</p>
                        <div className="mt-8">
                            <button
                                onClick={handleUpgrade}
                                disabled={isLoading}
                                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-black rounded-2xl text-white bg-gradient-to-br from-emerald-50 to-lime-50 hover:bg-[#2d5a45] transition-all transform active:scale-95 shadow-xl shadow-emerald-900/10 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? <LoadingSpinner className="h-5 w-5 text-white" /> : "Unlock Pro Baking"}
                            </button>
                            <p className="mt-6 text-xs font-medium text-slate-400">{t('common:no_ads_no_tricks_your_data_stays_yours')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UpgradePage;
