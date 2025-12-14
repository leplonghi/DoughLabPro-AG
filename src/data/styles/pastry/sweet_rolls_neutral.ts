import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const sweet_rolls_neutral: StyleDefinition = {
  "id": "sweet_rolls_neutral",
  "title": "Sweet Rolls (Neutral Enriched Base)",
  "subtitle": t('styles.enriched_sweet_doughs_5'),
  "category": t('styles.pastry_11'),
  "family": t('styles.enriched_sweet_doughs_6'),
  "variantName": "Sweet Rolls (Neutral Enriched Base)",
  "origin": {
    "country": t('styles.global_4'),
    "region": t('styles.commercial_and_artisan_bakeries'),
    "period": "20th century"
  },
  "intro": "Used as a versatile platform for sweet bakery products in industrial and artisan production.",
  "history": "Neutral sweet roll dough serves as a base for many bakery items, from twisted rolls to filled buns and rings.",
  "technicalFoundations": [
    "Often straight dough; sponge methods are also common.",
    "Hydration: 60-70%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      60,
      70
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      10,
      25
    ],
    "sugarRange": [
      10,
      25
    ],
    "flourStrength": t('styles.bread_or_strong_allpurpose_flour_5'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "45–90 min after shaping",
      "coldRetard": t('styles.used_frequently_for_scheduling_flexibility')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        175,
        190
      ],
      "notes": t('styles.bake_to_a_soft_crumb_toppings_and_glazes_vary_wide')
    },
    "difficulty": t('styles.hard_20'),
    "recommendedUse": [
      t('common.generic_sweet_rolls'),
      t('common.base_for_multiple_pastry_formats')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.generic_sweet_rolls'),
    t('common.base_for_multiple_pastry_formats'),
    t('common.pastry'),
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
      "title": t('styles.aib_sweet_dough_guidelines_2'),
      "url": ""
    },
    {
      "title": t('styles.professional_pastry_literature'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};