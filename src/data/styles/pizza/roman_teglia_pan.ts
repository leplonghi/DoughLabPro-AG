import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const roman_teglia_pan: StyleDefinition = {
  "id": "roman_teglia_pan",
  "title": t('styles.roman_teglia_pan_title'),
  "subtitle": t('styles.roman_pan_pizza'),
  "category": t('styles.pizza_12'),
  "family": t('styles.roman_pan_pizza_2'),
  "variantName": t('styles.roman_teglia_variant'),
  "origin": {
    "country": t('styles.italy_12'),
    "region": t('styles.rome_2'),
    "period": t('styles.late_20th_century_3')
  },
  "intro": t('styles.roman_teglia_intro'),
  "history": t('styles.roman_teglia_history'),
  "culturalContext": {
    "significance": [
      t('styles.roman_teglia_sig_1'),
      t('styles.roman_teglia_sig_2'),
      t('styles.roman_teglia_sig_3'),
      t('styles.roman_teglia_sig_4'),
      t('styles.roman_teglia_sig_5')
    ],
    "consumptionContext": [
      t('styles.roman_teglia_consum_1'),
      t('styles.roman_teglia_consum_2'),
      t('styles.roman_teglia_consum_3'),
      t('styles.roman_teglia_consum_4'),
      t('styles.roman_teglia_consum_5')
    ],
    "evolution": [
      t('styles.roman_teglia_evo_1'),
      t('styles.roman_teglia_evo_2'),
      t('styles.roman_teglia_evo_3'),
      t('styles.roman_teglia_evo_4'),
      t('styles.roman_teglia_evo_5'),
      t('styles.roman_teglia_evo_6')
    ],
    "rituals": [
      t('styles.roman_teglia_rituals_1'),
      t('styles.roman_teglia_rituals_2'),
      t('styles.roman_teglia_rituals_3'),
      t('styles.roman_teglia_rituals_4'),
      t('styles.roman_teglia_rituals_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.roman_teglia_flavor_1'),
      t('styles.roman_teglia_flavor_2'),
      t('styles.roman_teglia_flavor_3'),
      t('styles.roman_teglia_flavor_4'),
      t('styles.roman_teglia_flavor_5')
    ],
    "aromaProfile": [
      t('styles.roman_teglia_aroma_1'),
      t('styles.roman_teglia_aroma_2'),
      t('styles.roman_teglia_aroma_3'),
      t('styles.roman_teglia_aroma_4'),
      t('styles.roman_teglia_aroma_5')
    ],
    "textureNotes": [
      t('styles.roman_teglia_texture_1'),
      t('styles.roman_teglia_texture_2'),
      t('styles.roman_teglia_texture_3'),
      t('styles.roman_teglia_texture_4'),
      t('styles.roman_teglia_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.roman_teglia_pair_1'),
      t('styles.roman_teglia_pair_2'),
      t('styles.roman_teglia_pair_3'),
      t('styles.roman_teglia_pair_4'),
      t('styles.roman_teglia_pair_5')
    ],
    "flavorEvolution": [
      t('styles.roman_teglia_fe_1'),
      t('styles.roman_teglia_fe_2'),
      t('styles.roman_teglia_fe_3'),
      t('styles.roman_teglia_fe_4'),
      t('styles.roman_teglia_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.roman_teglia_tech_1'),
    t('styles.roman_teglia_tech_2')
  ],
  "doughImpact": [
    t('styles.roman_teglia_dough_impact_1'),
    t('styles.roman_teglia_dough_impact_2'),
    t('styles.roman_teglia_dough_impact_3'),
    t('styles.roman_teglia_dough_impact_4'),
    t('styles.roman_teglia_dough_impact_5')
  ],
  "bakingImpact": [
    t('styles.roman_teglia_baking_impact_1'),
    t('styles.roman_teglia_baking_impact_2'),
    t('styles.roman_teglia_baking_impact_3'),
    t('styles.roman_teglia_baking_impact_4'),
    t('styles.roman_teglia_baking_impact_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      75,
      85
    ],
    "saltRange": [
      2.3,
      2.8
    ],
    "oilRange": [
      3,
      5
    ],
    "sugarRange": [
      0,
      2
    ],
    "flourStrength": t('styles.strong_bread_or_pizza_flour_w_300340'),
    "fermentation": {
      "bulk": t('styles.roman_teglia_ferm_bulk'),
      "proof": t('styles.roman_teglia_ferm_proof'),
      "coldRetard": t('styles.common_for_flavor_and_extensibility')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        240,
        280
      ],
      "notes": t('styles.baked_in_oiled_rectangular_pans_sometimes_in_two_s')
    },
    "difficulty": t('styles.difficulty_advanced'),
    "recommendedUse": [
      t('common.roman_pan_pizza'),
      t('styles.roman_teglia_utils_usage_2')
    ]
  },
  "regionalVariants": [
    t('styles.roman_teglia_rv_1'),
    t('styles.roman_teglia_rv_2'),
    t('styles.roman_teglia_rv_3'),
    t('styles.roman_teglia_rv_4'),
    t('styles.roman_teglia_rv_5')
  ],
  "climateScenarios": [
    t('styles.roman_teglia_cs_1'),
    t('styles.roman_teglia_cs_2'),
    t('styles.roman_teglia_cs_3'),
    t('styles.roman_teglia_cs_4')
  ],
  "styleComparisons": [
    t('styles.roman_teglia_sc_1'),
    t('styles.roman_teglia_sc_2'),
    t('styles.roman_teglia_sc_3'),
    t('styles.roman_teglia_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.roman_teglia_ps_1'),
    t('styles.roman_teglia_ps_2'),
    t('styles.roman_teglia_ps_3'),
    t('styles.roman_teglia_ps_4'),
    t('styles.roman_teglia_ps_5')
  ],
  "risks": [
    t('styles.roman_teglia_risks_1'),
    t('styles.roman_teglia_risks_2'),
    t('styles.roman_teglia_risks_3'),
    t('styles.roman_teglia_risks_4'),
    t('styles.roman_teglia_risks_5')
  ],
  "notes": [
    t('styles.roman_teglia_notes_1'),
    t('styles.roman_teglia_notes_2'),
    t('styles.roman_teglia_notes_3'),
    t('styles.roman_teglia_notes_4'),
    t('styles.roman_teglia_notes_5')
  ],
  "tags": [
    t('common.roman_pan_pizza'),
    t('styles.roman_teglia_tag_2'),
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
      "title": t('styles.modernist_pizza_10'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": "Il Gioco della Pizza",
      "url": "https://www.rizzolilibri.it/libri/il-gioco-della-pizza-bonci/",
      "author": "Gabriele Bonci",
      "year": 2012
    },
    {
      "title": "Pizza: Roman Art",
      "url": "https://www.amazon.com/Pizza-Roman-Art-Angelo-Iezzi/dp/8895056262",
      "author": "Angelo Iezzi",
      "year": 2008
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.roman_teglia_faq_1_q'),
      "answer": t('styles.roman_teglia_faq_1_a')
    },
    {
      "question": t('styles.roman_teglia_faq_2_q'),
      "answer": t('styles.roman_teglia_faq_2_a')
    },
    {
      "question": t('styles.roman_teglia_faq_3_q'),
      "answer": t('styles.roman_teglia_faq_3_a')
    },
    {
      "question": t('styles.roman_teglia_faq_4_q'),
      "answer": t('styles.roman_teglia_faq_4_a')
    },
    {
      "question": t('styles.roman_teglia_faq_5_q'),
      "answer": t('styles.roman_teglia_faq_5_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
