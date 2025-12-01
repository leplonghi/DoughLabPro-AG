import { Timestamp } from 'firebase/firestore';
import { FermentationTechnique } from '../types';

// ========================================================
// 1. HELPER TYPES
// ========================================================

export type StyleCategory =
    | 'pizza'
    | 'bread'
    | 'enriched_bread'
    | 'burger_bun'
    | 'pastry'
    | 'cookies_confectionery'
    | 'flatbread'
    | 'other';

export type StyleSource = 'official' | 'user_manual' | 'user_ai';

export interface Reference {
    source: string;
    author?: string;
    year?: string;
    url?: string;
    notes?: string;
}

// ========================================================
// 2. CORE SUB-SCHEMAS
// ========================================================

export interface StyleOrigin {
    country: string;
    region?: string;
    period?: string;
}

export interface StyleTechnicalProfile {
    hydration: [number, number];
    salt: [number, number];
    oil?: [number, number];
    sugar?: [number, number];
    prefermentDescription?: string;
    flourStrength?: string;
    fermentation?: {
        bulk: string;
        proof: string;
        coldRetard?: string;
    };
    oven?: {
        temperatureC: [number, number];
        type: string;
        notes?: string;
    };
    ovenRecommendations?: string;
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
    recommendedUse: string;
}

export interface StyleVariation {
    id: string;
    title: string;
    description: string;
    technicalAdjustments?: Partial<StyleTechnicalProfile>;
    notes?: string[];
    isNew?: boolean;
    type?: 'substyle' | 'regional' | 'seasonal' | 'experimental';
}

export interface StyleNarrative {
    description: string;
    history: string;
    culturalContext?: string;
    origin: StyleOrigin;
}

// ========================================================
// 3. MAIN DEFINITION
// ========================================================

export interface DoughStyleDefinition {
    id: string;
    name: string;
    family?: string;
    category: StyleCategory;

    origin: StyleOrigin;
    history: string;
    culturalContext?: string;

    isCanonical: boolean;
    source: StyleSource;
    createdBy?: string;
    createdAt?: string | Timestamp;
    releaseDate?: string;

    description: string;
    country: string;
    year?: string;

    isPro: boolean;

    technical: {
        hydration: number;
        salt: number;
        oil: number;
        sugar: number;
        fermentation: string;
        fermentationTechnique: FermentationTechnique;
        bakingTempC: number;
    };

    technicalProfile?: StyleTechnicalProfile;

    risks?: string[];
    notes?: string[];
    references?: Reference[];
    variations?: StyleVariation[];
    tags?: string[];
    learnKeywords?: string[];
}
