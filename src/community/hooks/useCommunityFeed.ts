import { useState, useEffect, useCallback } from 'react';
import { communityStore } from '../store/communityStore';
import { CommunityPost } from '../types';
import { DocumentSnapshot } from 'firebase/firestore';

export const useCommunityFeed = () => {
    const [posts, setPosts] = useState<CommunityPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastDoc, setLastDoc] = useState<DocumentSnapshot | undefined>(undefined);
    const [hasMore, setHasMore] = useState(true);

    const fetchPosts = useCallback(async (isInitial = false) => {
        try {
            setLoading(true);
            const result = await communityStore.getFeed(isInitial ? undefined : lastDoc);

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
    }, [lastDoc]);

    useEffect(() => {
        fetchPosts(true);
    }, []);

    const loadMore = () => {
        if (!loading && hasMore) {
            fetchPosts();
        }
    };

    return { posts, loading, error, hasMore, loadMore, refresh: () => fetchPosts(true) };
};
