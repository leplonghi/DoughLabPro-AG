import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const seventy_percent_rye_sour: StyleDefinition = {
  "id": "seventy_percent_rye_sour",
  "title": t('styles.rye_70_title'),
  "subtitle": t('styles.wholegrain__rye'),
  "category": t('styles.bread_24'),
  "family": t('styles.wholegrain__rye_2'),
  "variantName": t('styles.rye_70_variantName'),
  "origin": {
    "country": t('styles.germany_2'),
    "region": t('styles.central_europe'),
    "period": t('styles.traditional_10')
  },
  "intro": t('styles.consumed_as_dense_flavorful_loaves_sliced_thin_oft'),
  "history": t('styles.rye_70_history'),
  "culturalContext": {
    "significance": [
      t('styles.rye_70_sig_1'),
      t('styles.rye_70_sig_2'),
      t('styles.rye_70_sig_3'),
      t('styles.rye_70_sig_4'),
      t('styles.rye_70_sig_5')
    ],
    "consumptionContext": [
      t('styles.rye_70_cons_1'),
      t('styles.rye_70_cons_2'),
      t('styles.rye_70_cons_3'),
      t('styles.rye_70_cons_4'),
      t('styles.rye_70_cons_5')
    ],
    "evolution": [
      t('styles.rye_70_evo_1'),
      t('styles.rye_70_evo_2'),
      t('styles.rye_70_evo_3'),
      t('styles.rye_70_evo_4'),
      t('styles.rye_70_evo_5')
    ],
    "rituals": [
      t('styles.rye_70_rit_1'),
      t('styles.rye_70_rit_2'),
      t('styles.rye_70_rit_3'),
      t('styles.rye_70_rit_4'),
      t('styles.rye_70_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.rye_70_flav_1'),
      t('styles.rye_70_flav_2'),
      t('styles.rye_70_flav_3'),
      t('styles.rye_70_flav_4'),
      t('styles.rye_70_flav_5')
    ],
    "aromaProfile": [
      t('styles.rye_70_aroma_1'),
      t('styles.rye_70_aroma_2'),
      t('styles.rye_70_aroma_3'),
      t('styles.rye_70_aroma_4'),
      t('styles.rye_70_aroma_5')
    ],
    "textureNotes": [
      t('styles.rye_70_text_1'),
      t('styles.rye_70_text_2'),
      t('styles.rye_70_text_3'),
      t('styles.rye_70_text_4'),
      t('styles.rye_70_text_5')
    ],
    "pairingRecommendations": [
      t('styles.rye_70_pair_1'),
      t('styles.rye_70_pair_2'),
      t('styles.rye_70_pair_3'),
      t('styles.rye_70_pair_4'),
      t('styles.rye_70_pair_5')
    ],
    "flavorEvolution": [
      t('styles.rye_70_fevo_1'),
      t('styles.rye_70_fevo_2'),
      t('styles.rye_70_fevo_3'),
      t('styles.rye_70_fevo_4'),
      t('styles.rye_70_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Rye sour at 30–50% of total rye flour.",
    "Hydration: 80-90%"
  ],
  "doughImpact": [
    "Sourdough (Rye Sour) at 30-50% of the rye flour provides the mandatory acidity",
    "Wheat content (30%) provides a 'gluten backbone' allowing for more volume and free-standing shapes",
    "Hydration (80-90%) is high; rye 'pentosans' absorb and hold water differently than wheat starch",
    "Short mixing time: the dough should only be developed until uniform; over-mixing weakens the rye",
    "The dough will feel sticky and 'clay-like' compared to wheat bread dough"
  ],
  "bakingImpact": [
    "Requires a hot initial oven floor (220-230°C) to prevent the heavy loaf from spreading flat",
    "Moderate bake time (50-70 mins) is needed to cook through the dense, moist interior",
    "Steam is essential in the first 10 minutes to allow the low-elasticity crust to expand",
    "Baked to a 'bold' dark-brown color to develop the characteristic earthy flavors",
    "Cooling on a wire rack is mandatory to prevent the bottom from becoming soggy"
  ],
  "technicalProfile": {
    "hydrationRange": [
      80,
      90
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
    "flourStrength": "70% rye, 30% wheat or bread flour",
    "fermentation": {
      "bulk": t('styles.short_bulk_much_development_occurs_in_sour_build'),
      "proof": t('styles.rye_70_ferm_proof'),
      "coldRetard": t('styles.occasional_short_retards_possible')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        200,
        220
      ],
      "notes": t('styles.longer_bake_to_set_crumb_often_rested_before_slici')
    },
    "difficulty": t('styles.difficulty_expert'),
    "recommendedUse": [
      t('common.traditional_rye_loaves'),
      t('common.cold_cuts_and_cheese')
    ]
  },
  "regionalVariants": [
    t('styles.rye_70_var_1'),
    t('styles.rye_70_var_2'),
    t('styles.rye_70_var_3'),
    t('styles.rye_70_var_4'),
    t('styles.rye_70_var_5')
  ],
  "climateScenarios": [
    t('styles.rye_70_clim_1'),
    t('styles.rye_70_clim_2'),
    t('styles.rye_70_clim_3'),
    t('styles.rye_70_clim_4')
  ],
  "styleComparisons": [
    t('styles.rye_70_comp_1'),
    t('styles.rye_70_comp_2'),
    t('styles.rye_70_comp_3'),
    t('styles.rye_70_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.rye_70_sens_1'),
    t('styles.rye_70_sens_2'),
    t('styles.rye_70_sens_3'),
    t('styles.rye_70_sens_4'),
    t('styles.rye_70_sens_5')
  ],
  "risks": [
    t('styles.rye_70_risk_1'),
    t('styles.rye_70_risk_2'),
    t('styles.rye_70_risk_3'),
    t('styles.rye_70_risk_4'),
    t('styles.rye_70_risk_5')
  ],
  "notes": [
    t('styles.rye_70_note_1'),
    t('styles.rye_70_note_2'),
    t('styles.rye_70_note_3'),
    t('styles.rye_70_note_4'),
    t('styles.rye_70_note_5')
  ],
  "tags": [
    t('common.traditional_rye_loaves'),
    t('common.cold_cuts_and_cheese'),
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
      "title": t('styles.rye_70_title'),
      "url": "https://www.amazon.com/Bread-Bakers-Book-Techniques-Recipes/dp/1118132718",
      "author": "Jeffrey Hamelman",
      "year": 2012
    },
    {
      "title": t('styles.modernist_bread_12'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.rye_70_title'),
      "url": "https://www.amazon.com/Classic-German-Baking-Recipes-Christmas/dp/1607748258",
      "author": "Luisa Weiss",
      "year": 2016
    },
    {
      "title": t('styles.rye_70_title'),
      "url": "https://www.ryebaker.com/",
      "author": "Stanley Ginsberg",
      "year": 2016
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.rye_70_faq_1_q'),
      "answer": t('styles.rye_70_faq_1_a')
    },
    {
      "question": t('styles.rye_70_faq_2_q'),
      "answer": t('styles.rye_70_faq_2_a')
    },
    {
      "question": t('styles.rye_70_faq_3_q'),
      "answer": t('styles.rye_70_faq_3_a')
    },
    {
      "question": t('styles.rye_70_faq_4_q'),
      "answer": t('styles.rye_70_faq_4_a')
    },
    {
      "question": t('styles.rye_70_faq_5_q'),
      "answer": t('styles.rye_70_faq_5_a')
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
