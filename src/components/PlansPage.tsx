import React from 'react';
import { useUser } from '@/contexts/UserProvider';
import { CheckIcon, SparklesIcon } from '@/components/ui/Icons';
import { PLANS } from '@/entitlements';

interface PlansPageProps {
    onClose?: () => void;
}

export const PlansPage: React.FC<PlansPageProps> = ({ onClose }) => {
    const { grantProAccess, grant24hPass, isPassOnCooldown, cooldownHoursRemaining } = useUser();

    const handleSubscribe = () => {
        // In a real app, this would redirect to Stripe/LemonSqueezy
        if (confirm("Simulate successful Pro subscription?")) {
            grantProAccess();
            if (onClose) onClose();
        }
    };

    const handle24hPass = () => {
        if (!isPassOnCooldown) {
            grant24hPass();
            if (onClose) onClose();
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl text-center">
                <h2 className="text-lg font-semibold leading-8 text-lime-600">Pricing</h2>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Choose the right plan for your journey
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
                    Whether you're just starting your pizza journey or you're a seasoned dough engineer, we have a plan for you.
                </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-20 lg:max-w-4xl lg:grid-cols-2">
                {/* Free Plan */}
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow ring-1 ring-slate-200">
                    <h3 className="text-lg font-semibold leading-8 text-slate-900">Free</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-500">Essential tools for home bakers.</p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                        <span className="text-4xl font-bold tracking-tight text-slate-900">$0</span>
                        <span className="text-sm font-semibold leading-6 text-slate-600">/month</span>
                    </p>
                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                        {['Basic Calculator', 'Limited Saves (1 Batch)', 'Community Access'].map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                                <CheckIcon className="h-6 w-5 flex-none text-lime-600" aria-hidden="true" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={handle24hPass}
                        disabled={isPassOnCooldown}
                        className={`mt-8 block w-full rounded-xl px-3 py-3 text-center text-sm font-bold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${isPassOnCooldown
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                            : 'bg-white text-lime-600 border-2 border-lime-600 hover:bg-lime-50'
                            }`}
                    >
                        {isPassOnCooldown
                            ? `Free Pass Cooldown: ${cooldownHoursRemaining}h`
                            : 'Try Pro Features (24h Pass)'}
                    </button>
                </div>

                {/* Pro Plan */}
                <div className="relative rounded-3xl border-2 border-lime-500 bg-white p-8 shadow-xl overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-2 -mr-2 w-24 h-24 bg-lime-500/10 rounded-full blur-2xl"></div>
                    
                    <div className="flex items-center justify-between gap-x-4">
                        <h3 className="text-lg font-semibold leading-8 text-lime-900">Lab Pro</h3>
                        <span className="rounded-full bg-lime-100 px-2.5 py-1 text-xs font-semibold leading-5 text-lime-700 uppercase tracking-wide">
                            Most Popular
                        </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600">Advanced science for serious dough engineers.</p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                        <span className="text-4xl font-bold tracking-tight text-slate-900">$4.99</span>
                        <span className="text-sm font-semibold leading-6 text-slate-600">/month</span>
                    </p>
                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                        {PLANS.lab_pro.features.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                                <CheckIcon className="h-6 w-5 flex-none text-lime-500" aria-hidden="true" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={handleSubscribe}
                        className="mt-8 block w-full rounded-xl bg-lime-600 px-3 py-3 text-center text-sm font-bold leading-6 text-white shadow-lg shadow-lime-200 hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 transition-all hover:scale-[1.02]"
                    >
                        Subscribe to Pro
                    </button>
                </div>
            </div>
        </div>
    );
};
