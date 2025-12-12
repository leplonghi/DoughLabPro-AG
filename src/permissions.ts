
import { User } from './types';
import { useTranslation } from '@/i18n';

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
    | 'consistency'
    | 'return_prompt'
    | 'mylab.quickAction'
    | 'mylab.healthIndex'
    | 'styles.advancedSpecs'
    | 'calculator.advanced'
    | 'levain.multipleLevains'
    | 'levain.exportPDF'
    | 'calculator.advanced_ingredients';

export const FEATURE_PLAN_MAP: Record<FeatureKey, PlanId[]> = {
    // Calculator
    'calculator.basic_3_styles': ['free', 'calculator_unlock', 'lab_pro'],
    'calculator.all_styles': ['calculator_unlock', 'lab_pro'],
    'calculator.preferments_advanced': ['free', 'calculator_unlock', 'lab_pro'], // Unlocked for free users (constrained by style)
    'calculator.environmental_insights': ['calculator_unlock', 'lab_pro'],
    'calculator.advanced': ['free', 'calculator_unlock', 'lab_pro'], // Unlocked for free users
    'calculator.advanced_ingredients': ['calculator_unlock', 'lab_pro'],

    // Styles
    'styles.pick_3_full': ['free', 'calculator_unlock', 'lab_pro'],
    'styles.full_access': ['calculator_unlock', 'lab_pro'],
    'styles.advancedSpecs': ['lab_pro'],

    // Learn
    'learn.summary_only': ['free', 'calculator_unlock', 'lab_pro'],
    'learn.full_and_grandma': ['lab_pro'],

    // MyLab
    'mylab.two_bakes_one_full': ['free', 'calculator_unlock', 'lab_pro'],
    'mylab.unlimited_advanced': ['lab_pro'],
    'mylab.quickAction': ['lab_pro'],
    'mylab.healthIndex': ['lab_pro'],

    // Levain
    'levain.create_basic': ['free', 'calculator_unlock', 'lab_pro'],
    'levain.lab_full': ['lab_pro'],
    'levain.multipleLevains': ['lab_pro'],
    'levain.exportPDF': ['lab_pro'],

    // Tools
    'tools.doughbot': ['free', 'lab_pro'], // Page accessible, logic restricted
    'tools.oven_analysis': ['lab_pro'],
    'export.pdf_json': ['calculator_unlock', 'lab_pro'],
    'community.share_and_clone': ['lab_pro'],
    'app.theme_customization': ['lab_pro'],
    'mylab.timeline': ['lab_pro'],
    'tools.toppings_advanced': ['lab_pro'],

    // Missing keys added for Pro access
    'styles.detail': ['free', 'calculator_unlock', 'lab_pro'],
    'styles.ai.builder': ['lab_pro'],
    'levain_unlimited': ['lab_pro'],
    'styles.formula': ['lab_pro'],
    'styles.technical': ['lab_pro'],
    'styles.technical_parameters': ['lab_pro'],
    'styles.specs': ['lab_pro'],

    // Community
    'community.feed': ['free', 'lab_pro'], // View only for free (restricted by actions)
    'community.clone': ['lab_pro'],
    'community.like': ['lab_pro'],
    'community.comment': ['lab_pro'],
    'community.profile_full': ['lab_pro'],
    'community.ranking': ['lab_pro'],

    // Marketing / FOMO Triggers
    'calculator.hydration_advanced': ['free', 'calculator_unlock', 'lab_pro'],
    'calculator.save_preset': ['calculator_unlock', 'lab_pro'],
    'consistency': ['lab_pro'],
    'return_prompt': ['lab_pro'],
};

export function getCurrentPlan(user: User | null): PlanId {
    if (!user) return 'free';

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
