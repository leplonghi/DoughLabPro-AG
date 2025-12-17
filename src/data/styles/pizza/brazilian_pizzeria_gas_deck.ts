import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const brazilian_pizzeria_gas_deck: StyleDefinition = {
  "id": "brazilian_pizzeria_gas_deck",
  "title": t('styles.brazilian_pizzeria_title'),
  "subtitle": t('styles.brazilian_pizzeria'),
  "category": t('styles.pizza'),
  "family": t('styles.brazilian_pizzeria_2'),
  "variantName": t('styles.brazilian_pizzeria_title'),
  "origin": {
    "country": t('styles.brazil_4'),
    "region": t('styles.urban_pizzerias'),
    "period": t('styles.late_20th_century_2')
  },
  "intro": t('styles.brazilian_pizzeria_intro'),
  "history": t('styles.brazilian_pizzeria_history'),
  "technicalFoundations": [
    t('styles.brazilian_pizzeria_tech_1'),
    t('styles.brazilian_pizzeria_tech_2')
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      55,
      62
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      2,
      4
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.brazilian_pizzeria_flour'),
    "fermentation": {
      "bulk": t('styles.brazilian_pizzeria_ferm_bulk'),
      "proof": t('styles.brazilian_pizzeria_ferm_proof'),
      "coldRetard": t('styles.optional_up_to_24_h_for_flavor')
    },
    "oven": {
      "type": "gas_deck",
      "temperatureC": [
        280,
        320
      ],
      "notes": t('styles.designed_for_repeated_baking_cycles_in_commercial_')
    },
    "difficulty": t('styles.medium_32'),
    "recommendedUse": [
      t('styles.brazilian_pizzeria_use_1'),
      t('styles.brazilian_pizzeria_use_2')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('styles.brazilian_pizzeria_use_1'),
    t('styles.brazilian_pizzeria_use_2'),
    t('common.pizza'),
    t('common.brazil')
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
      "title": t('styles.brazilian_pizza_trade_literature'),
      "url": ""
    },
    {
      "title": "Professional panificação/pizzaria references",
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};