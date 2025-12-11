import { StyleDefinition } from '../../../types/styleDefinition';

export const cinnamon_rolls_classic: StyleDefinition = {
  "id": "cinnamon_rolls_classic",
  "title": "Classic Cinnamon Rolls",
  "subtitle": "Enriched Sweet Doughs",
  "category": "Pastry",
  "family": "Enriched Sweet Doughs",
  "variantName": "Classic Cinnamon Rolls",
  "origin": {
    "country": "United States/Northern Europe",
    "region": "Multiple",
    "period": "20th century"
  },
  "intro": "Common as a breakfast or coffee-shop pastry in many countries.",
  "history": "Cinnamon rolls are enriched, sweet yeasted dough spirals filled with cinnamon sugar and often topped with icing.",
  "technicalFoundations": [
    "Usually straight dough; some formulas use sponges.",
    "Hydration: 60-65%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      60,
      65
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      15,
      25
    ],
    "sugarRange": [
      15,
      25
    ],
    "flourStrength": "Bread or strong all-purpose flour",
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "45–90 min after shaping in pans",
      "coldRetard": "Frequently retarded overnight for convenience"
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        175,
        190
      ],
      "notes": "Bake until set but still soft; icing added after baking."
    },
    "difficulty": "Medium",
    "recommendedUse": [
      "Breakfast pastry",
      "Coffee-shop pastry"
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    "Breakfast pastry",
    "Coffee-shop pastry",
    "Pastry",
    "United States/Northern Europe"
  ],
  "applyInApp": {
    "calculator": [],
    "styles": [],
    "mylab": [],
    "levain": [],
    "tools": []
  },
  "references": [
    {
      "title": "AIB sweet dough guidelines",
      "url": ""
    },
    {
      "title": "Modernist Bread",
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official",
  "base_formula": [
    { "name": "Bread Flour", "percentage": 100, "category": "base", "role": "flour" },
    { "name": "Whole Milk", "percentage": 65, "hydrationContent": 0.87, "category": "liquid", "role": "other" },
    { "name": "Sugar", "percentage": 15, "category": "sugar", "role": "sugar" },
    { "name": "Butter (Soft)", "percentage": 15, "hydrationContent": 0.15, "category": "fat", "role": "fat" },
    { "name": "Whole Egg", "percentage": 10, "hydrationContent": 0.74, "category": "liquid", "role": "other" },
    { "name": "Instant Yeast", "percentage": 1.5, "role": "yeast" },
    { "name": "Salt", "percentage": 2, "role": "salt" },
    { "name": "Filling: Brown Sugar", "percentage": 25, "role": "other" },
    { "name": "Filling: Cinnamon", "percentage": 2.5, "role": "other" },
    { "name": "Filling: Butter", "percentage": 10, "role": "other" },
    { "name": "Frosting: Cream Cheese", "percentage": 20, "role": "other" },
    { "name": "Frosting: Powdered Sugar", "percentage": 15, "role": "other" }
  ]
};
