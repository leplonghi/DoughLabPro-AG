import { FeatureKey } from '../../permissions';
import { DoughConfig } from '../../types';
import { useTranslation } from '@/i18n';

export type FomoTriggerContext = {
    hydration?: number;
    action?: 'save_preset' | 'access_consistency' | 'inactivity';
    levainCount?: number;
    userPlan?: string;
};

export const evaluateFomoTrigger = (context: FomoTriggerContext): FeatureKey | null => {
    // Hydration > 70%
    if (context.hydration && context.hydration > 70) {
        return 'calculator.hydration_advanced';
    }

    // Save Preset
    if (context.action === 'save_preset') {
        return 'calculator.save_preset';
    }

    // Consistency Access
    if (context.action === 'access_consistency') {
        return 'consistency';
    }

    // Inactivity (handled by app state usually, but here for completeness)
    if (context.action === 'inactivity') {
        return 'return_prompt';
    }

    // Levain Limit
    if (context.levainCount && context.levainCount > 1) {
        return 'levain_unlimited';
    }

    return null;
};
