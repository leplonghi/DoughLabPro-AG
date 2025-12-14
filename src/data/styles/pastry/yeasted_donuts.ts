import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const yeasted_donuts: StyleDefinition = {
  "id": "yeasted_donuts",
  "title": t('styles.yeasted_ring_donuts'),
  "subtitle": t('styles.fried_doughs_5'),
  "category": t('styles.pastry_12'),
  "family": t('styles.fried_doughs_6'),
  "variantName": t('styles.yeasted_ring_donuts_2'),
  "origin": {
    "country": t('styles.united_states_4'),
    "region": t('styles.globalized'),
    "period": "20th century"
  },
  "intro": t('styles.served_as_sweet_snacks_and_breakfast_items_often_g'),
  "history": "Yeasted donuts are sweet, fried rings made from enriched dough, widely popular in coffee shops and bakeries.",
  "technicalFoundations": [
    "Typically straight dough; some formulas use sponge.",
    "Hydration: 60-65%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      60,
      65
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      10,
      20
    ],
    "sugarRange": [
      10,
      20
    ],
    "flourStrength": t('styles.bread_flour_or_strong_allpurpose_flour_4'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "30–60 min after cutting, until light and puffy",
      "coldRetard": t('styles.often_retarded_for_production_convenience')
    },
    "oven": {
      "type": "fryer",
      "temperatureC": [
        170,
        180
      ],
      "notes": t('styles.fried_until_golden_on_both_sides_then_glazed_or_su')
    },
    "difficulty": t('styles.medium_31'),
    "recommendedUse": [
      t('common.fried_donuts'),
      t('common.glazed_or_filled_donuts')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.fried_donuts'),
    t('common.glazed_or_filled_donuts'),
    t('common.pastry'),
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
      "title": t('styles.aib_fryer_dough_guidelines'),
      "url": ""
    },
    {
      "title": t('styles.professional_donut_literature'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};