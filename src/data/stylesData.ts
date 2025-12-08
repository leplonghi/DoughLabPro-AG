import { DoughStyleDefinition } from '@/types/styles';
import { STYLES_DATA as REGISTRY_STYLES } from './styles/registry';

// The hardcoded/static styles (fallback and seed data)
export const RAW_CANONICAL_STYLES = REGISTRY_STYLES;

// Identity function now, but allows for data transformation from Firestore later
export function mapRawStyleToDoughStyleDefinition(raw: any): DoughStyleDefinition {
    // In the future, validation/migration logic goes here.
    return raw as DoughStyleDefinition;
}

// Backward compatibility: STYLES_DATA is the default static list
export const STYLES_DATA = RAW_CANONICAL_STYLES.map(mapRawStyleToDoughStyleDefinition);
