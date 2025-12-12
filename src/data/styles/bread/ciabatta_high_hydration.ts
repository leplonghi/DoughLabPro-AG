import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const ciabatta_high_hydration: StyleDefinition = {
  "id": "ciabatta_high_hydration",
  "title": "Ciabatta (High Hydration Poolish)",
  "subtitle": t('styles.italian_rustic__high_hydration'),
  "category": t('styles.bread_5'),
  "family": t('styles.italian_rustic__high_hydration_2'),
  "variantName": "Ciabatta (High Hydration Poolish)",
  "origin": {
    "country": t('styles.italy_2'),
    "region": t('styles.northern_italy'),
    "period": t('styles.late_20th_century')
  },
  "intro": "Used for sandwiches, bruschetta and table bread, valued for its airy internal structure.",
  "history": "Ciabatta was developed in Italy as an alternative to French baguette, featuring an open crumb and thin crust.",
  "technicalFoundations": [
    "Poolish 30–50% of flour is classic.",
    "Hydration: 75-80%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      75,
      80
    ],
    "saltRange": [
      2,
      2.2
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      0,
      1
    ],
    "flourStrength": t('styles.strong_bread_flour_w_260300'),
    "fermentation": {
      "bulk": "2–3 h at 23–25°C with multiple folds",
      "proof": "30–60 min after dividing and shaping",
      "coldRetard": t('styles.optional_812_h_for_flavor')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.bake_with_good_steam_handle_gently_to_preserve_gas')
    },
    "difficulty": t('styles.expert_3'),
    "recommendedUse": [
      t('common.sandwich_bread'),
      t('common.bruschetta'),
      t('common.rustic_table_bread')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.sandwich_bread'),
    t('common.bruschetta'),
    t('common.rustic_table_bread'),
    t('common.bread'),
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
      "title": t('styles.bread__jeffrey_hamelman_2'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_4'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
