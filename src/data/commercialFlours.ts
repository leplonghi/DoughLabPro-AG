
export interface FlourSpecs {
    id: string;
    brand: string;
    name: string;
    description: string;
    protein: number;
    w: number;
    pl: number;
    absorption: number; // Percentage
    type: '00' | '0' | '1' | '2' | 'Whole' | 'Bread' | 'AP' | 'Pastry';
    recommendedHydration: { min: number; max: number };
    suitableStyles: string[]; // Style IDs
}

export const commercialFlours: FlourSpecs[] = [
    {
        id: 'caputo-pizzeria',
        brand: 'Antimo Caputo',
        name: 'Pizzeria (Blue)',
        description: 'The standard for authentic Neapolitan pizza.',
        protein: 12.5,
        w: 260,
        pl: 0.55,
        absorption: 58,
        type: '00',
        recommendedHydration: { min: 58, max: 62 },
        suitableStyles: ['pizza-napoletana']
    },
    {
        id: 'caputo-cuoco',
        brand: 'Antimo Caputo',
        name: 'Saccorosso / Cuoco (Red)',
        description: 'Long fermentation flour with high elastic glutinic network.',
        protein: 13,
        w: 300,
        pl: 0.55,
        absorption: 62,
        type: '00',
        recommendedHydration: { min: 62, max: 70 },
        suitableStyles: ['pizza-napoletana', 'pizza-teglia-romana']
    },
    {
        id: 'king-arthur-bread',
        brand: 'King Arthur Baking',
        name: 'Bread Flour',
        description: 'Hard red spring wheat, consistent and strong.',
        protein: 12.7,
        w: 300,
        pl: 0.6,
        absorption: 65,
        type: 'Bread',
        recommendedHydration: { min: 65, max: 75 },
        suitableStyles: ['new_york_slice_v2', 'sf_sourdough']
    },
    {
        id: 'mimo-molini-pizza',
        brand: 'Mimo Molini',
        name: 'Pizza Napoletana',
        description: 'Strong Italian flour for high hydration pizza.',
        protein: 13.5,
        w: 340,
        pl: 0.5,
        absorption: 65,
        type: '00',
        recommendedHydration: { min: 60, max: 72 },
        suitableStyles: ['pizza-napoletana', 'pizza-tonda-romana']
    }
];
