import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const brazilian_pizzeria_gas_deck: StyleDefinition = {
  "id": "brazilian_pizzeria_gas_deck",
  "title": "Brazilian Rodízio / Gas-Deck Style",
  "subtitle": t('styles.brazilian_pizzeria'),
  "category": t('styles.pizza'),
  "family": t('styles.brazilian_pizzeria_2'),
  "variantName": "Brazilian Rodízio / Gas-Deck Style",
  "origin": {
    "country": t('styles.brazil_4'),
    "region": t('styles.urban_pizzerias'),
    "period": t('styles.late_20th_century_2')
  },
  "intro": "Used in rodízio-style pizzerias and delivery-focused operations, supporting a wide range of toppings and extended service.",
  "history": "Brazilian pizzeria-style dough adapts Italian and American influences to gas or electric deck ovens, often with slightly lower hydration and enriched dough.",
  "technicalFoundations": [
    "Typically direct dough; some use biga or sponge.",
    "Hydration: 55-62%"
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
    "flourStrength": "Strong Brazilian bread/pizza flour, W ~280–330",
    "fermentation": {
      "bulk": "2–8 h at room temperature or partially retarded",
      "proof": "30–90 min before baking",
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
      "Brazilian pizzeria-style pizza",
      "Rodízio and delivery"
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    "Brazilian pizzeria-style pizza",
    "Rodízio and delivery",
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