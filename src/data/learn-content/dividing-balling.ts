import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const dividingBallingData: LearnArticleData = {
    id: "dividing-and-balling",
    title: t('learn.dividing__balling'),
    subtitle: t('learn.preparing_individual_dough_pieces_for_shaping'),
    category: 'Process Techniques',
    difficulty: 'Beginner',
    tags: ['dividing', 'balling', 'scaling', 'shaping'],

    intro: "Dividing and balling transform bulk dough into individual pieces ready for final proof and shaping. This stage strongly influences gas distribution, gluten alignment and handling.",
    history: "Traditional pizzerias developed specific hand movements for balling that preserve gas while tightening the outer 'skin'. Artisan bread bakers similarly use preshaping and bench rest. DoughLabPro formalises these ideas across styles.",

    technicalFoundations: [
        "Dividing separates bulk dough into individual weights using cutting tools or scaling by hand.",
        "Balling or preshaping aligns gluten at the surface, creating tension that helps dough hold shape and trap gas during final proof.",
        "Bench rest between dividing/balling and final shaping allows gluten to relax and gas to redistribute.",
        "The aggressiveness of balling (tight vs gentle) must match dough strength, hydration and final style.",
        "Use of excess flour during dividing and balling can dry outer layers and create seams that fail during baking."
    ],

    doughImpact: [
        "Well-balled dough pieces have smooth, tensioned surfaces and even internal gas distribution, making shaping easier.",
        "Overly tight balling can squeeze out too much gas, over-stress gluten and lead to strong shrink-back.",
        "Very loose or rushed balling can produce pieces that spread sideways and lack structure.",
        "Inconsistent scaling leads to variable baking behaviour and portion sizes."
    ],

    bakingImpact: [
        "Consistent dough ball weights ensure even baking and predictable portioning.",
        "Good surface tension supports oven spring and attractive cornicione in pizzas.",
        "Poorly sealed seams or rough surfaces can cause blowouts or irregular shapes in the oven."
    ],

    practicalRanges: [
        {
            label: t('learn.typical_neapolitan_pizza_balls'),
            notes: "220–280 g. Exact weight depends on desired diameter and rim thickness."
        },
        {
            label: "New York / large pizzas",
            notes: "280–400 g. Higher weights for larger diameters and thicker crust styles."
        },
        {
            label: t('learn.pan_pizza_portions'),
            notes: t('learn.dough_per_pan_rather_than_individual_balls_scaling')
        }
    ],

    practicalApplications: [
        "Choose between 'number of pieces' and 'target weight per piece' in the calculator.",
        "Follow guidance on typical ball weights per style and diameter when configuring a batch.",
        "Styles should include recommended ball weights and whether tight or gentle balling is preferred.",
        "Record ball weight, balling technique and bench rest duration alongside final results in MyLab.",
        "Consider balling tightness and rest time when diagnosing shrink-back or spreading issues.",
        "Use gentler balling and longer rest for overly elastic behaviour."
    ],

    proTips: [
        "Use a scale for portioning until your eye is trained; small weight errors accumulate quickly across a service.",
        "Keep seams on the bottom of the ball and avoid twisting motions that tear the surface."
    ],

    criticalPoints: [
        "Balling extremely cold dough can produce uneven tension and encourage tearing.",
        "Using large amounts of bench flour can leave dry patches that resist stretching and burn in the oven."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "Modernist Pizza - Nathan Myhrvold et al. (2021)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.imagine_this_like_a_secret_ingredient_it_helps_mak_5'),
        whatItDoes: t('learn.improves_texture_and_flavor'),
        howToUse: t('learn.so_you_get_the_best_results'),
        dangerSigns: t('learn.use_it_wisely')
    },
};
