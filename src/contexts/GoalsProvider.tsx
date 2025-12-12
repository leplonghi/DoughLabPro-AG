import React, { createContext, useContext, ReactNode, useState, useEffect, useCallback, useMemo } from 'react';
import { Goal } from '@/types';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/firebase/db';
import { collection, query, onSnapshot, addDoc, updateDoc, deleteDoc, doc, Timestamp, orderBy } from 'firebase/firestore';
import { useToast } from '@/components/ToastProvider';
import { useTranslation } from '@/i18n';

interface GoalsContextType {
    goals: Goal[];
    addGoal: (goalData: Omit<Goal, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'progress'>) =>Promise<Goal>;
    updateGoal: (updatedData: any) =>Promise<void>;
    deleteGoal: (id: string) =>Promise<void>;
    completeGoal: (id: string) =>Promise<void>;
    // Memoized selectors
    activeGoal: Goal | undefined;
    completedGoals: Goal[];
}

const GoalsContext = createContext<GoalsContextType | undefined>(undefined);

export const GoalsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
    const { firebaseUser } = useAuth();
    const { addToast } = useToast();
    const [goals, setGoals] = useState<Goal[]>([]);

    // Firestore subscription
    useEffect(() => {
        if (!firebaseUser || !db) {
            setGoals([]);
            return () => { };
        }

        const collRef = collection(db, 'users', firebaseUser.uid, 'goals');
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
                    return { id: doc.id, ...data } as Goal;
                });
                setGoals(items);
            },
            (error) => {
                console.error('Error listening to goals:', error);
            }
        );
    }, [firebaseUser]);

    const addGoal = useCallback(
        async (goalData: Omit<Goal, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'progress'>): Promise<Goal> => {
            const now = new Date().toISOString();
            const data = { ...goalData, status: 'ativo', progress: 0, createdAt: now, updatedAt: now };

            if (firebaseUser && db) {
                const collRef = collection(db, 'users', firebaseUser.uid, 'goals');
                const docRef = await addDoc(collRef, data);
                addToast('New goal created!', 'success');
                return { ...data, id: docRef.id } as Goal;
            } else {
                const newId = `mock-goal-${Date.now()}`;
                const newGoal = { ...data, id: newId } as Goal;
                setGoals(prev => [newGoal, ...prev]);
                addToast('New goal created!', 'success');
                return newGoal;
            }
        },
        [firebaseUser, addToast]
    );

    const updateGoal = useCallback(
        async (updatedData: any) => {
            const update = { ...updatedData, updatedAt: new Date().toISOString() };

            if (firebaseUser && db) {
                const docRef = doc(db, 'users', firebaseUser.uid, 'goals', updatedData.id);
                await updateDoc(docRef, update);
            } else {
                setGoals(prev => prev.map(g => g.id === updatedData.id ? { ...g, ...update } : g));
            }
            addToast('Goal updated.', 'info');
        },
        [firebaseUser, addToast]
    );

    const deleteGoal = useCallback(
        async (id: string) => {
            if (firebaseUser && db) {
                const docRef = doc(db, 'users', firebaseUser.uid, 'goals', id);
                await deleteDoc(docRef);
            } else {
                setGoals(prev => prev.filter(g => g.id !== id));
            }
            addToast('Goal deleted.', 'info');
        },
        [firebaseUser, addToast]
    );

    const completeGoal = useCallback(
        async (id: string) => {
            const update = { status: 'concluido', progress: 100, updatedAt: new Date().toISOString() };

            if (firebaseUser && db) {
                const docRef = doc(db, 'users', firebaseUser.uid, 'goals', id);
                await updateDoc(docRef, update);
            } else {
                setGoals(prev => prev.map(g => g.id === id ? { ...g, ...update } : g));
            }
            addToast('Goal completed!', 'success');
        },
        [firebaseUser, addToast]
    );

    // Memoized selectors
    const activeGoal = useMemo(() => goals.find(g => g.status === 'ativo'), [goals]);
    const completedGoals = useMemo(() => goals.filter(g => g.status === 'concluido'), [goals]);

    const value: GoalsContextType = useMemo(() => ({
        goals,
        addGoal,
        updateGoal,
        deleteGoal,
        completeGoal,
        activeGoal,
        completedGoals,
    }), [goals, addGoal, updateGoal, deleteGoal, completeGoal, activeGoal, completedGoals]);

    return <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>;
};

export const useGoals = (): GoalsContextType => {
    const context = useContext(GoalsContext);
    if (context === undefined) {
        throw new Error('useGoals must be used within a GoalsProvider');
    }
    return context;
};
