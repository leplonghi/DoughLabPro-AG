import { db } from '@/firebase/db';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy, limit } from 'firebase/firestore';
import { SavedCalculation } from '@/types/savedCalculation';

// Safe wrapper around getting calculations collection ref
const getUserCalcRef = (userId: string) => {
    if (!db) throw new Error("Firestore not initialized");
    return collection(db, 'users', userId, 'calculations');
};

export async function saveCalculation(
    userId: string,
    data: Omit<SavedCalculation, 'id' | 'userId' | 'createdAt' | 'updatedAt'>
) {
    if (!db) return null;
    return addDoc(getUserCalcRef(userId), {
        ...data,
        userId,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
}

export async function getCalculationHistory(userId: string, maxResults = 20): Promise<SavedCalculation[]> {
    if (!db) return [];
    const q = query(getUserCalcRef(userId), orderBy('createdAt', 'desc'), limit(maxResults));
    const snap = await getDocs(q);

    return snap.docs.map(d => {
        const data = d.data();
        return {
            id: d.id,
            ...data,
            // Convert Firestore timestamps back to Date objects
            createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(data.createdAt),
            updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate() : new Date(data.updatedAt),
        } as SavedCalculation;
    });
}

export async function deleteCalculation(userId: string, calcId: string) {
    if (!db) return;
    return deleteDoc(doc(db, 'users', userId, 'calculations', calcId));
}

export async function updateCalculationNotes(userId: string, calcId: string, notes: string) {
    if (!db) return;
    return updateDoc(doc(db, 'users', userId, 'calculations', calcId), {
        notes,
        updatedAt: new Date()
    });
}
