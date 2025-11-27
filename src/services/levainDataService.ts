import { Levain } from '@/types';

export const levainDataService = {};
export const exportLevainData = (levains: Levain[]): string => JSON.stringify(levains);
export const importLevainData = (jsonString: string): { error?: string; newLevains: Levain[] } => {
    try {
        const newLevains = JSON.parse(jsonString);
        return { newLevains };
    } catch (e) {
        return { error: 'Invalid JSON file', newLevains: [] };
    }
};
