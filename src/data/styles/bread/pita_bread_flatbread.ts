import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pita_bread_flatbread: StyleDefinition = {
  "id": "pita_bread_flatbread",
  "title": t('styles.pita_bread'),
  "subtitle": t('styles.classic_flatbreads_9'),
  "category": t('styles.bread_22'),
  "family": t('styles.classic_flatbreads_10'),
  "variantName": t('styles.pita_bread_2'),
  "origin": {
    "country": t('styles.middle_east'),
    "region": t('styles.levant_and_mediterranean'),
    "period": t('styles.pita_origin_period')
  },
  "intro": t('styles.pita_intro'),
  "history": t('styles.pita_history'),
  "culturalContext": {
    "significance": [
      t('styles.pita_sig_1'),
      t('styles.pita_sig_2'),
      t('styles.pita_sig_3'),
      t('styles.pita_sig_4'),
      t('styles.pita_sig_5')
    ],
    "consumptionContext": [
      t('styles.pita_cons_1'),
      t('styles.pita_cons_2'),
      t('styles.pita_cons_3'),
      t('styles.pita_cons_4'),
      t('styles.pita_cons_5')
    ],
    "evolution": [
      t('styles.pita_evo_1'),
      t('styles.pita_evo_2'),
      t('styles.pita_evo_3'),
      t('styles.pita_evo_4'),
      t('styles.pita_evo_5'),
      t('styles.pita_evo_6')
    ],
    "rituals": [
      t('styles.pita_rit_1'),
      t('styles.pita_rit_2'),
      t('styles.pita_rit_3'),
      t('styles.pita_rit_4'),
      t('styles.pita_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.pita_flav_1'),
      t('styles.pita_flav_2'),
      t('styles.pita_flav_3'),
      t('styles.pita_flav_4'),
      t('styles.pita_flav_5')
    ],
    "aromaProfile": [
      t('styles.pita_aroma_1'),
      t('styles.pita_aroma_2'),
      t('styles.pita_aroma_3'),
      t('styles.pita_aroma_4'),
      t('styles.pita_aroma_5')
    ],
    "textureNotes": [
      t('styles.pita_text_1'),
      t('styles.pita_text_2'),
      t('styles.pita_text_3'),
      t('styles.pita_text_4'),
      t('styles.pita_text_5')
    ],
    "pairingRecommendations": [
      t('styles.pita_pair_1'),
      t('styles.pita_pair_2'),
      t('styles.pita_pair_3'),
      t('styles.pita_pair_4'),
      t('styles.pita_pair_5')
    ],
    "flavorEvolution": [
      t('styles.pita_fevo_1'),
      t('styles.pita_fevo_2'),
      t('styles.pita_fevo_3'),
      t('styles.pita_fevo_4'),
      t('styles.pita_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Often direct dough; sometimes sponge-based.",
    "Hydration: 60-68%"
  ],
  "doughImpact": [
    "Moderate hydration (60-68%) is required to generate enough steam for the 'pocket' puff",
    "Short bulk fermentation prevents the development of an open crumb, which would block the pocket",
    "Intense kneading develops the gluten strength needed to hold the steam pressure inside",
    "Small amount of oil (3-5%) keeps the bread flexible and prevents it from becoming a 'cracker'",
    "Very thin rolling (3-5mm) ensures the heat penetrates instantly to vaporize internal water"
  ],
  "bakingImpact": [
    "Extreme bottom heat (260-320°C+) is CRITICAL; a hot stone or steel is mandatory",
    "The lack of steam in the oven allows the outer skin to set quickly, trapping internal steam",
    "Ultra-fast bake (2-3 mins) is necessary to 'blow' the pocket before the dough dries out",
    "Immediate removal and covering with a cloth is vital to soften the 'baked' skin via condensation",
    "The 'Flash' bake strategy: if the bread stays in more than 4 mins, the pocket walls may fuse"
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      68
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      5
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_bread_flour_2'),
    "fermentation": {
      "bulk": t('styles.pita_ferm_bulk'),
      "proof": t('styles.short_bench_rest_after_shaping'),
      "coldRetard": t('styles.optional_overnight_bulk_2')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        260,
        320
      ],
      "notes": t('styles.very_hot_stone_or_deck_encourages_pocket_formation')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.pocket_flatbread'),
      t('common.wraps_and_sandwiches')
    ]
  },
  "regionalVariants": [
    t('styles.pita_var_1'),
    t('styles.pita_var_2'),
    t('styles.pita_var_3'),
    t('styles.pita_var_4'),
    t('styles.pita_var_5')
  ],
  "climateScenarios": [
    t('styles.pita_clim_1'),
    t('styles.pita_clim_2'),
    t('styles.pita_clim_3'),
    t('styles.pita_clim_4')
  ],
  "styleComparisons": [
    t('styles.pita_comp_1'),
    t('styles.pita_comp_2'),
    t('styles.pita_comp_3'),
    t('styles.pita_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.pita_sens_1'),
    t('styles.pita_sens_2'),
    t('styles.pita_sens_3'),
    t('styles.pita_sens_4'),
    t('styles.pita_sens_5')
  ],
  "risks": [
    t('styles.pita_risk_1'),
    t('styles.pita_risk_2'),
    t('styles.pita_risk_3'),
    t('styles.pita_risk_4'),
    t('styles.pita_risk_5')
  ],
  "notes": [
    t('styles.pita_note_1'),
    t('styles.pita_note_2'),
    t('styles.pita_note_3'),
    t('styles.pita_note_4'),
    t('styles.pita_note_5')
  ],
  "tags": [
    t('common.pocket_flatbread'),
    t('common.wraps_and_sandwiches'),
    t('common.bread'),
    t('common.middle_east')
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
      "title": t('styles.pita_title'),
      "url": "https://www.jstor.org/stable/j.ctv1v7zc5z",
      "author": "Liora Gvion",
      "year": 2012
    },
    {
      "title": t('styles.modernist_bread_17'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.pita_title'),
      "url": "https://www.amazon.com/Ottolenghi-Cookbook-Yotam-Ottolenghi/dp/1607743936",
      "author": "Yotam Ottolenghi, Sami Tamimi",
      "year": 2008
    },
    {
      "title": t('styles.pita_title'),
      "url": "https://www.kingarthurbaking.com/recipes/homemade-pita-bread-recipe",
      "author": "King Arthur Baking",
      "year": 2021
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.pita_faq_1_q'),
      "answer": t('styles.pita_faq_1_a')
    },
    {
      "question": t('styles.pita_faq_2_q'),
      "answer": t('styles.pita_faq_2_a')
    },
    {
      "question": t('styles.pita_faq_3_q'),
      "answer": t('styles.pita_faq_3_a')
    },
    {
      "question": t('styles.pita_faq_4_q'),
      "answer": t('styles.pita_faq_4_a')
    },
    {
      "question": t('styles.pita_faq_5_q'),
      "answer": t('styles.pita_faq_5_a')
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
