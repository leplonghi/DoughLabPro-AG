import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const croissant_classic: StyleDefinition = {
  "id": "croissant_classic",
  "title": t('styles.classic_french_croissant'),
  "subtitle": t('styles.viennoiserie_laminée'),
  "category": t('styles.pastry_5'),
  "family": t('styles.viennoiserie_laminée_2'),
  "variantName": t('styles.classic_french_croissant_2'),
  "origin": {
    "country": t('styles.france_7'),
    "region": t('styles.paris_and_beyond'),
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
      "coldRetard": t('styles.mandatory_overnight_retarding_for_lamination')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        190,
        210
      ],
      "notes": t('styles.requires_proper_proofing_and_steam_or_humidity_con')
    },
    "difficulty": t('styles.hard_18'),
    "recommendedUse": [
      t('common.breakfast_pastry'),
      t('common.viennoiserie_display')
    ]
  },
  "defaults": {
    "hydration": 54, // Net hydration of the detrempe (Water+Milk water) roughly
    "salt": 2,
    "oil": 55, // Total butter
    "sugar": 11
  },
  "base_formula": [
    { "name": t('styles.bread_flour_4'), "percentage": 100, "role": "flour" },
    { "name": t('styles.water_2'), "percentage": 28, "hydrationContent": 1, "role": "water" },
    { "name": t('styles.whole_milk_4'), "percentage": 28, "hydrationContent": 0.87, "category": "liquid", "role": "other", "manualOverride": true },
    { "name": t('styles.sugar_4'), "percentage": 11, "role": "sugar", "category": "sugar", "manualOverride": true },
    { "name": t('styles.salt_5'), "percentage": 2, "role": "salt" },
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
    t('common.breakfast_pastry'),
    t('common.viennoiserie_display'),
    t('common.pastry'),
    t('common.france')
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
      "title": t('styles.ferrandi__professional_baking'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_26'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
