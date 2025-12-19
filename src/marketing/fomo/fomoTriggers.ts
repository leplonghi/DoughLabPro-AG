import { FeatureKey } from '../../permissions';
import { useTranslation } from '@/i18n';

export type FomoAction = 'save_preset' | 'access_consistency' | 'inactivity' | 'share_recipe' | 'view_community_ranking';

export interface FomoTriggerConfig {
    key: FeatureKey;
    description: string;
    cta: string;
}

export const FOMO_TRIGGERS: Record<FeatureKey, FomoTriggerConfig> = {
    'calculator.hydration_advanced': {
        key: 'calculator.hydration_advanced',
        description: 'Unlock high hydration doughs (>70%) with advanced handling techniques.',
        cta: 'Unlock Advanced Hydration',
    },
    'calculator.save_preset': {
        key: 'calculator.save_preset',
        description: 'Save your custom dough recipes and build your personal library.',
        cta: 'Start Saving Recipes',
    },
    'consistency': {
        key: 'consistency',
        description: 'Track your consistency over time and master your craft.',
        cta: 'Track Consistency',
    },
    'return_prompt': {
        key: 'return_prompt',
        description: 'Welcome back! Take your baking to the next level.',
        cta: 'Upgrade Now',
    },
    'levain_unlimited': {
        key: 'levain_unlimited',
        description: 'Manage multiple levains and track their feeding history.',
        cta: 'Manage Unlimited Levains',
    },
    'community.ranking': {
        key: 'community.ranking',
        description: 'See where you rank among the best bakers in the community.',
        cta: 'View Rankings',
    },
    // Add defaults for others to avoid crashes
    'calculator.basic_3_styles': { key: 'calculator.basic_3_styles', description: 'Basic Styles', cta: 'Unlock' },
    'calculator.all_styles': { key: 'calculator.all_styles', description: 'Access all dough styles', cta: 'Unlock All Styles' },
    'calculator.preferments_advanced': { key: 'calculator.preferments_advanced', description: 'Advanced preferments', cta: 'Unlock' },
    'calculator.environmental_insights': { key: 'calculator.environmental_insights', description: 'Environmental insights', cta: 'Unlock' },
    'styles.pick_3_full': { key: 'styles.pick_3_full', description: 'Full access to 3 styles', cta: 'Unlock' },
    'styles.full_access': { key: 'styles.full_access', description: 'Full access to all styles', cta: 'Unlock' },
    'learn.summary_only': { key: 'learn.summary_only', description: 'Summary only', cta: 'Unlock' },
    'learn.full_and_grandma': { key: 'learn.full_and_grandma', description: 'Full articles', cta: 'Unlock' },
    'mylab.two_bakes_one_full': { key: 'mylab.two_bakes_one_full', description: 'MyLab Basic', cta: 'Unlock' },
    'mylab.unlimited_advanced': { key: 'mylab.unlimited_advanced', description: 'MyLab Unlimited', cta: 'Unlock' },
    'levain.create_basic': { key: 'levain.create_basic', description: 'Create Levain', cta: 'Unlock' },
    'levain.lab_full': { key: 'levain.lab_full', description: 'Full Levain Lab', cta: 'Unlock' },
    'tools.doughbot': { key: 'tools.doughbot', description: 'AI DoughBot', cta: 'Unlock' },
    'tools.oven_analysis': { key: 'tools.oven_analysis', description: 'Oven Analysis', cta: 'Unlock' },
    'export.pdf_json': { key: 'export.pdf_json', description: 'Export to PDF/JSON', cta: 'Unlock' },
    'community.share_and_clone': { key: 'community.share_and_clone', description: 'Share and Clone', cta: 'Unlock' },
    'app.theme_customization': { key: 'app.theme_customization', description: 'Theme Customization', cta: 'Unlock' },
    'mylab.timeline': { key: 'mylab.timeline', description: 'Timeline', cta: 'Unlock' },
    'tools.toppings_advanced': { key: 'tools.toppings_advanced', description: 'Advanced Toppings', cta: 'Unlock' },
    'styles.detail': { key: 'styles.detail', description: 'Style Details', cta: 'Unlock' },
    'styles.ai.builder': { key: 'styles.ai.builder', description: 'AI Builder', cta: 'Unlock' },
    'styles.formula': { key: 'styles.formula', description: 'Style Formula', cta: 'Unlock' },
    'styles.technical': { key: 'styles.technical', description: 'Technical Details', cta: 'Unlock' },
    'styles.technical_parameters': { key: 'styles.technical_parameters', description: 'Technical Parameters', cta: 'Unlock' },
    'styles.specs': { key: 'styles.specs', description: 'Specs', cta: 'Unlock' },
    'community.feed': { key: 'community.feed', description: 'Community Feed', cta: 'Unlock' },
    'community.clone': { key: 'community.clone', description: 'Clone Recipes', cta: 'Unlock' },
    'community.like': { key: 'community.like', description: 'Like Posts', cta: 'Unlock' },
    'community.comment': { key: 'community.comment', description: 'Comment', cta: 'Unlock' },
    'community.profile_full': { key: 'community.profile_full', description: 'Full Profile', cta: 'Unlock' },
    'mylab.quickAction': { key: 'mylab.quickAction', description: 'Quick Actions', cta: 'Unlock' },
    'mylab.healthIndex': { key: 'mylab.healthIndex', description: 'Health Index', cta: 'Unlock' },
    'levain.multipleLevains': { key: 'levain.multipleLevains', description: 'Multiple Levains', cta: 'Unlock' },
    'levain.exportPDF': { key: 'levain.exportPDF', description: 'Export PDF', cta: 'Unlock' },
    'calculator.advanced_ingredients': { key: 'calculator.advanced_ingredients', description: 'Dough Composition - Add custom ingredients to your dough', cta: 'Unlock' },
    'calculator.flour_blend': { key: 'calculator.flour_blend', description: 'Blend multiple flours for custom recipes', cta: 'Unlock Flour Blending' },
    'styles.advancedSpecs': { key: 'styles.advancedSpecs', description: 'Advanced Specs', cta: 'Unlock' },
    'calculator.advanced': { key: 'calculator.advanced', description: 'Advanced Calculator', cta: 'Unlock' },
};
