import {
    collection,
    getDocs,
    query,
    where,
    orderBy,
    limit
} from 'firebase/firestore';
import { db } from '../../firebase/db';
import { CommunityRanking } from '../types';
import { useTranslation } from '@/i18n';

const RANKINGS_COLLECTION = 'community_rankings';

export const communityRankingStore = {
    getLatestRanking: async (period: 'weekly' | 'monthly' | 'all_time') => {
        const q = query(
            collection(db, RANKINGS_COLLECTION),
            where('period', '==', period),
            orderBy('generatedAt', 'desc'),
            limit(1)
        );

        const snapshot = await getDocs(q);
        if (snapshot.empty) return null;

        return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as CommunityRanking;
    }
};
