import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * ROMAN PINSA (PINSA ROMANA)
 * 
 * Researched and validated content:
 * - Origin: Rome, Italy (Modern invention by Corrado Di Marco, 2001)
 * - Technique: High hydration (80%+), flour blend (wheat, soy, rice), long cold ferment
 * - Etymology: From Latin 'pinsere' (to stretch/press)
 * - Science: Soy for browning/protein, Rice for water retention/crispness
 */
export const roman_pinsa_modern: DoughStyleDefinition = {
    id: "roman_pinsa_modern",
    name: "Roman Pinsa",
    category: "pizza",
    recipeStyle: RecipeStyle.ROMAN, // Pinsa is often categorized under Roman styles
    family: "Modern Italian Flatbread",

    origin: {
        country: "Italy",
        region: "Rome, Lazio",
        period: "2001, popularized by Corrado Di Marco"
    },

    description: "Pinsa Romana is a modern interpretation of ancient flatbreads, characterized by its oval shape and a unique flour blend of wheat, soy, and rice. It features an extremely high hydration (over 80%) and a long cold fermentation process, resulting in a 'cloud-like' interior that is remarkably light and digestible, with a thin, crispy exterior shell.",

    history: "While marketing often links Pinsa to the ancient Roman Empire (referencing Virgil's Aeneid), the Pinsa we know today was created in 2001 by Corrado Di Marco. He sought to innovate beyond traditional pizza by creating a highly digestible dough using a specific blend of flours. The inclusion of soy flour (for structural strength and color) and rice flour (for moisture retention) allowed for hydration levels previously impossible for hand-stretched dough. In 2025, it was officially recognized as a Traditional Agri-food Product (PAT) of Lazio, cementing its status as a modern Roman icon.",

    difficulty: "Hard",
    fermentationType: "cold",

    base_formula: [
        { name: "Strong Wheat Flour (W300+)", percentage: 80 },
        { name: "Rice Flour", percentage: 10 },
        { name: "Soy Flour", percentage: 10 },
        { name: "Water", percentage: 80 },
        { name: "Salt", percentage: 2.2 },
        { name: "Extra Virgin Olive Oil", percentage: 2 },
        { name: "Dry Leaven (Pasta Madre essence) or Yeast", percentage: 0.5 }
    ],

    technicalProfile: {
        hydration: [80, 85],
        salt: [2, 2.5],
        oil: [1, 3],
        sugar: [0, 0],
        flourStrength: "Blend: Strong Wheat + Soy + Rice. Total W-equiv: 300-340",
        ovenTemp: [280, 320],
        recommendedUse: [
            "White Pinsa with Mortadella and Stracciatella",
            "Classic Pinsa with tomato and fresh buffalo mozzarella",
            "Gourmet toppings added post-bake"
        ],
        difficulty: "Hard",
        ballWeight: { recommended: 250, min: 200, max: 350 },
        fermentationSteps: [
            "Mix: Combine flours with 70% of the water and yeast. Develop structure. [Science: Initial low hydration allows gluten to form properly despite the presence of soy and rice which don't have glutenins]",
            "Step Hydration: Slowly add the remaining 10-15% water (bassinage). [Science: Pushes the wheat gluten to its physical limit of water absorption]",
            "Bulk Fermentation: 2 hours at room temperature with 2-3 sets of folds. [Science: Folds organize the gluten network to trap large gas bubbles]",
            "Cold Retard: 48-72 hours at 4°C. [Science: Proteases break down gluten and complex starches, increasing digestibility and developing aroma]",
            "Division and Balling: Portion into tight balls. Rest 3-4 hours before use. [Science: Allows the high-hydration network to relax for easy stretching]",
            "Press/Pinsa: Gently press with fingertips into an oval shape. [Science: Finger pressing preserves the 'alveolatura' (bubbles) unlike rolling pins]",
            "Bake: High heat (300°C) for 4-6 minutes. Often twice-baked for extra crispness. [Science: Rapid evaporation of surface water creates the 'shattering' crust]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W300-350 (Hybrid calculation)",
            pl_ratio: "0.55-0.70 (Balanced-Tenacious)",
            absorption_capacity: "Extreme (80-90%)",
            protein_type: "Wheat + High-protein Soy + Starch-rich Rice",
            science_explanation: "The soy flour provides additional protein for structure and color, while rice flour gelatinizes during baking to lock in moisture, creating the soft 'cloud' interior."
        },
        thermalProfile: {
            oven_type: "Electric deck oven with stone or refractory floor",
            heat_distribution: "Moderate bottom conduction, high convection/radiation",
            crust_development: "Thin, eggshell-crispy, significantly lighter than traditional pizza",
            crumb_structure: "Highly irregular, large alveoli (pockets), very soft and moist"
        },
        fermentationScience: {
            yeast_activity: "Highly retarded by cold temperature",
            ph_target: "pH 5.2-5.4",
            organic_acids: "Lactic-forward with sourdough notes if 'Pasta Madre' essence is used",
            enzymatic_activity: "High starch-to-sugar conversion ensures rapid browning at slightly lower temperatures than Neapolitan"
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Soy and Rice are the keys",
                explanation: "You cannot make authentic Pinsa with 100% wheat. Rice flour gives that unique 'crunch' that isn't hard, while soy adds the structural integrity needed to hold 85% water."
            },
            {
                tip: "The 3-Finger Press",
                explanation: "Never use a rolling pin. Press the dough with your fingertips starting from the center moving outward to form an oval. This maintains the air pockets you spent 48 hours creating."
            },
            {
                tip: "Twice-Baked Technique",
                explanation: "For maximum crunch, par-bake the plain dough for 2-3 minutes, let it rest, then add toppings and finish the bake. This ensures the center is fully cooked through without burning the toppings."
            },
            {
                tip: "Cold Water for Mixing",
                explanation: "High-hydration mixing creates a lot of friction heat. Use ice-cold water to keep the dough under 23°C during the long mixing process to prevent premature fermentation."
            },
            {
                tip: "The 'Digestibility' Factor",
                explanation: "The long 72h ferment is what makes Pinsa famous. It 'pre-digests' the starches and proteins so your stomach has less work to do. Always respect the clock."
            }
        ],
        what_if: [
            {
                scenario: "Dough is a liquid soup and won't ball",
                result: "Wheat flour was too weak or water was added too fast",
                correction: "Use a flour with W350+. Use the 'bassinage' technique: add water slowly after the first gluten structure has formed."
            },
            {
                scenario: "Exterior is soft/soggy",
                result: "Under-baked or too many wet toppings added too early",
                correction: "Add moisture-heavy toppings (like fresh mozzarella) halfway through or post-bake. Use a stone preheated for 1 hour."
            },
            {
                scenario: "Inside is gummy",
                result: "Flour wasn't strong enough or bake was too fast/hot",
                correction: "Lower temperature slightly and extend bake time to 6-7 minutes. Ensure a long (48h+) cold ferment."
            },
            {
                scenario: "Dough doesn't rise in the oven",
                result: "Yeast was dead or over-fermented (dough became acidic/weak)",
                correction: "Check yeast viability. If the dough smells very sour/vinegary, you waited too long (over 120h)."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Roman Pizza al Taglio",
                difference: "Teglia is thicker and baked in a pan. Pinsa is thinner, oval, and stretched directly on the stone.",
                why_choose_this: "Choose Pinsa for a lighter, individual-sized artisan experience with a unique flour flavor."
            },
            {
                target_style: "Neapolitan",
                difference: "Pinsa is much crisper and more hydrated; it has a 'crusty' shell compared to Neapolitan's 'soft and foldable' texture.",
                why_choose_this: "Choose Pinsa for higher crunch and more adventurous toppings."
            },
            {
                target_style: "Focaccia",
                difference: "Pinsa is a lean dough (very little oil) focused on airiness; Focaccia is oil-heavy and more bread-like.",
                why_choose_this: "Choose Pinsa for a lower-calorie, 'cloud-like' bite."
            }
        ],
        q_and_a: [
            {
                question: "Is Pinsa really an ancient Roman recipe?",
                answer: "No. While it uses an ancient name, the specific 3-flour blend was invented in 2001. It is a 'modern-ancient' marketing success based on real scientific improvements in digestibility.",
                context: "History"
            },
            {
                question: "Why use soy flour?",
                answer: "Soy flour provides essential proteins that help the dough brown and maintain structure under the heavy weight of 85% water, which wheat alone sometimes struggles to do.",
                context: "Chemistry"
            },
            {
                question: "What is 'Pinsere'?",
                answer: "It is the Latin infinitive meaning 'to press' or 'to crush,' describing the action of the fingers on the dough to form its characteristic oval shape.",
                context: "Etymology"
            },
            {
                question: "Can I use just 00 flour?",
                answer: "Technically yes, but it won't be a Pinsa. It would be a high-hydration Roman Tonda. The mix of rice and soy is what gives Pinsa its trademark 'cloud' lightness.",
                context: "Ingredients"
            },
            {
                question: "Why is it oval?",
                answer: "Tradition (and marketing) dictated an oval shape to differentiate it from circular pizzas on the plate, but technically it allows for easier handling of very high-hydration dough.",
                context: "Design"
            }
        ],
        fermentation_methods: [
            {
                method: "Hybrid",
                suitability: "Authentic",
                notes: "Long cold retard (48-72h) is mandatory for the pinsa classification."
            },
            {
                method: "Sourdough",
                suitability: "Ideal",
                notes: "Using a dry sourdough essence ('pasta madre') provides the authentic Roman aroma profile."
            },
            {
                method: "Direct",
                suitability: "Not Recommended",
                notes: "Same-day Pinsa will be heavy and lack the airy internal structure."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Pinsa is a masterclass in 'bassinage'. By starting with a lower hydration (65%) to build a strong gluten cage, we then slowly inject another 15-20% water. The rice flour acts as a sponge, locking this water in place so it turns to steam in the oven, inflating the dough like a balloon without it collapsing.",
        methodSuitability: {
            direct: { suitable: true, notes: "Only with 48h+ cold retard." },
            biga: { suitable: true, notes: "Excellent for building additional strength for 90% hydration attempts." },
            poolish: { suitable: true, notes: "Adds great extensibility for that long oval stretch." }
        },
        whatIf: [
            {
                scenario: "You omit the rice flour",
                outcome: "The interior will be less moist and the exterior won't have the same 'shattering' crispiness.",
                solution: "Rice flour is essential for the moisture-to-crunch balance."
            }
        ],
        comparisons: [
            {
                vsStyle: "Pizza alla Pala",
                difference: "Pala is much larger and usually 100% wheat; Pinsa is individual-sized and uses the specialized flour blend."
            }
        ],
        proTips: [
            "Dust with Rice Flour for the final stretch to prevent sticking without adding weight.",
            "Add toppings post-bake for a 'Gourmet Pinsa' look.",
            "Keep the dough cold until the very last stage of balling.",
            "Look for 'Pinsa Mix' flours if you can't blend your own."
        ]
    },

    tags: ["roman", "pinsa", "high-hydration", "soy-rice-flour", "oval-pizza", "digestible"],

    watchouts: [
        "Over-mixing once the water is in can break the gluten chain.",
        "Not enough salt will make 85% hydration dough taste like wet paper.",
        "Dough balls that sit too long at room temp will become impossible to handle.",
        "Soy flour can burn quickly - keep an eye on the bottom char."
    ],

    notes: [
        "Invented by Corrado Di Marco in 2001.",
        "Flour blend: Wheat + Soy + Rice.",
        "Oval shape is mandatory for 'Pinsa' identity.",
        "Higher digestibility than standard pizza due to long fermentation.",
        "One of the only pizzas where 'cloud-like' is a technical term."
    ],

    references: [
        {
            source: "Pinsa Di Marco - Official Site",
            url: "https://www.pinsadimarco.it/en/what-is-pinsa-romana/"
        },
        {
            source: "Original Pinsa Romana Association",
            url: "https://www.pinsaromana.info/en/"
        },
        {
            source: "Gambero Rosso - History of Pinsa",
            url: "https://www.gamberorosso.it/notizie/pinsa-romana-storia-e-ricetta/"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/roman-pinsa-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["stracciatella", "mortadella", "pistachio", "olive_oil_extra_virgin", "cherry_tomatoes_confit"]
};
