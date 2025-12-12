import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { useBatches } from './BatchesProvider';
import { useTranslation } from '@/i18n';

interface TimelineEvent {
    id: string;
    type: 'bake' | 'levain_feed' | 'goal' | 'test';
    date: string;
    title: string;
    description?: string;
    metadata?: any;
}

interface TimelineContextType {
    events: TimelineEvent[];
    recentEvents: TimelineEvent[];
}

const TimelineContext = createContext<TimelineContextType | undefined>(undefined);

export const TimelineProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
    const { batches } = useBatches();

    // Generate timeline events from batches
    const events = useMemo(() => {
        const bakeEvents: TimelineEvent[] = batches.map(b => ({
            id: `bake-${b.id}`,
            type: 'bake' as const,
            date: b.createdAt,
            title: b.name,
            description: `${b.doughConfig.recipeStyle} - ${b.doughConfig.hydration}% hydration`,
            metadata: { batchId: b.id },
        }));

        return bakeEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }, [batches]);

    const recentEvents = useMemo(() => events.slice(0, 10), [events]);

    const value: TimelineContextType = useMemo(() => ({
        events,
        recentEvents,
    }), [events, recentEvents]);

    return <TimelineContext.Provider value={value}>{children}</TimelineContext.Provider>;
};

export const useTimeline = (): TimelineContextType => {
    const context = useContext(TimelineContext);
    if (context === undefined) {
        throw new Error('useTimeline must be used within a TimelineProvider');
    }
    return context;
};
