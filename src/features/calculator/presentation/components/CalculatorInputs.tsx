
import React from 'react';
import Decimal from 'decimal.js';
import { useCalculatorBloc } from '../state/useCalculatorBloc';
import { useDoughInput } from '../hooks/useDoughInput';

export const CalculatorInputs: React.FC = () => {
    // Initial state simulation (would normally come from props or context)
    const { state, setHydration, setWater, setFlour } = useCalculatorBloc({
        baseFlour: new Decimal(1000),
        baseWater: new Decimal(650),
        hydration: new Decimal(65),
        preferments: []
    });

    const hydrationInput = useDoughInput({
        value: state.hydration,
        onChange: setHydration,
        precision: 1
    });

    const waterInput = useDoughInput({
        value: state.baseWater,
        onChange: setWater,
        precision: 1
    });

    const flourInput = useDoughInput({
        value: state.baseFlour,
        onChange: setFlour,
        precision: 0
    });

    return (
        <div className="calculator-inputs-demo p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Lab Engine Core</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Flour Input */}
                <div className="form-group">
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Total Flour (g)
                    </label>
                    <input
                        type="text"
                        inputMode="decimal"
                        className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                        value={flourInput.value}
                        onChange={(e) => flourInput.onChange(e.target.value)}
                        onBlur={flourInput.onBlur}
                        onFocus={flourInput.onFocus}
                    />
                </div>

                {/* Hydration Input - Controls Water */}
                <div className="form-group">
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Hydration (%)
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            inputMode="decimal"
                            className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            value={hydrationInput.value}
                            onChange={(e) => hydrationInput.onChange(e.target.value)}
                            onBlur={hydrationInput.onBlur}
                            onFocus={hydrationInput.onFocus}
                        />
                        <div className="absolute right-3 top-2 text-xs text-slate-400">
                            Locks Water
                        </div>
                    </div>
                </div>

                {/* Water Input - Controls Hydration */}
                <div className="form-group">
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Water (g)
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            inputMode="decimal"
                            className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            value={waterInput.value}
                            onChange={(e) => waterInput.onChange(e.target.value)}
                            onBlur={waterInput.onBlur}
                            onFocus={waterInput.onFocus}
                        />
                        <div className="absolute right-3 top-2 text-xs text-slate-400">
                            Locks %
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-6 p-4 bg-slate-100 rounded text-xs font-mono text-slate-600">
                <p><strong>Debug State (Single Source of Truth):</strong></p>
                <p>Flour: {state.baseFlour.toFixed(2)}</p>
                <p>Water: {state.baseWater.toFixed(2)}</p>
                <p>Hydration: {state.hydration.toFixed(2)}%</p>
            </div>
        </div>
    );
};
