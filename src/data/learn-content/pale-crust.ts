import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const paleCrustData: LearnArticleData = {
    id: "pale-crust",
    title: t('learn.pale_crust'),
    subtitle: t('learn.diagnosing_insufficient_heat_sugar_depletion_and_m'),
    category: t('learn.troubleshooting_6'),
    difficulty: t('learn.intermediate_22'),
    tags: ["crust", "browning", "troubleshooting", "maillard"],

    intro: "A pale crust occurs when browning reactions fail to activate. The causes include low baking temperature, excessive moisture, sugar depletion or overproofing.",
    history: "Food science research identified browning reactions as a complex interplay between heat, water activity and available sugars.",

    technicalFoundations: [
        "Maillard reaction triggers around 140–160°C.",
        "Caramelization requires sufficient sugars and heat.",
        "Excess surface moisture delays browning.",
        "Overproofing depletes available sugars."
    ],

    doughImpact: [
        "Overproofed dough consumes browning sugars.",
        "High hydration leaves surface wetter during baking.",
        "Weak gluten leads to irregular surface drying."
    ],

    bakingImpact: [
        "Low temperature produces pale, soft crust.",
        "Excess steam delays browning.",
        "Heat imbalance leads to uneven coloration."
    ],

    practicalRanges: [
        { label: t('learn.baking_temperature_for_consistent_browning'), notes: "Recommended: 320°C (Range: 280-350°C)" }
    ],

    practicalApplications: [
        "Yeast % and time influence browning sugar availability in Calculator.",
        "NY and Pala expect moderate to strong browning.",
        "Track coloration at different baking temperatures in MyLab.",
        "Levain acidity accelerates coloration but can promote uneven browning.",
        "OvenProfiler correlates oven heat curves to browning issues."
    ],

    proTips: [
        "Increase heat or bake slightly longer for deeper color.",
        "Avoid opening the oven early—moisture delays browning."
    ],

    criticalPoints: [
        "Overproofing removes sugars needed for browning.",
        "Low heat cannot be compensated by long bake times alone."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Temperature, hydration and fermentation time strongly influence surface color."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.low_heat_baking'),
            implications: "Insufficient energy for browning reactions. Soft crust, pale surface. Reduced caramelization potential. Weak crust structure."
        },
        {
            variant: t('learn.overproofed_dough_3'),
            implications: "Sugar depleted during fermentation. Fragile, wet. Surface dries slowly. Faint coloration."
        }
    ],

    references: [
        "AIB Browning Reaction Notes.",
        "Food Chemistry — Maillard Reaction Studies."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.sweetheart_a_pale_crust_is_like_toast_you_didnt_le'),
        whatItDoes: t('learn.makes_the_crust_soft_and_lightcolored'),
        howToUse: t('learn.heat_is_your_friend__use_enough_of_it'),
        dangerSigns: t('learn.the_oven_wasnt_hot_enough_or_the_dough_ran_out_of_')
    }
};