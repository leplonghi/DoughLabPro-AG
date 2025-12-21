import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * CHALLAH (JEWISH BRAIDED BREAD)
 * 
 * Researched and validated content:
 * - Origin: Ancient Israel (Ritual), Modern form from 15th c. Germany
 * - Technique: Braiding (3 to 6 strands), Egg glazing, 'Hafrashat Challah' ritual
 * - Ingredients: Egg-enriched, Pareve (uses oil, no dairy)
 * - Symbolism: Unity, the 12 Tribes, the double portion of Manna
 */
export const challah_jewish_braided: DoughStyleDefinition = {
    id: "challah_jewish_braided",
    name: "Challah (Jewish Braided Bread)",
    category: "bread",
    recipeStyle: RecipeStyle.CHALLAH,
    family: "Ashkenazi Jewish Bread",

    origin: {
        country: "Israel / Germany",
        region: "Levant / Central Europe",
        period: "15th Century (Modern braided form)"
    },

    description: "Challah is a rich, golden, egg-enriched bread central to Jewish Sabbath (Shabbat) and holiday traditions. It is famous for its intricate braids and glossy, deep-mahogany crust. Traditionally 'pareve' (containing no dairy or meat), it is made with vegetable oil rather than butter so it can be served alongside meat meals according to kosher laws. Its texture is soft, pillowy, and slightly sweet, making it the ultimate comfort bread.",

    history: "The word 'Challah' originally referred to a specific portion of dough set aside as a tithe for the priests in the Temple (Hafrashat Challah). After the destruction of the Temple, the name shifted to the bread itself. The iconic braided shape arrived in the 15th century when Ashkenazi Jews in Germany adapted local braided breads for their Shabbat tables. Throughout history, the bread evolved from a simple barley loaf into the egg-rich, refined wheat version common today. In the US, it became a cultural icon, often found in New York bakeries alongside bagels.",

    difficulty: "Medium",
    fermentationType: "direct",

    base_formula: [
        { name: "Bread Flour (12%+ protein)", percentage: 100 },
        { name: "Water", percentage: 45 },
        { name: "Eggs (whole)", percentage: 20 },
        { name: "Vegetable Oil (Canola or Light Olive)", percentage: 12 },
        { name: "Honey or Sugar", percentage: 12 },
        { name: "Salt", percentage: 2 },
        { name: "Instant Yeast", percentage: 1.5 }
    ],

    technicalProfile: {
        hydration: [45, 55], // Low liquid because eggs and oil provide fluidity
        salt: [1.5, 2.2],
        oil: [10, 15],
        sugar: [8, 15],
        flourStrength: "High-protein Bread Flour (W300+) to support structural braiding",
        ovenTemp: [175, 190],
        recommendedUse: [
            "Shabbat Dinner (Friday night)",
            "French Toast (leftovers are the gold standard)",
            "Bread Pudding"
        ],
        difficulty: "Medium",
        ballWeight: { recommended: 600, min: 400, max: 1200 },
        fermentationSteps: [
            "Mix: Combine flour, yeast, honey, eggs, and water. Add oil last once the flour is hydrated. [Science: Adding oil early can coat flour particles and inhibit gluten development]",
            "Kneading: Mix until the dough is smooth and strong but still slightly tacky. [Science: The dough must be elastic enough to be rolled into long ropes without tearing]",
            "Bulk Rise: 1.5 to 2 hours at room temperature. [Science: Enriched doughs rise slower because sugar and fat compete for water and can stress the yeast]",
            "Braiding: Divide into 3, 4, or 6 strands. Roll into long, tapered ropes and braid with consistent tension. [Science: The braiding creates the structural geometry that allows for even expansion and the iconic 'hump' SHAPE]",
            "Final Proof: 60-90 minutes. It should look very puffy and soft. [Science: Over-proofing will cause the braids to lose definition and 'blur' during baking]",
            "Egg Wash: Apply two coats: one before proofing, one just before baking. [Science: The protein in the egg white creates a matte finish while the yolk fat and sugar create the deep mahogany shine]",
            "Bake: Bake at 180°C (350°F) until the internal temp reaches 90-93°C. [Science: High sugar leads to rapid browning; a lower temp is used to ensure the center cooks before the crust burns]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W300-340 (Strong)",
            pl_ratio: "0.55-0.70 (Balanced to Tenacious)",
            absorption_capacity: "Moderate (supported by egg moisture)",
            protein_type: "Hard wheat with high elasticity",
            science_explanation: "The dough must maintain significant structure during braiding. If the flour is too weak (W < 250), the ropes will sag or snap during the braiding process."
        },
        thermalProfile: {
            oven_type: "Standard home or Deck oven",
            heat_distribution: "Moderate radiant heat",
            crust_development: "Thin, soft, high-gloss mahogany (due to egg wash)",
            crumb_structure: "Dense but soft, yellow-tinted, very consistent (no large holes)"
        },
        fermentationScience: {
            yeast_activity: "Steady; sugar provides ample fuel but the high osmotic pressure slowed initial activity",
            ph_target: "pH 5.4-5.6",
            organic_acids: "Low; dominated by floral honey notes and egg richness",
            enzymatic_activity: "Inhibited slightly by high sugar, which preserves the sweetness through the bake"
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Double Egg Wash",
                explanation: "Apply one layer of egg wash immediately after braiding and another right before the loaf enters the oven. This fills in the 'stretches' that occur during the final rise, ensuring a uniform, professional shine."
            },
            {
                tip: "The 6-Strand Logic",
                explanation: "If you want a professional, high-domed look, go for the 6-strand braid. It creates more vertical tension than the 3-strand, pushing the loaf up rather than out."
            },
            {
                tip: "Avoid Butter for Tradition",
                explanation: "To keep it Kosher (Pareve) for meat meals, use oil. If you switch to butter, it technically becomes a Brioche, not a traditional Challah."
            },
            {
                tip: "Don't Over-Flour the Table",
                explanation: "To roll perfect ropes, you actually need a little bit of 'grip' on the table. If there's too much flour, the dough will just slide around instead of stretching out into a rope."
            },
            {
                tip: "Taper your Ropes",
                explanation: "Roll your strands so they are slightly thicker in the middle and tapered at the ends. This creates the classic 'football' shape of the loaf."
            }
        ],
        what_if: [
            {
                scenario: "The braids split and look 'streaky' after baking",
                result: "Under-proofed or only one layer of egg wash",
                correction: "Ensure the loaf has doubled in size before baking, and use the double-egg wash technique to cover the expansion areas."
            },
            {
                scenario: "The bottom is burnt while the top is pale",
                result: "Oven floor was too hot or sugar was too high",
                correction: "Bake on a middle rack and use a double tray (insulated) if necessary to protect the bottom."
            },
            {
                scenario: "The bread is dry and crumbly",
                result: "Over-baked or too much flour during kneading",
                correction: "Pull the bread at 90°C internal temp. Don't add flour if the dough is slightly sticky—use oiled hands instead."
            },
            {
                scenario: "The ropes are snapping as I braid",
                result: "Not enough relaxation time",
                correction: "If the dough is too elastic, cover the ropes and let them rest for 10 minutes. The gluten will relax, allowing you to stretch them without tearing."
            }
        ],
        comparative_analysis: [
            {
                target_style: "French Brioche",
                difference: "Brioche uses lots of butter and milk; Challah uses oil and water. Brioche is more 'cakey' and fatty; Challah is sturdier and 'breadier'.",
                why_choose_this: "Choose Challah for a dairy-free enriched bread that can be served with any meal."
            },
            {
                target_style: "Japanese Milk Bread",
                difference: "Milk bread uses Tangzhong for softness; Challah relies on egg fats and sugar. Milk bread is shred-able; Challah is more substantial and slice-able.",
                why_choose_this: "Choose Challah for its ornamental beauty and traditional significance."
            },
            {
                target_style: "Zopf (Swiss Bread)",
                difference: "Zopf is very similar in shape but uses milk and butter (making it dairy) and usually has a tighter, denser crumb.",
                why_choose_this: "Choose Challah for the egg-rich, honey-forward flavor."
            }
        ],
        q_and_a: [
            {
                question: "Why two loaves on Shabbat?",
                answer: "To remember the 'Lechem Mishneh' (double portion) of manna that fell from heaven on Friday during the 40 years in the desert, so the Israelites wouldn't have to gather it on a Saturday.",
                context: "Tradition"
            },
            {
                question: "What does the 6-strand braid represent?",
                answer: "Two loaves of 6 strands each equal 12, representing the 12 showbreads kept in the Temple for the 12 tribes of Israel.",
                context: "Symbolism"
            },
            {
                question: "Why poppy seeds?",
                answer: "They represent the manna falling from heaven. Sesame seeds are used for the same reason.",
                context: "Symbolism"
            },
            {
                question: "Can I use honey instead of sugar?",
                answer: "Yes, honey is the traditional choice for holidays (especially Rosh Hashanah) to symbolize a sweet new year.",
                context: "Ingredients"
            },
            {
                question: "What is 'Hafrashat Challah'?",
                answer: "A ceremony where a small piece of the dough is removed and burned (or discarded) to fulfill the biblical commandment of giving a portion to the temple priests.",
                context: "Ritual"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "Most Challah is made using a direct yeasted method."
            },
            {
                method: "Sourdough",
                suitability: "Ideal",
                notes: "Increasingly popular for its slower rise and deeper complexity, though it may take 24h+."
            },
            {
                method: "Poolish",
                suitability: "Possible",
                notes: "Helps develop stronger gluten and more flavor in a shorter time frame."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Challah hydration appears low (45-50%), but because of the high volume of liquid fats (eggs are 75% water, oil is 100% liquid), the dough is quite soft. This 'fat-rich' environment makes the crumb incredibly tender despite being relatively dense.",
        methodSuitability: {
            direct: { suitable: true, notes: "Allows for a 3-hour process from mix to bake." },
            biga: { suitable: true, notes: "Excellent for the structural integrity of complex 6-strand braids." },
            poolish: { suitable: true, notes: "Adds great extensibility to the ropes." }
        },
        whatIf: [
            {
                scenario: "You omit the egg wash",
                outcome: "The bread will be dull and floury-looking, losing its ritual 'prestige' appearance.",
                solution: "Never skip the egg wash; it is the soul of Challah's aesthetics."
            }
        ],
        comparisons: [
            {
                vsStyle: "Water Challah vs Egg Challah",
                difference: "Water Challah (no eggs) is more common in Sephardic traditions and is leaner; Egg Challah is the rich Ashkenazi standard."
            }
        ],
        proTips: [
            "Use a 1:1 mixture of egg yolk and honey for the ultimate dark, shiny glaze.",
            "When braiding, don't pull tight—leave a little 'slack' so the dough has room to expand without bursting.",
            "Round Challah (for New Year) is often made by spiraling one long rope.",
            "Try adding raisins or chocolate chips for a sweet holiday variation."
        ]
    },

    tags: ["challah", "jewish", "braided", "enriched", "pareve", "shabbat"],

    watchouts: [
        "Over-proofing? The braids will vanish into a shapeless blob.",
        "Only one egg wash? You'll see white 'growth' lines where the braids expand.",
        "Too much flour on the table? You'll never be able to roll the ropes long enough.",
        "Drafty room? The dough will form a skin that cracks in the oven."
    ],

    notes: [
        "Ashkenazi tradition (C. Europe).",
        "Pareve (non-dairy) for Kosher reasons.",
        "Egg-rich and shiny.",
        "Symbolic braiding (12 tribes).",
        "Central to Shabbat ritual."
    ],

    references: [
        {
            source: "Modernist Bread (Challah History & Science)",
            url: "https://modernistcuisine.com/books/modernist-bread/",
            author: "Nathan Myhrvold, Francisco Migoya",
            year: "2017"
        },
        {
            source: "Inside the Jewish Bakery",
            url: "https://www.amazon.com/Inside-Jewish-Bakery-Recipes-Traditions/dp/1935754051",
            author: "Stanley Ginsberg",
            year: "2011"
        },
        {
            source: "MyJewishLearning - Challah History & Symbolism",
            url: "https://www.myjewishlearning.com/article/challah/"
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
    },
    recommendedFlavorComponents: ["salted_butter_normandy", "honey_raw", "sesame_seeds", "poppy_seeds"]
};
