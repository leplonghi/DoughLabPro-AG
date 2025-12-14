import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const mixed_grain_sourdough: StyleDefinition = {
  "id": "mixed_grain_sourdough",
  "title": "Mixed Grain Sourdough (30–60% Wholegrain)",
  "subtitle": t('styles.levain__country_sourdough_3'),
  "category": t('styles.bread_13'),
  "family": t('styles.levain__country_sourdough_4'),
  "variantName": "Mixed Grain Sourdough (30–60% Wholegrain)",
  "origin": {
    "country": t('styles.global_2'),
    "region": t('styles.artisan_baking'),
    "period": t('styles.modern')
  },
  "intro": "Common in artisan bakeries and health-conscious baking, adapted with local grain blends.",
  "history": "Mixed grain sourdough loaves incorporate significant wholegrain content for flavor, nutrition and complexity.",
  "technicalFoundations": [
    "Levain 15–30%, sometimes stiff for higher wholegrain percentages.",
    "Hydration: 72-82%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      72,
      82
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      3
    ],
    "sugarRange": [
      0,
      2
    ],
    "flourStrength": "Blend of bread flour and wholegrain flours (wheat, rye, others)",
    "fermentation": {
      "bulk": "3–4 h at 24–26°C with folds",
      "proof": "1–3 h or retarded overnight",
      "coldRetard": t('styles.very_common_816_h_for_flavor')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.requires_good_steaming_scoring_adapted_to_dough_st')
    },
    "difficulty": t('styles.expert_7'),
    "recommendedUse": [
      t('common.nutritious_sourdough_loaves'),
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
    t('common.nutritious_sourdough_loaves'),
    t('common.sandwiches'),
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
      "title": t('styles.modernist_bread_12'),
      "url": ""
    },
    {
      "title": t('styles.the_sourdough_school__vanessa_kimbell'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};