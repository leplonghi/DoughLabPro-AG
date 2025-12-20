import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const neapolitan_contemporary_high_hydration: StyleDefinition = {
  "id": "neapolitan_contemporary_high_hydration",
  "title": t('styles.neo_contemporary_title_main'),
  "subtitle": t('styles.neapolitan_pizza_3'),
  "category": t('styles.pizza_6'),
  "family": t('styles.neapolitan_pizza_4'),
  "variantName": t('styles.neo_contemporary_title_main'),
  "origin": {
    "country": t('styles.italy_10'),
    "region": t('styles.caserta_naples'),
    "period": "2010s–Present"
  },
  "intro": t('styles.neapolitan_contemporary_intro'),
  "history": t('styles.neapolitan_contemporary_history'),
  "culturalContext": {
    "significance": [
      t('styles.neapolitan_contemporary_sig_1'),
      t('styles.neapolitan_contemporary_sig_2'),
      t('styles.neapolitan_contemporary_sig_3'),
      t('styles.neapolitan_contemporary_sig_4'),
      t('styles.neapolitan_contemporary_sig_5')
    ],
    "consumptionContext": [
      t('styles.neapolitan_contemporary_consum_1'),
      t('styles.neapolitan_contemporary_consum_2'),
      t('styles.neapolitan_contemporary_consum_3'),
      t('styles.neapolitan_contemporary_consum_4'),
      t('styles.neapolitan_contemporary_consum_5')
    ],
    "evolution": [
      t('styles.neapolitan_contemporary_evo_1'),
      t('styles.neapolitan_contemporary_evo_2'),
      t('styles.neapolitan_contemporary_evo_3'),
      t('styles.neapolitan_contemporary_evo_4'),
      t('styles.neapolitan_contemporary_evo_5'),
      t('styles.neapolitan_contemporary_evo_6')
    ],
    "rituals": [
      t('styles.neapolitan_contemporary_rituals_1'),
      t('styles.neapolitan_contemporary_rituals_2'),
      t('styles.neapolitan_contemporary_rituals_3'),
      t('styles.neapolitan_contemporary_rituals_4'),
      t('styles.neapolitan_contemporary_rituals_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.neapolitan_contemporary_flavor_1'),
      t('styles.neapolitan_contemporary_flavor_2'),
      t('styles.neapolitan_contemporary_flavor_3'),
      t('styles.neapolitan_contemporary_flavor_4'),
      t('styles.neapolitan_contemporary_flavor_5')
    ],
    "aromaProfile": [
      t('styles.neapolitan_contemporary_aroma_1'),
      t('styles.neapolitan_contemporary_aroma_2'),
      t('styles.neapolitan_contemporary_aroma_3'),
      t('styles.neapolitan_contemporary_aroma_4'),
      t('styles.neapolitan_contemporary_aroma_5')
    ],
    "textureNotes": [
      t('styles.neapolitan_contemporary_texture_1'),
      t('styles.neapolitan_contemporary_texture_2'),
      t('styles.neapolitan_contemporary_texture_3'),
      t('styles.neapolitan_contemporary_texture_4'),
      t('styles.neapolitan_contemporary_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.neapolitan_contemporary_pair_1'),
      t('styles.neapolitan_contemporary_pair_2'),
      t('styles.neapolitan_contemporary_pair_3'),
      t('styles.neapolitan_contemporary_pair_4'),
      t('styles.neapolitan_contemporary_pair_5')
    ],
    "flavorEvolution": [
      t('styles.neapolitan_contemporary_fe_1'),
      t('styles.neapolitan_contemporary_fe_2'),
      t('styles.neapolitan_contemporary_fe_3'),
      t('styles.neapolitan_contemporary_fe_4'),
      t('styles.neapolitan_contemporary_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.neapolitan_contemporary_tech_1'),
    t('styles.neapolitan_contemporary_tech_2')
  ],
  "doughImpact": [
    t('styles.neapolitan_contemporary_di_1'),
    t('styles.neapolitan_contemporary_di_2'),
    t('styles.neapolitan_contemporary_di_3'),
    t('styles.neapolitan_contemporary_di_4'),
    t('styles.neapolitan_contemporary_di_5')
  ],
  "bakingImpact": [
    t('styles.neapolitan_contemporary_bi_1'),
    t('styles.neapolitan_contemporary_bi_2'),
    t('styles.neapolitan_contemporary_bi_3'),
    t('styles.neapolitan_contemporary_bi_4'),
    t('styles.neapolitan_contemporary_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      65,
      75
    ],
    "saltRange": [
      2.5,
      3
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      0,
      0
    ],
    "flourStrength": t('styles.neapolitan_contemporary_flour'),
    "fermentation": {
      "bulk": t('styles.variable_often_2448h_cold_fermentation_is_standard'),
      "proof": t('styles.neapolitan_contemporary_fermentation_proof'),
      "coldRetard": t('styles.neapolitan_contemporary_fermentation_cold')
    },
    "oven": {
      "type": "wood_fired",
      "temperatureC": [
        400,
        450
      ],
      "notes": t('styles.neapolitan_contemporary_oven_notes')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.gourmet_toppings'),
      t('styles.instagram_style_puffy_crusts')
    ]
  },

  "defaults": {
    "hydration": 70,
    "salt": 2.8,
    "oil": 0,
    "sugar": 0
  },
  "regionalVariants": [
    t('styles.neapolitan_contemporary_rv_1'),
    t('styles.neapolitan_contemporary_rv_2'),
    t('styles.neapolitan_contemporary_rv_3'),
    t('styles.neapolitan_contemporary_rv_4'),
    t('styles.neapolitan_contemporary_rv_5')
  ],
  "climateScenarios": [
    t('styles.neapolitan_contemporary_cs_1'),
    t('styles.neapolitan_contemporary_cs_2'),
    t('styles.neapolitan_contemporary_cs_3'),
    t('styles.neapolitan_contemporary_cs_4')
  ],
  "styleComparisons": [
    t('styles.neapolitan_contemporary_sc_1'),
    t('styles.neapolitan_contemporary_sc_2'),
    t('styles.neapolitan_contemporary_sc_3'),
    t('styles.neapolitan_contemporary_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.neapolitan_contemporary_ps_1'),
    t('styles.neapolitan_contemporary_ps_2'),
    t('styles.neapolitan_contemporary_ps_3'),
    t('styles.neapolitan_contemporary_ps_4'),
    t('styles.neapolitan_contemporary_ps_5')
  ],
  "risks": [
    t('styles.neapolitan_contemporary_risk_1'),
    t('styles.neapolitan_contemporary_risk_2'),
    t('styles.neapolitan_contemporary_risk_3'),
    t('styles.neapolitan_contemporary_risk_4'),
    t('styles.neapolitan_contemporary_risk_5')
  ],
  "notes": [
    t('styles.neapolitan_contemporary_note_1'),
    t('styles.neapolitan_contemporary_note_2'),
    t('styles.neapolitan_contemporary_note_3'),
    t('styles.neapolitan_contemporary_note_4'),
    t('styles.neapolitan_contemporary_note_5')
  ],
  "tags": [
    t('common.gourmet_toppings'),
    t('styles.instagram_style_puffy_crusts'),
    t('common.pizza'),
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
      "title": t('styles.modernist_pizza_5'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": "Pizza Contemporanea",
      "url": "https://www.gamberorosso.it/notizie/le-nuove-frontiere-della-pizza-napoletana-contemporanea/",
      "author": "Gambero Rosso",
      "year": 2022
    },
    {
      "title": "La Verità sul Canotto",
      "url": "https://www.lucianopignataro.it/a/cos-e-la-pizza-canotto-la-storia-e-le-caratteristiche/123456/",
      "author": "Luciano Pignataro",
      "year": 2017
    },
    {
      "title": "Prefermenti e Grandi Lievitati",
      "url": "https://www.amazon.it/La-Lievitazione-Piergiorgio-Giorilli/dp/8895056262",
      "author": "Piergiorgio Giorilli",
      "year": 2015
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.neapolitan_contemporary_faq_1_q'),
      "answer": t('styles.neapolitan_contemporary_faq_1_a')
    },
    {
      "question": t('styles.neapolitan_contemporary_faq_2_q'),
      "answer": t('styles.neapolitan_contemporary_faq_2_a')
    },
    {
      "question": t('styles.neapolitan_contemporary_faq_3_q'),
      "answer": t('styles.neapolitan_contemporary_faq_3_a')
    },
    {
      "question": t('styles.neapolitan_contemporary_faq_4_q'),
      "answer": t('styles.neapolitan_contemporary_faq_4_a')
    },
    {
      "question": t('styles.neapolitan_contemporary_faq_5_q'),
      "answer": t('styles.neapolitan_contemporary_faq_5_a')
    }
  ],
  "affiliateProducts": [],

  "isCanonical": true,
  "source": "official"
,
  "recommendedFlavorComponents": ["tomato_sauce","mozzarella","olive_oil","basil","oregano"]
};
