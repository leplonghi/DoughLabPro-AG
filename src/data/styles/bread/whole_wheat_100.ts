import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const whole_wheat_100: StyleDefinition = {
  "id": "whole_wheat_100",
  "title": t('styles.whole_wheat_title'),
  "subtitle": t('styles.wholegrain__rye_5'),
  "category": t('styles.bread_28'),
  "family": t('styles.wholegrain__rye_6'),
  "variantName": t('styles.whole_wheat_variantName'),
  "origin": {
    "country": t('styles.global_3'),
    "region": t('styles.healthfocused_baking'),
    "period": t('styles.modern_2')
  },
  "intro": t('styles.whole_wheat_intro'),
  "history": t('styles.whole_wheat_history'),
  "culturalContext": {
    "significance": [
      t('styles.whole_wheat_sig_1'),
      t('styles.whole_wheat_sig_2'),
      t('styles.whole_wheat_sig_3'),
      t('styles.whole_wheat_sig_4'),
      t('styles.whole_wheat_sig_5')
    ],
    "consumptionContext": [
      t('styles.whole_wheat_cons_1'),
      t('styles.whole_wheat_cons_2'),
      t('styles.whole_wheat_cons_3'),
      t('styles.whole_wheat_cons_4'),
      t('styles.whole_wheat_cons_5')
    ],
    "evolution": [
      t('styles.whole_wheat_evo_1'),
      t('styles.whole_wheat_evo_2'),
      t('styles.whole_wheat_evo_3'),
      t('styles.whole_wheat_evo_4'),
      t('styles.whole_wheat_evo_5'),
      t('styles.whole_wheat_evo_6')
    ],
    "rituals": [
      t('styles.whole_wheat_rit_1'),
      t('styles.whole_wheat_rit_2'),
      t('styles.whole_wheat_rit_3'),
      t('styles.whole_wheat_rit_4'),
      t('styles.whole_wheat_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.whole_wheat_flav_1'),
      t('styles.whole_wheat_flav_2'),
      t('styles.whole_wheat_flav_3'),
      t('styles.whole_wheat_flav_4'),
      t('styles.whole_wheat_flav_5')
    ],
    "aromaProfile": [
      t('styles.whole_wheat_aroma_1'),
      t('styles.whole_wheat_aroma_2'),
      t('styles.whole_wheat_aroma_3'),
      t('styles.whole_wheat_aroma_4'),
      t('styles.whole_wheat_aroma_5')
    ],
    "textureNotes": [
      t('styles.whole_wheat_text_1'),
      t('styles.whole_wheat_text_2'),
      t('styles.whole_wheat_text_3'),
      t('styles.whole_wheat_text_4'),
      t('styles.whole_wheat_text_5')
    ],
    "pairingRecommendations": [
      t('styles.whole_wheat_pair_1'),
      t('styles.whole_wheat_pair_2'),
      t('styles.whole_wheat_pair_3'),
      t('styles.whole_wheat_pair_4'),
      t('styles.whole_wheat_pair_5')
    ],
    "flavorEvolution": [
      t('styles.whole_wheat_fevo_1'),
      t('styles.whole_wheat_fevo_2'),
      t('styles.whole_wheat_fevo_3'),
      t('styles.whole_wheat_fevo_4'),
      t('styles.whole_wheat_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Can use preferments or levain to improve flavor and structure.",
    "Hydration: 70-85%"
  ],
  "doughImpact": [
    "High hydration (75-85%+) is essential as bran acts like a sponge, absorbing much more water",
    "Bran particles act as 'mini razor blades' that cut the gluten; long autolyse is used to soften them",
    "High mineral content leads to faster fermentation; temperature control is more critical than in white dough",
    "Dough feels 'heavier' and less elastic; requires gentle handling during folding to preserve structure",
    "Weakening effect: 100% whole wheat has more protein than white flour, but less 'functional' gluten"
  ],
  "bakingImpact": [
    "Requires a longer bake at slightly lower temperatures to ensure the moist center is fully set",
    "Steam is critical at the start to allow the heavy dough to expand before the crust sets",
    "Rapid browning due to high sugar and mineral content in the whole grain (Millard reaction)",
    "Baking in a loaf pan is standard to provide vertical support to the heavy dough",
    "Internal temperature must reach 98-99°C to avoid a gummy, 'raw' feeling crumb"
  ],
  "technicalProfile": {
    "hydrationRange": [
      70,
      85
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
      10
    ],
    "flourStrength": "100% whole wheat flour; quality and extraction vary",
    "fermentation": {
      "bulk": t('styles.whole_wheat_ferm_bulk'),
      "proof": t('styles.whole_wheat_ferm_proof'),
      "coldRetard": t('styles.optional_812_h_to_improve_flavor')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        200,
        230
      ],
      "notes": t('styles.careful_baking_to_avoid_dry_crumb_pan_loaves_are_c')
    },
    "difficulty": t('styles.difficulty_expert'),
    "recommendedUse": [
      t('common.wholegrain_sandwich_bread'),
      t('common.toast')
    ]
  },
  "regionalVariants": [
    t('styles.whole_wheat_var_1'),
    t('styles.whole_wheat_var_2'),
    t('styles.whole_wheat_var_3'),
    t('styles.whole_wheat_var_4'),
    t('styles.whole_wheat_var_5')
  ],
  "climateScenarios": [
    t('styles.whole_wheat_clim_1'),
    t('styles.whole_wheat_clim_2'),
    t('styles.whole_wheat_clim_3'),
    t('styles.whole_wheat_clim_4')
  ],
  "styleComparisons": [
    t('styles.whole_wheat_comp_1'),
    t('styles.whole_wheat_comp_2'),
    t('styles.whole_wheat_comp_3'),
    t('styles.whole_wheat_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.whole_wheat_sens_1'),
    t('styles.whole_wheat_sens_2'),
    t('styles.whole_wheat_sens_3'),
    t('styles.whole_wheat_sens_4'),
    t('styles.whole_wheat_sens_5')
  ],
  "risks": [
    t('styles.whole_wheat_risk_1'),
    t('styles.whole_wheat_risk_2'),
    t('styles.whole_wheat_risk_3'),
    t('styles.whole_wheat_risk_4'),
    t('styles.whole_wheat_risk_5')
  ],
  "notes": [
    t('styles.whole_wheat_note_1'),
    t('styles.whole_wheat_note_2'),
    t('styles.whole_wheat_note_3'),
    t('styles.whole_wheat_note_4'),
    t('styles.whole_wheat_note_5')
  ],
  "tags": [
    t('common.wholegrain_sandwich_bread'),
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
      "title": t('styles.modernist_bread_21'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.whole_wheat_title'),
      "url": "https://www.amazon.com/Whole-Grain-Breads-Techniques-Extraordinary/dp/1580087590",
      "author": "Peter Reinhart",
      "year": 2007
    },
    {
      "title": t('styles.whole_wheat_title'),
      "url": "https://www.breadtopia.com/",
      "author": "Eric Rusch",
      "year": 2022
    },
    {
      "title": t('styles.whole_wheat_title'),
      "url": "https://www.history.com/news/sylvester-graham-whole-wheat-health-crusade",
      "author": "History.com Editors",
      "year": 2021
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.whole_wheat_faq_1_q'),
      "answer": t('styles.whole_wheat_faq_1_a')
    },
    {
      "question": t('styles.whole_wheat_faq_2_q'),
      "answer": t('styles.whole_wheat_faq_2_a')
    },
    {
      "question": t('styles.whole_wheat_faq_3_q'),
      "answer": t('styles.whole_wheat_faq_3_a')
    },
    {
      "question": t('styles.whole_wheat_faq_4_q'),
      "answer": t('styles.whole_wheat_faq_4_a')
    },
    {
      "question": t('styles.whole_wheat_faq_5_q'),
      "answer": t('styles.whole_wheat_faq_5_a')
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
