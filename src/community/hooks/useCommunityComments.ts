import { useState, useEffect } from 'react';
import { communityStore } from '../store/communityStore';
import { CommunityComment } from '../types';
import { Timestamp } from 'firebase/firestore';
import { useTranslation } from '@/i18n';

export const useCommunityComments = (postId: string) => {
    const [comments, setComments] = useState<CommunityComment[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchComments = async (silent = false) => {
        if (!postId) return;
        try {
            if (!silent) setLoading(true);
            const data = await communityStore.getComments(postId);
            setComments(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [postId]);

    const addComment = async (uid: string, username: string, text: string, userPhotoURL?: string) => {
        const tempId = 'temp_' + Date.now();
        const optimisticComment: CommunityComment = {
            id: tempId,
            postId,
            uid,
            username,
            userPhotoURL,
            text,
            createdAt: Timestamp.now()
        };

        // Optimistic update
        setComments(prev => [...prev, optimisticComment]);

        try {
            await communityStore.addComment({
                postId,
                uid,
                username,
                text,
                userPhotoURL
            });
            // Fetch to get the real ID and server timestamp
            fetchComments(true);
        } catch (err) {
            console.error(err);
            // Revert on error
            setComments(prev => prev.filter(c => c.id !== tempId));
            throw err;
        }
    };

    return { comments, loading, addComment };
};
