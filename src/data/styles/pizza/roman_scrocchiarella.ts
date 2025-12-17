import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const roman_scrocchiarella: StyleDefinition = {
  "id": "roman_scrocchiarella",
  "title": t('styles.roman_scrocchiarella_title'),
  "subtitle": t('styles.roman_thin_pizza'),
  "category": t('styles.pizza_11'),
  "family": t('styles.roman_thin_pizza_2'),
  "variantName": t('styles.roman_scrocchiarella_title'),
  "origin": {
    "country": t('styles.italy_11'),
    "region": t('styles.rome'),
    "period": "20th century"
  },
  "intro": t('styles.roman_scrocchiarella_intro'),
  "history": t('styles.roman_scrocchiarella_history'),
  "technicalFoundations": [
    t('styles.roman_scrocchiarella_tech_1'),
    t('styles.roman_scrocchiarella_tech_2')
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
      "bulk": t('styles.roman_scrocchiarella_ferm_bulk'),
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