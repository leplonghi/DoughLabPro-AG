import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const new_haven_apizza: StyleDefinition = {
  "id": "new_haven_apizza",
  "title": t('styles.new_haven_title_main'),
  "subtitle": t('styles.american_artisan_pizza_3'),
  "category": t('styles.pizza_8'),
  "family": t('styles.american_artisan_pizza_4'),
  "variantName": t('styles.new_haven_title_main'),
  "origin": {
    "country": t('styles.united_states_8'),
    "region": t('styles.new_haven_ct'),
    "period": "1920s"
  },
  "intro": t('styles.new_haven_intro'),
  "history": t('styles.new_haven_history'),
  "culturalContext": {
    "significance": [
      t('styles.new_haven_sig_1'),
      t('styles.new_haven_sig_2'),
      t('styles.new_haven_sig_3'),
      t('styles.new_haven_sig_4'),
      t('styles.new_haven_sig_5')
    ],
    "consumptionContext": [
      t('styles.new_haven_consum_1'),
      t('styles.new_haven_consum_2'),
      t('styles.new_haven_consum_3'),
      t('styles.new_haven_consum_4'),
      t('styles.new_haven_consum_5')
    ],
    "evolution": [
      t('styles.new_haven_evo_1'),
      t('styles.new_haven_evo_2'),
      t('styles.new_haven_evo_3'),
      t('styles.new_haven_evo_4'),
      t('styles.new_haven_evo_5'),
      t('styles.new_haven_evo_6')
    ],
    "rituals": [
      t('styles.new_haven_rituals_1'),
      t('styles.new_haven_rituals_2'),
      t('styles.new_haven_rituals_3'),
      t('styles.new_haven_rituals_4'),
      t('styles.new_haven_rituals_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.new_haven_flavor_1'),
      t('styles.new_haven_flavor_2'),
      t('styles.new_haven_flavor_3'),
      t('styles.new_haven_flavor_4'),
      t('styles.new_haven_flavor_5')
    ],
    "aromaProfile": [
      t('styles.new_haven_aroma_1'),
      t('styles.new_haven_aroma_2'),
      t('styles.new_haven_aroma_3'),
      t('styles.new_haven_aroma_4'),
      t('styles.new_haven_aroma_5')
    ],
    "textureNotes": [
      t('styles.new_haven_texture_1'),
      t('styles.new_haven_texture_2'),
      t('styles.new_haven_texture_3'),
      t('styles.new_haven_texture_4'),
      t('styles.new_haven_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.new_haven_pair_1'),
      t('styles.new_haven_pair_2'),
      t('styles.new_haven_pair_3'),
      t('styles.new_haven_pair_4'),
      t('styles.new_haven_pair_5')
    ],
    "flavorEvolution": [
      t('styles.new_haven_fe_1'),
      t('styles.new_haven_fe_2'),
      t('styles.new_haven_fe_3'),
      t('styles.new_haven_fe_4'),
      t('styles.new_haven_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.new_haven_tech_1'),
    t('styles.new_haven_tech_2')
  ],
  "doughImpact": [
    t('styles.new_haven_di_1'),
    t('styles.new_haven_di_2'),
    t('styles.new_haven_di_3'),
    t('styles.new_haven_di_4'),
    t('styles.new_haven_di_5')
  ],
  "bakingImpact": [
    t('styles.new_haven_bi_1'),
    t('styles.new_haven_bi_2'),
    t('styles.new_haven_bi_3'),
    t('styles.new_haven_bi_4'),
    t('styles.new_haven_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      65
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      1,
      3
    ],
    "sugarRange": [
      0,
      2
    ],
    "flourStrength": t('styles.highgluten_bread_flour'),
    "fermentation": {
      "bulk": t('styles.new_haven_fermentation_bulk'),
      "proof": t('styles.new_haven_fermentation_proof'),
      "coldRetard": t('styles.essential_for_flavor_and_char')
    },
    "oven": {
      "type": "coal_fired",
      "temperatureC": [
        300,
        350
      ],
      "notes": t('styles.coalfired_for_distinct_char_and_smokiness')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.charred_thin_crust'),
      t('common.clam_pie')
    ]
  },
  "defaults": {
    "hydration": 62,
    "salt": 2,
    "oil": 2,
    "sugar": 1
  },
  "regionalVariants": [
    t('styles.new_haven_rv_1'),
    t('styles.new_haven_rv_2'),
    t('styles.new_haven_rv_3'),
    t('styles.new_haven_rv_4'),
    t('styles.new_haven_rv_5')
  ],
  "climateScenarios": [
    t('styles.new_haven_cs_1'),
    t('styles.new_haven_cs_2'),
    t('styles.new_haven_cs_3'),
    t('styles.new_haven_cs_4')
  ],
  "styleComparisons": [
    t('styles.new_haven_sc_1'),
    t('styles.new_haven_sc_2'),
    t('styles.neapolitan_home_sc_3'),
    t('styles.new_haven_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.new_haven_ps_1'),
    t('styles.new_haven_ps_2'),
    t('styles.new_haven_ps_3'),
    t('styles.new_haven_ps_4'),
    t('styles.new_haven_ps_5')
  ],
  "risks": [
    t('styles.new_haven_risk_1'),
    t('styles.new_haven_risk_2'),
    t('styles.new_haven_risk_3'),
    t('styles.new_haven_risk_4'),
    t('styles.new_haven_risk_5')
  ],
  "notes": [
    t('styles.new_haven_note_1'),
    t('styles.new_haven_note_2'),
    t('styles.new_haven_note_3'),
    t('styles.new_haven_note_4'),
    t('styles.new_haven_note_5')
  ],
  "tags": [
    t('common.charred_thin_crust'),
    t('common.clam_pie'),
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
      "title": t('styles.modernist_pizza_6'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": "Pizza City, USA",
      "url": "https://www.stevedolinsky.com/books",
      "author": "Steve Dolinsky",
      "year": 2018
    },
    {
      "title": "Connecticut Pizza: A History of Mehal's to Pepe's",
      "url": "https://www.amazon.com/Connecticut-Pizza-History-Mehal-Pepes/dp/1467140411",
      "author": "Erik Ofgang",
      "year": 2018
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.new_haven_faq_1_q'),
      "answer": t('styles.new_haven_faq_1_a')
    },
    {
      "question": t('styles.new_haven_faq_2_q'),
      "answer": t('styles.new_haven_faq_2_a')
    },
    {
      "question": t('styles.new_haven_faq_3_q'),
      "answer": t('styles.new_haven_faq_3_a')
    },
    {
      "question": t('styles.new_haven_faq_4_q'),
      "answer": t('styles.new_haven_faq_4_a')
    },
    {
      "question": t('styles.new_haven_faq_5_q'),
      "answer": t('styles.new_haven_faq_5_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
