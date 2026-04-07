import { doc, getDoc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/db';
import { User } from '../../types';

export interface AffiliateStats {
    clicks: number;
    conversions: number;
    revenue: number;
    payoutStatus: 'paid' | 'pending' | 'processing';
    nextPayoutDate: string;
    code?: string;
    updatedAt?: string;
}

function sanitizePrefix(name?: string): string {
    const cleaned = (name || 'DOUGH')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9]/g, '')
        .toUpperCase();

    return (cleaned.slice(0, 5) || 'DOUGH').padEnd(5, 'X');
}

function stableSuffix(seed: string): string {
    let hash = 0;
    for (let i = 0; i < seed.length; i += 1) {
        hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
    }

    return Math.abs(hash).toString(36).toUpperCase().slice(0, 6).padStart(6, '0');
}

function getAffiliateStatsDoc(userId: string) {
    return doc(db!, 'affiliate_stats', userId);
}

function getAffiliateCodeDoc(code: string) {
    return doc(db!, 'affiliate_codes', code);
}

function buildInitialStats(code: string): AffiliateStats {
    const nextPayoutDate = new Date();
    nextPayoutDate.setMonth(nextPayoutDate.getMonth() + 1);

    return {
        clicks: 0,
        conversions: 0,
        revenue: 0,
        payoutStatus: 'pending',
        nextPayoutDate: nextPayoutDate.toISOString(),
        code,
        updatedAt: new Date().toISOString(),
    };
}

export const generateAffiliateCode = (user: User): string => {
    const seed = user.uid || user.email || user.name || 'doughlab';
    return `${sanitizePrefix(user.name)}-${stableSuffix(seed)}`;
};

export const ensureAffiliateProfile = async (user: User): Promise<string | null> => {
    if (!db || !user.uid) return null;

    const code = generateAffiliateCode(user);
    const statsRef = getAffiliateStatsDoc(user.uid);
    const codeRef = getAffiliateCodeDoc(code);
    const statsSnap = await getDoc(statsRef);

    if (!statsSnap.exists()) {
        await setDoc(statsRef, buildInitialStats(code), { merge: true });
    }

    await setDoc(codeRef, {
        code,
        ownerUid: user.uid,
        ownerName: user.name || 'DoughLab Pro',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
    }, { merge: true });

    return code;
};

export const getAffiliateStats = async (userId: string): Promise<AffiliateStats> => {
    if (!db || !userId) {
        return buildInitialStats('');
    }

    try {
        const docRef = getAffiliateStatsDoc(userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data() as AffiliateStats;
        }

        const initialStats = buildInitialStats('');
        await setDoc(docRef, initialStats, { merge: true });
        return initialStats;
    } catch (error) {
        console.error('Error fetching affiliate stats:', error);
        return buildInitialStats('');
    }
};

export const trackAffiliateClick = async (code: string) => {
    if (!db || !code) return;

    try {
        const dedupeKey = `doughlab_affiliate_click_${code}_${new Date().toISOString().slice(0, 10)}`;
        if (typeof window !== 'undefined' && localStorage.getItem(dedupeKey)) {
            return;
        }

        const codeRef = getAffiliateCodeDoc(code);
        const codeSnap = await getDoc(codeRef);
        if (!codeSnap.exists()) return;

        const ownerUid = codeSnap.data()?.ownerUid as string | undefined;
        if (!ownerUid) return;

        const statsRef = getAffiliateStatsDoc(ownerUid);
        await setDoc(statsRef, buildInitialStats(code), { merge: true });
        await updateDoc(statsRef, {
            code,
            clicks: increment(1),
            updatedAt: new Date().toISOString(),
            lastClickAt: serverTimestamp(),
        });
        await updateDoc(codeRef, {
            updatedAt: serverTimestamp(),
            lastClickAt: serverTimestamp(),
        });

        if (typeof window !== 'undefined') {
            localStorage.setItem(dedupeKey, '1');
        }
    } catch (error) {
        console.error('Error tracking affiliate click:', error);
    }
};
