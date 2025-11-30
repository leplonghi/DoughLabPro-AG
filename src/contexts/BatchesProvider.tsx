import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { Batch } from '@/types';
import { useBatchManager } from '@/hooks/useBatchManager';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/firebase/db';
import { useToast } from '@/components/ToastProvider';

interface BatchesContextType {
    batches: Batch[];
    addBatch: (batch: Omit<Batch, 'id' | 'createdAt' | 'updatedAt'>) => Promise<Batch>;
    updateBatch: (id: string, updates: Partial<Batch>) => Promise<void>;
    deleteBatch: (id: string) => Promise<void>;
    createDraftBatch: () => Promise<Batch>;
    // Memoized selectors
    lastBake: Batch | null;
    totalBakes: number;
    successRate: number;
}

const BatchesContext = createContext<BatchesContextType | undefined>(undefined);

export const BatchesProviderComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
    console.log('[BatchesProvider] Rendering');
    const { firebaseUser } = useAuth();
    const { addToast } = useToast();

    const { batches, addBatch, updateBatch: updateBatchManager, deleteBatch, createDraftBatch } = useBatchManager(
        firebaseUser,
        db,
        addToast
    );

    const updateBatch = React.useCallback(async (id: string, updates: Partial<Batch>) => {
        const batch = batches.find(b => b.id === id);
        if (batch) {
            await updateBatchManager({ ...batch, ...updates } as Batch);
        }
    }, [batches, updateBatchManager]);

    // Memoized selectors
    const lastBake = useMemo(() =>
        batches.length > 0 ? batches[batches.length - 1] : null,
        [batches]
    );

    const totalBakes = batches.length;

    const successRate = useMemo(() => {
        if (totalBakes === 0) return 0;
        const ratedBakes = batches.filter(b => b.rating);
        if (ratedBakes.length === 0) return 0;
        const avgRating = ratedBakes.reduce((acc, b) => acc + (b.rating || 0), 0) / ratedBakes.length;
        return Math.round((avgRating / 5) * 100);
    }, [batches, totalBakes]);

    const value: BatchesContextType = useMemo(() => ({
        batches,
        addBatch,
        updateBatch,
        deleteBatch,
        createDraftBatch,
        lastBake,
        totalBakes,
        successRate,
    }), [batches, addBatch, updateBatch, deleteBatch, createDraftBatch, lastBake, totalBakes, successRate]);

    return <BatchesContext.Provider value={value}>{children}</BatchesContext.Provider>;
};

export const BatchesProvider = BatchesProviderComponent;

export const useBatches = (): BatchesContextType => {
    const context = useContext(BatchesContext);
    if (context === undefined) {
        throw new Error('useBatches must be used within a BatchesProvider');
    }
    return context;
};
