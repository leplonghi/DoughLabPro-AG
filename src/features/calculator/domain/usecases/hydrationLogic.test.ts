
import { describe, it, expect } from 'vitest';
import Decimal from 'decimal.js';
import { calculateFinalHydration, calculateRequiredWater } from './hydrationLogic';
import { Preferment } from '../entities/Preferment';
import { DoughFormula } from '../entities/DoughFormula';

describe('Hydration Logic', () => {
    const d = (val: number) => new Decimal(val);

    describe('calculateRequiredWater', () => {
        it('should calculate water for simple dough (no preferment)', () => {
            // 1000g flour, 70% hydration -> 700g water
            const result = calculateRequiredWater(d(70), d(1000), []);
            expect(result.toNumber()).toBeCloseTo(700);
        });

        it('should calculate water with Poolish (100% hydration)', () => {
            // Goal: 1000g Total Flour, 70% Hydration -> 700g Total Water
            // Poolish: 200g Flour. @100% hydration -> 200g Water. Total Poolish Weight 400g.
            // Base Flour: 800g (since 200g is in poolish)

            const poolish = new Preferment('p1', 'Poolish', 'poolish', d(400), d(1.0));
            const result = calculateRequiredWater(d(70), d(800), [poolish]);

            // Total Flour = 800 + 200 = 1000
            // Target Water = 1000 * 0.7 = 700
            // Existing Water = 200
            // Needed = 500
            expect(result.toNumber()).toBeCloseTo(500);
        });

        it('should calculate water with Biga (50% hydration)', () => {
            // Goal: 1000g Total Flour, 70% Hydration -> 700g Total Water
            // Biga: 200g Flour. @50% hydration -> 100g Water. Total Biga Weight 300g.
            // Base Flour: 800g.

            const biga = new Preferment('b1', 'Biga', 'biga', d(300), d(0.5));
            const result = calculateRequiredWater(d(70), d(800), [biga]);

            // Total Flour = 800 + 200 = 1000
            // Target Water = 700
            // Existing Water = 100
            // Needed = 600
            expect(result.toNumber()).toBeCloseTo(600);
        });

        it('should return 0 if preferment exceeds target water', () => {
            // Goal: 50% hydration. Total Flour 1000g -> Target Water 500g.
            // Poolish: 600g Flour (High!). @100% -> 600g Water. Total 1200g.
            // Base Flour: 400g.
            // Existing Water (600) > Target Water (500).
            // Result should be 0 (cannot remove water from poolish).

            const bigPoolish = new Preferment('p1', 'Poolish', 'poolish', d(1200), d(1.0));
            const result = calculateRequiredWater(d(50), d(400), [bigPoolish]);

            expect(result.toNumber()).toBe(0);
        });
    });

    describe('calculateFinalHydration', () => {
        it('should calculate hydration for simple dough', () => {
            const formula: DoughFormula = {
                baseFlourWeight: d(1000),
                baseWaterWeight: d(600),
                preferments: [],
            }
            const result = calculateFinalHydration(formula); // 60%
            expect(result.toNumber()).toBeCloseTo(60);
        });

        it('should calculate composite hydration with preferment', () => {
            // Base: 500g Flour, 300g Water.
            // Preferment: 500g Flour, 500g Water (1000g poolish).
            // Total Flour: 1000g.
            // Total Water: 800g.
            // Expected: 80% hydration.

            const poolish = new Preferment('p1', 'Poolish', 'poolish', d(1000), d(1.0));
            const formula: DoughFormula = {
                baseFlourWeight: d(500),
                baseWaterWeight: d(300),
                preferments: [poolish],
            };

            const result = calculateFinalHydration(formula);
            expect(result.toNumber()).toBeCloseTo(80);
        });

        it('should handle zero flour gracefully', () => {
            const formula: DoughFormula = {
                baseFlourWeight: d(0),
                baseWaterWeight: d(100),
                preferments: [],
            };
            const result = calculateFinalHydration(formula);
            expect(result.toNumber()).toBe(0);
        });
    });

    describe('Preferment Entity', () => {
        it('should correctly calculate flour and water content', () => {
            // 300g Biga @ 50% hydration
            // Flour + 0.5 Flour = 300
            // 1.5 F = 300 -> F = 200
            // Water = 100
            const biga = new Preferment('b1', 'Test', 'biga', d(300), d(0.5));
            expect(biga.flourWeight.toNumber()).toBeCloseTo(200);
            expect(biga.waterWeight.toNumber()).toBeCloseTo(100);
        });
    });
});
