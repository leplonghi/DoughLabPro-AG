import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';

const baguetteTradition: DoughStyleDefinition = {
    id: "baguette_tradition",
    name: "Baguette Tradition Française",
    category: "bread",
    recipeStyle: RecipeStyle.BAGUETTE,
    origin: {
        country: "France",
        region: "Paris",
        period: "1920s (Protected 1993)"
    },
    description: "The gold standard of French baking. A lean, long loaf with a creamy, open crumb and a crispy, singing crust. Strictly regulated by the 'Décret Pain' of 1993.",
    history: "While long breads existed earlier, the modern baguette crystallized in 1920s Paris. The 1993 Decree protected artisanal methods against industrialization.",
    difficulty: "Hard",
    fermentationType: "direct",

    technicalProfile: {
        hydration: [65, 75],
        salt: [1.8, 2.0],
        oil: [0, 0],
        sugar: [0, 0],
        flourStrength: "T65 / W240-280",
        ovenTemp: [240, 260],
        recommendedUse: ["Jambon-Beurre", "Table Bread"],
        difficulty: "Hard",
        fermentationSteps: [
            "Autolyse 30-60m. [Science: Hydrates flour fully and activates protease enzymes to relax gluten before mixing, essnetial for extensibility.]",
            "Mix to Windowpane. [Science: Requires well-developed gluten to hold gas during the immense expansion in the oven.]",
            "Bulk Ferment with Folds. [Science: Redistributes yeast and regulates temperature while building structure.]",
            "Shape Cylinders. [Science: Requires 'iron hand in velvet glove' to lengthen without degassing.]"
        ]
    },
    tags: ["french", "lean", "steam-bake", "classic"],
    pairings: {
        canonical: ["Butter", "Brie", "Pâté"],
        modern: ["Avocado"],
        regional: ["Wine"]
    },
    watchouts: [
        "No Ears (Grigne): Bad scoring angle or lack of steam. Steam is mandatory.",
        "Tight crumb: Overmixed or degassed during shaping.",
        "Pale crust: Underbaked. Tradition MUST be 'Bien cuit' (well cooked)."
    ],
    notes: [
        "The 1993 Decree forbids additives. Only flour, water, salt, yeast/levain.",
        "Poolish or cold ferment is often used to boost flavor in this lean dough.",
        "Steam gelatinizes surface starch, creating the shine and crispness."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Décret n°93-1074" }, { source: "Steven Kaplan" }],
    images: {
        hero: "/images/styles/baguette_hero.jpg",
        dough: "/images/styles/baguette_dough.jpg",
        crumb: "/images/styles/baguette_crumb.jpg"
    }
};

const germanPretzel: DoughStyleDefinition = {
    id: "german_pretzel_laugenbrezel",
    name: "Laugenbrezel (German Pretzel)",
    category: "bread",
    recipeStyle: RecipeStyle.PRETZEL,
    origin: {
        country: "Germany",
        region: "Swabia / Bavaria",
        period: "Middle Ages"
    },
    description: "The iconic knotted bread dipped in lye (sodium hydroxide) solution before baking to create a deep mahogany, shiny skin and distinct alkaline flavor.",
    history: "Monastic origins representing arms crossed in prayer. The lye bath was likely an accidental discovery but became the defining characteristic.",
    difficulty: "Hard",
    fermentationType: "direct",

    technicalProfile: {
        hydration: [50, 55],
        salt: [2.0, 2.5],
        oil: [2, 4], // Butter or Lard
        sugar: [0, 1], // Malt
        flourStrength: "Type 550 / W240",
        ovenTemp: [220, 240],
        recommendedUse: ["Beer Snack", "Weisswurst accompaniment"],
        difficulty: "Hard",
        fermentationSteps: [
            "Mix stiff dough. [Science: Low hydration holds the intricate knot shape.]",
            "Short bulk. [Science: Over-fermentation leads to puffiness that ruins the definition.]",
            "Shape and Skin Formation. [Science: Uncovered rest allows a skin to form, which reacts better with the Lye.]",
            "Lye Dip (NaOH). [Science: The Maillard reaction goes into overdrive at alkaline pH, creating the deep brown color instantly.]"
        ]
    },
    tags: ["alkaline", "pretzel", "germany", "snack"],
    pairings: {
        canonical: ["Weisswurst", "Sweet Mustard", "Helles Beer"],
        modern: ["Cheese dip"],
        regional: ["Obatzda (Cheese spread)"]
    },
    watchouts: [
        "Dull Color: Used baking soda instead of Lye. Soda works but won't give the true 'Laugen' finish.",
        "Chemical Burn: Lye is caustic! Wear gloves and goggles.",
        "Blisters: Dough meant to be smooth? Don't ferment too long."
    ],
    notes: [
        "The fat (butter/lard) keeps the crumb soft despite the stiff dough.",
        "The 'belly' is slashed to allow controlled expansion.",
        "Salt is sprinkled AFTER dipping, before baking."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Bavarian Bakers Guild" }],
    images: {
        hero: "/images/styles/pretzel_hero.jpg",
        dough: "/images/styles/pretzel_dough.jpg",
        crumb: "/images/styles/pretzel_crumb.jpg"
    }
};

const briocheFrancaise: DoughStyleDefinition = {
    id: "brioche_francaise_aop",
    name: "Brioche Française AOP",
    category: "enriched_bread",
    recipeStyle: RecipeStyle.BRIOCHE,
    origin: {
        country: "France",
        region: "Normandy",
        period: "17th Century"
    },
    description: "The queen of enriched breads. Contains >50% butter to flour weight. Ethereal, shreddable crumb encased in a thin, golden crust.",
    history: "Normandy is famous for butter. Brioche evolved from a festive church bread to a daily luxury. 'Brioche à tête' is the classic shape.",
    difficulty: "Expert",
    fermentationType: "cold",

    technicalProfile: {
        hydration: [55, 60], // Milk/Eggs
        salt: [2.0, 2.2],
        oil: [50, 60], // Butter!
        sugar: [10, 15],
        flourStrength: "W350+ (High Protein)",
        ovenTemp: [170, 190],
        recommendedUse: ["Burger Buns", "French Toast", "Breakfast"],
        difficulty: "Expert",
        fermentationSteps: [
            "Intensive Mix (Cold). [Science: Friction heats dough rapidly; starting cold prevents butter melting before emulsification.]",
            "Add Butter Slowly. [Science: Emulsifying fat into water-based dough requires patience; rushing breaks the emulsion (greasy dough).]",
            "Cold Retard 12h+. [Science: Solidifies the butter, allowing the dough to be handled and shaped without turning into soup.]"
        ]
    },
    tags: ["butter", "enriched", "french", "pastry"],
    pairings: {
        canonical: ["Jam", "Coffee"],
        modern: ["Foie Gras"],
        regional: ["Pralines (Lyon)"]
    },
    watchouts: [
        "Leaking Butter: Dough got too hot (>24°C) during mix. Chill everything.",
        "Dense crumb: Underproofed. Enriched dough takes a LONG time to rise (osmotic pressure on yeast).",
        "Collapse: Weak flour. You need massive protein to hold 50% fat."
    ],
    notes: [
        "Osmotolerant yeast (Gold label) is recommended for high sugar/fat.",
        "Egg wash is mandatory for the gloss.",
        "Can be used for savory (Saucisson Brioché) or sweet."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "INRA Science of Brioche" }],
    images: {
        hero: "/images/styles/brioche_hero.jpg",
        dough: "/images/styles/brioche_dough.jpg",
        crumb: "/images/styles/brioche_crumb.jpg"
    }
};

const painCampagne: DoughStyleDefinition = {
    id: "pain_de_campagne",
    name: "Pain de Campagne",
    category: "bread",
    recipeStyle: RecipeStyle.COUNTRY_LOAF,
    origin: {
        country: "France",
        region: "Nationwide",
        period: "Ancient"
    },
    description: "French Country Bread. A large sourdough boule made with wheat and a touch of rye (5-15%). Thick crust, greyish crumb, long shelf life.",
    history: "The communal village oven bread. Families baked massive loaves once a week. The rye kept it moist and the acidity prevented spoilage.",
    difficulty: "Medium",
    fermentationType: "levain",

    technicalProfile: {
        hydration: [70, 75],
        salt: [1.8, 2.0],
        oil: [0, 0],
        sugar: [0, 0],
        flourStrength: "T80 (High Extraction)",
        ovenTemp: [230, 250],
        recommendedUse: ["Tartines", "Cheese Board", "Soup"],
        difficulty: "Medium",
        fermentationSteps: [
            "Mix with Sourdough & Rye. [Science: Rye contains pentosans which absorb water and keep the crumb moist for days.]",
            "Bulk Ferment. [Science: Long bulk develops the complex acetic/lactic flavor profile.]",
            "Bake Dark. [Science: Thick crust acts as a barrier against staling.]"
        ]
    },
    tags: ["sourdough", "rye", "rustic", "french"],
    pairings: {
        canonical: ["Charcuterie", "Camembert"],
        modern: ["Avocado Toast"],
        regional: ["Rillettes"]
    },
    watchouts: [
        "Gummy rye: 100% rye is tricky, but 10% is easy. Don't overmix rye.",
        "Too Sour: Levain Maintenance. Feed it frequently if you want mild flavor.",
        "Flat loaf: Overproofed. Sourdough degrades gluten over time."
    ],
    notes: [
        "T80 flour (High Extraction) is traditional, containing some bran but mostly endosperm.",
        "Often dusted with flour before scoring for contrast.",
        "The signature 'Polka' score is a grid pattern."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Poilâne Heritage" }],
    images: {
        hero: "/images/styles/campagne_hero.jpg",
        dough: "/images/styles/campagne_dough.jpg",
        crumb: "/images/styles/campagne_crumb.jpg"
    }
};

const danishRye: DoughStyleDefinition = {
    id: "rugbrod_danish",
    name: "Rugbrød (Danish Rye)",
    category: "bread",
    recipeStyle: RecipeStyle.RYE,
    origin: {
        country: "Denmark",
        region: "Nationwide",
        period: "Viking Age"
    },
    description: "Dense, dark, seed-packed rye bread. Baked in a rectangular tin. The foundation of Smørrebrød.",
    history: "Rye grows well in cold wet climates where wheat fails. It became the staple of Scandinavia.",
    difficulty: "Medium",
    fermentationType: "levain",

    technicalProfile: {
        hydration: [80, 90], // High due to rye absorption
        salt: [1.8, 2.2],
        oil: [0, 2],
        sugar: [1, 3], // Malt/Molasses
        flourStrength: "Rye Flour (Low Gluten)",
        ovenTemp: [180, 200], // Low and slow
        recommendedUse: ["Smørrebrød", "Liver Paste"],
        difficulty: "Medium",
        fermentationSteps: [
            "Sourdough essential. [Science: Rye is high in amylase enzymes. Without the acidity of sourdough to inhibit them, the crumb turns into starch paste (starch attack).]",
            "Soak seeds. [Science: Prevents seeds from stealing water from the dough crumb.]",
            "No Kneading. [Science: Rye has pentosans, not gluten. Kneading makes a sticky mess and does nothing useful.]"
        ]
    },
    tags: ["rye", "nordic", "seeds", "healthy"],
    pairings: {
        canonical: ["Pickled Herring", "Leverpostej"],
        modern: ["Hummus"],
        regional: ["Curry Salad"]
    },
    watchouts: [
        "Gumminess: Baked too fast or cut too warm. Rye needs to set for 24h before slicing.",
        "Flying crust: Top separates from crumb. Proofed too fast.",
        "Brick-like: Leavening failure. Verify starter activity."
    ],
    notes: [
        "Must be sliced thin.",
        "Often uses cracked rye kernels (kerner) for texture.",
        "Keeps for weeks due to acidity and rye moisture retention."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Nordic Food Lab" }],
    images: {
        hero: "/images/styles/rugbrod_hero.jpg",
        dough: "/images/styles/rugbrod_dough.jpg",
        crumb: "/images/styles/rugbrod_crumb.jpg"
    }
};

export const europeStyles: DoughStyleDefinition[] = [
    baguetteTradition,
    germanPretzel,
    briocheFrancaise,
    painCampagne,
    danishRye
];
