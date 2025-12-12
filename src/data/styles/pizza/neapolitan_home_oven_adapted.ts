import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const neapolitan_home_oven_adapted: StyleDefinition = {
  "id": "neapolitan_home_oven_adapted",
  "title": t('styles.neapolitan_style__home_oven_adapted'),
  "subtitle": t('styles.neapolitan_pizza_5'),
  "category": t('styles.pizza_7'),
  "family": t('styles.neapolitan_pizza_6'),
  "variantName": t('styles.neapolitan_style__home_oven_adapted_2'),
  "origin": {
    "country": t('styles.global_5'),
    "region": t('styles.home_kitchens'),
    "period": "21st century"
  },
  "intro": "Fueled by internet communities (PizzaMaking.com, Reddit) and the pandemic baking boom. It bridges the gap between commercial quality and domestic equipment limits.",
  "history": "The quest for Neapolitan pizza at home led to this adapted style. Since home ovens max out at 250–300°C (vs 485°C), the dough is engineered to brown at lower temperatures and retain moisture over a longer bake time (5–8 mins).",
  "technicalFoundations": [
    "Any (Poolish/Biga) works well to add flavor complexity.",
    "Hydration: 65-70%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      65,
      70
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
      1,
      3
    ],
    "flourStrength": "Strong Bread Flour or Malted 00 (W 280–320)",
    "fermentation": {
      "bulk": "Cold fermentation (24–72h) is preferred for flavor and convenience",
      "proof": "2–4h at room temp",
      "coldRetard": t('styles.essential_for_home_schedules')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        250,
        300
      ],
      "notes": "Crucial: Use Baking Steel or Stone. Add oil/sugar/malt to dough to assist Maillard reaction."
    },
    "difficulty": t('styles.hard_23'),
    "recommendedUse": [
      t('common.home_baking_without_pizza_oven'),
      t('common.crispier_crust_lovers')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.home_baking_without_pizza_oven'),
    t('common.crispier_crust_lovers'),
    t('common.pizza'),
    t('common.global')
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
      "title": t('styles.ken_forkish__the_elements_of_pizza'),
      "url": ""
    },
    {
      "title": "PizzaMaking.com",
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
