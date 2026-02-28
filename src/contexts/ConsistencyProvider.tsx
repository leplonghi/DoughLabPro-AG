import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { TestSeries } from '@/types';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';

interface ConsistencyContextType {
    testSeries: TestSeries[];
    addTestSeries: (seriesData: Omit<TestSeries, 'id' | 'createdAt' | 'updatedAt' | 'relatedBakes'>) => Promise<TestSeries>;
    updateTestSeries: (updatedData: Partial<TestSeries> & { id: string }) => Promise<void>;
    deleteTestSeries: (id: string) => Promise<void>;
    attachBakeToSeries: (seriesId: string, bakeId: string) => Promise<void>;
    // Memoized selectors
    activeSeries: TestSeries[];
    completedSeries: TestSeries[];
}

const ConsistencyContext = createContext<ConsistencyContextType | undefined>(undefined);

export const ConsistencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { t } = useTranslation();
    const {
        testSeries,
        addTestSeries,
        updateTestSeries,
        deleteTestSeries,
        attachBakeToSeries
    } = useUser();

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
