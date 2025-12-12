import { useState, useEffect } from 'react';
import { communityStore } from '../store/communityStore';
import { useTranslation } from '@/i18n';

export const useCommunityFollow = (followerUid?: string, targetUid?: string) => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!followerUid || !targetUid) return;

        const checkFollow = async () => {
            const status = await communityStore.checkFollowStatus(followerUid, targetUid);
            setIsFollowing(status);
        };
        checkFollow();
    }, [followerUid, targetUid]);

    const toggleFollow = async () => {
        if (!followerUid || !targetUid) return;
        setLoading(true);
        try {
            const newStatus = await communityStore.toggleFollow(followerUid, targetUid);
            setIsFollowing(newStatus);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return { isFollowing, toggleFollow, loading };
};
