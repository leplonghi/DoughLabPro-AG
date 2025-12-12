import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const new_york_artisan_cold_ferment: StyleDefinition = {
  "id": "new_york_artisan_cold_ferment",
  "title": "New York Artisan (Modern)",
  "subtitle": t('styles.new_york_style_pizza'),
  "category": t('styles.pizza_9'),
  "family": t('styles.new_york_style_pizza_2'),
  "variantName": "New York Artisan (Modern)",
  "origin": {
    "country": t('styles.united_states_9'),
    "region": "Brooklyn / Manhattan",
    "period": "2000s–Present"
  },
  "intro": "Blurs the line between a slice shop and a sit-down restaurant. The crust is often darker (charred), lighter on the stomach, and has a more complex wheat flavor.",
  "history": "A renaissance of the NY style led by pizzerias like Lucali, Scarr's, and Best Pizza. They rejected industrial ingredients (bromated flour, cheap cheese) in favor of stone-milled local flours, natural leavening (sourdough hybrids), and longer, more complex fermentations.",
  "technicalFoundations": [
    "Sourdough starter (Levain) often mixed with small amount of commercial yeast.",
    "Hydration: 63-68%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      63,
      68
    ],
    "saltRange": [
      2.2,
      2.6
    ],
    "oilRange": [
      1,
      3
    ],
    "sugarRange": [
      0,
      1
    ],
    "flourStrength": "Unbleached Bread Flour + Whole Wheat percentage (W 300+)",
    "fermentation": {
      "bulk": "48–96h Cold Fermentation. Extreme maturation breaks down gluten for tenderness.",
      "proof": "3–4h at room temp",
      "coldRetard": "The secret to the 'Artisan' flavor profile"
    },
    "oven": {
      "type": "gas_deck",
      "temperatureC": [
        290,
        330
      ],
      "notes": t('styles.often_baked_slightly_hotter_and_darker_than_classi')
    },
    "difficulty": t('styles.medium_37'),
    "recommendedUse": [
      t('common.premium_slice_shops'),
      t('common.whole_pie_artisan_pizzerias')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.premium_slice_shops'),
    t('common.whole_pie_artisan_pizzerias'),
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
      "title": t('styles.modernist_pizza_7'),
      "url": ""
    },
    {
      "title": t('styles.frank_pinello'),
      "url": ""
    },
    {
      "title": t('styles.mark_iacono'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
