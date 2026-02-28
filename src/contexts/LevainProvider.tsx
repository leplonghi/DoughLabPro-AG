import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { Levain, FeedingEvent } from '@/types';
import { useUser } from '@/contexts/UserProvider';
import { hoursBetween } from '@/helpers';
import { useTranslation } from '@/i18n';

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

export const LevainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { t } = useTranslation();
    const {
        levains,
        addLevain,
        updateLevain,
        deleteLevain,
        setDefaultLevain,
        addFeedingEvent,
        importLevains
    } = useUser();

    // Memoized selectors
    const activeLevain = useMemo(() => levains.find(l => l.status === 'ativo'), [levains]);

    const levainHealthScore = useMemo(() => {
        // Logic duplicated from original LevainProvider to maintain derived state.
        // UserProvider manages the data, but LevainProvider computes this UI-specific metric.
        // Although UserContext doesn't expose this, we can calculate it here.
        if (!activeLevain) return 0;
        const hoursSinceFeeding = hoursBetween(new Date().toISOString(), activeLevain.lastFeeding);

        // Simple health score logic based on feeding time (matching previous logic)
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