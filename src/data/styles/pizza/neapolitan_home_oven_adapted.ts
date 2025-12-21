import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * NEAPOLITAN HOME OVEN ADAPTED
 * 
 * Researched and validated content:
 * - Origin: Global (Baking communities, 21st century)
 * - Technique: High Hydration, Sugar/Oil supplementation, Steel/Stone baking
 * - Ingredients: Bread Flour (Medium-high W), Malt/Sugar, Oil
 * - Characteristics: Soft, charred (mimicked), manageable at 250°C
 */
export const neapolitan_home_oven_adapted: DoughStyleDefinition = {
  id: "neapolitan_home_oven_adapted",
  name: "Neapolitan (Home Oven Adapted)",
  category: "pizza",
  recipeStyle: RecipeStyle.NEAPOLITAN_HOME,
  family: "Neapolitan Adaptation",

  origin: {
    country: "Global",
    region: "Home Kitchens",
    period: "Early 2010s (Rise of Modernist Bread & Baking Steels)"
  },

  description: "The Neapolitan Home Oven style is a technical masterpiece of adaptation. Traditional Neapolitan dough (Flour, Water, Salt, Yeast) fails in home ovens because the low temperature (250-275°C) results in a pale, dry, and crunchy crust rather than a soft, charred one. This adapted style uses high hydration (65-70%) and small amounts of sugar and oil to mimic the texture and appearance of a 450°C wood-fired bake in a domestic setting.",

  history: "The development of this style was driven by massive online communities like PizzaMaking.com and influencers like Ken Forkish and J. Kenji López-Alt. In the 2010s, the introduction of the 'Baking Steel' (a heavy plate of carbon steel) revolutionized home baking by providing the surface conductivity needed to cook a pizza in under 5 minutes. This style represents the 'Hobbyist' movement, where science is used to overcome the thermal limitations of standard household equipment.",

  difficulty: "Medium",
  fermentationType: "cold",

  base_formula: [
    { name: "Bread Flour (W280-300)", percentage: 100 },
    { name: "Water", percentage: 68 },
    { name: "Fine Sea Salt", percentage: 2.5 },
    { name: "Extra Virgin Olive Oil", percentage: 2 },
    { name: "Honey or Sugar", percentage: 1.5 },
    { name: "Instant Yeast", percentage: 0.5 }
  ],

  technicalProfile: {
    hydration: [65, 75], // High hydration compensates for evaporation in the longer bake
    salt: [2, 3],
    oil: [1, 4], // Oil is mandatory to keep the crumb soft during a 5+ minute bake
    sugar: [1, 2], // Essential for the Maillard reaction at household temperatures
    flourStrength: "Medium-Strong. Bread flour is often better than '00' in home ovens because it browns more easily",
    ovenTemp: [250, 280],
    recommendedUse: [
      "Standard Kitchen Oven baking",
      "Learning Neapolitan techniques",
      "Weekly family pizza night"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 250, min: 230, max: 280 },
    fermentationSteps: [
      "Mixing (Autolyse): Mix flour and water and let rest for 30 minutes. [Science: Hydrates the flour and kickstarts enzyme activity without mechanical stress]",
      "Incorporate Yeast & Sugar: Add honey/sugar and yeast. Mix until a rough dough forms. [Science: Sugar provides food for the yeast and ensures browning in the oven]",
      "Second Mix & Oil: Add salt, then incorporate oil slowly. [Science: The oil acts as a tenderizer for the crumb]",
      "Bulk Rise: 2 hours at room temperature, with 'Stretch & Folds' every 30 mins. [Science: Develops gluten strength in a high-hydration dough without a professional mixer]",
      "Cold Retard: 24 to 72 hours at 4°C. [Science: Essential for flavor development and making the wet dough easier to handle]",
      "Balling: Shape into 250g balls. Let rest for 4-5 hours at room temperature. [Science: The dough must be fully relaxed to prevent it from 'snapping back' into a thick disc]",
      "Baking (Steel/Stone): Preheat a Baking Steel for 1 hour. Launch the pizza. [Science: The high thermal mass and conductivity of steel provide the 'oven spring' that domestic air temperature alone cannot]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W280-320 (Medium-Strong)",
      pl_ratio: "0.50-0.60 (Extensible)",
      absorption_capacity: "High (65-72%)",
      protein_type: "Strong soft wheat or standard Bread Flour",
      science_explanation: "Unlike authentic '00' which is designed for intense heat, bread flour has a higher amylase content and more surface sugars, which helps in browning during the longer home bake cycle."
    },
    thermalProfile: {
      oven_type: "Conventional Domestic Oven (Electric or Gas)",
      heat_distribution: "Mostly convection and radiation; conduction is limited to the stone/steel surface",
      crust_development: "Softer than a cracker but slightly crustier than a 60-second Neapolitan",
      crumb_structure: "Medium-airy, moist, and tender due to the oil and high hydration"
    },
    fermentationScience: {
      yeast_activity: "Standard; enhanced by the added sugar/honey",
      ph_target: "pH 5.4 - 5.6",
      organic_acids: "Lactic focus; the cold rest is vital to balance the sweetness of the added sugars",
      enzymatic_activity: "High; amylase activity is encouraged to ensure enough simple sugars are available for the Maillard reaction at 250°C."
    }
  },

  education: {
    pro_tips: [
      {
        tip: "The Baking Steel",
        explanation: "If you want true 'Neapolitan' results at home, buy a Baking Steel. It conducts heat 18x faster than a ceramic stone, giving you the bubbles and char you crave."
      },
      {
        tip: "The Broiler (Grill) Method",
        explanation: "Preheat the oven on standard, then switch to the 'Broiler' (top heating element) right before launching the pizza. This mimics the intense radiation of a wood-fired dome."
      },
      {
        tip: "Don't use Fresh Buffalo Mozzarella",
        explanation: "It has too much water for a 6-minute bake. Use low-moisture fior di latte or 'pizza cheese' to prevent the 'soup' effect in center of the pizza."
      },
      {
        tip: "Honey for Color",
        explanation: "Honey contains fructose, which browns at a lower temperature than table sugar. It's the secret for achieving a beautiful color at 240°C."
      },
      {
        tip: "Stretch with Semolina",
        explanation: "High hydration dough is sticky. Using semolina (rimacinata) for dusting makes the pizza 'glide' off the peel and onto the stone perfectly."
      }
    ],
    what_if: [
      {
        scenario: "The pizza is dry and stiff like a biscuit",
        result: "Hydration was too low or bake was too long",
        correction: "Increase hydration to 70% and reduce the bake time by using a preheated steel/stone on the top rack."
      },
      {
        scenario: "The bottom is white and soft",
        result: "The stone/steel wasn't preheated long enough",
        correction: "Preheat for at least 60 minutes. Use an infrared thermometer to ensure the surface is at least 250°C."
      },
      {
        scenario: "The dough tears when stretching",
        result: "Over-proofed or dough was too cold",
        correction: "Always let the refrigerated dough sit at room temperature for at least 4 hours before stretching."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Authentic Neapolitan",
        difference: "Home-adapted uses oil/sugar and has a longer bake (5 mins vs 90s); Authentic is lean and flash-baked.",
        why_choose_this: "Choose this when you don't have a specialized 450°C pizza oven but want a similar look and feel."
      },
      {
        target_style: "New York Style",
        difference: "Home-adapted is usually smaller, has a more puffy Neapolitan-style edge, and uses higher hydration.",
        why_choose_this: "Choose this for an 'artisanal' Neapolitan aesthetic in a home kitchen."
      },
      {
        target_style: "California Style",
        difference: "Both use oil and are baked at lower temps, but California style is often 'breadier' and uses more diverse, non-traditional toppings.",
        why_choose_this: "Choose Home-adapted if you want to stay close to Italian tradition while using domestic equipment."
      }
    ],
    q_and_a: [
      {
        question: "Why add sugar?",
        answer: "In a domestic oven, the dough stays in too long. Sugar ensures it browns beautifully before the inside becomes too dry.",
        context: "Baking"
      },
      {
        question: "Stone or Steel?",
        answer: "Steel is superior for low temperatures (250°C). Stone is better for dedicated pizza ovens (350°C+).",
        context: "Equipment"
      },
      {
        question: "Is '00' flour better?",
        answer: "Surprisingly no. Standard Bread Flour often gives better color and structure in low-temp home ovens.",
        context: "Ingredients"
      },
      {
        question: "Can I use a tray?",
        answer: "Yes, but you will lose the 'Neapolitan' char on the bottom. For a tray, look into 'Grandma' or 'Sicilian' styles instead.",
        context: "Method"
      }
    ],
    fermentation_methods: [
      {
        method: "Cold",
        suitability: "Ideal",
        notes: "Crucial for making high-hydration dough easy to shape at home."
      },
      {
        method: "Poolish",
        suitability: "Authentic",
        notes: "Highly recommended; it creates the extensible dough needed for a thin, airy Neapolitan-style base."
      },
      {
        method: "Direct",
        suitability: "Possible",
        notes: "Fast, but results in a less flavorful and harder-to-digest crust."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "High hydration (70%) is used as a 'thermal buffer'. Because home ovens bake slowly, they evaporate more moisture. By starting with more water, the final pizza remains soft instead of turning into a biscuit.",
    methodSuitability: {
      direct: { suitable: true, notes: "Good for beginners." },
      biga: { suitable: false, notes: "Can make the dough too 'bouncy' and hard to stretch thinly enough for home oven heat." },
      poolish: { suitable: true, notes: "The best method for achieving the 'perfume' of Naples at home." }
    },
    whatIf: [
      {
        scenario: "You use 0% oil",
        outcome: "The pizza will have a very hard, tough crust that might be difficult to chew once it cools down.",
        solution: "Oil is essential for 'tenderness' in home bakes."
      }
    ],
    comparisons: [
      {
        vsStyle: "Home Oven vs High-Heat Oven",
        difference: "The high-heat bake produces 'leopard spotting' (tiny charred dots); the home-oven bake tends to produce larger, more uniform golden-brown patches."
      }
    ],
    proTips: [
      "Freeze your cheese for 20 minutes before grating it—it will melt more slowly, matching the longer bake time of the dough.",
      "A heavy cast-iron skillet (turned upside down) is a great 'budget' alternative to a baking steel.",
      "Add a splash of beer to the dough (replacing some water) for an incredible malted aroma.",
      "Use the highest rack in the oven to capture the heat rising from the bottom and reflecting off the top.",
      "Brush the edge lightly with olive oil before baking for a glossy, professional 'bakery' look."
    ]
  },

  tags: ["neapolitan", "home oven", "baking steel", "adapted", "domestic"],

  watchouts: [
    "Dough too wet to launch? Use more flour on the peel or use parchment paper.",
    "Oven door opening too often? You lose 30°C every time—be quick!",
    "Too much sugar? The pizza will burn before the cheese melts.",
    "Baking stone cracked? It's usually from thermal shock (putting a cold stone in a hot oven)."
  ],

  notes: [
    "Optimized for 250-275°C domestic ovens.",
    "Uses sugar and oil for color/texture.",
    "Requires Baking Steel or Stone.",
    "High hydration (65-70%+).",
    "Best with Bread Flour."
  ],

  references: [
    {
      source: "The Elements of Pizza",
      url: "https://www.amazon.com/Elements-Pizza-Mastering-Secrets-Dough/dp/160774731X",
      author: "Ken Forkish",
      year: "2014"
    },
    {
      source: "The Pizza Bible",
      url: "https://www.amazon.com/Pizza-Bible-Neapolitan-Deep-Dish-Artisan/dp/1607746054",
      author: "Tony Gemignani",
      year: "2014"
    },
    {
      source: "Serious Eats - The Pizza Lab (Home Oven Hacks)",
      url: "https://www.seriouseats.com/the-pizza-lab",
      author: "J. Kenji López-Alt",
      year: "2021"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/home-oven-neapolitan-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["mozzarella_low_moisture", "tomato_sauce", "basil_fresh", "parmigiano_reggiano", "olive_oil_extra_virgin"]
};
