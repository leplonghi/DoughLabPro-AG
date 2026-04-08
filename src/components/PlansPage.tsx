import React from 'react';
import { useTranslation } from '@/i18n';
import { CheckIcon, SparklesIcon } from '@/components/ui/Icons';
import AppShellHeader from '@/components/ui/AppShellHeader';
import AppSurface from '@/components/ui/AppSurface';
import InlineNotice from '@/components/ui/InlineNotice';
import StatusBadge from '@/components/ui/StatusBadge';
import { useUser } from '@/contexts/UserProvider';
import { useLocalizedPricing } from '@/hooks/useLocalizedPricing';
import { checkoutProSubscription, getPaymentErrorMessage, openBillingPortal } from '@/services/payment';
import { useToast } from '@/components/ToastProvider';
import { getPageMeta } from '@/app/appShell';
import { useRouter } from '@/contexts/RouterContext';
import { logEvent } from '@/services/analytics';

interface PlansPageProps {
    onRequireAuth?: () => void;
}

const coreFeatures = [
    'Basic Calculator',
    'Standard Presets',
    'Community Access',
    'Learning Library',
];

const advancedFeatures = [
    'Unlimited Saved Batches',
    'Advanced Calculator Mode',
    'Create Custom Styles',
    'AI Assistant (Doughbot)',
    'Oven Analysis Tool',
    'Levain Management',
    'Export to PDF',
    'Advanced Insights and Comparisons',
];

const getUpgradeOrigin = () => {
    if (typeof window === 'undefined') return 'plans';
    return window.localStorage.getItem('doughlab-upgrade-origin') || 'plans';
};

