/**
 * ASSEMBLY COMPONENTS (Componentes de Montagem)
 * 
 * This file defines the types for assembly components - ingredients that go
 * ON TOP OF or INSIDE the dough (sauces, toppings, fillings, finishes).
 * 
 * These are DIFFERENT from dough ingredients (flour, water, salt, yeast, etc.)
 * which are structural components mixed INTO the dough.
 * 
 * Naming Convention:
 * - English: "Assembly Components"
 * - Portuguese: "Componentes de Montagem" or "Ingredientes de Finalização"
 * 
 * Categories:
 * - sauce: Molhos (tomato, BBQ, pesto, etc.)
 * - topping: Coberturas (cheeses, meats, vegetables)
 * - filling: Recheios (for calzones, pastries)
 * - finish: Acabamentos (olive oil, herbs, honey)
 */

export type AssemblyCategory = 'sauce' | 'topping' | 'filling' | 'finish';
export type AssemblyCompatibility = 'validated' | 'variation' | 'experimental';
export type ApplicationMoment = 'pre_oven' | 'post_oven' | 'mid_bake';

export interface AssemblyTechnicalProfile {
    moistureLevel: 'low' | 'medium' | 'high';
    fatContent: 'low' | 'medium' | 'high';
    sugarContent: 'low' | 'medium' | 'high';
    thermalBehavior?: string;
    weightImpact?: string;
}

/**
 * Official Assembly Component
 * 
 * Pre-defined components from the DoughLabPro catalog.
 * These are validated and have full technical profiles.
 */
export interface AssemblyComponent {
    id: string;
    visibleName: string;
    category: AssemblyCategory;
    technicalProfile: AssemblyTechnicalProfile;
    compatibilityByStyle: Record<string, AssemblyCompatibility>; // styleId -> compatibility
    applicationMoment?: ApplicationMoment;
    source: 'lab' | 'official';
}

/**
 * User-Created Assembly Component
 * 
 * Custom components created by users with AI validation.
 * Includes confidence scores and assumptions.
 */
export interface UserAssemblyComponent {
    id: string;
    ownerUserId: string;
    visibleName: string;
    category: AssemblyCategory;
    technicalProfile: AssemblyTechnicalProfile;
    compatibilityByStyle: Record<string, AssemblyCompatibility>;
    confidenceScore: number; // 0-1
    assumptions: string[];
    applicationMoment?: ApplicationMoment;
    source: 'user';
    validatedBy: 'ai';
    createdAt: string;
}

/**
 * AI Validation Response
 * 
 * Response from AI when validating a user-created component.
 */
export interface AIValidationResponse {
    technicalProfile: AssemblyTechnicalProfile;
    compatibilityByStyle: Record<string, AssemblyCompatibility>;
    warnings: string[];
    confidenceScore: number;
    assumptions: string[];
}

/**
 * Custom Style with Assembly Components
 * 
 * User-defined style that includes specific assembly components.
 */
export interface CustomStyle {
    id: string;
    baseStyleId: string;
    name: string;
    description?: string;
    components: string[]; // Component IDs (mix of official and user)
    technicalSummary?: string;
    ownerUserId: string;
    createdAt: string;
}

// ============================================================================
// BACKWARD COMPATIBILITY ALIASES
// ============================================================================
// These aliases maintain compatibility with existing code while we migrate
// to the new naming convention.
// 
// @deprecated Use AssemblyCategory instead
export type IncrementCategory = AssemblyCategory;

// @deprecated Use AssemblyCompatibility instead
export type IncrementCompatibility = AssemblyCompatibility;

// @deprecated Use AssemblyTechnicalProfile instead
export type IncrementTechnicalProfile = AssemblyTechnicalProfile;

// @deprecated Use AssemblyComponent instead
export type Increment = AssemblyComponent;

// @deprecated Use UserAssemblyComponent instead
export type UserIngredient = UserAssemblyComponent;

// ============================================================================
// TYPE GUARDS
// ============================================================================

export function isOfficialComponent(
    component: AssemblyComponent | UserAssemblyComponent
): component is AssemblyComponent {
    return component.source === 'lab' || component.source === 'official';
}

export function isUserComponent(
    component: AssemblyComponent | UserAssemblyComponent
): component is UserAssemblyComponent {
    return component.source === 'user';
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type AnyAssemblyComponent = AssemblyComponent | UserAssemblyComponent;

export interface AssemblyComponentWithQuantity extends AssemblyComponent {
    quantity?: number; // in grams
}

export interface UserAssemblyComponentWithQuantity extends UserAssemblyComponent {
    quantity?: number; // in grams
}
