import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const roman_teglia_pan: StyleDefinition = {
  "id": "roman_teglia_pan",
  "title": "Roman Teglia (Al Taglio – High Hydration Pan)",
  "subtitle": t('styles.roman_pan_pizza'),
  "category": t('styles.pizza_12'),
  "family": t('styles.roman_pan_pizza_2'),
  "variantName": "Roman Teglia (Al Taglio – High Hydration Pan)",
  "origin": {
    "country": t('styles.italy_12'),
    "region": t('styles.rome_2'),
    "period": t('styles.late_20th_century_3')
  },
  "intro": "Sold by the slice by weight in Roman bakeries and pizzerias, often topped after par-bake or fully baked with toppings.",
  "history": "Roman teglia or al taglio pizza is baked in rectangular pans with very high hydration, yielding an airy crumb and crisp base.",
  "technicalFoundations": [
    "Often uses long cold ferment and sometimes preferments for better structure.",
    "Hydration: 75-85%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      75,
      85
    ],
    "saltRange": [
      2.3,
      2.8
    ],
    "oilRange": [
      3,
      5
    ],
    "sugarRange": [
      0,
      2
    ],
    "flourStrength": t('styles.strong_bread_or_pizza_flour_w_300340'),
    "fermentation": {
      "bulk": "12–48 h with cold retard",
      "proof": "1–3 h in pan before baking",
      "coldRetard": t('styles.common_for_flavor_and_extensibility')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        240,
        280
      ],
      "notes": t('styles.baked_in_oiled_rectangular_pans_sometimes_in_two_s')
    },
    "difficulty": t('styles.expert_15'),
    "recommendedUse": [
      t('common.roman_pan_pizza'),
      "Tray-baked pizza sold by weight"
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.roman_pan_pizza'),
    "Tray-baked pizza sold by weight",
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
      "title": t('styles.modernist_pizza_10'),
      "url": ""
    },
    {
      "title": t('styles.roman_pan_pizza_literature'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};