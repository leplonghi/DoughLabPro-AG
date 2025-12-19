import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    limit,
    Timestamp,
    where
} from 'firebase/firestore';
import { db } from '@/firebase/db';
import { CommunityBatch, User, LeaderboardUser } from '../../types';
import { useTranslation } from '@/i18n';

const POSTS_COLLECTION = 'community_posts';
const LEADERBOARD_COLLECTION = 'leaderboard';

export const getCommunityFeed = async (): Promise<CommunityBatch[]> => {
    if (!db) {
        console.warn('Firestore not initialized');
        return [];
    }

    try {
        const q = query(
            collection(db, POSTS_COLLECTION),
            orderBy('createdAt', 'desc'),
            limit(20)
        );

        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => {
            const data = doc.data();
            // Handle Timestamp objects if present
            let createdAt = data.createdAt;
            if (createdAt && typeof createdAt === 'object' && 'toDate' in createdAt) {
                createdAt = createdAt.toDate().toISOString();
            }

            return {
                id: doc.id,
                ...data,
                ownerDisplayName: data.ownerDisplayName || 'Baker',
                createdAt: createdAt || new Date().toISOString(),
            } as CommunityBatch;
        });
    } catch (error) {
        console.error('Error fetching community feed:', error);
        return [];
    }
};

export const createPost = async (post: Partial<CommunityBatch>, user: User): Promise<CommunityBatch> => {
    if (!db) throw new Error('Firestore not initialized');

    const newPost: Omit<CommunityBatch, 'id'> = {
        ownerDisplayName: user.name || 'Baker',
        title: post.title || 'Untitled',
        description: post.description || '',
        createdAt: new Date().toISOString(),
        baseConfig: post.baseConfig || {} as any,
        hydrationPercentage: post.hydrationPercentage || 0,
        likes: 0,
        commentCount: 0,
        isFeatured: false,
        photoUrl: post.photoUrl,
        ...post
    };

    const docRef = await addDoc(collection(db, POSTS_COLLECTION), newPost);

    return {
        id: docRef.id,
        ...newPost
    } as CommunityBatch;
};

export const getRankings = async (): Promise<LeaderboardUser[]> => {
    if (!db) return [];

    try {
        // In a real app, this would be a dedicated collection updated by Cloud Functions
        const q = query(
            collection(db, LEADERBOARD_COLLECTION),
            orderBy('points', 'desc'),
            limit(10)
        );

        const snapshot = await getDocs(q);
        if (snapshot.empty) {
            // Fallback mock if collection is empty to avoid empty UI
            return [
                { rank: 1, name: 'Marco P.', points: 1500, streak: 12 },
                { rank: 2, name: 'Sarah B.', points: 1200, streak: 8 },
                { rank: 3, name: 'Chef John', points: 1100, streak: 5 },
            ];
        }

        return snapshot.docs.map((doc, index) => ({
            rank: index + 1,
            ...doc.data()
        } as LeaderboardUser));
    } catch (error) {
        console.error('Error fetching rankings:', error);
        return [];
    }
};
