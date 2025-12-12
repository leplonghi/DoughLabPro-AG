import { defineDoughStyle } from '../../builder';
import { RecipeStyle } from '@/types';

export const NYChocolateChip = defineDoughStyle({
    name: "NY Style Chip Cookie",
    category: "cookie",
    recipeStyle: RecipeStyle.COOKIE_NY_CHOC_CHIP,
    description: "The modern 'Levain-style' cookie: massive (170g+), tall, mountains of dough with a gooey, underbaked center and a crispy, golden exterior. Relies on cold butter cubes and minimal mixing.",
    origin: {
        country: "USA",
        region: "New York City",
        period: "1990s"
    },
    technicalProfile: {
        hydration: [0, 0], // Not applicable in traditional sense, but low
        salt: [0.8, 1.2],
        fat: [20, 30], // Butter
        sugar: [30, 45], // Brown + White Sugar
        fermentationSteps: [
            "Cream cold butter (briefly)",
            "Mix dry ingredients",
            "Portion large (6oz)",
            "Freeze/Chill 12h (Crucial)",
            "Bake hot and fast"
        ],
        ovenTemp: [200, 220],
        difficulty: "Easy",
    },
    fermentationType: "direct", // Chemical leavening
    notes: [
        "Use cold cubed butter, do not cream until fluffy if you want height.",
        "Cornstarch or Cake Flour is often added to lower protein % for tenderness.",
        "Must be chilled thoroughly to prevent spreading."
    ],
    watchouts: [
        "Overmixing develops gluten -> tough cookie.",
        "Baking too low/slow -> flat cookie."
    ],
    tags: ["cookie", "american", "chocolate", "gooey", "sweet"],
    images: {
        hero: "/images/styles/ny-cookie-hero.png",
        dough: "/images/styles/placeholder_dough.jpg", // Kept generic
        crumb: "/images/styles/placeholder_dough.jpg"
    },
    references: [
        { source: "Levain Bakery", url: "" }
    ],
    education: {
        pro_tips: [
            { tip: "Do Not Cream", explanation: "Mix butter/sugar briefly. Creaming adds air, making a 'cakey' cookie. You want dense and fudgy." },
            { tip: "The 12h Rest", explanation: "Hydrates the flour completely and solidifies the butter, preventing spread." }
        ],
        what_if: [
            { scenario: "Cookie is flat", result: "Butter was too warm or chemical leavener expired.", correction: "Use ice cold butter chunks and chill dough before baking." }
        ],
        comparative_analysis: [
            { target_style: "Toll House", difference: "NY Style uses cold butter, cake flour/cornstarch, and is huge. Toll House is creamed and smaller.", why_choose_this: "Choose NY Style for a gooey center." }
        ],
        q_and_a: [
            { question: "Why Cornstarch?", answer: "It 'cuts' the protein of the flour, making the cookie tender despite the massive size.", context: "Cookie Chemistry" }
        ],
        fermentation_methods: [
            { method: "Direct", suitability: "Ideal", notes: "Chemical leavening (Soda/Powder) replaces yeast." }
        ]
    },
    base_formula: [
        { name: "Bread/Cake Flour Blend", percentage: 100 },
        { name: "Brown Sugar", percentage: 40 },
        { name: "White Sugar", percentage: 35 },
        { name: "Cold Butter Cubes", percentage: 65 },
        { name: "Whole Eggs", percentage: 40 },
        { name: "Dark Chocolate Chips", percentage: 90 },
        { name: "Walnuts (Optional)", percentage: 40 },
        { name: "Cornstarch", percentage: 2 },
        { name: "Baking Powder", percentage: 1.5 },
        { name: "Sea Salt", percentage: 1.5 }
    ]
});

