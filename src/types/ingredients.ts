
export type IncrementCategory = 'sauce' | 'topping' | 'filling' | 'glaze';
export type IncrementCompatibility = 'validated' | 'variation' | 'experimental';

export interface IncrementTechnicalProfile {
    moistureLevel: 'low' | 'medium' | 'high';
    fatContent: 'low' | 'medium' | 'high';
    sugarContent: 'low' | 'medium' | 'high';
    thermalBehavior?: string;
    weightImpact?: string;
}

export interface Increment {
    id: string;
    visibleName: string;
    category: IncrementCategory;
    technicalProfile: IncrementTechnicalProfile;
    compatibilityByStyle: Record<string, IncrementCompatibility>; // styleId -> compatibility
    source: 'lab';
}

export interface UserIngredient {
    id: string;
    ownerUserId: string;
    visibleName: string;
    category: IncrementCategory;
    technicalProfile: IncrementTechnicalProfile;
    compatibilityByStyle: Record<string, IncrementCompatibility>;
    confidenceScore: number; // 0-1
    assumptions: string[];
    source: 'user';
    validatedBy: 'ai';
    createdAt: string;
}

export interface CustomStyle {
    id: string;
    baseStyleId: string;
    name: string;
    description?: string;
    increments: string[]; // Increment IDs (mix of official and user)
    technicalSummary?: string;
    ownerUserId: string;
    createdAt: string;
}

export interface AIValidationResponse {
    technicalProfile: IncrementTechnicalProfile;
    compatibilityByStyle: Record<string, IncrementCompatibility>;
    warnings: string[];
    confidenceScore: number;
    assumptions: string[];
}
