import React from 'react';
import { useTranslation } from '@/i18n';

interface PostPhotosProps {
    photos: string[];
}

export const PostPhotos: React.FC<PostPhotosProps> = ({ photos }) => {
  const { t } = useTranslation();
    if (!photos || photos.length === 0) return null;

    return (
        <div className="relative aspect-square w-full bg-gray-100 overflow-hidden">
            {/* For V1, just show the first photo. Carousel can be added later. */}
            <img
                src={photos[0]}
                alt={t('community.bake_result')}
                className="h-full w-full object-cover"
            />

            {photos.length > 1 && (
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    1 / {photos.length}
                </div>
            )}
        </div>
    );
};
