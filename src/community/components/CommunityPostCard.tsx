
import React, { useState } from 'react';
import { CommunityPost } from '../types';
import { PostHeader } from './PostHeader';
import { PostPhotos } from './PostPhotos';
import { PostTechnicalPanel } from './PostTechnicalPanel';
import { PostActions } from './PostActions';
import { PostComments } from './PostComments';
import { useRouter } from '../../contexts/RouterContext';
import { useTranslation } from '@/i18n';

interface CommunityPostCardProps {
    post: CommunityPost;
}

export const CommunityPostCard: React.FC<CommunityPostCardProps> = ({ post }) => {
  const { t } = useTranslation();
    const [showComments, setShowComments] = useState(false);
    const [commentCount, setCommentCount] = useState(post.comments);
    const { navigate } = useRouter();

    const handleCardClick = (e: React.MouseEvent) => {
        // Prevent navigation if clicking interactive elements
        if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('input')) {
            return;
        }
        navigate('community/detail', post.id);
    };

    return (
        <div
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 group"
            onClick={handleCardClick}
        >
            <PostHeader
                uid={post.uid}
                username={post.username}
                userPhotoURL={post.userPhotoURL}
                createdAt={post.createdAt}
                title={post.title} // Pass title to header if we want it there, or handle below
            />

            {/* Photo Section - Full Bleed */}
            <div className="relative bg-gray-100">
                <PostPhotos photos={post.photos} />

                {/* Method Badge Overlay */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border border-white/10 shadow-sm">
                    {post.method?.replace(/_/g, ' ') || 'Direct Method'}
                </div>
            </div>

            {/* Technical Specs Scrollable Row */}
            <div className="border-b border-gray-50">
                <PostTechnicalPanel post={post} />
            </div>

            {/* Content & Actions */}
            <div className="p-4 pt-3">

                {/* Title & Description */}
                <div className="mb-4">
                    <h3 className="font-bold text-lg text-gray-900 leading-tight mb-1.5 group-hover:text-lime-700 transition-colors">
                        {post.title || 'Untitled Bake'}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                        {post.description}
                    </p>
                </div>

                {/* Actions Bar */}
                <PostActions
                    post={post}
                    commentCount={commentCount}
                    onCommentClick={() => setShowComments(!showComments)}
                />
            </div>

            {showComments && (
                <div className="bg-gray-50/50 border-t border-gray-100">
                    <PostComments
                        postId={post.id}
                        onCommentAdded={() => setCommentCount(prev => prev + 1)}
                    />
                </div>
            )}
        </div>
    );
};


