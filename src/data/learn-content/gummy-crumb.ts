import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const gummyCrumbData: LearnArticleData = {
    id: "gummy-crumb",
    title: t('learn.gummy_crumb'),
    subtitle: "Understanding incomplete baking, hydration imbalance and starch gelatinization failure.",
    category: t('learn.troubleshooting_5'),
    difficulty: t('learn.intermediate_19'),
    tags: ["crumb", "gumminess", "troubleshooting", "baking"],

    intro: "Gummy crumb results when starch gelatinization is incomplete or when the crumb retains excessive moisture. It is a classic sign of underbaking or poor structural development.",
    history: "Gummy crumb has been documented extensively in cereal science, particularly in relation to gelatinization thresholds and moisture migration.",

    technicalFoundations: [
        "Starch must reach ~60–70°C internally to fully gelatinize.",
        "High hydration delays internal temperature rise.",
        "Underbaking leaves interior moisture trapped.",
        "Weak gluten allows moisture pooling in dense zones."
    ],

    doughImpact: [
        "Dense or wet zones trap water.",
        "Underproofed dough retains moisture unevenly.",
        "Weak gluten fails to enable moisture escape."
    ],

    bakingImpact: [
        "Sticky or paste-like centers.",
        "Wet crumb that collapses when pressed.",
        "Pale crust and weak structure."
    ],

    practicalRanges: [
        { label: t('learn.internal_temp_for_complete_bake'), notes: "Recommended: 94°C (Range: 92-98°C)" }
    ],

    practicalApplications: [
        "Hydration affects bake-time recommendations in Calculator.",
        "Thick styles require extended bake times for full set.",
        "Log internal temperature to track proper baking curves in MyLab.",
        "Acidic doughs may set earlier but still retain moisture.",
        "OvenProfiler suggests temperature curves to avoid gummy results."
    ],

    proTips: [
        "Use a thermometer to confirm internal temperature.",
        "Avoid slicing too soon after baking."
    ],

    criticalPoints: [
        "Gummy crumb is almost always underbaking.",
        "High hydration requires structured gluten for proper moisture release."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration, thickness, fermentation and baking temperature."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.high_hydration_dough'),
            implications: "Retains moisture longer. Wet, slow-setting. Needs longer bake. Risk of gummy center."
        },
        {
            variant: t('learn.underbaked_dough'),
            implications: "Insufficient heat exposure. Soft, sticky. Incomplete gelatinization. Gummy sections."
        }
    ],

    references: [
        "Food Chemistry — Starch Gelatinization Studies.",
        "AIB Moisture Migration Papers."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.sweetheart_gummy_crumb_is_like_cake_batter_in_the_'),
        whatItDoes: t('learn.makes_the_bread_soggy_and_sticky'),
        howToUse: t('learn.let_it_bake_fully_and_cool_properly_before_slicing'),
        dangerSigns: t('learn.the_inside_didnt_heat_enough_to_firm_up')
    }
};
