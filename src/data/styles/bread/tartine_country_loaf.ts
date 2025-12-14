import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const tartine_country_loaf: StyleDefinition = {
  "id": "tartine_country_loaf",
  "title": "Country Sourdough (Tartine-style)",
  "subtitle": t('styles.levain__country_sourdough_5'),
  "category": t('styles.bread_25'),
  "family": t('styles.levain__country_sourdough_6'),
  "variantName": "Country Sourdough (Tartine-style)",
  "origin": {
    "country": t('styles.united_states_3'),
    "region": t('styles.san_francisco'),
    "period": t('styles.early_21st_century')
  },
  "intro": t('styles.baked_in_artisan_bakeries_and_by_home_enthusiasts_'),
  "history": "The Tartine country loaf popularized naturally leavened, high-hydration, open-crumb sourdough in the modern artisan bread movement.",
  "technicalFoundations": [
    "Liquid levain 15–25% of flour.",
    "Hydration: 75-80%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
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
      "bulk": "3–4 h at 25–27°C with repeated folds",
      "proof": "2–4 h at 20–24°C or retarded overnight",
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
    "difficulty": t('styles.expert_9'),
    "recommendedUse": [
      t('common.artisan_sourdough'),
      t('common.table_bread'),
      "Toast, tartines"
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
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
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_19'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};