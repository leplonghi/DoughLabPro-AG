import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pretzel_dough_classic: StyleDefinition = {
  "id": "pretzel_dough_classic",
  "title": t('styles.pretzel_title'),
  "subtitle": t('styles.specialty_breads_3'),
  "category": t('styles.bread_23'),
  "family": t('styles.specialty_breads_4'),
  "variantName": t('styles.pretzel_variantName'),
  "origin": {
    "country": t('styles.germany'),
    "region": t('styles.bavaria_and_others'),
    "period": t('styles.traditional_9')
  },
  "intro": t('styles.pretzel_intro'),
  "history": t('styles.pretzel_history'),
  "culturalContext": {
    "significance": [
      t('styles.pretzel_sig_1'),
      t('styles.pretzel_sig_2'),
      t('styles.pretzel_sig_3'),
      t('styles.pretzel_sig_4'),
      t('styles.pretzel_sig_5')
    ],
    "consumptionContext": [
      t('styles.pretzel_cons_1'),
      t('styles.pretzel_cons_2'),
      t('styles.pretzel_cons_3'),
      t('styles.pretzel_cons_4'),
      t('styles.pretzel_cons_5')
    ],
    "evolution": [
      t('styles.pretzel_evo_1'),
      t('styles.pretzel_evo_2'),
      t('styles.pretzel_evo_3'),
      t('styles.pretzel_evo_4'),
      t('styles.pretzel_evo_5'),
      t('styles.pretzel_evo_6')
    ],
    "rituals": [
      t('styles.pretzel_rit_1'),
      t('styles.pretzel_rit_2'),
      t('styles.pretzel_rit_3'),
      t('styles.pretzel_rit_4'),
      t('styles.pretzel_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.pretzel_flav_1'),
      t('styles.pretzel_flav_2'),
      t('styles.pretzel_flav_3'),
      t('styles.pretzel_flav_4'),
      t('styles.pretzel_flav_5')
    ],
    "aromaProfile": [
      t('styles.pretzel_aroma_1'),
      t('styles.pretzel_aroma_2'),
      t('styles.pretzel_aroma_3'),
      t('styles.pretzel_aroma_4'),
      t('styles.pretzel_aroma_5')
    ],
    "textureNotes": [
      t('styles.pretzel_text_1'),
      t('styles.pretzel_text_2'),
      t('styles.pretzel_text_3'),
      t('styles.pretzel_text_4'),
      t('styles.pretzel_text_5')
    ],
    "pairingRecommendations": [
      t('styles.pretzel_pair_1'),
      t('styles.pretzel_pair_2'),
      t('styles.pretzel_pair_3'),
      t('styles.pretzel_pair_4'),
      t('styles.pretzel_pair_5')
    ],
    "flavorEvolution": [
      t('styles.pretzel_fevo_1'),
      t('styles.pretzel_fevo_2'),
      t('styles.pretzel_fevo_3'),
      t('styles.pretzel_fevo_4'),
      t('styles.pretzel_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Often straight dough; some use preferments.",
    "Hydration: 55-62%"
  ],
  "doughImpact": [
    "Low hydration (55-62%) is critical to maintain the intricate 'crossed-arms' shape",
    "High-protein flour is required for the chewy, substantial 'bite' characteristic of real pretzels",
    "Small amount of fat (2-5% lard or butter) provides internal softness and shelf life",
    "Intensive kneading is necessary to develop a strong, smooth gluten mesh for the shiny skin",
    "Cold proofing is often used to ensure the dough is skin-firm enough to handle the lye bath"
  ],
  "bakingImpact": [
    "The 3% Lye Dip (Sodium Hydroxide) triggers an extreme Maillard reaction and flavor profile",
    "High heat (220-240°C) is necessary to 'set' the lye color before it can soak into the dough",
    "Lack of steam in the oven allows the alkaline-treated surface to dry into a glossy, crisp skin",
    "Strategic scoring on the 'belly' allows for a controlled burst in the oven",
    "Coarse salt must be applied immediately after the dip while the surface is still wet/tacky"
  ],
  "technicalProfile": {
    "hydrationRange": [
      55,
      62
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
      5
    ],
    "flourStrength": t('styles.bread_flour_or_mediumstrength_wheat_flour'),
    "fermentation": {
      "bulk": t('styles.pretzel_ferm_bulk'),
      "proof": t('styles.short_proof_before_or_after_lye_bath_depending_on_'),
      "coldRetard": t('styles.frequently_retarded_for_flavor_and_handling')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        220,
        240
      ],
      "notes": t('styles.pretzel_oven_notes')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.traditional_pretzels'),
      t('common.pretzel_rolls_and_sticks')
    ]
  },
  "regionalVariants": [
    t('styles.pretzel_var_1'),
    t('styles.pretzel_var_2'),
    t('styles.pretzel_var_3'),
    t('styles.pretzel_var_4'),
    t('styles.pretzel_var_5')
  ],
  "climateScenarios": [
    t('styles.pretzel_clim_1'),
    t('styles.pretzel_clim_2'),
    t('styles.pretzel_clim_3'),
    t('styles.pretzel_clim_4')
  ],
  "styleComparisons": [
    t('styles.pretzel_comp_1'),
    t('styles.pretzel_comp_2'),
    t('styles.pretzel_comp_3'),
    t('styles.pretzel_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.pretzel_sens_1'),
    t('styles.pretzel_sens_2'),
    t('styles.pretzel_sens_3'),
    t('styles.pretzel_sens_4'),
    t('styles.pretzel_sens_5')
  ],
  "risks": [
    t('styles.pretzel_risk_1'),
    t('styles.pretzel_risk_2'),
    t('styles.pretzel_risk_3'),
    t('styles.pretzel_risk_4'),
    t('styles.pretzel_risk_5')
  ],
  "notes": [
    t('styles.pretzel_note_1'),
    t('styles.pretzel_note_2'),
    t('styles.pretzel_note_3'),
    t('styles.pretzel_note_4'),
    t('styles.pretzel_note_5')
  ],
  "tags": [
    t('common.traditional_pretzels'),
    t('common.pretzel_rolls_and_sticks'),
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
      "title": t('styles.pretzel_title'),
      "url": "https://www.bavaria.by/experiences/food-drink/bavarian-specialties/pretzels/",
      "author": "Bavaria Tourism",
      "year": 2023
    },
    {
      "title": t('styles.modernist_bread_18'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.pretzel_title'),
      "url": "https://www.history.com/news/pretzel-history",
      "author": "History.com",
      "year": 2021
    },
    {
      "title": t('styles.pretzel_title'),
      "url": "https://www.aibinternational.com/",
      "author": "AIB International",
      "year": 2018
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.pretzel_faq_1_q'),
      "answer": t('styles.pretzel_faq_1_a')
    },
    {
      "question": t('styles.pretzel_faq_2_q'),
      "answer": t('styles.pretzel_faq_2_a')
    },
    {
      "question": t('styles.pretzel_faq_3_q'),
      "answer": t('styles.pretzel_faq_3_a')
    },
    {
      "question": t('styles.pretzel_faq_4_q'),
      "answer": t('styles.pretzel_faq_4_a')
    },
    {
      "question": t('styles.pretzel_faq_5_q'),
      "answer": t('styles.pretzel_faq_5_a')
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
  recommendedFlavorComponents: ["salted_butter_normandy"]
};
