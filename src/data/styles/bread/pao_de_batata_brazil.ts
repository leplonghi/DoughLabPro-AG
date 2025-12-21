import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PÃO DE BATATA (BRAZILIAN POTATO BREAD)
 * 
 * Researched and validated content:
 * - Origin: Brazil (19th-early 20th century modification of European starch breads)
 * - Technique: Inclusion of cold mashed potatoes (approx 30% of flour weight)
 * - Ingredients: Mashed Asterix/Pink potatoes (starchy), Butter, Whole Milk, Requeijão filling
 * - Characteristics: Incredibly moist, 'squidgy', slightly sweet-savory, golden thin crust
 */
export const pao_de_batata_brazil: DoughStyleDefinition = {
    id: "pao_de_batata_brazil",
    name: "Pão de Batata (Brazilian Potato Bread)",
    category: "bread",
    recipeStyle: RecipeStyle.ENRICHED_LOAF,
    family: "Brazilian Professional Bakery",

    origin: {
        country: "Brazil",
        region: "Southeastern Brazil (São Paulo / Minas Gerais)",
        period: "Early 20th Century"
    },

    description: "Pão de Batata is a beloved Brazilian bakery staple, distinct from the American potato bun by its density and traditional filling. It is an extremely moist and 'squidgy' bread made by incorporating a large amount of boiled, mashed potatoes directly into the dough. It is most famous in its 'filled' version, where a core of creamy Requeijão (Brazilian cream cheese) is piped into the center before baking, creating a molten, savory surprise.",

    history: "Rooted in the high-starch baking traditions of Portuguese and Italian immigrants, Pão de Batata became a commercial phenomenon in the 1960s in the lanchonetes (diners) of São Paulo. Bakers discovered that adding mashed potatoes not only made the bread incredibly soft but also allowed it to retain moisture much longer than wheat-only doughs in the tropical climate. It evolved into one of the most popular 'salgados' (savory snacks) in the country, synonymous with quick, high-quality street food.",

    difficulty: "Hard",
    fermentationType: "direct",

    base_formula: [
        { name: "Strong Wheat Flour (W280+)", percentage: 100 },
        { name: "Mashed Cooked Potatoes (Cold)", percentage: 35 },
        { name: "Whole Milk (Cold)", percentage: 35 },
        { name: "Unsalted Butter", percentage: 10 },
        { name: "Sugar", percentage: 8 },
        { name: "Whole Eggs", percentage: 12 },
        { name: "Fine Sea Salt", percentage: 2 },
        { name: "Instant Yeast", percentage: 1.2 }
    ],

    technicalProfile: {
        hydration: [65, 75], // High 'effective' hydration due to the moisture in the potatoes
        salt: [1.8, 2.2],
        oil: [8, 12], // Pure butter
        sugar: [5, 10],
        flourStrength: "Medium-Strong Bread Flour (W280-320). Needs enough protein to support the heavy starch of the potatoes",
        ovenTemp: [170, 185], // Low and slow to prevent the sugar-potato mix from burning
        recommendedUse: [
            "Pão de Batata com Requeijão (Stuffed with cream cheese)",
            "Mini Potato Sliders",
            "Savory breakfast rolls"
        ],
        difficulty: "Hard",
        ballWeight: { recommended: 80, min: 40, max: 120 }, // 80g is the standard for a diner snack
        fermentationSteps: [
            "Potato Prep: Peel, boil, and mash starchy potatoes (Asterix) until perfectly smooth. Chill completely. [Science: Cold starch interacts better with the gluten network; hot potatoes will kill the yeast and melt the butter]",
            "The 'Lava' Mix: Combine flour, sugar, yeast, and salt. Add cold mashed potatoes, milk, and eggs. [Science: The potato starch particles disrupt the gluten network, leading to the signature 'squishy' and tender bite]",
            "Butter Integration: Add softened butter once the dough is homogeneous. Knead until a strong, elastic windowpane is achieved. [Science: High-protein flour is needed to counteract the 'interfering' starch molecules]",
            "Bulk Rise: 1 to 1.5 hours at room temperature. [Science: The extra sugars in the potatoes provide a vigorous environment for the yeast]",
            "Shaping & Filling: Portion into 80g balls. Use a piping bag to inject 15g of cold 'Requeijão' (Culinary version) into the center. Seal the bottom tightly. [Science: A tight seal is mandatory to prevent the cheese from 'exploding' in the oven]",
            "Final Proof: 1 hour until doubled. [Science: Ensure the environment is humid to prevent the surface from cracking]",
            "Egg Wash: Brush twice with yolk for a deep golden look. [Science: Facilitates browning at lower temps]",
            "Baking: Bake for 15-18 minutes at 180°C. [Science: Take them out when golden-straw colored; over-baking makes them dry like regular bread]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W280-320 (Strong)",
            pl_ratio: "0.50 (Extensible)",
            absorption_capacity: "Extreme (due to potato moisture)",
            protein_type: "Strong soft wheat",
            science_explanation: "The dough is heavy. The protein must be of high quality (high tenacity) to hold the gas bubbles while being weighed down by the dense potato mash."
        },
        thermalProfile: {
            oven_type: "Convection Oven (ideal) or Electric",
            heat_distribution: "Moderate radiation and convection",
            crust_development: "Ultra-thin, soft, slightly 'tacky', pale golden mahogany",
            crumb_structure: "Highly moist, 'shreddy' in a dense way, zero toughness"
        },
        fermentationScience: {
            yeast_activity: "High; stimulated by the complex starches of the potato",
            ph_target: "pH 5.4 - 5.6",
            organic_acids: "Lactic focus; potato adds a unique earthy-sweet aroma profile",
            enzymatic_activity: "Peak amylase activity during the proofing stage."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Type of Potato",
                explanation: "Never use 'waxy' (salad) potatoes. Use 'starchy' (floury/baking) potatoes like Asterix or Russet. They have more dry matter and create a much lighter bread."
            },
            {
                tip: "Cold is Gold",
                explanation: "Always use the potatoes COLD (from the fridge). If they are warm, they will turn the dough into a sticky, unmanageable mess."
            },
            {
                tip: "Seal the Bottom",
                explanation: "After filling with Requeijão, pinch the dough at the bottom like a 'dim sum' bao and roll it on the counter to fuse the seam. If it leaks, you lose the 'lava' effect."
            },
            {
                tip: "Don't over-knead",
                explanation: "Once you achieve the windowpane, stop. Excessive kneading with potato dough can cause the starch to become 'rubbery' (gummy) rather than soft."
            },
            {
                tip: "Add a pinch of Oregano",
                explanation: "Applying a tiny bit of dried oregano on top of the egg wash before baking is the visual code in Brazil for 'This one is filled with Requeijão'."
            }
        ],
        what_if: [
            {
                scenario: "The bread is gummy and looks like raw dough in the middle",
                result: "Potatoes were too watery or too much mash was added",
                correction: "Ensure you drain the boiled potatoes very well and never exceed 40% mash relative to flour weight."
            },
            {
                scenario: "The cheese leaked out during baking",
                result: "Bad seal or over-proofing (thin walls)",
                correction: "Pinch the dough more aggressively at the base and avoid over-heating the 'Requeijão' before piping."
            },
            {
                scenario: "The crust is too hard",
                result: "Oven temp too high or bake too long",
                correction: "Potato bread is meant to be SOFT. Bake it at a lower temp and cover it with a towel while cooling to 'sweat' the crust."
            }
        ],
        comparative_analysis: [
            {
                target_style: "American Potato Bun",
                difference: "American style uses potato flakes and oil for an airy/squishy burger bun; Brazilian style uses real mashed potatoes and butter for a denser, more savory diner snack.",
                why_choose_this: "Choose Brazilian for a standalone meal/snack."
            },
            {
                target_style: "Pão de Leite",
                difference: "Pão de Leite is lighter/airier; Pão de Batata is 'wetter' and heavier due to the starch content.",
                why_choose_this: "Choose Potato for its unique moist mouthfeel."
            },
            {
                target_style: "Cornbread (Pão de Milho)",
                difference: "Cornbread is crumbly and sweet; Potato bread is elastic and savory-sweet.",
                why_choose_this: "Choose Potato for savory fillings like Chicken or Cheese."
            }
        ],
        q_and_a: [
            {
                question: "What is Requeijão?",
                answer: "A uniquely Brazilian creamy, spreadable processed cheese that resists high oven temperatures. It provides a 'molten' heart to the bread.",
                context: "Ingredients"
            },
            {
                question: "Can I use Potato Flakes?",
                answer: "Yes, but use 10% flakes and 40% water to rehydrate them first to mimic the mash consistency.",
                context: "Technique"
            },
            {
                question: "Why is it so famous in São Paulo?",
                answer: "The 'Lanchonetes' of SP made it their signature high-speed snack, perfect for commuting workers.",
                context: "Culture"
            },
            {
                question: "Does it go stale fast?",
                answer: "No! Pão de Batata stays moist for 3-4 days naturally because the potato starch holds water so tightly.",
                context: "Storage"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "The most common and reliable method for this heavy dough."
            },
            {
                method: "Tangzhong",
                suitability: "Possible",
                notes: "Redundant, as the mashed potatoes already act as a powerful softener and moisture-lock."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "High effective hydration (70%+). The moisture is technically 'trapped' inside the potato mash, allowing the dough to feel manageable while being incredibly hydrated.",
        methodSuitability: {
            direct: { suitable: true, notes: "Mandatory." },
            biga: { suitable: false, notes: "N/A" },
            poolish: { suitable: false, notes: "N/A" }
        },
        whatIf: [
            {
                scenario: "You use red waxy potatoes",
                outcome: "The bread will have a 'gummy' and translucent crumb that feels like glue.",
                solution: "Use only dry, floury potatoes (Asterix/Russet)."
            }
        ],
        comparisons: [
            {
                vsStyle: "Potato Mash vs Potato Flour",
                difference: "Mash provides unparalleled moisture and texture; flour is easier but results in a drier, less 'authentic' bread."
            }
        ],
        proTips: [
            "A pinch of Nutmeg in the potato mash makes the savory flavor pop.",
            "Add some finely chopped 'Calabresa' (Brazilian sausage) into the dough for a 'Premium' version.",
            "Use a 'Culinary' Requeijão (like Catupiry brand)—standard spreadable versions are too thin and will leak.",
            "Cover the tray with another tray (inverted) for the first 5 mins of baking to trap the potato steam.",
            "Eat it warm—it's the only way to fully appreciate the molten cheese center."
        ]
    },

    tags: ["pao-de-batata", "brazilian", "potato-bread", "stuffed", "requeijao", "soft"],

    watchouts: [
        "Hot potatoes kill yeast—CHILL THEM!",
        "Weak flour = bread that doesn't rise.",
        "Bad seal = cheese explosion.",
        "Over-baking = loss of the 'squidgy' magic."
    ],

    notes: [
        "Iconic Brazilian 'Lanchonete' savory snack.",
        "Uses starchy mashed potatoes for moisture.",
        "Traditionally stuffed with Requeijão Cremoso.",
        "Extremely long-lasting shelf life.",
        "Requires high-protein (W300+) flour."
    ],

    references: [
        {
            source: "Manual de Salgadaria SENAC",
            url: "https://www.sp.senac.br/",
            author: "SENAC SP",
            year: "2018"
        },
        {
            source: "A Química na Cozinha",
            url: "https://www.loja.editorapesquisaebestseler.com.br/",
            author: "Julio C. Rocha",
            year: "2015"
        },
        {
            source: "Lanchonetes de São Paulo - Estudo Cultural",
            url: "https://www.saopaulo.sp.gov.br/",
            author: "SEC-SP Team",
            year: "2021"
        }
    ],

    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/pao-de-batata-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["requeijao_cremoso", "oregano_dried", "salted_butter_normandy", "calabresa_sausage"]
};
