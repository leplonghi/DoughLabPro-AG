MASTER DOCUMENT — PART 3/3

SECTION 3 — ALL STYLES (Hybrid Technical Format)
Lote 1: The Global Pizza Canon (10 styles)

Estes 10 estilos representam os pilares técnicos da pizza mundial e formam a fundação do DoughLabPro.
Cada um está 100% alinhado às referências seguintes:

Modernist Pizza (2021)

AVPN Regulations (2016 & 2020 updates)

Tony Gemignani – The Pizza Bible

Caputo, Petra, Le 5 Stagioni flour tech sheets

Italian baking literature: F. Caprini, M. Caputo, G. Favia

American craft pizza standards (NY slice shops, regional pan styles)

EU cultural documentation (Neapolitan UNESCO designation)

=============================================
🍕 STYLE 01 — NEAPOLITAN AVPN CLASSIC
=============================================
3A — Technical Summary

Hydration: 58–63% (AVPN standard)

Salt: 2.5–3.0%

Oil: 0%

Sugar: 0%

Flour Strength: W 280–320 (Caputo Pizzeria, Petra 5063, Le 5 Stagioni Napoletana)

Mixing: Low-speed, slow-development

Fermentation:

Bulk: 1.5–2 h at 22–25°C

Balling: 6–24 h at 20–25°C

No cold fermentation in the traditional protocol (modern exceptions exist)

Oven: Wood-fired 430–485°C, 60–90 seconds

Dough Handling: High extensibility, low elasticity

Risks: Overproofing in warm climates; sourness when fermented >24 h

Variants: Contemporary Canotto, Higher HY Neapolitan

Climate Note: Reduce hydration by 1–2% in >28°C climates

3B — Short History & Cultural Context

The Neapolitan pizza is one of the world’s most codified dough traditions. The Associazione Verace Pizza Napoletana (AVPN), established in 1984, defines strict rules regarding flour strength, fermentation, dough handling, and oven temperature. In 2017, the “Art of Neapolitan Pizzaiuolo” was inscribed by UNESCO as Intangible Cultural Heritage. Its hallmark features are a soft, extensible dough, leopard spotting, a high cornicione, and extremely fast baking in a wood-fired dome oven.

3C — JSON Schema Block
{
  "id": "neapolitan_avpn_classic",
  "name": "Neapolitan AVPN Classic",
  "category": "pizza",
  "origin": {
    "country": "Italy",
    "region": "Campania",
    "period": "18th–20th century; codified 1984"
  },
  "history": "The AVPN classic represents the codified standard of Neapolitan pizza...",
  "technicalProfile": {
    "hydration": [58, 63],
    "salt": [2.5, 3.0],
    "oil": [0, 0],
    "sugar": [0, 0],
    "flourStrength": "W280–320",
    "prefermentDescription": "Direct dough (impasto diretto)",
    "fermentation": {
      "bulk": "1.5–2h at 22–25°C",
      "proof": "6–24h at 20–25°C",
      "coldRetard": "Not traditional; allowed in modern AVPN practice"
    },
    "ovenRecommendations": "Wood-fired 430–485°C, 60–90 seconds",
    "difficulty": "Hard",
    "recommendedUse": "Authentic Margherita and Marinara pizzas"
  },
  "risks": [
    "Overproofing at warm temperatures",
    "Weak gluten if flour W < 280",
    "Burning if floor > 450°C"
  ],
  "notes": ["Extensible dough, low elasticity"],
  "variations": ["Contemporary Canotto"],
  "tags": ["neapolitan", "avpn", "italy", "wood-fired", "high-heat"],
  "references": [
    "AVPN International Regulations",
    "Modernist Pizza",
    "UNESCO Intangible Cultural Heritage"
  ]
}

=============================================
🍕 STYLE 02 — NEAPOLITAN CONTEMPORARY (CANOTTO)
=============================================
3A — Technical Summary

Hydration: 68–75%

Salt: 2.5–2.8%

Oil: 0–1%

Sugar: 0–1%

Flour Strength: W 300–340

Fermentation:

Bulk: 2–4h

Ball: 12–24h, ideally at 18–22°C

Oven: 450–485°C wood-fired

Typical Features: Large alveolation, inflated cornicione

Risks: Weak fermentation → flat rim; overhydration for beginners

Climate Note: Reduce hydration by 3–5% in hot climates

3B — Short History

The “Canotto” (meaning “inflatable raft”) style originated in Campania in the 2010s. It pushes the boundaries of traditional Neapolitan pizza by increasing hydration, extending maturation, and using stronger flours. Though inspired by AVPN rules, it is intentionally modern and Instagram-driven.

3C — JSON Schema Block
{
  "id": "neapolitan_contemporary_canotto",
  "name": "Neapolitan Contemporary (Canotto)",
  "category": "pizza",
  "origin": {
    "country": "Italy",
    "region": "Campania",
    "period": "2010s"
  },
  "history": "The Canotto style emerged as a hyper-aerated evolution of traditional Neapolitan...",
  "technicalProfile": {
    "hydration": [68, 75],
    "salt": [2.5, 2.8],
    "oil": [0, 1],
    "sugar": [0, 1],
    "flourStrength": "W300–340",
    "prefermentDescription": "Direct dough; some pizzerias use low % poolish",
    "fermentation": {
      "bulk": "2–4h",
      "proof": "12–24h at 18–22°C"
    },
    "ovenRecommendations": "Wood-fired 450–485°C",
    "difficulty": "Hard",
    "recommendedUse": "High-aeration pizzas with dramatic cornicione"
  },
  "risks": [
    "Overhydration for beginners",
    "Flat rim if fermentation underdeveloped"
  ],
  "notes": ["Requires strong flour", "High extensibility"],
  "variations": ["Ultra-HY Canotto"],
  "tags": ["neapolitan", "canotto", "modern", "high-hydration"],
  "references": ["Modernist Pizza", "Italian pizza literature"]
}

=============================================
🍕 STYLE 03 — NEAPOLITAN HOME-OVEN ADAPTED
=============================================
3A — Technical Summary

Hydration: 62–70%

Salt: 2.5–3.0%

Oil: 1–2% (to assist browning in low-heat ovens)

Sugar: 0–1%

Flour Strength: W 260–300

Fermentation: 24–48h with cold phase

Oven: 260–290°C home oven + steel/stone

Risks: Pale crust if sugar/oil too low; toughness if overstretched

3B — Short History

Home-oven Neapolitan adaptations gained global popularity as enthusiasts sought ways to reproduce high-heat Neapolitan characteristics in 250–300°C domestic ovens. The addition of small oil percentages and higher hydration improves color, softness, and extensibility.

3C — JSON Schema Block
{
  "id": "neapolitan_home_oven",
  "name": "Neapolitan Home-Oven Adapted",
  "category": "pizza",
  "origin": {
    "country": "Italy",
    "region": "Global adaptation",
    "period": "2000s–present"
  },
  "history": "Home-oven Neapolitan adaptations emerged as enthusiasts attempted to replicate high-heat...",
  "technicalProfile": {
    "hydration": [62, 70],
    "salt": [2.5, 3.0],
    "oil": [1, 2],
    "sugar": [0, 1],
    "flourStrength": "W260–300",
    "prefermentDescription": "Direct dough; cold retard 24–48h recommended",
    "fermentation": {
      "bulk": "1–2h",
      "proof": "24–48h cold retard"
    },
    "ovenRecommendations": "Home oven 260–290°C using steel or stone",
    "difficulty": "Medium",
    "recommendedUse": "Neapolitan-style pizzas in home ovens"
  },
  "risks": [
    "Pale crust if low sugar/oil",
    "Toughness if overstretched"
  ],
  "tags": ["home-oven", "neapolitan", "adapted"],
  "references": ["Modernist Pizza", "Home-oven baking research"]
}

=============================================
🍕 STYLE 04 — NEW YORK SLICE SHOP (CLASSIC)
=============================================
3A — Technical Summary

Hydration: 60–65%

Salt: 2.5–3.0%

Oil: 2–5% (blend of vegetable oil/olive oil)

Sugar: 1–3% (browning + shelf life)

Flour Strength: High-gluten 13.5–14.5% protein

Preferment: Optional poolish (0–20%)

Fermentation:

Bulk: 1h at RT

Cold: 24–72h

Oven: 290–330°C deck oven

Dough Traits: Medium extensibility, moderate chew, crisp bottom

Risks: Over-fermentation → gumline; under-fermentation → dense crumb

Climate Note: Reduce sugar to prevent excessive browning in hot ovens

3B — Short History

Born in early 20th-century New York, this slice-shop style evolved from Neapolitan immigrant traditions, adapting to American flour strength (high-gluten) and deck ovens. New York slices are characterized by a balance between crispness and foldability, with cold fermentation becoming widespread by the 1960s.

3C — JSON Schema Block
{
  "id": "new_york_slice_shop",
  "name": "New York Slice Shop",
  "category": "pizza",
  "origin": {
    "country": "United States",
    "region": "New York",
    "period": "Early 20th century"
  },
  "history": "New York slices evolved from Neapolitan immigrant traditions...",
  "technicalProfile": {
    "hydration": [60, 65],
    "salt": [2.5, 3.0],
    "oil": [2, 5],
    "sugar": [1, 3],
    "flourStrength": "13.5–14.5% protein",
    "prefermentDescription": "Optional poolish (0–20%)",
    "fermentation": {
      "bulk": "1h at room temperature",
      "proof": "24–72h cold fermentation"
    },
    "ovenRecommendations": "Deck oven 290–330°C",
    "difficulty": "Medium",
    "recommendedUse": "Foldable, classic New York slices"
  },
  "risks": [
    "Gumline from underbaking or sauce seepage",
    "Over-fermentation leads to sour notes"
  ],
  "notes": ["Best baked on lightly oiled deck or screen"],
  "variations": ["Poolish NY", "Zero-sugar NY"],
  "tags": ["ny-style", "american", "deck-oven"],
  "references": [
    "Modernist Pizza",
    "The Pizza Bible",
    "American slice-shop standards"
  ]
}

=============================================
🍕 STYLE 05 — NEW YORK ARTISAN
=============================================
3A — Technical Summary

Hydration: 65–72%

Salt: 2.4–2.8%

Oil: 1–3%

Sugar: 0–2%

Flour Strength: 13–14% protein, artisan-milled flours

Preferment: High use (30–70% poolish/biga)

Fermentation:

Cold: 48–96h

Oven: 330–370°C (artisanal electric/deck)

Traits: Open crumb, blistered crust, artisan handling

Risks: Dough collapse >72h cold fermentation if weak gluten

3B — Short History

The “Artisan NY” movement rose from the early 2000s as bakers combined classic New York formulas with European-inspired fermentation and milling practices. It favors longer maturation, richer aromas, and more complex crumb structure.

