import { DoughStyleDefinition } from '@/types/styles';

export const STYLES_DATA: DoughStyleDefinition[] = [
  {
    "id": "neapolitan_avpn_classic",
    "name": "Neapolitan AVPN Classic",
    "category": "pizza",
    "origin": {
      "country": "Italy",
      "region": "Campania",
      "period": "18th–19th century; codified 1984"
    },
    "description": "The definitive Verace Pizza Napoletana STG: a soft, elastic, high-hydration dough baked at blistering temperatures (485°C) for 60–90 seconds. Characterized by a raised cornicione, leopard-spotting, and a tender, moist center.",
    "history": "Origins trace to 18th-century Naples street food (lazzaroni culture). Formally codified in 1984 by the Associazione Verace Pizza Napoletana (AVPN) and granted UNESCO Intangible Cultural Heritage status in 2017. The Marinara (1734) and Margherita (1889) remain the canonical benchmarks.",
    "regulatoryNotes": "The AVPN is an Italian certification body that defines strict rules for “Verace Pizza Napoletana,” including flour strength (W 280–320), hydration 58–62%, salt 2.5–3.0%, direct dough only, hand opening, and wood-fired oven (~485°C).",
    "globalPresence": "Popular in Italy, widely adopted in Europe, the US, Brazil, and Japan — especially in pizzerias with true high-temperature wood-fired ovens.",
    "pairings": {
      "canonical": ["San Marzano tomatoes", "fior di latte", "fresh basil", "extra-virgin olive oil", "pecorino romano"],
      "modern": ["buffalo mozzarella", "confit cherry tomatoes", "basil oil", "smoked provola"],
      "regional": ["southern-Italian oregano", "anchovies", "garlic-based marinara"]
    },
    "tags": ["neapolitan", "high-temp", "classic", "wood-fired"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [58, 62.5],
      "salt": [2.5, 3.0],
      "oil": [0, 0],
      "sugar": [0, 0],
      "flourStrength": "W280–320",
      "fermentationSteps": [
        "Mix to 24°C DDT",
        "Bulk ferment 2h at 23°C",
        "Ball and mature 8–24h at 18–21°C"
      ],
      "ovenTemp": [430, 485],
      "recommendedUse": ["Pizza Margherita STG", "Pizza Marinara", "Neapolitan Calzone"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Dense Cornicione → Dough too cold or underproofed → Temper to 18-20°C before baking",
      "Pale Crust → Oven temp < 430°C → Increase floor heat or flame intensity",
      "Tough Texture → Flour too strong (>W320) or low hydration → Use W280-320 and 58-62% hydration"
    ],
    "notes": [
      "Fermentation relies on ambient temperature (20-25°C) for optimal enzymatic activity",
      "Zero fat/sugar formulation demands high heat for Maillard reaction",
      "Hand-slapping technique moves gas to the rim (cornicione)"
    ],
    "references": [
      { "source": "AVPN International Regulations" },
      { "source": "UNESCO Intangible Cultural Heritage" },
      { "source": "Modernist Pizza, 2021" }
    ],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/neapolitan_avpn_classic/hero.webp",
      "dough": "/assets/styles/neapolitan_avpn_classic/dough.webp",
      "crumb": "/assets/styles/neapolitan_avpn_classic/crumb.webp"
    },
    "relatedLearn": ["flour_science", "fermentation_fundamentals"]
  },
  {
    "id": "new_york_slice_shop",
    "name": "New York Slice Shop",
    "category": "pizza",
    "origin": {
      "country": "USA",
      "region": "New York",
      "period": "Early 20th century; post-WW2 evolution"
    },
    "description": "The iconic NYC street slice: a wide, foldable, thin-crust pizza with a crispy bottom and chewy interior. Baked in gas deck ovens for a distinct balance of crunch and pliability.",
    "history": "Evolved from Neapolitan immigrants in early 1900s NYC (Lombardi’s, Totonno’s) adapting to coal ovens and stronger American flour. Post-WWII gas deck ovens defined the modern 'street slice' culture.",
    "globalPresence": "Dominant across the US and widely adopted globally in large cities.",
    "pairings": {
      "canonical": ["Classic NY tomato sauce", "Low-moisture mozzarella", "Pepperoni"],
      "modern": ["Burrata", "Hot honey", "Vodka sauce"],
      "regional": ["White slice (ricotta/garlic)"]
    },
    "tags": ["ny", "deck-oven", "cold-fermentation"],
    "difficulty": "Medium",
    "fermentationType": "cold",
    "technicalProfile": {
      "hydration": [63, 67],
      "salt": [2.3, 2.8],
      "oil": [1, 3],
      "sugar": [1, 2],
      "flourStrength": "12.5–14% protein",
      "fermentationSteps": [
        "Mix to windowpane",
        "Bulk 1h at room temp",
        "Ball and cold ferment 24–72h at 4°C"
      ],
      "ovenTemp": [285, 325],
      "recommendedUse": ["Cheese Slice", "Pepperoni Slice", "White Pie"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Excessive Chewiness → Flour protein too high (>14%) → Blend with AP flour",
      "Lack of Browning → Sugar omitted or oven too cool → Ensure 1-2% sugar and 285°C+ temp",
      "Gummy Layer → Sauce applied too cold or dough underbaked → Temper sauce and extend bake"
    ],
    "notes": [
      "Cold fermentation (24-72h) is critical for flavor development and blistering",
      "Oil (1-3%) adds tenderness and prevents drying in longer bakes",
      "Sugar aids browning in lower-temp deck ovens (285-300°C)"
    ],
    "references": [
      { "source": "Modernist Pizza, 2021" },
      { "source": "Scott Wiener's NY Pizza Archive" },
      { "source": "Pizza Today Historical Articles" }
    ],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/new_york_slice_shop/hero.webp",
      "dough": "/assets/styles/new_york_slice_shop/dough.webp",
      "crumb": "/assets/styles/new_york_slice_shop/crumb.webp"
    },
    "relatedLearn": ["cold_fermentation_science", "gluten_development"]
  },
  {
    "id": "roman_pizza_al_taglio",
    "name": "Roman Pizza al Taglio",
    "category": "pizza",
    "origin": {
      "country": "Italy",
      "region": "Lazio",
      "period": "1970s–1980s"
    },
    "description": "A high-hydration (80%+), long-fermented pan pizza sold by weight. Distinguished by a spectacular open crumb (alveoli), crispy bottom, and light, airy structure.",
    "history": "Invented in Rome (1970s-80s) by bakers like Angelo Iezzi and Gabriele Bonci, revolutionizing traditional pan pizza with high-protein flours, cold fermentation, and high hydration techniques.",
    "globalPresence": "Popular in Rome and widely adopted in artisan bakeries worldwide.",
    "pairings": {
      "canonical": ["Tomato + oregano", "Potatoes + rosemary"],
      "modern": ["Mortadella + pistachio", "Burrata + anchovies"],
      "regional": ["Zucchini blossoms"]
    },
    "tags": ["roman", "high-hydration", "pan-baked"],
    "difficulty": "Hard",
    "fermentationType": "preferment",
    "technicalProfile": {
      "hydration": [75, 90],
      "salt": [2.4, 2.8],
      "oil": [3, 6],
      "sugar": [0, 1],
      "flourStrength": "W320–380",
      "fermentationSteps": [
        "Mix to full gluten development",
        "Bulk 1h then cold ferment 24–48h",
        "Gentle stretch in pan",
        "Final proof 1–2h"
      ],
      "ovenTemp": [250, 300],
      "recommendedUse": ["Rosso (Tomato)", "Bianca (Olive Oil/Salt)", "Potato & Rosemary"],
      "difficulty": "Hard"
    },
    "watchouts": [
      "Flat Crumb → Hydration too low or handling too rough → Maintain 80%+ and handle gently",
      "Sticking to Pan → Insufficient oil or poor pan seasoning → Use blue steel pans with ample oil",
      "Dense Texture → Underdeveloped gluten → Ensure windowpane before bulk"
    ],
    "notes": [
      "Requires strong flour (W320+) to support high water content",
      "Cold fermentation allows enzymatic breakdown for digestibility",
      "Bake on oven floor first to set crust, then finish on rack"
    ],
    "references": [
      { "source": "Pizza a Regola d’Arte, Gabriele Bonci" },
      { "source": "Modernist Pizza, 2021" },
      { "source": "GIP Italian Baking Guild" }
    ],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/roman_pizza_al_taglio/hero.webp",
      "dough": "/assets/styles/roman_pizza_al_taglio/dough.webp",
      "crumb": "/assets/styles/roman_pizza_al_taglio/crumb.webp"
    },
    "relatedLearn": ["high_hydration_mechanics", "preferments_poolish"]
  },
  {
    "id": "detroit_style_classic",
    "name": "Detroit Style - Classic",
    "category": "pizza",
    "origin": {
      "country": "USA",
      "region": "Detroit, Michigan",
      "period": "1946 (Detroit)"
    },
    "description": "A rectangular deep-dish pizza with a thick, airy, focaccia-like crumb and a signature caramelized cheese crown (frico) around the edges.",
    "history": "Born at Buddy’s Rendezvous (1946) in Detroit, baked in blue steel automotive parts pans. The 'frico' edge comes from Wisconsin brick cheese melting against the hot pan walls.",
    "globalPresence": "Iconic in Detroit and widely adopted in the US, Canada, Brazil, and Europe by artisan pizza shops specializing in pan-baked styles.",
    "pairings": {
      "canonical": ["Wisconsin brick cheese", "Tomato stripes"],
      "modern": ["Mozzarella/cheddar blend", "Pepperoni cups"],
      "regional": ["Sausage + pickled peppers"]
    },
    "tags": ["detroit", "pan", "high-hydration"],
    "difficulty": "Medium",
    "fermentationType": "cold",
    "technicalProfile": {
      "hydration": [68, 75],
      "salt": [2.2, 2.8],
      "oil": [1, 3],
      "sugar": [0.5, 2],
      "fermentationSteps": [
        "Mix to moderate development",
        "Bulk 1h",
        "Pan proof 2–4h (press out twice)",
        "Top and bake"
      ],
      "ovenTemp": [250, 300],
      "recommendedUse": ["Classic Red Top", "Pepperoni (under cheese)", "Specialty toppings"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Soggy Center → Dough underproofed or sauce too wet → Extend pan proof and apply sauce last",
      "No Frico Edge → Cheese didn't touch pan or pan not seasoned → Spread cheese to very edge",
      "Dense Crumb → Pan proof too short → Allow dough to fill pan corners naturally"
    ],
    "notes": [
      "Blue steel pans are essential for heat conduction and crust crispness",
      "Sauce is traditionally applied *after* baking or in stripes on top",
      "High hydration (70%+) ensures open crumb despite thickness"
    ],
    "references": [
      { "source": "Modernist Pizza, 2021" },
      { "source": "Buddy’s Pizza Historical Archive" },
      { "source": "Detroit Historical Society" }
    ],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/detroit_style_classic/hero.webp",
      "dough": "/assets/styles/detroit_style_classic/dough.webp",
      "crumb": "/assets/styles/detroit_style_classic/crumb.webp"
    },
    "relatedLearn": ["pan_baking_science", "high_hydration_doughs"]
  },
  {
    "id": "sicilian_grandma_pan",
    "name": "Sicilian / Grandma Pan",
    "category": "pizza",
    "origin": {
      "country": "Italy / USA",
      "region": "Sicily / New York",
      "period": "Early 20th Century (US adaptation)"
    },
    "description": "A rustic, homestyle pan pizza. 'Sicilian' is thick and spongy (sfincione-derived); 'Grandma' is thinner, denser, and garlicky, baked quickly in an oiled sheet pan.",
    "history": "Sicilian immigrants brought 'sfincione' to the US. 'Grandma' style emerged in Long Island (Umerto’s, King Umberto) as a thinner, faster alternative, often using direct dough.",
    "globalPresence": "Very common across New York, the US East Coast, Brazil, and home-baking communities worldwide.",
    "pairings": {
      "canonical": ["Tomato sauce with oregano", "Low-moisture mozzarella"],
      "modern": ["Pepperoni", "Anchovy", "Olives"],
      "regional": ["Sicilian onions + breadcrumbs"]
    },
    "tags": ["sicilian", "grandma", "pan"],
    "difficulty": "Easy",
    "fermentationType": "cold",
    "technicalProfile": {
      "hydration": [68, 80],
      "salt": [2.2, 2.6],
      "oil": [1, 3],
      "sugar": [0.5, 2],
      "fermentationSteps": [
        "Mix direct dough",
        "Bulk 1-2h",
        "Stretch in oiled pan",
        "Short proof 30-60min",
        "Bake"
      ],
      "ovenTemp": [245, 285],
      "recommendedUse": ["Grandma Pie (Garlic/Tomato)", "Sfincione (Onion/Breadcrumb)", "Pepperoni Square"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Dough Retraction → Gluten too tight → Rest 20 mins before stretching again",
      "Burnt Bottom → Oven floor too hot or oil smoke point low → Raise rack or use higher smoke point oil",
      "Dry Crumb → Overbaked or low hydration → Check at 15 mins, keep hydration >65%"
    ],
    "notes": [
      "Grandma style uses a shorter proof than Sicilian for a denser bite",
      "Generous olive oil in the pan fries the bottom crust",
      "Sauce often goes *over* the cheese in some variations"
    ],
    "references": [
      { "source": "Modernist Pizza, 2021" },
      { "source": "Sfincione Palermo Archives" },
      { "source": "NY Regional Pizza Studies (Wiener, 2018)" }
    ],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/sicilian_grandma_pan/hero.webp",
      "dough": "/assets/styles/sicilian_grandma_pan/dough.webp",
      "crumb": "/assets/styles/sicilian_grandma_pan/crumb.webp"
    },
    "relatedLearn": ["pan_fermentation", "oil_interaction_crust"]
  },
  {
    "id": "brazilian_gas_deck",
    "name": "Brazilian Pizzeria Gas-Deck",
    "category": "pizza",
    "origin": {
      "country": "Brazil",
      "region": "São Paulo",
      "period": "Late 19th Century; Modernized 1980s"
    },
    "description": "Brazil’s definitive pizza style: a medium-hydration dough (58-62%) baked in gas-fired deck ovens. Known for its sturdy structure to support massive toppings (Catupiry, chicken, calabresa) and a slightly thicker, biscuit-like crust.",
    "history": "Developed in São Paulo by Italian immigrants (late 19th century) who adapted to local ingredients and a culture of abundance. The 'Paulistana' pizza evolved into a distinct, topping-heavy genre baked in high-capacity gas ovens.",
    "globalPresence": "Extremely common in Brazil, especially São Paulo. Increasingly present in Latin America and Japanese-Brazilian communities worldwide.",
    "pairings": {
      "canonical": ["Catupiry", "Calabresa + cebola"],
      "modern": ["Frango com catupiry", "Portuguesa"],
      "regional": ["Margherita brasileira"]
    },
    "tags": ["brazil", "gas-deck", "medium-hydration"],
    "difficulty": "Easy",
    "fermentationType": "cold",
    "technicalProfile": {
      "hydration": [58, 65],
      "salt": [2.5, 3.0],
      "oil": [1, 3],
      "sugar": [0, 1.5],
      "fermentationSteps": [
        "Mix to smooth dough",
        "Bulk 1h",
        "Ball and cold ferment 24–48h",
        "Open with rolling pin or hand"
      ],
      "ovenTemp": [300, 340],
      "recommendedUse": ["Portuguesa (Ham/Egg/Onion)", "Frango com Catupiry", "Calabresa (Cured Sausage)"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Soggy Center → Toppings too heavy/wet → Pre-cook toppings and use low-moisture cheese",
      "Pale Crust → Sugar omitted in gas oven → Add 1-2% sugar for browning",
      "Dough Snap-Back → Gluten too tight → Rest balls at room temp 1-2h before opening"
    ],
    "notes": [
      "Catupiry (processed cheese) is often piped in a lattice pattern to contain toppings",
      "Gas ovens provide consistent, moderate heat (300-340°C) ideal for heavy toppings",
      "Often served with a knife and fork due to topping weight"
    ],
    "references": [
      { "source": "Modernist Pizza, 2021" },
      { "source": "ABIP — Brazilian Pizza Industry Association" },
      { "source": "USP Italian Immigration Archives" }
    ],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/brazilian_gas_deck/hero.webp",
      "dough": "/assets/styles/brazilian_gas_deck/dough.webp",
      "crumb": "/assets/styles/brazilian_gas_deck/crumb.webp"
    },
    "relatedLearn": ["medium_hydration_doughs", "gas_deck_oven_science"]
  },
  {
    "id": "ciabatta",
    "name": "Ciabatta",
    "category": "bread",
    "origin": {
      "country": "Italy",
      "region": "Veneto",
      "period": "1982 (Veneto, Italy)"
    },
    "description": "A high-hydration Italian slipper bread with a thin, crispy crust and a wild, open crumb. Created to compete with the French baguette, it relies on a wet dough and careful handling.",
    "history": "Invented in 1982 by Arnaldo Cavallari in Adria, Veneto. He sought a commercially viable Italian alternative to the baguette, using high-protein flour and high hydration (70%+) to create the 'Ciabatta Polesana'.",
    "globalPresence": "Most common in Italy, Europe-wide bakery chains, global specialty bakeries, and cafe sandwiches.",
    "pairings": {
      "canonical": ["Olive oil", "Mortadella"],
      "modern": ["Prosciutto", "Soft cheeses"],
      "regional": ["Grilled vegetables"]
    },
    "tags": ["italian", "high_hydration", "biga", "open_crumb"],
    "difficulty": "Hard",
    "fermentationType": "preferment",
    "technicalProfile": {
      "hydration": [72, 85],
      "salt": [1.8, 2.2],
      "oil": [0, 4],
      "sugar": [0, 1],
      "cocoa": [0, 0],
      "flourStrength": "W280-W340",
      "fermentationSteps": [
        "Prepare Biga (12-16h)",
        "Mix to full development",
        "Bulk 2-3h with coil folds",
        "Divide and shape gently",
        "Proof 45m"
      ],
      "ovenTemp": [230, 250],
      "recommendedUse": ["Panini", "Table Bread", "Bruschetta"],
      "difficulty": "Hard"
    },
    "watchouts": [
      "Flat Loaf → Overproofing or weak flour → Use W320+ flour and watch proof closely",
      "Dense Crumb → Degassing during shaping → Handle like a soap bubble; do not press",
      "Pale Crust → Lack of steam → Steam oven heavily for first 10 mins"
    ],
    "notes": [
      "Biga preferment (40-50% of flour) provides strength and complex aroma",
      "High hydration (75-85%) is essential for the signature alveoli",
      "Inversion during loading distributes gas bubbles evenly"
    ],
    "references": [{ "source": "Corriere della Sera, 1997" }, { "source": "EFIC, 2004" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/ciabatta/hero.webp",
      "dough": "/assets/styles/ciabatta/dough.webp",
      "crumb": "/assets/styles/ciabatta/crumb.webp"
    },
    "relatedLearn": ["hydration_mastery", "italian_preferments", "open_crumb_science"]
  },
  {
    "id": "focaccia_genovese",
    "name": "Focaccia Genovese",
    "category": "flatbread",
    "origin": {
      "country": "Italy",
      "region": "Liguria",
      "period": "Medieval; Standardized 19th Century"
    },
    "description": "The classic Focaccia alla Genovese: a flat, olive-oil-saturated bread with a crispy, golden surface and a soft, airy interior. Distinguished by its signature dimples (omphalos) filled with brine.",
    "history": "Ancient Ligurian origins, refined in Genoa's port bakeries. The 'Fugassa' was a morning staple for dockworkers, providing cheap calories and salt. Protected by the 'Consorzio della Focaccia Genovese'.",
    "globalPresence": "Most common in northern Italy, Ligurian coast bakeries, Italian diaspora cities, and global artisanal bakeries.",
    "pairings": {
      "canonical": ["Pesto", "Olives"],
      "modern": ["Tomatoes", "Cheeses"],
      "regional": ["Charcuterie"]
    },
    "tags": ["italian", "flatbread", "oil_rich", "liguria"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [60, 75],
      "salt": [2.2, 2.8],
      "oil": [8, 15],
      "sugar": [0, 3],
      "cocoa": [0, 0],
      "flourStrength": "W240-W300",
      "fermentationSteps": [
        "Mix to medium development",
        "Bulk 1.5h",
        "Roll out in pan",
        "Proof 45m",
        "Dimple and brine",
        "Final proof 45m"
      ],
      "ovenTemp": [230, 245],
      "recommendedUse": ["Breakfast (dipped in cappuccino)", "Snack", "Sandwich base"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Dense Crumb → Underproofed before baking → Ensure dough is puffy before dimpling",
      "Dry Surface → Insufficient brine/oil → Emulsify oil and water vigorously before pouring",
      "Pale Bottom → Pan too cold → Bake on bottom rack or stone"
    ],
    "notes": [
      "The brine (salamoia) prevents the crust from hardening and keeps it soft",
      "Dimpling with fingertips creates wells for the oil/brine emulsion",
      "Traditionally eaten upside down to taste the salt first"
    ],
    "references": [{ "source": "Slow Food Italy" }, { "source": "Montanari, 1998" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/focaccia_genovese/hero.webp",
      "dough": "/assets/styles/focaccia_genovese/dough.webp",
      "crumb": "/assets/styles/focaccia_genovese/crumb.webp"
    },
    "relatedLearn": ["oil_in_dough_science", "regional_italian_flatbreads", "gluten_development_high_oil"]
  },
  {
    "id": "pane_pugliese",
    "name": "Pane Pugliese",
    "category": "bread",
    "origin": {
      "country": "Italy",
      "region": "Puglia",
      "period": "Ancient; PDO status 2003"
    },
    "description": "A rustic sourdough from Puglia made with durum wheat (semola rimacinata). Characterized by a thick, dark crust, a yellow, chewy crumb, and high hydration.",
    "history": "Rooted in the 'granary of Italy' (Puglia). Historically baked in massive communal wood-fired ovens. Closely related to the PDO-protected Pane di Altamura (documented since 37 BC).",
    "globalPresence": "Most common in southern Italy, specialty durum-wheat bakeries, and global artisan bakeries focusing on heritage grains.",
    "pairings": {
      "canonical": ["Olive oil", "Grilled vegetables"],
      "modern": ["Seafood spreads", "Cured meats"],
      "regional": []
    },
    "tags": ["italian", "durum", "levain", "rustic"],
    "difficulty": "Medium",
    "fermentationType": "levain",
    "technicalProfile": {
      "hydration": [65, 80],
      "salt": [1.8, 2.3],
      "oil": [0, 2],
      "sugar": [0, 1],
      "cocoa": [0, 0],
      "flourStrength": "durum medium strength",
      "fermentationSteps": [
        "Build stiff durum levain",
        "Mix to development",
        "Bulk 3-4h",
        "Shape round",
        "Proof 1.5-2h",
        "Bake with steam"
      ],
      "ovenTemp": [230, 250],
      "recommendedUse": ["Bruschetta", "Soup accompaniment", "Table bread"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Dense Crumb → Durum gluten is short → Do not overmix; use folds for strength",
      "Pale Crust → Oven too cool → Bake at 250°C initially to caramelize",
      "Flat Loaf → Overhydration of durum → Keep hydration <75% if flour is not strong"
    ],
    "notes": [
      "Durum wheat (Triticum turgidum) has high protein but different gluten quality than soft wheat",
      "Yellow crumb comes from carotenoids in the semolina",
      "Thick crust preserves the bread for up to two weeks"
    ],
    "references": [{ "source": "Cappelli, 2002" }, { "source": "Slow Food Italy" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/pane_pugliese/hero.webp",
      "dough": "/assets/styles/pane_pugliese/dough.webp",
      "crumb": "/assets/styles/pane_pugliese/crumb.webp"
    },
    "relatedLearn": ["durum_wheat_science", "crust_development_steaming", "levain_fermentation_profiles"]
  },
  {
    "id": "baguette_tradition",
    "name": "Baguette Tradition Française",
    "category": "bread",
    "origin": {
      "country": "France",
      "region": "Paris",
      "period": "1920s; Protected 1993"
    },
    "description": "The gold standard of French baking: a lean, long loaf with a creamy, open crumb and a crispy, singing crust. Strictly regulated by the 1993 'Décret Pain' to contain only flour, water, salt, and yeast/levain.",
    "history": "While long breads existed earlier, the modern baguette crystallized in 1920s Paris. The 1993 Decree protected artisanal methods against industrialization, reviving the 'Tradition' style.",
    "globalPresence": "Most common in French bakeries, artisan bread shops worldwide, and specialty cafes.",
    "pairings": {
      "canonical": ["Butter", "Jams"],
      "modern": ["Cheeses", "Charcuterie"],
      "regional": []
    },
    "tags": ["french", "classic", "steam_bake", "lean_dough"],
    "difficulty": "Hard",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [65, 75],
      "salt": [1.8, 2.2],
      "oil": [0, 0],
      "sugar": [0, 1],
      "cocoa": [0, 0],
      "flourStrength": "T55 W180-W240",
      "fermentationSteps": [
        "Autolyse 30m",
        "Mix to windowpane",
        "Bulk 3h with folds",
        "Divide and preshape",
        "Shape cylinders",
        "Proof 1h",
        "Score and bake"
      ],
      "ovenTemp": [240, 260],
      "recommendedUse": ["Sandwiches (Jambon-Beurre)", "Table Bread", "Tartines"],
      "difficulty": "Hard"
    },
    "watchouts": [
      "Lack of 'Ears' (Grigne) → Poor scoring angle or no steam → Score at 45° and steam heavily",
      "Tight Crumb → Overmixing or overhandling → Mix on low speed, shape gently",
      "Gummy Crumb → Underbaked → Bake to deep golden brown (Maillard reaction)"
    ],
    "notes": [
      "Poolish or cold bulk fermentation enhances flavor in this lean dough",
      "Steam is non-negotiable for the thin, crispy crust",
      "Scoring (lame) controls expansion and creates the signature look"
    ],
    "references": [{ "source": "Décret n°93-1074" }, { "source": "Kaplan, 2006" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/baguette_tradition/hero.webp",
      "dough": "/assets/styles/baguette_tradition/dough.webp",
      "crumb": "/assets/styles/baguette_tradition/crumb.webp"
    },
    "relatedLearn": ["steam_science_crust", "french_mixing_techniques", "scoring_theory"]
  },
  {
    "id": "pain_de_campagne",
    "name": "Pain de Campagne",
    "category": "bread",
    "origin": {
      "country": "France",
      "region": "Various regions",
      "period": "Pre-industrial; Revived 1970s"
    },
    "description": "The quintessential French country bread: a large, rustic sourdough loaf made with a blend of wheat and rye or whole wheat flours. Known for its thick, protective crust and slightly acidic, complex crumb.",
    "history": "Historically the 'bread of the people' in rural France, baked in communal village ovens (fours banaux) once a week. The large size (1.5kg+) and thick crust ensured preservation.",
    "globalPresence": "Most common in French countryside bakeries, US/European artisan bakeries, and sourdough-focused shops.",
    "pairings": {
      "canonical": ["Butter", "Cheese"],
      "modern": ["Charcuterie", "Soups"],
      "regional": []
    },
    "tags": ["french", "rustic", "mixed_grain", "levain"],
    "difficulty": "Medium",
    "fermentationType": "levain",
    "technicalProfile": {
      "hydration": [68, 78],
      "salt": [1.8, 2.2],
      "oil": [0, 0],
      "sugar": [0, 1],
      "cocoa": [0, 0],
      "flourStrength": "varied (wheat + whole wheat + rye)",
      "fermentationSteps": [
        "Build liquid or stiff levain",
        "Mix flours and water (autolyse)",
        "Add salt/levain",
        "Bulk 3-4h",
        "Shape boule/batard",
        "Proof 2h",
        "Bake"
      ],
      "ovenTemp": [230, 250],
      "recommendedUse": ["Tartines", "Cheese Boards", "Soups"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Dense Crumb → Levain too weak or overmixed rye → Ensure active levain and gentle mixing",
      "Pale Crust → Oven not hot enough or no steam → Bake at 250°C falling to 230°C",
      "Excessive Sourness → Overfermentation → Reduce bulk time or levain percentage"
    ],
    "notes": [
      "Rye flour (5-15%) adds enzymatic activity and moisture retention",
      "Long fermentation breaks down phytates, improving mineral absorption",
      "Scoring is often a simple square or 'polka' pattern"
    ],
    "references": [{ "source": "Calvel, 1990" }, { "source": "INRA 2001" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/pain_de_campagne/hero.webp",
      "dough": "/assets/styles/pain_de_campagne/dough.webp",
      "crumb": "/assets/styles/pain_de_campagne/crumb.webp"
    },
    "relatedLearn": ["working_with_mixed_flours", "levain_acidity_control", "crust_and_caramelization"]
  },
  {
    "id": "vienna_bread",
    "name": "Vienna Bread (Pain Viennois)",
    "category": "enriched_bread",
    "origin": {
      "country": "Austria",
      "region": "Vienna",
      "period": "1840s (Paris/Vienna)"
    },
    "description": "A bridge between bread and pastry: a soft, golden, slightly sweet loaf enriched with milk, sugar, and a touch of fat. Famous for its fine, cotton-like crumb and chevron scoring.",
    "history": "Introduced to Paris in roughly 1840 by Austrian August Zang (Boulangerie Viennoise). It revolutionized French baking by introducing steam ovens and high-quality Hungarian flour, paving the way for the baguette.",
    "globalPresence": "Most common in Austrian bakeries, French bakeries with viennoiserie programs, school cafeterias, and sandwich bread lines.",
    "pairings": {
      "canonical": ["Breakfast spreads", "Jams"],
      "modern": ["Chocolate", "Ham and cheese"],
      "regional": []
    },
    "tags": ["austrian", "enriched", "soft", "viennoiserie"],
    "difficulty": "Easy",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [60, 70],
      "salt": [1.6, 2.0],
      "oil": [5, 8],
      "sugar": [5, 12],
      "cocoa": [0, 0],
      "flourStrength": "medium",
      "fermentationSteps": [
        "Mix to intensive development",
        "Bulk 1h",
        "Divide and preshape",
        "Shape cylinders",
        "Proof 1.5h",
        "Score chevron",
        "Bake"
      ],
      "ovenTemp": [180, 200],
      "recommendedUse": ["Breakfast Toast", "Sandwiches (Viennois)", "Pain Perdu"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Wrinkled Crust → Cooling too fast or underbaked → Bake fully and cool in draft-free area",
      "Bursting Sides → Underproofed or poor shaping → Ensure seam is sealed and proof fully",
      "Dry Crumb → Overbaked → Enriched doughs dry out fast; pull when golden"
    ],
    "notes": [
      "Steam is critical for the glossy, thin crust typical of Vienna bread",
      "The 'intensive mix' method creates the signature tight, white crumb",
      "Often used as the base for 'bridge rolls' or fancy sandwiches"
    ],
    "references": [{ "source": "Le Moniteur de la Boulangerie, 1850" }, { "source": "Kaplan, 2006" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/vienna_bread/hero.webp",
      "dough": "/assets/styles/vienna_bread/dough.webp",
      "crumb": "/assets/styles/vienna_bread/crumb.webp"
    },
    "relatedLearn": ["enriched_dough_fundamentals", "sugar_and_browning_reactions", "viennoiserie_origins"]
  },
  {
    "id": "brioche_francaise",
    "name": "Brioche Française AOP",
    "category": "enriched_bread",
    "origin": {
      "country": "France",
      "region": "Normandy",
      "period": "17th Century (Normandy)"
    },
    "description": "The crown jewel of enriched breads: a rich, tender crumb containing over 50% butter to flour weight. A true Brioche Mousseline is ethereal, melting in the mouth, with a deep golden crust.",
    "history": "Originating in Normandy (famous for butter), brioche evolved from a festive bread to a daily luxury. The 'brioche à tête' shape is iconic. 'AOP' status protects regional butter quality.",
    "globalPresence": "Most common in French boulangeries, pâtisseries worldwide, brunch menus and premium bakeries.",
    "pairings": {
      "canonical": ["Jam", "Chocolate spreads"],
      "modern": ["Coffee", "Custards"],
      "regional": []
    },
    "tags": ["french", "enriched", "butter", "eggs"],
    "difficulty": "Expert",
    "fermentationType": "cold",
    "technicalProfile": {
      "hydration": [55, 65],
      "salt": [1.5, 2.0],
      "oil": [45, 60],
      "sugar": [10, 20],
      "cocoa": [0, 0],
      "flourStrength": "W320-W380",
      "fermentationSteps": [
        "Intensive mix (cold ingredients)",
        "Add butter slowly",
        "Bulk 2h",
        "Cold retard 12h",
        "Shape cold",
        "Proof 2.5h",
        "Egg wash and bake"
      ],
      "ovenTemp": [170, 185],
      "recommendedUse": ["Burger Buns", "French Toast", "Foie Gras accompaniment"],
      "difficulty": "Expert"
    },
    "watchouts": [
      "Butter Leaking → Dough got too hot (>24°C) during mix → Chill bowl and ingredients",
      "Dense Texture → Underproofed → Enriched doughs need long final proof",
      "Collapsing → Overproofed or weak flour → Use W350+ flour"
    ],
    "notes": [
      "Cold fermentation is mandatory to handle the high fat content",
      "Osmotolerant yeast is recommended due to high sugar levels",
      "Emulsification of butter is the key technical challenge"
    ],
    "references": [{ "source": "Calvel, 1990" }, { "source": "Larousse Gastronomique, 2009" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/brioche_francaise/hero.webp",
      "dough": "/assets/styles/brioche_francaise/dough.webp",
      "crumb": "/assets/styles/brioche_francaise/crumb.webp"
    },
    "relatedLearn": ["emulsification_enriched_doughs", "butter_temperature_control", "dough_fat_saturation"]
  },
  {
    "id": "challah",
    "name": "Challah (Ashkenazi)",
    "category": "enriched_bread",
    "origin": {
      "country": "Central/Eastern Europe",
      "region": "Ashkenazi communities",
      "period": "15th Century (Germany/Poland)"
    },
    "description": "A ceremonial braided bread enriched with eggs and oil, featuring a soft, shreddable crumb and a mahogany-colored crust. Central to the Jewish Sabbath (Shabbat) and holidays.",
    "history": "Ashkenazi tradition (Central/Eastern Europe). The braid symbolizes love and unity. The name 'challah' refers to the biblical portion of dough set aside for the Kohen.",
    "globalPresence": "Most common in Jewish bakeries, Friday Sabbath meals, holiday tables, and global artisanal bakeries.",
    "pairings": {
      "canonical": ["Honey", "Jam"],
      "modern": ["Dips", "Breakfast spreads"],
      "regional": []
    },
    "tags": ["jewish", "braided", "enriched", "holiday"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [55, 65],
      "salt": [1.8, 2.2],
      "oil": [5, 10],
      "sugar": [4, 10],
      "cocoa": [0, 0],
      "flourStrength": "medium",
      "fermentationSteps": [
        "Mix to windowpane",
        "Bulk 2h (punch down once)",
        "Divide and strand",
        "Braid",
        "Proof 1.5-2h",
        "Double egg wash",
        "Bake"
      ],
      "ovenTemp": [170, 185],
      "recommendedUse": ["Shabbat Dinner", "French Toast", "Sandwiches"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Braid Disappears → Overproofed or dough too wet → Watch proof and keep hydration moderate",
      "Raw Center → Oven too hot → Bake at 170-180°C and tent with foil if browning too fast",
      "Cracked Braid → Underproofed → Allow to wobble before baking"
    ],
    "notes": [
      "Oil (instead of butter) keeps it Parve (dairy-free) for meat meals",
      "Double egg wash (one before proof, one after) gives the deepest shine",
      "3, 4, or 6 strand braids are most common"
    ],
    "references": [{ "source": "Marks, 2010" }, { "source": "Jewish Virtual Library" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/challah/hero.webp",
      "dough": "/assets/styles/challah/dough.webp",
      "crumb": "/assets/styles/challah/crumb.webp"
    },
    "relatedLearn": ["egg_functionality_dough", "braiding_techniques_101", "sugars_browning_reactions"]
  },
  {
    "id": "milk_bread_shokupan",
    "name": "Milk Bread (Shokupan)",
    "category": "enriched_bread",
    "origin": {
      "country": "Japan",
      "region": "National",
      "period": "Post-1945 (Japan)"
    },
    "description": "Japan’s 'eating bread': an impossibly fluffy, white, slightly sweet loaf with a mochi-like bounce. Made using the Tangzhong or Yudane method to gelatinize starches.",
    "history": "Post-WWII Japan saw a rise in wheat consumption. Bakers adapted Western bread to Japanese tastes (soft, moist, sweet). The 'Shokupan' (eating bread) became a daily staple.",
    "globalPresence": "Most common in Japanese supermarkets, Asian bakeries worldwide, toast bars, and cafe breakfast menus.",
    "pairings": {
      "canonical": ["Toast spreads", "Sandwiches"],
      "modern": ["Fruit creams", "Matcha butter"],
      "regional": []
    },
    "tags": ["japanese", "milk", "soft", "tangzhong"],
    "difficulty": "Easy",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [65, 75],
      "salt": [1.5, 2.0],
      "oil": [5, 12],
      "sugar": [8, 15],
      "cocoa": [0, 0],
      "flourStrength": "medium",
      "fermentationSteps": [
        "Cook Tangzhong (65°C)",
        "Cool",
        "Mix all ingredients",
        "Bulk 1h",
        "Divide and ball",
        "Rest 20m",
        "Shape and pan",
        "Proof to rim",
        "Bake"
      ],
      "ovenTemp": [170, 185],
      "recommendedUse": ["Thick Toast", "Fruit Sandwiches (Sando)", "Breakfast"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Cave-in Sides → Underbaked or weak structure → Bake fully to set structure",
      "Gummy Streak → Tangzhong not incorporated or dough underbaked → Mix thoroughly",
      "Low Volume → Dead yeast or poor shaping → Check yeast activity"
    ],
    "notes": [
      "Tangzhong (water roux) locks in moisture, extending shelf life for days",
      "Typically baked in a Pullman tin for a perfect square slice",
      "High percentage of milk/cream adds richness and whiteness"
    ],
    "references": [{ "source": "Katagawa, 1998" }, { "source": "Japan Flour Milling Assoc., 2005" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/milk_bread_shokupan/hero.webp",
      "dough": "/assets/styles/milk_bread_shokupan/dough.webp",
      "crumb": "/assets/styles/milk_bread_shokupan/crumb.webp"
    },
    "relatedLearn": ["tangzhong_yudane_methods", "milk_proteins_dough", "soft_crumb_engineering"]
  },
  {
    "id": "sourdough_country",
    "name": "Sourdough Country Loaf (Tartine Style)",
    "category": "bread",
    "origin": {
      "country": "United States",
      "region": "California",
      "period": "2000s (California)"
    },
    "description": "The modern Californian sourdough: a high-hydration (75-85%) loaf with a dark, caramelized crust and a wild, custardy open crumb. Relies on a young, sweet leaven and gentle handling.",
    "history": "Popularized by Chad Robertson (Tartine Bakery, San Francisco) in the early 2000s. It shifted the global artisan standard towards wetter doughs, milder acidity, and 'ear' development.",
    "globalPresence": "Most common in artisan bakeries, sourdough-focused cafes, and home bakers worldwide.",
    "pairings": {
      "canonical": ["Butter", "Jams"],
      "modern": ["Cheeses", "Soups"],
      "regional": ["Eggs"]
    },
    "tags": ["sourdough", "high_hydration", "modern", "artisan"],
    "difficulty": "Hard",
    "fermentationType": "levain",
    "technicalProfile": {
      "hydration": [70, 85],
      "salt": [1.8, 2.2],
      "oil": [0, 0],
      "sugar": [0, 1],
      "cocoa": [0, 0],
      "flourStrength": "W280-W350",
      "fermentationSteps": [
        "Build young levain (3-4h)",
        "Autolyse 40m",
        "Bulk 4h with folds",
        "Shape",
        "Cold retard 12h",
        "Bake in Dutch oven"
      ],
      "ovenTemp": [230, 250],
      "recommendedUse": ["Avocado Toast", "Table Bread", "Grilled Cheese"],
      "difficulty": "Hard"
    },
    "watchouts": [
      "Flat Loaf → Overfermented or weak flour → Reduce bulk time or use higher protein flour",
      "Gummy Crumb → Underbaked or cut while hot → Bake to 98°C internal and cool 2h",
      "No Ear → Scoring angle too shallow or no steam → Score at 30° and use Dutch oven"
    ],
    "notes": [
      "Young levain (used before peak collapse) creates a milky, less acetic flavor",
      "High hydration requires coil folds to build structure without degassing",
      "Retarding in bannetons creates the skin needed for scoring"
    ],
    "references": [{ "source": "Tartine Bread, 2010" }, { "source": "Modernist Bread, 2017" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/sourdough_country/hero.webp",
      "dough": "/assets/styles/sourdough_country/dough.webp",
      "crumb": "/assets/styles/sourdough_country/crumb.webp"
    },
    "relatedLearn": ["sourdough_microbiology", "high_hydration_handling", "baking_in_dutch_oven"]
  },
  {
    "id": "pain_au_levain",
    "name": "Pain au Levain (French)",
    "category": "bread",
    "origin": {
      "country": "France",
      "region": "National",
      "period": "Ancient; Standardized 18th Century"
    },
    "description": "The traditional French sourdough: a balanced, medium-hydration loaf with a nutty flavor, distinct acidity, and a tighter crumb than its modern Californian cousin.",
    "history": "The standard bread of France before the 19th-century yeast revolution. Revived by Lionel Poilâne and others who championed stone-milled flours and wood-fired baking.",
    "globalPresence": "Most common in French boulangeries, traditional markets, and global artisan bakeries.",
    "pairings": {
      "canonical": ["Cheese", "Charcuterie"],
      "modern": ["Avocado", "Salmon"],
      "regional": []
    },
    "tags": ["french", "levain", "classic", "stone_milled"],
    "difficulty": "Medium",
    "fermentationType": "levain",
    "technicalProfile": {
      "hydration": [65, 72],
      "salt": [1.8, 2.2],
      "oil": [0, 0],
      "sugar": [0, 0],
      "cocoa": [0, 0],
      "flourStrength": "T65/T80 W240-W280",
      "fermentationSteps": [
        "Build stiff or liquid levain",
        "Mix to development",
        "Bulk 3-5h",
        "Shape batard/boule",
        "Proof 2-3h (ambient)",
        "Bake"
      ],
      "ovenTemp": [230, 250],
      "recommendedUse": ["Cheese & Charcuterie", "Soup", "Daily Bread"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Excessive Sourness → Levain too old or warm bulk → Use young levain and cooler bulk temp",
      "Dense Crumb → Underproofed → Extend final proof until finger dent springs back slowly",
      "Pale Crust → Oven not hot enough → Pre-heat stone for 1h at 250°C"
    ],
    "notes": [
      "Often uses T80 (high extraction) flour for more mineral flavor",
      "Stiff levain promotes acetic acid (vinegary); liquid levain promotes lactic acid (milky)",
      "Scoring is functional to direct oven spring"
    ],
    "references": [{ "source": "Calvel, 1990" }, { "source": "Poilâne, 2000" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/pain_au_levain/hero.webp",
      "dough": "/assets/styles/pain_au_levain/dough.webp",
      "crumb": "/assets/styles/pain_au_levain/crumb.webp"
    },
    "relatedLearn": ["french_levain_methods", "flour_extraction_rates", "scoring_patterns"]
  },
  {
    "id": "bauernbrot",
    "name": "German Bauernbrot",
    "category": "bread",
    "origin": {
      "country": "Germany",
      "region": "National",
      "period": "Medieval Germany"
    },
    "description": "The 'Farmer's Bread' of Germany: a dense, aromatic rye-wheat sourdough (mischbrot) seasoned with bread spices (Kümmel, anise, fennel). Known for its shelf life and hearty texture.",
    "history": "Germany's rye-growing climate necessitated rye-wheat blends. Sourdough (Sauerteig) was essential to acidify the rye and prevent starch attack (gumminess). A staple of the 'Abendbrot' meal.",
    "globalPresence": "Most common in German bakeries (Bäckerei), supermarkets, and delis worldwide.",
    "pairings": {
      "canonical": ["Butter", "Cold cuts"],
      "modern": ["Obatzda", "Pickles"],
      "regional": []
    },
    "tags": ["german", "rye", "sourdough", "spiced"],
    "difficulty": "Medium",
    "fermentationType": "levain",
    "technicalProfile": {
      "hydration": [70, 80],
      "salt": [1.8, 2.2],
      "oil": [0, 0],
      "sugar": [0, 1],
      "cocoa": [0, 0],
      "flourStrength": "Rye/Wheat Blend",
      "fermentationSteps": [
        "Build rye sour (16h)",
        "Mix dough (short mix)",
        "Bulk 1h",
        "Shape round",
        "Proof in banneton",
        "Bake with falling heat"
      ],
      "ovenTemp": [230, 250],
      "recommendedUse": ["Wurst & Cheese", "Butter & Chives", "Open-faced Sandwiches"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Sticky Crumb (Starch Attack) → Insufficient acidity → Ensure sourdough is mature (pH < 4.0)",
      "Flying Crust → Underproofed or oven too hot → Proof fully and dock the loaf",
      "Flat Loaf → Overmixed rye → Rye has no gluten to develop; mix only to combine"
    ],
    "notes": [
      "Rye relies on pentosans, not gluten, for structure",
      "Acidification is critical to inhibit amylase enzymes in rye",
      "Bread spices aid digestion of the dense grain"
    ],
    "references": [{ "source": "German Bread Institute" }, { "source": "Hamelman, 2004" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/bauernbrot/hero.webp",
      "dough": "/assets/styles/bauernbrot/dough.webp",
      "crumb": "/assets/styles/bauernbrot/crumb.webp"
    },
    "relatedLearn": ["rye_chemistry", "sauerteig_management", "bread_spices"]
  },
  {
    "id": "pita_levantine",
    "name": "Pita Levantine",
    "category": "flatbread",
    "origin": {
      "country": "Levant",
      "region": "Middle East",
      "period": "Ancient (Levant)"
    },
    "description": "The iconic pocket bread of the Levant: a soft, round flatbread that puffs violently in a high-heat oven, creating a hollow center perfect for stuffing.",
    "history": "One of the world's oldest breads, originating in the Fertile Crescent. The 'pocket' is a result of steam pressure separating the top and bottom crusts in a flash-bake scenario.",
    "globalPresence": "Ubiquitous in the Middle East, Mediterranean, and global street food scenes.",
    "pairings": {
      "canonical": ["Hummus", "Falafel"],
      "modern": ["Shawarma", "Grilled meats"],
      "regional": []
    },
    "tags": ["levantine", "flatbread", "pocket", "high-temp"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [60, 65],
      "salt": [1.5, 2.0],
      "oil": [0, 2],
      "sugar": [0, 1],
      "cocoa": [0, 0],
      "flourStrength": "medium",
      "fermentationSteps": [
        "Mix to smooth dough",
        "Bulk 1h",
        "Divide and ball",
        "Rest 20m",
        "Roll thin",
        "Proof 15m",
        "Bake at max temp"
      ],
      "ovenTemp": [250, 300],
      "recommendedUse": ["Falafel Sandwich", "Hummus Dip", "Shawarma"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "No Pocket → Oven too cool or rolled too thick → Maximize heat (300°C+) and roll to 3-5mm",
      "Cracker Texture → Overbaked → Bake only 2-3 mins until puffed",
      "Tearing → Dough too dry → Maintain 60-65% hydration"
    ],
    "notes": [
      "High heat (350°C+) is non-negotiable for the 'pop'",
      "Resting after rolling relaxes gluten to allow expansion",
      "Stacking hot pitas in a cloth keeps them soft"
    ],
    "references": [{ "source": "Claudia Roden, 1968" }, { "source": "Anissa Helou, 2018" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/pita_levantine/hero.webp",
      "dough": "/assets/styles/pita_levantine/dough.webp",
      "crumb": "/assets/styles/pita_levantine/crumb.webp"
    },
    "relatedLearn": ["pocket_formation_science", "high_temperature_baking_surfaces"]
  },
  {
    "id": "naan_indian",
    "name": "Naan (Indian Tandoor Bread)",
    "category": "flatbread",
    "origin": {
      "country": "India",
      "region": "North India",
      "period": "Mughal Era (16th Century)"
    },
    "description": "A leavened, tear-drop shaped flatbread baked on the walls of a clay tandoor oven. Enriched with yogurt and ghee, it has a smoky flavor, crispy bubbles, and a soft, chewy interior.",
    "history": "Introduced to India by the Mughals (Persian influence). Traditionally a delicacy of the royal court due to the need for refined flour (maida) and a tandoor.",
    "globalPresence": "Iconic in Indian restaurants worldwide, though often made with yeast instead of traditional sourdough/yogurt starters.",
    "pairings": {
      "canonical": ["Curries", "Kebabs"],
      "modern": ["Pizza base", "Wraps"],
      "regional": []
    },
    "tags": ["indian", "flatbread", "tandoor", "enriched"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [60, 68],
      "salt": [1.5, 2.0],
      "oil": [5, 8],
      "sugar": [2, 6],
      "cocoa": [0, 0],
      "flourStrength": "medium",
      "fermentationSteps": [
        "Mix with yogurt/yeast",
        "Bulk 2-4h",
        "Ball and rest",
        "Stretch teardrop",
        "Slap onto tandoor wall (or stone)",
        "Brush ghee"
      ],
      "ovenTemp": [350, 450],
      "recommendedUse": ["Curry Scoop", "Kebabs", "Butter Chicken"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Hard Texture → Overbaked or low heat → Tandoor reaches 400°C; mimic with max oven heat/broiler",
      "No Bubbles → Dead yeast or rolled flat → Stretch by hand to preserve gas",
      "Pale Color → No direct heat → Use broiler/grill for char"
    ],
    "notes": [
      "Yogurt tenderizes the gluten and adds a slight tang",
      "The teardrop shape comes from gravity stretching the dough on the oven wall",
      "Nigella seeds (kalonji) or garlic are classic toppings"
    ],
    "references": [{ "source": "Achaya, 1994" }, { "source": "Jaffrey, 1973" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/naan_indian/hero.webp",
      "dough": "/assets/styles/naan_indian/dough.webp",
      "crumb": "/assets/styles/naan_indian/crumb.webp"
    },
    "relatedLearn": ["tandoor_science", "yogurt_in_dough", "flatbread_stretching"]
  },
  {
    "id": "arepa_blanca",
    "name": "Arepa Blanca",
    "category": "flatbread",
    "origin": {
      "country": "Venezuela/Colombia",
      "region": "Northern South America",
      "period": "Pre-Columbian; Modernized 1960s"
    },
    "description": "A staple of Venezuela and Colombia: a round, flat cornmeal patty made from pre-cooked corn flour (Masarepa). Crispy outside, soft and creamy inside, split and stuffed.",
    "history": "Indigenous origins (Timoto-Cuica tribes). The word comes from 'erepa' (corn). Industrialization in the 1950s (Harina P.A.N.) standardized the 'arepa de harina precocida'.",
    "globalPresence": "Most common in Venezuelan/Colombian households, street food stalls, Latin American bakeries and global areperías.",
    "pairings": {
      "canonical": ["Cheese", "Meats"],
      "modern": ["Beans", "Avocado"],
      "regional": ["Butter"]
    },
    "tags": ["gluten_free", "corn", "latin_american", "griddle"],
    "difficulty": "Easy",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [50, 65],
      "salt": [1.5, 2.0],
      "oil": [0, 8],
      "sugar": [0, 2],
      "cocoa": [0, 0],
      "flourStrength": "corn (no gluten)",
      "fermentationSteps": [
        "Mix water and salt",
        "Add masarepa slowly",
        "Rest 5m (hydration)",
        "Shape discs",
        "Griddle (budare) to seal",
        "Bake to finish"
      ],
      "ovenTemp": [180, 200],
      "recommendedUse": ["Reina Pepiada (Chicken/Avocado)", "Domino (Beans/Cheese)", "Breakfast side"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Cracking Edges → Dough too dry → Add water and knead until smooth like playdough",
      "Raw Center → Griddle too hot → Sear on griddle then finish in oven (180°C) for 10m",
      "Gummy Texture → Not rested enough → Let dough hydrate fully before shaping"
    ],
    "notes": [
      "Masarepa is pre-cooked; do not use raw cornmeal or masa harina (nixtamalized)",
      "Water is usually added first to dissolve salt, then flour is rained in",
      "A 'budare' is the traditional clay or iron griddle used for cooking"
    ],
    "references": [{ "source": "UCV, 2008" }, { "source": "Ochoa, 1994" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/arepa_blanca/hero.webp",
      "dough": "/assets/styles/arepa_blanca/dough.webp",
      "crumb": "/assets/styles/arepa_blanca/crumb.webp"
    },
    "relatedLearn": ["corn_dough_science", "gluten_free_structures"]
  },
  {
    "id": "bagel_ny",
    "name": "Bagels (New York Style)",
    "category": "bread",
    "origin": {
      "country": "Poland",
      "region": "Kraków",
      "period": "17th Century (Poland); 1900s (NYC)"
    },
    "description": "The definitive NY bagel: a dense, chewy ring with a shiny, blistered crust. Boiled in malted water before baking to gelatinize the starch and set the crust.",
    "history": "Brought to NYC by Polish Jewish immigrants in the late 19th century. The 'Bagel Bakers Local 338' union protected the hand-rolled tradition until the 1960s automation.",
    "globalPresence": "Most common in New York bakeries, delis, cafes, and global bagel shops.",
    "pairings": {
      "canonical": ["Cream cheese", "Lox"],
      "modern": ["Deli meats", "Spreads"],
      "regional": []
    },
    "tags": ["jewish", "boiled", "chewy", "ny_style"],
    "difficulty": "Hard",
    "fermentationType": "cold",
    "technicalProfile": {
      "hydration": [55, 60],
      "salt": [1.8, 2.2],
      "oil": [0, 2],
      "sugar": [0, 4],
      "cocoa": [0, 0],
      "flourStrength": "W300-W360",
      "fermentationSteps": [
        "Mix stiff dough",
        "Bulk 1h",
        "Shape rings",
        "Cold retard 12-24h",
        "Boil in malt water",
        "Bake on burlap boards (flip halfway)"
      ],
      "ovenTemp": [220, 245],
      "recommendedUse": ["Lox & Cream Cheese", "Bacon Egg Cheese", "Whitefish Salad"],
      "difficulty": "Hard"
    },
    "watchouts": [
      "Wrinkled Skin → Overproofed or boiled too long → Boil 30-60s per side max",
      "Flat Bagel → Overproofed or weak flour → Use high-gluten flour (14%+) and watch proof",
      "Dull Crust → No malt in water → Add barley malt syrup or honey to boil water"
    ],
    "notes": [
      "High-gluten flour is non-negotiable for the characteristic chew",
      "Cold fermentation develops the 'blisters' on the crust",
      "Traditional baking involves 'boards' soaked in water to steam the bottoms"
    ],
    "references": [{ "source": "Balinska, 2008" }, { "source": "Marks, 2010" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/bagel_ny/hero.webp",
      "dough": "/assets/styles/bagel_ny/dough.webp",
      "crumb": "/assets/styles/bagel_ny/crumb.webp"
    },
    "relatedLearn": ["boiling_gelatinization", "malt_in_dough_science"]
  },
  {
    "id": "pretzel_laugenbroetchen",
    "name": "Pretzel Laugenbrötchen",
    "category": "bread",
    "origin": {
      "country": "Germany",
      "region": "Bavaria/Swabia",
      "period": "Medieval Germany"
    },
    "description": "A German lye roll with a deep mahogany, shiny crust and a dense, white, chewy crumb. The alkaline lye bath creates the unique pretzel flavor and color.",
    "history": "A variation of the Brezel, popular in Southern Germany (Bavaria/Swabia). 'Laugen' refers to the lye solution (NaOH) used for dipping.",
    "globalPresence": "Most common in German bakeries, Oktoberfest-style shops, European cafes, and artisan bread programs.",
    "pairings": {
      "canonical": ["Butter", "Mustard"],
      "modern": ["Cheeses", "Cold cuts"],
      "regional": []
    },
    "tags": ["german", "pretzel", "lye", "alkaline"],
    "difficulty": "Expert",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [55, 60],
      "salt": [1.8, 2.2],
      "oil": [1, 3],
      "sugar": [1, 3],
      "cocoa": [0, 0],
      "flourStrength": "medium-high",
      "fermentationSteps": [
        "Mix stiff dough",
        "Bulk 1h",
        "Divide and round",
        "Proof 30m",
        "Chill (skin formation)",
        "Dip in lye",
        "Score X",
        "Bake"
      ],
      "ovenTemp": [220, 235],
      "recommendedUse": ["Weisswurst Breakfast", "Butter & Chives", "Sandwiches"],
      "difficulty": "Expert"
    },
    "watchouts": [
      "Pale Color → Lye solution too weak or old → Use 3-4% NaOH solution (safety gear required!)",
      "Soggy Bottom → Dipped too long → Dip for 5-10 seconds only",
      "Blisters → Dough too warm → Chill dough thoroughly before dipping"
    ],
    "notes": [
      "Safety: Food-grade lye (Sodium Hydroxide) is caustic; wear gloves and goggles",
      "Baking soda is a weak substitute; lye is essential for authentic taste",
      "Coarse salt (Hagelzucker or Pretzel Salt) is applied before baking"
    ],
    "references": [{ "source": "Deutsches Brotinstitut" }, { "source": "Jurafsky, 2014" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/pretzel_laugenbroetchen/hero.webp",
      "dough": "/assets/styles/pretzel_laugenbroetchen/dough.webp",
      "crumb": "/assets/styles/pretzel_laugenbroetchen/crumb.webp"
    },
    "relatedLearn": ["alkaline_reactions_maillard", "german_bread_traditions"]
  },
  {
    "id": "english_muffins",
    "name": "English Muffins",
    "category": "bread",
    "origin": {
      "country": "United Kingdom",
      "region": "England",
      "period": "19th Century (England)"
    },
    "description": "A griddle-baked, yeast-leavened bread with a porous, 'nooks and crannies' crumb designed to hold butter. Dusted with semolina/cornmeal and fork-split.",
    "history": "A Victorian tea-time staple, sold by 'muffin men' in London streets. Popularized in the US by Samuel Bath Thomas (Thomas's English Muffins) in 1880.",
    "globalPresence": "Most common in breakfast menus, brunch dishes, and global supermarkets.",
    "pairings": {
      "canonical": ["Butter", "Eggs benedict"],
      "modern": ["Jams", "Breakfast sandwiches"],
      "regional": []
    },
    "tags": ["griddle", "breakfast", "fork_split"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [65, 75],
      "salt": [1.8, 2.2],
      "oil": [2, 4],
      "sugar": [2, 6],
      "cocoa": [0, 0],
      "flourStrength": "medium",
      "fermentationSteps": [
        "Mix soft dough",
        "Bulk 1-2h",
        "Roll out",
        "Cut rounds",
        "Proof on cornmeal",
        "Griddle low heat (flip once)"
      ],
      "ovenTemp": [180, 200],
      "recommendedUse": ["Eggs Benedict", "Breakfast Sandwich", "Toasted with Butter"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Raw Center → Griddle too hot → Cook low and slow (7-10 mins per side)",
      "No Nooks/Crannies → Dough too dry or not fork-split → Use high hydration (75%+) and always split with a fork",
      "Dense Texture → Overhandling → Reroll scraps only once"
    ],
    "notes": [
      "High hydration is key for the open crumb structure",
      "Cooking on a griddle (not oven) creates the flat top and bottom",
      "Never cut with a knife; tearing preserves the texture"
    ],
    "references": [{ "source": "UK National Archives 1870-1900" }, { "source": "Oxford Companion to Food" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/english_muffins/hero.webp",
      "dough": "/assets/styles/english_muffins/dough.webp",
      "crumb": "/assets/styles/english_muffins/crumb.webp"
    },
    "relatedLearn": ["griddle_breads", "internal_temperature_stovetop_baking"]
  },
  {
    "id": "tortilla_maiz",
    "name": "Tortilla de Maíz",
    "category": "flatbread",
    "origin": {
      "country": "Mexico",
      "region": "Mesoamerica",
      "period": "Ancient Mesoamerica"
    },
    "description": "The foundation of Mexican cuisine: a thin, pliable flatbread made from nixtamalized corn (masa). It has a distinct alkaline flavor and puffs up (infla) when cooked correctly.",
    "history": "Dates back to the Aztec/Maya civilizations (3500+ years). The process of nixtamalization (cooking corn with limestone/cal) releases niacin and allows dough formation.",
    "globalPresence": "Most common in Mexican households, taquerías, tortillerías, Latin American groceries and global street-food venues.",
    "pairings": {
      "canonical": ["Tacos", "Quesadillas"],
      "modern": ["Salsas", "Meats"],
      "regional": []
    },
    "tags": ["mexican", "corn", "gluten_free", "nixtamal"],
    "difficulty": "Easy",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [55, 65],
      "salt": [1.5, 2.0],
      "oil": [0, 0],
      "sugar": [0, 0],
      "cocoa": [0, 0],
      "flourStrength": "corn (no gluten)",
      "fermentationSteps": [
        "Mix masa harina with warm water",
        "Knead to soft clay texture",
        "Rest 20m",
        "Press thin",
        "Cook on comal (flip 3 times)"
      ],
      "ovenTemp": [230, 280],
      "recommendedUse": ["Tacos", "Enchiladas", "Chilaquiles (stale)"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Cracking Edges → Dough too dry → Add water teaspoon by teaspoon",
      "No Puff (No infla) → Comal too cold or pressing uneven → Ensure high heat and even thickness",
      "Sticking to Press → Plastic sheet needed → Use polyethylene sheets (cut from grocery bags)"
    ],
    "notes": [
      "The 'puff' indicates the tortilla is cooked through and has two layers",
      "Nixtamalization is essential for nutrition (prevents pellagra)",
      "Keep warm in a cloth (servilleta) to steam and soften"
    ],
    "references": [{ "source": "Pilcher, 2012" }, { "source": "Coe & Coe, 1996" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/tortilla_maiz/hero.webp",
      "dough": "/assets/styles/tortilla_maiz/dough.webp",
      "crumb": "/assets/styles/tortilla_maiz/crumb.webp"
    },
    "relatedLearn": ["nixtamalization_chemistry", "corn_dough_behavior"]
  },
  {
    "id": "tortilla_harina",
    "name": "Tortilla de Harina",
    "category": "flatbread",
    "origin": {
      "country": "Mexico",
      "region": "Northern Mexico",
      "period": "16th Century (Sonora, Mexico)"
    },
    "description": "A Northern Mexican staple: a soft, translucent wheat flour tortilla enriched with lard or tallow. Known for its elasticity and ability to wrap large burritos.",
    "history": "Wheat was introduced by the Spanish to Sonora. Lacking corn's structure, they added fat to create a pliable flatbread. Essential to 'Norteño' and Tex-Mex cuisine.",
    "globalPresence": "Most common in northern Mexican households, Tex-Mex cuisine, taquerías, and global burrito restaurants.",
    "pairings": {
      "canonical": ["Burritos", "Quesadillas"],
      "modern": ["Wraps"],
      "regional": ["Grilled meats"]
    },
    "tags": ["mexican", "texmex", "flatbread", "wheat"],
    "difficulty": "Easy",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [55, 65],
      "salt": [1.8, 2.2],
      "oil": [6, 12],
      "sugar": [0, 3],
      "cocoa": [0, 0],
      "flourStrength": "W200-W260",
      "fermentationSteps": [
        "Mix flour, salt, fat, hot water",
        "Knead well",
        "Rest balls 30m+",
        "Roll paper thin",
        "Cook on comal (blister)"
      ],
      "ovenTemp": [200, 240],
      "recommendedUse": ["Burritos", "Quesadillas", "Fajitas"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Shrinking Dough → Gluten not relaxed → Rest dough balls longer (30m+)",
      "Hard/Cracker-like → Overcooked or low fat → Cook quickly (30s/side) and ensure fat % is high (10-15%)",
      "Thick/Doughy → Rolled too thick → Roll until translucent"
    ],
    "notes": [
      "Hot water denatures proteins slightly, reducing elasticity for easier rolling",
      "Lard (manteca) provides the most authentic flavor and flakiness",
      "Stacking hot tortillas steams them into softness"
    ],
    "references": [{ "source": "Pilcher, 2012" }, { "source": "TSHA" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/tortilla_harina/hero.webp",
      "dough": "/assets/styles/tortilla_harina/dough.webp",
      "crumb": "/assets/styles/tortilla_harina/crumb.webp"
    },
    "relatedLearn": ["fat_and_gluten_interaction", "regional_mexican_bread_heritage"]
  },
  {
    "id": "roti_chapati",
    "name": "Roti / Chapati",
    "category": "flatbread",
    "origin": {
      "country": "India",
      "region": "Indo-Gangetic plains",
      "period": "Ancient India"
    },
    "description": "The daily bread of North India: an unleavened whole wheat flatbread cooked on a concave griddle (tawa) and puffed over an open flame (phulka).",
    "history": "Ancient origins in the Indus Valley. 'Chapati' comes from 'chapat' (slap). A staple source of carbohydrates in South Asia.",
    "globalPresence": "Most common in Indian, Pakistani, Bangladeshi and Nepalese households, tawa-based kitchens and street stalls.",
    "pairings": {
      "canonical": ["Curries", "Dals"],
      "modern": ["Vegetable dishes"],
      "regional": []
    },
    "tags": ["indian", "unleavened", "whole_wheat", "tawa"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [50, 60],
      "salt": [0, 2],
      "oil": [0, 2],
      "sugar": [0, 0],
      "cocoa": [0, 0],
      "flourStrength": "atta whole wheat",
      "fermentationSteps": [
        "Mix atta flour and water",
        "Autolyse 20m",
        "Knead soft",
        "Rest 30m",
        "Roll thin",
        "Cook on tawa",
        "Puff on flame"
      ],
      "ovenTemp": [220, 260],
      "recommendedUse": ["Scooping Dal", "Sabzi (Vegetables)", "Everyday Meal"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Hard Texture → Dough too stiff or overcooked → Make a soft, tacky dough and cook fast",
      "No Puff → Holes in dough or uneven rolling → Roll evenly and seal any cracks",
      "Dry Edges → Stored improperly → Stack and wrap in cloth immediately"
    ],
    "notes": [
      "'Atta' is a stone-ground whole durum wheat flour with high damaged starch (water absorption)",
      "Resting the dough is crucial since there is no yeast/chemical leavening",
      "Ghee is often brushed on after cooking"
    ],
    "references": [{ "source": "Achaya, 1994" }, { "source": "Cambridge World History of Food" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/roti_chapati/hero.webp",
      "dough": "/assets/styles/roti_chapati/dough.webp",
      "crumb": "/assets/styles/roti_chapati/crumb.webp"
    },
    "relatedLearn": ["whole_wheat_hydration", "unleavened_dough_structure"]
  },
  {
    "id": "sfenj",
    "name": "Sfenj",
    "category": "other",
    "origin": {
      "country": "Morocco/Algeria/Tunisia",
      "region": "Maghreb",
      "period": "Medieval Al-Andalus/Maghreb"
    },
    "description": "The Maghrebi doughnut: a rustic, unsweetened, high-hydration fried dough ring. Crispy, chewy, and oily, traditionally eaten for breakfast or tea.",
    "history": "Ancient Andalusian/Maghrebi origin. The name comes from the Arabic word for 'sponge' (Isfenj). Historically sold by 'Sfenj' fryers in souks.",
    "globalPresence": "Most common in Maghreb street stalls, tea shops, and diaspora bakeries.",
    "pairings": {
      "canonical": ["Mint tea", "Honey"],
      "modern": ["Jams"],
      "regional": []
    },
    "tags": ["fried", "north_african", "street_food"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [70, 80],
      "salt": [1.8, 2.2],
      "oil": [0, 2],
      "sugar": [0, 4],
      "cocoa": [0, 0],
      "flourStrength": "medium",
      "fermentationSteps": [
        "Mix very wet dough (sticky)",
        "Bulk 2-3h (triple volume)",
        "Wet hands",
        "Pull ball",
        "Poke hole",
        "Fry in hot oil"
      ],
      "ovenTemp": [170, 180],
      "recommendedUse": ["Breakfast (dipped in sugar)", "Mint Tea accompaniment", "Egg sandwich (Tunisia)"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Heavy/Greasy → Oil too cold → Fry at 180-190°C",
      "Dense → Underfermented or dough too stiff → Hydration must be high (80%+); dough should be pourable",
      "Flat → Overhandled → Handle gently with wet hands"
    ],
    "notes": [
      "Traditionally leavened with old dough, now yeast",
      "No sugar in the dough allows for savory pairings",
      "The texture relies on the high water content turning to steam"
    ],
    "references": [{ "source": "Perry, 2001" }, { "source": "UNESCO Maghreb Studies" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/sfenj/hero.webp",
      "dough": "/assets/styles/sfenj/dough.webp",
      "crumb": "/assets/styles/sfenj/crumb.webp"
    },
    "relatedLearn": ["fried_dough_fermentation", "heat_transfer_frying"]
  },
  {
    "id": "paratha",
    "name": "Paratha",
    "category": "flatbread",
    "origin": {
      "country": "India/Pakistan",
      "region": "North India/Punjab",
      "period": "Medieval India (12th Century)"
    },
    "description": "A flaky, layered whole wheat flatbread from North India. Made by laminating dough with ghee and folding (square or triangular) before griddling.",
    "history": "Mentioned in the 12th-century text Manasollasa. A rich, calorie-dense bread favored in Punjab and for breakfast.",
    "globalPresence": "Most common in Indian/Pakistani households, dhabas, tandoor restaurants and street vendors.",
    "pairings": {
      "canonical": ["Curries", "Yogurts"],
      "modern": ["Pickles"],
      "regional": []
    },
    "tags": ["indian", "layered", "ghee", "flatbread"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [55, 65],
      "salt": [1.8, 2.2],
      "oil": [5, 12],
      "sugar": [0, 2],
      "cocoa": [0, 0],
      "flourStrength": "medium",
      "fermentationSteps": [
        "Mix atta dough",
        "Rest",
        "Roll out",
        "Brush ghee/dust flour",
        "Fold (laminate)",
        "Roll again",
        "Fry on tawa with ghee"
      ],
      "ovenTemp": [200, 240],
      "recommendedUse": ["Aloo Paratha (Stuffed)", "Breakfast with Yogurt/Pickle", "Curry"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Layers Merge → Ghee too warm or rolled too hard → Use solid ghee and roll gently",
      "Tough → Low fat or overcooked → Be generous with ghee during frying",
      "Raw Inside → Heat too high → Cook on medium heat to penetrate layers"
    ],
    "notes": [
      "The folding technique creates distinct layers similar to puff pastry but unleavened",
      "Stuffed versions (Aloo, Gobi) require skill to prevent bursting",
      "Fried shallowly in ghee (shallow fry) rather than dry roasted"
    ],
    "references": [{ "source": "Achaya, 1994" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/paratha/hero.webp",
      "dough": "/assets/styles/paratha/dough.webp",
      "crumb": "/assets/styles/paratha/crumb.webp"
    },
    "relatedLearn": ["lamination_theory_non_puff", "ghee_and_crumb_structure"]
  },
  {
    "id": "injera",
    "name": "Injera",
    "category": "flatbread",
    "origin": {
      "country": "Ethiopia/Eritrea",
      "region": "Horn of Africa",
      "period": "Ancient Aksumite Empire"
    },
    "description": "The national bread of Ethiopia/Eritrea: a huge, spongy, sour crepe made from fermented teff batter. Its 'eyes' (honeycomb surface) are essential for scooping stews.",
    "history": "Ancient origin. Teff is an indigenous grain. Traditionally fermented for 3-5 days to develop the signature sourness (ersho starter).",
    "globalPresence": "Most common in Ethiopian/Eritrean households, restaurants, and African diaspora communities.",
    "pairings": {
      "canonical": ["Wat stews", "Lentils"],
      "modern": ["Greens", "Meats"],
      "regional": []
    },
    "tags": ["ethiopian", "fermented", "teff", "batter"],
    "difficulty": "Hard",
    "fermentationType": "levain",
    "technicalProfile": {
      "hydration": [100, 120],
      "salt": [0.5, 1.5],
      "oil": [0, 0],
      "sugar": [0, 0],
      "cocoa": [0, 0],
      "flourStrength": "teff (no gluten)",
      "fermentationSteps": [
        "Mix teff flour and water",
        "Add ersho",
        "Ferment 2-4 days (sour)",
        "Mix 'absit' (cooked batter)",
        "Ferment 2h",
        "Pour on mitad (griddle)"
      ],
      "ovenTemp": [200, 250],
      "recommendedUse": ["Platter base for Wats", "Shiro", "Fit-fit (salad)"],
      "difficulty": "Hard"
    },
    "watchouts": [
      "No Eyes (Honeycomb) → Batter too thick or no absit → Thin batter and ensure vigorous fermentation",
      "Sticking → Pan not seasoned → Use a non-stick mitad or rub with oil/seeds",
      "Cracking → Overcooked → Cover with lid immediately after pouring to steam"
    ],
    "notes": [
      "Teff is naturally gluten-free and high in iron",
      "'Absit' (dough starter boiled in water) is a gelatinization step crucial for the texture",
      "Only cooked on one side (bottom); the top steams"
    ],
    "references": [{ "source": "National Museum of Ethiopia, 2004" }, { "source": "Oxford Companion to Food" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/injera/hero.webp",
      "dough": "/assets/styles/injera/dough.webp",
      "crumb": "/assets/styles/injera/crumb.webp"
    },
    "relatedLearn": ["teff_fermentation_science", "batter_vs_dough_structures"]
  },
  {
    "id": "bao_mantou",
    "name": "Bao Mantou",
    "category": "bread",
    "origin": {
      "country": "China",
      "region": "Northern China",
      "period": "3rd Century CE (Three Kingdoms)"
    },
    "description": "The staple bread of Northern China: a smooth, skinless, steamed bun with a dense, fine white crumb. Mildly sweet and neutral, designed to accompany savory dishes.",
    "history": "Legend credits Zhuge Liang (Three Kingdoms period) with inventing the mantou. Originally filled, the plain version became the daily staple of the wheat-growing North.",
    "globalPresence": "Ubiquitous in Northern China, dim sum houses worldwide, and Asian supermarkets (frozen section).",
    "pairings": {
      "canonical": ["Condensed milk", "Custards"],
      "modern": ["Pork belly (Gua Bao)", "Savory fillings"],
      "regional": ["Pickles"]
    },
    "tags": ["steamed", "asian", "soft", "white_crumb"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [50, 60],
      "salt": [0.5, 1.0],
      "oil": [2, 5],
      "sugar": [5, 12],
      "cocoa": [0, 0],
      "flourStrength": "low protein (Hong Kong flour)",
      "fermentationSteps": [
        "Mix stiff dough",
        "Ferment 1h",
        "Degas thoroughly (sheeting)",
        "Shape smooth rounds",
        "Proof 20m",
        "Steam 15m"
      ],
      "ovenTemp": [100, 100],
      "recommendedUse": ["Breakfast", "Peking Duck side", "Snack with soy milk"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Wrinkled Skin → Overproofed or steamed too vigorously → Proof less and steam on medium heat",
      "Yellow Spots → Baking powder not dissolved → Sift dry ingredients thoroughly",
      "Collapse → Lid opened too soon → Wait 5 mins after heat off before opening"
    ],
    "notes": [
      "Bleached, low-protein flour (Hong Kong flour) is essential for the snowy white color",
      "Intensive degassing (sheeting) removes all large bubbles for a uniform crumb",
      "Bamboo steamers absorb condensation, preventing water drips on the buns"
    ],
    "references": [{ "source": "Anderson, 1988" }, { "source": "Cambridge WHF" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/bao_mantou/hero.webp",
      "dough": "/assets/styles/bao_mantou/dough.webp",
      "crumb": "/assets/styles/bao_mantou/crumb.webp"
    },
    "relatedLearn": ["steaming_vs_baking_science", "low_protein_flour_behavior"]
  },
  {
    "id": "bara_brith",
    "name": "Bara Brith",
    "category": "enriched_bread",
    "origin": {
      "country": "United Kingdom",
      "region": "Wales",
      "period": "19th Century (Wales)"
    },
    "description": "Wales' famous 'speckled bread': a dense, moist tea loaf packed with dried fruits (currants, raisins, candied peel) that have been soaked overnight in strong black tea.",
    "history": "A traditional Welsh farmhouse recipe. The yeast version is the original 'bread', while the baking powder version is a later 'cake'. This style focuses on the yeasted bread.",
    "globalPresence": "Most common in Welsh bakeries, tea rooms, cafés, UK holiday markets.",
    "pairings": {
      "canonical": ["Salted Butter", "Caerphilly Cheese"],
      "modern": ["Marmalade"],
      "regional": []
    },
    "tags": ["tea_bread", "british", "fruit", "enriched"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [60, 70],
      "salt": [1.5, 2.0],
      "oil": [3, 6],
      "sugar": [10, 15],
      "cocoa": [0, 0],
      "flourStrength": "medium",
      "fermentationSteps": [
        "Soak fruit in tea (overnight)",
        "Mix dough with spice",
        "Add fruit",
        "Bulk 1.5h",
        "Shape loaf",
        "Proof 1h",
        "Bake"
      ],
      "ovenTemp": [170, 190],
      "recommendedUse": ["Afternoon Tea", "Toasted with Butter"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Heavy Loaf → Fruit not distributed or dough too dense → Knead fruit in gently at the end",
      "Burnt Fruit → Oven too hot → Bake lower (170°C) and cover if browning too fast",
      "Dry Crumb → Overbaked → Tea-soaked fruit should keep it moist for days"
    ],
    "notes": [
      "Mixed Spice (pimento, cinnamon, nutmeg) is the traditional flavoring",
      "Soaking fruit is mandatory to prevent it from leaching moisture from the dough",
      "Often glazed with honey or sugar syrup while hot"
    ],
    "references": [{ "source": "Welsh Heritage Baking Society" }, { "source": "Freeman, 1992" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/bara_brith/hero.webp",
      "dough": "/assets/styles/bara_brith/dough.webp",
      "crumb": "/assets/styles/bara_brith/crumb.webp"
    },
    "relatedLearn": ["tea_hydration_chemistry", "fruit_inclusion_techniques"]
  },
  {
    "id": "hokkaido_milk_bread",
    "name": "Hokkaido Milk Bread",
    "category": "enriched_bread",
    "origin": {
      "country": "Japan",
      "region": "Hokkaido",
      "period": "20th Century"
    },
    "description": "The ultimate soft white bread, famous for its cloud-like texture and milky sweetness. Uses high-fat Hokkaido milk and the Tangzhong method.",
    "history": "Hokkaido is Japan's dairy capital. This bread showcases the region's premium milk and cream, combined with the Chinese Tangzhong technique for shelf life.",
    "globalPresence": "Most common in Japanese bakeries, supermarkets, toast cafés, and global Asian bakeries.",
    "pairings": {
      "canonical": ["Thick Toast", "Sandwiches"],
      "modern": ["Fruit sando", "Ice cream toast"],
      "regional": []
    },
    "tags": ["japanese", "tangzhong", "soft", "enriched"],
    "difficulty": "Hard",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [70, 78],
      "salt": [1.5, 2.0],
      "oil": [8, 15],
      "sugar": [10, 18],
      "cocoa": [0, 0],
      "flourStrength": "W280-W350",
      "fermentationSteps": [
        "Cook Tangzhong",
        "Mix dough to windowpane",
        "Bulk 1h",
        "Divide into 3-4 balls",
        "Roll and fold (laminate)",
        "Place in tin",
        "Proof to rim",
        "Bake"
      ],
      "ovenTemp": [170, 180],
      "recommendedUse": ["Breakfast Toast", "Sandwiches", "Dessert Bread"],
      "difficulty": "Hard"
    },
    "watchouts": [
      "Collapse → Underbaked or weak flour → Use high-protein bread flour",
      "Gummy → Tangzhong ratio too high → Keep Tangzhong at 5-10% of total flour",
      "Dark Crust → Sugar content high → Cover with foil after 20 mins"
    ],
    "notes": [
      "The 'shreddable' crumb comes from the rolling and folding shaping method",
      "Heavy cream is often used alongside milk for extra richness",
      "Tangzhong gelatinizes starch, holding water and keeping bread soft for days"
    ],
    "references": [{ "source": "Japan Baking Association" }, { "source": "Asian Breads, 2004" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/hokkaido_milk_bread/hero.webp",
      "dough": "/assets/styles/hokkaido_milk_bread/dough.webp",
      "crumb": "/assets/styles/hokkaido_milk_bread/crumb.webp"
    },
    "relatedLearn": ["tangzhong_gelatinization_science", "shreddable_crumb_mechanics"]
  },
  {
    "id": "pan_de_cristal",
    "name": "Pan de Cristal",
    "category": "bread",
    "origin": {
      "country": "Spain",
      "region": "Catalonia",
      "period": "2004 (Barcelona)"
    },
    "description": "The 'Glass Bread': a modern Catalan marvel with an impossibly thin, shatteringly crisp crust and a crumb that is 90% air. Almost zero density.",
    "history": "Invented by Jordi Nomen at Concept Pa in Barcelona (2004). Designed to be the perfect vehicle for 'Pan con Tomate'—crisp but not filling.",
    "globalPresence": "Most common in Catalan bakeries, tapas bars, modern European artisanal shops.",
    "pairings": {
      "canonical": ["Tomato & Olive Oil", "Jamón Ibérico"],
      "modern": ["Anchovies"],
      "regional": []
    },
    "tags": ["spanish", "high_hydration", "open_crumb"],
    "difficulty": "Expert",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [90, 110],
      "salt": [1.8, 2.2],
      "oil": [2, 4],
      "sugar": [0, 0],
      "cocoa": [0, 0],
      "flourStrength": "W350-W400 (High Protein)",
      "fermentationSteps": [
        "Mix (Bassinnage)",
        "Coil folds x4",
        "Bulk 3h",
        "Divide gently",
        "Proof 1h",
        "Bake high heat"
      ],
      "ovenTemp": [250, 270],
      "recommendedUse": ["Pan con Tomate", "Tapas base"],
      "difficulty": "Expert"
    },
    "watchouts": [
      "Flat Loaf → Weak gluten or rough handling → Use very strong flour and handle like a cloud",
      "Dense Crumb → Hydration too low → Must be >90% hydration",
      "Soft Crust → Oven not hot enough → Bake at max temp to set structure instantly"
    ],
    "notes": [
      "Requires 'Bassinnage' (adding water in stages) to develop gluten",
      "Olive oil in the dough helps extensibility and crust crispness",
      "The dough is essentially a batter; shaping is just 'pouring' and cutting"
    ],
    "references": [{ "source": "Escola de Flequers de Barcelona" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/pan_de_cristal/hero.webp",
      "dough": "/assets/styles/pan_de_cristal/dough.webp",
      "crumb": "/assets/styles/pan_de_cristal/crumb.webp"
    },
    "relatedLearn": ["hydration_extremes", "steam_and_crust_formation"]
  },
  {
    "id": "pain_de_mie",
    "name": "Pain de Mie",
    "category": "bread",
    "origin": {
      "country": "France",
      "region": "National",
      "period": "Early 20th Century"
    },
    "description": "The French sandwich loaf: a soft, thin-crusted white bread baked in a lidded Pullman pan to ensure a perfect square shape and fine, tight crumb.",
    "history": "Inspired by the English sandwich loaves and the Pullman railway cars (compact square shape). 'Mie' refers to the crumb; this is bread that is 'all crumb'.",
    "globalPresence": "Most common in French bakeries, hotel breakfast buffets, sandwich bars.",
    "pairings": {
      "canonical": ["Croque Monsieur", "Toast"],
      "modern": ["Canapés", "Club Sandwich"],
      "regional": []
    },
    "tags": ["french", "sandwich", "pullman"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [60, 65],
      "salt": [1.8, 2.0],
      "oil": [4, 8],
      "sugar": [4, 8],
      "cocoa": [0, 0],
      "flourStrength": "W240-W280",
      "fermentationSteps": [
        "Intensive mix",
        "Bulk 1h",
        "Divide and ball",
        "Shape cylinders",
        "Place in Pullman pan",
        "Proof to 80% volume",
        "Slide lid",
        "Bake"
      ],
      "ovenTemp": [180, 200],
      "recommendedUse": ["Croque Monsieur", "Kids Sandwiches", "Melba Toast"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Mushroom Top → Overproofed → Bake when dough is 2cm from the rim",
      "Concave Sides → Underbaked → Bake longer to set the sides",
      "Dense Corners → Underproofed → Let it fill the corners before baking"
    ],
    "notes": [
      "The lid prevents steam escape and expansion, forcing the fine crumb structure",
      "Enriched with milk powder and butter for tenderness",
      "Intensive mixing ensures the tightest possible grain"
    ],
    "references": [{ "source": "Larousse Gastronomique" }, { "source": "FNB archives" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/pain_de_mie/hero.webp",
      "dough": "/assets/styles/pain_de_mie/dough.webp",
      "crumb": "/assets/styles/pain_de_mie/crumb.webp"
    },
    "relatedLearn": ["pullman_pan_dynamics", "closed_crumb_science"]
  },
  {
    "id": "soda_bread",
    "name": "Soda Bread",
    "category": "bread",
    "origin": {
      "country": "Ireland",
      "region": "National",
      "period": "1840s (Famine Era)"
    },
    "description": "The iconic Irish quick bread: a dense, rustic loaf leavened with baking soda and buttermilk. Characterized by its 'cross' slash on top and tender, biscuit-like crumb.",
    "history": "Born of necessity during the 19th century when yeast was scarce and soft Irish wheat (low protein) was unsuited for yeast bread. The acid in buttermilk reacts with soda for lift.",
    "globalPresence": "Most common in Irish bakeries, home kitchens, cafés, and heritage markets.",
    "pairings": {
      "canonical": ["Salted Butter", "Seafood Chowder"],
      "modern": ["Smoked Salmon", "Honey"],
      "regional": []
    },
    "tags": ["irish", "quick_bread", "soda"],
    "difficulty": "Easy",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [65, 75],
      "salt": [1.5, 2.0],
      "oil": [0, 0],
      "sugar": [0, 3],
      "cocoa": [0, 0],
      "flourStrength": "soft wheat (low protein)",
      "fermentationSteps": [
        "Mix dry ingredients",
        "Add buttermilk",
        "Gentle mix (claw hand)",
        "Shape round",
        "Cut deep cross",
        "Bake immediately"
      ],
      "ovenTemp": [200, 220],
      "recommendedUse": ["Soup accompaniment", "Breakfast Toast"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Tough Crumb → Overmixed → Mix only until flour is just moistened (like a biscuit)",
      "Soapy Taste → Too much soda → Measure soda precisely; ensure buttermilk is acidic enough",
      "Raw Center → Oven too hot → Lower temp after 15 mins to cook through"
    ],
    "notes": [
      "The cross on top is traditional 'to let the fairies out' (and ensure even heat distribution)",
      "Soft wheat flour (pastry flour) yields the most authentic tender texture",
      "Best eaten fresh on the day of baking"
    ],
    "references": [{ "source": "Irish Food Heritage Council" }, { "source": "Allen, 1995" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/soda_bread/hero.webp",
      "dough": "/assets/styles/soda_bread/dough.webp",
      "crumb": "/assets/styles/soda_bread/crumb.webp"
    },
    "relatedLearn": ["chemical_leavening_reactions", "buttermilk_acidity_science"]
  },
  {
    "id": "gibassier",
    "name": "Gibassier",
    "category": "enriched_bread",
    "origin": {
      "country": "France",
      "region": "Provence",
      "period": "19th Century"
    },
    "description": "A Provençal masterpiece: a leaf-shaped, olive oil-enriched galette flavored with anise, candied orange peel, and orange blossom water. Crisp, crumbly, and aromatic.",
    "history": "One of the 'Thirteen Desserts' of Christmas in Provence. Traditionally baked in communal ovens (fours banaux) after the bread baking was done.",
    "globalPresence": "Common in Provençal bakeries, Christmas markets, and French specialty pastry shops.",
    "pairings": {
      "canonical": ["Coffee", "Herbal Tea"],
      "modern": ["Apricot Jam"],
      "regional": ["Vin Cuit"]
    },
    "tags": ["french", "provence", "sweet", "olive_oil"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [55, 60],
      "salt": [1.5, 1.8],
      "oil": [12, 18],
      "sugar": [12, 16],
      "cocoa": [0, 0],
      "flourStrength": "W220-W260",
      "fermentationSteps": [
        "Preferment (Biga)",
        "Mix dough with oil",
        "Bulk 2h",
        "Shape oval",
        "Cut 7 slits (leaf)",
        "Proof 1h",
        "Bake"
      ],
      "ovenTemp": [180, 190],
      "recommendedUse": ["Breakfast", "Christmas Dessert", "Tea Time"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Greasy → Oil not emulsified → Add oil slowly during mixing",
      "Loss of Shape → Slits not opened enough → Stretch the dough well after cutting slits",
      "Burnt Sugar → Oven too hot → Watch carefully; brush with butter/sugar after baking, not before"
    ],
    "notes": [
      "Anise seed and orange blossom water create the signature flavor profile",
      "The texture is short (crumbly) due to the high olive oil content",
      "Traditionally dusted with fine sugar immediately after baking"
    ],
    "references": [{ "source": "Larousse Gastronomique" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/gibassier/hero.webp",
      "dough": "/assets/styles/gibassier/dough.webp",
      "crumb": "/assets/styles/gibassier/crumb.webp"
    },
    "relatedLearn": ["mediterranean_enrichment_techniques", "aromatics_and_dough_behavior"]
  },
  {
    "id": "koulouri_thessalonikis",
    "name": "Koulouri Thessalonikis",
    "category": "bread",
    "origin": {
      "country": "Greece",
      "region": "Thessaloniki",
      "period": "Byzantine Era"
    },
    "description": "The quintessential Greek street snack: a crunchy, sesame-encrusted bread ring. Golden-brown and nutty on the outside, slightly chewy on the inside.",
    "history": "Traced back to the Byzantine Empire. 'Koulouri' comes from the ancient Greek 'kollikion' (round bread). Thessaloniki is the historical capital of this style.",
    "globalPresence": "Found in Greek bakeries, street vendors, breakfast stands, cafes.",
    "pairings": {
      "canonical": ["Feta Cheese", "Olives"],
      "modern": ["Cream Cheese", "Turkey"],
      "regional": ["Ayran"]
    },
    "tags": ["greek", "sesame", "ring"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [50, 55],
      "salt": [1.8, 2.0],
      "oil": [2, 4],
      "sugar": [4, 6],
      "cocoa": [0, 0],
      "flourStrength": "medium (W240)",
      "fermentationSteps": [
        "Mix stiff dough",
        "Rest 20m",
        "Roll ropes",
        "Dip in water/honey syrup",
        "Roll in sesame seeds",
        "Proof 30m",
        "Bake"
      ],
      "ovenTemp": [200, 220],
      "recommendedUse": ["Breakfast on the go", "Meze platter"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Bald Spots → Seeds falling off → Dip in sticky honey water or grape molasses water before seeding",
      "Soft Crust → Oven too cool or humidity high → Bake hot and dry",
      "Tough → Overworked → Rest dough ropes before shaping rings"
    ],
    "notes": [
      "The sesame seeds provide a significant portion of the flavor and fat",
      "Traditionally sold by street vendors (koulourades) from large baskets",
      "The dough is relatively low hydration to maintain the ring shape"
    ],
    "references": [{ "source": "University of Thessaloniki FA Studies" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/koulouri_thessalonikis/hero.webp",
      "dough": "/assets/styles/koulouri_thessalonikis/dough.webp",
      "crumb": "/assets/styles/koulouri_thessalonikis/crumb.webp"
    },
    "relatedLearn": ["seed_adhesion_surface_gels", "mediterranean_street_breads"]
  },
  {
    "id": "pan_sobao",
    "name": "Pan Sobao",
    "category": "enriched_bread",
    "origin": {
      "country": "Puerto Rico",
      "region": "Caribbean",
      "period": "Early 20th Century"
    },
    "description": "Puerto Rico's 'kneaded bread': a semi-sweet, soft, lard-enriched loaf with a pale, glossy crust. Similar to Pan de Agua but richer and softer.",
    "history": "Evolved from Spanish bread traditions, adapted to the Caribbean climate and palate. 'Sobao' means 'kneaded' or 'rubbed', referring to the intensive processing for softness.",
    "globalPresence": "Found in Puerto Rican bakeries, Caribbean grocery stores, sandwich shops.",
    "pairings": {
      "canonical": ["Cafe con Leche", "Cheese"],
      "modern": ["Ham & Cheese Sandwich"],
      "regional": []
    },
    "tags": ["caribbean", "soft", "sweet", "enriched"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [55, 62],
      "salt": [1.5, 1.8],
      "oil": [8, 12],
      "sugar": [12, 18],
      "cocoa": [0, 0],
      "flourStrength": "W260-W300",
      "fermentationSteps": [
        "Intensive mix (windowpane)",
        "Bulk 1h",
        "Divide",
        "Shape tight cylinders",
        "Proof until wobbly",
        "Bake low temp"
      ],
      "ovenTemp": [170, 180],
      "recommendedUse": ["Breakfast", "Sandwiches (Triplets)"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Dark Crust → Sugar burns → Bake at lower temp (175°C) and cover if needed",
      "Dense → Underkneaded → Must reach full gluten development for the 'cottony' texture",
      "Wrinkles → Cooling too fast → Cool in a draft-free area"
    ],
    "notes": [
      "Traditionally made with lard (manteca) for the specific flavor and texture",
      "The crust should be soft, not crispy",
      "Often baked in pairs or connected loaves"
    ],
    "references": [{ "source": "Ortíz Cuadra, 2013" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/pan_sobao/hero.webp",
      "dough": "/assets/styles/pan_sobao/dough.webp",
      "crumb": "/assets/styles/pan_sobao/crumb.webp"
    },
    "relatedLearn": ["caribbean_baking_traditions", "sugar_and_dough_strength"]
  },
  {
    "id": "pan_de_yuca",
    "name": "Pan de Yuca",
    "category": "other",
    "origin": {
      "country": "Colombia/Ecuador",
      "region": "Andean",
      "period": "Colonial Era"
    },
    "description": "A gluten-free cheese bread made from cassava (yuca) starch and fresh cheese. Small, round, and airy, with a chewy texture and crisp crust.",
    "history": "A fusion of Indigenous cassava usage and Spanish dairy cattle introduction. A staple snack (mecato) in Colombia and Ecuador.",
    "globalPresence": "Sold in Andean bakeries, cafés, street kiosks and Latin American markets.",
    "pairings": {
      "canonical": ["Hot Chocolate", "Coffee"],
      "modern": ["Yogurt drink (Avena)"],
      "regional": []
    },
    "tags": ["gluten_free", "cassava", "andian"],
    "difficulty": "Easy",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [40, 50],
      "salt": [1.0, 1.5],
      "oil": [5, 10],
      "sugar": [0, 2],
      "cocoa": [0, 0],
      "flourStrength": "cassava starch (no gluten)",
      "fermentationSteps": [
        "Mix starch and cheese",
        "Add egg/liquid",
        "Knead to smooth dough",
        "Shape balls",
        "Bake hot"
      ],
      "ovenTemp": [200, 230],
      "recommendedUse": ["Breakfast", "Afternoon Snack"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Spreading Flat → Too much liquid or cheese too wet → Adjust hydration based on cheese moisture",
      "Gummy → Underbaked → Bake until golden brown spots appear",
      "Hard → Stale → Best eaten warm; reheat to soften"
    ],
    "notes": [
      "Cassava starch (almidón de yuca) provides the unique 'chewy' texture (expansion)",
      "Cheese (Queso Costeño or similar fresh salty cheese) is the main flavor driver",
      "Baking powder is often added for extra lift"
    ],
    "references": [{ "source": "FAO Cassava Program" }, { "source": "U. de Nariño 2008" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/pan_de_yuca/hero.webp",
      "dough": "/assets/styles/pan_de_yuca/dough.webp",
      "crumb": "/assets/styles/pan_de_yuca/crumb.webp"
    },
    "relatedLearn": ["starch_gelatinization_in_cassava", "gluten_free_dough_frameworks"]
  },
  {
    "id": "khachapuri_imeruli",
    "name": "Khachapuri Imeruli",
    "category": "bread",
    "origin": {
      "country": "Georgia",
      "region": "Imereti",
      "period": "Medieval Georgia"
    },
    "description": "The national dish of Georgia: a soft, yeast-leavened round bread stuffed with a savory mixture of Imeretian cheese and egg. 'Khacho' (curds) + 'Puri' (bread).",
    "history": "Ancient Georgian origin. Specific to the Imereti region, but variations exist across the country (Adjaruli, Megruli). A symbol of Georgian hospitality.",
    "globalPresence": "Served in Georgian restaurants, bakeries, street vendors and diaspora cafés.",
    "pairings": {
      "canonical": ["Tarragon Soda", "Pickles"],
      "modern": ["Tomato Salad"],
      "regional": ["Lagidze Water"]
    },
    "tags": ["georgian", "cheese", "filled"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [60, 65],
      "salt": [1.5, 1.8],
      "oil": [2, 5],
      "sugar": [0, 2],
      "cocoa": [0, 0],
      "flourStrength": "medium (W240)",
      "fermentationSteps": [
        "Mix soft dough",
        "Bulk 1h",
        "Ball dough and cheese",
        "Flatten dough",
        "Enclose cheese ball",
        "Roll flat",
        "Bake"
      ],
      "ovenTemp": [220, 250],
      "recommendedUse": ["Feast Centerpiece", "Comfort Food"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Leakage → Dough too thin or seal weak → Keep the top layer slightly thicker and seal tightly",
      "Salty → Cheese too briney → Soak cheese in water or mix with fresh curd (sulguni + mozzarella)",
      "Pale → Oven too cool → Brush with egg wash and bake hot"
    ],
    "notes": [
      "The filling-to-dough ratio is traditionally 1:1 by weight",
      "Yogurt (matsoni) is often added to the dough for tenderness",
      "Must be eaten hot while the cheese is molten"
    ],
    "references": [{ "source": "Georgian National Culinary Academy" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/khachapuri_imeruli/hero.webp",
      "dough": "/assets/styles/khachapuri_imeruli/dough.webp",
      "crumb": "/assets/styles/khachapuri_imeruli/crumb.webp"
    },
    "relatedLearn": ["cheese_stability_in_baking", "filled_dough_structures"]
  },
  {
    "id": "malawach",
    "name": "Malawach",
    "category": "flatbread",
    "origin": {
      "country": "Yemen",
      "region": "Yemenite Jewish",
      "period": "19th Century"
    },
    "description": "A Yemenite Jewish laminated flatbread, similar to a thick puff pastry pancake. Pan-fried to create crispy, flaky layers.",
    "history": "Brought to Israel by Yemenite Jews during Operation Magic Carpet (1949). Originally a Sabbath bread, now a popular street food and frozen staple.",
    "globalPresence": "Common in Israeli street food, Yemenite bakeries, breakfast cafés.",
    "pairings": {
      "canonical": ["Hard-boiled Egg", "Grated Tomato Dip", "Zhug (Spicy Sauce)"],
      "modern": ["Honey", "Cheese"],
      "regional": []
    },
    "tags": ["yemenite", "laminated", "fried"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [50, 60],
      "salt": [1.8, 2.2],
      "oil": [15, 25],
      "sugar": [2, 4],
      "cocoa": [0, 0],
      "flourStrength": "medium",
      "fermentationSteps": [
        "Mix dough",
        "Rest 30m",
        "Divide balls",
        "Stretch paper thin",
        "Smear fat",
        "Roll/Coil",
        "Chill",
        "Pan fry"
      ],
      "ovenTemp": [180, 200],
      "recommendedUse": ["Breakfast", "Wrap (Memulawach)"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Greasy → Frying temp too low → Fry medium-high",
      "Tough → Gluten not relaxed → Rest coils for at least 30 mins before flattening",
      "Layers Merge → Fat melted into dough → Keep fat solid/creamy during lamination"
    ],
    "notes": [
      "Traditionally laminated with schmaltz (chicken fat) or butter/margarine",
      "The coiling technique creates the radial layers",
      "Served with 'Resek' (fresh tomato pulp) to cut the richness"
    ],
    "references": [{ "source": "Israeli Culinary Heritage Org" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/malawach/hero.webp",
      "dough": "/assets/styles/malawach/dough.webp",
      "crumb": "/assets/styles/malawach/crumb.webp"
    },
    "relatedLearn": ["oil_lamination_basics", "pan_fried_doughs"]
  },
  {
    "id": "damper",
    "name": "Damper",
    "category": "bread",
    "origin": {
      "country": "Australia",
      "region": "Outback",
      "period": "19th Century (Colonial)"
    },
    "description": "The iconic Australian bush bread: a simple soda bread baked in the coals of a campfire. Dense, hearty, and traditionally made with just flour, water, and salt.",
    "history": "Staple food of stockmen, drovers, and swagmen in the Australian Outback. Originally baked in the ashes ('damper' refers to damping the fire).",
    "globalPresence": "Found in Australian heritage cafés, camping culture, outdoor cooking manuals and bakeries with traditional selections.",
    "pairings": {
      "canonical": ["Golden Syrup", "Billy Tea"],
      "modern": ["Butter", "Jam"],
      "regional": ["Campfire Stew"]
    },
    "tags": ["australian", "quick_bread", "campfire"],
    "difficulty": "Easy",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [55, 65],
      "salt": [1.5, 2.0],
      "oil": [0, 2],
      "sugar": [0, 2],
      "cocoa": [0, 0],
      "flourStrength": "self-raising flour",
      "fermentationSteps": [
        "Mix flour and salt",
        "Rub in butter (optional)",
        "Add water/milk",
        "Mix briefly",
        "Shape round",
        "Bake in camp oven/coals"
      ],
      "ovenTemp": [200, 220],
      "recommendedUse": ["Camping Breakfast", "Stew Dipper"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Ashy Taste → Direct contact with coals → Wrap in foil or use a camp oven",
      "Raw Center → Fire too hot → Move away from direct flame after crust sets",
      "Rock Hard → Overmixed → Handle minimally"
    ],
    "notes": [
      "Self-raising flour is the modern standard; traditionally baking soda/tartar was carried",
      "Beer is a popular liquid substitute for water/milk",
      "Testing doneness involves tapping the bottom for a hollow sound"
    ],
    "references": [{ "source": "National Library of Australia" }, { "source": "Symons, 2007" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/damper/hero.webp",
      "dough": "/assets/styles/damper/dough.webp",
      "crumb": "/assets/styles/damper/crumb.webp"
    },
    "relatedLearn": ["chemical_leaveners_101", "radiant_heat_baking"]
  },
  {
    "id": "banana_bread",
    "name": "Banana Bread",
    "category": "other",
    "origin": {
      "country": "United States",
      "region": "National",
      "period": "1930s (Great Depression)"
    },
    "description": "A moist, sweet, cake-like quick bread made with mashed overripe bananas. Chemically leavened and dense.",
    "history": "Popularized during the Great Depression to avoid wasting overripe bananas and promoted by baking powder companies (Royal, Pillsbury).",
    "globalPresence": "Found in cafés, brunch menus, American bakeries, home kitchens globally.",
    "pairings": {
      "canonical": ["Butter", "Walnuts"],
      "modern": ["Chocolate Chips", "Espresso Butter"],
      "regional": []
    },
    "tags": ["american", "quick_bread", "sweet"],
    "difficulty": "Easy",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [80, 100],
      "salt": [1.0, 1.5],
      "oil": [10, 20],
      "sugar": [15, 25],
      "cocoa": [0, 0],
      "flourStrength": "soft wheat (AP flour)",
      "fermentationSteps": [
        "Mash bananas",
        "Cream sugar/fat",
        "Mix wet and dry",
        "Fold gently",
        "Bake loaf"
      ],
      "ovenTemp": [165, 175],
      "recommendedUse": ["Breakfast", "Coffee Snack"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Gummy Streak → Underbaked or too much banana → Test with skewer; measure banana by weight not count",
      "Tough → Overmixed gluten → Fold flour in until just combined",
      "Sinking Middle → Too much leavener or opened oven too soon → Check soda/powder ratio"
    ],
    "notes": [
      "Bananas must be brown/black for maximum sugar and aroma",
      "Oil yields a moister loaf than butter; butter yields better flavor",
      "Freezes exceptionally well"
    ],
    "references": [{ "source": "Pillsbury Archives" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/banana_bread/hero.webp",
      "dough": "/assets/styles/banana_bread/dough.webp",
      "crumb": "/assets/styles/banana_bread/crumb.webp"
    },
    "relatedLearn": ["batter_vs_dough_systems", "fruit_moisture_gluten"]
  },
  {
    "id": "bolo_do_caco",
    "name": "Bolo do Caco",
    "category": "flatbread",
    "origin": {
      "country": "Portugal",
      "region": "Madeira",
      "period": "18th Century"
    },
    "description": "A rustic Madeiran flatbread made with wheat flour and mashed sweet potato. Cooked on a hot basalt stone slab ('caco').",
    "history": "Born of necessity in Madeira where wheat was scarce; sweet potato was added to stretch the flour. Now the signature bread of the island.",
    "globalPresence": "Served in Madeira restaurants, Portuguese bakeries, coastal cafés and street food stalls.",
    "pairings": {
      "canonical": ["Garlic Butter (Manteiga de Alho)", "Prego (Steak Sandwich)"],
      "modern": ["Octopus"],
      "regional": ["Vinho Verde"]
    },
    "tags": ["portuguese", "flatbread", "sweet_potato"],
    "difficulty": "Easy",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [65, 75],
      "salt": [1.5, 2.0],
      "oil": [0, 2],
      "sugar": [0, 2],
      "cocoa": [0, 0],
      "flourStrength": "medium",
      "fermentationSteps": [
        "Boil/mash sweet potato",
        "Mix with flour/yeast",
        "Bulk 1-2h",
        "Shape discs",
        "Proof 30m",
        "Cook on stone/skillet"
      ],
      "ovenTemp": [200, 220],
      "recommendedUse": ["Garlic Bread", "Sandwich Bun"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Dense → Potato too cold or lumps → Mash warm and smooth",
      "Raw Center → Heat too high → Cook low and slow on the stone",
      "Sticky Dough → Potato moisture varies → Adjust water after adding potato"
    ],
    "notes": [
      "Sweet potato adds natural sweetness, moisture, and a soft texture",
      "Traditionally served warm with garlic parsley butter melting inside",
      "The 'caco' stone gives a unique crust not achievable in an oven"
    ],
    "references": [{ "source": "Madeira Culinary Heritage Institute" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/bolo_do_caco/hero.webp",
      "dough": "/assets/styles/bolo_do_caco/dough.webp",
      "crumb": "/assets/styles/bolo_do_caco/crumb.webp"
    },
    "relatedLearn": ["root_vegetable_dough_science", "stone_cooking_surfaces"]
  },
  {
    "id": "langos",
    "name": "Lángos",
    "category": "other",
    "origin": {
      "country": "Hungary",
      "region": "National",
      "period": "16th Century"
    },
    "description": "The ultimate Hungarian street food: a deep-fried flatbread rubbed with garlic and topped with sour cream and cheese. Crisp, golden, and chewy.",
    "history": "Originally baked in the embers ('láng') of a brick oven on bread-baking days. With the decline of home baking, it evolved into a deep-fried market staple.",
    "globalPresence": "Found in Hungarian street markets, fairs, food trucks, and Central European snack stands.",
    "pairings": {
      "canonical": ["Garlic Water", "Sour Cream", "Grated Cheese (Trappista)"],
      "modern": ["Ham", "Sausage"],
      "regional": ["Cabbage (Káposztás)"]
    },
    "tags": ["hungarian", "fried", "street_food"],
    "difficulty": "Easy",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [65, 75],
      "salt": [1.8, 2.2],
      "oil": [2, 5],
      "sugar": [1, 3],
      "cocoa": [0, 0],
      "flourStrength": "medium (BL55)",
      "fermentationSteps": [
        "Mix soft dough",
        "Bulk 1h",
        "Divide balls",
        "Rest 20m",
        "Stretch by hand",
        "Deep fry"
      ],
      "ovenTemp": [170, 180],
      "recommendedUse": ["Beach Snack", "Market Food"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Soggy → Oil too cold → Fry at 180°C (355°F) minimum",
      "Dense → Underproofed → Dough must be bubbly and light before stretching",
      "Thick Center → Improper stretching → Stretch the center thin, leaving the rim thicker"
    ],
    "notes": [
      "The dough often contains milk or potato water for softness",
      "Garlic is applied as a 'water' (crushed garlic steeped in water) to permeate the crust",
      "Best eaten immediately while hot and crisp"
    ],
    "references": [{ "source": "Hungarian Culinary Ethnography Museum" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/langos/hero.webp",
      "dough": "/assets/styles/langos/dough.webp",
      "crumb": "/assets/styles/langos/crumb.webp"
    },
    "relatedLearn": ["frying_maillard_reactions", "hydration_in_fried_doughs"]
  },
  {
    "id": "tikvenik",
    "name": "Tikvenik",
    "category": "pastry",
    "origin": {
      "country": "Bulgaria",
      "region": "National",
      "period": "19th Century"
    },
    "description": "A sweet Bulgarian pumpkin strudel made with hand-stretched filo pastry, rolled into a spiral. Crisp, flaky, and filled with spiced pumpkin and walnuts.",
    "history": "A variation of the savory Banitsa, traditionally baked for Christmas Eve (Budni Vecher). Represents the 'sweetness' of the coming year.",
    "globalPresence": "Found in Bulgarian bakeries, holiday markets, Eastern European cafés.",
    "pairings": {
      "canonical": ["Yogurt", "Compote"],
      "modern": ["Vanilla Sauce"],
      "regional": []
    },
    "tags": ["bulgarian", "pumpkin", "pastry"],
    "difficulty": "Hard",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [50, 55],
      "salt": [1.0, 1.5],
      "oil": [2, 5],
      "sugar": [0, 0],
      "cocoa": [0, 0],
      "flourStrength": "high gluten (for stretching)",
      "fermentationSteps": [
        "Mix stiff dough",
        "Rest 1h",
        "Stretch paper thin",
        "Spread filling",
        "Roll ropes",
        "Coil in pan",
        "Bake"
      ],
      "ovenTemp": [180, 200],
      "recommendedUse": ["Christmas Eve Dessert", "Winter Snack"],
      "difficulty": "Hard"
    },
    "watchouts": [
      "Soggy Bottom → Pumpkin too wet → Sauté pumpkin to evaporate moisture before filling",
      "Tough Pastry → Dough not rested → Rest allows gluten to relax for thin stretching",
      "Pale Top → Not enough oil → Brush generously with oil/butter before baking"
    ],
    "notes": [
      "The dough is unleavened but requires strong gluten for stretching",
      "Traditionally, 'lucky charms' (dogwood buds) are hidden inside for the New Year",
      "Can be made with commercial filo, but handmade is thicker and chewier"
    ],
    "references": [{ "source": "Sofia Culinary Archive" }, { "source": "Balkan Food Studies, 2006" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/tikvenik/hero.webp",
      "dough": "/assets/styles/tikvenik/dough.webp",
      "crumb": "/assets/styles/tikvenik/crumb.webp"
    },
    "relatedLearn": ["filo_pastry_mechanics", "sweet_vegetable_fillings"]
  },
  {
    "id": "cottage_loaf",
    "name": "Cottage Loaf",
    "category": "bread",
    "origin": {
      "country": "United Kingdom",
      "region": "England",
      "period": "19th Century (Victorian)"
    },
    "description": "The classic English 'snowman' loaf: two round dough balls stacked and bonded by a central finger-press. Crusty, dense, and visually striking.",
    "history": "Designed to save floor space in small Victorian ovens by stacking the dough vertically. A staple of the English countryside until the mid-20th century.",
    "globalPresence": "Found in British artisan bakeries, heritage cooking schools, historical demonstrations.",
    "pairings": {
      "canonical": ["Ploughman's Lunch", "Soup"],
      "modern": ["Toasted Cheese"],
      "regional": []
    },
    "tags": ["british", "rustic", "heritage"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [60, 65],
      "salt": [1.8, 2.2],
      "oil": [0, 2],
      "sugar": [0, 1],
      "cocoa": [0, 0],
      "flourStrength": "W260-W300",
      "fermentationSteps": [
        "Bulk ferment",
        "Divide 2:1 ratio",
        "Round both pieces",
        "Stack small on large",
        "Press center (dock)",
        "Slash sides",
        "Bake"
      ],
      "ovenTemp": [220, 240],
      "recommendedUse": ["Soup Bowl", "Picnic Loaf"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Toppling → Top ball too big or not centered → Use a 2:1 weight ratio (bottom:top)",
      "Separation → Not docked deeply enough → Press your finger all the way through both layers",
      "Dense → Underproofed → Proof until puffy but stable"
    ],
    "notes": [
      "The central 'docking' is structural, welding the two pieces together",
      "Slashing the sides helps the loaf expand evenly without tipping",
      "Traditionally a lean white dough, but wholemeal versions exist"
    ],
    "references": [{ "source": "British Museum Manuscripts" }, { "source": "Elizabeth David, 1977" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/cottage_loaf/hero.webp",
      "dough": "/assets/styles/cottage_loaf/dough.webp",
      "crumb": "/assets/styles/cottage_loaf/crumb.webp"
    },
    "relatedLearn": ["hearth_loaf_geometry", "crust_development_lean_breads"]
  },
  {
    "id": "arepa_andina",
    "name": "Arepa Andina",
    "category": "flatbread",
    "origin": {
      "country": "Venezuela/Colombia",
      "region": "Andes",
      "period": "19th Century"
    },
    "description": "A wheat-based arepa from the Andes mountains. Denser and sweeter than the corn version, often eaten for breakfast with cheese and coffee.",
    "history": "Wheat thrives in the high-altitude Andes, unlike tropical corn. This regional variant evolved to use the local crop, incorporating baking soda/powder for lift.",
    "globalPresence": "Common in Andean breakfast stalls, cafés, bakeries and home kitchens in Mérida, Táchira and Santander.",
    "pairings": {
      "canonical": ["Smoked Cheese (Queso Ahumado)", "Coffee"],
      "modern": ["Perico (Scrambled Eggs)"],
      "regional": ["Natilla"]
    },
    "tags": ["andean", "wheat", "flatbread"],
    "difficulty": "Easy",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [50, 60],
      "salt": [1.5, 2.0],
      "oil": [4, 8],
      "sugar": [4, 8],
      "cocoa": [0, 0],
      "flourStrength": "low-medium (AP flour)",
      "fermentationSteps": [
        "Mix dough",
        "Rest 30m",
        "Shape discs",
        "Dock with fork",
        "Griddle slow"
      ],
      "ovenTemp": [180, 200],
      "recommendedUse": ["Breakfast", "Afternoon Snack"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Tough → Overworked gluten → Mix only until combined; rest is crucial",
      "Burnt → Sugar content high → Cook on low-medium heat",
      "Raw Center → Too thick → Roll to 1cm thickness max"
    ],
    "notes": [
      "Often enriched with egg and butter/lard",
      "The texture is more like a dense biscuit or scone than a fluffy bread",
      "Docking prevents it from puffing up like a pita"
    ],
    "references": [{ "source": "Fundación Bigott, 2009" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/arepa_andina/hero.webp",
      "dough": "/assets/styles/arepa_andina/dough.webp",
      "crumb": "/assets/styles/arepa_andina/crumb.webp"
    },
    "relatedLearn": ["direct_mix_flatbreads", "wheat_vs_corn_structure"]
  },
  {
    "id": "flammkuchen",
    "name": "Tarte Flambée / Flammkuchen",
    "category": "pizza",
    "origin": {
      "country": "France/Germany",
      "region": "Alsace",
      "period": "18th Century"
    },
    "description": "The 'Pie Baked in the Flames': an ultra-thin, unleavened (or lightly leavened) dough spread with crème fraîche, onions, and bacon lardons. Crisp and smoky.",
    "history": "Alsatian farmers used this to test the temperature of their wood-fired ovens. If it baked in 2 minutes without burning, the oven was ready for bread.",
    "globalPresence": "Served in Alsatian restaurants, wine taverns, German-French border villages and modern European bistros.",
    "pairings": {
      "canonical": ["Riesling Wine", "Green Salad"],
      "modern": ["Munster Cheese", "Mushrooms"],
      "regional": ["Sweet (Apple/Cinnamon)"]
    },
    "tags": ["alsace", "thin", "high_heat"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [50, 60],
      "salt": [1.8, 2.2],
      "oil": [2, 5],
      "sugar": [0, 0],
      "cocoa": [0, 0],
      "flourStrength": "medium",
      "fermentationSteps": [
        "Mix stiff dough",
        "Rest 1h",
        "Roll paper thin",
        "Top",
        "Bake max temp"
      ],
      "ovenTemp": [270, 400],
      "recommendedUse": ["Appetizer", "Wine Pairing"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Soggy → Toppings too wet or oven too cool → Use thick crème fraîche and max heat",
      "Thick Crust → Rolled too thick → Must be <2mm thick",
      "Burnt Onions → Sliced too thick → Slice onions paper thin"
    ],
    "notes": [
      "Traditionally uses 'fromage blanc' or crème fraîche seasoned with nutmeg",
      "The dough does not need much yeast (if any); it's about the crispness",
      "Wood fire provides essential char and smoke flavor"
    ],
    "references": [{ "source": "Musée Alsacien Archive" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/flammkuchen/hero.webp",
      "dough": "/assets/styles/flammkuchen/dough.webp",
      "crumb": "/assets/styles/flammkuchen/crumb.webp"
    },
    "relatedLearn": ["ultra_thin_dough_mechanics", "high_heat_baking"]
  },
  {
    "id": "lepinja",
    "name": "Lepinja",
    "category": "flatbread",
    "origin": {
      "country": "Balkans",
      "region": "Serbia/Bosnia",
      "period": "Ottoman Era"
    },
    "description": "The Balkan burger bun: a soft, airy, triple-fermented flatbread that puffs up like a pillow in high heat. Spongy crumb designed to soak up meat juices.",
    "history": "A descendant of Ottoman pide, adapted in the Balkans to accompany Cevapi (skinless sausages). The 'Somun' of Sarajevo is a famous variant.",
    "globalPresence": "Widely served in Balkan grills, bakeries, cevapi shops and street food stalls.",
    "pairings": {
      "canonical": ["Cevapi (Sausages)", "Kajmak (Clotted Cream)", "Ajvar"],
      "modern": ["Pljeskavica (Burger)"],
      "regional": ["Onion Cubes"]
    },
    "tags": ["balkan", "pocket", "high_heat"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [70, 80],
      "salt": [1.8, 2.0],
      "oil": [0, 2],
      "sugar": [0, 1],
      "cocoa": [0, 0],
      "flourStrength": "W280-W320 (High Protein)",
      "fermentationSteps": [
        "Sponge (Poolish)",
        "Mix very soft dough",
        "Bulk 1h",
        "Divide and ball",
        "Rest 20m",
        "Flatten and cross-hatch",
        "Proof 30m",
        "Bake max temp"
      ],
      "ovenTemp": [250, 300],
      "recommendedUse": ["Cevapi Sandwich", "Dip Holder"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Flat → Oven not hot enough → Needs thermal shock (250°C+) to puff",
      "Dense → Hydration too low → Keep dough sticky and handle with wet hands",
      "Pale → Steam missing → Spray water before baking"
    ],
    "notes": [
      "The signature cross-hatch pattern is made with a dull knife or lattice cutter",
      "Traditionally baked in wood-fired ovens for a smoky flavor and instant spring",
      "Often dipped in beef broth (lepinja sa močom) before serving"
    ],
    "references": [{ "source": "Belgrade Museum of Bread" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/lepinja/hero.webp",
      "dough": "/assets/styles/lepinja/dough.webp",
      "crumb": "/assets/styles/lepinja/crumb.webp"
    },
    "relatedLearn": ["pocket_bread_formation", "thermal_shock_baking"]
  },
  {
    "id": "gozleme",
    "name": "Gözleme",
    "category": "flatbread",
    "origin": {
      "country": "Turkey",
      "region": "Anatolia",
      "period": "Pre-Ottoman"
    },
    "description": "A Turkish hand-rolled pastry flatbread, filled, sealed, and cooked on a convex griddle (sac). Crisp, blistered spots and savory fillings.",
    "history": "Nomadic Yörük origin. The name comes from 'köz' (embers) or 'göz' (compartment/pocket). A staple of Anatolian village life.",
    "globalPresence": "Served in Turkish bazaars, breakfast houses, street vendors and Anatolian restaurants.",
    "pairings": {
      "canonical": ["Ayran (Yogurt Drink)", "Pickles"],
      "modern": ["Sweet Nutella"],
      "regional": ["Spinach & Feta"]
    },
    "tags": ["turkish", "filled", "griddle"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [50, 55],
      "salt": [1.5, 2.0],
      "oil": [2, 5],
      "sugar": [0, 0],
      "cocoa": [0, 0],
      "flourStrength": "medium",
      "fermentationSteps": [
        "Mix dough",
        "Rest 30m",
        "Roll paper thin (Oklava)",
        "Fill center",
        "Fold envelope style",
        "Cook on griddle"
      ],
      "ovenTemp": [200, 240],
      "recommendedUse": ["Breakfast", "Street Snack"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Tough → Dough too dry or not rested → Hydrate well and rest to relax gluten",
      "Raw Edges → Folded too thick → Roll edges thinner than the center",
      "Burning → Heat too high → Cook medium-high and brush with butter after flipping"
    ],
    "notes": [
      "The 'Oklava' (thin rolling pin) is essential for getting the dough translucent",
      "Unleavened or very lightly leavened to ensure crispness",
      "Butter is brushed on *after* cooking, not before, to prevent burning"
    ],
    "references": [{ "source": "Topkapı Kitchen Archives" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/gozleme/hero.webp",
      "dough": "/assets/styles/gozleme/dough.webp",
      "crumb": "/assets/styles/gozleme/crumb.webp"
    },
    "relatedLearn": ["filled_flatbread_techniques", "griddle_temperature_control"]
  },
  {
    "id": "pain_de_epi",
    "name": "Pain d’Épi",
    "category": "bread",
    "origin": {
      "country": "France",
      "region": "National",
      "period": "19th Century"
    },
    "description": "The 'Wheat Stalk' Bread: a baguette dough cut with scissors to resemble a head of wheat. Maximizes crust surface area for crunch lovers.",
    "history": "Created by French bakers to increase the crust-to-crumb ratio and create a 'pull-apart' loaf that didn't require a knife at the table.",
    "globalPresence": "Found in artisan bakeries, bakery schools, decorative bread displays.",
    "pairings": {
      "canonical": ["Butter", "Charcuterie"],
      "modern": ["Fondue"],
      "regional": []
    },
    "tags": ["french", "decorative", "lean"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [65, 70],
      "salt": [1.8, 2.0],
      "oil": [0, 0],
      "sugar": [0, 0],
      "cocoa": [0, 0],
      "flourStrength": "W260-W280 (T65)",
      "fermentationSteps": [
        "Mix baguette dough",
        "Bulk 2h (folds)",
        "Shape cylinder",
        "Proof 45m",
        "Cut deep V-shapes with scissors",
        "Alternate points L/R",
        "Bake with steam"
      ],
      "ovenTemp": [240, 250],
      "recommendedUse": ["Dinner Party Centerpiece", "Picnic"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Loss of Definition → Dough too wet or overproofed → Use slightly stiffer dough than baguette",
      "Scissors Stick → Dough sticky → Dip scissors in flour between every cut",
      "Flat → Cut too shallow → Cut almost all the way through to the bottom"
    ],
    "notes": [
      "Essentially a baguette shaped differently; uses the same dough",
      "The cuts act as scoring, so no razor blade is needed",
      "Bakes faster than a baguette due to increased surface area"
    ],
    "references": [{ "source": "Calvel, 1990" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/pain_de_epi/hero.webp",
      "dough": "/assets/styles/pain_de_epi/dough.webp",
      "crumb": "/assets/styles/pain_de_epi/crumb.webp"
    },
    "relatedLearn": ["decorative_shaping_techniques", "steam_and_crust_science"]
  },
  {
    "id": "mohnstriezel",
    "name": "Mohnstriezel",
    "category": "enriched_bread",
    "origin": {
      "country": "Austria",
      "region": "Vienna",
      "period": "18th Century"
    },
    "description": "An Austrian poppy seed braid: sweet yeast dough filled with a rich, moist poppy seed paste and braided into a loaf.",
    "history": "A staple of Austro-Hungarian baking. 'Mohn' (poppy) was a prized crop in Central Europe. The braid symbolizes the weaving of life.",
    "globalPresence": "Found in Austrian/German bakeries, Christmas markets, breakfast cafés.",
    "pairings": {
      "canonical": ["Coffee (Melange)", "Warm Vanilla Sauce"],
      "modern": ["Ice Cream"],
      "regional": []
    },
    "tags": ["austrian", "german", "poppy_seed", "braided"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [55, 60],
      "salt": [1.5, 1.8],
      "oil": [10, 15],
      "sugar": [10, 15],
      "cocoa": [0, 0],
      "flourStrength": "W280-W320",
      "fermentationSteps": [
        "Mix enriched dough",
        "Bulk 1h",
        "Roll rectangle",
        "Spread filling",
        "Roll log",
        "Cut and braid",
        "Proof",
        "Bake"
      ],
      "ovenTemp": [170, 180],
      "recommendedUse": ["Coffee Time (Jause)", "Breakfast"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Raw Interior → Filling too wet → Cook the poppy seed filling with milk/semolina to thicken",
      "Bursting → Rolled too tight → Roll loosely to allow expansion",
      "Bitter → Rancid poppy seeds → Taste seeds before grinding; they spoil fast"
    ],
    "notes": [
      "The filling (Mohnfülle) often contains raisins, rum, and lemon zest",
      "Grinding the poppy seeds is mandatory to release their oil and flavor",
      "Glazed with apricot jam (apricoting) after baking for shine"
    ],
    "references": [{ "source": "Austrian Culinary Archives" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/mohnstriezel/hero.webp",
      "dough": "/assets/styles/mohnstriezel/dough.webp",
      "crumb": "/assets/styles/mohnstriezel/crumb.webp"
    },
    "relatedLearn": ["central_european_sweet_doughs", "braid_geometry_tension"]
  },
  {
    "id": "pan_de_mallorca",
    "name": "Pan de Mallorca",
    "category": "enriched_bread",
    "origin": {
      "country": "Puerto Rico",
      "region": "San Juan",
      "period": "1900s"
    },
    "description": "Puerto Rico's favorite sweet roll: a soft, eggy, spiral-shaped bun dusted heavily with powdered sugar. Rich, buttery, and yellow-crumbed.",
    "history": "Derived from the Majorcan 'Ensaimada', brought to Puerto Rico by immigrants. It evolved from a lard-based celebration bread to a butter-based daily breakfast staple.",
    "globalPresence": "Found in Puerto Rican bakeries, cafés, breakfast shops and Caribbean grocery chains.",
    "pairings": {
      "canonical": ["Cafe con Leche", "Ham & Cheese (Sandwich de Mallorca)"],
      "modern": ["Guava Butter"],
      "regional": []
    },
    "tags": ["caribbean", "sweet", "spiral"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [60, 65],
      "salt": [1.5, 1.8],
      "oil": [15, 20],
      "sugar": [15, 20],
      "cocoa": [0, 0],
      "flourStrength": "W260-W300",
      "fermentationSteps": [
        "Mix enriched dough",
        "Bulk 1.5h",
        "Roll thin strip",
        "Brush fat",
        "Coil loose spiral",
        "Proof until touching",
        "Bake"
      ],
      "ovenTemp": [170, 180],
      "recommendedUse": ["Breakfast Sandwich", "Sweet Snack"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Unraveling → End not tucked → Tuck the tail of the spiral under the bun",
      "Dry → Overbaked → Bake only until pale golden; it should remain soft",
      "Dense → Dough too cold → Proof in a warm, humid environment"
    ],
    "notes": [
      "The spiral shape allows the bun to be pulled apart",
      "Often sliced horizontally and used for savory sandwiches (sweet-salty contrast)",
      "Generous powdered sugar dusting is non-negotiable"
    ],
    "references": [{ "source": "Ortíz Cuadra, 2013" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/pan_de_mallorca/hero.webp",
      "dough": "/assets/styles/pan_de_mallorca/dough.webp",
      "crumb": "/assets/styles/pan_de_mallorca/crumb.webp"
    },
    "relatedLearn": ["semi_laminated_sweet_doughs", "enrichment_ratios"]
  },
  {
    "id": "kachori",
    "name": "Kachori",
    "category": "other",
    "origin": {
      "country": "India",
      "region": "Rajasthan/Uttar Pradesh",
      "period": "17th Century"
    },
    "description": "A spicy, deep-fried Indian pastry filled with moong dal (lentils) or peas. The crust is flaky and crisp, while the filling is aromatic and savory.",
    "history": "Created by the Marwaris of Rajasthan as a travel food that could last for days. 'Kachori' comes from the Sanskrit 'Kacchurika' (fried dumpling).",
    "globalPresence": "Common in Indian street stalls, sweet shops, breakfast joints and railway stations.",
    "pairings": {
      "canonical": ["Tamarind Chutney", "Green Chutney", "Aloo Sabzi (Potato Curry)"],
      "modern": ["Yogurt Chaat"],
      "regional": ["Kadhi"]
    },
    "tags": ["indian", "fried", "spiced"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [45, 50],
      "salt": [1.5, 2.0],
      "oil": [15, 20],
      "sugar": [0, 0],
      "cocoa": [0, 0],
      "flourStrength": "medium (Maida)",
      "fermentationSteps": [
        "Rub fat into flour (Moyen)",
        "Mix stiff dough",
        "Rest 30m",
        "Fill",
        "Fry low heat"
      ],
      "ovenTemp": [150, 160],
      "recommendedUse": ["Breakfast", "Tea Time Snack"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Blisters → Oil too hot → Fry on very low heat initially to ensure smooth crust",
      "Soggy → Frying too fast → Must fry for 15-20 mins to dehydrate the shell",
      "Bursting → Seam not sealed → Pinch tightly and flatten gently"
    ],
    "notes": [
      "The 'Moyen' (rubbing fat into flour) is crucial for the flaky texture",
      "The filling must be dry (roasted) to prevent the crust from getting soggy",
      "Khasta Kachori is the crisp version; Raj Kachori is the larger, puffed version"
    ],
    "references": [{ "source": "Achaya, 1998" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/kachori/hero.webp",
      "dough": "/assets/styles/kachori/dough.webp",
      "crumb": "/assets/styles/kachori/crumb.webp"
    },
    "relatedLearn": ["fried_dough_shells", "legume_based_fillings"]
  },
  {
    "id": "mjukkaka",
    "name": "Mjukkaka (Älbrot)",
    "category": "flatbread",
    "origin": {
      "country": "Sweden",
      "region": "Norrland",
      "period": "Viking Age"
    },
    "description": "Northern Sweden's 'Soft Cake': a round, docked flatbread made with milk, syrup, and sometimes barley/rye. Soft, pliable, and slightly sweet.",
    "history": "Traditionally baked in wood-fired bagarstugor (bakehouses) in large batches to last through the winter. A staple of the Sami and Northern Swedish diet.",
    "globalPresence": "Found in Swedish supermarkets, bakeries, northern cafés, and Sámi cultural food houses.",
    "pairings": {
      "canonical": ["Butter", "Messmör (Whey Butter)"],
      "modern": ["Smoked Reindeer", "Cheese"],
      "regional": ["Surströmming"]
    },
    "tags": ["swedish", "soft", "flatbread"],
    "difficulty": "Easy",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [65, 70],
      "salt": [1.5, 1.8],
      "oil": [4, 8],
      "sugar": [5, 8],
      "cocoa": [0, 0],
      "flourStrength": "W220-W260",
      "fermentationSteps": [
        "Mix dough",
        "Bulk 1h",
        "Divide balls",
        "Roll rounds",
        "Dock thoroughly",
        "Proof 20m",
        "Bake high heat"
      ],
      "ovenTemp": [250, 275],
      "recommendedUse": ["Breakfast Sandwich", "Soup Side"],
      "difficulty": "Easy"
    },
    "watchouts": [
      "Dry → Overbaked → Bake fast at high temp to keep it soft",
      "Ballooning → Not docked → Use a kruskavel (spiked rolling pin) or fork",
      "Tough → Too much flour during rolling → Use minimal dusting flour"
    ],
    "notes": [
      "Golden Syrup (Ljus Sirap) gives the characteristic flavor and moisture",
      "Often contains a mix of wheat and rye or barley flour",
      "Traditionally cooled under a cloth to steam and soften the crust"
    ],
    "references": [{ "source": "Nordiska Museet Archives" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/mjukkaka/hero.webp",
      "dough": "/assets/styles/mjukkaka/dough.webp",
      "crumb": "/assets/styles/mjukkaka/crumb.webp"
    },
    "relatedLearn": ["scandinavian_soft_breads", "docking_steam_control"]
  },
  {
    "id": "pissaladiere",
    "name": "Pissaladière",
    "category": "flatbread",
    "origin": {
      "country": "France",
      "region": "Nice",
      "period": "19th Century"
    },
    "description": "The Niçoise pizza (without tomatoes): a thick bread dough topped with a layer of caramelized onions, anchovies, and black olives (Cailletier).",
    "history": "Named after 'Pissalat', a salty fish paste/condiment from Nice. Originally a morning snack for workers, now a staple of Provençal cuisine.",
    "globalPresence": "Popular in Niçoise bakeries, markets, bistros, Mediterranean cafés.",
    "pairings": {
      "canonical": ["Rosé Wine", "Mesclun Salad"],
      "modern": ["Thyme"],
      "regional": []
    },
    "tags": ["provence", "savory", "olive_oil"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [60, 65],
      "salt": [1.8, 2.0],
      "oil": [5, 8],
      "sugar": [0, 0],
      "cocoa": [0, 0],
      "flourStrength": "W240-W260",
      "fermentationSteps": [
        "Mix bread dough",
        "Bulk 1h",
        "Spread in pan",
        "Top with onions",
        "Arrange anchovies/olives",
        "Proof 30m",
        "Bake"
      ],
      "ovenTemp": [200, 220],
      "recommendedUse": ["Appetizer", "Picnic"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Soggy Dough → Onions too wet → Cook onions down to a thick jam (compote) before topping",
      "Salty → Anchovies not rinsed → Rinse salted anchovies or use oil-packed sparingly",
      "Burnt Onions → Oven too hot → Bake lower and longer than pizza"
    ],
    "notes": [
      "The onion layer should be half as thick as the dough",
      "Onions must be cooked slowly (confi) for 1-2 hours without browning too much",
      "The dough is closer to bread than pizza; it should have some crumb"
    ],
    "references": [{ "source": "Reboul, 1897" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/pissaladiere/hero.webp",
      "dough": "/assets/styles/pissaladiere/dough.webp",
      "crumb": "/assets/styles/pissaladiere/crumb.webp"
    },
    "relatedLearn": ["mediterranean_topped_breads", "oil_hydration_balancing"]
  },
  {
    "id": "pan_cubano",
    "name": "Pan Cubano",
    "category": "enriched_bread",
    "origin": {
      "country": "Cuba",
      "region": "Havana/Tampa",
      "period": "Late 19th Century"
    },
    "description": "The essential Cuban sandwich bread: a long, white, lard-enriched loaf with a thin, crispy crust and a soft, airy interior. Distinguished by a palmetto leaf impression.",
    "history": "Developed in Cuban bakeries (and Ybor City, Florida) to feed cigar factory workers. The palmetto leaf was originally used to create the split top.",
    "globalPresence": "Served in Cuban bakeries, sandwich shops, Caribbean groceries.",
    "pairings": {
      "canonical": ["Cubano Sandwich", "Cafe con Leche"],
      "modern": ["Butter Toast (Tostada)"],
      "regional": []
    },
    "tags": ["cuban", "soft", "enriched"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [58, 65],
      "salt": [1.8, 2.2],
      "oil": [4, 8],
      "sugar": [4, 8],
      "cocoa": [0, 0],
      "flourStrength": "W240-W280",
      "fermentationSteps": [
        "Mix dough",
        "Bulk 1.5h",
        "Shape long batards",
        "Proof",
        "Place palmetto leaf/score",
        "Bake with steam"
      ],
      "ovenTemp": [200, 220],
      "recommendedUse": ["Cubano Sandwich", "Breakfast Toast"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Thick Crust → No steam or too much fat → Pan Cubano crust should be paper thin and crackly",
      "Dense → Underproofed → Proof until very light",
      "No Split → Scored too late or shallow → Place leaf/string before proofing or score deeply"
    ],
    "notes": [
      "Lard (manteca) is traditional and essential for the authentic flavor and crust texture",
      "A moist palmetto leaf strip placed on top during baking creates the signature split",
      "Stales quickly; best used same day or toasted"
    ],
    "references": [{ "source": "Ybor City Museum Archives" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/pan_cubano/hero.webp",
      "dough": "/assets/styles/pan_cubano/dough.webp",
      "crumb": "/assets/styles/pan_cubano/crumb.webp"
    },
    "relatedLearn": ["split_top_loaf_science", "caribbean_enriched_breads"]
  },
  {
    "id": "msemen",
    "name": "Msemen",
    "category": "flatbread",
    "origin": {
      "country": "Morocco",
      "region": "Maghreb",
      "period": "Medieval"
    },
    "description": "A square, laminated Moroccan pancake made from semolina and flour. Crispy, flaky layers on the outside, chewy on the inside.",
    "history": "A staple of Maghrebi cuisine for centuries. The name comes from the verb 'semmen' (to grease/enrich). Eaten plain or stuffed.",
    "globalPresence": "Found in Moroccan breakfast stalls, souks, cafés and family kitchens.",
    "pairings": {
      "canonical": ["Honey & Butter", "Mint Tea"],
      "modern": ["Cheese", "Jam"],
      "regional": ["Khlii (Preserved Meat)"]
    },
    "tags": ["moroccan", "laminated", "flatbread"],
    "difficulty": "Medium",
    "fermentationType": "direct",
    "technicalProfile": {
      "hydration": [55, 60],
      "salt": [1.5, 2.0],
      "oil": [10, 15],
      "sugar": [0, 2],
      "cocoa": [0, 0],
      "flourStrength": "medium (Semolina mix)",
      "fermentationSteps": [
        "Mix dough",
        "Rest 30m",
        "Oil hands",
        "Stretch thin",
        "Sprinkle semolina",
        "Fold square",
        "Griddle"
      ],
      "ovenTemp": [180, 200],
      "recommendedUse": ["Breakfast", "Afternoon Tea"],
      "difficulty": "Medium"
    },
    "watchouts": [
      "Tough → Semolina too coarse or gluten tight → Use fine semolina and rest dough well",
      "No Layers → Not enough oil/semolina between folds → Sprinkle semolina between every fold",
      "Greasy → Heat too low → Cook on medium heat to crisp up"
    ],
    "notes": [
      "Fine semolina (finot) gives the dough extensibility and a unique texture",
      "The folding technique is similar to puff pastry but uses oil instead of butter block",
      "Can be stuffed with onions and fat (Msemen Maamer) for a savory version"
    ],
    "references": [{ "source": "Moroccan Culinary Heritage Institute" }],
    "isPro": false,
    "source": "official",
    "createdAt": "2025-01-01",
    "releaseDate": "2025-01-01",
    "images": {
      "hero": "/assets/styles/msemen/hero.webp",
      "dough": "/assets/styles/msemen/dough.webp",
      "crumb": "/assets/styles/msemen/crumb.webp"
    },
    "relatedLearn": ["oil_lamination_techniques", "maghrebi_flatbreads"]
  }
];
