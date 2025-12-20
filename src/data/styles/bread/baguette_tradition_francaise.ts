import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const baguette_tradition_francaise: StyleDefinition = {
  "id": "baguette_tradition_francaise",
  "title": t('styles.baguette_tradition_française'),
  "subtitle": t('styles.french_lean_breads'),
  "category": t('styles.bread_3'),
  "family": t('styles.french_lean_breads_2'),
  "variantName": t('styles.baguette_tradition_française_2'),
  "origin": {
    "country": t('styles.france'),
    "region": t('styles.nationwide'),
    "period": "20th century"
  },
  "intro": t('styles.baguette_tradition_intro'),
  "history": t('styles.baguette_tradition_history'),
  "culturalContext": {
    "significance": [
      t('styles.baguette_tradition_sig_1'),
      t('styles.baguette_tradition_sig_2'),
      t('styles.baguette_tradition_sig_3'),
      t('styles.baguette_tradition_sig_4'),
      t('styles.baguette_tradition_sig_5')
    ],
    "consumptionContext": [
      t('styles.baguette_tradition_consum_1'),
      t('styles.baguette_tradition_consum_2'),
      t('styles.baguette_tradition_consum_3'),
      t('styles.baguette_tradition_consum_4'),
      t('styles.baguette_tradition_consum_5')
    ],
    "evolution": [
      t('styles.baguette_tradition_evo_1'),
      t('styles.baguette_tradition_evo_2'),
      t('styles.baguette_tradition_evo_3'),
      t('styles.baguette_tradition_evo_4'),
      t('styles.baguette_tradition_evo_5'),
      t('styles.baguette_tradition_evo_6')
    ],
    "rituals": [
      t('styles.baguette_tradition_rituals_1'),
      t('styles.baguette_tradition_rituals_2'),
      t('styles.baguette_tradition_rituals_3'),
      t('styles.baguette_tradition_rituals_4'),
      t('styles.baguette_tradition_rituals_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.baguette_tradition_flavor_1'),
      t('styles.baguette_tradition_flavor_2'),
      t('styles.baguette_tradition_flavor_3'),
      t('styles.baguette_tradition_flavor_4'),
      t('styles.baguette_tradition_flavor_5')
    ],
    "aromaProfile": [
      t('styles.baguette_tradition_aroma_1'),
      t('styles.baguette_tradition_aroma_2'),
      t('styles.baguette_tradition_aroma_3'),
      t('styles.baguette_tradition_aroma_4'),
      t('styles.baguette_tradition_aroma_5')
    ],
    "textureNotes": [
      t('styles.baguette_tradition_texture_1'),
      t('styles.baguette_tradition_texture_2'),
      t('styles.baguette_tradition_texture_3'),
      t('styles.baguette_tradition_texture_4'),
      t('styles.baguette_tradition_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.baguette_tradition_pair_1'),
      t('styles.baguette_tradition_pair_2'),
      t('styles.baguette_tradition_pair_3'),
      t('styles.baguette_tradition_pair_4'),
      t('styles.baguette_tradition_pair_5')
    ],
    "flavorEvolution": [
      t('styles.baguette_tradition_fe_1'),
      t('styles.baguette_tradition_fe_2'),
      t('styles.baguette_tradition_fe_3'),
      t('styles.baguette_tradition_fe_4'),
      t('styles.baguette_tradition_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.baguette_tradition_tf_1'),
    t('styles.baguette_tradition_tf_2')
  ],
  "doughImpact": [
    t('styles.baguette_tradition_di_1'),
    t('styles.baguette_tradition_di_2'),
    t('styles.baguette_tradition_di_3'),
    t('styles.baguette_tradition_di_4'),
    t('styles.baguette_tradition_di_5')
  ],
  "bakingImpact": [
    t('styles.baguette_tradition_bi_1'),
    t('styles.baguette_tradition_bi_2'),
    t('styles.baguette_tradition_bi_3'),
    t('styles.baguette_tradition_bi_4'),
    t('styles.baguette_tradition_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      65,
      72
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      0
    ],
    "sugarRange": [
      0,
      0.5
    ],
    "flourStrength": t('styles.baguette_tradition_flour_strength'),
    "fermentation": {
      "bulk": "2–4 h at 23–25°C with folds, or partially retarded",
      "proof": "45–75 min at 23–25°C",
      "coldRetard": t('styles.optional_overnight_retard_for_flavor')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.requires_strong_steam_at_the_beginning_of_the_bake')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.daily_table_bread'),
      t('common.sandwiches'),
      t('common.toast')
    ]
  },
  "defaults": {
    "hydration": 68,
    "salt": 2,
    "oil": 0,
    "sugar": 0
  },
  "regionalVariants": [
    t('styles.baguette_tradition_rv_1'),
    t('styles.baguette_tradition_rv_2'),
    t('styles.baguette_tradition_rv_3'),
    t('styles.baguette_tradition_rv_4'),
    t('styles.baguette_tradition_rv_5')
  ],
  "climateScenarios": [
    t('styles.baguette_tradition_cs_1'),
    t('styles.baguette_tradition_cs_2'),
    t('styles.baguette_tradition_cs_3'),
    t('styles.baguette_tradition_cs_4')
  ],
  "styleComparisons": [
    t('styles.baguette_tradition_sc_1'),
    t('styles.baguette_tradition_sc_2'),
    t('styles.baguette_tradition_sc_3'),
    t('styles.baguette_tradition_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.baguette_tradition_ps_1'),
    t('styles.baguette_tradition_ps_2'),
    t('styles.baguette_tradition_ps_3'),
    t('styles.baguette_tradition_ps_4'),
    t('styles.baguette_tradition_ps_5')
  ],
  "risks": [
    t('styles.baguette_tradition_risk_1'),
    t('styles.baguette_tradition_risk_2'),
    t('styles.baguette_tradition_risk_3'),
    t('styles.baguette_tradition_risk_4'),
    t('styles.baguette_tradition_risk_5')
  ],
  "notes": [
    t('styles.baguette_tradition_note_1'),
    t('styles.baguette_tradition_note_2'),
    t('styles.baguette_tradition_note_3'),
    t('styles.baguette_tradition_note_4'),
    t('styles.baguette_tradition_note_5')
  ],
  "tags": [
    t('common.daily_table_bread'),
    t('common.sandwiches'),
    t('common.toast'),
    t('common.bread'),
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
      "title": t('styles.bread__jeffrey_hamelman'),
      "url": "https://www.amazon.com/Bread-Bakers-Book-Techniques-Recipes/dp/1118132718",
      "author": "Jeffrey Hamelman",
      "year": 2012
    },
    {
      "title": t('styles.the_taste_of_bread__raymond_calvel'),
      "url": "https://www.amazon.com/Taste-Bread-Raymond-Calvel/dp/0834216469",
      "author": "Raymond Calvel",
      "year": 2001
    },
    {
      "title": "Modernist Bread",
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "The French Baker's Handbook",
      "url": "https://www.amazon.com/French-Bakers-Handbook-Artisan-Breads/dp/1624143547",
      "author": "Ferrandi Paris",
      "year": 2018
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.baguette_tradition_faq_1_q'),
      "answer": t('styles.baguette_tradition_faq_1_a')
    },
    {
      "question": t('styles.baguette_tradition_faq_2_q'),
      "answer": t('styles.baguette_tradition_faq_2_a')
    },
    {
      "question": t('styles.baguette_tradition_faq_3_q'),
      "answer": t('styles.baguette_tradition_faq_3_a')
    },
    {
      "question": t('styles.baguette_tradition_faq_4_q'),
      "answer": t('styles.baguette_tradition_faq_4_a')
    },
    {
      "question": t('styles.baguette_tradition_faq_5_q'),
      "answer": t('styles.baguette_tradition_faq_5_a')
    }
  ],
  "affiliateProducts": [],

  "isCanonical": true,
  "source": "official"
,
  "recommendedFlavorComponents": ["butter","olive_oil","seeds","herbs"]
};