const PlansPage: React.FC<PlansPageProps> = ({ onRequireAuth }) => {
    const { t } = useTranslation();
    const { hasProAccess, user, isAuthenticated } = useUser();
    const { addToast } = useToast();
    const { symbol, currency, countryCode, planPrices, isProvisional } = useLocalizedPricing();
    const { navigate } = useRouter();
    const plansMeta = getPageMeta('plans');
    const [isPortalLoading, setIsPortalLoading] = React.useState(false);
    const [isCheckoutLoading, setIsCheckoutLoading] = React.useState(false);
    const [checkoutError, setCheckoutError] = React.useState<string | null>(null);
    const canManageBilling = hasProAccess && !!user?.stripeCustomerId;

    React.useEffect(() => {
        logEvent('pricing_page_viewed', {
            isAuthenticated,
            hasProAccess,
            countryCode,
            currency,
            provisionalPricing: isProvisional,
            origin: getUpgradeOrigin(),
        });
    }, [isAuthenticated, hasProAccess, countryCode, currency, isProvisional]);

    const handleContinueFree = () => {
        logEvent('pricing_continue_free_clicked', {
            isAuthenticated,
            origin: getUpgradeOrigin(),
        });
        navigate(isAuthenticated ? 'mylab' : 'landing');
    };

    const handleUpgrade = async () => {
        if (!isAuthenticated) {
            logEvent('pricing_auth_required', { origin: 'plans' });
            if (onRequireAuth) {
                onRequireAuth();
            } else {
                navigate('landing');
            }
            return;
        }

        setIsCheckoutLoading(true);
        setCheckoutError(null);

        const upgradeOrigin = getUpgradeOrigin();
        logEvent('checkout_started', {
            origin: upgradeOrigin,
            countryCode,
            price: planPrices.standard,
            currency,
        });

        try {
            await checkoutProSubscription(countryCode);
            logEvent('checkout_redirected', {
                origin: upgradeOrigin,
                countryCode,
                currency,
                price: planPrices.standard,
            });
        } catch (error) {
            const message = getPaymentErrorMessage(error, 'checkout');
            setCheckoutError(message);
            addToast(message, 'error');
            logEvent('checkout_failed', {
                origin: upgradeOrigin,
                reason: message,
            });
            setIsCheckoutLoading(false);
        }
    };

    const handleManageSubscription = async () => {
        setIsPortalLoading(true);
        setCheckoutError(null);
        logEvent('billing_portal_open_requested', {
            origin: 'plans',
            hasProAccess,
        });

        try {
            await openBillingPortal();
            logEvent('billing_portal_open_succeeded', {
                origin: 'plans',
            });
        } catch (error) {
            console.error(error);
            const message = getPaymentErrorMessage(error, 'billingPortal');
            addToast(message, 'error');
            setCheckoutError(message);
            logEvent('billing_portal_open_failed', {
                reason: message,
            });
            setIsPortalLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-7xl animate-[fadeIn_0.5s_ease-in-out] px-4 py-12 sm:px-6 lg:px-8">
            <AppShellHeader
                eyebrow={plansMeta.eyebrow}
                title={plansMeta.title}
                description={plansMeta.description}
            >
                <StatusBadge tone="brand" className="border-white/70 bg-white/85 px-4 py-2 text-sm normal-case tracking-normal shadow-sm">
                    Core workflow free. Repeatability, history, and pro analysis on Pro.
                </StatusBadge>
            </AppShellHeader>

            {checkoutError && (
                <div className="mx-auto mb-6 max-w-5xl">
                    <InlineNotice tone="danger">
                        {checkoutError}
                    </InlineNotice>
                </div>
            )}

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                <AppSurface surface="glass" className="p-8">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-dlp-text-primary">{t('general.free')}</h2>
                            <p className="mt-2 text-dlp-text-muted">Perfect to learn the product and start your first repeatable bake loop.</p>
                        </div>
                        <StatusBadge tone="neutral" className="bg-white/80 px-3 py-1.5 text-[11px] normal-case tracking-normal">
                            Core
                        </StatusBadge>
                    </div>

                    <p className="mt-8 text-4xl font-bold text-dlp-text-primary">$0</p>
                    <p className="text-sm text-dlp-text-muted">{t('general.forever_free')}</p>

                    <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-dlp-brand">Main flow</p>
                        <p className="mt-2 text-sm leading-6 text-dlp-text-secondary">
                            Discover the app, calculate formulas, start a bake, and get your first My Lab history without paying upfront.
                        </p>
                    </div>

                    <ul className="mt-8 space-y-4">
                        {coreFeatures.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                                <CheckIcon className="h-5 w-5 text-dlp-accent" />
                                <span className="text-dlp-text-secondary">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={handleContinueFree}
                        className="mt-8 w-full rounded-xl border border-dlp-border bg-white/80 py-3 px-4 text-center text-sm font-semibold text-dlp-text-secondary transition-colors hover:bg-dlp-bg-muted"
                    >
                        {t('common.continue_with_free')}
                    </button>
                </AppSurface>

                <AppSurface tone="brand" surface="elevated" className="relative border-2 p-8 shadow-lg">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[linear-gradient(135deg,_#43b05d_0%,_#2f8b49_100%)] px-4 py-1 text-sm font-bold uppercase tracking-wide text-white shadow-[0_14px_28px_-18px_rgba(47,139,73,0.72)]">{t('common.most_popular')}</div>

                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="flex items-center gap-2 text-2xl font-bold text-dlp-text-primary">
                                {t('common.pro_2')}
                                <SparklesIcon className="h-6 w-6 text-dlp-accent" />
                            </h2>
                            <p className="mt-2 text-dlp-text-muted">For bakers who want memory, analysis, and a cleaner path from experiment to repeatable result.</p>
                        </div>
                        <StatusBadge tone="brand" className="bg-white/80 px-3 py-1.5 text-[11px] normal-case tracking-normal">
                            Advanced
                        </StatusBadge>
                    </div>

                    <p className="mt-8 text-4xl font-bold text-dlp-text-primary">{symbol}{planPrices.standard.toFixed(2)}</p>
                    <p className="text-sm text-dlp-text-muted">per month • {currency}</p>
                    {isProvisional && (
                        <p className="mt-2 text-xs text-dlp-text-muted">
                            Final billing country is confirmed securely at checkout.
                        </p>
                    )}

                    <div className="mt-8 rounded-2xl border border-white/70 bg-white/72 p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-dlp-brand">Advanced layer</p>
                        <p className="mt-2 text-sm leading-6 text-dlp-text-secondary">
                            Pro sharpens the same main flow instead of creating a separate product: more history, deeper diagnostics, better decision support.
                        </p>
                    </div>

                    <ul className="mt-8 space-y-4">
                        {advancedFeatures.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                                <CheckIcon className="h-5 w-5 text-dlp-accent" />
                                <span className="font-medium text-dlp-text-secondary">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {canManageBilling ? (
                        <button
                            onClick={handleManageSubscription}
                            disabled={isPortalLoading}
                            className="mt-8 w-full rounded-xl border border-dlp-border bg-white/85 py-3 px-4 text-center text-sm font-bold text-dlp-text-primary transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isPortalLoading ? 'Opening billing portal…' : 'Manage Subscription & Billing'}
                        </button>
                    ) : hasProAccess ? (
                        <InlineNotice tone="warning" className="mt-8">
                            Pro is active on this account, but the Stripe billing profile is not linked yet.
                        </InlineNotice>
                    ) : (
                        <button
                            onClick={handleUpgrade}
                            disabled={isCheckoutLoading}
                            className="dlp-button-primary mt-8 w-full rounded-xl py-3 px-4 text-center text-sm disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isCheckoutLoading ? 'Opening checkout…' : 'Upgrade to Pro'}
                        </button>
                    )}
                </AppSurface>
            </div>
        </div>
    );
};

export default PlansPage;
