
import { DoughStyleDefinition, FermentationTechnique, RecipeStyle, BakeType, IngredientConfig } from '../types';

// Raw Canonical Data provided
const RAW_CANONICAL_STYLES = [
  // 1. Neapolitan AVPN Classic
  {
    id: "neapolitan_avpn_classic",
    category: "pizza",
    family: "Neapolitan Pizza",
    variantName: "Neapolitan AVPN Classic",
    origin: { country: "Italy", region: "Naples", period: "18th–19th century (Codified 1984)" },
    history:
      "The 'Verace Pizza Napoletana' is the protected ancestor of modern pizza. While flatbreads existed for millennia, the tomato-topped pizza emerged in 18th-century Naples. The legend of the Margherita (1889) honors Queen Margherita of Savoy, but the style predates her. In 1984, the Associazione Verace Pizza Napoletana (AVPN) codified the rules to protect the tradition against industrialization.",
    culturalContext:
      "A UNESCO Intangible Cultural Heritage item. It is not just food but a social ritual in Naples. Traditionally eaten with a knife and fork or folded 'a libretto' (like a booklet) as street food. It is soft, wet, and digestible, never crispy.",
    technicalProfile: {
      hydrationRange: [58, 62.5],
      saltRange: [2.5, 3.0],
      fatRange: [0, 0],
      sugarRange: [0, 0],
      preferment: "Direct dough (impasto diretto) is the standard. Sourdough (Criskito) is allowed but rare in strict tradition.",
      flourStrength: "Medium-High strength (W 280–320), P/L 0.50–0.60, protein 11.5–12.5%",
      fermentation: {
        bulk: "2h bulk at room temp, then balling",
        proof: "6–24h total maturation at room temp (18–25°C)",
        coldRetard: "Traditionally not used; modern AVPN rules allow it"
      },
      oven: {
        type: "wood_fired",
        temperatureC: [430, 485],
        notes: "Dome temp ~485°C, Floor ~430°C. Cook time strictly 60–90 seconds."
      },
      recommendedUse: ["Authentic Neapolitan Margherita", "Marinara"]
    },
    references: [
      "AVPN International Regulations",
      "Modernist Pizza",
      "UNESCO Intangible Cultural Heritage"
    ],
    isCanonical: true,
    source: "official"
  },

  // 2. Neapolitan Contemporary High Hydration
  {
    id: "neapolitan_contemporary_high_hydration",
    category: "pizza",
    family: "Neapolitan Pizza",
    variantName: "Neapolitan Contemporary (Canotto)",
    origin: { country: "Italy", region: "Caserta / Naples", period: "2010s–Present" },
    history:
      "A modern evolution often called 'Pizza Canotto' (dinghy) due to its large, airy rim. Pioneers like Carlo Sammarco and Franco Pepe pushed hydration limits to create a lighter, more alveolated structure than the traditional style, often using preferments (Biga/Poolish) or autolyse.",
    culturalContext:
      "Represents the 'New Wave' of Italian pizza. It focuses on extreme digestibility, visual impact (Instagrammable structure), and gourmet toppings. It challenges the strict AVPN rules while respecting the roots.",
    technicalProfile: {
      hydrationRange: [65, 75],
      saltRange: [2.5, 3.0],
      fatRange: [0, 2],
      sugarRange: [0, 0],
      preferment: "Very common: 100% Biga, Poolish, or Autolyse methods.",
      flourStrength: "High strength (W 300–350), P/L 0.55–0.65, high protein",
      fermentation: {
        bulk: "Variable; often 24–48h cold fermentation is standard",
        proof: "2–4h at room temp before baking",
        coldRetard: "Almost always used (24–72h)"
      },
      oven: {
        type: "wood_fired",
        temperatureC: [400, 450],
        notes: "Slightly lower temp than AVPN to allow the larger water content to evaporate and structure to set."
      },
      recommendedUse: ["Gourmet toppings", "Instagram-style puffy crusts"]
    },
    references: ["Modernist Pizza", "Pizza Research Institute", "Luciano Pignataro"],
    isCanonical: true,
    source: "official"
  },

  // 3. Neapolitan Home-Oven Adapted
  {
    id: "neapolitan_home_oven_adapted",
    category: "pizza",
    family: "Neapolitan Pizza",
    variantName: "Neapolitan Style – Home Oven Adapted",
    origin: { country: "Global", region: "Home Kitchens", period: "21st century" },
    history:
      "The quest for Neapolitan pizza at home led to this adapted style. Since home ovens max out at 250–300°C (vs 485°C), the dough is engineered to brown at lower temperatures and retain moisture over a longer bake time (5–8 mins).",
    culturalContext:
      "Fueled by internet communities (PizzaMaking.com, Reddit) and the pandemic baking boom. It bridges the gap between commercial quality and domestic equipment limits.",
    technicalProfile: {
      hydrationRange: [65, 70],
      saltRange: [2.0, 2.5],
      fatRange: [2, 4],
      sugarRange: [1, 3],
      preferment: "Any (Poolish/Biga) works well to add flavor complexity.",
      flourStrength: "Strong Bread Flour or Malted 00 (W 280–320)",
      fermentation: {
        bulk: "Cold fermentation (24–72h) is preferred for flavor and convenience",
        proof: "2–4h at room temp",
        coldRetard: "Essential for home schedules"
      },
      oven: {
        type: "electric_home",
        temperatureC: [250, 300],
        notes: "Crucial: Use Baking Steel or Stone. Add oil/sugar/malt to dough to assist Maillard reaction."
      },
      recommendedUse: ["Home baking without pizza oven", "Crispier crust lovers"]
    },
    references: ["Ken Forkish - The Elements of Pizza", "PizzaMaking.com"],
    isCanonical: true,
    source: "official"
  },

  // 4. New York Slice Shop
  {
    id: "new_york_slice_shop",
    category: "pizza",
    family: "New York Style Pizza",
    variantName: "New York Slice Shop (Classic)",
    origin: { country: "United States", region: "New York City", period: "Early 20th century" },
    history:
      "Descended from Neapolitan immigrants (Lombardi's, 1905), this style evolved to suit coal and later gas deck ovens. The dough became larger (18-20 inches), lower moisture, and tougher to handle the 'slice fold'. The use of bromated high-gluten flour became a standard for that specific chew.",
    culturalContext:
      "The quintessential American street food. Cheap, fast, and eaten on the go. The 'New York Fold' is a practical necessity to keep the molten cheese and oil from sliding off.",
    technicalProfile: {
      hydrationRange: [58, 62],
      saltRange: [2.0, 2.5],
      fatRange: [2, 5],
      sugarRange: [1, 3],
      preferment: "Direct dough is standard. Old dough (scrap) sometimes added.",
      flourStrength: "High-Gluten Flour (13–14.5% protein), often bromated",
      fermentation: {
        bulk: "24–48h Cold Fermentation is critical for the characteristic blistered crust",
        proof: "2–3h warm up before stretching",
        coldRetard: "Mandatory for texture and flavor"
      },
      oven: {
        type: "gas_deck",
        temperatureC: [280, 315],
        notes: "Baked on deck for 7–12 minutes. Must be crisp enough to hold its own weight."
      },
      recommendedUse: ["By-the-slice sales", "Large 18-inch pies"]
    },
    references: ["Modernist Pizza", "Scott123 (PizzaMaking.com)", "Famous Ray's"],
    isCanonical: true,
    source: "official"
  },

  // 5. New York Artisan Long Cold Ferment
  {
    id: "new_york_artisan_cold_ferment",
    category: "pizza",
    family: "New York Style Pizza",
    variantName: "New York Artisan (Modern)",
    origin: { country: "United States", region: "Brooklyn / Manhattan", period: "2000s–Present" },
    history:
      "A renaissance of the NY style led by pizzerias like Lucali, Scarr's, and Best Pizza. They rejected industrial ingredients (bromated flour, cheap cheese) in favor of stone-milled local flours, natural leavening (sourdough hybrids), and longer, more complex fermentations.",
    culturalContext:
      "Blurs the line between a slice shop and a sit-down restaurant. The crust is often darker (charred), lighter on the stomach, and has a more complex wheat flavor.",
    technicalProfile: {
      hydrationRange: [63, 68],
      saltRange: [2.2, 2.6],
      fatRange: [1, 3],
      sugarRange: [0, 1],
      preferment: "Sourdough starter (Levain) often mixed with small amount of commercial yeast.",
      flourStrength: "Unbleached Bread Flour + Whole Wheat percentage (W 300+)",
      fermentation: {
        bulk: "48–96h Cold Fermentation. Extreme maturation breaks down gluten for tenderness.",
        proof: "3–4h at room temp",
        coldRetard: "The secret to the 'Artisan' flavor profile"
      },
      oven: {
        type: "gas_deck",
        temperatureC: [290, 330],
        notes: "Often baked slightly hotter and darker than classic slice shops."
      },
      recommendedUse: ["Premium slice shops", "Whole pie artisan pizzerias"]
    },
    references: ["Modernist Pizza", "Frank Pinello", "Mark Iacono"],
    isCanonical: true,
    source: "official"
  },

  // 6. Roman Teglia (Al Taglio Pan)
  {
    id: "roman_teglia_pan",
    category: "pizza",
    family: "Roman Pan Pizza",
    variantName: "Roman Teglia (Al Taglio – High Hydration Pan)",
    origin: { country: "Italy", region: "Rome", period: "Late 20th century" },
    history:
      "Roman teglia or al taglio pizza is baked in rectangular pans with very high hydration, yielding an airy crumb and crisp base.",
    culturalContext:
      "Sold by the slice by weight in Roman bakeries and pizzerias, often topped after par-bake or fully baked with toppings.",
    technicalProfile: {
      hydrationRange: [75, 85],
      saltRange: [2.3, 2.8],
      fatRange: [3, 5],
      sugarRange: [0, 2],
      preferment: "Often uses long cold ferment and sometimes preferments for better structure.",
      flourStrength: "Strong bread or pizza flour, W 300–340",
      fermentation: {
        bulk: "12–48 h with cold retard",
        proof: "1–3 h in pan before baking",
        coldRetard: "Common for flavor and extensibility"
      },
      oven: {
        type: "electric_home",
        temperatureC: [240, 280],
        notes: "Baked in oiled rectangular pans, sometimes in two stages."
      },
      recommendedUse: ["Roman pan pizza", "Tray-baked pizza sold by weight"]
    },
    references: ["Modernist Pizza", "Roman pan pizza literature"],
    isCanonical: true,
    source: "official"
  },

  // 7. Roman Scrocchiarella (Thin & Crispy)
  {
    id: "roman_scrocchiarella",
    category: "pizza",
    family: "Roman Thin Pizza",
    variantName: "Roman Scrocchiarella (Thin & Crispy)",
    origin: { country: "Italy", region: "Rome", period: "20th century" },
    history:
      "Roman scrocchiarella is a very thin, crisp pizza style baked on pans or directly on the deck, distinct from pan-style teglia.",
    culturalContext:
      "Common in Roman pizzerias as an alternative to Neapolitan, offering a crunchy, thin base suited for many toppings.",
    technicalProfile: {
      hydrationRange: [55, 60],
      saltRange: [2.0, 2.5],
      fatRange: [2, 4],
      sugarRange: [0, 2],
      preferment: "Often direct dough; some formulas use poolish.",
      flourStrength: "Medium-strong flour, W 240–280",
      fermentation: {
        bulk: "2–6 h at room temperature or partial cold ferment",
        proof: "Short proof in pans or on trays",
        coldRetard: "Optional up to 24 h"
      },
      oven: {
        type: "electric_home",
        temperatureC: [250, 300],
        notes: "Baked thin on pans or stone for crispness."
      },
      recommendedUse: ["Roman thin pizza", "Crispy pizza base"]
    },
    references: ["Modernist Pizza", "Italian pizza technical literature"],
    isCanonical: true,
    source: "official"
  },

  // 8. Detroit Style Classic
  {
    id: "detroit_style_classic",
    category: "pizza",
    family: "Detroit Pizza",
    variantName: "Detroit Style Classic (Blue Steel Pan)",
    origin: { country: "United States", region: "Detroit", period: "Mid 20th century" },
    history:
      "Detroit-style pizza originated in mid-20th-century Detroit using automotive parts pans, producing a thick, airy crumb and caramelized cheese edges.",
    culturalContext:
      "Served in rectangles with a crispy cheese crown, often topped with sauce stripes after baking.",
    technicalProfile: {
      hydrationRange: [70, 75],
      saltRange: [2.0, 2.5],
      fatRange: [3, 5],
      sugarRange: [1, 3],
      preferment: "Typically direct dough with yeast and moderate fermentation.",
      flourStrength: "Bread flour, protein around 12–13%",
      fermentation: {
        bulk: "1–3 h at room temperature or partial cold ferment",
        proof: "45–90 min in pan",
        coldRetard: "Optional overnight in pan"
      },
      oven: {
        type: "electric_home",
        temperatureC: [240, 280],
        notes: "Blue-steel or similar pans heavily oiled for fried edges."
      },
      recommendedUse: ["Thick pan pizza", "Cheese-edge caramelized pizzas"]
    },
    references: ["Modernist Pizza", "Detroit pizza historical accounts"],
    isCanonical: true,
    source: "official"
  },

  // 9. Sicilian / Grandma Pan
  {
    id: "sicilian_grandma_pan",
    category: "pizza",
    family: "American Pan Pizza",
    variantName: "Sicilian / Grandma Pan Pizza",
    origin: { country: "United States", region: "Italian-American communities", period: "20th century" },
    history:
      "Sicilian and grandma-style pan pizzas interpret Italian focaccia and bakery pizzas into thick or medium-thickness pan-baked pies.",
    culturalContext:
      "Popular in Italian-American bakeries and pizzerias for family-style trays and by-the-slice service.",
    technicalProfile: {
      hydrationRange: [65, 75],
      saltRange: [2.0, 2.5],
      fatRange: [3, 6],
      sugarRange: [1, 3],
      preferment: "Often direct yeast dough; some formulas use sponge or poolish.",
      flourStrength: "Bread flour or strong all-purpose",
      fermentation: {
        bulk: "2–6 h at room temperature or partial cold ferment",
        proof: "30–90 min in pan before baking",
        coldRetard: "Optional 12–24 h"
      },
      oven: {
        type: "electric_home",
        temperatureC: [220, 260],
        notes: "Baked in oiled rectangular pans; thickness depends on variant."
      },
      recommendedUse: ["Tray-baked pizza", "Family-style pan pies"]
    },
    references: ["Modernist Pizza", "American pizza baking practice"],
    isCanonical: true,
    source: "official"
  },

  // 10. Brazilian Pizzeria Gas-Deck
  {
    id: "brazilian_pizzeria_gas_deck",
    category: "pizza",
    family: "Brazilian Pizzeria",
    variantName: "Brazilian Rodízio / Gas-Deck Style",
    origin: { country: "Brazil", region: "Urban pizzerias", period: "Late 20th century" },
    history:
      "Brazilian pizzeria-style dough adapts Italian and American influences to gas or electric deck ovens, often with slightly lower hydration and enriched dough.",
    culturalContext:
      "Used in rodízio-style pizzerias and delivery-focused operations, supporting a wide range of toppings and extended service.",
    technicalProfile: {
      hydrationRange: [55, 62],
      saltRange: [1.8, 2.2],
      fatRange: [2, 4],
      sugarRange: [1, 3],
      preferment: "Typically direct dough; some use biga or sponge.",
      flourStrength: "Strong Brazilian bread/pizza flour, W ~280–330",
      fermentation: {
        bulk: "2–8 h at room temperature or partially retarded",
        proof: "30–90 min before baking",
        coldRetard: "Optional up to 24 h for flavor"
      },
      oven: {
        type: "gas_deck",
        temperatureC: [280, 320],
        notes: "Designed for repeated baking cycles in commercial pizzerias."
      },
      recommendedUse: ["Brazilian pizzeria-style pizza", "Rodízio and delivery"]
    },
    references: ["Brazilian pizza trade literature", "Professional panificação/pizzaria references"],
    isCanonical: true,
    source: "official"
  },

  // 11. Baguette Tradition Française
  {
    id: "baguette_tradition_francaise",
    category: "bread",
    family: "French Lean Breads",
    variantName: "Baguette Tradition Française",
    origin: { country: "France", region: "Nationwide", period: "20th century" },
    history:
      "Baguette tradition is a protected style of French lean bread with restrictions on additives and methods, relying on slow fermentation and quality flour.",
    culturalContext:
      "Consumed daily as a staple bread in France, often bought fresh from artisan boulangeries.",
    technicalProfile: {
      hydrationRange: [65, 72],
      saltRange: [1.8, 2.2],
      fatRange: [0, 0],
      sugarRange: [0, 0.5],
      preferment: "Poolish, pâte fermentée or liquid levain commonly 20–50%.",
      flourStrength: "French T65/T55 or equivalent, W ~200–260",
      fermentation: {
        bulk: "2–4 h at 23–25°C with folds, or partially retarded",
        proof: "45–75 min at 23–25°C",
        coldRetard: "Optional overnight retard for flavor"
      },
      oven: {
        type: "deck",
        temperatureC: [230, 250],
        notes: "Requires strong steam at the beginning of the bake."
      },
      recommendedUse: ["Daily table bread", "Sandwiches", "Toast"]
    },
    references: ["Bread – Jeffrey Hamelman", "The Taste of Bread – Raymond Calvel"],
    isCanonical: true,
    source: "official"
  },

  // 12. Pain de Campagne
  {
    id: "pain_de_campagne",
    category: "bread",
    family: "French Lean Breads",
    variantName: "Pain de Campagne (Country French)",
    origin: { country: "France", region: "Rural bakeries", period: "Traditional" },
    history:
      "Pain de campagne is a rustic country loaf blending white, whole wheat and sometimes rye flours, often using a natural preferment.",
    culturalContext:
      "Served as a versatile table bread, used for slicing, toast and sandwiches with a robust flavor profile.",
    technicalProfile: {
      hydrationRange: [68, 75],
      saltRange: [1.8, 2.1],
      fatRange: [0, 0],
      sugarRange: [0, 1],
      preferment: "Levain or pâte fermentée, typically 20–40% of flour.",
      flourStrength: "Blend of bread flour with 10–30% wholegrain or rye",
      fermentation: {
        bulk: "2–4 h at 23–25°C, sometimes followed by cold retard",
        proof: "45–90 min at 23–25°C",
        coldRetard: "Common 8–16 h at 4–8°C"
      },
      oven: {
        type: "deck",
        temperatureC: [230, 250],
        notes: "Works well in Dutch ovens or steam-injected decks."
      },
      recommendedUse: ["Country loaves", "Rustic sandwiches", "Toast"]
    },
    references: ["Bread – Jeffrey Hamelman", "French country bread literature"],
    isCanonical: true,
    source: "official"
  },

  // 13. Pain Rustique
  {
    id: "pain_rustique",
    category: "bread",
    family: "French Lean Breads",
    variantName: "Pain Rustique",
    origin: { country: "France", region: "Artisan bakeries", period: "Modern artisanal" },
    history:
      "Pain rustique is a very open-crumb, lean French-inspired bread, often made with high hydration and gentle handling.",
    culturalContext:
      "Used in artisan bakeries as a rustic, irregular bread ideal for sharing and slicing.",
    technicalProfile: {
      hydrationRange: [72, 78],
      saltRange: [1.8, 2.1],
      fatRange: [0, 0.5],
      sugarRange: [0, 0.5],
      preferment: "Often poolish or liquid levain, 30–50%.",
      flourStrength: "Bread flour or strong T65-equivalent, W ~260",
      fermentation: {
        bulk: "3–4 h at 23–25°C with gentle folds",
        proof: "30–60 min at 23–25°C",
        coldRetard: "Optional overnight for extra flavor"
      },
      oven: {
        type: "deck",
        temperatureC: [235, 250],
        notes: "Requires good steaming and gentle shaping to preserve open crumb."
      },
      recommendedUse: ["Rustic loaves", "Table bread", "Soup accompaniment"]
    },
    references: ["Bread – Jeffrey Hamelman", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 14. Ciabatta High Hydration
  {
    id: "ciabatta_high_hydration",
    category: "bread",
    family: "Italian Rustic & High Hydration",
    variantName: "Ciabatta (High Hydration Poolish)",
    origin: { country: "Italy", region: "Northern Italy", period: "Late 20th century" },
    history:
      "Ciabatta was developed in Italy as an alternative to French baguette, featuring an open crumb and thin crust.",
    culturalContext:
      "Used for sandwiches, bruschetta and table bread, valued for its airy internal structure.",
    technicalProfile: {
      hydrationRange: [75, 80],
      saltRange: [2.0, 2.2],
      fatRange: [0, 2],
      sugarRange: [0, 1],
      preferment: "Poolish 30–50% of flour is classic.",
      flourStrength: "Strong bread flour, W ~260–300",
      fermentation: {
        bulk: "2–3 h at 23–25°C with multiple folds",
        proof: "30–60 min after dividing and shaping",
        coldRetard: "Optional 8–12 h for flavor"
      },
      oven: {
        type: "deck",
        temperatureC: [230, 250],
        notes: "Bake with good steam; handle gently to preserve gas structure."
      },
      recommendedUse: ["Sandwich bread", "Bruschetta", "Rustic table bread"]
    },
    references: ["Bread – Jeffrey Hamelman", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 15. Pane Pugliese
  {
    id: "pane_pugliese",
    category: "bread",
    family: "Italian Rustic & High Hydration",
    variantName: "Pane Pugliese",
    origin: { country: "Italy", region: "Puglia", period: "Traditional" },
    history:
      "Pane pugliese is a rustic Italian bread from Puglia, often using high hydration and durum or blended flours.",
    culturalContext:
      "Served as a flavorful table bread with a chewy crumb, pairing well with olive oil and hearty dishes.",
    technicalProfile: {
      hydrationRange: [70, 78],
      saltRange: [2.0, 2.3],
      fatRange: [0, 2],
      sugarRange: [0, 1],
      preferment: "Levain or biga-based preferments are common.",
      flourStrength: "Blend of bread flour and durum wheat flours",
      fermentation: {
        bulk: "2–4 h at 23–25°C with folds",
        proof: "45–90 min at 23–25°C",
        coldRetard: "Optional overnight retard"
      },
      oven: {
        type: "deck",
        temperatureC: [230, 250],
        notes: "Often baked as large loaves with bold crust."
      },
      recommendedUse: ["Rustic Italian table bread"]
    },
    references: ["Modernist Bread", "Italian bread literature"],
    isCanonical: true,
    source: "official"
  },

  // 16. Focaccia Genovese
  {
    id: "focaccia_genovese",
    category: "bread",
    family: "Italian Rustic & High Hydration",
    variantName: "Focaccia Genovese",
    origin: { country: "Italy", region: "Liguria (Genoa)", period: "Traditional" },
    history:
      "Focaccia genovese is a traditional Ligurian flatbread with high hydration, generous olive oil and characteristic dimpling.",
    culturalContext:
      "Eaten plain or with simple toppings, often as a snack or accompaniment to meals and drinks.",
    technicalProfile: {
      hydrationRange: [70, 80],
      saltRange: [2.5, 3.0],
      fatRange: [5, 10],
      sugarRange: [0, 3],
      preferment: "Direct dough or mild preferment; long fermentation improves flavor.",
      flourStrength: "All-purpose or bread flour, medium strength",
      fermentation: {
        bulk: "2–4 h at 23–25°C, possibly including cold retard",
        proof: "30–90 min in pan after dimpling and brine application",
        coldRetard: "Often 8–24 h for depth of flavor"
      },
      oven: {
        type: "electric_home",
        temperatureC: [220, 250],
        notes: "Baked in oiled sheet pans for crisp bottom and tender crumb."
      },
      recommendedUse: ["Flatbread snack", "Table bread", "Sandwich base"]
    },
    references: ["Modernist Bread", "Italian focaccia traditions"],
    isCanonical: true,
    source: "official"
  },

  // 17. Tartine Country Loaf
  {
    id: "tartine_country_loaf",
    category: "bread",
    family: "Levain & Country Sourdough",
    variantName: "Country Sourdough (Tartine-style)",
    origin: { country: "United States", region: "San Francisco", period: "Early 21st century" },
    history:
      "The Tartine country loaf popularized naturally leavened, high-hydration, open-crumb sourdough in the modern artisan bread movement.",
    culturalContext:
      "Baked in artisan bakeries and by home enthusiasts as a benchmark sourdough loaf.",
    technicalProfile: {
      hydrationRange: [75, 80],
      saltRange: [2.0, 2.2],
      fatRange: [0, 0],
      sugarRange: [0, 1],
      preferment: "Liquid levain 15–25% of flour.",
      flourStrength: "Bread flour with 10–20% whole wheat",
      fermentation: {
        bulk: "3–4 h at 25–27°C with repeated folds",
        proof: "2–4 h at 20–24°C or retarded overnight",
        coldRetard: "Commonly 8–16 h for flavor and scoring"
      },
      oven: {
        type: "deck",
        temperatureC: [230, 250],
        notes: "Often baked in Dutch ovens or steam-injected decks."
      },
      recommendedUse: ["Artisan sourdough", "Table bread", "Toast, tartines"]
    },
    references: ["Tartine Bread – Chad Robertson", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 18. Mixed Grain Sourdough
  {
    id: "mixed_grain_sourdough",
    category: "bread",
    family: "Levain & Country Sourdough",
    variantName: "Mixed Grain Sourdough (30–60% Wholegrain)",
    origin: { country: "Global", region: "Artisan baking", period: "Modern" },
    history:
      "Mixed grain sourdough loaves incorporate significant wholegrain content for flavor, nutrition and complexity.",
    culturalContext:
      "Common in artisan bakeries and health-conscious baking, adapted with local grain blends.",
    technicalProfile: {
      hydrationRange: [72, 82],
      saltRange: [1.8, 2.2],
      fatRange: [0, 3],
      sugarRange: [0, 2],
      preferment: "Levain 15–30%, sometimes stiff for higher wholegrain percentages.",
      flourStrength: "Blend of bread flour and wholegrain flours (wheat, rye, others)",
      fermentation: {
        bulk: "3–4 h at 24–26°C with folds",
        proof: "1–3 h or retarded overnight",
        coldRetard: "Very common 8–16 h for flavor"
      },
      oven: {
        type: "deck",
        temperatureC: [230, 250],
        notes: "Requires good steaming; scoring adapted to dough strength."
      },
      recommendedUse: ["Nutritious sourdough loaves", "Sandwiches", "Toast"]
    },
    references: ["Modernist Bread", "The Sourdough School – Vanessa Kimbell"],
    isCanonical: true,
    source: "official"
  },

  // 19. Heirloom Levain (generic canonical slot)
  {
    id: "heirloom_levain_loaf",
    category: "bread",
    family: "Levain & Country Sourdough",
    variantName: "Heirloom Grain Levain Loaf",
    origin: { country: "Global", region: "Local grain movements", period: "21st century" },
    history:
      "Heirloom grain levain loaves use regionally milled, often ancient or heritage grains to express local terroir in bread.",
    culturalContext:
      "Produced by small mills, micro-bakeries and advanced home bakers focusing on grain diversity.",
    technicalProfile: {
      hydrationRange: [75, 85],
      saltRange: [1.8, 2.2],
      fatRange: [0, 3],
      sugarRange: [0, 2],
      preferment: "Levain 20–30%, often adjusted to grain mix.",
      flourStrength: "Varies with grain blend; typically medium to strong",
      fermentation: {
        bulk: "3–5 h at 24–26°C with careful observation",
        proof: "1–3 h or overnight retard",
        coldRetard: "Common for flexibility and flavor"
      },
      oven: {
        type: "deck",
        temperatureC: [230, 250],
        notes: "Baker must adapt to specific grain absorption and strength."
      },
      recommendedUse: ["Artisan bread expressing local grains"]
    },
    references: ["Modernist Bread", "Contemporary grain-focused baking literature"],
    isCanonical: true,
    source: "official"
  },

  // 20. 70% Rye Sour
  {
    id: "seventy_percent_rye_sour",
    category: "bread",
    family: "Wholegrain & Rye",
    variantName: "70% Rye Sour Bread",
    origin: { country: "Germany", region: "Central Europe", period: "Traditional" },
    history:
      "High-percentage rye sour breads are traditional in Central and Northern Europe, using rye sourdough for structure and flavor.",
    culturalContext:
      "Consumed as dense, flavorful loaves, sliced thin, often with savory toppings.",
    technicalProfile: {
      hydrationRange: [80, 90],
      saltRange: [1.8, 2.0],
      fatRange: [0, 3],
      sugarRange: [0, 3],
      preferment: "Rye sour at 30–50% of total rye flour.",
      flourStrength: "70% rye, 30% wheat or bread flour",
      fermentation: {
        bulk: "Short bulk; much development occurs in sour build",
        proof: "50–90 min in pans or forms",
        coldRetard: "Occasional short retards possible"
      },
      oven: {
        type: "deck",
        temperatureC: [200, 220],
        notes: "Longer bake to set crumb; often rested before slicing."
      },
      recommendedUse: ["Traditional rye loaves", "Cold cuts and cheese"]
    },
    references: ["Bread – Jeffrey Hamelman", "German rye bread standards"],
    isCanonical: true,
    source: "official"
  },

  // 21. 100% Rye Vollkornbrot
  {
    id: "vollkornbrot_100_rye",
    category: "bread",
    family: "Wholegrain & Rye",
    variantName: "100% Rye Vollkornbrot",
    origin: { country: "Germany", region: "Central Europe", period: "Traditional" },
    history:
      "Vollkornbrot is a dense, wholegrain rye bread made with coarse meals and sourdough, designed for long keeping and high nutrition.",
    culturalContext:
      "Served as thin slices with butter, cheese, cured meats and spreads; popular in northern European diets.",
    technicalProfile: {
      hydrationRange: [90, 100],
      saltRange: [1.8, 2.0],
      fatRange: [0, 3],
      sugarRange: [0, 3],
      preferment: "Strong rye sourdough build is essential.",
      flourStrength: "100% rye wholegrain or mixed rye meals",
      fermentation: {
        bulk: "Minimal bulk; dough is more like a paste",
        proof: "60–120 min in pans",
        coldRetard: "Sometimes retarded to manage scheduling"
      },
      oven: {
        type: "deck",
        temperatureC: [180, 210],
        notes: "Long, gentle bake; bread often matured 24 h before slicing."
      },
      recommendedUse: ["Dense wholegrain rye bread", "Long keeping breads"]
    },
    references: ["Bread – Jeffrey Hamelman", "German wholegrain bread traditions"],
    isCanonical: true,
    source: "official"
  },

  // 22. Whole Wheat 100%
  {
    id: "whole_wheat_100",
    category: "bread",
    family: "Wholegrain & Rye",
    variantName: "100% Whole Wheat Bread",
    origin: { country: "Global", region: "Health-focused baking", period: "Modern" },
    history:
      "100% whole wheat breads have become common in health-conscious baking, emphasizing fiber and nutrition over volume.",
    culturalContext:
      "Used as everyday sandwich and toast bread by those seeking higher fiber and wholegrain diets.",
    technicalProfile: {
      hydrationRange: [70, 85],
      saltRange: [1.8, 2.2],
      fatRange: [0, 5],
      sugarRange: [0, 10],
      preferment: "Can use preferments or levain to improve flavor and structure.",
      flourStrength: "100% whole wheat flour; quality and extraction vary",
      fermentation: {
        bulk: "2–4 h at 24–26°C",
        proof: "45–90 min, often in pans",
        coldRetard: "Optional 8–12 h to improve flavor"
      },
      oven: {
        type: "electric_home",
        temperatureC: [200, 230],
        notes: "Careful baking to avoid dry crumb; pan loaves are common."
      },
      recommendedUse: ["Wholegrain sandwich bread", "Toast"]
    },
    references: ["Modernist Bread", "Wholegrain baking literature"],
    isCanonical: true,
    source: "official"
  },

  // 23. Pain de Mie / Pullman
  {
    id: "pain_de_mie_pullman",
    category: "bread",
    family: "Sandwich & Enriched Breads",
    variantName: "Pain de Mie / Pullman Loaf",
    origin: { country: "France/USA", region: "Bakery and industrial", period: "20th century" },
    history:
      "Pain de mie or Pullman loaf is a soft, fine-crumb sandwich bread baked in lidded pans for a square profile.",
    culturalContext:
      "Used for sandwiches, toast and canapés where a uniform crumb and shape are desired.",
    technicalProfile: {
      hydrationRange: [60, 70],
      saltRange: [1.5, 2.0],
      fatRange: [5, 15],
      sugarRange: [5, 15],
      preferment: "Often straight dough; can include sponge or poolish.",
      flourStrength: "Bread or strong all-purpose flour",
      fermentation: {
        bulk: "1–2 h at 24–26°C",
        proof: "60–90 min in lidded pans",
        coldRetard: "Optional overnight bulk"
      },
      oven: {
        type: "electric_home",
        temperatureC: [180, 200],
        notes: "Lidded pans create tight, square crumb structure."
      },
      recommendedUse: ["Sandwich bread", "Toast", "Canapés"]
    },
    references: ["Modernist Bread", "Professional baking texts"],
    isCanonical: true,
    source: "official"
  },

  // 24. Japanese Milk Bread (Hokkaido / Tangzhong)
  {
    id: "japanese_milk_bread",
    category: "bread",
    family: "Sandwich & Enriched Breads",
    variantName: "Japanese Milk Bread (Tangzhong)",
    origin: { country: "Japan", region: "East Asia", period: "20th–21st century" },
    history:
      "Japanese milk bread uses a cooked flour paste (tangzhong) to achieve an especially soft, shreddable crumb and extended shelf life.",
    culturalContext:
      "Common in Japanese and Asian bakeries as a premium soft bread for toast and sandwiches.",
    technicalProfile: {
      hydrationRange: [68, 75],
      saltRange: [1.5, 2.0],
      fatRange: [10, 20],
      sugarRange: [10, 20],
      preferment: "Straight dough with tangzhong; some formulas use sponge.",
      flourStrength: "Bread or high-quality all-purpose flour",
      fermentation: {
        bulk: "1–2 h at 24–26°C",
        proof: "45–90 min in pans until nearly at rim",
        coldRetard: "Optional bulk retard to improve flavor"
      },
      oven: {
        type: "electric_home",
        temperatureC: [170, 190],
        notes: "Bake to golden color without over-drying."
      },
      recommendedUse: ["Soft sandwich bread", "Toast", "Breakfast bread"]
    },
    references: ["Modernist Bread", "Asian bakery literature"],
    isCanonical: true,
    source: "official"
  },

  // 25. Burger Buns
  {
    id: "burger_buns_enriched",
    category: "bread",
    family: "Sandwich & Enriched Breads",
    variantName: "Burger Buns (Enriched)",
    origin: { country: "United States", region: "Global fast food", period: "20th century" },
    history:
      "Burger buns are soft, enriched rolls designed to hold burger patties and condiments without crumbling.",
    culturalContext:
      "Widely produced in industrial and artisan bakeries as a standard element of burgers and sandwiches.",
    technicalProfile: {
      hydrationRange: [60, 68],
      saltRange: [1.5, 2.0],
      fatRange: [8, 18],
      sugarRange: [5, 15],
      preferment: "Usually straight dough; sponge or poolish variants exist.",
      flourStrength: "Bread flour or strong all-purpose flour",
      fermentation: {
        bulk: "1–2 h at 24–26°C",
        proof: "45–75 min after shaping, until puffy",
        coldRetard: "Optional bulk retard"
      },
      oven: {
        type: "electric_home",
        temperatureC: [180, 200],
        notes: "Often topped with seeds; avoid over-baking to keep crumb soft."
      },
      recommendedUse: ["Burger buns", "Sandwich rolls"]
    },
    references: ["AIB guidelines", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 26. Hot Dog Buns
  {
    id: "hot_dog_buns_enriched",
    category: "bread",
    family: "Sandwich & Enriched Breads",
    variantName: "Hot Dog Buns (Enriched)",
    origin: { country: "United States", region: "Global fast food", period: "20th century" },
    history:
      "Hot dog buns are elongated, enriched rolls developed to hold sausages and toppings conveniently.",
    culturalContext:
      "Common in fast food and home grilling contexts, designed for softness and resilience.",
    technicalProfile: {
      hydrationRange: [60, 68],
      saltRange: [1.5, 2.0],
      fatRange: [8, 18],
      sugarRange: [5, 12],
      preferment: "Typically straight dough; some use pre-ferments.",
      flourStrength: "Bread flour or strong all-purpose flour",
      fermentation: {
        bulk: "1–2 h at 24–26°C",
        proof: "45–75 min after shaping in pans or on trays",
        coldRetard: "Optional bulk retard"
      },
      oven: {
        type: "electric_home",
        temperatureC: [180, 200],
        notes: "Baked close together for soft pull-apart texture."
      },
      recommendedUse: ["Hot dog buns", "Sausage rolls"]
    },
    references: ["AIB guidelines", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 27. Brazilian Pão Francês
  {
    id: "pao_frances_brazil",
    category: "bread",
    family: "Brazilian Professional Breads",
    variantName: "Pão Francês / Cacetinho",
    origin: { country: "Brazil", region: "Nationwide", period: "20th century" },
    history:
      "Brazilian pão francês evolved from European lean breads into a distinct, crispy-crusted, light-crumb roll widely consumed at breakfast.",
    culturalContext:
      "A daily staple in Brazilian bakeries, eaten with butter, fillings and used in sandwiches.",
    technicalProfile: {
      hydrationRange: [60, 65],
      saltRange: [1.8, 2.2],
      fatRange: [0, 2],
      sugarRange: [0, 3],
      preferment: "Direct dough or sponge methods depending on bakery line.",
      flourStrength: "Brazilian bread flour, W ~280–330",
      fermentation: {
        bulk: "Short to medium bulk, often in continuous processes",
        proof: "40–80 min in proofing chambers",
        coldRetard: "Sometimes used to manage production"
      },
      oven: {
        type: "deck",
        temperatureC: [230, 260],
        notes: "Strong steam early in bake to create thin, crisp crust."
      },
      recommendedUse: ["Breakfast rolls", "Sandwiches", "Everyday bread"]
    },
    references: ["SENAI panificação", "ABIP technical materials"],
    isCanonical: true,
    source: "official"
  },

  // 28. Pão Sovado
  {
    id: "pao_sovado_brazil",
    category: "bread",
    family: "Brazilian Professional Breads",
    variantName: "Pão Sovado",
    origin: { country: "Brazil", region: "Various regions", period: "Traditional" },
    history:
      "Pão sovado is a slightly enriched, soft Brazilian bread with a tight crumb and shiny crust, shaped as elongated loaves.",
    culturalContext:
      "Popular in bakeries and home consumption as a breakfast and snack bread.",
    technicalProfile: {
      hydrationRange: [60, 68],
      saltRange: [1.5, 2.0],
      fatRange: [3, 8],
      sugarRange: [5, 12],
      preferment: "Usually straight dough; some use sponge.",
      flourStrength: "Brazilian bread flour",
      fermentation: {
        bulk: "1–2 h at 24–26°C",
        proof: "45–90 min after shaping",
        coldRetard: "Optional to improve flavor and scheduling"
      },
      oven: {
        type: "electric_home",
        temperatureC: [180, 200],
        notes: "Often glazed for a slightly glossy crust."
      },
      recommendedUse: ["Breakfast bread", "Snacks", "Sweet or savory fillings"]
    },
    references: ["SENAI panificação", "Brazilian bakery manuals"],
    isCanonical: true,
    source: "official"
  },

  // 29. Brazilian Sweet / Milk Bread
  {
    id: "pao_de_leite_brazil",
    category: "bread",
    family: "Brazilian Professional Breads",
    variantName: "Pão de Leite / Pão Doce Brasileiro",
    origin: { country: "Brazil", region: "Nationwide", period: "20th century" },
    history:
      "Brazilian sweet or milk bread is a soft, slightly sweet enriched dough used for rolls and loaves with a tender crumb.",
    culturalContext:
      "Common in bakeries as rolls and loaves for breakfast, snacks and simple sandwiches.",
    technicalProfile: {
      hydrationRange: [60, 70],
      saltRange: [1.5, 2.0],
      fatRange: [5, 15],
      sugarRange: [8, 20],
      preferment: "Most often straight dough; sponge methods possible.",
      flourStrength: "Brazilian bread flour or strong all-purpose",
      fermentation: {
        bulk: "1–2 h at 24–26°C",
        proof: "45–90 min after shaping",
        coldRetard: "Optional bulk or shaped retard"
      },
      oven: {
        type: "electric_home",
        temperatureC: [175, 195],
        notes: "Often finished with egg wash or sugar toppings."
      },
      recommendedUse: ["Sweet rolls", "Milk bread loaves", "Snack sandwiches"]
    },
    references: ["SENAI panificação", "Brazilian bakery practice"],
    isCanonical: true,
    source: "official"
  },

  // 30. Croissant
  {
    id: "croissant_classic",
    category: "pastry",
    family: "Viennoiserie Laminée",
    variantName: "Classic French Croissant",
    origin: { country: "France", region: "Paris and beyond", period: "19th–20th century" },
    history:
      "Croissant is a laminated, yeasted dough with butter layers, becoming a symbol of French viennoiserie.",
    culturalContext:
      "Eaten at breakfast and as a snack, produced in artisan and industrial bakeries worldwide.",
    technicalProfile: {
      hydrationRange: [50, 60],
      saltRange: [1.5, 2.0],
      fatRange: [25, 35],
      sugarRange: [5, 12],
      preferment: "Usually straight dough; some use poolish.",
      flourStrength: "Strong bread or pastry flour suitable for lamination",
      fermentation: {
        bulk: "1–2 h at 24–26°C before lamination",
        proof: "2–3 h at 24–26°C after shaping",
        coldRetard: "Common to chill dough and butter for lamination"
      },
      oven: {
        type: "deck",
        temperatureC: [190, 210],
        notes: "Requires proper proofing and steam or humidity control."
      },
      recommendedUse: ["Breakfast pastry", "Viennoiserie display"]
    },
    references: ["Ferrandi – Professional Baking", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 31. Pain au Chocolat
  {
    id: "pain_au_chocolat",
    category: "pastry",
    family: "Viennoiserie Laminée",
    variantName: "Pain au Chocolat",
    origin: { country: "France", region: "France-wide", period: "19th–20th century" },
    history:
      "Pain au chocolat uses the same laminated dough as croissant, shaped around chocolate sticks and baked as a rectangular pastry.",
    culturalContext:
      "Common in French and international bakeries as a breakfast and snack item.",
    technicalProfile: {
      hydrationRange: [50, 60],
      saltRange: [1.5, 2.0],
      fatRange: [25, 35],
      sugarRange: [5, 12],
      preferment: "Same base as croissant, usually straight dough.",
      flourStrength: "Lamination-suitable flour",
      fermentation: {
        bulk: "1–2 h at 24–26°C pre-lamination",
        proof: "2–3 h at 24–26°C after shaping",
        coldRetard: "Chilling necessary between lamination steps"
      },
      oven: {
        type: "deck",
        temperatureC: [190, 210],
        notes: "Baked until deep golden with visible layers."
      },
      recommendedUse: ["Breakfast pastry", "Snack pastry"]
    },
    references: ["Ferrandi – Professional Baking", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 32. Pain aux Raisins
  {
    id: "pain_aux_raisins",
    category: "pastry",
    family: "Viennoiserie Laminée",
    variantName: "Pain aux Raisins",
    origin: { country: "France", region: "France-wide", period: "20th century" },
    history:
      "Pain aux raisins is a laminated or enriched dough rolled with pastry cream and raisins, often using similar base dough to croissant.",
    culturalContext:
      "Served as a sweet breakfast or snack pastry in French-style bakeries.",
    technicalProfile: {
      hydrationRange: [55, 65],
      saltRange: [1.5, 2.0],
      fatRange: [20, 30],
      sugarRange: [10, 20],
      preferment: "Derived from croissant-type doughs or enriched brioche-like doughs.",
      flourStrength: "Bread or strong pastry flour",
      fermentation: {
        bulk: "1–2 h at 24–26°C",
        proof: "1.5–3 h depending on formulation",
        coldRetard: "Often chilled before slicing and baking"
      },
      oven: {
        type: "deck",
        temperatureC: [185, 200],
        notes: "Must balance bake to avoid burning sugars."
      },
      recommendedUse: ["Sweet breakfast pastry", "Viennoiserie item"]
    },
    references: ["Ferrandi – Professional Baking", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 33. Cinnamon Rolls
  {
    id: "cinnamon_rolls_classic",
    category: "pastry",
    family: "Enriched Sweet Doughs",
    variantName: "Classic Cinnamon Rolls",
    origin: { country: "United States/Northern Europe", region: "Multiple", period: "20th century" },
    history:
      "Cinnamon rolls are enriched, sweet yeasted dough spirals filled with cinnamon sugar and often topped with icing.",
    culturalContext:
      "Common as a breakfast or coffee-shop pastry in many countries.",
    technicalProfile: {
      hydrationRange: [60, 65],
      saltRange: [1.5, 2.0],
      fatRange: [15, 25],
      sugarRange: [15, 25],
      preferment: "Usually straight dough; some formulas use sponges.",
      flourStrength: "Bread or strong all-purpose flour",
      fermentation: {
        bulk: "1–2 h at 24–26°C",
        proof: "45–90 min after shaping in pans",
        coldRetard: "Frequently retarded overnight for convenience"
      },
      oven: {
        type: "electric_home",
        temperatureC: [175, 190],
        notes: "Bake until set but still soft; icing added after baking."
      },
      recommendedUse: ["Breakfast pastry", "Coffee-shop pastry"]
    },
    references: ["AIB sweet dough guidelines", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 34. Babka
  {
    id: "babka_sweet_bread",
    category: "pastry",
    family: "Enriched Sweet Doughs",
    variantName: "Babka (Chocolate or Cinnamon)",
    origin: { country: "Eastern Europe", region: "Jewish baking traditions", period: "19th–20th century" },
    history:
      "Babka is an enriched sweet bread rolled with fillings like chocolate or cinnamon and twisted into loaves.",
    culturalContext:
      "Popular in Jewish and artisan bakeries, often sliced as a rich dessert or sweet snack.",
    technicalProfile: {
      hydrationRange: [60, 68],
      saltRange: [1.5, 2.0],
      fatRange: [20, 35],
      sugarRange: [15, 30],
      preferment: "Usually straight dough; some formulas use preferments.",
      flourStrength: "Bread flour or strong all-purpose flour",
      fermentation: {
        bulk: "1–2 h at 24–26°C",
        proof: "60–120 min in pans after shaping",
        coldRetard: "Common overnight retard for flavor and handling"
      },
      oven: {
        type: "electric_home",
        temperatureC: [175, 190],
        notes: "Bake thoroughly to set rich crumb without burning filling."
      },
      recommendedUse: ["Sweet loaf", "Dessert bread"]
    },
    references: ["Modernist Bread", "East European baking traditions"],
    isCanonical: true,
    source: "official"
  },

  // 35. Sweet Rolls (Neutral Enriched Base)
  {
    id: "sweet_rolls_neutral",
    category: "pastry",
    family: "Enriched Sweet Doughs",
    variantName: "Sweet Rolls (Neutral Enriched Base)",
    origin: { country: "Global", region: "Commercial and artisan bakeries", period: "20th century" },
    history:
      "Neutral sweet roll dough serves as a base for many bakery items, from twisted rolls to filled buns and rings.",
    culturalContext:
      "Used as a versatile platform for sweet bakery products in industrial and artisan production.",
    technicalProfile: {
      hydrationRange: [60, 70],
      saltRange: [1.5, 2.0],
      fatRange: [10, 25],
      sugarRange: [10, 25],
      preferment: "Often straight dough; sponge methods are also common.",
      flourStrength: "Bread or strong all-purpose flour",
      fermentation: {
        bulk: "1–2 h at 24–26°C",
        proof: "45–90 min after shaping",
        coldRetard: "Used frequently for scheduling flexibility"
      },
      oven: {
        type: "electric_home",
        temperatureC: [175, 190],
        notes: "Bake to a soft crumb; toppings and glazes vary widely."
      },
      recommendedUse: ["Generic sweet rolls", "Base for multiple pastry formats"]
    },
    references: ["AIB sweet dough guidelines", "Professional pastry literature"],
    isCanonical: true,
    source: "official"
  },

  // 36. Panettone Artisanal
  {
    id: "panettone_artisanal",
    category: "pastry",
    family: "Festive Breads",
    variantName: "Artisanal Panettone",
    origin: { country: "Italy", region: "Northern Italy", period: "Traditional/Modern" },
    history:
      "Panettone is a rich, long-fermented festive bread with candied fruits and raisins, requiring precise sourdough or hybrid processes.",
    culturalContext:
      "Served around Christmas and festive seasons, now produced artisanal and industrially worldwide.",
    technicalProfile: {
      hydrationRange: [65, 75],
      saltRange: [1.5, 2.0],
      fatRange: [20, 30],
      sugarRange: [20, 30],
      preferment: "Multiple levain builds or stiff sourdough for structure and flavor.",
      flourStrength: "Very strong high-protein flour suitable for extreme enrichment",
      fermentation: {
        bulk: "Multiple dough stages over 12–24+ h",
        proof: "4–8 h at ~28–30°C in molds",
        coldRetard: "Used cautiously; temperature control is crucial"
      },
      oven: {
        type: "deck",
        temperatureC: [170, 190],
        notes: "Loaves are often cooled upside-down to prevent collapse."
      },
      recommendedUse: ["Festive sweet bread", "High-skill project baking"]
    },
    references: ["Modernist Bread", "Italian panettone master bakers"],
    isCanonical: true,
    source: "official"
  },

  // 37. Colomba Pasquale
  {
    id: "colomba_pasquale",
    category: "pastry",
    family: "Festive Breads",
    variantName: "Colomba Pasquale",
    origin: { country: "Italy", region: "Northern Italy", period: "20th century" },
    history:
      "Colomba is an Easter festive bread similar to panettone but shaped like a dove and topped with almond glaze and sugar.",
    culturalContext:
      "Consumed mainly at Easter in Italy and in Italian communities abroad.",
    technicalProfile: {
      hydrationRange: [65, 75],
      saltRange: [1.5, 2.0],
      fatRange: [20, 30],
      sugarRange: [20, 30],
      preferment: "Similar multi-stage sourdough or hybrid method as panettone.",
      flourStrength: "Very strong flour suitable for rich doughs",
      fermentation: {
        bulk: "Long multi-stage builds and first dough rise",
        proof: "4–8 h at warm temperature in dove-shaped molds",
        coldRetard: "Handled similarly to panettone with careful temperature control"
      },
      oven: {
        type: "deck",
        temperatureC: [170, 190],
        notes: "Topped with almond glaze and sugar before baking."
      },
      recommendedUse: ["Festive sweet bread for Easter"]
    },
    references: ["Modernist Bread", "Italian festive bread traditions"],
    isCanonical: true,
    source: "official"
  },

  // 38. Stollen
  {
    id: "stollen_german",
    category: "pastry",
    family: "Festive Breads",
    variantName: "German Stollen",
    origin: { country: "Germany", region: "Dresden and others", period: "Traditional" },
    history:
      "Stollen is a rich German Christmas bread with dried fruits, nuts and often marzipan, coated in butter and sugar.",
    culturalContext:
      "Associated with Christmas markets and holiday celebrations in Germany and beyond.",
    technicalProfile: {
      hydrationRange: [55, 65],
      saltRange: [1.5, 2.0],
      fatRange: [15, 30],
      sugarRange: [15, 30],
      preferment: "Can use sponge or direct dough with long maturation.",
      flourStrength: "Bread or strong all-purpose flour",
      fermentation: {
        bulk: "1–2 h at 24–26°C",
        proof: "60–90 min after shaping",
        coldRetard: "Resting after baking improves flavor; storage is part of process"
      },
      oven: {
        type: "electric_home",
        temperatureC: [170, 190],
        notes: "Heavily buttered and sugared after baking; improves with aging."
      },
      recommendedUse: ["Christmas bread", "Festive sweet loaf"]
    },
    references: ["Modernist Bread", "German baking traditions"],
    isCanonical: true,
    source: "official"
  },

  // 39. Yeasted Donuts
  {
    id: "yeasted_donuts",
    category: "pastry",
    family: "Fried Doughs",
    variantName: "Yeasted Ring Donuts",
    origin: { country: "United States", region: "Globalized", period: "20th century" },
    history:
      "Yeasted donuts are sweet, fried rings made from enriched dough, widely popular in coffee shops and bakeries.",
    culturalContext:
      "Served as sweet snacks and breakfast items, often glazed or filled.",
    technicalProfile: {
      hydrationRange: [60, 65],
      saltRange: [1.5, 2.0],
      fatRange: [10, 20],
      sugarRange: [10, 20],
      preferment: "Typically straight dough; some formulas use sponge.",
      flourStrength: "Bread flour or strong all-purpose flour",
      fermentation: {
        bulk: "1–2 h at 24–26°C",
        proof: "30–60 min after cutting, until light and puffy",
        coldRetard: "Often retarded for production convenience"
      },
      oven: {
        type: "fryer",
        temperatureC: [170, 180],
        notes: "Fried until golden on both sides, then glazed or sugared."
      },
      recommendedUse: ["Fried donuts", "Glazed or filled donuts"]
    },
    references: ["AIB fryer dough guidelines", "Professional donut literature"],
    isCanonical: true,
    source: "official"
  },

  // 40. Berliner / Bomboloni
  {
    id: "berliner_bomboloni",
    category: "pastry",
    family: "Fried Doughs",
    variantName: "Berliner / Bomboloni (Filled Donuts)",
    origin: { country: "Germany/Italy", region: "Europe-wide", period: "Traditional" },
    history:
      "Berliner and bomboloni are yeast-raised, fried doughnuts without central holes, typically filled with jams or creams.",
    culturalContext:
      "Sold in bakeries and cafes as filled pastries, often associated with festivals and holidays.",
    technicalProfile: {
      hydrationRange: [60, 65],
      saltRange: [1.5, 2.0],
      fatRange: [10, 20],
      sugarRange: [10, 20],
      preferment: "Usually straight dough or sponge-based enriched dough.",
      flourStrength: "Bread or strong pastry flour",
      fermentation: {
        bulk: "1–2 h at 24–26°C",
        proof: "30–60 min after shaping, until light",
        coldRetard: "Sometimes retarded overnight"
      },
      oven: {
        type: "fryer",
        temperatureC: [170, 180],
        notes: "Fried, cooled, then injected with fillings and dusted with sugar."
      },
      recommendedUse: ["Filled donuts", "Sweet fried pastries"]
    },
    references: ["European baking literature", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 41. Malasadas
  {
    id: "malasadas_fried_dough",
    category: "pastry",
    family: "Fried Doughs",
    variantName: "Malasadas",
    origin: { country: "Portugal / Hawaii", region: "Portuguese diaspora", period: "Traditional/Modern" },
    history:
      "Malasadas are Portuguese-origin fried doughnuts without holes, popularized in Hawaii and Portuguese communities.",
    culturalContext:
      "Served as sweet treats, especially around certain holidays and events.",
    technicalProfile: {
      hydrationRange: [60, 68],
      saltRange: [1.5, 2.0],
      fatRange: [10, 20],
      sugarRange: [10, 20],
      preferment: "Often straight enriched dough; some use sponge.",
      flourStrength: "Bread or strong all-purpose flour",
      fermentation: {
        bulk: "1–2 h at 24–26°C",
        proof: "30–60 min after shaping",
        coldRetard: "Optional for scheduling"
      },
      oven: {
        type: "fryer",
        temperatureC: [170, 180],
        notes: "Traditionally coated in sugar after frying."
      },
      recommendedUse: ["Fried sweet doughnuts", "Festive treats"]
    },
    references: ["Regional baking literature", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 42. Pita Bread
  {
    id: "pita_bread_flatbread",
    category: "flatbread",
    family: "Classic Flatbreads",
    variantName: "Pita Bread",
    origin: { country: "Middle East", region: "Levant and Mediterranean", period: "Ancient/Traditional" },
    history:
      "Pita is a pocket flatbread baked at high heat to create a characteristic internal cavity.",
    culturalContext:
      "Used for sandwiches, dips and wraps across Middle Eastern and Mediterranean cuisines.",
    technicalProfile: {
      hydrationRange: [60, 68],
      saltRange: [1.8, 2.2],
      fatRange: [0, 5],
      sugarRange: [0, 3],
      preferment: "Often direct dough; sometimes sponge-based.",
      flourStrength: "All-purpose or bread flour",
      fermentation: {
        bulk: "1–2 h at room temperature",
        proof: "Short bench rest after shaping",
        coldRetard: "Optional overnight bulk"
      },
      oven: {
        type: "deck",
        temperatureC: [260, 320],
        notes: "Very hot stone or deck encourages pocket formation."
      },
      recommendedUse: ["Pocket flatbread", "Wraps and sandwiches"]
    },
    references: ["Flatbread and Middle Eastern baking literature", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 43. Naan
  {
    id: "naan_flatbread",
    category: "flatbread",
    family: "Classic Flatbreads",
    variantName: "Naan (Yogurt-Enriched Flatbread)",
    origin: { country: "India / Central Asia", region: "South and Central Asia", period: "Traditional" },
    history:
      "Naan is a soft, leavened flatbread often enriched with yogurt or milk, traditionally baked in tandoor ovens.",
    culturalContext:
      "Served with curries and grilled dishes in Indian and related cuisines.",
    technicalProfile: {
      hydrationRange: [60, 70],
      saltRange: [1.5, 2.0],
      fatRange: [5, 15],
      sugarRange: [2, 8],
      preferment: "Yeast-based; sometimes uses yogurt as mild acidity and enrichment.",
      flourStrength: "All-purpose or bread flour",
      fermentation: {
        bulk: "1–2 h at warm room temperature",
        proof: "Short rest after shaping",
        coldRetard: "Optional overnight bulk for flavor"
      },
      oven: {
        type: "tandoor_or_hot_surface",
        temperatureC: [300, 450],
        notes: "Home versions use very hot cast iron pans or stones."
      },
      recommendedUse: ["Accompaniment to curries", "Flatbread for dipping"]
    },
    references: ["South Asian bread literature", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 44. Tortilla de Trigo
  {
    id: "wheat_tortilla",
    category: "flatbread",
    family: "Classic Flatbreads",
    variantName: "Wheat Flour Tortilla",
    origin: { country: "Mexico", region: "Northern Mexico and Southwest US", period: "Traditional/Modern" },
    history:
      "Wheat tortillas are unleavened or lightly leavened flatbreads used as carriers for fillings in Mexican and Tex-Mex cuisines.",
    culturalContext:
      "Used for tacos, burritos, quesadillas and many street-food formats.",
    technicalProfile: {
      hydrationRange: [50, 60],
      saltRange: [1.5, 2.0],
      fatRange: [5, 15],
      sugarRange: [0, 3],
      preferment: "Typically no preferment; chemical leaveners sometimes used.",
      flourStrength: "All-purpose or soft wheat flour",
      fermentation: {
        bulk: "Short rest after mixing (20–30 min)",
        proof: "No traditional yeast proofing steps",
        coldRetard: "Optional dough rest in fridge"
      },
      oven: {
        type: "griddle_or_pan",
        temperatureC: [180, 250],
        notes: "Cooked quickly on hot comal or skillet."
      },
      recommendedUse: ["Tortillas for tacos, wraps, quesadillas"]
    },
    references: ["Mexican flatbread literature", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 45. Arepa
  {
    id: "arepa_corn_flatbread",
    category: "flatbread",
    family: "Classic Flatbreads",
    variantName: "Arepa (Corn Flatbread)",
    origin: { country: "Venezuela/Colombia", region: "Northern South America", period: "Traditional" },
    history:
      "Arepas are corn-based flatbreads made from precooked corn flour, central to Venezuelan and Colombian cuisines.",
    culturalContext:
      "Griddled, baked or fried, then split and filled with a wide range of savory fillings.",
    technicalProfile: {
      hydrationRange: [60, 75],
      saltRange: [1.5, 2.0],
      fatRange: [0, 10],
      sugarRange: [0, 3],
      preferment: "None; relies on precooked corn flour hydration.",
      flourStrength: "Precooked corn flour (masa arepa), not wheat flour",
      fermentation: {
        bulk: "Short rest after mixing to hydrate flour",
        proof: "No fermentation in traditional formulas",
        coldRetard: "Optional rest in fridge for planning"
      },
      oven: {
        type: "griddle_or_pan",
        temperatureC: [160, 220],
        notes: "Cooked on griddle and sometimes finished in oven."
      },
      recommendedUse: ["Filled arepas", "Savory stuffed flatbreads"]
    },
    references: ["Latin American food literature", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 46. Injera
  {
    id: "injera_flatbread",
    category: "flatbread",
    family: "Classic Flatbreads",
    variantName: "Injera (Teff Sourdough Flatbread)",
    origin: { country: "Ethiopia/Eritrea", region: "Horn of Africa", period: "Traditional" },
    history:
      "Injera is a naturally fermented, spongy flatbread made primarily from teff flour, serving as both plate and utensil in Ethiopian cuisine.",
    culturalContext:
      "Used as the base for stews and dishes, torn by hand to scoop food.",
    technicalProfile: {
      hydrationRange: [100, 120],
      saltRange: [0, 1.5],
      fatRange: [0, 2],
      sugarRange: [0, 2],
      preferment: "Natural fermentation over several days with teff-based batter.",
      flourStrength: "Teff flour with possible blends",
      fermentation: {
        bulk: "Multi-day batter fermentation at ambient temperature",
        proof: "Short rest before ladling onto hot surface",
        coldRetard: "Ambient fermentation is traditional"
      },
      oven: {
        type: "griddle",
        temperatureC: [180, 220],
        notes: "Cooked on a large hot plate (mitad), no flipping."
      },
      recommendedUse: ["Base for Ethiopian/Eritrean meals"]
    },
    references: ["Ethiopian food literature", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 47. Lefse
  {
    id: "lefse_flatbread",
    category: "flatbread",
    family: "Classic Flatbreads",
    variantName: "Lefse (Potato Flatbread)",
    origin: { country: "Norway", region: "Scandinavia", period: "Traditional" },
    history:
      "Lefse is a thin, potato-based flatbread from Norway, rolled very thin and cooked on a griddle.",
    culturalContext:
      "Served with butter, sugar or savory fillings, especially in Scandinavian traditions.",
    technicalProfile: {
      hydrationRange: [50, 70],
      saltRange: [1.0, 2.0],
      fatRange: [5, 15],
      sugarRange: [0, 5],
      preferment: "None; relies on cooked potato mash and flour.",
      flourStrength: "All-purpose flour with mashed potatoes",
      fermentation: {
        bulk: "Resting of dough before rolling",
        proof: "No yeast fermentation in typical formulas",
        coldRetard: "Dough may be chilled for rolling convenience"
      },
      oven: {
        type: "griddle",
        temperatureC: [180, 220],
        notes: "Cooked quickly on hot griddles, turned once."
      },
      recommendedUse: ["Traditional Scandinavian flatbread", "Sweet or savory wraps"]
    },
    references: ["Scandinavian baking literature", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 48. Pretzel Dough
  {
    id: "pretzel_dough_classic",
    category: "bread",
    family: "Specialty Breads",
    variantName: "Pretzel Dough (Boiled-Alkaline)",
    origin: { country: "Germany", region: "Bavaria and others", period: "Traditional" },
    history:
      "Pretzels are shaped breads boiled briefly in alkaline solution before baking, giving a characteristic color and flavor.",
    culturalContext:
      "Eaten as snacks, with beer, or as street food across German-speaking regions and beyond.",
    technicalProfile: {
      hydrationRange: [55, 62],
      saltRange: [1.8, 2.2],
      fatRange: [0, 5],
      sugarRange: [0, 5],
      preferment: "Often straight dough; some use preferments.",
      flourStrength: "Bread flour or medium-strength wheat flour",
      fermentation: {
        bulk: "1–2 h at room temperature",
        proof: "Short proof before or after lye bath depending on method",
        coldRetard: "Frequently retarded for flavor and handling"
      },
      oven: {
        type: "deck",
        temperatureC: [220, 240],
        notes: "Dipped in alkaline solution (traditionally lye) before baking."
      },
      recommendedUse: ["Traditional pretzels", "Pretzel rolls and sticks"]
    },
    references: ["German baking literature", "Modernist Bread"],
    isCanonical: true,
    source: "official"
  },

  // 49. Bagels
  {
    id: "bagels_classic",
    category: "bread",
    family: "Specialty Breads",
    variantName: "Classic Boiled Bagels",
    origin: { country: "Poland/United States", region: "Jewish baking, New York", period: "Traditional/Modern" },
    history:
      "Bagels are dense, ring-shaped breads boiled before baking, originating from Eastern European Jewish communities and popularized in New York.",
    culturalContext:
      "Served with spreads like cream cheese and toppings such as smoked fish, widely found in bagel shops and bakeries.",
    technicalProfile: {
      hydrationRange: [55, 62],
      saltRange: [1.8, 2.2],
      fatRange: [0, 5],
      sugarRange: [2, 6],
      preferment: "Can be direct dough or use preferments; malt often included.",
      flourStrength: "High-gluten flour for chewy texture",
      fermentation: {
        bulk: "1–2 h at room temperature",
        proof: "Shaped rings are often retarded cold overnight",
        coldRetard: "Common cold proof before boiling and baking"
      },
      oven: {
        type: "deck",
        temperatureC: [220, 250],
        notes: "Boiled briefly (often with malt or baking soda) before baking."
      },
      recommendedUse: ["Bagels for breakfast and sandwiches"]
    },
    references: ["Modernist Bread", "Jewish and New York baking traditions"],
    isCanonical: true,
    source: "official"
  },

  // 46. Chicago Deep Dish
  {
    id: "chicago_deep_dish",
    category: "pizza",
    family: "American Pan Pizza",
    variantName: "Chicago Deep Dish",
    origin: { country: "United States", region: "Chicago", period: "1940s" },
    history:
      "Invented in Chicago, this style features a deep, buttery crust pressed into a pan, filled with cheese, toppings, and topped with chunky tomato sauce.",
    culturalContext:
      "A hearty, knife-and-fork meal, iconic to Chicago culinary culture.",
    technicalProfile: {
      hydrationRange: [50, 60],
      saltRange: [1.5, 2.0],
      fatRange: [15, 20], // High fat for biscuit-like texture
      sugarRange: [1, 3],
      preferment: "Direct dough, often with cornmeal or semolina in the blend.",
      flourStrength: "All-purpose or pastry/bread blend, lower protein for tenderness",
      fermentation: {
        bulk: "1–2 h at room temperature",
        proof: "20–40 min in pan",
        coldRetard: "Optional overnight"
      },
      oven: {
        type: "gas_deck",
        temperatureC: [200, 230],
        notes: "Long bake time (30-45 min) due to thickness and toppings."
      },
      recommendedUse: ["Deep dish pizza", "Casserole-style pizza"]
    },
    references: ["Modernist Pizza", "Chicago pizza history"],
    isCanonical: true,
    source: "official"
  },

  // 47. New Haven Apizza
  {
    id: "new_haven_apizza",
    category: "pizza",
    family: "American Artisan Pizza",
    variantName: "New Haven Style (Apizza)",
    origin: { country: "United States", region: "New Haven, CT", period: "1920s" },
    history:
      "Derived from Neapolitan pizza but baked in intense coal-fired ovens, resulting in a charred, oblong, thin crust.",
    culturalContext:
      "Served on paper sheets, known for 'mootz' (mozzarella) being a topping, not default.",
    technicalProfile: {
      hydrationRange: [60, 65],
      saltRange: [2.0, 2.5],
      fatRange: [1, 3],
      sugarRange: [0, 2],
      preferment: "Long cold fermentation, often direct or sponge.",
      flourStrength: "High-gluten bread flour",
      fermentation: {
        bulk: "24–48 h cold fermentation",
        proof: "1–2 h at room temperature",
        coldRetard: "Essential for flavor and char"
      },
      oven: {
        type: "coal_fired",
        temperatureC: [300, 350], // Coal ovens get very hot
        notes: "Coal-fired for distinct char and smokiness."
      },
      recommendedUse: ["Charred thin crust", "Clam pie"]
    },
    references: ["Modernist Pizza", "New Haven pizza lore"],
    isCanonical: true,
    source: "official"
  },

  // 48. St. Louis Style
  {
    id: "st_louis_thin",
    category: "pizza",
    family: "American Cracker Thin",
    variantName: "St. Louis Style",
    origin: { country: "United States", region: "St. Louis", period: "Mid 20th century" },
    history:
      "Known for its cracker-thin, unleavened (or barely leavened) crust and use of Provel cheese.",
    culturalContext:
      "Cut into squares ('tavern cut'), popular in the Midwest.",
    technicalProfile: {
      hydrationRange: [40, 50],
      saltRange: [1.5, 2.0],
      fatRange: [0, 2],
      sugarRange: [1, 3],
      preferment: "None. Often uses baking powder or very low yeast.",
      flourStrength: "All-purpose or pastry flour for crispness",
      fermentation: {
        bulk: "Minimal or none",
        proof: "None, rolled thin immediately",
        coldRetard: "Not typical"
      },
      oven: {
        type: "electric_deck",
        temperatureC: [230, 260],
        notes: "Baked on stone or screen for maximum crispness."
      },
      recommendedUse: ["Cracker crust pizza", "Party snacks"]
    },
    references: ["Modernist Pizza", "Midwest pizza traditions"],
    isCanonical: true,
    source: "official"
  },

  // 49. California Style
  {
    id: "california_style",
    category: "pizza",
    family: "American Artisan Pizza",
    variantName: "California Style",
    origin: { country: "United States", region: "California", period: "1980s" },
    history:
      "Popularized by chefs like Wolfgang Puck, focusing on gourmet, non-traditional toppings and a light, airy single-serving crust.",
    culturalContext:
      "Associated with 'California Cuisine', fresh local ingredients, and wood-fired cooking.",
    technicalProfile: {
      hydrationRange: [60, 68],
      saltRange: [2.0, 2.5],
      fatRange: [2, 5], // Olive oil often added
      sugarRange: [1, 3], // Honey often used
      preferment: "Direct dough or sponge, often with honey and olive oil.",
      flourStrength: "All-purpose or bread flour",
      fermentation: {
        bulk: "12–24 h cold retard",
        proof: "1–2 h at room temperature",
        coldRetard: "Common for flavor"
      },
      oven: {
        type: "wood_fired",
        temperatureC: [300, 400],
        notes: "Wood-fired for speed and flavor, but lower temp than Neapolitan."
      },
      recommendedUse: ["Gourmet personal pizzas", "Creative toppings"]
    },
    references: ["Modernist Pizza", "California cuisine history"],
    isCanonical: true,
    source: "official"
  },

  // 50. Japanese Shokupan
  {
    id: "japanese_shokupan",
    category: "enriched_bread",
    family: "Asian Milk Bread",
    variantName: "Japanese Shokupan (Milk Bread)",
    origin: { country: "Japan", region: "Nationwide", period: "20th century" },
    history:
      "A super-soft, fluffy white bread made using the Tangzhong (water roux) method to retain moisture and softness.",
    culturalContext:
      "The gold standard for sandwich bread in Japan, prized for its 'mochi-mochi' (chewy/soft) texture.",
    technicalProfile: {
      hydrationRange: [70, 78], // High hydration due to Tangzhong
      saltRange: [1.8, 2.0],
      fatRange: [6, 10], // Butter and milk fat
      sugarRange: [6, 12],
      preferment: "Tangzhong (cooked flour/water paste) + Yeast.",
      flourStrength: "High-protein bread flour",
      fermentation: {
        bulk: "1–2 h at room temperature",
        proof: "60–90 min in lidded or open pans",
        coldRetard: "Optional"
      },
      oven: {
        type: "electric_home",
        temperatureC: [180, 200],
        notes: "Baked gently to avoid thick crust; often lidded for square shape."
      },
      recommendedUse: ["Sandwiches", "Thick toast", "Dessert bread"]
    },
    references: ["Modernist Bread", "Asian baking techniques"],
    isCanonical: true,
    source: "official"
  }
];

// Transform Raw Canonical Data to DoughStyleDefinition
export const STYLES_DATA: DoughStyleDefinition[] = RAW_CANONICAL_STYLES.map(raw => {

  // Determine RecipeStyle Enum Mapping
  let recipeStyle = RecipeStyle.NEAPOLITAN; // Default fallback

  const id = raw.id;
  const cat = raw.category;

  // Mapping logic based on ID or Category
  if (id.includes('neapolitan')) recipeStyle = RecipeStyle.NEAPOLITAN;
  else if (id.includes('new_york')) recipeStyle = RecipeStyle.NEW_YORK;
  else if (id.includes('detroit')) recipeStyle = RecipeStyle.DETROIT;
  else if (id.includes('roman') || id.includes('teglia')) recipeStyle = RecipeStyle.ROMANA_TONDA; // Closest map
  else if (id.includes('scrocchiarella')) recipeStyle = RecipeStyle.THIN_CRUST;
  else if (id.includes('sicilian')) recipeStyle = RecipeStyle.SICILIANA; // Or SICILIAN
  else if (id.includes('grandma')) recipeStyle = RecipeStyle.GRANDMA_STYLE;
  else if (id.includes('baguette')) recipeStyle = RecipeStyle.BAGUETTE;
  else if (id.includes('ciabatta')) recipeStyle = RecipeStyle.CIABATTA;
  else if (id.includes('focaccia')) recipeStyle = RecipeStyle.FOCACCIA;
  else if (id.includes('brioche')) recipeStyle = RecipeStyle.BRIOCHE;
  else if (id.includes('burger')) recipeStyle = RecipeStyle.BURGER_BUN;
  else if (id.includes('cinnamon')) recipeStyle = RecipeStyle.CINNAMON_ROLL;
  else if (id.includes('cookie')) recipeStyle = RecipeStyle.COOKIES;
  else if (id.includes('rye')) recipeStyle = RecipeStyle.RYE;
  else if (id.includes('sourdough') || id.includes('levain') || id.includes('pain_de_campagne')) recipeStyle = RecipeStyle.SOURDOUGH;
  else if (id.includes('brazilian')) recipeStyle = RecipeStyle.PAO_FRANCES; // Close enough approximation for mapping
  else if (cat === 'flatbread') recipeStyle = RecipeStyle.FLATBREAD;
  else if (cat === 'pastry') recipeStyle = RecipeStyle.SWEETS_PASTRY;

  // Calculate Technical Values (Averages)
  const hydration = (raw.technicalProfile.hydrationRange[0] + raw.technicalProfile.hydrationRange[1]) / 2;
  const salt = (raw.technicalProfile.saltRange[0] + raw.technicalProfile.saltRange[1]) / 2;
  const oil = (raw.technicalProfile.fatRange[0] + raw.technicalProfile.fatRange[1]) / 2;
  const sugar = (raw.technicalProfile.sugarRange[0] + raw.technicalProfile.sugarRange[1]) / 2;
  const bakingTempC = (raw.technicalProfile.oven.temperatureC[0] + raw.technicalProfile.oven.temperatureC[1]) / 2;

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

  if (raw.technicalProfile.preferment.toLowerCase().includes('poolish')) {
    defaultTechnique = FermentationTechnique.POOLISH;
  } else if (raw.technicalProfile.preferment.toLowerCase().includes('biga')) {
    defaultTechnique = FermentationTechnique.BIGA;
  } else if (raw.technicalProfile.preferment.toLowerCase().includes('levain') || raw.technicalProfile.preferment.toLowerCase().includes('sourdough')) {
    allowedTechniques.push(FermentationTechnique.SOURDOUGH);
    defaultTechnique = FermentationTechnique.SOURDOUGH;
  }

  if (cat === 'cookie' || cat === 'flatbread') {
    // Cookies/Flatbreads often chemical or no ferment
    if (!allowedTechniques.includes(FermentationTechnique.NO_FERMENT)) allowedTechniques.push(FermentationTechnique.NO_FERMENT);
    if (!allowedTechniques.includes(FermentationTechnique.CHEMICAL)) allowedTechniques.push(FermentationTechnique.CHEMICAL);
  }


  return {
    id: raw.id,
    name: raw.variantName,
    family: raw.family,
    category: raw.category as any, // Cast to StyleCategory
    origin: raw.origin,
    country: raw.origin.country,
    year: raw.origin.period,
    description: raw.history.split('.')[0] + '.',
    history: raw.history,
    culturalContext: raw.culturalContext,
    isCanonical: raw.isCanonical,
    source: raw.source as any,
    isPro: ['neapolitan_avpn_classic', 'panettone_artisanal', 'colomba_pasquale'].includes(raw.id), // Some logic for Pro
    recipeStyle: recipeStyle,
    technical: {
      hydration,
      salt,
      oil,
      sugar,
      fermentation: raw.technicalProfile.fermentation.bulk,
      fermentationTechnique: defaultTechnique,
      bakingTempC
    },
    technicalProfile: {
      hydration: raw.technicalProfile.hydrationRange as [number, number],
      salt: raw.technicalProfile.saltRange as [number, number],
      oil: raw.technicalProfile.fatRange as [number, number],
      sugar: raw.technicalProfile.sugarRange as [number, number],
      flourStrength: raw.technicalProfile.flourStrength,
      fermentation: raw.technicalProfile.fermentation,
      ovenRecommendations: raw.technicalProfile.oven.notes,
      difficulty: "Medium", // Default
      recommendedUse: raw.technicalProfile.recommendedUse.join(', '),
      prefermentDescription: raw.technicalProfile.preferment
    },
    references: raw.references.map(ref => ({ source: ref })),
    allowedFermentationTechniques: allowedTechniques,
    defaultFermentationTechnique: defaultTechnique,
    ingredients: generatedIngredients,
    tags: raw.technicalProfile.recommendedUse
  };
});

export function getStyleById(id: string): DoughStyleDefinition | undefined {
  return STYLES_DATA.find(s => s.id === id);
}

export function getAllowedFermentationTechniques(style: RecipeStyle, bakeType: BakeType): FermentationTechnique[] {
  // Safety check: ensure we always return an array
  if (!style || !bakeType) {
    console.warn('[getAllowedFermentationTechniques] Missing parameters:', { style, bakeType });
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
