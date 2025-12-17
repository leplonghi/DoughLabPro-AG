import { Timestamp } from 'firebase/firestore';

export type StyleCategory = 'Pizza' | 'Bread' | 'Enriched' | 'Buns' | 'Pastry' | 'Cookies' | 'Flatbreads' | 'Other';

export interface Reference {
    title: string;
    url: string;
    author?: string;
    year?: number;
}

export interface FaqItem {
    question: string;
    answer: string;
}

/**
 * Gold Standard Schema for Dough Styles
 */
export interface StyleDefinition {
    /** Unique identifier for the style */
    id: string;
    /** Display title of the style */
    title: string;
    /** Short descriptive subtitle */
    subtitle: string;
    /** Broad category of the style */
    category: StyleCategory;
    /** Family grouping (e.g., Italian pizza, Sourdough bread) */
    family: string;
    /** Specific variant name if applicable */
    variantName: string;
    /** Origin information */
    origin: {
        country: string;
        region?: string;
        period?: string;
    };
    /** Brief introduction/overview */
    intro: string;
    /** Historical context and background */
    history: string;
    /** Key technical foundations (e.g., High heat, Long fermentation) */
    technicalFoundations: string[];
    /** How this style impacts the dough characteristics */
    doughImpact: string[];
    /** How this style impacts the baking process */
    bakingImpact: string[];
    /** Technical parameters and ranges */
    technicalProfile: {
        hydrationRange: [number, number];
        saltRange: [number, number];
        oilRange?: [number, number];
        sugarRange?: [number, number];
        flourStrength?: string;
        fermentation: {
            bulk: string;
            proof: string;
            coldRetard?: string;
        };
        oven: {
            type: string;
            temperatureC: [number, number];
            notes?: string;
        };
        difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
        recommendedUse: string[];
    };
    /** List of regional variations */
    regionalVariants: string[];
    /** Adjustments for different climates */
    climateScenarios: string[];
    /** Comparisons with other similar styles */
    styleComparisons: string[];
    /** Sensitivity to specific parameters (e.g., Highly sensitive to overproofing) */
    parameterSensitivity: string[];
    /** Common risks or pitfalls */
    risks: string[];
    /** General notes */
    notes: string[];
    /** Searchable tags */
    tags: string[];
    /** Integration points within the app */
    applyInApp: {
        calculator: string[];
        styles: string[];
        mylab: string[];
        levain: string[];
        tools: string[];
    };
    /** External references and citations */
    references: Reference[];
    /** URLs to images */
    images: string[];
    /** URLs to diagrams */
    diagrams: string[];
    /** Frequently asked questions */
    faq: FaqItem[];
    /** Whether this is the canonical/standard definition */
    isCanonical: boolean;
    /** Source of the definition */
    source: "official" | "user_manual" | "user_ai";
    /** ID of the user who created this (if applicable) */
    createdBy?: string;
    /** Creation timestamp */
    createdAt?: string | Timestamp;
    /** Default values for calculator initialization */
    defaults?: {
        hydration?: number;
        salt?: number;
        oil?: number;
        sugar?: number;
    };
    /** Recommended flavor components (IDs) for this style */
    recommendedFlavorComponents?: string[];
    /** Base formula for ingredient-driven engine */
    base_formula?: {
        name: string;
        percentage: number;
        role?: string;
        category?: string;
        hydrationContent?: number;
        manualOverride?: boolean;
    }[];
    /** Custom Step-by-Step Method */
    customMethod?: {
        phase: 'PREP' | 'MIX' | 'AUTO' | 'KNEAD' | 'BULK' | 'DIVIDE' | 'PROOF' | 'BAKE' | 'COOL';
        title: string;
        actionInstructions: string;
        grandmaInstructions?: string;
        technicalExplanation?: string;
        proTip?: string;
        criticalPoint?: string;
        durationLabel?: string;
        temperatureLabel?: string;
    }[];
}
