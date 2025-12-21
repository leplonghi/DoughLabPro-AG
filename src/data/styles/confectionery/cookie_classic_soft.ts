import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * CLASSIC SOFT CHOCOLATE CHIP COOKIE
 * 
 * Researched and validated content:
 * - Origin: Whitman, Massachusetts (1938 Ruth Wakefield, Toll House Inn)
 * - Technique: Room-temp butter creaming, Pan-banging (variation for ripples)
 * - Ingredients: Brown sugar (high ratio), Vanilla, Semi-sweet chocolate
 * - Characteristics: Chewy edges, soft center, distinct buttery profile
 */
export const cookie_classic_soft: DoughStyleDefinition = {
    id: "cookie_classic_soft",
    name: "Classic Soft Choc Chip Cookie",
    category: "cookies_confectionery",
    recipeStyle: RecipeStyle.COOKIE_CLASSIC_CHOC_CHIP,
    family: "Classic American Cookies",

    origin: {
        country: "USA",
        region: "Massachusetts",
        period: "1938 (Ruth Wakefield)"
    },

    description: "The Classic Soft Chocolate Chip Cookie is the gold standard of American home baking. Unlike the massive NY style, this cookie is designed for a perfect balance of crispy edges and a chewy, tender center. It relies on a high ratio of brown sugar to white sugar and room-temperature butter to achieve its iconic 'spread' and deeply caramelized butter flavor.",

    history: "The recipe was famously created by Ruth Wakefield at the Toll House Inn when she chopped up a bar of Nestlé semi-sweet chocolate and added it to her sugar cookie dough, expecting it to melt completely. Instead, the chocolate pieces held their shape, and the 'Toll House Cookie' was born. During WWII, soldiers from Massachusetts shared these cookies with soldiers from around the world, making it the most famous cookie in history.",

    difficulty: "Easy",
    fermentationType: "direct",

    base_formula: [
        { name: "All-Purpose Flour (9-10% Protein)", percentage: 100 },
        { name: "Unsalted Butter (Room Temp)", percentage: 80 },
        { name: "Brown Sugar (Light)", percentage: 70 },
        { name: "Granulated White Sugar", percentage: 30 },
        { name: "Whole Eggs (Room Temp)", percentage: 22 },
        { name: "Semi-sweet Chocolate Chips", percentage: 90 },
        { name: "Vanilla Extract", percentage: 2 },
        { name: "Baking Soda", percentage: 0.8 },
        { name: "Sea Salt", percentage: 1.2 }
    ],

    technicalProfile: {
        hydration: [15, 20],
        salt: [1.0, 1.5],
        oil: [0, 0], // Replaced by high butter content
        sugar: [90, 110], // High sugar content is key to the chewy texture
        flourStrength: "Low to Medium (W180-220). All-purpose flour is ideal for the softest bite",
        ovenTemp: [170, 185], // Moderate heat allows for even spread and caramelization
        recommendedUse: [
            "Traditional family snack",
            "Classic Bakery shelf item",
            "Holiday gift boxes"
        ],
        difficulty: "Easy",
        ballWeight: { recommended: 50, min: 30, max: 70 }, // Standard 'golf-ball' size
        fermentationSteps: [
            "Creaming: Beat room-temperature butter with sugars for 3-5 minutes until pale and fluffy. [Science: Air is trapped in the fat-sugar matrix, which will expand in the oven for a light texture]",
            "Emulsifying: Add eggs one at a time, followed by vanilla. Mix until fully combined. [Science: Lecithin in the eggs stabilizes the fat and water, preventing a 'broken' dough]",
            "Dry Mix: Sift flour, baking soda, and salt. Fold into the butter mixture by hand or on low speed. [Science: Minimal mixing prevents gluten development, ensuring the cookie remains tender, not tough]",
            "Inclusions: Fold in the chocolate chips. [Science: Distributes the 'flavor pockets' evenly]",
            "Chilling (Optional but Recommended): Chill for 2-12 hours. [Science: Allows the flour to hydrate and the salt/vanilla to permeate the dough, resulting in a deeper flavor]",
            "Scooping: Use a spring-loaded scoop to portion onto a tray. [Science: Uniform size ensures even baking across the entire tray]",
            "Baking: Bake for 9-11 minutes. [Science: The sugars liquefy and the cookie spreads until the edges set and the middle is slightly under-baked]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W180-220 (Weak to Medium)",
            pl_ratio: "0.45",
            absorption_capacity: "Moderate",
            protein_type: "Soft wheat with low elasticity",
            science_explanation: "Low protein flour is critical. High protein (Bread flour) would make the cookie too tall and 'chewy' like a bagel rather than 'soft' like a bakery cookie."
        },
        thermalProfile: {
            oven_type: "Standard Conventional Oven",
            heat_distribution: "Moderate convection",
            crust_development: "Golden-brown ring at the edges; pale and soft top",
            crumb_structure: "Tight, tender, and moist; characterized by a 'short' crumb that breaks easily"
        },
        fermentationScience: {
            yeast_activity: "None; leavening is provided by Baking Soda and steam",
            ph_target: "pH 7.2 - 7.5 (Slightly alkaline)",
            organic_acids: "Low; focus is on the sweet-savory balance of vanilla and salt",
            enzymatic_activity: "Minimal; the speed of the direct method avoids complex enzymatic breakdown."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Room Temp is key",
                explanation: "Butter should be 18-20°C. If it's too cold, it won't cream properly; if it's too warm (melting), the cookies will spread into a single flat sheet."
            },
            {
                tip: "Banging the Pan",
                explanation: "Halfway through baking, lift the pan and drop it onto the rack. Repeat every 2 minutes. This creates the 'rippled' edges found in famous artisanal bakeries (the Pan-Banging Method)."
            },
            {
                tip: "Don't Over-bake",
                explanation: "The cookie is done when the edges are golden but the middle still looks slightly 'wet' or 'raw'. It will finish setting on the hot tray."
            },
            {
                tip: "Dark vs Light Sugar",
                explanation: "Use Dark Brown sugar for a more intense molasses/toffee flavor and a chewier texture. Use Light Brown for a more delicate butter-forward profile."
            },
            {
                tip: "Chocolate Quality",
                explanation: "Use chocolate 'discs' or hand-chopped bars instead of chips for larger, irregular pools of molten chocolate."
            }
        ],
        what_if: [
            {
                scenario: "Cookies are puffy and cake-like",
                result: "Too much flour or too much egg/leavening",
                correction: "Reduce the flour by 10% or use only one egg yolk instead of a whole egg."
            },
            {
                scenario: "Cookies spread too much",
                result: "Butter was too soft or oven was too cold",
                correction: "Chill the dough balls for 30 minutes before baking and ensure the oven is fully preheated to 180°C."
            },
            {
                scenario: "The edges are burnt while center is raw",
                result: "Oven temp too high",
                correction: "Lower the temperature by 10°C and extend the bake time."
            }
        ],
        comparative_analysis: [
            {
                target_style: "NY Style (Levain)",
                difference: "Classic is thin and chewy; NY is giant and molten. Classic uses room-temp butter; NY uses cold butter.",
                why_choose_this: "Choose Classic for the traditional 'home-baked' nostalgia."
            },
            {
                target_style: "Shortbread",
                difference: "Shortbread has no eggs or leavening; Classic cookie is aerated and moist.",
                why_choose_this: "Choose Classic for a softer, more complex flavor profile."
            },
            {
                target_style: "Oatmeal Cookie",
                difference: "Oatmeal uses grains for texture; Classic is smooth and focuses on the chocolate-to-butter ratio.",
                why_choose_this: "Choose Classic for a smoother, richer mouthfeel."
            }
        ],
        q_and_a: [
            {
                question: "Why add Baking Soda?",
                answer: "It reacts with the acidity in the brown sugar to provide lift and also promotes the Maillard reaction (browning).",
                context: "Science"
            },
            {
                question: "Can I use Margarine?",
                answer: "You can, but the flavor and texture will be significantly inferior. Pure butter is the soul of this cookie.",
                context: "Ingredients"
            },
            {
                question: "How long do they last?",
                answer: "Best eaten within 2 days, but they can be kept in an airtight container with a piece of bread (to maintain moisture) for up to 5 days.",
                context: "Storage"
            },
            {
                question: "Why use 'All-Purpose' flour?",
                answer: "It has the perfect protein balance (approx 10%) to allow for spread without the cookie becoming tough and bread-like.",
                context: "Ingredients"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "The traditional home-baking way. Instant gratification."
            },
            {
                method: "Direct",
                suitability: "Ideal", // Reference to chill stage
                notes: "A 12h chill significantly improves the depth of caramel flavor and texture."
            },
            {
                method: "Hybrid",
                suitability: "Not Recommended",
                notes: "Not applicable."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Liquid comes from the eggs and the moisture retained by the brown sugar. The balance is delicate: too much liquid leads to a 'cakey' cookie; too little leads to a 'crumbly' one.",
        methodSuitability: {
            direct: { suitable: true, notes: "Reliable for quick results." },
            biga: { suitable: false, notes: "N/A" },
            poolish: { suitable: false, notes: "N/A" }
        },
        whatIf: [
            {
                scenario: "You brown the butter first (Beurre Noisette)",
                outcome: "The cookie will have an incredible nutty depth but will spread more because browned butter has lost its water content.",
                solution: "Add 1 tablespoon of water back into the dough to compensate."
            }
        ],
        comparisons: [
            {
                vsStyle: "Chewy vs Crispy",
                difference: "Chewy uses more brown sugar and slightly more egg; Crispy uses more white sugar and longer bake times at lower temps."
            }
        ],
        proTips: [
            "Store dough balls in the freezer for 'on-demand' cookies. Bake straight from frozen (add 2 mins).",
            "A sprinkle of Maldon sea salt on top immediately after baking is the marker of a 'gourmet' cookie.",
            "Use 'Vanilla Bean Paste' instead of extract for visible bean flecks and a more premium look.",
            "Rotating the tray halfway through baking ensures even color across the entire batch.",
            "Let them cool on the tray for 5 minutes, then move to a wire rack; this stops the bottom from becoming soggy."
        ]
    },

    tags: ["cookie", "classic", "chocolate chip", "soft", "chewy", "american"],

    watchouts: [
        "Over-mixing the flour? You'll get 'tough' cookies.",
        "Melting the butter? You'll get 'greasy' puddles.",
        "Cold eggs into warm butter? The mix will 'curdle'—use room temp.",
        "Baking on a dark tray? The bottoms will burn faster—reduce temp by 10°C."
    ],

    notes: [
        "Most popular cookie in the world.",
        "Ruth Wakefield (Toll House) is the creator.",
        "High brown sugar-to-white sugar ratio.",
        "Room-temperature butter creaming method.",
        "Balance of crispy edges and soft center."
    ],

    references: [
        {
            source: "Toll House Heritage - Nestlé",
            url: "https://www.verybestbaking.com/toll-house/",
            author: "Ruth Wakefield",
            year: "1938"
        },
        {
            source: "The Science of Thin, Crispy, or Chewy Cookies",
            url: "https://www.seriouseats.com/the-food-lab-the-science-of-the-best-chocolate-chip-cookies",
            author: "J. Kenji López-Alt",
            year: "2013"
        },
        {
            source: "King Arthur Baking - Cookie Technical Standards",
            url: "https://www.kingarthurbaking.com/recipes/chocolate-chip-cookies-recipe",
            author: "King Arthur Team",
            year: "2023"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/classic-soft-cookie-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["dark_chocolate_70", "salted_butter_normandy", "vanilla_madagascar", "pecan_nuts"]
};
