import { defineDoughStyle } from '../../builder';

export const BriocheATete = defineDoughStyle({
    name: "Brioche à Tête",
    category: "enriched_bread",
    description: "The quintessential French enriched bread, containing a massive amount of butter (often 50%+) and eggs. The 'à Tête' shape features a small top bun (the head) nestled in a fluted round base.",
    origin: {
        country: "France",
        region: "Normandy",
        period: "1404 (First recorded)"
    },
    technicalProfile: {
        hydration: [20, 30], // Liquid comes from EGGS, not water
        salt: [2.0, 2.5],
        fat: [40, 60], // Butter!
        sugar: [10, 15],
        fermentationSteps: [
            "Intensive Mix (Windowpane)",
            "Bulk 1h",
            "Cold Retard 12h (Crucial for shaping)",
            "Proof 2-3h"
        ],
        ovenTemp: [180, 200],
        difficulty: "Hard",
    },
    fermentationType: "direct",
    notes: [
        "Ingredients must be COLD to prevent butter from melting during mixing.",
        "Add butter only after gluten is fully developed.",
        "Must be chilled thoroughly before shaping."
    ],
    watchouts: [
        "Breaking the emulsion (greasy dough) if mixing gets too hot (>24°C).",
        "Under-proofing results in a dense, heavy crumb."
    ],
    tags: ["bread", "french", "enriched", "butter", "dessert"],
    references: [
        { source: "The Art of French Baking", url: "" }
    ]
});

export const Challah = defineDoughStyle({
    name: "Challah (Braided)",
    category: "enriched_bread",
    description: "Ashkenazi Jewish ceremonial bread, traditionally braided (3, 4, or 6 strands). Enriched with oil and eggs but dairy-free (Pareve) to be eaten with meat meals.",
    origin: {
        country: "Jewish Diaspora",
        region: "Eastern Europe",
        period: "Traditional"
    },
    technicalProfile: {
        hydration: [35, 45], // Low water, mostly eggs/oil
        salt: [1.8, 2.0],
        fat: [8, 12], // Vegetable Oil
        sugar: [8, 12], // Honey or Sugar
        fermentationSteps: [
            "Mix to medium development",
            "Bulk 2h",
            "Shape/Braid",
            "Proof 1.5-2h"
        ],
        ovenTemp: [175, 190],
        difficulty: "Medium",
    },
    fermentationType: "direct",
    notes: [
        "Use neutral oil (canola/grapeseed) for a Pareve loaf.",
        "Double egg wash (once before proof, once before bake) for profound shine.",
        "Braiding dictates the final shape and structure."
    ],
    tags: ["bread", "jewish", "braided", "dairy-free", "ceremonial"]
});

export const BurgerBun = defineDoughStyle({
    name: "Classic Burger Bun",
    category: "burger_bun",
    description: "Soft, slightly sweet, and sturdy enough to hold a juicy patty without disintegrating. Often basically a lean brioche or potato bun.",
    origin: {
        country: "USA",
        region: "General",
        period: "20th Century"
    },
    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.2],
        fat: [5, 10], // Butter or Shortening
        sugar: [5, 8],
        fermentationSteps: [
            "Mix to full development",
            "Bulk 1h",
            "Divide & Ball 80-100g",
            "Proof 1h (Flattened)"
        ],
        ovenTemp: [190, 210],
        difficulty: "Easy",
    },
    fermentationType: "direct",
    notes: [
        "Flatten the balls gently before proofing for a wider surface area.",
        "Use a Tangzhong (water roux) for extended softness.",
        "Sesame seeds are traditional but optional."
    ],
    tags: ["bread", "american", "soft", "sandwich"]
});

export const Shokupan = defineDoughStyle({
    name: "Shokupan (Japanese Milk Bread)",
    category: "enriched_bread",
    description: "Ultra-fluffy, white Japanese sandwich bread. The secret is the 'Tangzhong' or 'Yudane' method (gelatinized flour paste), which locks in moisture for days.",
    origin: {
        country: "Japan",
        region: "National",
        period: "20th Century"
    },
    technicalProfile: {
        hydration: [70, 75], // High, but bound by starch
        salt: [1.8, 2.0],
        fat: [6, 10], // Butter + Milk Powder
        sugar: [6, 10],
        fermentationSteps: [
            "Prepare Tangzhong (Cook flour+water)",
            "Mix All",
            "Bulk 1.5h",
            "Shape (3-4 lobes)",
            "Proof in Pullman Pan"
        ],
        ovenTemp: [180, 190],
        difficulty: "Medium",
    },
    fermentationType: "direct",
    notes: [
        "Tangzhong: Cook 5% of flour with 5x water to 65°C.",
        "Shaping involves rolling up logs and placing them side-by-side in the tin.",
        "Produces 'cotton-like' shreddable crumb."
    ],
    tags: ["bread", "japanese", "tangzhong", "soft", "sandwich"]
});

export const Panettone = defineDoughStyle({
    name: "Panettone Artigianale",
    category: "enriched_bread",
    description: "The Mount Everest of baking. A sweet Italian bread loaded with candied fruit/raisins, leavened EXCLUSIVELY by a stiff sourdough starter (Pasta Madre). Extremely complex, multistage fermentation.",
    origin: {
        country: "Italy",
        region: "Milan",
        period: "Renaissance"
    },
    technicalProfile: {
        hydration: [55, 65], // Complex calculation including yolks
        salt: [0.5, 0.8], // Low salt
        fat: [30, 45], // Massive butter load
        sugar: [20, 30],
        fermentationSteps: [
            "Refresh Pasta Madre (3x daily)",
            "First Dough (Primo Impasto) 12h",
            "Second Dough (Secondo Impasto)",
            "Proof 6-8h",
            "Hang upside down"
        ],
        ovenTemp: [160, 175],
        difficulty: "Expert", // The hardest style here
    },
    fermentationType: "levain", // Use 'levain' instead of 'sourdough' based on type def
    notes: [
        "Requires 'Pasta Madre' maintained in water or bound in cloth.",
        "Temperature control (26-28°C) is critical for pH balance.",
        "Must be hung upside down immediately after baking to prevent collapse."
    ],
    watchouts: [
        "Acidity too high degrades gluten structure.",
        "Temperature drop collapses the dome.",
        "Mixing too hot separates the butter."
    ],
    tags: ["bread", "italian", "christmas", "sourdough", "sweet"],
    references: [
        { source: "Panettone Disciplinare (Italy)", url: "" }
    ]
});
