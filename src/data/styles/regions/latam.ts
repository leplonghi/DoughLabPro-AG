import { DoughStyleDefinition } from '@/types/styles';
import { arepa_corn_flatbread } from '../bread/arepa_corn_flatbread';
import { pao_frances_brazil } from '../bread/pao_frances_brazil';
import { brazilian_cheese_bread } from '../gluten_free/brazilian_cheese_bread';
import { brazilian_pizzeria_gas_deck } from '../pizza/brazilian_pizzeria_gas_deck';
import { pizza_argentina_fugazzeta } from '../pizza/pizza_argentina_fugazzeta';

export const medialunas: DoughStyleDefinition = {
    id: 'medialunas',
    name: 'Medialunas de Manteca',
    category: 'pastry',
    description: 'Argentine croissants, smaller and sweeter than French ones, brushed with a rich simple syrup. Essential part of the Argentine breakfast or merienda.',
    origin: {
        country: 'Argentina',
        region: 'Buenos Aires',
        period: '19th Century'
    },
    technicalProfile: {
        hydration: [45, 55],
        ovenTemp: [190, 210],
        salt: [1.5, 2],
        oil: [0, 0],
        sugar: [12, 18],
        fermentationSteps: [
            'Mix dough until medium gluten development',
            'Rest dough in fridge for 2-4 hours',
            'Incorporate butter block (tourage) with 3 simple folds',
            'Rest dough between folds',
            'Shape into crescents (medialunas)',
            'Bake and brush immediately with hot syrup'
        ],
        difficulty: 'Expert',
        flourStrength: 'Strong (12-14% protein)',
        recommendedUse: []
    },
    difficulty: 'Expert',
    fermentationType: 'direct',
    notes: [
        'Brushing with almíbar (syrup) right out of the oven is crucial to the texture and stickiness.'
    ],
    watchouts: [
        'Dough must be kept cold to prevent butter from melting into the layers.'
    ],
    history: 'Adapted from the European kipferl and croissant, brought by immigrants but adapted to local tastes (sweeter, more compact).',
    tags: ['Laminated', 'Sweet syrup', 'Breakfast'],
    images: {
        hero: '/images/styles/medialunas_argentina.png',
        dough: '/images/styles/placeholder-dough.png',
        crumb: '/images/styles/placeholder-dough.png'
    },
    recommendedFlavorComponents: ['salted_butter_normandy', 'honey_raw', 'lemon_peel', 'vanilla_madagascar'],
    education: {
        pro_tips: [
            { tip: 'Keep it cold', explanation: 'Lamination requires cold butter and cold dough to maintain distinct layers.' }
        ],
        what_if: [
            { scenario: 'Butter leaks during baking', result: 'Hard product lacking layers.', correction: 'Butter melted during proofing or layers were broken during rolling. Maintain colder temperatures.' }
        ],
        comparative_analysis: [],
        q_and_a: [],
        fermentation_methods: []
    },
    isPro: false,
    source: 'official',
    createdAt: '2026-03-02',
    releaseDate: '2026-03-02'
};

