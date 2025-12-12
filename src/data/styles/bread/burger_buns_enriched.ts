import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const burger_buns_enriched: StyleDefinition = {
  "id": "burger_buns_enriched",
  "title": "Burger Buns (Enriched)",
  "subtitle": t('styles.sandwich__enriched_breads'),
  "category": t('styles.bread_4'),
  "family": t('styles.sandwich__enriched_breads_2'),
  "variantName": "Burger Buns (Enriched)",
  "origin": {
    "country": t('styles.united_states'),
    "region": t('styles.global_fast_food'),
    "period": "20th century"
  },
  "intro": "Widely produced in industrial and artisan bakeries as a standard element of burgers and sandwiches.",
  "history": "Burger buns are soft, enriched rolls designed to hold burger patties and condiments without crumbling.",
  "technicalFoundations": [
    "Usually straight dough; sponge or poolish variants exist.",
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
      1.5,
      2
    ],
    "oilRange": [
      8,
      18
    ],
    "sugarRange": [
      5,
      15
    ],
    "flourStrength": t('styles.bread_flour_or_strong_allpurpose_flour'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "45–75 min after shaping, until puffy",
      "coldRetard": t('styles.optional_bulk_retard')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        180,
        200
      ],
      "notes": t('styles.often_topped_with_seeds_avoid_overbaking_to_keep_c')
    },
    "difficulty": t('styles.medium_7'),
    "recommendedUse": [
      t('common.burger_buns'),
      t('common.sandwich_rolls')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.burger_buns'),
    t('common.sandwich_rolls'),
    t('common.bread'),
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
      "title": t('styles.aib_guidelines'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_3'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
