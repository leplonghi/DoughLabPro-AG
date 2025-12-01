
import { User } from './types';

export type PlanId = 'free' | 'calculator_unlock' | 'lab_pro';

export type FeatureKey =
    | 'calculator.basic_3_styles'
    | 'calculator.all_styles'
    | 'calculator.preferments_advanced'
    | 'calculator.environmental_insights'
    | 'styles.pick_3_full'
    | 'styles.full_access'
    | 'learn.summary_only'
    | 'learn.full_and_grandma'
    | 'mylab.two_bakes_one_full'
    | 'mylab.unlimited_advanced'
    | 'levain.create_basic'
    | 'levain.lab_full'
    | 'tools.doughbot'
    | 'tools.oven_analysis'
    | 'export.pdf_json'
    | 'community.share_and_clone'
    | 'app.theme_customization'
    | 'mylab.timeline'
    | 'tools.toppings_advanced'
    | 'styles.detail'
    | 'styles.ai.builder'
    | 'levain_unlimited'
    | 'styles.formula'
    | 'styles.technical'
    | 'styles.technical_parameters'
    | 'styles.specs'
    | 'community.feed'
    | 'community.clone'
    | 'community.like'
    | 'community.comment'
    | 'community.profile_full'
    | 'community.ranking'
    | 'calculator.hydration_advanced'
    | 'calculator.save_preset'

// Safety fallback for admin
if (user.email === 'leplonghi@gmail.com' || user.isAdmin) return 'lab_pro';

const plan = user.plan;
if (plan === 'pro') return 'lab_pro';

return (plan as PlanId) || 'free';
}

export function canUseFeature(plan: PlanId, feature: FeatureKey): boolean {
    const allowedPlans = FEATURE_PLAN_MAP[feature];

    if (!allowedPlans) {
        console.error(
            `[canUseFeature] Missing FEATURE_PLAN_MAP key: ${feature}. Plan: ${plan}`
        );
        return false;
    }

    return allowedPlans.includes(plan);
}

export const FREE_STYLE_IDS = [
    'NEAPOLITAN', // Pizza
    'SOURDOUGH',  // Bread
    'CINNAMON_ROLL' // Pastry
];
