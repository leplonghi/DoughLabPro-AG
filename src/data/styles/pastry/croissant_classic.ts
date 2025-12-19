import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const croissant_classic: StyleDefinition = {
  "id": "croissant_classic",
  "title": t('styles.classic_french_croissant'),
  "subtitle": t('styles.viennoiserie_laminée'),
  "category": t('styles.pastry_5'),
  "family": t('styles.viennoiserie_laminée_2'),
  "variantName": t('styles.classic_french_croissant_2'),
  "origin": {
    "country": t('styles.france_7'),
    "region": t('styles.paris_and_beyond'),
    "period": "19th–20th century"
  },
  "intro": t('styles.croissant_intro'),
  "history": t('styles.croissant_history'),
  "culturalContext": {
    "significance": [
      t('styles.croissant_sig_1'),
      t('styles.croissant_sig_2'),
      t('styles.croissant_sig_3'),
      t('styles.croissant_sig_4'),
      t('styles.croissant_sig_5')
    ],
    "consumptionContext": [
      t('styles.croissant_consum_1'),
      t('styles.croissant_consum_2'),
      t('styles.croissant_consum_3'),
      t('styles.croissant_consum_4'),
      t('styles.croissant_consum_5')
    ],
    "evolution": [
      t('styles.croissant_evo_1'),
      t('styles.croissant_evo_2'),
      t('styles.croissant_evo_3'),
      t('styles.croissant_evo_4'),
      t('styles.croissant_evo_5'),
      t('styles.croissant_evo_6')
    ],
    "rituals": [
      t('styles.croissant_ritual_1'),
      t('styles.croissant_ritual_2'),
      t('styles.croissant_ritual_3'),
      t('styles.croissant_ritual_4'),
      t('styles.croissant_ritual_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.croissant_flavor_1'),
      t('styles.croissant_flavor_2'),
      t('styles.croissant_flavor_3'),
      t('styles.croissant_flavor_4'),
      t('styles.croissant_flavor_5')
    ],
    "aromaProfile": [
      t('styles.croissant_aroma_1'),
      t('styles.croissant_aroma_2'),
      t('styles.croissant_aroma_3'),
      t('styles.croissant_aroma_4'),
      t('styles.croissant_aroma_5')
    ],
    "textureNotes": [
      t('styles.croissant_texture_1'),
      t('styles.croissant_texture_2'),
      t('styles.croissant_texture_3'),
      t('styles.croissant_texture_4'),
      t('styles.croissant_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.croissant_pair_1'),
      t('styles.croissant_pair_2'),
      t('styles.croissant_pair_3'),
      t('styles.croissant_pair_4'),
      t('styles.croissant_pair_5')
    ],
    "flavorEvolution": [
      t('styles.croissant_fe_1'),
      t('styles.croissant_fe_2'),
      t('styles.croissant_fe_3'),
      t('styles.croissant_fe_4'),
      t('styles.croissant_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.croissant_foundations_1'),
    t('styles.croissant_foundations_2')
  ],
  "doughImpact": [
    t('styles.croissant_di_1'),
    t('styles.croissant_di_2'),
    t('styles.croissant_di_3'),
    t('styles.croissant_di_4'),
    t('styles.croissant_di_5')
  ],
  "bakingImpact": [
    t('styles.croissant_bi_1'),
    t('styles.croissant_bi_2'),
    t('styles.croissant_bi_3'),
    t('styles.croissant_bi_4'),
    t('styles.croissant_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      50,
      62
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      40,
      65
    ],
    "sugarRange": [
      8,
      14
    ],
    "flourStrength": t('styles.croissant_flour_strength'),
    "fermentation": {
      "bulk": t('styles.croissant_bulk'),
      "proof": t('styles.croissant_proof'),
      "coldRetard": t('styles.mandatory_overnight_retarding_for_lamination')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        190,
        210
      ],
      "notes": t('styles.requires_proper_proofing_and_steam_or_humidity_con')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.breakfast_pastry'),
      t('common.viennoiserie_display')
    ]
  },
  "defaults": {
    "hydration": 54, // Net hydration of the detrempe (Water+Milk water) roughly
    "salt": 2,
    "oil": 55, // Total butter
    "sugar": 11
  },
  "base_formula": [
    { "name": t('styles.bread_flour_4'), "percentage": 100, "role": "flour" },
    { "name": t('styles.water_2'), "percentage": 28, "hydrationContent": 1, "role": "water" },
    { "name": t('styles.whole_milk_4'), "percentage": 28, "hydrationContent": 0.87, "category": "liquid", "role": "other", "manualOverride": true },
    { "name": t('styles.sugar_4'), "percentage": 11, "role": "sugar", "category": "sugar", "manualOverride": true },
    { "name": t('styles.salt_5'), "percentage": 2, "role": "salt" },
    { "name": "Yeast (Instant)", "percentage": 1.2, "role": "yeast" },
    { "name": "Butter (Dough)", "percentage": 5, "hydrationContent": 0.15, "role": "fat", "category": "fat", "manualOverride": true },
    { "name": "Butter (Lamination)", "percentage": 50, "hydrationContent": 0.15, "role": "fat", "category": "fat", "manualOverride": true }
  ],
  "regionalVariants": [
    t('styles.croissant_rv_1'),
    t('styles.croissant_rv_2'),
    t('styles.croissant_rv_3'),
    t('styles.croissant_rv_4'),
    t('styles.croissant_rv_5')
  ],
  "climateScenarios": [
    t('styles.croissant_cs_1'),
    t('styles.croissant_cs_2'),
    t('styles.croissant_cs_3'),
    t('styles.croissant_cs_4')
  ],
  "styleComparisons": [
    t('styles.croissant_sc_1'),
    t('styles.croissant_sc_2'),
    t('styles.croissant_sc_3'),
    t('styles.croissant_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.croissant_ps_1'),
    t('styles.croissant_ps_2'),
    t('styles.croissant_ps_3'),
    t('styles.croissant_ps_4'),
    t('styles.croissant_ps_5')
  ],
  "risks": [
    t('styles.croissant_risk_1'),
    t('styles.croissant_risk_2'),
    t('styles.croissant_risk_3'),
    t('styles.croissant_risk_4'),
    t('styles.croissant_risk_5')
  ],
  "notes": [
    t('styles.croissant_note_1'),
    t('styles.croissant_note_2'),
    t('styles.croissant_note_3'),
    t('styles.croissant_note_4'),
    t('styles.croissant_note_5')
  ],
  "tags": [
    t('common.breakfast_pastry'),
    t('common.viennoiserie_display'),
    t('common.pastry'),
    t('common.france')
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
      "title": t('styles.ferrandi__professional_baking'),
      "url": "https://www.amazon.com/Ferrandi-Paris-Professional-Baking-Fundamentals/dp/2080203266",
      "author": "Ferrandi Paris",
      "year": 2021
    },
    {
      "title": t('styles.modernist_bread_26'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "The Art of French Pastry",
      "url": "https://www.amazon.com/Art-French-Pastry-Jacquy-Pfeiffer/dp/0307959139",
      "author": "Jacquy Pfeiffer",
      "year": 2013
    },
    {
      "title": "Advanced Bread and Pastry",
      "url": "https://www.amazon.com/Advanced-Bread-Pastry-Professional-Approach/dp/1418011754",
      "author": "Michel Suas",
      "year": 2008
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.croissant_faq_1_q'),
      "answer": t('styles.croissant_faq_1_a')
    },
    {
      "question": t('styles.croissant_faq_2_q'),
      "answer": t('styles.croissant_faq_2_a')
    },
    {
      "question": t('styles.croissant_faq_3_q'),
      "answer": t('styles.croissant_faq_3_a')
    },
    {
      "question": t('styles.croissant_faq_4_q'),
      "answer": t('styles.croissant_faq_4_a')
    },
    {
      "question": t('styles.croissant_faq_5_q'),
      "answer": t('styles.croissant_faq_5_a')
    },
    {
      "question": t('styles.croissant_faq_6_q'),
      "answer": t('styles.croissant_faq_6_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
