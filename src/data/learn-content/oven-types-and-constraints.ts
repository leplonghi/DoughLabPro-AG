import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const ovenTypesAndConstraintsData: LearnArticleData = {
    id: "oven-types-and-constraints",
    title: t('learn.oven_types__constraints'),
    subtitle: t('learn.what_your_oven_can_and_cannot_do_for_your_dough'),
    category: 'Baking Science',
    difficulty: 'Beginner',
    tags: ['ovens', 'equipment', 'temperature', 'heat-transfer'],

    intro: "The same dough behaves very differently in different ovens. Understanding your oven’s strengths and limits is essential to choose realistic styles and to interpret DoughLabPro’s recommendations.",
    history: "Pizza evolved alongside oven technology: from wood-fired domes in Naples to coal and gas decks in New York, to modern electric and home ovens. Each generation adapted dough formulas and styles to what the equipment could deliver.",

    technicalFoundations: [
        "Ovens differ by heat source (wood, gas, electric), chamber design, insulation and control system.",
        "Key parameters are maximum stable temperature, recovery speed, heat distribution (top vs bottom) and ventilation.",
        "Wood and some gas ovens can reach 400–500°C, enabling 60–90 second bakes; most home ovens max out at 250–300°C.",
        "Deck ovens and stones focus heat from below; convection ovens emphasise moving hot air and evenness.",
        "Constraints such as low max temperature or weak bottom heat cannot be fully overcome by dough alone; formulas must adapt."
    ],

    doughImpact: [
        "High-heat ovens favour lean doughs with moderate hydration intended for fast bakes and strong oven spring.",
        "Lower-temperature ovens often benefit from slightly lower hydration and/or different formulas to avoid gum lines on long bakes.",
        "Choosing unrealistic styles for a given oven leads to frustration: for example, authentic 60-second Neapolitan in a weak home oven."
    ],

    bakingImpact: [
        "Max temperature and heat balance dictate possible bake times and browning patterns.",
        "Ovens with weak top heat can under-brown cheese and toppings unless broilers or finishing moves are used.",
        "Ovens with weak bottom heat risk pale or soft bases, especially with heavy toppings or thick pans."
    ],

    practicalRanges: [
        {
            label: "High-heat pizza ovens (wood/gas dome)",
            notes: "400–500°C stone temperature. Support ultra-fast bakes (60–120 seconds) and classic Neapolitan-style pizzas."
        },
        {
            label: t('learn.commercial_deck_ovens'),
            notes: "280–350°C deck, sometimes higher. Ideal for New York slices, al taglio and many pan styles."
        },
        {
            label: t('learn.domestic_ovens'),
            notes: "220–280°C, sometimes with grill/broiler. Often need stones/steels and adjusted formulas for best results."
        }
    ],

    practicalApplications: [
        "Require users to select an oven profile so hydration, style recommendations and bake times are realistic.",
        "Surface warnings when a style typically requiring extreme temperatures is selected for a low-capability oven.",
        "Each style profile should list compatible oven types.",
        "Propose alternative bake strategies (e.g. two-stage bake) depending on oven constraints.",
        "Register multiple ovens (home, outdoor, professional) in MyLab.",
        "Compare the same formula baked in different ovens in MyLab.",
        "Dough Diagnostic treats oven type and max temperature as core inputs.",
        "Suggest oven-specific hacks (using broiler, repositioning shelves) before changing formulas."
    ],

    proTips: [
        "Measure real stone or deck temperature with an infrared thermometer; knob settings rarely tell the full story.",
        "Specialise each oven in what it does best instead of forcing it into every style."
    ],

    criticalPoints: [
        "Ignoring oven limits is one of the fastest ways to conclude that a good formula 'does not work'.",
        "Pushing equipment beyond manufacturer recommendations (for example blocking vents) can be unsafe and must be avoided."
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
        intro: t('learn.imagine_this_like_a_secret_ingredient_it_helps_mak_14'),
        whatItDoes: t('learn.improves_texture_and_flavor_8'),
        howToUse: t('learn.so_you_get_the_best_results_10'),
        dangerSigns: t('learn.use_it_wisely_10')
    },
};