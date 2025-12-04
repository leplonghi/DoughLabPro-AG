
import { DoughStyleDefinition, FermentationTechnique, RecipeStyle, BakeType, IngredientConfig } from '../types';

// Raw Canonical Data provided
export const RAW_CANONICAL_STYLES = [
  {
    "id": "neapolitan_avpn",
    "name": "Neapolitan (AVPN)",
    "category": "Pizza",
    "origin": {
      "country": "Italy",
      "region": "Naples, Campania",
      "period": "18th–19th century, codified 1984 by AVPN"
    },
    "description": "Traditional Neapolitan pizza as defined by the AVPN regulations: a minimally enriched, highly extensible dough with relatively low hydration by modern standards, fermented at room temperature and baked at extreme heat. It produces a soft, foldable center with a pronounced cornicione, light fermentation acidity and characteristic leopard spotting on the crust.",
    "history": "Flatbreads topped with ingredients existed for centuries around the Mediterranean, but the modern Neapolitan pizza emerged in Naples between the late 1700s and the 1800s, when tomatoes became widely accepted as food and soft-wheat flours milled to tipo 00 enabled very thin yet extensible doughs. In 1984, Antonio Pace and Lello Surace, together with leading Neapolitan pizzaioli, formalized the fundamental rules for the \"Verace Pizza Napoletana\" and founded the Associazione Verace Pizza Napoletana (AVPN). Their disciplinare specifies ingredients, mixing, fermentation, shaping and baking requirements, protecting the style as a cultural and gastronomic reference.",
    "tags": [
      "high-temp",
      "soft-extensibility",
      "short-fermentation",
      "classic-italian",
      "low-oil",
      "direct-method",
      "00-flour"
    ],
    "difficulty": "medium-high",
    "fermentationType": "ambient",
    "technicalProfile": {
      "hydration": "55–62% (AVPN base ~55–59%)",
      "salt": "2.5–3.0%",
      "oil": "0%",
      "sugar": "0%",
      "cocoa": "0%",
      "flourStrength": "W 250–320 (tipo 00, AVPN-compliant)",
      "preferment": "None in traditional AVPN; some modern, non-AVPN variants use 5–10% biga or levain for flavor.",
      "fermentationSteps": [
        "Direct mix: dissolve salt in water, add yeast, gradually incorporate tipo 00 flour and mix until smooth.",
        "Bulk fermentation 8–12 h at 20–24°C, until dough has developed gas and elasticity without over-acidification.",
        "Divide and ball: portion into 230–280 g balls and rest 4–6 h at 20–24°C.",
        "Open the dough by hand only, without rolling pins or sheeters, preserving internal gas.",
        "Top lightly to avoid overloading the center and bake immediately at very high temperature."
      ],
      "ovenTemp": "430–485°C (traditional wood-fired dome)",
      "recommendedUse": [
        "Traditional Neapolitan wood-fired ovens with stone floor",
        "High-heat gas or pellet ovens capable of ≥430°C",
        "Steel/stone in domestic ovens only when they reliably exceed 350°C (non-AVPN, but operationally useful)"
      ],
      "difficulty": "medium-high"
    },
    "warnings": [
      "Overproofed dough loses extensibility and may tear during hand stretching.",
      "Hydration significantly above AVPN recommendations changes handling and is no longer compliant with the disciplinare.",
      "Excess bench flour burns at high temperature and creates bitter flavors on the cornice.",
      "Fermentation at temperatures above 25°C shortens the useful window and increases risk of over-acidification."
    ],
    "notes": [
      "AVPN formulations are based on 1 L of water and 1.7–1.8 kg of flour, leading to a relatively modest hydration compared with many modern artisan pizzas.",
      "The characteristic leopard spotting depends on the balance between dough dryness on the surface, oven floor temperature and flame intensity.",
      "Rolling pins or mechanical sheeters are explicitly forbidden by AVPN because they expel gas and change the structure of the cornicione."
    ],
    "references": [
      "Associazione Verace Pizza Napoletana — International Regulations (Il Disciplinare)",
      "True Italian Taste Brasil — Verace Pizza Napoletana STG overview",
      "Modernist Pizza, Vol. 1 — History and Fundamentals"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01"
  },
  {
    "id": "new_york_classic",
    "name": "New York Style Pizza",
    "category": "Pizza",
    "origin": {
      "country": "United States",
      "region": "New York City",
      "period": "Early 20th century, Italian-American adaptation"
    },
    "description": "New York style pizza is a large, thin, foldable pizza baked on deck ovens, with a crisp underside and a chewy interior. It uses strong American bread flour, moderate to high hydration compared to Neapolitan, small amounts of oil and optional sugar to support browning in longer bakes.",
    "history": "New York style emerged when Italian immigrants adapted Neapolitan pizza to American wheat flours and gas-fired deck ovens in the early 1900s. American bread flour, with higher protein and different milling characteristics than Italian tipo 00, produced a chewier structure. Longer bake times at lower temperatures than Neapolitan required changes to hydration, oil and sugar. Over decades, the iconic large slices sold by the slice, the hand-tossed shaping and the foldable geometry became a distinct identity, separate from its Neapolitan roots.",
    "tags": [
      "deck-oven",
      "long-fermentation",
      "high-gluten",
      "thin-crust",
      "american-classic",
      "cold-fermentation"
    ],
    "difficulty": "medium",
    "fermentationType": "cold",
    "technicalProfile": {
      "hydration": "58–65%",
      "salt": "1.8–2.2%",
      "oil": "1–3% (typically neutral or olive oil)",
      "sugar": "0–3% (optional, supports browning in longer bakes)",
      "cocoa": "0%",
      "flourStrength": "W 300–340 (high-gluten flour)",
      "preferment": "Optional poolish or preferment at 20–30% of total flour for flavor; many pizzerias use straight dough with extended cold fermentation.",
      "fermentationSteps": [
        "Mix dough with cold water to limit initial temperature rise, incorporating flour, salt, small oil percentage and optional sugar.",
        "Short bench rest or brief ambient bulk (15–30 min) to relax dough.",
        "Divide into large dough balls (e.g. 300–400 g for 30–35 cm pies) and refrigerate at 2–5°C for 24–72 h.",
        "Remove from cold storage and temper at room temperature 60–120 min before opening.",
        "Hand-stretch on a lightly floured surface, avoiding rolling pins, and bake directly on a deck or preheated stone/steel."
      ],
      "ovenTemp": "315–345°C (deck oven typical range)",
      "recommendedUse": [
        "Gas or electric deck ovens with stone decks",
        "Heavy baking steels or stones in domestic ovens for NY-style emulation",
        "Conveyor ovens tuned to similar bottom heat and time profiles (industrial adaptation)"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Hydration below ~58% often produces a dense, cracker-like texture instead of a foldable slice.",
      "Sugar levels above ~3% can cause excessive darkening or burning on deck ovens with long bake times.",
      "Insufficient cold fermentation (less than 24 h) reduces flavor complexity and extensibility.",
      "Overproof after cold storage leads to weak rims and collapsed center."
    ],
    "notes": [
      "Many NY pizzerias rely on 48–72 h of cold fermentation for optimal extensibility and flavor development.",
      "High-gluten flour helps maintain structural integrity in very large slices that are folded and eaten by hand.",
      "Baking directly on a stone or deck is essential to achieve the characteristic crisp-but-flexible bottom surface."
    ],
    "references": [
      "Modernist Pizza, Vol. 2 — American Pizza Styles",
      "Gozney — Pizza Dough Hydration Guide (NY style 58–65% hydration)",
      "PizzaBlab — Encyclopizza: New York Style Pizza Characteristics"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01"
  },
  {
    "id": "french_baguette_classic",
    "name": "French Baguette (Classic)",
    "category": "Bread",
    "origin": {
      "country": "France",
      "region": "Paris and urban bakeries",
      "period": "Early 20th century standardization"
    },
    "description": "The classic French baguette is a lean wheat bread with a crisp, thin crust and creamy, moderately open crumb. It is made from only flour, water, salt and yeast, with moderate-to-high hydration and relatively short ingredients list, relying on fermentation and handling for flavor.",
    "history": "Long loaves existed earlier in French baking, but the baguette as a distinct form became widespread in Paris in the early 1900s with changes in legislation, work schedules and milling. French laws limited additives in standard bread, reinforcing lean formulas. Techniques like poolish and controlled fermentation improved aroma and crust quality. Authors such as Raymond Calvel and Jeffrey Hamelman systematized technical knowledge around mixing, dough strength, fermentation and scoring to achieve consistent baguettes with open crumb and distinctive ears.",
    "tags": [
      "lean-dough",
      "steam-baked",
      "open-crumb",
      "high-extensibility",
      "classic-french",
      "poolish"
    ],
    "difficulty": "high",
    "fermentationType": "mixed",
    "technicalProfile": {
      "hydration": "65–75%",
      "salt": "1.8–2.2%",
      "oil": "0%",
      "sugar": "0%",
      "cocoa": "0%",
      "flourStrength": "W 180–240 (French T55/T65 type flours)",
      "preferment": "Commonly a poolish with 30–50% of total flour; levain variants exist for more acidity and complexity.",
      "fermentationSteps": [
        "Mix ingredients to a moderate gluten development, avoiding over-oxidation.",
        "Bulk fermentation 1–3 h at 22–26°C with 2–3 folds at 30–45 min intervals to build strength.",
        "Pre-shape into loose cylinders and bench rest 20–30 min for relaxation.",
        "Final shaping into baguettes with tension while preserving internal gas.",
        "Final proof 45–75 min, typically on a floured couche.",
        "Score with several overlapping cuts at a shallow angle and bake with full steam at the start."
      ],
      "ovenTemp": "235–260°C with strong initial steam",
      "recommendedUse": [
        "Steam-injected deck ovens (bakery standard)",
        "Domestic ovens with steam methods (lava rocks, trays, sprayers) for home adaptation"
      ],
      "difficulty": "high"
    },
    "warnings": [
      "Insufficient steam reduces oven spring and produces a dull, thick crust.",
      "Overmixing tightens crumb, reduces openness and may cause excessive oxidation (pale crumb).",
      "Underproofing leads to ruptured sides and irregular expansion; overproofing reduces scoring bloom."
    ],
    "notes": [
      "Hydration closer to 70–75% tends to produce a more open crumb in skilled hands, but handling becomes more demanding.",
      "Poolish pre-ferments contribute nutty, lactic notes and better crust coloration through increased sugar availability.",
      "Proper scoring angle (~30° relative to the loaf axis) and overlap determine ear formation and visual signature."
    ],
    "references": [
      "Raymond Calvel — Le Goût du Pain",
      "Jeffrey Hamelman — Bread: A Baker’s Book of Techniques and Recipes",
      "Modernist Bread — Volumes on Lean Breads and Baguettes"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01"
  },
  {
    "id": "japanese_shokupan_classic",
    "name": "Japanese Shokupan",
    "category": "Bread",
    "origin": {
      "country": "Japan",
      "region": "Urban bakeries (Tokyo and other cities)",
      "period": "20th century, Western influence adapted to Japanese taste"
    },
    "description": "Shokupan is a soft, enriched Japanese milk bread known for its pillowy crumb, fine and even cell structure, mild sweetness and thin, tender crust. It often uses tangzhong or yudane techniques to gelatinize part of the starch, increasing water absorption and shelf life.",
    "history": "Bread was introduced to Japan centuries ago, but modern Shokupan developed in the 20th century as Western-style loaves were adapted to local preferences. Japanese bakers favored softer, slightly sweet breads suited to toast and sandwiches. Techniques like tangzhong (a cooked flour paste) and yudane (gelatinized flour with boiling water) were integrated to create higher hydration and softer textures without relying solely on fats. Shokupan became a staple in school lunches, kissaten cafés and convenience stores.",
    "tags": [
      "enriched-dough",
      "milk-bread",
      "tangzhong",
      "soft-crumb",
      "asian-bakery",
      "sandwich-loaf"
    ],
    "difficulty": "medium",
    "fermentationType": "mixed",
    "technicalProfile": {
      "hydration": "70–80% (including milk and water, not counting fats)",
      "salt": "1.5–2.0%",
      "oil": "5–8% (typically butter or neutral fat)",
      "sugar": "6–12%",
      "cocoa": "0%",
      "flourStrength": "W 250–300 (strong bread flour)",
      "preferment": "Tangzhong 5–10% or yudane 10–15% of flour weight; some formulas also use sponge or levain for flavor.",
      "fermentationSteps": [
        "Prepare tangzhong or yudane by cooking flour with water or milk to gelatinize starch, then cool completely.",
        "Mix main dough with bread flour, liquids, sugar and tangzhong/yudane, adding fat gradually after partial gluten development.",
        "Bulk fermentation 1–2 h at 24–27°C until roughly doubled, with 1 fold if needed for strength.",
        "Divide and pre-shape, rest briefly, then roll and coil pieces to fit Pullman or loaf pans.",
        "Final proof 45–90 min until dough nearly crowns or reaches desired height.",
        "Bake at moderate temperature to prevent excessive crust thickening, optionally with a lidded pan for a perfectly square loaf."
      ],
      "ovenTemp": "175–195°C",
      "recommendedUse": [
        "Pullman pans with or without lids",
        "Standard domestic ovens with reliable temperature control"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Excessive sugar and fat without proper gluten development leads to collapsed loaves and dense crumb.",
      "Tangzhong or yudane added while still hot can damage yeast activity and gluten structure.",
      "Underbaking leaves a gummy interior due to high hydration and enrichment."
    ],
    "notes": [
      "Tangzhong tends to produce extremely tender crumb with extended softness over several days.",
      "Yudane generally yields slightly chewier texture and may tolerate higher hydration.",
      "Because of the high enrichment, proper kneading to full gluten development is critical before final fermentation."
    ],
    "references": [
      "Modernist Bread — Enriched Doughs and Asian Breads sections",
      "Japanese professional and home-baking literature on Shokupan and milk breads",
      "Documented Shokupan methods in contemporary recipe resources focusing on tangzhong and yudane"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01"
  },
  {
    "id": "detroit_style_pan_pizza",
    "name": "Detroit Style Pan Pizza",
    "category": "Pizza",
    "origin": {
      "country": "United States",
      "region": "Detroit, Michigan",
      "period": "1946 — Buddy’s Rendezvous"
    },
    "description": "Detroit style is a high-hydration, thick, rectangular pan pizza baked in blue steel pans. It is characterized by a light, airy crumb, a fried bottom crust from abundant oil, and a caramelized cheese border known as the \"frico crust\". Traditionally, cheese is placed edge-to-edge against the pan and the sauce is applied in stripes on top.",
    "history": "Detroit-style pizza was developed in 1946 at Buddy’s Rendezvous (later Buddy’s Pizza) in Detroit. The recipe is often linked to Sicilian sfincione-type dough baked in blue steel pans originally used as parts trays in the automobile industry. The combination of high hydration, long fermentation, heavy oiling and Wisconsin brick or similar cheese created a unique crust structure and caramelization. The style remained regional for decades before being rediscovered and popularized across the United States in the 21st century.",
    "tags": [
      "pan-pizza",
      "high-hydration",
      "american-classic",
      "cheese-frico-edge",
      "focaccia-like-crumb",
      "long-fermentation"
    ],
    "difficulty": "medium",
    "fermentationType": "cold",
    "technicalProfile": {
      "hydration": "68–75%",
      "salt": "2.0–2.4%",
      "oil": "3–6% in dough plus heavy pan oiling",
      "sugar": "1–2% (supports browning and yeast activity)",
      "cocoa": "0%",
      "flourStrength": "W 280–320 (strong bread or pizza flour)",
      "preferment": "Optional small poolish (10–20%) or straight dough with extended cold fermentation.",
      "fermentationSteps": [
        "Mix to full gluten development despite high hydration, using rest phases or stretch-and-fold to avoid overheating.",
        "Cold fermentation 24–48 h at 4–6°C to develop flavor and structure.",
        "Portion and gently press dough into heavily oiled blue steel or heavy-gauge rectangular pans, allowing it to relax in one or two stages until it reaches the corners.",
        "Final proof 60–120 min at room temperature until aerated and slightly domed.",
        "Top with cheese spread to the very edges to create a caramelized frico crust, add toppings as desired and finish with sauce stripes before or after baking depending on variant.",
        "Bake until the bottom is deeply golden and the cheese edge is crisp and caramelized."
      ],
      "ovenTemp": "250–300°C (pan baked)",
      "recommendedUse": [
        "Blue steel automotive-style pans (traditional)",
        "Heavy black steel or aluminum pans with similar thermal behavior",
        "High-power electric or gas ovens with strong bottom heat"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Insufficient pan oil reduces the fried, crisp bottom and may cause sticking.",
      "Overproofing in the pan leads to collapse and uneven structure after baking.",
      "Placing sauce directly against the pan edge instead of cheese decreases frico formation and can burn.",
      "Hydration much below ~68% produces a denser, less characteristic crumb."
    ],
    "notes": [
      "Wisconsin brick cheese is considered traditional; blends of high-moisture mozzarella and other cheeses are common modern substitutes.",
      "The cheese-first, sauce-later layering protects the crumb and maintains crispness even under heavy toppings.",
      "Many contemporary recipes combine both cold fermentation and a warm pan proof to balance flavor and handling."
    ],
    "references": [
      "Buddy’s Pizza — Historical accounts of Detroit-style origin",
      "Detroit-style pizza documentation in Modernist Pizza and contemporary technical articles",
      "Published culinary articles describing the use of blue steel automotive pans and the 1946 origin story"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01"
  },
  {
    "id": "roman_scrocchiarella_teglia",
    "name": "Roman Scrocchiarella (Pizza in Teglia)",
    "category": "Pizza",
    "origin": {
      "country": "Italy",
      "region": "Rome and Lazio bakeries",
      "period": "Late 20th century professional codification"
    },
    "description": "Roman \"scrocchiarella\" or pizza in teglia is a high-hydration, long-fermented pan pizza baked in rectangular trays. It is characterized by a light but structured crumb with large alveoli, a very crisp base, and a notably crunchy bite that gives the style its name (\"scrocchiarella\" ≈ crackly).",
    "history": "Roman pan pizza evolved in the second half of the 20th century, as Italian bakeries in Rome began using strong flours and long fermentation to create highly hydrated doughs baked in electric deck ovens. The style became known for its elongated or rectangular slices sold by weight. Professional practice increasingly favored stiff biga preferments, long cold fermentation (often 48–72 hours) and hydration levels that can reach or exceed 80%, producing a very open crumb and a crisp, crackly crust. Today, pizza in teglia and pizza alla pala are recognized as distinct Roman styles, but both rely on high hydration and advanced dough handling.",
    "tags": [
      "high-hydration",
      "roman-style",
      "pan-baked",
      "long-fermentation",
      "biga-preferment",
      "crisp-bottom",
      "open-crumb"
    ],
    "difficulty": "high",
    "fermentationType": "cold",
    "technicalProfile": {
      "hydration": "75–85%",
      "salt": "2.2–2.8%",
      "oil": "2–4% (in dough) plus pan oil",
      "sugar": "0–1%",
      "cocoa": "0%",
      "flourStrength": "W 300–340 (strong Italian pizza/bread flour)",
      "preferment": "Biga 30–50% of total flour at ~45–50% hydration, fermented cool for 16–24 h.",
      "fermentationSteps": [
        "Prepare a stiff biga with a portion of the flour, a small amount of yeast and cold water; ferment 16–24 h at cool temperatures (typically 16–20°C).",
        "Mix final dough by incorporating biga, remaining flour, water in stages, salt and oil, using short mixing plus rest periods to avoid overheating.",
        "Perform a series of stretch-and-fold sets during the first 2–3 h to build structure while preserving extensibility.",
        "Refrigerate the dough 24–72 h at 3–5°C for flavor and gas development.",
        "Portion dough into well-oiled rectangular trays, gently stretching without degassing; allow a warm proof of 60–120 min until aerated and slightly domed.",
        "Par-bake or fully bake with strong bottom heat until the base is crisp and the crumb is well set, then top and finish as desired if using par-bake strategy."
      ],
      "ovenTemp": "280–320°C (electric deck or strong domestic setup)",
      "recommendedUse": [
        "Electric deck ovens with stone or steel decks",
        "Heavy-gauge rectangular pans in high-power domestic ovens",
        "Perforated pans for enhanced bottom heat transfer"
      ],
      "difficulty": "high"
    },
    "warnings": [
      "Hydration below ~75% reduces the characteristic open crumb and tends to produce a denser, focaccia-like texture rather than true Roman scrocchiarella.",
      "Overmixing high-hydration dough can damage extensibility and cause spreading instead of vertical rise.",
      "Insufficient pan oil compromises the crisp base and may cause sticking.",
      "Inadequate fermentation time leads to underdeveloped flavor and irregular crumb structure."
    ],
    "notes": [
      "Roman pan pizza relies heavily on correct flour choice; flours with insufficient strength cannot support the long fermentation and high hydration without collapsing.",
      "Many professionals use a two-stage baking strategy (par-bake base, then add delicate toppings) to preserve crispness and ingredient quality.",
      "The style is often sold by weight and cut into rectangular pieces, reflecting its bakery-oriented origin rather than single-serve round pies."
    ],
    "references": [
      "Le 5 Stagioni technical documentation on Roman pizza and high-hydration doughs",
      "Modernist Pizza — sections on Roman pizza in teglia and pizza alla pala",
      "Professional blog and recipe literature on Roman high-hydration pan pizza using biga preferments"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01"
  },
  {
    "id": "sao_paulo_pao_frances",
    "name": "São Paulo Pão Francês",
    "category": "Bread",
    "origin": {
      "country": "Brazil",
      "region": "São Paulo and major urban centers",
      "period": "20th century adaptation of French bread"
    },
    "description": "Brazilian \"pão francês\", also known as \"pãozinho\", is a small, lean wheat roll with a thin, crisp crust and a light, tender crumb. It is baked in large batches with steam and is a daily staple in Brazilian bakeries, structurally distinct from the French baguette despite its name.",
    "history": "Pão francês developed in Brazil in the early 20th century as urban bakeries in cities such as São Paulo adapted French-style breads to local wheat flour and customer preferences. Brazilian flours historically had different protein and ash profiles, leading bakers to adjust formulas with small amounts of sugar, fat and conditioning agents to achieve consistent volume, thin crisp crust and soft crumb. Over time, pão francês became the most consumed bread product in Brazil, with trade associations and technical centers publishing detailed guidelines and studies about its rheology, fermentation and baking conditions.",
    "tags": [
      "brazilian-classic",
      "lean-dough",
      "steam-baked",
      "roll",
      "short-fermentation",
      "everyday-bread"
    ],
    "difficulty": "medium",
    "fermentationType": "ambient",
    "technicalProfile": {
      "hydration": "58–62%",
      "salt": "1.8–2.2%",
      "oil": "1–2% (shortening or vegetable oil)",
      "sugar": "1–2%",
      "cocoa": "0%",
      "flourStrength": "W 150–220 (typical Brazilian bread flours)",
      "preferment": "Commonly a sponge or indirect method with 20–30% of the flour; straight doughs are also used in high-output bakeries.",
      "fermentationSteps": [
        "Mix ingredients until moderate gluten development, avoiding overheating in spiral mixers.",
        "Bulk fermentation 1–2 h at 24–28°C, with optional short rest in the mixer bowl or on the bench.",
        "Divide into small pieces (typically 50–70 g), pre-shape and rest briefly.",
        "Final shaping into short batons or torpedo-shaped rolls with a single central seam placed down and a longitudinal score on top.",
        "Final proof 45–70 min at controlled temperature and humidity until rolls are expanded but still stable.",
        "Bake with strong initial steam to promote rapid expansion and a thin, glossy crust."
      ],
      "ovenTemp": "220–250°C with steam injection",
      "recommendedUse": [
        "Steam-injected deck or rack ovens common in Brazilian bakeries",
        "Domestic ovens with improvised steam methods for small batch replication"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Insufficient steam reduces volume and produces a dull, thick crust instead of a thin, brittle shell.",
      "Underdeveloped gluten yields flat rolls with poor oven spring; overmixing can tighten the crumb and increase chewiness.",
      "Excess sugar or fat shifts the product toward a semi-enriched roll and alters traditional texture.",
      "Improper scoring depth or angle results in uneven ruptures instead of a controlled central opening."
    ],
    "notes": [
      "Despite the name, pão francês is a distinct Brazilian style rather than a direct copy of French baguettes.",
      "Small additions of sugar and fat, while not strictly \"lean\", are common practice to adapt to local flours and consumer expectations.",
      "Industrial and artisanal formulations are widely studied in Brazilian technical literature due to the bread’s economic importance."
    ],
    "references": [
      "Brazilian Association of Bakery and Confectionery (ABIP) technical publications on pão francês",
      "Scientific articles on rheological properties and technological attributes of Brazilian French bread dough",
      "Modernist Bread — sections on global white breads and Brazilian pão francês"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01"
  },
  {
    "id": "montreal_style_bagels",
    "name": "Montreal Style Bagels",
    "category": "Bread",
    "origin": {
      "country": "Canada",
      "region": "Montreal, Quebec (Mile End and surrounding neighborhoods)",
      "period": "Early 20th century, Jewish immigrant bakeries"
    },
    "description": "Montreal style bagels are hand-rolled, boiled in honey-sweetened water and baked in wood-fired ovens. They are smaller, denser and sweeter than New York bagels, with a more pronounced chew, thinner crust and abundant sesame or poppy seed coatings.",
    "history": "Bagels arrived in Montreal with Eastern European Jewish immigrants in the early 20th century. Bakeries such as Fairmount Bagel (founded 1919) and St-Viateur Bagel (founded 1957) standardized what is now recognized as the Montreal style: hand-rolled rings, boiled in honey water, dipped in seeds and baked in wood-fired ovens. The formula is slightly sweeter and often uses malt and honey, producing a golden color and distinct aroma. The style is deeply linked to local Jewish food culture and is widely recognized as part of Montreal’s culinary identity.",
    "tags": [
      "boiled-bread",
      "wood-fired",
      "sweet-dough",
      "dense-crumb",
      "canadian-classic",
      "hand-rolled"
    ],
    "difficulty": "medium-high",
    "fermentationType": "ambient",
    "technicalProfile": {
      "hydration": "53–58%",
      "salt": "1.8–2.0%",
      "oil": "0–2%",
      "sugar": "4–8% (honey and/or malt-based sweetness)",
      "cocoa": "0%",
      "flourStrength": "W 300–340 (strong bread flour)",
      "preferment": "Traditionally straight dough; some modern bakers use short sponges or pre-ferments for added flavor.",
      "fermentationSteps": [
        "Mix a relatively stiff dough with strong flour, water, salt, honey and/or malt, and optional small fat percentage.",
        "Bulk ferment briefly (often 45–90 min) at moderate room temperature until slightly risen but still strong.",
        "Divide into small pieces, roll into ropes and form rings by joining the ends with overlap and pressure.",
        "Proof lightly or rest briefly to relax dough, then boil each bagel in honey-sweetened water until slightly swollen.",
        "Dip boiled bagels in sesame or poppy seeds and arrange on wooden planks or peels.",
        "Bake in a wood-fired oven at high heat until well-colored with a thin, slightly blistered crust."
      ],
      "ovenTemp": "350–420°C (wood-fired ovens, often somewhat cooler than Neapolitan pizza but still very hot)",
      "recommendedUse": [
        "Traditional wood-fired bagel ovens with stone decks",
        "High-heat gas or electric ovens with stone or steel surfaces for style emulation"
      ],
      "difficulty": "medium-high"
    },
    "warnings": [
      "Hydration significantly above the typical range produces an open, bread-like crumb instead of the characteristic dense chew.",
      "Boiling times that are too long can cause excessive water absorption and collapse during baking.",
      "Insufficient honey or malt in the boil reduces the traditional sweetness and color of the crust.",
      "Wood-fired ovens require experience to manage combustion products and temperature uniformity."
    ],
    "notes": [
      "Montreal bagels are usually eaten plain, with cream cheese or smoked fish, and are often purchased still warm from the oven.",
      "Compared to New York bagels, they are typically smaller, sweeter, have larger holes and are baked directly on the stone of wood-fired ovens.",
      "Traditional bakeries maintain continuous production cycles, shaping and baking throughout the day."
    ],
    "references": [
      "Historical and cultural overviews of Montreal bagels from Canadian food encyclopedias and tourism boards",
      "Documentation of St-Viateur and Fairmount bagel production methods (hand-rolling, honey water boil, wood-fired baking)",
      "Modernist Bread — sections on bagels and regional variations"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01"
  },
  {
    "id": "armenian_lavash_traditional",
    "name": "Armenian Lavash (UNESCO Heritage)",
    "category": "Flatbread",
    "origin": {
      "country": "Armenia",
      "region": "Caucasus",
      "period": "Ancient (UNESCO Inscribed 2014)"
    },
    "description": "Lavash is a traditional thin flatbread that is an integral part of Armenian cuisine. It is made from a simple wheat dough, rolled into large, paper-thin sheets, and slapped against the hot clay walls of a tonal (tonir) oven. It bubbles and blisters instantly, creating a bread that can be eaten soft or dried for long-term storage (rehydrated with water).",
    "history": "Inscribed in 2014 on the Representative List of the Intangible Cultural Heritage of Humanity, Lavash preparation is a communal activity, traditionally undertaken by groups of women. The techniques have been passed down for millennia. It serves not just as food but as a utensil and a symbol of prosperity and hospitality in Armenian weddings and rituals.",
    "tags": [
      "flatbread",
      "ancient",
      "tandoor-baked",
      "unesco-heritage",
      "preservation-bread"
    ],
    "difficulty": "medium",
    "fermentationType": "mixed",
    "technicalProfile": {
      "hydration": "55–65%",
      "salt": "1.5–2.0%",
      "oil": "0%",
      "sugar": "0%",
      "cocoa": "0%",
      "flourStrength": "W 200–240 (Medium strength)",
      "preferment": "Old Dough (Pater) is traditionally used as the starter.",
      "fermentationSteps": [
        "Mix flour, water, salt, and old dough (or yeast).",
        "Knead well to moderate development.",
        "Bulk ferment 1-2 hours.",
        "Divide into balls (gndik).",
        "Roll out paper thin using a rolling pin on a low table.",
        "Stretch over a 'bat' or cushion (pillow).",
        "Slap onto the hot wall of the Tonir (Tandoor) approx 250-300°C wall temp.",
        "Bake for 30-60 seconds until blistered."
      ],
      "ovenTemp": "250–400°C (Radiant/Conductive heat)",
      "recommendedUse": [
        "Tonir / Tandoor",
        "Inverted Wok or convex griddle (Saj) for home simulation",
        "Pizza stone (bottom rack)"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Dough must be relaxed enough to roll thin without tearing.",
      "Overbaking makes it too brittle to fold.",
      "Safety warning: Traditional Tonir baking involves leaning into a hot pit."
    ],
    "notes": [
      "Dried lavash can be stored for months and rehydrated by sprinkling water.",
      "Used for 'brduj' (wrapped sandwiches).",
      "The 'old dough' method provides a subtle sourdough flavor."
    ],
    "references": [
      "UNESCO - Intangible Cultural Heritage List (Lavash)",
      "Modernist Bread, Vol 3. - Flatbreads",
      "Armenian Cuisine - Aline Kamakian",
      "ICC - Flatbread Technologies",
      "Oxford Companion to Food - Flatbreads"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "persian_barbari_bread",
    "name": "Persian Barbari Bread",
    "category": "Bread",
    "origin": {
      "country": "Iran",
      "region": "Tehran / Northwest Iran",
      "period": "Qajar Dynasty (Standardized form)"
    },
    "description": "Barbari is a thick, elongated Iranian flatbread characterized by its golden-brown crust, sesame seeds, and deep longitudinal grooves. Its defining feature is the 'Roomal' (or 'Sir') glaze—a paste of flour, water, and baking soda/sugar—brushed on before baking to create a crispy skin and promote browning.",
    "history": "Named after the 'Barbar' people (Hazaras) of Khorasan who brought the bread to Tehran during the Qajar era. It quickly became the most popular breakfast bread in Iran. Traditionally baked in Tanour ovens, it is known for its distinct shape and chewiness. The use of baking soda in the glaze (not the dough) is a unique chemical browning agent used for centuries.",
    "tags": [
      "flatbread",
      "persian",
      "roomal-glaze",
      "hearth-baked",
      "breakfast-bread"
    ],
    "difficulty": "medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": "65–75% (High hydration for open crumb)",
      "salt": "1.8–2.0%",
      "oil": "1–2% (Vegetable oil often added for softness)",
      "sugar": "1–2% (in dough, plus sugar in glaze)",
      "cocoa": "0%",
      "flourStrength": "W 240–280 (Medium-strong wheat flour)",
      "preferment": "Traditionally uses a Sourdough (Khamir Torsh) or Old Dough; modern bakeries use commercial yeast (Khamir Mayeh).",
      "fermentationSteps": [
        "Mix flour, water, salt, yeast, oil.",
        "Bulk ferment until doubled (1.5-2 hours).",
        "Prepare Roomal Glaze: Cook flour, water, sugar/baking soda to a paste.",
        "Divide dough and rest (bench rest) 20 mins.",
        "Shape into long ovals.",
        "Create grooves using fingers (lengthwise).",
        "Brush generously with Roomal glaze.",
        "Sprinkle with sesame and nigella seeds.",
        "Bake immediately at high heat."
      ],
      "ovenTemp": "250–300°C",
      "recommendedUse": [
        "Baking Stone / Steel",
        "Tanour (Tandoor) simulation"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Without the Roomal glaze, the bread will look pale and dry.",
      "Do not over-proof after shaping or the grooves will disappear.",
      "The glaze must be applied just before baking."
    ],
    "notes": [
      "Roomal recipe ratio: 1 tsp flour + 1 tsp soda/sugar + 1/2 cup water (cooked).",
      "Best served warm with feta cheese (Paneer), walnuts, and herbs (Sabzi).",
      "The 'Barbar' name is historical, referring to the Hazara community."
    ],
    "references": [
      "Modernist Bread, Vol 3. - Flatbreads of West Asia",
      "Najmieh Batmanglij - Food of Life: Ancient Persian Ceremonies",
      "ICC - Cereal Technologies in Iran",
      "Encyclopedia Iranica - Bread (Nan)",
      "Food Culture in the Near East - Peter Heine"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "focaccia_genovese_classic",
    "name": "Focaccia Genovese (Classic)",
    "category": "Bread",
    "origin": {
      "country": "Italy",
      "region": "Liguria — Genoa",
      "period": "Traditional, documented modern forms in 19th–20th centuries"
    },
    "description": "Focaccia Genovese is a high-hydration, olive-oil-enriched flatbread from Liguria, known for its dimpled surface, aromatic olive oil, delicate crispness on the outside and tender, slightly chewy crumb. It is typically baked as a slab and cut into rectangles or strips.",
    "history": "Focaccia has ancient Mediterranean roots, but the Ligurian form associated with Genoa became well known for its abundant use of olive oil, sea salt and characteristic dimpling. Over time, professional formulas emphasized moderately strong flour, long fermentation and careful handling to balance crisp edges with a moist interior. Contemporary Italian technical literature and regional regulations describe thickness, hydration and surface treatment, reinforcing the style as a culinary emblem of Genoa and the Ligurian coast.",
    "tags": [
      "high-hydration",
      "olive-oil-rich",
      "flatbread",
      "italian-regional",
      "dimpled-surface",
      "pan-baked"
    ],
    "difficulty": "medium",
    "fermentationType": "mixed",
    "technicalProfile": {
      "hydration": "65–75%",
      "salt": "2.0–2.5%",
      "oil": "6–12% (dough) plus generous surface oil",
      "sugar": "0–2% (optional, small)",
      "cocoa": "0%",
      "flourStrength": "W 220–280 (medium to medium-strong bread/pizza flour)",
      "preferment": "Some bakers use biga or poolish (20–30% of flour) for flavor; others rely on long cold bulk fermentation with baker’s yeast.",
      "fermentationSteps": [
        "Mix flour, water, salt, yeast and olive oil to form a soft, extensible dough; avoid aggressive mixing that would over-strengthen gluten.",
        "Bulk ferment 2–4 h at room temperature, or 12–24 h under refrigeration with periodic folds to develop structure.",
        "Transfer dough to a well-oiled rectangular pan, gently stretching without degassing completely; rest to relax if needed.",
        "Perform characteristic dimpling by pressing oiled fingertips deeply into the dough, distributing salt and additional oil or brine over the surface.",
        "Final proof 30–60 min until slightly aerated and relaxed.",
        "Bake until the edges are golden-brown and crisp and the surface shows alternating shallow pools and small blisters."
      ],
      "ovenTemp": "220–260°C (pan baking)",
      "recommendedUse": [
        "Electric or gas deck ovens with strong top and bottom heat",
        "Heavy-gauge pans in domestic ovens preheated thoroughly"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Insufficient oil in the pan and on the surface reduces the characteristic aroma and crispness.",
      "Overmixing can produce a tight, bread-like crumb rather than the desired tender, irregular alveoli.",
      "Underbaking leaves the interior gummy; overbaking dries the crumb and hardens the crust.",
      "Too little proof after panning limits expansion and produces a dense slab."
    ],
    "notes": [
      "Some traditional methods use a light brine (salamoia) poured over the dough before baking, combining water and olive oil.",
      "Focaccia Genovese is often eaten plain, with coffee or wine, or filled like a sandwich.",
      "Regional variations exist in thickness and topping, but the core identity relies on olive oil richness and dimpled texture."
    ],
    "references": [
      "Italian regional baking literature on Focaccia Genovese and Ligurian breads",
      "Modernist Bread — sections on focaccia and Italian flatbreads",
      "Professional Italian flour mill technical guides discussing hydration and oil levels for focaccia"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01"
  },
  {
    "id": "chicago_tavern_style_pizza",
    "name": "Chicago Tavern-Style Pizza",
    "category": "Pizza",
    "origin": {
      "country": "United States",
      "region": "Chicago taverns and neighborhood bars",
      "period": "Mid-20th century"
    },
    "description": "Chicago tavern-style pizza is a thin, crispy bar pizza baked on flat pans or directly on a deck, cut into small squares (\"party cut\"). The crust is drier and crisper than many other thin styles, with moderate fat and relatively low hydration compared to artisan-styles, designed for easy sharing alongside drinks.",
    "history": "Distinct from Chicago deep-dish, tavern-style pizza developed in neighborhood bars and taverns in the mid-1900s. Its ultra-thin, crisp crust, heavy toppings and square cut made it convenient for sharing among drinkers. Documented histories point to Italian-American pizzerias connected to taverns and bar service, particularly on Chicago’s South and West sides. Recent media and culinary research have helped clarify tavern-style as its own category, separate from \"thin crust\" generically and from deep-dish or pan pizzas.",
    "tags": [
      "thin-crust",
      "cracker-crust",
      "square-cut",
      "american-tavern",
      "low-hydration",
      "deck-oven"
    ],
    "difficulty": "medium",
    "fermentationType": "mixed",
    "technicalProfile": {
      "hydration": "48–55%",
      "salt": "1.8–2.2%",
      "oil": "3–5% (in dough) plus pan or deck oiling as needed",
      "sugar": "1–3% (supports browning and slight sweetness)",
      "cocoa": "0%",
      "flourStrength": "W 240–300 (bread or high-protein AP flour)",
      "preferment": "Usually straight dough; some formulas use overnight cold fermentation for flavor and better handling.",
      "fermentationSteps": [
        "Mix a fairly stiff dough with strong flour, water, salt, oil, sugar and yeast until homogeneous but not overdeveloped.",
        "Rest or bulk ferment briefly (from 30–90 min at room temperature) or cold ferment 12–24 h for additional flavor.",
        "Portion and roll out very thinly, often with a rolling pin, to a diameter that matches pans or baking screens.",
        "Dock the dough to control bubbling and apply sauce, cheese and toppings up to but not exceeding the thin structure’s limits.",
        "Bake on a seasoned pan, screen or directly on a deck until the crust is fully crisp, edges are browned and toppings are cooked.",
        "Cut into small squares (\"party cut\") rather than traditional wedges."
      ],
      "ovenTemp": "260–315°C (deck or conveyor ovens)",
      "recommendedUse": [
        "Gas or electric deck ovens, common in pizzerias",
        "Dark, seasoned pans or screens in domestic ovens at maximum safe temperature"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Hydration above the typical range reduces crispness and may cause the crust to buckle under heavy toppings.",
      "Overloading with moisture-rich ingredients risks soggy center even if the edges are crisp.",
      "Insufficient docking can produce large blisters that interfere with even topping distribution.",
      "Baking at too low a temperature produces a dry but pale crust instead of a properly browned cracker-like texture."
    ],
    "notes": [
      "Chicago tavern-style is often topped generously with cheese and sausage, reflecting its bar-food roots.",
      "The party-cut square slices emphasize snackability, allowing guests to take smaller portions.",
      "Compared to New York style, the dough is thinner, drier and more cracker-like, with less pronounced oven spring."
    ],
    "references": [
      "Culinary histories and journalism pieces distinguishing tavern-style pizza from Chicago deep-dish and thin crust more broadly",
      "Modernist Pizza — discussions of regional thin-crust variants and bar/tavern styles",
      "Pizzeria and cookbook recipes documenting low hydration and rolling-pin techniques for tavern-style crusts"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01"
  },
  {
    "id": "southern_buttermilk_biscuits",
    "name": "Southern Buttermilk Biscuits",
    "category": "Bread",
    "origin": {
      "country": "United States",
      "region": "American South",
      "period": "19th–20th century home and diner baking"
    },
    "description": "Southern buttermilk biscuits are small, tender, chemically leavened breads with a layered crumb, made with soft wheat flour, fat cut into the dough and acidic buttermilk. They bake quickly and are served with butter, jam, gravies or fried chicken.",
    "history": "Biscuits evolved from European quick breads and were adapted in the American South using locally milled soft wheat flours and later chemical leaveners such as baking powder. Buttermilk, available from butter making, contributed both acidity and flavor. By the 19th and 20th centuries, biscuits were central to Southern breakfast and dinner tables, appearing in home kitchens, diners and chain restaurants. Techniques for cutting fat into flour, minimal mixing and folding layers became widely documented in cookbooks and professional baking references.",
    "tags": [
      "chemically-leavened",
      "soft-wheat",
      "quick-bread",
      "layered-crumb",
      "american-southern",
      "buttermilk"
    ],
    "difficulty": "medium",
    "fermentationType": "none-or-short",
    "technicalProfile": {
      "hydration": "Approx. 60–75% when counting buttermilk and any additional liquids (varies widely by formula and flour absorption)",
      "salt": "1.5–2.2%",
      "oil": "0% (fat usually in solid form: butter, shortening or lard 20–40% of flour weight)",
      "sugar": "0–5% (optional, usually low)",
      "cocoa": "0%",
      "flourStrength": "Soft wheat, lower protein (~8–10%), not usually expressed as W but functionally weak compared to bread flour",
      "preferment": "None; leavening via baking powder and/or baking soda reacting with buttermilk acidity.",
      "fermentationSteps": [
        "Chill fat and, if possible, flour to maintain low dough temperature.",
        "Cut cold fat into flour until small, pea-sized pieces remain, distributing fat without fully homogenizing.",
        "Add cold buttermilk and gently mix just until a shaggy mass forms, avoiding gluten development.",
        "Pat or roll dough gently and fold once or several times to build layers, then pat to final thickness.",
        "Cut biscuits with a sharp cutter, avoiding twisting, which can seal edges and hinder rise.",
        "Bake immediately in a hot oven until well risen and golden-brown on top, with visible layers."
      ],
      "ovenTemp": "215–230°C",
      "recommendedUse": [
        "Conventional domestic or commercial ovens with strong top heat",
        "Baking sheets or cast iron skillets for direct bottom heat and coloration"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Overmixing develops gluten, producing tough biscuits instead of tender, flaky ones.",
      "Warm fat or dough reduces flakiness and leads to dense crumb.",
      "Excess leavening can cause rapid expansion followed by collapse, creating irregular internal structure.",
      "Using bread flour or very strong flours makes tenderness harder to achieve."
    ],
    "notes": [
      "Layering techniques (folding the dough) accentuate vertical lift and flakiness.",
      "Buttermilk contributes both flavor and acid to activate baking soda when used.",
      "Many traditional recipes bake biscuits close together to encourage vertical rise rather than lateral spreading."
    ],
    "references": [
      "Professional and home-baking references on biscuits and chemically leavened quick breads",
      "American South culinary histories documenting biscuit culture and buttermilk use",
      "CIA and similar baking textbooks describing biscuit mixing methods and soft-wheat flour roles"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01"
  },
  {
    "id": "german_broetchen_rolls",
    "name": "German Brötchen (Crisp Rolls)",
    "category": "Bread",
    "origin": {
      "country": "Germany",
      "region": "Various regions, bakery traditions",
      "period": "19th–20th century standard bakery item"
    },
    "description": "Brötchen are small German wheat rolls with a crisp, often crackly crust and a light, cottony interior. They are commonly eaten at breakfast and used for sandwiches, and are produced in large volumes by bakeries using refined wheat flours and controlled fermentation.",
    "history": "German bakery culture developed a range of small wheat breads and rolls; Brötchen became a standard product in many regions. National and regional guidelines and trade literature describe typical volumes, crumb properties and crust characteristics. Flour qualities, fermentation control and steam baking are used to achieve a thin, brittle crust and soft crumb. Variants include Kaiser-style shaping, elongated forms and seeded versions.",
    "tags": [
      "wheat-roll",
      "steam-baked",
      "breakfast-bread",
      "european-bakery",
      "cottony-crumb",
      "crisp-crust"
    ],
    "difficulty": "medium",
    "fermentationType": "ambient",
    "technicalProfile": {
      "hydration": "58–65%",
      "salt": "1.8–2.2%",
      "oil": "0–2%",
      "sugar": "0–3% (optional, supports color and mild sweetness)",
      "cocoa": "0%",
      "flourStrength": "W 200–260 (bread flour, often Type 550 or similar)",
      "preferment": "Common use of poolish, sponge or small amounts of old dough for flavor; direct methods are also used in industrial production.",
      "fermentationSteps": [
        "Mix dough to moderate gluten development, balancing strength and extensibility.",
        "Bulk ferment 1–2 h at controlled temperature (often around 24–26°C).",
        "Divide into small pieces (frequently 40–80 g), pre-shape and rest briefly to relax.",
        "Final shape into ovals, rounds or specific forms (such as Kaiser rolls) using manual or mechanical methods.",
        "Final proof until noticeably expanded but still resilient, typically 30–60 min depending on conditions.",
        "Score, moisten and bake with steam to generate a thin, crisp crust and characteristic volume."
      ],
      "ovenTemp": "220–250°C with steam",
      "recommendedUse": [
        "Steam-injected deck or rack ovens used in European bakeries",
        "Domestic ovens with improvised steam techniques for small batches"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Insufficient steam reduces expansion and yields a dull, chewy crust.",
      "Overproofing leads to weak structure and collapsed or flat rolls.",
      "Underdeveloped gluten reduces volume and makes shaping more difficult.",
      "Excess sugar changes color and flavor balance, pushing the product toward sweet rolls rather than classic Brötchen."
    ],
    "notes": [
      "Different German regions have specific names and slight formulation differences for similar wheat rolls.",
      "Use of Type 550 or comparable flours balances crust color, volume and crumb tenderness.",
      "Many bakeries work with part-baked or frozen doughs, but artisan practice still relies on fresh production."
    ],
    "references": [
      "German baking trade literature on Brötchen and small wheat breads",
      "Modernist Bread — discussions of European wheat rolls and small breads",
      "Technical sheets from German flour mills on Brötchen flour types and process parameters"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01"
  },
  {
    "id": "moroccan_khobz_round_bread",
    "name": "Moroccan Khobz (Round Table Bread)",
    "category": "Bread",
    "origin": {
      "country": "Morocco",
      "region": "Urban and rural households and bakeries",
      "period": "Traditional, long-standing North African bread"
    },
    "description": "Khobz (or khobz dyal dar) is a round, relatively flat Moroccan wheat bread, often enriched lightly with semolina, with a chewy crumb and a browned, sometimes sesame-coated crust. It is used as everyday table bread and to scoop tagines, salads and other dishes.",
    "history": "In Morocco and across North Africa, wheat breads such as khobz form a central part of daily meals. Doughs are prepared at home or in bakeries and baked in communal or commercial ovens. Recipes vary by region and household but generally include wheat flour, water, yeast and salt, sometimes with semolina, oil or sugar. The breads are shaped into rounds of varying thickness and baked on hot hearths or in deck ovens. Culinary literature documents khobz as a core element of Moroccan food culture, with specific shapes and topping choices linked to occasions and preferences.",
    "tags": [
      "north-african",
      "round-bread",
      "hearth-baked",
      "everyday-bread",
      "semolina-enriched",
      "table-bread"
    ],
    "difficulty": "medium",
    "fermentationType": "ambient",
    "technicalProfile": {
      "hydration": "60–70%",
      "salt": "1.8–2.2%",
      "oil": "0–4% (often olive or vegetable oil, optional)",
      "sugar": "0–3% (optional, small amounts)",
      "cocoa": "0%",
      "flourStrength": "W 200–260 (bread or all-purpose flour; durum/semolina often used as a component rather than sole flour)",
      "preferment": "Often direct dough with commercial yeast; some households use prefermented dough or sourdough for additional flavor.",
      "fermentationSteps": [
        "Mix flour (and semolina, if used), water, salt, yeast and optional oil/sugar to form a supple, moderately soft dough.",
        "Knead until smooth and cohesive, ensuring sufficient gluten development for shaping.",
        "Bulk ferment 1–2 h at ambient temperature until expanded and aerated.",
        "Divide into portions and shape into flat, round loaves of the desired diameter and thickness.",
        "Optionally score or dock lightly and sprinkle with semolina or seeds.",
        "Final proof 30–45 min and bake on a hot hearth, stone or pan until the loaves are well colored and cooked through."
      ],
      "ovenTemp": "220–260°C (hearth or deck baking)",
      "recommendedUse": [
        "Stone- or tile-lined ovens used traditionally and in bakeries",
        "Domestic ovens with baking stones or steels for similar bottom heat"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Hydration too low produces dense, heavy loaves lacking the desired chew and openness.",
      "Overproofing can cause loaves to collapse or bake with an overly coarse, weak structure.",
      "Underbaking leaves the interior doughy, which is particularly noticeable because the bread is often torn by hand at the table.",
      "Excess semolina or very coarse grinds without adjustment in hydration can reduce volume."
    ],
    "notes": [
      "Khobz is frequently used as both bread and eating utensil, torn into pieces to scoop stews and salads.",
      "Loaf thickness is adjusted according to intended use, from thinner rounds for more crust to thicker loaves for softer interior crumb.",
      "Toppings such as sesame or nigella seeds provide both visual and flavor variation."
    ],
    "references": [
      "North African and Moroccan food culture references describing khobz as a primary daily bread",
      "Modernist Bread — coverage of Middle Eastern and North African breads",
      "Culinary books and fieldwork describing traditional Moroccan bread-making and communal oven practices"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01"
  },
  {
    "id": "roman_teglia_classic",
    "name": "Roman Teglia (Teglia Romana)",
    "category": "Pizza",
    "origin": {
      "country": "Italy",
      "region": "Rome",
      "period": "1980s–1990s (Modern High-Hydration Evolution)"
    },
    "description": "Pizza in Teglia Romana is a contemporary high-hydration pan pizza characterized by a light, open crumb, a crispy bottom, and distinct digestibility. Unlike traditional home pan pizzas, the professional Roman style uses strong flour, cold fermentation (48–72h), and hydration levels often exceeding 80%, resulting in a structure that is airy like a ciabatta yet sturdy enough to hold heavy toppings.",
    "history": "While pan pizza has existed in Rome for decades, the modern 'Teglia Romana' as a high-technical product evolved significantly in the late 1980s and 1990s. Pioneered by millers and bakers like Angelo Iezzi and later popularized globally by figures such as Gabriele Bonci, the style shifted from a dense, oily dough to a high-hydration, cold-fermented product. This evolution was driven by improvements in Italian flour technology (high W, high absorption) and a focus on digestibility and lightness. It is traditionally sold 'al taglio' (by the cut/weight).",
    "tags": [
      "high-hydration",
      "roman-style",
      "cold-fermentation",
      "pan-pizza",
      "airy-crumb",
      "al-taglio"
    ],
    "difficulty": "high",
    "fermentationType": "cold",
    "technicalProfile": {
      "hydration": "75–90%",
      "salt": "2.2–2.5%",
      "oil": "2–3% (in dough) + generous pan oiling",
      "sugar": "0–1% (rarely used in strict professional circles)",
      "cocoa": "0%",
      "flourStrength": "W 320–380 (High protein, high absorption)",
      "preferment": "Commonly uses a stiff Biga or can be a high-hydration direct dough with stretch-and-folds.",
      "fermentationSteps": [
        "Mix flour and 70% of water (autolyse optional but recommended).",
        "Add yeast and remaining water gradually (bassinage) to reach full hydration.",
        "Add salt and oil at the end of mixing.",
        "Bulk ferment 1-2 hours at room temp with coil folds.",
        "Cold ferment (bulk) for 24-72 hours at 4°C.",
        "Divide and shape into logs; rest 3-4 hours at room temp.",
        "Stretch gently into oiled blue steel pans using fingertips.",
        "Bake at high heat (bottom heavy) to crisp the base."
      ],
      "ovenTemp": "280–320°C",
      "recommendedUse": [
        "Electric deck ovens (Moretti Forni, etc.)",
        "Home ovens with baking steel (par-bake method recommended)"
      ],
      "difficulty": "high"
    },
    "warnings": [
      "Hydration below 75% will not yield the characteristic open alveolation.",
      "Over-handling during the pan stretch will degas the dough and create dense spots.",
      "Must be baked on the oven floor or closest rack to ensure the bottom crisps before the top burns."
    ],
    "notes": [
      "The 'crunch' (scrocchiarella) is a hallmark of the style.",
      "Reheating is part of the serving process; slices are often reheated to restore crispness.",
      "Toppings are often applied after baking or halfway through (for delicate ingredients)."
    ],
    "references": [
      "Modernist Pizza, Vol 2. - Roman Pan Pizza",
      "The Pizza Bible - Tony Gemignani (Teglia method)",
      "Gabriele Bonci - Pizza: Seasonal Recipes from Rome's Legendary Pizzarium",
      "Le 5 Stagioni - Technical Sheets for Teglia Romana",
      "Dissapore - La Pizza in Teglia Romana: Storia e Tecnica"
    ],
    "isPro": true,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "sicilian_sfincione_traditional",
    "name": "Sicilian Sfincione (Traditional)",
    "category": "Pizza",
    "origin": {
      "country": "Italy",
      "region": "Palermo, Sicily",
      "period": "Mid-19th Century (documented roots)"
    },
    "description": "Sfincione (from 'sfinci' meaning sponge) is the archetypal Sicilian pizza. It is a thick, soft, focaccia-like dough, traditionally topped with a sauce made of onions, anchovies, tomatoes, oregano, and sheep's milk cheese (caciocavallo), finished with breadcrumbs. Unlike the crispy Roman styles, Sfincione is prized for its spongy tenderness and savory, rich topping.",
    "history": "Originating in Palermo, possibly in the convent of San Vito, Sfincione was a festive dish for Christmas and New Year's Eve. It predates the Neapolitan pizza Margherita. The style reflects Sicily's layered history, with Arab influences seen in the use of breadcrumbs (to keep moisture in) and the sweet-sour onion sauce. It is traditionally sold by 'sfincionari' on three-wheeled carts or in bakeries, rather than pizzerias.",
    "tags": [
      "sicilian",
      "focaccia-style",
      "onion-sauce",
      "breadcrumbs",
      "soft-crumb",
      "street-food"
    ],
    "difficulty": "medium",
    "fermentationType": "ambient",
    "technicalProfile": {
      "hydration": "60–70%",
      "salt": "2.0–2.2%",
      "oil": "2–4% (Olive oil is crucial for flavor and texture)",
      "sugar": "0–2% (helps browning and yeast activity)",
      "cocoa": "0%",
      "flourStrength": "W 260–300 (Medium-strong bread flour/Semolina blends)",
      "preferment": "Often uses a 'crescenza' or old dough, but direct method is common in bakeries.",
      "fermentationSteps": [
        "Mix dough to moderate gluten development (windowpane not strictly necessary).",
        "Bulk ferment until doubled (approx 2-3 hours).",
        "Transfer to oiled rectangular pan; stretch to edges.",
        "Final proof in pan for 1-2 hours until very puffy.",
        "Press anchovies into the dough.",
        "Top with caciocavallo cubes, then the cooked onion-tomato sauce.",
        "Sprinkle heavily with breadcrumbs and oregano.",
        "Bake at moderate heat to cook the thick dough through without burning the toppings."
      ],
      "ovenTemp": "220–250°C",
      "recommendedUse": [
        "Standard home oven",
        "Deck oven (mid-temp)"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Do not use raw onions; the sauce must be cooked down (stewed) beforehand.",
      "Breadcrumbs are mandatory; they protect the sauce and add texture.",
      "If the dough is too thin, it becomes a standard pan pizza, losing the 'sponge' identity."
    ],
    "notes": [
      "Semolina (Rimacinata) is often blended (20-50%) with white flour for texture and color.",
      "The cheese traditionally goes UNDER the sauce to prevent burning.",
      "It is best eaten warm, not piping hot, allowing flavors to settle."
    ],
    "references": [
      "Modernist Pizza, Vol 1. - History of Sfincione",
      "The Pizza Bible - Tony Gemignani",
      "Saveur - The Real Sicilian Pizza",
      "Gambero Rosso - Storia dello Sfincione Palermitano",
      "Slow Food Sicily - Presidi Slow Food (Sfincione variants)"
    ],
    "isPro": true,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "chicago_deep_dish_uno",
    "name": "Chicago Deep Dish (Classic)",
    "category": "Pizza",
    "origin": {
      "country": "United States",
      "region": "Chicago, Illinois",
      "period": "1943 (Pizzeria Uno)"
    },
    "description": "A controversial and distinct style, Chicago Deep Dish is more akin to a savory pie than a flatbread. It features a high-fat, low-hydration biscuit-like crust pressed into a deep round pan, filled with layers of cheese (on the bottom), meats/vegetables, and topped with crushed plum tomatoes. It requires a long bake time.",
    "history": "Documented to have been invented at Pizzeria Uno in 1943 by Ike Sewell and Ric Riccardo. The intention was to create a hearty meal that stood apart from the thin tavern-style pizzas of the era. The dough recipe is unique for its use of corn oil (and sometimes butter) and short mixing time, creating a 'short' pastry texture rather than a chewy bread texture. It became a global icon of Chicago cuisine.",
    "tags": [
      "deep-dish",
      "pie-like",
      "biscuit-crust",
      "laminated",
      "cheese-bottom",
      "american-icon"
    ],
    "difficulty": "medium",
    "fermentationType": "short",
    "technicalProfile": {
      "hydration": "50–55% (Low hydration is key)",
      "salt": "1.5–1.8%",
      "oil": "15–20% (Corn oil, or Vegetable oil + Butter blend)",
      "sugar": "1–2%",
      "cocoa": "0%",
      "flourStrength": "W 220–260 (AP or Lower protein bread flour)",
      "preferment": "None. Short fermentation is preferred to keep the dough 'dead' and barely elastic.",
      "fermentationSteps": [
        "Mix flour, salt, sugar, yeast.",
        "Add water and oil. Mix briefly—do not develop gluten. Stop when combined.",
        "Bulk ferment 1-2 hours or cold ferment overnight (for flavor, not structure).",
        "Lamination (optional but recommended): Roll out, spread butter, fold, rest.",
        "Press into deep-dish pan (up the sides).",
        "Layer: Sliced mozzarella (bottom), Sausage (raw patty), Sauce (top).",
        "Bake for 30-45 minutes."
      ],
      "ovenTemp": "205–230°C",
      "recommendedUse": [
        "Deep round cake pans or cast iron skillets",
        "Standard home oven (lower rack)"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "High hydration (>60%) will ruin the crust, making it bread-like instead of biscuity.",
      "Putting cheese on top will burn it due to the long bake time; cheese must go on the bottom.",
      "The sausage layer should be applied raw in a flat patty to cook evenly with the pie."
    ],
    "notes": [
      "Corn oil is traditional for the 'Uno' flavor profile.",
      "The sauce should be chunky, often using crushed tomatoes rather than smooth puree.",
      "Let the pizza rest 5-10 minutes after baking to set the structure."
    ],
    "references": [
      "Modernist Pizza, Vol 2. - Chicago Deep Dish",
      "The Pizza Bible - Tony Gemignani",
      "Pizzeria Uno - Corporate History & Archives",
      "Chicago Tribune - The History of Deep Dish",
      "Cook's Illustrated - Deep Dish Pizza Science"
    ],
    "isPro": true,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "roman_pinsa_modern",
    "name": "Pinsa Romana (Modern)",
    "category": "Pizza",
    "origin": {
      "country": "Italy",
      "region": "Rome (Modern Invention)",
      "period": "2001 (Corrado Di Marco)"
    },
    "description": "Pinsa Romana is a modern oval-shaped flatbread made from a proprietary blend of wheat, soy, and rice flours. It is marketed as an 'ancient' recipe but is a contemporary innovation designed for lightness and digestibility. The soy provides structure, the rice adds crunch/lightness and retains water, and the wheat provides the gluten backbone.",
    "history": "Invented in 2001 by Corrado Di Marco, an Italian flour technician. While the name derives from the Latin 'pinsere' (to press/stretch), the recipe is not ancient. Di Marco created a mix to solve digestibilty issues in standard pizza. The result is a cloud-like, crispy, high-hydration product. The 'Pinsa' trademark is strictly controlled, but the style (oval, mixed flours, high hydration) has been widely replicated globally.",
    "tags": [
      "pinsa",
      "mixed-flour",
      "rice-flour",
      "soy-flour",
      "oval-shape",
      "modern-italian"
    ],
    "difficulty": "high",
    "fermentationType": "cold",
    "technicalProfile": {
      "hydration": "75–85%",
      "salt": "2.0–2.5%",
      "oil": "2–3%",
      "sugar": "0%",
      "cocoa": "0%",
      "flourStrength": "W 300+ (for the wheat component)",
      "preferment": "Often uses a dried sourdough powder (pasta acida) in the mix, plus commercial yeast.",
      "fermentationSteps": [
        "Mix the flour blend (Wheat/Soy/Rice) with 80% of cold water.",
        "Add yeast and salt.",
        "Drizzle remaining water and oil slowly.",
        "Bulk ferment 24-48-72 hours at 4°C.",
        "Divide into balls; roll in rice flour (spolvero) to prevent sticking.",
        "Press into oval shape using fingertips.",
        "Bake on stone or in pan."
      ],
      "ovenTemp": "280–300°C",
      "recommendedUse": [
        "Electric deck oven",
        "Home oven with stone (essential for bottom crisp)"
      ],
      "difficulty": "high"
    },
    "warnings": [
      "Cannot use 100% wheat flour; the rice/soy blend is the defining feature.",
      "Extremely sticky dough due to high hydration; generous dusting flour (rice flour) is needed for shaping.",
      "Do not use a rolling pin; fingertips only to preserve the 'cloud' structure."
    ],
    "notes": [
      "Typical blend ratio approx: 80% Strong Wheat, 15% Rice, 5% Soy.",
      "The oval shape distinguishes it visually from Teglia or Neapolitan.",
      "Often par-baked plain, then topped and finished."
    ],
    "references": [
      "Modernist Pizza, Vol 2. - Pinsa Romana",
      "Di Marco - Official Pinsa Disciplinare",
      "Panificio Italiano - The Science of Pinsa Flour",
      "Italian Pizza Makers Association - Pinsa Specifications",
      "Gambero Rosso - Il Fenomeno Pinsa"
    ],
    "isPro": true,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "ny_sicilian_square",
    "name": "NY Sicilian Square",
    "category": "Pizza",
    "origin": {
      "country": "United States",
      "region": "New York City",
      "period": "Mid-20th Century"
    },
    "description": "The New York Sicilian is a thick, square pan pizza that evolved from the Sicilian Sfincione but adapted to American tastes and equipment. It features a thick (~1 inch) airy crumb with a fried bottom, topped with mozzarella and a cooked tomato sauce. Unlike the Grandma slice (which is thinner and proofed less), the Sicilian is fully proofed in the pan before baking.",
    "history": "Brought by Sicilian immigrants to NY, this style diverged from the Palermo original. It lost the breadcrumbs and caciocavallo, replacing them with low-moisture mozzarella and pizza sauce. Iconic pizzerias like L&B Spumoni Gardens codified the style (often putting cheese under the sauce). It is a staple of NY slice shops, offering a hearty contrast to the thin round slice.",
    "tags": [
      "square-slice",
      "pan-pizza",
      "thick-crust",
      "ny-style",
      "comfort-food"
    ],
    "difficulty": "medium",
    "fermentationType": "mixed",
    "technicalProfile": {
      "hydration": "60–65%",
      "salt": "2.0–2.5%",
      "oil": "3–5% (in dough) + Pan Oil",
      "sugar": "1–2% (for browning and yeast food)",
      "cocoa": "0%",
      "flourStrength": "W 280–320 (High gluten flour is preferred for chew)",
      "preferment": "Direct method is standard, but cold fermentation improves crumb structure.",
      "fermentationSteps": [
        "Mix dough to full gluten development.",
        "Bulk ferment 1-2 hours.",
        "Place in heavily oiled rectangular sheet pan.",
        "Stretch to corners (may require resting intervals).",
        "Final proof in pan: 2-3 hours until dough fills the pan and is very light.",
        "Par-bake (optional but common) to set structure.",
        "Top and finish bake."
      ],
      "ovenTemp": "260–290°C",
      "recommendedUse": [
        "Gas deck oven (standard NY pizzeria setup)",
        "Home oven with heavy baking sheet"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Under-proofing yields a dense, gummy brick.",
      "Sauce on top prevents the cheese from burning during the longer bake time.",
      "Must use enough oil in the pan to fry the bottom, otherwise it will stick and steam."
    ],
    "notes": [
      "Different from 'Grandma Pizza' which is thinner and proofed for less time.",
      "The sauce is usually slightly sweeter and thicker than round pie sauce.",
      "L&B Spumoni Gardens is the reference standard for the 'inverted' (cheese under sauce) style."
    ],
    "references": [
      "Modernist Pizza, Vol 2. - NY Sicilian vs Grandma",
      "The Pizza Bible - Tony Gemignani",
      "Serious Eats - The Pizza Lab: Sicilian Pizza",
      "PMQ Pizza Magazine - Square Pan Pizza History",
      "New York Times - The Definitive Guide to NY Pizza Styles"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "french_brioche_classic",
    "name": "French Brioche (Classic)",
    "category": "Bread",
    "origin": {
      "country": "France",
      "region": "Normandy / Paris",
      "period": "17th Century (Modern form 19th Century)"
    },
    "description": "Brioche is a highly enriched Viennoiserie pastry of French origin, whose high egg and butter content gives it a rich and tender crumb. The classic 'Brioche à Tête' or 'Nanterre' is characterized by a paper-thin, golden-brown crust and a soft, shreddable interior that relies on strong gluten development to support the heavy fat load.",
    "history": "The word 'brioche' first appeared in 1404. It evolved from a blessed bread used in church services to a luxury item. The modern high-butter version became possible with the improvement of yeast and flour quality in the 19th century. Normany, famous for its butter, is often cited as the spiritual home of the highest quality brioche. It sits on the line between bread and pastry (Viennoiserie).",
    "tags": [
      "enriched-dough",
      "viennoiserie",
      "high-butter",
      "french-classic",
      "soft-crumb"
    ],
    "difficulty": "high",
    "fermentationType": "cold",
    "technicalProfile": {
      "hydration": "50–60% (Milk/Eggs often calculated as hydration)",
      "salt": "1.8–2.2%",
      "oil": "0%",
      "sugar": "10–20%",
      "cocoa": "0%",
      "flourStrength": "W 280–350 (High protein required to hold fat)",
      "preferment": "Often uses a Sponge (Levain de levure) or Poolish in older methods; modern recipes frequently use intensive direct mixing with cold fermentation.",
      "fermentationSteps": [
        "Mix flour, eggs, liquids, sugar, yeast to full gluten development.",
        "Add softened butter gradually (emulsification phase) while mixing.",
        "Bulk ferment 1-2 hours at room temp.",
        "Degas and cold retard (fridge) for 12-24 hours (Crucial for handling and flavor).",
        "Shape cold dough (braids, balls, or loaf).",
        "Final proof 2-3 hours at 26-28°C (Do not exceed 29°C or butter will melt).",
        "Egg wash and bake."
      ],
      "ovenTemp": "180–200°C",
      "recommendedUse": [
        "Convection oven (professional)",
        "Home oven with lower rack placement to prevent browning too fast"
      ],
      "difficulty": "high"
    },
    "warnings": [
      "Butter MUST be added only after gluten is developed, or the dough will break.",
      "Proofing temperature must not exceed the melting point of butter (~29°C).",
      "Cold fermentation is mandatory for shaping; warm brioche dough is impossible to handle."
    ],
    "notes": [
      "Butter percentages can range from 20% (poor man's brioche) to 100% (rich man's).",
      "Eggs provide the hydration and structure; water is rarely used in large quantities.",
      "The 'improved mix' method (Calvel) is standard for this style."
    ],
    "references": [
      "Raymond Calvel - Le Goût du Pain (The Taste of Bread)",
      "Modernist Bread, Vol 2. - Enriched Doughs",
      "CIA (Culinary Institute of America) - Baking & Pastry: Mastering the Art and Craft",
      "Michel Suas - Advanced Bread and Pastry",
      "Pierre Hermé - Pastry"
    ],
    "isPro": true,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "italian_ciabatta_cavallari",
    "name": "Italian Ciabatta (Cavallari Style)",
    "category": "Bread",
    "origin": {
      "country": "Italy",
      "region": "Adria (Veneto)",
      "period": "1982 (Invented by Arnaldo Cavallari)"
    },
    "description": "Ciabatta ('Slipper') is a modern Italian white bread made from wheat flour, water, salt, yeast, and olive oil. It was created in 1982 by Arnaldo Cavallari as a response to the popularity of French baguettes. It is characterized by a very high hydration (70-80%+), huge irregular holes (alveoli) in the crumb, and a crispy, floury crust.",
    "history": "Arnaldo Cavallari, a miller and baker in Adria, developed the 'Ciabatta Polesana' to save the Italian sandwich market from the baguette. He used a very wet dough and high-protein flour, often employing a Biga preferment. The result was a rustic, flat, elongated loaf that looked like a slipper. It quickly became an international standard for artisan bread.",
    "tags": [
      "high-hydration",
      "italian-modern",
      "open-crumb",
      "biga-preferment",
      "slipper-bread"
    ],
    "difficulty": "high",
    "fermentationType": "mixed",
    "technicalProfile": {
      "hydration": "70–85%",
      "salt": "2.0–2.2%",
      "oil": "1–3% (Olive oil, common but not strictly mandatory in all variations)",
      "sugar": "0%",
      "cocoa": "0%",
      "flourStrength": "W 280–320 (Strong flour needed for hydration)",
      "preferment": "Biga (stiff preferment) is the traditional and most common method (30-50% of flour).",
      "fermentationSteps": [
        "Prepare Biga (45-50% hydration) and ferment 16-24h at 18°C.",
        "Mix Biga with remaining flour, water, salt, malt, and oil.",
        "Mix to full gluten development (intensive mix often used).",
        "Bulk ferment in a tub with coil folds (2-3 hours).",
        "Turn out onto heavily floured bench.",
        "Cut into rectangles (do not shape or degas).",
        "Final proof 30-45 mins on couche or board.",
        "Bake with steam."
      ],
      "ovenTemp": "230–250°C with steam",
      "recommendedUse": [
        "Deck oven (Stone hearth)",
        "Home oven with baking stone"
      ],
      "difficulty": "high"
    },
    "warnings": [
      "Do not degas the dough during 'shaping'; simply cut it.",
      "High hydration requires expert handling or the use of a mixer; hand kneading is very difficult.",
      "Steam is essential for the crust character."
    ],
    "notes": [
      "The 'Ciabatta Italia' mark was originally protected.",
      "Often contains malt extract to help browning and fermentation.",
      "The flour dusting is a signature visual element."
    ],
    "references": [
      "Modernist Bread, Vol 2. - Ciabatta History",
      "The Bread Baker's Apprentice - Peter Reinhart",
      "Carol Field - The Italian Baker",
      "Simili Sisters - Pane e Roba Dolce",
      "Arnaldo Cavallari - Historical Interviews/Archives"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "brazilian_pao_frances_padaria",
    "name": "Brazilian Pão Francês (Padaria Style)",
    "category": "Bread",
    "origin": {
      "country": "Brazil",
      "region": "National",
      "period": "Early 20th Century (Industrialized mid-century)"
    },
    "description": "The 'Pão Francês' (French Bread) is the absolute staple of the Brazilian bakery (Padaria). Despite its name, it differs from the French baguette. It is a small roll (50g) with a thin, crispy, golden crust and a soft, airy, white crumb. It typically includes small amounts of sugar and fat (shortening) and is baked with steam to produce a 'craquelé' crust.",
    "history": "Influenced by French baking travelers in the early 20th century, Brazilian bakers adapted the recipe to local flours (which were softer) and tastes. They added sugar and fat to ensure consistent fermentation and texture. It became the 'Pão de Sal' consumed daily by millions. The Brazilian technical standard (ABNT NBR 16170) now defines its characteristics.",
    "tags": [
      "brazilian-staple",
      "daily-bread",
      "steam-baked",
      "crisp-crust",
      "soft-crumb"
    ],
    "difficulty": "medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": "58–62%",
      "salt": "1.8–2.0%",
      "oil": "1–2% (Vegetable fat/shortening)",
      "sugar": "0.5–1.5% (Yeast food and color)",
      "cocoa": "0%",
      "flourStrength": "W 220–260 (Medium strength)",
      "preferment": "Traditionally Direct Method (Straight Dough) or Sponge (Esponja).",
      "fermentationSteps": [
        "Mix all ingredients to full development (windowpane).",
        "Rest dough 10-20 minutes.",
        "Divide into 50-60g pieces.",
        "Shape into small cylinders (mechanically or by hand).",
        "Proof in steam cabinet or covered environment (approx 90-120 mins).",
        "Score longitudinally (pestana).",
        "Bake with generous steam."
      ],
      "ovenTemp": "220–240°C with steam",
      "recommendedUse": [
        "Rotary rack ovens (common in Brazil)",
        "Deck ovens with steam injection"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Lack of steam results in a dull, thick crust rather than thin and crispy.",
      "Over-mixing bleaches the crumb (oxidizes) which is sometimes desired for whiteness but loses flavor.",
      "The score (pestana) must open well; skinning the dough before scoring helps."
    ],
    "notes": [
      "Often uses ascorbic acid (Vitamin C) as an improver.",
      "Best eaten within hours of baking; stales relatively fast.",
      "Sold by weight (kg) in Brazil, not by unit."
    ],
    "references": [
      "ABNT NBR 16170 - Pão Francês Specification",
      "SENAI - Tecnologia de Panificação (Brazilian Baking Textbook)",
      "ICC - International Association for Cereal Science and Technology (Latin American variants)",
      "Modernist Bread - Regional Breads (South America)",
      "AIB International - Baking Science & Technology"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "lebanese_manoushe_traditional",
    "name": "Lebanese Manoushe (Man'oushe)",
    "category": "Flatbread",
    "origin": {
      "country": "Lebanon",
      "region": "Levant",
      "period": "Traditional"
    },
    "description": "The Manoushe (plural Manaeesh) is the quintessential breakfast of Lebanon. It is a soft, round flatbread, indented with fingertips (similar to focaccia but thinner) to hold toppings, most famously Za'atar mixed with olive oil. It is baked in high-temperature ovens or on a convex metal dome (Saj).",
    "history": "Rooted in the ancient baking traditions of the Fertile Crescent, the Manoushe is a canvas for local ingredients. The word comes from the Arabic root 'naqasha', meaning to sculpt or engrave, referring to the finger indentations. It is traditionally baked in neighborhood communal ovens (Forn) where families would bring their own toppings.",
    "tags": [
      "flatbread",
      "levantine",
      "zaatar",
      "street-food",
      "breakfast"
    ],
    "difficulty": "medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": "60–70%",
      "salt": "1.8–2.0%",
      "oil": "2–4% (Olive oil in dough)",
      "sugar": "0–1%",
      "cocoa": "0%",
      "flourStrength": "W 220–260 (AP or Bread Flour)",
      "preferment": "Direct method with commercial yeast is standard today; sourdough variants exist historically.",
      "fermentationSteps": [
        "Mix flour, water, salt, yeast, oil.",
        "Bulk ferment 1-2 hours.",
        "Divide into balls (approx 150g).",
        "Rest 30 mins.",
        "Flatten into rounds (approx 5mm thick).",
        "Dock/dimple with fingertips to prevent ballooning and hold topping.",
        "Spread Za'atar/Oil mix.",
        "Bake high heat."
      ],
      "ovenTemp": "250–350°C",
      "recommendedUse": [
        "Pizza stone/steel",
        "Saj (Convex griddle)",
        "Wood-fired oven"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Topping (Za'atar+Oil) should be applied BEFORE baking.",
      "If the oven is too cool, the bread dries out before cooking.",
      "Do not roll too thin like Lavash; it should have some crumb."
    ],
    "notes": [
      "Za'atar mix ratio: Typically 1 part za'atar to 2-3 parts olive oil.",
      "Can also be topped with cheese (Akkawi) or ground meat (Lahm Bi Ajeen).",
      "The dimpling is crucial for the oil not to run off."
    ],
    "references": [
      "Man'oushe: Inside the Street Corner Lebanese Bakery - Barbara Abdeni Massaad",
      "Modernist Bread - Flatbreads of the Middle East",
      "Claudia Roden - The Book of Jewish Food (Levantine Breads)",
      "ICC - Cereal Science in the Middle East",
      "Chef Ramzi - The Culinary Heritage of Lebanon"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "turkish_pide_bread",
    "name": "Turkish Pide (Ramazan Pidesi)",
    "category": "Bread",
    "origin": {
      "country": "Turkey",
      "region": "Anatolia",
      "period": "Ottoman Empire (15th Century+)"
    },
    "description": "Turkish Pide (specifically Ramazan Pidesi) is a soft, round or oval flatbread with a diamond-patterned indentation on top. It is coated with an egg-yolk or flour-water glaze and topped with sesame and nigella seeds. It differs from the boat-shaped 'Icili Pide' (filled pizza) as it is a table bread.",
    "history": "Bread (Ekmek) is sacred in Turkish culture. Pide has roots in the Ottoman palace cuisine and earlier Seljuk traditions. Ramazan Pidesi is specifically associated with the breaking of the fast (Iftar) during Ramadan, where bakeries produce it in massive quantities just before sundown. The diamond pattern is not just decorative; it prevents the bread from ballooning like a pita.",
    "tags": [
      "flatbread",
      "ottoman",
      "ramadan",
      "soft-bread",
      "egg-glazed"
    ],
    "difficulty": "medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": "65–70%",
      "salt": "1.8–2.0%",
      "oil": "2–3% (Olive or Sunflower)",
      "sugar": "1–2%",
      "cocoa": "0%",
      "flourStrength": "W 220–260 (All purpose / Bread flour mix)",
      "preferment": "Often uses a 'Biga' or 'Eksi Maye' (Sourdough) historically, but direct yeast method is standard for Ramazan production speed.",
      "fermentationSteps": [
        "Mix dough to moderate development.",
        "Bulk ferment 1-2 hours.",
        "Divide and round into balls.",
        "Rest 30 mins.",
        "Flatten into rounds (approx 1-2cm thick).",
        "Use fingertips dipped in glaze/water to press a border and a diamond grid in the center.",
        "Brush with egg yolk/yogurt mix (Sifa).",
        "Sprinkle heavily with Sesame and Nigella.",
        "Bake hot."
      ],
      "ovenTemp": "230–250°C",
      "recommendedUse": [
        "Pizza Stone",
        "Deck Oven"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "If you press too hard, you cut the dough; too soft, the pattern vanishes.",
      "The 'Sifa' (glaze) is essential for the color and seed adhesion.",
      "Must be eaten fresh; dries out faster than loaf breads."
    ],
    "notes": [
      "Nigella seeds (Çörek Otu) are considered to have health benefits and are standard.",
      "The pattern is called 'Tirnak' (fingernail) because it is traditionally done with fingernails.",
      "Bakeries often add wheat bran to the bottom to prevent sticking."
    ],
    "references": [
      "Turkish Cuisine: With Timeless Recipes - Ministry of Culture",
      "Modernist Bread - Flatbreads",
      "Classic Turkish Cooking - Ghillie Basan",
      "The Art of Turkish Cooking - Neşet Eren",
      "ICC - Traditional Foods of Turkey"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "moroccan_khobz_eddar",
    "name": "Moroccan Khobz (Khobz Eddar)",
    "category": "Bread",
    "origin": {
      "country": "Morocco",
      "region": "Maghreb",
      "period": "Traditional"
    },
    "description": "Khobz Eddar (Bread of the House) is the daily round flatbread of Morocco. It is slightly leavened, approx 2-3cm thick, and coarse-textured, often using a mix of white flour and fine semolina (Smida). It serves as a utensil (scoop) for Tagines and salads.",
    "history": "In the Maghreb, bread is the primary source of calories. Historically, families kneaded dough at home and sent it to the communal oven (Ferran) to be baked. The baker knew each family's bread by its stamp or cloth pattern. Today, it is also baked in home gas ovens. The use of Semolina reflects the durum wheat agriculture of North Africa.",
    "tags": [
      "semolina-bread",
      "north-african",
      "daily-bread",
      "tagine-bread",
      "hearth-baked"
    ],
    "difficulty": "medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": "55–60% (Stiffer dough for handling)",
      "salt": "1.8–2.0%",
      "oil": "2–4% (Vegetable or Olive)",
      "sugar": "1–2%",
      "cocoa": "0%",
      "flourStrength": "W 200–240 (Blend of Soft Wheat + Durum Semolina)",
      "preferment": "Direct method common.",
      "fermentationSteps": [
        "Mix White Flour and Fine Semolina (ratio 2:1 or 1:1).",
        "Add water, yeast, salt, oil, anise seeds (optional).",
        "Knead well (historically by hand for 20 mins).",
        "Bulk ferment 1 hour.",
        "Divide and shape into rounds.",
        "Flatten to 1.5cm thickness.",
        "Poke with a fork or stamp to prevent ballooning.",
        "Second proof 30-45 mins.",
        "Bake."
      ],
      "ovenTemp": "200–220°C",
      "recommendedUse": [
        "Home gas oven",
        "Cast iron pan"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Do not make the dough too wet; it must hold its round shape without a pan.",
      "Semolina absorbs water slowly; kneading is crucial for hydration.",
      "Must be docked (poked) or it becomes a pita."
    ],
    "notes": [
      "Often flavored with Anise or Sesame.",
      "Crust should be golden but not hard/crispy like a baguette.",
      "Durum Semolina gives it a yellow hue and chewy texture."
    ],
    "references": [
      "Paula Wolfert - The Food of Morocco",
      "Modernist Bread - Regional Breads",
      "Couscous and Other Good Food from Morocco - Paula Wolfert",
      "Moroccan Ministry of Agriculture - Durum Wheat usage",
      "ICC - North African Cereal Products"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "egyptian_aish_baladi",
    "name": "Egyptian Aish Baladi",
    "category": "Flatbread",
    "origin": {
      "country": "Egypt",
      "region": "Nile Delta",
      "period": "Ancient (Pharaonic roots)"
    },
    "description": "Aish Baladi ('Life of the Country') is the ubiquitous pocket bread of Egypt. Unlike white pita, it is made with 100% whole wheat flour and traditionally leavened with sourdough, baked at scorching temperatures to puff instantly. It has a coarse, bran-covered crust and a distinct sour flavor.",
    "history": "Egypt is the cradle of bread baking (levain was discovered there). Aish Baladi is a direct descendant of ancient Emmer wheat breads. It is subsidized by the government due to its importance. The traditional method involves very soft, wet dough handled on a bed of wheat bran ('Radda').",
    "tags": [
      "whole-wheat",
      "ancient-grain",
      "pocket-bread",
      "sourdough",
      "high-fiber"
    ],
    "difficulty": "high",
    "fermentationType": "sourdough",
    "technicalProfile": {
      "hydration": "70–80% (Very wet for whole wheat)",
      "salt": "1.5–1.8%",
      "oil": "0%",
      "sugar": "0%",
      "cocoa": "0%",
      "flourStrength": "High extraction Whole Wheat (Red Wheat)",
      "preferment": "Traditional Sourdough (Biga/Old Dough) is mandatory for authentic flavor.",
      "fermentationSteps": [
        "Mix whole wheat flour, water, salt, starter.",
        "Knead to combine (will be sticky).",
        "Bulk ferment 2-3 hours.",
        "Divide pieces onto a bed of wheat bran (Radda).",
        "Let them rest (proof) on the bran.",
        "Flatten gently by hand (patting).",
        "Transfer to peel.",
        "Bake at max temp (shock heat) to puff."
      ],
      "ovenTemp": "350–450°C",
      "recommendedUse": [
        "Pizza Oven (essential for puff)",
        "Baking Steel (preheated max)"
      ],
      "difficulty": "high"
    },
    "warnings": [
      "Low oven temperature = No pocket (it will dry out).",
      "Dough is extremely sticky; you MUST use bran to handle it.",
      "Whole wheat ferments faster than white flour; watch the proof."
    ],
    "notes": [
      "The 'Aish' means Life - signifying bread's central role.",
      "The bran coating prevents sticking and adds nutty flavor.",
      "Often eaten with Fuul Medames or Falafel."
    ],
    "references": [
      "The Pharaoh's Kitchen - Magda Mehdawy",
      "Modernist Bread, Vol 3. - Ancient Breads",
      "National Geographic - The Bread of Egypt",
      "FAO - Egyptian Wheat Subsidies and Bread Quality",
      "ICC - Whole Grain Breads in Middle East"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "yemenite_malawach",
    "name": "Yemenite Malawach",
    "category": "Flatbread",
    "origin": {
      "country": "Yemen",
      "region": "Jewish Communities (Aden)",
      "period": "Traditional"
    },
    "description": "Malawach is a laminated flatbread from Yemenite Jewish cuisine. It consists of thin layers of puff-pastry-like dough brushed with fat (oil, butter, or chicken fat/schmaltz) and cooked in a frying pan. It is flaky, rich, and crispy, resembling a Paratha or Msemen.",
    "history": "Brought to Israel by Yemenite Jews during Operation Magic Carpet (1949-1950), Malawach became a staple Israeli street food and freezer aisle item. Historically, it was a way to make a rich bread for Sabbath mornings (dough prepared Friday, cooked Saturday). It is related to the Jachnun dough but cooked quickly in a pan rather than slow-baked.",
    "tags": [
      "laminated",
      "fried-bread",
      "yemenite",
      "rich-dough",
      "crispy"
    ],
    "difficulty": "medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": "55–60% (Dough)",
      "salt": "2.0%",
      "oil": "2–4% in dough + High amount for laminating",
      "sugar": "1–3%",
      "cocoa": "0%",
      "flourStrength": "W 200–240 (AP Flour)",
      "preferment": "None. Direct dough. Relaxation is key, not fermentation.",
      "fermentationSteps": [
        "Mix flour, water, salt, sugar, small amount of yeast (optional in some versions, but standard in Malawach).",
        "Knead well.",
        "Divide into balls and coat in oil.",
        "Rest 30 mins (Relax gluten).",
        "Flatten paper thin.",
        "Smear with soft butter/margarine.",
        "Fold (Book fold or Roll into coil).",
        "Refrigerate or freeze (to set fat).",
        "Roll out to circle.",
        "Fry in pan with little oil."
      ],
      "ovenTemp": "Pan Fry (Medium Heat)",
      "recommendedUse": [
        "Frying Pan / Skillet",
        "Griddle"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Dough must rest between rolling steps or it will shrink back.",
      "Fat must be soft/melted for spreading but set before final roll.",
      "Cook on medium heat to ensure inside layers cook before outside burns."
    ],
    "notes": [
      "Traditionally served with Grated Tomato Dip, Hard Boiled Egg, and Zhug (hot sauce).",
      "Can be sweet (with honey) or savory.",
      "Freezes exceptionally well."
    ],
    "references": [
      "The Book of Jewish Food - Claudia Roden",
      "Modernist Bread - Laminated Flatbreads",
      "Jerusalem: A Cookbook - Ottolenghi",
      "Yemenite Heritage Museum Archives",
      "Israeli Ministry of Foreign Affairs - Cultural Foods"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "french_pain_de_campagne",
    "name": "Pain de Campagne (French Country Bread)",
    "category": "Bread",
    "origin": {
      "country": "France",
      "region": "Rural France",
      "period": "Traditional (Revived 20th Century)"
    },
    "description": "Pain de Campagne, or 'Country Bread', is the quintessential French rustic loaf. Historically, it was a large sourdough loaf made with high-extraction wheat flour and a small percentage of rye, designed to stay fresh for several days. It features a thick, dark crust and a chewy, flavorful crumb with mild acidity.",
    "history": "For centuries, communal ovens in French villages baked large sourdough loaves (MICHE) to feed families for a week. As white bread (baguettes) became fashionable in cities, country bread declined. It was revived in the late 20th century by artisanal bakers like Lionel Poilâne and theorists like Raymond Calvel, who championed the flavor of natural leavening and stone-milled flours.",
    "tags": [
      "sourdough",
      "rustic-bread",
      "rye-blend",
      "french-classic",
      "hearth-baked"
    ],
    "difficulty": "medium-high",
    "fermentationType": "sourdough",
    "technicalProfile": {
      "hydration": "65–75% (Moderate for handling large loaves)",
      "salt": "1.8–2.0%",
      "oil": "0%",
      "sugar": "0%",
      "cocoa": "0%",
      "flourStrength": "W 240–280 (T80 Wheat + 10-15% Rye)",
      "preferment": "Levain (Natural Sourdough) is essential; sometimes spiked with a pinch of yeast in commercial settings (Poolish variant).",
      "fermentationSteps": [
        "Mix flours (Wheat/Rye), water, and levain.",
        "Autolyse 30-60 mins (optional but recommended).",
        "Add salt and mix to moderate development.",
        "Bulk ferment 3-4 hours with folds.",
        "Divide and pre-shape into boules.",
        "Bench rest 20-30 mins.",
        "Final shape (tight skin) into bannetons.",
        "Proof 2-3 hours at ambient or retard overnight.",
        "Score deeply.",
        "Bake with steam."
      ],
      "ovenTemp": "230–250°C",
      "recommendedUse": [
        "Hearth / Deck Oven",
        "Dutch Oven (for home)"
      ],
      "difficulty": "medium-high"
    },
    "warnings": [
      "Rye flour increases fermentation speed; watch the dough.",
      "If the crust is too pale, the flavor will be undeveloped.",
      "Must be fully cooled before slicing to set the crumb structure."
    ],
    "notes": [
      "Often made with T80 (High Extraction) flour for deeper flavor.",
      "Can be huge (1.5kg - 2kg Miches).",
      "The acidity should be balanced, not vinegary."
    ],
    "references": [
      "Raymond Calvel - Le Goût du Pain",
      "Jeffrey Hamelman - Bread: A Baker's Book of Techniques and Recipes",
      "Modernist Bread, Vol 2. - Lean Breads",
      "Lionel Poilâne - The Bread Bible",
      "Suas - Advanced Bread and Pastry"
    ],
    "isPro": true,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "nordic_rugbrod_rye",
    "name": "Nordic Rugbrød (Danish Rye Bread)",
    "category": "Bread",
    "origin": {
      "country": "Denmark",
      "region": "Scandinavia",
      "period": "Viking Age (Modern form 19th C)"
    },
    "description": "Rugbrød is a dense, dark, brick-like bread made primarily from rye flour and cracked rye kernels (berries), often enriched with seeds (sunflower, flax, pumpkin). It is fermented with sourdough to make the rye digestible and structure stable. It is the foundation of 'Smørrebrød' (open-faced sandwiches).",
    "history": "Rye grows well in the cold, wet Nordic climate where wheat struggles. Historically, it was the fuel of the working class. The sourdough acidification is technically necessary: rye has high amylase enzyme activity, and without acid to inhibit it, the bread would become a gummy mess ('starch attack'). Modern versions focus on whole grains and seeds for health.",
    "tags": [
      "rye-bread",
      "nordic-staple",
      "sourdough",
      "whole-grain",
      "dense-crumb"
    ],
    "difficulty": "high",
    "fermentationType": "sourdough",
    "technicalProfile": {
      "hydration": "80–100% (Rye absorbs massive water)",
      "salt": "1.8–2.2%",
      "oil": "0–2% (Optional)",
      "sugar": "0–3% (Malt syrup or molasses often added)",
      "cocoa": "0%",
      "flourStrength": "Low Gluten (Rye has pentosans, not gluten structure)",
      "preferment": "Rye Sourdough (Surdej) is mandatory for chemistry.",
      "fermentationSteps": [
        "Soak seeds and cracked rye kernels (soaker) overnight.",
        "Refresh Rye Sourdough.",
        "Mix sourdough, rye flour, soaked grains, water, salt, malt.",
        "Mix briefly (no gluten to develop, just homogenization).",
        "Bulk ferment 1 hour.",
        "Fill into Pullman pans (greased well).",
        "Final proof 2-4 hours until pinholes appear.",
        "Bake low and slow (1-2 hours) to cure the interior."
      ],
      "ovenTemp": "180–200°C",
      "recommendedUse": [
        "Pullman Pan / Loaf Pan",
        "Steam helps initially"
      ],
      "difficulty": "high"
    },
    "warnings": [
      "Do NOT slice until 24 hours after baking; it needs to cure.",
      "Without acid (sourdough), the crumb will be sticky/gummy.",
      "High hydration is normal; it's a paste, not a dough."
    ],
    "notes": [
      "Often uses chopped stale rye bread as an improver.",
      "Keeps for weeks if stored correctly.",
      "Beer is sometimes used as the liquid."
    ],
    "references": [
      "Modernist Bread, Vol 3. - Rye Breads",
      "Trine Hahnemann - Scandinavian Baking",
      "Claus Meyer - Meyer's Bakery",
      "Nordic Food Lab - Rye Research",
      "Jeffrey Hamelman - Bread (German/Rye section)"
    ],
    "isPro": true,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "german_pretzel_laugen",
    "name": "German Pretzel (Laugenbrezel)",
    "category": "Bread",
    "origin": {
      "country": "Germany",
      "region": "Swabia / Bavaria",
      "period": "Medieval (12th Century)"
    },
    "description": "The Laugenbrezel is a knotted bread with a deep mahogany, glossy skin and a white, dense, chewy interior. The unique crust flavor and color come from dipping the dough in a Lye solution (Sodium Hydroxide, NaOH) before baking, which triggers a violent Maillard reaction.",
    "history": "Legends abound (monks praying, bakers held hostage), but the pretzel is an ancient guild symbol. The lye dip (Lauge) likely originated from accidental dipping in cleaning buckets. It is a protected cultural product in Germany. Swabian pretzels have thin crispy arms and a fat belly; Bavarian ones are more uniform.",
    "tags": [
      "pretzel",
      "lye-dipped",
      "german-classic",
      "snack-bread",
      "chewy-crumb"
    ],
    "difficulty": "high",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": "50–55% (Very stiff dough)",
      "salt": "2.0% (plus coarse salt on top)",
      "oil": "2–4% (Lard or Butter)",
      "sugar": "0–1% (Malt is traditional)",
      "cocoa": "0%",
      "flourStrength": "W 220–260 (Standard bread flour)",
      "preferment": "Usually direct method with a stiff texture (Pate Fermentee optional).",
      "fermentationSteps": [
        "Mix stiff dough to full development.",
        "Bulk ferment 30-60 mins (short).",
        "Divide and preshape.",
        "Roll into long tapered ropes (belly thick, ends thin).",
        "Swing and knot into pretzel shape.",
        "Uncovered proof (to form a skin) or cold retard.",
        "Dip in 3-4% Lye Solution (Safety Gear Required).",
        "Score the belly.",
        "Top with salt.",
        "Bake immediately."
      ],
      "ovenTemp": "220–240°C",
      "recommendedUse": [
        "Stainless Steel Dipping setup",
        "Baking Steel/Stone or Sheet Pan"
      ],
      "difficulty": "high"
    },
    "warnings": [
      "DANGER: Lye (NaOH) is caustic. Wear gloves and goggles. Add Lye to Water, never Water to Lye.",
      "Aluminum pans will dissolve in contact with Lye; use Steel or Silicone.",
      "Baking Soda is a weak substitute that yields poor gloss."
    ],
    "notes": [
      "The 'split' in the belly is iconic.",
      "Traditional fat is Lard (Schweineschmalz).",
      "Often eaten with Weillwurst and Mustard."
    ],
    "references": [
      "Modernist Bread, Vol 3. - Pretzels & Lye",
      "German Bakers Guild (Zentralverband) - Guidelines",
      "Jeffrey Hamelman - Bread",
      "AIB International - Lye Application Safety",
      "Stanley Ginsberg - The Rye Baker (German traditions section)"
    ],
    "isPro": true,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "american_dinner_rolls_soft",
    "name": "Soft American Dinner Rolls",
    "category": "Bread",
    "origin": {
      "country": "United States",
      "region": "National",
      "period": "Mid-20th Century"
    },
    "description": "The classic American Dinner Roll (Parker House style or similar) is a soft, fluffy, slightly sweet, enriched yeast roll. It has a thin, golden crust often brushed with butter, and a cotton-like shreddable crumb. It is a staple of holiday meals (Thanksgiving).",
    "history": "Evolving from European enriched breads but adapted to American soft wheat and sugar availability, these rolls became standardized in the 20th century via cookbooks like Betty Crocker and industrial production (King's Hawaiian). The emphasis is on softness (tenderness) rather than chewiness.",
    "tags": [
      "enriched-dough",
      "soft-roll",
      "american-classic",
      "holiday-bread",
      "butter-rich"
    ],
    "difficulty": "medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": "60–65% (Milk/Water mix)",
      "salt": "1.8–2.0%",
      "oil": "8–15% (Butter or Shortening)",
      "sugar": "8–12% (Noticeably sweet)",
      "cocoa": "0%",
      "flourStrength": "W 200–240 (AP or Bread flour, not too strong)",
      "preferment": "Direct method or Sponge (for lightness). Tangzhong is a modern addition for extra softness.",
      "fermentationSteps": [
        "Scald milk (if using) to denature proteins.",
        "Mix flour, sugar, yeast, liquid.",
        "Add fat (butter) after gluten forms.",
        "Bulk ferment 1-2 hours.",
        "Divide into small balls (40-50g).",
        "Round gently.",
        "Place in pan (touching for pull-apart, spaced for rounds).",
        "Final proof until very light.",
        "Bake.",
        "Brush with butter immediately."
      ],
      "ovenTemp": "180–190°C",
      "recommendedUse": [
        "Cake Pan / Sheet Pan",
        "Convection Oven"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "Overbaking dries them out instantly.",
      "Too much flour during shaping creates tough seams.",
      "Sugar content requires lower oven temp to prevent burning."
    ],
    "notes": [
      "Potato flour or mashed potato is a traditional softener.",
      "Egg wash gives shine; butter wash gives flavor and softens crust.",
      "Can be shaped as crescents, knots, or cloverleaves."
    ],
    "references": [
      "CIA - Baking & Pastry: Mastering the Art and Craft",
      "Modernist Bread, Vol 2. - Enriched Doughs",
      "King Arthur Baking - All-Purpose Baker's Companion",
      "Rose Levy Beranbaum - The Bread Bible",
      "Stella Parks - BraveTart (American baking history)"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "scandinavian_knackebrod",
    "name": "Scandinavian Knäckebröd (Crispbread)",
    "category": "Flatbread",
    "origin": {
      "country": "Sweden",
      "region": "Scandinavia",
      "period": "AD 500 (Ancient)"
    },
    "description": "Knäckebröd is a hard, dry, cracker-like flatbread made traditionally from rye flour. It is rolled thin, docked (holed) to prevent ballooning, and baked until completely desiccated. It was the preservation method for rye harvests in the north.",
    "history": "Historically baked twice a year (after harvest and in spring), these breads were stored on poles near the ceiling (hence the hole in the center of traditional large rounds). It was a staple food for Vikings and farmers. Modern versions vary from 100% whole rye to lighter wheat blends with seeds.",
    "tags": [
      "flatbread",
      "rye-cracker",
      "preservation-bread",
      "scandinavian",
      "crunchy"
    ],
    "difficulty": "medium",
    "fermentationType": "mixed",
    "technicalProfile": {
      "hydration": "45–55% (Stiff, rollable)",
      "salt": "1.5–2.0%",
      "oil": "0–2%",
      "sugar": "0–2% (Honey/Syrup optional)",
      "cocoa": "0%",
      "flourStrength": "Low (Rye/Coarse Wheat)",
      "preferment": "Sourdough improves flavor, but yeast is common. Some variants use ice/snow for mechanical leavening.",
      "fermentationSteps": [
        "Mix flours (coarse rye), liquid (milk/water), salt, leavening.",
        "Bulk ferment 1 hour (or less if chemically leavened).",
        "Divide into balls.",
        "Roll out on a textured surface (knobbly rolling pin) to indent.",
        "Dock thoroughly.",
        "Cut into rounds or rectangles.",
        "Bake until dry and crisp.",
        "Dry further in cooling oven if needed."
      ],
      "ovenTemp": "200–220°C",
      "recommendedUse": [
        "Baking Stone",
        "Cookie Sheet"
      ],
      "difficulty": "medium"
    },
    "warnings": [
      "If not rolled thin enough, it will be hard (tooth-breaking) rather than crisp.",
      "Must be fully dried to store, or mold will grow.",
      "Rye dough is sticky; use plenty of bran/flour for rolling."
    ],
    "notes": [
      "Topped often with seeds or coarse salt.",
      "The 'Knubby' rolling pin (Kruskavel) creates the signature texture.",
      "Served with cheese, fish, or butter."
    ],
    "references": [
      "Magnus Nilsson - The Nordic Baking Book",
      "Modernist Bread - Flatbreads/Crackers",
      "ICC - Flatbread Technologies",
      "Swedish Institute - Food Traditions",
      "Jan Hedh - Swedish Breads and Pastries"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "modern_neapolitan_canotto",
    "name": "Modern Neapolitan (Canotto)",
    "category": "Pizza",
    "origin": {
      "country": "Italy",
      "region": "Caserta / Naples (suburbs)",
      "period": "Early 21st Century (2010s)"
    },
    "description": "The 'Canotto' (dinghy) style represents the most significant evolution in Neapolitan pizza since the codification of the traditional STG style. It is characterized by an exaggerated, highly alveolated cornicione (rim) that resembles an inflated dinghy, hence the name. Unlike the traditional low-rimmed pizza, the Canotto relies on high hydration (65–75%+), advanced fermentation techniques (often 100% biga or poolish), and high-protein flour to create a light, cloud-like structure that is crispy on the outside and melt-in-the-mouth soft on the inside. It prioritizes digestibility and structural openness over traditional flatness.",
    "history": "While traditional Neapolitan pizza is fiercely protected by the AVPN, a new wave of pizzaioli in the Caserta and Naples suburbs began experimenting in the early 2010s. Influenced by the artisan bread movement and seeking differentiation, pioneers like Carlo Sammarco and Francesco Martucci adopted bread-baking techniques—specifically high hydration and indirect fermentation—applied to pizza. This movement was initially met with resistance but rapidly gained acclaim for its superior texture and digestibility. It reflects a modern gastronomic approach where the dough is the star, not just a vessel for toppings.",
    "scientificFoundations": {
      "flour": "Requires high-protein (W 300–350, 13–14% protein) type '0' or '00' flour to support the heavy water load and extended fermentation without collapsing.",
      "gluten": "The high hydration creates a mobile gluten network that expands rapidly under heat. The strong flour ensures this network can trap the massive steam generation.",
      "fermentation": "Heavy reliance on pre-ferments (biga/poolish) drives rapid enzymatic activity and lactic acid production, strengthening the gluten and adding flavor complexity.",
      "heat": "Baked at slightly lower temperatures (430–450°C) than traditional Neapolitan (485°C) to allow the larger rim volume to cook through without burning the exterior."
    },
    "technicalProfile": {
      "hydration": "65–75% (Critical for steam generation and open crumb)",
      "salt": "2.2–2.5% (Controls fermentation rate in high-hydration environment)",
      "oil": "0–2% (Optional; some use it for extensibility, others omit for tradition)",
      "sugar": "0% (Browning achieved through enzymatic sugar release)",
      "cocoa": "0%",
      "flourStrength": "W 300–350 (Elasticity is key for the 'puff')",
      "preferment": "Poolish or Biga (often 100% Biga method) for maximum extensibility and explosive spring.",
      "fermentationSteps": [
        "1. Prepare Biga: Mix strong flour, 45-50% water, and 1% yeast. Ferment 16-24h at 16-18°C.",
        "2. Refresh: Place Biga in mixer. Add remaining water gradually (bassinage) to reach final hydration.",
        "3. Mix: Intensive mixing to develop strong gluten structure (pumpkin skin surface).",
        "4. Add Salt: Incorporated near the end to tighten the gluten network.",
        "5. Bulk Ferment: 2-3 hours at ambient temp to restart yeast activity.",
        "6. Balling: Divide into 260-280g balls. Shape tightly to create tension.",
        "7. Cold Fermentation: Place in dough boxes, refrigerate at 4°C for 24-48 hours.",
        "8. Tempering: Remove from fridge 3-4 hours before baking to reach 18-20°C.",
        "9. Shaping: Gentle manipulation, pushing gas from center to rim. Do NOT slap down.",
        "10. Baking: 430-450°C for 90-120 seconds."
      ],
      "ovenTemp": "430–450°C (Floor temp)",
      "recommendedUse": [
        "Professional Gas/Wood Oven",
        "High-performance Electric Oven (e.g., Effeuno)",
        "Home Oven with Steel + Broiler (modified method)"
      ],
      "difficulty": "high"
    },
    "tags": [
      "high-hydration",
      "canotto",
      "contemporary-pizza",
      "biga",
      "open-crumb"
    ],
    "difficulty": "high",
    "fermentationType": "cold",
    "warnings": [
      "Handling: Dough is extremely soft and sticky; excess handling will degas the rim.",
      "Temperature: If the dough is too cold when baked, it will bubble and burn (measles).",
      "Baking: Needs slightly longer bake time than STG to cook the internal web of the rim."
    ],
    "notes": [
      "The 'Canotto' rim should be mostly air; if it is dense or doughy, fermentation or hydration failed.",
      "Semolina Rimacinata is the best flour for opening the dough to prevent sticking.",
      "Toppings should not weigh down the center excessively."
    ],
    "references": [
      "Modernist Pizza, Vol 1 & 2 - Nathan Myhrvold",
      "Luciano Pignataro - La Pizza: Una Storia Contemporanea",
      "Top 50 Pizza - Contemporary Style Criteria",
      "Enzo Coccia - The Neapolitan Pizza: A Scientific Guide",
      "Albert Grande - The Rise of Canotto Pizza",
      "Gambero Rosso - Pizzerie d'Italia Guides",
      "Associazione Verace Pizza Napoletana (AVPN) - Contemporary Amendments",
      "Caputo Flour - Technical Sheets for Nuvola/Super Nuvola",
      "Scatti di Gusto - Technical analysis of Caserta style",
      "Dissapore - The Canotto Revolution"
    ],
    "isPro": true,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "artisan_sourdough_high_hydration",
    "name": "Artisan Sourdough (High Hydration)",
    "category": "Bread",
    "origin": {
      "country": "USA / France",
      "region": "San Francisco / Paris",
      "period": "Modern Artisan Revival (1990s-Present)"
    },
    "description": "The modern artisan sourdough is defined by a distinct aesthetic and texture: a dark, caramelized 'bien cuit' crust with blisters, a prominent 'ear' (grigne), and a wild, open interior crumb (alveolation). It relies entirely on wild yeast (levain) for leavening and flavor, and high hydration (75%+) to enable the open structure. It is the gold standard of contemporary craft baking.",
    "history": "While sourdough is the oldest form of leavened bread, this specific style—often called 'Tartine style' or 'Country Bread'—was popularized in the 2000s by bakers like Chad Robertson in San Francisco. It merges French natural leavening traditions (Levain de Pâte) with very high hydration handling techniques, creating a loaf that is milder in acidity but richer in grain flavor and texture than traditional San Francisco sour breads.",
    "scientificFoundations": {
      "flour": "Uses a blend of strong white flour (for structure) and whole grains (wheat/rye for enzymatic activity and flavor).",
      "fermentation": "Lactic acid bacteria (LAB) and wild yeast create complex organic acids (acetic/lactic) and CO2. Long cold fermentation favors acetic acid production and gluten relaxation.",
      "hydration": "High water content increases enzyme mobility and gluten extensibility, allowing for massive expansion (oven spring).",
      "rheology": "Dough strength is built via folding (mechanical alignment) rather than intensive mixing, preserving carotenoid pigments (flavor/color)."
    },
    "technicalProfile": {
      "hydration": "75–85% (plus potential for higher with whole grains)",
      "salt": "1.8–2.2% (Critical for tightening gluten in wet doughs)",
      "oil": "0%",
      "sugar": "0%",
      "cocoa": "0%",
      "flourStrength": "W 280–320 (Strong Bread Flour base)",
      "preferment": "Liquid Levain (100% hydration) or Stiff Levain (50-60%) depending on desired acidity profile.",
      "fermentationSteps": [
        "1. Levain Build: Feed starter to be active and young (sweet/milky smell).",
        "2. Autolyse: Mix flour and water only. Rest 30-120 mins for enzymatic gluten development.",
        "3. Mix: Add Levain. Mix. Add Salt and reserve water (Bassinage).",
        "4. Bulk Ferment: 3-5 hours at 24-26°C.",
        "5. Folding: Coil folds or Stretch & Folds every 30 mins during first 2 hours of bulk.",
        "6. Divide & Preshape: Shape into loose rounds. Bench rest 20-30 mins.",
        "7. Final Shape: Shape into Batards or Boules, creating surface tension.",
        "8. Cold Retard: Place in bannetons, cover, refrigerate 12-16 hours at 4°C.",
        "9. Scoring: Score cold dough deeply at a shallow angle to create an ear.",
        "10. Bake: 260°C falling to 230°C. Steam essential for first 20 mins."
      ],
      "ovenTemp": "240–260°C (with Steam)",
      "recommendedUse": [
        "Dutch Oven (Combo Cooker)",
        "Deck Oven with Steam Injection",
        "Challenger Bread Pan"
      ],
      "difficulty": "high"
    },
    "tags": [
      "sourdough",
      "wild-yeast",
      "high-hydration",
      "artisan-bread",
      "long-fermentation"
    ],
    "difficulty": "high",
    "fermentationType": "sourdough",
    "warnings": [
      "Starter Health: A weak or acidic starter degrades gluten (proteolysis), resulting in flat, gummy bread.",
      "Over-proofing: Warm dough ferments exponentially faster; watch the volume, not just the clock.",
      "Steam: Without steam, the crust sets before the loaf can expand, resulting in a dense brick."
    ],
    "notes": [
      "The 'Ear' is a result of proper scoring angle and dough strength/tension.",
      "Open crumb is achieved during bulk fermentation; gentle handling thereafter is key.",
      "Cooling fully (2+ hours) is necessary to complete the cooking process (starch retrogradation)."
    ],
    "references": [
      "Tartine Bread - Chad Robertson",
      "Modernist Bread, Vol 1-5 - Myhrvold & Migoya",
      "Flour Water Salt Yeast - Ken Forkish",
      "The Bread Builders - Wing & Scott",
      "Open Crumb Mastery - Trevor Wilson",
      "The Sourdough School - Vanessa Kimbell",
      "Jeffrey Hamelman - Bread: A Baker's Book",
      "Raymond Calvel - The Taste of Bread",
      "Sourdough Panettone and Viennoiserie - Thomas Teffri-Chambelland",
      "Bread Science - Emily Buehler"
    ],
    "isPro": true,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "japanese_milk_bun",
    "name": "Japanese Milk Bun (Shokupan Style)",
    "category": "Bread",
    "origin": {
      "country": "Japan",
      "region": "National",
      "period": "Post-WWII (Modern Evolution)"
    },
    "description": "The Japanese Milk Bun is the pinnacle of soft bread engineering. It features a feathery, cotton-like crumb that shreds in layers, a thin golden crust, and a milky-sweet flavor profile. Key to its texture is the 'Tangzhong' (Water Roux) method, where starch is pre-gelatinized to hold extra moisture, delaying staling and increasing softness without excessive fat.",
    "history": "Following WWII, wheat became a staple in Japan. Japanese bakers adapted Western bread recipes to local preferences for soft, moist, slightly sweet textures (similar to rice). The Tangzhong technique (popularized by Yvonne Chen but rooted in Japanese 'Yudane' methods) revolutionized the style in the 2000s, spreading to Taiwan and Hong Kong and becoming a global bakery standard.",
    "scientificFoundations": {
      "starch": "Tangzhong pre-gelatinizes starch at 65°C, allowing it to absorb 2x more water than raw flour. This creates a high-hydration dough that handles like a lower-hydration one.",
      "fat/sugar": "High percentages of fat and sugar inhibit gluten formation, requiring intensive mixing to compensate. They tenderize the crumb and provide the characteristic flavor.",
      "protein": "High-protein flour is essential to support the rich enrichment and high rise."
    },
    "technicalProfile": {
      "hydration": "65–75% (Effective hydration higher due to Tangzhong)",
      "salt": "1.5–1.8% (Balanced against sweetness)",
      "oil": "8–15% (Butter, added late in mixing)",
      "sugar": "10–18% (High sugar content for softness and browning)",
      "cocoa": "0%",
      "flourStrength": "W 280–350 (Strong Bread Flour or High Gluten Flour)",
      "preferment": "Tangzhong (Water Roux): 5-10% of total flour cooked with water (1:5 ratio) to 65°C.",
      "fermentationSteps": [
        "1. Tangzhong: Cook flour/water to 65°C (pudding consistency). Cool to room temp.",
        "2. Mix: Combine flour, sugar, yeast, milk powder, egg, milk, tangzhong.",
        "3. Develop: Mix to shaggy stage. Add salt.",
        "4. Intesive Mix: Knead until gluten network forms.",
        "5. Butter Addition: Add softened butter in chunks. Mix until Windowpane Test is passed (critical).",
        "6. Bulk Ferment: 60-90 mins at 26-28°C until doubled.",
        "7. Divide: Portion into uniform pieces (e.g., 60g for buns).",
        "8. Rounding: Round tightly to smooth surface.",
        "9. Shaping: Roll out, fold, roll up (for loaves) or round (for buns).",
        "10. Final Proof: 60-90 mins at 28-30°C (humidity helpful).",
        "11. Bake: 175-180°C. Egg wash before baking."
      ],
      "ovenTemp": "175–180°C (Convection ideally)",
      "recommendedUse": [
        "Pullman Pan (Lidded or Open)",
        "Standard Bun Pans",
        "Paper Molds"
      ],
      "difficulty": "medium"
    },
    "tags": [
      "enriched-dough",
      "tangzhong",
      "soft-bread",
      "asian-bakery",
      "milk-bread"
    ],
    "difficulty": "medium",
    "fermentationType": "direct",
    "warnings": [
      "Tangzhong Temp: Must be cooled. Hot roux kills yeast.",
      "Browning: High sugar/milk/egg content creates rapid browning. Watch oven temp closely (cover with foil if needed).",
      "Under-kneading: If gluten isn't fully developed (windowpane), the buns will be dense and won't shred."
    ],
    "notes": [
      "Milk Powder (Dry Milk) adds dairy richness without adding water.",
      "Stays soft for 3-4 days at room temp due to starch gelatinization.",
      "Can be filled with Anko (Red Bean), Custard, or savory fillings."
    ],
    "references": [
      "Modernist Bread - Asian Breads & Enriched Doughs",
      "Yvonne Chen - The 65°C Bread Doctor",
      "King Arthur Baking - Tangzhong Guide",
      "Just One Cookbook - Japanese Milk Bread",
      "Serious Eats - Science of Tangzhong",
      "Cook's Illustrated - Japanese Milk Bread",
      "Jeffrey Hamelman - Bread (Enriched sections)",
      "The China Study - Bakery Evolution in Asia",
      "Cereal Chemistry Journal - Starch Gelatinization",
      "AIB International - Sweet Dough Technology"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "cinnamon_roll_dough",
    "name": "Cinnamon Roll Dough (Classic)",
    "category": "Bread",
    "origin": {
      "country": "USA / Sweden",
      "region": "Global",
      "period": "19th-20th Century"
    },
    "description": "A rich, sweet, yeast-leavened dough designed to be rolled into a spiral with a butter-sugar-spice filling. The dough must strike a balance: extensible enough to roll out thin without retracting, yet strong enough to hold the heavy filling and rise vertically during baking. Texture ranges from the soft, gooey American mall-style to the firmer, cardamom-scented Swedish Kanelbulle.",
    "history": "Spiced sweet breads have existed in Northern Europe for centuries. The specific rolled format gained popularity in Sweden (Kanelbulle) in the 1920s as ingredients became affordable. In the US, the style evolved into a dessert-like breakfast item, reaching its peak of richness with the mall culture of the 1980s (Cinnabon), characterized by massive size, soft texture, and cream cheese frosting.",
    "scientificFoundations": {
      "sugar/fat": "High percentages (15-20%) tenderize the gluten strands, creating a 'short' bite. They also retard yeast activity (osmotic pressure), requiring osmotolerant yeast or longer proofs.",
      "filling": "The hygroscopic nature of the sugar filling draws moisture from the dough, creating the gooey center but risking a raw interior if not baked correctly.",
      "shape": "The spiral structure limits oven spring physically; steam generation within the layers contributes to the lift."
    },
    "technicalProfile": {
      "hydration": "60–65% (Moderate to maintain shape)",
      "salt": "1.5–1.8% (Balances the sweetness)",
      "oil": "12–20% (Butter, usually added late)",
      "sugar": "10–15% (Dough) + Filling Sugar",
      "cocoa": "0%",
      "flourStrength": "W 240–280 (AP or Bread Flour mix for softness)",
      "preferment": "Straight Dough common; Sponge method improves texture and shelf life.",
      "fermentationSteps": [
        "1. Mix: Combine flour, sugar, salt, yeast, milk, eggs.",
        "2. Develop: Mix to moderate gluten development.",
        "3. Enrich: Add softened butter gradually until fully incorporated.",
        "4. Bulk Ferment: 60-90 mins at 24-26°C.",
        "5. Chill (Optional): Refrigerating dough makes rolling easier and shape sharper.",
        "6. Roll Out: Rectangular sheet, approx 5mm thickness.",
        "7. Fill: Spread soft butter, sugar, cinnamon (and cardamom).",
        "8. Roll Up: Roll tightly into a log. Seal seam.",
        "9. Cut: Use thread or sharp knife to prevent squashing.",
        "10. Proof: In pan, touching (for soft sides) or spaced (for crusty sides). 45-60 mins.",
        "11. Bake: 175-190°C until internal temp 88-90°C."
      ],
      "ovenTemp": "180–190°C",
      "recommendedUse": [
        "High-sided Baking Pan (for gooey rolls)",
        "Sheet Pan (for individual rolls)"
      ],
      "difficulty": "medium"
    },
    "tags": [
      "enriched-dough",
      "sweet-roll",
      "breakfast-pastry",
      "spiral-shape",
      "comfort-food"
    ],
    "difficulty": "medium",
    "fermentationType": "direct",
    "warnings": [
      "Center Doneness: The center is the last to cook. If oven is too hot, outside burns while center is raw.",
      "Filling Leakage: If rolled too loosely or butter is melted (not soft), filling pools at the bottom.",
      "Proofing: Under-proofed rolls will 'telescope' (center pops up) during baking."
    ],
    "notes": [
      "Dental floss cuts the cleanest spirals without deforming the layers.",
      "Swedish style uses pearl sugar on top; American style uses fondant or cream cheese icing.",
      "Adding a Tangzhong (5%) can increase softness and shelf life significantly."
    ],
    "references": [
      "CIA - Baking and Pastry: Mastering the Art",
      "Modernist Bread - Sweet Goods",
      "Fika: The Art of The Swedish Coffee Break",
      "Bravetart: Iconic American Desserts - Stella Parks",
      "AIB International - Sweet Yeast Doughs",
      "King Arthur Baking - Cinnamon Roll Guide",
      "Jeffrey Hamelman - Bread (Brioche/Sweet Doughs)",
      "Suas - Advanced Bread and Pastry",
      "Professional Baking - Wayne Gisslen",
      "Scandinavian Baking - Trine Hahnemann"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  },
  {
    "id": "burger_bun_dough",
    "name": "Burger Bun Dough (Brioche Style)",
    "category": "Bread",
    "origin": {
      "country": "USA",
      "region": "National",
      "period": "Modern Gourmet Era (2000s)"
    },
    "description": "The modern gourmet burger bun is an enriched dough designed to be soft yet structural. It must compress easily when bitten (low chewiness) but possess enough resilience (hinge strength) to hold a juicy patty without disintegrating. It typically falls into the 'Light Brioche' or 'Potato Roll' category, featuring a tight crumb to prevent soaking, and a glazed crust for aesthetic appeal.",
    "history": "As the hamburger elevated from fast food to gourmet dining in the late 90s and 2000s (e.g., Daniel Boulud, Shake Shack), the bun evolved. The cheap, airy supermarket bun was replaced by richer formulas. The Potato Roll (Pennsylvania Dutch origin) and Brioche Bun became standards. The goal was to create a bun that complimented the meat rather than fighting it or disappearing completely.",
    "scientificFoundations": {
      "enrichment": "Fat (butter/oil) coats gluten, shortening the texture for a clean bite. Sugar promotes rapid browning and moisture retention.",
      "crumb": "Intensive mixing creates a fine, uniform gas cell structure (tight crumb), which prevents condiments and juices from making the bun soggy instantly.",
      "shape": "Flattening the dough ball before proofing is crucial to achieve the correct width-to-height ratio for a burger."
    },
    "technicalProfile": {
      "hydration": "60–68% (Moderate to hold shape)",
      "salt": "1.8–2.0%",
      "oil": "5–10% (Butter for flavor, Oil for softness)",
      "sugar": "8–12% (High sugar for browning and tenderness)",
      "cocoa": "0%",
      "flourStrength": "W 240–270 (Bread Flour for structure, but not too chewy)",
      "preferment": "Direct method standard. Sponge or Tangzhong optional for shelf life.",
      "fermentationSteps": [
        "1. Mix: Combine flour, sugar, yeast, liquid, egg.",
        "2. Develop: Mix to strong gluten development.",
        "3. Enrich: Add fat. Mix until shiny and smooth.",
        "4. Bulk Ferment: 60 mins at 24-26°C.",
        "5. Divide: 80-100g pieces.",
        "6. Rounding: Shape into tight balls.",
        "7. Bench Rest: 10 mins.",
        "8. Flatten: Press balls into discs (pucks). Crucial step.",
        "9. Proof: On parchment or in molds. 60-75 mins.",
        "10. Glaze: Egg wash for shine.",
        "11. Bake: 190-200°C for 12-15 mins."
      ],
      "ovenTemp": "190–200°C",
      "recommendedUse": [
        "Sheet Pan (spaced for rounds)",
        "Bun Molds / Rings (for uniform diameter)",
        "Silicone Bun Mats"
      ],
      "difficulty": "medium"
    },
    "tags": [
      "soft-roll",
      "enriched-dough",
      "burger-bun",
      "sandwich-bread",
      "potato-roll"
    ],
    "difficulty": "medium",
    "fermentationType": "direct",
    "warnings": [
      "Shape: If not flattened, buns become spheres (meatballs) which are impossible to eat.",
      "Crust: High sugar/egg content burns easily. Watch oven temp.",
      "Sogginess: Buns must be toasted on the cut face to seal the crumb before assembly."
    ],
    "notes": [
      "Potato flour (3-5%) or mashed potato creates the signature 'Martin's' texture.",
      "Sesame seeds should be applied immediately after egg wash.",
      "Internal temp of 90°C indicates doneness; overbaking makes them dry."
    ],
    "references": [
      "Modernist Bread - Sandwich Breads",
      "The Burger Lab (Serious Eats) - Bun Science",
      "Shake Shack: Recipes & Stories",
      "CIA - Baking and Pastry",
      "King Arthur Baking - Beautiful Burger Buns",
      "AIB - Hamburger Bun Production",
      "Professional Baking - Gisslen",
      "Bakery Technology - Matz",
      "Cook's Illustrated - Ultimate Burger Bun",
      "Jeffrey Hamelman - Bread (Soft Rolls)"
    ],
    "isPro": false,
    "source": "DLP Core Pack",
    "createdAt": "2025-02-12T10:00:00Z",
    "releaseDate": "2025-02-12T10:00:00Z"
  }
];

export function mapRawStyleToDoughStyleDefinition(raw: any): DoughStyleDefinition {
  // Determine RecipeStyle Enum Mapping
  let recipeStyle = RecipeStyle.NEAPOLITAN; // Default fallback

  const id = raw.id;
  const cat = raw.category;

  // Mapping logic based on ID or Category
  if (id.includes('neapolitan')) recipeStyle = RecipeStyle.NEAPOLITAN;
  else if (id.includes('canotto')) recipeStyle = RecipeStyle.NEAPOLITAN; 
  else if (id.includes('new_york')) recipeStyle = RecipeStyle.NEW_YORK;
  else if (id.includes('detroit')) recipeStyle = RecipeStyle.DETROIT;
  else if (id.includes('roman') || id.includes('teglia')) recipeStyle = RecipeStyle.ROMANA_TONDA; 
  else if (id.includes('scrocchiarella')) recipeStyle = RecipeStyle.THIN_CRUST;
  else if (id.includes('sicilian') || id.includes('sfincione')) recipeStyle = RecipeStyle.SICILIANA;
  else if (id.includes('grandma')) recipeStyle = RecipeStyle.GRANDMA_STYLE;
  else if (id.includes('baguette')) recipeStyle = RecipeStyle.BAGUETTE;
  else if (id.includes('ciabatta')) recipeStyle = RecipeStyle.CIABATTA;
  else if (id.includes('focaccia')) recipeStyle = RecipeStyle.FOCACCIA;
  else if (id.includes('brioche')) recipeStyle = RecipeStyle.BRIOCHE;
  else if (id.includes('burger') || id.includes('dinner_rolls') || id.includes('milk_bun')) recipeStyle = RecipeStyle.BURGER_BUN;
  else if (id.includes('cinnamon')) recipeStyle = RecipeStyle.CINNAMON_ROLL;
  else if (id.includes('cookie')) recipeStyle = RecipeStyle.COOKIES;
  else if (id.includes('rye') || id.includes('rugbrod')) recipeStyle = RecipeStyle.RYE;
  else if (id.includes('sourdough') || id.includes('levain') || id.includes('pain_de_campagne') || id.includes('artisan')) recipeStyle = RecipeStyle.SOURDOUGH;
  else if (id.includes('brazilian') || id.includes('pao_frances')) recipeStyle = RecipeStyle.PAO_FRANCES;
  else if (id.includes('chicago_deep')) recipeStyle = RecipeStyle.CHICAGO_DEEP_DISH;
  else if (id.includes('pinsa')) recipeStyle = RecipeStyle.PINSA;
  else if (id.includes('barbari')) recipeStyle = RecipeStyle.BARBARI_BREAD;
  else if (id.includes('khobz') || id.includes('aish')) recipeStyle = RecipeStyle.KHOBZ_BREAD;
  else if (id.includes('pide')) recipeStyle = RecipeStyle.TURKISH_PIDE;
  else if (id.includes('manoushe')) recipeStyle = RecipeStyle.MANOUSHE;
  else if (id.includes('pretzel')) recipeStyle = RecipeStyle.PRETZEL;
  else if (cat === 'Flatbread' || id.includes('lavash') || id.includes('knackebrod')) recipeStyle = RecipeStyle.FLATBREAD;
  else if (cat === 'Pastry' || id.includes('malawach')) recipeStyle = RecipeStyle.SWEETS_PASTRY;

  // Calculate Technical Values (Averages)
  const hydrationRange = raw.technicalProfile.hydration.match(/(\d+)[–-](\d+)/);
  const hydration = hydrationRange ? (parseInt(hydrationRange[1]) + parseInt(hydrationRange[2])) / 2 : 60; // Fallback

  const saltRange = raw.technicalProfile.salt.match(/(\d+(\.\d+)?)[–-](\d+(\.\d+)?)/);
  const salt = saltRange ? (parseFloat(saltRange[1]) + parseFloat(saltRange[3])) / 2 : 2.0;

  const oilRange = raw.technicalProfile.oil.match(/(\d+)[–-](\d+)/);
  const oil = oilRange ? (parseInt(oilRange[1]) + parseInt(oilRange[2])) / 2 : 0;

  const sugarRange = raw.technicalProfile.sugar.match(/(\d+)[–-](\d+)/);
  const sugar = sugarRange ? (parseInt(sugarRange[1]) + parseInt(sugarRange[2])) / 2 : 0;

  const ovenTempRange = raw.technicalProfile.ovenTemp.match(/(\d+)[–-](\d+)/);
  const bakingTempC = ovenTempRange ? (parseInt(ovenTempRange[1]) + parseInt(ovenTempRange[2])) / 2 : 250;

  // Default Ingredients Generation
  const generatedIngredients: IngredientConfig[] = [
    { id: 'flour', name: 'Flour', type: 'solid', role: 'flour', bakerPercentage: 100 },
    { id: 'water', name: 'Water', type: 'liquid', role: 'water', bakerPercentage: hydration },
    { id: 'salt', name: 'Salt', type: 'solid', role: 'salt', bakerPercentage: salt },
    { id: 'yeast', name: 'Yeast', type: 'solid', role: 'yeast', bakerPercentage: 0.5 } // Default placeholder
  ];

  if (oil > 0) {
    generatedIngredients.push({ id: 'oil', name: 'Oil/Fat', type: 'liquid', role: 'fat', bakerPercentage: oil });
  }
  if (sugar > 0) {
    generatedIngredients.push({ id: 'sugar', name: 'Sugar', type: 'solid', role: 'sugar', bakerPercentage: sugar });
  }

  // Fermentation Techniques
  const allowedTechniques = [FermentationTechnique.DIRECT, FermentationTechnique.POOLISH, FermentationTechnique.BIGA];
  let defaultTechnique = FermentationTechnique.DIRECT;

  if (raw.technicalProfile.preferment && raw.technicalProfile.preferment.toLowerCase().includes('poolish')) {
    defaultTechnique = FermentationTechnique.POOLISH;
  } else if (raw.technicalProfile.preferment && raw.technicalProfile.preferment.toLowerCase().includes('biga')) {
    defaultTechnique = FermentationTechnique.BIGA;
  } else if (raw.technicalProfile.preferment && (raw.technicalProfile.preferment.toLowerCase().includes('levain') || raw.technicalProfile.preferment.toLowerCase().includes('sourdough') || raw.technicalProfile.preferment.toLowerCase().includes('pasta acida') || raw.technicalProfile.preferment.toLowerCase().includes('old dough') || raw.technicalProfile.preferment.toLowerCase().includes('surdej'))) {
    allowedTechniques.push(FermentationTechnique.SOURDOUGH);
    defaultTechnique = FermentationTechnique.SOURDOUGH;
  } else if (raw.technicalProfile.preferment && raw.technicalProfile.preferment.toLowerCase().includes('tangzhong')) {
      // Tangzhong is an additive technique usually with direct
      defaultTechnique = FermentationTechnique.DIRECT;
  }

  if (cat === 'cookie' || cat === 'flatbread') {
    // Cookies/Flatbreads often chemical or no ferment
    if (!allowedTechniques.includes(FermentationTechnique.NO_FERMENT)) allowedTechniques.push(FermentationTechnique.NO_FERMENT);
    if (!allowedTechniques.includes(FermentationTechnique.CHEMICAL)) allowedTechniques.push(FermentationTechnique.CHEMICAL);
  }


  return {
    id: raw.id,
    name: raw.name,
    family: raw.category, 
    category: raw.category.toLowerCase() as any,
    origin: raw.origin,
    country: raw.origin.country,
    year: raw.origin.period,
    description: raw.description,
    history: raw.history,
    scientificFoundations: raw.scientificFoundations, // New Field
    culturalContext: "See history.", 
    isCanonical: true, 
    source: raw.source as any,
    isPro: raw.isPro,
    recipeStyle: recipeStyle,
    technical: {
      hydration,
      salt,
      oil,
      sugar,
      fermentation: raw.technicalProfile.fermentationSteps.join(' '), 
      fermentationTechnique: defaultTechnique,
      bakingTempC
    },
    technicalProfile: {
      hydration: [hydration - 2, hydration + 2], 
      salt: [salt - 0.2, salt + 0.2],
      oil: [oil, oil + 1],
      sugar: [sugar, sugar + 1],
      flourStrength: raw.technicalProfile.flourStrength,
      fermentation: {
          bulk: raw.technicalProfile.fermentationSteps[0] || "Standard",
          proof: raw.technicalProfile.fermentationSteps[1] || "Standard"
      },
      ovenRecommendations: raw.technicalProfile.ovenTemp,
      difficulty: raw.difficulty as any,
      recommendedUse: raw.technicalProfile.recommendedUse.join(', '),
      prefermentDescription: raw.technicalProfile.preferment
    },
    references: raw.references.map((ref: any) => typeof ref === 'string' ? { source: ref } : ref),
    allowedFermentationTechniques: allowedTechniques,
    defaultFermentationTechnique: defaultTechnique,
    ingredients: generatedIngredients,
    tags: raw.tags
  };
}

export const STYLES_DATA: DoughStyleDefinition[] = RAW_CANONICAL_STYLES.map(mapRawStyleToDoughStyleDefinition);

export function getStyleById(id: string): DoughStyleDefinition | undefined {
  return STYLES_DATA.find(s => s.id === id);
}

export function getAllowedFermentationTechniques(style: RecipeStyle, bakeType: BakeType): FermentationTechnique[] {
  if (!style || !bakeType) {
    return [FermentationTechnique.DIRECT];
  }

  const definition = STYLES_DATA.find(s => s.recipeStyle === style);
  if (definition && definition.allowedFermentationTechniques && Array.isArray(definition.allowedFermentationTechniques)) {
    return definition.allowedFermentationTechniques;
  }

  if (bakeType === BakeType.SWEETS_PASTRY) {
    return [FermentationTechnique.CHEMICAL, FermentationTechnique.NO_FERMENT, FermentationTechnique.DIRECT];
  }

  return [
    FermentationTechnique.DIRECT,
    FermentationTechnique.POOLISH,
    FermentationTechnique.BIGA,
    FermentationTechnique.SOURDOUGH
  ];
}
