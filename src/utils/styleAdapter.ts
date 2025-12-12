import { StyleDefinition } from '../types/styleDefinition';
import { DoughStyleDefinition } from '../types';
import { useTranslation } from '@/i18n';

export function adaptLegacyStyle(legacy: DoughStyleDefinition | any): StyleDefinition {
    // If it already looks like a new style, return it
    if (legacy.technicalProfile && Array.isArray(legacy.technicalProfile.hydrationRange)) {
        return legacy as StyleDefinition;
    }

    // Otherwise adapt
    return {
        id: legacy.id,
        title: legacy.name || legacy.title || 'Untitled Style',
        subtitle: legacy.description ? legacy.description.substring(0, 50) + '...' : '',
        category: legacy.category || 'Other',
        family: legacy.family || 'User Custom',
        variantName: legacy.variantName || legacy.name,
        origin: {
            country: legacy.country || 'Unknown',
            region: legacy.region,
        },
        intro: legacy.description || '',
        history: '',
        technicalFoundations: [],
        doughImpact: [],
        bakingImpact: [],
        technicalProfile: {
            hydrationRange: legacy.technicalProfile?.hydrationRange || [legacy.technical?.hydration || 60, legacy.technical?.hydration || 60],
            saltRange: legacy.technicalProfile?.saltRange || [2, 2],
            oilRange: legacy.technicalProfile?.fatRange || [0, 0],
            sugarRange: legacy.technicalProfile?.sugarRange || [0, 0],
            flourStrength: legacy.technicalProfile?.flourStrength || 'Medium',
            fermentation: legacy.technicalProfile?.fermentation || { bulk: 'Standard', proof: 'Standard' },
            oven: legacy.technicalProfile?.oven || { type: 'home_electric', temperatureC: [250, 250] },
            difficulty: legacy.technicalProfile?.difficulty || 'Medium',
            recommendedUse: legacy.technicalProfile?.recommendedUse || [],
        },
        regionalVariants: [],
        climateScenarios: [],
        styleComparisons: [],
        parameterSensitivity: [],
        risks: [],
        notes: [],
        tags: legacy.tags || [],
        applyInApp: {
            calculator: [],
            styles: [],
            mylab: [],
            levain: [],
            tools: []
        },
        references: [],
        images: legacy.image ? [legacy.image] : [],
        diagrams: [],
        faq: [],
        isCanonical: legacy.isCanonical || false,
        source: legacy.source || 'user_manual',
        createdBy: legacy.createdBy,
        createdAt: legacy.createdAt
    };
}

export function adaptNewToLegacy(style: StyleDefinition): DoughStyleDefinition {
    return {
        id: style.id,
        name: style.title,
        category: style.category.toLowerCase() as any,
        origin: {
            country: style.origin.country,
            region: style.origin.region || 'Unknown',
            period: (style.origin as any).period || 'Unknown'
        },
        history: style.history,
        isCanonical: style.isCanonical,
        source: style.source as any,
        // createdBy and createdAt removed from DoughStyleDefinition
        // createdBy: style.createdBy,
        // createdAt: style.createdAt,
        description: style.intro,
        isPro: false, // Default or derive
        difficulty: style.technicalProfile.difficulty as any,
        fermentationType: 'direct',
        notes: [],
        createdAt: new Date().toISOString(),
        releaseDate: new Date().toISOString(),

        // New Blocks (Empty by default for adapter)
        references: [],

        technicalProfile: {
            hydration: style.technicalProfile.hydrationRange,
            salt: style.technicalProfile.saltRange,
            oil: style.technicalProfile.oilRange,
            sugar: style.technicalProfile.sugarRange,
            flourStrength: style.technicalProfile.flourStrength,
            fermentation: typeof style.technicalProfile.fermentation === 'string' ? { bulk: style.technicalProfile.fermentation, proof: 'Standard' } : style.technicalProfile.fermentation,
            fermentationSteps: [], // Default empty
            ovenTemp: style.technicalProfile.oven.temperatureC,
            ovenRecommendations: style.technicalProfile.oven.notes,
            recommendedUse: [], // Default empty
            difficulty: style.technicalProfile.difficulty as any
        },

        // Legacy fields
        tags: style.tags
    };
}

export function normalizeDoughStyle(style: any): DoughStyleDefinition {
    // otherwise adapt old structure to new DoughStyleDefinition
    return {
        ...style,
        source: style.source || 'user_manual', // Default strict to prevent crashes
        references: style.references || [],
        // Ensure technicalProfile exists if it was missing or different
        technicalProfile: style.technicalProfile || {
            hydration: [60, 60],
            salt: [2, 2],
            fermentationSteps: [],
            ovenTemp: [250, 250],
            difficulty: 'Medium',
            recommendedUse: []
        }
    } as DoughStyleDefinition;
}
