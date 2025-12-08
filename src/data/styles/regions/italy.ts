import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';

const neapolitan: DoughStyleDefinition = {
    id: "neapolitan_stg_classic",
    name: "Pizza Napoletana STG",
    category: "pizza",
    recipeStyle: RecipeStyle.NEAPOLITAN,
    origin: {
        country: "Italy",
        region: "Campania (Napoli)",
        period: "18th Century (Codified 1984)"
    },
    description: "The UNESCO-protected Verace Pizza Napoletana. Soft, elastic, and foldable ('a libretto') with a raised cornicione and leopard spotting. Baked in 60-90 seconds at blistering temperatures.",
    history: "Born in the streets of Naples as food for the poor. The Marinara (1734) and Margherita (1889) are the pillars. Codified by the AVPN to protect the artisanal tradition.",
    difficulty: "Expert",
    fermentationType: "direct",
    technicalProfile: {
        hydration: [58, 62.5],
        salt: [2.5, 3.0],
        oil: [0, 0],
        sugar: [0, 0],
        flourStrength: "W280-320",
        ovenTemp: [430, 485],
        recommendedUse: ["Margherita STG", "Marinara STG"],
        difficulty: "Expert",
        fermentationSteps: [
            "Mix ingredients to reach a final dough temperature of 23-25°C. [Science: Controls yeast activity rate and gluten consistency.]",
            "Bulk fermentation (Puntata) for 2 hours at 23°C. [Science: Allows initial yeast multiplication and organic acid production without excessive gas retention.]",
            "Ball (Staglio) and maturate (Appretto) for 8-24 hours at 18-21°C. [Science: Long relaxation degrades gluten slightly via protease enzymes, ensuring extensibility (low elasticity) for easy opening.]"
        ]
    },
    tags: ["stg", "avpn", "wood-fired", "high-heat"],
    pairings: {
        canonical: ["San Marzano DOP", "Mozzarella di Bufala", "Fresh Basil"],
        modern: ["Yellow Tomato", "Provola Affumicata"],
        regional: ["Friarielli", "Sausage"]
    },
    watchouts: [
        "Oven too cold (<400°C) results in a tough, dry crust (biscuity).",
        "Over-kneading creates a rubbery crumb that fights back during opening.",
        "Dough too cold (<15°C) will bubble aggressively (measles) rather than spotted char."
    ],
    notes: [
        "Strictly direct dough method (no preferments) per STG rules.",
        "Requires 0% fat to ensure the crust remains soft only through rapid baking, not shortening agents.",
        "Cornicione structure relies on steam expansion before crust sets (oven spring)."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "AVPN Regulations" }, { source: "Modernist Pizza" }],
    images: {
        hero: "/images/styles/napoli_hero.jpg",
        dough: "/images/styles/napoli_dough.jpg",
        crumb: "/images/styles/napoli_crumb.jpg"
    }
};

