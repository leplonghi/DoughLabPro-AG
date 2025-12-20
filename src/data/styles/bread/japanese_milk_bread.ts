import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const japanese_milk_bread: StyleDefinition = {
  "id": "japanese_milk_bread",
  "title": t('styles.japanese_milk_bread_title'),
  "subtitle": t('styles.sandwich__enriched_breads_5'),
  "category": t('styles.bread_10'),
  "family": t('styles.sandwich__enriched_breads_6'),
  "variantName": t('styles.japanese_milk_bread_variant'),
  "origin": {
    "country": t('styles.japan'),
    "region": t('styles.east_asia'),
    "period": "20th–21st century"
  },
  "intro": t('styles.japanese_milk_bread_intro'),
  "history": t('styles.japanese_milk_bread_history'),
  "culturalContext": {
    "significance": [
      t('styles.japanese_milk_bread_sig_1'),
      t('styles.japanese_milk_bread_sig_2'),
      t('styles.japanese_milk_bread_sig_3'),
      t('styles.japanese_milk_bread_sig_4'),
      t('styles.japanese_milk_bread_sig_5')
    ],
    "consumptionContext": [
      t('styles.japanese_milk_bread_consum_1'),
      t('styles.japanese_milk_bread_consum_2'),
      t('styles.japanese_milk_bread_consum_3'),
      t('styles.japanese_milk_bread_consum_4'),
      t('styles.japanese_milk_bread_consum_5')
    ],
    "evolution": [
      t('styles.japanese_milk_bread_evo_1'),
      t('styles.japanese_milk_bread_evo_2'),
      t('styles.japanese_milk_bread_evo_3'),
      t('styles.japanese_milk_bread_evo_4'),
      t('styles.japanese_milk_bread_evo_5')
    ],
    "rituals": [
      t('styles.japanese_milk_bread_rituals_1'),
      t('styles.japanese_milk_bread_rituals_2'),
      t('styles.japanese_milk_bread_rituals_3'),
      t('styles.japanese_milk_bread_rituals_4'),
      t('styles.japanese_milk_bread_rituals_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.japanese_milk_bread_flavor_1'),
      t('styles.japanese_milk_bread_flavor_2'),
      t('styles.japanese_milk_bread_flavor_3'),
      t('styles.japanese_milk_bread_flavor_4'),
      t('styles.japanese_milk_bread_flavor_5')
    ],
    "aromaProfile": [
      t('styles.japanese_milk_bread_aroma_1'),
      t('styles.japanese_milk_bread_aroma_2'),
      t('styles.japanese_milk_bread_aroma_3'),
      t('styles.japanese_milk_bread_aroma_4'),
      t('styles.japanese_milk_bread_aroma_5')
    ],
    "textureNotes": [
      t('styles.japanese_milk_bread_texture_1'),
      t('styles.japanese_milk_bread_texture_2'),
      t('styles.japanese_milk_bread_texture_3'),
      t('styles.japanese_milk_bread_texture_4'),
      t('styles.japanese_milk_bread_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.japanese_milk_bread_pair_1'),
      t('styles.japanese_milk_bread_pair_2'),
      t('styles.japanese_milk_bread_pair_3'),
      t('styles.japanese_milk_bread_pair_4'),
      t('styles.japanese_milk_bread_pair_5')
    ],
    "flavorEvolution": [
      t('styles.japanese_milk_bread_fe_1'),
      t('styles.japanese_milk_bread_fe_2'),
      t('styles.japanese_milk_bread_fe_3'),
      t('styles.japanese_milk_bread_fe_4'),
      t('styles.japanese_milk_bread_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.japanese_milk_bread_tech_1'),
    t('styles.japanese_milk_bread_tech_2')
  ],
  "doughImpact": [
    t('styles.japanese_milk_bread_di_1'),
    t('styles.japanese_milk_bread_di_2'),
    t('styles.japanese_milk_bread_di_3'),
    t('styles.japanese_milk_bread_di_4'),
    t('styles.japanese_milk_bread_di_5')
  ],
  "bakingImpact": [
    t('styles.japanese_milk_bread_bi_1'),
    t('styles.japanese_milk_bread_bi_2'),
    t('styles.japanese_milk_bread_bi_3'),
    t('styles.japanese_milk_bread_bi_4'),
    t('styles.japanese_milk_bread_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      68,
      75
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
    "flourStrength": t('styles.bread_or_highquality_allpurpose_flour'),
    "fermentation": {
      "bulk": t('styles.japanese_milk_bread_ferm_bulk'),
      "proof": t('styles.japanese_milk_bread_ferm_proof'),
      "coldRetard": t('styles.optional_bulk_retard_to_improve_flavor')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        170,
        190
      ],
      "notes": t('styles.bake_to_golden_color_without_overdrying')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.soft_sandwich_bread'),
      t('common.toast'),
      t('common.breakfast_bread')
    ]
  },
  "regionalVariants": [
    t('styles.japanese_milk_bread_rv_1'),
    t('styles.japanese_milk_bread_rv_2'),
    t('styles.japanese_milk_bread_rv_3'),
    t('styles.japanese_milk_bread_rv_4'),
    t('styles.japanese_milk_bread_rv_5')
  ],
  "climateScenarios": [
    t('styles.japanese_milk_bread_cs_1'),
    t('styles.japanese_milk_bread_cs_2'),
    t('styles.japanese_milk_bread_cs_3'),
    t('styles.japanese_milk_bread_cs_4')
  ],
  "styleComparisons": [
    t('styles.japanese_milk_bread_sc_1'),
    t('styles.japanese_milk_bread_sc_2'),
    t('styles.japanese_milk_bread_sc_3'),
    t('styles.japanese_milk_bread_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.japanese_milk_bread_ps_1'),
    t('styles.japanese_milk_bread_ps_2'),
    t('styles.japanese_milk_bread_ps_3'),
    t('styles.japanese_milk_bread_ps_4'),
    t('styles.japanese_milk_bread_ps_5')
  ],
  "risks": [
    t('styles.japanese_milk_bread_risk_1'),
    t('styles.japanese_milk_bread_risk_2'),
    t('styles.japanese_milk_bread_risk_3'),
    t('styles.japanese_milk_bread_risk_4'),
    t('styles.japanese_milk_bread_risk_5')
  ],
  "notes": [
    t('styles.japanese_milk_bread_note_1'),
    t('styles.japanese_milk_bread_note_2'),
    t('styles.japanese_milk_bread_note_3'),
    t('styles.japanese_milk_bread_note_4'),
    t('styles.japanese_milk_bread_note_5')
  ],
  "tags": [
    t('common.soft_sandwich_bread'),
    t('common.toast'),
    t('common.breakfast_bread'),
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
      "title": "The 65°C Bread Doctor",
      "url": "https://www.worldcat.org/title/65c-tang-zhong-mian-bao/",
      "author": "Yvonne Chen",
      "year": 2007
    },
    {
      "title": t('styles.modernist_bread_9'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Bread Illustrated: Japanese Milk Bread",
      "url": "https://www.americastestkitchen.com/recipes/10292-japanese-milk-bread",
      "author": "America's Test Kitchen",
      "year": 2018
    },
    {
      "title": "King Arthur: Tangzhong Bread Technique",
      "url": "https://www.kingarthurbaking.com/blog/2018/03/26/introduction-to-tangzhong",
      "author": "King Arthur Baking",
      "year": 2018
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.japanese_milk_bread_faq_1_q'),
      "answer": t('styles.japanese_milk_bread_faq_1_a')
    },
    {
      "question": t('styles.japanese_milk_bread_faq_2_q'),
      "answer": t('styles.japanese_milk_bread_faq_2_a')
    },
    {
      "question": t('styles.japanese_milk_bread_faq_3_q'),
      "answer": t('styles.japanese_milk_bread_faq_3_a')
    },
    {
      "question": t('styles.japanese_milk_bread_faq_4_q'),
      "answer": t('styles.japanese_milk_bread_faq_4_a')
    },
    {
      "question": t('styles.japanese_milk_bread_faq_5_q'),
      "answer": t('styles.japanese_milk_bread_faq_5_a')
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
  "recommendedFlavorComponents": ["butter","olive_oil","seeds","herbs"]
};
