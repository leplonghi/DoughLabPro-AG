import React from 'react';
import { CommunityBatch } from '../../types';
import { useTranslation } from '@/i18n';

interface CommunityPostProps {
    post: CommunityBatch;
    onLike: (id: string) => void;
    onComment: (id: string) => void;
}

export const CommunityPost: React.FC<CommunityPostProps> = ({ post, onLike, onComment }) => {
  const { t } = useTranslation();
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden mb-6">
            <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold">
                    {post.ownerDisplayName.charAt(0)}
                </div>
                <div>
                    <h4 className="text-sm font-bold text-zinc-100">{post.ownerDisplayName}</h4>
                    <p className="text-xs text-zinc-500">{new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
                {post.isFeatured && (
                    <span className="ml-auto bg-yellow-500/20 text-yellow-500 text-[10px] px-2 py-0.5 rounded uppercase font-bold">{t('community.featured')}</span>
                )}
            </div>

            {post.photoUrl && (
                <div className="w-full aspect-video bg-zinc-950">
                    <img src={post.photoUrl} alt={post.title} className="w-full h-full object-cover" />
                </div>
            )}

            <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{post.description}</p>

                <div className="flex items-center gap-4 text-sm text-zinc-400">
                    <button onClick={() => onLike(post.id)} className="flex items-center gap-1 hover:text-lime-400 transition-colors">
                        <span>❤️</span> {post.likes}
                    </button>
                    <button onClick={() => onComment(post.id)} className="flex items-center gap-1 hover:text-sky-400 transition-colors">
                        <span>💬</span> {post.commentCount}
                    </button>
                    <div className="ml-auto flex items-center gap-2">
                        <span className="bg-zinc-800 px-2 py-1 rounded text-xs">{post.hydrationPercentage}% Hydration</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
