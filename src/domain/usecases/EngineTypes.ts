import { CanonicalStyle } from '../models/Style';
import { DoughConfig } from '@/types';

export interface FormulaIngredient {
    key: string;
    label: string;
    grams: number;
    bakerPct: number;
}

export interface TimelineStep {
    title: string;
    durationMin?: number;
    temperatureC?: number;
    notes?: string;
}

export interface FormulaResult {
    ingredients: FormulaIngredient[];
    steps: TimelineStep[];
    warnings: string[];
}

export interface EngineTargetInputs {
    doughWeight: number; // weight per ball/loaf
    numBalls: number;
    targetHydration?: number; // Optional override
    targetSalt?: number; // Optional override
    targetYeastPct?: number;
    flourTypeOverride?: string;
}

export interface EquipmentProfile {
    type: 'home_oven' | 'pro_deck' | 'wood_fired' | 'ooni' | 'other';
    maxTempC?: number;
    bakingSurface?: 'steel' | 'stone' | 'pan' | 'screen';
}

export interface ComputeFormulaParams {
    style: CanonicalStyle;
    variantId?: string; // Optional if you want to select a specific variant inside the style
    targetInputs: EngineTargetInputs;
    equipmentProfile?: EquipmentProfile;
    // We might need environment (ambient temp) to compute timeline fully
    ambientTempC?: number;
}

// In the next step we will implement the actual logic
