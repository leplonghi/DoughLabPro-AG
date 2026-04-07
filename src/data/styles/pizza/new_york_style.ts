import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * NEW YORK STYLE PIZZA
 * 
 * Researched and validated content with authoritative sources:
 * - Lombardi's Pizza (First pizzeria in USA, 1905)
 * - Historical documentation of NYC pizza culture
 * - Coal-fired oven tradition
 * - Slice culture and Pizza Principle
 */
export const new_york_style: DoughStyleDefinition = {
    id: "new_york_style",
    name: "New York Style Pizza",
    category: "pizza",
    recipeStyle: RecipeStyle.NEW_YORK,

    origin: {
        country: "United States",
        region: "New York City",
        period: "Early 1900s, first pizzeria 1905"
    },

    description: "New York-style pizza is an American adaptation of Neapolitan pizza, characterized by its large, hand-tossed thin crust that's crispy on the edges yet soft and pliable enough to fold. First introduced at Lombardi's in 1905, it became the quintessential American pizza style.",

    history: "The origins of New York-style pizza trace back to the late 19th and early 20th centuries with Italian immigration to New York City. Gennaro Lombardi founded the first licensed pizzeria in the U.S., Lombardi's, in 1905. His employee Antonio Totonno Pero made the pizzas, sold for five cents each. Totonno later opened his own pizzeria in Coney Island in 1924. The style evolved from Neapolitan traditions but adapted to American tastes and available ingredients, particularly using coal-fired ovens instead of wood-fired ones due to coal's economic availability in the U.S. The 'slice culture' emerged, making pizza accessible to working-class Americans.",

    difficulty: "Medium",
    fermentationType: "cold",

    base_formula: [
        { name: "High-gluten bread flour", percentage: 100 },
        { name: "Water", percentage: 62 },
        { name: "Salt", percentage: 2.2 },
        { name: "Olive oil", percentage: 2 },
        { name: "Sugar", percentage: 1.5 },
        { name: "Fresh yeast", percentage: 0.4 }
    ],

    technicalProfile: {
        hydration: [58, 65],
        salt: [2, 2.5],
        oil: [1, 3],
        sugar: [1, 2],
        flourStrength: "High-gluten bread flour, 12.5-14% protein for elasticity and chew",
        ovenTemp: [260, 300],
        recommendedUse: [
            "Classic cheese pizza sold by the slice",
            "Pepperoni, sausage, or simple vegetable toppings"
        ],
        difficulty: "Medium",
        ballWeight: { recommended: 450, min: 350, max: 600 },
        fermentationSteps: [
            "Mix: Combine flour, water, salt, oil, sugar, and yeast until smooth and elastic. [Science: High-gluten flour develops strong gluten network for characteristic chew]",
            "Bulk Fermentation: 24-72 hours cold fermentation at 4°C. [Science: Long cold retard develops complex flavors and improves extensibility]",
            "Divide and Ball: Portion into 350-600g balls, coat lightly with oil. [Science: Oil coating prevents drying during cold storage]",
            "Warm Up: 2-4 hours at room temperature before use. [Science: Dough must warm for proper extensibility and hand-tossing]",
            "Hand-Toss and Stretch: Stretch to 18-24 inches using hand-tossing technique. [Science: Centrifugal force creates thin, even crust]",
            "Bake: Coal-fired oven at 800-900°F for 2-5 minutes, or gas deck oven at 550-650°F for 6-8 minutes. [Science: High heat creates crispy exterior while maintaining pliable interior]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W360-400 (High strength)",
            pl_ratio: "0.55-0.65 (Elastic)",
            absorption_capacity: "High (62-65%)",
            protein_type: "High-gluten spring wheat (13-14%)",
            science_explanation: "High-gluten flour creates strong, elastic dough that can be stretched very thin and maintains structure when folded"
        },
        thermalProfile: {
            oven_type: "Coal-fired deck or gas deck oven",
            heat_distribution: "Intense bottom heat from deck, radiant heat from top",
            crust_development: "Crispy edges, pliable center with characteristic char",
            crumb_structure: "Chewy, elastic with small irregular holes"
        },
        fermentationScience: {
            yeast_activity: "Retarded (cold fermentation)",
            ph_target: "pH 5.2-5.4",
            organic_acids: "Balanced lactic and acetic from long fermentation",
            enzymatic_activity: "High (cold fermentation breaks down starches)"
        }
    },

    education: {
        pro_tips: [
            {
                tip: "The Fold Test",
                explanation: "Authentic NY pizza must fold in half without breaking. This tests proper gluten development, hydration, and bake. If it cracks, the dough needs more gluten development or the bake was too long."
            },
            {
                tip: "The Blot",
                explanation: "Use a napkin to dab excess oil from the cheese before eating. This is a classic NYC ritual that prevents oil drips and reduces greasiness."
            },
            {
                tip: "NYC tap water myth",
                explanation: "While NYC tap water is often credited, technique and flour quality are far more important. Skilled pizzaiolos can replicate NY-style anywhere with proper high-gluten flour and cold fermentation."
            },
            {
                tip: "Coal-fired authenticity",
                explanation: "Traditional coal-fired ovens (800-900°F) create distinctive smoky char and spotting. Gas ovens work but require longer bake times and won't achieve the same char."
            },
            {
                tip: "Slice culture economics",
                explanation: "The 'Pizza Principle' - slice cost historically correlated with subway fare, making pizza an economic indicator of NYC cost of living."
            }
        ],
        what_if: [
            {
                scenario: "Crust is too bread-like and thick",
                result: "Insufficient stretching or oven temperature too low",
                correction: "Hand-toss to 18-24 inches for proper thinness, increase oven temperature to 550°F minimum"
            },
            {
                scenario: "Pizza won't fold without breaking",
                result: "Insufficient gluten development or over-baked",
                correction: "Use high-gluten flour (13-14% protein), ensure proper kneading, reduce bake time"
            },
            {
                scenario: "Center is soggy and floppy",
                result: "Too much sauce or cheese, or insufficient bottom heat",
                correction: "Use less sauce (100-120g max), ensure deck oven provides strong bottom heat"
            },
            {
                scenario: "Crust is tough and chewy in a bad way",
                result: "Over-kneaded or insufficient fermentation",
                correction: "Knead only until smooth, ensure minimum 24-hour cold fermentation"
            }
        ],
        comparative_analysis: [
            {
                target_style: "Neapolitan",
                difference: "NY is crispier, foldable, and less wet; Neapolitan is softer with puffy crust and wetter center",
                why_choose_this: "Choose NY for on-the-go eating, foldability, and classic American pizza experience"
            },
            {
                target_style: "Chicago Deep Dish",
                difference: "NY is thin and foldable; Chicago is thick, pie-like, and requires utensils",
                why_choose_this: "Choose NY for quick, casual eating and traditional pizza experience"
            },
            {
                target_style: "Detroit Style",
                difference: "NY is round and hand-tossed; Detroit is rectangular, pan-baked with crispy, caramelized edges",
                why_choose_this: "Choose NY for classic slice culture and portability"
            }
        ],
        q_and_a: [
            {
                question: "What makes New York pizza different from other styles?",
                answer: "New York pizza is characterized by its large size (18-24 inches), hand-tossed thin crust that's crispy on edges but soft enough to fold, high-gluten flour for chew, and traditionally coal-fired ovens. The key is the balance between crispy and pliable - you should be able to fold a slice in half without it breaking.",
                context: "NYC pizza culture"
            },
            {
                question: "Is NYC tap water really the secret to authentic New York pizza?",
                answer: "While NYC tap water is often cited, the reality is that technique, flour quality, and fermentation time are far more important. The minerals in NYC water may contribute slightly to texture, but skilled pizzaiolos can replicate NY-style pizza anywhere with proper technique and high-gluten flour.",
                context: "Common myth debunked"
            },
            {
                question: "Why do New Yorkers fold their pizza slices?",
                answer: "Folding serves multiple purposes: it creates structural integrity for the thin, large slice, prevents toppings from sliding off, makes it easier to eat on-the-go, and creates a pocket that catches any dripping oil or sauce. The ability to fold without breaking is actually a quality test for authentic NY pizza.",
                context: "NYC tradition"
            },
            {
                question: "What's the difference between coal-fired and gas oven NY pizza?",
                answer: "Coal-fired ovens (800-900°F) cook pizza in 2-5 minutes, creating distinctive char, smoky flavor, and leopard spotting. Gas deck ovens (550-650°F) require 6-8 minutes, produce more even bake, and are easier to control but lack the smoky char. Both can make excellent NY pizza.",
                context: "Oven comparison"
            },
            {
                question: "Can I make NY-style pizza at home?",
                answer: "Yes! Use high-gluten bread flour (13-14% protein), cold ferment for 24-72 hours, preheat pizza stone to maximum temperature (usually 500-550°F), and bake for 8-12 minutes. You won't get coal-fired char, but you can achieve the characteristic crispy-yet-foldable texture.",
                context: "Home baking"
            }
        ],
        fermentation_methods: [
            {
                method: "Hybrid",
                suitability: "Authentic",
                notes: "Cold Retard (24-72h). Standard practice for NY-style. Develops complex flavors and improves texture. Essential for authentic results."
            },
            {
                method: "Direct",
                suitability: "Possible",
                notes: "Same Day. Works in a pinch but lacks the complex flavors and improved texture from cold fermentation. Not traditional."
            },
            {
                method: "Biga",
                suitability: "Possible",
                notes: "Some modern pizzerias use biga for added complexity, but not traditional for classic NY-style."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "NY-style uses moderate hydration (58-65%) to create balance between crispy and pliable. Higher hydration would make the dough too delicate for hand-tossing and folding. Lower hydration would create a tough, bread-like texture. The high-gluten flour can handle this hydration while maintaining structure for the characteristic fold.",
        methodSuitability: {
            direct: { suitable: true, notes: "Possible but not traditional. Cold fermentation is essential for authentic NY-style flavor and texture." },
            biga: { suitable: true, notes: "Some modern pizzerias use biga for added complexity, but not part of traditional NY-style." },
            poolish: { suitable: true, notes: "Can add flavor complexity, but cold-fermented direct dough is more traditional." }
        },
        whatIf: [
            {
                scenario: "Dough is too sticky to hand-toss",
                outcome: "Hydration too high or insufficient gluten development",
                solution: "Reduce water to 58-62% range, ensure proper kneading, use high-gluten flour"
            },
            {
                scenario: "Pizza is greasy and oil pools on surface",
                outcome: "Too much cheese or oil in dough",
                solution: "Use low-moisture mozzarella, reduce oil in dough to 1-2%, blot with napkin before eating"
            },
            {
                scenario: "Crust burns before cheese melts",
                outcome: "Oven temperature too high or pizza too close to heat source",
                solution: "Lower temperature to 550-650°F for gas ovens, position pizza in center of oven"
            }
        ],
        comparisons: [
            {
                vsStyle: "Grandma Pizza",
                difference: "NY is round and hand-tossed; Grandma is square, pan-baked, thicker with similar flavor profile"
            },
            {
                vsStyle: "New Haven Apizza",
                difference: "NY uses gas/coal ovens; New Haven uses coal-fired only, resulting in more char and drier texture"
            }
        ],
        proTips: [
            "Hand-tossing technique takes practice - start with gentle stretching before attempting tosses",
            "Cold leftover slices are a NYC tradition - many prefer them straight from the fridge",
            "The 'Pizza Principle' - slice cost historically matched subway fare ($1.50 in 1980s, $3+ today)",
            "Lombardi's (1905) is the first pizzeria in the USA, establishing NY-style foundations",
            "Coal-fired ovens are making a comeback as pizzerias seek authentic original flavor"
        ]
    },

    tags: ["american", "coal-fired", "slice culture", "foldable", "nyc"],

    watchouts: [
        "Over-saucing leads to soggy center that can't be folded properly",
        "Insufficient gluten development results in crust that tears when folded",
        "Too much cheese creates greasy surface and masks other flavors",
        "Oven temperature too low creates tough, bread-like texture",
        "Hand-tossing requires practice - start with gentle stretching first"
    ],

    notes: [
        "The 'fold test' is essential - authentic NY pizza must fold without breaking",
        "NYC tap water is often credited but technique and flour quality are more important",
        "Slice culture made pizza democratic - accessible to all economic classes",
        "Lombardi's opened in 1905 as first licensed pizzeria in the USA",
        "Coal-fired ovens became standard due to coal's economic availability in early 1900s",
        "The 'Pizza Principle' - slice cost historically correlated with subway fare"
    ],
    recommendedFlavorComponents: ["mozzarella_low_moisture", "tomato_sauce_cooked", "pepperoni", "pecorino_romano", "oregano_dried", "garlic_oregano"],
    references: [
        {
            source: "Lombardi's Pizza - First Pizzeria in USA",
            url: "https://www.firstpizza.com/"
        },
        {
            source: "Wikipedia - New York-style pizza",
            url: "https://en.wikipedia.org/wiki/New_York-style_pizza"
        },
        {
            source: "Serious Eats - NY Pizza Guide",
            url: "https://www.seriouseats.com/new-york-style-pizza"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/new-york-style-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    }
};
