import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const yeasted_donuts: StyleDefinition = {
  "id": "yeasted_donuts",
  "title": t('styles.yeasted_ring_donuts'),
  "subtitle": t('styles.fried_doughs_5'),
  "category": t('styles.pastry_12'),
  "family": t('styles.fried_doughs_6'),
  "variantName": t('styles.yeasted_ring_donuts_2'),
  "origin": {
    "country": t('styles.united_states_4'),
    "region": t('styles.globalized'),
    "period": t('styles.donuts_origin_period')
  },
  "intro": t('styles.served_as_sweet_snacks_and_breakfast_items_often_g'),
  "history": t('styles.donuts_history'),
  "culturalContext": {
    "significance": [
      t('styles.donuts_sig_1'),
      t('styles.donuts_sig_2'),
      t('styles.donuts_sig_3'),
      t('styles.donuts_sig_4'),
      t('styles.donuts_sig_5')
    ],
    "consumptionContext": [
      t('styles.donuts_cons_1'),
      t('styles.donuts_cons_2'),
      t('styles.donuts_cons_3'),
      t('styles.donuts_cons_4'),
      t('styles.donuts_cons_5')
    ],
    "evolution": [
      t('styles.donuts_evo_1'),
      t('styles.donuts_evo_2'),
      t('styles.donuts_evo_3'),
      t('styles.donuts_evo_4'),
      t('styles.donuts_evo_5'),
      t('styles.donuts_evo_6')
    ],
    "rituals": [
      t('styles.donuts_rit_1'),
      t('styles.donuts_rit_2'),
      t('styles.donuts_rit_3'),
      t('styles.donuts_rit_4'),
      t('styles.donuts_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.donuts_flav_1'),
      t('styles.donuts_flav_2'),
      t('styles.donuts_flav_3'),
      t('styles.donuts_flav_4'),
      t('styles.donuts_flav_5')
    ],
    "aromaProfile": [
      t('styles.donuts_aroma_1'),
      t('styles.donuts_aroma_2'),
      t('styles.donuts_aroma_3'),
      t('styles.donuts_aroma_4'),
      t('styles.donuts_aroma_5')
    ],
    "textureNotes": [
      t('styles.donuts_text_1'),
      t('styles.donuts_text_2'),
      t('styles.donuts_text_3'),
      t('styles.donuts_text_4'),
      t('styles.donuts_text_5')
    ],
    "pairingRecommendations": [
      t('styles.donuts_pair_1'),
      t('styles.donuts_pair_2'),
      t('styles.donuts_pair_3'),
      t('styles.donuts_pair_4'),
      t('styles.donuts_pair_5')
    ],
    "flavorEvolution": [
      t('styles.donuts_fevo_1'),
      t('styles.donuts_fevo_2'),
      t('styles.donuts_fevo_3'),
      t('styles.donuts_fevo_4'),
      t('styles.donuts_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Typically straight dough; some formulas use sponge.",
    "Hydration: 60-65%"
  ],
  "doughImpact": [
    "High enrichment (shortening/sugar/milk) ensures the softest 'pillow' texture",
    "Moderate hydration (60-65%) prevents the dough from being too wet to handle during cutting",
    "Intense gluten development is required to create the network that holds the large air bubbles",
    "Addition of potato flour (in some styles) helps with moisture retention even after frying",
    "Chilling the dough after bulk makes the final cutting and handling much more precise"
  ],
  "bakingImpact": [
    "Frying at 175-180°C creates the perfect 'seal' to prevent excessive oil absorption",
    "Float-Height: The donuts should float high enough in the oil to produce a thick 'white ring'",
    "The 60-90 second fry per side is critical; any longer and the light dough dries out",
    "Immediate glazing after a 30-second drain is essential for the 'Original Glazed' look",
    "Cooling on a rack prevents the bottom from becoming soggy from trapped steam"
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
    "flourStrength": t('styles.bread_flour_or_strong_allpurpose_flour_4'),
    "fermentation": {
      "bulk": t('styles.donuts_ferm_bulk'),
      "proof": t('styles.donuts_ferm_proof'),
      "coldRetard": t('styles.often_retarded_for_production_convenience')
    },
    "oven": {
      "type": "fryer",
      "temperatureC": [
        170,
        180
      ],
      "notes": t('styles.fried_until_golden_on_both_sides_then_glazed_or_su')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.fried_donuts'),
      t('common.glazed_or_filled_donuts')
    ]
  },
  "regionalVariants": [
    t('styles.donuts_var_1'),
    t('styles.donuts_var_2'),
    t('styles.donuts_var_3'),
    t('styles.donuts_var_4'),
    t('styles.donuts_var_5')
  ],
  "climateScenarios": [
    t('styles.donuts_clim_1'),
    t('styles.donuts_clim_2'),
    t('styles.donuts_clim_3'),
    t('styles.donuts_clim_4')
  ],
  "styleComparisons": [
    t('styles.donuts_comp_1'),
    t('styles.donuts_comp_2'),
    t('styles.donuts_comp_3'),
    t('styles.donuts_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.donuts_sens_1'),
    t('styles.donuts_sens_2'),
    t('styles.donuts_sens_3'),
    t('styles.donuts_sens_4'),
    t('styles.donuts_sens_5')
  ],
  "risks": [
    t('styles.donuts_risk_1'),
    t('styles.donuts_risk_2'),
    t('styles.donuts_risk_3'),
    t('styles.donuts_risk_4'),
    t('styles.donuts_risk_5')
  ],
  "notes": [
    t('styles.donuts_note_1'),
    t('styles.donuts_note_2'),
    t('styles.donuts_note_3'),
    t('styles.donuts_note_4'),
    t('styles.donuts_note_5')
  ],
  "tags": [
    t('common.fried_donuts'),
    t('common.glazed_or_filled_donuts'),
    t('common.pastry'),
    t('common.united_states')
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
      "title": t('styles.donuts_title'),
      "url": "https://www.aibinternational.com/",
      "author": "AIB International",
      "year": 2022
    },
    {
      "title": t('styles.modernist_bread_23'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.donuts_title'),
      "url": "https://www.amazon.com/Glazed-History-Great-American-Donut/dp/0312353347",
      "author": "Erika Casper",
      "year": 2008
    },
    {
      "title": t('styles.donuts_title'),
      "url": "https://www.smithsonianmag.com/arts-culture/the-history-of-the-donut-machine-71933903/",
      "author": "Smithsonian Magazine",
      "year": 2013
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.donuts_faq_1_q'),
      "answer": t('styles.donuts_faq_1_a')
    },
    {
      "question": t('styles.donuts_faq_2_q'),
      "answer": t('styles.donuts_faq_2_a')
    },
    {
      "question": t('styles.donuts_faq_3_q'),
      "answer": t('styles.donuts_faq_3_a')
    },
    {
      "question": t('styles.donuts_faq_4_q'),
      "answer": t('styles.donuts_faq_4_a')
    },
    {
      "question": t('styles.donuts_faq_5_q'),
      "answer": t('styles.donuts_faq_5_a')
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
  "recommendedFlavorComponents": ["butter","sugar","vanilla","cinnamon","chocolate"]
};
