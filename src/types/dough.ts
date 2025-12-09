export type Region = 'Italy' | 'Americas' | 'Europe' | 'Global';
export type Category = 'Pizza' | 'Bread' | 'Enriched' | 'Flatbread';

export interface BaseIngredient {
    name: string;
    percentage: number;
}

export interface DoughSpecs {
    hydration: { ideal: number; min: number; max: number };
    ovenTemp: { ideal: number; min: number; max: number }; // Celsius
    fermentationTime: string; // ex: "24h"
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
}

export interface ScientificProfile {
    flourRheology: string;
    processScience: string;
}

export interface ProcessStep {
    phase: 'Mix' | 'Bulk' | 'Ball' | 'Bake';
    title: string;
    duration: string;
    action: string;
    science: string;
    temperature?: string;
}

// New educational content interface matching styles.ts
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
        method: 'Direct' | 'Biga' | 'Poolish' | 'Sourdough' | 'Hybrid';
        suitability: 'Ideal' | 'Possible' | 'Not Recommended' | 'Historical' | 'Authentic';
        notes: string;
    }[];
}

// New Deep Dive Module for Expert Consulting
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
    tags: string[];

    description: string;
    history_context: string;

    base_formula: BaseIngredient[];

    specs: DoughSpecs;

    scientificProfile: ScientificProfile;

    // New optional field for rich content
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
}
