import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const heirloom_levain_loaf: StyleDefinition = {
  "id": "heirloom_levain_loaf",
  "title": t('styles.heirloom_grain_levain_loaf'),
  "subtitle": t('styles.levain__country_sourdough'),
  "category": t('styles.bread_7'),
  "family": t('styles.levain__country_sourdough_2'),
  "variantName": t('styles.heirloom_grain_levain_loaf_2'),
  "origin": {
    "country": t('styles.global'),
    "region": t('styles.local_grain_movements'),
    "period": "21st century"
  },
  "intro": t('styles.heirloom_levain_loaf_intro'),
  "history": t('styles.heirloom_levain_loaf_history'),
  "culturalContext": {
    "significance": [
      t('styles.heirloom_levain_loaf_sig_1'),
      t('styles.heirloom_levain_loaf_sig_2'),
      t('styles.heirloom_levain_loaf_sig_3'),
      t('styles.heirloom_levain_loaf_sig_4'),
      t('styles.heirloom_levain_loaf_sig_5')
    ],
    "consumptionContext": [
      t('styles.heirloom_levain_loaf_consum_1'),
      t('styles.heirloom_levain_loaf_consum_2'),
      t('styles.heirloom_levain_loaf_consum_3'),
      t('styles.heirloom_levain_loaf_consum_4'),
      t('styles.heirloom_levain_loaf_consum_5')
    ],
    "evolution": [
      t('styles.heirloom_levain_loaf_evo_1'),
      t('styles.heirloom_levain_loaf_evo_2'),
      t('styles.heirloom_levain_loaf_evo_3'),
      t('styles.heirloom_levain_loaf_evo_4'),
      t('styles.heirloom_levain_loaf_evo_5'),
      t('styles.heirloom_levain_loaf_evo_6')
    ],
    "rituals": [
      t('styles.heirloom_levain_loaf_rituals_1'),
      t('styles.heirloom_levain_loaf_rituals_2'),
      t('styles.heirloom_levain_loaf_rituals_3'),
      t('styles.heirloom_levain_loaf_rituals_4'),
      t('styles.heirloom_levain_loaf_rituals_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.heirloom_levain_loaf_flavor_1'),
      t('styles.heirloom_levain_loaf_flavor_2'),
      t('styles.heirloom_levain_loaf_flavor_3'),
      t('styles.heirloom_levain_loaf_flavor_4'),
      t('styles.heirloom_levain_loaf_flavor_5')
    ],
    "aromaProfile": [
      t('styles.heirloom_levain_loaf_aroma_1'),
      t('styles.heirloom_levain_loaf_aroma_2'),
      t('styles.heirloom_levain_loaf_aroma_3'),
      t('styles.heirloom_levain_loaf_aroma_4'),
      t('styles.heirloom_levain_loaf_aroma_5')
    ],
    "textureNotes": [
      t('styles.heirloom_levain_loaf_texture_1'),
      t('styles.heirloom_levain_loaf_texture_2'),
      t('styles.heirloom_levain_loaf_texture_3'),
      t('styles.heirloom_levain_loaf_texture_4'),
      t('styles.heirloom_levain_loaf_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.heirloom_levain_loaf_pair_1'),
      t('styles.heirloom_levain_loaf_pair_2'),
      t('styles.heirloom_levain_loaf_pair_3'),
      t('styles.heirloom_levain_loaf_pair_4'),
      t('styles.heirloom_levain_loaf_pair_5')
    ],
    "flavorEvolution": [
      t('styles.heirloom_levain_loaf_fe_1'),
      t('styles.heirloom_levain_loaf_fe_2'),
      t('styles.heirloom_levain_loaf_fe_3'),
      t('styles.heirloom_levain_loaf_fe_4'),
      t('styles.heirloom_levain_loaf_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.heirloom_levain_loaf_tech_1'),
    t('styles.heirloom_levain_loaf_tech_2')
  ],
  "doughImpact": [
    t('styles.heirloom_levain_loaf_di_1'),
    t('styles.heirloom_levain_loaf_di_2'),
    t('styles.heirloom_levain_loaf_di_3'),
    t('styles.heirloom_levain_loaf_di_4'),
    t('styles.heirloom_levain_loaf_di_5')
  ],
  "bakingImpact": [
    t('styles.heirloom_levain_loaf_bi_1'),
    t('styles.heirloom_levain_loaf_bi_2'),
    t('styles.heirloom_levain_loaf_bi_3'),
    t('styles.heirloom_levain_loaf_bi_4'),
    t('styles.heirloom_levain_loaf_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      75,
      85
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      3
    ],
    "sugarRange": [
      0,
      2
    ],
    "flourStrength": t('styles.varies_with_grain_blend_typically_medium_to_strong'),
    "fermentation": {
      "bulk": t('styles.heirloom_levain_loaf_ferm_bulk'),
      "proof": t('styles.heirloom_levain_loaf_ferm_proof'),
      "coldRetard": t('styles.common_for_flexibility_and_flavor')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.baker_must_adapt_to_specific_grain_absorption_and_')
    },
    "difficulty": t('styles.difficulty_expert'),
    "recommendedUse": [
      t('common.artisan_bread_expressing_local_grains')
    ]
  },
  "regionalVariants": [
    t('styles.heirloom_levain_loaf_rv_1'),
    t('styles.heirloom_levain_loaf_rv_2'),
    t('styles.heirloom_levain_loaf_rv_3'),
    t('styles.heirloom_levain_loaf_rv_4'),
    t('styles.heirloom_levain_loaf_rv_5')
  ],
  "climateScenarios": [
    t('styles.heirloom_levain_loaf_cs_1'),
    t('styles.heirloom_levain_loaf_cs_2'),
    t('styles.heirloom_levain_loaf_cs_3'),
    t('styles.heirloom_levain_loaf_cs_4')
  ],
  "styleComparisons": [
    t('styles.heirloom_levain_loaf_sc_1'),
    t('styles.heirloom_levain_loaf_sc_2'),
    t('styles.heirloom_levain_loaf_sc_3'),
    t('styles.heirloom_levain_loaf_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.heirloom_levain_loaf_ps_1'),
    t('styles.heirloom_levain_loaf_ps_2'),
    t('styles.heirloom_levain_loaf_ps_3'),
    t('styles.heirloom_levain_loaf_ps_4'),
    t('styles.heirloom_levain_loaf_ps_5')
  ],
  "risks": [
    t('styles.heirloom_levain_loaf_risk_1'),
    t('styles.heirloom_levain_loaf_risk_2'),
    t('styles.heirloom_levain_loaf_risk_3'),
    t('styles.heirloom_levain_loaf_risk_4'),
    t('styles.heirloom_levain_loaf_risk_5')
  ],
  "notes": [
    t('styles.heirloom_levain_loaf_note_1'),
    t('styles.heirloom_levain_loaf_note_2'),
    t('styles.heirloom_levain_loaf_note_3'),
    t('styles.heirloom_levain_loaf_note_4'),
    t('styles.heirloom_levain_loaf_note_5')
  ],
  "tags": [
    t('common.artisan_bread_expressing_local_grains'),
    t('common.bread'),
    t('common.global')
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
      "title": "The Third Plate: Field Notes on the Future of Food",
      "url": "https://www.danbarber.com/books/the-third-plate",
      "author": "Dan Barber",
      "year": 2014
    },
    {
      "title": t('styles.modernist_bread_6'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Ancient Grains for Modern Meals",
      "url": "https://www.amazon.com/Ancient-Grains-Modern-Meals-Heritage/dp/1580083210",
      "author": "Maria Speck",
      "year": 2011
    },
    {
      "title": "The Sourdough School: Heritage Grain Edition",
      "url": "https://www.sourdough.co.uk/",
      "author": "Vanessa Kimbell",
      "year": 2020
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.heirloom_levain_loaf_faq_1_q'),
      "answer": t('styles.heirloom_levain_loaf_faq_1_a')
    },
    {
      "question": t('styles.heirloom_levain_loaf_faq_2_q'),
      "answer": t('styles.heirloom_levain_loaf_faq_2_a')
    },
    {
      "question": t('styles.heirloom_levain_loaf_faq_3_q'),
      "answer": t('styles.heirloom_levain_loaf_faq_3_a')
    },
    {
      "question": t('styles.heirloom_levain_loaf_faq_4_q'),
      "answer": t('styles.heirloom_levain_loaf_faq_4_a')
    },
    {
      "question": t('styles.heirloom_levain_loaf_faq_5_q'),
      "answer": t('styles.heirloom_levain_loaf_faq_5_a')
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
  recommendedFlavorComponents: ["salted_butter_normandy", "honey_raw"]
};
