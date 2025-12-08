import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';

const nycSlice: DoughStyleDefinition = {
    id: "nyc_slice_shop",
    name: "New York Slice Shop",
    category: "pizza",
    recipeStyle: RecipeStyle.NEW_YORK,
    origin: {
        country: "USA",
        region: "New York City",
        period: "Early 20th Century"
    },
    description: "The iconic street slice. Large (18-20 inch), foldable, crispy yet pliable. Characterized by a symbiotic relationship between the cheese oil and the sauce.",
    history: "Evolved from Neapolitan immigrants adapting to coal ovens and high-gluten North American flour. The 'gas deck' era defined the modern street slice.",
    difficulty: "Medium",
    fermentationType: "cold",

    technicalProfile: {
        hydration: [62, 65],
        salt: [2.0, 2.5],
        oil: [1, 3],
        sugar: [1, 2],
        flourStrength: "W360-400 (High Gluten)",
        ovenTemp: [280, 300],
        recommendedUse: ["Cheese Slice", "Pepperoni"],
        difficulty: "Medium",
        fermentationSteps: [
            "Intensive mix to windowpane. [Science: High protein flour (14%) requires significant mechanical energy to align gluten for the thin stretch.]",
            "Bulk ferment 1h. [Science: Jumpstarts yeast activity before cold shock.]",
            "Cold Maturation 24-72h. [Science: Creates micro-blisters on the crust via organic acid production and prevents over-browning by consuming excess sugars.]",
            "Warm up 2h before bake. [Science: Cold dough in a hot oven bubbles aggressively; tempering ensures even oven spring.]"
        ]
    },
    tags: ["nyc", "slice", "deck-oven", "foldable"],
    pairings: {
        canonical: ["Low Moisture Mozzarella", "Oregano", "Garlic Powder"],
        modern: ["Vodka Sauce"],
        regional: ["Garlic Knots (from scraps)"]
    },
    watchouts: [
        "Gummy layer: Sauce applied too cold or dough not baked long enough.",
        "Excessive chew: Flour too strong without enough oil to tenderize.",
        "Lack of browning: Sugar omitted in a <300°C oven (Maillard needs help at lower temps)."
    ],
    notes: [
        "Oil (2-3%) is crucial for tenderizing the high-gluten flour, allowing the 'fold' without cracking.",
        "Sugar effectively feeds yeast during long cold ferments and aids crust coloration.",
        "Traditionally baked on screens or directly on deck stones."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Scott Wiener's Pizza History" }, { source: "Modernist Pizza" }],
    images: {
        hero: "/images/styles/nyc_hero.jpg",
        dough: "/images/styles/nyc_dough.jpg",
        crumb: "/images/styles/nyc_crumb.jpg"
    }
};

const detroitStyle: DoughStyleDefinition = {
    id: "detroit_style_classic",
    name: "Detroit Style",
    category: "pizza",
    recipeStyle: RecipeStyle.DETROIT,
    origin: {
        country: "USA",
        region: "Detroit, Michigan",
        period: "1946"
    },
    description: "Deep dish rectangular pizza baked in blue steel automotive parts pans. Famous for the 'frico'—a caramelized cheese crown around the edges.",
    history: "Created at Buddy's Rendezvous. Using industrial steel pans meant for carrying auto parts created a unique conduction heat that fried the crust in oil/fat.",
    difficulty: "Medium",
    fermentationType: "direct",

    technicalProfile: {
        hydration: [70, 75],
        salt: [2.0, 2.5],
        oil: [1, 2],
        sugar: [0, 1],
        flourStrength: "W300-320",
        ovenTemp: [260, 290],
        recommendedUse: ["Red Top (Sauce on top)", "Pepperoni"],
        difficulty: "Medium",
        fermentationSteps: [
            "Mix to moderate development. [Science: Full windowpane not needed as the dough is supported by the pan.]",
            "Bulk ferment 1h. [Science: Initial gas generation.]",
            "Pan proof 2-3h. [Science: The critical step. Dough must relax completely to fill corners and aerate into a sponge-like crumb.]"
        ]
    },
    tags: ["pan", "frico", "deep-dish", "detroit"],
    pairings: {
        canonical: ["Wisconsin Brick Cheese", "Tomato Sauce (applied post-bake)"],
        modern: ["Hot Honey"],
        regional: ["Coney Island Hot Dog Pizza"]
    },
    watchouts: [
        "Soggy center: Sauce applied before bake sinks into the proofed dough. Apply in stripes or post-bake.",
        "No Frico: Cheese did not touch the pan walls, or pan was not seasoned.",
        "Dense crumb: Rushed pan proof. It needs to feel like a memory foam pillow."
    ],
    notes: [
        "The unique Brick Cheese has a high fat content that fries the crust edge.",
        "Hydration must be high (70%+) to ensure the thick crust remains light, not bread-like.",
        "Sauce on top prevents the 'gum line' from forming under the cheese."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Buddy's Archives" }],
    images: {
        hero: "/images/styles/detroit_hero.jpg",
        dough: "/images/styles/detroit_dough.jpg",
        crumb: "/images/styles/detroit_crumb.jpg"
    }
};

const chicagoDeepDish: DoughStyleDefinition = {
    id: "chicago_deep_dish",
    name: "Chicago Deep Dish",
    category: "pizza",
    recipeStyle: RecipeStyle.CHICAGO_DEEP_DISH,
    origin: {
        country: "USA",
        region: "Chicago, Illinois",
        period: "1943"
    },
    description: "A casserole-like pizza with high sides, eaten with a knife and fork. The crust is biscuit-like, short, and flaky due to high oil/fat content.",
    history: "Invented at Pizzeria Uno. It inverted the pizza structure: Cheese on bottom, toppings middle, sauce on top to prevent burning during the long bake.",
    difficulty: "Medium",
    fermentationType: "direct",

    technicalProfile: {
        hydration: [50, 58],
        salt: [1.5, 2.0],
        oil: [15, 25], // Often Corn Oil or Butter
        sugar: [1, 2],
        flourStrength: "W240-280 (AP/Pastry blend)",
        ovenTemp: [220, 230],
        recommendedUse: ["Sausage Patty", "Spinach"],
        difficulty: "Medium",
        fermentationSteps: [
            "Mix for short time (Undermixed). [Science: Minimizing gluten development ensures a 'short', biscuit-like texture rather than chewy bread.]",
            "Bulk ferment 1-2h. [Science: Flavor development only; gas retention is secondary to texture.]",
            "Laminate/Press into pan. [Science: No elasticity required; the dough should mold like pie crust.]"
        ]
    },
    tags: ["casserole", "biscuit-crust", "corn-oil"],
    pairings: {
        canonical: ["Italian Sausage Layer", "Chunky Tomato Sauce"],
        modern: ["Giardiniera"],
        regional: ["Butter Crust (Lou's style)"]
    },
    watchouts: [
        "Soggy bottom: Sauce drains liquid. Sauce must be thick/chunky and placed ON TOP of cheese.",
        "Burned Crust: Bake temp too high (>230°C). Deep dish needs a 'low and slow' bake (30-40 mins).",
        "Toughness: Overmixing developed gluten. Treat it like pie dough."
    ],
    notes: [
        "Corn oil is traditional for the specific flavor and 'fried' texture.",
        "Some variations laminate butter for flakiness.",
        "The 'cheese seal' on the dough bottom prevents moisture penetration."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Pizzeria Uno History" }],
    images: {
        hero: "/images/styles/chicago_hero.jpg",
        dough: "/images/styles/chicago_dough.jpg",
        crumb: "/images/styles/chicago_crumb.jpg"
    }
};

const paoFrancesABNT: DoughStyleDefinition = {
    id: "pao_frances_brazil",
    name: "Pão Francês (Brasileiro ABNT)",
    category: "bread",
    recipeStyle: RecipeStyle.PAO_FRANCES,
    origin: {
        country: "Brazil",
        region: "Nationwide",
        period: "20th Century"
    },
    description: "The daily bread of Brazil. A short, oval roll with a thin, crackly golden crust and a light, airy white crumb. Regulated by ABNT NBR 16170.",
    history: "Inspired by French baguettes but adapted to Brazilian climate and ingredients. Contains sugar and fat to assist fermentation and shelf life in tropical heat.",
    difficulty: "Medium",
    fermentationType: "direct",

    technicalProfile: {
        hydration: [58, 62],
        salt: [2.0, 2.2],
        oil: [1, 2], // Often lard or shortening
        sugar: [1, 2],
        flourStrength: "W260-280",
        ovenTemp: [220, 250],
        recommendedUse: ["Misto Quente", "Com Manteiga (Na Chapa)"],
        difficulty: "Medium",
        fermentationSteps: [
            "Intensive Mix. [Science: Full gluten development required for the airy, expanded volume.]",
            "Bulk ferment. [Science: Short bulk, relying on final proof for volume.]",
            "Steam Bake. [Science: Essential for the 'Craquelado' (crackly) crust. Without steam, it's just a bun.]"
        ]
    },
    tags: ["brazil", "roll", "daily-bread", "abnt"],
    pairings: {
        canonical: ["Butter", "Catupiry", "Mortadella"],
        modern: ["Pão na Chapa"],
        regional: ["Média (with milky coffee)"]
    },
    watchouts: [
        "No Crackles ('Pestana' fails): Not enough steam or dough too dry.",
        "Dense crumb: Poor shaping or underproofed.",
        "Thick crust: Oven temp too low, drying out the shell."
    ],
    notes: [
        "ABNT Standard requires a specific specific volume and crust color.",
        "Additives (oxidizers) are common in professional bakeries for impossible volume; home bakers need perfect fermentation.",
        "The slash (pestana) is functional, controlling expansion."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "ABNT NBR 16170" }],
    images: {
        hero: "/images/styles/pao_frances_hero.jpg",
        dough: "/images/styles/pao_frances_dough.jpg",
        crumb: "/images/styles/pao_frances_crumb.jpg"
    }
};

const sfSourdough: DoughStyleDefinition = {
    id: "sf_sourdough",
    name: "San Francisco Sourdough",
    category: "bread",
    recipeStyle: RecipeStyle.SOURDOUGH,
    origin: {
        country: "USA",
        region: "San Francisco, CA",
        period: "1849 (Gold Rush)"
    },
    description: "The legendary West Coast sourdough. Extremely sour (acetic), thick blistered crust, and chewy crumb. Famous for the Lactobacillus sanfranciscensis bacteria.",
    history: "Boudin Bakery (1849) kept the 'mother' alive since the Gold Rush. The cool, foggy climate promotes acetic acid production over lactic acid.",
    difficulty: "Expert",
    fermentationType: "levain",

    technicalProfile: {
        hydration: [70, 78],
        salt: [2.0, 2.2],
        oil: [0, 0],
        sugar: [0, 0],
        flourStrength: "W300-350",
        ovenTemp: [230, 260],
        recommendedUse: ["Clam Chowder Bowl", "Toast"],
        difficulty: "Expert",
        fermentationSteps: [
            "Maintain stiff starter. [Science: Stiff starters favor acetic acid production (sourness) and yeast vitality.]",
            "Long cold retard (12-24h). [Science: At low temps, bacteria produce more acid while yeast slows down, creating the signature tang.]",
            "Bake dark. [Science: Acidity inhibits Maillard reaction, so aggressive heat and time are needed for the dark chestnut color.]"
        ]
    },
    tags: ["sour", "wild-yeast", "gold-rush", "san-francisco"],
    pairings: {
        canonical: ["Clam Chowder", "Dungeness Crab"],
        modern: ["Avocado"],
        regional: ["Seafood Cioppino"]
    },
    watchouts: [
        "Not Sour Enough: Starter too liquid or fermented too warm (lactic bias).",
        "Flat loaf: Over-acidification degraded the gluten network (proteolysis).",
        "Pale crust: Acid inhibited browning; bake hotter."
    ],
    notes: [
        "True SF flavor comes from the specific microbiome, but technique (stiff starter, cold proof) mimics it well anywhere.",
        "Scoring is critical to handle the immense oven spring.",
        "No commercial yeast allowed."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Boudin History" }, { source: "Microbiology of Sourdough" }],
    images: {
        hero: "/images/styles/sf_sourdough_hero.jpg",
        dough: "/images/styles/sf_sourdough_dough.jpg",
        crumb: "/images/styles/sf_sourdough_crumb.jpg"
    }
};

const newHavenApizza: DoughStyleDefinition = {
    id: "new_haven_apizza",
    name: "New Haven Apizza",
    category: "pizza",
    recipeStyle: RecipeStyle.THIN_CRUST,
    origin: {
        country: "USA",
        region: "New Haven, CT",
        period: "1925"
    },
    description: "Coal-fired, oblong, thin-crust pizza known for its 'char'. Chewy, slightly smoky, and drier than Neapolitan.",
    history: "Frank Pepe (1925) started the tradition. 'Apizza' (pronounced ah-beets) is local dialect. The hallmark is the coal oven reaching 600°F+.",
    difficulty: "Hard",
    fermentationType: "cold",

    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.5],
        oil: [1, 2],
        sugar: [0, 1],
        flourStrength: "W300-340",
        ovenTemp: [315, 350], // Domestic adaptation target. Real ovens are 600F+
        recommendedUse: ["White Clam Pie", "Tomato Pie (No mutz)"],
        difficulty: "Hard",
        fermentationSteps: [
            "Long cold fermentation (24-48h). [Science: Necessary to break down complex starches for the high-heat charring process.]",
            "Proof at room temp. [Science: Dough must be very extensible to stretch into the signature oblong shape without snapping back.]",
            "Coal Fired Bake. [Science: Intense dry heat evaporates surface moisture instantly, creating char without burning the center.]"
        ]
    },
    tags: ["coal-fired", "char", "clam-pie", "connecticut"],
    pairings: {
        canonical: ["Littleneck Clams", "Garlic", "Oregano", "Pecorino"],
        modern: ["Bacon"],
        regional: ["Foxon Park Soda"]
    },
    watchouts: [
        "Sooty flavor: In a coal oven, poor airflow. In home oven, burnt flour.",
        "Soggy Clams: Clams must be fresh and shucked directly onto the pie to mix liquor with oil/garlic.",
        "Too thick: The rim should be minimal; it's about the crust surface."
    ],
    notes: [
        "A 'plain' pie has no cheese (mozzarella), just tomato sauce and pecorino.",
        "The White Clam Pie is the signature masterpiece.",
        "Char is a flavor, burnt is a mistake."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Frank Pepe History" }, { source: "Pizza City, USA" }],
    images: {
        hero: "/images/styles/apizza_hero.jpg",
        dough: "/images/styles/apizza_dough.jpg",
        crumb: "/images/styles/apizza_crumb.jpg"
    }
};

const brazilianGasDeck: DoughStyleDefinition = {
    id: "brazilian_gas_deck",
    name: "Pizza Paulistana (Gas Deck)",
    category: "pizza",
    recipeStyle: RecipeStyle.PAN_PIZZA, // Closest match, though it's deck
    origin: {
        country: "Brazil",
        region: "São Paulo",
        period: "1970s"
    },
    description: "The São Paulo powerhouse. Medium thickness, capable of holding massive amounts of toppings (Catupiry, chicken, sausage). Crisp bottom, soft center.",
    history: "São Paulo has more pizzerias than NYC. This style evolved to satisfy a craving for abundance. The gas deck oven allows a slower, more penetrating heat than wood.",
    difficulty: "Easy",
    fermentationType: "direct",

    technicalProfile: {
        hydration: [55, 60],
        salt: [2.0, 2.5],
        oil: [2, 4], // Soybean or Olive
        sugar: [1, 2],
        flourStrength: "W280-320",
        ovenTemp: [300, 330],
        recommendedUse: ["Frango com Catupiry", "Calabresa", "Portuguesa"],
        difficulty: "Easy",
        fermentationSteps: [
            "Mix to development. [Science: Strong gluten needed to support 1kg+ of toppings.]",
            "Short maturation (24h). [Science: Balances flavor with the structural integrity required for heavy loading.]",
            "Bake at 300°C. [Science: Lower temp than Napoli allows toppings to heat through without burning the crust.]"
        ]
    },
    tags: ["brazil", "heavy-toppings", "catupiry", "sao-paulo"],
    pairings: {
        canonical: ["Catupiry", "Corn", "Peas", "Hard Boiled Eggs"],
        modern: ["Stuffed Crust (Borda Recheada)"],
        regional: ["Sweet Pizza desserts"]
    },
    watchouts: [
        "Raw dough center: Toppings insulated the dough. Pre-cook toppings and bake longer at lower temp.",
        "Collapse: Dough too weak for the weight. Use lower hydration or stronger flour.",
        "Greasy: Cheap cheese/toppings release too much oil. Use quality ingredients."
    ],
    notes: [
        "Catupiry is a proprietary Brazilian cream cheese; substitutes rarely work.",
        "Eating with a knife and fork is mandatory.",
        "The 'Borda Recheada' (stuffed crust) is a common upsell."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Associação Pizzarias Unidas" }],
    images: {
        hero: "/images/styles/paulistana_hero.jpg",
        dough: "/images/styles/paulistana_dough.jpg",
        crumb: "/images/styles/paulistana_crumb.jpg"
    }
};

const nycBagel: DoughStyleDefinition = {
    id: "nyc_bagel",
    name: "New York Bagel",
    category: "bread",
    recipeStyle: RecipeStyle.BAGEL,
    origin: {
        country: "USA",
        region: "New York City",
        period: "Late 19th Century"
    },
    description: "Dense, chewy, malty, and boiled before baking. The shiny, blistered crust is non-negotiable.",
    history: "Brought by Polish Jewish immigrants. The NYC water (chemistry) is often cited, but the boil + cold ferment method is the real secret.",
    difficulty: "Hard",
    fermentationType: "cold",

    technicalProfile: {
        hydration: [50, 55],
        salt: [2.0, 2.2],
        oil: [1, 2],
        sugar: [2, 4], // Malt Syrup
        flourStrength: "W380-420 (High Gluten)",
        ovenTemp: [240, 260],
        recommendedUse: ["Cream Cheese & Lox", "Bacon Egg Cheese"],
        difficulty: "Hard",
        fermentationSteps: [
            "Mix EXTREMELY stiff dough. [Science: Low hydration (50-55%) creates the signature dense chewiness.]",
            "Shape immediately. [Science: Shaping after proofing would Degas the dense structure too much.]",
            "Cold retard 24-48h. [Science: Relaxes the tight gluten and develops malt flavors.]",
            "Boil in Malt/Soda water. [Science: Gelatinizes the outer starch layer for shine and sets the crust size before baking.]"
        ]
    },
    tags: ["bagel", "boiled", "malty", "nyc"],
    pairings: {
        canonical: ["Schmear (Cream Cheese)", "Lox", "Capers", "Red Onion"],
        modern: ["Rainbow Bagel (Visual only)"],
        regional: ["Everything Seasoning"]
    },
    watchouts: [
        "Wrinkled skin: Boiled too long or water not hot enough.",
        "Flat bagel: Overproofed before boiling.",
        "Soft/Bun-like: Hydration too high. Keep it stiff!"
    ],
    notes: [
        "Barley malt syrup is essential for flavor and color; honey/sugar is a poor substitute.",
        "Baking on burlap soaked in water (boards) is the traditional method.",
        "Flip halfway through bake."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Bagel Union Regulations" }],
    images: {
        hero: "/images/styles/bagel_hero.jpg",
        dough: "/images/styles/bagel_dough.jpg",
        crumb: "/images/styles/bagel_crumb.jpg"
    }
};

const grandmaPizza: DoughStyleDefinition = {
    id: "grandma_style_v2",
    name: "Grandma Pizza",
    category: "pizza",
    recipeStyle: RecipeStyle.GRANDMA_STYLE,
    family: "Flatbreads & Pizzas",
    description: "A thin, rectangular pan pizza that bridges the gap between home cooking and pizzeria style. Defined by a short proofing time (often no cold ferment) and being baked in an olive-oil coated sheet pan.",
    origin: {
        country: "USA",
        region: "Long Island, NY",
        period: "1970s"
    },
    history: "Originated from Italian grandmothers (Nonnas) in Long Island making pizza at home with whatever they had (simple dough, crushed tomatoes, standard oven) without long fermentation times.",
    difficulty: "Easy",
    fermentationType: "direct",
    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.5],
        oil: [3.0, 5.0], // High oil in dough + pan
        sugar: [1.0, 3.0],
        flourStrength: "All Purpose or Bread (11-12%)",
        ovenTemp: [230, 260],
        recommendedUse: ["Classic Tomato & Garlic", "Vodka Sauce"],
        difficulty: "Easy",
        fermentationSteps: [
            "Mix to moderate development. [Science: Doesn't need windowpane as it's supported by a pan.]",
            "Short bulk (1-2h). [Science: 'Grandma' style implies immediacy; rapid yeast activity is key.]",
            "Stretch into oiled pan immediately. [Science: Oil conducts heat for a fried bottom texture.]"
        ]
    },
    tags: ["pizza", "pan-pizza", "italian-american", "beginner-friendly", "thin-crust"],
    pairings: {
        canonical: ["Garlic", "Crushed Tomatoes", "Mozzarella", "Olive Oil"],
        modern: ["Pesto", "Fresh Mozzarella"],
        regional: ["None"]
    },
    watchouts: [
        "Sticking: Use plenty of oil in the pan.",
        "Soggy: Bake on the bottom rack of the oven.",
        "Blandness: Heavy garlic usage in the sauce is characteristic."
    ],
    notes: [
        "Often lightly par-baked with sauce before adding cheese.",
        "Texture should be crispy on bottom but dense/soft inside, not airy like Roman.",
        "Garlic is usually sliced, not minced, or infused in the oil."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Pizza History (Long Island)" }],
    images: {
        hero: "/images/styles/grandma_hero.jpg",
        dough: "/images/styles/grandma_dough.jpg",
        crumb: "/images/styles/grandma_crumb.jpg"
    }
};

const chicagoTavern: DoughStyleDefinition = {
    id: "chicago_tavern_v2",
    name: "Chicago Tavern Style",
    category: "pizza",
    recipeStyle: RecipeStyle.THIN_CRUST,
    family: "Flatbreads & Pizzas",
    description: "The TRUE Chicago pizza (what locals actually eat). Ultra-thin, cracker-like crust, square-cut (party cut), and loaded with toppings under the cheese. The dough is rolled flat and cured to ensure zero rise.",
    origin: {
        country: "USA",
        region: "Chicago / Midwest",
        period: "1940s"
    },
    history: "Developed in post-Prohibition taverns as a salty, cracker-like snack to encourage drinking. The 'party cut' allowed patrons to hold a square in one hand and a beer in the other.",
    difficulty: "Medium",
    fermentationType: "cold",
    technicalProfile: {
        hydration: [45, 50],
        salt: [1.5, 2.0],
        oil: [0, 5.0], // Often corn oil or shortening
        sugar: [1.0, 2.0],
        flourStrength: "All Purpose or High Gluten (Variable)",
        ovenTemp: [260, 290],
        recommendedUse: ["Sausage & Giardiniera", "Pepperoni"],
        difficulty: "Medium",
        fermentationSteps: [
            "Mix to stiff dough. [Science: Low hydration prevents gluten mobility, ensuring potential for crispness.]",
            "Sheet/Roll flat immediately or after short rest. [Science: Mechanical degassing is key; no alveoli allowed.]",
            "Cure in fridge (24-48h). [Science: This is a 'relieving' phase where hydration equalizes and starch degrades, but no yeast rise is desired.]",
            "Dock heavily and bake. [Science: Docking prevents steam pockets from separating cheese from crust.]"
        ]
    },
    tags: ["pizza", "american", "midwest", "thin-crust", "party-cut", "cracker"],
    pairings: {
        canonical: ["Fennel Sausage", "Giardiniera", "Mozzarella"],
        modern: ["Italian Beef"],
        regional: ["Old Style Beer"]
    },
    watchouts: [
        "Bubble formation: If not docked enough, it will bubble and burn.",
        "Soggy center: Sauce must be thick; vegetables should be precooked or sliced thin.",
        "Toughness: If hydration is too low without enough fat, it becomes hard hardtack instead of crisp."
    ],
    notes: [
        "Use a rolling pin or pasta sheeter.",
        "The 'Party Cut' is non-negotiable.",
        "Curing the rolled skins in the fridge uncovered can help dry them out."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [
        { source: "Pizza City, USA", author: "Steve Dolinsky" }
    ],
    images: {
        hero: "/images/styles/chicago_hero.jpg",
        dough: "/images/styles/chicago_dough.jpg",
        crumb: "/images/styles/chicago_crumb.jpg"
    }
};

export const americasStyles: DoughStyleDefinition[] = [
    nycSlice,
    detroitStyle,
    chicagoDeepDish,
    paoFrancesABNT,
    sfSourdough,
    newHavenApizza,
    brazilianGasDeck,
    nycBagel,
    grandmaPizza,
    chicagoTavern
];
