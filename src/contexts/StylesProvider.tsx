import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { DoughStyleDefinition } from '@/types/styles';
import { fetchStyles } from '@/services/stylesService';
import { useTranslation } from '@/i18n';
import { importWithChunkRecovery } from '@/utils/chunkRecovery';

interface StylesContextType {
    styles: DoughStyleDefinition[];
    isLoading: boolean;
    hasLoaded: boolean;
    ensureStylesLoaded: () => Promise<void>;
    refreshStyles: () => Promise<void>;
    getStyleById: (id: string) => DoughStyleDefinition | undefined;
}

const StylesContext = createContext<StylesContextType | undefined>(undefined);

export const StylesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { t } = useTranslation();
    const [styles, setStyles] = useState<DoughStyleDefinition[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    const loadRemoteStyles = useCallback(async () => {
        setIsLoading(true);
        try {
            const [{ STYLES_DATA }, remoteStyles] = await Promise.all([
                importWithChunkRecovery(() => import('@/data/stylesData')),
                fetchStyles().catch((error) => {
                    console.error(t('errors.failed_to_load_styles'), error);
                    return [];
                }),
            ]);

            if (remoteStyles && remoteStyles.length > 0) {
                setStyles(remoteStyles);
            } else {
                setStyles(STYLES_DATA);
            }
            setHasLoaded(true);
        } catch (error) {
            console.error(t('errors.failed_to_load_styles'), error);
            try {
                const { STYLES_DATA } = await importWithChunkRecovery(() => import('@/data/stylesData'));
                setStyles(STYLES_DATA);
                setHasLoaded(true);
            } catch (fallbackError) {
                console.error(t('errors.failed_to_load_styles'), fallbackError);
            }
        } finally {
            setIsLoading(false);
        }
    }, [t]);

    const refreshStyles = async () => {
        await loadRemoteStyles();
    };

    const ensureStylesLoaded = useCallback(async () => {
        if (hasLoaded || isLoading) return;
        await loadRemoteStyles();
    }, [hasLoaded, isLoading, loadRemoteStyles]);

    const getStyleById = (id: string) => {
        return styles.find(s => s.id === id);
    };

    const value = useMemo(() => ({
        styles,
        isLoading,
        hasLoaded,
        ensureStylesLoaded,
        refreshStyles,
        getStyleById
    }), [styles, isLoading, hasLoaded, ensureStylesLoaded]);

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
