import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const neapolitan_avpn_classic: StyleDefinition = {
  "id": "neapolitan_avpn_classic",
  "title": t('styles.neapolitan_avpn_classic'),
  "subtitle": t('styles.neapolitan_pizza'),
  "category": t('styles.pizza_5'),
  "family": t('styles.neapolitan_pizza_2'),
  "variantName": t('styles.neapolitan_avpn_classic_2'),
  "origin": {
    "country": t('styles.italy_9'),
    "region": t('styles.naples'),
    "period": "18th–19th century (Codified 1984)"
  },
  "intro": t('styles.neapolitan_intro'),
  "history": t('styles.neapolitan_history'),
  "culturalContext": {
    "significance": [
      t('styles.neapolitan_sig_1'),
      t('styles.neapolitan_sig_2'),
      t('styles.neapolitan_sig_3'),
      t('styles.neapolitan_sig_4'),
      t('styles.neapolitan_sig_5')
    ],
    "consumptionContext": [
      t('styles.neapolitan_consum_1'),
      t('styles.neapolitan_consum_2'),
      t('styles.neapolitan_consum_3'),
      t('styles.neapolitan_consum_4'),
      t('styles.neapolitan_consum_5')
    ],
    "evolution": [
      t('styles.neapolitan_evo_1'),
      t('styles.neapolitan_evo_2'),
      t('styles.neapolitan_evo_3'),
      t('styles.neapolitan_evo_4'),
      t('styles.neapolitan_evo_5'),
      t('styles.neapolitan_evo_6')
    ],
    "rituals": [
      t('styles.neapolitan_rituals_1'),
      t('styles.neapolitan_rituals_2'),
      t('styles.neapolitan_rituals_3'),
      t('styles.neapolitan_rituals_4'),
      t('styles.neapolitan_rituals_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.neapolitan_flavor_1'),
      t('styles.neapolitan_flavor_2'),
      t('styles.neapolitan_flavor_3'),
      t('styles.neapolitan_flavor_4'),
      t('styles.neapolitan_flavor_5')
    ],
    "aromaProfile": [
      t('styles.neapolitan_aroma_1'),
      t('styles.neapolitan_aroma_2'),
      t('styles.neapolitan_aroma_3'),
      t('styles.neapolitan_aroma_4'),
      t('styles.neapolitan_aroma_5')
    ],
    "textureNotes": [
      t('styles.neapolitan_texture_1'),
      t('styles.neapolitan_texture_2'),
      t('styles.neapolitan_texture_3'),
      t('styles.neapolitan_texture_4'),
      t('styles.neapolitan_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.neapolitan_pair_1'),
      t('styles.neapolitan_pair_2'),
      t('styles.neapolitan_pair_3'),
      t('styles.neapolitan_pair_4'),
      t('styles.neapolitan_pair_5')
    ],
    "flavorEvolution": [
      t('styles.neapolitan_fe_1'),
      t('styles.neapolitan_fe_2'),
      t('styles.neapolitan_fe_3'),
      t('styles.neapolitan_fe_4')
    ]
  },
  "technicalFoundations": [
    t('styles.neapolitan_tech_1'),
    t('styles.neapolitan_tech_2')
  ],
  "doughImpact": [
    t('styles.neapolitan_di_1'),
    t('styles.neapolitan_di_2'),
    t('styles.neapolitan_di_3'),
    t('styles.neapolitan_di_4'),
    t('styles.neapolitan_di_5')
  ],
  "bakingImpact": [
    t('styles.neapolitan_bi_1'),
    t('styles.neapolitan_bi_2'),
    t('styles.neapolitan_bi_3'),
    t('styles.neapolitan_bi_4'),
    t('styles.neapolitan_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      58,
      62.5
    ],
    "saltRange": [
      2.5,
      3
    ],
    "oilRange": [
      0,
      0
    ],
    "sugarRange": [
      0,
      0
    ],
    "flourStrength": t('styles.neapolitan_flour'),
    "fermentation": {
      "bulk": t('styles.neapolitan_fermentation_bulk'),
      "proof": t('styles.neapolitan_fermentation_proof'),
      "coldRetard": t('styles.traditionally_not_used_modern_avpn_rules_allow_it')
    },
    "oven": {
      "type": "wood_fired",
      "temperatureC": [
        430,
        485
      ],
      "notes": t('styles.dome_temp_485c_floor_430c_cook_time_strictly_6090_')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.authentic_neapolitan_margherita'),
      t('common.marinara')
    ]
  },
  "defaults": {
    "hydration": 60,
    "salt": 2.8,
    "oil": 0,
    "sugar": 0
  },
  "recommendedFlavorComponents": [
    "fior_di_latte",
    "garlic_oregano",
    "parmesan",
    "anchovies",
    "cherry_tomatoes"
  ],
  "regionalVariants": [
    t('styles.neapolitan_rv_1'),
    t('styles.neapolitan_rv_2'),
    t('styles.neapolitan_rv_3'),
    t('styles.neapolitan_rv_4')
  ],
  "climateScenarios": [
    t('styles.neapolitan_cs_1'),
    t('styles.neapolitan_cs_2'),
    t('styles.neapolitan_cs_3'),
    t('styles.neapolitan_cs_4')
  ],
  "styleComparisons": [
    t('styles.neapolitan_sc_1'),
    t('styles.neapolitan_sc_2'),
    t('styles.neapolitan_sc_3'),
    t('styles.neapolitan_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.neapolitan_ps_1'),
    t('styles.neapolitan_ps_2'),
    t('styles.neapolitan_ps_3'),
    t('styles.neapolitan_ps_4'),
    t('styles.neapolitan_ps_5')
  ],
  "risks": [
    t('styles.neapolitan_risk_1'),
    t('styles.neapolitan_risk_2'),
    t('styles.neapolitan_risk_3'),
    t('styles.neapolitan_risk_4'),
    t('styles.neapolitan_risk_5')
  ],
  "notes": [
    t('styles.neapolitan_note_1'),
    t('styles.neapolitan_note_2'),
    t('styles.neapolitan_note_3'),
    t('styles.neapolitan_note_4'),
    t('styles.neapolitan_note_5')
  ],
  "tags": [
    t('common.authentic_neapolitan_margherita'),
    t('common.marinara'),
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
      "title": t('styles.avpn_international_regulations'),
      "url": "https://www.pizzanapoletana.org/en/ricetta_pizza_napoletana",
      "author": "Associazione Verace Pizza Napoletana",
      "year": 2022
    },
    {
      "title": t('styles.modernist_pizza_4'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": t('styles.unesco_intangible_cultural_heritage'),
      "url": "https://ich.unesco.org/en/RL/art-of-neapolitan-pizzaiuolo-00722",
      "author": "UNESCO",
      "year": 2017
    },
    {
      "title": "The Pizza Bible",
      "url": "https://www.amazon.com/Pizza-Bible-Worlds-Favorite-Styles/dp/1607746267",
      "author": "Tony Gemignani",
      "year": 2014
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.neapolitan_faq_1_q'),
      "answer": t('styles.neapolitan_faq_1_a')
    },
    {
      "question": t('styles.neapolitan_faq_2_q'),
      "answer": t('styles.neapolitan_faq_2_a')
    },
    {
      "question": t('styles.neapolitan_faq_3_q'),
      "answer": t('styles.neapolitan_faq_3_a')
    },
    {
      "question": t('styles.neapolitan_faq_4_q'),
      "answer": t('styles.neapolitan_faq_4_a')
    },
    {
      "question": t('styles.neapolitan_faq_5_q'),
      "answer": t('styles.neapolitan_faq_5_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
