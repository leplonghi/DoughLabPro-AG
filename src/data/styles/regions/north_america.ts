import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';
import { useTranslation } from '@/i18n';

const nycSlice: DoughStyleDefinition = {
    id: "nyc_slice_shop",
    name: t('styles.new_york_slice_shop'),
    category: "pizza",
    recipeStyle: RecipeStyle.NEW_YORK,
    origin: {
        country: t('styles.usa_9'),
        region: t('styles.new_york_city_4'),
        period: t('styles.early_20th_century_2')
    },
    description: "The iconic street slice. Large (18-20 inch), foldable, crispy yet pliable. Characterized by a symbiotic relationship between the cheese oil and the sauce.",
    history: "Evolved from Neapolitan immigrants adapting to coal ovens and high-gluten North American flour. The 'gas deck' era defined the modern street slice.",
    difficulty: t('styles.medium_74'),
    fermentationType: "cold",

    technicalProfile: {
        hydration: [62, 65],
        salt: [2.0, 2.5],
        oil: [1, 3],
        sugar: [1, 2],
        flourStrength: "W360-400 (High Gluten)",
        ovenTemp: [280, 300],
        recommendedUse: [t('styles.cheese_slice_2'), t('styles.pepperoni_4')],
        difficulty: t('styles.medium_75'),
        fermentationSteps: [
            "Intensive mix to windowpane. [Science: High protein flour (14%) requires significant mechanical energy to align gluten for the thin stretch.]",
            "Bulk ferment 1h. [Science: Jumpstarts yeast activity before cold shock.]",
            "Cold Maturation 24-72h. [Science: Creates micro-blisters on the crust via organic acid production and prevents over-browning by consuming excess sugars.]",
            "Warm up 2h before bake. [Science: Cold dough in a hot oven bubbles aggressively; tempering ensures even oven spring.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W360-400 (High Gluten)",
            pl_ratio: "0.6 (Elastic)",
            absorption_capacity: "High (65%)",
            protein_type: "Spring Wheat (14%)",
            science_explanation: "High protein requires oil/sugar (tenderizers) to allow the 'fold' without the crust cracking like a cracker. The gluten density supports the large 18-inch diameter."
        },
        thermalProfile: {
            oven_type: t('styles.gas_deck_2'),
            heat_distribution: "Conduction (Stone)",
            crust_development: t('styles.crispy_pliable_golden'),
            crumb_structure: t('styles.thin_dense_but_airy_rim')
        },
        fermentationScience: {
            yeast_activity: "Retarded (Cold)",
            ph_target: "pH 5.2",
            organic_acids: "Balanced (Acetic notes)",
            enzymatic_activity: "Controlled (Cold)"
        }
    },
    tags: ["nyc", "slice", "deck-oven", "foldable"],
    pairings: {
        canonical: [t('styles.low_moisture_mozzarella'), t('styles.oregano_2'), t('styles.garlic_powder')],
        modern: [t('styles.vodka_sauce_3')],
        regional: []
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
    references: [{ source: "Scott Wiener's Pizza History" }, { source: t('styles.modernist_pizza_13') }],
    images: {
        hero: "/images/styles/nyc-slice-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: t('styles.the_reheat_rule'),
                explanation: "Never microwave. Reheat in a skillet or on a hot stone (250°C) to restore the crust without drying the cheese."
            },
            {
                tip: t('styles.cheese_temp_matters'),
                explanation: "Use cold, cubed Low Moisture Mozzarella. If it's warm, it separates into oil before the crust is done."
            }
        ],
        what_if: [
            {
                scenario: t('styles.home_oven_only_reaches_250c'),
                result: t('styles.the_crust_dries_out_before_browning'),
                correction: "Add 2% sugar/malt to dough (browning aid) and use a baking steel, not a stone."
            },
            {
                scenario: t('styles.dough_retracts_when_stretching'),
                result: t('styles.gluten_is_too_cold_or_overworked'),
                correction: "Let dough sit at room temp for 1-2h before stretching to relax the gluten 'memory'."
            }
        ],
        comparative_analysis: [
            {
                target_style: t('styles.neapolitan_3'),
                difference: "NYC is larger (18inch), crisper, and has oil/sugar. Neapolitan is soft, wet, and lean.",
                why_choose_this: "Choose NYC for the 'fold', portability, and heavy cheese/toppings capability."
            }
        ],
        q_and_a: [
            {
                question: t('styles.is_nyc_water_the_secret'),
                answer: "Myth. While mineral content affects pH, comparable bagels/pizza are made worldwide by replicating the calcium/magnesium ratio or just using good technique.",
                context: t('styles.kenji_lopezalt')
            }
        ],
        fermentation_methods: [
            {
                method: t('styles.direct_14'),
                suitability: t('styles.ideal_7'),
                notes: "24-48h Cold Ferment is the definitive step for the flavor and micro-blisters."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "62-65% is the sweet spot. It allows the dough to be extensible enough for the 18-inch stretch but provides enough structure to hold the fold ('The Fold') without flopping.",
        methodSuitability: {
            direct: { suitable: true, notes: t('styles.the_classic_corner_slice_shop_method_often_sameday') },
            biga: { suitable: true, notes: "Adds excellent flavor but can make the dough too strong/bucky for easy stretching." },
            poolish: { suitable: true, notes: "Common in modern 'Artisan' slice shops for a lighter, puffier crust." }
        },
        whatIf: [
            {
                scenario: t('styles.crust_is_pale_and_white'),
                outcome: "Oven temp too low (<550°F) or forgot the sugar/oil.",
                solution: "At home temps (500°F), you MUST use 2% sugar and 3% oil to force browning."
            },
            {
                scenario: t('styles.dough_keeps_snapping_back_to_small_size'),
                outcome: t('styles.gluten_is_too_excited'),
                solution: "Let the dough balls rest at room temp for at least 2 hours before stretching. Cold dough = Snap back."
            }
        ],
        comparisons: [
            {
                vsStyle: t('styles.neapolitan_4'),
                difference: "NYC uses Oil, Sugar, and Malt. Neapolitan is lean. NYC is crispy/chewy; Neapolitan is soft/wet."
            }
        ],
        proTips: [
            "The 'Screen' Trick: Bake on a screen for 5 mins, then slide directly onto the stone to finish. Best of both worlds.",
            "Cure the balls: 48h cold fermentation is where the flavor lives."
        ]
    }
};

const detroitStyle: DoughStyleDefinition = {
    id: "detroit_style_classic",
    name: t('styles.detroit_style'),
    category: "pizza",
    recipeStyle: RecipeStyle.DETROIT,
    origin: {
        country: t('styles.usa_10'),
        region: t('styles.detroit_michigan'),
        period: "1946"
    },
    description: "Deep dish rectangular pizza baked in blue steel automotive parts pans. Famous for the 'frico'—a caramelized cheese crown around the edges.",
    history: "Created at Buddy's Rendezvous. Using industrial steel pans meant for carrying auto parts created a unique conduction heat that fried the crust in oil/fat.",
    difficulty: t('styles.medium_76'),
    fermentationType: "direct",

    technicalProfile: {
        hydration: [70, 75],
        salt: [2.0, 2.5],
        oil: [1, 2],
        sugar: [0, 1],
        flourStrength: t('styles.w300320_2'),
        ovenTemp: [260, 290],
        recommendedUse: [t('styles.pepperoni_5')],
        difficulty: t('styles.medium_77'),
        fermentationSteps: [
            "Mix to moderate development. [Science: Full windowpane not needed as the dough is supported by the pan.]",
            "Bulk ferment 1h. [Science: Initial gas generation.]",
            "Pan proof 2-3h. [Science: The critical step. Dough must relax completely to fill corners and aerate into a sponge-like crumb.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: t('styles.w300320_3'),
            pl_ratio: t('styles.balanced_11'),
            absorption_capacity: "High (70%+)",
            protein_type: t('styles.bread_flour_5'),
            science_explanation: "Structure is supported by the steel pan walls, so we don't need extreme gluten strength. High hydration aids the 'focaccia-like' open crumb."
        },
        thermalProfile: {
            oven_type: t('styles.blue_steel_pan'),
            heat_distribution: "Conduction (Oil Fry)",
            crust_development: "Fried, caramelized (Frico)",
            crumb_structure: t('styles.spongelike_airy')
        },
        fermentationScience: {
            yeast_activity: t('styles.high_10'),
            ph_target: t('styles.normal_11'),
            organic_acids: t('styles.lactic_5'),
            enzymatic_activity: "High (High water)"
        }
    },
    tags: ["pan", "frico", "deep-dish", "detroit"],
    pairings: {
        canonical: [t('styles.wisconsin_brick_cheese'), ],
        modern: [t('styles.hot_honey_3')],
        regional: [t('styles.coney_island_hot_dog_pizza')]
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
        hero: "/images/styles/detroit-style-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: t('styles.the_frico_edge'),
                explanation: "Spread cheese ALL the way to the metal wall. The cheese melting down the side creates the structural 'Frico' wall."
            },
            {
                tip: t('styles.parbake_the_skin'),
                explanation: "For home ovens, bake the dough w/o toppings for 7 mins first to ensure the center cooks before the cheese burns."
            }
        ],
        what_if: [
            {
                scenario: "Center is raw/gummy",
                result: t('styles.insulated_by_too_much_sauce_or_dough_was_too_cold'),
                correction: "Apply sauce in 'Racing Stripes' ON TOP of cheese to allow heat to penetrate."
            },
            {
                scenario: t('styles.cannot_find_brick_cheese'),
                result: t('styles.you_lose_the_specific_buttery_tang'),
                correction: "Use 50% Low Moisture Mozzarella + 50% Monterey Jack (or Muenster) to simulate the fat/melt profile."
            }
        ],
        comparative_analysis: [
            {
                target_style: t('styles.sicilian'),
                difference: "Detroit uses Brick cheese, sauce on top, and steel pans. Sicilian uses olive oil, often crumbs, and sheet pans.",
                why_choose_this: "Choose Detroit for the caramelized cheese crown (Frico)."
            }
        ],
        q_and_a: [
            {
                question: t('styles.why_blue_steel_pans'),
                answer: "They conduct heat faster than aluminum, frying the bottom in the oil before the top burns.",
                context: t('styles.automotive_history')
            }
        ],
        fermentation_methods: [
            {
                method: t('styles.direct_15'),
                suitability: t('styles.authentic_10'),
                notes: t('styles.traditionally_a_direct_dough_but_cold_ferment_adds')
            }
        ]
    },
    deepDive: {
        hydrationLogic: "70-75% is mandatory. This is effectively a focaccia baked with cheese. The high water ensures the thick crumb remains light and airy like a sponge, not dense like a brick.",
        methodSuitability: {
            direct: { suitable: true, notes: "Standard. The pan supports the structure, so complex gluten dev isn't strictly needed." },
            biga: { suitable: false, notes: t('styles.unnecessary_complexity_for_a_pan_pizza') },
            poolish: { suitable: true, notes: t('styles.fantastic_for_an_even_lighter_more_aerated_crumb') }
        },
        whatIf: [
            {
                scenario: "Center is raw (Gum Line)?",
                outcome: t('styles.insulated_by_too_much_sauce_or_dough_was_cold'),
                solution: t('styles.parbake_the_skin__cheese_for_7_mins_then_add_sauce')
            },
            {
                scenario: "No 'Frico' (Cheese Crown)?",
                outcome: "You used Mozzarella or didn't push cheese to the edge.",
                solution: "Use Brick Cheese or Muenster/Jack blend. It must touch the metal wall."
            }
        ],
        comparisons: [
            {
                vsStyle: t('styles.chicago_deep_dish_3'),
                difference: t('styles.detroit_is_a_light_fried_dough_chicago_is_a_dense_')
            }
        ],
        proTips: [
            "Season your pans: Blue steel improves with age. Never wash with soap.",
            "Sauce on Top: It prevents the gum line. Do not spread it; stripe it."
        ]
    }
};

