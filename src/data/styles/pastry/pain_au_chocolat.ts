import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pain_au_chocolat: StyleDefinition = {
  "id": "pain_au_chocolat",
  "title": t('styles.pain_au_chocolat'),
  "subtitle": t('styles.viennoiserie_laminée_5'),
  "category": t('styles.pastry_8'),
  "family": t('styles.viennoiserie_laminée_6'),
  "variantName": t('styles.pain_au_chocolat_2'),
  "origin": {
    "country": t('styles.france_9'),
    "region": t('styles.francewide_2'),
    "period": "19th–20th century"
  },
  "intro": t('styles.common_in_french_and_international_bakeries_as_a_b'),
  "history": "Pain au chocolat uses the same laminated dough as croissant, shaped around chocolate sticks and baked as a rectangular pastry.",
  "technicalFoundations": [
    "Same base as croissant, usually straight dough.",
    "Hydration: 50-60%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      50,
      60
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      25,
      35
    ],
    "sugarRange": [
      5,
      12
    ],
    "flourStrength": t('styles.laminationsuitable_flour'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C pre-lamination",
      "proof": "2–3 h at 24–26°C after shaping",
      "coldRetard": t('styles.chilling_necessary_between_lamination_steps')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        190,
        210
      ],
      "notes": t('styles.baked_until_deep_golden_with_visible_layers')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.breakfast_pastry'),
      t('common.snack_pastry')
    ]
  },
  "defaults": {
    "hydration": 56,
    "salt": 1.8,
    "oil": 30,
    "sugar": 10
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.breakfast_pastry'),
    t('common.snack_pastry'),
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
      "title": t('styles.ferrandi__professional_baking_3'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_29'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
