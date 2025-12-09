import { RecipeStyle } from './styles';

export type Region =
    | 'North America'
    | 'South America'
    | 'Europe'
    | 'Asia'
    | 'Middle East'
    | 'Africa'
    | 'Oceania'
    | 'Italy';

export type Category =
    | 'Pizza'
    | 'Bread'
    | 'Flatbread'
    | 'Enriched'
    | 'Snack'         // ex: Pão de Queijo, Pretzel
    | 'Buns'          // ex: Burger, Hot Dog
    | 'Pastry'        // ex: Croissant, Danish
    | 'Soft Bread';   // ex: Shokupan

export interface BaseIngredient {
    name: string;
    percentage: number;
}

// --- LOGIC & ENGINEERING ENUMS ---

// Local RecipeStyle enum removed in favor of strict typed one from ./styles
// Any local usage should be migrated to FermentationTechnique or specific methods
export { RecipeStyle };

export enum YeastType {
    INSTANT = 'INSTANT',
    ACTIVE_DRY = 'ACTIVE_DRY',
    FRESH = 'FRESH',
    SOURDOUGH_STARTER = 'SOURDOUGH_STARTER',
    NONE = 'NONE', // Químico ou físico apenas
}

export enum FermentationTechnique {
    DIRECT = 'DIRECT',
    COLD_FERMENT = 'COLD_FERMENT',
    SCALD = 'SCALD',       // Escaldo (Pão de Queijo)
    NO_FERMENT = 'NO_FERMENT',
}

// --- CALCULATION BRAIN ---

export interface CalculationProfile {
    method: 'baker_percentage' | 'starch_scald' | 'simple_mix';
    requiresYeast: boolean;
    requiresSteam?: boolean;
    allowOil?: boolean;
}

// --- DOMAIN INTERFACES ---

export interface DoughSpecs {
    hydration: { ideal: number; min: number; max: number };
    ovenTemp: { ideal: number; min: number; max: number }; // Celsius
    fermentationTime: string; // ex: "24h"
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
}




export interface ScientificProfile {
    // The Science of Flour (Rheology)
    flourRheology: {
        w_index: string; // e.g. "W280-320"
        pl_ratio: string; // P/L (Elasticity/Extensibility Ratio)
        absorption_capacity: string; // e.g. "High (65%+)"
        protein_type: string; // e.g. "Soft Wheat, low damaged starch"
        science_explanation: string; // "Why this flour?"
    };

    // The Science of Heat (Thermodynamics)
    thermalProfile: {
        oven_type: string;
        heat_distribution: string; // e.g. "High conduction (floor), High radiation (dome)"
        crust_development: string; // e.g. "Leopard spotting due to rapid gelatinization"
        crumb_structure: string; // e.g. "Large alveoli, thin walls"
    };

    // The Chemistry of Fermentation
    fermentationScience: {
        yeast_activity: string; // e.g. "Slow due to cold retard"
        ph_target: string; // e.g. "pH 5.5 - 5.8"
        organic_acids: string; // e.g. "Lactic dominant over Acetic"
        enzymatic_activity: string; // e.g. "High protease activity during autolyse"
    };

    // Legacy support for migration (optional)
    processScience?: string;
}

export interface ProcessStep {
    phase: 'Mix' | 'Bulk' | 'Ball' | 'Bake' | 'Prep' | 'Lamination' | 'Cook';
    title: string;
    duration: string;
    action: string;
    science: string;
    temperature?: string;
}

// Educational content interface
export interface EducationalContent {
    pro_tips: {
        tip: string;
        explanation: string;
    }[];

    what_if: {
        scenario: string;
        result: string;
        correction: string;
    }[];

    comparative_analysis: {
        target_style: string;
        difference: string;
        why_choose_this: string;
    }[];

    q_and_a: {
        question: string;
        answer: string;
        context?: string;
    }[];

    fermentation_methods: {
        method: 'Direct' | 'Biga' | 'Poolish' | 'Sourdough' | 'Hybrid' | 'Scald' | 'Tangzhong';
        suitability: 'Ideal' | 'Possible' | 'Not Recommended' | 'Historical' | 'Authentic';
        notes: string;
    }[];
}

// Deep Dive Module for Expert Consulting
export interface DeepDive {
    hydrationLogic: string;
    methodSuitability: {
        direct: { suitable: boolean; notes: string };
        biga: { suitable: boolean; notes: string };
        poolish: { suitable: boolean; notes: string };
    };
    whatIf: Array<{
        scenario: string;
        outcome: string;
        solution: string;
    }>;
    comparisons: Array<{
        vsStyle: string;
        difference: string;
    }>;
    proTips: string[];
}

export interface DoughStyle {
    id: string;
    name: string;

    // Facets
    region: Region;
    subRegion: string;
    category: Category;
    recipeStyle?: RecipeStyle; // Added for Calculator/Filter logic
    tags: string[];

    description: string;
    history_context: string;

    base_formula: BaseIngredient[];

    specs: DoughSpecs;

    // Engineering Logic (New Brain)
    calculation?: CalculationProfile;

    scientificProfile: ScientificProfile;

    // Rich content
    education?: EducationalContent;

    // The Knowledge Module
    deepDive?: DeepDive;

    process: ProcessStep[];

    references: string[];

    images?: {
        hero: string;
        dough: string;
        crumb: string;
    };

    // Legacy Support
    origin?: string;
    technical?: any;

    // Expanded Context
    regulatory_info?: string;
    global_presence?: string;
    variations?: any[];
}