3C — JSON Schema Block
{
  "id": "new_york_artisan",
  "name": "New York Artisan",
  "category": "pizza",
  "origin": {
    "country": "United States",
    "region": "New York",
    "period": "2000s–present"
  },
  "history": "Artisan NY pizza merges classic New York formulas with advanced fermentation...",
  "technicalProfile": {
    "hydration": [65, 72],
    "salt": [2.4, 2.8],
    "oil": [1, 3],
    "sugar": [0, 2],
    "flourStrength": "13–14% protein",
    "prefermentDescription": "Poolish or biga: 30–70%",
    "fermentation": {
      "bulk": "1–2h",
      "proof": "48–96h cold fermentation"
    },
    "ovenRecommendations": "Electric/deck 330–370°C",
    "difficulty": "Hard",
    "recommendedUse": "Modern artisan NY-style pizzas with open crumb"
  },
  "risks": [
    "Collapse due to excessive cold fermentation",
    "Difficulty handling high hydration"
  ],
  "tags": ["ny-style", "artisan", "long-fermentation"],
  "references": [
    "Modernist Pizza",
    "Contemporary artisan pizzerias"
  ]
}

=============================================
🍕 STYLE 06 — ROMAN TEGILA / AL TAGLIO
=============================================
3A — Technical Summary

Hydration: 75–90%

Salt: 2.5–3.0%

Oil: 3–6%

Sugar: 0–2%

Flour Strength: W 300–340 or strong Italian flours

Preferment: Common (poolish 80–100%, biga 40–60%)

Fermentation:

Bulk: 12–24h (cold)

Pan proof: 2–4h

Oven: 260–300°C, pan baked

Traits: High aeration, crispy bottom, open honeycomb structure

Risks: Gluten degradation at >90% hydration

3B — Short History

Roman “pizza in teglia” or “al taglio” (“by the cut”) became a modern Roman street-food staple in the late 20th century. High hydration and strong flour produce a tall, airy crumb with a crisp base, often sold rectangular in pans.

3C — JSON Schema Block
{
  "id": "roman_teglia_al_taglio",
  "name": "Roman Teglia (Al Taglio)",
  "category": "pizza",
  "origin": {
    "country": "Italy",
    "region": "Rome",
    "period": "Late 20th century"
  },
  "history": "Roman pan pizza became a modern street-food staple featuring ultra-high hydration...",
  "technicalProfile": {
    "hydration": [75, 90],
    "salt": [2.5, 3.0],
    "oil": [3, 6],
    "sugar": [0, 2],
    "flourStrength": "W300–340",
    "prefermentDescription": "Poolish (80–100%) or biga (40–60%)",
    "fermentation": {
      "bulk": "12–24h cold",
      "proof": "2–4h pan proof"
    },
    "ovenRecommendations": "Electric/deck 260–300°C, baked in pans",
    "difficulty": "Hard",
    "recommendedUse": "Roman pan pizza with open honeycomb crumb"
  },
  "risks": ["Gluten breakdown >90% hydration"],
  "tags": ["roman", "pan-pizza", "high-hydration"],
  "references": ["Modernist Pizza", "Italian pan pizza literature"]
}

=============================================
🍕 STYLE 07 — ROMAN SCROCCHIARELLA
=============================================
3A — Technical Summary

Hydration: 55–65%

Salt: 2.5–3.0%

Oil: 6–10%

Sugar: 1–3%

Flour Strength: W 230–280

Fermentation: 12–24h cold

Oven: 300–330°C, pan baked

Traits: Thin, ultra-crispy (“scrocchiare” = crackling)

Risks: Overbaking → crackers; underbaking → chewy

3B — Short History

This Roman style prioritizes crispness over volume. It evolved separately from “teglia” and represents the Roman tradition of ultra-thin, crackling pizza, often topped lightly.

3C — JSON Schema Block
{
  "id": "roman_scrocchiarella",
  "name": "Roman Scrocchiarella",
  "category": "pizza",
  "origin": {
    "country": "Italy",
    "region": "Rome",
    "period": "20th century"
  },
  "history": "Scrocchiarella is Rome’s ultra-thin, ultra-crispy pizza...",
  "technicalProfile": {
    "hydration": [55, 65],
    "salt": [2.5, 3.0],
    "oil": [6, 10],
    "sugar": [1, 3],
    "flourStrength": "W230–280",
    "prefermentDescription": "Direct or short poolish",
    "fermentation": {
      "bulk": "2–4h",
      "proof": "12–24h cold"
    },
    "ovenRecommendations": "Pan baked at 300–330°C",
    "difficulty": "Easy",
    "recommendedUse": "Ultra-thin Roman crispy pizza"
  },
  "tags": ["roman", "crispy", "thin"],
  "references": ["Modernist Pizza"]
}

=============================================
🍕 STYLE 08 — DETROIT STYLE
=============================================
3A — Technical Summary

Hydration: 68–75%

Salt: 2.5–3%

Oil: 4–8%

Sugar: 1–3%

Flour Strength: Strong bread/pizza flour (12–14% protein)

Fermentation:

Bulk: 1–2h

Pan proof: 2–3h

Oven: 260–290°C

Traits: Rectangular, airy crumb, caramelized cheese edge

Risks: Over-oiling → fry effect; underproof → dense crumb

3B — Short History

Detroit style originated in the 1940s using blue steel automotive pans. Its hallmark is a light, airy crumb and a crispy, cheese-caramelized crust (“frico rim”).

3C — JSON Schema Block
{
  "id": "detroit_style",
  "name": "Detroit Style",
  "category": "pizza",
  "origin": {
    "country": "United States",
    "region": "Detroit",
    "period": "1940s"
  },
  "history": "Detroit pizza emerged in the 1940s using automotive blue steel pans...",
  "technicalProfile": {
    "hydration": [68, 75],
    "salt": [2.5, 3.0],
    "oil": [4, 8],
    "sugar": [1, 3],
    "flourStrength": "12–14% protein",
    "prefermentDescription": "Direct dough",
    "fermentation": {
      "bulk": "1–2h",
      "proof": "2–3h in pan"
    },
    "ovenRecommendations": "260–290°C, pan baked",
    "difficulty": "Medium",
    "recommendedUse": "Detroit-style deep airy pizza with cheese frico rim"
  },
  "tags": ["detroit", "pan-pizza"],
  "references": ["Modernist Pizza", "American regional pizza history"]
}

=============================================
🍕 STYLE 09 — SICILIAN / GRANDMA STYLE
=============================================
3A — Technical Summary

Hydration: 65–75%

Salt: 2.2–2.8%

Oil: 3–8%

Sugar: 1–4%

Flour Strength: 12–13.5% protein

Fermentation:

Bulk: 1h

Cold: Optional 24h

Pan proof: 2–4h

Oven: 240–290°C

Traits: Soft, airy crumb with crunchy base

Risks: Dense crumb if not proofed enough

3B — Short History

Derived from Sicilian sfincione but heavily Americanized. “Grandma” pies are thinner and baked in rectangular pans, often topped with cheese first, then sauce.

3C — JSON Schema Block
{
  "id": "sicilian_grandma",
  "name": "Sicilian / Grandma Style",
  "category": "pizza",
  "origin": {
    "country": "Italy/United States",
    "region": "Sicily / New York",
    "period": "Early 20th century"
  },
  "history": "Sicilian sfincione influenced American Sicilian and Grandma pies...",
  "technicalProfile": {
    "hydration": [65, 75],
    "salt": [2.2, 2.8],
    "oil": [3, 8],
    "sugar": [1, 4],
    "flourStrength": "12–13.5% protein",
    "prefermentDescription": "Direct dough",
    "fermentation": {
      "bulk": "1h",
      "proof": "2–4h in pan"
    },
    "ovenRecommendations": "240–290°C pan baked",
    "difficulty": "Easy",
    "recommendedUse": "American Sicilian/Grandma pan pizzas"
  },
  "tags": ["sicilian", "grandma", "pan-pizza"],
  "references": ["Modernist Pizza", "NY Sicilian baking traditions"]
}

=============================================
🍕 STYLE 10 — BRAZILIAN PIZZERIA (GAS-DECK)
=============================================
3A — Technical Summary

Hydration: 55–62%

Salt: 2.5–3.0%

Oil: 3–6%

Sugar: 2–5%

Flour Strength: Brazilian Type 00/01 (10.5–12.5% protein)

Preferment: Rare; mostly direct dough

Fermentation:

Bulk: 1h

Cold: 0–12h

Oven: 280–330°C gas deck ovens

Traits: Soft crumb, crispy underside, sweeter profile

Risks: Excess sugar → burning

3B — Short History

Brazilian pizzeria culture evolved independently from Italian traditions, influenced by local flours, gas deck ovens, and preference for sweeter doughs. The style gained national identity by the 1990s.

3C — JSON Schema Block
{
  "id": "brazilian_gas_deck",
  "name": "Brazilian Pizzeria (Gas Deck)",
  "category": "pizza",
  "origin": {
    "country": "Brazil",
    "region": "National",
    "period": "1970s–present"
  },
  "history": "Brazilian pizzerias adapted Italian techniques to gas deck ovens and local flours...",
  "technicalProfile": {
    "hydration": [55, 62],
    "salt": [2.5, 3.0],
    "oil": [3, 6],
    "sugar": [2, 5],
    "flourStrength": "10.5–12.5% protein",
    "prefermentDescription": "Direct dough",
    "fermentation": {
      "bulk": "1h",
      "proof": "0–12h cold retard"
    },
    "ovenRecommendations": "Gas deck 280–330°C",
    "difficulty": "Easy",
    "recommendedUse": "Brazilian-style pizzas with mild sweetness"
  },
  "tags": ["brazil", "gas-deck", "latin-america"],
  "references": [
    "Modernist Pizza",
    "Brazilian pizzeria production data"
  ]
}

Lote 2: The Global Bread Canon (5 styles)

These styles represent the core of the bread category, focusing on fermentation complexity and structure.

=============================================
STYLE 11 — BAGUETTE TRADITION (FRENCH AOP FRAME)
=============================================
3A — Technical Summary

Hydration: 65–75% (higher for modern bakeries)

Salt: 1.8–2.2% (regulated by French standards)

Oil/Fat: 0% (Tradition requires flour, water, salt, yeast only)

Sugar: 0%

Flour Strength: T65 French flour (W ~160–220)

Preferment: Optional poolish (0–50%) or levain (0–20%)

Fermentation:

Bulk: 1–3h

Folds: typically 1–2

Proof: 45–75 min

Oven: 240–260°C, with steam injection

Traits: Thin crisp crust, open irregular crumb

Risks: Weak scoring → blowouts; under-steaming → dull crust

Climate Notes: In hot climates reduce yeast 20–40%

Primary References: Modernist Bread, INBP France, French Décret Pain.

3B — Short History

The baguette tradition represents the regulated French approach to breadmaking after the 1993 “Décret Pain,” which defines permissible ingredients. The style prioritizes simple formulas, long fermentation, and precise shaping, resulting in one of the world’s most iconic breads.

