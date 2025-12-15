
import {
  AmbientTemperature,
  BakeType,
  RecipeStyle,
  YeastType,
  DoughConfig,
  UnitSystem,
  FermentationTechnique,
  DoughStylePreset
} from '@/types';
import i18n from '@/i18n';

export const AMBIENT_TEMPERATURE_OPTIONS = [
  { value: AmbientTemperature.COLD, labelKey: 'calculator.temp_cold', tempRange: '< 18°C' },
  { value: AmbientTemperature.MILD, labelKey: 'calculator.temp_mild', tempRange: '18°C - 24°C' },
  { value: AmbientTemperature.HOT, labelKey: 'calculator.temp_hot', tempRange: '> 24°C' },
];

export const YEAST_OPTIONS = [
  { value: YeastType.IDY, label: 'Instant Dry Yeast (IDY)' },
  { value: YeastType.ADY, label: 'Active Dry Yeast (ADY)' },
  { value: YeastType.FRESH, label: 'Fresh Yeast (CY)' },
  { value: YeastType.SOURDOUGH_STARTER, label: 'Sourdough Starter (Liquid)' },
  { value: YeastType.USER_LEVAIN, label: 'My Custom Levain' },
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
  flourId: 'generic',
  prefermentFlourPercentage: 20, // Default for Biga/Poolish
  notes: '',
  ingredients: [],
};

// Manually reconstructing essential presets to unblock build
export const DOUGH_STYLE_PRESETS: DoughStylePreset[] = [
  // --- PIZZA ---
  {
    id: 'neapolitan',
    type: BakeType.PIZZAS,
    recipeStyle: RecipeStyle.NEAPOLITAN,
    name: 'Neapolitan',
    defaultHydration: 62,
    defaultSalt: 3.0,
    defaultOil: 0,
    defaultSugar: 0,
    defaultYeastPct: 0.2,
  },
  {
    id: 'ny_style',
    type: BakeType.PIZZAS,
    recipeStyle: RecipeStyle.NEW_YORK,
    name: 'New York Style',
    defaultHydration: 62,
    defaultSalt: 2.5,
    defaultOil: 2.0,
    defaultSugar: 2.0,
    defaultYeastPct: 0.4,
  },
  {
    id: 'pan_pizza',
    type: BakeType.PIZZAS,
    recipeStyle: RecipeStyle.PAN_PIZZA,
    name: 'Pan Pizza',
    defaultHydration: 70,
    defaultSalt: 2.2,
    defaultOil: 3.0,
    defaultSugar: 1.0,
    defaultYeastPct: 0.5,
  },
  {
    id: 'detroit',
    type: BakeType.PIZZAS,
    recipeStyle: RecipeStyle.DETROIT,
    name: 'Detroit Style',
    defaultHydration: 72,
    defaultSalt: 2.5,
    defaultOil: 0,
    defaultSugar: 0,
    defaultYeastPct: 0.6,
  },
  // --- BREADS ---
  {
    id: 'ciabatta',
    type: BakeType.BREADS_SAVORY,
    recipeStyle: RecipeStyle.CIABATTA,
    name: 'Ciabatta',
    defaultHydration: 80,
    defaultSalt: 2.2,
    defaultOil: 1.0,
    defaultSugar: 0,
    defaultYeastPct: 0.4,
  },
  {
    id: 'baguette',
    type: BakeType.BREADS_SAVORY,
    recipeStyle: RecipeStyle.BAGUETTE,
    name: 'Baguette',
    defaultHydration: 68,
    defaultSalt: 2.0,
    defaultOil: 0,
    defaultSugar: 0,
    defaultYeastPct: 0.5,
  },
  {
    id: 'focaccia',
    type: BakeType.BREADS_SAVORY,
    recipeStyle: RecipeStyle.FOCACCIA,
    name: 'Focaccia',
    defaultHydration: 75,
    defaultSalt: 2.5,
    defaultOil: 3.0,
    defaultSugar: 0,
    defaultYeastPct: 0.4,
  },
  {
    id: 'sourdough',
    type: BakeType.BREADS_SAVORY,
    recipeStyle: RecipeStyle.SOURDOUGH,
    name: 'Rustic Sourdough',
    defaultHydration: 75,
    defaultSalt: 2.0,
    defaultOil: 0,
    defaultSugar: 0,
    defaultYeastPct: 0, // Sourdough usually implied
  },
  // --- PASTRY / BUNS ---
  {
    id: 'brioche',
    type: BakeType.SWEETS_PASTRY,
    recipeStyle: RecipeStyle.BRIOCHE,
    name: 'Brioche',
    defaultHydration: 45, // Eggs + Milk
    defaultSalt: 2.0,
    defaultOil: 20.0, // Butter
    defaultSugar: 12.0,
    defaultYeastPct: 1.0,
  },
  {
    id: 'burger_bun',
    type: BakeType.BREADS_SAVORY,
    recipeStyle: RecipeStyle.BURGER_BUN,
    name: 'Burger Bun',
    defaultHydration: 55,
    defaultSalt: 2.0,
    defaultOil: 8.0,
    defaultSugar: 6.0,
    defaultYeastPct: 1.0,
  }
];

export const ENVIRONMENT_TEMPERATURE_GUIDELINES = {
  [AmbientTemperature.COLD]: {
    yeastAdjustment: 1.25,
    notes: i18n.t('ui.fermentation_will_be_slower')
  },
  [AmbientTemperature.MILD]: {
    yeastAdjustment: 1.0,
    notes: i18n.t('ui.ideal_temperature_for_most_standard_recipes')
  },
  [AmbientTemperature.HOT]: {
    yeastAdjustment: 0.7,
    notes: i18n.t('ui.fermentation_will_be_faster_consider_using_cold_wa')
  }
};