const chicagoDeepDish: DoughStyleDefinition = {
    id: "chicago_deep_dish",
    name: t('styles.chicago_deep_dish_4'),
    category: "pizza",
    recipeStyle: RecipeStyle.CHICAGO_DEEP_DISH,
    origin: {
        country: t('styles.usa_11'),
        region: t('styles.chicago_illinois'),
        period: "1943"
    },
    description: "A casserole-like pizza with high sides, eaten with a knife and fork. The crust is biscuit-like, short, and flaky due to high oil/fat content.",
    history: "Invented at Pizzeria Uno. It inverted the pizza structure: Cheese on bottom, toppings middle, sauce on top to prevent burning during the long bake.",
    difficulty: t('styles.medium_78'),
    fermentationType: "direct",

    technicalProfile: {
        hydration: [50, 58],
        salt: [1.5, 2.0],
        oil: [15, 25], // Often Corn Oil or Butter
        sugar: [1, 2],
        flourStrength: "W240-280 (AP/Pastry blend)",
        ovenTemp: [220, 230],
        recommendedUse: [t('styles.sausage_patty'), t('styles.spinach')],
        difficulty: t('styles.medium_79'),
        fermentationSteps: [
            "Mix for short time (Undermixed). [Science: Minimizing gluten development ensures a 'short', biscuit-like texture rather than chewy bread.]",
            "Bulk ferment 1-2h. [Science: Flavor development only; gas retention is secondary to texture.]",
            "Laminate/Press into pan. [Science: No elasticity required; the dough should mold like pie crust.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W240 (AP/Biscuit)",
            pl_ratio: "Short (High Fat)",
            absorption_capacity: t('styles.low_21'),
            protein_type: "AP/Pastry Blend",
            science_explanation: "A 'Short Dough'. The high fat content coats the proteins, preventing long gluten chains. This creates a flaky, biscuit-like break instead of a chew."
        },
        thermalProfile: {
            oven_type: t('styles.deep_pan'),
            heat_distribution: "Conduction (Slow)",
            crust_development: "Fried/Biscuit",
            crumb_structure: t('styles.dense_flaky')
        },
        fermentationScience: {
            yeast_activity: t('styles.low_22'),
            ph_target: t('styles.neutral_8'),
            organic_acids: t('styles.none_13'),
            enzymatic_activity: t('styles.low_23')
        }
    },
    tags: ["casserole", "biscuit-crust", "corn-oil"],
    pairings: {
        canonical: [t('styles.italian_sausage_layer'), t('styles.chunky_tomato_sauce')],
        modern: [t('styles.giardiniera_2')],
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
    references: [{ source: t('styles.pizzeria_uno_history') }],
    images: {
        hero: "/images/styles/chicago_deep_dish_real.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: t('styles.the_biscuit_factor'),
                explanation: "Mix very briefly. Overmixing develops gluten, making it chewy instead of flaky. You want a 'short' dough."
            },
            {
                tip: t('styles.corn_oil_is_king'),
                explanation: "Although butter tastes great, corn oil provides the authentic specific flavor profile and texture of the original."
            }
        ],
        what_if: [
            {
                scenario: t('styles.dough_shrinks_when_pressing'),
                result: t('styles.elasticity_is_too_high'),
                correction: t('styles.let_it_rest_20_mins_if_it_persists_you_overmixed_n')
            }
        ],
        comparative_analysis: [
            {
                target_style: t('styles.pan_pizza_3'),
                difference: "Deep Dish is a pie/casserole with a short crust. Pan pizza (like Detroit) is a fried bread.",
                why_choose_this: t('styles.choose_deep_dish_for_a_sitdown_meal_experience')
            }
        ],
        q_and_a: [
            {
                question: t('styles.why_sauce_on_top'),
                answer: "Insulation. The cheese and meat would burn during the long 40-minute bake if exposed. The sauce protects them.",
                context: t('styles.physics_of_baking')
            }
        ],
        fermentation_methods: [
            {
                method: t('styles.direct_16'),
                suitability: t('styles.authentic_11'),
                notes: t('styles.short_ferment_is_standard_flavor_comes_from_fat_an')
            }
        ]
    },
    deepDive: {
        hydrationLogic: "50-55% plus high fat (15%+ Corn Oil/Butter). This is NOT bread. This is a savory pie crust. High hydration would develop gluten -> chewy -> wrong.",
        methodSuitability: {
            direct: { suitable: true, notes: t('styles.the_only_way_short_mix_direct_use') },
            biga: { suitable: false, notes: t('styles.completely_wrong_style') },
            poolish: { suitable: false, notes: t('styles.completely_wrong_style_2') }
        },
        whatIf: [
            {
                scenario: "Crust is tough/chewy?",
                outcome: t('styles.overmixed_you_developed_gluten'),
                solution: t('styles.mix_only_until_ingredients_combine_treat_it_like_a')
            },
            {
                scenario: t('styles.soggy_mess'),
                outcome: t('styles.sauce_was_too_thin_or_veggies_released_water'),
                solution: "Use thick crushed tomatoes. Pre-cook spinach/mushrooms to remove water."
            }
        ],
        comparisons: [
            {
                vsStyle: "Pan Pizza (Hut/Detroit)",
                difference: "Deep Dish is 'Short' (crumbles). Pan Pizza is 'Bread' (stretches)."
            }
        ],
        proTips: [
            "Laminate: Fold butter into the dough for a flaky layer effect (Malnati style).",
            "Let it rest: After baking, let the pie sit 5 mins to set heavily. If you cut immediately, it flows like lava."
        ]
    }
};



