import { useState, useEffect } from 'react';
import { communityStore } from '../store/communityStore';
import { useTranslation } from '@/i18n';

export const useCommunityLike = (postId: string, uid?: string) => {
    const [isLiked, setIsLiked] = useState(false);
    const [initialLiked, setInitialLiked] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let mounted = true;
        if (!postId || !uid) return;

        const checkLike = async () => {
            const status = await communityStore.checkLikeStatus(postId, uid);
            if (mounted) {
                setIsLiked(status);
                setInitialLiked(status);
                setLoaded(true);
            }
        };
        checkLike();

        return () => { mounted = false; };
    }, [postId, uid]);

    const toggleLike = async () => {
        if (!uid) return;

        // Optimistic update
        const previousState = isLiked;
        setIsLiked(!previousState);

        setLoading(true);
        try {
            const newStatus = await communityStore.toggleLike(postId, uid);
            // Verify server state matches (it should)
            setIsLiked(newStatus);
        } catch (err) {
            console.error(err);
            // Revert on error
            setIsLiked(previousState);
        } finally {
            setLoading(false);
        }
    };

    return { isLiked, toggleLike, loading, loaded, initialLiked };
};
