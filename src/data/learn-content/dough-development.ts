import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const doughDevelopmentData: LearnArticleData = {
    id: "dough-development",
    title: t('learn.dough_development__mixing'),
    subtitle: t('learn.from_initial_mix_to_fully_developed_dough'),
    category: 'Dough Science',
    difficulty: 'Intermediate',
    tags: ['mixing', 'gluten-development', 'dough-strength', 'folds'],

    intro: "Mixing is where ingredients become dough. The path from rough mix to fully developed dough determines strength, extensibility, gas retention and ultimately crumb structure.",
    history: "Hand kneading dominated baking for centuries. With mechanical mixers, bakers discovered different mixing regimes (short, improved, intensive) and their impact on flavour, structure and shelf life.",

    technicalFoundations: [
        "Dough development combines hydration, gluten formation, oxidation and temperature rise.",
        "Short mix methods rely on moderate mixing plus folds during bulk fermentation to build strength gently.",
        "Intensive mix methods use high-speed mixing to develop gluten quickly, often at the cost of some flavour and colour complexity.",
        "Dough temperature rises during mixing due to friction; this must be considered in Desired Dough Temperature calculations.",
        "Rest periods and folds during bulk fermentation are an integral part of development, not just 'waiting time'."
    ],

    doughImpact: [
        "Under-mixed dough can show uneven hydration, weak gluten and inconsistent fermentation, often with dense or irregular crumb.",
        "Properly mixed dough feels cohesive, smooth to slightly tacky (depending on hydration) and shows good elasticity/extensibility balance.",
        "Over-mixed dough, especially at high speed, can overheat, become overly tight or eventually break down, losing strength.",
        "Different styles benefit from different development paths: many modern pizza and artisan breads prefer moderate mixing plus folds."
    ],

    bakingImpact: [
        "Correct development supports predictable oven spring and crumb structure aligned with the style.",
        "Underdeveloped doughs may bake with flat shapes and dense crumb even when fermentation seems active.",
        "Overdeveloped doughs can bake with tight, uniform crumb and reduced character, especially in breads seeking rustic openness."
    ],

    practicalRanges: [
        {
            label: "Short mix / fold-intensive methods",
            notes: t('learn.minimal_initial_mixing__24_fold_sessions_favours_f')
        },
        {
            label: t('learn.improved_mix'),
            notes: t('learn.moderate_mixing__occasional_folds_balanced_approac')
        },
        {
            label: t('learn.intensive_mix'),
            notes: "High-speed mixing to full development. Used for highly standardised bread or very enriched doughs."
        }
    ],

    practicalApplications: [
        "Attach a recommended development regime (short/improved/intensive) to any step-by-step view.",
        "Warn if a very intensive regime is selected for styles where short or improved methods are preferred.",
        "Log mixing details (time, speed, number of folds) in MyLab.",
        "Compare 'more folds vs longer mix' for the same formula.",
        "Map issues like uneven crumb or weak structure to development choices in Dough Diagnostic.",
        "Suggest adjustments in fold count, mixing time or rest periods based on feedback."
    ],

    proTips: [
        "Stop mixing slightly earlier than you think you should and let folds plus time finish the job, especially for high-hydration doughs.",
        "Track dough temperature before and after mixing; it is one of the most reliable indicators that your process is consistent."
    ],

    criticalPoints: [
        "Trying to fix underdeveloped dough late in bulk by 'extra kneading' can degas excessively and damage structure.",
        "Ignoring dough temperature during mixing undermines any attempt at precise fermentation control."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "Bread: A Baker’s Book of Techniques and Recipes - Jeffrey Hamelman (2012)",
        "Modernist Bread - Nathan Myhrvold et al. (2017)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.imagine_this_like_a_secret_ingredient_it_helps_mak_7'),
        whatItDoes: t('learn.improves_texture_and_flavor_2'),
        howToUse: t('learn.so_you_get_the_best_results_3'),
        dangerSigns: t('learn.use_it_wisely_3')
    },
};
