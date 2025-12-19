import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const new_york_slice_shop: StyleDefinition = {
  "id": "new_york_slice_shop",
  "title": t('styles.ny_slice_title_main'),
  "subtitle": t('styles.new_york_style_pizza_3'),
  "category": t('styles.pizza_10'),
  "family": t('styles.new_york_style_pizza_4'),
  "variantName": t('styles.ny_slice_title_main'),
  "origin": {
    "country": t('styles.united_states_10'),
    "region": t('styles.new_york_city_3'),
    "period": t('styles.early_20th_century')
  },
  "intro": t('styles.ny_slice_intro'),
  "history": t('styles.ny_slice_history'),
  "culturalContext": {
    "significance": [
      t('styles.ny_slice_sig_1'),
      t('styles.ny_slice_sig_2'),
      t('styles.ny_slice_sig_3'),
      t('styles.ny_slice_sig_4'),
      t('styles.ny_slice_sig_5')
    ],
    "consumptionContext": [
      t('styles.ny_slice_consum_1'),
      t('styles.ny_slice_consum_2'),
      t('styles.ny_slice_consum_3'),
      t('styles.ny_slice_consum_4'),
      t('styles.ny_slice_consum_5')
    ],
    "evolution": [
      t('styles.ny_slice_evo_1'),
      t('styles.ny_slice_evo_2'),
      t('styles.ny_slice_evo_3'),
      t('styles.ny_slice_evo_4'),
      t('styles.ny_slice_evo_5'),
      t('styles.ny_slice_evo_6')
    ],
    "rituals": [
      t('styles.ny_slice_rituals_1'),
      t('styles.ny_slice_rituals_2'),
      t('styles.ny_slice_rituals_3'),
      t('styles.ny_slice_rituals_4'),
      t('styles.ny_slice_rituals_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.ny_slice_flavor_1'),
      t('styles.ny_slice_flavor_2'),
      t('styles.ny_slice_flavor_3'),
      t('styles.ny_slice_flavor_4'),
      t('styles.ny_slice_flavor_5')
    ],
    "aromaProfile": [
      t('styles.ny_slice_aroma_1'),
      t('styles.ny_slice_aroma_2'),
      t('styles.ny_slice_aroma_3'),
      t('styles.ny_slice_aroma_4'),
      t('styles.ny_slice_aroma_5')
    ],
    "textureNotes": [
      t('styles.ny_slice_texture_1'),
      t('styles.ny_slice_texture_2'),
      t('styles.ny_slice_texture_3'),
      t('styles.ny_slice_texture_4'),
      t('styles.ny_slice_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.ny_slice_pair_1'),
      t('styles.ny_slice_pair_2'),
      t('styles.ny_slice_pair_3'),
      t('styles.ny_slice_pair_4'),
      t('styles.ny_slice_pair_5')
    ],
    "flavorEvolution": [
      t('styles.ny_slice_fe_1'),
      t('styles.ny_slice_fe_2'),
      t('styles.ny_slice_fe_3'),
      t('styles.ny_slice_fe_4'),
      t('styles.ny_slice_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.ny_slice_tech_1'),
    t('styles.ny_slice_tech_2')
  ],
  "doughImpact": [
    t('styles.ny_slice_di_1'),
    t('styles.ny_slice_di_2'),
    t('styles.ny_slice_di_3'),
    t('styles.ny_slice_di_4'),
    t('styles.ny_slice_di_5')
  ],
  "bakingImpact": [
    t('styles.ny_slice_bi_1'),
    t('styles.ny_slice_bi_2'),
    t('styles.ny_slice_bi_3'),
    t('styles.ny_slice_bi_4'),
    t('styles.ny_slice_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      58,
      62
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      2,
      5
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.ny_slice_flour_strength'),
    "fermentation": {
      "bulk": t('styles.ny_slice_fermentation_bulk'),
      "proof": t('styles.ny_slice_fermentation_proof'),
      "coldRetard": t('styles.mandatory_for_texture_and_flavor')
    },
    "oven": {
      "type": "gas_deck",
      "temperatureC": [
        280,
        315
      ],
      "notes": t('styles.baked_on_deck_for_712_minutes_must_be_crisp_enough')
    },
    "difficulty": t('styles.medium_38'),
    "recommendedUse": [
      t('styles.ny_slice_recommended_use_1'),
      t('styles.ny_slice_recommended_use_2')
    ]
  },
  "defaults": {
    "hydration": 60,
    "salt": 2.2,
    "oil": 3,
    "sugar": 2
  },
  "recommendedFlavorComponents": [
    "mozzarella_low_moisture",
    "pepperoni",
    "italian_sausage",
    "bell_pepper",
    "cogumelos",
    "pecorino_romano"
  ],
  "regionalVariants": [
    t('styles.ny_slice_rv_1'),
    t('styles.ny_slice_rv_2'),
    t('styles.ny_slice_rv_3'),
    t('styles.ny_slice_rv_4')
  ],
  "climateScenarios": [
    t('styles.ny_slice_cs_1'),
    t('styles.ny_slice_cs_2'),
    t('styles.ny_slice_cs_3'),
    t('styles.ny_slice_cs_4')
  ],
  "styleComparisons": [
    t('styles.ny_slice_sc_1'),
    t('styles.ny_slice_sc_2'),
    t('styles.ny_slice_sc_3'),
    t('styles.ny_slice_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.ny_slice_ps_1'),
    t('styles.ny_slice_ps_2'),
    t('styles.ny_slice_ps_3'),
    t('styles.ny_slice_ps_4'),
    t('styles.ny_slice_ps_5')
  ],
  "risks": [
    t('styles.ny_slice_risks_1'),
    t('styles.ny_slice_risks_2'),
    t('styles.ny_slice_risks_3'),
    t('styles.ny_slice_risks_4'),
    t('styles.ny_slice_risks_5')
  ],
  "notes": [
    t('styles.ny_slice_notes_1'),
    t('styles.ny_slice_notes_2'),
    t('styles.ny_slice_notes_3'),
    t('styles.ny_slice_notes_4'),
    t('styles.ny_slice_notes_5')
  ],
  "tags": [
    t('styles.ny_slice_tag_1'),
    t('styles.ny_slice_tag_2'),
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
      "title": t('styles.modernist_pizza_8'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": "The Pizza Bible",
      "url": "https://www.amazon.com/Pizza-Bible-Worlds-Favorite-Styles/dp/1607746267",
      "author": "Tony Gemignani",
      "year": 2014
    },
    {
      "title": "American Pie: My Search for the Perfect Pizza",
      "url": "https://www.amazon.com/American-Pie-Search-Perfect-Pizza/dp/1580084222",
      "author": "Peter Reinhart",
      "year": 2003
    },
    {
      "title": "PizzaMaking.com Forums - New York Style",
      "url": "https://www.pizzamaking.com/forum/index.php/board,31.0.html",
      "author": "Scott123 and community",
      "year": 2023
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.ny_slice_faq_1_q'),
      "answer": t('styles.ny_slice_faq_1_a')
    },
    {
      "question": t('styles.ny_slice_faq_2_q'),
      "answer": t('styles.ny_slice_faq_2_a')
    },
    {
      "question": t('styles.ny_slice_faq_3_q'),
      "answer": t('styles.ny_slice_faq_3_a')
    },
    {
      "question": t('styles.ny_slice_faq_4_q'),
      "answer": t('styles.ny_slice_faq_4_a')
    },
    {
      "question": t('styles.ny_slice_faq_5_q'),
      "answer": t('styles.ny_slice_faq_5_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
