import React, { createContext, useContext, ReactNode, useState, useEffect, useCallback, useMemo } from 'react';
import { Levain, FeedingEvent, LevainStatus } from '@/types';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/firebase/db';
import { collection, query, onSnapshot, addDoc, updateDoc, deleteDoc, doc, writeBatch, Timestamp, orderBy } from 'firebase/firestore';
import { hoursBetween } from '@/helpers';
import { logEvent } from '@/services/analytics';
import { useToast } from '@/components/ToastProvider';

interface LevainContextType {
    levains: Levain[];
    addLevain: (levain: Omit<Levain, 'id' | 'isDefault' | 'feedingHistory' | 'status' | 'createdAt'>) => Promise<void>;
    updateLevain: (updatedData: Partial<Levain> & { id: string }) => Promise<void>;
    deleteLevain: (id: string) => Promise<void>;
    setDefaultLevain: (id: string) => Promise<void>;
    addFeedingEvent: (levainId: string, eventData: Omit<FeedingEvent, 'id' | 'date'>) => Promise<void>;
    importLevains: (levains: Levain[]) => Promise<void>;
    // Memoized selectors
    activeLevain: Levain | undefined;
    levainHealthScore: number;
}

const LevainContext = createContext<LevainContextType | undefined>(undefined);

const getStatusFromLastFeeding = (levain: Levain): LevainStatus => {
    if (levain.status === 'arquivado') return 'arquivado';

    const hoursSinceLastFeeding = hoursBetween(new Date().toISOString(), levain.lastFeeding);
    const SEVEN_DAYS_IN_HOURS = 7 * 24;

    if (hoursSinceLastFeeding <= 48) {
        return 'ativo';
    } else if (hoursSinceLastFeeding > 48 && hoursSinceLastFeeding <= SEVEN_DAYS_IN_HOURS) {
        return 'precisa_atencao';
    } else {
        return 'descanso';
    }
};

const shouldUseFirestore = (user: any, db: any) => {
    return !!user && !!db && user.uid !== 'guest-123';
};

