import { useState, useEffect } from 'react';
import { communityStore } from '../store/communityStore';

export const useCommunityLike = (postId: string, uid?: string) => {
    const [isLiked, setIsLiked] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!postId || !uid) return;

        const checkLike = async () => {
            const status = await communityStore.checkLikeStatus(postId, uid);
            setIsLiked(status);
        };
        checkLike();
    }, [postId, uid]);

    const toggleLike = async () => {
        if (!uid) return;
        setLoading(true);
        try {
            const newStatus = await communityStore.toggleLike(postId, uid);
            setIsLiked(newStatus);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return { isLiked, toggleLike, loading };
};
