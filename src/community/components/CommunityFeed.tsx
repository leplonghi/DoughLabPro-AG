import React from 'react';
import { useCommunityFeed } from '../hooks/useCommunityFeed';
import { CommunityPostCard } from './CommunityPostCard';
import { CommunityPostCardLocked } from './CommunityPostCardLocked';
import { useUser } from '../../contexts/UserProvider';
import { Loader2 } from 'lucide-react';

interface CommunityFeedProps {
    filter?: 'latest' | 'trending' | 'top';
}

export const CommunityFeed: React.FC<CommunityFeedProps> = ({ filter = 'latest' }) => {
    const { posts, loading, hasMore, loadMore, error } = useCommunityFeed(filter as 'latest' | 'trending' | 'top');
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
            <div className="text-center py-12 bg-red-50 rounded-lg border border-red-100 p-6">
                <p className="text-red-600 font-medium mb-2">Something went wrong</p>
                <p className="text-red-500 text-sm mb-4">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="text-red-700 underline text-sm hover:text-red-800"
                >
                    Try Reloading
                </button>
            </div>
        );
    }

    if (!loading && posts.length === 0) {
        return (
            <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🥖</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
                <p className="text-gray-500 max-w-sm mx-auto mb-6">
                    Be the first to share your bake with the community!
                </p>
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
