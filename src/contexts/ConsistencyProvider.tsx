import React, { createContext, useContext, ReactNode, useState, useEffect, useCallback, useMemo } from 'react';
import { TestSeries } from '@/types';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/firebase/db';
import { collection, query, onSnapshot, addDoc, updateDoc, deleteDoc, doc, Timestamp, orderBy } from 'firebase/firestore';
import { useToast } from '@/components/ToastProvider';
import { useTranslation } from '@/i18n';

interface ConsistencyContextType {
    testSeries: TestSeries[];
    addTestSeries: (seriesData: Omit<TestSeries, 'id' | 'createdAt' | 'updatedAt' | 'relatedBakes'>) =>Promise<TestSeries>;
    updateTestSeries: (updatedData: any) =>Promise<void>;
    deleteTestSeries: (id: string) =>Promise<void>;
    attachBakeToSeries: (seriesId: string, bakeId: string) =>Promise<void>;
    // Memoized selectors
    activeSeries: TestSeries[];
    completedSeries: TestSeries[];
}

const ConsistencyContext = createContext<ConsistencyContextType | undefined>(undefined);

export const ConsistencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
    const { firebaseUser } = useAuth();
    const { addToast } = useToast();
    const [testSeries, setTestSeries] = useState<TestSeries[]>([]);

    // Firestore subscription
    useEffect(() => {
        if (!firebaseUser || !db) {
            setTestSeries([]);
            return () => { };
        }

        const collRef = collection(db, 'users', firebaseUser.uid, 'testSeries');
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
                    return { id: doc.id, ...data } as TestSeries;
                });
                setTestSeries(items);
            },
            (error) => {
                console.error('Error listening to testSeries:', error);
            }
        );
    }, [firebaseUser]);

    const addTestSeries = useCallback(
        async (seriesData: Omit<TestSeries, 'id' | 'createdAt' | 'updatedAt' | 'relatedBakes'>): Promise<TestSeries> => {
            const now = new Date().toISOString();
            const data = { ...seriesData, relatedBakes: [], createdAt: now, updatedAt: now };

            if (firebaseUser && db) {
                const collRef = collection(db, 'users', firebaseUser.uid, 'testSeries');
                const docRef = await addDoc(collRef, data);
                addToast('Test series created.', 'success');
                return { ...data, id: docRef.id } as TestSeries;
            } else {
                const newId = `mock-series-${Date.now()}`;
                const newSeries = { ...data, id: newId } as TestSeries;
                setTestSeries(prev => [newSeries, ...prev]);
                addToast('Test series created.', 'success');
                return newSeries;
            }
        },
        [firebaseUser, addToast]
    );

    const updateTestSeries = useCallback(
        async (updatedData: any) => {
            const update = { ...updatedData, updatedAt: new Date().toISOString() };

            if (firebaseUser && db) {
                const docRef = doc(db, 'users', firebaseUser.uid, 'testSeries', updatedData.id);
                await updateDoc(docRef, update);
            } else {
                setTestSeries(prev => prev.map(s => s.id === updatedData.id ? { ...s, ...update } : s));
            }
            addToast('Series updated.', 'info');
        },
        [firebaseUser, addToast]
    );

    const deleteTestSeries = useCallback(
        async (id: string) => {
            if (firebaseUser && db) {
                const docRef = doc(db, 'users', firebaseUser.uid, 'testSeries', id);
                await deleteDoc(docRef);
            } else {
                setTestSeries(prev => prev.filter(s => s.id !== id));
            }
            addToast('Series deleted.', 'info');
        },
        [firebaseUser, addToast]
    );

    const attachBakeToSeries = useCallback(
        async (seriesId: string, bakeId: string) => {
            const series = testSeries.find((s) => s.id === seriesId);
            if (series && !series.relatedBakes.includes(bakeId)) {
                const update = {
                    relatedBakes: [...series.relatedBakes, bakeId],
                    updatedAt: new Date().toISOString(),
                };

                if (firebaseUser && db) {
                    const docRef = doc(db, 'users', firebaseUser.uid, 'testSeries', seriesId);
                    await updateDoc(docRef, update);
                } else {
                    setTestSeries(prev => prev.map(s => s.id === seriesId ? { ...s, ...update } : s));
                }
                addToast('Bake associated successfully!', 'success');
            } else {
                addToast('Bake already associated.', 'info');
            }
        },
        [testSeries, firebaseUser, addToast]
    );

    // Memoized selectors
    const activeSeries = useMemo(() => testSeries.filter(s => s.status === 'active'), [testSeries]);
    const completedSeries = useMemo(() => testSeries.filter(s => s.status === 'completed'), [testSeries]);

    const value: ConsistencyContextType = useMemo(() => ({
        testSeries,
        addTestSeries,
        updateTestSeries,
        deleteTestSeries,
        attachBakeToSeries,
        activeSeries,
        completedSeries,
    }), [testSeries, addTestSeries, updateTestSeries, deleteTestSeries, attachBakeToSeries, activeSeries, completedSeries]);

    return <ConsistencyContext.Provider value={value}>{children}</ConsistencyContext.Provider>;
};

export const useConsistency = (): ConsistencyContextType => {
    const context = useContext(ConsistencyContext);
    if (context === undefined) {
        throw new Error('useConsistency must be used within a ConsistencyProvider');
    }
    return context;
};
