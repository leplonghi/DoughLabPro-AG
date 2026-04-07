import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PÂTE SUCRÉE (FRENCH SWEET TART DOUGH)
 * 
 * Researched and validated content:
 * - Origin: France (Classic Haute Pâtisserie)
 * - Technique: Crémage (Creaming), Blind Baking, Docking
 * - Ingredients: High sugar, Whole eggs/Yolks, Almond flour (optional)
 * - Characteristics: Cookie-like, crisp, sturdy, moisture-resistant
 */
export const pate_sucree_classic: DoughStyleDefinition = {
    id: "pate_sucree_classic",
    name: "Pâte Sucrée (Classic Sweet Tart)",
    category: "cookies_confectionery",
    recipeStyle: RecipeStyle.PATE_SUCREE,
    family: "French Pastry Bases",

    origin: {
        country: "France",
        region: "Paris / National",
        period: "18th–19th Century (Golden age of French Pâtisserie)"
    },

    description: "Pâte Sucrée is the 'sweet crust' of French patisserie. Unlike Pâte Brisée (savory) or Sablée (crumbly), Sucrée is essentially a thin, crisp cookie dough used to house elaborate fillings like pastry cream, fruit, or chocolate ganache. It is rich in sugar and binds with eggs, which creates a sturdy, moisture-resistant barrier that remains crunchy even after contact with wet fillings.",

    history: "The development of Pâte Sucrée is intertwined with the evolution of the French tart. As sugar became more accessible in the 1800s, chefs like Antonin Carême and later Auguste Escoffier refined the dough to be more palatable as a standalone element. It became the foundation for the 'Tarte au Citron' and 'Tarte aux Fruits', becoming a mandatory skill in the repertoire of any professional Pâtissier.",

    difficulty: "Hard",
    fermentationType: "direct",

    base_formula: [
        { name: "T45 or All-Purpose Flour", percentage: 100 },
        { name: "Unsalted Butter (Room Temp)", percentage: 50 },
        { name: "Icing Sugar (Sucre Glace)", percentage: 40 },
        { name: "Whole Eggs", percentage: 20 },
        { name: "Almond Flour (Optional for aroma)", percentage: 10 },
        { name: "Sea Salt", percentage: 0.5 },
        { name: "Vanilla Bean Paste", percentage: 1 }
    ],

    technicalProfile: {
        hydration: [15, 20], // Moisture comes from eggs
        salt: [0.5, 1.0],
        oil: [0, 0], // Fat is purely butter
        sugar: [35, 45],
        flourStrength: "Low (W150-180). We want zero elasticity; the dough should be 'motto' (short) and never snap back",
        ovenTemp: [160, 175],
        recommendedUse: [
            "Lemon Meringue Tart base",
            "Fresh Fruit Tarts",
            "Chocolate Ganache Tarts"
        ],
        difficulty: "Hard",
        ballWeight: { recommended: 350, min: 250, max: 1000 },
        fermentationSteps: [
            "Crémage: Cream room-temperature butter with icing sugar and vanilla until smooth but not aerated. [Science: Unlike a cake, we don't want air; we want a dense, cohesive paste]",
            "Adding Eggs: Gradually beat in the eggs until fully emulsified. [Science: The fat and local moisture must form a stable bond to ensure the crust doesn't 'leak' oil in the oven]",
            "Dry Union: Add the sifted flour and salt. Mix until the dough just comes together. [Science: The moment the flour is added, the 'Gluten Watch' begins. Every extra second of mixing makes the tart harder and more prone to shrinking]",
            "Frasage (Optional): Smear the dough across the counter with the heel of your hand. [Science: Ensures perfect integration of butter bits without developing gluten strength]",
            "Chilling: Wrap in plastic and chill for 2-12 hours. [Science: Relaxes the gluten and solidifies the fat, making the dough rollable without sticking]",
            "Rolling & Lining: Roll to 3mm thickness. Line the tart ring. [Science: Use the 'overhang' technique to prevent the sides from dropping during the bake]",
            "Blind Baking: Cover with parchment and 'baking beans' (weights). Bake at 170°C for 15 mins. [Science: The weights hold the sides up until the protein network sets; removing them for the last 5 mins allows the bottom to crisp]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W150-170 (Very Weak)",
            pl_ratio: "0.35",
            absorption_capacity: "Low",
            protein_type: "Soft wheat with low water absorption",
            science_explanation: "A weak flour is essential for the 'fondant' (melting) quality of the crust. If the flour is too strong, the tart will be 'bready' and difficult to cut with a fork."
        },
        thermalProfile: {
            oven_type: "Convection Oven",
            heat_distribution: "Moderate bottom heat",
            crust_development: "Uniform pale gold; matte finish; high structural rigidity",
            crumb_structure: "Dense, fine-pored, and crisp"
        },
        fermentationScience: {
            yeast_activity: "None",
            ph_target: "pH 6.8 (Neutral)",
            organic_acids: "None; flavor is strictly dairy (butter) and aromatic (vanilla/almond)",
            enzymatic_activity: "Minimal."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Egg-Wash the Base",
                explanation: "5 minutes before finishing the blind bake, brush the inside with a mix of egg yolk and cream. This 'waterproofs' the tart, keeping it crispy even if you add a wet lemon curd."
            },
            {
                tip: "Icing Sugar only",
                explanation: "Never use granulated sugar for Sucrée. Icing sugar contains a small amount of cornstarch which helps the dough's stability and creates the finest 'cookie' texture."
            },
            {
                tip: "The Freezer Secret",
                explanation: "After lining your tart ring with dough, put it in the freezer for 20 minutes before baking. Cold dough = Zero shrinkage."
            },
            {
                tip: "Microplane the Edges",
                explanation: "After baking, use a microplane (grater) to gently shave the top edges of the tart crust until they are perfectly level and professional."
            },
            {
                tip: "Room Temp Butter",
                explanation: "Unlike Pâte Brisée (cold butter), Sucrée needs room-temp butter to emulsify with the high amount of sugar effectively."
            }
        ],
        what_if: [
            {
                scenario: "The tart sides collapsed into the center",
                result: "Dough wasn't rested or was worked too much (too warm)",
                correction: "Rest the dough for 12h and freeze the lined ring before baking. Ensure you don't 'pull' or 'stretch' the dough when lining the ring."
            },
            {
                scenario: "The crust is tough and hard to cut",
                result: "Flour was too strong or over-baked",
                correction: "Switch to a T45 flour and ensure you stop mixing as soon as the flour is no longer visible."
            },
            {
                scenario: "The bottom is soggy",
                result: "Under-baked or filling was too wet",
                correction: "Blind bake for longer and use the 'egg-wash waterproofing' technique."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Pâte Sablée",
                difference: "Sablée is richer, more crumbly, and uses the 'sanding' (butter+flour) method. Sucrée is studier and refined.",
                why_choose_this: "Choose Sucrée for complex, multi-layered tarts that need structural support."
            },
            {
                target_style: "Pâte Brisée",
                difference: "Brisée is savory (no sugar) and flaky (layers); Sucrée is sweet and cookie-like (homogenous).",
                why_choose_this: "Choose Sucrée for all sweet applications."
            },
            {
                target_style: "Graham Cracker Crust",
                difference: "Graham is a 'press-in' crumb crust; Sucrée is a rolled pastry that can be used for delicate free-standing tartlets.",
                why_choose_this: "Choose Sucrée for haute-couture patisserie aesthetics."
            }
        ],
        q_and_a: [
            {
                question: "Why use Almond Flour?",
                answer: "It breaks up the gluten network for extra tenderness and adds a subtle nutty fat that rounds out the vanilla flavor.",
                context: "Ingredients"
            },
            {
                question: "Is 'Blind Baking' mandatory?",
                answer: "Yes. Sucrée is so rich in sugar that it cooks faster than most fillings. Without pre-baking, the crust would be raw underneath.",
                context: "Technique"
            },
            {
                question: "Whole Egg vs Yolk?",
                answer: "Whole egg provides more structural 'snap'; pure Yolk makes the crust more tender and 'melty'. Standard French recipes use whole egg.",
                context: "Ingredients"
            },
            {
                question: "What is 'Frasage'?",
                answer: "A technique of using the heel of the hand to squash dough across the table. It integrates butter without creating gluten 'strength'.",
                context: "Technique"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "No fermentation; focus is on the 12h rest."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Hydration is managed by the eggs. If the dough is too dry, it will crack; if too wet, it will shrink. Aim for a 'soft plasticine' consistency.",
        methodSuitability: {
            direct: { suitable: true, notes: "The only method." },
            biga: { suitable: false, notes: "N/A" },
            poolish: { suitable: false, notes: "N/A" }
        },
        whatIf: [
            {
                scenario: "You use cold butter",
                outcome: "You will end up with a 'flaky' crust (Brisée) instead of the uniform cookie-like Sucrée.",
                solution: "Stick to room-temperature butter for the creaming method."
            }
        ],
        comparisons: [
            {
                vsStyle: "Sucrée vs Fonçage",
                difference: "Sucrée is richer and sweeter; Fonçage is a simpler sweet pastry used for basic bakery tarts."
            }
        ],
        proTips: [
            "A 1cm 'reserve' strip of dough can be used to patch any cracks that appear during blind baking.",
            "Add the zest of half a lemon for a classic 'Parisian' aromatic lift.",
            "Roll the dough between two sheets of parchment to avoid using excess flour which can make the crust dry.",
            "Use a 'perforated tart ring'—it allows steam to escape from the sides for a perfectly even bake.",
            "Wait for the shell to be completely COLD before filling it with warm ganache."
        ]
    },

    tags: ["pate sucree", "tart", "french", "pastry", "base", "premium"],

    watchouts: [
        "Dough cracking when rolling? It's too cold—let it sit for 5 mins.",
        "Crust shrinking? You overworked the gluten—be more gentle next time.",
        "Air bubbles on the bottom? You didn't dock it or use enough weights.",
        "Stuck to the ring? You didn't grease it or the sugar melted and glued it."
    ],

    notes: [
        "King of French tart bases.",
        "High sugar, egg-bound dough.",
        "Cookie-like, sturdy texture.",
        "Requires blind baking.",
        "12h rest is non-negotiable for professional results."
    ],

    references: [
        {
            source: "Le Grand Larousse Pâtissier",
            url: "https://www.larousse.fr/",
            author: "Larousse",
            year: "2023"
        },
        {
            source: "Ferrandi: French Pâtisserie",
            url: "https://www.ferrandi-paris.com/",
            author: "Ferrandi Team",
            year: "2017"
        },
        {
            source: "The Pastry Chef's Apprentice",
            url: "https://www.amazon.com/Pastry-Chefs-Apprentice-Step-Step/dp/159253685X",
            author: "Mitch Stamm",
            year: "2011"
        }
    ],

    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/pate-sucree-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["salted_butter_normandy", "vanilla_madagascar", "lemon_peel"]
};