3C — JSON Schema Block
{
  "id": "baguette_tradition",
  "name": "Baguette Tradition",
  "category": "bread",
  "origin": {
    "country": "France",
    "region": "National",
    "period": "19th–20th century"
  },
  "history": "The baguette tradition follows the French Décret Pain, emphasizing simplicity, long fermentation, and regulated ingredients.",
  "technicalProfile": {
    "hydration": [65, 75],
    "salt": [1.8, 2.2],
    "oil": [0, 0],
    "sugar": [0, 0],
    "flourStrength": "T65 French flour (W160–220)",
    "prefermentDescription": "Optional poolish up to 50%, levain up to 20%",
    "fermentation": {
      "bulk": "1–3h with folds",
      "proof": "45–75 min",
      "notes": "Cool fermentation optional for improved flavor"
    },
    "ovenRecommendations": "240–260°C with steam injection",
    "difficulty": "Hard",
    "recommendedUse": "Classic French baguettes with crisp crust and irregular crumb"
  },
  "risks": [
    "Poor scoring leads to blowouts",
    "Under-steaming reduces crust shine"
  ],
  "variations": ["Poolish Baguette", "Levain-Enhanced Baguette"],
  "tags": ["french", "tradition", "lean-dough"],
  "references": [
    "Modernist Bread",
    "INBP French baking guidelines",
    "French Décret Pain (1993)"
  ]
}

=============================================
🍞 STYLE 12 — PAIN DE CAMPAGNE (FRENCH COUNTRY BREAD)
=============================================
3A — Technical Summary

Hydration: 68–78%

Salt: 1.8–2.2%

Oil/Fat: 0%

Preferment: Levain (20–40%) or poolish/biga

Flour: Blend of T65 + whole wheat + rye (variable)

Fermentation:

Bulk: 2–4h

Cold retard: 8–24h optional

Oven: 240–260°C, with steam

Traits: Mild acidity, rustic crust, deep aromas

Risks: Too much rye → structural weakness

References: Modernist Bread; Calvel; French baking manuals.

3B — Short History

Pain de Campagne evolved as a rural French loaf using a blend of available flours. With industrialization, it became a symbol of traditional rustic baking, often shaped as boules or bâtards, and matured through levain-based fermentation.

3C — JSON Schema Block
{
  "id": "pain_de_campagne",
  "name": "Pain de Campagne",
  "category": "bread",
  "origin": {
    "country": "France",
    "region": "Countryside",
    "period": "18th–20th century"
  },
  "history": "Pain de Campagne is a rustic French loaf based on levain or preferments and blended flours.",
  "technicalProfile": {
    "hydration": [68, 78],
    "salt": [1.8, 2.2],
    "oil": [0, 0],
    "sugar": [0, 0],
    "flourStrength": "Medium-strength blend flours",
    "prefermentDescription": "Levain 20–40% or poolish/biga",
    "fermentation": {
      "bulk": "2–4h",
      "proof": "8–24h cold retard"
    },
    "ovenRecommendations": "240–260°C with steam",
    "difficulty": "Medium",
    "recommendedUse": "Rustic loaves with mild acidity and aromatic complexity"
  },
  "tags": ["french", "rustic", "levain"],
  "references": [
    "Modernist Bread",
    "Raymond Calvel – Le Goût du Pain"
  ]
}

=============================================
🍞 STYLE 13 — PAIN RUSTIQUE
=============================================
3A — Technical Summary

Hydration: 70–80%

Salt: 1.8–2.2%

Fat/Sugar: 0%

Flour: T65 or bread flour

Preferment: High poolish content (50–100%)

Fermentation:

Bulk: minimal handling

Cold retard: 12–24h

Oven: 240–260°C

Traits: Very open crumb, irregular structure, high extensibility

Risks: Over-proofing → flat loaves

3B — Short History

Popularized by Éric Kayser and later reinforced by Modernist Bread, Pain Rustique embraces minimal shaping and wet doughs to create irregular, aromatic loaves with high fermentation complexity.

3C — JSON Schema Block
{
  "id": "pain_rustique",
  "name": "Pain Rustique",
  "category": "bread",
  "origin": {
    "country": "France",
    "region": "Modern bakery",
    "period": "Late 20th century"
  },
  "history": "Pain Rustique emphasizes high hydration, minimal shaping, and open crumb.",
  "technicalProfile": {
    "hydration": [70, 80],
    "salt": [1.8, 2.2],
    "oil": [0, 0],
    "sugar": [0, 0],
    "prefermentDescription": "Poolish 50–100%",
    "fermentation": {
      "bulk": "2–4h minimal handling",
      "proof": "12–24h cold retard"
    },
    "ovenRecommendations": "240–260°C",
    "difficulty": "Hard",
    "recommendedUse": "Rustic, aromatic, open-crumb loaves"
  },
  "references": ["Modernist Bread"]
}

=============================================
🍞 STYLE 14 — CIABATTA
=============================================
3A — Technical Summary

Hydration: 75–90%

Salt: 2.0–2.4%

Fat: 0–3%

Flour Strength: W 260–320

Preferment: Poolish 80–100%

Fermentation:

Bulk: 2–4h with folds

Proof: Short proof (30–60 min)

Oven: 240–250°C

Traits: Very open crumb (“alveolatura”), thin crust

Risks: Overproofing → collapse

References: Italian baking manuals; Modernist Bread.

3B — Short History

Created in 1982 by Arnaldo Cavallari as a competitor to French baguettes. Its hallmark is extreme hydration and a characteristic irregular crumb.

3C — JSON Schema Block
{
  "id": "ciabatta",
  "name": "Ciabatta",
  "category": "bread",
  "origin": {
    "country": "Italy",
    "region": "Veneto",
    "period": "1982"
  },
  "history": "Ciabatta was developed as an Italian response to baguette popularity...",
  "technicalProfile": {
    "hydration": [75, 90],
    "salt": [2.0, 2.4],
    "oil": [0, 3],
    "prefermentDescription": "Poolish up to 100%",
    "fermentation": {
      "bulk": "2–4h with folds",
      "proof": "30–60 min"
    },
    "ovenRecommendations": "240–250°C",
    "difficulty": "Hard"
  },
  "references": ["Modernist Bread", "Italian bakery sources"]
}

=============================================
🍞 STYLE 15 — PANE PUGLIESE
=============================================
3A — Technical Summary

Hydration: 70–80%

Salt: 2.0–2.4%

Flour: Durum blend (Semola Rimacinata)

Preferment: Levain or biga 30–40%

Fermentation: Long, cool, with folds

Oven: 250–270°C

Traits: Yellow crumb, mild sweetness, chewy texture

3B — Short History

Traditional from Southern Italy, pane pugliese uses semolina-based flours, giving its distinct color and aroma. Recently popularized globally through artisan bakeries.

3C — JSON Schema Block
{
  "id": "pane_pugliese",
  "name": "Pane Pugliese",
  "category": "bread",
  "origin": {
    "country": "Italy",
    "region": "Puglia",
    "period": "Historical traditional"
  },
  "history": "Pane Pugliese is a semolina-forward Italian rustic loaf...",
  "technicalProfile": {
    "hydration": [70, 80],
    "salt": [2.0, 2.4],
    "flourStrength": "Durum (semola rimacinata)",
    "prefermentDescription": "Levain or biga 30–40%",
    "fermentation": {
      "bulk": "3–5h",
      "proof": "Short warm proof"
    },
    "ovenRecommendations": "250–270°C"
  }
}

=============================================
STYLE 16 — FOCACCIA GENOVESE
=============================================
3A — Technical Summary

Hydration: 65–80%

Salt: 2.0–3.0%

Oil: 6–12% (high, defining characteristic)

Sugar: 0–2%

Flour Strength: W 240–300

Preferment: Optional biga (20–40%)

Fermentation:

Bulk: 1–2h

Pan proof: 1–3h

Oven: 240–270°C

Traits: Deep dimples, oil–brine emulsion, aromatic crust

Risks: Low hydration → dense, dry focaccia

References: Italian baking manuals; Modernist Bread.

3B — Short History

A classic from Liguria, focaccia Genovese is defined by an oil-rich dough, salt brine, and deep dimpling technique, producing a uniquely fragrant and chewy bread with crisp bottom and tender crumb.

3C — JSON Schema Block
{
  "id": "focaccia_genovese",
  "name": "Focaccia Genovese",
  "category": "bread",
  "origin": {
    "country": "Italy",
    "region": "Liguria",
    "period": "Historical"
  },
  "history": "A traditional Ligurian bread characterized by oil-rich dough and brine dimpling.",
  "technicalProfile": {
    "hydration": [65, 80],
    "salt": [2.0, 3.0],
    "oil": [6, 12],
    "sugar": [0, 2],
    "prefermentDescription": "Optional biga 20–40%",
    "fermentation": {
      "bulk": "1–2h",
      "proof": "1–3h in pan"
    },
    "ovenRecommendations": "240–270°C"
  },
  "tags": ["italian", "high-oil", "pan-bread"],
  "references": ["Modernist Bread", "Italian focaccia literature"]
}

=============================================
🍞 STYLE 17 — TARTINE COUNTRY LOAF
=============================================
3A — Technical Summary

Hydration: 75–85%

Salt: 2.0–2.3%

Flour: Bread flour + whole wheat (10–30%)

Levain: 20–30%

Fermentation:

Bulk: 3–5h with folds

Cold retard: 12–20h

Oven: 240–260°C, Dutch oven preferred

Traits: Caramelized crust, tangy aroma, large irregular crumb

Risks: Weak shaping → spreading

References: Chad Robertson; Modernist Bread.

3B — Short History

The Tartine loaf, created by Chad Robertson in San Francisco, popularized high-hydration levain bread in the artisan movement. Its hallmark is a dark, blistered crust and deeply aromatic crumb.

3C — JSON Schema Block
{
  "id": "tartine_country",
  "name": "Tartine Country Loaf",
  "category": "bread",
  "origin": {
    "country": "United States",
    "region": "San Francisco",
    "period": "2000s"
  },
  "history": "Developed by Chad Robertson, this loaf pushed high-hydration levain breads to global prominence.",
  "technicalProfile": {
    "hydration": [75, 85],
    "salt": [2.0, 2.3],
    "levain": "20–30%",
    "fermentation": {
      "bulk": "3–5h with folds",
      "proof": "12–20h cold retard"
    },
    "ovenRecommendations": "Dutch oven or steam oven at 240–260°C"
  },
  "references": ["Tartine Bread", "Modernist Bread"]
}

=============================================
🍞 STYLE 18 — WHOLE WHEAT 100%
=============================================
3A — Technical Summary

Hydration: 80–100% (whole grain absorbs more water)

Salt: 2.0–2.4%

Fat: 0–3% optional

Levain: 30–50%

Fermentation:

Bulk: 2–4h

Cold retard: 8–16h

Oven: 230–250°C

Traits: Dense but moist crumb, nutty aroma

Risks: Overmixing → bitter bran notes

References: Modernist Bread; Whole Grain Baking (KAF).

3B — Short History

Whole wheat breads resurfaced prominently during 20th-century health movements and evolved through modern artisan techniques to achieve lighter crumb structures despite high bran content.

