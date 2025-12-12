import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { DoughStyleDefinition } from '@/types/styles';
import { STYLES_DATA } from '@/data/stylesData';
import { fetchStyles } from '@/services/stylesService';
import { useTranslation } from '@/i18n';

interface StylesContextType {
    styles: DoughStyleDefinition[];
    isLoading: boolean;
    refreshStyles: () => Promise<void>;
    getStyleById: (id: string) => DoughStyleDefinition | undefined;
}

const StylesContext = createContext<StylesContextType | undefined>(undefined);

export const StylesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { t } = useTranslation();
    // Initialize with static data for instant load
    const [styles, setStyles] = useState<DoughStyleDefinition[]>(STYLES_DATA);
    const [isLoading, setIsLoading] = useState(true); // Loading remote data

    const loadRemoteStyles = async () => {
        setIsLoading(true);
        try {
            const remoteStyles = await fetchStyles();
            if (remoteStyles && remoteStyles.length > 0) {
                setStyles(remoteStyles);
            }
        } catch (error) {
            console.error(t('errors.failed_to_load_styles'), error);
            // Keep using fallback/static data
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        let mounted = true;

        loadRemoteStyles().then(() => {
            if (mounted) {
                // Done
            }
        });

        return () => {
            mounted = false;
        };
    }, []);

    const refreshStyles = async () => {
        await loadRemoteStyles();
    };

    const getStyleById = (id: string) => {
        return styles.find(s => s.id === id);
    };

    const value = useMemo(() => ({
        styles,
        isLoading,
        refreshStyles,
        getStyleById
    }), [styles, isLoading]);

    return (
        <StylesContext.Provider value={value}>
            {children}
        </StylesContext.Provider>
    );
};

export const useStyles = () => {
    const context = useContext(StylesContext);
    if (context === undefined) {
        throw new Error('useStyles must be used within a StylesProvider');
    }
    return context;
};
