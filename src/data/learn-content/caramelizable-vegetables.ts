import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const caramelizableVegetablesData: LearnArticleData = {
    id: 'caramelizable-vegetables',
    title: 'Caramelizable Vegetables: The Maillard & Pyrolysis Spectrum',
    subtitle: 'Transforming simple plant sugars into complex aromatic compounds through controlled heat application.',
    category: 'Ingredient Science',
    difficulty: 'Intermediate',
    tags: ['toppings', 'maillard', 'caramelization', 'vegetables'],

    intro: "Vegetables are not just toppings; they are sugar reservoirs waiting to be unlocked. Through controlled heat, we can transform raw, watery plants into complex flavor bombs via caramelization and the Maillard reaction.",

    history: "In Italian 'Cucina Povera' (peasant cooking), vegetables were often the main event. Slow-cooking onions or peppers until meltingly soft was a way to extract maximum flavor. Modern pizza often rushes this, using raw veggies that steam instead of roast. DoughLabPro advocates for pre-cooking to honor traditional flavor profiles.",

    technicalFoundations: [
        "Caramelization: Thermal decomposition of sugar (pyrolysis) at 160°C+.",
        "Maillard Reaction: Reaction between amino acids and reducing sugars at ~140°C.",
        "The Sugar Matrix: High-sugar vegetables (onions, peppers, carrots) caramelize best.",
        "Moisture Management: Water evaporation must occur before surface temperature can exceed 100°C to trigger browning."
    ],

    doughImpact: [
        "Wet vegetables release water during baking, potentially causing a 'gum line' on the dough.",
        "Pre-cooked vegetables reduce moisture load on the crust."
    ],

    bakingImpact: [
        "Caramelized toppings add sweetness and bitterness (complexity).",
        "Raw vegetables may steam the pizza, preventing crispness."
    ],

    practicalRanges: [],

    practicalApplications: [
        "Pre-cook high-moisture vegetables like onions and peppers to drive off water and develop flavor.",
        "Cut vegetables thinly if applying raw to allow rapid dehydration and browning.",
        "Pair sweet caramelized vegetables with salty (cured meats) or acidic (vinegar) ingredients for balance."
    ],

    proTips: [
        "For onions, use the 'dry sweat' technique: start in a pan with salt but no oil to draw out moisture, then add fat to brown.",
        "Roast peppers whole until black, then peel, for a smoky, sweet flavor without the bitterness of the skin."
    ],

    criticalPoints: [
        "The Acrylamide Threshold: Charring vegetables (blackening) creates bitter carbon. Aim for deep mahogany, not black, unless seeking a specific 'charred' profile.",
        "Water is the enemy of browning. If the pan is crowded, vegetables will steam, not caramelize."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "On Food and Cooking - Harold McGee (2004)",
        "The Food Lab - J. Kenji López-Alt (2015)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.imagine_this_like_a_secret_ingredient_it_helps_mak_3'),
        whatItDoes: t('learn.cooking_veggies_slowly_makes_them_sweet_like_candy'),
        howToUse: "Don't just throw raw onions on! Cook them first until they are soft and brown.",
        dangerSigns: "If they turn black, they taste burnt. If they stay white, they taste like raw salad."
    }
};