const sfSourdough: DoughStyleDefinition = {
    id: "sf_sourdough",
    name: t('styles.san_francisco_sourdough_2'),
    category: "bread",
    recipeStyle: RecipeStyle.SOURDOUGH,
    origin: {
        country: t('styles.usa_12'),
        region: t('styles.san_francisco_ca'),
        period: "1849 (Gold Rush)"
    },
    description: "The legendary West Coast sourdough. Extremely sour (acetic), thick blistered crust, and chewy crumb. Famous for the Lactobacillus sanfranciscensis bacteria.",
    history: "Boudin Bakery (1849) kept the 'mother' alive since the Gold Rush. The cool, foggy climate promotes acetic acid production over lactic acid.",
    difficulty: t('styles.expert_20'),
    fermentationType: "levain",

    technicalProfile: {
        hydration: [70, 78],
        salt: [2.0, 2.2],
        oil: [0, 0],
        sugar: [0, 0],
        flourStrength: t('styles.w300350'),
        ovenTemp: [230, 260],
        recommendedUse: [t('styles.clam_chowder_bowl'), t('styles.toast')],
        difficulty: t('styles.expert_21'),
        fermentationSteps: [
            "Maintain stiff starter. [Science: Stiff starters favor acetic acid production (sourness) and yeast vitality.]",
            "Long cold retard (12-24h). [Science: At low temps, bacteria produce more acid while yeast slows down, creating the signature tang.]",
            "Bake dark. [Science: Acidity inhibits Maillard reaction, so aggressive heat and time are needed for the dark chestnut color.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: t('styles.w300350_2'),
            pl_ratio: "Strong/Stiff",
            absorption_capacity: t('styles.high_11'),
            protein_type: t('styles.strong_wheat_8'),
            science_explanation: "Proteolysis (acid degrading gluten) is the enemy. We need very strong flour to survive the long, acidic fermentation without collapsing."
        },
        thermalProfile: {
            oven_type: "Dutch Oven / Hearth",
            heat_distribution: t('styles.radiant__steam'),
            crust_development: t('styles.blistered_thick'),
            crumb_structure: t('styles.wild_irregular')
        },
        fermentationScience: {
            yeast_activity: "Wild (Levain)",
            ph_target: "pH 4.0-4.5",
            organic_acids: "Acetic Dominant (Stiff Starter)",
            enzymatic_activity: "Very High (Proteolysis)"
        }
    },
    tags: ["sour", "wild-yeast", "gold-rush", "san-francisco"],
    pairings: {
        canonical: [t('styles.clam_chowder'), t('styles.dungeness_crab')],
        modern: [t('styles.avocado')],
        regional: [t('styles.seafood_cioppino')]
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
    references: [{ source: t('styles.boudin_history') }, { source: t('styles.microbiology_of_sourdough') }],
    images: {
        hero: "/images/styles/sf_sourdough_real.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: "The 'Tartine' Fold",
                explanation: "Don't knead. Perform gentle 'coil folds' every 30 mins during bulk to align gluten without degassing."
            },
            {
                tip: t('styles.steam_is_nonnegotiable'),
                explanation: "Use a Dutch Oven. The trapped steam keeps the crust soft, allowing massive expansion (Oven Spring) before setting."
            }
        ],
        what_if: [
            {
                scenario: "Starter is too sour (Acetic)",
                result: "Loaf is dense and tight. Acid destroys gluten structure (Proteolysis).",
                correction: "Feed starter more frequently (1:2:2 ratio) and use it younger (sweeter/lactic)."
            },
            {
                scenario: "No 'Ear' (Burst)",
                result: t('styles.scoring_was_too_shallow_or_oven_not_hot_enough'),
                correction: t('styles.score_at_a_45_degree_angle_and_ensure_steam_is_pre')
            }
        ],
        comparative_analysis: [
            {
                target_style: t('styles.french_baguette_2'),
                difference: "SF Sourdough is wild yeast (Levain) and acetic. Baguette is commercial yeast and mild.",
                why_choose_this: t('styles.choose_sf_sourdough_for_keeping_quality_and_comple')
            }
        ],
        q_and_a: [
            {
                question: "Is 'Lactobacillus sanfranciscensis' only in SF?",
                answer: "No. It's found worldwide. The 'SF Taste' is more about the cold fermentation technique and acetic acid balance than geography.",
                context: t('styles.modern_microbiology')
            }
        ],
        fermentation_methods: [
            {
                method: t('styles.sourdough_7'),
                suitability: t('styles.authentic_12'),
                notes: t('styles.strictly_pure_levain_no_commercial_yeast_allowed')
            }
        ]
    },
    deepDive: {
        hydrationLogic: "75%+ is standard. The acidity from the Levain tightens the gluten structure, allowing it to hold significant water without becoming soup. The water is needed for the open crumb.",
        methodSuitability: {
            direct: { suitable: false, notes: t('styles.impossible_this_is_sourdough') },
            biga: { suitable: false, notes: t('styles.this_is_sourdough') },
            poolish: { suitable: false, notes: t('styles.this_is_sourdough_2') }
        },
        whatIf: [
            {
                scenario: "Bread is dense/brick-like?",
                outcome: t('styles.starter_was_weak_or_bulk_fermentation_was_too_shor'),
                solution: "Ensure starter doubles in 4 hours. Push the bulk ferment until dough feels 'aerated'."
            },
            {
                scenario: "Too sour (Vinegar)?",
                outcome: "Fermented too warm or starter hadn't been fed.",
                solution: "Discard more starter, and ferment bulk at a cooler temp (20-22°C)."
            }
        ],
        comparisons: [
            {
                vsStyle: t('styles.pane_toscano'),
                difference: "SF is sour (Acetic) and salted. Toscano is mild and unsalted."
            }
        ],
        proTips: [
            "Feed the starter: A healthy microbiological colony is 90% of the work.",
            "The Dutch Oven: It simulates a professional steam injection deck oven perfectly."
        ]
    }
};

