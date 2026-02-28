import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { Goal } from '@/types';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';

interface GoalsContextType {
    goals: Goal[];
    addGoal: (goalData: Omit<Goal, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'progress'>) => Promise<Goal>;
    updateGoal: (updatedData: Partial<Goal> & { id: string }) => Promise<void>;
    deleteGoal: (id: string) => Promise<void>;
    completeGoal: (id: string) => Promise<void>;
    // Memoized selectors
    activeGoal: Goal | undefined;
    completedGoals: Goal[];
}

const GoalsContext = createContext<GoalsContextType | undefined>(undefined);

export const GoalsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { t } = useTranslation();
    const { goals, addGoal, updateGoal, deleteGoal, completeGoal } = useUser();

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
