
import React from 'react';
import { useCommunityFeed } from '../hooks/useCommunityFeed';
import { CommunityPostCard } from './CommunityPostCard';
import { CommunityPostCardLocked } from './CommunityPostCardLocked';
import { useUser } from '../../contexts/UserProvider';
import { Loader2, RefreshCcw } from 'lucide-react';
import { PostSkeleton } from './PostSkeleton';
import { useTranslation } from '@/i18n';

interface CommunityFeedProps {
    filter?: 'latest' | 'trending' | 'top';
}

export const CommunityFeed: React.FC<CommunityFeedProps> = ({ filter = 'latest' }) => {
  const { t } = useTranslation();
    const { posts, loading, hasMore, loadMore, error, refresh } = useCommunityFeed(filter as 'latest' | 'trending' | 'top');
    const { hasProAccess } = useUser();

    // Initial Loading State
    if (loading && posts.length === 0) {
        return (
            <div className="space-y-6">
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12 bg-red-50 rounded-2xl border border-red-100 p-8">
                <div className="bg-red-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">⚠️</span>
                </div>
                <p className="text-red-900 font-bold mb-2">{t('community.unable_to_load_feed')}</p>
                <p className="text-red-600/80 text-sm mb-6 max-w-sm mx-auto">{error}</p>
                <button
                    onClick={refresh}
                    className="flex items-center gap-2 mx-auto bg-white border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                >
                    <RefreshCcw className="h-4 w-4" />{t('community.try_again')}</button>
            </div>
        );
    }

    if (!loading && posts.length === 0) {
        return (
            <div className="text-center py-20 bg-gray-50/50 rounded-3xl border border-dashed border-gray-200">
                <div className="h-20 w-20 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto mb-6 text-4xl transform -rotate-12">
                    🥖
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('community.the_oven_is_cold')}</h3>
                <p className="text-gray-500 max-w-sm mx-auto mb-8">
                    No posts found here yet. Be the first to break the ice (and the bread)!
                </p>
                <button
                    onClick={() => window.location.hash = '#/community/create'}
                    className="text-dlp-brand-hover font-semibold hover:text-lime-700 hover:underline"
                >{t('community.create_a_post')}</button>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col gap-8">
                {posts.map((post, index) => {
                    // Free users get 3 unlocked posts (first 3 in feed for now)
                    // Note: Ideally backend should handle this, but frontend enforcement is okay for UX demo
                    const isLocked = !hasProAccess && index >= 3;

                    if (isLocked) {
                        return <CommunityPostCardLocked key={post.id} post={post} />;
                    }

                    return <CommunityPostCard key={post.id} post={post} />;
                })}
            </div>

            {hasMore ? (
                <div className="text-center pt-8 pb-12">
                    <button
                        onClick={loadMore}
                        disabled={loading}
                        className="group flex flex-col items-center gap-2 mx-auto text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
                    >
                        {loading ? (
                            <Loader2 className="h-6 w-6 animate-spin text-dlp-brand-hover" />
                        ) : (
                            <>
                                <span className="font-medium text-sm">{t('community.load_more_bakes')}</span>
                                <div className="h-1 w-12 bg-gray-200 rounded-full group-hover:bg-gray-300 transition-colors" />
                            </>
                        )}
                    </button>
                </div>
            ) : (
                <div className="text-center py-12 text-gray-300">
                    <div className="h-1 w-24 bg-gray-100 rounded-full mx-auto mb-4" />
                    <p className="text-xs uppercase tracking-widest">{t('community.end_of_feed')}</p>
                </div>
            )}
        </div>
    );
};


