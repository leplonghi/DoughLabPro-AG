import { MyLabLimitModal } from '@/components/mylab/MyLabLimitModal';
import React, { useState } from 'react';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import { AdCard } from "@/marketing/ads/AdCard";
import MyLabLayout from '@/pages/mylab/MyLabLayout';
import LearnAffiliateBlock from '@/components/learn/LearnAffiliateBlock';
import { useUser } from '@/contexts/UserProvider';
import { Page } from '@/types';
import {
    PlusCircleIcon,
    FireIcon,
    BeakerIcon,
    ScaleIcon,
    ClipboardDocumentCheckIcon,
    ArrowsRightLeftIcon,
    DocumentTextIcon,
    ChartBarIcon,
    SparklesIcon,
    LockClosedIcon,
    ClockIcon,
    BoltIcon,
    ArchiveBoxIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useTranslation } from '@/i18n';

interface MyLabPageProps {
    onNavigate: (page: Page) => void;
    onCreateDraftBatch: () => void;
}

const MyLabPage: React.FC<MyLabPageProps> = ({ onNavigate, onCreateDraftBatch }) => {
    const { t } = useTranslation(['common', 'dashboard']);
    const { hasProAccess, openPaywall, batches, customPresets } = useUser();

    // Stats Calculation
    const totalBakes = batches.length;
    const successRate = batches.length > 0
        ? Math.round((batches.filter(b => b.rating && b.rating >= 4).length / batches.length) * 100)
        : 0;

    // Get recent bakes (last 3)
    const recentBakes = [...batches]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 3);

    // Limit Logic
    const isLimitReached = !hasProAccess && totalBakes >= 1;
    const [showLimitModal, setShowLimitModal] = useState(false);

    const handleNewBake = () => {
        if (isLimitReached) {
            setShowLimitModal(true);
            return;
        }
        onNavigate('calculator');
    };

    return (
        <MyLabLayout activePage="mylab" onNavigate={onNavigate}>
            <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 pt-6 space-y-8 animate-fade-in">

                {/* Hero Section */}
                <div className="bg-gradient-to-br from-[#3A6B3A] to-[#558B55] rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-dlp-brand/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-900/50 border border-lime-700/50 text-lime-300 text-xs font-bold uppercase tracking-wider mb-4">
                            <BeakerIcon className="w-4 h-4" />{t('mylab.production_hub')}</div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight">{t('mylab.my_lab')}</h1>
                        <p className="text-base md:text-lg text-lime-100/90 mb-0 leading-relaxed">
                            {t('mylab.hero_desc')}
                        </p>
                    </div>
                </div>

                {/* Quick Stats & Actions Toolbar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    {/* Level / Gamification Section */}
                    <div className="flex items-center gap-3 w-full md:w-auto min-w-[200px]">
                        <div className="h-12 w-12 bg-gradient-to-br from-lime-400 to-dlp-brand-hover rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-lg shadow-lg shadow-dlp-brand/30 border-2 border-white">
                            {(() => {
                                if (totalBakes >= 50) return '4';
                                if (totalBakes >= 20) return '3';
                                if (totalBakes >= 5) return '2';
                                return '1';
                            })()}
                        </div>
                        <div className="flex flex-col w-full">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                {(() => {
                                    if (totalBakes >= 50) return 'Master Pizzaiolo';
                                    if (totalBakes >= 20) return 'Pizzaiolo';
                                    if (totalBakes >= 5) return 'Enthusiast';
                                    return 'Home Baker'; // Level 1
                                })()}
                            </span>
                            <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-0.5">
                                <span>Level {(() => {
                                    if (totalBakes >= 50) return '4';
                                    if (totalBakes >= 20) return '3';
                                    if (totalBakes >= 5) return '2';
                                    return '1';
                                })()}</span>
                                <span className="text-[10px] text-slate-400">{totalBakes} Bakes</span>
                            </div>
                            {/* Progress Bar to Next Level */}
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                {(() => {
                                    let progress = 0;
                                    let nextLevel = 5;
                                    if (totalBakes < 5) {
                                        progress = (totalBakes / 5) * 100;
                                    } else if (totalBakes < 20) {
                                        progress = ((totalBakes - 5) / (20 - 5)) * 100;
                                        nextLevel = 20;
                                    } else if (totalBakes < 50) {
                                        progress = ((totalBakes - 20) / (50 - 20)) * 100;
                                        nextLevel = 50;
                                    } else {
                                        progress = 100;
                                    }
                                    return (
                                        <div className="h-full bg-dlp-brand rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block h-10 w-px bg-slate-100"></div>

                    <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
                        {/* Removed Total Batches as it's now in the Level Badge */}
                        <div className="flex flex-col items-start group cursor-pointer">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-dlp-brand-hover transition-colors">{t('mylab.success_rate')}</span>
                            <span className={`text-lg font-black ${successRate >= 80 ? 'text-dlp-brand' : 'text-amber-500'}`}>{successRate}%</span>
                        </div>
                        <div className="flex flex-col items-start px-4 border-l border-slate-100">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('mylab.lab_status')}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-black text-slate-800">{t('mylab.operational')}</span>
                                <div className="h-2 w-2 rounded-full bg-dlp-brand animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-auto">
                        <button
                            onClick={handleNewBake}
                            className={`w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all active:scale-95 ${isLimitReached ? 'bg-slate-400 cursor-not-allowed hover:bg-slate-500' : 'bg-dlp-brand shadow-dlp-brand/20 hover:bg-dlp-brand hover:text-white-hover hover:scale-105'}`}
                        >
                            {isLimitReached ? <LockClosedIcon className="h-5 w-5" /> : <PlusCircleIcon className="h-5 w-5" />}
                            {isLimitReached ? t('mylab.limit_reached') : t('mylab.new_bake')}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-slide-up-fade">

                    {/* Left Column: Workbench (Tools) - Span 8 */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Section: Daily Operations */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                                <BoltIcon className="h-5 w-5 text-dlp-brand-hover" />
                                <h2 className="text-base font-bold text-slate-800">{t('mylab.daily_operations')}</h2>
                            </div>
                            <p className="text-sm text-slate-500 -mt-2">
                                {t('mylab.desc_daily_ops')}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <LabFeatureCard
                                    icon={<ClockIcon className="h-6 w-6 text-dlp-brand-hover" />}
                                    title={t('mylab.smart_timeline')}
                                    description={t('mylab.desc_smart_timeline')}
                                    onClick={() => onNavigate('mylab/timeline')}
                                    bgClass="bg-lime-50"
                                    isLocked={!hasProAccess}
                                    onUnlock={() => openPaywall('mylab_timeline')}
                                />
                                <LabFeatureCard
                                    icon={<BeakerIcon className="h-6 w-6 text-indigo-500" />}
                                    title={t('mylab.my_bakes')}
                                    description={t('mylab.desc_my_bakes')}
                                    onClick={() => onNavigate('mylab/bakes')}
                                    bgClass="bg-indigo-50"
                                />
                                <LabFeatureCard
                                    icon={<FireIcon className="h-6 w-6 text-orange-500" />}
                                    title={t('mylab.levain_tracker')}
                                    description={t('mylab.desc_levain_tracker')}
                                    onClick={() => onNavigate('mylab/levain')}
                                    bgClass="bg-orange-50"
                                />
                                <LabFeatureCard
                                    icon={<ScaleIcon className="h-6 w-6 text-blue-500" />}
                                    title={t('mylab.inventory')}
                                    description={t('mylab.desc_inventory')}
                                    onClick={() => onNavigate('mylab/flours')}
                                    bgClass="bg-blue-50"
                                    isLocked={!hasProAccess}
                                    onUnlock={() => openPaywall('mylab_flours')}
                                />
                            </div>
                        </div>

                        {/* Section: Analysis & Science */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                                <ChartBarIcon className="h-5 w-5 text-purple-600" />
                                <h2 className="text-base font-bold text-slate-800">{t('mylab.analysis_lab')}</h2>
                            </div>
                            <p className="text-sm text-slate-500 -mt-2">
                                {t('mylab.desc_analysis_lab')}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <LabFeatureCard
                                    icon={<ClipboardDocumentCheckIcon className="h-6 w-6 text-dlp-brand" />}
                                    title={t('mylab.consistency_logic')}
                                    description={t('mylab.desc_consistency')}
                                    onClick={() => onNavigate('mylab/consistency')}
                                    bgClass="bg-emerald-50"
                                    isLocked={!hasProAccess}
                                    onUnlock={() => openPaywall('mylab_consistency')}
                                />
                                <LabFeatureCard
                                    icon={<ArrowsRightLeftIcon className="h-6 w-6 text-purple-500" />}
                                    title={t('mylab.ab_comparisons')}
                                    description={t('mylab.desc_compare')}
                                    onClick={() => onNavigate('mylab/comparisons')}
                                    bgClass="bg-purple-50"
                                />
                                <LabFeatureCard
                                    icon={<DocumentTextIcon className="h-6 w-6 text-teal-500" />}
                                    title={t('mylab.sensory_diary')}
                                    description={t('mylab.your_collection_of_baking_notes_and_tasting_observ')}
                                    onClick={() => onNavigate('mylab/diario-sensorial')}
                                    bgClass="bg-teal-50"
                                    isLocked={!hasProAccess}
                                    onUnlock={() => openPaywall('mylab_sensory_diary')}
                                />
                                <LabFeatureCard
                                    icon={<ChartBarIcon className="h-6 w-6 text-pink-500" />}
                                    title={t('mylab.deep_insights')}
                                    description={t('mylab.desc_insights')}
                                    onClick={() => onNavigate('mylab/insights')}
                                    bgClass="bg-pink-50"
                                />
                                <LabFeatureCard
                                    icon={<DocumentTextIcon className="h-6 w-6 text-cyan-500" />}
                                    title={t('mylab.learning_goals')}
                                    description={t('mylab.desc_goals')}
                                    onClick={() => onNavigate('mylab/goals')}
                                    bgClass="bg-cyan-50"
                                />
                            </div>
                        </div>

                        {/* Recent Activity Feed */}
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
                                    <ArchiveBoxIcon className="h-5 w-5 text-slate-500" />{t('mylab.recent_activity')}</h2>
                                <button
                                    onClick={() => onNavigate('mylab/bakes')}
                                    className="text-sm text-dlp-brand-hover font-bold hover:underline"
                                >{t('mylab.view_log')}</button>
                            </div>

                            {recentBakes.length > 0 ? (
                                <div className="grid grid-cols-1 gap-3">
                                    {recentBakes.map((batch) => (
                                        <div
                                            key={batch.id}
                                            onClick={() => onNavigate('mylab/bakes' as Page)}
                                            className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-white hover:border-lime-200 hover:shadow-md transition-all cursor-pointer"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-bold text-sm ${batch.rating && batch.rating >= 4 ? 'bg-emerald-50 text-dlp-brand-hover' : 'bg-slate-100 text-slate-400'}`}>
                                                    {batch.rating || '-'}
                                                </div>
                                                <div>
                                                    <h4 className="text-base font-bold text-slate-800 group-hover:text-lime-700 transition-colors">
                                                        {batch.name}
                                                    </h4>
                                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                                        <span>{new Date(batch.createdAt).toLocaleDateString()}</span>
                                                        <span>•</span>
                                                        <span>{batch.styleId || t('mylab.custom_style')}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-400 group-hover:text-dlp-brand transition-colors">
                                                <span className="text-xs font-semibold hidden sm:block">{t('mylab.view_details')}</span>
                                                <ChevronRightIcon className="h-5 w-5" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center p-8 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                                    <BeakerIcon className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                                    <p className="text-sm font-medium text-slate-500">{t('mylab.no_recent_bakes_recorded')}</p>
                                    <button
                                        onClick={() => onNavigate('calculator')}
                                        className="mt-2 text-dlp-brand-hover font-bold text-sm hover:underline"
                                    >{t('mylab.start_your_first_bake')}</button>
                                </div>
                            )}
                        </div>

                        {/* Custom Presets Feed */}
                        <div className="space-y-4 pt-4 border-t border-slate-100">
                            <div className="flex items-center justify-between">
                                <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
                                    <ArchiveBoxIcon className="h-5 w-5 text-slate-500" />{t('mylab.custom_presets', { defaultValue: 'Saved Presets' })}
                                </h2>
                            </div>

                            {customPresets && customPresets.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {customPresets.slice(0, 4).map((preset) => (
                                        <div
                                            key={preset.id}
                                            onClick={() => {
                                                // Ideally navigate to calculator with this preset loaded
                                                // Since we don't have a direct link handler yet, we go to calculator
                                                onNavigate('calculator');
                                                // In a real app we'd pass ?presetId=custom_id or similar
                                            }}
                                            className="group flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white hover:border-lime-200 hover:shadow-md transition-all cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-lg bg-lime-50 text-dlp-brand-hover flex items-center justify-center font-bold text-xs">
                                                    CP
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-lime-700 transition-colors">
                                                        {preset.name}
                                                    </h4>
                                                    <p className="text-[10px] text-slate-500">
                                                        {new Date(preset.createdAt).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                            <ChevronRightIcon className="h-4 w-4 text-slate-300 group-hover:text-dlp-brand" />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center p-4 bg-slate-50 rounded-xl text-xs text-slate-500">
                                    No custom presets yet. Save one in the Calculator!
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Sidebar - Span 4 */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Daily Insight Card */}
                        <div className="relative overflow-hidden rounded-2xl bg-[#1e293b] p-6 text-white shadow-xl ring-1 ring-white/10">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-gradient-to-br from-lime-400/20 to-emerald-400/20 blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-1.5 bg-lime-400/10 rounded-lg">
                                        <SparklesIcon className="h-4 w-4 text-lime-400" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-lime-400">{t('mylab.daily_tip')}</span>
                                </div>
                                <h3 className="font-bold text-xl mb-3">{t('mylab.autolyse_science')}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                    {t('mylab.daily_tip_autolyse')}
                                </p>
                                <button
                                    onClick={() => onNavigate('learn/fundamentals')}
                                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all"
                                >{t('mylab.read_full_article')}<ChevronRightIcon className="h-3 w-3" />
                                </button>
                            </div>
                        </div>

                        {/* AI Feature Card */}
                        {hasProAccess ? (
                            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group cursor-pointer hover:shadow-indigo-500/25 transition-all"
                                onClick={() => onNavigate('tools/doughbot')}>
                                <div className="absolute top-0 right-0 p-4">
                                    <SparklesIcon className="h-5 w-5 text-indigo-200 animate-pulse" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <SparklesIcon className="h-5 w-5 text-indigo-200" />
                                        <span className="text-xs font-bold uppercase tracking-wide text-indigo-200">{t('mylab.ai_beta')}</span>
                                    </div>
                                    <h3 className="font-bold text-white text-lg mb-2">{t('mylab.fermentation_engine')}</h3>
                                    <p className="text-sm text-indigo-100 leading-relaxed mb-4">
                                        {t('mylab.ai_ferment_desc')}
                                    </p>
                                    <div className="inline-flex items-center gap-1 text-xs font-bold text-white bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors">
                                        {t('mylab.open_ai_assistant')} →
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <LockedTeaser featureKey="mylab.quickAction">
                                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group cursor-pointer hover:shadow-indigo-500/25 transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <LockClosedIcon className="h-5 w-5 text-white/70" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <SparklesIcon className="h-5 w-5 text-indigo-200" />
                                            <span className="text-xs font-bold uppercase tracking-wide text-indigo-200">{t('mylab.ai_beta')}</span>
                                        </div>
                                        <h3 className="font-bold text-white text-lg mb-2">{t('mylab.fermentation_engine')}</h3>
                                        <p className="text-sm text-indigo-100 leading-relaxed mb-4">
                                            {t('mylab.ai_ferment_desc')}
                                        </p>
                                        <div className="inline-flex items-center gap-1 text-xs font-bold text-white bg-white/20 px-3 py-1.5 rounded-lg">{t('mylab.unlock_pro_features')}</div>
                                    </div>
                                </div>
                            </LockedTeaser>
                        )}

                        {/* Affiliate / Ad Block */}
                        <div className="space-y-4 pt-6 mt-2 border-t border-slate-200">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">{t('mylab.recommended_gear_2')}</h3>
                            <LearnAffiliateBlock placementKeys={['mylab_dashboard']} />
                            <AdCard context="mylab_sidebar" />
                        </div>
                    </div>
                </div>
            </div>
            <MyLabLimitModal
                isOpen={showLimitModal}
                onClose={() => setShowLimitModal(false)}
            />
        </MyLabLayout>
    );
};

// -- Redesigned Wide Feature Card --
interface LabFeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
    bgClass: string;
    isLocked?: boolean;
    onUnlock?: () => void;
}

const LabFeatureCard: React.FC<LabFeatureCardProps> = ({ icon, title, description, onClick, bgClass, isLocked, onUnlock }) => {

    const handleClick = () => {
        if (isLocked && onUnlock) {
            onUnlock();
        } else {
            onClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`
                relative flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-300 w-full group
                ${isLocked
                    ? 'bg-slate-50 border-slate-100 opacity-90 hover:opacity-100'
                    : 'bg-white border-slate-100 shadow-sm hover:shadow-lg hover:border-lime-200 hover:-translate-y-1'
                }
            `}
        >
            {/* Icon Container */}
            <div className={`
                h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm
                ${isLocked ? 'bg-slate-200 grayscale' : bgClass}
            `}>
                {icon}
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <h3 className={`text-sm font-bold truncate ${isLocked ? 'text-slate-500' : 'text-slate-800'}`}>
                        {title}
                    </h3>
                    {isLocked && <LockClosedIcon className="h-3 w-3 text-slate-400" />}
                </div>
                <p className="text-xs text-slate-500 leading-snug line-clamp-2 mt-0.5">
                    {description}
                </p>
            </div>

            {/* Action Arrow (visible on hover or generic) */}
            <div className={`
                h-8 w-8 rounded-full flex items-center justify-center transition-all bg-slate-50
                ${isLocked ? 'opacity-0' : 'text-slate-300 group-hover:text-dlp-brand-hover group-hover:bg-lime-50'}
            `}>
                <ArrowRightIcon className="h-4 w-4" />
            </div>
        </button>
    );
};

export default MyLabPage;



