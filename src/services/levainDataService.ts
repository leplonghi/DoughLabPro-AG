import { Levain } from '@/types';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const levainDataService = {};
export const exportLevainData = (levains: Levain[]): string => JSON.stringify(levains);
export const importLevainData = (jsonString: string): { error?: string; newLevains: Levain[] } => {
    try {
        const newLevains = JSON.parse(jsonString);
        return { newLevains };
    } catch (e) {
        return { error: t('common.invalid_json_file_455'), newLevains: [] };
    }
};
