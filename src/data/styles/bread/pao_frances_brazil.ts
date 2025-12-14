import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pao_frances_brazil: StyleDefinition = {
  "id": "pao_frances_brazil",
  "title": "Pão Francês / Cacetinho",
  "subtitle": t('styles.brazilian_professional_breads_3'),
  "category": t('styles.bread_20'),
  "family": t('styles.brazilian_professional_breads_4'),
  "variantName": "Pão Francês / Cacetinho",
  "origin": {
    "country": t('styles.brazil_2'),
    "region": t('styles.nationwide_4'),
    "period": "20th century"
  },
  "intro": "A daily staple in Brazilian bakeries, eaten with butter, fillings and used in sandwiches.",
  "history": "Brazilian pão francês evolved from European lean breads into a distinct, crispy-crusted, light-crumb roll widely consumed at breakfast.",
  "technicalFoundations": [
    "Direct dough or sponge methods depending on bakery line.",
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
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": t('styles.brazilian_bread_flour_w_280330'),
    "fermentation": {
      "bulk": t('styles.short_to_medium_bulk_often_in_continuous_processes'),
      "proof": "40–80 min in proofing chambers",
      "coldRetard": t('styles.sometimes_used_to_manage_production')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        260
      ],
      "notes": t('styles.strong_steam_early_in_bake_to_create_thin_crisp_cr')
    },
    "difficulty": t('styles.medium_9'),
    "recommendedUse": [
      t('common.breakfast_rolls'),
      t('common.sandwiches'),
      t('common.everyday_bread')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.breakfast_rolls'),
    t('common.sandwiches'),
    t('common.everyday_bread'),
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
      "title": t('styles.senai_panificação_2'),
      "url": ""
    },
    {
      "title": t('styles.abip_technical_materials'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};