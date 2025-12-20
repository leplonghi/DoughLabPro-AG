import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const tartine_country_loaf: StyleDefinition = {
  "id": "tartine_country_loaf",
  "title": t('styles.tartine_title'),
  "subtitle": t('styles.levain__country_sourdough_5'),
  "category": t('styles.bread_25'),
  "family": t('styles.levain__country_sourdough_6'),
  "variantName": t('styles.tartine_variantName'),
  "origin": {
    "country": t('styles.united_states_3'),
    "region": t('styles.san_francisco'),
    "period": t('styles.early_21st_century')
  },
  "intro": t('styles.baked_in_artisan_bakeries_and_by_home_enthusiasts_'),
  "history": t('styles.tartine_history'),
  "culturalContext": {
    "significance": [
      t('styles.tartine_sig_1'),
      t('styles.tartine_sig_2'),
      t('styles.tartine_sig_3'),
      t('styles.tartine_sig_4'),
      t('styles.tartine_sig_5')
    ],
    "consumptionContext": [
      t('styles.tartine_cons_1'),
      t('styles.tartine_cons_2'),
      t('styles.tartine_cons_3'),
      t('styles.tartine_cons_4'),
      t('styles.tartine_cons_5')
    ],
    "evolution": [
      t('styles.tartine_evo_1'),
      t('styles.tartine_evo_2'),
      t('styles.tartine_evo_3'),
      t('styles.tartine_evo_4'),
      t('styles.tartine_evo_5'),
      t('styles.tartine_evo_6')
    ],
    "rituals": [
      t('styles.tartine_rit_1'),
      t('styles.tartine_rit_2'),
      t('styles.tartine_rit_3'),
      t('styles.tartine_rit_4'),
      t('styles.tartine_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.tartine_flav_1'),
      t('styles.tartine_flav_2'),
      t('styles.tartine_flav_3'),
      t('styles.tartine_flav_4'),
      t('styles.tartine_flav_5')
    ],
    "aromaProfile": [
      t('styles.tartine_aroma_1'),
      t('styles.tartine_aroma_2'),
      t('styles.tartine_aroma_3'),
      t('styles.tartine_aroma_4'),
      t('styles.tartine_aroma_5')
    ],
    "textureNotes": [
      t('styles.tartine_text_1'),
      t('styles.tartine_text_2'),
      t('styles.tartine_text_3'),
      t('styles.tartine_text_4'),
      t('styles.tartine_text_5')
    ],
    "pairingRecommendations": [
      t('styles.tartine_pair_1'),
      t('styles.tartine_pair_2'),
      t('styles.tartine_pair_3'),
      t('styles.tartine_pair_4'),
      t('styles.tartine_pair_5')
    ],
    "flavorEvolution": [
      t('styles.tartine_fevo_1'),
      t('styles.tartine_fevo_2'),
      t('styles.tartine_fevo_3'),
      t('styles.tartine_fevo_4'),
      t('styles.tartine_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Liquid levain 15–25% of flour.",
    "Hydration: 75-80%"
  ],
  "doughImpact": [
    "High hydration (75-80%+) creates the characteristic 'custardy' and open-crumb texture",
    "Use of 10-20% whole wheat provides the nutrients needed for wild yeast and enzymatic activity",
    "A 'young' liquid levain (used before peak acidity) ensures a mild, sweet flavor profile",
    "Gentle 'coil folds' or 'stretch and folds' build technical strength without degassing the dough",
    "Extended cold retard (12-16h) develops flavor and firms the dough for intricate scoring"
  ],
  "bakingImpact": [
    "High initial heat (230-250°C) and confined steam (Dutch oven) maximize 'oven spring'",
    "Steam keeps the surface flexible, allowing the massive expansion that creates the 'ear'",
    "The 'Dark Bake': bread is left until the crust is a deep mahogany color for maximum flavor",
    "Radiant heat from a heavy cast iron pot mimics the floor heat of a professional deck oven",
    "Venting the steam after 20 minutes is crucial for drying the crust to achieve the 'shatter' crunch"
  ],
  "technicalProfile": {
    "hydrationRange": [
      75,
      80
    ],
    "saltRange": [
      2,
      2.2
    ],
    "oilRange": [
      0,
      0
    ],
    "sugarRange": [
      0,
      1
    ],
    "flourStrength": t('styles.bread_flour_with_1020_whole_wheat'),
    "fermentation": {
      "bulk": t('styles.tartine_ferm_bulk'),
      "proof": t('styles.tartine_ferm_proof'),
      "coldRetard": t('styles.commonly_816_h_for_flavor_and_scoring')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.often_baked_in_dutch_ovens_or_steaminjected_decks')
    },
    "difficulty": t('styles.difficulty_expert'),
    "recommendedUse": [
      t('common.artisan_sourdough'),
      t('common.table_bread'),
      "Toast, tartines"
    ]
  },
  "regionalVariants": [
    t('styles.tartine_var_1'),
    t('styles.tartine_var_2'),
    t('styles.tartine_var_3'),
    t('styles.tartine_var_4'),
    t('styles.tartine_var_5')
  ],
  "climateScenarios": [
    t('styles.tartine_clim_1'),
    t('styles.tartine_clim_2'),
    t('styles.tartine_clim_3'),
    t('styles.tartine_clim_4')
  ],
  "styleComparisons": [
    t('styles.tartine_comp_1'),
    t('styles.tartine_comp_2'),
    t('styles.tartine_comp_3'),
    t('styles.tartine_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.tartine_sens_1'),
    t('styles.tartine_sens_2'),
    t('styles.tartine_sens_3'),
    t('styles.tartine_sens_4'),
    t('styles.tartine_sens_5')
  ],
  "risks": [
    t('styles.tartine_risk_1'),
    t('styles.tartine_risk_2'),
    t('styles.tartine_risk_3'),
    t('styles.tartine_risk_4'),
    t('styles.tartine_risk_5')
  ],
  "notes": [
    t('styles.tartine_note_1'),
    t('styles.tartine_note_2'),
    t('styles.tartine_note_3'),
    t('styles.tartine_note_4'),
    t('styles.tartine_note_5')
  ],
  "tags": [
    t('common.artisan_sourdough'),
    t('common.table_bread'),
    "Toast, tartines",
    t('common.bread'),
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
      "title": t('styles.tartine_bread__chad_robertson'),
      "url": "https://www.amazon.com/Tartine-Bread-Chad-Robertson/dp/0811870413",
      "author": "Chad Robertson",
      "year": 2010
    },
    {
      "title": t('styles.modernist_bread_19'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.tartine_title'),
      "url": "https://www.thebreadcode.com/recipe/tartine-style-sourdough/",
      "author": "Hendrik Kleinwaechter",
      "year": 2021
    },
    {
      "title": t('styles.tartine_title'),
      "url": "https://www.newyorker.com/magazine/2010/11/29/the-staff-of-life",
      "author": "The New Yorker",
      "year": 2010
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.tartine_faq_1_q'),
      "answer": t('styles.tartine_faq_1_a')
    },
    {
      "question": t('styles.tartine_faq_2_q'),
      "answer": t('styles.tartine_faq_2_a')
    },
    {
      "question": t('styles.tartine_faq_3_q'),
      "answer": t('styles.tartine_faq_3_a')
    },
    {
      "question": t('styles.tartine_faq_4_q'),
      "answer": t('styles.tartine_faq_4_a')
    },
    {
      "question": t('styles.tartine_faq_5_q'),
      "answer": t('styles.tartine_faq_5_a')
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
