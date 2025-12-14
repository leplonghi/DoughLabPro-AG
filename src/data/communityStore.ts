import { db } from '@/firebase/db';
import { CommunityBatch } from '@/types';
import i18n from '@/i18n';
import {
    collection,
    setDoc,
    deleteDoc,
    getDocs,
    query,
    orderBy,
    limit,
    doc,
    getDoc
} from 'firebase/firestore';

const COLLECTION_NAME = 'community_batches';

const t = i18n.t.bind(i18n);

export const saveCommunityBatch = async (batch: CommunityBatch): Promise<void> => {
    if (!db) throw new Error(t('community.firestore_not_initialized'));

    try {
        // Use setDoc with merge: true to update existing or create new with the specific ID
        await setDoc(doc(db, COLLECTION_NAME, batch.id), {
            ...batch,
            updatedAt: new Date().toISOString()
        }, { merge: true });
    } catch (e) {
        console.error("Error saving community batch: ", e);
        throw e;
    }
};

export const deleteCommunityBatch = async (id: string): Promise<void> => {
    if (!db) throw new Error(t('community.firestore_not_initialized_2'));

    try {
        await deleteDoc(doc(db, COLLECTION_NAME, id));
    } catch (e) {
        console.error("Error deleting community batch: ", e);
        throw e;
    }
};

export const getAllCommunityBatches = async (limitCount = 20): Promise<CommunityBatch[]> => {
    if (!db) return [];

    try {
        const q = query(
            collection(db, COLLECTION_NAME),
            orderBy('createdAt', 'desc'),
            limit(limitCount)
        );

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as CommunityBatch));
    } catch (e) {
        console.error("Error fetching community batches: ", e);
        return [];
    }
};

export const getCommunityBatchById = async (id: string): Promise<CommunityBatch | null> => {
    if (!db) return null;

    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() } as CommunityBatch;
        } else {
            return null;
        }
    } catch (e) {
        console.error("Error fetching batch by id: ", e);
        return null;
    }
};