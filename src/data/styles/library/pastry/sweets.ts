import { defineDoughStyle } from '../../builder';

export const NYChocolateChip = defineDoughStyle({
    name: "NY Style Chip Cookie",
    category: "cookie",
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
    references: [
        { source: "Levain Bakery", url: "" }
    ]
});

export const FrenchCroissant = defineDoughStyle({
    name: "French Croissant",
    category: "pastry",
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
    references: [
        { source: "Viennoiserie Disciplinare", url: "" }
    ]
});

export const CinnamonRoll = defineDoughStyle({
    name: "Classic Cinnamon Roll",
    category: "pastry", // Or Enriched Bread, but fits Pastry logic
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
});

export const FudgyBrownie = defineDoughStyle({
    name: "Fudgy Brownie",
    category: "cookie", // Adapting to 'Confectionery' family
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
    references: [
        { source: "Palmer House Hotel", url: "" }
    ]
});