const newHavenApizza: DoughStyleDefinition = {
    id: "new_haven_apizza",
    name: t('styles.new_haven_apizza'),
    category: "pizza",
    recipeStyle: RecipeStyle.THIN_CRUST,
    origin: {
        country: t('styles.usa_13'),
        region: t('styles.new_haven_ct_2'),
        period: "1925"
    },
    description: "Coal-fired, oblong, thin-crust pizza known for its 'char'. Chewy, slightly smoky, and drier than Neapolitan.",
    history: "Frank Pepe (1925) started the tradition. 'Apizza' (pronounced ah-beets) is local dialect. The hallmark is the coal oven reaching 600°F+.",
    difficulty: t('styles.hard_28'),
    fermentationType: "cold",

    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.5],
        oil: [1, 2],
        sugar: [0, 1],
        flourStrength: t('styles.w300340'),
        ovenTemp: [315, 350], // Domestic adaptation target. Real ovens are 600F+
        recommendedUse: [t('styles.white_clam_pie'), ],
        difficulty: t('styles.hard_29'),
        fermentationSteps: [
            "Long cold fermentation (24-48h). [Science: Necessary to break down complex starches for the high-heat charring process.]",
            "Proof at room temp. [Science: Dough must be very extensible to stretch into the signature oblong shape without snapping back.]",
            "Coal Fired Bake. [Science: Intense dry heat evaporates surface moisture instantly, creating char without burning the center.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: t('styles.w300340_2'),
            pl_ratio: t('styles.extensible_8'),
            absorption_capacity: t('styles.medium_80'),
            protein_type: t('styles.high_gluten'),
            science_explanation: "High strength is required to stretch very thin without tearing, but extended cold fermentation relaxes the gluten (extensibility)."
        },
        thermalProfile: {
            oven_type: t('styles.coal_fired_deck'),
            heat_distribution: "Intense Radiation (600°F+)",
            crust_development: t('styles.charred_dry'),
            crumb_structure: t('styles.chewy_uneven')
        },
        fermentationScience: {
            yeast_activity: t('styles.retarded'),
            ph_target: t('styles.normal_12'),
            organic_acids: t('styles.balanced_12'),
            enzymatic_activity: "High (Maillard fuel)"
        }
    },
    tags: ["coal-fired", "char", "clam-pie", "connecticut"],
    pairings: {
        canonical: [t('styles.littleneck_clams'), t('styles.garlic_2'), t('styles.oregano_3'), t('styles.pecorino')],
        modern: [t('styles.bacon')],
        regional: [t('styles.foxon_park_soda')]
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
    references: [{ source: t('styles.frank_pepe_history') }, { source: t('styles.pizza_city_usa_2') }],
    images: {
        hero: "/images/styles/new_haven_apizza_real.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: t('styles.oblong_is_a_feature'),
                explanation: "Don't try to make it round. The 'Apizza' shape typically fills the peel. It's rustic."
            },
            {
                tip: t('styles.bake_darker'),
                explanation: "Char is flavor. Pulling it early 'to be safe' ruins the style. Let the edges turn black."
            }
        ],
        what_if: [
            {
                scenario: t('styles.oven_only_goes_to_260c'),
                result: "You won't get char.",
                correction: t('styles.use_2_sugar_in_the_dough_to_force_browning_at_lowe')
            }
        ],
        comparative_analysis: [
            {
                target_style: t('styles.nyc_slice'),
                difference: "Apizza is thinner, crispier, and much darker (charred). NYC is golden and pliable.",
                why_choose_this: t('styles.choose_apizza_for_a_crunchier_smoky_experience')
            }
        ],
        q_and_a: [
            {
                question: "Is 'Mozz' standard?",
                answer: "No. A 'Plain' pie in New Haven is Tomato Sauce + Oregano + Pecorino. You must ask for Mozzarella ('Mutz').",
                context: t('styles.frank_pepe_menu')
            }
        ],
        fermentation_methods: [
            {
                method: t('styles.direct_17'),
                suitability: t('styles.ideal_8'),
                notes: "Long cold proof (48h+) is needed to breakdown sugars for that intense char."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "60-65% drives the char. It needs to be dry enough to crisp rapidly, but wet enough to undergo the 48h ferment without drying out in the fridge.",
        methodSuitability: {
            direct: { suitable: true, notes: "But needs cold fermentation (Retarding) to be authentic." },
            biga: { suitable: false, notes: t('styles.not_typical_3') },
            poolish: { suitable: false, notes: t('styles.not_typical_4') }
        },
        whatIf: [
            {
                scenario: t('styles.it_burns_instantly'),
                outcome: t('styles.oven_too_hot_or_sugar_in_dough'),
                solution: t('styles.authentic_new_haven_has_no_sugar_if_baking_at_600f')
            },
            {
                scenario: t('styles.soggy_center'),
                outcome: "Clams/Toppings released water.",
                solution: t('styles.shuck_clams_last_minute_bake_longer_char_is_good')
            }
        ],
        comparisons: [
            {
                vsStyle: t('styles.nyc_slice_2'),
                difference: "New Haven is drier, thinner, oblong, and cooked darker (Charred)."
            }
        ],
        proTips: [
            "Pecorino Romano: The 'salt' of the pizza. Apply liberally.",
            "Don't worry about shape: If it's round, it's not Apizza."
        ]
    }
};


