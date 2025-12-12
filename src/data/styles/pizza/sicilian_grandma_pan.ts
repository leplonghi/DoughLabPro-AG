import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const sicilian_grandma_pan: StyleDefinition = {
  "id": "sicilian_grandma_pan",
  "title": "Sicilian / Grandma Pan Pizza",
  "subtitle": t('styles.american_pan_pizza_3'),
  "category": t('styles.pizza_13'),
  "family": t('styles.american_pan_pizza_4'),
  "variantName": "Sicilian / Grandma Pan Pizza",
  "origin": {
    "country": t('styles.united_states_11'),
    "region": t('styles.italianamerican_communities'),
    "period": "20th century"
  },
  "intro": "Popular in Italian-American bakeries and pizzerias for family-style trays and by-the-slice service.",
  "history": "Sicilian and grandma-style pan pizzas interpret Italian focaccia and bakery pizzas into thick or medium-thickness pan-baked pies.",
  "technicalFoundations": [
    "Often direct yeast dough; some formulas use sponge or poolish.",
    "Hydration: 65-75%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      65,
      75
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      3,
      6
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.bread_flour_or_strong_allpurpose'),
    "fermentation": {
      "bulk": "2–6 h at room temperature or partial cold ferment",
      "proof": "30–90 min in pan before baking",
      "coldRetard": t('styles.optional_1224_h')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        220,
        260
      ],
      "notes": t('styles.baked_in_oiled_rectangular_pans_thickness_depends_')
    },
    "difficulty": t('styles.hard_24'),
    "recommendedUse": [
      "Tray-baked pizza",
      "Family-style pan pies"
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    "Tray-baked pizza",
    "Family-style pan pies",
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
      "title": t('styles.modernist_pizza_11'),
      "url": ""
    },
    {
      "title": t('styles.american_pizza_baking_practice'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
