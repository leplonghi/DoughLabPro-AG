import { useState, useEffect, useCallback } from 'react';
import { communityStore } from '../store/communityStore';
import { CommunityPost } from '../types';
import { DocumentSnapshot } from 'firebase/firestore';
import { useUser } from '@/contexts/UserProvider';

export const useCommunityFeed = (filter: 'latest' | 'trending' | 'top' = 'latest') => {
    const { user, userLoading } = useUser();
    const [posts, setPosts] = useState<CommunityPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastDoc, setLastDoc] = useState<DocumentSnapshot | undefined>(undefined);
    const [hasMore, setHasMore] = useState(true);

    const fetchPosts = useCallback(async (isInitial = false) => {
        if (!user && !userLoading) {
            // If user is not logged in and not loading, we can't fetch if rules require auth.
            // But if rules permitted public read, we would proceed.
            // Given current rules require auth:
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            // If initial, ignore lastDoc state and pass undefined
            const result = await communityStore.getFeed(isInitial ? undefined : lastDoc, 10, filter);

            if (isInitial) {
                setPosts(result.posts);
            } else {
                setPosts(prev => [...prev, ...result.posts]);
            }

            setLastDoc(result.lastDoc);
            setHasMore(result.posts.length > 0);
        } catch (err: any) {
            console.error('Feed error:', err);
            // Provide more specific error messages if possible
            if (err.code === 'failed-precondition') {
                setError('The query requires an index. It is likely still being built by Firestore. Please try again in 5-10 minutes.');
            } else if (err.code === 'permission-denied') {
                setError('You do not have permission to view this feed. Please ensure you are signed in.');
            } else {
                setError(err.message || 'Failed to load feed');
            }
        } finally {
            setLoading(false);
        }
    }, [lastDoc, filter, user, userLoading]);

    useEffect(() => {
        if (userLoading) return;

        // Reset and fetch when filter changes
        setPosts([]);
        setLastDoc(undefined);
        setHasMore(true);
        fetchPosts(true);
    }, [filter, user, userLoading]);

    const loadMore = () => {
        if (!loading && hasMore) {
            fetchPosts();
        }
    };

    return { posts, loading, error, hasMore, loadMore, refresh: () => fetchPosts(true) };
};
