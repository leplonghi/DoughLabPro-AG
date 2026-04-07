import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const hot_dog_buns_enriched: StyleDefinition = {
  "id": "hot_dog_buns_enriched",
  "title": t('styles.hot_dog_title'),
  "subtitle": t('styles.sandwich__enriched_breads_3'),
  "category": t('styles.bread_8'),
  "family": t('styles.sandwich__enriched_breads_4'),
  "variantName": t('styles.hot_dog_variant'),
  "origin": {
    "country": t('styles.united_states_2'),
    "region": t('styles.global_fast_food_2'),
    "period": "20th century"
  },
  "intro": t('styles.hot_dog_intro'),
  "history": t('styles.hot_dog_history'),
  "culturalContext": {
    "significance": [
      t('styles.hot_dog_sig_1'),
      t('styles.hot_dog_sig_2'),
      t('styles.hot_dog_sig_3'),
      t('styles.hot_dog_sig_4'),
      t('styles.hot_dog_sig_5')
    ],
    "consumptionContext": [
      t('styles.hot_dog_consum_1'),
      t('styles.hot_dog_consum_2'),
      t('styles.hot_dog_consum_3'),
      t('styles.hot_dog_consum_4'),
      t('styles.hot_dog_consum_5')
    ],
    "evolution": [
      t('styles.hot_dog_evo_1'),
      t('styles.hot_dog_evo_2'),
      t('styles.hot_dog_evo_3'),
      t('styles.hot_dog_evo_4'),
      t('styles.hot_dog_evo_5'),
      t('styles.hot_dog_evo_6')
    ],
    "rituals": [
      t('styles.hot_dog_ritual_1'),
      t('styles.hot_dog_ritual_2'),
      t('styles.hot_dog_ritual_3'),
      t('styles.hot_dog_ritual_4'),
      t('styles.hot_dog_ritual_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.hot_dog_flavor_1'),
      t('styles.hot_dog_flavor_2'),
      t('styles.hot_dog_flavor_3'),
      t('styles.hot_dog_flavor_4'),
      t('styles.hot_dog_flavor_5')
    ],
    "aromaProfile": [
      t('styles.hot_dog_aroma_1'),
      t('styles.hot_dog_aroma_2'),
      t('styles.hot_dog_aroma_3'),
      t('styles.hot_dog_aroma_4'),
      t('styles.hot_dog_aroma_5')
    ],
    "textureNotes": [
      t('styles.hot_dog_texture_1'),
      t('styles.hot_dog_texture_2'),
      t('styles.hot_dog_texture_3'),
      t('styles.hot_dog_texture_4'),
      t('styles.hot_dog_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.hot_dog_pair_1'),
      t('styles.hot_dog_pair_2'),
      t('styles.hot_dog_pair_3'),
      t('styles.hot_dog_pair_4'),
      t('styles.hot_dog_pair_5')
    ],
    "flavorEvolution": [
      t('styles.hot_dog_fe_1'),
      t('styles.hot_dog_fe_2'),
      t('styles.hot_dog_fe_3'),
      t('styles.hot_dog_fe_4'),
      t('styles.hot_dog_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.hot_dog_tech_1'),
    t('styles.hot_dog_tech_2')
  ],
  "doughImpact": [
    t('styles.hot_dog_di_1'),
    t('styles.hot_dog_di_2'),
    t('styles.hot_dog_di_3'),
    t('styles.hot_dog_di_4'),
    t('styles.hot_dog_di_5')
  ],
  "bakingImpact": [
    t('styles.hot_dog_bi_1'),
    t('styles.hot_dog_bi_2'),
    t('styles.hot_dog_bi_3'),
    t('styles.hot_dog_bi_4'),
    t('styles.hot_dog_bi_5')
  ],
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
      8,
      18
    ],
    "sugarRange": [
      5,
      12
    ],
    "flourStrength": t('styles.bread_flour_or_strong_allpurpose_flour_2'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": t('styles.hot_dog_proof'),
      "coldRetard": t('styles.optional_bulk_retard_2')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        180,
        200
      ],
      "notes": t('styles.baked_close_together_for_soft_pullapart_texture')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.hot_dog_buns'),
      t('common.sausage_rolls')
    ]
  },
  "regionalVariants": [
    t('styles.hot_dog_rv_1'),
    t('styles.hot_dog_rv_2'),
    t('styles.hot_dog_rv_3'),
    t('styles.hot_dog_rv_4'),
    t('styles.hot_dog_rv_5')
  ],
  "climateScenarios": [
    t('styles.hot_dog_cs_1'),
    t('styles.hot_dog_cs_2'),
    t('styles.hot_dog_cs_3'),
    t('styles.hot_dog_cs_4')
  ],
  "styleComparisons": [
    t('styles.hot_dog_sc_1'),
    t('styles.hot_dog_sc_2'),
    t('styles.hot_dog_sc_3'),
    t('styles.hot_dog_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.hot_dog_ps_1'),
    t('styles.hot_dog_ps_2'),
    t('styles.hot_dog_ps_3'),
    t('styles.hot_dog_ps_4'),
    t('styles.hot_dog_ps_5')
  ],
  "risks": [
    t('styles.hot_dog_risk_1'),
    t('styles.hot_dog_risk_2'),
    t('styles.hot_dog_risk_3'),
    t('styles.hot_dog_risk_4'),
    t('styles.hot_dog_risk_5')
  ],
  "notes": [
    t('styles.hot_dog_note_1'),
    t('styles.hot_dog_note_2'),
    t('styles.hot_dog_note_3'),
    t('styles.hot_dog_note_4'),
    t('styles.hot_dog_note_5')
  ],
  "tags": [
    t('common.hot_dog_buns'),
    t('common.sausage_rolls'),
    t('common.bread'),
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
      "title": t('styles.hot_dog_ref_title_1'),
      "url": "https://www.aibinternational.com/knowledge-center/",
      "author": t('styles.hot_dog_ref_auth_1'),
      "year": 2022
    },
    {
      "title": t('styles.modernist_bread_7'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.hot_dog_ref_title_3'),
      "url": "https://www.kingarthurbaking.com/recipes/hot-dog-buns-recipe",
      "author": t('styles.hot_dog_ref_auth_3'),
      "year": 2020
    },
    {
      "title": t('styles.hot_dog_ref_title_4'),
      "url": "https://www.eater.com/2016/5/17/11691230/lobster-roll-bun-new-england",
      "author": t('styles.hot_dog_ref_auth_4'),
      "year": 2016
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.hot_dog_faq_1_q'),
      "answer": t('styles.hot_dog_faq_1_a')
    },
    {
      "question": t('styles.hot_dog_faq_2_q'),
      "answer": t('styles.hot_dog_faq_2_a')
    },
    {
      "question": t('styles.hot_dog_faq_3_q'),
      "answer": t('styles.hot_dog_faq_3_a')
    },
    {
      "question": t('styles.hot_dog_faq_4_q'),
      "answer": t('styles.hot_dog_faq_4_a')
    },
    {
      "question": t('styles.hot_dog_faq_5_q'),
      "answer": t('styles.hot_dog_faq_5_a')
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
  recommendedFlavorComponents: ["sesame_seeds", "poppy_seeds"]
};