export const FrenchCroissant = defineDoughStyle({
    name: "French Croissant",
    category: "pastry",
    recipeStyle: RecipeStyle.SWEETS_PASTRY,
    description: "The ultimate test of a baker's skill. A laminated yeast dough (Viennoiserie) featuring alternate layers of butter and dough (managed via 'turns'). Results in a honeycomb interior structure.",
    origin: {
        country: "France / Austria",
        region: "Paris (via Vienna)",
        period: "19th Century"
    },
    technicalProfile: {
        hydration: [55, 62],
        salt: [1.8, 2.2],
        fat: [40, 55], // Butter in dough + Butter Block
        sugar: [8, 12],
        fermentationSteps: [
            "Mix Détrempe",
            "Bulk 1h",
            "Lock-in Butter",
            "Lamination (3 turns)",
            "Proof 2-3h (wobbly)",
            "Bake"
        ],
        ovenTemp: [190, 210],
        difficulty: "Expert",
    },
    fermentationType: "preferment", // Often uses Poolish or Milk starter
    notes: [
        "Temperature control (16-19°C room) is vital. If butter melts, layers fuse.",
        "Butter plasticity must match dough extensibility.",
        "Proofing too hot (>26°C) will melt the butter out."
    ],
    watchouts: [
        "Butter shatter (too cold).",
        "Butter absorption (too warm).",
        "Proofing collapse."
    ],
    tags: ["pastry", "french", "laminated", "breakfast", "butter"],
    images: {
        hero: "/images/styles/croissant-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_dough.jpg"
    },
    references: [
        { source: "Viennoiserie Disciplinare", url: "" }
    ],
    education: {
        pro_tips: [
            { tip: "Plasticity Match", explanation: "Butter and dough usually need to be the same consistency. If butter is harder, it shatters. If softer, it squirts out." },
            { tip: "The Wobble", explanation: "A fully proofed croissant should wobble like jelly when the tray is shaken. If it's firm, wait." }
        ],
        what_if: [
            { scenario: "Pool of butter in oven", result: "Proofed too hot (>26°C) or underproofed.", correction: "Ideally proof at 24°C-25°C." }
        ],
        comparative_analysis: [
            { target_style: "Puff Pastry", difference: "Croissant has yeast (fermented). Puff Pastry is mechanical lift only.", why_choose_this: "Choose Croissant for the airy, honeycomb interior." }
        ],
        q_and_a: [
            { question: "How many layers?", answer: "Modern standard is often 27 layers (3 single turns). More layers = finer crumb but less open honeycomb.", context: "Lamination Math" }
        ],
        fermentation_methods: [
            { method: "Poolish", suitability: "Ideal", notes: "A poolish preferment adds extensibility to the dough, making rolling easier." }
        ]
    },
    customMethod: [
        {
            phase: "MIX",
            title: "Détrempe (Base Dough)",
            actionInstructions: "Mix water, milk, sugar, salt, yeast, and soft butter. Add flour. deeply knead until smooth (medium gluten development). Do not overdevelop.",
            grandmaInstructions: "Mix everything to make a smooth dough. Don't knead it too hard for too long.",
            technicalExplanation: "We need extensibility for rolling. Too much gluten (elasticity) makes lamination impossible (shrinkage).",
            durationLabel: "15 min"
        },
        {
            phase: "BULK",
            title: "Cold Ferment",
            actionInstructions: "Flatten dough into a rectangle, wrap, and chill at 4°C for 6-12 hours.",
            grandmaInstructions: "Wrap the dough and put it in the fridge overnight.",
            technicalExplanation: "Relaxes gluten and chills the dough to match the plasticity of the butter block.",
            durationLabel: "12h"
        },
        {
            phase: "PREP",
            title: "Lock-in (Beurrage)",
            actionInstructions: "Roll dough to twice the size of butter block. Place butter in center, fold dough over to encase. Seal edges.",
            grandmaInstructions: "Put the butter inside the dough and fold the dough over it like an envelope.",
            technicalExplanation: "Ensures distinct layers of fat and dough."
        },
        {
            phase: "PREP",
            title: "Lamination (3 Simple Turns)",
            actionInstructions: "Roll out to 8mm thick. Fold in thirds (Letter Fold). Rotate 90°. Repeat 2 more times, chilling in between if butter softens.",
            grandmaInstructions: "Roll it out, fold it like a letter. Do this 3 times.",
            technicalExplanation: "Creates 27 layers of butter (3^3), essential for the honeycomb structure.",
            criticalPoint: "If butter melts, it fuses with the dough -> Brioche (no layers)."
        },
        {
            phase: "PROOF",
            title: "Final Proof",
            actionInstructions: "Shape croissants. Proof at 26°C (max 28°C) until very wobbly and increased 2.5x in volume.",
            grandmaInstructions: "Let them rise in a warm spot (but not too hot!) until they wobble like jelly.",
            proTip: "If proof temperature exceeds 29°C, the butter will leak out before baking."
        },
        {
            phase: "BAKE",
            title: "Bake",
            actionInstructions: "Bake at 200°C for 5 min, then 190°C for 12-15 min. No steam or minimal steam.",
            grandmaInstructions: "Bake until deep golden brown."
        }
    ],

    base_formula: [
        { name: "Bread Flour", percentage: 100 },
        { name: "Water", percentage: 28 },
        { name: "Whole Milk", percentage: 28 },
        { name: "Sugar", percentage: 12 },
        { name: "Salt", percentage: 2 },
        { name: "Yeast (Instant)", percentage: 1.2 },
        { name: "Butter (Dough)", percentage: 6 },
        { name: "Butter (Lamination Block)", percentage: 50 },
        { name: "Egg Wash", percentage: 5 }
    ]
});

