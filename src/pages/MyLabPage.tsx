import { MyLabLimitModal } from '@/components/mylab/MyLabLimitModal';
import React, { useEffect, useMemo, useState } from 'react';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import { AdCard } from "@/marketing/ads/AdCard";
import MyLabLayout from '@/pages/mylab/MyLabLayout';
import LearnAffiliateBlock from '@/components/learn/LearnAffiliateBlock';
import AppShellHeader from '@/components/ui/AppShellHeader';
import AppSurface, { AppSurfaceTone } from '@/components/ui/AppSurface';
import InlineNotice from '@/components/ui/InlineNotice';
import MetricCard from '@/components/ui/MetricCard';
import StatusBadge from '@/components/ui/StatusBadge';
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
import { useToast } from '@/components/ToastProvider';
import { getPageMeta } from '@/app/appShell';

interface MyLabPageProps {
    onNavigate: (page: Page) => void;
    onCreateDraftBatch: () => void;
}

type MyLabRecommendation = {
    id: string;
    title: string;
    description: string;
    actionLabel: string;
    action: 'start-bake' | 'open-levain' | 'open-bakes' | 'open-insights' | 'open-calculator';
    icon: React.ReactNode;
    tone: AppSurfaceTone;
};

const HOUR_IN_MS = 1000 * 60 * 60;
const DAY_IN_MS = HOUR_IN_MS * 24;

const getElapsedHours = (dateValue: string) => {
    const parsed = new Date(dateValue).getTime();
    if (Number.isNaN(parsed)) return null;
    return Math.floor((Date.now() - parsed) / HOUR_IN_MS);
};

