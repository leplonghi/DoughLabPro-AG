import React, { useState, useRef } from 'react';
import { UploadIcon, PhotoIcon, SpinnerIcon, TrashIcon } from '@/components/ui/Icons';
import { uploadImage } from '@/services/storageService';
import { useTranslation } from '@/i18n';

interface ImageUploadProps {
    currentImage?: string | null;
    onUpload: (url: string) => void;
    onDelete?: () => void;
    path: string;
    label?: string;
    className?: string;
    circle?: boolean; // For avatars
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
    currentImage,
    onUpload,
    onDelete,
    path,
    label,
    className = '',
    circle = false
}) => {
    const { t } = useTranslation(); // Assuming we can use translation hooks here, otherwise fallback to english
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Basic validation
        if (!file.type.startsWith('image/')) {
            setError('Please upload an image file (JPG, PNG, WEBP).');
            return;
        }

        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            setError('Image must be smaller than 5MB.');
            return;
        }

        try {
            setUploading(true);
            setError(null);

            // Generate a unique path to avoid caching issues if overwriting
            // path is like "users/123/avatar"
            // We append a timestamp or unique ID if we want to keep history, but here we probably just want to overwrite or replace.
            // Actually storageService.ts takes (file, path). 
            // If we pass "users/123/avatar.jpg", it overwrites.
            // Let's use the file extension from the uploaded file.
            const ext = file.name.split('.').pop() || 'jpg';
            const fullPath = `${path}.${ext}`;

            const url = await uploadImage(file, fullPath);
            onUpload(url);

        } catch (err) {
            console.error(err);
            setError('Failed to upload image. Please try again.');
        } finally {
            setUploading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const triggerUpload = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className={`space-y-4 ${className}`}>
            {label && <label className="block text-sm font-medium text-slate-700">{label}</label>}

            <div className="flex items-center gap-6">
                {/* Preview Area */}
                <div className={`relative overflow-hidden bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center group
                    ${circle ? 'h-24 w-24 rounded-full' : 'h-32 w-full rounded-xl'}
                    ${currentImage ? 'border-none' : ''}
                `}
                >
                    {currentImage ? (
                        <>
                            <img
                                src={currentImage}
                                alt={t('ui.preview')}
                                className={`h-full w-full object-cover ${circle ? 'rounded-full' : 'rounded-xl'}`}
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button
                                    onClick={triggerUpload}
                                    className="p-1.5 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-colors"
                                    title={t('ui.change_image')}
                                >
                                    <UploadIcon className="w-4 h-4" />
                                </button>
                                {onDelete && (
                                    <button
                                        onClick={onDelete}
                                        className="p-1.5 bg-red-500/50 hover:bg-red-500 text-white rounded-full backdrop-blur-sm transition-colors"
                                        title={t('ui.remove_image')}
                                    >
                                        <TrashIcon className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="text-center p-4">
                            <PhotoIcon className={`text-slate-400 mx-auto ${circle ? 'w-8 h-8' : 'w-10 h-10 mb-2'}`} />
                            {!circle && <span className="text-xs text-slate-500 block">{t('ui.click_to_upload')}</span>}
                        </div>
                    )}

                    {uploading && (
                        <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
                            <SpinnerIcon className="w-6 h-6 text-dlp-brand-hover animate-spin" />
                        </div>
                    )}
                </div>

                {/* Actions (if circle/avatar mode, controls are next to it) */}
                {circle && (
                    <div className="flex flex-col gap-2">
                        <button
                            type="button"
                            onClick={triggerUpload}
                            disabled={uploading}
                            className="text-sm font-medium text-dlp-brand-hover hover:text-lime-700 border border-lime-200 bg-lime-50 hover:bg-lime-100 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2"
                        >
                            {uploading ? 'Uploading...' : t('ui.change_photo_435')}
                        </button>
                        {onDelete && currentImage && (
                            <button
                                type="button"
                                onClick={onDelete}
                                className="text-sm font-medium text-red-500 hover:text-red-700 px-3 py-1.5 rounded-lg transition-colors text-left"
                            >{t('common.remove')}</button>
                        )}
                    </div>
                )}
            </div>

            {/* Error Message */}
            {error && (
                <p className="text-xs text-red-500">{error}</p>
            )}

            {/* Hidden Input */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg, image/webp"
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
};