3C — JSON Schema Block
{
  "id": "whole_wheat_100",
  "name": "Whole Wheat 100%",
  "category": "bread",
  "origin": {
    "country": "Global",
    "region": "Modern artisan",
    "period": "20th–21st century"
  },
  "history": "100% whole wheat breads evolved from health-oriented baking traditions...",
  "technicalProfile": {
    "hydration": [80, 100],
    "salt": [2.0, 2.4],
    "levain": "30–50%",
    "fermentation": {
      "bulk": "2–4h",
      "proof": "8–16h cold"
    },
    "ovenRecommendations": "230–250°C"
  },
  "references": ["Modernist Bread", "King Arthur Whole Grain Baking"]
}

=============================================
🍞 STYLE 19 — MIXED GRAIN LEVAIN
=============================================
3A — Technical Summary

Hydration: 75–85%

Salt: 1.8–2.2%

Levain: 20–40% (stiff or liquid)

Flour Mix:

Wheat + Rye + Spelt + Whole grains (variable)

Fermentation:

Bulk: 2–4h

Cold retard: 12–24h

Oven: 240–260°C

Traits: Aromatic, deeper flavor from mixed grains

References: Modernist Bread; Hamelman.

3B — Short History

Mixed grain loaves come from European traditions of blending available grains. Modern artisan bakers have refined fermentation to enhance aroma and structure.

3C — JSON Schema Block
{
  "id": "mixed_grain_levain",
  "name": "Mixed Grain Levain",
  "category": "bread",
  "origin": {
    "country": "Europe",
    "region": "Central and Northern Europe",
    "period": "Traditional"
  },
  "history": "Mixed grain loaves use combinations of wheat, rye, spelt and others...",
  "technicalProfile": {
    "hydration": [75, 85],
    "salt": [1.8, 2.2],
    "levain": "20–40%",
    "fermentation": {
      "bulk": "2–4h",
      "proof": "12–24h cold"
    },
    "ovenRecommendations": "240–260°C"
  },
  "references": ["Modernist Bread", "Jeffrey Hamelman – Bread"]
}

=============================================
🍞 STYLE 20 — VOLLKORNBROT (GERMAN WHOLE RYE)
=============================================
3A — Technical Summary

Hydration: 85–110%

Salt: 1.8–2.2%

Flour: Whole rye (coarse/medium)

Preferment: Rye sour (Sauerteig) 30–50%

Fermentation:

Bulk: minimal kneading

Pan proof: 1–2h

Oven: 200–230°C long bake

Traits: Dense, dark crumb; strong acidity

References: German rye baking literature; Modernist Bread.

3B — Short History

Vollkornbrot is a staple of Northern European baking, developed for long shelf life and high nutrition. Rye chemistry defines its unique structure.

3C — JSON Schema Block
{
  "id": "vollkornbrot",
  "name": "Vollkornbrot",
  "category": "bread",
  "origin": {
    "country": "Germany",
    "region": "Northern Europe",
    "period": "Historical"
  },
  "history": "Vollkornbrot is a dense, rye-forward loaf developed for long keeping quality.",
  "technicalProfile": {
    "hydration": [85, 110],
    "salt": [1.8, 2.2],
    "prefermentDescription": "Rye sourdough (Sauerteig) 30–50%",
    "fermentation": {
      "bulk": "Short mix",
      "proof": "1–2h in pan"
    },
    "ovenRecommendations": "200–230°C long bake"
  },
  "references": ["Modernist Bread", "German rye baking manuals"]
}

=============================================
🍞 STYLE 21 — RYE 70% SOUR
=============================================
3A — Technical Summary

Hydration: 75–90%

Salt: 1.8–2.2%

Flour Mix: 70% rye + 30% wheat

Preferment: Rye sour 30–60%

Fermentation:

Bulk: minimal handling

Pan proof: 45–90 min

Oven: 210–240°C

Traits: Moist crumb, strong acidity, compact structure

3B — Short History

Rye-wheat mixed breads are found across Eastern and Northern Europe. This ratio balances rye flavor and wheat structure.

3C — JSON Schema Block
{
  "id": "rye_70_sour",
  "name": "Rye 70% Sour",
  "category": "bread",
  "origin": {
    "country": "Europe",
    "region": "North/East",
    "period": "Historical"
  },
  "history": "Rye-wheat hybrid breads balance rye aroma with improved structure.",
  "technicalProfile": {
    "hydration": [75, 90],
    "salt": [1.8, 2.2],
    "prefermentDescription": "Rye sour 30–60%",
    "fermentation": {
      "bulk": "Minimal kneading",
      "proof": "45–90 min"
    },
    "ovenRecommendations": "210–240°C"
  },
  "references": ["Modernist Bread", "European rye baking sources"]
}

=============================================
🍞 STYLE 22 — PAIN DE MIE / PULLMAN LOAF
=============================================
3A — Technical Summary

Hydration: 60–70%

Salt: 1.8–2.2%

Oil/Fat: 4–10%

Sugar: 3–10%

Milk: 0–40%

Flour Strength: 12–13% protein

Preferment: Optional poolish (0–30%)

Fermentation:

Bulk: 1–2h

Proof: 60–90 min

Oven: 180–210°C

Traits: Tight crumb, soft texture, enriched dough

References: Modernist Bread; French/US baking manuals.

3B — Short History

Pain de Mie (literally “bread of crumb”) originated in France and spread globally as a soft sandwich loaf. The Pullman version uses a lidded pan for square geometry.

3C — JSON Schema Block
{
  "id": "pain_de_mie",
  "name": "Pain de Mie / Pullman",
  "category": "bread",
  "origin": {
    "country": "France/United States",
    "region": "Global production",
    "period": "19th–20th century"
  },
  "history": "Pain de Mie is a soft, enriched, square-profile loaf used for sandwiches and toast.",
  "technicalProfile": {
    "hydration": [60, 70],
    "salt": [1.8, 2.2],
    "oil": [4, 10],
    "sugar": [3, 10],
    "milk": [0, 40],
    "prefermentDescription": "Optional poolish 0–30%",
    "fermentation": {
      "bulk": "1–2h",
      "proof": "60–90 min"
    },
    "ovenRecommendations": "180–210°C"
  },
  "references": ["Modernist Bread", "Professional Baking Manuals"]
}

LOTE 3 — ENRICHED DOUGHS (10 estilos)
Cada estilo com:
3A — Technical Summary
3B — Short History
3C — JSON Schema Block
=============================================
=============================================
🌟 STYLE 23 — BRIOCHE CLASSIC (FRENCH)
=============================================
3A — Technical Summary

Hydration: 48–55%

Salt: 1.8–2.2%

Sugar: 8–20%

Butter: 40–55% (high-fat dough)

Eggs: 30–50%

Preferment: Optional pâte fermentée 10–20%

Fermentation:

Bulk: 1–2h

Cold retard: 8–12h

Oven: 165–185°C

Traits: Soft crumb, rich flavor, deep golden crust

Risks: Butter leakage, insufficient gluten development

References: Modernist Bread; Professional Baking; Le Cordon Bleu texts.

3B — Short History

Originally a luxury bread from Normandy (17th–18th century), brioche evolved as a status symbol in France due to its high egg and butter content. Today it’s a global enriched dough benchmark.

3C — JSON Schema Block
{
  "id": "brioche_classic",
  "name": "Brioche Classic",
  "category": "enriched_bread",
  "origin": {
    "country": "France",
    "region": "Normandy",
    "period": "17th–18th century"
  },
  "history": "A rich, egg- and butter-heavy dough that became a French symbol of luxury.",
  "technicalProfile": {
    "hydration": [48, 55],
    "salt": [1.8, 2.2],
    "sugar": [8, 20],
    "fat": [40, 55],
    "eggs": [30, 50],
    "fermentation": {
      "bulk": "1–2h",
      "proof": "8–12h cold retard"
    },
    "ovenRecommendations": "165–185°C"
  },
  "tags": ["rich", "french", "high-fat"],
  "references": ["Modernist Bread", "Le Cordon Bleu", "Professional Baking"]
}

=============================================
🎄 STYLE 24 — PANETTONE (MODERN ITALIAN)
=============================================
3A — Technical Summary

Hydration: 45–55%

Salt: 1.5–2.0%

Sugar: 20–35%

Butter: 25–40%

Eggs/Yolks: 30–45%

Preferment: Sweet stiff levain mandatory

Fermentation:

Bulk: Long, multi-stage

Proof: 4–7h at 28–30°C

Oven: 165–175°C

Traits: Shreddy crumb, intense aroma, extremely technical

Risks: Collapse, fermentation failure

References: Italian Milanese baking canon; Modernist Bread.

3B — Short History

Panettone originated in Milan and evolved into a highly codified, multi-stage, levain-driven enriched bread. Its global boom started in the late 20th century.

3C — JSON Schema Block
{
  "id": "panettone_modern",
  "name": "Panettone (Modern Italian)",
  "category": "enriched_bread",
  "origin": {
    "country": "Italy",
    "region": "Milan",
    "period": "Industrial era to present"
  },
  "history": "A technically demanding sweet bread made with stiff sweet levain.",
  "technicalProfile": {
    "hydration": [45, 55],
    "salt": [1.5, 2.0],
    "sugar": [20, 35],
    "fat": [25, 40],
    "eggs": [30, 45],
    "fermentation": {
      "bulk": "Multiple long stages",
      "proof": "4–7h at 28–30°C"
    },
    "ovenRecommendations": "165–175°C"
  },
  "tags": ["italian", "holiday", "levain"],
  "references": ["Modernist Bread", "Italian baking literature"]
}

=============================================
✡️ STYLE 25 — CHALLAH (BRAIDED JEWISH BREAD)
=============================================
3A — Technical Summary

Hydration: 55–62%

Salt: 1.8–2.2%

Sugar: 8–18%

Oil: 4–12% (traditionally oil, not butter)

Eggs: 10–25%

Fermentation:

Bulk: 1–2h

Proof: 60–90 min

Oven: 175–190°C

Traits: Glossy crust, tight crumb, braided shapes

3B — Short History

Challah is part of Ashkenazi Jewish tradition, eaten on Sabbaths and holidays. Unlike brioche, it is dairy-free for kosher rules.

3C — JSON Schema Block
{
  "id": "challah",
  "name": "Challah",
  "category": "enriched_bread",
  "origin": {
    "country": "Central/Eastern Europe",
    "period": "Historical Jewish tradition"
  },
  "history": "A braided, dairy-free enriched loaf central to Ashkenazi culture.",
  "technicalProfile": {
    "hydration": [55, 62],
    "salt": [1.8, 2.2],
    "sugar": [8, 18],
    "oil": [4, 12],
    "eggs": [10, 25],
    "fermentation": {
      "bulk": "1–2h",
      "proof": "60–90 min"
    },
    "ovenRecommendations": "175–190°C"
  },
  "tags": ["jewish", "braided", "kosher"],
  "references": ["Modernist Bread", "Jewish baking tradition"]
}

=============================================
🥛 STYLE 26 — JAPANESE MILK BREAD (SHOKUPAN)
=============================================
3A — Technical Summary

Hydration: 65–75%

