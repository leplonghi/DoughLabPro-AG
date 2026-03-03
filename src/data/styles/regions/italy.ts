import { DoughStyleDefinition } from '@/types/styles';
import { neapolitan_avpn_classic } from '../pizza/neapolitan_avpn_classic';
import { roman_teglia_pan } from '../pizza/roman_teglia_pan';
import { roman_scrocchiarella } from '../pizza/roman_scrocchiarella';
import { focaccia_genovese } from '../bread/focaccia_genovese';
import { sfincioneSiciliano } from '../pizza/sfincione_siciliano';
import { ciabatta_high_hydration } from '../bread/ciabatta_high_hydration';

export const pane_toscano: DoughStyleDefinition = {
    id: 'pane-toscano',
    name: 'Pane Toscano DOP',
    category: 'bread',
    description: 'Traditional Tuscan bread known for its complete absence of salt (pane sciocco). Characterized by a thick crust and a dense, chewy crumb with a mild sour flavor that perfectly complements salty Tuscan cured meats.',
    origin: {
        country: 'Italy',
        region: 'Tuscany',
        period: '12th Century'
    },
    technicalProfile: {
        hydration: [55, 65],
        ovenTemp: [220, 240],
        salt: [0, 0],
        oil: [0, 0],
        sugar: [0, 0],
        fermentationSteps: [
            'Prepare strict sourdough Biga (Biga Toscana)',
            'Mix to medium development',
            'Bulk fermentation until doubled',
            'Shape into oval or round loaves',
            'Proof 2-4 hours before baking without steam'
        ],
        flourStrength: 'Medium (9-11% protein)',
        recommendedUse: [],
        difficulty: 'Medium'
    },
    difficulty: 'Medium',
    fermentationType: 'levain',
    notes: [
        'Must be made with sourdough to offset the lack of salt',
        'Crucial to bake without steam for the authentic crust'
    ],
    watchouts: [
        'Lack of salt makes dough fermentation extremely fast - watch temperature closely',
        'Gluten is weaker without salt, requiring gentler handling'
    ],
    history: 'During conflicts with Pisa in the 12th century, Pisa cut off the salt supply to inland Tuscany. Bakers adapted by creating a saltless bread out of necessity, which became a permanent staple.',
    tags: ['Italian', 'Bread', 'Sourdough', 'No Salt'],
    images: {
        hero: '/images/styles/pane-toscano.png',
        dough: '/images/styles/pane-toscano.png',
        crumb: '/images/styles/pane-toscano.png'
    },
    recommendedFlavorComponents: [
        'flour_wheat_type_0'
    ],
    education: {
        pro_tips: [
            { tip: 'Sourdough is non-negotiable', explanation: 'Without salt, the only thing keeping fermentation in check and strengthening the gluten network is the acidity from a mature levain.' },
            { tip: 'Gentle handling', explanation: 'Salt strengthens gluten. Without it, the dough is prone to tearing. Use gentle folds.' }
        ],
        what_if: [
            { scenario: 'Crust lacks color', result: 'Insufficient baking time or oven temperature too low.', correction: 'Bake longer at 230°C. Sourdough acids help coloring, but lower enzyme activity needs time.' }
        ],
        comparative_analysis: [
            { target_style: 'Pane Pugliese', difference: 'Toscano has no salt and lower hydration.', why_choose_this: 'Choose Toscano to pair with salty cured meats like Prosciutto Toscano.' }
        ],
        q_and_a: [
            { question: 'Why no salt?', answer: 'Historical necessity turned into culinary tradition. It perfectly balances the salty, highly cured meats of Tuscany.', context: 'Cultural' }
        ],
        fermentation_methods: [
            { method: 'Sourdough', suitability: 'Authentic', notes: 'The only authentic way to make Pane Toscano.' }
        ]
    },
    isPro: false,
    source: 'official',
    createdAt: '2026-03-02',
    releaseDate: '2026-03-02'
};

export const italianStyles: DoughStyleDefinition[] = [
    neapolitan_avpn_classic,
    roman_teglia_pan,
    roman_scrocchiarella,
    focaccia_genovese,
    sfincioneSiciliano,
    pane_toscano,
    ciabatta_high_hydration
];
