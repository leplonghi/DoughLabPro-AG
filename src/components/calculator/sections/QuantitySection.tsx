import React from 'react';
import { DoughConfig, CalculationMode, FormErrors } from '@/types';
import { ListBulletIcon } from '@/components/ui/Icons';
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
            description="Define how many dough balls or the total flour weight."
            icon={<ListBulletIcon className="h-6 w-6" />}
        >
            {/* Calculation Mode Toggle */}
            <div className="mb-4 grid grid-cols-2 gap-2 rounded-lg bg-slate-100 p-1">
                <ChoiceButton
                    active={calculationMode === 'mass'}
                    label="By Total Weight"
                    onClick={() => onCalculationModeChange('mass')}
                />
                <ChoiceButton
                    active={calculationMode === 'flour'}
                    label="By Flour Weight"
                    onClick={() => onCalculationModeChange('flour')}
                />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Number of Balls */}
                <div>
                    <label htmlFor="numPizzas" className="mb-1 block text-xs font-bold text-slate-700">
                        Number of {config.bakeType === 'pizzas' ? 'Pizzas' : 'Loaves/Pieces'}
                    </label>
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
                    {errors.numPizzas && <p className="mt-1 text-xs text-red-500">{errors.numPizzas}</p>}
                </div>

                {/* Weight per Ball */}
                <div>
                    <label htmlFor="doughBallWeight" className="mb-1 block text-xs font-bold text-slate-700">
                        Weight per Ball (g)
                    </label>
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
                    {errors.doughBallWeight && <p className="mt-1 text-xs text-red-500">{errors.doughBallWeight}</p>}
                </div>
            </div>
        </AccordionSection>
    );
};

export default QuantitySection;