const nycBagel: DoughStyleDefinition = {
    id: "nyc_bagel",
    name: t('styles.new_york_bagel'),
    category: "bread",
    recipeStyle: RecipeStyle.BAGEL,
    origin: {
        country: t('styles.usa_14'),
        region: t('styles.new_york_city_5'),
        period: t('styles.late_19th_century')
    },
    description: "Dense, chewy, malty, and boiled before baking. The shiny, blistered crust is non-negotiable.",
    history: "Brought by Polish Jewish immigrants. The NYC water (chemistry) is often cited, but the boil + cold ferment method is the real secret.",
    difficulty: t('styles.hard_30'),
    fermentationType: "cold",

    technicalProfile: {
        hydration: [50, 55],
        salt: [2.0, 2.2],
        oil: [1, 2],
        sugar: [2, 4], // Malt Syrup
        flourStrength: "W380-420 (High Gluten)",
        ovenTemp: [240, 260],
        recommendedUse: [t('styles.cream_cheese__lox'), t('styles.bacon_egg_cheese')],
        difficulty: t('styles.hard_31'),
        fermentationSteps: [
            "Mix EXTREMELY stiff dough. [Science: Low hydration (50-55%) creates the signature dense chewiness.]",
            "Shape immediately. [Science: Shaping after proofing would Degas the dense structure too much.]",
            "Cold retard 24-48h. [Science: Relaxes the tight gluten and develops malt flavors.]",
            "Boil in Malt/Soda water. [Science: Gelatinizes the outer starch layer for shine and sets the crust size before baking.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W380-420 (Very High)",
            pl_ratio: t('styles.very_elastic'),
            absorption_capacity: "High (but under-hydrated)",
            protein_type: t('styles.high_gluten_spring_wheat'),
            science_explanation: "The highest protein flour possible is used. Because hydration is low (50%), the gluten is incredibly tight, creating the 'jaw workout' chewiness."
        },
        thermalProfile: {
            oven_type: "Revolving Deck / Boards",
            heat_distribution: "Convection/Radiant",
            crust_development: "Shiny, Blistered (Gelatinized)",
            crumb_structure: t('styles.dense_tight_2')
        },
        fermentationScience: {
            yeast_activity: "Retarded (Cold)",
            ph_target: t('styles.normal_13'),
            organic_acids: "Low (Direct)",
            enzymatic_activity: "Enhanced (Malt)"
        }
    },
    tags: ["bagel", "boiled", "malty", "nyc"],
    pairings: {
        canonical: [t('styles.lox'), t('styles.capers'), t('styles.red_onion')],
        modern: [],
        regional: [t('styles.everything_seasoning')]
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
    references: [{ source: t('styles.bagel_union_regulations') }],
    images: {
        hero: "/images/styles/nyc-bagel-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: t('styles.alkaline_boil'),
                explanation: "Add Barley Malt Syrup and Baking Soda (or Lye for pros) to the water. This spikes the pH for intense Maillard browning."
            },
            {
                tip: t('styles.cold_proof_shaped'),
                explanation: "Shape the bagels then retard them in the fridge. Boiling cold bagels helps them hold shape."
            }
        ],
        what_if: [
            {
                scenario: t('styles.bagels_wrinkle_after_baking'),
                result: t('styles.boiled_too_long_or_proofed_too_long_before_boiling'),
                correction: t('styles.keep_boil_to_3060_seconds_per_side')
            }
        ],
        comparative_analysis: [
            {
                target_style: t('styles.montreal_bagel'),
                difference: "NYC is salted + malt. Montreal is no salt + honey/sugar water (sweeter) and wood fired.",
                why_choose_this: t('styles.choose_nyc_for_the_savory_chew_and_sandwich_capabi')
            }
        ],
        q_and_a: [
            {
                question: t('styles.why_barley_malt'),
                answer: "Enzymatic actvity and specific flavor. Sugar is just sweet; Malt is savory, sweet, and improves crust color.",
                context: t('styles.bagel_tradition')
            }
        ],
        fermentation_methods: [
            {
                method: t('styles.direct_18'),
                suitability: t('styles.authentic_13'),
                notes: t('styles.crucial_for_the_microblisters_and_flavor_complexit')
            }
        ]
    },
    deepDive: {
        hydrationLogic: "50-55% is stiff. Extremely stiff. This tightness + boiling is what restricts expansion, creating the dense, chewy texture. If you hydrate to 65%, you just made a circle bread roll.",
        methodSuitability: {
            direct: { suitable: true, notes: t('styles.with_stiff_starter_or_sponge') },
            biga: { suitable: true, notes: t('styles.excellent_for_locking_in_flavor_in_a_stiff_dough') },
            poolish: { suitable: true, notes: "Commonly used as the 'Sponge' phase." }
        },
        whatIf: [
            {
                scenario: t('styles.bagels_look_wrinkled_like_prunes'),
                outcome: t('styles.boiled_too_long_or_overproofed'),
                solution: t('styles.boil_3060_secs_proof_less_they_should_sink_slightl')
            },
            {
                scenario: t('styles.no_shine'),
                outcome: "Water wasn't alkaline.",
                solution: t('styles.add_barley_malt_syrup_and_baking_soda_to_the_boil_')
            }
        ],
        comparisons: [
            {
                vsStyle: t('styles.montreal_bagel_2'),
                difference: "NYC is saltier, bigger, and baked in standard ovens. Montreal is honey-water boiled and wood-fired."
            }
        ],
        proTips: [
            "Ice Cold Ferment: Shape, put on boards, and fridge for 24h. Boil directly from fridge.",
            "Malt Syrup: Don't use sugar. The flavor is non-negotiable."
        ]
    }
};

