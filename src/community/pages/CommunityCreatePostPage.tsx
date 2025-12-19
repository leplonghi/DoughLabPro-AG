
import React, { useState, useEffect } from 'react';
import { useRouter } from '../../contexts/RouterContext';
import { useUser } from '../../contexts/UserProvider';
import { communityStore } from '../store/communityStore';
import { ArrowLeft, Loader2, Image as ImageIcon, Sparkles, ChefHat, Droplets, UploadCloud, CheckCircle2, History } from 'lucide-react';
import { LibraryPageLayout } from '../../components/ui/LibraryPageLayout';
import { OvenType, RecipeStyle, FermentationTechnique, Batch, YeastType } from '@/types';
import SliderInput from '../../components/ui/SliderInput';
import { useTranslation } from '@/i18n';

export const CommunityCreatePostPage: React.FC = () => {
  const { t } = useTranslation();
    const { navigate } = useRouter();
    const { user, batches } = useUser();

    // -- Mode Selection --
    const [mode, setMode] = useState<'select' | 'create'>('select'); // 'select' = choose source, 'create' = editing form

    // -- Form State --
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Stats
    const [hydration, setHydration] = useState<number>(70);
    const [salt, setSalt] = useState<number>(2.5);
    const [fermentationTime, setFermentationTime] = useState<number>(24);
    const [temp, setTemp] = useState<string>('');

    const [selectedStyle, setSelectedStyle] = useState<RecipeStyle>(RecipeStyle.NEAPOLITAN);
    const [method, setMethod] = useState<FermentationTechnique>(FermentationTechnique.DIRECT);
    const [ovenType, setOvenType] = useState<OvenType>(OvenType.ELECTRIC);
    const [flour, setFlour] = useState('');

    // Pre-filled from batch?
    const [sourceBatchId, setSourceBatchId] = useState<string | null>(null);

    // UI/Upload
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    // -- Helpers --

    const handleBatchSelect = (batch: Batch) => {
        setSourceBatchId(batch.id);
        setTitle(batch.name);
        setDescription(batch.notes || '');

        // Map batch data
        setHydration(batch.doughConfig.hydration);
        setSalt(batch.doughConfig.salt);
        if (batch.doughConfig.totalFlour) {
            // If we had this data calculated
        }

        // Try to map style
        setSelectedStyle(batch.doughConfig.recipeStyle);
        setMethod(batch.doughConfig.fermentationTechnique);
        if (batch.ovenType) setOvenType(batch.ovenType);

        // Estimate fermentation time if possible (bulk + proof)
        const totalFerm = (batch.bulkTimeHours || 0) + (batch.proofTimeHours || 0);
        if (totalFerm > 0) setFermentationTime(totalFerm);

        if (batch.photoUrl) {
            setPreviewUrl(batch.photoUrl);
            // Note: If reusing photoUrl, we don't set 'file', we handles submit differently
        }

        setMode('create');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            if (selectedFile.size > 5 * 1024 * 1024) return setError('Image size should be less than 5MB');
            if (!selectedFile.type.startsWith('image/')) return setError('Please select a valid image file');
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
            setError(null);
        }
    };

    const uploadImage = async (fileToUpload: File, userId: string): Promise<string> => {
        try {
            const { storage } = await import('@/firebase/storage');
            const { ref, uploadBytes, getDownloadURL } = await import('firebase/storage');
            // Mock fallback if offline/no firebase
            if (!storage) return 'https://images.unsplash.com/photo-1542834371-41040eb34996?auto=format&fit=crop&q=80&w=1000';

            const fileName = `${userId}_${Date.now()}_${fileToUpload.name}`;
            const storageRef = ref(storage, `community_uploads/${fileName}`);
            await uploadBytes(storageRef, fileToUpload);
            return await getDownloadURL(storageRef);
        } catch (err) {
            console.error('Upload failed', err);
            // Return placeholder for mock purposes if fail
            return 'https://images.unsplash.com/photo-1542834371-41040eb34996?auto=format&fit=crop&q=80&w=1000';
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user?.uid) return setError('You must be logged in to post.');

        setLoading(true);
        setError(null);

        try {
            let photoUrl = previewUrl || 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=1000';

            // Upload if new file
            if (file) {
                photoUrl = await uploadImage(file, user.uid);
            }

            const newPost = {
                uid: user.uid,
                username: user.name || 'Baker',
                userPhotoURL: user.avatar,
                title,
                description,
                hydration,
                saltPct: salt,
                fermentationTime,
                temp,
                flour: flour || 'Mix',
                ovenType,
                styleKey: selectedStyle,
                method,
                photos: [photoUrl],
                likes: 0,
                comments: 0,
                clones: 0,
                tags: [selectedStyle.toLowerCase(), method.toLowerCase(), 'homemade'],
                visibility: 'public' as const,
                createdAt: new Date() as any,
                batchId: sourceBatchId || undefined // Link to original batch if exists
            };

            await communityStore.createPost(newPost);
            navigate('community');
        } catch (err: any) {
            console.error(err);
            setError(err.code === 'permission-denied' ? 'Permission denied.' : 'Failed to share your bake.');
        } finally {
            setLoading(false);
        }
    };

    // -- Sub-Components --
    const SelectionPill = ({ active, onClick, children }: any) => (
        <button
            type="button"
            onClick={onClick}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active
                    ? 'bg-dlp-brand text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
        >
            {children}
        </button>
    );

    return (
        <LibraryPageLayout>
            <div className="max-w-3xl mx-auto pb-20">

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={() => mode === 'create' ? setMode('select') : navigate('community')}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5 text-gray-600" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{t('community.new_community_post')}</h1>
                    </div>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-100 mb-6 flex items-center gap-2">
                        <span className="text-xl">⚠️</span> {error}
                    </div>
                )}

                {mode === 'select' ? (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <section>
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('community.how_do_you_want_to_start')}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button
                                    onClick={() => { setSourceBatchId(null); setMode('create'); }}
                                    className="p-6 rounded-2xl border-2 border-dashed border-gray-300 hover:border-dlp-brand hover:bg-lime-50/10 transition-all text-left group"
                                >
                                    <div className="h-12 w-12 bg-lime-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-lime-200 transition-colors">
                                        <Sparkles className="h-6 w-6 text-lime-700" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1">{t('community.start_from_scratch')}</h3>
                                    <p className="text-sm text-gray-500">{t('community.fill_in_your_formula_manually')}</p>
                                </button>

                                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                                            <History className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{t('community.from_my_lab')}</h3>
                                            <p className="text-sm text-gray-500">{t('community.select_a_recent_bake_used')}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                                        {batches.length === 0 ? (
                                            <p className="text-sm text-gray-400 italic py-2">{t('community.no_saved_batches_found')}</p>
                                        ) : (
                                            batches.slice(0, 5).map(batch => (
                                                <button
                                                    key={batch.id}
                                                    onClick={() => handleBatchSelect(batch)}
                                                    className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors text-left group"
                                                >
                                                    <div className="h-10 w-10 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                                        {batch.photoUrl ? (
                                                            <img src={batch.photoUrl} className="h-full w-full object-cover" />
                                                        ) : (
                                                            <div className="h-full w-full flex items-center justify-center text-xs text-gray-400">{t('community.img')}</div>
                                                        )}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="font-medium text-gray-900 truncate">{batch.name}</div>
                                                        <div className="text-xs text-gray-500">
                                                            {new Date(batch.createdAt).toLocaleDateString()} • {batch.doughConfig.recipeStyle}
                                                        </div>
                                                    </div>
                                                    <ArrowLeft className="h-4 w-4 text-gray-300 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </button>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300">

                        {/* Main Content Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">

                                {/* Photo Upload Section */}
                                <div className="p-6 md:p-8 col-span-1">
                                    <label className="block text-sm font-bold text-gray-900 mb-4">{t('community.the_result')}</label>
                                    <label className="relative aspect-square md:aspect-[3/4] rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 hover:border-dlp-brand hover:bg-lime-50/10 transition-all cursor-pointer flex flex-col items-center justify-center overflow-hidden group">
                                        {previewUrl ? (
                                            <>
                                                <img src={previewUrl} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <div className="bg-white/90 backdrop-blur text-xs font-bold py-2 px-4 rounded-full flex items-center gap-2">
                                                        <ImageIcon className="h-3 w-3" />{t('community.change')}</div>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="text-center p-4">
                                                <div className="h-12 w-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-3">
                                                    <UploadCloud className="h-6 w-6 text-dlp-brand-hover" />
                                                </div>
                                                <p className="text-sm font-medium text-gray-900">{t('community.upload_photo')}</p>
                                                <p className="text-xs text-gray-400 mt-1">{t('community.tap_to_browse')}</p>
                                            </div>
                                        )}
                                        <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                    </label>
                                </div>

                                {/* Details Section */}
                                <div className="p-6 md:p-8 col-span-2 space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-2">{t('community.title_2')}</label>
                                        <input
                                            type="text"
                                            value={title}
                                            onChange={e => setTitle(e.target.value)}
                                            placeholder="e.g. 72h Cold Ferment Margherita"
                                            className="w-full text-lg font-medium placeholder:text-gray-300 border-0 border-b border-gray-200 focus:border-dlp-brand focus:ring-0 px-0 py-2 transition-colors bg-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-2">Description / Method</label>
                                        <textarea
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}
                                            placeholder={t('community.share_your_process')}
                                            rows={4}
                                            className="w-full rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-dlp-brand focus:ring-dlp-brand transition-all text-sm"
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{t('community.style')}</label>
                                            <select
                                                value={selectedStyle}
                                                onChange={e => setSelectedStyle(e.target.value as RecipeStyle)}
                                                className="w-full rounded-lg border-gray-200 text-sm focus:border-dlp-brand focus:ring-dlp-brand"
                                            >
                                                {Object.values(RecipeStyle).map(s => (
                                                    <option key={s} value={s}>{s.replace(/_/g, ' ')}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{t('community.method')}</label>
                                            <select
                                                value={method}
                                                onChange={e => setMethod(e.target.value as FermentationTechnique)}
                                                className="w-full rounded-lg border-gray-200 text-sm focus:border-dlp-brand focus:ring-dlp-brand"
                                            >
                                                {Object.values(FermentationTechnique).map(m => (
                                                    <option key={m} value={m}>{m.replace(/_/g, ' ')}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical Stats Accordion/Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
                                    %
                                </span>
                                <h3 className="font-bold text-gray-900">{t('community.technical_details')}</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <SliderInput
                                    label={t('form.hydration')}
                                    name="hydration"
                                    value={hydration}
                                    min={50} max={100} unit="%"
                                    onChange={e => setHydration(Number(e.target.value))}
                                />
                                <SliderInput
                                    label={t('results.salt')}
                                    name="salt"
                                    value={salt}
                                    min={0} max={5} step={0.1} unit="%"
                                    onChange={e => setSalt(Number(e.target.value))}
                                />
                                <SliderInput
                                    label={t('community.fermentation')}
                                    name="fermentation"
                                    value={fermentationTime}
                                    min={1} max={96} unit="h"
                                    onChange={e => setFermentationTime(Number(e.target.value))}
                                />
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('community.oven_type')}</label>
                                    <div className="flex flex-wrap gap-2">
                                        {Object.values(OvenType).slice(0, 4).map(o => (
                                            <SelectionPill
                                                key={o}
                                                active={ovenType === o}
                                                onClick={() => setOvenType(o)}
                                            >
                                                {o.replace(/_/g, ' ')}
                                            </SelectionPill>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Actions */}
                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-8 py-3 bg-dlp-brand-hover hover:bg-lime-700 text-white rounded-xl font-bold shadow-lg shadow-dlp-brand-hover/20 disabled:opacity-50 transition-all flex items-center gap-2"
                            >
                                {loading && <Loader2 className="h-5 w-5 animate-spin" />}
                                Publish Post
                            </button>
                        </div>

                    </form>
                )}
            </div>
        </LibraryPageLayout>
    );
};


