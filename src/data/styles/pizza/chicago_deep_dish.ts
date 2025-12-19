import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const chicago_deep_dish: StyleDefinition = {
  "id": "chicago_deep_dish",
  "title": t('styles.chicago_deep_dish'),
  "subtitle": t('styles.american_pan_pizza'),
  "category": t('styles.pizza_3'),
  "family": t('styles.american_pan_pizza_2'),
  "variantName": t('styles.chicago_deep_dish_2'),
  "origin": {
    "country": t('styles.united_states_6'),
    "region": t('styles.chicago_2'),
    "period": t('styles.1940s_mid_20th_century')
  },
  "intro": t('styles.a_hearty_knifeandfork_meal_iconic_to_chicago_culin'),
  "history": t('styles.chicago_history'),
  "culturalContext": {
    "significance": [
      t('styles.chicago_sig_1'),
      t('styles.chicago_sig_2'),
      t('styles.chicago_sig_3'),
      t('styles.chicago_sig_4'),
      t('styles.chicago_sig_5')
    ],
    "consumptionContext": [
      t('styles.chicago_consum_1'),
      t('styles.chicago_consum_2'),
      t('styles.chicago_consum_3'),
      t('styles.chicago_consum_4'),
      t('styles.chicago_consum_5')
    ],
    "evolution": [
      t('styles.chicago_evo_1'),
      t('styles.chicago_evo_2'),
      t('styles.chicago_evo_3'),
      t('styles.chicago_evo_4'),
      t('styles.chicago_evo_5'),
      t('styles.chicago_evo_6')
    ],
    "rituals": [
      t('styles.chicago_rituals_1'),
      t('styles.chicago_rituals_2'),
      t('styles.chicago_rituals_3'),
      t('styles.chicago_rituals_4'),
      t('styles.chicago_rituals_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.chicago_flavor_1'),
      t('styles.chicago_flavor_2'),
      t('styles.chicago_flavor_3'),
      t('styles.chicago_flavor_4'),
      t('styles.chicago_flavor_5')
    ],
    "aromaProfile": [
      t('styles.chicago_aroma_1'),
      t('styles.chicago_aroma_2'),
      t('styles.chicago_aroma_3'),
      t('styles.chicago_aroma_4'),
      t('styles.chicago_aroma_5')
    ],
    "textureNotes": [
      t('styles.chicago_texture_1'),
      t('styles.chicago_texture_2'),
      t('styles.chicago_texture_3'),
      t('styles.chicago_texture_4'),
      t('styles.chicago_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.chicago_pair_1'),
      t('styles.chicago_pair_2'),
      t('styles.chicago_pair_3'),
      t('styles.chicago_pair_4'),
      t('styles.chicago_pair_5')
    ],
    "flavorEvolution": [
      t('styles.chicago_fe_1'),
      t('styles.chicago_fe_2'),
      t('styles.chicago_fe_3'),
      t('styles.chicago_fe_4'),
      t('styles.chicago_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.chicago_tech_1'),
    t('styles.chicago_tech_2')
  ],
  "doughImpact": [
    t('styles.chicago_di_1'),
    t('styles.chicago_di_2'),
    t('styles.chicago_di_3'),
    t('styles.chicago_di_4'),
    t('styles.chicago_di_5')
  ],
  "bakingImpact": [
    t('styles.chicago_bi_1'),
    t('styles.chicago_bi_2'),
    t('styles.chicago_bi_3'),
    t('styles.chicago_bi_4'),
    t('styles.chicago_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      50,
      60
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      15,
      20
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.chicago_flour'),
    "fermentation": {
      "bulk": t('styles.chicago_fermentation_bulk'),
      "proof": t('styles.chicago_fermentation_proof'),
      "coldRetard": t('styles.optional_overnight')
    },
    "oven": {
      "type": "gas_deck",
      "temperatureC": [
        200,
        230
      ],
      "notes": t('styles.chicago_oven_notes')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.deep_dish_pizza'),
      t('styles.casserole_style_pizza')
    ]
  },
  "regionalVariants": [
    t('styles.chicago_rv_1'),
    t('styles.chicago_rv_2'),
    t('styles.chicago_rv_3'),
    t('styles.chicago_rv_4')
  ],
  "climateScenarios": [
    t('styles.chicago_cs_1'),
    t('styles.chicago_cs_2'),
    t('styles.chicago_cs_3'),
    t('styles.chicago_cs_4')
  ],
  "styleComparisons": [
    t('styles.chicago_sc_1'),
    t('styles.chicago_sc_2'),
    t('styles.chicago_sc_3'),
    t('styles.chicago_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.chicago_ps_1'),
    t('styles.chicago_ps_2'),
    t('styles.chicago_ps_3'),
    t('styles.chicago_ps_4'),
    t('styles.chicago_ps_5')
  ],
  "risks": [
    t('styles.chicago_risk_1'),
    t('styles.chicago_risk_2'),
    t('styles.chicago_risk_3'),
    t('styles.chicago_risk_4'),
    t('styles.chicago_risk_5')
  ],
  "notes": [
    t('styles.chicago_note_1'),
    t('styles.chicago_note_2'),
    t('styles.chicago_note_3'),
    t('styles.chicago_note_4'),
    t('styles.chicago_note_5')
  ],
  "tags": [
    t('common.deep_dish_pizza'),
    t('styles.casserole_style_pizza'),
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
      "title": t('styles.modernist_pizza_2'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": t('styles.chicago_pizza_history'),
      "url": "https://www.choosechicago.com/articles/food-drink/chicago-pizza-history/",
      "author": "Choose Chicago",
      "year": 2023
    },
    {
      "title": "The Pizza Bible",
      "url": "https://www.amazon.com/Pizza-Bible-Worlds-Favorite-Styles/dp/1607746267",
      "author": "Tony Gemignani",
      "year": 2014
    },
    {
      "title": "Pizza: A Slice of American History",
      "url": "https://www.smithsonianmag.com/arts-culture/pizza-a-slice-of-american-history-21474158/",
      "author": "Liz Ronk",
      "year": 2012
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.chicago_faq_1_q'),
      "answer": t('styles.chicago_faq_1_a')
    },
    {
      "question": t('styles.chicago_faq_2_q'),
      "answer": t('styles.chicago_faq_2_a')
    },
    {
      "question": t('styles.chicago_faq_3_q'),
      "answer": t('styles.chicago_faq_3_a')
    },
    {
      "question": t('styles.chicago_faq_4_q'),
      "answer": t('styles.chicago_faq_4_a')
    },
    {
      "question": t('styles.chicago_faq_5_q'),
      "answer": t('styles.chicago_faq_5_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
