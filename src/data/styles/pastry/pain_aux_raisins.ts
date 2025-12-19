import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pain_aux_raisins: StyleDefinition = {
  "id": "pain_aux_raisins",
  "title": t('styles.pain_aux_raisins'),
  "subtitle": t('styles.viennoiserie_laminée_3'),
  "category": t('styles.pastry_7'),
  "family": t('styles.viennoiserie_laminée_4'),
  "variantName": t('styles.pain_aux_raisins_2'),
  "origin": {
    "country": t('styles.france_8'),
    "region": t('styles.francewide'),
    "period": "20th century"
  },
  "intro": t('styles.served_as_a_sweet_breakfast_or_snack_pastry_in_fre'),
  "history": "Pain aux raisins is a laminated or enriched dough rolled with pastry cream and raisins, often using similar base dough to croissant.",
  "technicalFoundations": [
    "Derived from croissant-type doughs or enriched brioche-like doughs.",
    "Hydration: 55-65%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      55,
      65
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      20,
      30
    ],
    "sugarRange": [
      10,
      20
    ],
    "flourStrength": t('styles.bread_or_strong_pastry_flour_2'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "1.5–3 h depending on formulation",
      "coldRetard": t('styles.often_chilled_before_slicing_and_baking')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        185,
        200
      ],
      "notes": t('styles.must_balance_bake_to_avoid_burning_sugars')
    },
    "difficulty": t('styles.medium_28'),
    "recommendedUse": [
      t('common.sweet_breakfast_pastry'),
      t('common.viennoiserie_item')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.sweet_breakfast_pastry'),
    t('common.viennoiserie_item'),
    t('common.pastry'),
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
      "title": t('styles.ferrandi__professional_baking_2'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_28'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
