import { LearnArticleData } from '@/types/learn';

export const glutenNetworkData: LearnArticleData = {
    id: "gluten-network",
    title: "The Gluten Network",
    subtitle: "Structure, gas retention and texture",
    category: "Dough Science",
    difficulty: "Intermediate",
    tags: ["gluten", "structure", "elasticity", "extensibility"],

    intro: "The gluten network is the structural framework of wheat-based doughs. How it forms and how strong or extensible it becomes decides volume, crumb structure and handling.",
    history: "Early bakers observed that longer kneading produced stronger dough, but only in the twentieth century did research clarify the roles of gliadin and glutenin. Today, understanding gluten development is central to modern bread and pizza formulas.",

    technicalFoundations: [
        "Gluten forms when glutenin and gliadin proteins in wheat flour hydrate and are mechanically worked, creating a viscoelastic network.",
        "Gluten provides both elasticity (tendency to spring back) and extensibility (ability to stretch). The balance between these determines shaping behaviour.",
        "Gluten development is influenced by flour strength, hydration, mixing intensity, time, salt, fat and fermentation.",
        "Oxidation during mixing can strengthen gluten up to a point; excessive oxidation can bleach colour and make dough overly tight.",
        "Non-wheat flours (rice, corn, some ancient grains) do not form gluten networks and require different strategies or blends to achieve structure."
    ],

    doughImpact: [
        "Underdeveloped gluten leads to weak dough that tears easily, struggles to trap gas and often bakes with dense crumb.",
        "Well-developed, balanced gluten supports good gas retention, open crumb and pleasant handling.",
        "Overdeveloped gluten can make dough overly elastic and resistant to stretching, especially when combined with low hydration.",
        "Added fats, sugars and wholegrain particles all interact with gluten, either shortening, lubricating or mechanically interrupting the network."
    ],

    bakingImpact: [
        "A robust gluten network allows strong oven spring, producing tall, airy structures.",
        "Weak gluten typically results in flat, dense products with limited volume and uneven crumb.",
        "The perception of chewiness is heavily influenced by gluten strength and hydration; different styles deliberately target different gluten expressions."
    ],

    practicalRanges: [
        {
            label: "Low Development (No-Knead / Focaccia)",
            notes: "Recommended: 20% dev (Range: 0-40% dev)"
        },
        {
            label: "Medium Development (Neapolitan)",
            notes: "Recommended: 70% dev (Range: 50-80% dev)"
        },
        {
            label: "Full Development (Pan Pizza / Buns)",
            notes: "Recommended: 100% dev (Range: 90-100% dev)"
        }
    ],

    practicalApplications: [
        "Use flour strength, hydration and style to surface guidance on target gluten development.",
        "Include explicit gluten development milestones in step-by-step recipe views.",
        "Each style profile should state the expected gluten expression.",
        "Recommend specific mixing approaches (hand folds vs spiral mixer) aligned with expected structure.",
        "Log subjective handling notes about elasticity vs extensibility in MyLab.",
        "Tag batches with common gluten-related issues (tearing, shrinking) in MyLab.",
        "Map symptoms like tearing or lack of volume to probable gluten development issues in Dough Diagnostic.",
        "Propose corrective actions such as extra folds, longer rest or reduced mixing intensity."
    ],

    proTips: [
        "Use rest periods (bench rest, bulk rest) to let gluten relax instead of fighting dough that springs back aggressively.",
        "Change only one major factor at a time (flour, hydration, mixing time) when troubleshooting gluten-related issues."
    ],

    criticalPoints: [
        "No amount of extra kneading will fully compensate for fundamentally unsuitable flour in extreme styles.",
        "Overkneading in a powerful mixer can damage gluten and overheat dough, breaking structure instead of strengthening it."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [
        {
            variant: "High Hydration (Open Crumb)",
            implications: "Requires strong gluten to hold large bubbles, but gentle handling. Extensible, Strong, Delicate. Needs folds during fermentation to build structure without toughening. Explosive oven spring if structure is intact."
        },
        {
            variant: "Low Hydration (Crispy/Cracker)",
            implications: "Gluten is tight and dense. Elastic, Dense, Firm. Hard to stretch if over-mixed. Needs rest. Minimal oven spring, crunchy texture."
        }
    ],

    references: [
        "The Taste of Bread - Raymond Calvel (2001)",
        "Advanced Bread and Pastry - Michel Suas (2008)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Imagine the dough is a net made of rubber bands. The more you work it, the stronger the net gets.",
        whatItDoes: "It acts like a balloon skin, trapping the yeast's burps (gas) so the dough can rise.",
        howToUse: "If the net is too weak, the balloon pops (flat pizza). If it's too tight, you can't stretch it (shrinking pizza). You need the Goldilocks zone.",
        dangerSigns: "Don't fight the dough! If it snaps back like a rubber band, let it rest for 10 minutes. The gluten needs a nap to relax."
    },
};
