import React from 'react';
import { useUser } from '@/contexts/UserProvider';
import { BeakerIcon, ChartBarIcon, ClockIcon, LockClosedIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { FireIcon } from '@heroicons/react/24/solid';
import { useTranslation } from '@/i18n';

export const LevainMarketingPage: React.FC = () => {
  const { t } = useTranslation();
    const { openPaywall, startTrial } = useUser();

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8 animate-fade-in pb-20">
            {/* Header Hero */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-12 text-center shadow-2xl ring-1 ring-white/10">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30 ring-4 ring-slate-800">
                        <span className="text-4xl">🦠</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{t('mylab.master_your_sourdough')}</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Your starter is a living pet. Track its health, feeding schedule, and activity peaks with our professional Levain Manager.
                    </p>
                </div>
            </div>

            {/* Feature Demo Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                    icon={<ClockIcon className="w-8 h-8 text-lime-500" />}
                    title={t('mylab.smart_schedule')}
                    description="Never miss a feeding. Get timely notifications based on your starter's metabolic rate."
                />
                <FeatureCard
                    icon={<ChartBarIcon className="w-8 h-8 text-indigo-500" />}
                    title={t('mylab.health_tracking')}
                    description="Log rise height, pH, and aroma to visualize your culture's strength over time."
                />
                <FeatureCard
                    icon={<FireIcon className="w-8 h-8 text-orange-500" />}
                    title={t('mylab.multiple_starters')}
                    description="Manage your Rye, Wheat, and Lievito Madre simultaneously without confusion."
                />
            </div>

            {/* Visual Teaser (Blurred Content) */}
            <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xl">
                <div className="absolute inset-0 z-20 bg-black/40 backdrop-blur-[2px] flex items-center justify-center p-6">
                    <div className="text-center p-8 bg-white/95 rounded-3xl shadow-2xl border border-white/50 max-w-sm mx-auto backdrop-blur-md transform transition-transform hover:scale-105 duration-300">
                        <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <LockClosedIcon className="w-8 h-8 text-lime-600" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{t('mylab.pro_feature_locked')}</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">{t('mylab.unlock_the_full')}<strong>{t('mylab.levain_manager')}</strong> suite. Track pH, rise logs, feeding schedules, and unlimited starters.
                        </p>
                        <button
                            onClick={() => startTrial('levain')}
                            className="w-full py-4 px-6 bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-white font-bold rounded-xl shadow-lg shadow-lime-500/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                        >
                            <SparklesIcon className="w-5 h-5" />
                            Start 7-Day Free Trial
                        </button>
                        <p className="text-xs text-slate-400 mt-4">
                            No credit card required. Experience Pro.
                        </p>
                    </div>
                </div>

                {/* Real Pro Header Image (Blurred) */}
                <div className="relative">
                    <img
                        src="/images/marketing/levain-pro.png"
                        alt={t('mylab.professional_levain_dashboard')}
                        className="w-full h-auto object-cover opacity-90 filter blur-[1px]"
                    />
                    {/* Gradient Overlay for blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-20"></div>
                </div>
            </div>
        </div>
    );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
            {icon}
        </div>
        <h3 className="font-bold text-slate-800 text-lg mb-2">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
);
