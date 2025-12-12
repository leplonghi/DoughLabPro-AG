import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const stretchFoldArticle: LearnArticleData = {
    id: "stretch-and-fold",
    title: t('learn.stretch__fold__gentle_gluten_strengthening'),
    subtitle: t('learn.a_loweffort_technique_to_build_structure_gas_reten'),
    category: t('learn.process_techniques_13'),
    difficulty: t('learn.beginner_11'),
    tags: ["stretch-and-fold", "gluten", "structure", "technique"],

    intro: "Stretch & Fold strengthens gluten networks without overmixing. It improves dough strength, gas retention and extensibility by layering and reorienting gluten strands.",
    history: "Popularized within artisan baking to reduce mechanical mixing and preserve dough oxidation, enabling open-crumb structures.",

    technicalFoundations: [
        "The stretch elongates gluten strands.",
        "The fold layers them, creating directional strength.",
        "Rest periods allow gluten relaxation.",
        "Multiple rounds incrementally build tension."
    ],

    doughImpact: [
        "Increases dough strength without excessive elasticity.",
        "Improves gas retention and bubble distribution.",
        "Enhances extensibility when combined with adequate rest.",
        "Too many folds overly tighten the dough."
    ],

    bakingImpact: [
        "Results in taller oven spring.",
        "Enhances crumb openness.",
        "Improves dough stability during expansion."
    ],

    practicalRanges: [
        { label: t('learn.basic_routine'), notes: "Recommended: 3 rounds (Range: 2-4 rounds)" },
        { label: t('learn.interval_between_rounds'), notes: "Recommended: 30 minutes (Range: 20-40 minutes)" }
    ],

    practicalApplications: [
        "High hydration triggers recommendation of coil folds in Calculator.",
        "Roman Pala, artisan breads and high-hydration styles benefit most.",
        "Track crumb openness after 0, 2 and 4 fold routines in MyLab.",
        "Levain doughs respond very well to gentle coil folds.",
        "Doughbot predicts ideal fold count from hydration and fermentation time."
    ],

    proTips: [
        "Use wet hands to avoid tearing.",
        "Stop folding when the dough becomes tight."
    ],

    criticalPoints: [
        "Too many folds make shaping harder.",
        "Always let dough rest properly between folds."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration dictates which fold technique works best.",
        "Dough temperature affects elasticity during folds."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.coil_fold'),
            implications: "Ideal for high-hydration doughs. Gentle, layering. Builds strength without tearing. Open crumb with tall spring."
        },
        {
            variant: t('learn.letter_fold'),
            implications: "Classic artisan method. Directional tension. Increases structure. Great for shaping rounds."
        }
    ],

    references: [
        "Hamelman, J. Bread."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, stretch & fold is like gently folding a blanket — every fold makes it stronger.",
        whatItDoes: t('learn.this_builds_strength_without_hard_work'),
        howToUse: t('learn.you_stretch_the_dough_fold_it_over_and_let_it_rest'),
        dangerSigns: t('learn.too_many_folds_make_it_tight__gentle_hands')
    }
};
