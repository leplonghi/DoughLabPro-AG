import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * CLASSIC SCOTTISH SHORTBREAD
 * 
 * Researched and validated content:
 * - Origin: Scotland (12th century; standardized by Mary Queen of Scots in 16th c.)
 * - Technique: Rubbing-in or Creaming, Docking (pricking), Low-temp baking
 * - Ingredients: High-fat butter (Normandy/Irish), Caster sugar, Rice flour (optional for crunch)
 * - Characteristics: Pale, crumbly (short), intensely buttery, three shapes: Petticoat Tails, Rounds, Fingers
 */
export const cookie_shortbread_classic: DoughStyleDefinition = {
    id: "cookie_shortbread_classic",
    name: "Classic Scottish Shortbread",
    category: "cookies_confectionery",
    recipeStyle: RecipeStyle.COOKIE_SHORTBREAD,
    family: "Traditional Confectionery",

    origin: {
        country: "Scotland",
        region: "Scottish Highlands",
        period: "12th Century (Medieval 'Biscuit Bread') – 16th Century (Modern form)"
    },

    description: "Shortbread is a legendary Scottish biscuit characterized by its 'short' (crumbly) texture, which is achieved through a very high butter-to-flour ratio and the complete absence of leavening agents or eggs. Traditional shortbread is baked at a low temperature to ensure it remains pale and sandy, never deeply browned. It is the ultimate expression of butter in baking.",

    history: "Shortbread evolved from medieval 'biscuit bread'—leftover dough that was dried in a low oven until hard. Mary, Queen of Scots, is often credited with refining the recipe in the 16th century, specifically the 'Petticoat Tails' shape, which were large rounds cut into triangles like the fabric pieces used for petticoats. Historically, it was a luxury item reserved for weddings, Christmas, and Hogmanay (Scottish New Year).",

    difficulty: "Easy",
    fermentationType: "direct",

    base_formula: [
        { name: "Plain All-Purpose Flour", percentage: 100 },
        { name: "Salted Butter (Cold/Room Temp)", percentage: 65 },
        { name: "Caster Sugar (Fine White Sugar)", percentage: 33 },
        { name: "Rice Flour or Cornstarch (for 'Snap')", percentage: 10 },
        { name: "Sea Salt (if using unsalted butter)", percentage: 1 }
    ],

    technicalProfile: {
        hydration: [0, 5], // Almost zero; moisture comes solely from the butter
        salt: [1.0, 2.0],
        oil: [0, 0], // Fat is 100% butter
        sugar: [30, 40],
        flourStrength: "Low (W150-180). We want zero gluten development to maintain the crumbly 'short' texture",
        ovenTemp: [140, 160], // Low temp prevents browning and ensures even drying
        recommendedUse: [
            "Traditional Afternoon Tea",
            "Holiday gift boxes",
            "Base for Millionaire's Shortbread"
        ],
        difficulty: "Easy",
        ballWeight: { recommended: 400, min: 200, max: 1000 }, // Usually baked as a slab
        fermentationSteps: [
            "Creaming (Artisan Method): Mix butter and caster sugar until combined but NOT fluffy. [Science: We don't want to incorporate air, which would cause the shortbread to rise and lose its dense, sandy texture]",
            "Dry Union: Fold in the flour and rice flour. Mix until it resembles damp sand. [Science: Over-working at this stage will develop gluten, turning the biscuit from 'short' to 'tough']",
            "Pressing: Press the crumbly dough into a wooden mold or a lined rectangular tin. [Science: The compression creates the solid block that holds together without eggs]",
            "Docking: Prick the surface deeply with a fork in a regular pattern. [Science: Allows steam to escape evenly, preventing the dough from buckling or bubbling]",
            "Chilling: Chill the pressed dough for 1 hour. [Science: Solidifies the butter so the edges remain sharp during baking]",
            "Baking: Bake at 150°C for 30-45 minutes until pale gold. [Science: The goal is to dry the biscuit out completely while the sugar barely caramelizes]",
            "Slicing: Slice into 'fingers' while still warm from the oven. [Science: Once cold, the high fat makes the shortbread brittle and impossible to cut cleanly]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W150 (Weak)",
            pl_ratio: "0.40",
            absorption_capacity: "Low",
            protein_type: "Soft wheat with minimal glutenin",
            science_explanation: "The high fat content (60%+) 'shortens' the gluten strands by coating the flour particles, preventing them from bonding with moisture. This is the origin of the term 'short' in pastry."
        },
        thermalProfile: {
            oven_type: "Conventional Oven",
            heat_distribution: "Low convection",
            crust_development: "None; the surface should be matte and pale cream/gold",
            crumb_structure: "Homogeneous, sandy, and brittle"
        },
        fermentationScience: {
            yeast_activity: "None",
            ph_target: "pH 6.5 (Neutral)",
            organic_acids: "None; flavor is driven by the butyric acid in the high-quality butter",
            enzymatic_activity: "Low; the quick process and low temperature minimize starch conversion."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Caster Sugar is Mandatory",
                explanation: "Granulated sugar is too coarse and will leave 'speckles'; Icing sugar is too fine and makes it too melt-in-the-mouth. Caster sugar provides the classic 'crunch'."
            },
            {
                tip: "Rice Flour for 'Sandiness'",
                explanation: "Substituting 10-15% of the flour with ground rice flour (or cornstarch) is the secret to the traditional Scottish 'sandy' bite."
            },
            {
                tip: "Use Salted Irish/Normandy Butter",
                explanation: "With only three ingredients, the butter is everything. Use a cultured, high-fat (82%+) salted butter for the most authentic flavor."
            },
            {
                tip: "Docking for Beauty",
                explanation: "Pricking the dough isn't just for physics; the patterns define the artisanal look of shortbread. Be artistic with your fork!"
            },
            {
                tip: "Sugar Dusting",
                explanation: "Immediately after baking, sprinkle with extra caster sugar. It sticks to the residual heat and adds a beautiful crystalline finish."
            }
        ],
        what_if: [
            {
                scenario: "The shortbread is tough and hard",
                result: "Dough was over-worked or flour protein was too high",
                correction: "Use Pastry flour and stop mixing as soon as the dough comes together."
            },
            {
                scenario: "The shortbread crumbled into dust when cutting",
                result: "You waited until it was cold to slice",
                correction: "Always slice shortbread into fingers while it is still warm and flexible from the oven."
            },
            {
                scenario: "It turned very dark brown",
                result: "Oven was too hot",
                correction: "Shortbread should be pale. Lower your oven to 140°C and bake for longer."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Sablé (French)",
                difference: "Sablé uses egg yolks and often vanilla/lemon; Shortbread is strictly Butter/Sugar/Flour.",
                why_choose_this: "Choose Shortbread for the purest expression of butter."
            },
            {
                target_style: "Sugar Cookie",
                difference: "Sugar cookies use leavening (baking powder) and eggs for a soft, lifted texture; Shortbread is flat and dense.",
                why_choose_this: "Choose Shortbread for a longer shelf life and a more 'sophisticated' crumble."
            },
            {
                target_style: "Shortcrust Pastry",
                difference: "Shortcrust has less sugar and more water; Shortbread is a standalone confection with high sugar.",
                why_choose_this: "Choose Shortbread as a treat or a base for tarts."
            }
        ],
        q_and_a: [
            {
                question: "Why no eggs?",
                answer: "Eggs add moisture and protein structure. Shortbread is meant to be fragile and crumbly, relying only on fat for cohesion.",
                context: "Ingredients"
            },
            {
                question: "What are 'Petticoat Tails'?",
                answer: "A large round of shortbread docked and cut into triangles, resembling the shape of 16th-century petticoat segments.",
                context: "Tradition"
            },
            {
                question: "Why docked?",
                answer: "Without holes, the trapped air between the butter and flour would expand into big bubbles, ruining the flat surface.",
                context: "Physics"
            },
            {
                question: "Can I add lavender?",
                answer: "Yes, lavender or rosemary shortbread is a popular modern variation. Add 1 tsp of dried petals to the sugar stage.",
                context: "Variations"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "Shortbread requires no fermentation."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Hydration is almost non-existent. The dough is held together by the 'plasticity' of the solid butter. This is why chilling before baking is so important—it 'locks' the shape.",
        methodSuitability: {
            direct: { suitable: true, notes: "The only way to make shortbread." },
            biga: { suitable: false, notes: "N/A" },
            poolish: { suitable: false, notes: "N/A" }
        },
        whatIf: [
            {
                scenario: "You use margarine",
                outcome: "The shortbread will have a synthetic aftertaste and an oily, rather than crumbly, mouthfeel.",
                solution: "Shortbread is a butter-delivery-vehicle. Don't compromise on the quality of the fat."
            }
        ],
        comparisons: [
            {
                vsStyle: "Scottish vs Walkers (Industrial)",
                difference: "Home-baked Scottish shortbread is usually thicker and has more rice-flour 'snap' than the mass-produced versions."
            }
        ],
        proTips: [
            "A pinch of ground ginger (0.1%) adds a 'hidden' warmth that people can't quite identify but love.",
            "Use a wooden 'Shortbread Mold' for beautiful traditional patterns.",
            "Store in a tin with a vanilla bean for a week for incredible infused aroma.",
            "If the dough is too crumbly to roll, add 1 teaspoon of cold water—but only as a last resort.",
            "The best shortbread is 'over-baked' slightly at even lower temps (130°C) for 1 hour; it turns out like toffee."
        ]
    },

    tags: ["shortbread", "scottish", "butter", "traditional", "tea", "confectionery"],

    watchouts: [
        "Butter melting during mixing? Chill the flour first.",
        "Edges browning too fast? Cover loosely with foil.",
        "Crumbling when trying to eat? You missed the rice-flour/cornstarch snap component.",
        "Tasting 'floury'? You didn't bake it long enough at low heat."
    ],

    notes: [
        "Scottish national treasure.",
        "3:2:1 ratio (Flour:Butter:Sugar).",
        "No eggs, no leavening.",
        "Sandy, crumbly 'short' texture.",
        "Low-temperature bake is essential."
    ],

    references: [
        {
            source: "The History of Scottish Shortbread",
            url: "https://www.historic-uk.com/CultureUK/Shortbread/",
            author: "Historic UK",
            year: "2023"
        },
        {
            source: "The Art of Scottish Baking",
            url: "https://www.amazon.com/Art-Scottish-Baking-Cakes-Breads/dp/1902930267",
            author: "Cassy Vane-Percy",
            year: "2010"
        },
        {
            source: "Walkers Shortbread - Traditional Methods",
            url: "https://www.walkersshortbread.com/",
            author: "Walkers Family",
            year: "2023"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/classic-shortbread-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["salted_butter_normandy", "vanilla_madagascar"]
};
