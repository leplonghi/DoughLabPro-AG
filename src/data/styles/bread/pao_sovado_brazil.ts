import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pao_sovado_brazil: StyleDefinition = {
  "id": "pao_sovado_brazil",
  "title": t('styles.pão_sovado'),
  "subtitle": t('styles.brazilian_professional_breads_5'),
  "category": t('styles.bread_21'),
  "family": t('styles.brazilian_professional_breads_6'),
  "variantName": t('styles.pão_sovado_2'),
  "origin": {
    "country": t('styles.brazil_3'),
    "region": t('styles.various_regions'),
    "period": t('styles.traditional_8')
  },
  "intro": t('styles.popular_in_bakeries_and_home_consumption_as_a_brea'),
  "history": "Pão sovado is a slightly enriched, soft Brazilian bread with a tight crumb and shiny crust, shaped as elongated loaves.",
  "technicalFoundations": [
    "Usually straight dough; some use sponge.",
    "Hydration: 60-68%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      60,
      68
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      3,
      8
    ],
    "sugarRange": [
      5,
      12
    ],
    "flourStrength": t('styles.brazilian_bread_flour'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "45–90 min after shaping",
      "coldRetard": t('styles.optional_to_improve_flavor_and_scheduling')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        180,
        200
      ],
      "notes": t('styles.often_glazed_for_a_slightly_glossy_crust')
    },
    "difficulty": t('styles.medium_10'),
    "recommendedUse": [
      t('common.breakfast_bread'),
      t('common.snacks'),
      t('common.sweet_or_savory_fillings')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.breakfast_bread'),
    t('common.snacks'),
    t('common.sweet_or_savory_fillings'),
    t('common.bread'),
    t('common.brazil')
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
      "title": t('styles.senai_panificação_3'),
      "url": ""
    },
    {
      "title": t('styles.brazilian_bakery_manuals'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};