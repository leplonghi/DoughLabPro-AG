import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const bagels_classic: StyleDefinition = {
  "id": "bagels_classic",
  "title": t('styles.classic_boiled_bagels'),
  "subtitle": t('styles.specialty_breads'),
  "category": t('styles.bread_2'),
  "family": t('styles.specialty_breads_2'),
  "variantName": t('styles.classic_boiled_bagels_2'),
  "origin": {
    "country": "Poland/United States",
    "region": t('styles.jewish_baking_new_york'),
    "period": "Traditional/Modern"
  },
  "intro": "Served with spreads like cream cheese and toppings such as smoked fish, widely found in bagel shops and bakeries.",
  "history": "Bagels are dense, ring-shaped breads boiled before baking, originating from Eastern European Jewish communities and popularized in New York.",
  "technicalFoundations": [
    "Can be direct dough or use preferments; malt often included.",
    "Hydration: 55-62%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      55,
      62
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
      2,
      6
    ],
    "flourStrength": t('styles.highgluten_flour_for_chewy_texture'),
    "fermentation": {
      "bulk": "1–2 h at room temperature",
      "proof": t('styles.shaped_rings_are_often_retarded_cold_overnight'),
      "coldRetard": t('styles.common_cold_proof_before_boiling_and_baking')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        220,
        250
      ],
      "notes": "Boiled briefly (often with malt or baking soda) before baking."
    },
    "difficulty": t('styles.medium_6'),
    "recommendedUse": [
      t('common.bagels_for_breakfast_and_sandwiches')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.bagels_for_breakfast_and_sandwiches'),
    t('common.bread'),
    "Poland/United States"
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
      "title": t('styles.modernist_bread_2'),
      "url": ""
    },
    {
      "title": t('styles.jewish_and_new_york_baking_traditions'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};