import { DoughStyle, RecipeStyle } from '@/types/dough';
import { useTranslation } from '@/i18n';

export const italianStyles: DoughStyle[] = [
    {
        id: "pizza-napoletana",
        name: t('styles.pizza_napoletana_stg'),
        region: 'Italy',
        subRegion: 'Naples, Campania',
        category: 'Pizza',
        recipeStyle: RecipeStyle.NEAPOLITAN,
        tags: [t('styles.high_heat_2'), t('styles.direct_method'), t('styles.stg'), t('styles.wood_fired')],
        description: "The gold standard of pizza. Soft, pliable ('a libretto'), with a distinctively airy cornicione and leoparding checks. Protected by UNESCO.",
        history_context: "Defined by the 'Associazione Verace Pizza Napoletana' (AVPN), this style dates back to the 18th century. It was rigorously codified to protect the tradition against industrialization. True Neapolitan pizza is an artisanal product that requires specific hand stretching ('schiaffo') and a wood-fired oven.",
        base_formula: [
            { name: "Flour (Type 00)", percentage: 100 },
            { name: t('styles.water_3'), percentage: 60 },
            { name: t('styles.salt_6'), percentage: 2.8 },
            { name: t('styles.fresh_yeast'), percentage: 0.15 }
        ],
        specs: {
            hydration: { ideal: 60, min: 57, max: 62.5 },
            ovenTemp: { ideal: 450, min: 430, max: 485 },
            fermentationTime: "24h",
            difficulty: 'Expert'
        },
        scientificProfile: {
            flourRheology: {
                w_index: t('styles.w280320'),
                pl_ratio: "0.50-0.60 (Extensible)",
                absorption_capacity: t('styles.mediumhigh'),
                protein_type: t('styles.type_00'),
                science_explanation: "Requires '00' flour with W280-320. The key is strict P/L control (0.50-0.60): we need extensibility for easy stretching without snap-back, but enough strength to hold gas during a long 24h fermentation at room temperature."
            },
            thermalProfile: {
                oven_type: "Wood Fired (Dome)",
                heat_distribution: "High Conduction (Floor) & Radiation",
                crust_development: t('styles.leopard_spotting'),
                crumb_structure: t('styles.airy_cornicione_thin_center')
            },
            fermentationScience: {
                yeast_activity: "Controlled (Room Temp)",
                ph_target: "pH 5.5",
                organic_acids: t('styles.lactic_dominant'),
                enzymatic_activity: "High (24h Maturation)"
            },
            processScience: "The defining physical event is 'Sudden Evaporation'. At >430°C, the moisture in the dough turns to steam almost instantly. Because the gluten is relaxed (extensible), the cornicione inflates rapidly before the crust sets, creating the signature 'voids' inside the rim."
        },
        process: [
            {
                phase: 'Mix',
                title: t('styles.controlled_mixing'),
                duration: "15-20 min",
                action: "Dissolve salt in water, add yeast, then flour. Mix to reach final internal temp of 23-25°C.",
                science: "Salt is added first in the Napoletana tradition to control yeast activity immediately for the long room-temp fermentation. Mixing is gentle to avoid excessive oxidation."
            },
            {
                phase: 'Bulk',
                title: "Puntata (Bulk Fermentation)",
                duration: "2-4 hours",
                action: t('styles.rest_the_entire_mass_in_an_airtight_container_at_r'),
                science: "Allows enzymatic activity (Amylase and Protease) to begin breaking down starch into fermentable sugars and relaxing the gluten net."
            },
            {
                phase: 'Ball',
                title: "Staglio (Balling)",
                duration: "10-20 min",
                action: t('styles.divide_info_200280g_balls_by_hand_ensuring_tight_s'),
                science: "Dividing re-tensions the gluten network. A tight skin is crucial to retain gas pressure during the secondary rise."
            },
            {
                phase: 'Ball',
                title: "Appretto (Maturation)",
                duration: "16-20 hours",
                action: "Store balls in dough boxes at controlled temperature (18-22°C).",
                science: "The long 'Appretto' is where the flavor develops through fermentation byproducts. The gluten relaxes fully, preparing for the stretch."
            },
            {
                phase: 'Bake',
                title: t('styles.flash_bake'),
                duration: "60-90 seconds",
                action: t('styles.bake_at_430480c_on_the_floor'),
                science: "Leidenfrost effect protects the bottom. Radiation cooks the top. The speed ensures the crumb remains moist (gelatinized) while the crust chars."
            }
        ],
        references: [t('styles.avpn_international_regulations_2'), t('styles.the_pizza_bible_2')],
        images: {
            hero: "/images/styles/pizza-napoletana.png",
            dough: "/images/styles/pizza-napoletana.png",
            crumb: "/images/styles/pizza-napoletana.png"
        },
        education: {
            pro_tips: [
                {
                    tip: "Respect the 'Punto di Pasta'",
                    explanation: "Stop mixing when the dough is smooth and 'pumpkin-like'. Over-mixing tightens the gluten too much, leading to rubbery pizza."
                },
                {
                    tip: t('styles.use_room_temp_water'),
                    explanation: "For 24h room temp fermentation, cold water can stall yeast activity initially. Use water at ~20°C unless your room is very hot."
                }
            ],
            what_if: [
                {
                    scenario: t('styles.hydration_is_increased_to_70'),
                    result: t('styles.dough_becomes_too_sticky_to_handle_and_stretches_i'),
                    correction: "Stick to 58-65%. If sticky, use a 'spolvero' (dusting flour) of semolina, but don't force more water."
                },
                {
                    scenario: "Oven temp is only 250°C (Home Oven)",
                    result: "The pizza dries out before it browns. The crust becomes a hard cracker instead of soft/airy.",
                    correction: "Add sugar/malt to dough for browning (not authentic but necessary) and hydration to 65-70% to retain moisture."
                },
                {
                    scenario: "Dough balls are cold (from fridge)",
                    result: "Leopard spotting turns into 'measles' (small micro-blisters) and the crust is tough.",
                    correction: t('styles.always_let_dough_balls_come_to_room_temp_for_at_le')
                }
            ],
            comparative_analysis: [
                {
                    target_style: t('styles.roman_tonda'),
                    difference: "Neapolitan is soft, foldable ('a libretto'), and baked fast. Roman Tonda is crispy, cracker-like, and rolled flat.",
                    why_choose_this: t('styles.choose_neapolitan_for_a_light_digestible_and_soft_')
                },
                {
                    target_style: t('styles.ny_style'),
                    difference: "NY Style adds oil and sugar, bakes lower/slower for a sturdy slice. Neapolitan has no oil/sugar and is floppy.",
                    why_choose_this: t('styles.choose_neapolitan_for_pure_fermentation_flavor_and')
                }
            ],
            q_and_a: [
                {
                    question: t('styles.why_is_the_hydration_limit_625'),
                    answer: "Scientific balance. 55-62% provides the perfect elasticity to stretch thin by hand without tearing, while retaining enough moisture to stay soft during the 485°C flash bake. Higher hydration makes it unmanageable for the specific 'slap' technique.",
                    context: t('styles.avpn_regulations')
                },
                {
                    question: t('styles.can_i_use_biga_or_poolish'),
                    answer: "Traditionally, no (Direct method is STG). However, modern 'Canotto' (dinghy) style uses Biga/Poolish to create an exaggerated airy rim. It is delicious but technically a different sub-style.",
                    context: t('styles.modern_evolution')
                }
            ],
            fermentation_methods: [
                {
                    method: t('styles.direct_8'),
                    suitability: t('styles.authentic_5'),
                    notes: t('styles.the_gold_standard_for_stg_24h_at_room_temp_creates')
                },
                {
                    method: t('styles.poolish_3'),
                    suitability: t('styles.possible'),
                    notes: "Used for 'Canotto' style to get explosive cornichone. Makes dough very extensible."
                },
                {
                    method: t('styles.biga_2'),
                    suitability: t('styles.possible_2'),
                    notes: t('styles.adds_chewiness_and_complex_acidity_harder_to_manag')
                }
            ]
        },
        deepDive: {
            hydrationLogic: "58-62% is the STG standard because the 485°C wood-fired oven requires rapid evaporation without burning the crust. The modern 'Canotto' style uses 70%+, but demands much stronger flour and advanced handling skills.",
            methodSuitability: {
                direct: { suitable: true, notes: "Ideal & Traditional. Maximizes pure wheat flavor and digestibility with 24h fermentation." },
                biga: { suitable: false, notes: "Non-traditional (STG), but widely used in 'Neo-Neapolitan' to create extreme cornicione volume and complex flavor." },
                poolish: { suitable: true, notes: "Good for home ovens to boost extensibility, but can make the dough too soft/slack for classic slap stretching." }
            },
            whatIf: [
                {
                    scenario: "Lowering temp to 250°C (Home Oven)?",
                    outcome: t('styles.the_dough_dries_out_before_it_browns_you_get_a_har'),
                    solution: "Add 2-3% sugar and oil to aid browning and softness (Technically becomes NY/Neo-Neapolitan)."
                },
                {
                    scenario: "Using weak flour (All Purpose)?",
                    outcome: t('styles.it_cannot_withstand_the_24h_fermentation'),
                    solution: "The gluten network will degrade and tear when stretching. Use a specific Pizza/Bread flour."
                }
            ],
            comparisons: [
                {
                    vsStyle: t('styles.romana_tonda'),
                    difference: "Neapolitan is soft, foldable ('wallet'), and moist. Romana is paper-thin, dry, and crispy."
                }
            ],
            proTips: [
                "Respect the 'Punto di Pasta': Stop mixing when the dough is smooth.",
                "Use Room Temp Water (~20°C) to simulate the Naples climate unless it's extremely hot."
            ]
        }
    },
    {
        id: "pizza-teglia-romana",
        name: t('styles.pizza_in_teglia_romana'),
        region: 'Italy',
        subRegion: 'Rome, Lazio',
        category: 'Pizza',
        recipeStyle: RecipeStyle.ROMAN,
        tags: [t('styles.high_hydration'), t('styles.pan_pizza'), t('styles.cold_ferment_3'), t('styles.airy_crumb')],
        description: "A highly hydrated pan pizza known for its light, airy, open crumb and crispy bottom. Sold by weight ('al taglio') in Rome.",
        history_context: "Revolutionized in the late 80s/90s by Angelo Iezzi, shifting from a dense oily focaccia to a high-hydration, cold-fermented masterpiece that requires technique over grease.",
        base_formula: [
            { name: "Strong Flour (Type 0/00)", percentage: 100 },
            { name: t('styles.water_4'), percentage: 80 },
            { name: t('styles.salt_7'), percentage: 2.5 },
            { name: t('styles.olive_oil_2'), percentage: 2.5 },
            { name: t('styles.dry_yeast'), percentage: 0.7 }
        ],
        specs: {
            hydration: { ideal: 80, min: 75, max: 90 },
            ovenTemp: { ideal: 250, min: 230, max: 270 },
            fermentationTime: "48-72h",
            difficulty: 'Expert'
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W350+ (High Strength)",
                pl_ratio: "0.55 (High Absorption)",
                absorption_capacity: "Very High (80%+)",
                protein_type: "Type 0/00 Strong",
                science_explanation: "Requires extremely strong flour (W350+, P/L 0.55). The gluten network must be powerful enough to hold 80%+ water and trap the massive CO2 bubbles during the cold ferment."
            },
            thermalProfile: {
                oven_type: t('styles.deck_oven'),
                heat_distribution: "Conduction (Floor)",
                crust_development: "Fried/Crispy Bottom",
                crumb_structure: t('styles.open_alveolated')
            },
            fermentationScience: {
                yeast_activity: "Slow (Cold Retard)",
                ph_target: "Acidic (Protease Activity)",
                organic_acids: "Complex (Cold Ferment)",
                enzymatic_activity: "High (Proteolysis)"
            },
            processScience: "The defining science is 'Starch Gelatinization vs Gluten Structure'. High water allows full enzymatic activity (protease), creating a melt-in-the-mouth texture. The cold ferment (4°C) slows yeast but lets bacteria produce acids that strengthen the gluten, making the impossible hydration manageable."
        },
        process: [
            {
                phase: 'Mix',
                title: t('styles.bassinage_mixing'),
                duration: "20 min",
                action: "Mix flour with 65% water until pumpkin-like skin forms. Slowly trickle in remaining cold water.",
                science: "Bassinage prevents the dough from turning into soup. You establish the gluten structure first, then rely on the gluten's absorption capacity."
            },
            {
                phase: 'Bulk',
                title: "Cold Bulk (Puntata)",
                duration: "24-48 hours",
                action: t('styles.place_in_oiled_container_at_4c'),
                science: "Cold retarding creates structure (hardening of fats/gluten alignment) and flavor (organic acids)."
            },
            {
                phase: 'Ball',
                title: t('styles.staglio__relax'),
                duration: "4 hours",
                action: t('styles.form_dough_balls_and_let_rise_at_room_temp_until_d'),
                science: "The dough must warm up to ferment (expand) and relax before the delicate stretching phase."
            },
            {
                phase: 'Bake',
                title: t('styles.floor_then_top'),
                duration: "12-15 min",
                action: "Bake on oven floor (lowest rack) to fry the bottom, then mid-rack for toppings.",
                science: "Conductive heat from the bottom creates the crust structure before the weight of the toppings can collapse the crumb."
            }
        ],
        references: [t('styles.angelo_iezzi_method'), t('styles.pizza_today')],
        images: {
            hero: "/images/styles/pizza-teglia-romana.png",
            dough: "/images/styles/pizza-teglia-romana.png",
            crumb: "/images/styles/pizza-teglia-romana.png"
        },
        education: {
            pro_tips: [
                {
                    tip: t('styles.cold_water_is_critical'),
                    explanation: "Use ice-cold water during mixing. High hydration generates friction heat; keeping it cool prevents the gluten from damaging during the long mix."
                },
                {
                    tip: t('styles.no_rolling_pins'),
                    explanation: "Never use a rolling pin. It crushes the alveoli (air pockets). Use your fingertips to gently push the gas from the center to the edges."
                }
            ],
            what_if: [
                {
                    scenario: "Hydration is too low (<75%)",
                    result: "The crust becomes dense and bread-like, losing its signature cloud-like lightness.",
                    correction: "Increase water gradually (Bassinage) to reach at least 75-80%."
                },
                {
                    scenario: t('styles.dough_tears_during_stretching'),
                    result: t('styles.gluten_is_too_tense_or_underdeveloped'),
                    correction: t('styles.wait_15_minutes_to_let_gluten_relax_then_try_again')
                }
            ],
            comparative_analysis: [
                {
                    target_style: t('styles.focaccia'),
                    difference: "Teglia is crispier on the bottom and airy/light, while Focaccia is oily, softer, and denser.",
                    why_choose_this: t('styles.choose_teglia_for_a_lighter_crunchier_bite_that_ho')
                }
            ],
            q_and_a: [
                {
                    question: t('styles.why_48h_fermentation'),
                    answer: "To break down the complex proteins in strong flour. This makes the high-gluten dough digestible and creates the complex organic acid flavor profile.",
                    context: t('styles.bonci_method')
                }
            ],
            fermentation_methods: [
                {
                    method: t('styles.direct_9'),
                    suitability: t('styles.ideal_5'),
                    notes: "The standard Cold Ferment (4°C for 24-48h). Essential for handling 80% hydration."
                }
            ]
        },
        deepDive: {
            hydrationLogic: "80% is the magic number for the 'cloud' texture. High water creates steam pockets (alveoli) and keeps the crumb moist despite the long bake. Below 75%, it's just heavy focaccia.",
            methodSuitability: {
                direct: { suitable: true, notes: "The 'No-Knead' cold ferment approach is effectively a direct method simplified. Very effective." },
                biga: { suitable: false, notes: "Rarely used as the main method because the gluten needs to be fully hydrated, not stiff." },
                poolish: { suitable: true, notes: t('styles.excellent_choice_a_100_poolish_dough_yields_incred') }
            },
            whatIf: [
                {
                    scenario: "Dough is impossible to handle (Soup)?",
                    outcome: t('styles.you_added_water_too_fast'),
                    solution: "Use the 'Bassinage' technique. Add 65% water first, develop gluten, then slowly add the rest."
                },
                {
                    scenario: t('styles.bottom_is_pale_and_soft'),
                    outcome: "Oven floor wasn't hot enough.",
                    solution: "Bake on the lowest rack or directly on a stone/steel for the first 10 minutes."
                }
            ],
            comparisons: [
                {
                    vsStyle: "Sicilian (Sfincione)",
                    difference: t('styles.teglia_is_airy_crunchy_and_light_sicilian_is_spong')
                }
            ],
            proTips: [
                "Use Semolina for stretching: It prevents sticking without absorbing into the dough like flour.",
                "The 'Fridge Cure': 24-48h in the fridge makes the dough easier to handle and tastier."
            ]
        }
    },
    {
        id: "pizza-tonda-romana",
        name: "Pizza Tonda Romana (Scrocchiarella)",
        region: 'Italy',
        subRegion: 'Rome, Lazio',
        category: 'Pizza',
        recipeStyle: RecipeStyle.ROMANA_TONDA,
        tags: [t('styles.low_hydration'), t('styles.rolling_pin'), t('styles.crispy_2'), t('styles.crackerthin')],
        description: "The 'Scrocchiarella' (The Crunchy One). Ultra-thin, borderless, and cracker-like. Often rolled with a pin to degas completely.",
        history_context: "The everyday pizzeria pizza of Rome. Unlike Naples, Rome favors a longer bake at lower temps to dry out the crust for maximum crunch.",
        base_formula: [
            { name: "Flour (Type 00)", percentage: 100 },
            { name: t('styles.water_5'), percentage: 56 },
            { name: t('styles.salt_8'), percentage: 2.0 },
            { name: t('styles.olive_oil_3'), percentage: 3.0 },
            { name: t('styles.fresh_yeast_2'), percentage: 0.5 }
        ],
        specs: {
            hydration: { ideal: 56, min: 53, max: 58 },
            ovenTemp: { ideal: 300, min: 280, max: 330 },
            fermentationTime: "24h",
            difficulty: 'Medium'
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W240 (Medium)",
                pl_ratio: "Low Elasticity (No Nerve)",
                absorption_capacity: t('styles.medium_54'),
                protein_type: t('styles.type_00_2'),
                science_explanation: "Medium strength (W240). We don't want extreme elasticity because we manually roll it flat. Too much nerve (elasticity) makes it shrink back."
            },
            thermalProfile: {
                oven_type: "Electric/Gas Deck",
                heat_distribution: t('styles.consistent'),
                crust_development: t('styles.dry_crispy_crackerlike'),
                crumb_structure: t('styles.tight_dense')
            },
            fermentationScience: {
                yeast_activity: t('styles.standard_11'),
                ph_target: t('styles.normal_4'),
                organic_acids: t('styles.low_9'),
                enzymatic_activity: t('styles.moderate_4')
            },
            processScience: "Evaporation is the goal. Low hydration + Oil + Rolling Pin = Dehydration. We are effectively frying the dough in its own oil and drying it out to create a biscuit structure."
        },
        process: [
            {
                phase: 'Mix',
                title: t('styles.stiff_mix_2'),
                duration: "10-12 min",
                action: t('styles.mix_to_smooth_stiff_consistency'),
                science: t('styles.low_hydration_means_less_gluten_mobility_resulting')
            },
            {
                phase: 'Bulk',
                title: t('styles.short_bulk_2'),
                duration: "1-2 hours",
                action: t('styles.room_temp_rest'),
                science: t('styles.just_enough_to_let_yeast_activate')
            },
            {
                phase: 'Ball',
                title: "Rolling (Stesura)",
                duration: "2 min",
                action: "Use a rolling pin (Mattarello) to flatten to 2-3mm thickness.",
                science: "Mechanical degassing removes all macro-alveoli. This ensures the crust is uniform and crunchy, not bread-like."
            },
            {
                phase: 'Bake',
                title: "Slow(er) Bake",
                duration: "3-5 min",
                action: t('styles.bake_at_300c'),
                science: "Longer residence time in the oven compared to Neapolitan ensures the Maillard reaction penetrates deep and water evaporates fully."
            }
        ],
        references: [t('styles.roman_pizza_academy'), t('styles.la_città_della_pizza')],
        images: {
            hero: "/images/styles/pizza-tonda-romana.png",
            dough: "/images/styles/pizza-tonda-romana.png",
            crumb: "/images/styles/pizza-tonda-romana.png"
        },
        education: {
            pro_tips: [
                {
                    tip: t('styles.roll_it_thin_then_thinner'),
                    explanation: "The goal is 'Scrocchiarella' (crunchy). Roll to 2-3mm. If it looks too thin, it's probably almost right."
                },
                {
                    tip: t('styles.dock_the_dough'),
                    explanation: "Use a fork to prick the entire surface. This prevents large bubbles from forming, ensuring a flat, even cracker crust."
                }
            ],
            what_if: [
                {
                    scenario: t('styles.dough_shrinks_back_when_rolling'),
                    result: "Gluten is too elastic (Nerve).",
                    correction: t('styles.let_the_dough_balls_rest_for_30_mixed_before_rolli')
                },
                {
                    scenario: t('styles.crust_is_chewy_not_crunchy'),
                    result: t('styles.hydration_too_high_or_baked_too_fast'),
                    correction: "Lower hydration to ~56% and bake at a lower temp (~300°C) for longer to dry it out."
                }
            ],
            comparative_analysis: [
                {
                    target_style: t('styles.neapolitan'),
                    difference: "Tonda Romana is the anti-Neapolitan: thin, crispy, no raised border, and rolled flat.",
                    why_choose_this: t('styles.choose_tonda_if_you_prefer_a_crackerlike_crunch_su')
                }
            ],
            q_and_a: [
                {
                    question: t('styles.why_add_oil_to_the_dough'),
                    answer: "Oil aids in crispness (frying effect) and extensibility, helping rolling without tearing.",
                    context: t('styles.roman_tradition')
                }
            ],
            fermentation_methods: [
                {
                    method: t('styles.direct_10'),
                    suitability: t('styles.authentic_6'),
                    notes: "Short warm fermentation (6-24h) is standard for this quick-service style."
                }
            ]
        },
        deepDive: {
            hydrationLogic: "Low hydration (~56%) is critical. We want to restrict steam generation so the crust dries out and becomes a cracker. High hydration would make it chewy.",
            methodSuitability: {
                direct: { suitable: true, notes: t('styles.standard_a_simple_direct_dough_works_best_for_this') },
                biga: { suitable: false, notes: "Unnecessary complexity. We don't want the volume or wild crumb that Biga provides." },
                poolish: { suitable: false, notes: "Too extensible. We want some resistance (nerve) to roll it thin." }
            },
            whatIf: [
                {
                    scenario: t('styles.dough_keeps_snapping_back'),
                    outcome: t('styles.too_much_elasticity'),
                    solution: "Let the dough balls rest longer (30-60 mins) before rolling to relax the gluten."
                },
                {
                    scenario: t('styles.not_crispy_enough'),
                    outcome: t('styles.too_much_water_or_baked_too_fast'),
                    solution: t('styles.lower_temp_to_270c_and_bake_longer_to_fully_dehydr')
                }
            ],
            comparisons: [
                {
                    vsStyle: t('styles.neapolitan_2'),
                    difference: "Polar opposites. Tonda is rolled flat to remove gas. Neapolitan is slapped to preserve it."
                }
            ],
            proTips: [
                "The Rolling Pin is a Tool: Don't be afraid to use it. It evens out the crumb for that signature crunch.",
                "Docking is key: Poke holes to prevent it from turning into a pita bread balloon."
            ]
        }
    },
    {
        id: "focaccia-genovese",
        name: t('styles.focaccia_genovese_4'),
        region: 'Italy',
        subRegion: 'Genoa, Liguria',
        category: 'Flatbread',
        recipeStyle: RecipeStyle.FOCACCIA,
        tags: [t('styles.high_oil'), t('styles.breakfast_3'), t('styles.emulsion'), t('styles.pan')],
        description: "The authentic 'Fugassa'. A masterpiece of olive oil and flour, characterized by its golden dimples and white, creamy 'eyes'.",
        history_context: "Historically a breakfast food for dock workers in Genoa, dipping it in cappuccino or white wine. The authentic Genovese version differs from others by its precise use of 'Salamoia' (brine) and lower height (max 2cm).",
        base_formula: [
            { name: t('styles.soft_wheat_flour'), percentage: 100 },
            { name: t('styles.water_6'), percentage: 65 },
            { name: "Olive Oil (Dough)", percentage: 6 },
            { name: t('styles.salt_9'), percentage: 2.2 },
            { name: t('styles.fresh_yeast_3'), percentage: 2 },
            { name: "Brine (Topping)", percentage: 15 }
        ],
        specs: {
            hydration: { ideal: 65, min: 60, max: 68 },
            ovenTemp: { ideal: 230, min: 220, max: 240 },
            fermentationTime: "12-14h",
            difficulty: 'Medium'
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W260-280 (Medium)",
                pl_ratio: t('styles.extensible_3'),
                absorption_capacity: t('styles.medium_56'),
                protein_type: t('styles.soft_wheat'),
                science_explanation: "Uses a Medium strength flour (W260-280). We don't want extreme elasticity; the dough must be extensible enough to fill the pan corners without fighting back."
            },
            thermalProfile: {
                oven_type: "Convection/Deck",
                heat_distribution: "Steam (Brine)",
                crust_development: "Golden (Fried in Oil)",
                crumb_structure: t('styles.soft_creamy')
            },
            fermentationScience: {
                yeast_activity: t('styles.fast_2'),
                ph_target: t('styles.normal_5'),
                organic_acids: t('styles.low_10'),
                enzymatic_activity: t('styles.high_8')
            },
            processScience: "The Core Science is the 'Salamoia' (Brine Emulsion). Pouring a mix of water and oil over the dough before baking creates a thermal barrier. The liquid pools in the dimples, preventing the dough there from exceeding 100°C. This essentially boils the dough in the holes (keeping them white/soft) while the ridges fry in oil (becoming golden/crisp)."
        },
        process: [
            {
                phase: 'Mix',
                title: t('styles.short_mix'),
                duration: "10-12 min",
                action: "Mix flour, water, salt, yeast, and olive oil. Stop before full gluten development.",
                science: "We avoid an overly strong gluten structure. The high oil content (6-10%) chemically lubricates the gluten strands, increasing extensibility."
            },
            {
                phase: 'Bulk',
                title: t('styles.first_rise'),
                duration: "60-90 min",
                action: t('styles.let_rise_until_volume_increases_by_50'),
                science: t('styles.initial_yeast_activity_establishes_the_alveolar_st')
            },
            {
                phase: 'Bulk',
                title: t('styles.pan_stretch'),
                duration: "20 min",
                action: "Transfer to oiled pan. Stretch gently to corners. If it retracts, wait 10 mins and try again.",
                science: "Allowing the dough to sit lets the gluten relax via protease action, making the final stretch possible without tearing."
            },
            {
                phase: 'Ball',
                title: t('styles.dimpling__salamoia'),
                duration: "5 min",
                action: "Pour brine (water/oil/salt) over dough. Press fingers deep to create holes.",
                science: "Dimpling 'staples' the top and bottom crusts together to prevent ballooning. The brine fills these reservoirs."
            },
            {
                phase: 'Bake',
                title: t('styles.moist_bake'),
                duration: "15-18 min",
                action: t('styles.bake_at_230c_until_golden_brown'),
                science: "The water in the brine evaporates, steaming the focaccia from the outside in, while the oil fries the surface."
            }
        ],
        references: ["Ezra Pound's Letters (Historical)", "Salt, Fat, Acid, Heat"],
        images: {
            hero: "/images/styles/focaccia-genovese.png",
            dough: "/images/styles/focaccia-genovese.png",
            crumb: "/images/styles/focaccia-genovese.png"
        },
        education: {
            pro_tips: [
                {
                    tip: t('styles.the_brine_is_king'),
                    explanation: "Don't skimp on the 'Salamoia'. The pockets of brine boil the dough while it bakes, creating the creamy interior."
                },
                {
                    tip: t('styles.blind_bake_the_bottom'),
                    explanation: "For home ovens, place the pan on the floor for the first 5 mins to ensure the bottom fries in the oil."
                }
            ],
            what_if: [
                {
                    scenario: t('styles.dimples_disappear_during_baking'),
                    result: "You didn't press hard enough or didn't use enough brine to weigh them down.",
                    correction: t('styles.press_your_fingers_until_you_feel_the_pan_fill_hol')
                }
            ],
            comparative_analysis: [
                {
                    target_style: t('styles.focaccia_barese'),
                    difference: "Genovese is about the Brine/Oil emulsion. Barese includes potato in the dough and tomatoes on top.",
                    why_choose_this: "Choose Genovese for the pure wheat/oil flavor profile."
                }
            ],
            q_and_a: [
                {
                    question: t('styles.salt_percentage_seems_high'),
                    answer: "It is. Authentic Genovese is salty. The brine adds surface saltiness that contrasts with the sweet wheat.",
                    context: t('styles.ligurian_palate')
                }
            ],
            fermentation_methods: [
                {
                    method: t('styles.direct_11'),
                    suitability: t('styles.authentic_7'),
                    notes: t('styles.standard_direct_dough_heavily_enriched_with_oil')
                }
            ]
        },
        deepDive: {
            hydrationLogic: "65% is balanced for a pan dough. The key isn't the water inside, but the oil/brine outside. The dough boils in the brine pockets.",
            methodSuitability: {
                direct: { suitable: true, notes: t('styles.the_classic_way_high_yeast_short_time_immediate_sa') },
                biga: { suitable: true, notes: "Adds a nice perfume, but often considered 'too fancy' for street food focaccia." },
                poolish: { suitable: true, notes: t('styles.makes_for_a_very_light_almost_cakelike_focaccia') }
            },
            whatIf: [
                {
                    scenario: "White spots are missing (The 'Eyes')?",
                    outcome: "Brine didn't pool correctly or you didn't dimple deep enough.",
                    solution: t('styles.press_fingers_until_you_touch_the_tray_pour_brine_')
                },
                {
                    scenario: "Dough is tough/chewy?",
                    outcome: t('styles.used_strong_bread_flour_instead_of_soft_flour'),
                    solution: t('styles.cut_with_50_all_purpose_or_pastry_flour_focaccia_s')
                }
            ],
            comparisons: [
                {
                    vsStyle: t('styles.pizza_teglia'),
                    difference: t('styles.focaccia_is_shorter_oilier_and_denser_teglia_is_ta')
                }
            ],
            proTips: [
                "Blind bake the bottom: Put the pan on the oven floor for the first 5 mins.",
                "Don't hold back on oil: If your hands aren't greasy, you're doing it wrong."
            ]
        }
    },
    {
        id: "sfincione-palermitano",
        name: t('styles.sfincione_palermitano'),
        region: 'Italy',
        subRegion: 'Palermo, Sicily',
        category: 'Pizza',
        recipeStyle: RecipeStyle.SICILIANA,
        tags: [t('styles.sponge_3'), t('styles.focacciastyle'), t('styles.street_food'), t('styles.onions')],
        description: "A thick, spongy, soft pizza topped with a sauce of onions, anchovies, tomatoes, oregano, and caciocavallo cheese. Often topped with breadcrumbs.",
        history_context: "The name derives from 'Spongia' (Sponge). A Christmas tradition in Palermo, traditionally sold by 'Sfincionari' on three-wheeled carts.",
        base_formula: [
            { name: "Semolina/Wheat Blend", percentage: 100 },
            { name: t('styles.water_7'), percentage: 70 },
            { name: t('styles.salt_10'), percentage: 2.2 },
            { name: t('styles.fresh_yeast_4'), percentage: 1.0 },
            { name: "Lard (Strutto)", percentage: 5 }
        ],
        specs: {
            hydration: { ideal: 70, min: 65, max: 75 },
            ovenTemp: { ideal: 220, min: 200, max: 240 },
            fermentationTime: "4-6h",
            difficulty: 'Medium'
        },
        scientificProfile: {
            flourRheology: {
                w_index: "Varies (Semolina Blend)",
                pl_ratio: "Short (Fat)",
                absorption_capacity: t('styles.medium_58'),
                protein_type: "Semolina/Wheat Blend",
                science_explanation: "Semolina Remilled (Rimacinata) mixed with soft wheat. The hard grain provides a specific 'bite' and golden color."
            },
            thermalProfile: {
                oven_type: "Deck (Sheet Pan)",
                heat_distribution: t('styles.protected_top'),
                crust_development: t('styles.fried_bottom_steamed_top'),
                crumb_structure: t('styles.spongy_cakelike')
            },
            fermentationScience: {
                yeast_activity: t('styles.moderate_5'),
                ph_target: t('styles.normal_6'),
                organic_acids: t('styles.low_11'),
                enzymatic_activity: t('styles.moderate_6')
            },
            processScience: "Fat coating. The use of Lard (Strutto) shortens the gluten strands, creating a soft, cake-like crumb ('Sponge') rather than a chewy bread."
        },
        process: [
            {
                phase: 'Mix',
                title: t('styles.soft_mix'),
                duration: "15 min",
                action: t('styles.incorporate_fat_at_the_end'),
                science: t('styles.adding_fat_late_allows_gluten_to_form_first_then_t')
            },
            {
                phase: 'Bulk',
                title: t('styles.double_rise'),
                duration: "2h + 2h",
                action: t('styles.rise_in_bowl_then_rise_in_pan'),
                science: t('styles.second_proof_in_the_pan_ensures_the_dough_relaxes_')
            },
            {
                phase: 'Bake',
                title: t('styles.topping_shield'),
                duration: "20-25 min",
                action: t('styles.bake_with_sauce_and_breadcrumbs_on_top'),
                science: "The thick sauce and breadcrumbs protect the dough surface from drying out, keeping the 'sponge' moist while the bottom fries in the oiled pan."
            }
        ],
        references: [t('styles.sicilian_food_history'), t('styles.gambero_rosso')],
        images: {
            hero: "/images/styles/pizza-siciliana.png",
            dough: "/images/styles/pizza-siciliana.png",
            crumb: "/images/styles/pizza-siciliana.png"
        },
        education: {
            pro_tips: [
                {
                    tip: t('styles.strutto_for_softness'),
                    explanation: "Authenitc Sfincione uses lard (Strutto), not oil, in the dough. This creates a distinct 'short' texture that is soft but not chewy."
                },
                {
                    tip: t('styles.the_sauce_shield'),
                    explanation: "Apply the sauce thick. It protects the dough from the oven heat, keeping the top steaming/soft while the bottom fries."
                }
            ],
            what_if: [
                {
                    scenario: t('styles.using_oil_instead_of_lard'),
                    result: "The texture becomes more bread-like and chewy, losing the 'spongy' cake-quality.",
                    correction: t('styles.use_butter_or_shortening_if_lard_is_unavailable')
                }
            ],
            comparative_analysis: [
                {
                    target_style: "Sicilian (USA)",
                    difference: "US Sicilian is often just a thick square pizza. Sfincione is a specific recipe with breadcrumbs, onions, and caciocavallo.",
                    why_choose_this: t('styles.choose_sfincione_for_the_authentic_palermo_street_')
                }
            ],
            q_and_a: [
                {
                    question: t('styles.breadcrumbs_on_pizza'),
                    answer: "Yes. They absorb the oil from the sauce and create a crunchy top layer that contrasts with the soft sponge.",
                    context: t('styles.palermo_tradition')
                }
            ],
            fermentation_methods: [
                {
                    method: t('styles.direct_12'),
                    suitability: t('styles.authentic_8'),
                    notes: t('styles.fast_rising_sponge')
                }
            ]
        },
        deepDive: {
            hydrationLogic: "70% hydration plus 5% Lard creates a 'short' dough. The fat coats the gluten, preventing it from becoming tough, resulting in a sponge cake texture.",
            methodSuitability: {
                direct: { suitable: true, notes: t('styles.authentic_method_the_softness_comes_from_fat_not_p') },
                biga: { suitable: false, notes: t('styles.not_typical_for_this_style') },
                poolish: { suitable: false, notes: t('styles.not_typical_2') }
            },
            whatIf: [
                {
                    scenario: t('styles.top_burns_before_bottom_is_crisp'),
                    outcome: t('styles.too_high_rack_position'),
                    solution: t('styles.the_sauce_layer_is_thick_and_wet_bake_low_to_drive')
                },
                {
                    scenario: t('styles.vegetarian_version'),
                    outcome: "Without lard, it loses the 'Sponge' texture.",
                    solution: "Substitute with high-quality Vegetable Shortening or Butter. Oil makes it too chewy."
                }
            ],
            comparisons: [
                {
                    vsStyle: t('styles.focaccia_genovese_3'),
                    difference: "Sfincione uses a sauce 'shield' to steam the dough. Focaccia uses brine."
                }
            ],
            proTips: [
                "The 'Rusks': Use toasted breadcrumbs on top. They soak up the oil and add the necessary crunch.",
                "Two Rises: One in the bowl, one in the pan. Crucial for the height."
            ]
        }
    },
    {
        id: "pane-toscano",
        name: "Pane Toscano DOP (Sem Sal)",
        region: 'Italy',
        subRegion: 'Tuscany',
        category: 'Bread',
        tags: [t('styles.no_salt'), t('styles.sourdough_4'), t('styles.dop'), t('styles.ancient')],
        description: "The famous 'Pane Sciocco' (Saltless Bread). Thick crunchy crust, irregular crumb, and completely bland flavor designed to pair with salty Tuscan cured meats.",
        history_context: "Dates back to the 12th century rivalry between Pisa and Florence, where Pisa blocked salt shipments. Florentines adapted by baking without it. It is now a DOP designation.",
        base_formula: [
            { name: t('styles.soft_wheat_type_0_2'), percentage: 100 },
            { name: t('styles.water_8'), percentage: 60 },
            { name: t('styles.salt_11'), percentage: 0 },
            { name: "Sourdough (Biga/Levain)", percentage: 20 }
        ],
        specs: {
            hydration: { ideal: 60, min: 55, max: 65 },
            ovenTemp: { ideal: 230, min: 220, max: 240 },
            fermentationTime: "12-16h",
            difficulty: 'Medium'
        },
        scientificProfile: {
            flourRheology: {
                w_index: t('styles.weakmedium'),
                pl_ratio: "Slack (No Salt)",
                absorption_capacity: t('styles.medium_60'),
                protein_type: t('styles.soft_wheat_type_0'),
                science_explanation: "Uses weak-medium flour. Without salt to tighten the gluten network, the dough is chemically slack and ferments much faster."
            },
            thermalProfile: {
                oven_type: "Wood Fired/Hearth",
                heat_distribution: t('styles.radiant_3'),
                crust_development: t('styles.thick_hard_pale'),
                crumb_structure: t('styles.irregular')
            },
            fermentationScience: {
                yeast_activity: "Explosive (Runaway)",
                ph_target: "Acidic (Sourdough Control)",
                organic_acids: "High Acetic (Biga)",
                enzymatic_activity: t('styles.very_high_2')
            },
            processScience: "Yeast Kinetics: Salt is a yeast inhibitor. Removing it creates 'Running Yeast', meaning fermentation explodes rapidly. We must use a Biga or acidic Levain to control this speed and strengthen the gluten."
        },
        process: [
            {
                phase: 'Mix',
                title: t('styles.biga_natural'),
                duration: "12h prior",
                action: t('styles.prepare_stiff_preferment'),
                science: "Acidity is needed to give strength to the glute since salt ions aren't there to help bonding."
            },
            {
                phase: 'Bulk',
                title: t('styles.careful_bulk'),
                duration: "60-90 min",
                action: t('styles.watch_closely_it_moves_fast'),
                science: t('styles.without_osmolarity_pressure_from_salt_yeast_cells_')
            },
            {
                phase: 'Bake',
                title: t('styles.dry_bake'),
                duration: "45-50 min",
                action: "Bake until 'hollow' sound.",
                science: "The lack of hygroscopic salt means the bread dries out faster and stales quicker, but achieves a very thick, hard crust."
            }
        ],
        references: [t('styles.consorzio_del_pane_toscano_dop')],
        images: {
            hero: "/images/styles/pane-toscano.png",
            dough: "/images/styles/pane-toscano.png",
            crumb: "/images/styles/pane-toscano.png"
        },
        education: {
            pro_tips: [
                {
                    tip: t('styles.watch_the_fermentation'),
                    explanation: "Without salt to inhibit yeast, this dough creates gas explosively fast. Check it 50% sooner than salted doughs."
                },
                {
                    tip: t('styles.pairing_is_mandatory'),
                    explanation: "This bread is bland on purpose. It is engineered to be eaten with salty prosciutto or strong cheese."
                }
            ],
            what_if: [
                {
                    scenario: t('styles.fails_to_brown'),
                    result: t('styles.salt_regulates_browning_without_it_the_crust_stays'),
                    correction: "Use a hotter oven (240°C) and steam to promote color."
                }
            ],
            comparative_analysis: [
                {
                    target_style: t('styles.sourdough_5'),
                    difference: "Toscano is often sourdough based but specifically lacks salt, altering the chemistry significantly.",
                    why_choose_this: t('styles.choose_toscano_strictly_for_charcuterie_boards')
                }
            ],
            q_and_a: [
                {
                    question: t('styles.can_i_add_salt'),
                    answer: "You can, but then it's not Pane Toscano. It's just generic country bread.",
                    context: t('styles.dop_regulation')
                }
            ],
            fermentation_methods: [
                {
                    method: t('styles.sourdough_6'),
                    suitability: t('styles.authentic_9'),
                    notes: "Acidic preferments (Biga/Levain) are needed to strengthen the gluten in the absence of salt."
                }
            ]
        },
        deepDive: {
            hydrationLogic: "60% is standard. The lack of salt changes the rheology - salt tightens gluten. Without it, the dough is naturally slack, so we don't need high water for extensibility.",
            methodSuitability: {
                direct: { suitable: false, notes: t('styles.without_salt_to_control_yeast_direct_dough_explode') },
                biga: { suitable: true, notes: t('styles.essential_the_acidity_of_the_biga_strengthens_the_') },
                poolish: { suitable: false, notes: t('styles.too_weak_we_need_the_strength_of_a_stiff_prefermen') }
            },
            whatIf: [
                {
                    scenario: t('styles.bread_is_completely_pale'),
                    outcome: "No salt = Unchecked yeast eats all sugars. No sugar left for browning (Maillard).",
                    solution: "Bake at higher temp (240°C) and use steam. Accept a lighter crust color as authentic."
                },
                {
                    scenario: t('styles.tastes_like_cardboard'),
                    outcome: "It's unsalted bread. By itself, it is bland.",
                    solution: t('styles.serve_with_salty_prosciutto_pecorino_or_aggressive')
                }
            ],
            comparisons: [
                {
                    vsStyle: t('styles.french_baguette'),
                    difference: "Toscano has a thick, hard crust and dense crumb. Baguette is thin-crusted and light."
                }
            ],
            proTips: [
                "Don't add salt: Seriously. It ruins the chemistry and the tradition.",
                "Use a Stiff Levain: If you have sourdough starter, use it. The acid is the flavor driver here."
            ]
        }
    },
    {
        id: "ciabatta-classic",
        name: t('styles.ciabatta_2'),
        region: 'Italy',
        subRegion: 'Adria, Veneto',
        category: 'Bread',
        tags: [t('styles.high_hydration_2'), t('styles.preferment'), t('styles.biga'), t('styles.modern_3')],
        description: "Meaning 'Slipper', this 1980s invention is the Italian answer to the baguette. Known for its paper-thin crust and massive, irregular alveoli (holes).",
        history_context: "Invented in 1982 by Arnaldo Cavallari to combat the popularity of French baguettes. It emphasizes high hydration and usage of Biga for flavor complexity.",
        base_formula: [
            { name: t('styles.high_gluten_flour_2'), percentage: 100 },
            { name: "Water (Total)", percentage: 78 },
            { name: t('styles.salt_12'), percentage: 2.2 },
            { name: t('styles.fresh_yeast_5'), percentage: 0.5 }
        ],
        specs: {
            hydration: { ideal: 78, min: 75, max: 85 },
            ovenTemp: { ideal: 240, min: 230, max: 250 },
            fermentationTime: "18-24h",
            difficulty: 'Hard'
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W320+ (High)",
                pl_ratio: t('styles.strong_but_extensible'),
                absorption_capacity: t('styles.very_high_3'),
                protein_type: t('styles.high_gluten_flour'),
                science_explanation: "Requires High Protein/High W (W320+). With hydration pushing 80%, weak flour would degrade into a soup due to protease activity. Strong gluten is needed to trap the massive steam generation."
            },
            thermalProfile: {
                oven_type: "Deck (Steam)",
                heat_distribution: t('styles.conduction_5'),
                crust_development: t('styles.paperthin_crispy'),
                crumb_structure: t('styles.massive_alveoli')
            },
            fermentationScience: {
                yeast_activity: "Controlled (Biga)",
                ph_target: "Acidic (Acetic Strength)",
                organic_acids: "Acetic (Structure)",
                enzymatic_activity: t('styles.controlled_2')
            },
            processScience: "Structure is driven by 'Bassinage' and 'Steam Expansion'. Adding water in stages builds the gluten network first. In the oven, the high water content converts to steam rapidly. The strong gluten traps these expanding gas pockets, creating the signature 'Open Crumb'."
        },
        process: [
            {
                phase: 'Mix',
                title: t('styles.biga_preparation'),
                duration: "16-18h prior",
                action: "Mix strong flour, water (45%), and tiny amount of yeast. Ferment at 18°C.",
                science: "This stiff preferment promotes Acetic Acid production, which strengthens the gluten structure chemically, allowing it to hold more water later."
            },
            {
                phase: 'Mix',
                title: "Double Hydration (Bassinage)",
                duration: "15-20 min",
                action: "Mix Biga with 85% of total water. Develop full gluten. Then slowly trickle in the remaining water.",
                science: "Adding all water at once creates 'slippage' where gluten can't link. Bassinage allows us to hydrate an established network."
            },
            {
                phase: 'Bulk',
                title: t('styles.coil_folds'),
                duration: t('styles.every_45_min'),
                action: t('styles.lift_the_dough_from_the_center_and_let_it_fold_und'),
                science: "Mechanical alignment of gluten strands. Since the dough is too wet to knead, we use gravity to organize the structure without degassing."
            },
            {
                phase: 'Ball',
                title: t('styles.shaping_7'),
                duration: t('styles.rapid'),
                action: t('styles.flour_heavily_cut_into_rectangles_flip_onto_courie'),
                science: "We are handling a foam structure. Any pressure will collapse the large bubbles we worked to create."
            },
            {
                phase: 'Bake',
                title: t('styles.steam_bake'),
                duration: "25-30 min",
                action: "High heat (240°C) with steam injection for first 10 mins.",
                science: "Steam keeps the crust soft, allowing maximum expansion (Oven Spring) before gelatinization sets the final shape."
            }
        ],
        references: [t('common.modernist_bread'), "The Bread Baker's Apprentice"],
        images: {
            hero: "/images/styles/ciabatta_real.png",
            dough: "/images/styles/ciabatta.png",
            crumb: "/images/styles/ciabatta.png"
        },
        education: {
            pro_tips: [
                {
                    tip: t('styles.handle_like_nitro'),
                    explanation: "Once fermented, the dough is a foam. Cut it and flip it with extreme care. Do not punch down. Do not shape tight."
                },
                {
                    tip: t('styles.invert_the_biga'),
                    explanation: "To mix easily, dissolve the stiff biga in the water first (make a slurry) before adding the rest of the flour."
                }
            ],
            what_if: [
                {
                    scenario: "Hydration < 75%",
                    result: "You get a dense bread roll, not a Ciabatta. The large holes require excess water to turn into steam.",
                    correction: t('styles.push_hydration_to_at_least_78')
                }
            ],
            comparative_analysis: [
                {
                    target_style: t('styles.baguette'),
                    difference: "Baguette is lower hydration (65-70%) and tightly shaped. Ciabatta is high hydration (80%+) and loosely cut.",
                    why_choose_this: "Choose Ciabatta for sandwiches (holds sauce better) and dipping."
                }
            ],
            q_and_a: [
                {
                    question: t('styles.why_biga_and_not_sourdough'),
                    answer: "Authentic Ciabatta (1982) uses Biga to get a specific nutty, milky flavor profile without the sour tang of levain.",
                    context: t('styles.arnaldo_cavallari')
                }
            ],
            fermentation_methods: [
                {
                    method: t('styles.biga_3'),
                    suitability: t('styles.ideal_6'),
                    notes: t('styles.using_a_100_biga_preferment_creates_strength_for_t')
                },
                {
                    method: t('styles.direct_13'),
                    suitability: t('styles.not_recommended_2'),
                    notes: t('styles.hard_to_get_the_structure_without_chemical_straigh')
                }
            ]
        },
        deepDive: {
            hydrationLogic: "78-85% is the definition of Ciabatta. It must be wet enough to be self-leveling. The steam expansion from this water creates the massive holes.",
            methodSuitability: {
                direct: { suitable: false, notes: t('styles.you_cannot_get_the_open_crumb_or_flavor_without_a_') },
                biga: { suitable: true, notes: t('styles.the_original_1982_method_100_of_flour_in_the_biga_') },
                poolish: { suitable: true, notes: "Creates a lighter, thinner crust version, but less 'meaty' crumb." }
            },
            whatIf: [
                {
                    scenario: "Bread spreads flat in the oven (Flying Saucer)?",
                    outcome: t('styles.overproofed_or_weak_flour'),
                    solution: t('styles.ciabatta_is_delicate_catch_it_before_it_peaks_use_')
                },
                {
                    scenario: "Dense crumb (Mouse holes)?",
                    outcome: t('styles.degassed_during_shaping'),
                    solution: t('styles.treat_the_dough_like_nitroglycerin_flip_gently_do_')
                }
            ],
            comparisons: [
                {
                    vsStyle: t('styles.baguette_2'),
                    difference: "Ciabatta is wetter, flatter, and has larger, wilder holes. Baguette is controlled and cylindrical."
                }
            ],
            proTips: [
                "Invert the process: Dissolve the Biga in water first to make a 'milk', then add flour.",
                "Flour the courier heavily: Stickiness is the enemy of the oven launch."
            ]
        }
    }
];
