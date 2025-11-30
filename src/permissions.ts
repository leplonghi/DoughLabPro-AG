
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
    | 'tools.toppings_advanced';

export const FEATURE_PLAN_MAP: Record<FeatureKey, PlanId[]> = {
    // Calculator
    'calculator.basic_3_styles': ['free', 'calculator_unlock', 'lab_pro'],
    'calculator.all_styles': ['calculator_unlock', 'lab_pro'],
    'calculator.preferments_advanced': ['calculator_unlock', 'lab_pro'],
    'calculator.environmental_insights': ['calculator_unlock', 'lab_pro'],

    // Styles
    'styles.pick_3_full': ['free', 'calculator_unlock', 'lab_pro'],
    'styles.full_access': ['calculator_unlock', 'lab_pro'],

    // Learn
    'learn.summary_only': ['free', 'calculator_unlock', 'lab_pro'],
    'learn.full_and_grandma': ['lab_pro'],

    // MyLab
    'mylab.two_bakes_one_full': ['free', 'calculator_unlock', 'lab_pro'],
    'mylab.unlimited_advanced': ['lab_pro'],

    // Levain
    'levain.create_basic': ['free', 'calculator_unlock', 'lab_pro'],
    'levain.lab_full': ['lab_pro'],

    // Tools
    'tools.doughbot': ['lab_pro'],
    'tools.oven_analysis': ['lab_pro'],
    'export.pdf_json': ['calculator_unlock', 'lab_pro'],
    'community.share_and_clone': ['lab_pro'],
    'app.theme_customization': ['lab_pro'],
    'mylab.timeline': ['lab_pro'],
    'tools.toppings_advanced': ['lab_pro'],
};

export function getCurrentPlan(user: User | null): PlanId {
    if (!user) return 'free';
    // Map legacy 'pro' to 'lab_pro' for now, or use the specific plan field
    if (user.plan === 'lab_pro') return 'lab_pro';
    if (user.plan === 'calculator_unlock') return 'calculator_unlock';
    if (user.plan === 'free') return 'free';

    // Fallback for legacy data
    if (user.isPro) return 'lab_pro';

    return 'free';
}

export function canUseFeature(plan: PlanId, feature: FeatureKey): boolean {
    const allowedPlans = FEATURE_PLAN_MAP[feature];
    if (!allowedPlans || !Array.isArray(allowedPlans)) {
        console.warn(`[canUseFeature] Invalid feature key: ${feature}`);
        return false;
    }
    return allowedPlans.includes(plan);
}

export const FREE_STYLE_IDS = [
    'NEAPOLITAN', // Pizza
    'SOURDOUGH',  // Bread
    'CINNAMON_ROLL' // Pastry
];
