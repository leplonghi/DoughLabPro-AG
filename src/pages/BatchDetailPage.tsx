import React, { useState, useEffect, useRef } from 'react';
import { useUser } from '@/contexts/UserProvider';
import { Batch, BatchStatus, Page, CommunityBatch, DoughConfig, DoughResult } from '@/types';
import { useTranslation } from '@/i18n';
import { useToast } from '@/components/ToastProvider';
import {
    SaveIcon,
    StarIcon,
    SolidStarIcon,
    PencilIcon,
    InfoIcon,
    BatchesIcon,
    DocumentDuplicateIcon,
    TrashIcon,
    DownloadIcon,
    PhotoIcon,
    YeastIcon,
    ClockIcon,
    FireIcon,
    FeedIcon
} from '@/components/ui/Icons';
import { uploadImage } from '@/services/storageService';
import { FLOURS } from '@/flours-constants';
import { exportBatchToPDF } from '@/services/exportService';
import { canUseFeature, getCurrentPlan } from '@/permissions';
import { allLearnArticles } from '@/data/learn';
import { BookOpenIcon } from '@/components/ui/Icons';
import { ShareBatchModal } from '@/community/components/ShareBatchModal';
import { SocialShare } from '@/marketing/social/SocialShare';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import { AdCard } from "@/marketing/ads/AdCard";
import { RecommendedProducts } from '@/components/ui/RecommendedProducts';

interface BatchDetailPageProps {
    batchId: string | null;
    onNavigate: (page: Page, params?: string) => void;
    onLoadAndNavigate: (config: DoughConfig) => void;
}

const DetailRow: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
    <div>
        <dt className="text-sm font-medium text-slate-500 ">{label}</dt>
        <dd className="mt-1 text-slate-900 ">{value}</dd>
    </div>
);

