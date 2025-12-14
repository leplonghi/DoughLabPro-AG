import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const california_style: StyleDefinition = {
  "id": "california_style",
  "title": t('styles.california_style'),
  "subtitle": t('styles.american_artisan_pizza'),
  "category": t('styles.pizza_2'),
  "family": t('styles.american_artisan_pizza_2'),
  "variantName": t('styles.california_style_2'),
  "origin": {
    "country": t('styles.united_states_5'),
    "region": t('styles.california'),
    "period": "1980s"
  },
  "intro": "Associated with 'California Cuisine', fresh local ingredients, and wood-fired cooking.",
  "history": "Popularized by chefs like Wolfgang Puck, focusing on gourmet, non-traditional toppings and a light, airy single-serving crust.",
  "technicalFoundations": [
    "Direct dough or sponge, often with honey and olive oil.",
    "Hydration: 60-68%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      60,
      68
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      2,
      5
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_bread_flour_3'),
    "fermentation": {
      "bulk": "12–24 h cold retard",
      "proof": "1–2 h at room temperature",
      "coldRetard": t('styles.common_for_flavor')
    },
    "oven": {
      "type": "wood_fired",
      "temperatureC": [
        300,
        400
      ],
      "notes": t('styles.woodfired_for_speed_and_flavor_but_lower_temp_than')
    },
    "difficulty": t('styles.medium_33'),
    "recommendedUse": [
      t('common.gourmet_personal_pizzas'),
      t('common.creative_toppings')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.gourmet_personal_pizzas'),
    t('common.creative_toppings'),
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
      "title": t('styles.modernist_pizza'),
      "url": ""
    },
    {
      "title": t('styles.california_cuisine_history'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};