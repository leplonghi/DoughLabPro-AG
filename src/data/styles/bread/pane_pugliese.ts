import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pane_pugliese: StyleDefinition = {
  "id": "pane_pugliese",
  "title": t('styles.pane_pugliese'),
  "subtitle": t('styles.italian_rustic__high_hydration_5'),
  "category": t('styles.bread_18'),
  "family": t('styles.italian_rustic__high_hydration_6'),
  "variantName": t('styles.pane_pugliese_2'),
  "origin": {
    "country": t('styles.italy_4'),
    "region": t('styles.puglia'),
    "period": t('styles.traditional_7')
  },
  "intro": "Served as a flavorful table bread with a chewy crumb, pairing well with olive oil and hearty dishes.",
  "history": "Pane pugliese is a rustic Italian bread from Puglia, often using high hydration and durum or blended flours.",
  "technicalFoundations": [
    "Levain or biga-based preferments are common.",
    "Hydration: 70-78%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      70,
      78
    ],
    "saltRange": [
      2,
      2.3
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      0,
      1
    ],
    "flourStrength": t('styles.blend_of_bread_flour_and_durum_wheat_flours'),
    "fermentation": {
      "bulk": "2–4 h at 23–25°C with folds",
      "proof": "45–90 min at 23–25°C",
      "coldRetard": t('styles.optional_overnight_retard')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.often_baked_as_large_loaves_with_bold_crust')
    },
    "difficulty": t('styles.hard_12'),
    "recommendedUse": [
      t('common.rustic_italian_table_bread')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.rustic_italian_table_bread'),
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
      "title": t('styles.modernist_bread_16'),
      "url": ""
    },
    {
      "title": t('styles.italian_bread_literature'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};