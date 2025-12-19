
import React from 'react';
import { useUser } from '@/contexts/UserProvider';
import { DocumentTextIcon, PlusCircleIcon, WaterIcon, ClockIcon, FireIcon, SolidStarIcon, BatchesIcon, ArrowsRightLeftIcon } from '@/components/ui/Icons';
import { Page, Batch } from '@/types';
import MyLabLayout from './MyLabLayout';
import { useTranslation } from '@/i18n';

interface MyLabRecipesPageProps {
    onNavigate: (page: Page, params?: string) => void;
}

const RecipeCard: React.FC<{ batch: Batch; t: any; onNavigate: (page: Page, params?: string) => void }> = ({ batch, t, onNavigate }) => {
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
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                    <div>
                        <p className="text-white/90 text-xs font-medium uppercase tracking-wider mb-0.5">{t(`form.${batch.doughConfig.recipeStyle.toLowerCase()}`, { defaultValue: batch.doughConfig.recipeStyle })}</p>
                        <h3 className="text-white font-bold text-lg leading-tight truncate shadow-sm">{batch.name}</h3>
                    </div>
                    {batch.rating && (
                        <div className="flex items-center gap-0.5 bg-yellow-100 text-yellow-700   px-2 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm">
                            <SolidStarIcon className="h-3 w-3" />
                            <span>{batch.rating.toFixed(1)}</span>
                        </div>
                    )}
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
                        <span className="block text-[10px] text-slate-500  uppercase">{t('mylab.time_2')}</span>
                    </div>
                    <div className="bg-slate-50  rounded-xl p-2">
                        <div className="flex items-center justify-center gap-1 text-slate-400  mb-1">
                            <FireIcon className="h-3 w-3" />
                        </div>
                        <span className="block text-sm font-bold text-slate-700  truncate px-1">
                            {batch.ovenType ? t(`profile.ovens.types.${batch.ovenType.toLowerCase()}`).split(' ')[0] : '-'}
                        </span>
                        <span className="block text-[10px] text-slate-500  uppercase">{t('mylab.oven_2')}</span>
                    </div>
                </div>

                <div className="mt-auto pt-3 border-t border-slate-100  flex justify-between items-center text-xs text-slate-500 ">
                    <span>{date}</span>
                    <span className="group-hover:text-dlp-brand-hover font-medium transition-colors">{t('mylab.view_recipe_rarr')}</span>
                </div>
            </div>
        </div>
    );
};

const MyLabRecipesPage: React.FC<MyLabRecipesPageProps> = ({ onNavigate }) => {
    const { batches } = useUser();
    const { t } = useTranslation();

    // Filter for favorite batches to treat as t('mylab.recipes')
    const favoriteBatches = batches.filter(b => b.isFavorite);

    return (
        <MyLabLayout activePage="mylab/receitas" onNavigate={onNavigate}>
            <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 ">{t('mylab.my_recipes')}</h1>
                        <p className="text-slate-600  mt-2">{t('mylab.your_collection_of_favorite_dough_configurations')}</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => onNavigate('mylab/comparisons')}
                            className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 py-2.5 px-4 font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition-all hover:scale-105 active:scale-95"
                        >
                            <ArrowsRightLeftIcon className="h-5 w-5" />{t('mylab.compare')}</button>
                        <button
                            onClick={() => onNavigate('calculator')}
                            className="inline-flex items-center gap-2 rounded-xl bg-dlp-brand py-2.5 px-5 font-bold text-white shadow-lg shadow-dlp-brand/20 hover:bg-dlp-brand hover:text-white-hover transition-all hover:scale-105 active:scale-95"
                        >
                            <PlusCircleIcon className="h-5 w-5" />{t('mylab.new_recipe')}</button>
                    </div>
                </div>



                {
                    favoriteBatches.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {favoriteBatches.map(batch => (
                                <RecipeCard key={batch.id} batch={batch} t={t} onNavigate={onNavigate} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white  rounded-2xl border border-slate-200  p-12 text-center">
                            <div className="w-16 h-16 bg-slate-100  rounded-full flex items-center justify-center mx-auto mb-4">
                                <DocumentTextIcon className="h-8 w-8 text-slate-400 " />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 ">{t('mylab.no_saved_recipes_yet')}</h3>
                            <p className="text-slate-500  mt-2 max-w-sm mx-auto">{t('mylab.mark_your_best_batches_as')}<strong>{t('mylab.favorites')}</strong> to see them appear here as reusable recipes.
                            </p>
                            <button
                                onClick={() => onNavigate('mylab/batches')}
                                className="mt-6 text-dlp-brand-hover  font-bold hover:underline"
                            >{t('mylab.go_to_my_bakes')}</button>
                        </div>
                    )
                }
            </div >
        </MyLabLayout >
    );
};

export default MyLabRecipesPage;



