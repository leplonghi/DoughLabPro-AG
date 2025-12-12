import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const whole_wheat_100: StyleDefinition = {
  "id": "whole_wheat_100",
  "title": "100% Whole Wheat Bread",
  "subtitle": t('styles.wholegrain__rye_5'),
  "category": t('styles.bread_28'),
  "family": t('styles.wholegrain__rye_6'),
  "variantName": "100% Whole Wheat Bread",
  "origin": {
    "country": t('styles.global_3'),
    "region": t('styles.healthfocused_baking'),
    "period": t('styles.modern_2')
  },
  "intro": "Used as everyday sandwich and toast bread by those seeking higher fiber and wholegrain diets.",
  "history": "100% whole wheat breads have become common in health-conscious baking, emphasizing fiber and nutrition over volume.",
  "technicalFoundations": [
    "Can use preferments or levain to improve flavor and structure.",
    "Hydration: 70-85%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      70,
      85
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      5
    ],
    "sugarRange": [
      0,
      10
    ],
    "flourStrength": "100% whole wheat flour; quality and extraction vary",
    "fermentation": {
      "bulk": "2–4 h at 24–26°C",
      "proof": "45–90 min, often in pans",
      "coldRetard": t('styles.optional_812_h_to_improve_flavor')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        200,
        230
      ],
      "notes": t('styles.careful_baking_to_avoid_dry_crumb_pan_loaves_are_c')
    },
    "difficulty": t('styles.expert_11'),
    "recommendedUse": [
      t('common.wholegrain_sandwich_bread'),
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
    t('common.wholegrain_sandwich_bread'),
    t('common.toast'),
    t('common.bread'),
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
      "title": t('styles.modernist_bread_21'),
      "url": ""
    },
    {
      "title": t('styles.wholegrain_baking_literature'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
