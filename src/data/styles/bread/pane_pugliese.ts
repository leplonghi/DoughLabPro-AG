import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pane_pugliese: StyleDefinition = {
  "id": "pane_pugliese",
  "title": t('styles.pane_pugliese'),
  "subtitle": t('styles.italian_rustic__high_hydration_5'),
  "category": t('styles.bread_18'),
  "family": t('styles.italian_rustic__high_hydration_6'),
  "variantName": t('styles.pane_pugliese_2'),
  "origin": {
    "country": t('styles.italy_4'),
    "region": t('styles.puglia'),
    "period": t('styles.traditional_7')
  },
  "intro": t('styles.pane_pugliese_intro'),
  "history": t('styles.pane_pugliese_history'),
  "culturalContext": {
    "significance": [
      t('styles.pane_pugliese_sig_1'),
      t('styles.pane_pugliese_sig_2'),
      t('styles.pane_pugliese_sig_3'),
      t('styles.pane_pugliese_sig_4'),
      t('styles.pane_pugliese_sig_5')
    ],
    "consumptionContext": [
      t('styles.pane_pugliese_cons_1'),
      t('styles.pane_pugliese_cons_2'),
      t('styles.pane_pugliese_cons_3'),
      t('styles.pane_pugliese_cons_4'),
      t('styles.pane_pugliese_cons_5')
    ],
    "evolution": [
      t('styles.pane_pugliese_evo_1'),
      t('styles.pane_pugliese_evo_2'),
      t('styles.pane_pugliese_evo_3'),
      t('styles.pane_pugliese_evo_4'),
      t('styles.pane_pugliese_evo_5'),
      t('styles.pane_pugliese_evo_6')
    ],
    "rituals": [
      t('styles.pane_pugliese_rit_1'),
      t('styles.pane_pugliese_rit_2'),
      t('styles.pane_pugliese_rit_3'),
      t('styles.pane_pugliese_rit_4'),
      t('styles.pane_pugliese_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.pane_pugliese_flav_1'),
      t('styles.pane_pugliese_flav_2'),
      t('styles.pane_pugliese_flav_3'),
      t('styles.pane_pugliese_flav_4'),
      t('styles.pane_pugliese_flav_5')
    ],
    "aromaProfile": [
      t('styles.pane_pugliese_aroma_1'),
      t('styles.pane_pugliese_aroma_2'),
      t('styles.pane_pugliese_aroma_3'),
      t('styles.pane_pugliese_aroma_4'),
      t('styles.pane_pugliese_aroma_5')
    ],
    "textureNotes": [
      t('styles.pane_pugliese_text_1'),
      t('styles.pane_pugliese_text_2'),
      t('styles.pane_pugliese_text_3'),
      t('styles.pane_pugliese_text_4'),
      t('styles.pane_pugliese_text_5')
    ],
    "pairingRecommendations": [
      t('styles.pane_pugliese_pair_1'),
      t('styles.pane_pugliese_pair_2'),
      t('styles.pane_pugliese_pair_3'),
      t('styles.pane_pugliese_pair_4'),
      t('styles.pane_pugliese_pair_5')
    ],
    "flavorEvolution": [
      t('styles.pane_pugliese_fevo_1'),
      t('styles.pane_pugliese_fevo_2'),
      t('styles.pane_pugliese_fevo_3'),
      t('styles.pane_pugliese_fevo_4'),
      t('styles.pane_pugliese_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Levain or biga-based preferments are common.",
    "Hydration: 70-78%"
  ],
  "doughImpact": [
    "Inclusion of Remilled Durum Wheat (Semola Rimacinata) provides the yellow color and nutty sweetness",
    "High hydration (70-78%) is necessary because durum flour absorbs much more water than soft wheat",
    "Use of Lievito Madre (sourdough) or a Biga provides the enzymes needed for the long shelf life",
    "Durum gluten is strong but can be 'brittle'; requires gentle handling during the final shape",
    "Extended bulk fermentation (3-4h) allows the coarse semola particles to fully hydrate"
  ],
  "bakingImpact": [
    "Baked as very large loaves (1kg+) to preserve internal moisture over many days",
    "High initial deck heat is required to penetrate the large mass of the dense durum dough",
    "Early steam is vital, but the bake is finished 'dry' to harden the famously thick crust",
    "A 'Bold Bake' strategy—taking the crust to a dark espresso color for maximum flavor",
    "Long bake times (45-60 mins) are necessary for the heat to reach the center of the giant loaves"
  ],
  "technicalProfile": {
    "hydrationRange": [
      70,
      78
    ],
    "saltRange": [
      2,
      2.3
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      0,
      1
    ],
    "flourStrength": t('styles.blend_of_bread_flour_and_durum_wheat_flours'),
    "fermentation": {
      "bulk": t('styles.pane_pugliese_ferm_bulk'),
      "proof": t('styles.pane_pugliese_ferm_proof'),
      "coldRetard": t('styles.optional_overnight_retard')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.often_baked_as_large_loaves_with_bold_crust')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.rustic_italian_table_bread')
    ]
  },
  "regionalVariants": [
    t('styles.pane_pugliese_var_1'),
    t('styles.pane_pugliese_var_2'),
    t('styles.pane_pugliese_var_3'),
    t('styles.pane_pugliese_var_4'),
    t('styles.pane_pugliese_var_5')
  ],
  "climateScenarios": [
    t('styles.pane_pugliese_clim_1'),
    t('styles.pane_pugliese_clim_2'),
    t('styles.pane_pugliese_clim_3'),
    t('styles.pane_pugliese_clim_4')
  ],
  "styleComparisons": [
    t('styles.pane_pugliese_comp_1'),
    t('styles.pane_pugliese_comp_2'),
    t('styles.pane_pugliese_comp_3'),
    t('styles.pane_pugliese_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.pane_pugliese_sens_1'),
    t('styles.pane_pugliese_sens_2'),
    t('styles.pane_pugliese_sens_3'),
    t('styles.pane_pugliese_sens_4'),
    t('styles.pane_pugliese_sens_5')
  ],
  "risks": [
    t('styles.pane_pugliese_risk_1'),
    t('styles.pane_pugliese_risk_2'),
    t('styles.pane_pugliese_risk_3'),
    t('styles.pane_pugliese_risk_4'),
    t('styles.pane_pugliese_risk_5')
  ],
  "notes": [
    t('styles.pane_pugliese_note_1'),
    t('styles.pane_pugliese_note_2'),
    t('styles.pane_pugliese_note_3'),
    t('styles.pane_pugliese_note_4'),
    t('styles.pane_pugliese_note_5')
  ],
  "tags": [
    t('common.rustic_italian_table_bread'),
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
      "title": t('styles.modernist_bread_16'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.pane_pugliese_title'),
      "url": "https://www.panealtamuradop.it/en/history/",
      "author": "Consortium of Pane di Altamura",
      "year": 2023
    },
    {
      "title": t('styles.pane_pugliese_title'),
      "url": "https://www.amazon.com/Encyclopedia-Pasta-Bread-Italian-Heritage/dp/0520255931",
      "author": "Oretta Zanini De Vita",
      "year": 2009
    },
    {
      "title": t('styles.pane_pugliese_title'),
      "url": "https://www.mulinocaputo.it/en/flours",
      "author": "Antimo Caputo",
      "year": 2021
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.pane_pugliese_faq_1_q'),
      "answer": t('styles.pane_pugliese_faq_1_a')
    },
    {
      "question": t('styles.pane_pugliese_faq_2_q'),
      "answer": t('styles.pane_pugliese_faq_2_a')
    },
    {
      "question": t('styles.pane_pugliese_faq_3_q'),
      "answer": t('styles.pane_pugliese_faq_3_a')
    },
    {
      "question": t('styles.pane_pugliese_faq_4_q'),
      "answer": t('styles.pane_pugliese_faq_4_a')
    },
    {
      "question": t('styles.pane_pugliese_faq_5_q'),
      "answer": t('styles.pane_pugliese_faq_5_a')
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
