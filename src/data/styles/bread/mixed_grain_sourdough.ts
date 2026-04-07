import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const mixed_grain_sourdough: StyleDefinition = {
  "id": "mixed_grain_sourdough",
  "title": t('styles.mixed_grain_title'),
  "subtitle": t('styles.levain__country_sourdough_3'),
  "category": t('styles.bread_13'),
  "family": t('styles.levain__country_sourdough_4'),
  "variantName": t('styles.mixed_grain_variantName'),
  "origin": {
    "country": t('styles.global_2'),
    "region": t('styles.artisan_baking'),
    "period": t('styles.modern')
  },
  "intro": t('styles.mixed_grain_intro'),
  "history": t('styles.mixed_grain_history'),
  "culturalContext": {
    "significance": [
      t('styles.mixed_grain_sig_1'),
      t('styles.mixed_grain_sig_2'),
      t('styles.mixed_grain_sig_3'),
      t('styles.mixed_grain_sig_4'),
      t('styles.mixed_grain_sig_5')
    ],
    "consumptionContext": [
      t('styles.mixed_grain_cons_1'),
      t('styles.mixed_grain_cons_2'),
      t('styles.mixed_grain_cons_3'),
      t('styles.mixed_grain_cons_4'),
      t('styles.mixed_grain_cons_5')
    ],
    "evolution": [
      t('styles.mixed_grain_evo_1'),
      t('styles.mixed_grain_evo_2'),
      t('styles.mixed_grain_evo_3'),
      t('styles.mixed_grain_evo_4'),
      t('styles.mixed_grain_evo_5')
    ],
    "rituals": [
      t('styles.mixed_grain_rit_1'),
      t('styles.mixed_grain_rit_2'),
      t('styles.mixed_grain_rit_3'),
      t('styles.mixed_grain_rit_4'),
      t('styles.mixed_grain_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.mixed_grain_flav_1'),
      t('styles.mixed_grain_flav_2'),
      t('styles.mixed_grain_flav_3'),
      t('styles.mixed_grain_flav_4'),
      t('styles.mixed_grain_flav_5')
    ],
    "aromaProfile": [
      t('styles.mixed_grain_aroma_1'),
      t('styles.mixed_grain_aroma_2'),
      t('styles.mixed_grain_aroma_3'),
      t('styles.mixed_grain_aroma_4'),
      t('styles.mixed_grain_aroma_5')
    ],
    "textureNotes": [
      t('styles.mixed_grain_text_1'),
      t('styles.mixed_grain_text_2'),
      t('styles.mixed_grain_text_3'),
      t('styles.mixed_grain_text_4'),
      t('styles.mixed_grain_text_5')
    ],
    "pairingRecommendations": [
      t('styles.mixed_grain_pair_1'),
      t('styles.mixed_grain_pair_2'),
      t('styles.mixed_grain_pair_3'),
      t('styles.mixed_grain_pair_4'),
      t('styles.mixed_grain_pair_5')
    ],
    "flavorEvolution": [
      t('styles.mixed_grain_fevo_1'),
      t('styles.mixed_grain_fevo_2'),
      t('styles.mixed_grain_fevo_3'),
      t('styles.mixed_grain_fevo_4'),
      t('styles.mixed_grain_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Levain 15–30%, sometimes stiff for higher wholegrain percentages.",
    "Hydration: 72-82%"
  ],
  "doughImpact": [
    "High hydration (72-82%) is necessary as bran (whole grain) absorbs significantly more water",
    "Mixed flour types (Wheat/Rye/Spelt) require different handling: Rye adds stickiness, Spelt adds extensibility",
    "Increase in minerals/bran accelerates fermentation significantly; dough will move faster than white bread",
    "Extended Autolyse (1-2 hours) is vital to soften the sharp bran particles before kneading",
    "Inclusion of 'Levain' at 20-30% ensures enough enzymatic activity to break down complex sugars"
  ],
  "bakingImpact": [
    "Requires a longer, 'drying' bake to remove the high internal moisture of the wholegrains",
    "High initial heat (240-250°C) with heavy steam is required for maximum volume (oven spring)",
    "Baked to a very dark 'bold' color (maillard) to develop the nutty flavors of the bran",
    "The crust becomes thicker and more protective than on white loaves, aiding shelf life",
    "A 'falling oven' temperature profile (starting high, then lowering) ensures a cooked center"
  ],
  "technicalProfile": {
    "hydrationRange": [
      72,
      82
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
    "flourStrength": "Blend of bread flour and wholegrain flours (wheat, rye, others)",
    "fermentation": {
      "bulk": t('styles.mixed_grain_ferm_bulk'),
      "proof": t('styles.mixed_grain_ferm_proof'),
      "coldRetard": t('styles.very_common_816_h_for_flavor')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.requires_good_steaming_scoring_adapted_to_dough_st')
    },
    "difficulty": t('styles.difficulty_expert'),
    "recommendedUse": [
      t('common.nutritious_sourdough_loaves'),
      t('common.sandwiches'),
      t('common.toast')
    ]
  },
  "regionalVariants": [
    t('styles.mixed_grain_var_1'),
    t('styles.mixed_grain_var_2'),
    t('styles.mixed_grain_var_3'),
    t('styles.mixed_grain_var_4'),
    t('styles.mixed_grain_var_5')
  ],
  "climateScenarios": [
    t('styles.mixed_grain_clim_1'),
    t('styles.mixed_grain_clim_2'),
    t('styles.mixed_grain_clim_3'),
    t('styles.mixed_grain_clim_4')
  ],
  "styleComparisons": [
    t('styles.mixed_grain_comp_1'),
    t('styles.mixed_grain_comp_2'),
    t('styles.mixed_grain_comp_3'),
    t('styles.mixed_grain_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.mixed_grain_sens_1'),
    t('styles.mixed_grain_sens_2'),
    t('styles.mixed_grain_sens_3'),
    t('styles.mixed_grain_sens_4'),
    t('styles.mixed_grain_sens_5')
  ],
  "risks": [
    t('styles.mixed_grain_risk_1'),
    t('styles.mixed_grain_risk_2'),
    t('styles.mixed_grain_risk_3'),
    t('styles.mixed_grain_risk_4'),
    t('styles.mixed_grain_risk_5')
  ],
  "notes": [
    t('styles.mixed_grain_note_1'),
    t('styles.mixed_grain_note_2'),
    t('styles.mixed_grain_note_3'),
    t('styles.mixed_grain_note_4'),
    t('styles.mixed_grain_note_5')
  ],
  "tags": [
    t('common.nutritious_sourdough_loaves'),
    t('common.sandwiches'),
    t('common.toast'),
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
      "title": t('styles.mixed_grain_title'),
      "url": "https://www.amazon.com/Tartine-Bread-Chad-Robertson/dp/0811870413",
      "author": "Chad Robertson",
      "year": 2010
    },
    {
      "title": t('styles.modernist_bread_12'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.mixed_grain_title'),
      "url": "https://sourdough.co.uk/",
      "author": "Vanessa Kimbell",
      "year": 2018
    },
    {
      "title": t('styles.mixed_grain_title'),
      "url": "https://www.amazon.com/Flour-Water-Salt-Yeast-Fundamentals/dp/160774273X",
      "author": "Ken Forkish",
      "year": 2012
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.mixed_grain_faq_1_q'),
      "answer": t('styles.mixed_grain_faq_1_a')
    },
    {
      "question": t('styles.mixed_grain_faq_2_q'),
      "answer": t('styles.mixed_grain_faq_2_a')
    },
    {
      "question": t('styles.mixed_grain_faq_3_q'),
      "answer": t('styles.mixed_grain_faq_3_a')
    },
    {
      "question": t('styles.mixed_grain_faq_4_q'),
      "answer": t('styles.mixed_grain_faq_4_a')
    },
    {
      "question": t('styles.mixed_grain_faq_5_q'),
      "answer": t('styles.mixed_grain_faq_5_a')
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
  recommendedFlavorComponents: ["seeds", "sunflower_seeds"]
};
