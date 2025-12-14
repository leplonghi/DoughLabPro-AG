import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const excessAcidityData: LearnArticleData = {
    id: "excess-acidity",
    title: t('learn.excess_acidity'),
    subtitle: t('learn.diagnosing_sourness_gluten_weakening_and_fermentat'),
    category: t('learn.troubleshooting_3'),
    difficulty: t('learn.intermediate_12'),
    tags: ["acidity", "ph", "troubleshooting", "gluten"],

    intro: "Excess acidity results from prolonged fermentation, overactive levain or imbalanced bacteria-to-yeast ratio. It impacts flavor, gluten stability and dough handling.",
    history: "Acidification studies in bread science show how pH, lactic acid bacteria and yeasts interact to shape dough flavor and structure.",

    technicalFoundations: [
        "pH drops as bacteria produce lactic and acetic acids.",
        "Lower pH weakens gluten, reducing elasticity.",
        "Over-acidified dough becomes sticky and collapses.",
        "Acid profile depends on fermentation time and temperature."
    ],

    doughImpact: [
        "Dough becomes slack and fragile.",
        "Sticky surface due to gluten degradation.",
        "Gas retention becomes inconsistent."
    ],

    bakingImpact: [
        "Over-acidified dough yields limited oven spring.",
        "Crumb becomes gummy or irregular.",
        "Flavor becomes excessively sour."
    ],

    practicalRanges: [
        { label: "Ideal Dough pH (Levain Dough)", notes: "Recommended: 4.3 pH (Range: 4.1-4.4 pH)" }
    ],

    practicalApplications: [
        "Levain ratio suggestions help prevent excess acidity.",
        "Levain-heavy styles require precise fermentation curves.",
        "Record pH readings to correlate acidity with dough performance in MyLab.",
        "Levain maintenance routines minimize runaway acidity.",
        "DoughBot suggests pH-based adjustments in fermentation time."
    ],

    proTips: [
        "Refresh levain more frequently to reduce acidity.",
        "Reduce fermentation time when temperatures are warm."
    ],

    criticalPoints: [
        "Acidic dough loses gluten strength quickly.",
        "Over-acidity is difficult to reverse without rebalancing levain."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Levain ratio, fermentation duration and temperature."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.lactic_acid_dominance'),
            implications: t('learn.mild_creamy_acidity_smooth_soft_gentle_gluten_weak')
        },
        {
            variant: t('learn.acetic_acid_dominance'),
            implications: "Sharply sour, vinegar-like profile. Sharp, intense. Stronger gluten breakdown. Irregular rise."
        }
    ],

    references: [
        "Debra Wink — The Pineapple Juice Solution.",
        "AIB Sour Dough Studies."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.sweetheart_too_much_acidity_is_like_lemonade_thats'),
        whatItDoes: t('learn.makes_it_collapse_easily'),
        howToUse: t('learn.balanced_sourness_makes_delicious_bread'),
        dangerSigns: t('learn.the_dough_gets_too_sour_and_too_soft')
    }
};