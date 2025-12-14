import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const ovenSpringData: LearnArticleData = {
    id: 'oven-spring',
    title: 'Oven Spring: The Thermodynamics of Expansion',
    subtitle: 'The explosive final rise of the dough in the first minutes of baking.',
    category: 'Baking Science',
    difficulty: 'Advanced',
    tags: ['oven-spring', 'thermodynamics', 'expansion', 'steam'],

    intro: "The phenomenon of oven spring has always been the baker's holy grail, but achieving it was difficult in ancient wood-fired ovens where temperature control was an art form. Bakers learned to read the color of the flame and the soot on the bricks to judge when the oven was hot enough to produce that critical initial burst of heat.",

    history: "The introduction of steam injection in the 19th century (Vienna Ovens) was a game-changer for bread, allowing for massive spring and thin, crispy crusts. For pizza, the challenge remained getting the oven hot enough (400°C+) to flash-cook the dough before it dried out. Modern electric deck ovens and high-performance home pizza ovens have democratized this process.",

    technicalFoundations: [
        "Thermal Expansion of Gases: According to Charles's Law, gas volume increases with temperature. The CO₂ bubbles trapped in the dough expand rapidly.",
        "Vaporization of Water: Liquid water turns to steam, expanding 1,600 times in volume. This is the most powerful driver of volume.",
        "Solubility Decrease (Henry's Law): As dough heats up, CO₂ dissolved in the water comes out of solution and joins the gas bubbles.",
        "The Race Against the Crust: The dough tries to expand while the crust tries to harden (set). If the crust sets too early, expansion stops."
    ],

    doughImpact: [
        "Cold dough springs better due to a more rigid gluten structure trapping gas initially.",
        "Temperature differential creates a more violent steam generation effect."
    ],

    bakingImpact: [
        "If crust stays flexible (steam, high heat), the dough can expand to its maximum potential.",
        "In pizza, the 'cornicione' (rim) expands freely because it is not topped."
    ],

    practicalRanges: [],

    practicalApplications: [
        "Use cold dough for better spring.",
        "Ensure oven is fully preheated to maximize thermal shock.",
        "Use steam in the first few minutes of baking for bread to delay crust setting."
    ],

    proTips: [
        "Cold dough springs better. A cold dough ball has a more rigid gluten structure that traps gas better initially, and the temperature differential creates a more violent steam generation effect. However, it is harder to stretch."
    ],

    criticalPoints: [
        "Over-proofing Kills Spring. If a dough is over-proofed, the gluten network is degraded and weak. When the gas expands in the oven, the weak balloon pops instead of stretching. The result is a flat, collapsed rim."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "Modernist Bread - Nathan Myhrvold (2017)",
        "The Science of Baking - Bakerpedia",
        "Understanding Baking - Joseph Amendola (2003)",
        "On Food and Cooking - Harold McGee (2004)",
        "Bread Science - Emily Buehler (2006)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.imagine_this_like_a_secret_ingredient_it_helps_mak_13'),
        whatItDoes: t('learn.improves_texture_and_flavor_7'),
        howToUse: t('learn.so_you_get_the_best_results_9'),
        dangerSigns: t('learn.use_it_wisely_9')
    }
};