const grandmaPizza: DoughStyleDefinition = {
    id: "grandma_style_v2",
    name: t('styles.grandma_pizza_2'),
    category: "pizza",
    recipeStyle: RecipeStyle.GRANDMA_STYLE,
    family: t('styles.flatbreads__pizzas_5'),
    description: "A thin, rectangular pan pizza that bridges the gap between home cooking and pizzeria style. Defined by a short proofing time (often no cold ferment) and being baked in an olive-oil coated sheet pan.",
    origin: {
        country: t('styles.usa_15'),
        region: t('styles.long_island_ny_2'),
        period: "1970s"
    },
    history: "Originated from Italian grandmothers (Nonnas) in Long Island making pizza at home with whatever they had (simple dough, crushed tomatoes, standard oven) without long fermentation times.",
    difficulty: t('styles.easy_12'),
    fermentationType: "direct",
    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.5],
        oil: [3.0, 5.0], // High oil in dough + pan
        sugar: [1.0, 3.0],
        flourStrength: "All Purpose or Bread (11-12%)",
        ovenTemp: [230, 260],
        recommendedUse: [t('styles.classic_tomato__garlic_2'), t('styles.vodka_sauce_4')],
        difficulty: t('styles.easy_13'),
        fermentationSteps: [
            "Mix to moderate development. [Science: Doesn't need windowpane as it's supported by a pan.]",
            "Short bulk (1-2h). [Science: 'Grandma' style implies immediacy; rapid yeast activity is key.]",
            "Stretch into oiled pan immediately. [Science: Oil conducts heat for a fried bottom texture.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "Medium (AP/Bread)",
            pl_ratio: t('styles.balanced_13'),
            absorption_capacity: t('styles.medium_81'),
            protein_type: t('styles.all_purpose'),
            science_explanation: "Does not require high protein. A softer flour helps it stretch into the corners of the pan without shrinking back."
        },
        thermalProfile: {
            oven_type: "Home Oven (Sheet Pan)",
            heat_distribution: "Conduction (Oil)",
            crust_development: t('styles.fried_bottom'),
            crumb_structure: t('styles.dense_soft')
        },
        fermentationScience: {
            yeast_activity: "Fast (Warm)",
            ph_target: t('styles.normal_14'),
            organic_acids: t('styles.none_14'),
            enzymatic_activity: "High (Sugar/Oil)"
        }
    },
    tags: ["pizza", "pan-pizza", "italian-american", "beginner-friendly", "thin-crust"],
    pairings: {
        canonical: [t('styles.garlic_3'), t('styles.crushed_tomatoes_2'), t('styles.mozzarella_3'), t('styles.olive_oil_4')],
        modern: [t('styles.pesto_2'), t('styles.fresh_mozzarella_2')],
        regional: [t('styles.none_12')]
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
        hero: "/images/styles/grandma-pizza-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: t('styles.fried_bottom_2'),
                explanation: "Use way more olive oil in the pan than you think. It should essentially fry the crust bottom."
            },
            {
                tip: t('styles.short_proof'),
                explanation: "Don't let it rise too much in the pan. It should be relatively dense and thin, not foccacia-like."
            }
        ],
        what_if: [
            {
                scenario: t('styles.dough_springs_back'),
                result: t('styles.gluten_is_tight'),
                correction: "Stretch, wait 10 mins, stretch again. Don't fight the gluten."
            }
        ],
        comparative_analysis: [
            {
                target_style: t('styles.sicilian_2'),
                difference: "Grandma is thin, short proof, domestic. Sicilian is thick, long proof, bakery style.",
                why_choose_this: t('styles.choose_grandma_for_a_quick_weeknight_sheet_pan_fam')
            }
        ],
        q_and_a: [
            {
                question: "Why 'Grandma'?",
                answer: "It mimics the home cooking of Italian immigrants who didn't have pizza ovens, just standard sheet pans and home stoves.",
                context: t('styles.history')
            }
        ],
        fermentation_methods: [
            {
                method: t('styles.direct_19'),
                suitability: t('styles.authentic_14'),
                notes: "Originally a 'making it for dinner tonight' dough."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "60-65% ensures a crisp bottom (fried in pan oil) but a dense encough crumb to support toppings. Too airy, and it loses the 'homestyle' rusticity.",
        methodSuitability: {
            direct: { suitable: true, notes: t('styles.the_definition_of_grandma_style_mix_short_rise_bak') },
            biga: { suitable: false, notes: t('styles.too_fancy') },
            poolish: { suitable: false, notes: t('styles.too_fancy_2') }
        },
        whatIf: [
            {
                scenario: t('styles.sticks_to_the_pan'),
                outcome: t('styles.not_enough_oil'),
                solution: t('styles.the_pan_should_basically_have_a_shallow_pool_of_ol')
            },
            {
                scenario: t('styles.soggy'),
                outcome: t('styles.bake_it_lower'),
                solution: t('styles.place_pan_on_bottom_rack_for_10_mins_to_sear_the_u')
            }
        ],
        comparisons: [
            {
                vsStyle: t('styles.sicilian_3'),
                difference: t('styles.grandma_is_thin_and_quick_sicilian_is_thick_and_sp')
            }
        ],
        proTips: [
            "Garlic in the Oil: Infuse the pan oil with garlic for that signature smell.",
            "Don't crimp the edges: Let the cheese melt over the side."
        ]
    }
};

