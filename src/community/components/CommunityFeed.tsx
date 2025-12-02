import React from 'react';
import { useCommunityFeed } from '../hooks/useCommunityFeed';
import { CommunityPostCard } from './CommunityPostCard';
import { CommunityPostCardLocked } from './CommunityPostCardLocked';
import { useUser } from '../../contexts/UserProvider';
import { Loader2 } from 'lucide-react';

export const CommunityFeed: React.FC = () => {
    const { posts, loading, hasMore, loadMore, error } = useCommunityFeed();
    const { hasProAccess } = useUser();

    if (loading && posts.length === 0) {
        return (
            <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-dlp-accent" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12 text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
                {posts.map((post, index) => {
                    // Free users get 3 unlocked posts (first 3 in feed for now)
                    const isLocked = !hasProAccess && index >= 3;

                    if (isLocked) {
                        return <CommunityPostCardLocked key={post.id} post={post} />;
                    }

                    return <CommunityPostCard key={post.id} post={post} />;
                })}
            </div>

            {hasMore && (
                <div className="text-center pt-4">
                    <button
                        onClick={loadMore}
                        disabled={loading}
                        className="px-6 py-2 bg-dlp-bg-card border border-dlp-border rounded-full text-sm font-medium text-dlp-text-secondary hover:bg-dlp-bg-muted transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            )}

            {!hasMore && posts.length > 0 && (
                <div className="text-center py-8 text-dlp-text-muted text-sm">
                    You've reached the end of the feed. Time to bake!
                </div>
            )}
        </div>
    );
};
