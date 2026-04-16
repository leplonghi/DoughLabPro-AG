import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

// SEED — expandir via StyleGeneratorPipeline
export const kaisersemmelAustrian: DoughStyleDefinition = {
    id: "kaisersemmel_austrian",
    name: "Austrian Kaisersemmel",
    category: "bread",
    recipeStyle: RecipeStyle.KAISERSEMMEL,
    family: "Viennese Rolls",
    status: "seed",

    origin: { country: "Austria", region: "Vienna", period: "1800s" },

    description: "The Kaisersemmel (Emperor Roll) is Vienna's iconic breakfast roll. Its signature five-petal fold pattern is achieved by hand or with a special stamp. The lard-enriched dough bakes to a crispy, crackly exterior with a soft, open crumb — the perfect vehicle for butter and jam or cold cuts.",

    difficulty: "Medium",
    fermentationType: "direct",

    base_formula: [
        { name: "Type 550 flour (or bread flour)", percentage: 100 },
        { name: "Water", percentage: 58 },
        { name: "Salt", percentage: 2 },
        { name: "Instant yeast", percentage: 1.5 },
        { name: "Lard or shortening", percentage: 2 },
        { name: "Malt extract", percentage: 0.5 },
    ],

    technicalProfile: {
        hydration: [56, 60],
        salt: [1.8, 2.2],
        oil: [1.5, 2.5],
        sugar: [0, 0.5],
        flourStrength: "Medium-strong (W260-290)",
        ovenTemp: [220, 240],
        recommendedUse: ["Viennese breakfast", "Sandwich rolls", "Cold cut service"],
        difficulty: "Medium",
        ballWeight: { recommended: 80, min: 70, max: 90 },
        fermentationSteps: [
            "Mix all ingredients until a smooth, elastic dough forms.",
            "Bulk ferment 60-90 minutes at room temperature.",
            "Divide into 80g pieces, pre-shape, rest 15 minutes.",
            "Apply five-petal fold (by hand or stamp).",
            "Proof 30 minutes, bake at 230°C with steam for 18-20 minutes.",
        ],
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W260-290",
            pl_ratio: "0.50-0.60",
            absorption_capacity: "Moderate (56-60%)",
            protein_type: "Medium-strong Austrian or German wheat",
            science_explanation: "The lard retards gluten development slightly, producing the characteristic soft crumb.",
        },
        thermalProfile: {
            oven_type: "Deck oven with steam injection",
            heat_distribution: "High, even heat with initial steam",
            crust_development: "Glossy, thin, crackly golden crust",
            crumb_structure: "Soft, fine, regular crumb",
        },
        fermentationScience: {
            yeast_activity: "Active, short fermentation",
            ph_target: "pH 5.6-5.8",
            organic_acids: "Very mild; clean flavor profile",
            enzymatic_activity: "Malt extract boosts browning enzymes",
        },
    },

    education: {
        pro_tips: [
            { tip: "Steam is mandatory", explanation: "Injecting steam in the first 8 minutes creates the signature shiny, crackly crust of a Kaisersemmel." },
            { tip: "The fold", explanation: "The five-petal fold must be sealed face-down during proofing; when flipped for baking, the pattern opens dramatically in the oven." },
        ],
        what_if: [],
        comparative_analysis: [
            { target_style: "French Baguette", difference: "Kaisersemmel is enriched with lard and shaped as a round roll; baguette is lean and elongated.", why_choose_this: "Choose Kaisersemmel for the classic Austrian breakfast experience." },
        ],
        q_and_a: [],
        fermentation_methods: [
            { method: "Direct", suitability: "Authentic", notes: "Traditional Viennese bakers use short direct fermentation." },
            { method: "Poolish", suitability: "Ideal", notes: "Small liquid poolish (10-15%) adds subtle flavor depth." },
        ],
    },

    tags: ["austrian", "viennese", "roll", "breakfast", "lard", "emperor roll"],
    watchouts: ["Skipping steam produces a dull, bread-like crust instead of the classic crackle."],
    notes: ["Status: seed — requires pipeline expansion before publishing."],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    images: {
        hero: "/images/styles/kaisersemmel_austrian_hero.png",
        dough: "/images/styles/kaisersemmel_austrian_dough.png",
        crumb: "/images/styles/kaisersemmel_austrian_crumb.png",
    },
    recommendedFlavorComponents: ["butter_unsalted", "jam", "cold_cuts"],

    flavorProfile: {
        primaryFlavors: ["clean wheaty crunch", "subtle lard richness", "malty warmth", "neutral but deeply satisfying", "faintly salty"],
        aromaProfile: ["fresh-baked wheat aroma", "warm lard undertone", "toasted crust", "yeasty bakery morning smell"],
        textureDescriptors: ["thin crackling crust that shatters", "soft open interior crumb", "five-petal tear pattern when broken", "light and airy throughout"],
        tasteJourney: "The audible crackle as you bite through the crust is part of the experience. The flavour is clean and cereal-forward — the lard gives a very faint richness without being heavy. The crumb practically disappears on the palate.",
        mouthfeel: "Crispy on the outside with almost no resistance. The interior crumb is cloud-like and dissolves quickly. Zero heaviness — engineered to be a perfect vehicle for toppings.",
        bakersNotes: "Steam in the first 8 minutes is non-negotiable for the crackle. The lard can be replaced with butter, but the texture shifts slightly. The five-petal fold must be done while the dough is slightly relaxed — not too tight or the pattern disappears in proofing."
    },

    culturalContext: {
        significance: "The Kaisersemmel (Emperor Roll) is the undisputed symbol of Viennese breakfast. Named after the Habsburg Emperor, it is the most consumed bread roll in Austria. Walk into any Viennese bakery at 7am and the aroma of freshly baked Kaisersemmel is inescapable.",
        rituals: ["The Viennese 'Frühstück' (breakfast) is incomplete without a Kaisersemmel with butter and honey or cold cuts", "Bought fresh every single morning — day-old Kaisersemmel are considered unacceptable", "The folding pattern is traditionally done by hand; many bakers still refuse to use stamps as 'cheating'", "Paired with the legendary Melange (Viennese coffee) in every coffeehouse"],
        symbolism: "The five-petal pattern is said to represent the five senses or the five fingers of a hand working the dough. It is a symbol of Viennese craft and culinary identity. The name 'Kaiser' (Emperor) reflects its elevated status in Austrian culture.",
        modernRole: "Remains Austria's bestselling bread roll. Has been adopted across Central Europe (Germany, Czech Republic, Hungary) as a staple. Becoming a global artisan curiosity — the folding technique attracts enormous attention on social media."
    },

    globalPresence: {
        primaryMarkets: ["Austria", "Germany", "Czech Republic", "Hungary", "Switzerland"],
        growingMarkets: ["USA (artisan bakeries)", "UK", "Australia"],
        penetrationLevel: "regional",
        trend: "Growing artisan interest globally. The unique folding technique is a social media draw. Seen in premium bakeries worldwide as a 'specialty roll'.",
        diasporaImpact: "Austrian and German immigrants brought the Semmel tradition to the Americas. Deli bakeries in cities with German heritage communities (Milwaukee, Cincinnati) have preserved the tradition."
    },

    pairings: {
        beverages: [
            { name: "Viennese Melange (Coffee)", type: "traditional", notes: "The absolute classic — the Viennese coffeehouse breakfast" },
            { name: "Austrian Grüner Veltliner (White Wine)", type: "elevated", notes: "Mineral and crisp — pairs with cold cut-filled Kaisersemmel at lunch" },
            { name: "Buttermilch (Buttermilk)", type: "traditional", notes: "A traditional Austrian pairing — the acidity cuts beautifully through the lard richness" },
            { name: "Light Czech Pilsner", type: "modern", notes: "For mid-day sandwiches — the bitterness complements the neutral wheaty flavour" }
        ],
        foods: [
            { name: "Unsalted Butter & Honey", pairing: "perfect", notes: "The quintessential Viennese breakfast combination" },
            { name: "Liptauer Cheese Spread", pairing: "classic", notes: "Paprika-spiced Austrian cheese — the ultimate pub-style topping" },
            { name: "Leberkäse (Bavarian Meat Loaf)", pairing: "classic", notes: "The Viennese street food staple — hot Leberkäse in a Semmel with mustard" },
            { name: "Prosciutto & Emmenthal", pairing: "elevated", notes: "Elevated coffeehouse sandwich version" }
        ],
        occasions: ["Viennese breakfast (Frühstück)", "Coffeehouse mid-morning snack", "Lunch sandwiches", "Jause (Austrian afternoon snack)"]
    },

    experimentSuggestions: [
        {
            title: "Poolish Kaisersemmel",
            description: "Build a 10-15% poolish (equal flour and water with a tiny amount of yeast) the night before. This adds flavor depth without changing the authentic character.",
            difficulty: "Medium",
            expectedOutcome: "More complex, faintly fermented flavour with slightly improved crust crackle. Comparable to the best Viennese bakeries."
        },
        {
            title: "Whole Wheat Kaiser (30%)",
            description: "Replace 30% of the bread flour with whole wheat flour. Adjust water upward by 2-3% to compensate for bran absorption.",
            difficulty: "Easy",
            expectedOutcome: "Slightly denser, nuttier, with a less dramatic crackle. A modern health-conscious version."
        },
        {
            title: "Caraway & Fennel Semmel",
            description: "Incorporate 1% ground caraway and 0.5% fennel seed into the dough. Top with a caraway sprinkle before baking.",
            difficulty: "Easy",
            expectedOutcome: "A distinctly Austrian-flavored roll — the caraway is commonly found in Austrian breads and pairs perfectly with cold cuts."
        }
    ],

    learnLinkTags: ["austrian-bread", "vienna", "roll", "breakfast-roll", "lard-enriched", "emperor-roll", "five-petal", "central-european", "semmel"]
};
