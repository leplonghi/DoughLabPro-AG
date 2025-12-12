import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const st_louis_thin: StyleDefinition = {
  "id": "st_louis_thin",
  "title": t('styles.st_louis_style'),
  "subtitle": t('styles.american_cracker_thin'),
  "category": t('styles.pizza_14'),
  "family": t('styles.american_cracker_thin_2'),
  "variantName": t('styles.st_louis_style_2'),
  "origin": {
    "country": t('styles.united_states_12'),
    "region": t('styles.st_louis'),
    "period": t('styles.mid_20th_century_2')
  },
  "intro": "Cut into squares ('tavern cut'), popular in the Midwest.",
  "history": "Known for its cracker-thin, unleavened (or barely leavened) crust and use of Provel cheese.",
  "technicalFoundations": [
    "None. Often uses baking powder or very low yeast.",
    "Hydration: 40-50%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      40,
      50
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_pastry_flour_for_crispness'),
    "fermentation": {
      "bulk": t('styles.minimal_or_none'),
      "proof": t('styles.none_rolled_thin_immediately'),
      "coldRetard": t('styles.not_typical')
    },
    "oven": {
      "type": "electric_deck",
      "temperatureC": [
        230,
        260
      ],
      "notes": t('styles.baked_on_stone_or_screen_for_maximum_crispness')
    },
    "difficulty": t('styles.easy_8'),
    "recommendedUse": [
      t('common.cracker_crust_pizza'),
      t('common.party_snacks')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.cracker_crust_pizza'),
    t('common.party_snacks'),
    t('common.pizza'),
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
      "title": t('styles.modernist_pizza_12'),
      "url": ""
    },
    {
      "title": t('styles.midwest_pizza_traditions'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
