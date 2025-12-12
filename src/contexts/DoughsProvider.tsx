import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { useTranslation } from '@/i18n';

// Placeholder provider for future dough templates/presets
interface DoughsContextType {
    doughTemplates: any[];
    savedDoughs: any[];
}

const DoughsContext = createContext<DoughsContextType | undefined>(undefined);

export const DoughsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
    const value: DoughsContextType = useMemo(() => ({
        doughTemplates: [],
        savedDoughs: [],
    }), []);

    return <DoughsContext.Provider value={value}>{children}</DoughsContext.Provider>;
};

export const useDoughs = (): DoughsContextType => {
    const context = useContext(DoughsContext);
    if (context === undefined) {
        throw new Error('useDoughs must be used within a DoughsProvider');
    }
    return context;
};
