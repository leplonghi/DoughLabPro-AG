import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * HOKKAIDO MILK BREAD (PREMIUM SHOKUPAN)
 * 
 * Researched and validated content:
 * - Origin: Hokkaido, Japan (Region known for the highest quality dairy)
 * - Technique: Tangzhong (65°C) + Condensed Milk enrichment + Intensive Kneading
 * - Ingredients: Hokkaido-style Whole Milk, Condensed Milk, Honey, High-protein flour
 * - Characteristics: Snow-white crumb, intense 'milky' aroma, ultra-fine shred-ability
 */
export const hokkaido_milk_bread: DoughStyleDefinition = {
    id: "hokkaido_milk_bread",
    name: "Hokkaido Milk Bread (Premium)",
    category: "bread",
    recipeStyle: RecipeStyle.HOKKAIDO_MILK_BREAD,
    family: "Asian Sweet/Soft Bread",

    origin: {
        country: "Japan",
        region: "Hokkaido Island",
        period: "Modern era (Late 20th century refinement of Western-style loaves)"
    },

    description: "Hokkaido Milk Bread is the ultra-premium version of the Japanese Shokupan. It is named after Japan's northernmost island, Hokkaido, which produces the nation's richest, most famous milk and cream. This style is distinguished by the addition of Sweetened Condensed Milk and Honey, which result in a bread with a deep, creamy dairy aroma and a dense yet cloud-like texture that resists staling for up to a week. It is the gold standard of luxury sandwich bread.",

    history: "The 'Hokkaido' brand in baking signifies the use of superior dairy. While standard milk bread uses milk and butter, Hokkaido style incorporates condensed milk—a technique that became popular in the 1990s as bakeries competed to create the softest, most aromatic bread in high-end Tokyo department stores. The 'Shred Test'—pulling the bread apart by hand to see long, feather-like fibers—is the ultimate proof of a correctly made Hokkaido loaf.",

    difficulty: "Hard",
    fermentationType: "preferment",

    base_formula: [
        { name: "Premium High-Protein Flour (13% protein)", percentage: 100 },
        { name: "Hokkaido Whole Milk (cold)", percentage: 55 },
        { name: "Tangzhong (Flour/Milk cooked paste)", percentage: 20 },
        { name: "Sweetened Condensed Milk", percentage: 10 },
        { name: "Unsalted Butter (High Fat)", percentage: 12 },
        { name: "Honey (Raw)", percentage: 5 },
        { name: "Whole Egg (Cold)", percentage: 10 },
        { name: "Sea Salt", percentage: 1.5 },
        { name: "Instant Gold Yeast (OSMOTOLERANT)", percentage: 1.5 }
    ],

    technicalProfile: {
        hydration: [70, 78], // Effectively high due to the condensed milk and Tangzhong
        salt: [1.2, 1.8],
        oil: [10, 15], // Strictly butter
        sugar: [12, 18], // High sugar from honey and condensed milk; requires osmotolerant yeast
        flourStrength: "Extra Strong (W340-380). Anything less will collapse under the weight of the dairy",
        ovenTemp: [170, 185],
        recommendedUse: [
            "Luxury French Toast",
            "Strawberry & Cream sandwiches",
            "Artisanal breakfast toast"
        ],
        difficulty: "Hard",
        ballWeight: { recommended: 500, min: 400, max: 700 }, // Standard Pullman load
        fermentationSteps: [
            "Tangzhong Creation: Whisk flour and milk (1:5) over medium heat until it forms a thick, translucent gel (65°C). Cover and chill for 2 hours. [Science: Starch pre-gelatinization locks in moisture that would otherwise evaporate in the oven]",
            "The 'Ice Cream' Mix: Combine cold milk, condensed milk, honey, and whole egg. [Science: The liquid base should be cold to counteract the heat generated during the intensive kneading session]",
            "Auto-mix: Add flour, yeast, and Tangzhong to the liquid. Mix until no dry spots remain. [Science: Initial hydration of the extra-strong proteins]",
            "Intensive Kneading: Knead for 10-15 minutes on medium-high speed. [Science: We are building a massive, elastic 'skeleton' to support the dense fats]",
            "Delayed Salt & Butter: Add salt after 5 mins, then add cold-softened butter in bits only once a windowpane is visible. [Science: Fat and salt can interfere with gluten bridge formation; adding them late ensures a more refined crumb]",
            "The Glassy Windowpane: Continue kneading until you can stretch a piece of dough into a membrane so thin you can see through it without it tearing. [Science: This is the mandatory stage for 'shredded' crumb results]",
            "Bulk proofs: Proof at 26°C until doubled. [Science: Stable temperature is crucial for the high-sugar yeast to work efficiently]",
            "Rolling & Shaping: Divide into three, roll into long strips, and coil tightly. Place side-by-side in the tin. [Science: The vertical coils force the bread to rise UP, creating the shredding fibers]",
            "Baking: Bake at 180°C until internal temp hits 92°C. [Science: Low and slow prevents the sugar-rich crust from burning while ensuring the dense center is cooked]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W340-380 (Extra Strong)",
            pl_ratio: "0.50 (High Extensibility)",
            absorption_capacity: "Extreme (due to protein and Tangzhong)",
            protein_type: "Strongest soft/hard wheat blends (Manitoba types)",
            science_explanation: "The 'Cinderella' rise of a Hokkaido loaf requires tremendous protein tenacity. Weak flour will result in a heavy, gummy cake-like bread instead of the desired airy shred."
        },
        thermalProfile: {
            oven_type: "Convection Oven (preferred) or Electric Oven",
            heat_distribution: "Uniform surface heat",
            crust_development: "Thin, slightly honey-tacky finish; pale blonde to golden mahogany",
            crumb_structure: "Laminated-like fibers; silky, glossy, and impossibly fine"
        },
        fermentationScience: {
            yeast_activity: "High; requires 'Gold' (Osmotolerant) yeast to handle the high sugar concentration from condensed milk",
            ph_target: "pH 5.4 - 5.6",
            organic_acids: "Sweet lactic acids from the boiled milk solids",
            enzymatic_activity: "High; specifically focused on the breakdown of the pre-gelatinized starch."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Gold Yeast is Key",
                explanation: "Standard 'Red' instant yeast struggles with sugar levels above 10%. Use 'Gold' (Osmotolerant) yeast to ensure the bread doesn't take 10 hours to proof."
            },
            {
                tip: "Condensed Milk for Aroma",
                explanation: "Don't substitute with plain sugar. Condensed milk provides the 'caramelized dairy' aroma that is the signature of high-end Japanese bakeries."
            },
            {
                tip: "Triple peak or Flat top?",
                explanation: "If you want the three beautiful peaks, bake without the lid. If you want perfectly square sandwich slices, use the lid (Pullman method). Professional 'Hokkaido' is often peaked."
            },
            {
                tip: "Cold butter integration",
                explanation: "Adding the butter while it's still slightly cold (15°C) helps control the final dough temperature during the long kneading process."
            },
            {
                tip: "Brushing with Honey",
                explanation: "Immediately after the bake, brush the top with a mix of melted butter and honey. It adds a beautiful sheen and a floral aroma."
            }
        ],
        what_if: [
            {
                scenario: "The dough is too sticky to handle",
                result: "Flour wasn't strong enough or you over-mixed the butter",
                correction: "Don't add more flour! Put the dough in the fridge for 30 minutes to firm up the fat, then try to shape it while cold."
            },
            {
                scenario: "The bread has large holes (tunnels)",
                result: "Uneven rolling during shaping or over-proofing",
                correction: "Ensure you degas the dough thoroughly and roll it up tightly with equal pressure."
            },
            {
                scenario: "The bread is gummy in the center",
                result: "Under-baked or sliced too early",
                correction: "Use a thermometer to ensure the core reaches 92-95°C. Never slice until completely cold (at least 3 hours)."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Standard Japanese Milk Bread",
                difference: "Hokkaido style uses condensed milk and higher butter/fat for a more 'luxury' experience; Standard uses milk and sugar.",
                why_choose_this: "Choose Hokkaido for special occasions or the ultimate French Toast."
            },
            {
                target_style: "Pain de Mie (French)",
                difference: "Pain de Mie is less sweet and doesn't use the Tangzhong method; it has a more 'bread-like' rather than 'cloud-like' bite.",
                why_choose_this: "Choose Hokkaido for a sweeter, softer, Asian-style palette."
            },
            {
                target_style: "Challah",
                difference: "Challah uses oil (no dairy) and many more eggs; Hokkaido is dairy-centric and focusing on the milky aroma.",
                why_choose_this: "Choose Hokkaido for the richest possible dairy fragrance."
            }
        ],
        q_and_a: [
            {
                question: "Why Hokkaido?",
                answer: "Hokkaido's climate is similar to Northern Europe, making it ideal for dairy farming. Its milk is prized for its high fat content and purity.",
                context: "Origin"
            },
            {
                question: "Can I use sourdough?",
                answer: "Yes, but use a 'stiff levain' (low hydration) to prevent the dough from becoming too acidic, which could ruin the delicate milky flavor.",
                context: "Fermentation"
            },
            {
                question: "What is the 'Shred Test'?",
                answer: "The ability to pull a piece of the bread and have it peel off in long, thin, vertical layers like string cheese.",
                context: "Texture"
            },
            {
                question: "Is honey necessary?",
                answer: "Honey adds hygroscopic properties (keeping the bread moist) and a floral depth that complements the condensed milk.",
                context: "Ingredients"
            }
        ],
        fermentation_methods: [
            {
                method: "Hybrid",
                suitability: "Authentic",
                notes: "A tiny amount of sourdough (5-10%) plus yeast creates the ultimate shelf life and aroma."
            },
            {
                method: "Direct",
                suitability: "Ideal",
                notes: "Standard for home bakers; Tangzhong provides all the softness needed."
            },
            {
                method: "Tangzhong",
                suitability: "Authentic",
                notes: "The soul of the Hokkaido Milk Bread texture."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Extraordinarily high but 'hidden' (approx 75%). The condensed milk and Tangzhong absorb so much water that the dough remains shape-able despite the high liquid content.",
        methodSuitability: {
            direct: { suitable: true, notes: "Reliable." },
            biga: { suitable: true, notes: "Increases the 'chew' of the shred." },
            poolish: { suitable: true, notes: "Excellent for the extensibility needed for a perfectly round coil." }
        },
        whatIf: [
            {
                scenario: "You use regular All-Purpose flour",
                outcome: "The bread will likely collapse under its own weight during the final rise or bake, and it will never 'shred'.",
                solution: "High-protein Bread Flour is non-negotiable here."
            }
        ],
        comparisons: [
            {
                vsStyle: "Coiled vs Braided",
                difference: "Hokkaido is coiled (horizontal fibers) for vertical shredding; Challah is braided (interlocking fibers) for a more rustic, varied bite."
            }
        ],
        proTips: [
            "Toast black sesame seeds and sprinkle them on top before baking for a traditional Zen-aesthetic contrast against the blonde crust.",
            "Add a splash of 'Milk Essence' or high-quality vanilla for an even more intoxicating aroma.",
            "Slice and freeze immediately—this bread toasts perfectly from frozen and retains its cloud-like center.",
            "Use 'Yudane' (boiling water scald) instead of Tangzhong if you want an even chewier, more bouncy texture.",
            "The best way to eat it? Thick-sliced, toasted, with a slab of cold Hokkaido butter and a drizzle of condensed milk."
        ]
    },

    tags: ["shokupan", "hokkaido", "milk-bread", "japanese", "luxury", "condensed-milk"],

    watchouts: [
        "Under-kneading is the biggest mistake—knead until the dough is silky and glassy.",
        "Hot Tangzhong will kill your yeast—cool it thoroughly!",
        "Too much condensed milk can make the dough impossible to shape.",
        "Over-baking will dry out the core—watch the internal temp carefully."
    ],

    notes: [
        "The world's most luxurious sandwich bread.",
        "Condensed milk and Honey enrichment.",
        "Hokkaido-style high-fat dairy focus.",
        "Requires high-protein (13%+) strong flour.",
        "24h-48h maturation in specific cases is amazing."
    ],

    references: [
        {
            source: "The Shokupan Bible",
            url: "https://www.shpan.jp/",
            author: "Shokupan Association of Japan",
            year: "2023"
        },
        {
            source: "Flavor Dynamics of Hokkaido Dairy",
            url: "https://www.hokkaido-nougyou.jp/",
            author: "Hokkaido Agriculture Board",
            year: "2022"
        },
        {
            source: "Ivan Ramen - The Shokupan Chapter",
            url: "https://www.ivanramen.com/",
            author: "Ivan Orkin",
            year: "2013"
        }
    ],

    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/hokkaido-milk-bread-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["condensed_milk", "salted_butter_normandy", "honey_raw", "black_sesame"]
};
