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
    | 'cookie'
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

export interface StyleImages {
    hero: string;
    dough: string;
    crumb: string;
}

export interface StylePairings {
    canonical: string[];
    modern: string[];
    regional: string[];
}

// ========================================================
// 2. CORE SUB-SCHEMAS
// ========================================================

export interface StyleOrigin {
    country: string;
    region: string;
    period: string;
}

export interface StyleTechnicalProfile {
    hydration: [number, number];
    salt: [number, number];
    oil?: [number, number];
    sugar?: [number, number];
    cocoa?: [number, number];

    flourStrength?: string;
    preferment?: string;

    fermentationSteps: string[]; // Action-oriented steps

    ovenTemp: [number, number]; // Celsius

    recommendedUse: string[];
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';

    // Legacy/Optional fields for backward compatibility or specific types
    prefermentDescription?: string;
    fermentation?: {
        bulk: string;
        proof?: string;
        coldRetard?: string;
        rest?: string;
        notes?: string;
    };
    ovenRecommendations?: string;
}

// ========================================================
// 3. MAIN DEFINITION
// ========================================================

export interface DoughStyleDefinition {
    id: string;
    name: string;
    category: StyleCategory;

    origin: StyleOrigin;

    description: string;
    history: string;

    regulatoryNotes?: string;
    globalPresence?: string;

    pairings?: StylePairings;

    tags: string[];
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';

    fermentationType: 'direct' | 'preferment' | 'levain' | 'cold';

    technicalProfile: StyleTechnicalProfile;

    watchouts?: string[]; // Replaces risks
    notes: string[];
    references: Reference[];

    isPro: boolean;
    source: StyleSource;
    createdAt: string;
    releaseDate: string;

    images?: StyleImages;
    relatedLearn?: string[];

    // Legacy fields for backward compatibility
    risks?: string[];
    variations?: any[];
    isCanonical?: boolean;
    country?: string;
}
