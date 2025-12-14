import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const fermentationCurvesArticle: LearnArticleData = {
    id: "fermentation-curves",
    title: t('learn.fermentation_curves'),
    subtitle: t('learn.understanding_the_rise_plateau_and_decline_phases_'),
    category: t('learn.fermentation_science_5'),
    difficulty: t('learn.advanced_6'),
    tags: ["fermentation", "curves", "yeast-activity", "timing"],

    intro: "Fermentation follows a predictable curve: lag phase, active rise, plateau and decline. Monitoring this curve helps avoid underproofing and overproofing.",
    history: "Modern curves originate from yeast lab studies and were later adapted for baking through extensograph and volumetric analyses.",

    technicalFoundations: [
        "Lag phase: yeast adapts to environment.",
        "Active phase: CO₂ production peaks.",
        "Plateau: gas production slows; gluten reaches max expansion.",
        "Decline: gluten weakens; gas cells rupture.",
        "Temperature accelerates every stage."
    ],

    doughImpact: [
        "Understanding curves helps predict optimal shaping and baking times.",
        "Steep curves (warm dough) shorten working window.",
        "Flat curves (cold dough) give long working windows."
    ],

    bakingImpact: [
        "Shaping at peak activity yields maximum oven spring.",
        "Late decline phase leads to weak, flat bakes."
    ],

    practicalRanges: [
        { label: t('learn.warm_fermentation_curve'), notes: "Recommended: 2.5 hours total (Range: 2-3 hours)" },
        { label: t('learn.cool_fermentation_curve'), notes: "Recommended: 24 hours total (Range: 12-48 hours)" }
    ],

    practicalApplications: [
        "Graph the predicted fermentation curve based on temperature + yeast %.",
        "Neapolitan curves differ from NY due to yeast and hydration interplay.",
        "Log dough height every hour to create real fermentation curves in MyLab.",
        "Levain curves show dual peaks due to LAB/yeast synergy.",
        "Doughbot warns when predicted curve enters the decline zone."
    ],

    proTips: [
        "Record your real curves — it transforms your baking precision.",
        "Use cooler dough to flatten the curve for better control."
    ],

    criticalPoints: [
        "Decline phase ruins gluten strength.",
        "Curves steepen dramatically in kitchens above 26°C."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Temperature is the primary shaper of the curve.",
        "Hydration and yeast % influence curve slope."
    ],

    variantsAndImplications: [
        {
            variant: "Steep Curve (Warm Kitchen)",
            implications: "Fast rise; short timing margins. Quick, unstable. Risk of overproofing. Lower flavor complexity."
        },
        {
            variant: "Flat Curve (Cold Fermentation)",
            implications: "Slow, predictable rise. Stable, flavorful. Extended working windows. Better structure and aroma."
        }
    ],

    references: [
        "Hamelman, J. Bread."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, a fermentation curve is like watching a balloon inflate, stay full, and then slowly deflate.",
        whatItDoes: t('learn.it_helps_you_know_exactly_when_the_dough_is_ready'),
        howToUse: t('learn.catch_it_at_the_right_time_and_your_pizza_blooms_b'),
        dangerSigns: t('learn.wait_too_long_and_the_poor_dough_sags_and_collapse')
    }
};