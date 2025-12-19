import React, { useState, useMemo } from 'react';
import { useUser } from '@/contexts/UserProvider';
import { Batch, BatchStatus, Page } from '@/types';
import { useTranslation } from '@/i18n';
import {
    PlusCircleIcon,
    BatchesIcon,
    ClockIcon,
    FireIcon,
    WaterIcon,
    StarIcon,
    SolidStarIcon
} from '@/components/ui/Icons';
import MyLabLayout from './MyLabLayout';
import { LockFeature } from '@/components/auth/LockFeature';
import { canUseFeature, getCurrentPlan } from '@/permissions';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import { AdCard } from "@/marketing/ads/AdCard";
import { SocialShare } from "@/marketing/social/SocialShare";

interface MyLabBatchesPageProps {
    onNavigate: (page: Page, params?: string) => void;
    onCreateDraftBatch: () => Promise<Batch>;
    onLoadAndNavigate: (config: any) => void;
}

const ResultTag: React.FC<{ rating: number }> = ({ rating }) => {
    const { t } = useTranslation();
    if (rating >= 4.5) return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-lime-100 text-lime-700 border border-lime-200">{t('mylab.great')}</span>;
    if (rating >= 3.5) return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 border border-blue-200">{t('mylab.good')}</span>;
    return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-100 text-yellow-700 border border-yellow-200">{t('mylab.adjust')}</span>;
};

