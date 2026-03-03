import { db } from '@/firebase/db';
import { doc, setDoc, deleteDoc, getDocs, collection } from 'firebase/firestore';

export async function addFavorite(userId: string, styleId: string) {
    if (!db) return;
    return setDoc(doc(db, 'users', userId, 'favorites', styleId), {
        styleId,
        addedAt: new Date(),
    });
}

export async function removeFavorite(userId: string, styleId: string) {
    if (!db) return;
    return deleteDoc(doc(db, 'users', userId, 'favorites', styleId));
}

export async function getFavorites(userId: string): Promise<string[]> {
    if (!db) return [];
    const snap = await getDocs(collection(db, 'users', userId, 'favorites'));
    return snap.docs.map(d => d.id);
}
