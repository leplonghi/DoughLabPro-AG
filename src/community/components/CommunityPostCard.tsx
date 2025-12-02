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
            className="bg-dlp-bg-card rounded-lg shadow-dlp-sm border border-dlp-border overflow-hidden hover:shadow-dlp-md transition-shadow cursor-pointer"
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
                <h3 className="font-semibold text-lg text-dlp-text-primary mb-1">{post.title || 'Untitled Bake'}</h3>
                <p className="text-sm text-dlp-text-secondary line-clamp-2">{post.description}</p>
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
