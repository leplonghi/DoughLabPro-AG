import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

// SEED — expandir via StyleGeneratorPipeline
export const turkishSimit: DoughStyleDefinition = {
    id: "turkish_simit",
    name: "Turkish Simit",
    category: "bread",
    recipeStyle: RecipeStyle.TURKISH_SIMIT,
    family: "Turkish Ring Bread",
    status: "seed",

    origin: { country: "Turkey", region: "Istanbul", period: "1525" },

    description: "Simit is the iconic circular bread of Istanbul — a golden, crunchy sesame-encrusted ring sold by street vendors across Turkey. The dough is dipped in grape molasses before being coated in sesame seeds, which caramelize during baking to create a deeply fragrant, crackling crust.",

    difficulty: "Easy",
    fermentationType: "direct",

    base_formula: [
        { name: "Bread flour", percentage: 100 },
        { name: "Water", percentage: 55 },
        { name: "Salt", percentage: 1.8 },
        { name: "Instant yeast", percentage: 1 },
        { name: "Vegetable oil", percentage: 2 },
        { name: "Grape molasses (for dipping)", percentage: 0 }, // applied externally
        { name: "Sesame seeds (for coating)", percentage: 0 },   // applied externally
    ],

    technicalProfile: {
        hydration: [53, 57],
        salt: [1.6, 2.0],
        oil: [1.5, 2.5],
        sugar: [0, 0],
        flourStrength: "Medium (W240-270)",
        ovenTemp: [230, 250],
        recommendedUse: ["Street food", "Breakfast", "Snack with tea"],
        difficulty: "Easy",
        ballWeight: { recommended: 200, min: 180, max: 220 },
        fermentationSteps: [
            "Mix all dough ingredients; knead until smooth (8-10 min).",
            "Bulk ferment 30-45 minutes.",
            "Divide and roll into long ropes; twist two ropes together and form a ring.",
            "Dip rings in diluted grape molasses, then roll in sesame seeds.",
            "Bake at 240°C for 20-25 minutes until deeply golden.",
        ],
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W240-270",
            pl_ratio: "0.50-0.60",
            absorption_capacity: "Low-moderate (53-57%)",
            protein_type: "Medium-strength wheat",
            science_explanation: "Lower hydration gives the dough enough body to hold the twisted ring shape without spreading.",
        },
        thermalProfile: {
            oven_type: "Deck oven",
            heat_distribution: "Uniform, high",
            crust_development: "Ultra-crispy, caramelized sesame crust",
            crumb_structure: "Dense, tight-crumbed",
        },
        fermentationScience: {
            yeast_activity: "Active but brief",
            ph_target: "pH 5.6-5.9",
            organic_acids: "Very mild",
            enzymatic_activity: "Molasses dip provides external sugars for rapid Maillard browning",
        },
    },

    education: {
        pro_tips: [
            { tip: "Pekmez (molasses) dip", explanation: "Dilute grape molasses 1:1 with water. This provides the sugars that caramelize the sesame seeds to a deep amber color." },
            { tip: "Twist tightly", explanation: "The two-strand twist must be firm; loose twists open during baking and lose their shape." },
        ],
        what_if: [],
        comparative_analysis: [
            { target_style: "New York Bagel", difference: "Both are boiled/dipped ring breads, but Simit uses molasses dip (not boiling) and sesame coating (not everything bagel spice).", why_choose_this: "Choose Simit for a crunchier, less chewy ring with a more delicate sesame-forward flavor." },
        ],
        q_and_a: [],
        fermentation_methods: [
            { method: "Direct", suitability: "Authentic", notes: "Traditional Simit uses a short, fast fermentation for same-day baking." },
        ],
    },

    tags: ["turkish", "istanbul", "ring bread", "sesame", "street food", "ottoman"],
    watchouts: ["Sesame burns quickly — watch closely in the final 5 minutes."],
    notes: ["Status: seed — requires pipeline expansion before publishing."],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    images: {
        hero: "/images/styles/turkish_simit_hero.png",
        dough: "/images/styles/turkish_simit_dough.png",
        crumb: "/images/styles/turkish_simit_crumb.png",
    },
    recommendedFlavorComponents: ["sesame_seeds", "feta", "olives", "tomato_fresh"],

    flavorProfile: {
        primaryFlavors: ["toasted sesame", "caramelised grape molasses", "neutral wheat", "slightly sweet", "light crunch"],
        aromaProfile: ["deeply toasted sesame", "warm caramel from molasses", "fresh bread", "faint olive oil", "nutty baked dough"],
        textureNotes: ["ultra-crispy shatter-crunch crust", "dense tight crumb", "wall-to-wall sesame coating", "ring shape gives multiple crunch points", "dry and satisfying"],
        pairingRecommendations: ["Feta cheese", "Black and green olives", "Fresh tomatoes and cucumbers", "Turkish tea (Çay)", "Clotted cream (Kaymak) and honey"],
        flavorEvolution: ["Fresh: peak crunch and sesame aroma — best within 2 hours", "4 hours later: crust softens but still delicious", "Day-old: excellent lightly toasted; sesame re-crisps"]
    },

    culturalContext: {
        significance: [
            "Istanbul's most iconic street food since the Ottoman era (1525)",
            "The Simitçi (simit seller) with his red cart is a classic Istanbul street image",
            "Daily breakfast staple across Turkey — eaten by millions every morning",
            "The dipping in grape molasses (Pekmez) before sesame coating is the defining step",
            "Simit has been called 'the Turkish bagel' — though Turks strongly disagree with the comparison"
        ],
        consumptionContext: [
            "Street food eaten on the go — Constantinople's original fast food",
            "Turkish breakfast with Feta, olives, tomatoes, tea (Çay)",
            "Mid-morning or afternoon snack with a glass of Turkish tea",
            "Served at school gates, bus stops, ferry terminals across Turkey",
            "Sold by weight at Simitçi carts — one ring is a standard single portion"
        ],
        evolution: [
            "First documented in Ottoman records in 1525 in Istanbul",
            "The grape molasses dip was the pre-industrial solution for adding flavour and sugar to a lean dough cheaply",
            "Simit spread across the former Ottoman Empire — identical products exist in the Balkans and Middle East",
            "The famous wheeled red cart (the 'araba') became standardized in early 20th-century Istanbul",
            "Modern Simit Sarayı chain internationalised the format with cafés serving Simit sandwiches"
        ],
        rituals: [
            "The twist must be done firmly — loose twists open in the oven and are considered defective",
            "Sesame must cover 100% of the surface — bare patches are a sign of a rushed baker",
            "Eaten by tearing off segments of the twisted ring",
            "Traditionally sold warm from the oven or cart — tepid Simit is considered inferior"
        ]
    },

    globalPresence: {
        regions: ["Turkey (ubiquitous)", "Balkans (Greece, Bulgaria, North Macedonia as 'gevrek')", "Middle East (Lebanon, Syria as 'ka'ak')", "Turkish diaspora worldwide"],
        popularity: "national icon in Turkey; regional staple in former Ottoman territories",
        exportStatus: "Popular at Turkish bakeries abroad; Simit Sarayı expanding internationally",
        internationalRecognition: "Growing recognition globally via Turkish cuisine popularity"
    },

    pairings: {
        beverages: ["Turkish black tea in tulip glass (Çay)", "Ayran (yogurt drink)", "Turkish coffee"],
        foods: ["Beyaz Peynir (white feta-style cheese)", "Black and green olives", "Fresh tomato and cucumber", "Kaymak (clotted cream) with honey", "Hard-boiled egg"],
        occasions: ["Turkish breakfast (Kahvaltı)", "On-the-go snack", "Ferry ride breakfast", "Mid-morning market snack"],
        seasons: ["Year-round — a daily ritual"]
    },

    experimentSuggestions: [
        { title: "Pomegranate Molasses Dip", description: "Replace grape molasses with pomegranate molasses for a more tangy, fruity coating that pairs beautifully with the sesame." },
        { title: "Mixed Seed Simit", description: "Add 30% nigella (black) seeds to the sesame coating for a more aromatic, peppery crust." },
        { title: "Sourdough Simit", description: "Replace instant yeast with a mild levain (10%) for a slightly more complex flavour base — a subtle tang under the sesame-molasses crust." },
        { title: "Anatolian Whole Wheat", description: "Substitute 30% of bread flour with stone-ground whole wheat for a heartier, more rustic ring with deeper wheat notes." },
        { title: "Mini Simit Bites", description: "Divide into 40g portions to make cocktail-size simits — perfect for mezze platters or party snacks." }
    ],

    learnLinkTags: ["turkish", "istanbul", "ring-bread", "sesame", "street-food", "ottoman", "molasses-dip", "simitci"]
};
