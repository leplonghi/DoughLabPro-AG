import React, { useMemo } from 'react';
import { Page, BatchStatus } from '@/types';
import { PencilIcon, BookOpenIcon, StarIcon, ArrowRightIcon } from '@/components/ui/Icons';
import MyLabLayout from './MyLabLayout';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';
import { LockFeature } from '@/components/auth/LockFeature';

interface MyLabSensoryDiaryPageProps {
    onNavigate: (page: Page) => void;
}

const MyLabSensoryDiaryPage: React.FC<MyLabSensoryDiaryPageProps> = ({ onNavigate }) => {
    const { batches } = useUser();
    const { t } = useTranslation();

    const diaryEntries = useMemo(() => {
        return batches
            .filter(b => b.status === BatchStatus.COMPLETED && (b.notes || (b.rating && b.rating > 0)))
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }, [batches]);

    const renderStars = (rating: number) => {
        return (
            <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className={`h-4 w-4 ${i < rating ? 'fill-current' : 'text-slate-200'}`} />
                ))}
            </div>
        );
    };

    return (
        <MyLabLayout activePage="mylab/diario-sensorial" onNavigate={onNavigate}>
            <div className="animate-fade-in pb-20">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 ">{t('mylab.sensory_diary')}</h1>
                    <p className="text-slate-600  mt-2">{t('mylab.your_collection_of_baking_notes_and_tasting_observ')}</p>
                </div>

                <LockFeature featureKey="mylab.unlimited_advanced" customMessage="Unlock your Personal Baking Journal with Lab Pro.">
                    {diaryEntries.length === 0 ? (
                        <div className="bg-white  rounded-2xl border border-slate-200  p-12 text-center">
                            <div className="w-16 h-16 bg-slate-100  rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpenIcon className="h-8 w-8 text-slate-400 " />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 ">{t('mylab.journal_is_empty')}</h3>
                            <p className="text-slate-500  mt-2 max-w-sm mx-auto">
                                Complete a batch and add notes or a rating to see it appear here.
                            </p>
                            <button
                                onClick={() => onNavigate('mylab/fornadas')}
                                className="mt-6 text-dlp-brand-hover  font-bold hover:underline"
                            >{t('mylab.go_to_my_bakes')}</button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {diaryEntries.map(batch => (
                                <div key={batch.id} className="bg-white  p-6 rounded-2xl border border-slate-200  shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                                                    {new Date(batch.createdAt).toLocaleDateString()}
                                                </span>
                                                <span className="text-slate-300">•</span>
                                                <span className="text-xs font-bold uppercase text-dlp-brand-hover tracking-wider">
                                                    {t(`form.${batch.doughConfig.recipeStyle.toLowerCase()}`, { defaultValue: batch.doughConfig.recipeStyle })}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 ">{batch.name}</h3>
                                        </div>
                                        {batch.rating && renderStars(batch.rating)}
                                    </div>

                                    {batch.notes && (
                                        <div className="bg-slate-50  p-4 rounded-xl border border-slate-100  text-slate-700  italic text-sm leading-relaxed mb-4 relative">
                                            <PencilIcon className="h-4 w-4 text-slate-300 absolute top-4 right-4" />
                                            "{batch.notes}"
                                        </div>
                                    )}

                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => onNavigate(`batch/${batch.id}`)}
                                            className="text-sm font-semibold text-slate-500 hover:text-dlp-brand-hover flex items-center gap-1 transition-colors"
                                        >{t('mylab.view_full_details')}<ArrowRightIcon className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </LockFeature>
            </div>
        </MyLabLayout>
    );
};

export default MyLabSensoryDiaryPage;

