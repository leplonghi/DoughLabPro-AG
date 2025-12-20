import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const ciabatta_high_hydration: StyleDefinition = {
  "id": "ciabatta_high_hydration",
  "title": t('styles.ciabatta_title'),
  "subtitle": t('styles.italian_rustic__high_hydration'),
  "category": t('styles.bread_5'),
  "family": t('styles.italian_rustic__high_hydration_2'),
  "variantName": t('styles.ciabatta_variant_name'),
  "origin": {
    "country": t('styles.italy_2'),
    "region": t('styles.northern_italy'),
    "period": t('styles.late_20th_century')
  },
  "intro": t('styles.ciabatta_intro'),
  "history": t('styles.ciabatta_history'),
  "culturalContext": {
    "significance": [
      t('styles.ciabatta_sig_1'),
      t('styles.ciabatta_sig_2'),
      t('styles.ciabatta_sig_3'),
      t('styles.ciabatta_sig_4'),
      t('styles.ciabatta_sig_5')
    ],
    "consumptionContext": [
      t('styles.ciabatta_consum_1'),
      t('styles.ciabatta_consum_2'),
      t('styles.ciabatta_consum_3'),
      t('styles.ciabatta_consum_4'),
      t('styles.ciabatta_consum_5')
    ],
    "evolution": [
      t('styles.ciabatta_evo_1'),
      t('styles.ciabatta_evo_2'),
      t('styles.ciabatta_evo_3'),
      t('styles.ciabatta_evo_4'),
      t('styles.ciabatta_evo_5'),
      t('styles.ciabatta_evo_6')
    ],
    "rituals": [
      t('styles.ciabatta_ritual_1'),
      t('styles.ciabatta_ritual_2'),
      t('styles.ciabatta_ritual_3'),
      t('styles.ciabatta_ritual_4'),
      t('styles.ciabatta_ritual_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.ciabatta_flavor_1'),
      t('styles.ciabatta_flavor_2'),
      t('styles.ciabatta_flavor_3'),
      t('styles.ciabatta_flavor_4'),
      t('styles.ciabatta_flavor_5')
    ],
    "aromaProfile": [
      t('styles.ciabatta_aroma_1'),
      t('styles.ciabatta_aroma_2'),
      t('styles.ciabatta_aroma_3'),
      t('styles.ciabatta_aroma_4'),
      t('styles.ciabatta_aroma_5')
    ],
    "textureNotes": [
      t('styles.ciabatta_texture_1'),
      t('styles.ciabatta_texture_2'),
      t('styles.ciabatta_texture_3'),
      t('styles.ciabatta_texture_4'),
      t('styles.ciabatta_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.ciabatta_pair_1'),
      t('styles.ciabatta_pair_2'),
      t('styles.ciabatta_pair_3'),
      t('styles.ciabatta_pair_4'),
      t('styles.ciabatta_pair_5')
    ],
    "flavorEvolution": [
      t('styles.ciabatta_fe_1'),
      t('styles.ciabatta_fe_2'),
      t('styles.ciabatta_fe_3'),
      t('styles.ciabatta_fe_4'),
      t('styles.ciabatta_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.ciabatta_foundations_1'),
    t('styles.ciabatta_foundations_2')
  ],
  "doughImpact": [
    t('styles.ciabatta_di_1'),
    t('styles.ciabatta_di_2'),
    t('styles.ciabatta_di_3'),
    t('styles.ciabatta_di_4'),
    t('styles.ciabatta_di_5')
  ],
  "bakingImpact": [
    t('styles.ciabatta_bi_1'),
    t('styles.ciabatta_bi_2'),
    t('styles.ciabatta_bi_3'),
    t('styles.ciabatta_bi_4'),
    t('styles.ciabatta_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      75,
      80
    ],
    "saltRange": [
      2,
      2.2
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      0,
      1
    ],
    "flourStrength": t('styles.strong_bread_flour_w_260300'),
    "fermentation": {
      "bulk": t('styles.ciabatta_bulk'),
      "proof": t('styles.ciabatta_proof'),
      "coldRetard": t('styles.optional_812_h_for_flavor')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.bake_with_good_steam_handle_gently_to_preserve_gas')
    },
    "difficulty": t('styles.difficulty_expert'),
    "recommendedUse": [
      t('common.sandwich_bread'),
      t('common.bruschetta'),
      t('common.rustic_table_bread')
    ]
  },
  "defaults": {
    "hydration": 78,
    "salt": 2,
    "oil": 1,
    "sugar": 0
  },
  "regionalVariants": [
    t('styles.ciabatta_rv_1'),
    t('styles.ciabatta_rv_2'),
    t('styles.ciabatta_rv_3'),
    t('styles.ciabatta_rv_4'),
    t('styles.ciabatta_rv_5')
  ],
  "climateScenarios": [
    t('styles.ciabatta_cs_1'),
    t('styles.ciabatta_cs_2'),
    t('styles.ciabatta_cs_3'),
    t('styles.ciabatta_cs_4')
  ],
  "styleComparisons": [
    t('styles.ciabatta_sc_1'),
    t('styles.ciabatta_sc_2'),
    t('styles.ciabatta_sc_3'),
    t('styles.ciabatta_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.ciabatta_ps_1'),
    t('styles.ciabatta_ps_2'),
    t('styles.ciabatta_ps_3'),
    t('styles.ciabatta_ps_4'),
    t('styles.ciabatta_ps_5')
  ],
  "risks": [
    t('styles.ciabatta_risk_1'),
    t('styles.ciabatta_risk_2'),
    t('styles.ciabatta_risk_3'),
    t('styles.ciabatta_risk_4'),
    t('styles.ciabatta_risk_5')
  ],
  "notes": [
    t('styles.ciabatta_note_1'),
    t('styles.ciabatta_note_2'),
    t('styles.ciabatta_note_3'),
    t('styles.ciabatta_note_4'),
    t('styles.ciabatta_note_5')
  ],
  "tags": [
    t('common.sandwich_bread'),
    t('common.bruschetta'),
    t('common.rustic_table_bread'),
    t('common.bread'),
    t('common.italy')
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
      "title": t('styles.bread__jeffrey_hamelman_2'),
      "url": "https://www.amazon.com/Bread-Bakers-Book-Techniques-Recipes/dp/1118132718",
      "author": "Jeffrey Hamelman",
      "year": 2012
    },
    {
      "title": t('styles.modernist_bread_4'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Arnaldo Cavallari: The Man Who Invented Ciabatta",
      "url": "https://www.theflourmillingjournal.com/history/cavallari-ciabatta",
      "author": "Italian Bakers Guild",
      "year": 2021
    },
    {
      "title": "The Village Baker",
      "url": "https://www.amazon.com/Village-Baker-Classic-Regional-Europe/dp/0898154157",
      "author": "Joe Ortiz",
      "year": 1993
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.ciabatta_faq_1_q'),
      "answer": t('styles.ciabatta_faq_1_a')
    },
    {
      "question": t('styles.ciabatta_faq_2_q'),
      "answer": t('styles.ciabatta_faq_2_a')
    },
    {
      "question": t('styles.ciabatta_faq_3_q'),
      "answer": t('styles.ciabatta_faq_3_a')
    },
    {
      "question": t('styles.ciabatta_faq_4_q'),
      "answer": t('styles.ciabatta_faq_4_a')
    },
    {
      "question": t('styles.ciabatta_faq_5_q'),
      "answer": t('styles.ciabatta_faq_5_a')
    }
  ],
  "affiliateProducts": [],

  "isCanonical": true,
  "source": "official"
,
  "recommendedFlavorComponents": ["butter","olive_oil","seeds","herbs"]
};
