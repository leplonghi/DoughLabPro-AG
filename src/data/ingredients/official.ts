
import { Increment, IncrementCompatibility, IncrementCategory } from '@/types/ingredients';

export const officialIncrements: Increment[] = [
    // --- SAUCES ---
    {
        id: 'tomato_sauce_classic',
        visibleName: 'Classic Tomato Sauce',
        category: 'sauce',
        technicalProfile: {
            moistureLevel: 'medium',
            fatContent: 'low',
            sugarContent: 'low',
            thermalBehavior: 'Reduces top crust temperature, prevents center rise',
            weightImpact: 'Medium'
        },
        compatibilityByStyle: {
            'new_york_slice_v2': 'validated',
            'neapolitan_v2': 'validated',
            'sicilian_v2': 'validated'
        },
        source: 'lab'
    },
    {
        id: 'bbq_sauce',
        visibleName: 'BBQ Sauce',
        category: 'sauce',
        technicalProfile: {
            moistureLevel: 'medium',
            fatContent: 'low',
            sugarContent: 'high',
            thermalBehavior: 'Caramelizes rapidly, high risk of burning > 300C',
            weightImpact: 'Medium'
        },
        compatibilityByStyle: {
            'new_york_slice_v2': 'variation',
            'neapolitan_v2': 'experimental', // Sugar burns in wood oven
            'pan_pizza_v2': 'validated'
        },
        source: 'lab'
    },
    {
        id: 'white_sauce_bechamel',
        visibleName: 'Béchamel / White Base',
        category: 'sauce',
        technicalProfile: {
            moistureLevel: 'medium',
            fatContent: 'medium',
            sugarContent: 'low',
            thermalBehavior: 'Stabilizes top heat, browning occurs slowly',
            weightImpact: 'Medium'
        },
        compatibilityByStyle: {
            'new_york_slice_v2': 'validated',
            'roman_teglia_v2': 'validated',
            'neapolitan_v2': 'validated'
        },
        source: 'lab'
    },

    // --- TOPPINGS (Cheese/Protein) ---
    {
        id: 'mozz_low_moisture',
        visibleName: 'Low Moisture Mozzarella',
        category: 'topping',
        technicalProfile: {
            moistureLevel: 'low',
            fatContent: 'high',
            sugarContent: 'low',
            thermalBehavior: 'Melts slowly, browns/blisters (Maillard)',
            weightImpact: 'Medium'
        },
        compatibilityByStyle: {
            'new_york_slice_v2': 'validated',
            'pan_pizza_v2': 'validated',
            'neapolitan_v2': 'variation' // Usually uses fresh mozz
        },
        source: 'lab'
    },
    {
        id: 'mozz_fresh',
        visibleName: 'Fresh Mozzarella (Fior di Latte)',
        category: 'topping',
        technicalProfile: {
            moistureLevel: 'high',
            fatContent: 'medium',
            sugarContent: 'low',
            thermalBehavior: 'Releases water (whey) at high temp. Risk of soupiness.',
            weightImpact: 'Heavy'
        },
        compatibilityByStyle: {
            'neapolitan_v2': 'validated',
            'new_york_slice_v2': 'variation', // Can make soggy if not drained
            'roman_teglia_v2': 'validated'
        },
        source: 'lab'
    },
    {
        id: 'pepperoni_cup',
        visibleName: 'Cup & Char Pepperoni',
        category: 'topping',
        technicalProfile: {
            moistureLevel: 'low',
            fatContent: 'high',
            sugarContent: 'low',
            thermalBehavior: 'Release grease (oil-off). Crisp edges.',
            weightImpact: 'Light'
        },
        compatibilityByStyle: {
            'new_york_slice_v2': 'validated',
            'detroit_v2': 'validated',
            'neapolitan_v2': 'experimental' // Not traditional, grease fire risk in dome
        },
        source: 'lab'
    },

    // --- FILLINGS (For Calzones/Pastry) ---
    {
        id: 'ricotta_filling',
        visibleName: 'Ricotta & Herb',
        category: 'filling',
        technicalProfile: {
            moistureLevel: 'high',
            fatContent: 'medium',
            sugarContent: 'low',
            thermalBehavior: 'Insulates dough internal temp. Requires longer bake.',
            weightImpact: 'Heavy'
        },
        compatibilityByStyle: {
            'calzone_v1': 'validated',
            'new_york_slice_v2': 'experimental' // Hard to bake purely on top
        },
        source: 'lab'
    }
];

export const getIncrementById = (id: string): Increment | undefined => {
    return officialIncrements.find(inc => inc.id === id);
};
