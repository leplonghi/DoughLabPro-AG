

import { RecipeStyle, YeastType, ProRecipe, BakeType, FermentationTechnique, AmbientTemperature, OvenType, DoughStylePreset, AdviceOvenType, SurfaceType, InspirationBatch, DoughConfig } from './types';

export const YEAST_OPTIONS = [
  { value: YeastType.IDY, labelKey: 'Instant Dry Yeast (IDY)' },
  { value: YeastType.ADY, labelKey: 'Active Dry Yeast (ADY)' },
  { value: YeastType.FRESH, labelKey: 'Fresh Yeast' },
  { value: YeastType.SOURDOUGH_STARTER, labelKey: 'Sourdough Starter (Levain)' },
  { value: YeastType.USER_LEVAIN, labelKey: 'My Starter' },
];

export const AMBIENT_TEMPERATURE_OPTIONS = [
  { value: AmbientTemperature.COLD, labelKey: 'Cold (< 18°C)' },
  { value: AmbientTemperature.MILD, labelKey: 'Mild (18-24°C)' },
  { value: AmbientTemperature.HOT, labelKey: 'Hot (> 24°C)' },
];

export const OVEN_TYPE_OPTIONS = [
  { value: OvenType.GAS, labelKey: 'Gas Oven' },
  { value: OvenType.ELECTRIC, labelKey: 'Electric Oven' },
  { value: OvenType.WOOD, labelKey: 'Wood-fired Oven' },
  { value: OvenType.OONI, labelKey: 'Portable Oven (e.g. Ooni)' },
  { value: OvenType.STONE_OVEN, labelKey: 'Stone Oven' },
  { value: OvenType.OTHER, labelKey: 'Other' },
]

export const DOUGH_WEIGHT_RANGES: { [key in RecipeStyle]?: string } = {
  [RecipeStyle.NEAPOLITAN]: '200-280g',
  [RecipeStyle.NEW_YORK]: '280-450g',
  [RecipeStyle.ROMAN]: '180-250g',
  [RecipeStyle.DETROIT]: '300-450g',
  [RecipeStyle.SICILIAN]: '400-600g',
  [RecipeStyle.CHICAGO]: '350-500g',
  [RecipeStyle.COUNTRY_LOAF]: '500-1000g',
  [RecipeStyle.BAGUETTE]: '250-350g',
  [RecipeStyle.CIABATTA]: '400-600g',
  [RecipeStyle.FOCACCIA]: '500-1000g',
  [RecipeStyle.SANDWICH_LOAF]: '800-1200g',
  [RecipeStyle.BURGER_BUN]: '80-120g',
  [RecipeStyle.HOKKAIDO_MILK_BREAD]: '450-900g',
  [RecipeStyle.COOKIE_NY_CHOC_CHIP]: '100-170g',
  [RecipeStyle.CINNAMON_ROLL]: '80-120g',
  // New Styles
  [RecipeStyle.PAO_DE_QUEIJO]: '20-50g',
  [RecipeStyle.PAO_FRANCES]: '50-60g',
  [RecipeStyle.FLATBREAD]: '80-150g',
  [RecipeStyle.ENRICHED_BRIOCHE_CLASSIC]: '40-80g',
  [RecipeStyle.BRIOCHE]: '60-400g', // Small vs Nanterre
  [RecipeStyle.PRETZEL]: '80-120g',
  [RecipeStyle.BROWNIE]: '40-150g',
  [RecipeStyle.SWEETS_PASTRY]: '50-150g',
  [RecipeStyle.PASTRY_DANISH]: '60-120g',
};

export const DEFAULT_CONFIG: DoughConfig = {
  bakeType: BakeType.PIZZAS,
  recipeStyle: RecipeStyle.NEAPOLITAN,
  stylePresetId: 'pizza_napolitana',
  numPizzas: 4,
  doughBallWeight: 250,
  hydration: 62,
  salt: 2.5,
  oil: 0,
  sugar: 1,
  fermentationTechnique: FermentationTechnique.DIRECT,
  yeastType: YeastType.IDY,
  yeastPercentage: 0.2,
  prefermentFlourPercentage: 30,
  scale: 1,
  flourId: 'generic_all_purpose',
  ambientTemperature: AmbientTemperature.MILD,
  notes: '',
  bakingTempC: 250,
};

// --- DYNAMIC PRESETS (Generated from Registry) ---
// This ensures the calculator uses the Single Source of Truth
export { DYNAMIC_PRESETS as DOUGH_STYLE_PRESETS } from './logic/presetLogic';


export const YEAST_EQUIVALENCIES = {
  // Base is Instant Dry Yeast (IDY)
  IDY_TO_ADY: 1.25, // Use 25% more ADY than IDY
  IDY_TO_FRESH: 3.0,  // Use 3x more Fresh Yeast than IDY
  ADY_TO_IDY: 1 / 1.25, // 0.8
  FRESH_TO_IDY: 1 / 3.0, // 0.333
};

