import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * CHALLAH (Braided Egg Bread)
 * 
 * Researched and validated content:
 * - Origin: Ashkenazi Jewish tradition (Eastern Europe)
 * - Significance: Sabbath (Shabbat) and Holiday centerpieces
 * - Technique: Braiding (3, 4, 6 strrand) determines structure
 * - Science: Enriched with Oil and Eggs (Pareve) vs Butter/Milk (Brioche)
 */
export const challah_braided: DoughStyleDefinition = {
    id: "challah_braided",
    name: "Challah (Braided)",
    category: "enriched_bread",
    recipeStyle: RecipeStyle.CHALLAH,
    family: "Enriched Breads",

    origin: {
        country: "Eastern Europe (Ashkenazi)",
        region: "Diaspora",
        period: "15th Century (Modern form)"
    },

    description: "Challah is the braided, egg-rich bread traditionally eaten on Shabbat and Jewish holidays. Unlike brioche, which relies on butter and milk, authentic Challah is 'Pareve'—made with oil and water to comply with Kosher laws preventing the consumption of dairy with meat. This reliance on oil gives Challah its unique tender-yet-sturdy texture and impressive shelf life. The defining characteristic is the intricate braid, which symbolizes unity and elevates the loaf from daily sustenance to a ceremonial centerpiece.",

    history: "The word 'Challah' originally referred to the portion of dough tithed to the Kohen (priest) in biblical times. The braided loaf we know today evolved in medieval Germany and Eastern Europe (originally called 'Berches'). The braid was likely adopted from local German breads, but it took on deep symbolism: 3 strands for truth, peace, and justice; 12 humps (two 6-strand loaves) for the 12 tribes of Israel. Round Challahs are baked for Rosh Hashanah to symbolize the cyclical nature of the year.",

    difficulty: "Medium",
    fermentationType: "direct",

    base_formula: [
        { name: "Bread Flour", percentage: 100 },
        { name: "Water", percentage: 35 },
        { name: "Whole Eggs", percentage: 15 },
        { name: "Egg Yolks", percentage: 8 },
        { name: "Vegetable Oil", percentage: 12 },
        { name: "Sugar/Honey", percentage: 10 },
        { name: "Salt", percentage: 2 },
        { name: "Instant Yeast", percentage: 1.2 }
    ],

    technicalProfile: {
        hydration: [45, 55], // Appears low, but eggs/oil provide significant liquidity
        salt: [1.8, 2.0],
        oil: [8, 14], // Canola, Grapeseed, or light Olive Oil
        sugar: [8, 15],
        flourStrength: "W260-300 (All Purpose or Bread)",
        ovenTemp: [175, 190],
        recommendedUse: [
            "Shabbat Dinner",
            "French Toast",
            "Bread Pudding",
            "Sandwiches"
        ],
        difficulty: "Medium",
        ballWeight: { recommended: 600, min: 400, max: 1000 },
        fermentationSteps: [
            "Intensive Mix: Develop full gluten before adding oil. [Science: Oil coats gluten strands and inhibits formation if added too early]",
            "Bulk Fermentation: 1.5 - 2 hours. [Science: Dough must not be too airy or braiding will be difficult]",
            "Degassing: Gentle but thorough. [Science: Large bubbles cause the braid to distort in the oven]",
            "Strand Rolling: Roll tapered snakes. [Science: Tapered ends create the classic football shape]",
            "Braiding: Braid with consistent tension. [Science: Loose braiding causes flattening; tight braiding causes tearing]",
            "Proofing: Proof until puffy (finger dent springs back slowly). [Science: Under-proofing causes 'shredding' at the braid seams]",
            "Double Wash: Egg wash once before proof, once before bake. [Science: The protein in the egg creates the lacquer shine]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W260-300",
            pl_ratio: "0.5 (Extensible)",
            absorption_capacity: "Moderate",
            protein_type: "Standard Wheat",
            science_explanation: "Challah dough needs to be extensible enough to roll into long strands without snapping back (elasticity), but strong enough to hold the braid definition during the oven spring."
        },
        thermalProfile: {
            oven_type: "Convection or Deck",
            heat_distribution: "Even Radiation",
            crust_development: "Thin, soft, lacquered",
            crumb_structure: "Tight, shreddable, cotton-like"
        },
        fermentationScience: {
            yeast_activity: "Moderate",
            ph_target: "pH 5.4",
            organic_acids: "Low. Flavor is dominated by egg, oil, and Maillard roast.",
            enzymatic_activity: "Standard."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "The Two-Step Oil Addition",
                explanation: "Add the oil slowly only after the dough has come together. If you dump oil in with the flour, it waterproofs the protein and prevents gluten formation."
            },
            {
                tip: "The Lacquer Finish",
                explanation: "For the deepest mahogany shine, use only yolks for the wash and add a pinch of salt to denature the proteins, making the wash more fluid and less prone to cracking."
            },
            {
                tip: "Strand Weighing",
                explanation: "Use a scale to ensure every strand is the exact same weight. If one is heavier, the braid will bulge and bake unevenly."
            }
        ],
        what_if: [
            {
                scenario: "The braid disappeared / merged into a blob",
                result: "Over-proofed or hydration too high.",
                correction: "Reduce proofing time or reduce water by 2%. The braid definition relies on controlled oven spring."
            },
            {
                scenario: "The bread is raw in the center but dark outside",
                result: "Sugar/Honey content creates rapid browning.",
                correction: "Tent with foil after 20 minutes if browning occurs too fast. Check internal temp (93°C / 200°F)."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Brioche",
                difference: "Brioche uses butter (dairy fat) which is solid at room temp. Challah uses oil (liquid fat). Challah feels softer initially but Brioche is richer.",
                why_choose_this: "Choose Challah for a lighter, dairy-free enriched bread."
            },
            {
                target_style: "Zopf (Swiss)",
                difference: "Zopf is very similar but traditionally contains milk and butter, making it dairy. Challah is water/oil based.",
                why_choose_this: "Choose Challah for the Pareve requirement."
            }
        ],
        q_and_a: [
            {
                question: "Can I use olive oil?",
                answer: "Yes, but Extra Virgin can be bitter. A light olive oil or neutral oil like Grapeseed is more traditional for a clean taste.",
                context: "Ingredients"
            },
            {
                question: "Why does it tear between the braids?",
                answer: "Under-proofing. The yeast still had too much 'kick' left when it hit the oven, forcing the loaf to expand violently.",
                context: "Troubleshooting"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic", // Fixed from 'Classic'
                notes: "The standard family recipe method."
            },
            {
                method: "Poolish",
                suitability: "Possible",
                notes: "Often called a 'sponge' in old recipes. Helps yeast get established before the osmotic pressure of sugar/honey hits."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Challah hydration is deceiving. Water may be only 35-40%, but eggs are 75% water. Total 'liquid' usually lands around 60-65%. Too much water makes the strands flatten out.",
        methodSuitability: {
            direct: { suitable: true, notes: "Works perfectly." },
            poolish: { suitable: true, notes: "Adds shelf life." },
            biga: { suitable: false, notes: "Too stiff/acidic for this style." }
        },
        whatIf: [
            {
                scenario: "You want to make it festive",
                outcome: "Add raisins or saffron.",
                solution: "Soak raisins in warm water first so they don't suck moisture from the dough."
            }
        ],
        comparisons: [
            {
                vsStyle: "Babka",
                difference: "Babka is essentially Challah dough rolled out flat, filled, and twisted. Challah is the dough braided plain."
            }
        ],
        proTips: [
            "If using honey, be aware it is hygroscopic and makes the crust brown faster/darker than sugar.",
            "For a 6-strand braid: 'Over 2, Under 1, Over 2'. Chant it while you braid."
        ]
    },

    tags: ["challah", "jewish", "braided", "pareve", "enriched"],

    watchouts: [
        "Don't tear the dough when rolling strands; seal any tears or they will open in the oven.",
        "Don't skip the second egg wash.",
        "Cool completely before bagging to prevent mold."
    ],

    notes: [
        "Symbolizes the Manna from heaven.",
        "Serve with salt (dipped) to commemorate the altar.",
        "Leftovers make the world's best French Toast."
    ],

    recommendedFlavorComponents: ["honey_raw", "sesame_seeds", "poppy_seeds", "raisins_soaked"],

    references: [
        {
            source: "Breaking Breads by Uri Scheft",
            url: "https://www.amazon.com/Breaking-Breads-World-Israeli-Baking/dp/1579656024"
        },
        {
            source: "Encyclopedia of Jewish Food",
            url: "https://www.amazon.com/Encyclopedia-Jewish-Food-Gil-Marks/dp/0470391308"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/challah-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    }
};
