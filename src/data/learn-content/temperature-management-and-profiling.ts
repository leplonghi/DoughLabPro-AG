import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const temperatureManagementAndProfilingData: LearnArticleData = {
    id: "temperature-management-and-profiling",
    title: t('learn.temperature_management__profiling'),
    subtitle: t('learn.from_dough_temperature_to_bake_curves'),
    category: 'Process Techniques',
    difficulty: 'Advanced',
    tags: ['temperature', 'profiling', 'fermentation', 'baking'],

    intro: "Temperature is the hidden axis behind most dough behaviour. Managing temperatures for ingredients, dough, environment and oven creates predictable results and unlocks precise style execution.",
    history: "Professional bakeries long used Desired Dough Temperature formulas and proof boxes. Home bakers and small pizzerias increasingly adopt thermometers, data loggers and controlled fermentation environments to reduce guesswork.",

    technicalFoundations: [
        "Desired Dough Temperature (DDT) links flour, water, room and friction factors to a target final dough temperature.",
        "Fermentation rate roughly doubles with each 5–6°C increase in dough temperature within typical ranges.",
        "Baking temperature profiles (how temperature changes over time) influence crust setting, oven spring and topping behaviour.",
        "Preheating, recovery time, door opening patterns and load size all modify real temperature profiles compared with thermostat readings.",
        "In cold fermentation, fridge temperature stability and real internal temperature curves are as important as nominal settings."
    ],

    doughImpact: [
        "Hitting a consistent DDT means fermentation schedules become repeatable despite seasonal changes.",
        "Warm dough ferments faster and may need shorter bulk and proof; cooler dough supports longer schedules with different flavour development.",
        "Temperature swings during cold fermentation can push dough towards over- or underfermentation."
    ],

    bakingImpact: [
        "Stable, well-understood bake profiles yield consistent colour, oven spring and texture.",
        "Under-preheated ovens or frequent door openings reduce bottom heat and lengthen bake times.",
        "Aggressive top heat or broiler use can brown toppings faster than the base can bake if not balanced."
    ],

    practicalRanges: [
        {
            label: t('learn.typical_ddt_for_most_pizza_and_lean_breads'),
            notes: "22–26°C final dough temp. Adjust up or down depending on desired fermentation speed and ambient conditions."
        },
        {
            label: t('learn.cold_fermentation_fridges'),
            notes: "3–6°C internal temperature. Lower end for longer ferments, higher end for shorter schedules."
        },
        {
            label: t('learn.home_oven_bake_profiles'),
            notes: "Stone 250–300°C with optional top heat boost. Often require maximised preheat and smart rack positioning."
        }
    ],

    practicalApplications: [
        "Include a simple DDT helper: user input of ambient and flour temperature yields recommended water temperature.",
        "Allow users to tag target dough and oven temperatures per style.",
        "Style profiles can include preferred dough and bake temperatures.",
        "Log dough temperatures at key milestones (post-mix, mid-bulk, pre-bake) in MyLab.",
        "Support simple graphs of temperature vs time in MyLab.",
        "Dough Diagnostic checks whether reported timing issues correlate with temperature mismanagement.",
        "Suggest concrete actions (cooler water, longer preheat) based on user-provided temperature data."
    ],

    proTips: [
        "A single reliable thermometer (for dough, fridge and oven surfaces) is one of the highest ROI tools for serious baking.",
        "When conditions change (season, room temp), adjust water temperature first before rewriting your entire formula."
    ],

    criticalPoints: [
        "Ignoring dough temperature makes fermentation schedules inherently unstable, especially with long cold ferments.",
        "Trusting only thermostat readings without validating real surface or air temperature can mislead troubleshooting."
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
        intro: t('learn.imagine_this_like_a_secret_ingredient_it_helps_mak_19'),
        whatItDoes: t('learn.improves_texture_and_flavor_13'),
        howToUse: t('learn.so_you_get_the_best_results_15'),
        dangerSigns: t('learn.use_it_wisely_15')
    },
};