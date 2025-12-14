import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const overproofUnderproofData: LearnArticleData = {
    id: "overproof-underproof",
    title: t('learn.overproof_vs_underproof'),
    subtitle: t('learn.recognizing_fermentation_extremes_and_how_they_aff'),
    category: t('learn.fermentation_science_8'),
    difficulty: t('learn.intermediate_21'),
    tags: ["proofing", "fermentation", "troubleshooting", "oven-spring"],

    intro: "Proofing is the final fermentation stage before baking. Identifying whether dough is underproofed or overproofed is essential for texture, oven spring and crumb quality.",
    history: "The distinction between proofing levels became essential with commercial yeast and controlled fermentation environments in professional bakeries.",

    technicalFoundations: [
        "Underproofed dough has insufficient gas expansion and tight gluten.",
        "Overproofed dough has excessive gas and weakened gluten walls.",
        "Proofing balance depends on yeast %, temperature and fermentation curves.",
        "Gas cell structure and gluten alignment determine final stability."
    ],

    doughImpact: [
        "Underproofed: elastic, tight, prone to tearing.",
        "Overproofed: fragile, overly soft, collapses easily.",
        "Proper proofing: balanced extensibility and gas retention."
    ],

    bakingImpact: [
        "Underproofed: poor oven spring, dense crumb.",
        "Overproofed: collapsed structure and pale crust.",
        "Proper proofing: maximum oven spring and uniform crumb."
    ],

    practicalRanges: [
        { label: "Proofing Time (Warm Kitchen)", notes: "Recommended: 90 minutes (Range: 45-120 minutes)" },
        { label: "Proofing Time (Cold Dough)", notes: "Recommended: 3 hours (Range: 2-6 hours)" }
    ],

    practicalApplications: [
        "Doughbot warns when proofing time is mismatched with yeast % or DT.",
        "Neapolitan requires strict proofing to avoid collapse during hot baking.",
        "Log dough volume at intervals to understand visual proofing cues in MyLab.",
        "Levain doughs overproof faster due to LAB activity.",
        "Proofing Monitor suggests ideal temperature for stable fermentation."
    ],

    proTips: [
        "Use the finger-poke test for real-time assessment.",
        "Adjust temperature instead of drastically changing time."
    ],

    criticalPoints: [
        "Overproofing damage is irreversible.",
        "Underproofing limits oven spring potential."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Temperature and yeast % strongly define proofing speed.",
        "Hydration influences dough fragility at high proof."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.underproofed_dough_2'),
            implications: "Low gas buildup; structure too tight. Elastic, dense. Hard to stretch, tears easily. Low rise, compact crumb."
        },
        {
            variant: t('learn.overproofed_dough_2'),
            implications: "Excess gas and weakened gluten. Soft, fragile. Loses shape quickly. Collapse and pale crust."
        }
    ],

    references: [
        "Hamelman, J. Bread.",
        "Suas, M. Advanced Bread and Pastry."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, underproofed dough is like waking up too early, and overproofed dough is like staying up too long.",
        whatItDoes: t('learn.proofing_gives_the_dough_the_perfect_level_of_puff'),
        howToUse: t('learn.if_it_hasnt_risen_enough_its_tight_if_it_rises_too'),
        dangerSigns: t('learn.too_soon_or_too_late_and_the_dough_just_wont_behav')
    }
};