import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const japanese_shokupan: StyleDefinition = {
  "id": "japanese_shokupan",
  "title": t('styles.shokupan_title'),
  "subtitle": t('styles.asian_milk_bread'),
  "category": t('styles.bread_11'),
  "family": t('styles.asian_milk_bread_2'),
  "variantName": t('styles.shokupan_variant'),
  "origin": {
    "country": t('styles.japan_2'),
    "region": t('styles.nationwide_2'),
    "period": "20th century"
  },
  "intro": t('styles.shokupan_intro'),
  "history": t('styles.shokupan_history'),
  "culturalContext": {
    "significance": [
      t('styles.shokupan_sig_1'),
      t('styles.shokupan_sig_2'),
      t('styles.shokupan_sig_3'),
      t('styles.shokupan_sig_4'),
      t('styles.shokupan_sig_5')
    ],
    "consumptionContext": [
      t('styles.shokupan_consum_1'),
      t('styles.shokupan_consum_2'),
      t('styles.shokupan_consum_3'),
      t('styles.shokupan_consum_4'),
      t('styles.shokupan_consum_5')
    ],
    "evolution": [
      t('styles.shokupan_evo_1'),
      t('styles.shokupan_evo_2'),
      t('styles.shokupan_evo_3'),
      t('styles.shokupan_evo_4'),
      t('styles.shokupan_evo_5'),
      t('styles.shokupan_evo_6')
    ],
    "rituals": [
      t('styles.shokupan_ritual_1'),
      t('styles.shokupan_ritual_2'),
      t('styles.shokupan_ritual_3'),
      t('styles.shokupan_ritual_4'),
      t('styles.shokupan_ritual_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.shokupan_flavor_1'),
      t('styles.shokupan_flavor_2'),
      t('styles.shokupan_flavor_3'),
      t('styles.shokupan_flavor_4'),
      t('styles.shokupan_flavor_5')
    ],
    "aromaProfile": [
      t('styles.shokupan_aroma_1'),
      t('styles.shokupan_aroma_2'),
      t('styles.shokupan_aroma_3'),
      t('styles.shokupan_aroma_4'),
      t('styles.shokupan_aroma_5')
    ],
    "textureNotes": [
      t('styles.shokupan_texture_1'),
      t('styles.shokupan_texture_2'),
      t('styles.shokupan_texture_3'),
      t('styles.shokupan_texture_4'),
      t('styles.shokupan_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.shokupan_pair_1'),
      t('styles.shokupan_pair_2'),
      t('styles.shokupan_pair_3'),
      t('styles.shokupan_pair_4'),
      t('styles.shokupan_pair_5')
    ],
    "flavorEvolution": [
      t('styles.shokupan_fe_1'),
      t('styles.shokupan_fe_2'),
      t('styles.shokupan_fe_3'),
      t('styles.shokupan_fe_4'),
      t('styles.shokupan_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.shokupan_tech_1'),
    t('styles.shokupan_tech_2')
  ],
  "doughImpact": [
    t('styles.shokupan_di_1'),
    t('styles.shokupan_di_2'),
    t('styles.shokupan_di_3'),
    t('styles.shokupan_di_4'),
    t('styles.shokupan_di_5')
  ],
  "bakingImpact": [
    t('styles.shokupan_bi_1'),
    t('styles.shokupan_bi_2'),
    t('styles.shokupan_bi_3'),
    t('styles.shokupan_bi_4'),
    t('styles.shokupan_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      70,
      78
    ],
    "saltRange": [
      1.8,
      2
    ],
    "oilRange": [
      6,
      10
    ],
    "sugarRange": [
      6,
      12
    ],
    "flourStrength": t('styles.highprotein_bread_flour'),
    "fermentation": {
      "bulk": t('styles.shokupan_bulk'),
      "proof": t('styles.shokupan_proof'),
      "coldRetard": t('styles.optional')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        180,
        200
      ],
      "notes": t('styles.baked_gently_to_avoid_thick_crust_often_lidded_for')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.sandwiches'),
      t('common.thick_toast'),
      t('common.dessert_bread')
    ]
  },
  "regionalVariants": [
    t('styles.shokupan_rv_1'),
    t('styles.shokupan_rv_2'),
    t('styles.shokupan_rv_3'),
    t('styles.shokupan_rv_4'),
    t('styles.shokupan_rv_5')
  ],
  "climateScenarios": [
    t('styles.shokupan_cs_1'),
    t('styles.shokupan_cs_2'),
    t('styles.shokupan_cs_3'),
    t('styles.shokupan_cs_4')
  ],
  "styleComparisons": [
    t('styles.shokupan_sc_1'),
    t('styles.shokupan_sc_2'),
    t('styles.shokupan_sc_3'),
    t('styles.shokupan_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.shokupan_ps_1'),
    t('styles.shokupan_ps_2'),
    t('styles.shokupan_ps_3'),
    t('styles.shokupan_ps_4'),
    t('styles.shokupan_ps_5')
  ],
  "risks": [
    t('styles.shokupan_risk_1'),
    t('styles.shokupan_risk_2'),
    t('styles.shokupan_risk_3'),
    t('styles.shokupan_risk_4'),
    t('styles.shokupan_risk_5')
  ],
  "notes": [
    t('styles.shokupan_note_1'),
    t('styles.shokupan_note_2'),
    t('styles.shokupan_note_3'),
    t('styles.shokupan_note_4'),
    t('styles.shokupan_note_5')
  ],
  "tags": [
    t('common.sandwiches'),
    t('common.thick_toast'),
    t('common.dessert_bread'),
    t('common.bread'),
    t('common.japan')
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
      "title": t('styles.modernist_bread_10'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.shokupan_ref_title_2'),
      "url": "https://www.kingarthurbaking.com/blog/2018/03/26/introduction-to-tangzhong",
      "author": t('styles.shokupan_ref_auth_2'),
      "year": 2018
    },
    {
      "title": t('styles.shokupan_ref_title_3'),
      "url": "https://www.amazon.com/Japan-Cookbook-Nancy-Singleton-Hachisu/dp/0714874741",
      "author": t('styles.shokupan_ref_auth_3'),
      "year": 2018
    },
    {
      "title": t('styles.shokupan_ref_title_4'),
      "url": "https://www.justonecookbook.com/japanese-milk-bread-shokupan/",
      "author": t('styles.shokupan_ref_auth_4'),
      "year": 2020
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.shokupan_faq_1_q'),
      "answer": t('styles.shokupan_faq_1_a')
    },
    {
      "question": t('styles.shokupan_faq_2_q'),
      "answer": t('styles.shokupan_faq_2_a')
    },
    {
      "question": t('styles.shokupan_faq_3_q'),
      "answer": t('styles.shokupan_faq_3_a')
    },
    {
      "question": t('styles.shokupan_faq_4_q'),
      "answer": t('styles.shokupan_faq_4_a')
    },
    {
      "question": t('styles.shokupan_faq_5_q'),
      "answer": t('styles.shokupan_faq_5_a')
    }
  ],
  "affiliateProducts": [],

  "isCanonical": true,
  "source": "official"
  ,
  "defaults": {
    "hydration": 70,
    "salt": 2,
    "oil": 0,
    "sugar": 0
  },
  recommendedFlavorComponents: ["salted_butter_normandy", "honey_raw"]
};