const chicagoTavern: DoughStyleDefinition = {
    id: "chicago_tavern_v2",
    name: t('styles.chicago_tavern_style_2'),
    category: "pizza",
    recipeStyle: RecipeStyle.THIN_CRUST,
    family: t('styles.flatbreads__pizzas_6'),
    description: "The TRUE Chicago pizza (what locals actually eat). Ultra-thin, cracker-like crust, square-cut (party cut), and loaded with toppings under the cheese. The dough is rolled flat and cured to ensure zero rise.",
    origin: {
        country: t('styles.usa_16'),
        region: "Chicago / Midwest",
        period: "1940s"
    },
    history: "Developed in post-Prohibition taverns as a salty, cracker-like snack to encourage drinking. The 'party cut' allowed patrons to hold a square in one hand and a beer in the other.",
    difficulty: t('styles.medium_82'),
    fermentationType: "cold",
    technicalProfile: {
        hydration: [45, 50],
        salt: [1.5, 2.0],
        oil: [0, 5.0], // Often corn oil or shortening
        sugar: [1.0, 2.0],
        flourStrength: "All Purpose or High Gluten (Variable)",
        ovenTemp: [260, 290],
        recommendedUse: [t('styles.sausage__giardiniera_2'), t('styles.pepperoni_6')],
        difficulty: t('styles.medium_83'),
        fermentationSteps: [
            "Mix to stiff dough. [Science: Low hydration prevents gluten mobility, ensuring potential for crispness.]",
            "Sheet/Roll flat immediately or after short rest. [Science: Mechanical degassing is key; no alveoli allowed.]",
            "Cure in fridge (24-48h). [Science: This is a 'relieving' phase where hydration equalizes and starch degrades, but no yeast rise is desired.]",
            "Dock heavily and bake. [Science: Docking prevents steam pockets from separating cheese from crust.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: t('styles.variable'),
            pl_ratio: "Dead (No Elasticity)",
            absorption_capacity: t('styles.low_24'),
            protein_type: t('styles.ap_or_high_gluten'),
            science_explanation: "The goal is 'Dead Dough'. We want zero elasticity so it rolls paper thin, and zero ovenspring (puff). Low hydration + rolling pin achieves this."
        },
        thermalProfile: {
            oven_type: "Deck / Stone",
            heat_distribution: t('styles.conduction_7'),
            crust_development: t('styles.crackerlike_dry'),
            crumb_structure: "None (Laminated/Flat)"
        },
        fermentationScience: {
            yeast_activity: "Inhibited (Dry/Cold)",
            ph_target: t('styles.normal_15'),
            organic_acids: t('styles.none_15'),
            enzymatic_activity: t('styles.low_25')
        }
    },
    tags: ["pizza", "american", "midwest", "thin-crust", "party-cut", "cracker"],
    pairings: {
        canonical: [t('styles.fennel_sausage_2'), t('styles.giardiniera_3'), t('styles.mozzarella_4')],
        modern: [t('styles.italian_beef_2')],
        regional: [t('styles.old_style_beer_2')]
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
        { source: t('styles.pizza_city_usa_3'), author: t('styles.steve_dolinsky_2') }
    ],
    images: {
        hero: "/images/styles/chicago-tavern-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: t('styles.the_cure'),
                explanation: "After rolling, let the skin sit uncovered in the fridge for 24h. This dries it out to create the cracker texture."
            },
            {
                tip: t('styles.dock_aggressively'),
                explanation: "Thousands of holes are needed to prevent separation of layers (pita effect)."
            }
        ],
        what_if: [
            {
                scenario: t('styles.crust_is_chewy_not_crisp'),
                result: "Hydration too high or didn't cure enough.",
                correction: t('styles.drop_hydration_to_45_and_cure_longer')
            }
        ],
        comparative_analysis: [
            {
                target_style: t('styles.nyc_slice_3'),
                difference: "Tavern is unleavened (dead yeast effect), cracker thin. NYC is a bread dough.",
                why_choose_this: t('styles.choose_tavern_style_for_a_snackable_light_party_fo')
            }
        ],
        q_and_a: [
            {
                question: t('styles.party_cut'),
                answer: "Essential. Small squares allow you to hold a beer in one hand and a slice in the other.",
                context: t('styles.tavern_culture')
            }
        ],
        fermentation_methods: [
            {
                method: t('styles.direct_20'),
                suitability: t('styles.possible_3'),
                notes: "Fermentation is secondary to the drying/curing process."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "45-50%. Extremely dry. We need to prevent steam. Steam creates puff. Puff creates soft. We want a dead, flat, cracker.",
        methodSuitability: {
            direct: { suitable: true, notes: "Often used with a 'dead yeast' approach (long cure)." },
            biga: { suitable: false, notes: "We don't want volume." },
            poolish: { suitable: false, notes: "We don't want extensibility." }
        },
        whatIf: [
            {
                scenario: t('styles.it_puffed_up_like_a_pita'),
                outcome: "You didn't dock it.",
                solution: t('styles.use_a_docker_roller_perforate_the_entire_surface')
            },
            {
                scenario: t('styles.chewy'),
                outcome: "Too much water or didn't cure.",
                solution: t('styles.let_the_rolled_skins_sit_in_the_fridge_uncovered_f')
            }
        ],
        comparisons: [
            {
                vsStyle: t('styles.deep_dish'),
                difference: t('styles.locals_eat_tavern_tourists_eat_deep_dish')
            }
        ],
        proTips: [
            "The Sheeter: Pros use a machine to get it paper thin. Use a rolling pin aggressively.",
            "Cornmeal dust: Roll in cornmeal for extra crunch and release."
        ]
    }
};

