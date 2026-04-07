import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * ROMAN PIZZA SCROCCHIARELLA (PIZZA TONDA ROMANA)
 * 
 * Researched and validated content:
 * - Origin: Rome, Italy (Post-WWII / 1950s)
 * - Technique: Thin rolling pin (Mattarello) - Zero Corniche
 * - Ingredients: Low hydration, high-fat (Seed Oil), Malt
 * - Characteristics: Cracker-like, audibly crunchy (Scrocchia), paper-thin
 */
export const roman_scrocchiarella: DoughStyleDefinition = {
  id: "roman_scrocchiarella",
  name: "Roman Pizza Scrocchiarella",
  category: "pizza",
  recipeStyle: RecipeStyle.THIN_CRUST,
  family: "Roman Thin Crust",

  origin: {
    country: "Italy",
    region: "Rome (Lazio)",
    period: "Post-WWII (1950s) - The 'Guerra delle Pizze' era"
  },

  description: "Roman Pizza Scrocchiarella (also known as Pizza Tonda Romana) is the antithesis of the Neapolitan style. It is characterized by its extreme thinness, lack of a puffy edge (cornicione), and a texture so crispy that it audibly shatters with every bite. The name 'Scrocchiarella' comes from the Romanesco word 'scrocchiare' (to crunch). It is traditional to roll this dough with a 'mattarello' (rolling pin) to expel all air, ensuring a consistent, biscuit-like bite throughout the entire disc.",

  history: "Modern Roman pizza emerged during the 1950s in the working-class neighborhoods of Rome. While Naples focused on the soft, elastic heritage of 'Pizza STG', Roman pizzaioli leaned into the texture of artisanal crackers and flatbreads. In the 1970s and 80s, the style became a symbol of local identity, often served in 'Pizzerie di Quartiere' where the focus was on speed and crispness. The rolling pin, which is heresy in Naples, became the tool of pride in Rome. It represents a different culinary philosophy: where the Neapolitan style celebrates the 'live' dough, the Roman style celebrates the 'baked' texture.",

  difficulty: "Medium",
  fermentationType: "cold",

  base_formula: [
    { name: "Soft Wheat Flour (Type 00, W260)", percentage: 100 },
    { name: "Water", percentage: 55 },
    { name: "Salt", percentage: 2.5 },
    { name: "Sunflower or Seed Oil", percentage: 3 },
    { name: "Diastatic Malt", percentage: 1 },
    { name: "Fresh Yeast", percentage: 0.5 }
  ],

  technicalProfile: {
    hydration: [50, 58], // Low hydration is key for crispness
    salt: [2.0, 3.0],
    oil: [2, 5], // Oil is mandatory for the 'biscuit' effect
    sugar: [0, 1], // Malt is used for browning at lower temps
    flourStrength: "Medium strength (W260-290), high elasticity",
    ovenTemp: [300, 320], // Lower than Neapolitan to allow drying/crunch
    recommendedUse: [
      "Traditional Roman Pizzeria service",
      "Classic 'Pizza Bassa'",
      "Home oven adapted thin crust"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 180, min: 150, max: 210 },
    fermentationSteps: [
      "Mixing: Combine ingredients and knead until smooth. [Science: The oil acts as a plasticizer, coating gluten strands to make the dough snap-crisp rather than chewy]",
      "Bulk Rise: 2-4 hours at room temperature. [Science: Initial fermentation develops the CO2 structure]",
      "Cold Retard: 24 to 48 hours at 4°C. [Science: Necessary for enzymatic breakdown of starches into sugars, which facilitates the 'Scrocchio' crunch and deep color]",
      "Balling: Divide into small 180g balls. [Science: Small weight allows for extreme thinness when rolled to 30-32cm]",
      "Final Proof: 3-5 hours at room temperature. [Science: The dough must be fully relaxed (estendibile) to avoid 'snap-back' during rolling]",
      "Rolling (Mattarello): Use a rolling pin to stretch the dough into a 32cm disc until it is translucent. [Science: Forcefully expels air bubbles, preventing the formation of a puffy cornicione]",
      "Baking: Bake on a stone for 3 to 5 minutes at 310°C. [Science: A longer bake at slightly lower temps (compared to Neapolitan) dehydrates the dough, turning it into a cracker]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W260-280 (Medium Strength)",
      pl_ratio: "0.50-0.60 (Balanced to slightly extensible)",
      absorption_capacity: "Moderate (55-58%)",
      protein_type: "Soft wheat with high extensibility and low resistance to rolling",
      science_explanation: "The dough must not resist the rolling pin; high tenacity (low P/L) would make it impossible to reach the 2mm thickness required for the signature crunch."
    },
    thermalProfile: {
      oven_type: "Refractory Deck or Wood-fired with floor temp of 300°C",
      heat_distribution: "Heavy conductive heat from the floor to instantly crisp the bottom",
      crust_development: "Rigid, brittle, uniform golden color with no air pockets (bulla)",
      crumb_structure: "Non-existent; the pizza should be a single, solid, crispy layer"
    },
    fermentationScience: {
      yeast_activity: "Standard; slows significantly during cold retard",
      ph_target: "pH 5.2 - 5.4",
      organic_acids: "Lactic dominant; helps in the 'fragile' mouthfeel",
      enzymatic_activity: "Crucial; alpha-amylase must provide enough reducing sugars for a uniform Maillard reaction during the longer drying-bake."
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Seed Oil over Olive Oil",
        explanation: "While extra virgin olive oil has better flavor, Roman pizzaioli often use sunflower or arachid oil because it has a higher 'crisping power' and results in a lighter, drier crunch."
      },
      {
        tip: "Dust with Flour, not Semolina",
        explanation: "Using semolina for dusting provides too much 'grit'. High-quality soft wheat flour is preferred to keep the surface smooth and 'biscuit-like'."
      },
      {
        tip: "The 'Ear' Test",
        explanation: "Try to lift the edge of the slice. If it stays perfectly horizontal without bending, it is a successful Scrocchiarella."
      },
      {
        tip: "Pricking the dough",
        explanation: "If the dough starts to bubble in the oven, use a fork to prick the bubbles. A Roman pizza should be flat, not bubbly."
      },
      {
        tip: "Wait for the 'Crunch' sound",
        explanation: "If the pizza doesn't 'crack' when you cut it with a wheel, it needed another 30 seconds in the oven. The sound is the quality check."
      }
    ],
    what_if: [
      {
        scenario: "The pizza is chewy instead of crunchy",
        result: "Under-baked or hydration was too high",
        correction: "Ensure hydration is below 58% and bake until the edges are hard as glass."
      },
      {
        scenario: "The dough snaps back when rolling",
        result: "Dough wasn't relaxed enough or flour was too strong",
        correction: "Let the balls rest for another hour at room temperature or use a lower 'W' flour."
      },
      {
        scenario: "The bottom is pale",
        result: "Oven floor was too cold",
        correction: "Switch to a refractory stone and preheat for at least 45 minutes."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Neapolitan",
        difference: "Roman is rolled with a pin, has oil/malt, and is crispy. Neapolitan is hand-stretched, lean, and soft.",
        why_choose_this: "Choose Roman for the satisfying 'Scrocchio' and if you prefer a 'lighter' stomach feeling (less dough volume)."
      },
      {
        target_style: "Pizza al Taglio",
        difference: "Both are Roman, but Scrocchiarella is round (al piatto) and much thinner than the airy, tray-baked Taglio.",
        why_choose_this: "Choose Scrocchiarella for a classic sit-down dinner experience."
      },
      {
        target_style: "St. Louis Style",
        difference: "St. Louis is even more cracker-like and uses no yeast; Roman Scrocchiarella still uses a small amount of yeast for flavor and micro-porosity.",
        why_choose_this: "Choose Roman for a more 'authentic' Italian bread flavor within a thin format."
      }
    ],
    q_and_a: [
      {
        question: "Is the rolling pin really allowed?",
        answer: "In Rome, it's not and only allowed, it's the standard. It's the only way to get the dough thin enough (2mm).",
        context: "Tradition"
      },
      {
        question: "Can I use whole wheat?",
        answer: "Traditionally no, as the bran can cut the gluten and interfere with the ultra-thin rolling. Use '00' or '0' for the best results.",
        context: "Ingredients"
      },
      {
        question: "Why use malt?",
        answer: "Since the bake is longer and the temperature lower than Neapolitan, malt helps the sugars caramelize (Maillard reaction) more effectively.",
        context: "Science"
      },
      {
        question: "Best toppings?",
        answer: "Less is more. A classic is 'Amatriciana' or simple tomato and pecorino. Too many toppings will hide the crunch.",
        context: "Pairing"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "Standard Roman method, supplemented by 24h cold retard."
      },
      {
        method: "Biga",
        suitability: "Possible",
        notes: "Increasingly popular in 'Modern Roman' pizzerias to add more aroma and perfume to the thin crust."
      },
      {
        method: "Sourdough",
        suitability: "Not Recommended",
        notes: "The acidity can make the dough too soft; commercial yeast is preferred for the 'biscuit' profile."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Low hydration (52-55%) is the scientific fundamental of the 'Scrocchio'. A drier dough means less steam expansion and a more rigid protein-starch matrix, which results in the brittle, shattering texture.",
    methodSuitability: {
      direct: { suitable: true, notes: "Reliable and traditional." },
      biga: { suitable: true, notes: "Recommended for 100% Biga techniques in modern Roman pizzerias." },
      poolish: { suitable: false, notes: "Adds too much extensibility, making the dough 'slippery' for the rolling pin." }
    },
    whatIf: [
      {
        scenario: "You omit the oil",
        outcome: "The pizza will be hard and 'leathery' instead of 'brittle' and crispy.",
        solution: "Oil is essential—it shortens the gluten strands (shortening effect)."
      }
    ],
    comparisons: [
      {
        vsStyle: "Pizza Bassa vs Pizza Alta",
        difference: "In Rome, people order 'Bassa' (Roman Scrocchiarella) or 'Alta' (Neapolitan-style). High-end Roman spots often specialize in one or the other."
      }
    ],
    proTips: [
      "Roll the dough until you can see the grain of the wood through it.",
      "Use a 'buca-sfoglia' (dough docker) to prevent the center from ballooning up.",
      "Bake until the bottom has dark 'freckles' (leopard spotting isn't the goal, a uniform gold is).",
      "Don't use fresh mozzarella with high water; use 'Mozzarella per Pizza' (Low Moisture) to keep the crust dry.",
      "Add a splash of Roman white wine (Frascati) to the dough for a historical twist."
    ]
  },

  tags: ["roman", "crispy", "thin", "scrocchiarella", "italian", "pizza"],

  watchouts: [
    "Dough too cold when rolling? It will tear.",
    "Too much sauce? It will be soggy in the middle.",
    "Oven too hot? It will burn before it gets crunchy.",
    "Flour too strong? It will be like eating rubber."
  ],

  notes: [
    "Roman 'Scrocchio' (Audible crunch).",
    "Rolling pin mandatory.",
    "Low hydration (50-55%).",
    "Seed oil for drier crispness.",
    "Zero cornicione (no puffy edge)."
  ],

  references: [
    {
      source: "Scuola Italiana Pizzaioli - Roman Style Manual",
      url: "https://scuolaitalianapizzaioli.it/",
      author: "Italian School of Pizzaioli",
      year: "2020"
    },
    {
      source: "Gambero Rosso - L'eccellenza della Pizza Romana",
      url: "https://www.gamberorosso.it/",
      author: "Gambero Rosso Editorial",
      year: "2023"
    },
    {
      source: "The Science of Pizza (Texture section)",
      url: "https://modernistcuisine.com/",
      author: "Nathan Myhrvold",
      year: "2017"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/roman-scrocchiarella-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["olive_oil_extra_virgin", "pecorino_romano", "anchovies", "cebola", "mozzarella_low_moisture", "oregano_dried"]
};