export const CinnamonRoll = defineDoughStyle({
    name: "Classic Cinnamon Roll",
    category: "pastry", // Or Enriched Bread, but fits Pastry logic
    recipeStyle: RecipeStyle.CINNAMON_ROLL,
    description: "Soft, enriched dough rolled with a cinnamon-sugar-butter smear and cut into spirals. Topped with cream cheese icing or fondant glaze. A staple of American comfort baking.",
    origin: {
        country: "USA / Sweden",
        region: "General",
        period: "1920s"
    },
    technicalProfile: {
        hydration: [60, 68],
        salt: [1.5, 2.0],
        fat: [10, 15], // In dough
        sugar: [20, 30], // Including filling
        fermentationSteps: [
            "Mix Enriched Dough",
            "Bulk 1.5h",
            "Sheet & Fill",
            "Roll & Cut",
            "Proof 1h"
        ],
        ovenTemp: [180, 190],
        difficulty: "Medium",
    },
    fermentationType: "direct",
    notes: [
        "Can be made 'gooey' by pouring heavy cream over rolls before baking.",
        "Filling should include a binder (flour or cornstarch) to prevent leaking.",
        "Tangzhong method keeps them soft for days."
    ],
    tags: ["pastry", "american", "sweet", "breakfast", "cinnamon"],
    images: {
        hero: "/images/styles/cinnamon-roll-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_dough.jpg"
    },
    education: {
        pro_tips: [
            { tip: "Dental Floss Cut", explanation: "Use unflavored floss to cut the log. Knives squash the spiral; floss cuts cleanly from the outside in." },
            { tip: "The Cream Hack", explanation: "Pour warm heavy cream over the rolls right before baking for Cinnabon-level gooeyness." }
        ],
        what_if: [
            { scenario: "Centers popped up", result: "Rolled too tightly.", correction: "Roll the log loosely to allow expansion." }
        ],
        comparative_analysis: [
            { target_style: "Sticky Bun", difference: "Sticky buns bake on top of caramel/nuts and are flipped. Cinnamon rolls are glazed on top.", why_choose_this: "Choose Cinnamon Rolls for cream cheese frosting lovers." }
        ],
        q_and_a: [
            { question: "Why Bread Flour?", answer: "You need the chewier texture to hold the heavy filling. AP flour makes them too cakey.", context: "Texture Balance" }
        ],
        fermentation_methods: [
            { method: "Direct", suitability: "Authentic", notes: "Enriched direct dough is standard." }
        ]
    },
    base_formula: [
        { name: "Bread Flour", percentage: 100 },
        { name: "Whole Milk", percentage: 65 },
        { name: "Sugar", percentage: 15 },
        { name: "Butter (Soft)", percentage: 15 },
        { name: "Whole Egg", percentage: 10 },
        { name: "Instant Yeast", percentage: 1.5 },
        { name: "Salt", percentage: 2 },
        { name: "Filling: Brown Sugar", percentage: 25 },
        { name: "Filling: Cinnamon", percentage: 2.5 },
        { name: "Filling: Butter", percentage: 10 },
        { name: "Frosting: Cream Cheese", percentage: 20 },
        { name: "Frosting: Powdered Sugar", percentage: 15 }
    ]
});

