import { LearnArticleData } from '@/types/learn';

export const fermentationBasicsData: LearnArticleData = {
    id: "fermentation-basics-and-curves",
    title: "Fermentation Basics & Curves",
    subtitle: "How time, temperature and inoculation shape dough behaviour",
    category: 'Fermentation Science',
    difficulty: 'Beginner',
    tags: ['fermentation', 'yeast', 'temperature', 'time'],

    intro: "Fermentation converts a dense dough into a living, gassy structure. Understanding how time, temperature and inoculation interact is the key to predictable, repeatable results.",
    history: "Traditional bakers judged fermentation mostly by feel, using room temperature and small process windows. Modern baking science introduced the idea of 'fermentation curves' and precise control over time, temperature and inoculation.",

    technicalFoundations: [
        "Fermentation is driven by yeast and LAB converting sugars into CO₂, ethanol and acids.",
        "Rate is determined by inoculation level, dough temperature and time.",
        "Dough temperature is shaped by flour, water, ambient temp and friction (DDT).",
        "Acidity and microbial balance influence fermentation speed and rheology.",
        "Fermentation is not linear: lag phase, acceleration, then slowing."
    ],

    doughImpact: [
        "Underfermented: tight gluten, limited gas, hard shaping, dense crumb.",
        "Well-fermented: expansion, relaxed extensibility, fine gas bubbles, structure.",
        "Overfermented: fragile, overly extensible, sticky, gas loss."
    ],

    bakingImpact: [
        "Correct: strong oven spring, irregular crumb, deep flavour.",
        "Under: poor volume, tight crumb, pale/uneven crust.",
        "Over: collapse, coarse/gummy crumb, excessive sourness."
    ],

    practicalRanges: [
        {
            label: "Room-temperature direct doughs",
            notes: "1–4 hours bulk at 20–26°C. Typical for quick pizzas."
        },
        {
            label: "Long cold fermentation",
            notes: "12–72 hours at 3–6°C. Relies on low inoculation and refrigeration."
        },
        {
            label: "Mixed schedule (room + cold)",
            notes: "Short bulk at room temp + cold retard. Offers flexibility and flavour."
        }
    ],

    practicalApplications: [
        "Use inputs to suggest inoculation ranges and expected curves.",
        "Display visual cues ('early', 'peak', 'late') for schedule tracking.",
        "Define typical fermentation patterns for each style.",
        "Record start/end times, temperatures and visual cues in MyLab.",
        "Plot fermentation timelines to compare curves.",
        "Cross-check problems against fermentation schedule in Dough Diagnostic.",
        "Suggest realistic schedule adjustments for troubleshooting."
    ],

    proTips: [
        "Set your desired serving time first, then design the fermentation schedule backwards to hit that moment.",
        "Track dough temperature at the end of mixing and midway through bulk; this single habit greatly improves consistency."
    ],

    criticalPoints: [
        "Small changes in fridge temperature can significantly change effective fermentation time over 24–72 hours.",
        "Relying only on clock time without watching dough volume and feel is one of the most common causes of inconsistent results."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "Modernist Bread - Nathan Myhrvold et al. (2017)",
        "Bread: A Baker’s Book of Techniques and Recipes - Jeffrey Hamelman (2012)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Imagine this like a secret ingredient. It helps make your bread better.",
        whatItDoes: "Improves texture and flavor.",
        howToUse: "So you get the best results.",
        dangerSigns: "Use it wisely!"
    },
};
