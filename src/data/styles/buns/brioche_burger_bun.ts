import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * GOURMET BRIOCHE BURGER BUN
 * 
 * Researched and validated content:
 * - Origin: France (Adaptation for US Burger Market, popularized 2000s)
 * - Technique: Intensive Kneading, Cold Integration of Butter, Tangzhong (Modern)
 * - Ingredients: High-fat butter (82%+), Whole Milk, Eggs, Sugar
 * - Characteristics: Golden-brown, glossy top, buttery aroma, sturdy enough for meat juices
 */
export const brioche_burger_bun: DoughStyleDefinition = {
    id: "brioche_burger_bun",
    name: "Gourmet Brioche Burger Bun",
    category: "burger_bun",
    recipeStyle: RecipeStyle.BURGER_BUN_BRIOCHE,
    family: "Enriched Buns",

    origin: {
        country: "France / USA",
        region: "Paris / Professional Kitchens",
        period: "Early 2000s (Rise of the Gourmet Burger movement)"
    },

    description: "The Brioche Burger Bun is the premier choice for gourmet burgers. Derived from the classic French Brioche, this version is specifically calibrated to be sturdy enough to hold a juicy beef patty and heavy toppings without disintegrating, while remaining incredibly soft and buttery. It features a high concentration of eggs and butter, and a signature glossy, deep-golden egg-washed dome.",

    history: "While Brioche has been a staple of French baking since the 1400s, it wasn't used for burgers until the 'Gourmet Burger' revolution of the early 21st century. Chefs like Daniel Boulud in NYC began using enriched doughs to match the quality of premium Wagyu and dry-aged beef. It solved the problem of standard buns being too dry or too weak, elevating the burger from fast food to high-gastronomy.",

    difficulty: "Hard",
    fermentationType: "hybrid",

    base_formula: [
        { name: "Strong Bread Flour (W300+)", percentage: 100 },
        { name: "Whole Milk (Cold)", percentage: 35 },
        { name: "Unsalted Butter (High Fat, Softened)", percentage: 40 },
        { name: "Whole Eggs", percentage: 25 },
        { name: "Sugar", percentage: 12 },
        { name: "Sea Salt", percentage: 2 },
        { name: "Instant Yeast", percentage: 1.5 },
        { name: "Tangzhong (Flour/Water cooked paste)", percentage: 15 }
    ],

    technicalProfile: {
        hydration: [55, 65], // High hydration from milk, eggs, and butter
        salt: [1.8, 2.2],
        oil: [0, 0], // Fat is purely from 40% butter
        sugar: [10, 15],
        flourStrength: "Very Strong (W300-340). Needs to support the weight of the massive amount of fat and sugar",
        ovenTemp: [175, 190], // Steam-assisted bake is ideal for volume
        recommendedUse: [
            "Premium Gourmet Burgers",
            "Pulled Pork sandwiches",
            "Brioche sliders"
        ],
        difficulty: "Hard",
        ballWeight: { recommended: 90, min: 60, max: 120 }, // 90g is the standard for a 10cm bun
        fermentationSteps: [
            "Tangzhong Prep: Cook 5% of the flour with 5x its weight in water until a gel forms (65°C). Let cool. [Science: Pre-gelatinized starch holds more water, increasing softness and shelf life]",
            "First Mix: Combine flour, milk, eggs, sugar, yeast, and Tangzhong. Knead until a strong gluten network is formed (Windowpane). [Science: You MUST develop structure before adding fat, otherwise the fat will coat the proteins and prevent bonding]",
            "Butter Integration: Add softened butter in 3 stages, kneading until fully incorporated each time. [Science: The butter's water and oil must be emulsified into the dough to prevent a greasy crumb]",
            "Bulk Rise: 1 hour at room temperature, then 12-24 hours in the fridge. [Science: Cold retard allows the butter to solidify, making the high-fat dough manageable for shaping]",
            "Shaping: Portion into 90g balls. Create tight tension on the surface. [Science: Surface tension leads to the perfect 'spherical' dome during the rise]",
            "Final Proof: 2 to 3 hours at 24°C until doubled in size. [Science: The heavy dough needs time to aerate and 'puff' up]",
            "Egg Wash & Sesame: Brush twice with a mix of egg yolk and cream. Top with seeds. [Science: High protein/fat wash creates the intensely glossy, dark-golden finish]",
            "Baking: Bake for 12-15 minutes. [Science: Internal temp should reach 88°C (190°F). Do not over-bake or it will become dry]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W300-340 (Strong)",
            pl_ratio: "0.55-0.65",
            absorption_capacity: "High (due to Tangzhong and fats)",
            protein_type: "Hard Red Spring Wheat",
            science_explanation: "Standard bun flours would 'leak' butter at these levels. A high W index provides the 'cage' necessary to hold the fat emulsified within the crumb."
        },
        thermalProfile: {
            oven_type: "Convection Oven (with Steam)",
            heat_distribution: "Uniform radiation",
            crust_development: "Thin, soft, and extremely glossy; deep mahogany color",
            crumb_structure: "Cloud-like, feather-soft, yet elastic and 'rebounding'"
        },
        fermentationScience: {
            yeast_activity: "High; specifically targeted at overcoming the osmotic pressure of the sugar",
            ph_target: "pH 5.4 - 5.6",
            organic_acids: "Lactic focus; the milk and butter provide a creamy lactic profile",
            enzymatic_activity: "Protease activity is kept low by the sugar/fat concentration, preserving the elasticity needed for burger support."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Windowpane Test",
                explanation: "Before adding any butter, you must be able to stretch the dough into a thin, translucent membrane. If the structure isn't there first, the bun will be flat and bready."
            },
            {
                tip: "Two-Layer Egg Wash",
                explanation: "Brush once, let it dry for 5 minutes, then brush again. This 'double coat' is the secret to the world-class reflective shine of top-tier buns."
            },
            {
                tip: "Butter at 18°C",
                explanation: "The butter should be 'plastic'—pliable but cool. If it's too warm, it will melt into the dough and ruin the crumb structure; too cold, and it won't integrate."
            },
            {
                tip: "The Tangzhong Secret",
                explanation: "Commercial buns use 'dough conditioners'. We use Tangzhong. It makes the bun stay soft for 3-4 days naturally."
            },
            {
                tip: "Steam the Oven",
                explanation: "Use a tray of hot water in the bottom of the oven for the first 5 minutes. It prevents the crust from setting too early, allowing for a much bigger 'oven spring'."
            }
        ],
        what_if: [
            {
                scenario: "Dough is a greasy mess during mixing",
                result: "Butter was added too soon or was too warm",
                correction: "Put the bowl in the fridge for 20 minutes to firm up the fat, then try kneading again at low speed."
            },
            {
                scenario: "Buns are heavy and didn't rise",
                result: "Yeast was killed by too much salt or the butter integration destroyed the foam",
                correction: "Add yeast 10 minutes into the mix and ensure final dough temp stays under 25°C."
            },
            {
                scenario: "Buns have flat tops",
                result: "Over-proofed or not enough surface tension during shaping",
                correction: "Shape the balls tightly using a 'cupping' motion on the counter. Don't let them triple in size; double is perfect."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Potato Bun",
                difference: "Brioche is richer (butter/egg); Potato bun is softer and 'stickier' (starch) but less buttery.",
                why_choose_this: "Choose Brioche for high-end Wagyu or truffle burgers."
            },
            {
                target_style: "Hokkaido Milk Bread",
                difference: "Hokkaido uses more milk and less butter; it is sweeter but less 'structurally sound' for a 200g beef patty.",
                why_choose_this: "Choose Brioche when structural integrity is as important as flavor."
            },
            {
                target_style: "Soft Flour Bun",
                difference: "Soft flour buns use oil/shortening and water; they are lighter but lack the gourmet depth of Brioche.",
                why_choose_this: "Choose Soft Flour for traditional 'Fast Food' school-lunch nostalgia."
            }
        ],
        q_and_a: [
            {
                question: "Why use Milk instead of Water?",
                answer: "Milk proteins (casein) and sugars (lactose) contribute to a softer crumb and a much better crust color through the Maillard reaction.",
                context: "Ingredients"
            },
            {
                question: "Is Brioche too sweet?",
                answer: "A good burger brioche should have just enough sugar to balance the salt of the meat, but never taste like a dessert cake.",
                context: "Taste"
            },
            {
                question: "Salted or Unsalted Butter?",
                answer: "Unsalted is better for the dough so you can control the exact 2% salinity, which is crucial for yeast activity.",
                context: "Ingredients"
            },
            {
                question: "Can I use a bread machine?",
                answer: "The 'Enriched' cycle is fine, but the intensive kneading required for 40% butter integration is best done in a high-powered stand mixer.",
                context: "Equipment"
            }
        ],
        fermentation_methods: [
            {
                method: "Hybrid",
                suitability: "Authentic",
                notes: "A tiny bit of levain (sourdough) added to the yeast mix provides incredible shelf life and subtle depth."
            },
            {
                method: "Direct",
                suitability: "Possible",
                notes: "Fast, but the buns will go stale much faster (within 24h)."
            },
            {
                method: "Tangzhong",
                suitability: "Ideal",
                notes: "The modern professional secret for softness and durability."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Hydration (60%) is high for a bun but necessary because of the absorption capacity of the milk and the Tangzhong gel. The butter provides 'internal lubrication' that mimics high hydration.",
        methodSuitability: {
            direct: { suitable: true, notes: "Reliable with Tangzhong." },
            biga: { suitable: true, notes: "Recommended for adding 'bite' to the bun." },
            poolish: { suitable: true, notes: "Excellent for the extensibility needed for a perfectly round bun." }
        },
        whatIf: [
            {
                scenario: "You use 0% sugar",
                outcome: "The bun will look pale and 'matte', lose its brioche sweetness, and have a significantly shorter shelf life.",
                solution: "Sugar is a functional ingredient for moisture and color here."
            }
        ],
        comparisons: [
            {
                vsStyle: "Bakery Brioche vs Burger Brioche",
                difference: "Bakery brioche is often 50-80% butter and too fragile; Burger Brioche is 25-40% butter for better handling."
            }
        ],
        proTips: [
            "Toast the bun in a pan with butter before serving—the 'searing' of the brioche prevents sauce from soaking into the dough.",
            "Add a pinch of Turmeric (0.1%) to the flour for a vivid, 'premium' yellow crumb color.",
            "Use a 'Water Bath' in the proofer to keep the buns from forming a skin while they rise.",
            "A mix of Sesame and Poppy seeds gives that 'Everything Bagel' aesthetic to a gourmet burger.",
            "Freeze the buns once cool—they reheat perfectly and taste fresher than day-old room-temp buns."
        ]
    },

    tags: ["burger", "bun", "brioche", "gourmet", "enriched", "soft"],

    watchouts: [
        "Dough too hot? The butter will melt—aim for 24°C finish temp.",
        "Buns merging on the tray? Give them at least 10cm space.",
        "Sticky dough? Resist adding more flour; just chill and knead more.",
        "Wrinkly tops? Usually from over-proofing or handling after the proof."
    ],

    notes: [
        "The industry standard for premium burgers.",
        "High butter (40%) and egg content.",
        "Uses Tangzhong for modern softness.",
        "Deep mahogany glossy crust.",
        "W300+ strong flour is mandatory."
    ],

    references: [
        {
            source: "The Modernist Cuisine Burger",
            url: "https://modernistcuisine.com/recipes/brioche-bun/",
            author: "Nathan Myhrvold",
            year: "2018"
        },
        {
            source: "Professional Baking - Enriched Doughs",
            url: "https://www.wiley.com/en-us/Professional+Baking%2C+7th+Edition-p-9781119148449",
            author: "Wayne Gisslen",
            year: "2016"
        },
        {
            source: "King Arthur Baking - Brioche Techniques",
            url: "https://www.kingarthurbaking.com/recipes/brioche-buns-recipe",
            author: "King Arthur Team",
            year: "2023"
        }
    ],

    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/brioche-burger-bun-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["salted_butter_normandy", "sesame_seeds", "poppy_seeds"]
};
