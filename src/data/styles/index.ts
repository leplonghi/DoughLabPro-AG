import { STYLES_DATA, getStyleById as registryGetById } from './registry';

// 3. EXPORTAÇÕES (API INTERNA) - Redirecionando para o Registry Central (Single Source of Truth)

export const getAllStyles = () => {
    return STYLES_DATA;
};

export const getStyleById = (id: string) => {
    return registryGetById(id);
};

export const getStylesByRegion = (region: string) => {
    return STYLES_DATA.filter((s) => {
        // Support New Schema (region) and Legacy Schema (origin.country) logic is handled in registry adapter,
        // so we can rely on standard fields now.
        // Registry adapter maps 'region' to 'origin.country'.
        return s.origin.country === region || s.origin.region === region;
    });
};

export const getStylesByCategory = (category: string) => {
    if (category === 'All' || category === 'all') return STYLES_DATA;
    return STYLES_DATA.filter((s) => s.category.toLowerCase() === category.toLowerCase());
};

// Aliased export for compatibility/user requirement
export const ALL_STYLES = STYLES_DATA;
