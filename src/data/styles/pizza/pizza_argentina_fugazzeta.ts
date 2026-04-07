import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PIZZA ARGENTINA (FUGAZZETA / MEDIA MASA)
 * 
 * Researched and validated content:
 * - Origin: Buenos Aires, Argentina (La Boca neighborhood, 1932 Juan Banchero)
 * - Technique: 'Al Molde' (Pan-baked), 'Media Masa' (Thick, spongy dough)
 * - Ingredients: High hydration, Lard/Oil, High-protein flour
 * - Characteristics: Double-layered dough (Stuffed), massive amounts of onions and mozzarella
 */
export const pizza_argentina_fugazzeta: DoughStyleDefinition = {
    id: "pizza_argentina_fugazzeta",
    name: "Pizza Argentina (Fugazzeta)",
    category: "pizza",
    recipeStyle: RecipeStyle.PAN_PIZZA,
    family: "Rioplatense Pan Pizza",

    origin: {
        country: "Argentina",
        region: "Buenos Aires (La Boca)",
        period: "1932 (Juan Banchero)"
    },

    description: "Pizza Argentina is a distinctive evolution of Italian roots, favoring 'Media Masa'—a thicker, spongier, and more bread-like dough compared to European styles. The 'Fugazzeta' is the ultimate Argentine specialty: a double-layered dough stuffed with a massive amount of mozzarella and topped with an equally impressive layer of sweet, crunchy onions. It is traditionally baked 'Al Molde' (in a pan), creating a golden, almost fried bottom and crispy cheese edges.",

    history: "The style was pioneered by Juan Banchero, a Genoese immigrant in the La Boca neighborhood of Buenos Aires. In 1932, he invented the Fugazzeta by taking the traditional Genoese 'Fugazza' (focaccia with onions) and stuffing it with mozzarella to prevent it from being too dry. Pizzerias like Banchero, El Cuartito, and Guerrín became cultural institutions, defining a style that prioritizes 'abyss-like' quantities of cheese and a dough that acts as a robust, airy vessel for the heavy toppings.",

    difficulty: "Medium",
    fermentationType: "direct",

    base_formula: [
        { name: "High-Protein Bread Flour", percentage: 100 },
        { name: "Water (or Milk blend)", percentage: 65 },
        { name: "Salt", percentage: 2.2 },
        { name: "Lard or Vegetable Oil", percentage: 5 },
        { name: "Sugar", percentage: 1 },
        { name: "Fresh Yeast", percentage: 3 }
    ],

    technicalProfile: {
        hydration: [62, 70], // High hydration for a soft, airy crumb
        salt: [1.8, 2.5],
        oil: [3, 8], // Lard is traditional for a unique flavor and texture
        sugar: [0, 2],
        flourStrength: "Strong (W300+) to support the weight of the double dough and heavy cheese",
        ovenTemp: [250, 280], // Lower than Neapolitan to allow the thick pan dough to cook through
        recommendedUse: [
            "Traditional Buenos Aires 'Pizzeria' service",
            "Home-style pan pizza",
            "Fugazzeta Rellena (Stuffed specialty)"
        ],
        difficulty: "Medium",
        ballWeight: { recommended: 600, min: 500, max: 800 }, // Heavy balls for the double layer
        fermentationSteps: [
            "Mixing: Mix flour, water (warm), yeast, and lard. Develop a strong gluten network. [Science: The lard interferes with gluten bonds slightly, creating a more 'tender' bread-like bite despite the high protein flour]",
            "Bulk Rise: 1 hour at room temperature. [Science: Short, vigorous bulk rise is common for Rioplantense pizzerias]",
            "Divide: Split the dough into two parts (one larger for the base, one smaller for the top). [Science: The top layer must be thin to avoid a 'doughy' center]",
            "Panning: Place the base dough in a heavily oiled iron pan (Pizzera). Let it rest and stretch. [Science: The oil in the pan conducts heat and 'fries' the bottom of the dough]",
            "Stuffing: Cover the base with 400g+ of mozzarella. Place the second thin dough layer on top and seal the edges tightly. [Science: Sealing creates a steam-chamber where the cheese melts perfectly without losing moisture]",
            "Topping: Top the second layer with sliced raw onions that have been soaked in cold water/salt. [Science: Soaking removes bitterness and helps the onions steam rather than burn initially]",
            "Baking: Bake for 15-20 minutes until the onions are golden and the dough is tall and airy. [Science: The longer bake time allows the internal steam to build the 'Media Masa' volume]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W300-350 (Strong Strength)",
            pl_ratio: "0.55-0.65",
            absorption_capacity: "High (65-70%)",
            protein_type: "Strong Argentine/American wheat blend",
            science_explanation: "The dough must maintain a high vertical rise while supporting a massive weight of cheese and a second layer of dough. A weak flour would result in a collapsed, gummy interior."
        },
        thermalProfile: {
            oven_type: "Gas or Electric Deck Oven with high bottom heat",
            heat_distribution: "Conduction from the iron pan is the primary thermal driver",
            crust_development: "Soft sides, golden-fried bottom, and 'frico' (crispy cheese) where the mozzarella hits the pan",
            crumb_structure: "Tall, airy, spongy, with a visible separation line where the two dough layers meet the cheese"
        },
        fermentationScience: {
            yeast_activity: "High; requires a fast gas production to lift the heavy 'Media Masa' structure",
            ph_target: "pH 5.4 - 5.7",
            organic_acids: "Low acidity; the flavor profile is dominated by the Maillard reaction and the animal fat (lard)",
            enzymatic_activity: "Moderate; sugar is often added to ensure the thick dough browns thoroughly in the pan."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Onion Preparation",
                explanation: "Slice the onions very thin and soak them in salted cold water for 30 minutes. Squeeze them dry before topping. This ensures they are sweet and crunchy rather than bitter and burnt."
            },
            {
                tip: "The Iron Pan (Pizzera)",
                explanation: "Authentic Argentine pizza *must* be baked in a heavy-duty iron pan. It provides the thermal mass needed to cook the center while 'frying' the bottom in lard/oil."
            },
            {
                tip: "Fainá Companion",
                explanation: "In Argentina, it is essential to serve the pizza with 'Fainá' (a chickpea flour flatbread) on top. This is known as 'Pizza a caballo'."
            },
            {
                tip: "Cheese Quality",
                explanation: "Use a mozzarella with a high fat content. In Argentina, the 'Cuartirolo' or 'Muzarella' used is very creamy and flows easily."
            },
            {
                tip: "Chimichurri Pizzero",
                explanation: "Never use standard chimichurri; pizzerias use a specific 'chimichurri pizzero' made of oil, dried oregano, red pepper flakes, and garlic to brush over the onions."
            }
        ],
        what_if: [
            {
                scenario: "The top dough is raw",
                result: "The onions were too wet or the top layer was too thick",
                correction: "Squeeze the onions thoroughly and roll the top dough layer to less than 2mm."
            },
            {
                scenario: "The cheese didn't melt in the center",
                result: "The pizza wasn't in the oven long enough or the cheese was used straight from the freezer",
                correction: "Always use room-temperature cheese and extend the bake time at a slightly lower temperature (250°C)."
            },
            {
                scenario: "The bottom is soft and greasy",
                result: "Insufficient bottom heat or the pan was too thin",
                correction: "Use a heavy cast-iron pan and ensure it's sitting on the oven floor or a preheated stone."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Detroit Style",
                difference: "Both are pan pizzas with crispy cheese edges, but Argentine pizza is round, uses lard, and has a much higher volume of onions and a double-dough layer.",
                why_choose_this: "Choose Argentine for the unique onion-forward flavor and the 'Media Masa' bready texture."
            },
            {
                target_style: "Focaccia",
                difference: "Argentine Fugazza is technically a descendant of Genoese Focaccia, but baked with more oil and topped with significantly more onions and cheese.",
                why_choose_this: "Choose Argentine for a more 'complete meal' experience compared to snack-like focaccia."
            },
            {
                target_style: "Sicilian",
                difference: "Sicilian dough is more hydrated and airy (focaccia-like); Argentine Media Masa is slightly denser and more 'bread-like' (morbida).",
                why_choose_this: "Choose Argentine for the stuffed Fugazzeta complexity."
            }
        ],
        q_and_a: [
            {
                question: "What is 'Media Masa'?",
                answer: "Literally 'Half Dough', it refers to a medium-thickness crust (between thin Roman and thick pan) that is the standard in Argentina.",
                context: "Dough"
            },
            {
                question: "Why use lard?",
                answer: "Lard (grasa de pella) is the secret to the unique flavor and 'short' texture of the Argentine crust. It stems from the country's cattle-farming heritage.",
                context: "Ingredients"
            },
            {
                question: "What is a 'Fugazzeta' vs 'Fugazza'?",
                answer: "Fugazza is just onions on dough. Fugazzeta is stuffed with cheese and topped with onions. If it's Fugazzeta Rellena, it has even more cheese and often ham.",
                context: "Variants"
            },
            {
                question: "Where is the sauce?",
                answer: "Fugazzeta is traditionally a 'Pizza Blanca' (White Pizza). It contains no tomato sauce, relying on the juices from the onions and the fat from the cheese for moisture.",
                context: "Toppings"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "Standard commercial method in Buenos Aires."
            },
            {
                method: "Hybrid",
                suitability: "Ideal",
                notes: "Helps manage the high hydration of the dough and develops better handling characteristics."
            },
            {
                method: "Poolish",
                suitability: "Possible",
                notes: "Great for adding 'silky' texture to the Media Masa."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "High hydration (65%+) combined with lard allows the dough to expand vigorously in the pan, creating a spongy interior that absorbs some of the cheese oils without becoming 'gummy'.",
        methodSuitability: {
            direct: { suitable: true, notes: "Reliable for the thick structure." },
            biga: { suitable: false, notes: "Creates too many large air pockets; Media Masa needs a more uniform, bread-like cell structure." },
            poolish: { suitable: true, notes: "Excellent for the extensibility needed to stretch the dough into the pan corners." }
        },
        whatIf: [
            {
                scenario: "You omit the onions on top",
                outcome: "You lose the moisture needed to keep the top dough layer soft during the long pan-bake.",
                solution: "If doing a plain cheese stuffed pizza, you must brush the top dough with a lot of oil or water."
            }
        ],
        comparisons: [
            {
                vsStyle: "Buenos Aires vs Italian Pizza",
                difference: "Argentine pizza is more 'filling' and bread-like; Italian pizza is typically more 'refined' and focuses on the high-temperature char (leopard spotting)."
            }
        ],
        proTips: [
            "A pinch of sugar in the dough isn't for sweetness—it's to help the thick pan dough brown evenly in home ovens.",
            "Add a layer of ham (jamón cocido) inside with the mozzarella for a 'Fugazzeta Rellena Especial'.",
            "The best pans are the historical blue-steel ones (chapa) found in Argentine bazaars.",
            "Never use sweet onions—regular yellow onions provide the best savory/sweet balance when baked.",
            "Pair with a glass of Moscato wine for the full 'Calle Corrientes' experience."
        ]
    },

    tags: ["argentine", "pizza", "pan pizza", "fugazzeta", "media masa", "stuffed"],

    watchouts: [
        "Dough too cold? It won't stretch to the edges of the pan.",
        "Cheese leaking from the seal? It will burn and smoke.",
        "Raw onions on top without salt? They won't release moisture and might burn.",
        "Oven too hot? The bottom will burn before the internal cheese melts."
    ],

    notes: [
        "Icon of Buenos Aires food culture.",
        "Juan Banchero (1932) is the founder.",
        "Stuffed Pan Pizza (Two layers).",
        "Uses lard (grasa) in the dough.",
        "Massive topping volume (600g+ cheese)."
    ],

    references: [
        {
            source: "Pizzería Banchero - Historia de la Fugazzeta",
            url: "https://banchero.com.ar/",
            author: "Juan Banchero and Family",
            year: "2023"
        },
        {
            source: "Glosário de la Pizza Argentina",
            url: "https://www.infobae.com/tendencias/2018/09/20/misterios-de-la-pizza-argentina-por-que-es-tan-distinta-a-la-italiana/",
            author: "Pietro Sorba",
            year: "2018"
        },
        {
            source: "Appetite for Argentina - Pizza Styles",
            url: "https://argentina-pizza.com/",
            author: "Argentina Pizza Association",
            year: "2023"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/argentina-fugazzeta-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["mozzarella_low_moisture", "cebola", "oregano_dried", "olive_oil_extra_virgin", "presunto"]
};
