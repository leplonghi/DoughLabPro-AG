import { StyleDefinition } from '../types/styleDefinition';
import { useTranslation } from '@/i18n';

export interface ValidationResult {
    isValid: boolean;
    errors: string[];
    warnings: string[];
}

export function validateStyleDefinition(style: StyleDefinition): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Required Fields Check
    if (!style.id) errors.push('Missing ID');
    if (!style.title) errors.push('Missing Title');
    if (!style.category) errors.push('Missing Category');
    if (!style.origin) errors.push('Missing Origin');
    else {
        if (!style.origin.country) errors.push('Missing Origin Country');
    }

    // Technical Profile Check
    if (!style.technicalProfile) {
        errors.push('Missing Technical Profile');
    } else {
        const tp = style.technicalProfile;
        if (!tp.hydrationRange || tp.hydrationRange.length !== 2) errors.push('Invalid Hydration Range');
        if (!tp.saltRange || tp.saltRange.length !== 2) errors.push('Invalid Salt Range');
        if (!tp.fermentation) errors.push('Missing Fermentation Details');
        if (!tp.oven) errors.push('Missing Oven Details');
    }

    // Content Quality Checks (Warnings)
    if (!style.intro || style.intro.length < 50) warnings.push('Intro is too short');
    if (!style.history || style.history.length < 50) warnings.push('History is too short');
    if (!style.technicalFoundations || style.technicalFoundations.length === 0) warnings.push('No technical foundations listed');
    if (!style.bakingImpact || style.bakingImpact.length === 0) warnings.push('No baking impacts listed');

    return {
        isValid: errors.length === 0,
        errors,
        warnings
    };
}

export function validateAllStyles(styles: StyleDefinition[]): Record<string, ValidationResult> {
    const results: Record<string, ValidationResult> = {};
    styles.forEach(style => {
        results[style.id] = validateStyleDefinition(style);
    });
    return results;
}
