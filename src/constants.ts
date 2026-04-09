
import {
  AmbientTemperature,
  BakeType,
  RecipeStyle,
  YeastType,
  DoughConfig,
  UnitSystem,
  FermentationTechnique
} from '@/types';

export const AMBIENT_TEMPERATURE_OPTIONS = [
  { value: AmbientTemperature.COLD, labelKey: 'calculator.temp_cold', tempRange: '< 18°C' },
  { value: AmbientTemperature.MILD, labelKey: 'calculator.temp_mild', tempRange: '18°C - 24°C' },
  { value: AmbientTemperature.HOT, labelKey: 'calculator.temp_hot', tempRange: '> 24°C' },
];

export const YEAST_OPTIONS = [
  { value: YeastType.IDY, labelKey: 'calculator.yeast_idy' },
  { value: YeastType.ADY, labelKey: 'calculator.yeast_ady' },
  { value: YeastType.FRESH, labelKey: 'calculator.yeast_fresh' },
  { value: YeastType.SOURDOUGH_STARTER, labelKey: 'calculator.yeast_sourdough' },
  { value: YeastType.USER_LEVAIN, labelKey: 'calculator.yeast_user' },
];

export const YEAST_EQUIVALENCIES = {
  IDY_TO_ADY: 1.25,
  IDY_TO_FRESH: 3.0,
  ADY_TO_IDY: 0.8,
  FRESH_TO_IDY: 0.33,
};

export const DOUGH_WEIGHT_RANGES: Partial<Record<RecipeStyle, string>> = {
  [RecipeStyle.NEAPOLITAN]: '200g - 280g',
  [RecipeStyle.NEW_YORK]: '300g - 650g',
  [RecipeStyle.PAN_PIZZA]: '400g - 900g',
  [RecipeStyle.ROMANA_TONDA]: '180g - 250g',
  [RecipeStyle.ROMAN]: '900g - 1500g', // Teglia
  [RecipeStyle.DETROIT]: '350g - 600g',
  [RecipeStyle.CIABATTA]: '80g - 400g',
  [RecipeStyle.BAGUETTE]: '300g - 350g',
  [RecipeStyle.BURGER_BUN]: '80g - 120g',
  [RecipeStyle.BRIOCHE]: '400g - 600g',
  [RecipeStyle.FOCACCIA]: '600g - 2000g',
  [RecipeStyle.SOURDOUGH]: '800g - 1200g',
};

export const DEFAULT_CONFIG: DoughConfig = {
  recipeStyle: RecipeStyle.NEAPOLITAN,
  bakeType: BakeType.PIZZAS,
  numPizzas: 4,
  doughBallWeight: 250,
  hydration: 65,
  salt: 3.0,
  yeastPercentage: 0.2, // Default for 24h
  oil: 0,
  sugar: 0,
  yeastType: YeastType.IDY,
  fermentationTechnique: FermentationTechnique.DIRECT,
  ambientTemperature: AmbientTemperature.MILD,
  bakingTempC: 430,
  scale: 1,
  flourId: 'generic_all_purpose',
  prefermentFlourPercentage: 20, // Default for Biga/Poolish
  notes: '',
  ingredients: [],
};

export const USER_DATA_QUERY_LIMITS = {
  batches: 200,
  flours: 100,
  levains: 50,
  goals: 50,
  testSeries: 50,
} as const;

export const ANALYTICS_QUERY_LIMITS = {
  notificationEvents: 500,
} as const;

export const ENVIRONMENT_TEMPERATURE_GUIDELINES = {
  [AmbientTemperature.COLD]: {
    yeastAdjustment: 1.25,
    notesKey: 'calculator.fermentation_slower'
  },
  [AmbientTemperature.MILD]: {
    yeastAdjustment: 1.0,
    notesKey: 'calculator.temp_ideal'
  },
  [AmbientTemperature.HOT]: {
    yeastAdjustment: 0.7,
    notesKey: 'calculator.fermentation_faster'
  }
};

