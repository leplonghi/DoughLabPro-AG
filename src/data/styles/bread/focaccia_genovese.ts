import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const focaccia_genovese: StyleDefinition = {
  "id": "focaccia_genovese",
  "title": t('styles.focaccia_genovese'),
  "subtitle": t('styles.italian_rustic__high_hydration_3'),
  "category": t('styles.bread_6'),
  "family": t('styles.italian_rustic__high_hydration_4'),
  "variantName": t('styles.focaccia_genovese_2'),
  "origin": {
    "country": t('styles.italy_3'),
    "region": "Liguria (Genoa)",
    "period": t('styles.traditional_2')
  },
  "intro": t('styles.focaccia_intro'),
  "history": t('styles.focaccia_history'),
  "culturalContext": {
    "significance": [
      t('styles.focaccia_sig_1'),
      t('styles.focaccia_sig_2'),
      t('styles.focaccia_sig_3'),
      t('styles.focaccia_sig_4'),
      t('styles.focaccia_sig_5')
    ],
    "consumptionContext": [
      t('styles.focaccia_consum_1'),
      t('styles.focaccia_consum_2'),
      t('styles.focaccia_consum_3'),
      t('styles.focaccia_consum_4'),
      t('styles.focaccia_consum_5')
    ],
    "evolution": [
      t('styles.focaccia_evo_1'),
      t('styles.focaccia_evo_2'),
      t('styles.focaccia_evo_3'),
      t('styles.focaccia_evo_4'),
      t('styles.focaccia_evo_5'),
      t('styles.focaccia_evo_6')
    ],
    "rituals": [
      t('styles.focaccia_ritual_1'),
      t('styles.focaccia_ritual_2'),
      t('styles.focaccia_ritual_3'),
      t('styles.focaccia_ritual_4'),
      t('styles.focaccia_ritual_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.focaccia_flavor_1'),
      t('styles.focaccia_flavor_2'),
      t('styles.focaccia_flavor_3'),
      t('styles.focaccia_flavor_4'),
      t('styles.focaccia_flavor_5')
    ],
    "aromaProfile": [
      t('styles.focaccia_aroma_1'),
      t('styles.focaccia_aroma_2'),
      t('styles.focaccia_aroma_3'),
      t('styles.focaccia_aroma_4'),
      t('styles.focaccia_aroma_5')
    ],
    "textureNotes": [
      t('styles.focaccia_texture_1'),
      t('styles.focaccia_texture_2'),
      t('styles.focaccia_texture_3'),
      t('styles.focaccia_texture_4'),
      t('styles.focaccia_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.focaccia_pair_1'),
      t('styles.focaccia_pair_2'),
      t('styles.focaccia_pair_3'),
      t('styles.focaccia_pair_4'),
      t('styles.focaccia_pair_5')
    ],
    "flavorEvolution": [
      t('styles.focaccia_fe_1'),
      t('styles.focaccia_fe_2'),
      t('styles.focaccia_fe_3'),
      t('styles.focaccia_fe_4'),
      t('styles.focaccia_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.focaccia_foundations_1'),
    t('styles.focaccia_foundations_2')
  ],
  "doughImpact": [
    t('styles.focaccia_di_1'),
    t('styles.focaccia_di_2'),
    t('styles.focaccia_di_3'),
    t('styles.focaccia_di_4'),
    t('styles.focaccia_di_5')
  ],
  "bakingImpact": [
    t('styles.focaccia_bi_1'),
    t('styles.focaccia_bi_2'),
    t('styles.focaccia_bi_3'),
    t('styles.focaccia_bi_4'),
    t('styles.focaccia_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      70,
      80
    ],
    "saltRange": [
      2.5,
      3
    ],
    "oilRange": [
      5,
      10
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_bread_flour_medium_strength'),
    "fermentation": {
      "bulk": t('styles.focaccia_bulk'),
      "proof": t('styles.focaccia_proof'),
      "coldRetard": t('styles.often_824_h_for_depth_of_flavor')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        220,
        250
      ],
      "notes": t('styles.baked_in_oiled_sheet_pans_for_crisp_bottom_and_ten')
    },
    "difficulty": t('styles.difficulty_expert'),
    "recommendedUse": [
      t('common.flatbread_snack'),
      t('common.table_bread'),
      t('common.sandwich_base')
    ]
  },
  "defaults": {
    "hydration": 75,
    "salt": 2.5,
    "oil": 6,
    "sugar": 1
  },
  "regionalVariants": [
    t('styles.focaccia_rv_1'),
    t('styles.focaccia_rv_2'),
    t('styles.focaccia_rv_3'),
    t('styles.focaccia_rv_4'),
    t('styles.focaccia_rv_5')
  ],
  "climateScenarios": [
    t('styles.focaccia_cs_1'),
    t('styles.focaccia_cs_2'),
    t('styles.focaccia_cs_3'),
    t('styles.focaccia_cs_4')
  ],
  "styleComparisons": [
    t('styles.focaccia_sc_1'),
    t('styles.focaccia_sc_2'),
    t('styles.focaccia_sc_3'),
    t('styles.focaccia_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.focaccia_ps_1'),
    t('styles.focaccia_ps_2'),
    t('styles.focaccia_ps_3'),
    t('styles.focaccia_ps_4'),
    t('styles.focaccia_ps_5')
  ],
  "risks": [
    t('styles.focaccia_risk_1'),
    t('styles.focaccia_risk_2'),
    t('styles.focaccia_risk_3'),
    t('styles.focaccia_risk_4'),
    t('styles.focaccia_risk_5')
  ],
  "notes": [
    t('styles.focaccia_note_1'),
    t('styles.focaccia_note_2'),
    t('styles.focaccia_note_3'),
    t('styles.focaccia_note_4'),
    t('styles.focaccia_note_5')
  ],
  "tags": [
    t('common.flatbread_snack'),
    t('common.table_bread'),
    t('common.sandwich_base'),
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
      "title": t('styles.modernist_bread_5'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "La Focaccia di Genova",
      "url": "https://www.panificatori.it/focaccia-genovese/",
      "author": "Associazione Panificatori di Genova",
      "year": 2022
    },
    {
      "title": "Cucinare in Liguria",
      "url": "https://www.amazon.it/Cucinare-Liguria-Ricette-Liguri-Tradizionali/dp/8876483562",
      "author": "Enzo Rossi",
      "year": 1995
    },
    {
      "title": "Savouring Italy",
      "url": "https://www.amazon.com/Savouring-Italy-Michele-Scicolone/dp/1875169680",
      "author": "Michele Scicolone",
      "year": 1999
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.focaccia_faq_1_q'),
      "answer": t('styles.focaccia_faq_1_a')
    },
    {
      "question": t('styles.focaccia_faq_2_q'),
      "answer": t('styles.focaccia_faq_2_a')
    },
    {
      "question": t('styles.focaccia_faq_3_q'),
      "answer": t('styles.focaccia_faq_3_a')
    },
    {
      "question": t('styles.focaccia_faq_4_q'),
      "answer": t('styles.focaccia_faq_4_a')
    },
    {
      "question": t('styles.focaccia_faq_5_q'),
      "answer": t('styles.focaccia_faq_5_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
