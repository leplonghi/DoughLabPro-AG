import { LearnArticleData } from '@/types/learn';

export const shapingFundamentalsArticle: LearnArticleData = {
    id: "shaping-fundamentals",
    title: "Shaping Fundamentals",
    subtitle: "How to structure dough before proofing for optimal oven spring and crumb.",
    category: "Process Techniques",
    difficulty: "Beginner",
    tags: ["shaping", "tension", "proofing", "structure"],

    intro: "Shaping aligns gluten, redistributes gases, and defines the dough’s final structure before proofing. Proper shaping controls tension, elasticity, and the distribution of internal bubbles.",
    history: "Professional shaping techniques originated in European bread-making traditions and were later adopted in modern artisan pizza and bakery workflows.",

    technicalFoundations: [
        "Shaping organizes gluten strands to create directional tension.",
        "Surface tension traps gases and supports oven spring.",
        "Improper shaping leads to uneven crumb or spreading.",
        "Dough temperature heavily influences shaping behavior."
    ],

    doughImpact: [
        "Proper shaping increases dough strength and elasticity.",
        "Overhandling degasses excessively, reducing volume.",
        "Weak shaping results in flat or spread-out dough discs."
    ],

    bakingImpact: [
        "A well-shaped dough achieves strong oven spring.",
        "Crumb retains structure with improved bubble stability.",
        "Shape consistency ensures even heat transfer."
    ],

    practicalRanges: [
        { label: "Ideal Dough Temp for Shaping", notes: "Recommended: 24°C (Range: 20-26°C)" }
    ],

    practicalApplications: [
        "Hydration level influences shaping difficulty in Calculator.",
        "Neapolitan and NY-style require specific shaping tension.",
        "Compare tight vs loose shaping results over multiple bakes in MyLab.",
        "Levain doughs need gentler handling to preserve gas.",
        "DoughBot flags shaping inconsistencies based on outcomes logged."
    ],

    proTips: [
        "Use minimal flour during shaping to avoid drying the surface.",
        "Let dough relax if it resists stretching."
    ],

    criticalPoints: [
        "Over-shaping collapses bubbles.",
        "Under-shaping leads to spreading and flat results."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Dough temperature, hydration and flour strength directly affect shaping."
    ],

    variantsAndImplications: [
        {
            variant: "Tight Shaping",
            implications: "Strong surface tension for structured dough. Defined form, stable rise. Better oven spring. More uniform crumb."
        },
        {
            variant: "Loose Shaping",
            implications: "Gentler shaping for soft doughs. Open crumb, delicate rise. Higher extensibility. More irregular bubble patterns."
        }
    ],

    references: [
        "Suas, M. — Advanced Bread and Pastry.",
        "AIB Dough Handling Research Papers."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, shaping dough is like tucking a blanket — you’re making it smooth and snug.",
        whatItDoes: "Helps it grow tall and even.",
        howToUse: "We gently fold and tighten the dough so it rises nicely.",
        dangerSigns: "If you squeeze too much, you pop the bubbles."
    }
};