export const FudgyBrownie = defineDoughStyle({
    name: "Fudgy Brownie",
    category: "cookie", // Adapting to 'Confectionery' family
    recipeStyle: RecipeStyle.BROWNIE,
    description: "A dense, rich chocolate bar with zero leavening agents (relying on egg foam or just density). shiny crackly top (meringue skin) and a moist, truffle-like interior.",
    origin: {
        country: "USA",
        region: "Chicago",
        period: "1893"
    },
    technicalProfile: {
        hydration: [10, 20], // Very low water content
        salt: [0.5, 1.0],
        fat: [25, 35], // Butter + Chocolate fat
        sugar: [40, 60], // Sugar dictates texture
        fermentationSteps: [
            "Melt Butter + Chocolate",
            "Whip Eggs + Sugar (Ribbon stage for skin)",
            "Fold in Dry",
            "Bake"
        ],
        ovenTemp: [160, 180],
        difficulty: "Easy",
    },
    fermentationType: "direct", // None really
    notes: [
        "The 'crinkle top' comes from dissolving sugar completely into the eggs.",
        "Do not overbake. Carryover cooking finishes the center.",
        "Cocoa powder adds depth; melted chocolate adds fudge factor."
    ],
    tags: ["sweet", "chocolate", "dessert", "american"],
    images: {
        hero: "/images/styles/brownie-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_dough.jpg"
    },
    references: [
        { source: "Palmer House Hotel", url: "" }
    ],
    education: {
        pro_tips: [
            { tip: "The Shiny Crust", explanation: "Whip eggs and sugar vigorously to the 'ribbon stage' before adding chocolate/flour. This creates the meringue-like skin." },
            { tip: "Ice Bath", explanation: "Shocking the baked brownies in an ice bath halts cooking immediately, ensuring the center stays fudgy." }
        ],
        what_if: [
            { scenario: "Cakey texture", result: "Too much flour or overbaked.", correction: "Reduce flour, increase fat/sugar ratios." }
        ],
        comparative_analysis: [
            { target_style: "Chocolate Cake", difference: "Brownies have no chemical leavening and much higher fat/sugar density.", why_choose_this: "Choose Brownie for density." }
        ],
        q_and_a: [
            { question: "Cocoa or Chocolate?", answer: "Both. Melted chocolate gives fudge texture; Cocoa powder gives deep flavor notes.", context: "Flavor Profiling" }
        ],
        fermentation_methods: [
            { method: "Direct", suitability: "Not Recommended", notes: "No fermentation. It's a batter." }
        ]
    },
    base_formula: [
        { name: "AP Flour", percentage: 100 },
        { name: "White Sugar", percentage: 120 },
        { name: "Brown Sugar", percentage: 40 },
        { name: "Butter (Melted)", percentage: 100 },
        { name: "Dark Chocolate (70%)", percentage: 60 },
        { name: "Cocoa Powder", percentage: 25 },
        { name: "Whole Eggs", percentage: 70 },
        { name: "Vanilla Extract", percentage: 2 },
        { name: "Salt", percentage: 1 }
    ]
});
