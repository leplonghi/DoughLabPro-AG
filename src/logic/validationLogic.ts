import { BakeType } from '../types';
import { useTranslation } from '@/i18n';

export function getRange(field: string, bakeType?: BakeType): [number, number] | undefined {
    const isPastry = bakeType === BakeType.SWEETS_PASTRY;

    switch (field) {
        case 'hydration':
            if (isPastry) return [0, 200]; // Pastry can be very low (cookies) or very high (crepes/cakes)
            return [50, 90];
        case 'salt':
            if (isPastry) return [0, 5]; // Some sweets have very little salt
            return [1.5, 3.5];
        case 'oil':
            if (isPastry) return [0, 200]; // Butter works differently
            return [0, 10];
        case 'sugar':
            if (isPastry) return [0, 300]; // Sugar can be >100% in brownies/cookies
            return [0, 10];
        case 'yeastPercentage':
            if (isPastry) return [0, 10]; // Enriched doughs need more yeast
            return [0.1, 5];
        default:
            return undefined;
    }
}
