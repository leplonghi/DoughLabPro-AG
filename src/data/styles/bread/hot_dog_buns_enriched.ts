import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const hot_dog_buns_enriched: StyleDefinition = {
  "id": "hot_dog_buns_enriched",
  "title": "Hot Dog Buns (Enriched)",
  "subtitle": t('styles.sandwich__enriched_breads_3'),
  "category": t('styles.bread_8'),
  "family": t('styles.sandwich__enriched_breads_4'),
  "variantName": "Hot Dog Buns (Enriched)",
  "origin": {
    "country": t('styles.united_states_2'),
    "region": t('styles.global_fast_food_2'),
    "period": "20th century"
  },
  "intro": "Common in fast food and home grilling contexts, designed for softness and resilience.",
  "history": "Hot dog buns are elongated, enriched rolls developed to hold sausages and toppings conveniently.",
  "technicalFoundations": [
    "Typically straight dough; some use pre-ferments.",
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
      12
    ],
    "flourStrength": t('styles.bread_flour_or_strong_allpurpose_flour_2'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "45–75 min after shaping in pans or on trays",
      "coldRetard": t('styles.optional_bulk_retard_2')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        180,
        200
      ],
      "notes": t('styles.baked_close_together_for_soft_pullapart_texture')
    },
    "difficulty": t('styles.medium_8'),
    "recommendedUse": [
      t('common.hot_dog_buns'),
      t('common.sausage_rolls')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.hot_dog_buns'),
    t('common.sausage_rolls'),
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
      "title": t('styles.aib_guidelines_2'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_7'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