Salt: 1.8–2.2%

Sugar: 8–15%

Butter: 6–12%

Milk: 40–70%

Tangzhong: 5–10% of total flour

Fermentation:

Bulk: 1–2h

Proof: 45–90 min

Oven: 180–200°C

Traits: Ultra-soft, elastic crumb

3B — Short History

Shokupan emerged during 20th-century industrial baking in Japan and was refined with the tangzhong/yudane gelatinization technique.

3C — JSON Schema Block
{
  "id": "milk_bread_shokupan",
  "name": "Japanese Milk Bread (Shokupan)",
  "category": "enriched_bread",
  "origin": {
    "country": "Japan",
    "period": "20th century"
  },
  "history": "A soft, fluffy loaf enhanced by a tangzhong (gelatinized flour paste).",
  "technicalProfile": {
    "hydration": [65, 75],
    "salt": [1.8, 2.2],
    "sugar": [8, 15],
    "fat": [6, 12],
    "tangzhong": [5, 10],
    "fermentation": {
      "bulk": "1–2h",
      "proof": "45–90 min"
    },
    "ovenRecommendations": "180–200°C"
  },
  "tags": ["japanese", "tangzhong", "soft"],
  "references": ["Modernist Bread", "Japanese baking standards"]
}

=============================================
🌀 STYLE 27 — BABKA / COILED ENRICHED LOAF
=============================================
3A — Technical Summary

Hydration: 50–60%

Salt: 1.8–2.2%

Sugar: 12–20%

Butter: 20–35%

Eggs: 10–25%

Filling: Chocolate/cinnamon

Fermentation:

Bulk: 1–2h

Proof: 45–75 min

Oven: 170–185°C

3B — Short History

The modern babka descends from Eastern European Jewish baking, evolving in NYC bakeries into a rich, coiled loaf with generous chocolate fillings.

3C — JSON Schema Block
{
  "id": "babka",
  "name": "Babka (Chocolate/Cinnamon)",
  "category": "enriched_bread",
  "origin": {
    "country": "Eastern Europe",
    "region": "Jewish diaspora",
    "period": "Historical"
  },
  "history": "A coiled enriched dough filled with chocolate or cinnamon.",
  "technicalProfile": {
    "hydration": [50, 60],
    "salt": [1.8, 2.2],
    "sugar": [12, 20],
    "fat": [20, 35],
    "eggs": [10, 25],
    "fermentation": {
      "bulk": "1–2h",
      "proof": "45–75 min"
    },
    "ovenRecommendations": "170–185°C"
  },
  "tags": ["jewish", "filled", "sweet"],
  "references": ["Modernist Bread", "NYC Jewish bakery tradition"]
}

=============================================
🍩 STYLE 28 — YEAST-RAISED DONUT
=============================================
3A — Technical Summary

Hydration: 60–65%

Sugar: 10–18%

Fat: 8–15%

Eggs: 5–15%

Salt: 1.8–2.2%

Fermentation:

Bulk: 1–1.5h

Proof: 30–45 min

Fry Temperature: 175–185°C

3B — Short History

Raised donuts originated from American and German immigrant frying traditions, evolving into commercial standards via Krispy Kreme and Dunkin’ systems.

3C — JSON Schema Block
{
  "id": "yeast_raised_donut",
  "name": "Yeast-Raised Donut",
  "category": "enriched_bread",
  "origin": {
    "country": "United States",
    "period": "19th–20th century"
  },
  "history": "A soft, fried enriched dough popularized by American bakeries.",
  "technicalProfile": {
    "hydration": [60, 65],
    "salt": [1.8, 2.2],
    "sugar": [10, 18],
    "fat": [8, 15],
    "eggs": [5, 15],
    "fermentation": {
      "bulk": "1–1.5h",
      "proof": "30–45 min"
    },
    "ovenRecommendations": "Fry at 175–185°C"
  },
  "tags": ["fried", "sweet", "american"],
  "references": ["Professional Baking", "American donut industry standards"]
}

=============================================
🌀 STYLE 29 — CINNAMON ROLLS
=============================================
3A — Technical Summary

Hydration: 60–70%

Sugar: 10–18%

Butter: 8–15%

Eggs: 5–10%

Salt: 1.6–2.0%

Filling: Cinnamon + brown sugar

Fermentation:

Bulk: 1h

Proof: 45–60 min

Oven: 175–190°C

3B — Short History

Rooted in Northern European baking but popularized in North America, cinnamon rolls became a mainstream enriched dough icon in the 20th century.

3C — JSON Schema Block
{
  "id": "cinnamon_rolls",
  "name": "Cinnamon Rolls",
  "category": "enriched_bread",
  "origin": {
    "country": "Sweden/USA",
    "period": "19th–20th century"
  },
  "history": "A coiled enriched dough with cinnamon-sugar filling.",
  "technicalProfile": {
    "hydration": [60, 70],
    "salt": [1.6, 2.0],
    "sugar": [10, 18],
    "fat": [8, 15],
    "eggs": [5, 10],
    "fermentation": {
      "bulk": "1h",
      "proof": "45–60 min"
    },
    "ovenRecommendations": "175–190°C"
  },
  "tags": ["sweet", "sweden", "north-american"],
  "references": ["Modernist Bread", "Nordic baking literature"]
}

=============================================
⭐ STYLE 30 — KOUGN-AMANN (CARAMELIZED LAMINATED DOUGH)
=============================================
3A — Technical Summary

Hydration: 55–60%

Salt: 1.8–2.2%

Butter: 25–35% (laminated)

Sugar: 15–25% (internal + coating)

Fermentation: Medium

Oven: 200–220°C

Traits: Caramelized crust, laminated crumb

3B — Short History

A specialty from Brittany (France), Kouign-Amann is essentially a caramelized laminated dough, sometimes called “the fattiest pastry in Europe.”

3C — JSON Schema Block
{
  "id": "kouign_amann",
  "name": "Kouign-Amann",
  "category": "enriched_bread",
  "origin": {
    "country": "France",
    "region": "Brittany",
    "period": "19th century"
  },
  "history": "A caramelized laminated enriched dough from Brittany.",
  "technicalProfile": {
    "hydration": [55, 60],
    "salt": [1.8, 2.2],
    "fat": [25, 35],
    "sugar": [15, 25],
    "ovenRecommendations": "200–220°C"
  },
  "tags": ["laminated", "french", "caramelized"],
  "references": ["Modernist Bread", "French pastry tradition"]
}

=============================================
⭐ STYLE 31 — CROISSANT-STYLE ENRICHED DOUGH (NON-PURE PASTRY VERSION)

(Mantemos no enriched porque o app prioriza DOUGH-STYLES, não pure pastry standards)

3A — Technical Summary

Hydration: 50–60%

Butter: 25–35% laminated

Salt: 1.8–2.2%

Sugar: 3–10%

Fermentation:

Bulk: short

Cold: lamination steps

Oven: 200–220°C

3B — Short History

Derived from the Austrian kipferl, modern laminated croissant dough was codified in France in the 20th century.

3C — JSON Schema Block
{
  "id": "croissant_enriched",
  "name": "Croissant-Style Dough",
  "category": "enriched_bread",
  "origin": {
    "country": "France/Austria",
    "period": "19th–20th century"
  },
  "history": "A laminated enriched dough inspired by the Austrian kipferl.",
  "technicalProfile": {
    "hydration": [50, 60],
    "salt": [1.8, 2.2],
    "sugar": [3, 10],
    "fat": [25, 35],
    "ovenRecommendations": "200–220°C"
  },
  "tags": ["laminated", "french"],
  "references": ["Modernist Bread", "French pastry literature"]
}

LOTE 4 — BURGER BUNS (6 Estilos)
=============================================
=============================================
🍔 STYLE 32 — CLASSIC BRIOCHE BURGER BUN
=============================================
4A — Technical Summary

Hydration: 60–68%

Salt: 1.8–2.2%

Sugar: 8–12%

Butter: 10–20%

Eggs: 10–20%

Fat (total): 22–28%

Fermentation:

Bulk: 1–1.5h

Proof: 45–75 min

Baking: 185–195°C

Traits: Rich, soft crumb, golden color

Risks: Over-soft crumb leading to collapse under juicy patties

References: Modernist Bread; AIB Standards; French enriched dough tradition.

4B — Short History

Adapted from French brioche techniques, the brioche burger bun became globally popular in the 2010s as a premium alternative for gourmet burgers.

4C — JSON Schema Block
{
  "id": "brioche_burger_bun",
  "name": "Brioche Burger Bun",
  "category": "burger_bun",
  "origin": {
    "country": "France/USA",
    "period": "Late 20th–21st century"
  },
  "history": "A premium burger bun derived from classic French brioche techniques.",
  "technicalProfile": {
    "hydration": [60, 68],
    "salt": [1.8, 2.2],
    "sugar": [8, 12],
    "fat": [22, 28],
    "eggs": [10, 20],
    "fermentation": {
      "bulk": "1–1.5h",
      "proof": "45–75 min"
    },
    "ovenRecommendations": "185–195°C"
  },
  "tags": ["burger", "brioche", "soft"],
  "references": ["Modernist Bread", "AIB Baking Standards"]
}

=============================================
🥔 STYLE 33 — POTATO BUN (MARTIN’S STYLE)
=============================================
4A — Technical Summary

Hydration: 62–70%

Potato (flake or fresh mash): 10–18%

Sugar: 8–12%

Fat (oil or shortening): 6–12%

Eggs: 8–12%

Salt: 1.8–2.2%

Fermentation:

Bulk: 1–1.5h

Proof: 45–60 min

Baking: 180–195°C

Traits: Extremely soft crumb, iconic griddling behavior

References: American Institute of Baking; Martin’s Potato Roll specs (public patents).

4B — Short History

Popularized in Pennsylvania Dutch baking and globalized by Martin’s, the potato bun became the signature of modern smashburgers due to softness and flavor.

4C — JSON Schema Block
{
  "id": "potato_bun",
  "name": "Potato Bun (Martin's Style)",
  "category": "burger_bun",
  "origin": {
    "country": "USA",
    "region": "Pennsylvania Dutch",
    "period": "20th century"
  },
  "history": "A soft potato-enriched bun made famous worldwide by Martin's.",
  "technicalProfile": {
    "hydration": [62, 70],
    "potato": [10, 18],
    "sugar": [8, 12],
    "fat": [6, 12],
    "eggs": [8, 12],
    "salt": [1.8, 2.2],
    "fermentation": {
      "bulk": "1–1.5h",
      "proof": "45–60 min"
    },
    "ovenRecommendations": "180–195°C"
  },
  "tags": ["burger", "potato", "soft"],
  "references": ["AIB Standards", "Martin's Potato Roll patents"]
}

=============================================
🍞 STYLE 34 — JAPANESE MILK BUN (SOFT, TANGZHONG)
=============================================
4A — Technical Summary

Hydration: 70–78%

Tangzhong: 5–10%

Sugar: 10–15%

Fat (butter): 6–10%

Milk: 40–65%

Salt: 1.8–2.2%

