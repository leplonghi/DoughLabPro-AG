import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * NY STYLE CHOCO CHIP COOKIE (LEVAIN-STYLE)
 * 
 * Researched and validated content:
 * - Origin: NYC, USA (Levain Bakery, 1995 McDonald & Weekes)
 * - Technique: Cold-cubed butter, High-temp flash-bake (210°C), Zero flattening
 * - Ingredients: Bread Flour (for height), Walnuts, 60% Dark Chocolate
 * - Characteristics: Massive (6oz/170g), crispy shell, molten/gooey center
 */
export const cookie_ny_choc_chip: DoughStyleDefinition = {
    id: "cookie_ny_choc_chip",
    name: "NY Style (Levain-style) Cookie",
    category: "cookies_confectionery",
    recipeStyle: RecipeStyle.COOKIE_NY_CHOC_CHIP,
    family: "NYC Big Cookies",

    origin: {
        country: "USA",
        region: "Upper West Side, Manhattan",
        period: "1995 (Connie McDonald and Pamela Weekes)"
    },

    description: "The NY Style 'Levain' Cookie is a global confectionery phenomenon. Unlike standard flat cookies, this version is massive, weighing 170g (6oz) per unit. It is characterized by its mountain-like shape, a deeply browned, crispy exterior shell, and a decadent, almost 'raw' molten center. It uses high-protein bread flour and cold-cubed butter to prevent the dough from spreading in the oven, ensuring the cookies stay tall and moist.",

    history: "Originally baked by the founders of Levain Bakery to give them energy for ironman training, the cookie became an accidental success. People began lining up around the block in 74th Street, Manhattan, for the 'Ultimate Chocolate Chip Walnut Cookie'. It redefined the US cookie market, moving away from thin/crispy biscuits towards a dessert that eats like a hybrid between a cookie and a scone.",

    difficulty: "Medium",
    fermentationType: "cold", // Referenced here as "dough rest"

    base_formula: [
        { name: "Bread Flour (Strong)", percentage: 60 },
        { name: "All-Purpose Flour", percentage: 40 },
        { name: "Cold Cubed Unsalted Butter", percentage: 55 },
        { name: "Brown Sugar (Light/Dark blend)", percentage: 45 },
        { name: "Granulated White Sugar", percentage: 25 },
        { name: "Whole Eggs (Cold)", percentage: 20 },
        { name: "Chocolate Chips (60%+ Cocoa)", percentage: 80 },
        { name: "Walnut Halves", percentage: 60 },
        { name: "Baking Soda", percentage: 0.8 },
        { name: "Cornstarch (The 'Tenderizer')", percentage: 1 },
        { name: "Sea Salt", percentage: 1.2 }
    ],

    technicalProfile: {
        hydration: [15, 25], // Hydration comes primarily from eggs and sugar liquefaction
        salt: [1.0, 1.5],
        oil: [0, 0], // Replaced by high butter content (55%+)
        sugar: [60, 80],
        flourStrength: "Mixed: Bread flour provides the structure (height); AP flour keeps the crumb tender",
        ovenTemp: [200, 220], // Flash bake is the secret to the gooey center
        recommendedUse: [
            "Premium Bakery dessert",
            "Classic NYC Walnut & Chocolate snack",
            "Ice cream sandwich base"
        ],
        difficulty: "Medium",
        ballWeight: { recommended: 170, min: 150, max: 200 }, // The '6oz' golden rule
        fermentationSteps: [
            "Creaming (Cold Method): Mix cold cubed butter with sugars for 2 minutes on low. [Science: Unlike standard room-temp creaming, we want to incorporate minimal air to keep the texture dense]",
            "Adding Liquids: Mix in cold eggs and vanilla. [Science: Keeping ingredients cold prevents the fat from melting, which is crucial for maintaining the cookie's height]",
            "Dry Integration: Fold in the flours, baking soda, cornstarch, and salt. Mix until the last streak of flour disappears. [Science: Over-mixing here would develop too much gluten, making the cookie 'bready' instead of 'melty']",
            "Fold-ins: Add the massive chunks of walnuts and chocolate. [Science: The walnuts act as 'scaffolding', helping the dough stand tall in the oven]",
            "Chilling: Chill the shaped 170g mounds for at least 24 hours at 4°C. [Science: This 'maturation' stage allows the starch to fully hydrate and the fats to solidify, ensuring the cookie doesn't spread into a puddle when baked]",
            "Baking: Bake at a high temperature (210°C) for 10-12 minutes. [Science: The high heat 'shocks' the starch on the outside into a rigid crust before the center has time to reach full temperature, leaving the inside at a perfect 75°C 'molten' state]",
            "Resting: Must rest on the hot tray for 15 minutes. [Science: Carry-over cooking finishes the structure without over-baking the core]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W240-280 (Blend)",
            pl_ratio: "0.50",
            absorption_capacity: "High (due to high brown sugar content)",
            protein_type: "Strong soft wheat blend",
            science_explanation: "The bread flour (12% protein) is essential. Standard AP flour (9%) would not have the structural tenacity to support the 60% chocolate-to-flour ratio, causing the cookie to collapse."
        },
        thermalProfile: {
            oven_type: "Convection or Deck Oven",
            heat_distribution: "High surface radiation to create the 'crust shell'",
            crust_development: "Craggy, deeply browned, and rigid; characterized by a 'baked-twice' appearance",
            crumb_structure: "Dense, heterogeneous; large pools of molten chocolate suspended in a fudge-like dough"
        },
        fermentationScience: {
            yeast_activity: "None; expansion is provided by Baking Soda (and steam from eggs)",
            ph_target: "pH 6.8 - 7.2 (Slightly alkaline to promote Maillard browning)",
            organic_acids: "Low; dominated by the molasses notes from brown sugar",
            enzymatic_activity: "High during the 24h cold rest; amylase breaks down starch into simple sugars, which caramelize into the dark craggy exterior."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Don't flatten!",
                explanation: "Keep the dough in loose, craggy balls. Do NOT press them down. The irregular surface is what catches the heat and creates the signature Levain texture."
            },
            {
                tip: "Cold Butter is King",
                explanation: "If your butter is room temperature, the cookies will spread. Use it straight from the fridge and cut into 1cm cubes."
            },
            {
                tip: "Cornstarch Secret",
                explanation: "Cornstarch inhibits gluten formation and creates a 'dry' but tender crumb that prevents the gooey center from feeling like raw flour."
            },
            {
                tip: "Toasted Walnuts",
                explanation: "Briefly toast the walnuts before adding them to the dough. It dramatically increases the aromatic depth of the final cookie."
            },
            {
                tip: "Baking Temperature",
                explanation: "If you bake at 180°C (standard), you'll get a normal cookie. You MUST go to 210°C to get the 'shock' effect that defines the NY style."
            }
        ],
        what_if: [
            {
                scenario: "The cookies are flat and unified",
                result: "Dough was too warm or butter was too soft",
                correction: "Freeze the dough balls for 1 hour before baking and check your oven temperature."
            },
            {
                scenario: "The center is raw and floury",
                result: "Bake time was too short or dough balls were too large",
                correction: "Extend bake time by 1-2 minutes or slightly reduce ball weight to 150g."
            },
            {
                scenario: "The cookies are dry and hard",
                result: "Over-baked or too much flour was used",
                correction: "Take them out when the top is just golden but still feels soft to the touch. Use a scale for all ingredients."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Toll House (Classic American)",
                difference: "Toll House is thin, buttery, and even; NY Style is giant, craggy, and molten.",
                why_choose_this: "Choose NY style for a 'dessert' experience that dominates any table."
            },
            {
                target_style: "Shortbread",
                difference: "Shortbread is crumbly and lean; NY Style is rich, loaded with inclusions, and elastic.",
                why_choose_this: "Choose NY style for maximum decadence and flavor variety."
            },
            {
                target_style: "Brownies",
                difference: "Brownies have a paper-thin shell and uniform fudge interior; NY cookies have a thick, crunchy shell and a 'pitted' heterogeneous interior.",
                why_choose_this: "Choose NY Style for the contrast of textures."
            }
        ],
        q_and_a: [
            {
                question: "Why use Walnuts?",
                answer: "They provide structural 'bones' for the cookie. They prevent the chocolate from sinking and keep the 170g mass upright during baking.",
                context: "Ingredients"
            },
            {
                question: "Is the center safe to eat?",
                answer: "Yes. As long as the internal temperature reaches 74°C (165°F), the eggs and flour are safe, despite the molten look.",
                context: "Safety"
            },
            {
                question: "Can I make them smaller?",
                answer: "You can, but the 'molten center' effect requires a large thermal mass. If you make them under 100g, they will likely bake through completely.",
                context: "Scaling"
            },
            {
                question: "Why Bread Flour?",
                answer: "The extra protein (gluten) creates a stronger 'cage' that holds the cookie TALL rather than letting it melt wide.",
                context: "Science"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "A minimum of 24h (ideally 48h) chill is mandatory for the true NY flavor and height."
            },
            {
                method: "Direct",
                suitability: "Possible",
                notes: "Cookies will spread more and look 'pale'—not recommended."
            },
            {
                method: "Hybrid",
                suitability: "Not Recommended",
                notes: "Yeast has no place in this cookie style."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Hydration is extremely low. The 'dough' is held together by the fat of the butter and the moisture in the eggs. During baking, the sugar melts into a syrup, providing the final liquid state that allows the cookie to set.",
        methodSuitability: {
            direct: { suitable: true, notes: "Only for small batches." },
            biga: { suitable: false, notes: "N/A" },
            poolish: { suitable: false, notes: "N/A" }
        },
        whatIf: [
            {
                scenario: "You omit the salt",
                outcome: "The cookie will taste cloyingly sweet and 'flat'. Salt is the engine that drives the chocolate and butter flavors.",
                solution: "Never omit salt; ideally use Fleur de Sel on top after baking."
            }
        ],
        comparisons: [
            {
                vsStyle: "NYC vs Mall Cookie",
                difference: "NYC Style focuses on high-quality dark chocolate and massive size; Mall Cookies tend to be flatter, sweeter (milk chocolate), and use more preservatives."
            }
        ],
        proTips: [
            "Freeze your chocolate chips before folding them in to prevent them from melting during the mix.",
            "Age the dough for 72 hours—the difference in caramel flavor is staggering.",
            "Use 'Half-Valnuts'—smaller pieces won't provide the same structural support.",
            "A convection oven is actually better here than a domestic one as it dries the shell faster.",
            "Wait at least 30 minutes before eating; the center needs time to 'set' into its final fudge state."
        ]
    },

    tags: ["cookie", "new york", "levain", "chocolate chip", "massive", "gourmet"],

    watchouts: [
        "Over-creaming the butter? The cookie will collapse during baking.",
        "Baking at 180°C? You'll get a standard flat cookie.",
        "Not enough dough rest? The cookies will spread into each other.",
        "Cheap chocolate? It will turn into a burnt mess at 210°C."
    ],

    notes: [
        "Global icon of NYC bakeries.",
        "Giant 170g (6oz) size.",
        "Molten/Gooey center technique.",
        "Uses Cold-Cubed butter method.",
        "24-48h chilled maturation is key."
    ],

    references: [
        {
            source: "Levain Bakery: The Cookie that Changed Everything",
            url: "https://levainbakery.com/pages/our-story",
            author: "Connie McDonald",
            year: "2023"
        },
        {
            source: "The Science of the Perfect Cookie (NYT)",
            url: "https://www.nytimes.com/2008/07/09/dining/09curi.html",
            author: "David Leite",
            year: "2008"
        },
        {
            source: "Bravetart: Iconic American Desserts",
            url: "https://www.seriouseats.com/bravetart-iconic-american-desserts",
            author: "Stella Parks",
            year: "2017"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/ny-cookie-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["dark_chocolate_70", "walnuts", "salted_butter_normandy", "vanilla_madagascar", "pecan_nuts"]
};