const ResultBadge: React.FC<{ rating?: number }> = ({ rating }) => {
    const { t } = useTranslation();
    if (!rating || rating < 1) return null;

    let text = t('batch_detail.badge.adjust');
    let color = 'bg-yellow-100 text-yellow-800  ';
    if (rating >= 4.5) {
        text = t('batch_detail.badge.great');
        color = 'bg-green-100 text-green-800  ';
    } else if (rating >= 3.5) {
        text = t('batch_detail.badge.good');
        color = 'bg-blue-100 text-blue-800  ';
    } else if (rating >= 2.5) {
        text = t('batch_detail.badge.regular');
        color = 'bg-orange-100 text-orange-800  ';
    }
    return <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${color}`}>{text}</span>;
};

const KeyStatCard: React.FC<{ label: string; value: React.ReactNode; icon: React.ReactNode }> = ({ label, value, icon }) => (
    <div className="flex items-center gap-3">
        <div className="flex-shrink-0 text-slate-400 ">{icon}</div>
        <div>
            <dt className="text-sm text-slate-500 ">{label}</dt>
            <dd className="font-semibold text-slate-900 ">{value}</dd>
        </div>
    </div>
);

const IngredientTable: React.FC<{ result: DoughResult, doughConfig: DoughConfig }> = ({ result, doughConfig }) => {
    const { t } = useTranslation();
    const renderRow = (label: string, value: number, note?: string) => (
        <tr className="border-b border-slate-200 ">
            <td className="py-2 pr-2 font-medium text-slate-700 ">{label}</td>
            <td className="py-2 text-right font-mono text-slate-900 ">{value.toFixed(1)}g</td>
            {note && <td className="py-2 pl-4 text-right text-xs text-slate-500 ">{note}</td>}
        </tr>
    );

    return (
        <table className="w-full text-sm">
            <thead>
                <tr className="border-b-2 border-slate-300 ">
                    <th className="text-left py-2 text-slate-900 ">Ingredient</th>
                    <th className="text-right py-2 text-slate-900 ">Quantity</th>
                    <th className="text-right py-2"></th>
                </tr>
            </thead>
            <tbody>
                {result.preferment && (
                    <>
                        <tr className="bg-slate-50 ">
                            <td colSpan={3} className="py-1 px-2 font-bold text-xs uppercase tracking-wider text-slate-600 ">{t(`form.${doughConfig.fermentationTechnique.toLowerCase()}`)}</td>
                        </tr>
                        {renderRow('Flour', result.preferment.flour)}
                        {renderRow('Water', result.preferment.water)}
                        {result.preferment.yeast > 0 && renderRow('Yeast', result.preferment.yeast)}
                        <tr className="bg-slate-50 ">
                            <td colSpan={3} className="py-1 px-2 font-bold text-xs uppercase tracking-wider text-slate-600 ">{t('results.final_dough_title')}</td>
                        </tr>
                        {result.finalDough && renderRow(t(`form.${doughConfig.fermentationTechnique.toLowerCase()}`), result.preferment.flour + result.preferment.water + result.preferment.yeast)}
                    </>
                )}
                {result.finalDough ? (
                    <>
                        {renderRow(t('results.flour'), result.finalDough.flour)}
                        {renderRow(t('results.water'), result.finalDough.water)}
                        {renderRow(t('results.salt'), result.finalDough.salt, `${doughConfig.salt.toFixed(1)}%`)}
                        {result.finalDough.oil > 0 && renderRow(t('results.oil'), result.finalDough.oil, `${doughConfig.oil.toFixed(1)}%`)}
                        {result.finalDough.yeast > 0 && renderRow(t('results.yeast'), result.finalDough.yeast)}
                    </>
                ) : (
                    <>
                        {renderRow(t('results.flour'), result.totalFlour)}
                        {renderRow(t('results.water'), result.totalWater, `${doughConfig.hydration}%`)}
                        {renderRow(t('results.salt'), result.totalSalt, `${doughConfig.salt}%`)}
                        {result.totalOil > 0 && renderRow(t('results.oil'), result.totalOil, `${doughConfig.oil}%`)}
                        {result.totalYeast > 0 && renderRow(t('results.yeast'), result.totalYeast)}
                    </>
                )}
                <tr className="border-t-2 border-slate-300 ">
                    <td className="py-2 font-bold text-slate-900 ">{t('results.total_dough')}</td>
                    <td className="py-2 text-right font-bold font-mono text-slate-900 ">{result.totalDough.toFixed(0)}g</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
};

const BatchDetailPage: React.FC<BatchDetailPageProps> = ({ batchId, onNavigate, onLoadAndNavigate }) => {
    const { user, batches, updateBatch, addBatch, deleteBatch, hasProAccess, openPaywall } = useUser();
    const { t } = useTranslation();
    const { addToast } = useToast();

    const [editableBatch, setEditableBatch] = useState<Batch | null>(null);
    const [isEditingNotes, setIsEditingNotes] = useState(false);
    const [tempNotes, setTempNotes] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const userPlan = getCurrentPlan(user);

    const handlePhotoSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0] && editableBatch) {
            const file = e.target.files[0];
            setIsUploading(true);
            try {
                const path = `user_uploads/${user?.uid || 'anonymous'}/${editableBatch.id}/${Date.now()}_${file.name}`;
                const url = await uploadImage(file, path);

                setEditableBatch({ ...editableBatch, photoUrl: url });
                addToast('Photo uploaded successfully', 'success');
            } catch (error) {
                console.error(error);
                addToast('Failed to upload photo', 'error');
            } finally {
                setIsUploading(false);
            }
        }
    };

    useEffect(() => {
        const foundBatch = batches.find((b) => b.id === batchId);
        if (foundBatch) {
            setEditableBatch(JSON.parse(JSON.stringify(foundBatch)));
            setIsEditingNotes(!foundBatch.notes);
        } else {
            setEditableBatch(null);
        }
    }, [batchId, batches]);

    const handleRatingChange = (newRating: number) => {
        if (!editableBatch) return;
        setEditableBatch({ ...editableBatch, rating: editableBatch.rating === newRating ? undefined : newRating });
    };

    const handleSaveNotesClick = () => {
        if (!editableBatch) return;
        setEditableBatch({ ...editableBatch, notes: tempNotes });
        setIsEditingNotes(false);
    };

    const handleSave = async () => {
        if (editableBatch) {
            await updateBatch(editableBatch);
            addToast(t('info.update_success'), 'success');
        }
    };

    const handleDuplicate = async () => {
        if (!editableBatch) return;
        const savedBatches = batches.filter(b => b.status !== BatchStatus.DRAFT);

        // Check limit for free users (e.g. 3 batches)
        if (!canUseFeature(userPlan, 'mylab.unlimited_advanced') && savedBatches.length >= 3) {
            openPaywall('mylab');
            return;
        }

        const newBatchData: Omit<Batch, 'id' | 'createdAt' | 'updatedAt'> = {
            ...JSON.parse(JSON.stringify(editableBatch)),
            name: `${editableBatch.name} (Copy)`,
            status: BatchStatus.DRAFT,
            rating: undefined,
            isPublic: false,
        };
        const added = await addBatch(newBatchData);
        addToast(`Batch "${editableBatch.name}" duplicated.`, 'success');
        onNavigate('batch', added.id);
    };

    const handleDelete = async () => {
        if (editableBatch && window.confirm(t('confirmations.delete_batch', { name: editableBatch.name }))) {
            await deleteBatch(editableBatch.id);
            onNavigate('mylab/fornadas');
        }
    };

    const handleExportPDF = () => {
        if (!canUseFeature(userPlan, 'export.pdf_json')) {
            openPaywall('mylab');
            return;
        }
        if (!editableBatch) return;
        try {
            exportBatchToPDF(editableBatch, t);
        } catch (e) {
            addToast('Could not export PDF at this time.', 'error');
        }
    };

    const handleShareClick = () => {
        if (!canUseFeature(userPlan, 'community.feed')) {
            openPaywall('community');
            return;
        }
        setIsShareModalOpen(true);
    };

    if (!editableBatch) {
        return (
            <div className="text-center p-8">
                <h2 className="text-xl font-bold text-slate-900 ">{t('batch_detail.not_found')}</h2>
                <p className="mt-2 text-slate-600 ">{t('batch_detail.not_found_desc')}</p>
                <button onClick={() => onNavigate('mylab/fornadas')} className="mt-4 rounded-xl bg-lime-500 py-2.5 px-5 text-sm font-bold text-white shadow-lg shadow-lime-500/20 hover:bg-lime-600 transition-all">
                    {t('batch_detail.back_to_diary')}
                </button>
            </div>
        );
    }

    const { doughConfig, doughResult } = editableBatch;
    const flour = FLOURS.find(f => f.id === doughConfig.flourId);

    return (
        <div className="animate-fade-in">
            <button
                onClick={() => window.history.back()}
                className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500  hover:text-slate-800 transition-colors"
            >
                &larr; Back
            </button>

            {/* Header */}
            <div className="mb-8 space-y-2">
                <input
                    type="text"
                    name="name"
                    value={editableBatch.name}
                    onChange={(e) => setEditableBatch({ ...editableBatch, name: e.target.value })}
                    className="w-full bg-transparent text-3xl font-bold tracking-tight text-slate-900  sm:text-4xl focus:outline-none focus:ring-0 border-0 p-0 placeholder-slate-400"
                />
                <div className="flex items-center gap-4">
                    <p className="text-sm text-slate-500 ">
                        {new Date(editableBatch.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <ResultBadge rating={editableBatch.rating} />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Main Content */}
                <div className="w-full lg:w-2/3 space-y-6">
                    <div className="rounded-2xl bg-white  p-6 shadow-sm border border-slate-200 ">
                        <h3 className="font-bold text-lg mb-4 text-slate-900 ">{t('batch_detail.data_title')}</h3>
                        <dl className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
                            <KeyStatCard label={t('batch_detail.hydration')} value={`${doughConfig.hydration}%`} icon={<InfoIcon className="h-6 w-6" />} />
                            <KeyStatCard label={t('form.flour_type')} value={flour?.name || 'N/A'} icon={<InfoIcon className="h-6 w-6" />} />
                            <KeyStatCard label={t('batch_detail.yeast')} value={t(`form.yeast_${doughConfig.yeastType.toLowerCase()}`)} icon={<YeastIcon className="h-6 w-6" />} />
                            <KeyStatCard label="Total Time" value={`${(editableBatch.bulkTimeHours || 0) + (editableBatch.proofTimeHours || 0)}h`} icon={<ClockIcon className="h-6 w-6" />} />
                            <KeyStatCard label="Avg Temp" value={t(`form.temp_${doughConfig.ambientTemperature.toLowerCase()}`)} icon={<InfoIcon className="h-6 w-6" />} />
                            <KeyStatCard label="Oven" value={editableBatch.ovenType ? t(`profile.ovens.types.${editableBatch.ovenType.toLowerCase()}`) : 'N/A'} icon={<FireIcon className="h-6 w-6" />} />
                        </dl>
                    </div>

                    {doughResult && (
                        <div className="rounded-2xl bg-white  p-6 shadow-sm border border-slate-200 ">
                            <h3 className="font-bold text-lg mb-4 text-slate-900 ">{t('batch_detail.ingredients_title')}</h3>
                            <IngredientTable result={doughResult} doughConfig={doughConfig} />
                        </div>
                    )}

                    <div className="rounded-2xl bg-white  p-6 shadow-sm border border-slate-200 ">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-lg text-slate-900 ">{t('batch_detail.process_title')}</h3>
                            {!isEditingNotes && (
                                <button onClick={() => setIsEditingNotes(true)} className="flex items-center gap-1.5 rounded-lg py-1.5 px-3 text-xs font-bold text-slate-600  hover:bg-slate-100 transition-colors">
                                    <PencilIcon className="h-3 w-3" />
                                    <span>{editableBatch.notes ? 'Edit' : 'Add'}</span>
                                </button>
                            )}
                        </div>
                        {isEditingNotes ? (
                            <div>
                                <textarea rows={10} value={tempNotes} onChange={(e) => setTempNotes(e.target.value)} placeholder={t('batch_detail.notes_placeholder')} className="block w-full rounded-xl border-slate-300  bg-white  text-slate-900  shadow-sm focus:border-lime-500 focus:ring-lime-500" autoFocus />
                                <div className="mt-2 flex justify-end gap-2">
                                    <button onClick={() => setIsEditingNotes(false)} className="rounded-xl py-2 px-4 text-sm font-bold text-slate-600  hover:bg-slate-100 transition-colors">{t('common.cancel')}</button>
                                    <button onClick={handleSaveNotesClick} className="rounded-xl bg-lime-500 py-2 px-4 text-sm font-bold text-white shadow-lg shadow-lime-500/20 hover:bg-lime-600 transition-all">{t('common.save')}</button>
                                </div>
                            </div>
                        ) : (
                            <div className="prose prose-sm max-w-none min-h-[10rem] whitespace-pre-wrap text-slate-700 ">{editableBatch.notes || <p className="italic text-slate-400 ">{t('batch_detail.no_notes')}</p>}</div>
                        )}
                    </div>
                    <AdCard context="batch_detail" />
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-1/3 space-y-6 lg:sticky lg:top-24">
                    {/* Related Learn Insights */}
                    <div className="rounded-2xl bg-gradient-to-br from-lime-50 to-white p-6 shadow-sm border border-lime-100">
                        <h3 className="flex items-center gap-2 font-bold text-lg mb-4 text-lime-900">
                            <BookOpenIcon className="h-5 w-5 text-lime-600" />
                            {t('batch_detail.learn_insights', { defaultValue: 'Related Insights' })}
                        </h3>
                        <div className="space-y-3">
                            {allLearnArticles.filter(article => {
                                const config = editableBatch.doughConfig;

                                // Use new schema fields: practicalApplications, tags, etc.
                                const articleTags = article.tags || [];
                                const practicalApps = article.practicalApplications || [];

                                // Match based on practical applications and tags
                                if (config.hydration > 65 && (
                                    practicalApps?.some(app => app.toLowerCase().includes('hydration')) ||
                                    articleTags?.some(tag => tag.toLowerCase().includes('hydration')) ||
                                    article.id.includes('hydration') || article.id.includes('water')
                                )) return true;

                                if ((editableBatch.bulkTimeHours || 0) > 4 && (
                                    practicalApps?.some(app => app.toLowerCase().includes('fermentation')) ||
                                    articleTags?.some(tag => tag.toLowerCase().includes('fermentation')) ||
                                    article.id.includes('fermentation')
                                )) return true;

                                if (['sourdough', 'levain'].includes(config.yeastType) && (
                                    practicalApps?.some(app => app.toLowerCase().includes('sourdough')) ||
                                    articleTags?.some(tag => tag.toLowerCase().includes('sourdough')) ||
                                    article.id.includes('sourdough')
                                )) return true;

                                if (editableBatch.ovenType && (
                                    practicalApps?.some(app => app.toLowerCase().includes('baking')) ||
                                    articleTags?.some(tag => tag.toLowerCase().includes('baking')) ||
                                    article.id.includes('baking')
                                )) return true;

                                // Fallback matches by ID
                                if (article.id === 'water-hydration-dynamics' || article.id.includes('fermentation-basics')) return true;
                                return false;
                            }).slice(0, 4).map(article => (
                                <a
                                    key={article.id}
                                    href={`#/learn/article/${article.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-3 bg-white rounded-xl border border-lime-100 hover:border-lime-300 hover:shadow-md transition-all group"
                                >
                                    <h4 className="font-bold text-sm text-slate-800 group-hover:text-lime-700 transition-colors line-clamp-1">
                                        {article.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                                        {article.subtitle}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                        <RecommendedProducts
                            tags={[
                                doughConfig.style?.toLowerCase() || 'general',
                                doughConfig.yeastType?.toLowerCase() || '',
                                doughConfig.ovenType?.toLowerCase() || '',
                                'baking'
                            ].filter(Boolean)}
                            title="Tools for this Recipe"
                        />
                    </div>
                    <div className="rounded-2xl bg-white  p-6 shadow-sm border border-slate-200 ">
                        <h3 className="font-bold text-lg mb-4 text-slate-900 ">{t('batch_detail.rating')}</h3>
                        <div className="flex items-center justify-center gap-1">
                            {[1, 2, 3, 4, 5].map(star => (
                                <button key={star} onClick={() => handleRatingChange(star)} className="p-1 transition-transform hover:scale-110 active:scale-95">
                                    {editableBatch.rating && editableBatch.rating >= star ? <SolidStarIcon className="h-8 w-8 text-yellow-400" /> : <StarIcon className="h-8 w-8 text-slate-300  hover:text-yellow-400" />}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-2xl bg-white  p-6 shadow-sm border border-slate-200 ">
                        <h3 className="font-bold text-lg mb-4 text-slate-900 ">{t('batch_detail.photos_title')}</h3>
                        <div className="aspect-video w-full rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center relative">
                            {editableBatch.photoUrl ? (
                                <img src={editableBatch.photoUrl} alt={editableBatch.name} className="w-full h-full object-cover" />
                            ) : (
                                <PhotoIcon className="h-10 w-10 text-slate-400 " />
                            )}
                            {isUploading && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                                </div>
                            )}
                        </div>

                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handlePhotoSelect}
                        />

                        <button
                            onClick={() => fileInputRef.current?.click()}
                            disabled={isUploading}
                            className="w-full mt-4 rounded-xl bg-slate-100  text-slate-700  py-2.5 text-sm font-bold hover:bg-slate-200 transition-colors disabled:opacity-50"
                        >
                            {editableBatch.photoUrl ? 'Change Photo' : `${t('common.add')} Photo`}
                        </button>
                    </div>
                    <div className="rounded-2xl bg-white  p-6 shadow-sm border border-slate-200 ">
                        <h3 className="font-bold text-lg mb-4 text-slate-900 ">{t('batch_detail.actions_title')}</h3>
                        <div className="space-y-3">
                            <button onClick={() => onLoadAndNavigate(doughConfig)} className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-100  py-3 font-bold text-slate-700  hover:bg-slate-200 transition-colors"><BatchesIcon className="h-5 w-5" /> {t('batch_detail.actions.repeat')}</button>
                            <button onClick={handleDuplicate} className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-100  py-3 font-bold text-slate-700  hover:bg-slate-200 transition-colors"><DocumentDuplicateIcon className="h-5 w-5" /> {t('batch_detail.actions.duplicate')}</button>

                            <LockedTeaser featureKey="export.pdf_json">
                                <button onClick={handleExportPDF} className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-100  py-3 font-bold text-slate-700  hover:bg-slate-200 transition-colors"><DownloadIcon className="h-5 w-5" /> {t('batch_detail.actions.export_pdf')}</button>
                            </LockedTeaser>

                            <LockedTeaser featureKey="community.feed">
                                <button
                                    onClick={handleShareClick}
                                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-500 to-lime-600 py-3 font-bold text-white shadow-lg shadow-lime-500/20 hover:from-lime-600 hover:to-lime-700 transition-all"
                                >
                                    <FeedIcon className="h-5 w-5" />
                                    Share in Community
                                </button>
                            </LockedTeaser>

                            <SocialShare
                                title={`My ${editableBatch.name} Recipe`}
                                data={editableBatch.doughConfig}
                                type="recipe"
                                className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                            />

                            <button onClick={handleDelete} className="w-full flex items-center justify-center gap-2 rounded-xl text-red-600  py-3 font-bold hover:bg-red-50 transition-colors"><TrashIcon className="h-5 w-5" /> {t('batch_detail.actions.delete')}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-slate-200  pt-6">
                <button onClick={() => onNavigate('mylab/fornadas')} className="text-sm font-bold text-lime-600  hover:underline">
                    &larr; {t('batch_detail.back_to_diary')}
                </button>
                <button onClick={handleSave} className="flex items-center gap-2 rounded-xl bg-lime-500 py-3 px-6 text-sm font-bold text-white shadow-lg shadow-lime-500/20 transition-all hover:bg-lime-600 hover:scale-105 active:scale-95">
                    <SaveIcon className="h-5 w-5" />
                    {t('common.save_changes')}
                </button>
            </div>

            <ShareBatchModal
                batch={editableBatch}
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
            />
        </div>
    );
};

export default BatchDetailPage;
