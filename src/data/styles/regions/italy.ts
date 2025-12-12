import { DoughStyle, RecipeStyle } from '@/types/dough';

export const italianStyles: DoughStyle[] = [
    {
        id: "pizza-napoletana",
        name: 'Pizza napoletana stg',
        region: 'Italy',
        subRegion: 'Naples, 'Campania'',
        category: 'Pizza',
        recipeStyle: RecipeStyle.NEAPOLITAN,
        tags: [High heat 2, 'Direct method', 'Stg', 'Wood fired'],
        description: "The gold standard of pizza. Soft, pliable ('a libretto'), with a distinctively airy cornicione and leoparding checks. Protected by UNESCO.",
        history_context: "Defined by the \'Associazione Verace Pizza Napoletana\' (AVPN)', this style dates back to the 18th century. It was rigorously codified to protect the tradition against industrialization. True Neapolitan pizza is an artisanal product that requires specific hand stretching ('schiaffo') and a wood-fired oven."',
        base_formula: [
            { name: "Flour (Type 00)", percentage: 100 },
            { name: 'Water 3, percentage: 60 }',
            { name: 'Salt 6, percentage: 2.8 }',
            { name: 'Fresh yeast', percentage: 0.15 }
        ],
        specs: {
            hydration: { ideal: 60, min: 57, max: 62.5 },
            ovenTemp: { ideal: 450, min: 430, max: 485 },
            fermentationTime: "24h",
            difficulty: 'Expert'
        },
        scientificProfile: {
            flourRheology: {
                w_index: 'W280320',
                pl_ratio: "0.50-0.60 (Extensible)",
                absorption_capacity: 'Mediumhigh',
                protein_type: 'Type 00',
                science_explanation: "Requires '00' flour with W280-320. The key is strict P/L control (0.50-0.60): we need extensibility for easy stretching without snap-back, but enough strength to hold gas during a long 24h fermentation at room temperature."
            },
            thermalProfile: {
                oven_type: "Wood Fired (Dome)",
                heat_distribution: "High Conduction (Floor) & Radiation",
                crust_development: 'Leopard spotting',
                crumb_structure: 'Airy cornicione thin center'
            },
            fermentationScience: {
                yeast_activity: "Controlled (Room Temp)",
                ph_target: "pH 5.5",
                organic_acids: 'Lactic dominant',
                enzymatic_activity: "High (24h Maturation)"
            },
            processScience: "The defining physical event is 'Sudden Evaporation'. At >430°C, the moisture in the dough turns to steam almost instantly. Because the gluten is relaxed (extensible), the cornicione inflates rapidly before the crust sets, creating the signature 'voids' inside the rim."
        },
        process: [
            {
                phase: 'Mix',
                title: 'Controlled mixing',
                duration: "15-20 min",
                action: "Dissolve salt in water', add yeast, then flour. Mix to reach final internal temp of 23-25°C."',
                science: "Salt is added first in the Napoletana tradition to control yeast activity immediately for the long room-temp fermentation. Mixing is gentle to avoid excessive oxidation."
            },
            {
                phase: 'Bulk',
                title: "Puntata (Bulk Fermentation)",
                duration: "2-4 hours",
                action: 'Rest the entire mass in an airtight container at r',
                science: "Allows enzymatic activity (Amylase and Protease) to begin breaking down starch into fermentable sugars and relaxing the gluten net."
            },
            {
                phase: 'Ball',
                title: "Staglio (Balling)",
                duration: "10-20 min",
                action: 'Divide info 200280g balls by hand ensuring tight s',
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
                title: 'Flash bake',
                duration: "60-90 seconds",
                action: 'Bake at 430480c on the floor',
                science: "Leidenfrost effect protects the bottom. Radiation cooks the top. The speed ensures the crumb remains moist (gelatinized) while the crust chars."
            }
        ],
        references: [Avpn international regulations 2, The pizza bible 2],
        images: {
            hero: "/images/styles/pizza-napoletana.png",
            dough: "/images/styles/pizza-napoletana.png",
            crumb: "/images/styles/pizza-napoletana.png"
        },
        education: {
            pro_tips: [
                {
                    tip: "Respect the \'Punto di Pasta\'",
                    explanation: "Stop mixing when the dough is smooth and 'pumpkin-like'. Over-mixing tightens the gluten too much, leading to rubbery pizza."
                },
                {
                    tip: 'Use room temp water',
                    explanation: "For 24h room temp fermentation', cold water can stall yeast activity initially. Use water at ~20°C unless your room is very hot."'
                }
            ],
            what_if: [
                {
                    scenario: 'Hydration is increased to 70',
                    result: 'Dough becomes too sticky to handle and stretches i',
                    correction: "Stick to 58-65%. If sticky, use a 'spolvero' (dusting flour) of semolina, but don't force more water."'
                },
                {
                    scenario: "Oven temp is only 250°C (Home Oven)",
                    result: "The pizza dries out before it browns. The crust becomes a hard cracker instead of soft/airy.",
                    correction: "Add sugar/malt to dough for browning (not authentic but necessary) and hydration to 65-70% to retain moisture."
                },
                {
                    scenario: "Dough balls are cold (from fridge)",
                    result: "Leopard spotting turns into 'measles' (small micro-blisters) and the crust is tough.",
                    correction: 'Always let dough balls come to room temp for at le'
                }
            ],
            comparative_analysis: [
                {
                    target_style: 'Roman tonda',
                    difference: "Neapolitan is soft', foldable ('a libretto'), and baked fast. Roman Tonda is crispy, cracker-like, and rolled flat."',
                    why_choose_this: 'Choose neapolitan for a light digestible and soft '
                },
                {
                    target_style: 'Ny style',
                    difference: "NY Style adds oil and sugar', bakes lower/slower for a sturdy slice. Neapolitan has no oil/sugar and is floppy."',
                    why_choose_this: 'Choose neapolitan for pure fermentation flavor and'
                }
            ],
            q_and_a: [
                {
                    question: 'Why is the hydration limit 625',
                    answer: "Scientific balance. 55-62% provides the perfect elasticity to stretch thin by hand without tearing, while retaining enough moisture to stay soft during the 485°C flash bake. Higher hydration makes it unmanageable for the specific 'slap' technique.",
                    context: 'Avpn regulations'
                },
                {
                    question: 'Can i use biga or poolish',
                    answer: "Traditionally', no (Direct method is STG). However, modern 'Canotto' (dinghy) style uses Biga/Poolish to create an exaggerated airy rim. It is delicious but technically a different sub-style."',
                    context: 'Modern evolution'
                }
            ],
            fermentation_methods: [
                {
                    method: 'Direct 8',
                    suitability: 'Authentic 5',
                    notes: 'The gold standard for stg 24h at room temp creates'
                },
                {
                    method: 'Poolish 3',
                    suitability: 'Possible',
                    notes: "Used for 'Canotto' style to get explosive cornichone. Makes dough very extensible."
                },
                {
                    method: 'Biga 2',
                    suitability: 'Possible 2',
                    notes: 'Adds chewiness and complex acidity harder to manag'
                }
            ]
        },
        deepDive: {
            hydrationLogic: "58-62% is the STG standard because the 485°C wood-fired oven requires rapid evaporation without burning the crust. The modern 'Canotto' style uses 70%+, but demands much stronger flour and advanced handling skills.",
            methodSuitability: {
                direct: { suitable: true, notes: "Ideal & Traditional. Maximizes pure wheat flavor and digestibility with 24h fermentation." },
                biga: { suitable: false, notes: "Non-traditional (STG)', but widely used in 'Neo-Neapolitan' to create extreme cornicione volume and complex flavor." }',
                poolish: { suitable: true, notes: "Good for home ovens to boost extensibility', but can make the dough too soft/slack for classic slap stretching." }'
            },
            whatIf: [
                {
                    scenario: "Lowering temp to 250°C (Home Oven)?",
                    outcome: 'The dough dries out before it browns you get a har',
                    solution: "Add 2-3% sugar and oil to aid browning and softness (Technically becomes NY/Neo-Neapolitan)."
                },
                {
                    scenario: "Using weak flour (All Purpose)?",
                    outcome: 'It cannot withstand the 24h fermentation',
                    solution: "The gluten network will degrade and tear when stretching. Use a specific Pizza/Bread flour."
                }
            ],
            comparisons: [
                {
                    vsStyle: 'Romana tonda',
                    difference: "Neapolitan is soft', foldable ('wallet'), and moist. Romana is paper-thin, dry, and crispy."'
                }
            ],
            proTips: [
                "Respect the 'Punto di Pasta': Stop mixing when the dough is smooth.",
                "Use Room Temp Water (~20°C) to simulate the Naples climate unless it's extremely hot."'
            ]
        }
    },
    {
        id: "pizza-teglia-romana",
        name: 'Pizza in teglia romana',
        region: 'Italy',
        subRegion: 'Rome, Lazio',
        category: 'Pizza',
        recipeStyle: RecipeStyle.ROMAN,
        tags: ['High hydration', 'Pan pizza', 'Cold ferment 3, 'Airy crumb']',
        description: "A highly hydrated pan pizza known for its light', airy, open crumb and crispy bottom. Sold by weight ('al taglio') in Rome."',
        history_context: "Revolutionized in the late 80s/90s by Angelo Iezzi', shifting from a dense oily focaccia to a high-hydration, cold-fermented masterpiece that requires technique over grease."',
        base_formula: [
            { name: "Strong Flour (Type 0/00)", percentage: 100 },
            { name: 'Water 4, percentage: 80 }',
            { name: 'Salt 7, percentage: 2.5 }',
            { name: 'Olive oil 2, percentage: 2.5 }',
            { name: 'Dry yeast', percentage: 0.7 }
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
                science_explanation: "Requires extremely strong flour (W350+', P/L 0.55). The gluten network must be powerful enough to hold 80%+ water and trap the massive CO2 bubbles during the cold ferment."'
            },
            thermalProfile: {
                oven_type: 'Deck oven',
                heat_distribution: "Conduction (Floor)",
                crust_development: "Fried/Crispy Bottom",
                crumb_structure: 'Open alveolated'
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
                title: 'Bassinage mixing',
                duration: "20 min",
                action: "Mix flour with 65% water until pumpkin-like skin forms. Slowly trickle in remaining cold water.",
                science: "Bassinage prevents the dough from turning into soup. You establish the gluten structure first, then rely on the gluten's absorption capacity."'
            },
            {
                phase: 'Bulk',
                title: "Cold Bulk (Puntata)",
                duration: "24-48 hours",
                action: 'Place in oiled container at 4c',
                science: "Cold retarding creates structure (hardening of fats/gluten alignment) and flavor (organic acids)."
            },
            {
                phase: 'Ball',
                title: 'Staglio  relax',
                duration: "4 hours",
                action: 'Form dough balls and let rise at room temp until d',
                science: "The dough must warm up to ferment (expand) and relax before the delicate stretching phase."
            },
            {
                phase: 'Bake',
                title: 'Floor then top',
                duration: "12-15 min",
                action: "Bake on oven floor (lowest rack) to fry the bottom', then mid-rack for toppings."',
                science: "Conductive heat from the bottom creates the crust structure before the weight of the toppings can collapse the crumb."
            }
        ],
        references: [],
        images: {
            hero: "/images/styles/pizza-teglia-romana.png",
            dough: "/images/styles/pizza-teglia-romana.png",
            crumb: "/images/styles/pizza-teglia-romana.png"
        },
        education: {
            pro_tips: [
                {
                    tip: 'Cold water is critical',
                    explanation: "Use ice-cold water during mixing. High hydration generates friction heat; keeping it cool prevents the gluten from damaging during the long mix."
                },
                {
                    tip: 'No rolling pins',
                    explanation: "Never use a rolling pin. It crushes the alveoli (air pockets). Use your fingertips to gently push the gas from the center to the edges."
                }
            ],
            what_if: [
                {
                    scenario: "Hydration is too low (<75%)",
                    result: "The crust becomes dense and bread-like', losing its signature cloud-like lightness."',
                    correction: "Increase water gradually (Bassinage) to reach at least 75-80%."
                },
                {
                    scenario: 'Dough tears during stretching',
                    result: 'Gluten is too tense or underdeveloped',
                    correction: 'Wait 15 minutes to let gluten relax then try again'
                }
            ],
            comparative_analysis: [
                {
                    target_style: 'Focaccia',
                    difference: "Teglia is crispier on the bottom and airy/light', while Focaccia is oily, softer, and denser."',
                    why_choose_this: 'Choose teglia for a lighter crunchier bite that ho'
                }
            ],
            q_and_a: [
                {
                    question: 'Why 48h fermentation',
                    answer: "To break down the complex proteins in strong flour. This makes the high-gluten dough digestible and creates the complex organic acid flavor profile.",
                    context: 'Bonci method'
                }
            ],
            fermentation_methods: [
                {
                    method: 'Direct 9',
                    suitability: 'Ideal 5',
                    notes: "The standard Cold Ferment (4°C for 24-48h). Essential for handling 80% hydration."
                }
            ]
        },
        deepDive: {
            hydrationLogic: "80% is the magic number for the 'cloud' texture. High water creates steam pockets (alveoli) and keeps the crumb moist despite the long bake. Below 75%, it's just heavy focaccia."',
            methodSuitability: {
                direct: { suitable: true, notes: "The 'No-Knead' cold ferment approach is effectively a direct method simplified. Very effective." },
                biga: { suitable: false, notes: "Rarely used as the main method because the gluten needs to be fully hydrated', not stiff." }',
                poolish: { suitable: true, notes: 'Excellent choice a 100 poolish dough yields incred' }
            },
            whatIf: [
                {
                    scenario: "Dough is impossible to handle (Soup)?",
                    outcome: 'You added water too fast',
                    solution: "Use the 'Bassinage' technique. Add 65% water first, develop gluten, then slowly add the rest."
                },
                {
                    scenario: 'Bottom is pale and soft',
                    outcome: "Oven floor wasn't hot enough."',
                    solution: "Bake on the lowest rack or directly on a stone/steel for the first 10 minutes."
                }
            ],
            comparisons: [
                {
                    vsStyle: "Sicilian (Sfincione)",
                    difference: 'Teglia is airy crunchy and light sicilian is spong'
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
        tags: ['Low hydration', 'Rolling pin', 'Crispy 2, 'Crackerthin']',
        description: "The 'Scrocchiarella' (The Crunchy One). Ultra-thin, borderless, and cracker-like. Often rolled with a pin to degas completely.",
        history_context: "The everyday pizzeria pizza of Rome. Unlike Naples, Rome favors a longer bake at lower temps to dry out the crust for maximum crunch.",
        base_formula: [
            { name: "Flour (Type 00)", percentage: 100 },
            { name: 'Water 5, percentage: 56 }',
            { name: 'Salt 8, percentage: 2.0 }',
            { name: 'Olive oil 3, percentage: 3.0 }',
            { name: 'Fresh yeast 2, percentage: 0.5 }'
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
                absorption_capacity: 'Medium 54',
                protein_type: 'Type 00 2',
                science_explanation: "Medium strength (W240). We don't want extreme elasticity because we manually roll it flat. Too much nerve (elasticity) makes it shrink back."'
            },
            thermalProfile: {
                oven_type: "Electric/Gas Deck",
                heat_distribution: 'Consistent',
                crust_development: 'Dry crispy crackerlike',
                crumb_structure: 'Tight dense'
            },
            fermentationScience: {
                yeast_activity: 'Standard 11',
                ph_target: 'Normal 4',
                organic_acids: 'Low 9',
                enzymatic_activity: 'Moderate 4'
            },
            processScience: "Evaporation is the goal. Low hydration + Oil + Rolling Pin = Dehydration. We are effectively frying the dough in its own oil and drying it out to create a biscuit structure."
        },
        process: [
            {
                phase: 'Mix',
                title: 'Stiff mix 2',
                duration: "10-12 min",
                action: 'Mix to smooth stiff consistency',
                science: 'Low hydration means less gluten mobility resulting'
            },
            {
                phase: 'Bulk',
                title: 'Short bulk 2',
                duration: "1-2 hours",
                action: 'Room temp rest',
                science: 'Just enough to let yeast activate'
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
                action: 'Bake at 300c',
                science: "Longer residence time in the oven compared to Neapolitan ensures the Maillard reaction penetrates deep and water evaporates fully."
            }
        ],
        references: [],
        images: {
            hero: "/images/styles/pizza-tonda-romana.png",
            dough: "/images/styles/pizza-tonda-romana.png",
            crumb: "/images/styles/pizza-tonda-romana.png"
        },
        education: {
            pro_tips: [
                {
                    tip: 'Roll it thin then thinner',
                    explanation: "The goal is 'Scrocchiarella' (crunchy). Roll to 2-3mm. If it looks too thin, it's probably almost right."'
                },
                {
                    tip: 'Dock the dough',
                    explanation: "Use a fork to prick the entire surface. This prevents large bubbles from forming, ensuring a flat, even cracker crust."
                }
            ],
            what_if: [
                {
                    scenario: 'Dough shrinks back when rolling',
                    result: "Gluten is too elastic (Nerve).",
                    correction: 'Let the dough balls rest for 30 mixed before rolli'
                },
                {
                    scenario: 'Crust is chewy not crunchy',
                    result: 'Hydration too high or baked too fast',
                    correction: "Lower hydration to ~56% and bake at a lower temp (~300°C) for longer to dry it out."
                }
            ],
            comparative_analysis: [
                {
                    target_style: 'Neapolitan',
                    difference: "Tonda Romana is the anti-Neapolitan: thin', crispy, no raised border, and rolled flat."',
                    why_choose_this: 'Choose tonda if you prefer a crackerlike crunch su'
                }
            ],
            q_and_a: [
                {
                    question: 'Why add oil to the dough',
                    answer: "Oil aids in crispness (frying effect) and extensibility', helping rolling without tearing."',
                    context: 'Roman tradition'
                }
            ],
            fermentation_methods: [
                {
                    method: 'Direct 10',
                    suitability: 'Authentic 6',
                    notes: "Short warm fermentation (6-24h) is standard for this quick-service style."
                }
            ]
        },
        deepDive: {
            hydrationLogic: "Low hydration (~56%) is critical. We want to restrict steam generation so the crust dries out and becomes a cracker. High hydration would make it chewy.",
            methodSuitability: {
                direct: { suitable: true, notes: 'Standard a simple direct dough works best for this' },
                biga: { suitable: false, notes: "Unnecessary complexity. We don't want the volume or wild crumb that Biga provides." }',
                poolish: { suitable: false, notes: "Too extensible. We want some resistance (nerve) to roll it thin." }
            },
            whatIf: [
                {
                    scenario: 'Dough keeps snapping back',
                    outcome: 'Too much elasticity',
                    solution: "Let the dough balls rest longer (30-60 mins) before rolling to relax the gluten."
                },
                {
                    scenario: 'Not crispy enough',
                    outcome: 'Too much water or baked too fast',
                    solution: 'Lower temp to 270c and bake longer to fully dehydr'
                }
            ],
            comparisons: [
                {
                    vsStyle: 'Neapolitan 2',
                    difference: "Polar opposites. Tonda is rolled flat to remove gas. Neapolitan is slapped to preserve it."
                }
            ],
            proTips: [
                "The Rolling Pin is a Tool: Don't be afraid to use it. It evens out the crumb for that signature crunch."',
                "Docking is key: Poke holes to prevent it from turning into a pita bread balloon."
            ]
        }
    },
    {
        id: "focaccia-genovese",
        name: 'Focaccia genovese 4',
        region: 'Italy',
        subRegion: 'Genoa, Liguria',
        category: 'Flatbread',
        recipeStyle: RecipeStyle.FOCACCIA,
        tags: ['High oil', 'Breakfast 3, 'Emulsion', 'Pan']',
        description: "The authentic 'Fugassa'. A masterpiece of olive oil and flour, characterized by its golden dimples and white, creamy 'eyes'.",
        history_context: "Historically a breakfast food for dock workers in Genoa', dipping it in cappuccino or white wine. The authentic Genovese version differs from others by its precise use of 'Salamoia' (brine) and lower height (max 2cm)."',
        base_formula: [
            { name: 'Soft wheat flour', percentage: 100 },
            { name: 'Water 6, percentage: 65 }',
            { name: "Olive Oil (Dough)", percentage: 6 },
            { name: 'Salt 9, percentage: 2.2 }',
            { name: 'Fresh yeast 3, percentage: 2 }',
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
                pl_ratio: 'Extensible 3',
                absorption_capacity: 'Medium 56',
                protein_type: 'Soft wheat',
                science_explanation: "Uses a Medium strength flour (W260-280). We don't want extreme elasticity; the dough must be extensible enough to fill the pan corners without fighting back."'
            },
            thermalProfile: {
                oven_type: "Convection/Deck",
                heat_distribution: "Steam (Brine)",
                crust_development: "Golden (Fried in Oil)",
                crumb_structure: 'Soft creamy'
            },
            fermentationScience: {
                yeast_activity: 'Fast 2',
                ph_target: 'Normal 5',
                organic_acids: 'Low 10',
                enzymatic_activity: 'High 8'
            },
            processScience: "The Core Science is the 'Salamoia' (Brine Emulsion). Pouring a mix of water and oil over the dough before baking creates a thermal barrier. The liquid pools in the dimples, preventing the dough there from exceeding 100°C. This essentially boils the dough in the holes (keeping them white/soft) while the ridges fry in oil (becoming golden/crisp)."
        },
        process: [
            {
                phase: 'Mix',
                title: 'Short mix',
                duration: "10-12 min",
                action: "Mix flour', water, salt, yeast, and olive oil. Stop before full gluten development."',
                science: "We avoid an overly strong gluten structure. The high oil content (6-10%) chemically lubricates the gluten strands, increasing extensibility."
            },
            {
                phase: 'Bulk',
                title: 'First rise',
                duration: "60-90 min",
                action: 'Let rise until volume increases by 50',
                science: 'Initial yeast activity establishes the alveolar st'
            },
            {
                phase: 'Bulk',
                title: 'Pan stretch',
                duration: "20 min",
                action: "Transfer to oiled pan. Stretch gently to corners. If it retracts, wait 10 mins and try again.",
                science: "Allowing the dough to sit lets the gluten relax via protease action', making the final stretch possible without tearing."'
            },
            {
                phase: 'Ball',
                title: 'Dimpling  salamoia',
                duration: "5 min",
                action: "Pour brine (water/oil/salt) over dough. Press fingers deep to create holes.",
                science: "Dimpling 'staples' the top and bottom crusts together to prevent ballooning. The brine fills these reservoirs."
            },
            {
                phase: 'Bake',
                title: 'Moist bake',
                duration: "15-18 min",
                action: 'Bake at 230c until golden brown',
                science: "The water in the brine evaporates', steaming the focaccia from the outside in, while the oil fries the surface."'
            }
        ],
        references: ["Ezra Pound\'s Letters (Historical)", "Salt, Fat, Acid, Heat"],
        images: {
            hero: "/images/styles/focaccia-genovese.png",
            dough: "/images/styles/focaccia-genovese.png",
            crumb: "/images/styles/focaccia-genovese.png"
        },
        education: {
            pro_tips: [
                {
                    tip: 'The brine is king',
                    explanation: "Don't skimp on the 'Salamoia'. The pockets of brine boil the dough while it bakes, creating the creamy interior."'
                },
                {
                    tip: 'Blind bake the bottom',
                    explanation: "For home ovens', place the pan on the floor for the first 5 mins to ensure the bottom fries in the oil."'
                }
            ],
            what_if: [
                {
                    scenario: 'Dimples disappear during baking',
                    result: "You didn't press hard enough or didn't use enough brine to weigh them down.",
                    correction: 'Press your fingers until you feel the pan fill hol'
                }
            ],
            comparative_analysis: [
                {
                    target_style: 'Focaccia barese',
                    difference: "Genovese is about the Brine/Oil emulsion. Barese includes potato in the dough and tomatoes on top.",
                    why_choose_this: "Choose Genovese for the pure wheat/oil flavor profile."
                }
            ],
            q_and_a: [
                {
                    question: 'Salt percentage seems high',
                    answer: "It is. Authentic Genovese is salty. The brine adds surface saltiness that contrasts with the sweet wheat.",
                    context: 'Ligurian palate'
                }
            ],
            fermentation_methods: [
                {
                    method: 'Direct 11',
                    suitability: 'Authentic 7',
                    notes: 'Standard direct dough heavily enriched with oil'
                }
            ]
        },
        deepDive: {
            hydrationLogic: "65% is balanced for a pan dough. The key isn't the water inside, but the oil/brine outside. The dough boils in the brine pockets."',
            methodSuitability: {
                direct: { suitable: true, notes: 'The classic way high yeast short time immediate sa' },
                biga: { suitable: true, notes: "Adds a nice perfume', but often considered 'too fancy' for street food focaccia." }',
                poolish: { suitable: true, notes: 'Makes for a very light almost cakelike focaccia' }
            },
            whatIf: [
                {
                    scenario: "White spots are missing (The \'Eyes\')?",
                    outcome: "Brine didn't pool correctly or you didn't dimple deep enough.",
                    solution: 'Press fingers until you touch the tray pour brine '
                },
                {
                    scenario: "Dough is tough/chewy?",
                    outcome: 'Used strong bread flour instead of soft flour',
                    solution: 'Cut with 50 all purpose or pastry flour focaccia s'
                }
            ],
            comparisons: [
                {
                    vsStyle: 'Pizza teglia',
                    difference: 'Focaccia is shorter oilier and denser teglia is ta'
                }
            ],
            proTips: [
                "Blind bake the bottom: Put the pan on the oven floor for the first 5 mins.",
                "Don't hold back on oil: 'If your hands aren\'t greasy', you're doing it wrong."
            ]
        }
    },
    {
        id: "sfincione-palermitano",
        name: 'Sfincione palermitano',
        region: 'Italy',
        subRegion: 'Palermo, Sicily',
        category: 'Pizza',
        recipeStyle: RecipeStyle.SICILIANA,
        tags: [Sponge 3, 'Focacciastyle', 'Street food', 'Onions'],
        description: "A thick', spongy, soft pizza topped with a sauce of onions, anchovies, tomatoes, oregano, and caciocavallo cheese. Often topped with breadcrumbs."',
        history_context: "The name derives from 'Spongia' (Sponge). A Christmas tradition in Palermo, traditionally sold by 'Sfincionari' on three-wheeled carts.",
        base_formula: [
            { name: "Semolina/Wheat Blend", percentage: 100 },
            { name: 'Water 7, percentage: 70 }',
            { name: 'Salt 10, percentage: 2.2 }',
            { name: 'Fresh yeast 4, percentage: 1.0 }',
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
                absorption_capacity: 'Medium 58',
                protein_type: "Semolina/Wheat Blend",
                science_explanation: "Semolina Remilled (Rimacinata) mixed with soft wheat. The hard grain provides a specific 'bite' and golden color."
            },
            thermalProfile: {
                oven_type: "Deck (Sheet Pan)",
                heat_distribution: 'Protected top',
                crust_development: 'Fried bottom steamed top',
                crumb_structure: 'Spongy cakelike'
            },
            fermentationScience: {
                yeast_activity: 'Moderate 5',
                ph_target: 'Normal 6',
                organic_acids: 'Low 11',
                enzymatic_activity: 'Moderate 6'
            },
            processScience: "Fat coating. The use of Lard (Strutto) shortens the gluten strands, creating a soft, cake-like crumb ('Sponge') rather than a chewy bread."
        },
        process: [
            {
                phase: 'Mix',
                title: 'Soft mix',
                duration: "15 min",
                action: 'Incorporate fat at the end',
                science: 'Adding fat late allows gluten to form first then t'
            },
            {
                phase: 'Bulk',
                title: 'Double rise',
                duration: "2h + 2h",
                action: 'Rise in bowl then rise in pan',
                science: 'Second proof in the pan ensures the dough relaxes '
            },
            {
                phase: 'Bake',
                title: 'Topping shield',
                duration: "20-25 min",
                action: 'Bake with sauce and breadcrumbs on top',
                science: "The thick sauce and breadcrumbs protect the dough surface from drying out', keeping the 'sponge' moist while the bottom fries in the oiled pan."'
            }
        ],
        references: [],
        images: {
            hero: "/images/styles/pizza-siciliana.png",
            dough: "/images/styles/pizza-siciliana.png",
            crumb: "/images/styles/pizza-siciliana.png"
        },
        education: {
            pro_tips: [
                {
                    tip: 'Strutto for softness',
                    explanation: "Authenitc Sfincione uses lard (Strutto)', not oil, in the dough. This creates a distinct 'short' texture that is soft but not chewy."'
                },
                {
                    tip: 'The sauce shield',
                    explanation: "Apply the sauce thick. It protects the dough from the oven heat, keeping the top steaming/soft while the bottom fries."
                }
            ],
            what_if: [
                {
                    scenario: 'Using oil instead of lard',
                    result: "The texture becomes more bread-like and chewy', losing the 'spongy' cake-quality."',
                    correction: 'Use butter or shortening if lard is unavailable'
                }
            ],
            comparative_analysis: [
                {
                    target_style: "Sicilian (USA)",
                    difference: "US Sicilian is often just a thick square pizza. Sfincione is a specific recipe with breadcrumbs, onions, and caciocavallo.",
                    why_choose_this: 'Choose sfincione for the authentic palermo street '
                }
            ],
            q_and_a: [
                {
                    question: 'Breadcrumbs on pizza',
                    answer: "Yes. They absorb the oil from the sauce and create a crunchy top layer that contrasts with the soft sponge.",
                    context: 'Palermo tradition'
                }
            ],
            fermentation_methods: [
                {
                    method: 'Direct 12',
                    suitability: 'Authentic 8',
                    notes: 'Fast rising sponge'
                }
            ]
        },
        deepDive: {
            hydrationLogic: "70% hydration plus 5% Lard creates a 'short' dough. The fat coats the gluten, preventing it from becoming tough, resulting in a sponge cake texture.",
            methodSuitability: {
                direct: { suitable: true, notes: 'Authentic method the softness comes from fat not p' },
                biga: { suitable: false, notes: 'Not typical for this style' },
                poolish: { suitable: false, notes: 'Not typical 2' }
            },
            whatIf: [
                {
                    scenario: 'Top burns before bottom is crisp',
                    outcome: 'Too high rack position',
                    solution: 'The sauce layer is thick and wet bake low to drive'
                },
                {
                    scenario: 'Vegetarian version',
                    outcome: "Without lard', it loses the 'Sponge' texture."',
                    solution: "Substitute with high-quality Vegetable Shortening or Butter. Oil makes it too chewy."
                }
            ],
            comparisons: [
                {
                    vsStyle: 'Focaccia genovese 3',
                    difference: "Sfincione uses a sauce 'shield' to steam the dough. Focaccia uses brine."
                }
            ],
            proTips: [
                "The 'Rusks': Use toasted breadcrumbs on top. They soak up the oil and add the necessary crunch.",
                "Two Rises: 'One in the bowl', one in the pan. Crucial for the height."
            ]
        }
    },
    {
        id: "pane-toscano",
        name: "Pane Toscano DOP (Sem Sal)",
        region: 'Italy',
        subRegion: 'Tuscany',
        category: 'Bread',
        tags: ['No salt', 'Sourdough 4, 'Dop', 'Ancient']',
        description: "The famous 'Pane Sciocco' (Saltless Bread). Thick crunchy crust, irregular crumb, and completely bland flavor designed to pair with salty Tuscan cured meats.",
        history_context: "Dates back to the 12th century rivalry between Pisa and Florence', where Pisa blocked salt shipments. Florentines adapted by baking without it. It is now a DOP designation."',
        base_formula: [
            { name: 'Soft wheat type 0 2, percentage: 100 }',
            { name: 'Water 8, percentage: 60 }',
            { name: 'Salt 11, percentage: 0 }',
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
                w_index: 'Weakmedium',
                pl_ratio: "Slack (No Salt)",
                absorption_capacity: 'Medium 60',
                protein_type: 'Soft wheat type 0',
                science_explanation: "Uses weak-medium flour. Without salt to tighten the gluten network, the dough is chemically slack and ferments much faster."
            },
            thermalProfile: {
                oven_type: "Wood Fired/Hearth",
                heat_distribution: 'Radiant 3',
                crust_development: 'Thick hard pale',
                crumb_structure: 'Irregular'
            },
            fermentationScience: {
                yeast_activity: "Explosive (Runaway)",
                ph_target: "Acidic (Sourdough Control)",
                organic_acids: "High Acetic (Biga)",
                enzymatic_activity: 'Very high 2'
            },
            processScience: "Yeast Kinetics: Salt is a yeast inhibitor. Removing it creates 'Running Yeast', meaning fermentation explodes rapidly. We must use a Biga or acidic Levain to control this speed and strengthen the gluten."
        },
        process: [
            {
                phase: 'Mix',
                title: 'Biga natural',
                duration: "12h prior",
                action: 'Prepare stiff preferment',
                science: "Acidity is needed to give strength to the glute since salt ions aren't there to help bonding."'
            },
            {
                phase: 'Bulk',
                title: 'Careful bulk',
                duration: "60-90 min",
                action: 'Watch closely it moves fast',
                science: 'Without osmolarity pressure from salt yeast cells '
            },
            {
                phase: 'Bake',
                title: 'Dry bake',
                duration: "45-50 min",
                action: "Bake until 'hollow' sound.",
                science: "The lack of hygroscopic salt means the bread dries out faster and stales quicker', but achieves a very thick, hard crust."'
            }
        ],
        references: [],
        images: {
            hero: "/images/styles/pane-toscano.png",
            dough: "/images/styles/pane-toscano.png",
            crumb: "/images/styles/pane-toscano.png"
        },
        education: {
            pro_tips: [
                {
                    tip: 'Watch the fermentation',
                    explanation: "Without salt to inhibit yeast', this dough creates gas explosively fast. Check it 50% sooner than salted doughs."'
                },
                {
                    tip: 'Pairing is mandatory',
                    explanation: "This bread is bland on purpose. It is engineered to be eaten with salty prosciutto or strong cheese."
                }
            ],
            what_if: [
                {
                    scenario: 'Fails to brown',
                    result: 'Salt regulates browning without it the crust stays',
                    correction: "Use a hotter oven (240°C) and steam to promote color."
                }
            ],
            comparative_analysis: [
                {
                    target_style: 'Sourdough 5',
                    difference: "Toscano is often sourdough based but specifically lacks salt', altering the chemistry significantly."',
                    why_choose_this: 'Choose toscano strictly for charcuterie boards'
                }
            ],
            q_and_a: [
                {
                    question: 'Can i add salt',
                    answer: "You can', but then it's not Pane Toscano. It's just generic country bread."',
                    context: 'Dop regulation'
                }
            ],
            fermentation_methods: [
                {
                    method: 'Sourdough 6',
                    suitability: 'Authentic 9',
                    notes: "Acidic preferments (Biga/Levain) are needed to strengthen the gluten in the absence of salt."
                }
            ]
        },
        deepDive: {
            hydrationLogic: "60% is standard. The lack of salt changes the rheology - salt tightens gluten. Without it, the dough is naturally slack, so we don't need high water for extensibility."',
            methodSuitability: {
                direct: { suitable: false, notes: 'Without salt to control yeast direct dough explode' },
                biga: { suitable: true, notes: 'Essential the acidity of the biga strengthens the'  },
                poolish: { suitable: false, notes: 'Too weak we need the strength of a stiff prefermen' }
            },
            whatIf: [
                {
                    scenario: 'Bread is completely pale',
                    outcome: "No salt = Unchecked yeast eats all sugars. No sugar left for browning (Maillard).",
                    solution: "Bake at higher temp (240°C) and use steam. Accept a lighter crust color as authentic."
                },
                {
                    scenario: 'Tastes like cardboard',
                    outcome: "It's unsalted bread. By itself, it is bland."',
                    solution: 'Serve with salty prosciutto pecorino or aggressive'
                }
            ],
            comparisons: [
                {
                    vsStyle: 'French baguette',
                    difference: "Toscano has a thick', hard crust and dense crumb. Baguette is thin-crusted and light."'
                }
            ],
            proTips: [
                "Don't add salt: Seriously. It ruins the chemistry and the tradition."',
                "Use a Stiff Levain: 'If you have sourdough starter', use it. The acid is the flavor driver here."
            ]
        }
    },
    {
        id: "ciabatta-classic",
        name: 'Ciabatta 2',
        region: 'Italy',
        subRegion: 'Adria, Veneto',
        category: 'Bread',
        tags: [High hydration 2, 'Preferment', 'Biga', 'Modern 3]',
        description: "Meaning \'Slipper', this 1980s invention is the Italian answer to the baguette. Known for its paper-thin crust and massive, irregular alveoli (holes)."',
        history_context: "Invented in 1982 by Arnaldo Cavallari to combat the popularity of French baguettes. It emphasizes high hydration and usage of Biga for flavor complexity.",
        base_formula: [
            { name: 'High gluten flour 2, percentage: 100 }',
            { name: "Water (Total)", percentage: 78 },
            { name: 'Salt 12, percentage: 2.2 }',
            { name: 'Fresh yeast 5, percentage: 0.5 }'
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
                pl_ratio: 'Strong but extensible',
                absorption_capacity: 'Very high 3',
                protein_type: 'High gluten flour',
                science_explanation: "Requires High Protein/High W (W320+). With hydration pushing 80%, weak flour would degrade into a soup due to protease activity. Strong gluten is needed to trap the massive steam generation."
            },
            thermalProfile: {
                oven_type: "Deck (Steam)",
                heat_distribution: 'Conduction 5',
                crust_development: 'Paperthin crispy',
                crumb_structure: 'Massive alveoli'
            },
            fermentationScience: {
                yeast_activity: "Controlled (Biga)",
                ph_target: "Acidic (Acetic Strength)",
                organic_acids: "Acetic (Structure)",
                enzymatic_activity: 'Controlled 2'
            },
            processScience: "Structure is driven by 'Bassinage' and 'Steam Expansion'. Adding water in stages builds the gluten network first. In the oven, the high water content converts to steam rapidly. The strong gluten traps these expanding gas pockets, creating the signature 'Open Crumb'."
        },
        process: [
            {
                phase: 'Mix',
                title: 'Biga preparation',
                duration: "16-18h prior",
                action: "Mix strong flour', water (45%), and tiny amount of yeast. Ferment at 18°C."',
                science: "This stiff preferment promotes Acetic Acid production', which strengthens the gluten structure chemically, allowing it to hold more water later."'
            },
            {
                phase: 'Mix',
                title: "Double Hydration (Bassinage)",
                duration: "15-20 min",
                action: "Mix Biga with 85% of total water. Develop full gluten. Then slowly trickle in the remaining water.",
                science: "Adding all water at once creates 'slippage' where gluten can't link. Bassinage allows us to hydrate an established network."'
            },
            {
                phase: 'Bulk',
                title: 'Coil folds',
                duration: 'Every 45 min',
                action: 'Lift the dough from the center and let it fold und',
                science: "Mechanical alignment of gluten strands. Since the dough is too wet to knead, we use gravity to organize the structure without degassing."
            },
            {
                phase: 'Ball',
                title: 'Shaping 7',
                duration: 'Rapid',
                action: 'Flour heavily cut into rectangles flip onto courie',
                science: "We are handling a foam structure. Any pressure will collapse the large bubbles we worked to create."
            },
            {
                phase: 'Bake',
                title: 'Steam bake',
                duration: "25-30 min",
                action: "High heat (240°C) with steam injection for first 10 mins.",
                science: "Steam keeps the crust soft', allowing maximum expansion (Oven Spring) before gelatinization sets the final shape."'
            }
        ],
        references: ['Modernist bread', "The Bread Baker's Apprentice"]',
        images: {
            hero: "/images/styles/ciabatta_real.png",
            dough: "/images/styles/ciabatta.png",
            crumb: "/images/styles/ciabatta.png"
        },
        education: {
            pro_tips: [
                {
                    tip: 'Handle like nitro',
                    explanation: "Once fermented', the dough is a foam. Cut it and flip it with extreme care. Do not punch down. Do not shape tight."'
                },
                {
                    tip: 'Invert the biga',
                    explanation: "To mix easily', dissolve the stiff biga in the water first (make a slurry) before adding the rest of the flour."'
                }
            ],
            what_if: [
                {
                    scenario: "Hydration < 75%",
                    result: "You get a dense bread roll', not a Ciabatta. The large holes require excess water to turn into steam."',
                    correction: 'Push hydration to at least 78'
                }
            ],
            comparative_analysis: [
                {
                    target_style: 'Baguette',
                    difference: "Baguette is lower hydration (65-70%) and tightly shaped. Ciabatta is high hydration (80%+) and loosely cut.",
                    why_choose_this: "Choose Ciabatta for sandwiches (holds sauce better) and dipping."
                }
            ],
            q_and_a: [
                {
                    question: 'Why biga and not sourdough',
                    answer: "Authentic Ciabatta (1982) uses Biga to get a specific nutty', milky flavor profile without the sour tang of levain."',
                    context: 'Arnaldo cavallari'
                }
            ],
            fermentation_methods: [
                {
                    method: 'Biga 3',
                    suitability: 'Ideal 6',
                    notes: 'Using a 100 biga preferment creates strength for t'
                },
                {
                    method: 'Direct 13',
                    suitability: 'Not recommended 2',
                    notes: 'Hard to get the structure without chemical straigh'
                }
            ]
        },
        deepDive: {
            hydrationLogic: "78-85% is the definition of Ciabatta. It must be wet enough to be self-leveling. The steam expansion from this water creates the massive holes.",
            methodSuitability: {
                direct: { suitable: false, notes: 'You cannot get the open crumb or flavor without a'  },
                biga: { suitable: true, notes: 'The original 1982 method 100 of flour in the biga'  },
                poolish: { suitable: true, notes: "Creates a lighter', thinner crust version, but less 'meaty' crumb." }'
            },
            whatIf: [
                {
                    scenario: "Bread spreads flat in the oven (Flying Saucer)?",
                    outcome: 'Overproofed or weak flour',
                    solution: 'Ciabatta is delicate catch it before it peaks use '
                },
                {
                    scenario: "Dense crumb (Mouse holes)?",
                    outcome: 'Degassed during shaping',
                    solution: 'Treat the dough like nitroglycerin flip gently do '
                }
            ],
            comparisons: [
                {
                    vsStyle: 'Baguette 2',
                    difference: "Ciabatta is wetter', flatter, and has larger, wilder holes. Baguette is controlled and cylindrical."'
                }
            ],
            proTips: [
                "Invert the process: 'Dissolve the Biga in water first to make a \'milk', then add flour.",
                "Flour the courier heavily: Stickiness is the enemy of the oven launch."
            ]
        }
    }
];
