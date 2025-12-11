import { StyleDefinition } from '../../../types/styleDefinition';

export const croissant_classic: StyleDefinition = {
  "id": "croissant_classic",
  "title": "Classic French Croissant",
  "subtitle": "Viennoiserie Laminée",
  "category": "Pastry",
  "family": "Viennoiserie Laminée",
  "variantName": "Classic French Croissant",
  "origin": {
    "country": "France",
    "region": "Paris and beyond",
    "period": "19th–20th century"
  },
  "intro": "Eaten at breakfast and as a snack, produced in artisan and industrial bakeries worldwide.",
  "history": "Croissant is a laminated, yeasted dough with butter layers, becoming a symbol of French viennoiserie.",
  "technicalFoundations": [
    "Usually straight dough; some use poolish.",
    "Hydration: 50-60%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      50,
      62
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      40,
      65
    ],
    "sugarRange": [
      8,
      14
    ],
    "flourStrength": "Strong bread or pastry flour suitable for lamination (W 280-320)",
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "2–3 h at 24–26°C after shaping",
      "coldRetard": "Mandatory overnight retarding for lamination"
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        190,
        210
      ],
      "notes": "Requires proper proofing and steam or humidity control."
    },
    "difficulty": "Hard",
    "recommendedUse": [
      "Breakfast pastry",
      "Viennoiserie display"
    ]
  },
  "defaults": {
    "hydration": 54, // Net hydration of the detrempe (Water+Milk water) roughly
    "salt": 2,
    "oil": 55, // Total butter
    "sugar": 11
  },
  "base_formula": [
    { "name": "Bread Flour", "percentage": 100, "role": "flour" },
    { "name": "Water", "percentage": 28, "hydrationContent": 1, "role": "water" },
    { "name": "Whole Milk", "percentage": 28, "hydrationContent": 0.87, "category": "liquid", "role": "other", "manualOverride": true },
    { "name": "Sugar", "percentage": 11, "role": "sugar", "category": "sugar", "manualOverride": true },
    { "name": "Salt", "percentage": 2, "role": "salt" },
    { "name": "Yeast (Instant)", "percentage": 1.2, "role": "yeast" },
    { "name": "Butter (Dough)", "percentage": 5, "hydrationContent": 0.15, "role": "fat", "category": "fat", "manualOverride": true },
    { "name": "Butter (Lamination)", "percentage": 50, "hydrationContent": 0.15, "role": "fat", "category": "fat", "manualOverride": true }
  ],
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    "Breakfast pastry",
    "Viennoiserie display",
    "Pastry",
    "France"
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
      "title": "Ferrandi – Professional Baking",
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
  "source": "official"
};
