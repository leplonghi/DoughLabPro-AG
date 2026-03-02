
import { User } from './types';

// Unified Plan IDs - includes legacy values for backward compatibility
export type PlanId = 'free' | 'pro' | 'master' | 'lab_pro' | 'calculator_unlock' | 'standard';

export type FeatureKey =
    | 'calculator.basic_3_styles'
    | 'calculator.all_styles'
    | 'calculator.preferments_advanced'
    | 'calculator.environmental_insights'
    | 'styles.pick_3_full'
    | 'styles.full_access'
    | 'learn.summary_only'
    | 'learn.full_and_grandma'
    | 'mylab.history_unlimited'
    | 'mylab.two_bakes_one_full'
    | 'mylab.unlimited_advanced'
    | 'levain.create_basic'
    | 'levain.lab_full'
    | 'tools.doughbot'
    | 'tools.oven_analysis'
    | 'export.pdf_json'
    | 'export.clean_recipe'
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
    | 'calculator.advanced_ingredients'
    | 'calculator.flour_blend'
    | 'mylab.schedules_unlimited'
    | 'mylab.insights_smart'
    | 'mylab.historical_comparisons'
    | 'notifications.advanced';

export type PlanType = PlanId;
export type PermissionKey = FeatureKey;

export const FEATURE_PLAN_MAP: Record<FeatureKey, PlanId[]> = {
    // Calculator
    'calculator.basic_3_styles': ['free', 'pro'],
    'calculator.all_styles': ['pro'],
    'calculator.preferments_advanced': ['free', 'pro'],
    'calculator.environmental_insights': ['pro'],
    'calculator.advanced': ['free', 'pro'],
    'calculator.advanced_ingredients': ['pro'],
    'calculator.flour_blend': ['pro'],
    'calculator.hydration_advanced': ['free', 'pro'],
    'calculator.save_preset': ['pro'],

    // Styles
    'styles.pick_3_full': ['free', 'pro'],
    'styles.full_access': ['pro'],
    'styles.advancedSpecs': ['pro'],
    'styles.detail': ['free', 'pro'],
    'styles.ai.builder': ['pro'],
    'styles.formula': ['pro'],
    'styles.technical': ['pro'],
    'styles.technical_parameters': ['pro'],
    'styles.specs': ['pro'],

    // Learn & Support
    'learn.summary_only': ['free', 'pro'],
    'learn.full_and_grandma': ['pro'],

    // MyLab & History
    'mylab.two_bakes_one_full': ['free', 'pro'],
    'mylab.history_unlimited': ['pro'],
    'mylab.unlimited_advanced': ['pro'],
    'mylab.quickAction': ['pro'],
    'mylab.healthIndex': ['pro'],
    'mylab.timeline': ['pro'],
    'mylab.schedules_unlimited': ['pro'],
    'mylab.insights_smart': ['pro'],
    'mylab.historical_comparisons': ['pro'],

    // Levain
    'levain.create_basic': ['free', 'pro'],
    'levain.lab_full': ['pro'],
    'levain.multipleLevains': ['pro'],
    'levain.exportPDF': ['pro'],
    'levain_unlimited': ['pro'],

    // Tools & Export
    'tools.doughbot': ['free', 'pro'], // Base accessible, but Pro triggers inside
    'tools.oven_analysis': ['pro'],
    'export.pdf_json': ['pro'],
    'export.clean_recipe': ['pro'],
    'tools.toppings_advanced': ['pro'],
    'notifications.advanced': ['pro'],

    // Community
    'community.share_and_clone': ['pro'],
    'community.feed': ['free', 'pro'],
    'community.clone': ['pro'],
    'community.like': ['pro'],
    'community.comment': ['pro'],
    'community.profile_full': ['pro'],
    'community.ranking': ['pro'],

    // Others
    'app.theme_customization': ['pro'],
    'consistency': ['pro'],
    'return_prompt': ['pro'],
};

export function getCurrentPlan(user: User | null): PlanId {
    if (!user) return 'free';

    // Admin safety
    if (user.email === 'leplonghi@gmail.com' || user.isAdmin) return 'pro';

    const plan = user.plan as any;
    if (plan === 'pro' || plan === 'lab_pro' || plan === 'standard') return 'pro';

    return 'free';
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

/**
 * Free tier style IDs — these styles must have `isPro: false` in their definition.
 * The actual access gate is `canAccessStyle()` in domain/usecases/canAccess.ts,
 * which reads `style.isPro`. This list is the canonical source of truth for which
 * styles should be free.
 *
 * Strategy: 8 styles covering all categories — enough to demo value, not enough to skip Pro.
 */
export const FREE_STYLE_IDS = [
    // ── Pizza (2) ─────────────────────────────────────────────────
    'neapolitan_avpn_classic',   // O clássico mundial — intro ao app
    'new_york_slice_shop',       // Segundo mais buscado globalmente

    // ── Bread (2) ─────────────────────────────────────────────────
    'sourdough_san_francisco',   // Gateway fermentação natural
    'pao_frances_brazil',        // Pão mais consumido no Brasil (mercado primário)

    // ── Pastry / Enriched (2) ─────────────────────────────────────
    'cinnamon_rolls_classic',    // Resultado visual impressionante — gateway doce
    'challah_braided',           // Enriquecido aspiracional — leva ao upgrade

    // ── Especiais (2) ─────────────────────────────────────────────
    'focaccia_genovese',         // Fácil para iniciantes — alta retenção
    'brazilian_cheese_bread',    // Ícone BR, gluten-free — diferenciação
] as const;
