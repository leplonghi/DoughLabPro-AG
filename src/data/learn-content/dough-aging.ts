import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const doughAgingData: LearnArticleData = {
    id: 'dough-aging',
    title: 'Dough Aging: Maturation, Fermentation & Degradation',
    subtitle: 'The lifecycle of dough: from the t('learn.green') phase to the t('learn.peak') and the inevitable decline into degradation.',
    category: 'Dough Science',
    difficulty: 'Advanced',
    tags: ['aging', 'maturation', 'fermentation', 'degradation'],

    intro: "The concept of 'aging' dough is standard practice in top pizzerias. It's not just about convenience; it's about unlocking the full potential of the grain through the patient work of enzymes.",

    history: "In the rush for industrial efficiency, time was the enemy. Additives and intensive mixing were used to force dough to mature in minutes. The artisan bread revival brought 'retarding' back, rediscovering that time transforms a mediocre recipe into a world-class product.",

    technicalFoundations: [
        "Maturation vs. Fermentation: Two distinct clocks. Fermentation is yeast activity (fast); Maturation is enzymatic breakdown (slow).",
        "The t('learn.peak') Window: The moment where gas retention is maximal, gluten is extensible but strong, and sugars are available.",
        "Proteolytic Degradation: Protease enzymes cut gluten bonds. Initially good for extensibility, eventually destroys the network.",
        "Starch Retrogradation: Well-aged dough with acidity resists staling longer."
    ],

    doughImpact: [
        "Before Peak (Green): Tough, elastic, lacks flavor.",
        "At Peak: Opens easily, springs high, complex taste.",
        "Past Peak (Overblown): Sticky, tears easily, acidic/alcoholic smell, collapses."
    ],

    bakingImpact: [
        "Green dough browns poorly.",
        "Mature dough has superior browning and blistering.",
        "Overblown dough fails to rise and has a dense, gummy crumb."
    ],

    practicalRanges: [],

    practicalApplications: [
        "Use Cold Fermentation to slow down fermentation so maturation can catch up.",
        "Look for the 'doming' at the bottom of the container instead of the poke test for cold dough.",
        "Avoid aging beyond 72 hours for standard flours to prevent gluten breakdown."
    ],

    proTips: [
        "The 'Poke Test' is less reliable for cold dough. Instead, look for the 'doming' at the bottom of the container. A well-proofed dough ball will have flattened slightly but still retain a convex shape."
    ],

    criticalPoints: [
        "The 72-Hour Wall: For most standard flours (W280–320), going beyond 72 hours yields diminishing returns and risk of gluten breakdown. Only W350+ flours can withstand 96+ hours."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "The Taste of Bread - Raymond Calvel (2001)",
        "Bread Science - Emily Buehler (2006)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.imagine_this_like_a_secret_ingredient_it_helps_mak_6'),
        whatItDoes: t('learn.it_improves_texture_and_flavor'),
        howToUse: t('learn.so_you_get_the_best_results_2'),
        dangerSigns: t('learn.use_it_wisely_2')
    }
};
