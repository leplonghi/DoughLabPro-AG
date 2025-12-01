import { useState, useEffect } from 'react';
import { communityRankingStore } from '../store/communityRankingStore';
import { CommunityRanking } from '../types';

export const useCommunityRanking = (period: 'weekly' | 'monthly' | 'all_time' = 'weekly') => {
    const [ranking, setRanking] = useState<CommunityRanking | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRanking = async () => {
            try {
                setLoading(true);
                const data = await communityRankingStore.getLatestRanking(period);
                setRanking(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRanking();
    }, [period]);

    return { ranking, loading };
};
