import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { CommunityPost } from '../types';
import { useCommunityLike } from '../hooks/useCommunityLike';
import { useUser } from '../../contexts/UserProvider';
import { CloneButton } from './CloneButton';
import { LockFeature } from '../../components/auth/LockFeature';

interface PostActionsProps {
    post: CommunityPost;
    onCommentClick: () => void;
    commentCount?: number;
}

export const PostActions: React.FC<PostActionsProps> = ({ post, onCommentClick, commentCount }) => {
    const { user, isFavorite, toggleFavorite } = useUser();
    const { isLiked, toggleLike, loading: likeLoading, loaded, initialLiked } = useCommunityLike(post.id, user?.stripeCustomerId || 'unknown');

    const displayLikes = loaded
        ? post.likes + (isLiked ? 1 : 0) - (initialLiked ? 1 : 0)
        : post.likes;

    const isSaved = isFavorite(post.id);

    const handleBookmark = async () => {
        if (!user) return; // Hook handles auth requirement usually, but safe check
        await toggleFavorite({
            id: post.id,
            type: 'community_post',
            title: post.title || 'Untitled Bake',
            metadata: {
                username: post.username,
                photo: post.photos?.[0]
            }
        });
    };

    return (
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
            <div className="flex items-center gap-6">
                {/* Like */}
                <LockFeature featureKey="community.like" mode="tooltip" customMessage="Unlock full Community">
                    <button
                        onClick={toggleLike}
                        disabled={likeLoading}
                        className={`flex items-center gap-1.5 transition-colors ${isLiked ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'}`}
                    >
                        <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                        <span className="text-sm font-medium">{displayLikes}</span>
                    </button>
                </LockFeature>

                {/* Comment */}
                <LockFeature featureKey="community.comment" mode="tooltip" customMessage="Unlock full Community">
                    <button
                        onClick={onCommentClick}
                        className="flex items-center gap-1.5 text-gray-600 hover:text-lime-600 transition-colors"
                    >
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-sm font-medium">{commentCount ?? post.comments}</span>
                    </button>
                </LockFeature>

                {/* Clone */}
                <CloneButton post={post} />
            </div>

            <div className="flex items-center gap-4">
                {/* Bookmark */}
                <button
                    onClick={handleBookmark}
                    className={`transition-colors ${isSaved ? 'text-lime-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    <Bookmark className={`h-5 w-5 ${isSaved ? 'fill-current' : ''}`} />
                </button>

                {/* Share */}
                <button className="text-gray-400 hover:text-gray-600">
                    <Share2 className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};
