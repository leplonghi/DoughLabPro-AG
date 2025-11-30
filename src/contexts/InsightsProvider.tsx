import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { useBatches } from './BatchesProvider';

interface InsightsContextType {
    bakeConsistencyScore: number;
    usageFrequency: number;
    averageHydration: number;
    mostUsedStyle: string | null;
}

const InsightsContext = createContext<InsightsContextType | undefined>(undefined);

export const InsightsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { batches, successRate } = useBatches();

    // Calculate bake consistency score
    const bakeConsistencyScore = useMemo(() => {
        if (batches.length < 3) return 0;

        // Calculate variance in ratings
        const ratedBakes = batches.filter(b => b.rating);
        if (ratedBakes.length < 3) return 0;

        const ratings = ratedBakes.map(b => b.rating || 0);
        const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
        const variance = ratings.reduce((sum, rating) => sum + Math.pow(rating - avg, 2), 0) / ratings.length;
        const stdDev = Math.sqrt(variance);

        // Lower standard deviation = higher consistency
        const consistencyScore = Math.max(0, 100 - (stdDev * 20));
        return Math.round(consistencyScore);
    }, [batches]);

    // Calculate usage frequency (bakes per month)
    const usageFrequency = useMemo(() => {
        if (batches.length === 0) return 0;

        const now = new Date();
        const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        const recentBakes = batches.filter(b => new Date(b.createdAt) >= thirtyDaysAgo);

        return recentBakes.length;
    }, [batches]);

    // Calculate average hydration
    const averageHydration = useMemo(() => {
        if (batches.length === 0) return 0;

        const totalHydration = batches.reduce((sum, b) => sum + (b.doughConfig.hydration || 0), 0);
        return Math.round(totalHydration / batches.length);
    }, [batches]);

    // Find most used style
    const mostUsedStyle = useMemo(() => {
        if (batches.length === 0) return null;

        const styleCounts: Record<string, number> = {};
        batches.forEach(b => {
            const style = b.doughConfig.recipeStyle || 'Unknown';
            styleCounts[style] = (styleCounts[style] || 0) + 1;
        });

        const sortedStyles = Object.entries(styleCounts).sort((a, b) => b[1] - a[1]);
        return sortedStyles.length > 0 ? sortedStyles[0][0] : null;
    }, [batches]);

    const value: InsightsContextType = useMemo(() => ({
        bakeConsistencyScore,
        usageFrequency,
        averageHydration,
        mostUsedStyle,
    }), [bakeConsistencyScore, usageFrequency, averageHydration, mostUsedStyle]);

    return <InsightsContext.Provider value={value}>{children}</InsightsContext.Provider>;
};

export const useInsights = (): InsightsContextType => {
    const context = useContext(InsightsContext);
    if (context === undefined) {
        throw new Error('useInsights must be used within an InsightsProvider');
    }
    return context;
};
