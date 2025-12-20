import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pain_au_chocolat: StyleDefinition = {
  "id": "pain_au_chocolat",
  "title": t('styles.pain_au_chocolat'),
  "subtitle": t('styles.viennoiserie_laminée_5'),
  "category": t('styles.pastry_8'),
  "family": t('styles.viennoiserie_laminée_6'),
  "variantName": t('styles.pain_au_chocolat_2'),
  "origin": {
    "country": t('styles.france_9'),
    "region": t('styles.francewide_2'),
    "period": "19th–20th century"
  },
  "intro": t('styles.pain_au_chocolat_intro'),
  "history": t('styles.pain_au_chocolat_history_full'),
  "culturalContext": {
    "significance": [
      t('styles.pain_au_chocolat_sig_1'),
      t('styles.pain_au_chocolat_sig_2'),
      t('styles.pain_au_chocolat_sig_3'),
      t('styles.pain_au_chocolat_sig_4'),
      t('styles.pain_au_chocolat_sig_5')
    ],
    "consumptionContext": [
      t('styles.pain_au_chocolat_consum_1'),
      t('styles.pain_au_chocolat_consum_2'),
      t('styles.pain_au_chocolat_consum_3'),
      t('styles.pain_au_chocolat_consum_4'),
      t('styles.pain_au_chocolat_consum_5')
    ],
    "evolution": [
      t('styles.pain_au_chocolat_evo_1'),
      t('styles.pain_au_chocolat_evo_2'),
      t('styles.pain_au_chocolat_evo_3'),
      t('styles.pain_au_chocolat_evo_4'),
      t('styles.pain_au_chocolat_evo_5')
    ],
    "rituals": [
      t('styles.pain_au_chocolat_ritual_1'),
      t('styles.pain_au_chocolat_ritual_2'),
      t('styles.pain_au_chocolat_ritual_3'),
      t('styles.pain_au_chocolat_ritual_4'),
      t('styles.pain_au_chocolat_ritual_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.pain_au_chocolat_flavor_1'),
      t('styles.pain_au_chocolat_flavor_2'),
      t('styles.pain_au_chocolat_flavor_3'),
      t('styles.pain_au_chocolat_flavor_4'),
      t('styles.pain_au_chocolat_flavor_5')
    ],
    "aromaProfile": [
      t('styles.pain_au_chocolat_aroma_1'),
      t('styles.pain_au_chocolat_aroma_2'),
      t('styles.pain_au_chocolat_aroma_3'),
      t('styles.pain_au_chocolat_aroma_4'),
      t('styles.pain_au_chocolat_aroma_5')
    ],
    "textureNotes": [
      t('styles.pain_au_chocolat_texture_1'),
      t('styles.pain_au_chocolat_texture_2'),
      t('styles.pain_au_chocolat_texture_3'),
      t('styles.pain_au_chocolat_texture_4'),
      t('styles.pain_au_chocolat_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.pain_au_chocolat_pair_1'),
      t('styles.pain_au_chocolat_pair_2'),
      t('styles.pain_au_chocolat_pair_3'),
      t('styles.pain_au_chocolat_pair_4'),
      t('styles.pain_au_chocolat_pair_5')
    ],
    "flavorEvolution": [
      t('styles.pain_au_chocolat_fe_1'),
      t('styles.pain_au_chocolat_fe_2'),
      t('styles.pain_au_chocolat_fe_3'),
      t('styles.pain_au_chocolat_fe_4'),
      t('styles.pain_au_chocolat_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.pain_au_chocolat_tech_1'),
    t('styles.pain_au_chocolat_tech_2'),
    t('styles.pain_au_chocolat_tech_3'),
    t('styles.pain_au_chocolat_tech_4'),
    t('styles.pain_au_chocolat_tech_5')
  ],
  "doughImpact": [
    t('styles.pain_au_chocolat_di_1'),
    t('styles.pain_au_chocolat_di_2'),
    t('styles.pain_au_chocolat_di_3'),
    t('styles.pain_au_chocolat_di_4'),
    t('styles.pain_au_chocolat_di_5')
  ],
  "bakingImpact": [
    t('styles.pain_au_chocolat_bi_1'),
    t('styles.pain_au_chocolat_bi_2'),
    t('styles.pain_au_chocolat_bi_3'),
    t('styles.pain_au_chocolat_bi_4'),
    t('styles.pain_au_chocolat_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      50,
      60
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      25,
      35
    ],
    "sugarRange": [
      5,
      12
    ],
    "flourStrength": t('styles.laminationsuitable_flour'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C pre-lamination",
      "proof": "2–3 h at 24–26°C after shaping",
      "coldRetard": t('styles.chilling_necessary_between_lamination_steps')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        190,
        210
      ],
      "notes": t('styles.baked_until_deep_golden_with_visible_layers')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.breakfast_pastry'),
      t('common.snack_pastry')
    ]
  },
  "defaults": {
    "hydration": 56,
    "salt": 1.8,
    "oil": 30,
    "sugar": 10
  },
  "regionalVariants": [
    t('styles.pain_au_chocolat_rv_1'),
    t('styles.pain_au_chocolat_rv_2'),
    t('styles.pain_au_chocolat_rv_3'),
    t('styles.pain_au_chocolat_rv_4'),
    t('styles.pain_au_chocolat_rv_5')
  ],
  "climateScenarios": [
    t('styles.pain_au_chocolat_cs_1'),
    t('styles.pain_au_chocolat_cs_2'),
    t('styles.pain_au_chocolat_cs_3'),
    t('styles.pain_au_chocolat_cs_4')
  ],
  "styleComparisons": [],
  "parameterSensitivity": [
    t('styles.pain_au_chocolat_ps_1'),
    t('styles.pain_au_chocolat_ps_2'),
    t('styles.pain_au_chocolat_ps_3'),
    t('styles.pain_au_chocolat_ps_4'),
    t('styles.pain_au_chocolat_ps_5')
  ],
  "risks": [
    t('styles.pain_au_chocolat_risk_1'),
    t('styles.pain_au_chocolat_risk_2'),
    t('styles.pain_au_chocolat_risk_3'),
    t('styles.pain_au_chocolat_risk_4'),
    t('styles.pain_au_chocolat_risk_5')
  ],
  "notes": [
    t('styles.pain_au_chocolat_note_1'),
    t('styles.pain_au_chocolat_note_2'),
    t('styles.pain_au_chocolat_note_3'),
    t('styles.pain_au_chocolat_note_4'),
    t('styles.pain_au_chocolat_note_5')
  ],
  "tags": [
    t('common.breakfast_pastry'),
    t('common.snack_pastry'),
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
      "title": t('styles.ferrandi__professional_baking_3'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_29'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.pain_au_chocolat_faq_1_q'),
      "answer": t('styles.pain_au_chocolat_faq_1_a')
    },
    {
      "question": t('styles.pain_au_chocolat_faq_2_q'),
      "answer": t('styles.pain_au_chocolat_faq_2_a')
    },
    {
      "question": t('styles.pain_au_chocolat_faq_3_q'),
      "answer": t('styles.pain_au_chocolat_faq_3_a')
    },
    {
      "question": t('styles.pain_au_chocolat_faq_4_q'),
      "answer": t('styles.pain_au_chocolat_faq_4_a')
    },
    {
      "question": t('styles.pain_au_chocolat_faq_5_q'),
      "answer": t('styles.pain_au_chocolat_faq_5_a')
    }
  ],
  "affiliateProducts": [],

  "isCanonical": true,
  "source": "official"
,
  "recommendedFlavorComponents": ["butter","sugar","vanilla","cinnamon","chocolate"]
};
