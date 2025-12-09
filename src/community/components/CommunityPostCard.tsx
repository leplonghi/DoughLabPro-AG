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
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={handleCardClick}
        >
            <PostHeader
                uid={post.uid}
                username={post.username}
                userPhotoURL={post.userPhotoURL}
                createdAt={post.createdAt}
                title={post.title}
            />

            <PostPhotos photos={post.photos} />

            <div className="p-4 pb-2">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{post.title || 'Untitled Bake'}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{post.description}</p>
            </div>

            <PostTechnicalPanel post={post} />

            <PostMethod post={post} />

            <PostActions
                post={post}
                commentCount={commentCount}
                onCommentClick={() => setShowComments(!showComments)}
            />

            {showComments && (
                <PostComments
                    postId={post.id}
                    onCommentAdded={() => setCommentCount(prev => prev + 1)}
                />
            )}
        </div>
    );
};
