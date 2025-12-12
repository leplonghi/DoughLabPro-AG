import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const roman_scrocchiarella: StyleDefinition = {
  "id": "roman_scrocchiarella",
  "title": "Roman Scrocchiarella (Thin & Crispy)",
  "subtitle": t('styles.roman_thin_pizza'),
  "category": t('styles.pizza_11'),
  "family": t('styles.roman_thin_pizza_2'),
  "variantName": "Roman Scrocchiarella (Thin & Crispy)",
  "origin": {
    "country": t('styles.italy_11'),
    "region": t('styles.rome'),
    "period": "20th century"
  },
  "intro": "Common in Roman pizzerias as an alternative to Neapolitan, offering a crunchy, thin base suited for many toppings.",
  "history": "Roman scrocchiarella is a very thin, crisp pizza style baked on pans or directly on the deck, distinct from pan-style teglia.",
  "technicalFoundations": [
    "Often direct dough; some formulas use poolish.",
    "Hydration: 55-60%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      55,
      60
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      2,
      4
    ],
    "sugarRange": [
      0,
      2
    ],
    "flourStrength": t('styles.mediumstrong_flour_w_240280'),
    "fermentation": {
      "bulk": "2–6 h at room temperature or partial cold ferment",
      "proof": t('styles.short_proof_in_pans_or_on_trays'),
      "coldRetard": t('styles.optional_up_to_24_h')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        250,
        300
      ],
      "notes": t('styles.baked_thin_on_pans_or_stone_for_crispness')
    },
    "difficulty": t('styles.medium_39'),
    "recommendedUse": [
      t('common.roman_thin_pizza'),
      t('common.crispy_pizza_base')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.roman_thin_pizza'),
    t('common.crispy_pizza_base'),
    t('common.pizza'),
    t('common.italy')
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
      "title": t('styles.modernist_pizza_9'),
      "url": ""
    },
    {
      "title": t('styles.italian_pizza_technical_literature'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
