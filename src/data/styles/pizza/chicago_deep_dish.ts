import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const chicago_deep_dish: StyleDefinition = {
  "id": "chicago_deep_dish",
  "title": t('styles.chicago_deep_dish'),
  "subtitle": t('styles.american_pan_pizza'),
  "category": t('styles.pizza_3'),
  "family": t('styles.american_pan_pizza_2'),
  "variantName": t('styles.chicago_deep_dish_2'),
  "origin": {
    "country": t('styles.united_states_6'),
    "region": t('styles.chicago_2'),
    "period": "1940s"
  },
  "intro": t('styles.a_hearty_knifeandfork_meal_iconic_to_chicago_culin'),
  "history": "Invented in Chicago, this style features a deep, buttery crust pressed into a pan, filled with cheese, toppings, and topped with chunky tomato sauce.",
  "technicalFoundations": [
    "Direct dough, often with cornmeal or semolina in the blend.",
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
      15,
      20
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": "All-purpose or pastry/bread blend, lower protein for tenderness",
    "fermentation": {
      "bulk": "1–2 h at room temperature",
      "proof": "20–40 min in pan",
      "coldRetard": t('styles.optional_overnight')
    },
    "oven": {
      "type": "gas_deck",
      "temperatureC": [
        200,
        230
      ],
      "notes": "Long bake time (30-45 min) due to thickness and toppings."
    },
    "difficulty": t('styles.medium_34'),
    "recommendedUse": [
      t('common.deep_dish_pizza'),
      "Casserole-style pizza"
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.deep_dish_pizza'),
    "Casserole-style pizza",
    t('common.pizza'),
    t('common.united_states')
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
      "title": t('styles.modernist_pizza_2'),
      "url": ""
    },
    {
      "title": t('styles.chicago_pizza_history'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
