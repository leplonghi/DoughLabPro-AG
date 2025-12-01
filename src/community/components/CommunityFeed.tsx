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
                <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
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
        <div className="space-y-6">
            {posts.map((post, index) => {
                // Free users get 3 unlocked posts (first 3 in feed for now)
                const isLocked = !hasProAccess && index >= 3;

                if (isLocked) {
                    return <CommunityPostCardLocked key={post.id} post={post} />;
                }

                return <CommunityPostCard key={post.id} post={post} />;
            })}

            {hasMore && (
                <div className="text-center pt-4">
                    <button
                        onClick={loadMore}
                        disabled={loading}
                        className="px-6 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            )}

            {!hasMore && posts.length > 0 && (
                <div className="text-center py-8 text-slate-400 text-sm">
                    You've reached the end of the feed. Time to bake!
                </div>
            )}
        </div>
    );
};
