
import { useReducer } from 'react';
import Decimal from 'decimal.js';
import { calculateFinalHydration, calculateRequiredWater } from '../../domain/usecases/hydrationLogic';
import { DoughFormula } from '../../domain/entities/DoughFormula';
import { Preferment } from '../../domain/entities/Preferment';

// State
export interface CalculatorState {
    baseFlour: Decimal;
    baseWater: Decimal;
    hydration: Decimal;
    preferments: Preferment[];
}

// Events
type CalculatorEvent =
    | { type: 'SET_BASE_FLOUR', payload: Decimal }
    | { type: 'SET_HYDRATION', payload: Decimal } // Keep hydration constant, update water
    | { type: 'SET_WATER', payload: Decimal }    // Keep water constant, update hydration
    | { type: 'ADD_PREFERMENT', payload: Preferment }
    | { type: 'REMOVE_PREFERMENT', payload: string };

function calculatorReducer(state: CalculatorState, action: CalculatorEvent): CalculatorState {
    switch (action.type) {
        case 'SET_BASE_FLOUR': {
            // Changing flour while maintaining hydration -> Update water
            const newFlour = action.payload;
            const neededWater = calculateRequiredWater(state.hydration, newFlour, state.preferments);
            return { ...state, baseFlour: newFlour, baseWater: neededWater };
        }
        case 'SET_HYDRATION': {
            // Changing hydration -> Update water
            const targetHydration = action.payload;
            const neededWater = calculateRequiredWater(targetHydration, state.baseFlour, state.preferments);
            return { ...state, hydration: targetHydration, baseWater: neededWater };
        }
        case 'SET_WATER': {
            // Changing water -> Update hydration
            const newWater = action.payload;

            const formula: DoughFormula = {
                baseFlourWeight: state.baseFlour,
                baseWaterWeight: newWater,
                preferments: state.preferments
            };
            const newHydration = calculateFinalHydration(formula);

            return { ...state, baseWater: newWater, hydration: newHydration };
        }
        case 'ADD_PREFERMENT': {
            const newPreferments = [...state.preferments, action.payload];
            // If we add a preferment, we usually want to maintain target hydration?
            // Or do we maintain base flour/water?
            // "Composite Hydration Logic" usually implies target hydration is king.
            // Let's assume we maintain TARGET Hydration.
            // So we recalculate Base Water needed.

            const neededWater = calculateRequiredWater(state.hydration, state.baseFlour, newPreferments);

            return {
                ...state,
                preferments: newPreferments,
                baseWater: neededWater
            };
        }
        case 'REMOVE_PREFERMENT': {
            const newPreferments = state.preferments.filter(p => p.id !== action.payload);
            const neededWater = calculateRequiredWater(state.hydration, state.baseFlour, newPreferments);
            return {
                ...state,
                preferments: newPreferments,
                baseWater: neededWater
            };
        }
        default:
            return state;
    }
}

export function useCalculatorBloc(initialState: CalculatorState) {
    const [state, dispatch] = useReducer(calculatorReducer, initialState);

    // API (Cubit-style methods)
    const setHydration = (val: Decimal) => dispatch({ type: 'SET_HYDRATION', payload: val });
    const setWater = (val: Decimal) => dispatch({ type: 'SET_WATER', payload: val });
    const setFlour = (val: Decimal) => dispatch({ type: 'SET_BASE_FLOUR', payload: val });
    const addPreferment = (pref: Preferment) => dispatch({ type: 'ADD_PREFERMENT', payload: pref });
    const removePreferment = (id: string) => dispatch({ type: 'REMOVE_PREFERMENT', payload: id });

    return {
        state,
        setHydration,
        setWater,
        setFlour,
        addPreferment,
        removePreferment
    };
}
