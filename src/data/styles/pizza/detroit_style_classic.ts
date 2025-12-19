import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const detroit_style_classic: StyleDefinition = {
  "id": "detroit_style_classic",
  "title": t('styles.detroit_classic_title_main'),
  "subtitle": t('styles.detroit_pizza'),
  "category": t('styles.pizza_4'),
  "family": t('styles.detroit_pizza_2'),
  "variantName": t('styles.detroit_classic_title_main'),
  "origin": {
    "country": t('styles.united_states_7'),
    "region": t('styles.detroit'),
    "period": t('styles.mid_20th_century')
  },
  "intro": t('styles.detroit_intro'),
  "history": t('styles.detroit_history'),
  "culturalContext": {
    "significance": [
      t('styles.detroit_sig_1'),
      t('styles.detroit_sig_2'),
      t('styles.detroit_sig_3'),
      t('styles.detroit_sig_4'),
      t('styles.detroit_sig_5')
    ],
    "consumptionContext": [
      t('styles.detroit_consum_1'),
      t('styles.detroit_consum_2'),
      t('styles.detroit_consum_3'),
      t('styles.detroit_consum_4'),
      t('styles.detroit_consum_5')
    ],
    "evolution": [
      t('styles.detroit_evo_1'),
      t('styles.detroit_evo_2'),
      t('styles.detroit_evo_3'),
      t('styles.detroit_evo_4'),
      t('styles.detroit_evo_5'),
      t('styles.detroit_evo_6')
    ],
    "rituals": [
      t('styles.detroit_rituals_1'),
      t('styles.detroit_rituals_2'),
      t('styles.detroit_rituals_3'),
      t('styles.detroit_rituals_4'),
      t('styles.detroit_rituals_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.detroit_flavor_1'),
      t('styles.detroit_flavor_2'),
      t('styles.detroit_flavor_3'),
      t('styles.detroit_flavor_4'),
      t('styles.detroit_flavor_5')
    ],
    "aromaProfile": [
      t('styles.detroit_aroma_1'),
      t('styles.detroit_aroma_2'),
      t('styles.detroit_aroma_3'),
      t('styles.detroit_aroma_4'),
      t('styles.detroit_aroma_5')
    ],
    "textureNotes": [
      t('styles.detroit_texture_1'),
      t('styles.detroit_texture_2'),
      t('styles.detroit_texture_3'),
      t('styles.detroit_texture_4'),
      t('styles.detroit_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.detroit_pair_1'),
      t('styles.detroit_pair_2'),
      t('styles.detroit_pair_3'),
      t('styles.detroit_pair_4'),
      t('styles.detroit_pair_5')
    ],
    "flavorEvolution": [
      t('styles.detroit_fe_1'),
      t('styles.detroit_fe_2'),
      t('styles.detroit_fe_3'),
      t('styles.detroit_fe_4'),
      t('styles.detroit_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.detroit_tech_1'),
    t('styles.detroit_tech_2')
  ],
  "doughImpact": [
    t('styles.detroit_di_1'),
    t('styles.detroit_di_2'),
    t('styles.detroit_di_3'),
    t('styles.detroit_di_4'),
    t('styles.detroit_di_5')
  ],
  "bakingImpact": [
    t('styles.detroit_bi_1'),
    t('styles.detroit_bi_2'),
    t('styles.detroit_bi_3'),
    t('styles.detroit_bi_4'),
    t('styles.detroit_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      70,
      75
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      3,
      5
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.bread_flour_protein_around_1213'),
    "fermentation": {
      "bulk": t('styles.detroit_fermentation_bulk'),
      "proof": t('styles.detroit_fermentation_proof'),
      "coldRetard": t('styles.optional_overnight_in_pan')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        240,
        280
      ],
      "notes": t('styles.bluesteel_or_similar_pans_heavily_oiled_for_fried_')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.thick_pan_pizza'),
      t('styles.cheese_edge_caramelized_pizzas')
    ]
  },
  "regionalVariants": [
    t('styles.detroit_rv_1'),
    t('styles.detroit_rv_2'),
    t('styles.detroit_rv_3'),
    t('styles.detroit_rv_4')
  ],
  "climateScenarios": [
    t('styles.detroit_cs_1'),
    t('styles.detroit_cs_2'),
    t('styles.detroit_cs_3'),
    t('styles.detroit_cs_4')
  ],
  "styleComparisons": [
    t('styles.detroit_sc_1'),
    t('styles.detroit_sc_2'),
    t('styles.detroit_sc_3'),
    t('styles.detroit_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.detroit_ps_1'),
    t('styles.detroit_ps_2'),
    t('styles.detroit_ps_3'),
    t('styles.detroit_ps_4'),
    t('styles.detroit_ps_5')
  ],
  "risks": [
    t('styles.detroit_risk_1'),
    t('styles.detroit_risk_2'),
    t('styles.detroit_risk_3'),
    t('styles.detroit_risk_4'),
    t('styles.detroit_risk_5')
  ],
  "notes": [
    t('styles.detroit_note_1'),
    t('styles.detroit_note_2'),
    t('styles.detroit_note_3'),
    t('styles.detroit_note_4'),
    t('styles.detroit_note_5')
  ],
  "tags": [
    t('common.thick_pan_pizza'),
    t('styles.cheese_edge_caramelized_pizzas'),
    t('common.pizza'),
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
      "title": t('styles.modernist_pizza_3'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": t('styles.detroit_pizza_historical_accounts'),
      "url": "https://www.seriouseats.com/detroit-style-pizza-history",
      "author": "Serious Eats",
      "year": 2020
    },
    {
      "title": "The Pizza Bible",
      "url": "https://www.amazon.com/Pizza-Bible-Worlds-Favorite-Styles/dp/1607746267",
      "author": "Tony Gemignani",
      "year": 2014
    },
    {
      "title": "Detroit Pizza: A Slice of Motor City History",
      "url": "https://www.detroitnews.com/story/entertainment/dining/2019/06/13/detroit-style-pizza-history/1440564001/",
      "author": "Detroit News",
      "year": 2019
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.detroit_faq_1_q'),
      "answer": t('styles.detroit_faq_1_a')
    },
    {
      "question": t('styles.detroit_faq_2_q'),
      "answer": t('styles.detroit_faq_2_a')
    },
    {
      "question": t('styles.detroit_faq_3_q'),
      "answer": t('styles.detroit_faq_3_a')
    },
    {
      "question": t('styles.detroit_faq_4_q'),
      "answer": t('styles.detroit_faq_4_a')
    },
    {
      "question": t('styles.detroit_faq_5_q'),
      "answer": t('styles.detroit_faq_5_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
