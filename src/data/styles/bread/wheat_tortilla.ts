import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const wheat_tortilla: StyleDefinition = {
  "id": "wheat_tortilla",
  "title": t('styles.wheat_flour_tortilla'),
  "subtitle": t('styles.classic_flatbreads_11'),
  "category": t('styles.bread_27'),
  "family": t('styles.classic_flatbreads_12'),
  "variantName": t('styles.wheat_flour_tortilla_2'),
  "origin": {
    "country": t('styles.mexico'),
    "region": t('styles.northern_mexico_and_southwest_us'),
    "period": t('styles.tortilla_origin_period')
  },
  "intro": t('styles.used_for_tacos_burritos_quesadillas_and_many_stree'),
  "history": t('styles.tortilla_history'),
  "culturalContext": {
    "significance": [
      t('styles.tortilla_sig_1'),
      t('styles.tortilla_sig_2'),
      t('styles.tortilla_sig_3'),
      t('styles.tortilla_sig_4'),
      t('styles.tortilla_sig_5')
    ],
    "consumptionContext": [
      t('styles.tortilla_cons_1'),
      t('styles.tortilla_cons_2'),
      t('styles.tortilla_cons_3'),
      t('styles.tortilla_cons_4'),
      t('styles.tortilla_cons_5')
    ],
    "evolution": [
      t('styles.tortilla_evo_1'),
      t('styles.tortilla_evo_2'),
      t('styles.tortilla_evo_3'),
      t('styles.tortilla_evo_4'),
      t('styles.tortilla_evo_5'),
      t('styles.tortilla_evo_6')
    ],
    "rituals": [
      t('styles.tortilla_rit_1'),
      t('styles.tortilla_rit_2'),
      t('styles.tortilla_rit_3'),
      t('styles.tortilla_rit_4'),
      t('styles.tortilla_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.tortilla_flav_1'),
      t('styles.tortilla_flav_2'),
      t('styles.tortilla_flav_3'),
      t('styles.tortilla_flav_4'),
      t('styles.tortilla_flav_5')
    ],
    "aromaProfile": [
      t('styles.tortilla_aroma_1'),
      t('styles.tortilla_aroma_2'),
      t('styles.tortilla_aroma_3'),
      t('styles.tortilla_aroma_4'),
      t('styles.tortilla_aroma_5')
    ],
    "textureNotes": [
      t('styles.tortilla_text_1'),
      t('styles.tortilla_text_2'),
      t('styles.tortilla_text_3'),
      t('styles.tortilla_text_4'),
      t('styles.tortilla_text_5')
    ],
    "pairingRecommendations": [
      t('styles.tortilla_pair_1'),
      t('styles.tortilla_pair_2'),
      t('styles.tortilla_pair_3'),
      t('styles.tortilla_pair_4'),
      t('styles.tortilla_pair_5')
    ],
    "flavorEvolution": [
      t('styles.tortilla_fevo_1'),
      t('styles.tortilla_fevo_2'),
      t('styles.tortilla_fevo_3'),
      t('styles.tortilla_fevo_4'),
      t('styles.tortilla_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Typically no preferment; chemical leaveners sometimes used.",
    "Hydration: 50-60%"
  ],
  "doughImpact": [
    "High-quality fat (Lard or Oil) at 10-15% is critical for the 'short' texture and pliability",
    "Hot Water (45-60°C) is often used to partially gelatinize starch, making the dough more extensible",
    "Resting (30-60 mins) is MANDATORY to allow the gluten to relax for thin stretching",
    "Low to medium hydration (50-60%) ensures the dough isn't sticky during hand-thinning",
    "Chemical leavener (Baking Powder) provides the iconic soft 'bubbles' in American-style tortillas"
  ],
  "bakingImpact": [
    "High heat (230-250°C) on a Comal/Flat-top is necessary for the 'spotty' Maillard browning",
    "Short cooking time (30-45 seconds total) prevents the tortilla from drying out and becoming a 'cracker'",
    "The 'Steam Puff' in the middle of baking ensures the layers separate, leading to a tender bite",
    "Immediate stacking in a cloth 'sweats' the tortillas, using residual steam to fully soften the gluten",
    "Lack of oil on the pan: tortillas are almost always baked 'dry' to prevent frying"
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
      5,
      15
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_soft_wheat_flour'),
    "fermentation": {
      "bulk": t('styles.tortilla_ferm_bulk'),
      "proof": t('styles.no_traditional_yeast_proofing_steps'),
      "coldRetard": t('styles.optional_dough_rest_in_fridge')
    },
    "oven": {
      "type": "griddle_or_pan",
      "temperatureC": [
        180,
        250
      ],
      "notes": t('styles.cooked_quickly_on_hot_comal_or_skillet')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      "Tortillas for tacos, wraps, quesadillas"
    ]
  },
  "regionalVariants": [
    t('styles.tortilla_var_1'),
    t('styles.tortilla_var_2'),
    t('styles.tortilla_var_3'),
    t('styles.tortilla_var_4'),
    t('styles.tortilla_var_5')
  ],
  "climateScenarios": [
    t('styles.tortilla_clim_1'),
    t('styles.tortilla_clim_2'),
    t('styles.tortilla_clim_3'),
    t('styles.tortilla_clim_4')
  ],
  "styleComparisons": [
    t('styles.tortilla_comp_1'),
    t('styles.tortilla_comp_2'),
    t('styles.tortilla_comp_3'),
    t('styles.tortilla_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.tortilla_sens_1'),
    t('styles.tortilla_sens_2'),
    t('styles.tortilla_sens_3'),
    t('styles.tortilla_sens_4'),
    t('styles.tortilla_sens_5')
  ],
  "risks": [
    t('styles.tortilla_risk_1'),
    t('styles.tortilla_risk_2'),
    t('styles.tortilla_risk_3'),
    t('styles.tortilla_risk_4'),
    t('styles.tortilla_risk_5')
  ],
  "notes": [
    t('styles.tortilla_note_1'),
    t('styles.tortilla_note_2'),
    t('styles.tortilla_note_3'),
    t('styles.tortilla_note_4'),
    t('styles.tortilla_note_5')
  ],
  "tags": [
    "Tortillas for tacos, wraps, quesadillas",
    t('common.bread'),
    t('common.mexico')
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
      "title": t('styles.tortilla_title'),
      "url": "https://www.worldcat.org/title/mexican-cookery-flatbreads-of-the-north/",
      "author": "Barbara Pool Fenzl",
      "year": 1995
    },
    {
      "title": t('styles.modernist_bread_20'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.tortilla_title'),
      "url": "https://www.latimes.com/food/la-fo-flour-tortilla-master-class-20180517-story.html",
      "author": "L.A. Times",
      "year": 2018
    },
    {
      "title": t('styles.tortilla_title'),
      "url": "https://www.foodandwine.com/news/sonoran-flour-tortilla-history",
      "author": "Food & Wine",
      "year": 2019
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.tortilla_faq_1_q'),
      "answer": t('styles.tortilla_faq_1_a')
    },
    {
      "question": t('styles.tortilla_faq_2_q'),
      "answer": t('styles.tortilla_faq_2_a')
    },
    {
      "question": t('styles.tortilla_faq_3_q'),
      "answer": t('styles.tortilla_faq_3_a')
    },
    {
      "question": t('styles.tortilla_faq_4_q'),
      "answer": t('styles.tortilla_faq_4_a')
    },
    {
      "question": t('styles.tortilla_faq_5_q'),
      "answer": t('styles.tortilla_faq_5_a')
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
