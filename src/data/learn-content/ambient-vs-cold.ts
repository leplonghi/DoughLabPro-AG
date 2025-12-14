import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const ambientVsColdFermentationData: LearnArticleData = {
    id: 'ambient-vs-cold-fermentation',
    title: 'Ambient vs. Cold Fermentation',
    subtitle: 'The thermodynamics of dough: how temperature dictates flavor and texture.',

    category: 'Fermentation Science',
    difficulty: 'Intermediate',
    tags: [t('learn.temperature'), t('learn.yeast'), t('learn.flavor'), t('learn.texture')],

    intro: "Temperature is the master variable in baking. It dictates not just how fast your dough rises, but what it tastes like. Ambient fermentation offers speed and simplicity, while cold fermentation (retarding) unlocks superior flavor complexity and extensibility.",

    history: "Before mechanical refrigeration, all dough was 'ambient', forcing bakers to adjust yeast daily based on the weather. The advent of commercial refrigeration allowed for 'retarding'—slowing the process down. Initially a convenience for scheduling, it was soon discovered to be a secret weapon for quality, creating the complex, blistered crusts we prize today.",

    technicalFoundations: [
        "Arrhenius Equation: For every 10°C increase, chemical reaction rates roughly double.",
        "Yeast Metabolism: Thrives at ambient temps (20–25°C), producing CO₂ rapidly (Log Phase).",
        "Enzymatic Activity: Protease and amylase remain active even at cold temps (4–6°C) where yeast is dormant.",
        "Differential Inhibition: Cold fermentation slows yeast more than enzymes, allowing flavor precursors (amino acids and sugars) to accumulate without overproofing."
    ],

    doughImpact: [
        "Ambient Dough: Often more elastic, harder to stretch thinly without tearing.",
        "Cold Dough: Natural conditioners (proteases) relax the gluten over time, creating superior extensibility.",
        "Acid Development: Cold fermentation promotes a complex pH landscape (acetic/lactic balance) vs the simple ethanol profile of ambient dough."
    ],

    bakingImpact: [
        "Ambient: 'Yeasty' or 'boozy' aroma, simple crust color.",
        "Cold: 'Nutty', 'bready', and 'sour' notes. Accumulated sugars fuel a supercharged Maillard reaction for blistering and deep browning.",
        "Oven Spring: Cold doughs often have better oven spring due to a more organized gluten network."
    ],

    practicalRanges: [
        { label: t('learn.ambient_zone'), notes: "Recommended: 24°C (Range: 20-26°C)" },
        { label: "Cold Zone (Retarding)", notes: "Recommended: 4°C (Range: 2-6°C)" },
        { label: t('learn.the_dead_zone'), notes: "Avoid temperatures between 8-15°C. Yeast is too active for storage but too slow for predictable rising." }
    ],

    practicalApplications: [
        "Select 'Cold Fermentation' in the Calculator to automatically adjust yeast percentages.",
        "Use the 'Hybrid' setting for advanced schedules.",
        "Compare two batches: one ambient (4h) vs one cold (24h) to taste the difference.",
        "Log the 'blistering' score for cold fermented pizzas.",
        "Sourdough is very sensitive to temperature; cold retarding can make it quite sour.",
        "Doughbot can predict when your cold dough will be ready based on fridge temp."
    ],

    proTips: [
        "The 'Hybrid Method' is often best: 2–4 hours at room temp to wake up the yeast, then 24–72 hours in the fridge for flavor.",
        "Avoid the 'Dead Zone' (8°C–15°C). Yeast is too active for storage but too slow for predictable rising."
    ],

    criticalPoints: [
        "Cold dough must be brought out 1-2 hours before baking to relax and warm up.",
        "Never put a bulk dough straight into the fridge without *some* fermentation starting, or it might never wake up."
    ],

    regionalVariants: [
        "Neapolitan: Traditionally ambient (8-24h), but modern variants often use cold ferment.",
        "NY Style: Almost exclusively relies on cold fermentation for that characteristic chew and flavor."
    ],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Yeast Quantity: Needs to be much lower for ambient, higher for cold (unless using hybrid).",
        "Fridge Temp: A 2°C difference in your fridge can double or halve fermentation time."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.ambient_fermentation'),
            implications: t('learn.requires_careful_timing_less_extensible_standard_c')
        },
        {
            variant: t('learn.cold_fermentation'),
            implications: t('learn.very_relaxed_easy_to_open_premium_texture_and_arom')
        },
        {
            variant: t('learn.hybrid_method'),
            implications: t('learn.balanced_strength_and_extensibility_ideal_for_home')
        }
    ],

    references: [
        "Modernist Pizza - Nathan Myhrvold (2021)",
        "The Effect of Fermentation Temperature on Bread Microstructure - ScienceDirect"
    ],

    images: [],
    diagrams: [],

    faq: [
        {
            q: t('learn.can_i_switch_from_ambient_to_cold_halfway'),
            a: "Yes, this is the 'Hybrid Method'. Just ensure you account for the time it takes for the dough to cool down."
        }
    ],

    grandmaVersion: {
        intro: "It's like cooking a stew: you can cook it fast on high heat, or let it simmer slow and low all day. Fast rising (warm) gets it done. Slow rising (cold) makes it delicious.",
        whatItDoes: "Cold rising lets the dough relax and develop deep flavors, like a marinated steak.",
        howToUse: "If you want that pizzeria-quality crust with the bubbles and the chew, the fridge is your best friend.",
        dangerSigns: "Just don't forget it in there for a week, or it will turn into sourdough soup!"
    }
};