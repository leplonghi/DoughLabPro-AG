import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const berliner_bomboloni: StyleDefinition = {
  "id": "berliner_bomboloni",
  "title": t('styles.berliner_title'),
  "subtitle": t('styles.fried_doughs'),
  "category": t('styles.pastry_2'),
  "family": t('styles.fried_doughs_2'),
  "variantName": t('styles.berliner_variantName'),
  "origin": {
    "country": t('styles.berliner_origin_country'),
    "region": t('styles.europewide'),
    "period": t('styles.traditional_14')
  },
  "intro": t('styles.berliner_intro'),
  "history": t('styles.berliner_history'),
  "culturalContext": {
    "significance": [
      t('styles.berliner_sig_1'),
      t('styles.berliner_sig_2'),
      t('styles.berliner_sig_3'),
      t('styles.berliner_sig_4'),
      t('styles.berliner_sig_5')
    ],
    "consumptionContext": [
      t('styles.berliner_cons_1'),
      t('styles.berliner_cons_2'),
      t('styles.berliner_cons_3'),
      t('styles.berliner_cons_4'),
      t('styles.berliner_cons_5')
    ],
    "evolution": [
      t('styles.berliner_evo_1'),
      t('styles.berliner_evo_2'),
      t('styles.berliner_evo_3'),
      t('styles.berliner_evo_4'),
      t('styles.berliner_evo_5'),
      t('styles.berliner_evo_6')
    ],
    "rituals": [
      t('styles.berliner_rit_1'),
      t('styles.berliner_rit_2'),
      t('styles.berliner_rit_3'),
      t('styles.berliner_rit_4'),
      t('styles.berliner_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.berliner_flav_1'),
      t('styles.berliner_flav_2'),
      t('styles.berliner_flav_3'),
      t('styles.berliner_flav_4'),
      t('styles.berliner_flav_5')
    ],
    "aromaProfile": [
      t('styles.berliner_aroma_1'),
      t('styles.berliner_aroma_2'),
      t('styles.berliner_aroma_3'),
      t('styles.berliner_aroma_4'),
      t('styles.berliner_aroma_5')
    ],
    "textureNotes": [
      t('styles.berliner_text_1'),
      t('styles.berliner_text_2'),
      t('styles.berliner_text_3'),
      t('styles.berliner_text_4'),
      t('styles.berliner_text_5')
    ],
    "pairingRecommendations": [
      t('styles.berliner_pair_1'),
      t('styles.berliner_pair_2'),
      t('styles.berliner_pair_3'),
      t('styles.berliner_pair_4'),
      t('styles.berliner_pair_5')
    ],
    "flavorEvolution": [
      t('styles.berliner_fevo_1'),
      t('styles.berliner_fevo_2'),
      t('styles.berliner_fevo_3'),
      t('styles.berliner_fevo_4'),
      t('styles.berliner_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Usually straight dough or sponge-based enriched dough.",
    "Hydration: 60-65%"
  ],
  "doughImpact": [
    "High enrichment (butter/sugar/eggs) ensures a tender, cake-like final crumb",
    "Moderate hydration (60-65%) is necessary to keep the dough buoyant in the oil",
    "Use of Bread Flour provides the strength needed for the large gas bubbles that create the 'white ring'",
    "The inclusion of lemon zest or vanilla in the dough is traditional for aromatic complexity",
    "Minimal handling during shaping is vital to prevent deflating the delicate aeration"
  ],
  "bakingImpact": [
    "Frying at exactly 170-175°C: too hot and they stay raw inside; too cold and they absorb too much oil",
    "Floating Depth: Doughnuts must float halfway in the oil to create the signature central 'white ring'",
    "The 'Flip': timed to ensure even browning and structure on both sides within 2-3 minutes",
    "Post-Fry Draining: cooling on a wire rack for 60 seconds before sugar-rolling is key for texture",
    "Cooling for 15-20 mins before filling is mandatory to prevent the internal steam from curdling the jam"
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      65
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      10,
      20
    ],
    "sugarRange": [
      10,
      20
    ],
    "flourStrength": t('styles.bread_or_strong_pastry_flour'),
    "fermentation": {
      "bulk": t('styles.berliner_ferm_bulk'),
      "proof": t('styles.berliner_ferm_proof'),
      "coldRetard": t('styles.sometimes_retarded_overnight')
    },
    "oven": {
      "type": "fryer",
      "temperatureC": [
        170,
        180
      ],
      "notes": t('styles.fried_cooled_then_injected_with_fillings_and_duste')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.filled_donuts'),
      t('common.sweet_fried_pastries')
    ]
  },
  "regionalVariants": [
    t('styles.berliner_var_1'),
    t('styles.berliner_var_2'),
    t('styles.berliner_var_3'),
    t('styles.berliner_var_4'),
    t('styles.berliner_var_5')
  ],
  "climateScenarios": [
    t('styles.berliner_clim_1'),
    t('styles.berliner_clim_2'),
    t('styles.berliner_clim_3'),
    t('styles.berliner_clim_4')
  ],
  "styleComparisons": [
    t('styles.berliner_comp_1'),
    t('styles.berliner_comp_2'),
    t('styles.berliner_comp_3'),
    t('styles.berliner_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.berliner_sens_1'),
    t('styles.berliner_sens_2'),
    t('styles.berliner_sens_3'),
    t('styles.berliner_sens_4'),
    t('styles.berliner_sens_5')
  ],
  "risks": [
    t('styles.berliner_risk_1'),
    t('styles.berliner_risk_2'),
    t('styles.berliner_risk_3'),
    t('styles.berliner_risk_4'),
    t('styles.berliner_risk_5')
  ],
  "notes": [
    t('styles.berliner_note_1'),
    t('styles.berliner_note_2'),
    t('styles.berliner_note_3'),
    t('styles.berliner_note_4'),
    t('styles.berliner_note_5')
  ],
  "tags": [
    t('common.filled_donuts'),
    t('common.sweet_fried_pastries'),
    t('common.pastry'),
    "Germany/Italy"
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
      "title": t('styles.berliner_title'),
      "url": "https://www.berlin.de/en/food/traditional-food/3966804-5047817-berliner-doughnut.en.html",
      "author": "Berlin.de Official Portal",
      "year": 2023
    },
    {
      "title": t('styles.modernist_bread_23'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.berliner_title'),
      "url": "https://www.seriouseats.com/how-to-make-the-best-doughnuts-at-home",
      "author": "Serious Eats / Stella Parks",
      "year": 2019
    },
    {
      "title": t('styles.berliner_title'),
      "url": "https://www.cucinaitaliana.it/",
      "author": "La Cucina Italiana",
      "year": 2021
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.berliner_faq_1_q'),
      "answer": t('styles.berliner_faq_1_a')
    },
    {
      "question": t('styles.berliner_faq_2_q'),
      "answer": t('styles.berliner_faq_2_a')
    },
    {
      "question": t('styles.berliner_faq_3_q'),
      "answer": t('styles.berliner_faq_3_a')
    },
    {
      "question": t('styles.berliner_faq_4_q'),
      "answer": t('styles.berliner_faq_4_a')
    },
    {
      "question": t('styles.berliner_faq_5_q'),
      "answer": t('styles.berliner_faq_5_a')
    }
  ],
  "affiliateProducts": [],

  "isCanonical": true,
  "source": "official"
  ,
  "defaults": {
    "hydration": 60,
    "salt": 1.5,
    "oil": 5,
    "sugar": 10
  },
  recommendedFlavorComponents: ["strawberry_jam", "vanilla_madagascar", "citrus_zest"]
};