const MyLabPage: React.FC<MyLabPageProps> = ({ onNavigate, onCreateDraftBatch }) => {
    const { t } = useTranslation(['common', 'dashboard']);
    const { hasProAccess, openPaywall, batches, customPresets, levains } = useUser();
    const { addToast } = useToast();
    const labMeta = getPageMeta('mylab');

    // Stats Calculation
    const totalBakes = batches.length;
    const successRate = batches.length > 0
        ? Math.round((batches.filter(b => b.rating && b.rating >= 4).length / batches.length) * 100)
        : 0;

    // Get recent bakes (last 3)
    const recentBakes = [...batches]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 3);

    const recommendations = useMemo<MyLabRecommendation[]>(() => {
        const items: MyLabRecommendation[] = [];
        const latestBake = recentBakes[0];
        const latestBakeHoursAgo = latestBake ? getElapsedHours(latestBake.createdAt) : null;
        const lowRatedBake = recentBakes.find((batch) => typeof batch.rating === 'number' && batch.rating <= 3);
        const priorityLevain = [...levains]
            .filter((levain) => levain.status !== 'arquivado')
            .sort((a, b) => {
                const aHours = getElapsedHours(a.lastFeeding) ?? 0;
                const bHours = getElapsedHours(b.lastFeeding) ?? 0;
                return bHours - aHours;
            })[0];

        if (totalBakes === 0) {
            items.push({
                id: 'first-bake',
                title: 'Create your first lab entry',
                description: 'Start a draft bake so DoughLab can begin learning from your process and giving you better recommendations.',
                actionLabel: 'Start first bake',
                action: 'start-bake',
                icon: <PlusCircleIcon className="h-5 w-5" />,
                tone: 'brand'
            });
        }

        if (priorityLevain) {
            const hoursSinceFeeding = getElapsedHours(priorityLevain.lastFeeding);
            const idealInterval = priorityLevain.idealFeedingIntervalHours ?? 24;

            if (hoursSinceFeeding !== null && hoursSinceFeeding >= idealInterval) {
                items.push({
                    id: 'feed-levain',
                    title: `${priorityLevain.name} needs attention`,
                    description: `It has been ${hoursSinceFeeding}h since the last feeding. Logging a refresh now keeps your starter predictable.`,
                    actionLabel: 'Open levain tracker',
                    action: 'open-levain',
                    icon: <FireIcon className="h-5 w-5" />,
                    tone: 'warning'
                });
            }
        }

        if (latestBakeHoursAgo !== null && latestBakeHoursAgo >= 7 * 24) {
            items.push({
                id: 'resume-practice',
                title: 'Resume your bake rhythm',
                description: `Your last logged bake was ${Math.floor(latestBakeHoursAgo / 24)} days ago. A fresh run will keep your timeline and insights useful.`,
                actionLabel: 'Log a new bake',
                action: 'start-bake',
                icon: <ClockIcon className="h-5 w-5" />,
                tone: 'info'
            });
        }

        if (lowRatedBake) {
            items.push({
                id: 'review-low-rating',
                title: `Review "${lowRatedBake.name}"`,
                description: 'You have a recent bake below your target rating. Compare notes and tweak one variable before the next run.',
                actionLabel: 'Open bake log',
                action: 'open-bakes',
                icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
                tone: 'warning'
            });
        }

        if (totalBakes > 0 && customPresets.length === 0) {
            items.push({
                id: 'save-preset',
                title: 'Turn a good formula into a preset',
                description: 'Saving one reusable formula makes repeat production faster and helps standardize your next sessions.',
                actionLabel: 'Open calculator',
                action: 'open-calculator',
                icon: <DocumentTextIcon className="h-5 w-5" />,
                tone: 'info'
            });
        }

        if (totalBakes >= 3) {
            items.push({
                id: 'open-insights',
                title: 'Check your production pattern',
                description: 'You already have enough data to inspect trends, compare outcomes and spot what improves consistency.',
                actionLabel: 'Open insights',
                action: 'open-insights',
                icon: <ChartBarIcon className="h-5 w-5" />,
                tone: 'success'
            });
        }

        const deduped = items.filter((item, index, arr) => arr.findIndex((candidate) => candidate.id === item.id) === index);
        return deduped.slice(0, 3);
    }, [customPresets.length, levains, recentBakes, totalBakes]);

    const cadenceSummary = useMemo(() => {
        const recentBakeTimestamps = batches
            .map((batch) => new Date(batch.createdAt).getTime())
            .filter((value) => !Number.isNaN(value))
            .sort((a, b) => b - a);

        const lastBakeAt = recentBakeTimestamps[0] ?? null;
        const daysSinceLastBake = lastBakeAt ? Math.floor((Date.now() - lastBakeAt) / DAY_IN_MS) : null;
        const activeDaysLast30 = new Set(
            recentBakeTimestamps
                .filter((value) => Date.now() - value <= 30 * DAY_IN_MS)
                .map((value) => new Date(value).toISOString().slice(0, 10))
        ).size;

        const levainNeedingAttention = levains.find((levain) => {
            if (levain.status === 'arquivado') return false;
            const hoursSinceFeeding = getElapsedHours(levain.lastFeeding);
            return hoursSinceFeeding !== null && hoursSinceFeeding >= (levain.idealFeedingIntervalHours ?? 24);
        });

        return {
            daysSinceLastBake,
            activeDaysLast30,
            levainNeedingAttention,
        };
    }, [batches, levains]);

    useEffect(() => {
        const reminderKey = `doughlab-lab-reminder-${new Date().toISOString().slice(0, 10)}`;
        if (localStorage.getItem(reminderKey)) return;

        if (cadenceSummary.levainNeedingAttention) {
            addToast(`${cadenceSummary.levainNeedingAttention.name} is ready for a refresh.`, 'info');
            localStorage.setItem(reminderKey, 'levain');
            return;
        }

        if ((cadenceSummary.daysSinceLastBake ?? 0) >= 7) {
            addToast('Your lab has been quiet for a week. Log one bake to keep insights fresh.', 'info');
            localStorage.setItem(reminderKey, 'bake');
        }
    }, [addToast, cadenceSummary.daysSinceLastBake, cadenceSummary.levainNeedingAttention]);

    // Limit Logic
    const isLimitReached = !hasProAccess && totalBakes >= 1;
    const [showLimitModal, setShowLimitModal] = useState(false);

    const handleNewBake = () => {
        if (isLimitReached) {
            setShowLimitModal(true);
            return;
        }
        onCreateDraftBatch();
        onNavigate('calculator');
    };

    const handleRecommendationAction = (action: MyLabRecommendation['action']) => {
        switch (action) {
            case 'start-bake':
                handleNewBake();
                break;
            case 'open-levain':
                onNavigate('mylab/levain');
                break;
            case 'open-bakes':
                onNavigate('mylab/bakes');
                break;
            case 'open-insights':
                onNavigate('mylab/insights');
                break;
            case 'open-calculator':
                onNavigate('calculator');
                break;
        }
    };

    return (
        <MyLabLayout activePage="mylab" onNavigate={onNavigate}>
            <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 pt-6 space-y-8 animate-fade-in">

                <AppShellHeader
                    eyebrow={labMeta.eyebrow}
                    title={labMeta.title}
                    description={labMeta.description}
                >
                    <StatusBadge tone="neutral" className="border-white/70 bg-white/80 px-4 py-2 text-sm normal-case tracking-normal shadow-sm">
                        {cadenceSummary.activeDaysLast30} active days in the last 30
                    </StatusBadge>
                    <button
                        onClick={handleNewBake}
                        className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-lg transition-all active:scale-95 ${isLimitReached ? 'cursor-not-allowed bg-slate-400 hover:bg-slate-500' : 'dlp-button-primary border-none px-5 py-3 text-sm'}`}
                    >
                        {isLimitReached ? <LockClosedIcon className="h-5 w-5" /> : <PlusCircleIcon className="h-5 w-5" />}
                        {isLimitReached ? t('mylab.limit_reached') : t('mylab.new_bake')}
                    </button>
                </AppShellHeader>

                <AppSurface surface="elevated" tone="neutral" className="p-5 sm:p-6">
                    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)_auto] lg:items-center">
                        <div className="flex items-center gap-3 min-w-[200px]">
                        <div className="h-12 w-12 bg-gradient-to-br from-lime-400 to-dlp-brand-hover rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-lg shadow-lg shadow-dlp-brand/30 border-2 border-white">
                            {(() => {
                                if (totalBakes >= 50) return '4';
                                if (totalBakes >= 20) return '3';
                                if (totalBakes >= 5) return '2';
                                return '1';
                            })()}
                        </div>
                        <div className="flex flex-col w-full">
                            <span className="text-[10px] font-bold text-dlp-text-muted uppercase tracking-wider">
                                {(() => {
                                    if (totalBakes >= 50) return t('ui.master_pizzaiolo_375');
                                    if (totalBakes >= 20) return t('ui.pizzaiolo_376');
                                    if (totalBakes >= 5) return t('ui.enthusiast_377');
                                    return 'Home Baker'; // Level 1
                                })()}
                            </span>
                            <div className="mb-0.5 flex items-center justify-between text-xs font-bold text-dlp-text-primary">
                                <span>Level {(() => {
                                    if (totalBakes >= 50) return '4';
                                    if (totalBakes >= 20) return '3';
                                    if (totalBakes >= 5) return '2';
                                    return '1';
                                })()}</span>
                                <span className="text-[10px] text-dlp-text-muted">{totalBakes} Bakes</span>
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
                        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                            <MetricCard
                                label={t('mylab.success_rate')}
                                value={<span className={successRate >= 80 ? 'text-dlp-brand' : 'text-amber-500'}>{successRate}%</span>}
                                hint="Based on your rated bakes."
                                tone={successRate >= 80 ? 'success' : 'warning'}
                            />
                            <MetricCard
                                label={t('mylab.lab_status')}
                                value={
                                  <div className="flex items-center gap-2 text-lg font-black text-dlp-text-primary">
                                    <span>{t('mylab.operational')}</span>
                                    <div className="h-2 w-2 rounded-full bg-dlp-brand animate-pulse"></div>
                                  </div>
                                }
                                hint="Your lab is ready for another run."
                                tone="success"
                            />
                            <MetricCard
                                label="Last bake"
                                value={cadenceSummary.daysSinceLastBake === null ? 'No data' : `${cadenceSummary.daysSinceLastBake}d`}
                                hint={cadenceSummary.daysSinceLastBake === null ? 'Start a bake to unlock your timeline.' : 'Time since your last logged session.'}
                                tone="neutral"
                            />
                        </div>
                    </div>
                </AppSurface>

                {recommendations.length > 0 && (
                    <AppSurface surface="glass" tone="neutral" className="p-5 sm:p-6">
                        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                            <BoltIcon className="h-5 w-5 text-amber-500" />
                            <h2 className="text-base font-bold text-slate-800">Next best actions</h2>
                        </div>
                        <p className="text-sm text-slate-500 -mt-2">
                            Small moves that keep your lab active, your data useful and your next bake easier to improve.
                        </p>
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                            {recommendations.map((recommendation) => (
                                <AppSurface
                                    key={recommendation.id}
                                    tone={recommendation.tone}
                                    surface="soft"
                                    interactive
                                    className="rounded-2xl p-5 shadow-sm"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow-sm">
                                            {recommendation.icon}
                                        </div>
                                        <StatusBadge tone={recommendation.tone} size="sm" className="bg-white/80">
                                            Priority
                                        </StatusBadge>
                                    </div>
                                    <h3 className="mt-4 text-base font-bold text-slate-900">{recommendation.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{recommendation.description}</p>
                                    <button
                                        onClick={() => handleRecommendationAction(recommendation.action)}
                                        className="dlp-button-primary mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm"
                                    >
                                        {recommendation.actionLabel}
                                        <ArrowRightIcon className="h-4 w-4" />
                                    </button>
                                </AppSurface>
                            ))}
                        </div>
                    </AppSurface>
                )}

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
                                    tone="brand"
                                    isLocked={!hasProAccess}
                                    onUnlock={() => openPaywall('mylab_timeline')}
                                />
                                <LabFeatureCard
                                    icon={<BeakerIcon className="h-6 w-6 text-blue-600" />}
                                    title={t('mylab.my_bakes')}
                                    description={t('mylab.desc_my_bakes')}
                                    onClick={() => onNavigate('mylab/bakes')}
                                    tone="info"
                                />
                                <LabFeatureCard
                                    icon={<FireIcon className="h-6 w-6 text-orange-500" />}
                                    title={t('mylab.levain_tracker')}
                                    description={t('mylab.desc_levain_tracker')}
                                    onClick={() => onNavigate('mylab/levain')}
                                    tone="warning"
                                />
                                <LabFeatureCard
                                    icon={<ScaleIcon className="h-6 w-6 text-blue-600" />}
                                    title={t('mylab.inventory')}
                                    description={t('mylab.desc_inventory')}
                                    onClick={() => onNavigate('mylab/flours')}
                                    tone="info"
                                    isLocked={!hasProAccess}
                                    onUnlock={() => openPaywall('mylab_flours')}
                                />
                            </div>
                        </div>

                        {/* Section: Analysis & Science */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                                <ChartBarIcon className="h-5 w-5 text-blue-600" />
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
                                    tone="success"
                                    isLocked={!hasProAccess}
                                    onUnlock={() => openPaywall('mylab_consistency')}
                                />
                                <LabFeatureCard
                                    icon={<ArrowsRightLeftIcon className="h-6 w-6 text-blue-600" />}
                                    title={t('mylab.ab_comparisons')}
                                    description={t('mylab.desc_compare')}
                                    onClick={() => onNavigate('mylab/comparisons')}
                                    tone="info"
                                />
                                <LabFeatureCard
<<<<<<< HEAD
                                    icon={<ChartBarIcon className="h-6 w-6 text-dlp-brand-hover" />}
=======
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
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
                                    title={t('mylab.deep_insights')}
                                    description={t('mylab.desc_insights')}
                                    onClick={() => onNavigate('mylab/insights')}
                                    tone="brand"
                                />
                                <LabFeatureCard
                                    icon={<DocumentTextIcon className="h-6 w-6 text-blue-600" />}
                                    title={t('mylab.learning_goals')}
                                    description={t('mylab.desc_goals')}
                                    onClick={() => onNavigate('mylab/goals')}
                                    tone="info"
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
                                <InlineNotice tone="neutral" className="text-center border-2 border-dashed p-8">
                                    <BeakerIcon className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                                    <p className="text-sm font-medium text-slate-500">{t('mylab.no_recent_bakes_recorded')}</p>
                                    <button
                                        onClick={() => onNavigate('calculator')}
                                        className="mt-2 text-dlp-brand-hover font-bold text-sm hover:underline"
                                    >{t('mylab.start_your_first_bake')}</button>
                                </InlineNotice>
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
                                <InlineNotice tone="neutral" className="text-center text-xs">
                                    No custom presets yet. Save one in the Calculator!
                                </InlineNotice>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Sidebar - Span 4 */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Daily Insight Card */}
                        <AppSurface surface="soft" tone="neutral" className="p-6">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Lab cadence</p>
                                    <h3 className="mt-2 text-xl font-bold text-slate-900">Keep the feedback loop alive</h3>
                                </div>
                                <StatusBadge tone="brand" className="px-3 py-1 text-xs">
                                    {cadenceSummary.activeDaysLast30} active days / 30
                                </StatusBadge>
                            </div>

                            <div className="mt-4 space-y-3 text-sm text-slate-600">
                                <InlineNotice tone="neutral">
                                    {cadenceSummary.daysSinceLastBake === null
                                        ? 'No bakes logged yet. Your first bake unlocks the full learning loop.'
                                        : cadenceSummary.daysSinceLastBake === 0
                                            ? 'You baked today. Review the result while it is still fresh.'
                                            : `Your last logged bake was ${cadenceSummary.daysSinceLastBake} day(s) ago.`}
                                </InlineNotice>
                                <InlineNotice tone={cadenceSummary.levainNeedingAttention ? 'warning' : 'success'}>
                                    {cadenceSummary.levainNeedingAttention
                                        ? `${cadenceSummary.levainNeedingAttention.name} is ready for another feeding cycle.`
                                        : 'Your levain tracker is under control. Keep logging feedings to protect consistency.'}
                                </InlineNotice>
                            </div>

                            <div className="mt-4 flex gap-3">
                                <button
                                    onClick={handleNewBake}
                                    className="dlp-button-primary flex-1 rounded-xl px-4 py-2.5 text-sm"
                                >
                                    Start Next Bake
                                </button>
                                <button
                                    onClick={() => onNavigate('mylab/insights')}
                                    className="dlp-button-secondary flex-1 rounded-xl px-4 py-2.5 text-sm"
                                >
                                    Review Insights
                                </button>
                            </div>
                        </AppSurface>

                        {/* Daily Insight Card */}
                        <div className="relative overflow-hidden rounded-2xl border border-emerald-200/60 bg-[linear-gradient(150deg,_#173920_0%,_#204d2d_54%,_#2b6a3c_100%)] p-6 text-white shadow-xl ring-1 ring-white/10">
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
                            <div className="relative overflow-hidden rounded-2xl border border-blue-200/70 bg-[linear-gradient(150deg,_#244965_0%,_#2b5b7b_52%,_#367294_100%)] p-6 text-white shadow-lg transition-all hover:shadow-[0_24px_60px_-32px_rgba(35,73,101,0.45)] group cursor-pointer"
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
                                <div className="relative overflow-hidden rounded-2xl border border-blue-200/70 bg-[linear-gradient(150deg,_#244965_0%,_#2b5b7b_52%,_#367294_100%)] p-6 text-white shadow-lg transition-all hover:shadow-[0_24px_60px_-32px_rgba(35,73,101,0.45)] group cursor-pointer">
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
    tone: AppSurfaceTone;
    isLocked?: boolean;
    onUnlock?: () => void;
}

const toneBackgroundClass: Record<AppSurfaceTone, string> = {
    brand: 'bg-lime-50 text-dlp-brand-hover',
    info: 'bg-blue-50 text-blue-700',
    success: 'bg-emerald-50 text-dlp-brand-hover',
    warning: 'bg-amber-50 text-amber-700',
    danger: 'bg-red-50 text-red-700',
    neutral: 'bg-slate-50 text-slate-700',
};

const LabFeatureCard: React.FC<LabFeatureCardProps> = ({ icon, title, description, onClick, tone, isLocked, onUnlock }) => {

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
                    : 'dlp-surface-interactive dlp-tone-neutral shadow-sm hover:border-lime-200 hover:-translate-y-1'
                }
            `}
        >
            {/* Icon Container */}
            <div className={`
                h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm
                ${isLocked ? 'bg-slate-200 grayscale' : toneBackgroundClass[tone]}
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