export const LevainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { firebaseUser, appUser } = useAuth();
    const { addToast } = useToast();
    const [levains, setLevains] = useState<Levain[]>([]);

    // Firestore subscription
    useEffect(() => {
        if (!shouldUseFirestore(firebaseUser, db)) {
            setLevains([]);
            return () => { };
        }

        const collRef = collection(db, 'users', firebaseUser.uid, 'levains');
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
                    const levain = { id: doc.id, ...data } as Levain;
                    return { ...levain, status: getStatusFromLastFeeding(levain) };
                });
                setLevains(items);
            },
            (error) => {
                console.error('Error listening to levains:', error);
            }
        );
    }, [firebaseUser]);

    const addLevain = useCallback(
        async (newLevainData: Omit<Levain, 'id' | 'isDefault' | 'feedingHistory' | 'status' | 'createdAt'>) => {
            const now = new Date().toISOString();
            const data = {
                ...newLevainData,
                status: 'ativo',
                lastFeeding: now,
                isDefault: levains.length === 0,
                feedingHistory: [],
                createdAt: now,
                updatedAt: now,
            };

            if (shouldUseFirestore(firebaseUser, db)) {
                const collRef = collection(db, 'users', firebaseUser.uid, 'levains');
                await addDoc(collRef, data);
                if (appUser) logEvent('levain_pet_created', { userId: appUser.email });
            } else {
                const newId = `mock-levain-${Date.now()}`;
                setLevains(prev => [{ ...data, id: newId } as Levain, ...prev]);
            }
        },
        [firebaseUser, levains.length, appUser]
    );

    const updateLevain = useCallback(
        async (updatedData: Partial<Levain> & { id: string }) => {
            const update = { ...updatedData, updatedAt: new Date().toISOString() };

            if (shouldUseFirestore(firebaseUser, db)) {
                const docRef = doc(db, 'users', firebaseUser.uid, 'levains', updatedData.id);
                await updateDoc(docRef, update);
                if (appUser) logEvent('levain_pet_profile_updated', { userId: appUser.email, levainId: updatedData.id });
            } else {
                setLevains(prev => prev.map(l => l.id === updatedData.id ? { ...l, ...update } : l));
            }
        },
        [firebaseUser, appUser]
    );

    const deleteLevain = useCallback(
        async (id: string) => {
            if (shouldUseFirestore(firebaseUser, db)) {
                const docRef = doc(db, 'users', firebaseUser.uid, 'levains', id);
                await deleteDoc(docRef);
            } else {
                setLevains(prev => prev.filter(l => l.id !== id));
            }
        },
        [firebaseUser]
    );

    const setDefaultLevain = useCallback(
        async (id: string) => {
            if (shouldUseFirestore(firebaseUser, db)) {
                const batch = writeBatch(db);
                levains.forEach((l) => {
                    const docRef = doc(db, 'users', firebaseUser.uid, 'levains', l.id);
                    batch.update(docRef, { isDefault: l.id === id });
                });
                await batch.commit();
            } else {
                setLevains(prev => prev.map(l => ({ ...l, isDefault: l.id === id })));
            }
        },
        [firebaseUser, levains]
    );

    const addFeedingEvent = useCallback(
        async (levainId: string, eventData: Omit<FeedingEvent, 'id' | 'date'>) => {
            const levain = levains.find((l) => l.id === levainId);
            if (!levain) return;

            const now = new Date().toISOString();
            const newEvent = { id: crypto.randomUUID(), date: now, ...eventData };
            const updatedHistory = [newEvent, ...levain.feedingHistory];

            const update = {
                feedingHistory: updatedHistory,
                lastFeeding: now,
                status: 'ativo',
                updatedAt: now,
            };

            if (shouldUseFirestore(firebaseUser, db)) {
                const docRef = doc(db, 'users', firebaseUser.uid, 'levains', levainId);
                await updateDoc(docRef, update);
                if (appUser) logEvent('levain_pet_feeding_logged', { userId: appUser.email, levainId });
            } else {
                setLevains(prev => prev.map(l => l.id === levainId ? { ...l, ...update } : l));
            }
        },
        [levains, firebaseUser, appUser]
    );

    const importLevains = useCallback(
        async (levainsToImport: Levain[]) => {
            if (shouldUseFirestore(firebaseUser, db)) {
                const batch = writeBatch(db);
                levainsToImport.forEach((levain) => {
                    const docRef = doc(collection(db, 'users', firebaseUser.uid, 'levains'));
                    batch.set(docRef, levain);
                });
                await batch.commit();
            } else {
                setLevains(prev => [...levainsToImport, ...prev]);
            }
        },
        [firebaseUser]
    );

    // Memoized selectors
    const activeLevain = useMemo(() => levains.find(l => l.status === 'ativo'), [levains]);

    const levainHealthScore = useMemo(() => {
        if (!activeLevain) return 0;
        const hoursSinceFeeding = hoursBetween(new Date().toISOString(), activeLevain.lastFeeding);
        if (hoursSinceFeeding <= 24) return 100;
        if (hoursSinceFeeding <= 48) return 80;
        if (hoursSinceFeeding <= 72) return 60;
        return 40;
    }, [activeLevain]);

    const value: LevainContextType = useMemo(() => ({
        levains,
        addLevain,
        updateLevain,
        deleteLevain,
        setDefaultLevain,
        addFeedingEvent,
        importLevains,
        activeLevain,
        levainHealthScore,
    }), [levains, addLevain, updateLevain, deleteLevain, setDefaultLevain, addFeedingEvent, importLevains, activeLevain, levainHealthScore]);

    return <LevainContext.Provider value={value}>{children}</LevainContext.Provider>;
};

export const useLevain = (): LevainContextType => {
    const context = useContext(LevainContext);
    if (context === undefined) {
        throw new Error('useLevain must be used within a LevainProvider');
    }
    return context;
};
