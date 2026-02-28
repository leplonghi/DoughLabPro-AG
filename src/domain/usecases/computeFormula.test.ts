import { describe, it, expect } from 'vitest';
import { computeFormula } from './computeFormula';
import { CanonicalStyle, DifficultyLevel, FermentationType } from '../models/Style';

const mockNeoPizza: CanonicalStyle = {
    id: 'neapolitan_pizza',
    name: 'Neapolitan Pizza',
    category: 'pizza',
    family: 'neapolitan',
    tags: [],
    proGate: false,
    hasImage: false,
    difficulty: 'Medium' as DifficultyLevel,
    fermentationType: 'direct' as FermentationType,
    releaseDate: '2023-01-01T00:00:00Z',
    origin: { country: 'Italy', region: 'Campania', period: '18th Century' },
    description: 'Classic Neapolitan Pizza',
    history: '',
    source: 'official',
    createdAt: '2023-01-01T00:00:00Z',
    notes: [],
    references: [],
    technicalProfile: {
        hydration: [60, 65],
        salt: [2.5, 3.0],
        ovenTemp: [450, 500],
        difficulty: 'Medium' as DifficultyLevel,
        ballWeight: { recommended: 250, min: 200, max: 280 },
        fermentationSteps: [],
        recommendedUse: []
    },
    base_formula: [
        { name: '00 Flour', percentage: 100, role: 'flour', type: 'solid' } as any,
        { name: 'Water', percentage: 65, role: 'water', type: 'liquid' } as any,
        { name: 'Salt', percentage: 3, role: 'salt', type: 'solid' } as any,
        { name: 'Fresh Yeast', percentage: 0.2, role: 'yeast', type: 'solid' } as any,
    ]
};

const mockSourdoughBread: CanonicalStyle = {
    ...mockNeoPizza,
    id: 'rustic_sourdough',
    name: 'Rustic Sourdough',
    category: 'bread',
    family: 'sourdough',
    fermentationType: 'levain' as FermentationType,
    technicalProfile: {
        ...mockNeoPizza.technicalProfile,
        ballWeight: { recommended: 850, min: 500, max: 1000 },
        ovenTemp: [240, 260],
    },
    base_formula: [
        { name: 'Bread Flour', percentage: 90, role: 'flour', type: 'solid' } as any,
        { name: 'Whole Wheat Flour', percentage: 10, role: 'flour', type: 'solid' } as any,
        { name: 'Water', percentage: 75, role: 'water', type: 'liquid' } as any,
        { name: 'Salt', percentage: 2, role: 'salt', type: 'solid' } as any,
        { name: 'Sourdough Starter', percentage: 20, role: 'yeast', type: 'solid' } as any,
    ]
};

const mockBurgerBun: CanonicalStyle = {
    ...mockNeoPizza,
    id: 'brioche_bun',
    name: 'Brioche Burger Bun',
    category: 'burger_bun',
    family: 'brioche',
    technicalProfile: {
        ...mockNeoPizza.technicalProfile,
        ballWeight: { recommended: 100, min: 80, max: 120 },
        ovenTemp: [190, 210],
    },
    base_formula: [
        { name: 'Bread Flour', percentage: 100, role: 'flour', type: 'solid' } as any,
        { name: 'Milk', percentage: 40, role: 'water', type: 'liquid', hydrationContent: 0.88 } as any,
        { name: 'Butter', percentage: 20, role: 'fat', type: 'solid' } as any,
        { name: 'Egg', percentage: 15, role: 'liquid', type: 'liquid', hydrationContent: 0.74 } as any,
        { name: 'Sugar', percentage: 8, role: 'sugar', type: 'solid' } as any,
        { name: 'Salt', percentage: 2, role: 'salt', type: 'solid' } as any,
        { name: 'IDY Yeast', percentage: 1, role: 'yeast', type: 'solid' } as any,
    ]
};

describe('computeFormula', () => {
    it('computes a classic Neapolitan Pizza formula accurately', () => {
        const result = computeFormula({
            style: mockNeoPizza,
            targetInputs: { doughWeight: 250, numBalls: 4 },
        });

        expect(result.ingredients).toMatchSnapshot();
        expect(result.steps).toMatchSnapshot();
        expect(result.warnings).toMatchSnapshot();
    });

    it('computes a Sourdough Bread formula handling starter calculation', () => {
        const result = computeFormula({
            style: mockSourdoughBread,
            targetInputs: { doughWeight: 850, numBalls: 2 },
        });

        expect(result.ingredients).toMatchSnapshot();
        expect(result.steps).toMatchSnapshot();
    });

    it('computes an enriched Burger Bun formula with liquids/hydration accurately', () => {
        const result = computeFormula({
            style: mockBurgerBun,
            targetInputs: { doughWeight: 100, numBalls: 8 },
        });

        expect(result.ingredients).toMatchSnapshot();
        expect(result.steps).toMatchSnapshot();
    });
});
