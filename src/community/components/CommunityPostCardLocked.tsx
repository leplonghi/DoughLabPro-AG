
import React from 'react';
import { CommunityPost } from '../types';
import { PostHeader } from './PostHeader';
import { Lock, Sparkles } from 'lucide-react';
import { useUser } from '../../contexts/UserProvider';
import { useTranslation } from '@/i18n';

interface CommunityPostCardLockedProps {
    post: CommunityPost;
}

export const CommunityPostCardLocked: React.FC<CommunityPostCardLockedProps> = ({ post }) => {
  const { t } = useTranslation();
    const { openPaywall } = useUser();

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative group">
            <PostHeader
                username={post.username}
                userPhotoURL={post.userPhotoURL}
                createdAt={post.createdAt}
                title={post.title} // Pass title to maintain layout consistency
            />

            <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                {/* Blurred Image - Use the actual image but blurred heavily */}
                <img
                    src={post.photos[0]}
                    alt={t('community.locked_content')}
                    className="h-full w-full object-cover blur-2xl opacity-60 scale-110"
                />

                {/* Lock Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm p-6 text-center">
                    <div className="bg-white p-4 rounded-full shadow-lg mb-4 ring-1 ring-black/5 animate-bounce-subtle">
                        <Lock className="h-6 w-6 text-dlp-brand-hover" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">{t('community.unlock_this_formula')}<Sparkles className="h-4 w-4 text-yellow-500" />
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 max-w-xs font-medium leading-relaxed">{t('community.join')}<strong>{t('community.doughlab_pro')}</strong> to see the exact flour blend, hydration, and process used for this bake.
                    </p>
                    <button
                        onClick={() => openPaywall('community')}
                        className="px-8 py-3 bg-dlp-brand-hover hover:bg-lime-700 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >{t('community.unlock_full_access')}</button>
                    <div className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold">{t('community.premium_content')}</div>
                </div>
            </div>

            {/* Fake Content Skeleton underneath to give weight */}
            <div className="p-4 space-y-3 opacity-20 pointer-events-none select-none blur-[2px]">
                <div className="h-6 bg-gray-900 rounded w-3/4"></div>
                <div className="h-4 bg-gray-400 rounded w-full"></div>
                <div className="h-4 bg-gray-400 rounded w-2/3"></div>
            </div>
        </div>
    );
};


