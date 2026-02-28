import React, { createContext, useContext, ReactNode, useState, useEffect, useCallback, useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/firebase/db';
import { collection, query, onSnapshot, addDoc, updateDoc, deleteDoc, doc, Timestamp, orderBy } from 'firebase/firestore';
import { useToast } from '@/components/ToastProvider';
import { useTranslation } from '@/i18n';
import { logger } from '@/utils/logger';
import { useUser } from '@/contexts/UserProvider';

// Placeholder interface - expand as needed
// Ideally this should be in @/types if used broadly
export interface FlourInventoryItem {
    id: string;
    name: string;
    brand?: string;
    protein: number;
    type: string;
    quantity?: number;
    unit?: string;
    createdAt: string;
    updatedAt: string;
}

interface FloursContextType {
    flours: FlourInventoryItem[];
    addFlour: (flour: Omit<FlourInventoryItem, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
    updateFlour: (id: string, updates: Partial<FlourInventoryItem>) => Promise<void>;
    deleteFlour: (id: string) => Promise<void>;
    preferredFlourId: string | null;
    setPreferredFlour: (id: string | null) => void;
}

const FloursContext = createContext<FloursContextType | undefined>(undefined);

export const FloursProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { t } = useTranslation();
    const { firebaseUser } = useAuth();
    const { addToast } = useToast();
    const { preferredFlourId, setPreferredFlour } = useUser();

    const [flours, setFlours] = useState<FlourInventoryItem[]>([]);

    // Firestore subscription
    useEffect(() => {
        if (!firebaseUser || !db) {
            setFlours([]);
            return () => { };
        }

        const collRef = collection(db, 'users', firebaseUser.uid, 'flours');
        const q = query(collRef, orderBy('createdAt', 'desc'));

        return onSnapshot(
            q,
            (snapshot) => {
                const items = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    Object.keys(data).forEach((key) => {
                        if (data[key] instanceof Timestamp) {
                            data[key] = data[key].toDate().toISOString();
                        }
                    });
                    return { id: doc.id, ...data } as FlourInventoryItem;
                });
                setFlours(items);
            },
            (error) => {
                logger.error('Error listening to flours:', error);
            }
        );
    }, [firebaseUser]);

    const addFlour = useCallback(
        async (flourData: Omit<FlourInventoryItem, 'id' | 'createdAt' | 'updatedAt'>) => {
            const now = new Date().toISOString();
            const data = { ...flourData, createdAt: now, updatedAt: now };

            if (firebaseUser && db) {
                const collRef = collection(db, 'users', firebaseUser.uid, 'flours');
                await addDoc(collRef, data);
                addToast('Flour added to inventory', 'success');
            } else {
                const newId = `mock-flour-${Date.now()}`;
                setFlours(prev => [{ ...data, id: newId }, ...prev]);
                addToast('Flour added to inventory', 'success');
            }
        },
        [firebaseUser, addToast]
    );

    const updateFlour = useCallback(
        async (id: string, updates: Partial<FlourInventoryItem>) => {
            const update = { ...updates, updatedAt: new Date().toISOString() };

            if (firebaseUser && db) {
                const docRef = doc(db, 'users', firebaseUser.uid, 'flours', id);
                await updateDoc(docRef, update);
            } else {
                setFlours(prev => prev.map(f => f.id === id ? { ...f, ...update } : f));
            }
            addToast('Flour updated', 'info');
        },
        [firebaseUser, addToast]
    );

    const deleteFlour = useCallback(
        async (id: string) => {
            if (firebaseUser && db) {
                const docRef = doc(db, 'users', firebaseUser.uid, 'flours', id);
                await deleteDoc(docRef);
            } else {
                setFlours(prev => prev.filter(f => f.id !== id));
            }
            addToast('Flour removed', 'info');
        },
        [firebaseUser, addToast]
    );

    // setPreferredFlour is now handled by UserProvider

    const value: FloursContextType = useMemo(() => ({
        flours,
        addFlour,
        updateFlour,
        deleteFlour,
        preferredFlourId,
        setPreferredFlour,
    }), [flours, addFlour, updateFlour, deleteFlour, preferredFlourId, setPreferredFlour]);

    return <FloursContext.Provider value={value}>{children}</FloursContext.Provider>;
};

export const useFlours = (): FloursContextType => {
    const context = useContext(FloursContext);
    if (context === undefined) {
        throw new Error('useFlours must be used within a FloursProvider');
    }
    return context;
};
