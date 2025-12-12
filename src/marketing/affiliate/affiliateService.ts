import { doc, getDoc, setDoc, updateDoc, increment, collection } from 'firebase/firestore';
import { db } from '@/firebase/db';
import { User } from '../../types';
import { useTranslation } from '@/i18n';

export interface AffiliateStats {
    clicks: number;
    conversions: number;
    revenue: number;
    payoutStatus: 'paid' | 'pending' | 'processing';
    nextPayoutDate: string;
}

export const generateAffiliateCode = (user: User): string => {
    // Simple heuristic: First 3 letters of name + random string
    const prefix = user.name ? user.name.substring(0, 3).toUpperCase() : 'DOUGH';
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${random}`;
};

export const getAffiliateStats = async (userId: string): Promise<AffiliateStats> => {
    if (!db) return { clicks: 0, conversions: 0, revenue: 0, payoutStatus: 'pending', nextPayoutDate: '' };

    try {
        const docRef = doc(db, 'affiliate_stats', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data() as AffiliateStats;
        } else {
            // Initialize if not exists
            const initialStats: AffiliateStats = {
                clicks: 0,
                conversions: 0,
                revenue: 0,
                payoutStatus: 'pending',
                nextPayoutDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString()
            };
            // Don't await this to keep UI fast, or await if critical
            await setDoc(docRef, initialStats);
            return initialStats;
        }
    } catch (error) {
        console.error('Error fetching affiliate stats:', error);
        return { clicks: 0, conversions: 0, revenue: 0, payoutStatus: 'pending', nextPayoutDate: '' };
    }
};

export const trackAffiliateClick = async (code: string) => {
    if (!db) return;

    // In a real scenario, we'd need to lookup the userId from the code first.
    // For now, we assume we can't easily do that without a 'codes' collection index.
    // This is a placeholder for the tracking logic.
    console.log(`[Affiliate] Tracking click for code: ${code}`);

    // Example logic if we knew the userId:
    // const userId = await lookupUserByCode(code);
    // if (userId) {
    //    const statsRef = doc(db, 'affiliate_stats', userId);
    //    await updateDoc(statsRef, { clicks: increment(1) });
    // }
};
