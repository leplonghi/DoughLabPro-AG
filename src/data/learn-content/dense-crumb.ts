import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const denseCrumbData: LearnArticleData = {
    id: "dense-crumb",
    title: t('learn.dense_crumb'),
    subtitle: t('learn.diagnosing_poor_gas_retention_weak_fermentation_an'),
    category: t('learn.troubleshooting_2'),
    difficulty: t('learn.intermediate_9'),
    tags: ["crumb", "density", "troubleshooting", "fermentation"],

    intro: "Dense crumb occurs when the dough fails to retain gas or develop sufficient gluten structure. It can stem from fermentation, shaping, flour strength or hydration issues.",
    history: "Bread science has long focused on crumb density as a key performance indicator, linking it to mixing, fermentation and baking variables.",

    technicalFoundations: [
        "Dense crumb indicates low gas retention.",
        "Weak gluten fails to support bubble expansion.",
        "Underproofing restricts oven spring.",
        "Low hydration limits starch gelatinization and expansion."
    ],

    doughImpact: [
        "Reduced elasticity due to inadequate gluten.",
        "Limited expansion during fermentation.",
        "Difficulty shaping due to stiffness."
    ],

    bakingImpact: [
        "Poor oven spring.",
        "Tight crumb structure.",
        "Greater drying in thick sections."
    ],

    practicalRanges: [
        { label: t('learn.hydration_for_open_crumb'), notes: "Recommended: 70% (Range: 65-78%)" }
    ],

    practicalApplications: [
        "Increase hydration slightly to loosen crumb.",
        "Ensure full fermentation before shaping.",
        "Hydration slider in Calculator influences crumb openness predictions.",
        "Some styles (NY, Roman) expect moderate crumb openness.",
        "Compare crumb density at different proofing times in MyLab.",
        "Levain acidity can tighten crumb if gluten weakens.",
        "DoughBot flags underproofing patterns based on bake logs."
    ],

    proTips: [
        "Increase hydration slightly to loosen crumb.",
        "Ensure full fermentation before shaping."
    ],

    criticalPoints: [
        "Underproofing is the most common cause of dense crumb.",
        "Flour too weak for hydration leads to collapse."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration, fermentation, flour strength and mixing time."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.underproofed_dough'),
            implications: "Insufficient fermentation. Stiff, tight. Low gas, minimal extensibility. Poor spring."
        },
        {
            variant: t('learn.low_hydration_dough'),
            implications: t('learn.limited_expansion_potential_firm_dry_restrictive_c')
        }
    ],

    references: [
        "Calvel — The Taste of Bread.",
        "AIB Crumb Analysis Studies."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.sweetheart_a_dense_crumb_is_like_bread_that_forgot'),
        whatItDoes: t('learn.makes_the_inside_heavy'),
        howToUse: t('learn.give_it_time_and_water__dough_needs_both'),
        dangerSigns: t('learn.it_didnt_rise_enough_or_doesnt_have_enough_moistur')
    }
};