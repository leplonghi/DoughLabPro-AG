import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const detroit_style_classic: StyleDefinition = {
  "id": "detroit_style_classic",
  "title": "Detroit Style Classic (Blue Steel Pan)",
  "subtitle": t('styles.detroit_pizza'),
  "category": t('styles.pizza_4'),
  "family": t('styles.detroit_pizza_2'),
  "variantName": "Detroit Style Classic (Blue Steel Pan)",
  "origin": {
    "country": t('styles.united_states_7'),
    "region": t('styles.detroit'),
    "period": t('styles.mid_20th_century')
  },
  "intro": "Served in rectangles with a crispy cheese crown, often topped with sauce stripes after baking.",
  "history": "Detroit-style pizza originated in mid-20th-century Detroit using automotive parts pans, producing a thick, airy crumb and caramelized cheese edges.",
  "technicalFoundations": [
    "Typically direct dough with yeast and moderate fermentation.",
    "Hydration: 70-75%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      70,
      75
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      3,
      5
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.bread_flour_protein_around_1213'),
    "fermentation": {
      "bulk": "1–3 h at room temperature or partial cold ferment",
      "proof": "45–90 min in pan",
      "coldRetard": t('styles.optional_overnight_in_pan')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        240,
        280
      ],
      "notes": t('styles.bluesteel_or_similar_pans_heavily_oiled_for_fried_')
    },
    "difficulty": t('styles.hard_21'),
    "recommendedUse": [
      t('common.thick_pan_pizza'),
      "Cheese-edge caramelized pizzas"
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.thick_pan_pizza'),
    "Cheese-edge caramelized pizzas",
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
      "title": t('styles.modernist_pizza_3'),
      "url": ""
    },
    {
      "title": t('styles.detroit_pizza_historical_accounts'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
