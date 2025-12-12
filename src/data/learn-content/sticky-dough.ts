import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const stickyDoughData: LearnArticleData = {
    id: "sticky-dough",
    title: t('learn.sticky_dough'),
    subtitle: "Understanding hydration, gluten development and fermentation conditions behind sticky dough behavior.",
    category: t('learn.troubleshooting_8'),
    difficulty: t('learn.intermediate_29'),
    tags: ["sticky", "hydration", "troubleshooting", "handling"],

    intro: "Sticky dough is typically the result of excess hydration, weak gluten formation or fermentation issues. Identifying the correct cause is essential for restoring control.",
    history: "As modern baking shifted to higher hydration levels, stickiness became a common technical challenge requiring systematic troubleshooting.",

    technicalFoundations: [
        "Hydration above 70% significantly increases surface tackiness.",
        "Insufficient gluten development yields sticky, weak dough.",
        "Over-fermentation weakens structure and increases stickiness.",
        "Dough temperature affects protein hydration and enzymatic activity."
    ],

    doughImpact: [
        "Sticky dough is harder to shape and prone to tearing.",
        "Gas retention becomes inconsistent.",
        "Surface tension is difficult to achieve."
    ],

    bakingImpact: [
        "Sticky dough often spreads, limiting oven spring.",
        "Crumb may appear uneven or collapsed.",
        "Crust may brown inconsistently due to moisture imbalance."
    ],

    practicalRanges: [
        { label: t('learn.hydration_threshold_for_tackiness'), notes: "Recommended: 72% (Range: 70-85%)" }
    ],

    practicalApplications: [
        "Hydration warnings appear when exceeding sticky thresholds in Calculator.",
        "Styles like Roman Pala tolerate higher stickiness.",
        "Record hydration vs dough feel to identify personal thresholds in MyLab.",
        "Levain acidity increases stickiness as dough ripens.",
        "DoughBot suggests fold sequences and flour adjustments."
    ],

    proTips: [
        "Wet-hand method reduces sticking.",
        "Cold dough is easier to handle than warm dough."
    ],

    criticalPoints: [
        "Too much bench flour dries the surface and alters hydration.",
        "Over-fermentation leads to irreversibly sticky dough."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration, fermentation time and flour strength are key drivers."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.high_hydration_2'),
            implications: "Very wet dough with naturally tacky behavior. Soft, extensible. Needs strong gluten and folds. Promotes open crumb when handled well."
        },
        {
            variant: t('learn.underdeveloped_gluten'),
            implications: "Dough remains sticky due to insufficient strength. Weak, elastic-poor. Hard to shape. Poor structural rise."
        }
    ],

    references: [
        "Modernist Bread — High Hydration Troubleshooting.",
        "AIB Dough Consistency Research."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.sweetheart_sticky_dough_is_like_trying_to_hold_jel'),
        whatItDoes: t('learn.makes_shaping_difficult'),
        howToUse: t('learn.its_too_wet_or_too_soft_to_handle_easily'),
        dangerSigns: t('learn.if_too_sticky_your_pizza_wont_hold_its_shape')
    }
};
