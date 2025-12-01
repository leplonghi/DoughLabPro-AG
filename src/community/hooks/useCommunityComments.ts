import { useState, useEffect } from 'react';
import { communityStore } from '../store/communityStore';
import { CommunityComment } from '../types';

export const useCommunityComments = (postId: string) => {
    const [comments, setComments] = useState<CommunityComment[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchComments = async () => {
        if (!postId) return;
        try {
            setLoading(true);
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
        try {
            await communityStore.addComment({
                postId,
                uid,
                username,
                text,
                userPhotoURL
            });
            fetchComments(); // Refresh
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    return { comments, loading, addComment };
};