const montrealBagel: DoughStyleDefinition = {
    id: "montreal_bagel",
    name: t('styles.montreal_bagel_3'),
    category: "bread",
    recipeStyle: RecipeStyle.BAGEL,
    origin: {
        country: t('styles.canada'),
        region: t('styles.montreal_quebec'),
        period: "1919"
    },
    description: "Smaller, denser, and sweeter than its NY cousin. Boiled in honey-sweetened water and baked in wood-fired ovens. Contains no salt.",
    history: "Brought to Montreal by Jewish immigrants. The rivalry between Fairmount and St-Viateur defines the city's food culture.",
    difficulty: t('styles.hard_32'),
    fermentationType: "direct",

    technicalProfile: {
        hydration: [50, 55],
        salt: [0, 0],
        oil: [1, 2],
        sugar: [2, 4],
        flourStrength: t('styles.w300350_3'),
        ovenTemp: [260, 300],
        recommendedUse: [t('styles.cream_cheese'), t('styles.smoked_salmon')],
        difficulty: t('styles.hard_33'),
        fermentationSteps: [
            "Mix stiff dough. [Science: Low hydration + No Salt + Sugar = Dense structure.]",
            "Short proof. [Science: Just enough to relax gluten for rolling.]",
            "Boil in Honey Water. [Science: Honey penetrates crust for sheen and flavor.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: t('styles.w300350_4'),
            pl_ratio: t('styles.stiff'),
            absorption_capacity: t('styles.low_26'),
            protein_type: t('styles.high_gluten_2'),
            science_explanation: "High gluten needed for shape retention during boil. Lack of salt weakens network, so stiff dough compensates."
        },
        thermalProfile: {
            oven_type: t('styles.wood_fired_2'),
            heat_distribution: t('styles.radiant_5'),
            crust_development: t('styles.crisp_shiny'),
            crumb_structure: t('styles.dense_2')
        },
        fermentationScience: {
            yeast_activity: "Fast (No salt)",
            ph_target: t('styles.normal_16'),
            organic_acids: t('styles.low_27'),
            enzymatic_activity: t('styles.standard_19')
        }
    },
    tags: ["honey", "no-salt", "wood-fired", "canada"],
    pairings: {
        canonical: [t('styles.cream_cheese_2'), t('styles.smoked_meat')],
        modern: [t('styles.peanut_butter')],
        regional: [t('styles.montreal_smoked_meat')]
    },
    watchouts: ["Don't add salt."],
    notes: [t('styles.boiling_water_must_contain_honey')],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: t('styles.fairmount_bagel') }],
    images: {
        hero: "/images/styles/montreal-bagel-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [{ tip: t('styles.honey_water'), explanation: t('styles.essential_for_the_glaze') }],
        what_if: [{ scenario: t('styles.bland'), result: "It's unsalted.", correction: t('styles.add_salted_toppings') }],
        comparative_analysis: [{ target_style: t('styles.ny_bagel'), difference: t('styles.montreal_is_unsalted_smaller_honeyboiled'), why_choose_this: t('styles.sweeter_crunchier') }],
        q_and_a: [{ question: t('styles.why_no_salt'), answer: t('styles.tradition'), context: t('styles.history_2') }],
        fermentation_methods: [{ method: t('styles.direct_21'), suitability: t('styles.authentic_15'), notes: t('styles.short_ferment') }]
    },
    deepDive: {
        hydrationLogic: "50-55%. Very stiff.",
        methodSuitability: {
            direct: { suitable: true, notes: t('styles.standard_20') },
            biga: { suitable: false, notes: "N/A" },
            poolish: { suitable: false, notes: "N/A" }
        },
        whatIf: [{ scenario: t('styles.collapses'), outcome: t('styles.overproofed'), solution: t('styles.proof_less') }],
        comparisons: [{ vsStyle: t('styles.ny_bagel_2'), difference: t('styles.montreal_is_denser') }],
        proTips: [t('styles.soak_boards'), t('styles.seed_heavily')]
    }
};

const flourTortilla: DoughStyleDefinition = {
    id: "flour_tortilla_sonora",
    name: "Flour Tortilla (Sonora)",
    category: "flatbread",
    recipeStyle: RecipeStyle.FLATBREAD,
    origin: {
        country: t('styles.mexico_3'),
        region: t('styles.sonora'),
        period: "16th Century"
    },
    description: t('styles.translucent_elastic_flour_tortillas_made_with_lard'),
    history: t('styles.sonoran_staple_adapted_from_corn_tortillas_using_e'),
    difficulty: t('styles.medium_84'),
    fermentationType: "direct",

    technicalProfile: {
        hydration: [45, 55],
        salt: [1.5, 2.0],
        oil: [15, 20],
        sugar: [0, 0],
        flourStrength: t('styles.w200240_3'),
        ovenTemp: [200, 230],
        recommendedUse: [t('styles.burritos'), t('styles.quesadillas')],
        difficulty: t('styles.medium_85'),
        fermentationSteps: [
            "Hot water mix. [Science: Denatures proteins for extensibility.]",
            "Rest. [Science: Relaxes gluten.]",
            "Flash cook. [Science: Steam puff separates layers.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: t('styles.w200240_4'),
            pl_ratio: t('styles.extensible_9'),
            absorption_capacity: t('styles.medium_86'),
            protein_type: t('styles.soft_wheat_3'),
            science_explanation: t('styles.high_fat__hot_water__tenderness_and_extensibility')
        },
        thermalProfile: {
            oven_type: t('styles.comal'),
            heat_distribution: t('styles.conduction_8'),
            crust_development: t('styles.spotted'),
            crumb_structure: t('styles.layered')
        },
        fermentationScience: {
            yeast_activity: t('styles.none_16'),
            ph_target: t('styles.neutral_9'),
            organic_acids: t('styles.none_17'),
            enzymatic_activity: t('styles.none_18')
        }
    },
    tags: ["lard", "sonora", "mexico"],
    pairings: {
        canonical: [t('styles.carne_asada'), t('styles.cheese_2')],
        modern: [t('styles.nutella')],
        regional: [t('styles.burrito_percherón')]
    },
    watchouts: ["Don't overcook.", "Use hot water."],
    notes: [t('styles.lard_is_traditional')],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: t('styles.sonoran_heritage') }],
    images: {
        hero: "/images/styles/flour_tortilla_sonora.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [{ tip: t('styles.seethrough'), explanation: t('styles.should_be_translucent') }],
        what_if: [{ scenario: t('styles.hard_34'), result: t('styles.cooked_too_long'), correction: t('styles.cook_faster') }],
        comparative_analysis: [{ target_style: t('styles.corn_tortilla'), difference: t('styles.flour_is_larger_contains_gluten'), why_choose_this: t('styles.burritos_2') }],
        q_and_a: [{ question: t('styles.butter_2'), answer: t('styles.lard_is_better'), context: t('styles.texture') }],
        fermentation_methods: [{ method: t('styles.direct_22'), suitability: t('styles.authentic_16'), notes: t('styles.unleavened_2') }]
    },
    deepDive: {
        hydrationLogic: t('styles.low_water_high_fat'),
        methodSuitability: {
            direct: { suitable: true, notes: t('styles.standard_21') },
            biga: { suitable: false, notes: "N/A" },
            poolish: { suitable: false, notes: "N/A" }
        },
        whatIf: [{ scenario: t('styles.rubber'), outcome: t('styles.rest_longer'), solution: t('styles.rest_30m') }],
        comparisons: [{ vsStyle: t('styles.pita'), difference: t('styles.tortilla_is_unleavened') }],
        proTips: [t('styles.use_manteca')]
    }
};

export const northAmericaStyles: DoughStyleDefinition[] = [
    nycSlice,
    detroitStyle,
    chicagoDeepDish,
    sfSourdough,
    newHavenApizza,
    nycBagel,
    grandmaPizza,
    chicagoTavern,
    montrealBagel,
    flourTortilla
];
