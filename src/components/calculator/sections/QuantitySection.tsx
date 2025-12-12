import React from 'react';
import { DoughConfig, CalculationMode, FormErrors } from '@/types';
import { ListBulletIcon, InfoIcon } from '@/components/ui/Icons';
import ChoiceButton from '@/components/ui/ChoiceButton';
import AccordionSection from '@/components/calculator/AccordionSection';
import { useTranslation } from '@/i18n';

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
  const { t } = useTranslation();
    return (
        <AccordionSection
            title={t('calculator.quantity')}
            description="Define how many pieces or the total flour weight."
            icon={<ListBulletIcon className="h-6 w-6" />}
        >
            {/* Calculation Mode Toggle */}
            <div className="mb-4 grid grid-cols-2 gap-2 rounded-lg bg-dlp-bg-muted p-1">
                <ChoiceButton
                    active={calculationMode === 'mass'}
                    label={t('calculator.by_total_weight')}
                    onClick={() => onCalculationModeChange('mass')}
                />
                <ChoiceButton
                    active={calculationMode === 'flour'}
                    label={t('calculator.by_flour_weight')}
                    onClick={() => onCalculationModeChange('flour')}
                />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {calculationMode === 'flour' ? (
                    <div className="col-span-1 sm:col-span-2">
                        <div className="flex items-center gap-2 mb-1">
                            <label htmlFor="totalFlour" className="block text-xs font-bold text-dlp-text-secondary">
                                Total Flour Weight (g)
                            </label>
                            <div className="group relative flex items-center">
                                <InfoIcon className="h-3.5 w-3.5 cursor-help text-dlp-accent" />
                                <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded-md bg-dlp-bg-card p-2 text-xs font-normal text-dlp-text-primary border border-dlp-border opacity-0 shadow-dlp-md transition-opacity duration-300 group-hover:opacity-100">
                                    Start with a fixed amount of flour.
                                    <svg className="absolute left-0 top-full h-2 w-full text-dlp-bg-card" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                        </div>
                        <input
                            type="number"
                            id="totalFlour"
                            name="totalFlour"
                            min="100"
                            max="50000"
                            value={config.totalFlour || 1000}
                            onChange={(e) => onConfigChange({ totalFlour: parseInt(e.target.value) || 0 })}
                            className={getInputClasses(false)}
                        />
                        <p className="mt-2 text-xs text-dlp-text-muted italic">
                            We will calculate the total dough weight based on this flour amount and your hydration settings.
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Number of Balls */}
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <label htmlFor="numPizzas" className="block text-xs font-bold text-dlp-text-secondary">
                                    Number of {config.bakeType === 'pizzas' ? 'Pizzas' : 'Loaves/Pieces'}
                                </label>
                                <div className="group relative flex items-center">
                                    <InfoIcon className="h-3.5 w-3.5 cursor-help text-dlp-accent" />
                                    <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded-md bg-dlp-bg-card p-2 text-xs font-normal text-dlp-text-primary border border-dlp-border opacity-0 shadow-dlp-md transition-opacity duration-300 group-hover:opacity-100">
                                        Total number of pieces or loaves you want to make.
                                        <svg className="absolute left-0 top-full h-2 w-full text-dlp-bg-card" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
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
                            {errors.numPizzas && <p className="mt-1 text-xs text-dlp-error">{errors.numPizzas}</p>}
                        </div>

                        {/* Weight per Ball */}
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <label htmlFor="doughBallWeight" className="block text-xs font-bold text-dlp-text-secondary">
                                    Weight per Piece (g)
                                </label>
                                <div className="group relative flex items-center">
                                    <InfoIcon className="h-3.5 w-3.5 cursor-help text-dlp-accent" />
                                    <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded-md bg-dlp-bg-card p-2 text-xs font-normal text-dlp-text-primary border border-dlp-border opacity-0 shadow-dlp-md transition-opacity duration-300 group-hover:opacity-100">
                                        Target weight for each piece. ~250g for pizza, ~800g for bread loaves.
                                        <svg className="absolute left-0 top-full h-2 w-full text-dlp-bg-card" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
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
                            {errors.doughBallWeight && <p className="mt-1 text-xs text-dlp-error">{errors.doughBallWeight}</p>}
                        </div>
                    </>
                )}
            </div>
        </AccordionSection>
    );
};

export default QuantitySection;
