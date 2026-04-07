import React from 'react';
import { useTranslation } from '@/i18n';
import { CheckIcon, StarIcon, SparklesIcon } from '@/components/ui/Icons';
import { useUser } from '@/contexts/UserProvider';

interface PlansPageProps {
    onGrantAccess: () => void;
    onNavigateHome: () => void;
}

const PlansPage: React.FC<PlansPageProps> = ({ onGrantAccess, onNavigateHome }) => {
    const { t } = useTranslation();
    const { hasProAccess, openPaywall } = useUser();

    const features = [
        { name: 'Unlimited Saved Batches', free: false, pro: true },
        { name: 'Advanced Calculator Mode', free: false, pro: true },
        { name: 'Create Custom Styles', free: false, pro: true },
        { name: 'AI Assistant (Doughbot)', free: false, pro: true },
        { name: 'Oven Analysis Tool', free: false, pro: true },
        { name: 'Levain Management', free: false, pro: true },
        { name: 'Export to PDF', free: false, pro: true },
        { name: 'Basic Calculator', free: true, pro: true },
        { name: 'Standard Presets', free: true, pro: true },
        { name: 'Community Access', free: true, pro: true },
    ];

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 animate-[fadeIn_0.5s_ease-in-out]">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-dlp-text-primary sm:text-5xl">{t('common.choose_your_plan')}</h1>
                <p className="mt-4 text-xl text-dlp-text-secondary">
                    Unlock the full potential of your baking with DoughLab Pro.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
                {/* Free Plan */}
                <div className="rounded-2xl border border-dlp-border bg-dlp-bg-card p-8 shadow-dlp-sm hover:shadow-dlp-md transition-shadow">
                    <h2 className="text-2xl font-bold text-dlp-text-primary">{t('general.free')}</h2>
                    <p className="mt-2 text-dlp-text-muted">{t('ui.essential_tools_for_home_bakers')}</p>
                    <p className="mt-8 text-4xl font-bold text-dlp-text-primary">$0</p>
                    <p className="text-sm text-dlp-text-muted">{t('general.forever_free')}</p>

                    <ul className="mt-8 space-y-4">
                        {features.filter(f => f.free).map((feature) => (
                            <li key={feature.name} className="flex items-center gap-3">
                                <CheckIcon className="h-5 w-5 text-dlp-accent" />
                                <span className="text-dlp-text-secondary">{feature.name}</span>
                            </li>
                        ))}
                        {features.filter(f => !f.free).map((feature) => (
                            <li key={feature.name} className="flex items-center gap-3 opacity-50">
                                <div className="h-5 w-5 rounded-full border border-dlp-border" />
                                <span className="text-dlp-text-muted">{feature.name}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={onNavigateHome}
                        className="mt-8 w-full rounded-lg border border-dlp-border bg-dlp-bg-card py-3 px-4 text-center text-sm font-semibold text-dlp-text-secondary hover:bg-dlp-bg-muted transition-colors"
                    >{t('common.continue_with_free')}</button>
                </div>

                {/* Pro Plan */}
                <div className="relative rounded-2xl border-2 border-dlp-accent bg-dlp-bg-card p-8 shadow-dlp-lg">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-dlp-accent px-4 py-1 text-sm font-bold text-white uppercase tracking-wide">{t('common.most_popular')}</div>
                    <h2 className="text-2xl font-bold text-dlp-text-primary flex items-center gap-2">{t('common.pro_2')}<SparklesIcon className="h-6 w-6 text-dlp-accent" />
                    </h2>
                    <p className="mt-2 text-dlp-text-muted">{t('ui.advanced_tools_for_serious_pizza_makers')}</p>
                    <p className="mt-8 text-4xl font-bold text-dlp-text-primary">$4.99</p>
                    <p className="text-sm text-dlp-text-muted">per month</p>

                    <ul className="mt-8 space-y-4">
                        {features.map((feature) => (
                            <li key={feature.name} className="flex items-center gap-3">
                                <CheckIcon className="h-5 w-5 text-dlp-accent" />
                                <span className="text-dlp-text-secondary font-medium">{feature.name}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => openPaywall('plans_page')}
                        disabled={hasProAccess}
                        className={`mt-8 w-full rounded-lg py-3 px-4 text-center text-sm font-bold text-white transition-all shadow-dlp-md ${hasProAccess
                            ? 'bg-dlp-text-muted cursor-not-allowed'
                            : 'bg-dlp-accent hover:bg-dlp-accent-hover hover:scale-[1.02]'
                            }`}
                    >
                        {hasProAccess ? 'Current Plan' : 'Upgrade to Pro'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlansPage;
