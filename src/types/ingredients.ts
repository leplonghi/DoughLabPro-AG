/**
 * INGREDIENTS MODULE
 * 
 * This file re-exports assembly component types for backward compatibility.
 * 
 * IMPORTANT: This file is deprecated and will be removed in a future version.
 * Please import from '@/types/assemblyComponents' instead.
 * 
 * @deprecated Use '@/types/assemblyComponents' instead
 */

// Re-export everything from the new module
export * from './assemblyComponents';

// Maintain old exports for compatibility
export type {
    AssemblyCategory as IncrementCategory,
    AssemblyCompatibility as IncrementCompatibility,
    AssemblyTechnicalProfile as IncrementTechnicalProfile,
    AssemblyComponent as Increment,
    UserAssemblyComponent as UserIngredient,
    AIValidationResponse,
    CustomStyle,
} from './assemblyComponents';
