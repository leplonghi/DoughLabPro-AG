import { LearnArticleData } from '@/types/learn';

export const waterRichVegetablesData: LearnArticleData = {
    id: 'water-rich-vegetables',
    title: 'Water-Rich Vegetables: Managing Moisture',
    subtitle: 'How to use zucchini, mushrooms, and eggplant without creating a soggy pizza.',
    sections: [
        {
            title: 'The "Soggy Bottom" Physics',
            content: [
                'Vegetables like zucchini, eggplant, and mushrooms are >90% water. When heated, their cell walls break down, releasing this water.',
                'If this happens on top of a pizza, the water pools in the center. Since the dough temperature cannot exceed 100°C while water is present, the crust under the vegetables never bakes—it boils. The result is a raw, gummy "gum line."'
            ]
        },
        {
            title: 'Technique 1: Pre-Cooking (Roasting/Sautéing)',
            content: [
                'The most reliable method. Cook the vegetables fully BEFORE putting them on the pizza. This drives off the water and develops flavor (Maillard reaction) that the short pizza bake time cannot achieve.'
            ]
        },
        {
            title: 'Technique 2: Osmotic Draining (Salting)',
            content: [
                'Slice the vegetables (zucchini/eggplant), toss them with salt, and let them sit in a colander for 30 minutes. The salt draws out moisture via osmosis. Pat dry before baking. This maintains a "fresher" texture than pre-cooking but removes enough water to be safe.'
            ]
        },
        {
            title: 'Technique 3: Thin Slicing (Carpaccio)',
            content: [
                'Slice extremely thin (mandoline). The high surface-area-to-volume ratio allows the water to evaporate instantly in the oven heat before it can soak into the dough.'
            ]
        }
    ],
    proTip: {
        content: 'Mushrooms are Sponges. Never wash mushrooms with water; they absorb it. Brush them clean. For pizza, sauté them with oil and herbs until they release their liquid and re-absorb the fat. This concentrates the "meaty" umami flavor.'
    },
    criticalPoint: {
        content: 'Spinach Danger. Fresh spinach collapses and releases a lot of green water. Always wilt spinach in a pan and squeeze it dry (like a towel) before adding to pizza, or use it raw AFTER baking.'
    },
    references: [
        {
            title: 'The Food Lab',
            author: 'J. Kenji López-Alt',
            year: '2015'
        },
        {
            title: 'Salt, Fat, Acid, Heat',
            author: 'Samin Nosrat',
            year: '2017'
        }
    ]
};