const tegliaRomana: DoughStyleDefinition = {
    id: "pizza_teglia_romana_v2",
    name: "Pizza in Teglia Romana",
    category: "pizza",
    recipeStyle: RecipeStyle.ROMAN,
    origin: {
        country: "Italy",
        region: "Lazio (Rome)",
        period: "1980s (Modern Revolution)"
    },
    description: "High-hydration pan pizza known for its spectacular open crumb (alveoli) and crispy bottom. Light, airy, and digestible.",
    history: "Revolutionized by masters like Angelo Iezzi and Gabriele Bonci, moving away from dense bakery pizza to a high-hydration, cold-ferment artisanal product.",
    difficulty: "Hard",
    fermentationType: "preferment",
    technicalProfile: {
        hydration: [75, 85],
        salt: [2.2, 2.5],
        oil: [2, 3],
        sugar: [0, 1],
        flourStrength: "W320-350",
        ovenTemp: [250, 280],
        recommendedUse: ["Potato & Rosemary", "Burrata & Mortadella"],
        difficulty: "Hard",
        fermentationSteps: [
            "Mix flour and 70% water (autolyse) for improved extensibility. [Science: Fully hydrates proteins and shortens mix time, preventing oxidation.]",
            "Add yeast/salt and bassiinage (remaining water) slowly. [Science: Gradual water addition prevents gluten network collapse in high hydration doughs.]",
            "Cold bulk fermentation (4°C) for 24-48h. [Science: Slows yeast but allows amylase enzymes to break down starches into sugars for crust color and flavor.]",
            "Final proof in pan (3-4h). [Science: Relaxes gluten for final volume and ensures bottom crispness.]"
        ]
    },
    tags: ["high-hydration", "roman", "pan", "alveoli"],
    pairings: {
        canonical: ["Potato slices", "Rosemary", "Mozzarella"],
        modern: ["Pumpkin cream", "Guanciale"],
        regional: ["Zucchini flowers", "Anchovies"]
    },
    watchouts: [
        "Under-baking the bottom: Ensure direct deck contact or use bottom rack.",
        "Degassing during stretch: Use fingertips gently to preserve air bubbles.",
        "Over-mixing: Breaks the delicate gluten structure needed for 80% water."
    ],
    notes: [
        "Requires strong flour (W320+) to hold the water structure.",
        "Olive oil in the dough aids extensibility.",
        "Reheated slices ('scrocchiarella') regain crispness perfectly."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Bonci Technical Notes" }],
    images: {
        hero: "/images/styles/teglia_hero.jpg",
        dough: "/images/styles/teglia_dough.jpg",
        crumb: "/images/styles/teglia_crumb.jpg"
    }
};

const tondaRomana: DoughStyleDefinition = {
    id: "pizza_tonda_romana_v2",
    name: "Pizza Tonda Romana",
    category: "pizza",
    recipeStyle: RecipeStyle.ROMANA_TONDA,
    origin: {
        country: "Italy",
        region: "Lazio (Rome)",
        period: "Post-WWII"
    },
    description: "The 'Scrocchiarella' - ultra-thin, cracker-like, and crispy. Rolled out with a pin to remove gas, ensuring no raised cornicione.",
    history: "The traditional pizzeria pizza of Rome, contrasting drastically with the soft Neapolitan style. Designed to hold heavy loads of ingredients without collapsing.",
    difficulty: "Medium",
    fermentationType: "direct",
    technicalProfile: {
        hydration: [55, 58],
        salt: [2.0, 2.5],
        oil: [2, 4],
        sugar: [0, 1],
        flourStrength: "W260-290",
        ovenTemp: [300, 340],
        recommendedUse: ["Capricciosa", "Fungi", "Prosciutto"],
        difficulty: "Medium",
        fermentationSteps: [
            "Mix to a stiff, smooth dough (55-58% hydration). [Science: Low water content is critical for inhibiting gluten puff and ensuring crispness.]",
            "Short bulk fermentation (2-4h). [Science: Sufficient for flavor but limits gas production.]",
            "Maturate balls 24h at 4°C. [Science: Relaxes the tight dough to allow rolling without shrinkage.]",
            "Roll flat with rolling pin. [Science: Mechanically crushes alveoli to prevent rising/puffing.]"
        ]
    },
    tags: ["thin", "crispy", "rolling-pin", "scrocchiarella"],
    pairings: {
        canonical: ["Artichokes", "Olives", "Egg", "Prosciutto (Capricciosa)"],
        modern: ["Cacio e Pepe cream"],
        regional: ["Suppli on the side"]
    },
    watchouts: [
        "Dough retraction: If it shrinks when rolling, it needs more rest (protease action).",
        "Soggy center: Sauce too watery for thin crust.",
        "Burning: Due to low hydration, it browns fast; watch the oven."
    ],
    notes: [
        "Seed oil is often used instead of olive oil for a crunchier texture.",
        "Baked longer and lower than Neapolitan (3 mins @ 320°C).",
        "Must be eaten immediately to retain the 'scrocchio' (crunch)."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Roman Pizza Traditions" }],
    images: {
        hero: "/images/styles/tonda_hero.jpg",
        dough: "/images/styles/tonda_dough.jpg",
        crumb: "/images/styles/tonda_crumb.jpg"
    }
};

const focacciaGenovese: DoughStyleDefinition = {
    id: "focaccia_genovese_classica_v2",
    name: "Focaccia Genovese",
    category: "flatbread",
    recipeStyle: RecipeStyle.FOCACCIA,
    origin: {
        country: "Italy",
        region: "Liguria (Genoa)",
        period: "16th Century"
    },
    description: "The gold standard of focaccia. Not just bread with oil, but a precise emulsion-baked flatbread with signature 'omphalos' (eye-holes) filled with brine.",
    history: "A breakfast staple in Genoa, traditionally eaten dipped in cappuccino. Protected by a Slow Food presidium.",
    difficulty: "Medium",
    fermentationType: "direct",
    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.5],
        oil: [10, 15],
        sugar: [1, 2],
        flourStrength: "W260-280",
        ovenTemp: [220, 240],
        recommendedUse: ["Plain (Classica)", "Onion", "Sage"],
        difficulty: "Medium",
        fermentationSteps: [
            "Mix dough with minimal development. [Science: Undermixing preserves carotenoids (color) and prevents tough, chewy gluten.]",
            "First rise 1.5h. [Science: Establishes fermentation structure.]",
            "Roll into pan and proof for 30m. [Science: Relaxes gluten for dimpling.]",
            "Pour Brine (Salamoia) and dimple vigorously. [Science: The oil/water emulsion prevents crust formation in the holes, keeping the crumb creamy.]"
        ]
    },
    tags: ["focaccia", "high-oil", "brine", "genoa"],
    pairings: {
        canonical: ["Coarse sea salt", "EVOO"],
        modern: ["Stracchino cheese"],
        regional: ["Onions (Cipolla)"]
    },
    watchouts: [
        "Dry surface: Not enough brine. The dough should essentially boil in oil/water.",
        "Chewy texture: Flour too strong (>W300) or overmixed.",
        "Bottom burning: Pan too thin; use aluminum or blue steel."
    ],
    notes: [
        "The brine is 1 part water to 1 part oil mixed with salt.",
        "Malt or sugar aids browning at the lower baking temp (230°C).",
        "Total preparation time is relatively short (4-5 hours)."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Consorzio Focaccia Genovese" }],
    images: {
        hero: "/images/styles/focaccia_hero.jpg",
        dough: "/images/styles/focaccia_dough.jpg",
        crumb: "/images/styles/focaccia_crumb.jpg"
    }
};

const sicilianSfincione: DoughStyleDefinition = {
    id: "sicilian_sfincione_v2",
    name: "Pizza Siciliana (Sfincione)",
    category: "pizza",
    recipeStyle: RecipeStyle.SICILIANA,
    origin: {
        country: "Italy",
        region: "Sicily (Palermo)",
        period: "19th Century"
    },
    description: "The original 'sponge' pizza. Thick, soft, and topped with a rich sauce of onions, anchovies, and caciocavallo cheese, topped with breadcrumbs.",
    history: "The ancestor of the American 'Sicilian Slice'. Traditionally served during holidays. The name comes from 'spongia' (sponge).",
    difficulty: "Medium",
    fermentationType: "direct",
    technicalProfile: {
        hydration: [65, 70],
        salt: [2.0, 2.5],
        oil: [2, 4],
        sugar: [1, 2],
        flourStrength: "W280-300",
        ovenTemp: [220, 240],
        recommendedUse: ["Sfincione Palermitano", "Sfincione Bagherese"],
        difficulty: "Medium",
        fermentationSteps: [
            "Mix intense dough. [Science: Strong gluten development needed to hold the heavy toppings and thick structure.]",
            "Bulk ferment 2h. [Science: Generates gas for the sponge structure.]",
            "Pan proof 2h. [Science: Allows the dough to double in height in the pan.]",
            "Top and bake. [Science: Breadcrumbs on top protect the sauce from drying out during the long bake.]"
        ]
    },
    tags: ["thick", "soft", "sicilian", "onion"],
    pairings: {
        canonical: ["Caciocavallo", "Anchovy", "Onion stew", "Breadcrumbs"],
        modern: ["Ricotta salata"],
        regional: ["Oregano"]
    },
    watchouts: [
        "Gummy layer: Sauce too wet or applied too early. Cook the onion sauce down significantly.",
        "Dense crumb: Underproofed in the pan.",
        "Soggy bottom: Not enough oil in the pan."
    ],
    notes: [
        "Cheese (Caciocavallo) often goes UNDER the sauce to prevent burning.",
        "The topping is more of a stew (onions, anchovies, tomato) than a raw sauce.",
        "Breadcrumbs absorb moisture and add texture."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Slow Food Sicily" }],
    images: {
        hero: "/images/styles/sfincione_hero.jpg",
        dough: "/images/styles/sfincione_dough.jpg",
        crumb: "/images/styles/sfincione_crumb.jpg"
    }
};

const paneToscano: DoughStyleDefinition = {
    id: "pane_toscano_dop_v2",
    name: "Pane Toscano DOP (Sciocco)",
    category: "bread",
    recipeStyle: RecipeStyle.COUNTRY_LOAF,
    origin: {
        country: "Italy",
        region: "Tuscany",
        period: "Middle Ages"
    },
    description: "The famous salt-less bread of Tuscany. Crusty, bland on its own but perfect for bold Tuscan foods (salty hams, stews).",
    history: "Legend says Pisans blocked salt shipments to Florence in the 12th century, forcing bakers to adapt. The lack of salt modifies the fermentation chemistry significantly.",
    difficulty: "Hard",
    fermentationType: "preferment",
    technicalProfile: {
        hydration: [60, 65],
        salt: [0, 0],
        oil: [0, 0],
        sugar: [0, 0],
        flourStrength: "W240-260",
        ovenTemp: [220, 240],
        recommendedUse: ["Bruschetta", "Ribollita", "Panzanella"],
        difficulty: "Hard",
        fermentationSteps: [
            "Prepare Biga (stiff preferment) 16h. [Science: Biga provides acidity and strength, crucial since salt (a gluten strengthener) is absent.]",
            "Mix final dough. [Science: Fermentation happens much faster without salt to inhibit yeast osmotic pressure.]",
            "Bulk ferment 1-1.5h. [Science: Short bulk due to rapid yeast activity in salt-free environment.]",
            "Bake with steam. [Science: Steam gelatinizes surface starch for crust color, which is harder to achieve without salt.]"
        ]
    },
    tags: ["salt-free", "tuscany", "dop", "rustic"],
    pairings: {
        canonical: ["Prosciutto Toscano (Salty)", "Liver Pâté"],
        modern: ["Kale stew"],
        regional: ["Olive oil"]
    },
    watchouts: [
        "Overproofing: Without salt, yeast runs wild. Watch closely.",
        "Pale Crust: Lack of salt reduces Maillard reaction. Bake dark.",
        "Collapse: Gluten is weaker without salt. Handle gently."
    ],
    notes: [
        "The flavor profile is neutral/sweet, designed not to compete with food.",
        "Stales quickly (no salt to hold moisture), hence its use in soups/salads (Ribollita).",
        "DOP regulations specify Type '0' flour with cereal germ."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Pane Toscano DOP Regulations" }],
    images: {
        hero: "/images/styles/toscano_hero.jpg",
        dough: "/images/styles/toscano_dough.jpg",
        crumb: "/images/styles/toscano_crumb.jpg"
    }
};

const ciabattaClassic: DoughStyleDefinition = {
    id: "ciabatta_classic_v2",
    name: "Ciabatta (High Hydration)",
    category: "bread",
    recipeStyle: RecipeStyle.CIABATTA,
    origin: {
        country: "Italy",
        region: "Veneto",
        period: "1982"
    },
    description: "The 'slipper' bread invented to compete with the baguette. Extremely high hydration, thin crispy crust, and massive irregular holes.",
    history: "Created by Arnaldo Cavallari in 1982 using high-protein flour and varying the hydration to create a purely Italian product with industrial handling capability but artisanal quality.",
    difficulty: "Expert",
    fermentationType: "preferment",
    technicalProfile: {
        hydration: [75, 85],
        salt: [2.0, 2.2],
        oil: [0, 2],
        sugar: [0, 1],
        flourStrength: "W340-380",
        ovenTemp: [230, 250],
        recommendedUse: ["Panini", "Table Bread"],
        difficulty: "Expert",
        fermentationSteps: [
            "Prepare Biga (50% of flour) 18h. [Science: High acid load strengthens gluten structure for the high water content.]",
            "Mix with 'Double Hydration' method. [Science: Adding water in two stages prevents the gluten from washing out before it forms.]",
            "Bulk ferment with Coil Folds. [Science: Folds align gluten strands without degassing, trapping air.]",
            "Divide and proof on floured couche. [Science: Handling must be gentle to preserve the large gas bubbles formed during bulk.]"
        ]
    },
    tags: ["high-hydration", "open-crumb", "veneto", "modern-classic"],
    pairings: {
        canonical: ["Salami", "Provolone"],
        modern: ["Avocado toast"],
        regional: ["Sopressa Veneta"]
    },
    watchouts: [
        "Flat loaf: Weak flour or overproofed.",
        "Dense crumb: Degassed during shaping. Cut, don't shape.",
        "Gummy interior: Underbaked. High water needs a long forceful bake."
    ],
    notes: [
        "True Ciabatta is not shaped; it is cut from a long fermented strip.",
        "Requires steam for the first 10-15 minutes.",
        "Flour must have high protein (14%+) to support 80%+ water."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Cavallari Archives" }, { source: "Modernist Bread" }],
    images: {
        hero: "/images/styles/ciabatta_hero.jpg",
        dough: "/images/styles/ciabatta_dough.jpg",
        crumb: "/images/styles/ciabatta_crumb.jpg"
    }
};

export const italyStyles: DoughStyleDefinition[] = [
    neapolitan,
    tegliaRomana,
    tondaRomana,
    focacciaGenovese,
    sicilianSfincione,
    paneToscano,
    ciabattaClassic
];
