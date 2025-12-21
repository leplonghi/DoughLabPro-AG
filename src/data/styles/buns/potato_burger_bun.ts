import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * CLASSIC POTATO BURGER BUN
 * 
 * Researched and validated content:
 * - Origin: Pennsylvania, USA (Traditional Dutch baking; popularized by Martin's 1955)
 * - Technique: Enrichment with Potato Starch/Flakes, High-Fat/High-Sugar balance
 * - Ingredients: Dehydrated Potato Flakes, Butter, Whole Milk, Turmeric (for yellow color)
 * - Characteristics: Squishy, 'shreddy' crumb, matte or slightly glossy top, yellowish color
 */
export const potato_burger_bun: DoughStyleDefinition = {
    id: "potato_burger_bun",
    name: "Classic Potato Burger Bun",
    category: "burger_bun",
    recipeStyle: RecipeStyle.BURGER_BUN_POTATO,
    family: "Enriched Buns",

    origin: {
        country: "USA",
        region: "Pennsylvania (Pennsylvania Dutch country)",
        period: "1955 (Opening of Martin’s Famous Pastry Shoppe)"
    },

    description: "The Potato Burger Bun is the unsung hero of the American burger world. Popularized by Shake Shack and legendary BBQ spots, it is known for being 'impossibly squishy'. The addition of potato (as flakes, flour, or mash) provides a unique tenderizing effect on the gluten network while retaining massive amounts of moisture, ensuring the bun stays soft for days. It is less buttery than Brioche but has a characteristic 'yellow' crumb and a slightly sweet, savory finish.",

    history: "Rooted in the thriftiness of Pennsylvania Dutch settlers who used leftover mashed potatoes in their bread dough to keep it soft. In 1955, Lloyd and Martha Martin began selling their 'Potato Rolls' from a garage in Chambersburg, PA. By the late 20th century, the 'Martin's Potato Roll' became the gold standard for chefs like Danny Meyer (Shake Shack), who value the bun's ability to 'hug' a burger without overpowering the meat's flavor.",

    difficulty: "Medium",
    fermentationType: "direct",

    base_formula: [
        { name: "Strong Bread Flour (W280-300)", percentage: 100 },
        { name: "Dehydrated Potato Flakes", percentage: 15 },
        { name: "Whole Milk (Warm)", percentage: 60 },
        { name: "Unsalted Butter (Melted)", percentage: 15 },
        { name: "Whole Egg", percentage: 12 },
        { name: "Sugar", percentage: 10 },
        { name: "Fine Sea Salt", percentage: 2 },
        { name: "Instant Yeast", percentage: 1.2 },
        { name: "Turmeric (for the 'Martin's' look)", percentage: 0.1 }
    ],

    technicalProfile: {
        hydration: [65, 75], // High hydration because potato flakes absorb water greedily
        salt: [1.8, 2.2],
        oil: [0, 0], // Fat comes from 15% butter
        sugar: [8, 12],
        flourStrength: "Medium-Strong (W280). Needs structure to support the 'heavy' potato starch",
        ovenTemp: [170, 185],
        recommendedUse: [
            "Classic American Smashburgers",
            "BBQ Pulled Pork sandwiches",
            "Sliders"
        ],
        difficulty: "Medium",
        ballWeight: { recommended: 75, min: 50, max: 100 },
        fermentationSteps: [
            "Hydrating Flakes: Mix potato flakes with warm milk. Let sit for 5 minutes. [Science: The dehydrated flakes need to fully rehydrate to prevent 'gritty' bits in the final dough]",
            "Mixing: Combine rehydrated potato, flour, sugar, yeast, salt, turmeric, and eggs. Knead until smooth. [Science: Turmeric pins the 'yellow' identity of the Pennsylvania potato bun]",
            "Fat Integration: Add melted butter slowly while kneading. [Science: Unlike Brioche, using melted butter here results in a softer, more 'bread-like' rather than 'cake-like' crumb]",
            "Bulk Rise: 1.5 to 2 hours at room temperature. [Science: Potato starch provides extra sugars for the yeast, leading to a vigorous rise]",
            "Shaping: Portion into balls and shape with high tension. Flatten slightly after placing on the tray. [Science: Flattening creates the wider, 'squat' profile perfect for burgers]",
            "Final Proof: 1 to 1.5 hours in a warm, humid environment. [Science: Moisture is key—don't let the surface dry out]",
            "Baking: Bake for 10-12 minutes until light golden. [Science: We don't want a dark crust like Brioche; the potato bun should be 'blonde' and soft]",
            "Steam Finish: Brush with melted butter immediately after taking them out of the oven. [Science: Softens the crust even further and adds a professional sheen]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W280 (Medium-Strong)",
            pl_ratio: "0.50",
            absorption_capacity: "Very High (70%+)",
            protein_type: "Strong soft wheat",
            science_explanation: "Potato starch is large and bulky; it interferes with the protein-protein bonds of the gluten. A medium-strong flour is needed to counteract this 'interference' and provide enough stretch for the oven spring."
        },
        thermalProfile: {
            oven_type: "Convection Oven",
            heat_distribution: "Moderate convection",
            crust_development: "Ultra-thin, matte or buttery sheen; pale yellow/golden color",
            crumb_structure: "Cotton-candy soft; highly irregular and 'shreddy' when pulled apart"
        },
        fermentationScience: {
            yeast_activity: "Very High; fueled by the amylose in the potatoes",
            ph_target: "pH 5.2 - 5.5",
            organic_acids: "Lactic and subtle savory vegetable notes",
            enzymatic_activity: "Amylase activity is peak; the potato provides a wealth of starch for the enzymes to convert into CO2 fuel."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Potato Flakes vs Mash",
                explanation: "Potato flakes are more consistent for commercial or repeated home use. If using fresh mash, you must reduce the milk content of the dough by approx 30% to compensate."
            },
            {
                tip: "Melted Butter vs Softened",
                explanation: "For the 'chewy-squishy' texture of a true potato roll, use melted butter. Softened butter creates more air (brioche-style); melted butter makes the crumb denser and more 'squidgy'."
            },
            {
                tip: "The Squish Test",
                explanation: "A perfect potato bun should be able to be squeezed into a ball and then slowly 'rebound' to its original shape. That is the power of the rehydrated potato starch."
            },
            {
                tip: "Don't over-bake!",
                explanation: "Take them out at an internal temp of 85°C (185°F). Even 2 minutes too long will turn the soft potato bun into a dry, standard roll."
            },
            {
                tip: "Steam in the Oven",
                explanation: "Spray the balls with water right before they go into the oven. This keeps the 'skin' flexible for a massive rise."
            }
        ],
        what_if: [
            {
                scenario: "The buns are heavy and doughy in the middle",
                result: "Under-baked or proofed too fast at too high temp",
                correction: "Check the internal temperature with a probe. Ensure the proofing area isn't hotter than 30°C."
            },
            {
                scenario: "The dough is incredibly sticky during kneading",
                result: "Potato flakes haven't fully hydrated or flour is too weak",
                correction: "Let the dough rest for 20 minutes (autolyse) before final kneading to let the starch absorb the milk."
            },
            {
                scenario: "The buns look pale and 'sickly'",
                result: "Not enough sugar or omitted the turmeric",
                correction: "Ensure a minimum of 8% sugar for browning and a pinch of turmeric for that classic Pennsylvania yellow glow."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Brioche Bun",
                difference: "Potato bun is less rich/buttery but much 'squishier' and holds moisture longer. Brioche is for gourmet; Potato is for classic diners.",
                why_choose_this: "Choose Potato for Smashburgers where the bun needs to meld into the meat."
            },
            {
                target_style: "Kaiser Roll",
                difference: "Kaiser is crusty and bready; Potato is soft throughout. Kaiser is for delis; Potato is for hot sandwiches.",
                why_choose_this: "Choose Potato for BBQ and juicy burgers."
            },
            {
                target_style: "Soft Flour Bun",
                difference: "Soft flour buns are lighter and 'emptier'; Potato buns have more 'soul' and a savory depth from the starch.",
                why_choose_this: "Choose Potato to elevate a standard backyard burger to professional levels."
            }
        ],
        q_and_a: [
            {
                question: "Why use Potato?",
                answer: "Potato starch molecules are larger than wheat starch and hold more water. They also interfere with gluten, making the bread much 'shreddy' and soft.",
                context: "Science"
            },
            {
                question: "What is 'Pennsylvania Dutch'?",
                answer: "A cultural group (of German descent) in PA, USA, who popularized this style of enriched, starch-heavy baking.",
                context: "Culture"
            },
            {
                question: "Do they taste like potatoes?",
                answer: "No. They taste buttery and slightly sweet, with a savory 'breadiness' that is very subtle.",
                context: "Flavor"
            },
            {
                question: "Can I use 'Instant Mash' packets?",
                answer: "Yes, as long as they are plain and don't contain added garlic or cheese powders!",
                context: "Ingredients"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "The traditional choice for American burger buns; reliable and fast."
            },
            {
                method: "Tangzhong",
                suitability: "Possible",
                notes: "Can be used with potato for an 'immortal' bun that stays soft for a week."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Hydration management is the biggest challenge. Potato flakes can absorb 5-10x their weight in water. If you don't hydrate them before mixing the flour, the dough will feel dry at first and then become a sticky mess later as they release water during kneading.",
        methodSuitability: {
            direct: { suitable: true, notes: "Best for the 'Pennsylvania' profile." },
            biga: { suitable: false, notes: "N/A" },
            poolish: { suitable: false, notes: "N/A" }
        },
        whatIf: [
            {
                scenario: "You use high-protein pizza flour (W400)",
                outcome: "The bun will be too 'tough' and 'bready'. It will lose the 'squish' that defines the potato roll.",
                solution: "Use standard Bread Flour or even a mix of Bread and AP flour."
            }
        ],
        comparisons: [
            {
                vsStyle: "Martin's vs Homemade",
                difference: "Homemade potato buns often have more 'real' butter flavor than the commercial versions which use soy oil and conditioners."
            }
        ],
        proTips: [
            "A tablespoon of 'Non-Diastatic' malt powder adds a professional bakery aroma that matches the potato savory notes.",
            "Egg-wash is optional here. Many pros prefer a simple 'Butter wash' after baking for a soft, matte, professional diner look.",
            "The best way to slice them? Use a serrated knife and cut them only 90% of the way through ('hinged')—it keeps the toppings inside better.",
            "Add a pinch of cayenne pepper (0.05%)—not for heat, but to further enhance the golden color.",
            "Let the buns 'sweat' under a clean kitchen towel for 10 mins after baking; the steam they release softens the crust to 'Martin's' levels."
        ]
    },

    tags: ["burger", "bun", "potato", "squishy", "american", "diner"],

    watchouts: [
        "Dough too wet? The buns will be flat 'hockey pucks'.",
        "Baking too hot? The bottom will burn before the middle rises.",
        "Oversized? A 100g ball is too big for a standard burger—stick to 75-80g.",
        "Not using turmeric? The buns will look pale and unappetizing."
    ],

    notes: [
        "The 'Shake Shack' style iconic bun.",
        "Uses Potato Flakes for 'shreddy' squishiness.",
        "PA Dutch origin (1950s).",
        "High sugar and melted butter enrichment.",
        "Requires warm moisture for flake hydration."
    ],

    references: [
        {
            source: "Martin's Famous Pastry Shoppe - Our History",
            url: "https://potatorolls.com/about/history/",
            author: "Martin Family",
            year: "2023"
        },
        {
            source: "The Food Lab - The Ultimate Potato Roll",
            url: "https://www.seriouseats.com/the-food-lab-the-best-potato-rolls",
            author: "J. Kenji López-Alt",
            year: "2010"
        },
        {
            source: "Cook's Country - Pennsylvania Potato Rolls",
            url: "https://www.americastestkitchen.com/cookscountry/",
            author: "ATK Team",
            year: "2019"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/potato-burger-bun-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["salted_butter_normandy", "sesame_seeds", "poppy_seeds"]
};