Fermentation:

Bulk: 1–1.5h

Proof: 45–75 min

Baking: 180–190°C

Traits: Ultra-soft crumb, excellent for smashburger compression

References: Japanese industrial baking manuals; Modernist Bread.

4B — Short History

Based on Shokupan techniques adapted for buns, this style grew popular in Asian-American bakeries and later in gourmet burger shops globally.

4C — JSON Schema Block
{
  "id": "japanese_milk_bun",
  "name": "Japanese Milk Bun (Tangzhong)",
  "category": "burger_bun",
  "origin": {
    "country": "Japan",
    "period": "20th century"
  },
  "history": "A soft bun derived from Shokupan using a tangzhong gelatinized paste.",
  "technicalProfile": {
    "hydration": [70, 78],
    "tangzhong": [5, 10],
    "sugar": [10, 15],
    "fat": [6, 10],
    "salt": [1.8, 2.2],
    "fermentation": {
      "bulk": "1–1.5h",
      "proof": "45–75 min"
    },
    "ovenRecommendations": "180–190°C"
  },
  "tags": ["burger", "japanese", "soft"],
  "references": ["Modernist Bread", "Japanese industrial baking references"]
}

=============================================
🍞 STYLE 35 — AMERICAN SOFT WHITE BUN
=============================================
4A — Technical Summary

Hydration: 62–70%

Sugar: 6–10%

Fat (shortening/oil): 5–10%

Salt: 1.8–2.2%

Milk powder: 1–3% (optional)

Fermentation:

Bulk: 1h

Proof: 40–60 min

Baking: 185–195°C

References: American Institute of Baking soft roll standards.

4B — Short History

The quintessential American diner bun, standardized through industrial baking lines in the mid-20th century.

4C — JSON Schema Block
{
  "id": "american_soft_bun",
  "name": "American Soft White Bun",
  "category": "burger_bun",
  "origin": {
    "country": "USA",
    "period": "Mid-20th century"
  },
  "history": "A standard soft roll from American diner and industrial baking traditions.",
  "technicalProfile": {
    "hydration": [62, 70],
    "sugar": [6, 10],
    "fat": [5, 10],
    "salt": [1.8, 2.2],
    "milkPowder": [1, 3],
    "fermentation": {
      "bulk": "1h",
      "proof": "40–60 min"
    },
    "ovenRecommendations": "185–195°C"
  },
  "tags": ["burger", "diner", "soft"],
  "references": ["AIB Standards"]
}

=============================================
🍞 STYLE 36 — POTATO–MILK HYBRID BUN
=============================================
4A — Technical Summary

Hydration: 68–75%

Potato: 8–14%

Tangzhong or milk gel: 5–8%

Sugar: 6–10%

Fat: 5–10%

Salt: 1.8–2.2%

Traits: Extremely soft, hybrid of American + Japanese techniques

4B — Short History

A modern fusion developed in artisanal bakeries combining the softness of milk buns and the flavor-retention of potato buns.

4C — JSON Schema Block
{
  "id": "potato_milk_hybrid_bun",
  "name": "Potato–Milk Hybrid Bun",
  "category": "burger_bun",
  "origin": {
    "country": "USA/Japan",
    "period": "21st century"
  },
  "history": "A fusion bun combining Shokupan softness with potato roll flavor.",
  "technicalProfile": {
    "hydration": [68, 75],
    "potato": [8, 14],
    "tangzhong": [5, 8],
    "sugar": [6, 10],
    "fat": [5, 10],
    "salt": [1.8, 2.2],
    "fermentation": {
      "bulk": "1–1.5h",
      "proof": "45–75 min"
    },
    "ovenRecommendations": "180–190°C"
  },
  "tags": ["burger", "hybrid", "soft"],
  "references": ["Modernist Bread", "Artisanal bakery literature"]
}

=============================================
🍞 STYLE 37 — BRIOCHE–MILK HYBRID BUN
=============================================
4A — Technical Summary

Hydration: 65–72%

Butter: 10–15%

Eggs: 8–12%

Milk: 30–50%

Sugar: 8–12%

Salt: 1.8–2.2%

Traits: Soft like milk bread, rich like brioche

4B — Short History

A contemporary hybrid used in gourmet burger houses that require richer flavor without the structural collapse of full brioche.

4C — JSON Schema Block
{
  "id": "brioche_milk_hybrid_bun",
  "name": "Brioche–Milk Hybrid Bun",
  "category": "burger_bun",
  "origin": {
    "country": "Global",
    "period": "21st century"
  },
  "history": "A hybrid enriched dough blending brioche richness with milk bread softness.",
  "technicalProfile": {
    "hydration": [65, 72],
    "fat": [10, 15],
    "eggs": [8, 12],
    "milk": [30, 50],
    "sugar": [8, 12],
    "salt": [1.8, 2.2],
    "fermentation": {
      "bulk": "1–1.5h",
      "proof": "45–75 min"
    },
    "ovenRecommendations": "180–190°C"
  },
  "tags": ["burger", "hybrid", "rich"],
  "references": ["Modernist Bread", "Professional Baking"]
}

LOTE 5A — FLATBREADS I (5 Estilos)
=============================================
=============================================
🥙 STYLE 38 — NAAN (SOUTH ASIAN YEASTED FLATBREAD)
=============================================
5A-1 — Technical Summary

Hydration: 62–70%

Salt: 1.5–2.0%

Yogurt: 5–12%

Oil/Ghee: 3–8%

Sugar: 1–4%

Fermentation:

Bulk: 1h

Rest: 15–30 min

Cooking: Tandoor 350–450°C or Skillet 230–260°C

Traits: Puffy blistered texture, chewy-soft interior

Risks: Over-ghee coating = soggy crust

References:

Modernist Bread — Flatbread chapter

ICC Indian Baking Standards

AIB International

5A-2 — Short History

Naan originates from Persian and Indian royal kitchens. It spread through Mughal cuisine and became a South Asian staple. Traditionally cooked in tandoors with ghee.

5A-3 — JSON Schema Block
{
  "id": "naan_classic",
  "name": "Naan (Classic Yogurt Flatbread)",
  "category": "flatbread",
  "origin": {
    "country": "India/Persia",
    "period": "Medieval–Mughal era"
  },
  "history": "A yogurt-enriched flatbread baked traditionally in tandoors.",
  "technicalProfile": {
    "hydration": [62, 70],
    "salt": [1.5, 2.0],
    "yogurt": [5, 12],
    "fat": [3, 8],
    "sugar": [1, 4],
    "fermentation": {
      "bulk": "1h",
      "rest": "15–30 min"
    },
    "ovenRecommendations": "Tandoor 350–450°C or skillet 230–260°C"
  },
  "tags": ["indian", "yogurt", "tandoor"],
  "references": ["Modernist Bread", "ICC India Baking Standards"]
}

=============================================
🫓 STYLE 39 — PITA (MIDDLE EASTERN POCKET BREAD)
=============================================
5A-1 — Technical Summary

Hydration: 58–65%

Salt: 1.8–2.2%

Sugar: 1–3% (optional)

Oil: 1–3%

Fermentation:

Bulk: 1h

Proof: 15–30 min

Oven: 260–315°C (critical for pocket inflation)

Traits: Steam-inflated pocket structure

References:

AIB Middle Eastern baking reports

Modernist Bread

5A-2 — Short History

Pita has ancient Levantine roots, relying on very high oven heat to separate the crumb into two layers, forming the iconic pocket.

5A-3 — JSON Schema Block
{
  "id": "pita_classic",
  "name": "Pita (Pocket Flatbread)",
  "category": "flatbread",
  "origin": {
    "country": "Levant",
    "period": "Ancient"
  },
  "history": "A high-heat flatbread that forms a steam-inflated pocket.",
  "technicalProfile": {
    "hydration": [58, 65],
    "salt": [1.8, 2.2],
    "sugar": [1, 3],
    "fat": [1, 3],
    "fermentation": {
      "bulk": "1h",
      "proof": "15–30 min"
    },
    "ovenRecommendations": "260–315°C"
  },
  "tags": ["middle-east", "pocket", "high-heat"],
  "references": ["Modernist Bread", "AIB Middle Eastern Standards"]
}

=============================================
🫓 STYLE 40 — LAVASH (ARMENIAN/CAUCASUS FLATBREAD)
=============================================
5A-1 — Technical Summary

Hydration: 55–62%

Salt: 1.8–2.2%

Sugar: 0–2%

Fat: 0–3%

Fermentation: short

Oven: Tandoor or saj griddle 300–450°C

Traits: Ultra-thin, flexible or crispy depending on bake time

References:

UNESCO listing for Armenian lavash

Regional baking literature

5A-2 — Short History

Lavash is one of the oldest documented flatbreads, recognized by UNESCO as part of Armenian intangible heritage. It is rolled extremely thin and baked quickly.

5A-3 — JSON Schema Block
{
  "id": "lavash_armenian",
  "name": "Lavash (Armenian Flatbread)",
  "category": "flatbread",
  "origin": {
    "country": "Armenia/Caucasus",
    "period": "Ancient"
  },
  "history": "A thin flatbread recognized by UNESCO as Armenian intangible heritage.",
  "technicalProfile": {
    "hydration": [55, 62],
    "salt": [1.8, 2.2],
    "sugar": [0, 2],
    "fat": [0, 3],
    "ovenRecommendations": "Tandoor or saj griddle 300–450°C"
  },
  "tags": ["armenian", "thin", "tandoor"],
  "references": ["UNESCO Lavash Documentation", "Modernist Bread"]
}

=============================================
🫓 STYLE 41 — TORTILLA (WHEAT, NORTHERN MEXICO)
=============================================
5A-1 — Technical Summary

Hydration: 50–58%

Salt: 1.8–2.2%

Fat (lard/oil): 5–12%

Sugar: 0–2% (optional)

Fermentation: none (rest only)

Cooking: Griddle/comal 200–260°C

Traits: Soft, pliable, blistered

References:

Modernist Bread (flatbreads)

Mexican culinary literature

5A-2 — Short History

Flour tortillas emerged from Northern Mexican and Texan border regions. Fat content distinguishes them from unleavened chapatis.

5A-3 — JSON Schema Block
{
  "id": "tortilla_wheat",
  "name": "Tortilla (Northern Mexican Wheat)",
  "category": "flatbread",
  "origin": {
    "country": "Mexico",
    "region": "Northern",
    "period": "Regional traditional"
  },
  "history": "A soft wheat flatbread cooked on hot griddles (comal).",
  "technicalProfile": {
    "hydration": [50, 58],
    "salt": [1.8, 2.2],
    "fat": [5, 12],
    "sugar": [0, 2],
    "ovenRecommendations": "Griddle/comal 200–260°C"
  },
  "tags": ["mexican", "griddle", "soft"],
  "references": ["Modernist Bread", "Mexican traditional baking literature"]
}

=============================================
🫓 STYLE 42 — CHAPATI (WHOLE WHEAT, SOUTH ASIA)
=============================================
5A-1 — Technical Summary

Hydration: 55–62%

