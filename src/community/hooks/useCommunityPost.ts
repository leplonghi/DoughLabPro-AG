import { useState, useEffect } from 'react';
import { communityStore } from '../store/communityStore';
import { CommunityPost } from '../types';
import { useTranslation } from '@/i18n';

export const useCommunityPost = (postId: string) => {
    const [post, setPost] = useState<CommunityPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!postId) return;

        const fetchPost = async () => {
            try {
                setLoading(true);
                const data = await communityStore.getPost(postId);
                setPost(data);
            } catch (err) {
                console.error(err);
                setError('Failed to load post');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    return { post, loading, error };
};
