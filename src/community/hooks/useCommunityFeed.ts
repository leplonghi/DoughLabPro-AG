import { useState, useEffect, useCallback } from 'react';
import { communityStore } from '../store/communityStore';
import { CommunityPost } from '../types';
import { DocumentSnapshot } from 'firebase/firestore';

export const useCommunityFeed = (filter: 'latest' | 'trending' | 'top' = 'latest') => {
    const [posts, setPosts] = useState<CommunityPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastDoc, setLastDoc] = useState<DocumentSnapshot | undefined>(undefined);
    const [hasMore, setHasMore] = useState(true);

    const fetchPosts = useCallback(async (isInitial = false) => {
        try {
            setLoading(true);
            // If initial, ignore lastDoc state and pass undefined
            const result = await communityStore.getFeed(isInitial ? undefined : lastDoc, 10, filter);

            if (isInitial) {
                setPosts(result.posts);
            } else {
                setPosts(prev => [...prev, ...result.posts]);
            }

            setLastDoc(result.lastDoc);
            setHasMore(result.posts.length > 0);
        } catch (err) {
            console.error(err);
            setError('Failed to load feed');
        } finally {
            setLoading(false);
        }
    }, [lastDoc, filter]);

    useEffect(() => {
        // Reset and fetch when filter changes
        setPosts([]);
        setLastDoc(undefined);
        setHasMore(true);
        fetchPosts(true);
    }, [filter]);

    const loadMore = () => {
        if (!loading && hasMore) {
            fetchPosts();
        }
    };

    return { posts, loading, error, hasMore, loadMore, refresh: () => fetchPosts(true) };
};
