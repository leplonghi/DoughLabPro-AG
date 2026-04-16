import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PIZZA FRITA (MONTANARA)
 * 
 * Researched and validated content:
 * - Origin: Naples (Poor man's pizza / Street food)
 * - Technique: Deep frying dough + Topping
 * - Ingredients: Neapolitan Dough, Tomato Sauce, Parmesan, Basil
 * - Characteristics: Puffy, airy, crispy, not oily, light
 */
export const pizza_frita_montanara: DoughStyleDefinition = {
    id: "pizza_frita_montanara",
    name: "Pizza Frita (Montanara)",
    category: "pizza",
    recipeStyle: RecipeStyle.NEAPOLITAN, // Uses base Neapolitan dough
    family: "Neapolitan Street Food",

    origin: {
        country: "Italy",
        region: "Campania (Naples)",
        period: "Post-WWII Popularity (Ancient roots)"
    },

    description: "Pizza Frita (Montanara) is a unique dual-cooked masterpiece from Naples that bridges the gap between street food and gourmet dining. Unlike standard fried pizza, the Montanara is first deep-fried to create a puffy, airy structure, and then finished in a wood-fired oven to dry excess oil and caramelize the toppings. This 'double-cooking' technique results in a crust that is remarkably light, crisp, and smoky, with a texture similar to a savory donut but with the structural integrity of a pizza.",

    history: "The origins of Pizza Frita are deeply rooted in the poverty of post-WWII Naples, where wood for ovens was scarce and expensive. As depicted in Vittorio De Sica's 1954 film 'L'Oro di Napoli' (starring Sophia Loren), fried pizza was the 'people's food'—cheap, filling, and made on street corners. The 'Montanara' variant specifically refers to the method of topping the fried dough with sauce and cheese (like a pizza) rather than stuffing it (like a calzone). Legend says it brought the flavors of the 'mountains' (Montanara) to the city. In recent years, celebrated pizzaiolos like Antonio Starita and Isabella De Cham have elevated this humble street food to a gourmet art form, reintroducing it to the world as a sophisticated, light-as-air delicacy.",

    difficulty: "Hard",
    fermentationType: "direct",

    base_formula: [
        { name: "00 Flour (Medium Strength)", percentage: 100 },
        { name: "Water", percentage: 65 },
        { name: "Salt", percentage: 2.5 },
        { name: "Fresh Yeast", percentage: 0.2 },
        { name: "Frying Oil (Sunflower or Peanut)", percentage: 0 } // External
    ],

    technicalProfile: {
        hydration: [65, 70], // High hydration helps create explosive steam for the puff
        salt: [2.5, 3.0],
        oil: [0, 0], // Traditionally no oil in the dough itself
        sugar: [0, 0],
        flourStrength: "Medium-Strong (W280-320). Needs elasticity to hold the puff without bursting.",
        ovenTemp: [175, 430], // Oil Temp: 175°C | Oven Baking Temp: 430°C
        recommendedUse: [
            "Montanara (Fried then Baked)",
            "Pizza Fritta Completa (Filled/Stuffed)",
            "Angioletti (Fried dough strips)"
        ],
        difficulty: "Hard",
        ballWeight: { recommended: 160, min: 120, max: 200 }, // Slightly lighter than standard pizza
        fermentationSteps: [
            "Mix: Gentle mixing to preserve gluten structure. Final dough temp 24°C.",
            "Bulk Fermentation: 2-4 hours at room temperature to activate yeast.",
            "Balling: Tight balls (160g) to ensure even expansion during frying.",
            "Cold Proof: 24-48 hours at 4°C. [Science: Long cold fermentation degrades proteins, ensuring the fried dough is light and not chewy]",
            "Relax: bring to room temp (20°C) for 2-3 hours before frying.",
            "Shape: Gently extend by hand, keeping some thickness. Poking a center dimple prevents it from becoming a ball.",
            "Fry (Phase 1): Deep fry in sunflower/peanut oil at 175°C for ~60 seconds. Baste with hot oil. [Science: Rapid water evaporation causes violent expansion]",
            "Drain & Top: Drain vertically. Top with hot marinara, parmesan, and basil.",
            "Bake (Phase 2): Finish in 430°C oven for 60-90 seconds. [Science: Evaporates surface oil, adds char, and melts cheese]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W280-320 (Medium-Strong)",
            pl_ratio: "0.50-0.60 (Elastic/Balanced)",
            absorption_capacity: "High (65-70%)",
            protein_type: "Type 00 Soft Wheat",
            science_explanation: "A stronger W index is required than standard baked pizza because the dough must withstand the mechanical stress of rapid gas expansion in hot oil without tearing. The gluten network acts as a balloon."
        },
        thermalProfile: {
            oven_type: "Dual: Deep Fryer + Wood Oven",
            heat_distribution: "Convection (Oil) -> Radiation (Oven)",
            crust_development: "Phase 1: Gelatinization & crisping via oil (Maillard). Phase 2: Drying & charring via oven.",
            crumb_structure: "Extreme alveolation (honeycomb) due to 'explosive' steam generation in oil."
        },
        fermentationScience: {
            yeast_activity: "Controlled/Retarded",
            ph_target: "pH 5.3-5.5",
            organic_acids: "Balanced",
            enzymatic_activity: "High (Proteolysis reduces chewiness)"
        }
    },

    education: {
        pro_tips: [
            {
                tip: "The 175°C Rule",
                explanation: "Oil temperature is critical. Too low (<160°C) and the dough acts like a sponge, absorbing oil. Too high (>190°C) and the outside burns before the inside cooks. 175°C is the sweet spot."
            },
            {
                tip: "The Dimple Technique",
                explanation: "Before frying, press a small depression in the center of the disc. This prevents the dough from ballooning into a sphere, keeping it flat enough to hold toppings later."
            },
            {
                tip: "Vertical Draining",
                explanation: "Always drain the fried dough vertically (standing up) on paper flow. This uses gravity to remove excess oil from the surface before topping."
            },
            {
                tip: "Sauce Temperature",
                explanation: "Use warm sauce! Placing cold sauce on hot fried dough shocks the crust and can make it soggy. The sauce should be simmering."
            }
        ],
        what_if: [
            {
                scenario: "Result is Greasy/Heavy",
                result: "Oil too cold or crowded fryer",
                correction: "Fry fewer pies at once and monitor temp. Ensure high hydration in dough to repel oil."
            },
            {
                scenario: "Dough didn't puff",
                result: "Under-proofed or dough too cold",
                correction: "Dough must be at room temperature (20-22°C) when hitting the oil for maximum expansion."
            },
            {
                scenario: "Chewy/Tough Crust",
                result: "Flour too strong or under-fermented",
                correction: "Increase fermentation time (24h+) to degrade gluten strength slightly."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Standard Neapolitan",
                difference: "Montanara provides a crunchier, more 'biscuit-like' exterior and a much airier interior due to the frying process.",
                why_choose_this: "Choose Montanara as a shared appetizer or a decadent alternative to the classic."
            },
            {
                target_style: "Classic Pizza Fritta (Stuffed)",
                difference: "Classic Fritta is a closed pocket (Calzone) fried entirely. Montanara is open, fried, THEN baked.",
                why_choose_this: "Montanara offers the best of both worlds: fried texture + wood-fired flavor."
            }
        ],
        q_and_a: [
            {
                question: "Why bake it after frying?",
                answer: "Baking dries out the excess surface oil, making the final product surprisingly light. It also allows the cheese to melt and the sauce to integrate without making the crust soggy.",
                context: "Technique"
            },
            {
                question: "What oil represents valid tradition?",
                answer: "Sunflower or Peanut oil are standard today for their high smoke points and neutral flavor. Lard was historical but is rare now.",
                context: "Ingredients"
            },
            {
                question: "Is this authentic?",
                answer: "Yes, absolutely. While the 'Montanara' (fried then baked) is a more specific/modern refinement, frying dough is an ancient Neapolitan tradition pre-dating wood-fired pizza availability.",
                context: "Authenticity"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Ideal",
                notes: "24-48h Cold Fermentation gives the best digestibility and lightest texture."
            },
            {
                method: "Poolish",
                suitability: "Authentic",
                notes: "Adds extensibility and lightness, helping the 'puff' in the oil."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Don't go too high (>70%) or it's hard to handle near hot oil. 65% is safe.",
        methodSuitability: {
            direct: { suitable: true, notes: "Best." },
            poolish: { suitable: true, notes: "Excellent." },
            biga: { suitable: true, notes: "Good structure." }
        },
        whatIf: [
            {
                scenario: "You use Bread Flour",
                outcome: "Chewy and tough. Use 00 Pizza flour.",
                solution: "Use 00."
            }
        ],
        comparisons: [
            {
                vsStyle: "Langos (Hungarian)",
                difference: "Langos has potato in dough often. Montanara is pure pizza dough."
            }
        ],
        proTips: [
            "Sauce must be warm before topping, or it cools the pizza too fast.",
            "Grate extremely fine parmesan (dust) to stick to the fried surface."
        ]
    },

    tags: ["pizza-frita", "fried", "neapolitan", "montanara", "street-food"],

    watchouts: [
        "Hot oil is dangerous.",
        "Water in oil = explosion. Dry hands.",
        "Over-crowding the fryer drops temp."
    ],

    notes: [
        "Neapolitan Street Classic.",
        "Deep Fried.",
        "Light and Airy.",
        "Top with simple Marinara."
    ],

    references: [
        {
            source: "Starita a Materdei - The Home of Montanara",
            url: "https://www.pizzeriastarita.it/en/",
            author: "Antonio Starita",
            year: "1901"
        },
        {
            source: "L'Oro di Napoli (Film)",
            url: "https://www.imdb.com/title/tt0047313/",
            author: "Vittorio De Sica",
            year: "1954"
        },
        {
            source: "Isabella De Cham Pizza Fritta",
            url: "https://www.instagram.com/isabelladecham_pizzafritta/",
            author: "Isabella De Cham",
            year: "2018"
        },
        {
            source: "AVPN - Fried Pizza Standards",
            url: "https://www.pizzanapoletana.org/"
        }
    ],

    flavorProfile: {
        primaryFlavors: ["airy oil-toasted wheat", "bright bright Naples marinara", "sharp parmesan crust", "fresh sweet basil finish"],
        aromaProfile: ["hot sunflower oil fry crust", "wood-fired char contrast", "vibrant basil and tomato", "toasted parmesan perfume"],
        textureNotes: ["explosive puff-crisp exterior", "extreme honeycomb alveolatura interior", "savory-donut lightness", "grease-free thanks to vertical drain + oven finish"],
        pairingRecommendations: ["Simple marinara (hot) as sauce", "Parmigiano Reggiano dust (not mozzarella)", "Fresh basil added after oven phase", "Sparkling Campanian white wine"]
    },

    culturalContext: "Pizza Frita is Naples' answer to post-WWII food scarcity — when wood for pizza ovens was too expensive, resourceful Neapolitan cooks turned to the street fryer. Immortalized by Sophia Loren in Vittorio De Sica's 1954 film 'L'Oro di Napoli', it remains a symbol of Neapolitan ingenuity and the street food soul of the city's working-class identity.",

    globalPresence: "International attention surged when gourmet pizzaiolos like Antonio Starita (Materdei) and Isabella De Cham began presenting Montanara at international food events. The style is now found in select artisan pizzerias in New York and London, commanding premium prices as a modern sophisticated appetizer.",

    pairings: {
        canonical: ["Hot marinara + fine parmesan dust + fresh basil", "No cheese during fry phase (top only post-fry)", "Smoked buffalo ricotta drizzle (modern)"],
        modern: ["Stracciatella + cherry tomato confit + basil", "Prosciutto di Parma + burrata (post-bake add, no further heat)", "Black truffle shaver + scamorza pre-oven"],
        regional: ["Sparkling Falanghina DOC (Campanian white)", "Limoncello shot as digestif after", "Babà al Rum (Neapolitan dessert) as sweet follow-up"]
    },

    experimentSuggestions: [
        "Measure oil temp with thermometer: fry at 165°C vs 175°C vs 185°C and compare oil absorption and puff quality.",
        "Try the dimple technique before frying vs no dimple and compare the vertical shape and topping stability.",
        "Drain vertically for 30 seconds vs laying flat and compare oil on the surface before topping.",
        "Use peanut oil vs sunflower oil for frying and compare the flavor neutrality and crust color.",
        "Skip the oven phase (pure fry only) vs full Montanara double-cook and compare the surface grease and crunch."
    ],

    learnLinkTags: ["gluten-network", "cold-retard", "maillard-reaction", "oven-spring", "fermentation-chemistry"],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/pizza_frita_montanara_hero.png",
        dough: "/images/styles/pizza_frita_montanara_dough.png",
        crumb: "/images/styles/pizza_frita_montanara_crumb.png"
    },
    recommendedFlavorComponents: ["tomato_sauce_cooked", "parmesan", "basil_fresh"]
};
