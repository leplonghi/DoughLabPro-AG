import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * BRAZILIAN PIZZERIA (SÃO PAULO STYLE)
 * 
 * Researched and validated content:
 * - Origin: São Paulo, Brazil (First pizzeria: 1897 Santa Genoveva; Modern boom late 1960s)
 * - Technique: Heavy toppings, 'Borda Recheada' (Stuffed Crust), Gas Deck/Wood-fired
 * - Ingredients: Brazilian Flour (Medium W), Olive Oil, Sugar (for browning), High topping volume
 * - Characteristics: Sturdy base, ultra-soft crust (often with Catupiry), iconic 'Portuguese' flavor
 */
export const brazilian_pizzeria_gas_deck: DoughStyleDefinition = {
  id: "brazilian_pizzeria_gas_deck",
  name: "Brazilian Pizzeria (Standard)",
  category: "pizza",
  recipeStyle: RecipeStyle.PAN_PIZZA, // Often heavy like a pan but baked as a round disc
  family: "São Paulo Traditional",

  origin: {
    country: "Brazil",
    region: "São Paulo / National",
    period: "1897 (First pizzeria) / 1960s (Modern commercial boom)"
  },

  description: "Brazilian Pizza is a unique global phenomenon, characterized by its extreme abundance of toppings and the invention of the 'Borda Recheada' (stuffed crust). In São Paulo, which produces over 1 million pizzas daily, the style evolved from Italian roots but diverged to favor softer, oil-enriched doughs that can support heavy layers of mozzarella, calabrese sausage, and the iconic Catupiry cheese. It is a social food, always shared, and traditionally served with a knife and fork.",

  history: "The story began in the Brás neighborhood of São Paulo with Italian immigrants. The oldest recorded pizzeria, 'Cantina Castelões', opened in 1924 and remains active. However, the 'Brazilian identity' truly solidified in the 1960s and 70s as local ingredients like Catupiry (created in 1911) and Calabresa (a local modification of Italian salumi) became standard. Brazilians further innovated by adding hard-boiled eggs, corn, and hearts of palm. The 'Borda Recheada' was born in the 1980s, turning the discarded edge into a sought-after part of the meal filled with cream cheese or chocolate.",

  difficulty: "Medium",
  fermentationType: "direct",

  base_formula: [
    { name: "Soft/Medium Bread Flour (Type 0, W220-240)", percentage: 100 },
    { name: "Water", percentage: 58 },
    { name: "Salt", percentage: 2 },
    { name: "Extra Virgin Olive Oil (or Soybean Oil)", percentage: 4 },
    { name: "Sugar", percentage: 2 },
    { name: "Fresh Yeast", percentage: 2 }
  ],

  technicalProfile: {
    hydration: [55, 62], // Relatively low to handle the weight of toppings
    salt: [1.8, 2.2],
    oil: [2, 5], // Oil is used to achieve a soft, 'fatty' crumb that doesn't dry out
    sugar: [1, 3], // Necessary for browning in gas deck ovens (280-320°C)
    flourStrength: "Medium (W200-240). High strength is avoided to prevent the dough from being too 'rubbery' for local tastes",
    ovenTemp: [280, 340],
    recommendedUse: [
      "Neighborhood 'Disk-Pizza' delivery",
      "Traditional Rodízio (All-you-can-eat)",
      "Stuffed Crust specialty pies"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 400, min: 350, max: 450 }, // Heavier balls for larger 35cm pizzas
    fermentationSteps: [
      "Mixing: Combine all ingredients. Develop gluten until smooth but not 'glassy'. [Science: Over-kneading makes the dough too elastic for the heavy topping load]",
      "Bulk Rise: 1-2 hours at room temperature. [Science: Short bulk is traditional for typical neighborhood pizzerias focusing on speed]",
      "Balling: Divide into 400g balls. [Science: Provides enough dough for a thick, bread-like structure that supports 600g+ of topping]",
      "Final Proof: 2 to 4 hours at room temperature or 24h cold. [Science: Cold proofing is rare in traditional shops but increasingly used in 'Artisanal' Brazilian spots to improve digestibility]",
      "Stretching: Hand-stretched or rolled with a pin (Mattarello) for 'Pizza de Massa Fina'. [Science: Brazilian style often features a flat, uniform thickness except for the stuffed edge]",
      "Borda Recheada (Optional): Fold the edge over a strip of Catupiry or chocolate. [Science: The high fat content of the filling prevents the edge from becoming a dry biscuit during baking]",
      "Baking: Bake in a wood-fired or gas deck oven until the cheese is bubbling and the bottom is golden. [Science: The sugar in the dough ensures a deep bronze color even at lower commercial temperatures]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W220-250 (Medium Strength)",
      pl_ratio: "0.50-0.65 (Balanced)",
      absorption_capacity: "Moderate (55-60%)",
      protein_type: "Brazilian soft wheat with moderate extensibility",
      science_explanation: "Higher protein flours are unnecessary because the dough doesn't undergo extreme fermentation times and needs to be soft and 'bread-like' rather than crispy or airy."
    },
    thermalProfile: {
      oven_type: "Gas Deck Oven (most common) or Wood-fired refractory",
      heat_distribution: "Moderate floor heat (280°C) to allow the heavy toppings to cook through without burning the bottom",
      crust_development: "Soft, golden, almost doughy; focuses on the Maillard reaction from sugar more than enzymatic breakdown",
      crumb_structure: "Tight, bread-like, and uniform with few large air pockets"
    },
    fermentationScience: {
      yeast_activity: "High; traditional recipes use a large amount of yeast to ensure a fast, reliable rise in high-volume shops",
      ph_target: "pH 5.4 - 5.6",
      organic_acids: "Low acidity; flavor is primarily from the added fat and the large volume of complex toppings",
      enzymatic_activity: "Low due to short fermentation; sugar is added to compensate for the lack of natural maltose production."
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Balance the Weight",
        explanation: "Brazilian pizzas are very heavy. Ensure the dough is slightly thicker in the center than a Neapolitan, or the slice will collapse when lifted."
      },
      {
        tip: "The Catupiry Rule",
        explanation: "Real Catupiry doesn't melt into a puddle; it holds its shape (concentric circles) in the oven. If the cheese vanishes, it's a 'requeijão' of lower quality."
      },
      {
        tip: "Sugar is the Secret",
        explanation: "If baking at home (250°C), increasing the sugar to 3% ensures you get that professional 'delivery pizza' golden color."
      },
      {
        tip: "Borda Perfection",
        explanation: "Always seal the stuffed crust with a bit of egg-wash or water, and prick the edge with a fork to prevent air bubbles from exploding inside the 'borda'."
      },
      {
        tip: "Olive Oil finish",
        explanation: "In Brazil, it is traditional to pour a generous amount of extra virgin olive oil over the pizza *after* it comes out of the oven, never before."
      }
    ],
    what_if: [
      {
        scenario: "The 'Borda' is raw inside",
        result: "The filling was too cold or the edge was too thick",
        correction: "Let the filling reach room temperature before shaping, and roll the dough thinner at the edges before folding."
      },
      {
        scenario: "The pizza is soggy in the middle",
        result: "Too many wet toppings (like tomatoes or poorly drained hearts of palm)",
        correction: "Drain all canned vegetables for at least 30 minutes and use a higher heat setting for the bottom of the oven."
      },
      {
        scenario: "The dough is too chewy/rubbery",
        result: "Flour was too strong (high protein) or over-kneaded",
        correction: "Switch to a standard 'All-Purpose' style flour and reduce the mixing time by 2-3 minutes."
      }
    ],
    comparative_analysis: [
      {
        target_style: "New York Style",
        difference: "NY is crispier and focuses on cheese/sauce ratio; Brazilian is softer and focuses on variety and volume of toppings.",
        why_choose_this: "Choose Brazilian when you want a 'meal' on a crust with diverse flavors like Portuguese or Frango com Catupiry."
      },
      {
        target_style: "Neapolitan",
        difference: "Neapolitan is a sparse, minimalist 'live' dough; Brazilian is a maximalist, bread-like vehicle for toppings.",
        why_choose_this: "Choose Brazilian for parties and family gatherings where value and variety are prioritized."
      },
      {
        target_style: "Sicilian",
        difference: "Sicilian is thick and square (pan); Brazilian is thick but round (usually) and has the unique stuffed edge.",
        why_choose_this: "Choose Brazilian for the iconic 'Borda Recheada' experience."
      }
    ],
    q_and_a: [
      {
        question: "Why use a knife and fork?",
        answer: "The sheer weight of the 600-800g of toppings on a single pizza makes it impossible to eat by hand without a mess.",
        context: "Culture"
      },
      {
        question: "What is 'Calabresa'?",
        answer: "It's a Brazilian cured sausage inspired by Italian Calabria salumi, but typically milder and always sliced very thin for pizza.",
        context: "Ingredients"
      },
      {
        question: "Is 'Borda Recheada' mandatory?",
        answer: "No, but it accounts for over 50% of orders in many São Paulo pizzerias. It can be savory or sweet (Brigadeiro).",
        context: "Trends"
      },
      {
        question: "Why added sugar in the dough?",
        answer: "Commercial gas ovens bake at lower temps than wood-fired ones; sugar ensures the dough browns before the toppings overcook.",
        context: "Science"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "The industry standard for 90% of pizzerias in Brazil."
      },
      {
        method: "Hybrid",
        suitability: "Ideal",
        notes: "Growing 'Premium' trend in Brazil, using 24-48h cold retard for better flavor."
      },
      {
        method: "Sourdough",
        suitability: "Possible",
        notes: "Gaining popularity in high-end spots in São Paulo (Pinheiros/Itaim areas)."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Hydration is kept moderate (58%) because a wetter dough would be too fragile to handle the 'stuffing' of the crust and the heavy load of diverse toppings common in Brazil.",
    methodSuitability: {
      direct: { suitable: true, notes: "Best for high-volume production." },
      biga: { suitable: false, notes: "Adds too much chewiness; local palate prefers a softer bite." },
      poolish: { suitable: true, notes: "Sometimes used to improve dough stretch without adding toughness." }
    },
    whatIf: [
      {
        scenario: "You use milk instead of water",
        outcome: "The dough will be even softer and brown even faster. Very common in 'Grandma-style' Brazilian home recipes.",
        solution: "Replace 30% of the water with whole milk."
      }
    ],
    comparisons: [
      {
        vsStyle: "Paulistana vs Carioca",
        difference: "São Paulo (Paulistana) favors medium-thick crust and extreme toppings; Rio (Carioca) historically favored thinner crusts and often adds ketchup/mustard (heresy in SP!)."
      }
    ],
    proTips: [
      "Sauté the onions and calabresa briefly before putting them on the pizza for extra flavor.",
      "A single black olive in the center of each slice is the signature of a traditional São Paulo delivery pizza.",
      "If the 'Borda' is bursting, it means the filling had too much air—pipe it tightly.",
      "Use a blend of Mozzarella and Prato cheese for a truly authentic 'Brazilian budget' flavor.",
      "Always use 'Orégano' only *after* the pizza leaves the oven to prevent it from tasting bitter."
    ]
  },

  tags: ["brazilian", "pizza", "paulista", "catupiry", "stuffed crust", "maximalist"],

  watchouts: [
    "Too much sauce? The bottom will stay raw under the heavy cheese.",
    "Borda not sealed? The cheese will leak out and smoke the oven.",
    "Wrong flour? High protein flours make the pizza too tough and hard to chew.",
    "Topping overload? If the weight is too high, the dough won't rise in the center."
  ],

  notes: [
    "World capital of pizza consumption (claim).",
    "Borda Recheada (Stuffed Crust) icon.",
    "Soft, bread-like enriched dough.",
    "High topping volume (Maximalist).",
    "Served with knife and fork traditionally."
  ],

  references: [
    {
      source: "A Cozinha Paulista - Ari Valter do Carmo",
      url: "https://www.estantevirtual.com.br/livros/ari-valter-do-carmo/a-cozinha-paulista/135965410",
      author: "Ari Valter do Carmo",
      year: "2004"
    },
    {
      source: "Castelões: A Pizzeria Mais Antiga do Brasil",
      url: "https://www.cantinacasteloes.com.br/",
      author: "Família Donato",
      year: "2023"
    },
    {
      source: "Catupiry - A História de um Ícone Brasileiro",
      url: "https://www.catupiry.com.br/nossa-historia/",
      author: "Laticínios Catupiry",
      year: "2023"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/brazilian-pizzeria-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["mozzarella_low_moisture", "tomato_sauce_cooked", "calabresa", "catupiry", "onions_fresh", "boiled_eggs", "oregano_dried"]
};
