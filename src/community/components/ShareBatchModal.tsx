import React, { useState } from 'react';
import { Batch, YeastType } from '@/types';
import { useUser } from '@/contexts/UserProvider';
import { communityStore } from '@/community/store/communityStore';
import { useToast } from '@/components/ToastProvider';
import { CloseIcon, PhotoIcon } from '@/components/ui/Icons';
import { uploadImage } from '@/services/storageService';
import { useTranslation } from '@/i18n';

interface ShareBatchModalProps {
    batch: Batch;
    isOpen: boolean;
    onClose: () => void;
}

export const ShareBatchModal: React.FC<ShareBatchModalProps> = ({ batch, isOpen, onClose }) => {
  const { t } = useTranslation();
    const { user } = useUser();
    const { addToast } = useToast();
    const [title, setTitle] = useState(batch.name);
    const [description, setDescription] = useState(batch.notes || '');
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(batch.photoUrl || null);
    const [isUploading, setIsUploading] = useState(false);

    if (!isOpen) return null;

    const handleAddTag = () => {
        if (tagInput.trim() && !tags.includes(tagInput.trim())) {
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setIsUploading(true);
            try {
                const file = e.target.files[0];
                const path = `community_uploads/${user?.uid}/${Date.now()}_${file.name}`;
                const url = await uploadImage(file, path);
                setSelectedPhoto(url);
            } catch (error) {
                console.error("Error uploading photo:", error);
                addToast(t('community.failed_to_upload_photo'), "error");
            } finally {
                setIsUploading(false);
            }
        }
    };

    const handleShare = async () => {
        if (!user) return;
        if (!selectedPhoto) {
            addToast("Please add a photo to share your bake.", "error");
            return;
        }

        setIsSubmitting(true);
        try {
            const fermentationNotesParts = [];
            if (batch.bulkTimeHours !== undefined) fermentationNotesParts.push(`Bulk: ${batch.bulkTimeHours}h`);
            if (batch.proofTimeHours !== undefined) fermentationNotesParts.push(`Proof: ${batch.proofTimeHours}h`);

            await communityStore.createPost({
                uid: user.uid,
                username: user.name || 'Anonymous Baker',
                userPhotoURL: user.avatar || undefined,
                batchId: batch.id,
                styleKey: batch.doughConfig.recipeStyle,
                hydration: batch.doughConfig.hydration,
                flour: batch.doughConfig.flourId,
                saltPct: batch.doughConfig.salt,
                levainPct: (batch.doughConfig.yeastType === YeastType.SOURDOUGH_STARTER || batch.doughConfig.yeastType === YeastType.USER_LEVAIN) ? 20 : 0, // Approximation
                prefermentUsed: !!batch.doughResult?.preferment,
                method: batch.doughConfig.fermentationTechnique,
                fermentationNotes: fermentationNotesParts.join(', '),
                ovenType: batch.ovenType,
                photos: [selectedPhoto],
                tags: tags,
                visibility: 'public',
                title: title,
                description: description,
            });

            addToast("Bake shared to community successfully!", "success");
            onClose();
        } catch (error) {
            console.error("Error sharing bake:", error);
            addToast("Failed to share bake.", "error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl animate-in fade-in zoom-in duration-200">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">{t('community.share_this_bake')}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-900">
                        <CloseIcon className="h-6 w-6" />
                    </button>
                </div>

                <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                    {/* Photo Selection */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('community.photo')}</label>
                        <div className="relative aspect-video rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-lime-500 transition-colors group">
                            {selectedPhoto ? (
                                <img src={selectedPhoto} alt={t('community.bake')} className="w-full h-full object-cover" />
                            ) : (
                                <div className="text-center p-4">
                                    <PhotoIcon className="h-10 w-10 mx-auto text-gray-400 mb-2" />
                                    <span className="text-sm text-gray-500">{t('community.click_to_upload_photo')}</span>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoUpload}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                            {isUploading && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('community.title')}</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full rounded-xl border-gray-300 bg-white text-gray-900 focus:ring-lime-500 focus:border-lime-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('community.description')}</label>
                        <textarea
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full rounded-xl border-gray-300 bg-white text-gray-900 focus:ring-lime-500 focus:border-lime-500"
                        />
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('community.tags')}</label>
                        <div className="flex gap-2 mb-2 flex-wrap">
                            {tags.map(tag => (
                                <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                                    #{tag}
                                    <button onClick={() => handleRemoveTag(tag)} className="hover:text-lime-900">&times;</button>
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                                placeholder={t('community.add_a_tag')}
                                className="flex-1 rounded-xl border-gray-300 bg-white text-gray-900 focus:ring-lime-500 focus:border-lime-500 text-sm"
                            />
                            <button
                                onClick={handleAddTag}
                                className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200"
                            >{t('community.add')}</button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-xl text-gray-600 font-medium hover:bg-gray-100"
                    >{t('community.cancel')}</button>
                    <button
                        onClick={handleShare}
                        disabled={isSubmitting || isUploading}
                        className="px-6 py-2 rounded-xl bg-lime-500 text-white font-bold shadow-lg shadow-lime-500/20 hover:bg-lime-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        {isSubmitting ? 'Sharing...' : 'Share Now'}
                    </button>
                </div>
            </div>
        </div>
    );
};
