import React from 'react';
import { SparklesIcon, CheckIcon, BookOpenIcon, BeakerIcon } from '@/components/ui/Icons';
import { useLocalizedPricing } from '@/hooks/useLocalizedPricing';
import { Page } from '@/types';
import { logEvent } from '@/services/analytics';

interface PublicLandingPageProps {
    onNavigate: (page: Page) => void;
    onOpenAuth: () => void;
}

const benefitItems = [
    'Formula calculator with pro-level controls',
    'Bake tracking, levain management, and dough history',
    'Learning library and community inspiration in one place',
];

export const PublicLandingPage: React.FC<PublicLandingPageProps> = ({ onNavigate, onOpenAuth }) => {
    const { symbol, currency, planPrices } = useLocalizedPricing();

    const rememberUpgradeOrigin = (origin: string) => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('doughlab-upgrade-origin', origin);
        }
    };

    return (
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <section className="relative overflow-hidden rounded-[2rem] border border-dlp-border bg-[radial-gradient(circle_at_top_left,_rgba(81,161,69,0.18),_transparent_35%),linear-gradient(135deg,_#ffffff_0%,_#f8fbf5_45%,_#eef6ea_100%)] px-6 py-12 shadow-dlp-lg sm:px-10 lg:px-12">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime-200/50 blur-3xl" />
                <div className="absolute -bottom-20 left-12 h-56 w-56 rounded-full bg-emerald-100/70 blur-3xl" />

                <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#2f5d28]">
                            <SparklesIcon className="h-4 w-4 text-dlp-accent" />
                            DoughLab Pro
                        </div>

                        <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                            Precision baking software that turns instinct into repeatable results.
                        </h1>

                        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                            Plan formulas, learn technique, track bakes, and upgrade only when you need the full lab.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <button
                                onClick={() => {
                                    logEvent('landing_primary_cta_clicked', { cta: 'start_free' });
                                    rememberUpgradeOrigin('landing');
                                    onOpenAuth();
                                }}
                                className="dlp-button-primary rounded-xl px-5 py-3 text-sm"
                            >
                                Start free
                            </button>
                            <button
                                onClick={() => {
                                    logEvent('landing_secondary_cta_clicked', { cta: 'view_plans' });
                                    rememberUpgradeOrigin('landing');
                                    onNavigate('plans');
                                }}
                                className="rounded-xl border border-dlp-border bg-white px-5 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50"
                            >
                                View plans
                            </button>
                            <button
                                onClick={() => {
                                    logEvent('landing_secondary_cta_clicked', { cta: 'help' });
                                    onNavigate('help');
                                }}
                                className="rounded-xl px-5 py-3 text-sm font-bold text-slate-500 transition-colors hover:text-slate-800"
                            >
                                See how it works
                            </button>
                        </div>

                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
                            {benefitItems.map((item) => (
                                <div key={item} className="rounded-2xl border border-white/70 bg-white/70 p-4 backdrop-blur-sm">
                                    <CheckIcon className="h-5 w-5 text-dlp-accent" />
                                    <p className="mt-3 text-sm font-medium leading-6 text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Best starting point</p>
                                <h2 className="mt-1 text-2xl font-black text-slate-900">Pro Monthly</h2>
                            </div>
                            <div className="rounded-full bg-lime-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#2f5d28]">
                                Cancel anytime
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="flex items-end gap-2">
                                <span className="text-5xl font-black tracking-tight text-slate-900">
                                    {symbol}{planPrices.standard.toFixed(2)}
                                </span>
                                <span className="pb-2 text-sm font-semibold text-slate-500">{currency} / month</span>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                Unlock unlimited saved bakes, advanced tools, exports, community actions, and the full lab workflow.
                            </p>
                        </div>

                        <div className="mt-6 space-y-3">
                            <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
                                <BeakerIcon className="h-5 w-5 text-dlp-accent" />
                                <span className="text-sm font-medium text-slate-700">Unlimited bake history and lab records</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
                                <BookOpenIcon className="h-5 w-5 text-dlp-accent" />
                                <span className="text-sm font-medium text-slate-700">Advanced learning, exports, and pro analysis</span>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                logEvent('landing_pricing_card_cta_clicked', { cta: 'compare_free_vs_pro' });
                                rememberUpgradeOrigin('landing-pricing-card');
                                onNavigate('plans');
                            }}
                            className="dlp-button-primary mt-6 w-full rounded-xl px-4 py-3 text-sm"
                        >
                            Compare free vs pro
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PublicLandingPage;
