import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * SICILIAN / GRANDMA PAN PIZZA
 * 
 * Researched and validated content:
 * - 17th century Palermo sfincione origins
 * - Long Island early 20th century Grandma pizza evolution
 * - Technique: Cheese directly on dough (Grandma style)
 * - Texture: "Sfincione" (thick sponge) dialect meaning
 */
export const sicilian_grandma_pan: DoughStyleDefinition = {
  id: "sicilian_grandma_pan",
  name: "Sicilian/Grandma Pan Pizza",
  category: "pizza",
  recipeStyle: RecipeStyle.GRANDMA_STYLE,
  family: "Italian-American Pan Pizza",

  origin: {
    country: "Italy/United States",
    region: "Sicily, Italy / Long Island, New York",
    period: "17th century (sfincione) / Early 20th century (Grandma)"
  },

  description: "Sicilian pizza originated as 'sfincione' in 17th century Palermo, meaning 'thick sponge.' Grandma pizza is its Italian-American descendant, created by Long Island grandmothers in the early 20th century using home ovens and sheet pans to recreate their homeland's flavors.",

  history: "Sicilian pizza traces back to 17th century Palermo as 'sfincione,' becoming popular in western Sicily by the mid-19th century. Traditional sfincione featured thick, spongy, focaccia-like crust topped with onions sautéed in olive oil, anchovies, tomatoes, herbs, and hard sheep's milk cheese like caciocavallo. When Italian immigrants brought sfincione to America, particularly New York, it evolved into American Sicilian pizza with mozzarella replacing traditional cheeses. Grandma pizza emerged in early 20th century Long Island as first-generation Italian-American grandmothers adapted sfincione to home kitchens, using standard sheet pans and home ovens. The term 'Grandma pizza' gained wider recognition in the mid-1990s. Unlike thick Sicilian, Grandma pizza is thinner with a crispier bottom from olive oil-coated pans, and often features cheese placed directly on dough before sauce.",

  difficulty: "Medium",
  fermentationType: "direct",

  base_formula: [
    { name: "Bread flour", percentage: 100 },
    { name: "Water", percentage: 70 },
    { name: "Salt", percentage: 2.2 },
    { name: "Olive oil", percentage: 4 },
    { name: "Sugar", percentage: 1.5 },
    { name: "Dry yeast", percentage: 0.5 }
  ],

  technicalProfile: {
    hydration: [65, 75],
    salt: [2, 2.5],
    oil: [3, 6],
    sugar: [1, 3],
    flourStrength: "Bread flour, 12-13% protein for structure",
    ovenTemp: [220, 260],
    recommendedUse: [
      "Family-style square pizza for gatherings",
      "Hearty meal pizza with substantial toppings"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 850, min: 600, max: 1200 },
    fermentationSteps: [
      "Mix: Combine bread flour, water, yeast, salt, sugar, and olive oil until smooth. [Science: Bread flour provides structure to support thick, heavy toppings]",
      "Bulk Fermentation: 1-2 hours at room temperature. [Science: Initial yeast activity develops gas and flavor]",
      "Pan Proof: Transfer to heavily oiled sheet pan and proof for 2-4 hours. [Science: Dough rises to fill pan, creating characteristic 'sfincione' sponginess]",
      "Layer: For Grandma style, place cheese directly on dough before adding sauce. [Science: Prevents moisture from making the thick crust soggy in the center]",
      "Bake: 425-475°F for 15-25 minutes. [Science: Moderate temperature allows even cooking through the thick layer of dough]",
      "Rest: Allow to rest in pan for 5 minutes. [Science: Helps the spongy crumb structure set before cutting]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W280-320 (Moderate-high strength)",
      pl_ratio: "0.55-0.65 (Balanced)",
      absorption_capacity: "Moderate to high (65-75%)",
      protein_type: "Bread flour with strong gluten network",
      science_explanation: "High-protein bread flour is essential to support the weight of the dough as it rises in the pan and to hold up under substantial toppings without collapsing the airy crumb"
    },
    thermalProfile: {
      oven_type: "Conventional or deck oven with sheet pan",
      heat_distribution: "Moderate conduction from pan bottom, even air circulation",
      crust_development: "Crispy, olive oil-fried bottom with tender, bready sides",
      crumb_structure: "Thick, spongy, focaccia-like crumb with medium-sized alveoli"
    },
    fermentationScience: {
      yeast_activity: "Standard active fermentation",
      ph_target: "pH 5.4 - 5.7",
      organic_acids: "Balanced lactic and acetic profile",
      enzymatic_activity: "Moderate; long pan proof allows for gradual sugar conversion and flavor development"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Heavy olive oil coating is key",
        explanation: "The pan should be generously coated in olive oil. This essentially 'fries' the bottom of the crust, creating a crispy, golden texture that contrasts perfectly with the spongy interior."
      },
      {
        tip: "Grandma style: cheese before sauce",
        explanation: "By placing a thin layer of sliced mozzarella directly on the dough before the sauce, you create a barrier that prevents the sauce from soaking into the dough and making it gummy."
      },
      {
        tip: "The pan proof is non-negotiable",
        explanation: "Allow the dough to proof in the pan for at least 2-3 hours. This is what creates the 'sfincione' (sponge) texture. If you bake too soon, the pizza will be dense and heavy."
      },
      {
        tip: "Use a heavy-duty sheet pan",
        explanation: "High-quality steel or aluminum pans provide better heat conduction than thin consumer pans, ensuring a more even bake and a crispier bottom."
      },
      {
        tip: "Teaching the generation",
        explanation: "Grandma pizza is traditionally a family ritual. Passing down the technique of dimpling the dough and layering the sauce in 'streaks' preserves the homespun character of the style."
      }
    ],
    what_if: [
      {
        scenario: "Dough doesn't reach the corners of the pan",
        result: "Dough is too cold or gluten is too tight",
        correction: "Let the dough rest for 15 minutes and try stretching it again; ensure it's at room temperature before panning."
      },
      {
        scenario: "Center of the pizza is gummy/unbaked",
        result: "Too much sauce or under-baked",
        correction: "Use the cheese-first layer technique and extend bake time; ensure the oven is fully preheated."
      },
      {
        scenario: "Bottom is pale instead of crispy",
        result: "Insufficient oil in the pan",
        correction: "Be more generous with olive oil on the pan surface next time; check if the oven's bottom heat is sufficient."
      },
      {
        scenario: "Crust is dense like a biscuit",
        result: "Under-proofed in the pan",
        correction: "Extend the pan proofing time until the dough has doubled in height and looks bubbly."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Neapolitan",
        difference: "Sicilian is thick and spongy; Neapolitan is thin with puffy edges",
        why_choose_this: "Choose Sicilian for a heartier, more filling meal that feeds a crowd."
      },
      {
        target_style: "Detroit Style",
        difference: "Sicilian is softer; Detroit has signature crispy cheese edges (frico) from blue steel pans",
        why_choose_this: "Choose Sicilian/Grandma for an Italian-American home-style feel with less fat than Detroit."
      },
      {
        target_style: "Focaccia",
        difference: "Sicilian pizza is significantly topped; focaccia is usually a simpler flatbread focused on oil and salt",
        why_choose_this: "Choose Sicilian when you want the breadiness of focaccia combined with a full pizza topping set."
      }
    ],
    q_and_a: [
      {
        question: "What's the difference between Sicilian and Grandma pizza?",
        answer: "Sicilian pizza (sfincione) is the original thick, spongy pizza from Sicily. Grandma pizza is an Italian-American adaptation—it's thinner than Sicilian, crispier on the bottom, and typically features cheese placed directly on the dough before sauce.",
        context: "Style variations"
      },
      {
        question: "Why is it called 'Grandma pizza'?",
        answer: "The name honors Italian-American grandmothers who created this style in their home kitchens using standard sheet pans and home ovens, adapting traditional Sicilian recipes to available American ingredients.",
        context: "Culture/History"
      },
      {
        question: "What does 'sfincione' mean?",
        answer: "Sfincione is a Sicilian dialect word meaning 'thick sponge,' describing the characteristic thick, spongy, focaccia-like texture of the original Sicilian pizza.",
        context: "Etymology"
      },
      {
        question: "Does Sicilian pizza always have anchovies?",
        answer: "Traditional Sicilian 'sfincione' almost always includes anchovies and onions. Americanized Sicilian/Grandma styles often omit them in favor of standard mozzarella and pepperoni.",
        context: "Toppings"
      },
      {
        question: "Can I use sourdough for this style?",
        answer: "Yes, many modern 'artisanal' Sicilian pizzerias use sourdough to add more complex acidity and improve digestibility, though commercial yeast is traditional for the 'Grandma' home style.",
        context: "Fermentation"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Ideal",
        notes: "The traditional home method for Grandma pizza. Fast and reliable results for same-day baking."
      },
      {
        method: "Hybrid",
        suitability: "Authentic",
        notes: "Cold Retard. Standard in pizzerias to develop more flavor and better 'sfincione' crumb structure."
      },
      {
        method: "Poolish",
        suitability: "Possible",
        notes: "Can be used to increase extensibility if you are using high-protein flour and want a very airy crumb."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Sicilian pizza uses moderate to high hydration (65-75%) to achieve the 'thick sponge' texture. Higher hydration allows for more steam production during baking, which creates the large bubbles and light weight characteristic of sfincione despite its height.",
    methodSuitability: {
      direct: { suitable: true, notes: "Excellent for capturing the classic Italian-American Sunday dinner flavor profile." },
      biga: { suitable: true, notes: "Great for adding structural strength to a very high hydration version (75%+)." },
      poolish: { suitable: true, notes: "Improves extensibility, making it easier to press the dough into the corners of the pan." }
    },
    whatIf: [
      {
        scenario: "You use high-protein flour with low hydration",
        outcome: "The pizza will be tough and bread-like rather than spongy and light",
        solution: "Increase hydration or use a blend of bread and all-purpose flour"
      },
      {
        scenario: "You skip the olive oil in the pan",
        outcome: "The dough will likely stick and you will miss the characteristic 'fried' bottom crunch",
        solution: "Always use at least 20-30g of olive oil for a standard half-sheet pan"
      },
      {
        scenario: "You put the pizza in a cold oven",
        outcome: "The dough won't get the 'oven spring' needed for lightness, resulting in a dense cake",
        solution: "Preheat for at least 45-60 minutes, ideally with a baking steel or stone underneath the pan"
      }
    ],
    comparisons: [
      {
        vsStyle: "Sfincione Palermitano",
        difference: "Sfincione uses hard sheep cheese (caciocavallo) and onions; American Sicilian uses mozzarella and is more topping-diverse"
      },
      {
        vsStyle: "Bakery Pizza",
        difference: "Bakery pizza is often sold at room temperature and is denser; Sicilian/Grandma is served hot and is spongier"
      }
    ],
    proTips: [
      "Use 'Saporito' style heavy pizza sauce for an authentic New York Sicilian flavor",
      "Dimple the dough deep with your fingertips before topping to hold the oil and sauce",
      "Traditional sfincione seasoning includes toasted breadcrumbs on top",
      "Long Island 'Grandma' pans are often seasoned steel rather than aluminum",
      "The 1990s marked the transition of Grandma style from a home secret to a pizzeria staple"
    ]
  },

  tags: ["sicilian", "pan pizza", "grandma style", "sfincione", "square pizza"],

  watchouts: [
    "Over-proofing causes dough to collapse, losing airy texture",
    "Insufficient olive oil results in stuck dough and pale bottom",
    "Too much sauce makes thick crust soggy in center",
    "Dough too cold when panning makes corners hard to fill",
    "Under-baking leaves the center gummy"
  ],

  notes: [
    "Sfincione means 'thick sponge' in Sicilian dialect",
    "Grandma pizza named after Italian-American grandmothers who created it",
    "Cheese-before-sauce is signature Grandma pizza technique",
    "Traditionally cut into squares/rectangles, never wedges",
    "Immersion blender sauce (pulsed) keeps the tomatoes vibrant"
  ],

  recommendedFlavorComponents: ["mozzarella_low_moisture", "tomato_sauce_cooked", "oregano_dried", "anchovies", "cebola", "azeitonas"],

  references: [
    {
      source: "Sicilian Pizza and Grandma Pizza History",
      url: "https://en.wikipedia.org/wiki/Sicilian_pizza"
    },
    {
      source: "Goldbelly - Grandma Pizza Guide",
      url: "https://www.goldbelly.com/digest/what-is-grandma-style-pizza/"
    },
    {
      source: "Modernist Pizza",
      url: "https://modernistcuisine.com/books/modernist-pizza/",
      author: "Nathan Myhrvold, Francisco Migoya",
      year: "2021"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/sicilian-grandma-pan-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  }
};
