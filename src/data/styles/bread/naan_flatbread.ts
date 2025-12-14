import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const naan_flatbread: StyleDefinition = {
  "id": "naan_flatbread",
  "title": "Naan (Yogurt-Enriched Flatbread)",
  "subtitle": t('styles.classic_flatbreads_7'),
  "category": t('styles.bread_14'),
  "family": t('styles.classic_flatbreads_8'),
  "variantName": "Naan (Yogurt-Enriched Flatbread)",
  "origin": {
    "country": "India / Central Asia",
    "region": t('styles.south_and_central_asia'),
    "period": t('styles.traditional_5')
  },
  "intro": t('styles.served_with_curries_and_grilled_dishes_in_indian_a'),
  "history": "Naan is a soft, leavened flatbread often enriched with yogurt or milk, traditionally baked in tandoor ovens.",
  "technicalFoundations": [
    "Yeast-based; sometimes uses yogurt as mild acidity and enrichment.",
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
      5,
      15
    ],
    "sugarRange": [
      2,
      8
    ],
    "flourStrength": t('styles.allpurpose_or_bread_flour'),
    "fermentation": {
      "bulk": "1–2 h at warm room temperature",
      "proof": t('styles.short_rest_after_shaping'),
      "coldRetard": t('styles.optional_overnight_bulk_for_flavor')
    },
    "oven": {
      "type": "tandoor_or_hot_surface",
      "temperatureC": [
        300,
        450
      ],
      "notes": t('styles.home_versions_use_very_hot_cast_iron_pans_or_stone')
    },
    "difficulty": t('styles.hard_8'),
    "recommendedUse": [
      t('common.accompaniment_to_curries'),
      t('common.flatbread_for_dipping')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.accompaniment_to_curries'),
    t('common.flatbread_for_dipping'),
    t('common.bread'),
    "India / Central Asia"
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
      "title": t('styles.south_asian_bread_literature'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_13'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};