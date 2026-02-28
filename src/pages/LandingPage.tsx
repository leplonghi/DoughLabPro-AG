import React, { useId } from 'react';
import { useTranslation } from '@/i18n';
import { Logo } from '@/components/ui/Logo';
import {
    CalculatorIcon,
    CheckCircleIcon,
    ArrowRightIcon,
    ClockIcon,
    BellIcon,
    HistoryIcon,
    InsightsIcon,
    BatchesIcon,
    InfoIcon,
    ChevronDownIcon,
    SparklesIcon
} from '@/components/ui/Icons';
import { Page } from '@/types';

interface LandingPageProps {
    onNavigate: (page: Page) => void;
    onOpenAuth: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, onOpenAuth }) => {
    const { t } = useTranslation(['common', 'ui', 'marketing']);
    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-lime-200 selection:text-lime-900">
            {/* --- Navigation --- */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Logo className="h-8 w-auto" />
                    <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
                        <button onClick={() => onNavigate('calculator')} className="hover:text-dlp-brand transition-colors">App</button>
                        <button onClick={() => {
                            const pricing = document.getElementById('pricing');
                            pricing?.scrollIntoView({ behavior: 'smooth' });
                        }} className="hover:text-dlp-brand transition-colors">{t('common:pricing')}</button>
                        <button onClick={() => onNavigate('learn')} className="hover:text-dlp-brand transition-colors">Learn</button>
                    </div>
                    <button
                        onClick={onOpenAuth}
                        className="dlp-button-primary !py-2.5 !px-6 text-sm"
                    >{t('common:start_free')}</button>
                </div>
            </nav>

            {/* 1️⃣ HERO SECTION (ABOVE THE FOLD) */}
            <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                {/* Visual accents */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[120px] -mr-48 -mt-24 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -ml-24 -mb-24 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 mb-6 leading-[1.05] animate-slide-up">
                        Bake with confidence.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-emerald-600">{t('common:every_time')}</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-500 mb-10 leading-relaxed animate-slide-up stagger-1">
                        Understand your dough.<br />{t('common:stop_guessing_start_baking_better')}</p>

                    <div className="flex flex-col items-center gap-4 animate-slide-up stagger-2">
                        <button
                            onClick={onOpenAuth}
                            className="dlp-button-primary w-full sm:w-auto text-xl !px-12 !py-4 flex items-center justify-center gap-3 transition-all hover:scale-105 icon-hover-push"
                        >{t('common:start_free')}<ArrowRightIcon className="w-6 h-6" />
                        </button>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t('common:no_ads_cancel_anytime')}</p>
                    </div>

                    {/* Dashboard Preview mockup */}
                    <div className="mt-20 glass-panel rounded-3xl p-2 shadow-2xl max-w-5xl mx-auto animate-fade-in stagger-3">
                        <div className="aspect-[16/9] bg-slate-100 rounded-2xl flex items-center justify-center overflow-hidden relative">
                            <img
                                src="/images/marketing/app-hero.png"
                                alt={t('common:doughlabpro_dough_fermentation_dashboard')}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://placehold.co/1200x800/f8fafc/51a145?text=Dough+Fermentation+Schedule+Preview';
                                }}
                            />
                            {/* Floating UI micro-elements */}
                            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur shadow-xl rounded-2xl p-4 border border-slate-100 hidden md:flex items-center gap-3 animate-pulse-subtle">
                                <div className="p-2 bg-emerald-100 rounded-lg"><ClockIcon className="w-5 h-5 text-emerald-600" /></div>
                                <div className="text-left">
                                    <p className="text-[10px] uppercase font-bold text-slate-400">{t('common:current_stage')}</p>
                                    <p className="text-sm font-bold">{t('notifications:bulk_fermentation_277')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 2️⃣ PROBLEM SECTION */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">{t('common:great_dough_fails_when_timing_is_wrong')}</h2>
                    <div className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-6">
                        <p>Most home bakers don’t fail because of ingredients.</p>
                        <p>{t('common:they_fail_because')}<strong>fermentation, hydration and time</strong> are misunderstood.</p>
                        <p className="text-emerald-600 font-bold">DoughLabPro helps you see what’s happening inside your dough — step by step.</p>
                    </div>
                </div>
            </section>

            {/* 3️⃣ HOW IT WORKS (3 STEPS) */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <StepCard
                            number="1"
                            title={t('common:set_your_bake_time')}
                            desc="Tell us when you want to bake."
                            icon={<ClockIcon className="w-8 h-8 text-lime-500" />}
                        />
                        <StepCard
                            number="2"
                            title={t('common:follow_the_timeline')}
                            desc="We guide you through each dough stage."
                            icon={<BatchesIcon className="w-8 h-8 text-blue-500" />}
                        />
                        <StepCard
                            number="3"
                            title={t('common:bake_with_confidence')}
                            desc="Know when to act. Know why it works."
                            icon={<SparklesIcon className="w-8 h-8 text-amber-500" />}
                        />
                    </div>
                </div>
            </section>

            {/* 4️⃣ KEY BENEFITS (NOT FEATURES) */}
            <section className="py-24 bg-white text-slate-800 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-[150px]"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-12">{t('common:total_control_over_your_bake')}</h2>
                            <ul className="space-y-8">
                                <BenefitItem text="Know exactly what stage your dough is in" icon={<InfoIcon className="text-emerald-600" />} />
                                <BenefitItem text="Get notified at the right moment" icon={<BellIcon className="text-emerald-600" />} />
                                <BenefitItem text="Avoid over- and under-fermentation" icon={<InsightsIcon className="text-emerald-600" />} />
                                <BenefitItem text="Waste less flour" icon={<CheckCircleIcon className="text-emerald-600" />} />
                                <BenefitItem text="Bake more consistently" icon={<HistoryIcon className="text-emerald-600" />} />
                            </ul>
                        </div>
                        <div className="lg:pl-12">
                            <div className="glass-panel border-white/10 !bg-white/5 rounded-[40px] p-8 aspect-square flex items-center justify-center">
                                {/* Visual representing "Baking smarter" */}
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-lime-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-lime-400/20">
                                        <SparklesIcon className="w-12 h-12 text-slate-900" />
                                    </div>
                                    <p className="text-2xl font-bold tracking-tight">{t('common:stop_guessing')}<br />{t('common:start_knowing')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4.5 MEET DOUGHY AI */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full animate-pulse-subtle"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative group">
                            <div className="absolute inset-0 bg-lime-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
                                <img src="/doughy-avatar.png" alt={t('common:doughy_ai')} className="w-full h-full object-cover scale-110" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-lime-400 text-slate-900 px-4 py-1.5 rounded-full text-xs font-black tracking-widest shadow-xl">
                                ONLINE
                            </div>
                        </div>
                        <div className="text-center md:text-left flex-grow max-w-2xl">
                            <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tight">{t('ui:mylab.meet_2')}<span className="text-lime-400">{t('ui:assistant_page.title_short')}</span>.</h2>
                            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-8">{t('common:your_personal_ai_fermentation_expert_doughy_lives_inside_the')}</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-slate-400 italic">"How is my crumb structure looking?"</span>
                                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-slate-400 italic">"Is 75% hydration too much for this flour?"</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5️⃣ SOCIAL PROOF (LIGHT, TRUST-BASED) */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-black mb-6 text-slate-800">{t('common:built_for_people_who_care_about_dough')}</h2>
                    <p className="text-lg text-slate-500 leading-relaxed mb-4">{t('common:doughlabpro_was_created_by_bakers_who_were_tired_of_spreadsh')}</p>
                    <div className="inline-block px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-slate-400 text-sm font-bold">{t('common:no_hype_just_clarity')}</div>
                </div>
            </section>

            {/* 6️⃣ PRICING SECTION (SIMPLE) */}
            <section id="pricing" className="py-24 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">{t('common:simple_pricing_no_surprises')}</h2>
                    </div>
                    <div className="max-w-xl mx-auto">
                        <div className="glass-panel bg-white border-2 border-slate-100 rounded-3xl p-8 md:p-12 relative shadow-xl hover:border-emerald-200 transition-colors">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-slate-800 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">{t('common:recommended')}</div>
                            <div className="flex justify-between items-start mb-10">
                                <div>
                                    <h3 className="text-3xl font-black text-slate-900 mb-1">{t('calculator:calculator.pro')}</h3>
                                    <p className="text-slate-500 font-medium">{t('common:bake_with_unlimited_power')}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl font-black text-slate-900">US$ 5.99</div>
                                    <div className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">per month</div>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-10">
                                <PlanFeature text="Unlimited baking history" />
                                <PlanFeature text="Smart scheduling for future bakes" />
                                <PlanFeature text="Dough behavior insights" />
                                <PlanFeature text="Compare results and improve every batch" />
                            </ul>
                            <button
                                onClick={onOpenAuth}
                                className="dlp-button-primary w-full py-4 text-lg mb-4 shadow-xl shadow-emerald-500/20"
                            >{t('common:start_free')}</button>
                            <p className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest">{t('common:upgrade_only_if_it_makes_sense_for_you')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7️⃣ FAQ (MANDATORY) */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">{t('common:frequently_asked_questions')}</h2>
                    <div className="space-y-8">
                        <FAQItem
                            q="Can I use DoughLabPro for free?"
                            a="Yes. The free version lets you complete full bakes and learn how your dough behaves."
                        />
                        <FAQItem
                            q="What do I get with Pro?"
                            a="Pro unlocks unlimited history, smart insights and better planning for future bakes."
                        />
                        <FAQItem
                            q="Can I cancel anytime?"
                            a="Yes. No contracts. No tricks."
                        />
                        <FAQItem
                            q="Is this for beginners or advanced bakers?"
                            a="Both. Beginners gain clarity. Advanced bakers gain consistency."
                        />
                    </div>
                </div>
            </section>

            {/* 8️⃣ FINAL CTA */}
            <section className="py-24 bg-emerald-600 text-white overflow-hidden relative">
                {/* Decorative circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight">{t('common:stop_guessing_your_dough')}</h2>
                    <button
                        onClick={onOpenAuth}
                        className="bg-white text-emerald-700 px-12 py-5 rounded-2xl font-black text-xl hover:bg-lime-50 transition-all shadow-2xl active:scale-95 icon-hover-push"
                    >
                        Start baking smarter — free
                    </button>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="bg-white border-t border-slate-100 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <Logo className="h-8 w-auto grayscale contrast-125" />
                            <p className="text-sm text-slate-400 max-w-xs text-center md:text-left">{t('common:the_gold_standard_for_home_bakers_pizza_makers_and_dough_ent')}</p>
                        </div>
                        <div className="flex gap-12 text-sm font-bold text-slate-400 mb-8 md:mb-0">
                            <button onClick={() => onNavigate('styles')} className="hover:text-slate-900 transition-colors">Pizza Styles</button>
                            <button onClick={() => onNavigate('learn')} className="hover:text-slate-900 transition-colors">Dough Science</button>
                            <button onClick={() => onNavigate('calculator')} className="hover:text-slate-900 transition-colors">Calculator</button>
                        </div>
                        <div className="flex items-center gap-6">
                            <button onClick={() => onNavigate('legal/terms')} className="text-xs font-bold text-slate-300 hover:text-slate-500 uppercase tracking-widest transition-colors">Terms</button>
                            <button onClick={() => onNavigate('legal/privacy')} className="text-xs font-bold text-slate-300 hover:text-slate-500 uppercase tracking-widest transition-colors">Privacy</button>
                        </div>
                    </div>
                    <div className="mt-16 pt-8 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-slate-400 font-medium">
                            © {new Date().getFullYear()} DoughLab Pro. Proudly built for the baking community.
                        </p>
                        <div className="flex items-center gap-1 text-[10px] uppercase font-black tracking-widest text-slate-300">
                            SEO focus on: dough fermentation • pizza dough timing • dough hydration
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

/* --- Component Helpers --- */

const StepCard: React.FC<{ number: string; title: string, desc: string, icon: React.ReactNode }> = ({ number, title, desc, icon }) => (
    <div className="flex flex-col items-center text-center group">
        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-premium group-hover:scale-110 transition-transform duration-500 border border-slate-50">
            {icon}
        </div>
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-slate-800 text-xs font-black mb-4">
            {number}
        </div>
        <h3 className="text-2xl font-black mb-3 text-slate-800">{title}</h3>
        <p className="text-slate-500 leading-relaxed max-w-[240px]">{desc}</p>
    </div>
);

const BenefitItem: React.FC<{ text: string, icon: React.ReactNode }> = ({ text, icon }) => (
    <li className="flex items-start gap-4">
        <div className="mt-1 flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-emerald-100 group">
            {icon}
        </div>
        <span className="text-xl font-medium text-slate-700">{text}</span>
    </li>
);

const PlanFeature: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-center gap-3">
        <CheckCircleIcon className="w-6 h-6 text-emerald-500" />
        <span className="text-slate-700 font-semibold">{text}</span>
    </li>
);

const FAQItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
    const [open, setOpen] = React.useState(false);
    const id = useId();
    const headersId = `faq-h-${id}`;
    const panelId = `faq-p-${id}`;

    return (
        <div className="border-b border-slate-100 pb-8 last:border-0 border-solid">
            <h3 className="text-xl md:text-2xl font-black text-slate-800 m-0 p-0" id={headersId}>
                <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex items-center justify-between text-left group focus-ring rounded-lg py-2 -ml-2 bg-transparent border-none cursor-pointer"
                    aria-expanded={open}
                    aria-controls={panelId}
                >
                    <span className="pr-8 group-hover:text-emerald-600 transition-colors">
                        {q}
                    </span>
                    <ChevronDownIcon className={`w-6 h-6 text-slate-300 transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-180 text-emerald-500' : ''}`} />
                </button>
            </h3>
            <div
                id={panelId}
                role="region"
                aria-labelledby={headersId}
                hidden={!open}
                className={`mt-4 overflow-hidden transition-all duration-300 ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-lg text-slate-500 leading-relaxed pr-12 pl-2 m-0">
                    {a}
                </p>
            </div>
        </div>
    );
};

export default LandingPage;