import React, { useState } from 'react';
import { CommunityPost } from '../types';
import { PostHeader } from './PostHeader';
import { PostPhotos } from './PostPhotos';
import { PostTechnicalPanel } from './PostTechnicalPanel';
import { PostMethod } from './PostMethod';
import { PostActions } from './PostActions';
import { PostComments } from './PostComments';
import { useRouter } from '../../contexts/RouterContext';

interface CommunityPostCardProps {
    post: CommunityPost;
}

export const CommunityPostCard: React.FC<CommunityPostCardProps> = ({ post }) => {
    const [showComments, setShowComments] = useState(false);
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
            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={handleCardClick}
        >
            <PostHeader
                username={post.username}
                userPhotoURL={post.userPhotoURL}
                createdAt={post.createdAt}
                title={post.title}
            />

            <PostPhotos photos={post.photos} />

            <div className="p-4 pb-2">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{post.title || 'Untitled Bake'}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{post.description}</p>
            </div>

            <PostTechnicalPanel post={post} />

            <PostMethod post={post} />

            <PostActions
                post={post}
                onCommentClick={() => setShowComments(!showComments)}
            />

            {showComments && <PostComments postId={post.id} />}
        </div>
    );
};
