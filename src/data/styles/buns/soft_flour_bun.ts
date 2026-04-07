import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * SOFT FLOUR BURGER BUN (SCHOOL/FAST-FOOD STYLE)
 * 
 * Researched and validated content:
 * - Origin: USA (Post-war industrial baking; 1950s)
 * - Technique: Lean Dough, Oil Enrichment, High-Hydration processing
 * - Ingredients: AP Flour, Vegetable Oil, Sugar, High Yeast
 * - Characteristics: Extremely light, 'airy', neutral flavor, pale golden crust
 */
export const soft_flour_bun: DoughStyleDefinition = {
    id: "soft_flour_bun",
    name: "Soft Flour Burger Bun (Standard)",
    category: "burger_bun",
    recipeStyle: RecipeStyle.BURGER_BUN_SOFT,
    family: "Simple Lean Buns",

    origin: {
        country: "USA",
        region: "Industrial Bakeries / Nationwide",
        period: "1950s–1970s (The golden age of the American Diner)"
    },

    description: "The Soft Flour Bun is the nostalgic 'standard' burger bun. Found in school lunches, classic diners, and traditional fast-food chains, it is defined by its lightness. Unlike Brioche (which is heavy with butter) or Potato (which is dense with starch), the Soft Flour Bun is airy, almost 'empty' in a positive way, allowing the focus to remain 100% on the burger patty. It uses oil instead of butter for a cleaner flavor and a softer, more flexible crust.",

    history: "The soft white bun rose to prominence alongside the conveyor-belt broiler and the rise of the suburban burger stand. In the 1950s, the goal of industrial baking was 'standardization and softness'. Chemical dough conditioners (like DATEM) allowed for a bun that felt as soft as a cloud. Today, artisan versions of this bun achieve the same nostalgia by using improved fermentation and simple, high-quality vegetable oils.",

    difficulty: "Easy",
    fermentationType: "direct",

    base_formula: [
        { name: "All-Purpose Flour (T55 or similar)", percentage: 100 },
        { name: "Water (Lukewarm)", percentage: 55 },
        { name: "Vegetable Oil (Neutral)", percentage: 10 },
        { name: "Granulated Sugar", percentage: 8 },
        { name: "Whole Milk Powder (Optional for softness)", percentage: 5 },
        { name: "Fine Sea Salt", percentage: 2 },
        { name: "Instant Yeast", percentage: 2 }
    ],

    technicalProfile: {
        hydration: [55, 60],
        salt: [1.8, 2.2],
        oil: [10, 12], // Uses oil instead of butter for a 'neutral' softness
        sugar: [6, 10],
        flourStrength: "Low-Medium (W200-240). High gluten would make the bun too 'strong' and difficult to bite through",
        ovenTemp: [180, 200], // Fast, hot bake for volume
        recommendedUse: [
            "Classic 'Quarter-Pounder' style burgers",
            "School Lunch sandwiches",
            "Economic family meals"
        ],
        difficulty: "Easy",
        ballWeight: { recommended: 60, min: 45, max: 90 }, // Usually smaller than gourmet buns
        fermentationSteps: [
            "Mixing: Combine all ingredients. Knead for 10 minutes until smooth and elastic. [Science: Even with lower-protein flour, we need a good gluten network to hold the high yeast gases]",
            "Bulk Rise: 45 minutes to 1 hour. [Science: Soft buns use a higher yeast percentage for a faster, 'puffy' rise]",
            "Shaping: Portion into 60g balls. Shape tightly and flatten significantly. [Science: Flattening is mandatory; without it, these light doughs will rise into 'tennis balls' rather than buns]",
            "Final Proof: 45 minutes in a warm proofer (30°C). [Science: Fast proofing creates larger gas bubbles, leading to the 'airy' fast-food texture]",
            "Baking: Bake for 8-10 minutes. [Science: A short bake prevents a thick crust from forming]",
            "Softening: Immediately after baking, place the hot buns in a basket covered with a towel. [Science: The steam trapped by the towel 'melts' the crust into the soft crumb, creating the iconic flexible texture]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W200-220 (Weak to Medium)",
            pl_ratio: "0.45",
            absorption_capacity: "Moderate",
            protein_type: "Soft wheat blend",
            science_explanation: "If the flour protein is too high (Bread Flour), the bun will be too 'chewy'. We want a 'short' bite that breaks cleanly when bitten into with a burger."
        },
        thermalProfile: {
            oven_type: "Standard Conventional Oven",
            heat_distribution: "Moderate convection",
            crust_development: "Very thin, pale golden, and extremely flexible",
            crumb_structure: "Open, light, and spongy; large air cells compared to Brioche"
        },
        fermentationScience: {
            yeast_activity: "Very High; focuses on rapid volume expansion",
            ph_target: "pH 5.6 - 5.8 (Slightly less acidic to maintain a 'white bread' flavor)",
            organic_acids: "Low; clean focus on flour and sweetness",
            enzymatic_activity: "Moderate."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Oil is better than Butter",
                explanation: "For this specific 'school-style' bun, oil provides a softer, more flexible crumb that doesn't firm up in the fridge like butter does."
            },
            {
                tip: "Milk Powder Secret",
                explanation: "Milk powder provides the 'creamy white' look and soft texture without the cost or complexity of using whole milk."
            },
            {
                tip: "Steam the Buns",
                explanation: "Covering the hot buns with a towel immediately after baking is the most important step for the 'squishy' fast-food experience."
            },
            {
                tip: "Fast Proofing",
                explanation: "Unlike sourdough or artisan bread, we WANT a slightly faster rise here to create larger, lighter air bubbles in the crumb."
            },
            {
                tip: "Sesame Seeds",
                explanation: "Apply seeds using a spray of water rather than egg wash if you want to keep the matte, traditional 'cheap' bun look."
            }
        ],
        what_if: [
            {
                scenario: "The buns are heavy and bready",
                result: "Flour was too strong or not enough yeast/rise time",
                correction: "Switch to AP flour and ensure the buns have doubled in size before they hit the oven."
            },
            {
                scenario: "The tops are wrinkled and ugly",
                result: "Over-proofed",
                correction: "Don't let them rise too far; if they start to look transparent/fragile on top, they've gone too far."
            },
            {
                scenario: "The bun is too dry",
                result: "Baked too long",
                correction: "Bake for the absolute minimum time (8-9 mins) at slightly higher heat to 'seal' the bun without drying it."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Brioche Bun",
                difference: "Brioche is a luxury product with eggs/butter; Soft Flour is a simple, lean product focus on neutrality and lightness.",
                why_choose_this: "Choose Soft Flour for traditional backyard BBQ and standard cheeseburgers."
            },
            {
                target_style: "Potato Bun",
                difference: "Potato buns are 'gummier' and savory; Soft Flour buns are aerated and cleaner in flavor.",
                why_choose_this: "Choose Soft Flour when you want the burger meat to be the only star of the show."
            },
            {
                target_style: "Ciapatta (for burgers)",
                difference: "Ciapatta is crusty and rustic; Soft Flour is the opposite—soft and industrial-style.",
                why_choose_this: "Choose Soft Flour for ease of eating; Ciapatta can be difficult to bite through."
            }
        ],
        q_and_a: [
            {
                question: "Why use All-Purpose flour?",
                answer: "Lower protein results in less gluten 'toughness', which is exactly what you want for a bun that should disappear when you bite it.",
                context: "Ingredients"
            },
            {
                question: "Is this 'unhealthy' bread?",
                answer: "Not necessarily; while it mimics industrial bread, making it at home with quality oil and flour makes it a much cleaner product than store-bought versions.",
                context: "Health"
            },
            {
                question: "Can I use butter?",
                answer: "You can, but it will change the flavor to a more 'European' roll profile. Oil keeps it authentically 'American Diner'.",
                context: "Variations"
            },
            {
                question: "What is the best oil?",
                answer: "Sunflower, Canola, or a light Grapeseed oil. Avoid Olive oil as its flavor is too strong for this neutral style.",
                context: "Ingredients"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "The primary method for this style; simplicity is key."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Standard (55%). Because we aren't using eggs or potato starch, the hydration is easy to manage. The oil provides the extra slipperiness for shaping.",
        methodSuitability: {
            direct: { suitable: true, notes: "Reliable and fast." },
            biga: { suitable: false, notes: "N/A" },
            poolish: { suitable: false, notes: "N/A" }
        },
        whatIf: [
            {
                scenario: "You omit the sugar",
                outcome: "The bun will be very pale and won't have the characteristic 'toasted' aroma of a fast-food bun.",
                solution: "Sugar is needed for the Maillard reaction (browning) at these short bake times."
            }
        ],
        comparisons: [
            {
                vsStyle: "Fast Food vs Diner",
                difference: "Fast-food buns are often steam-baked in a factory; Diner buns (like this recipe) are baked more traditionally but kept soft under towels."
            }
        ],
        proTips: [
            "Store in a plastic bag once cool to maintain the ultimate squishiness.",
            "A pinch of 'Acidity' (a drop of vinegar or lemon juice) in the water can mimic the dough conditioners used in bakeries for a more professional crumb.",
            "Perfect for 'Sloppy Joes' because the light bun absorbs the sauce perfectly.",
            "Use a 'Burger Bun Mold' or ring to get perfectly identical vertical sides.",
            "Serve with a thin smash-patty, American cheese, and pickles for the 1950s experience."
        ]
    },

    tags: ["burger", "bun", "soft", "flour", "classic", "american"],

    watchouts: [
        "Over-baking? It's the death of this bun style.",
        "Drafts in the kitchen? Will cause the buns to form a skin—keep them covered.",
        "Too much flour on the counter? Will make the crust 'dusty' and dry.",
        "Not flattening? You'll have a dinner roll, not a burger bun."
    ],

    notes: [
        "The nostalgic school/diner standard.",
        "Light, airy, and neutral flavor.",
        "Uses Vegetable Oil for maximum softness.",
        "Steam-covered cooling technique is key.",
        "Best with All-Purpose (AP) flour."
    ],

    references: [
        {
            source: "The Great American Burger Book",
            url: "https://www.georgemotz.com/",
            author: "George Motz",
            year: "2016"
        },
        {
            source: "Industrial Baking Standards - Buns & Rolls",
            url: "https://www.bakingbusiness.com/",
            author: "Baking Business Editorial",
            year: "2020"
        },
        {
            source: "Bread Illustrated",
            url: "https://shop.americastestkitchen.com/bread-illustrated.html",
            author: "America's Test Kitchen",
            year: "2016"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/soft-flour-bun-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["sesame_seeds"]
};
