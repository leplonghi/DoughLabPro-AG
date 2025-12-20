import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const naan_flatbread: StyleDefinition = {
  "id": "naan_flatbread",
  "title": t('styles.naan_title'),
  "subtitle": t('styles.classic_flatbreads_7'),
  "category": t('styles.bread_14'),
  "family": t('styles.classic_flatbreads_8'),
  "variantName": t('styles.naan_variantName'),
  "origin": {
    "country": t('styles.naan_origin_country'),
    "region": t('styles.south_and_central_asia'),
    "period": t('styles.traditional_5')
  },
  "intro": t('styles.served_with_curries_and_grilled_dishes_in_indian_a'),
  "history": t('styles.naan_history'),
  "culturalContext": {
    "significance": [
      t('styles.naan_sig_1'),
      t('styles.naan_sig_2'),
      t('styles.naan_sig_3'),
      t('styles.naan_sig_4'),
      t('styles.naan_sig_5')
    ],
    "consumptionContext": [
      t('styles.naan_cons_1'),
      t('styles.naan_cons_2'),
      t('styles.naan_cons_3'),
      t('styles.naan_cons_4'),
      t('styles.naan_cons_5')
    ],
    "evolution": [
      t('styles.naan_evo_1'),
      t('styles.naan_evo_2'),
      t('styles.naan_evo_3'),
      t('styles.naan_evo_4'),
      t('styles.naan_evo_5'),
      t('styles.naan_evo_6')
    ],
    "rituals": [
      t('styles.naan_rit_1'),
      t('styles.naan_rit_2'),
      t('styles.naan_rit_3'),
      t('styles.naan_rit_4'),
      t('styles.naan_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.naan_flav_1'),
      t('styles.naan_flav_2'),
      t('styles.naan_flav_3'),
      t('styles.naan_flav_4'),
      t('styles.naan_flav_5')
    ],
    "aromaProfile": [
      t('styles.naan_aroma_1'),
      t('styles.naan_aroma_2'),
      t('styles.naan_aroma_3'),
      t('styles.naan_aroma_4'),
      t('styles.naan_aroma_5')
    ],
    "textureNotes": [
      t('styles.naan_text_1'),
      t('styles.naan_text_2'),
      t('styles.naan_text_3'),
      t('styles.naan_text_4'),
      t('styles.naan_text_5')
    ],
    "pairingRecommendations": [
      t('styles.naan_pair_1'),
      t('styles.naan_pair_2'),
      t('styles.naan_pair_3'),
      t('styles.naan_pair_4'),
      t('styles.naan_pair_5')
    ],
    "flavorEvolution": [
      t('styles.naan_fevo_1'),
      t('styles.naan_fevo_2'),
      t('styles.naan_fevo_3'),
      t('styles.naan_fevo_4'),
      t('styles.naan_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Yeast-based; sometimes uses yogurt as mild acidity and enrichment.",
    "Hydration: 60-70%"
  ],
  "doughImpact": [
    "Yogurt inclusion provides lactic acid that tenderizes the gluten and adds a mild tang",
    "High enrichment (oil/milk/sugar) ensures the bread stays soft despite the ultra-high heat bake",
    "Moderate hydration (60-70%) allows the dough to be extensible enough for the teardrop stretch",
    "Natural yeasts or commercial yeast works with the yogurt for a complex fermentation profile",
    "Minimal handling after bulk preserves the internal gas bubbles needed for the surface char"
  ],
  "bakingImpact": [
    "Ultra-high heat (300-450°C) is mandatory to produce the signature 'char' bubbles quickly",
    "Baking against a clay wall (Tandoor) or scorching-hot cast iron pan creates bottom-up spring",
    "A extremely fast bake (60-90 seconds) prevents the thin dough from drying out and becoming brittle",
    "The lack of steam results in a dry, matte surface that is immediately softened by basting butter",
    "Direct contact with a hot surface (stone/iron) creates the characteristic dark spots (char)"
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      70
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
      2,
      8
    ],
    "flourStrength": t('styles.allpurpose_or_bread_flour'),
    "fermentation": {
      "bulk": t('styles.naan_ferm_bulk'),
      "proof": t('styles.short_rest_after_shaping'),
      "coldRetard": t('styles.optional_overnight_bulk_for_flavor')
    },
    "oven": {
      "type": "tandoor_or_hot_surface",
      "temperatureC": [
        300,
        450
      ],
      "notes": t('styles.home_versions_use_very_hot_cast_iron_pans_or_stone')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.accompaniment_to_curries'),
      t('common.flatbread_for_dipping')
    ]
  },
  "regionalVariants": [
    t('styles.naan_var_1'),
    t('styles.naan_var_2'),
    t('styles.naan_var_3'),
    t('styles.naan_var_4'),
    t('styles.naan_var_5')
  ],
  "climateScenarios": [
    t('styles.naan_clim_1'),
    t('styles.naan_clim_2'),
    t('styles.naan_clim_3'),
    t('styles.naan_clim_4')
  ],
  "styleComparisons": [
    t('styles.naan_comp_1'),
    t('styles.naan_comp_2'),
    t('styles.naan_comp_3'),
    t('styles.naan_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.naan_sens_1'),
    t('styles.naan_sens_2'),
    t('styles.naan_sens_3'),
    t('styles.naan_sens_4'),
    t('styles.naan_sens_5')
  ],
  "risks": [
    t('styles.naan_risk_1'),
    t('styles.naan_risk_2'),
    t('styles.naan_risk_3'),
    t('styles.naan_risk_4'),
    t('styles.naan_risk_5')
  ],
  "notes": [
    t('styles.naan_note_1'),
    t('styles.naan_note_2'),
    t('styles.naan_note_3'),
    t('styles.naan_note_4'),
    t('styles.naan_note_5')
  ],
  "tags": [
    t('common.accompaniment_to_curries'),
    t('common.flatbread_for_dipping'),
    t('common.bread'),
    "India / Central Asia"
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
      "title": t('styles.naan_title'),
      "url": "https://www.jstor.org/stable/25188556",
      "author": "Journal of the Economic and Social History of the Orient",
      "year": 1995
    },
    {
      "title": t('styles.modernist_bread_13'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.naan_title'),
      "url": "https://www.amazon.com/Dishoom-From-Bombay-with-Love/dp/1408827441",
      "author": "Shamil Thakrar, Kavi Thakrar, Naved Nasir",
      "year": 2019
    },
    {
      "title": t('styles.naan_title'),
      "url": "https://www.indianhealthyrecipes.com/naan/",
      "author": "Swasthi Shreekanth",
      "year": 2023
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.naan_faq_1_q'),
      "answer": t('styles.naan_faq_1_a')
    },
    {
      "question": t('styles.naan_faq_2_q'),
      "answer": t('styles.naan_faq_2_a')
    },
    {
      "question": t('styles.naan_faq_3_q'),
      "answer": t('styles.naan_faq_3_a')
    },
    {
      "question": t('styles.naan_faq_4_q'),
      "answer": t('styles.naan_faq_4_a')
    },
    {
      "question": t('styles.naan_faq_5_q'),
      "answer": t('styles.naan_faq_5_a')
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
