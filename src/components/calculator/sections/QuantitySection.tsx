import React, { useRef, useEffect } from 'react';
import { DoughConfig, CalculationMode, FormErrors } from '@/types';
import { ListBulletIcon, InfoIcon, ScaleIcon } from '@/components/ui/Icons';
import ChoiceButton from '@/components/ui/ChoiceButton';
import AccordionSection from '@/components/calculator/AccordionSection';

interface QuantitySectionProps {
    config: DoughConfig;
    calculationMode: CalculationMode;
    onCalculationModeChange: (mode: CalculationMode) => void;
    onConfigChange: (newConfig: Partial<DoughConfig>) => void;
    errors: FormErrors;
    getInputClasses: (hasError: boolean) => string;
    numPizzasRef: React.Ref<HTMLInputElement>;
}

const QuantitySection: React.FC<QuantitySectionProps> = ({
    config,
    calculationMode,
    onCalculationModeChange,
    onConfigChange,
    errors,
    getInputClasses,
    numPizzasRef,
}) => {
    return (
        <AccordionSection
            title="Quantity"
            description={calculationMode === 'mass' ? "Define quantity by pieces." : "Define quantity by available flour."}
            icon={<ListBulletIcon className="h-6 w-6" />}
        >
            {/* Calculation Mode Toggle */}
            <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1.5 border border-slate-200">
                <ChoiceButton
                    active={calculationMode === 'mass'}
                    label="By Pieces"
                    onClick={() => onCalculationModeChange('mass')}
                />
                <ChoiceButton
                    active={calculationMode === 'flour'}
                    label="By Flour Weight"
                    onClick={() => onCalculationModeChange('flour')}
                />
            </div>

            {calculationMode === 'mass' ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Number of Balls */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <label htmlFor="numPizzas" className="block text-sm font-bold text-slate-700">
                                Number of {config.bakeType === 'pizzas' ? 'Pizzas' : 'Loaves'}
                            </label>
                            <div className="group relative flex items-center">
                                <InfoIcon className="h-4 w-4 cursor-help text-slate-400 hover:text-slate-600 transition-colors" />
                                <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded-lg bg-slate-800 p-3 text-xs font-medium text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100">
                                    Total number of pieces you want to make.
                                    <svg className="absolute left-1/2 -bottom-1 h-2 w-4 -translate-x-1/2 text-slate-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24L0 0h24L12 24z"/></svg>
                                </div>
                            </div>
                        </div>
                        <input
                            ref={numPizzasRef}
                            type="number"
                            id="numPizzas"
                            name="numPizzas"
                            min="1"
                            max="100"
                            value={config.numPizzas}
                            onChange={(e) => onConfigChange({ numPizzas: parseInt(e.target.value) || 0 })}
                            className={getInputClasses(!!errors.numPizzas)}
                        />
                        {errors.numPizzas && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.numPizzas}</p>}
                    </div>

                    {/* Weight per Ball */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <label htmlFor="doughBallWeight" className="block text-sm font-bold text-slate-700">
                                Weight per Piece (g)
                            </label>
                            <div className="group relative flex items-center">
                                <InfoIcon className="h-4 w-4 cursor-help text-slate-400 hover:text-slate-600 transition-colors" />
                                <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded-lg bg-slate-800 p-3 text-xs font-medium text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100">
                                    Target weight. ~250g for Neapolitan, ~350g for NY Style, ~800g for bread.
                                    <svg className="absolute left-1/2 -bottom-1 h-2 w-4 -translate-x-1/2 text-slate-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24L0 0h24L12 24z"/></svg>
                                </div>
                            </div>
                        </div>
                        <input
                            type="number"
                            id="doughBallWeight"
                            name="doughBallWeight"
                            min="10"
                            max="2000"
                            value={config.doughBallWeight}
                            onChange={(e) => onConfigChange({ doughBallWeight: parseInt(e.target.value) || 0 })}
                            className={getInputClasses(!!errors.doughBallWeight)}
                        />
                        {errors.doughBallWeight && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.doughBallWeight}</p>}
                    </div>
                </div>
            ) : (
                <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-lime-100 text-lime-600 rounded-lg">
                            <ScaleIcon className="h-6 w-6" />
                        </div>
                        <div>
                            <label htmlFor="totalFlour" className="block text-sm font-bold text-slate-900">
                                Total Flour Weight (g)
                            </label>
                            <p className="text-xs text-slate-500">We'll calculate the total dough based on this.</p>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <input
                            type="number"
                            id="totalFlour"
                            name="totalFlour"
                            min="100"
                            max="50000"
                            placeholder="e.g. 1000"
                            value={config.totalFlour || ''}
                            onChange={(e) => onConfigChange({ totalFlour: parseInt(e.target.value) || 0 })}
                            className={`w-full text-2xl font-bold text-center py-4 rounded-xl border-2 focus:ring-4 focus:ring-lime-100 transition-all ${
                                !config.totalFlour ? 'border-slate-200 text-slate-400' : 'border-lime-500 text-slate-900'
                            }`}
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400 pointer-events-none">
                            grams
                        </span>
                    </div>
                    
                    {/* Helper text showing estimation */}
                    {config.totalFlour && config.totalFlour > 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-sm text-slate-600">
                            <span>Est. Total Dough:</span>
                            <span className="font-bold text-slate-900">
                                {Math.round(config.totalFlour * (1 + (config.hydration/100) + (config.salt/100) + (config.oil/100) + ((config.sugar||0)/100)))}g
                            </span>
                        </div>
                    )}
                </div>
            )}
        </AccordionSection>
    );
};

export default QuantitySection;