export const conchas: DoughStyleDefinition = {
    id: 'conchas',
    name: 'Concha (Mexican Sweet Bread)',
    category: 'pastry',
    description: 'A traditional Mexican sweet bread named for its shell-like appearance. Features a soft enriched dough topped with a crumbly, sweet cookie crust.',
    origin: {
        country: 'Mexico',
        region: 'National',
        period: 'Pre-Columbian/Colonial fusion'
    },
    technicalProfile: {
        hydration: [55, 65],
        ovenTemp: [170, 190],
        salt: [1, 1.5],
        oil: [0, 0],
        sugar: [15, 25],
        fermentationSteps: [
            'Mix enriched dough (eggs, butter, milk, sugar)',
            'Bulk ferment until doubled',
            'Divide and preshape',
            'Mix cookie topping (flour, sugar, fat, flavorings)',
            'Cover dough balls with scored cookie topping',
            'Final proof then bake'
        ],
        difficulty: 'Medium',
        flourStrength: 'Medium (9-11% protein)',
        recommendedUse: []
    },
    difficulty: 'Medium',
    fermentationType: 'direct',
    notes: [
        'The topping is usually stamped with a special concha cutter to create the pattern.'
    ],
    watchouts: [
        'Do not overbake, the sweet dough can dry out quickly.'
    ],
    history: 'A fusion of European wheat breadmaking techniques with local indigenous influences.',
    tags: ['Sweet crust', 'Breakfast', 'Colorful'],
    images: {
        hero: '/images/styles/conchas_mexican.png',
        dough: '/images/styles/placeholder-dough.png',
        crumb: '/images/styles/placeholder-dough.png'
    },
    recommendedFlavorComponents: ['salted_butter_normandy', 'vanilla_madagascar', 'cinnamon_ceylon'],
    education: {
        pro_tips: [
            { tip: 'Scoring the topping', explanation: 'Score the topping deep enough to separate the sections, but not so deep as to cut the dough underneath.' }
        ],
        what_if: [],
        comparative_analysis: [],
        q_and_a: [],
        fermentation_methods: []
    },
    isPro: false,
    source: 'official',
    createdAt: '2026-03-02',
    releaseDate: '2026-03-02'
};

export const empanada_dough: DoughStyleDefinition = {
    id: 'empanada-dough',
    name: 'Masa Para Empanadas',
    category: 'pastry',
    description: 'Argentine empanada dough made with wheat flour, hot water or broth, and beef fat (pella, lard). It can be baked or fried, resulting in a blistered, tender crust.',
    origin: {
        country: 'Argentina',
        region: 'National',
        period: 'Colonial Era'
    },
    technicalProfile: {
        hydration: [30, 40],
        ovenTemp: [180, 220],
        salt: [1.5, 2],
        oil: [0, 0],
        sugar: [0, 0],
        fermentationSteps: [
            'Mix flour and salt',
            'Melt lard into hot water/broth',
            'Scald flour slightly by mixing in hot liquid',
            'Knead until a stiff cohesive mass forms',
            'Rest dough for 30 minutes at room temperature',
            'Portion and roll into discs'
        ],
        difficulty: 'Medium',
        flourStrength: 'Weak (8-10% protein)',
        recommendedUse: []
    },
    difficulty: 'Medium',
    fermentationType: 'direct',
    notes: [
        'Uses hot liquid to slightly gelatinize the starch, making the dough easier to roll thin without shrinking.'
    ],
    watchouts: [
        'Do not overwork the dough or it will become tough.'
    ],
    history: 'A traditional dough used across South America, heavily influenced by Spanish cuisine but adapted with local fats like beef tallow (pella).',
    tags: ['Lard', 'Fried', 'Baked'],
    images: {
        hero: '/images/styles/empanada_dough_raw.png',
        dough: '/images/styles/placeholder-dough.png',
        crumb: '/images/styles/placeholder-dough.png'
    },
    recommendedFlavorComponents: ['lard_pork_fat', 'onions_fresh'],
    education: {
        pro_tips: [
            { tip: 'Resting is key', explanation: 'The dough must rest to relax the gluten before rolling, otherwise it will shrink.' }
        ],
        what_if: [],
        comparative_analysis: [],
        q_and_a: [],
        fermentation_methods: []
    },
    isPro: false,
    source: 'official',
    createdAt: '2026-03-02',
    releaseDate: '2026-03-02'
};

export const latamStyles: DoughStyleDefinition[] = [
    pao_frances_brazil,
    brazilian_cheese_bread,
    brazilian_pizzeria_gas_deck,
    pizza_argentina_fugazzeta,
    arepa_corn_flatbread,
    medialunas,
    conchas,
    empanada_dough
];
