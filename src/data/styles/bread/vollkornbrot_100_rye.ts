import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const vollkornbrot_100_rye: StyleDefinition = {
  "id": "vollkornbrot_100_rye",
  "title": t('styles.vollkornbrot_title'),
  "subtitle": t('styles.wholegrain__rye_3'),
  "category": t('styles.bread_26'),
  "family": t('styles.wholegrain__rye_4'),
  "variantName": t('styles.vollkornbrot_variantName'),
  "origin": {
    "country": t('styles.germany_3'),
    "region": t('styles.central_europe_2'),
    "period": t('styles.traditional_11')
  },
  "intro": t('styles.vollkornbrot_intro'),
  "history": t('styles.vollkornbrot_history'),
  "culturalContext": {
    "significance": [
      t('styles.vollkornbrot_sig_1'),
      t('styles.vollkornbrot_sig_2'),
      t('styles.vollkornbrot_sig_3'),
      t('styles.vollkornbrot_sig_4'),
      t('styles.vollkornbrot_sig_5')
    ],
    "consumptionContext": [
      t('styles.vollkornbrot_cons_1'),
      t('styles.vollkornbrot_cons_2'),
      t('styles.vollkornbrot_cons_3'),
      t('styles.vollkornbrot_cons_4'),
      t('styles.vollkornbrot_cons_5')
    ],
    "evolution": [
      t('styles.vollkornbrot_evo_1'),
      t('styles.vollkornbrot_evo_2'),
      t('styles.vollkornbrot_evo_3'),
      t('styles.vollkornbrot_evo_4'),
      t('styles.vollkornbrot_evo_5'),
      t('styles.vollkornbrot_evo_6')
    ],
    "rituals": [
      t('styles.vollkornbrot_rit_1'),
      t('styles.vollkornbrot_rit_2'),
      t('styles.vollkornbrot_rit_3'),
      t('styles.vollkornbrot_rit_4'),
      t('styles.vollkornbrot_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.vollkornbrot_flav_1'),
      t('styles.vollkornbrot_flav_2'),
      t('styles.vollkornbrot_flav_3'),
      t('styles.vollkornbrot_flav_4'),
      t('styles.vollkornbrot_flav_5')
    ],
    "aromaProfile": [
      t('styles.vollkornbrot_aroma_1'),
      t('styles.vollkornbrot_aroma_2'),
      t('styles.vollkornbrot_aroma_3'),
      t('styles.vollkornbrot_aroma_4'),
      t('styles.vollkornbrot_aroma_5')
    ],
    "textureNotes": [
      t('styles.vollkornbrot_text_1'),
      t('styles.vollkornbrot_text_2'),
      t('styles.vollkornbrot_text_3'),
      t('styles.vollkornbrot_text_4'),
      t('styles.vollkornbrot_text_5')
    ],
    "pairingRecommendations": [
      t('styles.vollkornbrot_pair_1'),
      t('styles.vollkornbrot_pair_2'),
      t('styles.vollkornbrot_pair_3'),
      t('styles.vollkornbrot_pair_4'),
      t('styles.vollkornbrot_pair_5')
    ],
    "flavorEvolution": [
      t('styles.vollkornbrot_fevo_1'),
      t('styles.vollkornbrot_fevo_2'),
      t('styles.vollkornbrot_fevo_3'),
      t('styles.vollkornbrot_fevo_4'),
      t('styles.vollkornbrot_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Strong rye sourdough build is essential.",
    "Hydration: 90-100%"
  ],
  "doughImpact": [
    "100% Rye Sourdough is mandatory; the acid prevents alpha-amylase from turning the crumb into starch-syrup",
    "High hydration (90-100%) is required because whole rye meal absorbs massive amounts of water",
    "No gluten development: the dough is a 'paste' or 'mash' (pentosan-based) and should not be kneaded",
    "Inclusion of 'Schrot' (coarse cracked rye) provides texture and slows down fast-fermenting rye starches",
    "Minimal handling: the dough is simply 'placed' or 'pushed' into a tin using wet hands"
  ],
  "bakingImpact": [
    "Long, low, and slow bake (1.5 - 3 hours) is necessary to cook the dense mineral-rich interior",
    "Pans are almost always used because the dough lacks the gluten strength to stand on its own",
    "A 'steamy' start followed by a very dry finish helps create the protective matte crust",
    "Maturity is achieved via heat: the starches must gelatinize slowly to prevent a gummy outcome",
    "Immediately wrapping the hot loaf in linen after baking helps the crust retain enough moisture"
  ],
  "technicalProfile": {
    "hydrationRange": [
      90,
      100
    ],
    "saltRange": [
      1.8,
      2
    ],
    "oilRange": [
      0,
      3
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": "100% rye wholegrain or mixed rye meals",
    "fermentation": {
      "bulk": t('styles.minimal_bulk_dough_is_more_like_a_paste'),
      "proof": t('styles.vollkornbrot_ferm_proof'),
      "coldRetard": t('styles.sometimes_retarded_to_manage_scheduling')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        180,
        210
      ],
      "notes": t('styles.long_gentle_bake_bread_often_matured_24_h_before_s')
    },
    "difficulty": t('styles.difficulty_expert'),
    "recommendedUse": [
      t('common.dense_wholegrain_rye_bread'),
      t('common.long_keeping_breads')
    ]
  },
  "regionalVariants": [
    t('styles.vollkornbrot_var_1'),
    t('styles.vollkornbrot_var_2'),
    t('styles.vollkornbrot_var_3'),
    t('styles.vollkornbrot_var_4'),
    t('styles.vollkornbrot_var_5')
  ],
  "climateScenarios": [
    t('styles.vollkornbrot_clim_1'),
    t('styles.vollkornbrot_clim_2'),
    t('styles.vollkornbrot_clim_3'),
    t('styles.vollkornbrot_clim_4')
  ],
  "styleComparisons": [
    t('styles.vollkornbrot_comp_1'),
    t('styles.vollkornbrot_comp_2'),
    t('styles.vollkornbrot_comp_3'),
    t('styles.vollkornbrot_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.vollkornbrot_sens_1'),
    t('styles.vollkornbrot_sens_2'),
    t('styles.vollkornbrot_sens_3'),
    t('styles.vollkornbrot_sens_4'),
    t('styles.vollkornbrot_sens_5')
  ],
  "risks": [
    t('styles.vollkornbrot_risk_1'),
    t('styles.vollkornbrot_risk_2'),
    t('styles.vollkornbrot_risk_3'),
    t('styles.vollkornbrot_risk_4'),
    t('styles.vollkornbrot_risk_5')
  ],
  "notes": [
    t('styles.vollkornbrot_note_1'),
    t('styles.vollkornbrot_note_2'),
    t('styles.vollkornbrot_note_3'),
    t('styles.vollkornbrot_note_4'),
    t('styles.vollkornbrot_note_5')
  ],
  "tags": [
    t('common.dense_wholegrain_rye_bread'),
    t('common.long_keeping_breads'),
    t('common.bread'),
    t('common.germany')
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
      "title": t('styles.vollkornbrot_title'),
      "url": "https://www.amazon.com/Bread-Bakers-Book-Techniques-Recipes/dp/1118132718",
      "author": "Jeffrey Hamelman",
      "year": 2012
    },
    {
      "title": t('styles.modernist_bread_18'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.vollkornbrot_title'),
      "url": "https://www.germanbakery.com/technical-rye/",
      "author": "German Bakers Guild",
      "year": 2021
    },
    {
      "title": t('styles.vollkornbrot_title'),
      "url": "https://www.amazon.com/Culinaria-Germany-Christine-Metzger/dp/3833149141",
      "author": "Christine Metzger",
      "year": 2008
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.vollkornbrot_faq_1_q'),
      "answer": t('styles.vollkornbrot_faq_1_a')
    },
    {
      "question": t('styles.vollkornbrot_faq_2_q'),
      "answer": t('styles.vollkornbrot_faq_2_a')
    },
    {
      "question": t('styles.vollkornbrot_faq_3_q'),
      "answer": t('styles.vollkornbrot_faq_3_a')
    },
    {
      "question": t('styles.vollkornbrot_faq_4_q'),
      "answer": t('styles.vollkornbrot_faq_4_a')
    },
    {
      "question": t('styles.vollkornbrot_faq_5_q'),
      "answer": t('styles.vollkornbrot_faq_5_a')
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