Salt: 0–1.5%

Fat: 0–2% (optional)

Fermentation: none

Cooking: Tava 220–280°C

Traits: Puffs via steam; whole-wheat flavor

References:

ICC Indian standards

Regional cooking documentation

5A-2 — Short History

Chapati is a fundamental unleavened bread from the Indian subcontinent, made with atta flour and cooked on a tava griddle, often puffed directly over flame.

5A-3 — JSON Schema Block
{
  "id": "chapati_classic",
  "name": "Chapati (Whole Wheat)",
  "category": "flatbread",
  "origin": {
    "country": "India/Pakistan",
    "period": "Ancient"
  },
  "history": "A staple unleavened flatbread cooked on a tava, often flame-puffed.",
  "technicalProfile": {
    "hydration": [55, 62],
    "salt": [0, 1.5],
    "fat": [0, 2],
    "ovenRecommendations": "Tava 220–280°C"
  },
  "tags": ["indian", "whole-wheat", "unleavened"],
  "references": ["ICC India Standards", "Modernist Bread"]
}

LOTE 5B — FLATBREADS II (5 Estilos)
=============================================

Inclui:

Roti (Indian Unleavened Whole Wheat)

Paratha (Layered South Asian Flatbread)

Gözleme (Turkish Stuffed Flatbread)

Arepa (Venezuelan/Colombian Pre-cooked Corn Dough)

Lefse (Norwegian Potato Flatbread)

=============================================
🫓 STYLE 43 — ROTI (INDIAN UNLEAVENED WHOLE WHEAT)
=============================================
Technical Summary

Hydration: 58–65%

Salt: 0–1.5%

Fat: 0–2% (optional ghee)

Fermentation: none

Rest: 15–20 min

Cooking: Tava 220–280°C

Traits: Soft, pliable, 100% atta whole wheat

Risks: Insufficient heat = dry, non-puffing roti

References:

ICC India standards (atta flours)

Modernist Bread (flatbreads section)

Short History

Roti is a core staple across the Indian subcontinent, prepared from finely milled whole-wheat atta flour. Known for its simplicity and reliance on high-heat cooking to achieve characteristic puffing.

JSON Schema Block
{
  "id": "roti_classic",
  "name": "Roti (Unleavened Whole Wheat)",
  "category": "flatbread",
  "origin": {
    "country": "India",
    "period": "Ancient"
  },
  "history": "A staple unleavened flatbread made from whole-wheat atta flour.",
  "technicalProfile": {
    "hydration": [58, 65],
    "salt": [0, 1.5],
    "fat": [0, 2],
    "ovenRecommendations": "Tava 220–280°C"
  },
  "tags": ["indian", "atta", "unleavened"],
  "references": ["ICC Atta Standards", "Modernist Bread"]
}

=============================================
🫓 STYLE 44 — PARATHA (LAYERED SOUTH ASIAN FLATBREAD)
=============================================
Technical Summary

Hydration: 58–64%

Salt: 1.5–2.2%

Fat (lamination): 15–30% ghee/oil

Sugar: 0–2% (optional)

Fermentation: none

Cooking: Tava 200–260°C

Traits: Layered, flaky, laminated manually

Risks: Too much fat = stiff layers

References:

Indian regional culinary documentation

Modernist Bread

Short History

Paratha evolved as a layered variation of roti. It is manually laminated with ghee or oil, creating a flaky texture. Historically linked to Punjabi and North Indian cuisines.

JSON Schema Block
{
  "id": "paratha_layered",
  "name": "Paratha (Layered Flatbread)",
  "category": "flatbread",
  "origin": {
    "country": "India/Pakistan",
    "region": "Punjab/North India",
    "period": "Medieval–Regional"
  },
  "history": "A manually laminated flatbread using ghee or oil for flaky layers.",
  "technicalProfile": {
    "hydration": [58, 64],
    "salt": [1.5, 2.2],
    "fat": [15, 30],
    "ovenRecommendations": "Tava 200–260°C"
  },
  "tags": ["laminated", "ghee", "south-asia"],
  "references": ["Modernist Bread", "Indian Regional Standards"]
}

=============================================
🥙 STYLE 45 — GÖZLEME (TURKISH FILLED FLATBREAD)
=============================================
Technical Summary

Hydration: 55–62%

Salt: 1.8–2.2%

Fat: 1–3%

Filling: cheese, spinach, meat

Fermentation: short or none

Cooking: Sac griddle 260–320°C

Traits: Stretchable dough, stuffed, crisp exterior

References:

Turkish culinary documentation

Modernist Bread

Short History

Gözleme is a traditional Anatolian flatbread stretched thin, filled, and cooked on a sac griddle. It appears in Ottoman-era culinary records.

JSON Schema Block
{
  "id": "gozleme_turkish",
  "name": "Gözleme (Turkish Stuffed Flatbread)",
  "category": "flatbread",
  "origin": {
    "country": "Turkey",
    "period": "Ottoman"
  },
  "history": "A stuffed Anatolian flatbread cooked on a sac griddle.",
  "technicalProfile": {
    "hydration": [55, 62],
    "salt": [1.8, 2.2],
    "fat": [1, 3],
    "ovenRecommendations": "Sac griddle 260–320°C"
  },
  "tags": ["turkish", "stuffed", "griddle"],
  "references": ["Turkish Culinary Documentation", "Modernist Bread"]
}

=============================================
🌽 STYLE 46 — AREPA (PRE-COOKED CORN DOUGH, VENEZUELA/COLOMBIA)
=============================================
Technical Summary

Hydration (P.A.N. style): 48–60%

Salt: 1.3–2.0%

Fat: 0–3%

Fermentation: none

Cooking: Griddle + bake or fry

Traits: Dense, corn-forward, crisp exterior

References:

Venezuelan & Colombian culinary literature

Brands: P.A.N. (Empresas Polar) technical sheets

Short History

Arepas originate from Indigenous peoples of northern South America. They rely on pre-cooked corn flours (masarepa), distinct from nixtamalized corn used for tortillas.

JSON Schema Block
{
  "id": "arepa_masarepa",
  "name": "Arepa (Venezuelan/Colombian)",
  "category": "flatbread",
  "origin": {
    "country": "Venezuela/Colombia",
    "period": "Pre-Columbian"
  },
  "history": "A pre-cooked corn dough flatbread central to Venezuelan and Colombian cuisine.",
  "technicalProfile": {
    "hydration": [48, 60],
    "salt": [1.3, 2.0],
    "fat": [0, 3],
    "ovenRecommendations": "Griddle 200–250°C or shallow fry"
  },
  "tags": ["corn", "south-america", "masarepa"],
  "references": ["P.A.N. Flour Technical Sheets", "Latin American culinary literature"]
}

=============================================
🥔 STYLE 47 — LEFSE (NORWEGIAN POTATO FLATBREAD)
=============================================
Technical Summary

Hydration: dependent on potato moisture

Potato: 60–75% of dough

Fat (butter): 5–8%

Flour: low protein (8–10%)

Salt: 1.5–2.0%

Sugar: 0–3%

Cooking: Griddle 200–250°C

Traits: Soft, rollable, slightly sweet

References:

Scandinavian baking literature

Modernist Bread

Short History

Lefse is a traditional Norwegian flatbread made primarily from potatoes, developed during the 18th–19th centuries when potatoes became widespread in Scandinavia.

JSON Schema Block
{
  "id": "lefse_norwegian",
  "name": "Lefse (Norwegian Potato Flatbread)",
  "category": "flatbread",
  "origin": {
    "country": "Norway",
    "period": "18th–19th century"
  },
  "history": "A thin, potato-based Norwegian flatbread cooked on a griddle.",
  "technicalProfile": {
    "potatoPercentage": [60, 75],
    "fat": [5, 8],
    "salt": [1.5, 2.0],
    "sugar": [0, 3],
    "ovenRecommendations": "Griddle 200–250°C"
  },
  "tags": ["norway", "potato", "griddle"],
  "references": ["Modernist Bread", "Scandinavian Baking Literature"]
}

LOTE 6A — PASTRY & SWEET DOUGHS I (4 Estilos)
=============================================

Inclui:

Croissant

Danish

Kouign-Amann

Laminated Brioche

=============================================
🥐 STYLE 48 — CROISSANT (CLASSIC FRENCH LAMINATED DOUGH)
=============================================
Technical Summary

Hydration: 58–65%

Salt: 1.8–2.2%

Sugar: 8–12%

Butter (lamination): 25–45% baker’s percentage

Preferments: poolish optional (10–20%)

Mixing: low development, stop early

Dough temp after mixing: 23–25°C

Lamination temp: 4–8°C

Folds: 3 single or 1 double + 1 single

Proof: 26–28°C, 75–85% RH

Baking: 200–230°C

Risks:

Butter leakage (too warm)

Poor flaking (undermixed or under-chilled)

Dense crumb (underproof)

References:

Modernist Bread (Viennoiserie)

Le Cordon Bleu – Professional Baking

CIA Baking & Pastry

Short History

The croissant evolved from the Austrian kipferl and became a fully laminated, butter-layered French viennoiserie in the 19th–20th century. French regulations emphasize butter-only formulation.

JSON Schema Block
{
  "id": "croissant_classic",
  "name": "Croissant (Classic French)",
  "category": "pastry",
  "origin": {
    "country": "France/Austria",
    "period": "19th–20th century"
  },
  "history": "A French laminated dough influenced by the Austrian kipferl.",
  "technicalProfile": {
    "hydration": [58, 65],
    "salt": [1.8, 2.2],
    "sugar": [8, 12],
    "butterLamination": [25, 45],
    "preferments": "Optional poolish (10–20%)",
    "laminationTemperature": "4–8°C",
    "proofing": "26–28°C, 75–85% RH",
    "bakingTemperature": "200–230°C"
  },
  "tags": ["laminated", "butter", "french"],
  "references": [
    "Modernist Bread",
    "Le Cordon Bleu Professional Baking",
    "CIA Baking & Pastry"
  ]
}

=============================================
🥐 STYLE 49 — DANISH (SWEET LAMINATED DOUGH)
=============================================
Technical Summary

Hydration: 60–68%

Salt: 1.5–2.0%

Sugar: 12–18%

Butter (lamination): 25–40%

Eggs: 4–8%

Proof: 28–30°C, high humidity

Baking: 200–220°C

Traits: richer than croissant, softer crumb

Risks:

Over-sweet dough tears during lamination

Too-warm butter leads to merging layers

References:

Modernist Bread

Scandinavian Baking

CIA Baking & Pastry

Short History

Danish dough was introduced by Austrian bakers in Denmark. It evolved into a sweeter, egg-enriched laminated dough with fillings like cream cheese, custard, or fruit.

