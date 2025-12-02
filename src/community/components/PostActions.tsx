import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
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
    const { user } = useUser();
    const { isLiked, toggleLike, loading: likeLoading } = useCommunityLike(post.id, user?.stripeCustomerId || 'unknown'); // Fallback ID

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
                        <span className="text-sm font-medium">{post.likes + (isLiked ? 1 : 0)}</span>
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

            {/* Share (Always free?) - Not in feature keys, assume free or hidden */}
            <button className="text-gray-400 hover:text-gray-600">
                <Share2 className="h-5 w-5" />
            </button>
        </div>
    );
};
