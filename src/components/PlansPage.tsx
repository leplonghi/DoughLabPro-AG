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
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Choose Your Plan
                </h1>
                <p className="mt-4 text-xl text-slate-600">
                    Unlock the full potential of your baking with DoughLab Pro.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
                {/* Free Plan */}
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-2xl font-bold text-slate-900">Free</h2>
                    <p className="mt-2 text-slate-500">Essential tools for home bakers.</p>
                    <p className="mt-8 text-4xl font-bold text-slate-900">$0</p>
                    <p className="text-sm text-slate-500">Forever free</p>

                    <ul className="mt-8 space-y-4">
                        {features.filter(f => f.free).map((feature) => (
                            <li key={feature.name} className="flex items-center gap-3">
                                <CheckIcon className="h-5 w-5 text-lime-500" />
                                <span className="text-slate-700">{feature.name}</span>
                            </li>
                        ))}
                        {features.filter(f => !f.free).map((feature) => (
                            <li key={feature.name} className="flex items-center gap-3 opacity-50">
                                <div className="h-5 w-5 rounded-full border border-slate-300" />
                                <span className="text-slate-400">{feature.name}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={onNavigateHome}
                        className="mt-8 w-full rounded-lg border border-slate-300 bg-white py-3 px-4 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                        Continue with Free
                    </button>
                </div>

                {/* Pro Plan */}
                <div className="relative rounded-2xl border-2 border-lime-500 bg-white p-8 shadow-xl">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-lime-500 px-4 py-1 text-sm font-bold text-white uppercase tracking-wide">
                        Most Popular
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        Pro
                        <SparklesIcon className="h-6 w-6 text-lime-500" />
                    </h2>
                    <p className="mt-2 text-slate-500">Advanced tools for serious pizza makers.</p>
                    <p className="mt-8 text-4xl font-bold text-slate-900">$4.99</p>
                    <p className="text-sm text-slate-500">per month</p>

                    <ul className="mt-8 space-y-4">
                        {features.map((feature) => (
                            <li key={feature.name} className="flex items-center gap-3">
                                <CheckIcon className="h-5 w-5 text-lime-500" />
                                <span className="text-slate-700 font-medium">{feature.name}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => openPaywall('plans_page')}
                        disabled={hasProAccess}
                        className={`mt-8 w-full rounded-lg py-3 px-4 text-center text-sm font-bold text-white transition-all shadow-lg ${hasProAccess
                                ? 'bg-slate-400 cursor-not-allowed'
                                : 'bg-lime-500 hover:bg-lime-600 hover:scale-[1.02]'
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
