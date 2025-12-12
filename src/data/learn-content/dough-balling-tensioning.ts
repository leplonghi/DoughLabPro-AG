import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const doughBallingTensioningArticle: LearnArticleData = {
    id: "dough-balling-tensioning",
    title: t('learn.dough_balling__tensioning'),
    subtitle: t('learn.creating_consistent_dough_balls_with_controlled_gl'),
    category: t('learn.process_techniques_5'),
    difficulty: t('learn.intermediate_10'),
    tags: ["balling", "tension", "shaping", "consistency"],

    intro: "Balling creates individual dough portions with controlled tension, consistency and gas distribution. It’s crucial for pizza styles requiring precise stretching behavior.",
    history: "Modern balling techniques grew from Italian pizzerias, where uniformity and fermentation control became essential.",

    technicalFoundations: [
        "Balling reorganizes gluten across a spherical structure.",
        "Surface tension stabilizes expansion during fermentation.",
        "Ball shaping distributes fermentation gases evenly.",
        "Relaxation time after balling determines extensibility."
    ],

    doughImpact: [
        "Increases structure and elasticity.",
        "Predictable stretching behavior during opening.",
        "Weak balling causes tearing during stretching."
    ],

    bakingImpact: [
        "Consistent balling improves cornicione symmetry.",
        "Better uniformity yields predictable heat transfer."
    ],

    practicalRanges: [
        { label: t('learn.postballing_relaxation'), notes: "Recommended: 20 minutes (Range: 10-30 minutes)" }
    ],

    practicalApplications: [
        "Hydration informs the correct balling tension.",
        "Neapolitan requires soft-tension balling; NY requires slightly firmer.",
        "Experiment with tension levels and log extensibility performance in MyLab.",
        "Levain doughs require minimal balling to avoid degassing.",
        "DoughBot flags tearing symptoms linked to poor balling."
    ],

    proTips: [
        "Flour your hands lightly, not the dough.",
        "Use consistent motion and pressure for uniform balls."
    ],

    criticalPoints: [
        "Too much tension prevents stretching.",
        "Too little tension causes flat, uneven discs."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration and dough temperature strongly dictate balling difficulty."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.hightension_balls'),
            implications: "Tight gluten alignment for structured styles. Elastic, stable. More resistant during opening. Defined crust edge."
        },
        {
            variant: t('learn.softtension_balls'),
            implications: "Gentler approach for extensible styles. Relaxed, soft. Easier opening. More irregular shaping."
        }
    ],

    references: [
        "Associazione Verace Pizza Napoletana Guidelines.",
        "AIB Dough Balling Standards."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, balling dough is like rolling a snowball — smooth outside, soft inside.",
        whatItDoes: t('learn.helps_the_pizza_open_evenly'),
        howToUse: t('learn.we_round_the_dough_so_it_stretches_nicely_later'),
        dangerSigns: t('learn.if_its_too_tight_or_loose_stretching_becomes_a_bat')
    }
};
