import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from '@/i18n';

export type LearnMode = 'technical' | 'grandma';

interface LearnContextType {
    mode: LearnMode;
    setMode: (mode: LearnMode) => void;
}

const LearnContext = createContext<LearnContextType | undefined>(undefined);

export const LearnProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
    const [mode, setMode] = useState<LearnMode>('technical');

    useEffect(() => {
        const savedMode = localStorage.getItem('learnReadingMode') as LearnMode;
        if (savedMode === 'technical' || savedMode === 'grandma') {
            setMode(savedMode);
        }
    }, []);

    const handleSetMode = (newMode: LearnMode) => {
        setMode(newMode);
        localStorage.setItem('learnReadingMode', newMode);
    };

    return (
        <LearnContext.Provider value={{ mode, setMode: handleSetMode }}>
            {children}
        </LearnContext.Provider>
    );
};

export const useLearnContext = () => {
    const context = useContext(LearnContext);
    if (!context) {
        throw new Error('useLearnContext must be used within a LearnProvider');
    }
    return context;
};