JSON Schema Block
{
  "id": "danish_classic",
  "name": "Danish (Sweet Laminated Dough)",
  "category": "pastry",
  "origin": {
    "country": "Denmark/Austria",
    "period": "19th century"
  },
  "history": "A sweet laminated dough enriched with sugar and eggs, derived from Austrian techniques.",
  "technicalProfile": {
    "hydration": [60, 68],
    "salt": [1.5, 2.0],
    "sugar": [12, 18],
    "eggs": [4, 8],
    "butterLamination": [25, 40],
    "proofing": "28–30°C, high humidity",
    "bakingTemperature": "200–220°C"
  },
  "tags": ["laminated", "sweet", "danish"],
  "references": [
    "Modernist Bread",
    "Scandinavian Baking",
    "CIA Baking & Pastry"
  ]
}

=============================================
🧈 STYLE 50 — KOUIGN-AMANN (BRETON CARAMELIZED PUFF PASTRY)
=============================================
Technical Summary

Hydration: 55–60%

Salt: 1.8–2.2%

Sugar in dough: 3–5%

Sugar in lamination: 25–40%

Butter lamination: 30–45%

Folds: 3 single folds

Baking: 205–225°C

Traits: caramelized crust, dense puff layers

Risks: caramel leaking if shape is not tight

References:

Breton regional documentation

Modernist Bread

Short History

Kouign-Amann (“butter cake”) originated in Brittany in the 19th century. It is considered a hybrid of puff pastry and caramelized laminated bread.

JSON Schema Block
{
  "id": "kouign_amann",
  "name": "Kouign-Amann (Breton Caramelized Pastry)",
  "category": "pastry",
  "origin": {
    "country": "France (Brittany)",
    "period": "19th century"
  },
  "history": "A sugar-laminated Breton pastry with caramelized crust and dense layers.",
  "technicalProfile": {
    "hydration": [55, 60],
    "salt": [1.8, 2.2],
    "sugarDough": [3, 5],
    "sugarLamination": [25, 40],
    "butterLamination": [30, 45],
    "bakingTemperature": "205–225°C"
  },
  "tags": ["laminated", "caramelized", "breton"],
  "references": [
    "Modernist Bread",
    "Breton Culinary Documentation"
  ]
}

=============================================
🧈 STYLE 51 — LAMINATED BRIOCHE (HYBRID VIENNOISERIE)
=============================================
Technical Summary

Hydration: 55–62%

Salt: 1.8–2.2%

Sugar: 12–20%

Eggs: 15–25%

Butter in dough: 25–35%

Lamination butter: 15–25%

Folds: 2–3 single folds

Proof: 26–28°C

Baking: 180–200°C

Traits: extremely rich, soft, with defined laminated layers

References:

Modernist Bread

Le Cordon Bleu

Short History

Laminated brioche is a modern hybrid combining traditional French brioche (high butter, egg-rich dough) with lamination techniques from croissant and puff pastry.

JSON Schema Block
{
  "id": "laminated_brioche",
  "name": "Laminated Brioche",
  "category": "pastry",
  "origin": {
    "country": "France",
    "period": "Modern"
  },
  "history": "A contemporary hybrid combining brioche richness with laminated layers.",
  "technicalProfile": {
    "hydration": [55, 62],
    "salt": [1.8, 2.2],
    "sugar": [12, 20],
    "eggs": [15, 25],
    "butterDough": [25, 35],
    "butterLamination": [15, 25],
    "proofing": "26–28°C",
    "bakingTemperature": "180–200°C"
  },
  "tags": ["brioche", "laminated", "hybrid"],
  "references": [
    "Modernist Bread",
    "Le Cordon Bleu Professional Baking"
  ]
}

LOTE 6B — PASTRY & SWEET DOUGHS II (5 Estilos)
=============================================

Inclui:

Sweet Rolls (Milk Dough, American-style)

Cruffin (Croissant + Muffin Hybrid)

Pain Suisse / Chocolate Custard Strip

Puff-Laminated Hybrid (Modern laminated sweet dough)

NY Croissant Roll / Modern TikTok Hybrid (“Swirl Roll”)

=============================================
🍥 STYLE 52 — SWEET ROLLS (MILK-ENRICHED SOFT DOUGH)
=============================================
Technical Summary

Hydration: 62–68%

Salt: 1.6–2.0%

Sugar: 10–18%

Eggs: 8–12%

Butter: 12–20%

Milk: 20–35% of liquid phase

Preferments: optional tangzhong (5–10%)

Baking: 175–190°C

Traits: soft crumb, enriched, ideal for cinnamon rolls

Risks:

Too much sugar = weak gluten

Too low temp = pale crust

Overmixing = tough rolls

References:

Modernist Bread

King Arthur Baking – Enriched dough guides

CIA Baking & Pastry

Short History

Sweet rolls evolved in Europe and the U.S. as enriched soft doughs used for breakfast pastries, often filled with cinnamon, custard, or fruit. Milk-based doughs became standard in the 20th century.

JSON Schema Block
{
  "id": "sweet_rolls_classic",
  "name": "Sweet Rolls (Milk-Enriched Dough)",
  "category": "pastry",
  "origin": {
    "country": "USA/Europe",
    "period": "19th–20th century"
  },
  "history": "An enriched milk-based dough used for cinnamon rolls and sweet pastries.",
  "technicalProfile": {
    "hydration": [62, 68],
    "salt": [1.6, 2.0],
    "sugar": [10, 18],
    "eggs": [8, 12],
    "milk": [20, 35],
    "butter": [12, 20],
    "bakingTemperature": "175–190°C"
  },
  "tags": ["sweet", "milk-dough", "breakfast"],
  "references": [
    "Modernist Bread",
    "King Arthur Baking",
    "CIA Baking & Pastry"
  ]
}

=============================================
🌀 STYLE 53 — CRUFFIN (CROISSANT + MUFFIN HYBRID)
=============================================
Technical Summary

Hydration: 58–64%

Salt: 1.8–2.2%

Sugar: 10–14%

Butter lamination: 25–40%

Lamination folds: 3 single

Baking: 185–200°C

Traits: rolled croissant dough baked inside a muffin tin

Risks:

Too much sugar = caramel leaks

Butter leakage common if too warm

Underproof = dense spiral

References:

Modernist Bread hybrid viennoiserie section

Pastry chef technical blogs (real-world test references)

Short History

The cruffin emerged in San Francisco in the 2010s as a modern hybrid: croissant dough rolled into a spiral, baked in a muffin mold, and filled post-bake with creams or curds.

JSON Schema Block
{
  "id": "cruffin_hybrid",
  "name": "Cruffin (Croissant-Muffin Hybrid)",
  "category": "pastry",
  "origin": {
    "country": "USA",
    "period": "2010s"
  },
  "history": "A modern hybrid combining croissant lamination with muffin mould baking.",
  "technicalProfile": {
    "hydration": [58, 64],
    "salt": [1.8, 2.2],
    "sugar": [10, 14],
    "butterLamination": [25, 40],
    "bakingTemperature": "185–200°C"
  },
  "tags": ["hybrid", "laminated", "modern"],
  "references": [
    "Modernist Bread",
    "Professional Pastry Chef Documentation"
  ]
}

=============================================
🍫 STYLE 54 — PAIN SUISSE (CHOCOLATE & CUSTARD STRIP)
=============================================
Technical Summary

Hydration: 58–62%

Sugar: 10–16%

Salt: 1.6–2.0%

Butter lamination: 20–30%

Eggs: 8–12%

Filling: pastry cream + chocolate sticks

Baking: 190–205°C

Traits: sweet, soft laminated dough with filled center

Risks:

Overhydration weakens lamination

Custard leakage if under-thickened

References:

Le Cordon Bleu

Modernist Bread (regional viennoiserie)

Short History

Pain Suisse is a French-Swiss viennoiserie made from sweet laminated dough filled with pastry cream and chocolate. Popularized in contemporary boulangeries.

JSON Schema Block
{
  "id": "pain_suisse",
  "name": "Pain Suisse (Chocolate & Custard Strip)",
  "category": "pastry",
  "origin": {
    "country": "France/Switzerland",
    "period": "20th century"
  },
  "history": "A sweet laminated pastry filled with pastry cream and chocolate sticks.",
  "technicalProfile": {
    "hydration": [58, 62],
    "sugar": [10, 16],
    "salt": [1.6, 2.0],
    "eggs": [8, 12],
    "butterLamination": [20, 30],
    "bakingTemperature": "190–205°C"
  },
  "tags": ["laminated", "sweet", "cream-filled"],
  "references": [
    "Le Cordon Bleu Professional Baking",
    "Modernist Bread"
  ]
}

=============================================
🧈 STYLE 55 — PUFF-LAMINATED HYBRID (SWEET PUFF VARIANT)
=============================================
Technical Summary

Hydration: 40–48%

Salt: 1.6–2.0%

Sugar: 6–12%

Butter block: 35–55%

Folds: 4 single or 3 double

Baking: 200–220°C

Traits: high puff, crisp layers, sweetened puff pastry

Risks:

Dough too warm = layer collapse

Overmixing = shrinkage

References:

Modernist Bread

Modernist Pastry (structure of puff dough)

Short History

A modern adaptation of puff pastry, sweetened and optimized for viennoiserie-style applications. Used for “crowned puff”, scrolls, and filled pastries.

JSON Schema Block
{
  "id": "puff_laminated_hybrid",
  "name": "Puff-Laminated Hybrid (Sweet Puff Variant)",
  "category": "pastry",
  "origin": {
    "country": "France/Modern kitchens",
    "period": "Contemporary"
  },
  "history": "A sweet puff pastry variant used in modern laminated dessert applications.",
  "technicalProfile": {
    "hydration": [40, 48],
    "salt": [1.6, 2.0],
    "sugar": [6, 12],
    "butterBlock": [35, 55],
    "bakingTemperature": "200–220°C"
  },
  "tags": ["puff", "laminated", "sweet"],
  "references": [
    "Modernist Bread",
    "Modernist Pastry"
  ]
}

=============================================
🌀 STYLE 56 — NY CROISSANT ROLL (“SWIRL ROLL”)
=============================================
Technical Summary

Hydration: 58–62%

Sugar: 10–14%

Salt: 1.8–2.0%

Butter lamination: 25–40%

Shaping: rolled tight cylinder, cut cross-section

Baking: 190–205°C

Risks:

Underbake = gummy interior

Overproof = collapse of swirl layers

References:

Real bakery tests (NYC hybrid bakeries)

Modernist Bread lamination fundamentals

Short History

Popularized by New York bakeries and social media in the 2020s, the croissant roll is a croissant dough shaped into a thick spiral “swirl” that bakes into a dramatic layered cylinder.

JSON Schema Block
{
  "id": "croissant_roll_ny",
  "name": "Croissant Roll (NY Swirl Roll)",
  "category": "pastry",
  "origin": {
    "country": "USA (New York)",
    "period": "2020s"
  },
  "history": "A modern laminated swirl pastry popularized in New York bakeries.",
  "technicalProfile": {
    "hydration": [58, 62],
    "sugar": [10, 14],
    "salt": [1.8, 2.0],
    "butterLamination": [25, 40],
    "bakingTemperature": "190–205°C"
  },
  "tags": ["swirl", "hybrid", "modern"],
  "references": [
    "Modernist Bread (lamination principles)",
    "NYC bakery documentation"
  ]
}