export const ENVIRONMENT_TEMPERATURE_GUIDELINES = {
  [AmbientTemperature.COLD]: {
    yeastAdjustment: 1.25, // Suggest ~25% more yeast
    notes: "Fermentation will be slower. Consider using warm water (25-28°C) or extending proofing times."
  },
  [AmbientTemperature.MILD]: {
    yeastAdjustment: 1.0, // No change
    notes: "Ideal temperature for most standard recipes."
  },
  [AmbientTemperature.HOT]: {
    yeastAdjustment: 0.7, // Suggest ~30% less yeast
    notes: "Fermentation will be faster. Consider using cold water and reducing bulk time."
  }
};

export const PRO_RECIPES: ProRecipe[] = [
  {
    nameKey: 'Neapolitan Pizza (AVPN Style)',
    descriptionKey: 'The classic Italian pizza. Soft, airy crust, cooked in a very hot oven.',
    config: {
      bakeType: BakeType.PIZZAS,
      recipeStyle: RecipeStyle.NEAPOLITAN,
      numPizzas: 4,
      doughBallWeight: 250,
      hydration: 62,
      salt: 2.8,
      oil: 0,
      fermentationTechnique: FermentationTechnique.DIRECT,
      yeastType: YeastType.IDY,
      yeastPercentage: 0.2,
    },
  },
  {
    nameKey: 'New York Style',
    descriptionKey: 'Large, foldable slices with a crispy yet chewy crust. Perfect for home ovens.',
    config: {
      bakeType: BakeType.PIZZAS,
      recipeStyle: RecipeStyle.NEW_YORK,
      numPizzas: 3,
      doughBallWeight: 350,
      hydration: 65,
      salt: 2.2,
      oil: 2,
      fermentationTechnique: FermentationTechnique.DIRECT,
      yeastType: YeastType.IDY,
      yeastPercentage: 0.4,
    }
  },
  // ... (Other recipes follow same pattern)
];


// --- Environment Advisor Constants ---
export const DEFAULT_DDT_C = 25; // Source: ChainBaker (24-26°C range), using 25 as a solid target.

export const BAKING_PROFILES: Record<string, Record<string, { tempC: number; timeSeconds: [number, number] }>> = {
  'wood_fired': {
    'biscotto': { tempC: 485, timeSeconds: [60, 90] }, // Source: AVPN
    'stone': { tempC: 430, timeSeconds: [70, 100] },
  },
  'portable_high_temp': { // e.g., Ooni
    'stone': { tempC: 400, timeSeconds: [90, 120] },
    'steel': { tempC: 380, timeSeconds: [100, 150] }, // Lower temp to avoid burning
  },
  'gas_home': {
    'steel': { tempC: 290, timeSeconds: [300, 420] }, // 5-7 min, Source: Serious Eats
    'stone': { tempC: 270, timeSeconds: [420, 600] }, // 7-10 min
    'pan': { tempC: 250, timeSeconds: [900, 1200] }, // 15-20 min for Detroit/Focaccia
  },
  'electric_home': {
    'steel': { tempC: 290, timeSeconds: [300, 420] },
    'stone': { tempC: 270, timeSeconds: [420, 600] },
    'pan': { tempC: 250, timeSeconds: [900, 1200] },
  },
};

export const BAKING_SURFACE_PROPERTIES: Record<SurfaceType, { conductivity: 'high' | 'medium' | 'low'; description: string }> = {
  'steel': { conductivity: 'high', description: 'Baking Steel - High conductivity, ideal for home ovens to get a crispy base. Source: PizzaBlab/Serious Eats.' },
  'stone': { conductivity: 'medium', description: 'Pizza Stone - Medium conductivity, versatile for most ovens.' },
  'biscotto': { conductivity: 'low', description: 'Biscotto (Clay) - Low conductivity, essential for very high temp ovens (>450°C) to prevent burning the base. Source: AVPN.' },
  'pan': { conductivity: 'medium', description: 'Baking Pan/Tray - Used for styles like Detroit and Focaccia.' },
};

// Community Inspirations
export const INSPIRATION_BATCHES: InspirationBatch[] = [
  {
    id: 'insp-neapolitan',
    name: 'Classic Neapolitan',
    config: { recipeStyle: RecipeStyle.NEAPOLITAN, hydration: 62, salt: 2.8, oil: 0 }
  },
  {
    id: 'insp-ny',
    name: 'New York Style (Slice)',
    config: { recipeStyle: RecipeStyle.NEW_YORK, hydration: 65, salt: 2.2, oil: 2 }
  },
  {
    id: 'insp-sourdough',
    name: 'Rustic Sourdough Bread',
    config: { bakeType: BakeType.BREADS_SAVORY, recipeStyle: RecipeStyle.COUNTRY_LOAF, hydration: 78, salt: 2.0, yeastType: YeastType.SOURDOUGH_STARTER, yeastPercentage: 20 }
  },
  {
    id: 'insp-focaccia',
    name: 'High Hydration Focaccia',
    config: { bakeType: BakeType.BREADS_SAVORY, recipeStyle: RecipeStyle.FOCACCIA, hydration: 80, salt: 2.5, oil: 5 }
  },
];
