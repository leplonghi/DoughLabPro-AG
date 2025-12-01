import { DoughStyleDefinition } from '@/types/styles';
import { FermentationTechnique } from '@/types';

export const STYLES_DATA: DoughStyleDefinition[] = [
  // ========================================================
  // PIZZA STYLES
  // ========================================================
  {
    id: 'neapolitan_classic',
    name: 'Neapolitan Pizza (AVPN)',
    family: 'Flatbread / Pizza',
    category: 'pizza',
    origin: {
      country: 'Italy',
      region: 'Naples',
      period: '18th Century'
    },
    history: 'The original pizza style protected by AVPN regulations. Characterized by a soft, airy cornicione and thin center.',
    culturalContext: 'UNESCO Intangible Cultural Heritage. Traditionally eaten with knife and fork in Naples.',
    isCanonical: true,
    source: 'official',
    description: 'Soft, airy, high-heat baked pizza with a distinct cornicione. Strictly regulated ingredients and method.',
    country: 'Italy',
    isPro: false,
    technical: {
      hydration: 60,
      salt: 2.8,
      oil: 0,
      sugar: 0,
      fermentation: '8-24h',
      fermentationTechnique: FermentationTechnique.DIRECT,
      bakingTempC: 430
    },
    technicalProfile: {
      hydration: [58, 62],
      salt: [2.5, 3.0],
      oil: [0, 0],
      sugar: [0, 0],
      flourStrength: 'W280-320',
      fermentation: {
        bulk: '2h',
        proof: '6-24h',
        coldRetard: 'Optional (not traditional)'
      },
      ovenRecommendations: 'Wood-fired or Gas oven capable of 430°C+.',
      difficulty: 'Hard',
      recommendedUse: 'Dinner, Restaurant'
    },
    tags: ['high-heat', 'soft-crust', 'wood-fired', 'direct-dough'],
    variations: [
      {
        id: 'neapolitan_contemporary',
        title: 'Canotto (Contemporary)',
        description: 'Modern style with exaggerated, puffy cornicione.',
        technicalAdjustments: { hydration: [65, 75] },
        type: 'substyle'
      }
    ],
    references: [
      { source: 'AVPN Regulations', url: 'https://www.pizzanapoletana.org/' }
    ]
  },
  {
    id: 'ny_style',
    name: 'New York Style',
    family: 'Flatbread / Pizza',
    category: 'pizza',
    origin: {
      country: 'USA',
      region: 'New York City',
      period: 'Early 1900s'
    },
    history: 'Evolved from Neapolitan immigrants adapting to coal ovens and American flour.',
    culturalContext: 'The quintessential slice shop pizza. Foldable, crisp yet pliable.',
    isCanonical: true,
    source: 'official',
    description: 'Large, wide slices with a crisp bottom and chewy texture. Often sold by the slice.',
    country: 'USA',
    isPro: false,
    technical: {
      hydration: 62,
      salt: 2.5,
      oil: 2,
      sugar: 2,
      fermentation: '24-72h',
      fermentationTechnique: FermentationTechnique.DIRECT,
      bakingTempC: 280
    },
    technicalProfile: {
      hydration: [60, 65],
      salt: [2.0, 3.0],
      oil: [1, 3],
      sugar: [1, 3],
      flourStrength: 'W300-360 (High Gluten)',
      fermentation: {
        bulk: '2h',
        proof: '24-72h Cold',
        coldRetard: 'Essential'
      },
      ovenRecommendations: 'Deck oven or Home Steel/Stone at 260-300°C.',
      difficulty: 'Medium',
      recommendedUse: 'Lunch, Dinner, Party'
    },
    tags: ['cold-fermentation', 'oil-enriched', 'sugar-enriched', 'crisp-bottom'],
    variations: [
      {
        id: 'ny_elite',
        title: 'Elite Artisan NY',
        description: 'Higher hydration, sourdough hybrid for artisan shops.',
        technicalAdjustments: { hydration: [65, 70] },
        type: 'experimental'
      }
    ]
  },
  {
    id: 'roman_teglia',
    name: 'Pizza in Teglia (Roman Pan)',
    family: 'Flatbread / Pizza',
    category: 'pizza',
    origin: {
      country: 'Italy',
      region: 'Rome',
      period: '1980s (Modern Revival)'
    },
    history: 'High hydration pan pizza popularized by Bonci. Light, airy crumb with a crunchy bottom.',
    culturalContext: 'Sold by weight (al taglio) in Rome.',
    isCanonical: true,
    source: 'official',
    description: 'High hydration (80%+) dough baked in blue steel pans. Extremely airy and light.',
    country: 'Italy',
    isPro: false,
    technical: {
      hydration: 80,
      salt: 2.5,
      oil: 2.5,
      sugar: 0,
      fermentation: '24-48h',
      fermentationTechnique: FermentationTechnique.DIRECT, // Often uses fridge
      bakingTempC: 300
    },
    technicalProfile: {
      hydration: [75, 90],
      salt: [2.2, 2.8],
      oil: [2, 3],
      sugar: [0, 0],
      flourStrength: 'W320-380',
      fermentation: {
        bulk: '1-2h',
        proof: '24-48h Cold',
        coldRetard: 'Essential'
      },
      ovenRecommendations: 'Electric deck or Home oven max temp.',
      difficulty: 'Expert',
      recommendedUse: 'Lunch, Snack'
    },
    tags: ['high-hydration', 'pan-baked', 'cold-fermentation', 'airy-crumb'],
    variations: []
  },
  {
    id: 'detroit_style',
    name: 'Detroit Style',
    family: 'Flatbread / Pizza',
    category: 'pizza',
    origin: {
      country: 'USA',
      region: 'Detroit',
      period: '1946'
    },
    history: 'Baked in automotive parts pans. Characterized by the frico (cheese crown) edge.',
    culturalContext: 'Motor City classic. Sauce goes on top of cheese.',
    isCanonical: true,
    source: 'official',
    description: 'Deep dish, rectangular pan pizza with a caramelized cheese edge (frico).',
    country: 'USA',
    isPro: false,
    technical: {
      hydration: 70,
      salt: 2.5,
      oil: 1,
      sugar: 0,
      fermentation: '4-24h',
      fermentationTechnique: FermentationTechnique.DIRECT,
      bakingTempC: 260
    },
    technicalProfile: {
      hydration: [68, 75],
      salt: [2.0, 3.0],
      oil: [1, 3],
      sugar: [0, 0],
      flourStrength: 'W280-320',
      fermentation: {
        bulk: '2h',
        proof: '2-4h in pan',
        coldRetard: 'Optional'
      },
      ovenRecommendations: 'Home oven 260°C.',
      difficulty: 'Easy',
      recommendedUse: 'Dinner, Party'
    },
    tags: ['pan-baked', 'cheese-crown', 'thick-crust'],
    variations: []
  },

  // ========================================================
  // BREAD STYLES
  // ========================================================
  {
    id: 'sourdough_country',
    name: 'Country Sourdough',
    family: 'Hearth Bread',
    category: 'bread',
    origin: {
      country: 'Global',
      region: 'California (Revival)',
      period: 'Ancient / Modern Revival'
    },
    history: 'The modern artisan standard. Wild yeast leavened, long fermentation.',
    culturalContext: 'Symbol of the artisan bread movement.',
    isCanonical: true,
    source: 'official',
    description: 'Crusty, open-crumb loaf leavened with wild yeast starter.',
    country: 'USA',
    isPro: false,
    technical: {
      hydration: 75,
      salt: 2.0,
      oil: 0,
      sugar: 0,
      fermentation: '24h',
      fermentationTechnique: FermentationTechnique.SOURDOUGH,
      bakingTempC: 250
    },
    technicalProfile: {
      hydration: [70, 85],
      salt: [1.8, 2.2],
      oil: [0, 0],
      sugar: [0, 0],
      flourStrength: 'W280-350',
      fermentation: {
        bulk: '4-6h',
        proof: '12-16h Cold',
        coldRetard: 'Standard'
      },
      ovenRecommendations: 'Dutch Oven or Steam Injection Deck.',
      difficulty: 'Hard',
      recommendedUse: 'Table Bread, Toast'
    },
    tags: ['sourdough', 'long-fermentation', 'hearth-baked', 'crusty'],
    variations: [
      {
        id: 'tartine_style',
        title: 'Tartine Style',
        description: 'High hydration, young leaven, mild flavor.',
        technicalAdjustments: { hydration: [80, 85] },
        type: 'substyle'
      }
    ]
  },
  {
    id: 'baguette_tradition',
    name: 'Baguette de Tradition',
    family: 'Hearth Bread',
    category: 'bread',
    origin: {
      country: 'France',
      region: 'Paris',
      period: '1993 (Decree)'
    },
    history: 'Protected by French law (1993 Décret Pain). No additives allowed.',
    culturalContext: 'Daily staple in France.',
    isCanonical: true,
    source: 'official',
    description: 'Iconic French stick. Crisp crust, creamy open crumb, nutty flavor.',
    country: 'France',
    isPro: false,
    technical: {
      hydration: 68,
      salt: 2.0,
      oil: 0,
      sugar: 0,
      fermentation: '18-24h',
      fermentationTechnique: FermentationTechnique.POOLISH, // Often poolish or levain
      bakingTempC: 250
    },
    technicalProfile: {
      hydration: [65, 72],
      salt: [1.8, 2.0],
      oil: [0, 0],
      sugar: [0, 0],
      flourStrength: 'W240-280 (T65)',
      fermentation: {
        bulk: '2-3h',
        proof: '1-2h or Cold',
        coldRetard: 'Common'
      },
      ovenRecommendations: 'Steam essential.',
      difficulty: 'Expert',
      recommendedUse: 'Sandwich, Table Bread'
    },
    tags: ['poolish', 'hearth-baked', 'crisp-crust'],
    variations: []
  },
  {
    id: 'ciabatta',
    name: 'Ciabatta',
    family: 'Hearth Bread',
    category: 'bread',
    origin: {
      country: 'Italy',
      region: 'Veneto',
      period: '1982'
    },
    history: 'Invented by Arnaldo Cavallari to compete with the baguette.',
    culturalContext: 'Means "slipper" due to its shape.',
    isCanonical: true,
    source: 'official',
    description: 'High hydration Italian white bread. Very open crumb, thin crisp crust.',
    country: 'Italy',
    isPro: false,
    technical: {
      hydration: 80,
      salt: 2.2,
      oil: 2, // Sometimes added
      sugar: 0,
      fermentation: '18h',
      fermentationTechnique: FermentationTechnique.BIGA,
      bakingTempC: 240
    },
    technicalProfile: {
      hydration: [75, 85],
      salt: [2.0, 2.5],
      oil: [0, 3],
      sugar: [0, 0],
      flourStrength: 'W280-320',
      fermentation: {
        bulk: '2-3h',
        proof: '1h',
        coldRetard: 'For Biga'
      },
      ovenRecommendations: 'Steam helpful.',
      difficulty: 'Hard',
      recommendedUse: 'Sandwich (Panini)'
    },
    tags: ['high-hydration', 'biga', 'open-crumb'],
    variations: []
  },
  {
    id: 'focaccia_genovese',
    name: 'Focaccia Genovese',
    family: 'Flatbread',
    category: 'flatbread',
    origin: {
      country: 'Italy',
      region: 'Liguria',
      period: 'Ancient'
    },
    history: 'The classic olive oil flatbread. Salty brine emulsion on top is key.',
    culturalContext: 'Breakfast or snack in Genoa.',
    isCanonical: true,
    source: 'official',
    description: 'Dimpled flatbread enriched with olive oil and finished with a brine emulsion.',
    country: 'Italy',
    isPro: false,
    technical: {
      hydration: 65,
      salt: 2.5,
      oil: 10, // High oil
      sugar: 1, // Optional malt
      fermentation: '8-12h',
      fermentationTechnique: FermentationTechnique.DIRECT,
      bakingTempC: 230
    },
    technicalProfile: {
      hydration: [60, 70],
      salt: [2.0, 2.5],
      oil: [5, 15],
      sugar: [0, 2],
      flourStrength: 'W240-280',
      fermentation: {
        bulk: '1h',
        proof: '2-4h in pan',
        coldRetard: 'Optional'
      },
      ovenRecommendations: 'Home oven 230°C.',
      difficulty: 'Easy',
      recommendedUse: 'Snack, Sandwich'
    },
    tags: ['oil-enriched', 'pan-baked', 'dimpled'],
    variations: [
      {
        id: 'focaccia_barese',
        title: 'Focaccia Barese',
        description: 'Includes potato in dough, topped with tomatoes and olives.',
        technicalAdjustments: { hydration: [65, 70] },
        type: 'regional'
      }
    ]
  },

  // ========================================================
  // ENRICHED & BUNS
  // ========================================================
  {
    id: 'brioche_classic',
    name: 'Brioche à Tête',
    family: 'Enriched',
    category: 'enriched_bread',
    origin: {
      country: 'France',
      region: 'Normandy',
      period: '15th Century'
    },
    history: 'Rich yeast bread with high egg and butter content.',
    culturalContext: 'Breakfast or dessert.',
    isCanonical: true,
    source: 'official',
    description: 'Rich, tender crumb due to high butter and egg content.',
    country: 'France',
    isPro: false,
    technical: {
      hydration: 60, // Effective hydration is higher due to eggs/butter
      salt: 2.0,
      oil: 50, // Butter
      sugar: 10,
      fermentation: '24h',
      fermentationTechnique: FermentationTechnique.DIRECT, // Often sponge
      bakingTempC: 190
    },
    technicalProfile: {
      hydration: [50, 65], // Water/Milk only
      salt: [1.8, 2.2],
      oil: [20, 60], // Butter %
      sugar: [8, 15],
      flourStrength: 'W300-350 (Strong for fat)',
      fermentation: {
        bulk: '1h',
        proof: '12h Cold',
        coldRetard: 'Essential for shaping'
      },
      ovenRecommendations: 'Convection 170-190°C.',
      difficulty: 'Hard',
      recommendedUse: 'Breakfast, Burger Bun'
    },
    tags: ['high-fat', 'enriched', 'egg-enriched'],
    variations: []
  },
  {
    id: 'burger_bun_brioche',
    name: 'Brioche Burger Bun',
    family: 'Enriched',
    category: 'burger_bun',
    origin: {
      country: 'USA',
      region: 'Modern',
      period: '2000s'
    },
    history: 'Adapted brioche for holding meat patties without crumbling.',
    culturalContext: 'The gold standard for gourmet burgers.',
    isCanonical: true,
    source: 'official',
    description: 'Soft, slightly sweet bun that holds up to juicy burgers.',
    country: 'USA',
    isPro: false,
    technical: {
      hydration: 60,
      salt: 2.0,
      oil: 15,
      sugar: 8,
      fermentation: '4h',
      fermentationTechnique: FermentationTechnique.DIRECT,
      bakingTempC: 190
    },
    technicalProfile: {
      hydration: [55, 65],
      salt: [1.8, 2.2],
      oil: [10, 20],
      sugar: [5, 12],
      flourStrength: 'W260-300',
      fermentation: {
        bulk: '1h',
        proof: '1-2h',
        coldRetard: 'Optional'
      },
      ovenRecommendations: 'Standard oven.',
      difficulty: 'Medium',
      recommendedUse: 'Burgers'
    },
    tags: ['enriched', 'soft-crumb'],
    variations: []
  },
  {
    id: 'shokupan',
    name: 'Japanese Milk Bread (Shokupan)',
    family: 'Enriched',
    category: 'enriched_bread',
    origin: {
      country: 'Japan',
      region: 'Tokyo',
      period: '20th Century'
    },
    history: 'Uses Tangzhong (water roux) method for fluffiness and shelf life.',
    culturalContext: 'Premium sandwich bread in Japan.',
    isCanonical: true,
    source: 'official',
    description: 'Incredibly soft, fluffy white bread using the Tangzhong method.',
    country: 'Japan',
    isPro: false,
    technical: {
      hydration: 70,
      salt: 1.8,
      oil: 8,
      sugar: 10,
      fermentation: '4h',
      fermentationTechnique: FermentationTechnique.DIRECT, // Tangzhong
      bakingTempC: 180
    },
    technicalProfile: {
      hydration: [68, 75],
      salt: [1.5, 2.0],
      oil: [5, 10],
      sugar: [8, 15],
      flourStrength: 'W280-320',
      fermentation: {
        bulk: '1h',
        proof: '1-2h',
        coldRetard: 'Optional'
      },
      ovenRecommendations: 'Pullman Pan.',
      difficulty: 'Medium',
      recommendedUse: 'Sandwich, Toast'
    },
    tags: ['tangzhong', 'soft-crumb', 'enriched'],
    variations: []
  },

  // ========================================================
  // COOKIES
  // ========================================================
  {
    id: 'ny_cookie',
    name: 'NY Style Cookie',
    family: 'Cookie',
    category: 'cookies_confectionery',
    origin: {
      country: 'USA',
      region: 'New York',
      period: '1990s (Levain Bakery)'
    },
    history: 'Massive, gooey-center cookies popularized by Levain Bakery.',
    culturalContext: 'Modern viral dessert.',
    isCanonical: true,
    source: 'official',
    description: 'Thick, gooey center, crisp edge. 170g+ per cookie.',
    country: 'USA',
    isPro: false,
    technical: {
      hydration: 15, // Eggs/Butter water content roughly
      salt: 1.0,
      oil: 60, // Butter
      sugar: 50,
      fermentation: '12h (Chill)',
      fermentationTechnique: FermentationTechnique.NO_FERMENT,
      bakingTempC: 200
    },
    technicalProfile: {
      hydration: [10, 20],
      salt: [0.5, 1.5],
      oil: [40, 70],
      sugar: [40, 80],
      flourStrength: 'Low (Cake/AP)',
      fermentation: {
        bulk: 'N/A',
        proof: 'N/A',
        coldRetard: '12-24h Chill Essential'
      },
      ovenRecommendations: 'Convection 200°C.',
      difficulty: 'Easy',
      recommendedUse: 'Dessert'
    },
    tags: ['high-fat', 'high-sugar', 'cold-rest'],
    variations: []
  }
];

export const getStyleById = (id: string): DoughStyleDefinition | undefined => {
  return STYLES_DATA.find(s => s.id === id);
};

export const getAllowedFermentationTechniques = (recipeStyle: string, bakeType: string): FermentationTechnique[] => {
  // Default to all relevant techniques
  if (bakeType === 'SWEETS_PASTRY') {
    return [FermentationTechnique.NO_FERMENT, FermentationTechnique.CHEMICAL, FermentationTechnique.DIRECT];
  }

  // For breads/pizzas
  return [
    FermentationTechnique.DIRECT,
    FermentationTechnique.POOLISH,
    FermentationTechnique.BIGA,
    FermentationTechnique.SOURDOUGH
  ];
};
