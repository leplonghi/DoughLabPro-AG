import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { useTranslation } from '@/i18n';

// Placeholder provider for future sensory evaluation features
interface SensoryContextType {
    sensoryProfiles: any[];
    tastingNotes: any[];
}

const SensoryContext = createContext<SensoryContextType | undefined>(undefined);

export const SensoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
    const value: SensoryContextType = useMemo(() => ({
        sensoryProfiles: [],
        tastingNotes: [],
    }), []);

    return <SensoryContext.Provider value={value}>{children}</SensoryContext.Provider>;
};

export const useSensory = (): SensoryContextType => {
    const context = useContext(SensoryContext);
    if (context === undefined) {
        throw new Error('useSensory must be used within a SensoryProvider');
    }
    return context;
};
