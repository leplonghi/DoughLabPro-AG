import React from 'react';
import { Copy, Loader2 } from 'lucide-react';
import { useCommunityClone } from '../hooks/useCommunityClone';
import { CommunityPost } from '../types';
import { LockFeature } from '../../components/auth/LockFeature';

interface CloneButtonProps {
    post: CommunityPost;
}

export const CloneButton: React.FC<CloneButtonProps> = ({ post }) => {
    const { clonePost, loading } = useCommunityClone();

    return (
        <LockFeature featureKey="community.clone" mode="tooltip" customMessage="Unlock full Community">
            <button
                onClick={() => clonePost(post)}
                disabled={loading}
                className="flex items-center gap-1.5 text-gray-600 hover:text-lime-600 transition-colors disabled:opacity-50"
            >
                {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                    <Copy className="h-5 w-5" />
                )}
                <span className="text-sm font-medium">{post.clones || 0}</span>
            </button>
        </LockFeature>
    );
};