const BatchCard: React.FC<{ batch: Batch; t: any; onNavigate: (page: Page, params?: string) => void }> = ({ batch, t, onNavigate }) => {
    const date = new Date(batch.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });

    return (
        <div
            onClick={() => onNavigate('batch', batch.id)}
            className="group relative flex flex-col rounded-2xl border border-slate-200  bg-white  shadow-sm transition-all hover:shadow-lg hover:border-lime-200 hover:-translate-y-1 cursor-pointer overflow-hidden"
        >
            {/* Card Header / Image */}
            <div className={`h-32 w-full bg-cover bg-center relative ${!batch.photoUrl ? 'bg-gradient-to-br from-lime-50 to-lime-100  ' : ''}`} style={batch.photoUrl ? { backgroundImage: `url(${batch.photoUrl})` } : {}}>
                {!batch.photoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <BatchesIcon className="h-16 w-16 text-dlp-brand-hover " />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>

                {/* Status Badge */}
                <div className="absolute top-2 right-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${batch.status === BatchStatus.DRAFT ? 'bg-slate-100 text-slate-600 border-slate-200' :
                            batch.status === BatchStatus.COMPLETED ? 'bg-lime-100 text-lime-700 border-lime-200' :
                                'bg-white text-slate-700 border-slate-200'
                        }`}>
                        {batch.status === BatchStatus.DRAFT ? 'DRAFT' :
                            batch.status === BatchStatus.COMPLETED ? 'DONE' :
                                batch.status}
                    </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                    <div>
                        <p className="text-white/90 text-xs font-medium uppercase tracking-wider mb-0.5">{t(`form.${batch.doughConfig.recipeStyle.toLowerCase()}`, { defaultValue: batch.doughConfig.recipeStyle })}</p>
                        <h3 className="text-white font-bold text-lg leading-tight truncate shadow-sm">{batch.name}</h3>
                    </div>
                    {batch.rating && <ResultTag rating={batch.rating} />}
                </div>
            </div>

            {/* Card Body */}
            <div className="p-4 flex-grow flex flex-col gap-3">
                <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-slate-50  rounded-xl p-2">
                        <div className="flex items-center justify-center gap-1 text-slate-400  mb-1">
                            <WaterIcon className="h-3 w-3" />
                        </div>
                        <span className="block text-sm font-bold text-slate-700 ">{batch.doughConfig.hydration}%</span>
                        <span className="block text-[10px] text-slate-500  uppercase">{t('form.hydration')}</span>
                    </div>
                    <div className="bg-slate-50  rounded-xl p-2">
                        <div className="flex items-center justify-center gap-1 text-slate-400  mb-1">
                            <ClockIcon className="h-3 w-3" />
                        </div>
                        <span className="block text-sm font-bold text-slate-700 ">
                            {(batch.bulkTimeHours || 0) + (batch.proofTimeHours || 0) > 0
                                ? `${(batch.bulkTimeHours || 0) + (batch.proofTimeHours || 0)}h`
                                : '-'}
                        </span>
                        <span className="block text-[10px] text-slate-500  uppercase">{t('mylab.time')}</span>
                    </div>
                    <div className="bg-slate-50  rounded-xl p-2">
                        <div className="flex items-center justify-center gap-1 text-slate-400  mb-1">
                            <FireIcon className="h-3 w-3" />
                        </div>
                        <span className="block text-sm font-bold text-slate-700  truncate px-1">
                            {batch.ovenType ? t(`profile.ovens.types.${batch.ovenType.toLowerCase()}`).split(' ')[0] : '-'}
                        </span>
                        <span className="block text-[10px] text-slate-500  uppercase">{t('mylab.oven')}</span>
                    </div>
                </div>

                <div className="mt-auto pt-3 border-t border-slate-100  flex justify-between items-center text-xs text-slate-500 ">
                    <div className="flex items-center gap-2">
                        <span>{date}</span>
                        <div onClick={(e) => e.stopPropagation()}>
                            <SocialShare type="batch" title={batch.name} data={batch} className="p-1 hover:bg-slate-100 rounded-full transition-colors" />
                        </div>
                    </div>
                    <span className="group-hover:text-dlp-brand-hover font-medium transition-colors">{t('mylab.view_details_rarr')}</span>
                </div>
            </div>
        </div>
    );
};


const MyLabBatchesPage: React.FC<MyLabBatchesPageProps> = ({
    onNavigate,
    onCreateDraftBatch,
    onLoadAndNavigate,
}) => {
    const { user, batches, hasProAccess, openPaywall } = useUser();
    const { t } = useTranslation();
    const plan = getCurrentPlan(user);

    const filteredBatches = useMemo(() => {
        return batches
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }, [batches]);

    const handleCreateDraft = async () => {
        const draft = await onCreateDraftBatch();
        onNavigate('batch', draft.id);
    };

    // Free plan limit: 3 batches
    const hasReachedFreeLimit = !canUseFeature(plan, 'mylab.unlimited_advanced') && filteredBatches.length >= 3;

    return (
        <MyLabLayout activePage="mylab/fornadas" onNavigate={onNavigate}>
            <div className="animate-fade-in space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 ">{t('mylab.my_batches')}</h1>
                        <p className="text-sm text-slate-500 ">{t('mylab.track_your_baking_journey_and_perfect_your_recipes')}</p>
                    </div>

                    {!hasReachedFreeLimit ? (
                        <button
                            onClick={handleCreateDraft}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-dlp-brand py-2.5 px-5 font-bold text-white shadow-lg shadow-dlp-brand/20 transition-all hover:bg-dlp-brand hover:text-white-hover hover:scale-105 active:scale-95"
                        >
                            <PlusCircleIcon className="h-5 w-5" />
                            <span>{t('mylab.new_batch')}</span>
                        </button>
                    ) : (
                        <button
                            onClick={() => openPaywall('mylab')}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 text-slate-500 py-2.5 px-5 font-bold cursor-not-allowed opacity-75"
                        >
                            <PlusCircleIcon className="h-5 w-5" />
                            <span>{t('mylab.limit_reached')}</span>
                        </button>
                    )}
                </div>

                {/* Content */}
                {batches.filter(b => b.status !== BatchStatus.DRAFT).length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 px-4 rounded-3xl border-2 border-dashed border-slate-200  bg-slate-50/50  text-center">
                        <div className="bg-white  p-4 rounded-full shadow-sm mb-6">
                            <BatchesIcon className="h-12 w-12 text-dlp-brand" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900  mb-2">{t('mylab.your_baking_journey_starts_here')}</h2>
                        <p className="text-slate-600  max-w-md mx-auto mb-8">
                            Record your experiments, track fermentation times, and rate your results to improve with every bake.
                        </p>
                        <button onClick={handleCreateDraft} className="inline-flex items-center gap-2 rounded-xl bg-dlp-brand py-3 px-6 font-bold text-white shadow-lg shadow-dlp-brand/20 hover:bg-dlp-brand hover:text-white-hover hover:shadow-xl hover:scale-105 transition-all">
                            <PlusCircleIcon className="h-5 w-5" />{t('mylab.start_first_bake')}</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredBatches.map(batch => (
                            <BatchCard key={batch.id} batch={batch} t={t} onNavigate={onNavigate} />
                        ))}

                        {/* Pro Slot */}
                        {hasReachedFreeLimit && (
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-4">
                                <LockedTeaser featureKey="mylab.unlimited_advanced">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-40 pointer-events-none select-none filter blur-[1px]">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="h-64 rounded-2xl border border-slate-200  bg-white "></div>
                                        ))}
                                    </div>
                                </LockedTeaser>
                            </div>
                        )}
                    </div>
                )}
                <AdCard context="batches_bottom" className="mt-8" />
            </div>
        </MyLabLayout>
    );
};

export default MyLabBatchesPage;



