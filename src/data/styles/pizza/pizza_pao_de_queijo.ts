import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PIZZA DE PÃO DE QUEIJO (GLUTEN-FREE HYBRID)
 * 
 * Researched and validated content:
 * - Origin: Brazil (Traditional Minas Gerais dough adaptation)
 * - Technique: 'Escaldado' (Scalding starch), High-cheese enrichment
 * - Ingredients: Polvilho Doce/Azedo (Manioc Starch), Minas Cheese, Eggs
 * - Characteristics: Extremely chewy, crispy exterior, intense cheese flavor
 */
export const pizza_pao_de_queijo: DoughStyleDefinition = {
    id: "pizza_pao_de_queijo",
    name: "Pizza de Pão de Queijo",
    category: "pizza",
    recipeStyle: RecipeStyle.PAO_DE_QUEIJO,
    family: "Brazilian Specialty",

    origin: {
        country: "Brazil",
        region: "Minas Gerais / São Paulo",
        period: "Early 2000s (Commercial popularization)"
    },

    description: "Pizza de Pão de Queijo is a creative hybrid that uses the dough of the world-famous Brazilian cheese bread (Pão de Queijo) as a pizza base. Naturally gluten-free, the dough is made from manioc starch (polvilho) and high-quality cheese. When baked as a pizza, it develops a uniquely crispy bottom and a soft, elastic, and cheesy interior that pairs perfectly with traditional Brazilian toppings.",

    history: "Pão de Queijo has been a staple of Minas Gerais since the 18th century, but the idea of turning it into a pizza base is a relatively modern innovation. It gained popularity in specialized cafés and 'gluten-free' bakeries in the early 21st century. It represents the Brazilian tendency to 'pizzificar' (turn into pizza) any beloved local dough. Today, it is a gourmet specialty found in pizzerias looking to offer a high-flavor, gluten-free alternative that doesn't compromise on texture.",

    difficulty: "Medium",
    fermentationType: "direct", // Chemically/Steam leavened, but matched to closest enum

    base_formula: [
        { name: "Polvilho Doce (Sweet Manioc Starch)", percentage: 60 },
        { name: "Polvilho Azedo (Sour Manioc Starch)", percentage: 40 },
        { name: "Whole Milk", percentage: 40 },
        { name: "Vegetable Oil", percentage: 20 },
        { name: "Grated Minas Padrão or Parmesan Cheese", percentage: 50 },
        { name: "Whole Eggs", percentage: 30 },
        { name: "Salt", percentage: 1.5 }
    ],

    technicalProfile: {
        hydration: [40, 50], // Starch hydration behaves differently than flour
        salt: [1.0, 2.0],
        oil: [15, 25], // Extremely high fat content from cheese and oil
        sugar: [0, 0],
        flourStrength: "N/A (Gluten-free starch). Strength comes from the gelatinization of starch during scalding",
        ovenTemp: [200, 230], // Lower than wheat pizza to prevent burning the cheese-heavy dough
        recommendedUse: [
            "Gluten-free specialty menu",
            "Coffee-shop snack",
            "Gourmet Brazilian appetizers"
        ],
        difficulty: "Medium",
        ballWeight: { recommended: 300, min: 250, max: 400 },
        fermentationSteps: [
            "Scalding (Escaldado): Boil the milk, water, and oil. Pour over the manioc starch (polvilho). [Science: This process, known as 'pre-gelatinization', breaks the starch granules and creates the initial elastic matrix required to hold the structure without gluten]",
            "Mixing: Allow the scalded mixture to cool slightly, then add eggs and the grated cheese. Mix until a heavy, sticky dough forms. [Science: The eggs provide protein for structure and steam for expansion, while the cheese adds flavor and fat]",
            "Resting: Let the dough rest for 30 minutes. [Science: Allows the starch to finish hydrating and the fat to firm up, making it easier to handle]",
            "Shaping: Spread the dough into a pre-oiled pizza pan using a spoon or wet hands. [Science: The dough is more like a thick paste than a wheat dough]",
            "Pre-Bake: Bake the base for 10 minutes at 200°C. [Science: Sets the structure of the pão de queijo and creates the 'crust' before toppings are added]",
            "Topping: Add toppings (traditionally more cheese, guava paste, or savory meats).",
            "Final Bake: Bake for another 10-15 minutes until golden. [Science: The manioc starch turns from white to translucent-beige as it fully cooks, developing a chewy, 'gummy' but pleasant texture]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "N/A (Starch-based)",
            pl_ratio: "N/A",
            absorption_capacity: "Varies with scalding temperature",
            protein_type: "Albumin (from eggs) and Casein (from cheese)",
            science_explanation: "The mechanical strength of the dough is provided by the gelatinization of amylopectin in the manioc starch when heated with liquid."
        },
        thermalProfile: {
            oven_type: "Convection or Deck Oven",
            heat_distribution: "Moderate radiation; requires bottom heat to crisp the base",
            crust_development: "Doesn't form a 'bread' crust; develops a thin, crispy, golden-cheese skin",
            crumb_structure: "Highly irregular, 'chewy' larger air pockets created by steam expansion and egg setting"
        },
        fermentationScience: {
            yeast_activity: "None; expansion is purely physical (steam) and chemical (if using sour starch/polvilho azedo)",
            ph_target: "pH 4.8 - 5.2 (due to the acidity of polvilho azedo)",
            organic_acids: "Lactic acid from the fermented manioc starch (polvilho azedo)",
            enzymatic_activity: "Minimal during mixing; focus is on the thermal gelatinization of starches."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "The Polvilho Blend",
                explanation: "Always use a mix: Polvilho Doce gives the 'chew' and elasticity, while Polvilho Azedo provides the 'volume' and that characteristic sour, cheesy aroma."
            },
            {
                tip: "Scald correctly",
                explanation: "The liquid must be at a rolling boil. If it's too cool, the starch won't gelatinize, and your pizza will be a crumbly mess instead of an elastic bread."
            },
            {
                tip: "Use Cured Cheese",
                explanation: "A cured (cured minas or parmesan) cheese provides a much more intense flavor and better browning than fresh mozzarella in the dough."
            },
            {
                tip: "Romeu e Julieta",
                explanation: "The most iconic topping for a Pão de Queijo pizza is 'Romeu e Julieta'—thin slices of guava paste (goiabada) over Minas cheese."
            },
            {
                tip: "Wet Hands",
                explanation: "The dough is very sticky. Spread it in the pan using wet hands or a wet spoon to prevent it from sticking to you."
            }
        ],
        what_if: [
            {
                scenario: "The dough is too thin and hard",
                result: "Insufficient Polvilho Azedo or not enough eggs",
                correction: "Ensure at least 40% of your starch is the 'Azedo' (sour) type and don't skimp on the eggs."
            },
            {
                scenario: "The center remains 'slimy' or raw",
                result: "Under-baked or too many wet toppings",
                correction: "Always pre-bake the base until it's firm before adding sauce or toppings."
            },
            {
                scenario: "The dough didn't expand/rise",
                result: "The liquid wasn't hot enough during the scalding stage",
                correction: "Bring the oil/milk/water mixture to a full boil before pouring it over the polvilho."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Standard Wheat Pizza",
                difference: "Pão de Queijo base is gluten-free, much chewier, and contains its own cheese; wheat pizza is airy and light.",
                why_choose_this: "Choose this for a unique flavor experience and for anyone with gluten sensitivity."
            },
            {
                target_style: "Focaccia",
                difference: "Focaccia is yeasted and porous; Pão de Queijo is dense, elastic, and steam-leavened.",
                why_choose_this: "Choose this for a more 'cheese-forward' snack-like hybrid."
            },
            {
                target_style: "Cheese Biscuits",
                difference: "Similar ingredients, but the Pão de Queijo pizza uses a higher hydration and more eggs to allow spreading into a thin disc.",
                why_choose_this: "Choose this as a creative party appetizer."
            }
        ],
        q_and_a: [
            {
                question: "Is it really gluten-free?",
                answer: "Yes, manioc starch (polvilho) is naturally gluten-free. Just ensure your toppings are also certified gluten-free.",
                context: "Health"
            },
            {
                question: "Can I use it as a thin crust?",
                answer: "You can, but the iconic 'pão de queijo' texture is best when the dough is about 5mm – 8mm thick.",
                context: "Technique"
            },
            {
                question: "Why does it smell sour?",
                answer: "That's the Polvilho Azedo, which is fermented manioc starch. It provides the signature flavor that Brazilians love.",
                context: "Ingredients"
            },
            {
                question: "Can I freeze the base?",
                answer: "Yes! You can pre-bake the bases and freeze them. They go from freezer to oven perfectly.",
                context: "Storage"
            }
        ],
        fermentation_methods: [
            {
                method: "Scald",
                suitability: "Authentic",
                notes: "The essential technical step ('Escaldado') for any Pão de Queijo based dough."
            },
            {
                method: "Direct",
                suitability: "Possible",
                notes: "Some modern 'easy' recipes omit the scald, but the texture is significantly inferior."
            },
            {
                method: "Hybrid",
                suitability: "Not Recommended",
                notes: "Adding yeast to this dough is not traditional and usually results in a weird, unbalanced flavor."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Hydration is achieved through a combination of milk, oil, and liquid from the eggs. The starch 'absorbs' the heat and liquid during scalding, creating a paste that then sets during baking.",
        methodSuitability: {
            direct: { suitable: true, notes: "Reliable if using high-quality starch." },
            biga: { suitable: false, notes: "Not applicable to non-wheat doughs." },
            poolish: { suitable: false, notes: "Not applicable." }
        },
        whatIf: [
            {
                scenario: "You use only Polvilho Doce",
                outcome: "The pizza will be very flat and extremely chewy (almost like Japanese Mochi).",
                solution: "It's a valid variation but won't have the 'bread-like' lightness of a true Pão de Queijo."
            }
        ],
        comparisons: [
            {
                vsStyle: "Pizza mineira vs Pizza paulista",
                difference: "Mineira Style (this one) focuses on the cheese bread base; Paulista Style focuses on the classic wheat base with heavy toppings."
            }
        ],
        proTips: [
            "A pinch of baking powder can be added for extra loft if your Polvilho Azedo is weak.",
            "Use a blend of Minas Padrão and a bit of 'Meia Cura' for the perfect melting point.",
            "Add a pinch of turmeric (cúrcuma) to the dough for a richer golden color without affecting flavor.",
            "If the dough is too soft to shape, put it in the fridge for 15 minutes.",
            "Serve with a strong Brazilian black coffee for the authentic regional experience."
        ]
    },

    tags: ["brazilian", "gluten-free", "pão de queijo", "specialty", "cheese"],

    watchouts: [
        "Not boiling the liquid correctly? The dough will be 'greasy' and won't hold shape.",
        "Using cold eggs? They might 'shock' the hot starch—let them reach room temp.",
        "Too much cheese? The dough might become too heavy and greasy.",
        "Under-baking? The center will have a 'raw starch' taste."
    ],

    notes: [
        "Minas Gerais cultural heritage.",
        "Gluten-free by nature.",
        "Steam and Egg leavening.",
        "Escaldado (Scalding) is the core technique.",
        "High cheese and fat content."
    ],

    references: [
        {
            source: "Manual do Pão de Queijo - IPAC Minas",
            url: "http://www.iepha.mg.gov.br/",
            author: "Instituto Estadual do Patrimônio Histórico e Artístico de Minas Gerais",
            year: "2018"
        },
        {
            source: "A Ciência do Polvilho - EMBRAPA",
            url: "https://www.embrapa.br/",
            author: "Empresa Brasileira de Pesquisa Agropecuária",
            year: "2020"
        },
        {
            source: "Gastronomia Mineira - Tradição e Inovação",
            url: "https://www.senacmg.com.br/",
            author: "Senac Minas Gerais",
            year: "2022"
        }
    ],

    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/pao-de-queijo-pizza-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["minas_cheese", "catupiry", "mozzarella_low_moisture", "guava_paste"]
};
