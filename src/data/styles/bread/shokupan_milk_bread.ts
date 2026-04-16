import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * JAPANESE SHOKUPAN (Premium Milk Bread)
 * 
 * Researched and validated content with authoritative sources:
 * - "The 65°C Bread Doctor" by Yvonne Chen (Tangzhong popularized 2007)
 * - Modernist Bread (Myhrvold/Migoya) - Starch Gelatinization analysis
 * - Nogami (Osaka) - The pioneer of "Nama Shokupan" (Luxury Raw Bread)
 * - Japanese Flour Classification: Kyoryokuko (Strong Flour) standards
 */
export const shokupan_milk_bread: DoughStyleDefinition = {
    id: "shokupan_milk_bread",
    name: "Japanese Shokupan (Milk Bread)",
    category: "enriched_bread",
    recipeStyle: RecipeStyle.HOKKAIDO_MILK_BREAD,
    family: "Asian Sweet/Soft Bread",

    origin: {
        country: "Japan",
        region: "Nationwide (Origins in Yokohama/Kobe)",
        period: "Post-WWII (Standard) / 2013 (Luxury 'Nama' Boom)"
    },

    description: "Shokupan ('Eating Bread') is the gold standard of white bread: impossibly fluffy, slightly sweet, and characterized by a crumb that peels away in distinct, feathery shreds. Unlike Western sandwich loaves, it remains moist for days due to the 'Tangzhong' (cooked roux) or 'Yudane' (boiling water scald) techniques, which pre-gelatinize the starch to lock in hydration.",

    history: "Bread ('Pan') arrived in Japan with Portuguese traders in the 16th century but remained niche until the post-WWII era when US wheat aid made it a staple. The modern 'Milk Bread' phenomenon began in earnest in the 2000s. In 2007, Yvonne Chen's book popularized the 'Tangzhong' (65°C) method. In 2013, Yuji Sakagami founded 'Nogami' in Osaka, effectively inventing the 'Luxury Shokupan' category ($10+ loaves) by focusing on a crust so thin and soft it could be eaten by nursing home residents without trimming. Today, 'Nama Shokupan' (eaten raw/untoasted) is a cultural obsession.",

    difficulty: "Hard",
    fermentationType: "preferment", // Tangzhong is technically a starch-preferment

    base_formula: [
        { name: "Japanese Bread Flour (Kyoryokuko, 12-13%)", percentage: 100 },
        { name: "Whole Milk (Cold)", percentage: 65 },
        { name: "Tangzhong (Flour/Water prep)", percentage: 20 },
        { name: "Sugar", percentage: 12 },
        { name: "Heavy Cream (35% Fat)", percentage: 10 },
        { name: "Unsalted Butter", percentage: 8 },
        { name: "Condensed Milk (Optional)", percentage: 5 },
        { name: "Salt", percentage: 1.8 },
        { name: "Instant Yeast (Osmotolerant)", percentage: 1.5 }
    ],

    technicalProfile: {
        hydration: [70, 78], // Effective hydration is high due to trapped water in Tangzhong
        salt: [1.5, 2.0],
        oil: [8, 15],
        sugar: [10, 18], // High sugar slows yeast; use Gold yeast
        flourStrength: "High Protein 'Kyoryokuko' (12-13%). E.g., King Arthur Bread or specialized Japanese brands (Nisshin Camellia).",
        ovenTemp: [175, 190],
        recommendedUse: [
            "Nama Shokupan (Eaten fresh, tearing off chunks)",
            "Katsu Sando (Pork Cutlet Sandwich)",
            "Fruit Sando (Strawberry & Whipped Cream)",
            "Thick-cut Honey Toast (Brick Toast)"
        ],
        difficulty: "Hard",
        ballWeight: { recommended: 450, min: 450, max: 600 }, // Standard 1.5 kin loaf (Pullman)
        fermentationSteps: [
            "Tangzhong Prep: Cook 1 part flour : 5 parts liquid to 65°C until distinct lines appear. Cool to room temp. [Science: Gelatinizes starch to hold 2x water]",
            "Autolyse (Enriched): Mix flour, milk, cream, and Tangzhong. Rest 20m. [Science: Hydrates protein before fat coats it]",
            "Intensive Mix: Add yeast/sugar. Knead to development. Add butter/salt LATE. [Science: Fat inhibits gluten linking; adding late ensures 'shreddable' structure]",
            "Windowpane Test: Must achieve a 'Paper Thin' translucent pane. [Science: Essential for the massive oven spring and feathery crumb]",
            "Bulk Fermentation: 2.5x volume rise (warm, 28°C). [Science: High sugar content requires warmth and time for yeast to overcome osmotic pressure]",
            "Shaping: Divide into 3-4 balls. Roll flat, fold thirds, roll flat again, coil tight. [Science: The 'Roll-Flat-Roll' technique aligns gluten strands vertically for peeling]",
            "Final Proof: Proof until 1cm from rim of tin. [Science: Catching the exact peak is critical for square corners without blowout]",
            "Bake: 180°C for 30-35m. Drop tin immediately upon exit. [Science: 'The Drop' shocks steam out of the structure to prevent sidewall collapse]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W320-350 (Strong)",
            pl_ratio: "0.50-0.60 (Extensible)",
            absorption_capacity: "Extreme (75%+) enabled by gel",
            protein_type: "Hard Red Spring Wheat (High Glutenin)",
            science_explanation: "The mechanical strength of high-protein gluten is required to hold the heavy fats (cream/butter) and the extra water weight from the Tangzhong without collapsing."
        },
        thermalProfile: {
            oven_type: "Convection (Ideal) or Deck",
            heat_distribution: "Gentle, even heat",
            crust_development: "Thin, soft, golden (Maillard from milk sugars/lactose)",
            crumb_structure: "Cotton-like, elongated vertical gas cells (from coiling), distinct layers"
        },
        fermentationScience: {
            yeast_activity: "Restrained by osmotic pressure (sugar/salt).",
            ph_target: "pH 5.3-5.5",
            organic_acids: "Low. Flavor is dominated by dairy and fermentation byproducts of sugar (fruity esters).",
            enzymatic_activity: "Tangzhong provides readily available sugars from amylase activity on damaged starch."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "The 65°C Rule",
                explanation: "For Tangzhong, 65°C is the gelatinization point of wheat starch. Below this, it won't hold water. Above this, it becomes gummy glue. Use a thermometer."
            },
            {
                tip: "Yudane vs. Tangzhong",
                explanation: "Tangzhong (Cooked 1:5 ratio) = Softer, fluffier. Yudane (Boiling Water 1:1 ratio) = Chewier, bouncier (Mochi-like). Both are authentic."
            },
            {
                tip: "The 'Drop'",
                explanation: "When you take the pan out of the oven, DROP it from 10cm height onto the counter. This shock prevents the soft bread from shrinking/collapsing as it cools."
            },
            {
                tip: "Sando Slicing",
                explanation: "For perfect fruit sandwiches, freeze the bread for 30 minutes before slicing to get razor-sharp edges without squishing the cloud-like crumb."
            }
        ],
        what_if: [
            {
                scenario: "The bread is dense at the bottom",
                result: "Dense streaks usually mean the Tangzhong wasn't mixed in thoroughly or the dough wasn't kneaded to full windowpane.",
                correction: "Whisk Tangzhong into the liquid ingredients FIRST to disperse it evenly."
            },
            {
                scenario: "The top collapsed (Mushroom shape)",
                result: "Over-proofed in the tin.",
                correction: "Bake when the dome is 1-2cm BELOW the rim. It will spring up the rest of the way in the oven."
            },
            {
                scenario: "Crust is thick and hard",
                result: "Bake temp too high or too long.",
                correction: "Shokupan needs gentle heat (175-180°C). If browning too fast, tent with foil."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Brioche",
                difference: "Brioche relies on massive egg/butter content (40%+) for softness. Shokupan relies on water-holding starch (Tangzhong) and moderate fat (15%). Shokupan is lighter.",
                why_choose_this: "Choose Shokupan for sandwiches; Brioche is too rich/cakey for savory fillings."
            },
            {
                target_style: "Pain de Mie",
                difference: "Pain de Mie is the French equivalent but often leaner and simpler. It lacks the 'mochi-mochi' (chewy/soft) bounce of the Japanese style.",
                why_choose_this: "Choose Shokupan for texture play and shelf-life."
            }
        ],
        q_and_a: [
            {
                question: "Can I eat it raw (Nama)?",
                answer: "Yes! 'Nama Shokupan' is designed to be eaten without toasting. The crust is so soft it doesn't need to be cut off.",
                context: "Consumption"
            },
            {
                question: "Why add heavy cream?",
                answer: "Cream adds milk fat and emulsifiers that soften the crumb further and contribute a distinct 'milky' aroma that butter alone doesn't provide.",
                context: "Ingredients"
            },
            {
                question: "Osmotolerant Yeast?",
                answer: "Standard yeast dies when sugar > 5%. 'Gold' yeast resists this osmotic stress. If you use Red yeast, you must double the proofing time.",
                context: "Science"
            }
        ],
        fermentation_methods: [
            {
                method: "Tangzhong",
                suitability: "Authentic",
                notes: "The most common modern method. Flour/Water (1:5) cooked to 65C."
            },
            {
                method: "Scald",
                suitability: "Authentic",
                notes: "Boiling water poured on Flour (1:1). Rest overnight. Creates chewier texture."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Though the formula says ~75%, the dough handles like 65% because 20% of the water is locked in the gel. This 'bound water' doesn't make the dough sticky but releases during baking to steam the interior.",
        methodSuitability: {
            direct: { suitable: true, notes: "Reliable, but use Tangzhong for best results." },
            biga: { suitable: false, notes: "Not recommended; adds too much acidity which clashes with the milky profile." },
            poolish: { suitable: true, notes: "Can be used, but Tangzhong is superior for this specific texture." }
        },
        whatIf: [
            {
                scenario: "You omit the dry milk powder/condensed milk",
                outcome: "The bread will lack the signature 'milky' aroma.",
                solution: "Replace water with milk, or add milk essence."
            }
        ],
        comparisons: [
            {
                vsStyle: "Hokkaido vs. Standard",
                difference: "Hokkaido style specifically uses heavy cream and often condensed milk for a richer, more dessert-like loaf."
            }
        ],
        proTips: [
            "For the photo-perfect 'shred', you MUST roll the dough cylinders very tight to align the gluten.",
            "If using 'Yudane' method, prepare it the night before to allow starch retrogradation which adds sweetness.",
            "Use a serrated knife warmed in hot water to slice clean through the soft crumb."
        ]
    },

    tags: ["japanese", "shokupan", "milk_bread", "tangzhong", "soft_bread"],

    watchouts: [
        "Tangzhong MUST be cool before adding yeast",
        "Dough will be sticky - resist adding raw flour",
        "Watch internal temp (93C) - gumminess is a common failure",
        "Don't slice hot! The structure will collapse."
    ],

    notes: [
        "Gold standard for softness",
        "Uses gelatineous starch technique",
        "Requires high protein flour",
        "Can be made 'Shorter' (square) or 'Tall' (mountain top)"
    ],

    recommendedFlavorComponents: ["condensed_milk", "whipping_cream", "honey_raw", "matcha_powder"],

    references: [
        {
            source: "The 65°C Bread Doctor (Yvonne Chen)",
            url: "https://www.amazon.com/65-C-Bread-Doctor/dp/9866029986" // Seminal text
        },
        {
            source: "Nogami - The Origins of Nama Shokupan",
            url: "http://nogaminopan.com/"
        },
        {
            source: "Just One Cookbook - Shokupan Guide",
            url: "https://www.justonecookbook.com/shokupan-japanese-milk-bread/"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/shokupan_milk_bread_hero.png",
        dough: "/images/styles/shokupan_milk_bread_dough.png",
        crumb: "/images/styles/shokupan_milk_bread_crumb.png"
    },

    flavorProfile: {
        primaryFlavors: ["milky sweetness", "buttery richness", "fresh cream", "lightly sweet", "clean neutral wheat"],
        aromaProfile: ["warm milk", "heavy cream", "subtle caramel", "fresh bread", "condensed milk"],
        textureNotes: ["impossibly soft and fluffy cotton crumb", "feathery shreddy layers", "thin petal-like crust", "mochi-like bounce", "melts in the mouth"],
        pairingRecommendations: ["Matcha cream for Matcha Sando", "Strawberry and whipped cream (Fruit Sando)", "Quality salted butter", "Red bean paste (Anko)", "Katsu cutlet with tonkatsu sauce"],
        flavorEvolution: ["Day 1 fresh (Nama): sweetest, most pillowy — eat without toasting", "Day 2: crumb still soft, perfect for Katsu Sando", "Day 3: best thick-toasted with salted butter and honey", "Day 4+: French Toast or Brick Toast"]
    },

    culturalContext: {
        significance: [
            "'Shokupan' literally means 'eating bread' — it is Japan's everyday loaf",
            "The 'Nama Shokupan' (luxury raw bread) craze of 2013 turned bread into fine dining",
            "Nogami bakery in Osaka created queues lasting hours for a single $10 loaf",
            "Reflects Japan's philosophy of kaizen (continuous improvement) applied to a simple food",
            "The Fruit Sando made Shokupan globally iconic via social media"
        ],
        consumptionContext: [
            "Eaten fresh (Nama) without toasting as the highest expression of quality",
            "Sliced thick for Katsu Sando (pork cutlet sandwich)",
            "Used for Fruit Sando (strawberry and whipped cream sandwich) — a Japanese convenience store icon",
            "Toasted thick with salted butter and honey for breakfast",
            "Used for Japanese Brick Toast (thick slab toasted in a toaster oven)"
        ],
        evolution: [
            "Bread arrived in Japan via Portuguese traders in the 16th century",
            "Modern Shokupan became a daily staple during the post-WWII US wheat aid era",
            "Tangzhong method popularised by Yvonne Chen's book in 2007 transformed home baking",
            "2013 'Nama Shokupan' luxury boom created a new premium bread category",
            "Global Shokupan trend now drives premium milk bread offerings worldwide"
        ],
        rituals: [
            "'The Drop' — dropping the tin from 10cm height immediately upon exit from oven prevents collapse",
            "Slicing only with a warmed serrated knife to avoid crushing the delicate crumb",
            "Eating Nama Shokupan without cutting the crust — it's soft enough to eat whole",
            "The windowpane test is treated as a sacred milestone — only true gluten development allows passage"
        ]
    },

    globalPresence: {
        regions: ["Japan (origin and home)", "Taiwan, South Korea, Hong Kong (Asian bread culture)", "USA and Australia (Asian bakery scene)", "Global via 'Milk Bread' trend"],
        popularity: "fast-growing global cult status",
        exportStatus: "Fresh bread is local; the recipe has spread globally through food media and Asian bakeries",
        internationalRecognition: "Widely recognised as the gold standard for softness in bread"
    },

    pairings: {
        beverages: ["Japanese milk tea (Royal Milk Tea)", "Matcha latte", "Cold brew coffee", "Strawberry milk"],
        foods: ["Katsu (pork cutlet) with tonkatsu sauce", "Strawberry and whipped cream (Fruit Sando)", "Red bean paste (Anko)", "Matcha cream", "Salted butter and honey", "Tamagoyaki egg"],
        occasions: ["Japanese-style breakfast", "Café brunch", "Convenience store snack", "Premium bakery gift"],
        seasons: ["Year-round; strawberry Fruit Sando peaks in spring (strawberry season)"]
    },

    experimentSuggestions: [
        { title: "Yudane vs Tangzhong Comparison", description: "Bake one loaf with Tangzhong (1:5 cooked to 65°C) and one with Yudane (boiling water 1:1) to feel the softness vs chewiness difference." },
        { title: "Matcha Shokupan", description: "Add 2% high-quality matcha powder to the flour for a green tinted loaf with a grassy, slightly astringent counterpoint to the milky sweetness." },
        { title: "Hokkaido Luxury Variation", description: "Replace all water with heavy cream and add condensed milk (5%) for the ultra-rich Hokkaido-style milk bread version." },
        { title: "Sourdough Adaptation", description: "Replace instant yeast with a mild, young liquid levain (15%) for a subtly tangy, longer-lasting Shokupan with improved digest." },
        { title: "Mountain Top vs Square", description: "Bake one loaf with the lid on (square, Pullman) and one without (mountain crown) to compare the different crust-to-crumb ratios." }
    ],

    learnLinkTags: ["tangzhong", "yudane", "japanese-bread", "milk-bread", "shokupan", "nama-shokupan", "soft-bread", "enriched-dough"]
};
