import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const baguette_tradition_francaise: StyleDefinition = {
  "id": "baguette_tradition_francaise",
  "title": t('styles.baguette_tradition_française'),
  "subtitle": t('styles.french_lean_breads'),
  "category": t('styles.bread_3'),
  "family": t('styles.french_lean_breads_2'),
  "variantName": t('styles.baguette_tradition_française_2'),
  "origin": {
    "country": t('styles.france'),
    "region": t('styles.nationwide'),
    "period": "20th century"
  },
  "intro": "Consumed daily as a staple bread in France, often bought fresh from artisan boulangeries.",
  "history": "Baguette tradition is a protected style of French lean bread with restrictions on additives and methods, relying on slow fermentation and quality flour.",
  "technicalFoundations": [
    "Poolish, pâte fermentée or liquid levain commonly 20–50%.",
    "Hydration: 65-72%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      65,
      72
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      0
    ],
    "sugarRange": [
      0,
      0.5
    ],
    "flourStrength": "French T65/T55 or equivalent, W ~200–260",
    "fermentation": {
      "bulk": "2–4 h at 23–25°C with folds, or partially retarded",
      "proof": "45–75 min at 23–25°C",
      "coldRetard": t('styles.optional_overnight_retard_for_flavor')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.requires_strong_steam_at_the_beginning_of_the_bake')
    },
    "difficulty": t('styles.hard_4'),
    "recommendedUse": [
      t('common.daily_table_bread'),
      t('common.sandwiches'),
      t('common.toast')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.daily_table_bread'),
    t('common.sandwiches'),
    t('common.toast'),
    t('common.bread'),
    t('common.france')
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
      "title": t('styles.bread__jeffrey_hamelman'),
      "url": ""
    },
    {
      "title": t('styles.the_taste_of_bread__raymond_calvel'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
