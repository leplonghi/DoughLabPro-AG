import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const seventy_percent_rye_sour: StyleDefinition = {
  "id": "seventy_percent_rye_sour",
  "title": "70% Rye Sour Bread",
  "subtitle": t('styles.wholegrain__rye'),
  "category": t('styles.bread_24'),
  "family": t('styles.wholegrain__rye_2'),
  "variantName": "70% Rye Sour Bread",
  "origin": {
    "country": t('styles.germany_2'),
    "region": t('styles.central_europe'),
    "period": t('styles.traditional_10')
  },
  "intro": t('styles.consumed_as_dense_flavorful_loaves_sliced_thin_oft'),
  "history": "High-percentage rye sour breads are traditional in Central and Northern Europe, using rye sourdough for structure and flavor.",
  "technicalFoundations": [
    "Rye sour at 30–50% of total rye flour.",
    "Hydration: 80-90%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      80,
      90
    ],
    "saltRange": [
      1.8,
      2
    ],
    "oilRange": [
      0,
      3
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": "70% rye, 30% wheat or bread flour",
    "fermentation": {
      "bulk": t('styles.short_bulk_much_development_occurs_in_sour_build'),
      "proof": "50–90 min in pans or forms",
      "coldRetard": t('styles.occasional_short_retards_possible')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        200,
        220
      ],
      "notes": t('styles.longer_bake_to_set_crumb_often_rested_before_slici')
    },
    "difficulty": t('styles.expert_8'),
    "recommendedUse": [
      t('common.traditional_rye_loaves'),
      t('common.cold_cuts_and_cheese')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.traditional_rye_loaves'),
    t('common.cold_cuts_and_cheese'),
    t('common.bread'),
    t('common.germany')
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
      "title": t('styles.bread__jeffrey_hamelman_5'),
      "url": ""
    },
    {
      "title": t('styles.german_rye_bread_standards'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};