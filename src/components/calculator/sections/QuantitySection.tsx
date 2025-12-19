import React from 'react';
import { DoughConfig, CalculationMode, FormErrors } from '@/types';
import { ListBulletIcon, InfoIcon, ClockIcon } from '@/components/ui/Icons';
import ChoiceButton from '@/components/ui/ChoiceButton';
import AccordionSection from '@/components/calculator/AccordionSection';
import { useTranslation } from '@/i18n';
import TargetTimeInput from '../TargetTimeInput';

interface QuantitySectionProps {
    config: DoughConfig;
    calculationMode: CalculationMode;
    onCalculationModeChange: (mode: CalculationMode) => void;
    onConfigChange: (newConfig: Partial<DoughConfig>) => void;
    errors: FormErrors;
    getInputClasses: (hasError: boolean) => string;
    numPizzasRef: React.Ref<HTMLInputElement>;
    minDoughBallWeight?: number;
    maxDoughBallWeight?: number;
}

const QuantitySection: React.FC<QuantitySectionProps> = ({
    config,
    calculationMode,
    onCalculationModeChange,
    onConfigChange,
    errors,
    getInputClasses,
    numPizzasRef,
    minDoughBallWeight = 10,
    maxDoughBallWeight = 2000,
}) => {
    const { t } = useTranslation();

    return (
        <AccordionSection
            title={t('calculator.quantity')}
            description={t('calculator.quantity_description')}
            icon={<ListBulletIcon />}
        >
            {/* Calculation Mode Selector - Professional Segmented Control */}
            <div className="bg-slate-100/80 p-1.5 rounded-2xl border border-slate-100 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                    { mode: 'mass' as CalculationMode, label: t('calculator.by_total_weight'), icon: null },
                    { mode: 'flour' as CalculationMode, label: t('calculator.by_flour_weight'), icon: null },
                    { mode: 'TARGET_TIME' as CalculationMode, label: t('calculator.by_target_time'), icon: <ClockIcon size={14} /> }
                ].map((item) => (
                    <button
                        key={item.mode}
                        onClick={() => onCalculationModeChange(item.mode)}
                        className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300
                            ${calculationMode === item.mode
                                ? 'bg-[#51a145] text-white shadow-lg shadow-[#51a145]/20'
                                : 'bg-transparent text-slate-500 hover:text-[#51a145] hover:bg-emerald-50/50'}
                        `}
                    >
                        {item.icon}
                        {item.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {calculationMode === 'flour' ? (
                    <div className="col-span-1 sm:col-span-2">
                        <div className="mb-4 flex items-center justify-between">
                            <label htmlFor="totalFlour" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B4332]">
                                {t('calculator.total_flour_weight')}
                            </label>
                            <div className="group relative">
                                <InfoIcon className="h-4 w-4 text-[#51a145]/60 hover:text-[#51a145] cursor-help transition-all duration-300 hover:scale-125 hover:rotate-12" />
                                <div className="pointer-events-none absolute bottom-full right-0 z-20 mb-3 w-64 p-4 rounded-2xl bg-white text-slate-700 text-xs font-normal opacity-0 shadow-2xl transition-all group-hover:opacity-100 group-hover:-translate-y-1 leading-relaxed border border-slate-200">
                                    {t('calculator.total_flour_tooltip')}
                                    <div className="absolute -bottom-1 right-2 w-3 h-3 bg-white rotate-45 border-r border-b border-slate-200" />
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <input
                                type="number"
                                id="totalFlour"
                                name="totalFlour"
                                min="100"
                                max="50000"
                                value={config.totalFlour || 1000}
                                onChange={(e) => onConfigChange({ totalFlour: parseInt(e.target.value) || 0 })}
                                className="block w-full rounded-2xl border-slate-200 bg-slate-50 py-4 px-6 text-xl font-bold text-slate-800 placeholder-slate-400 focus:border-[#51a145] focus:bg-white focus:ring-4 focus:ring-[#51a145]/5 transition-all outline-none"
                            />
                            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">GRAMS</span>
                        </div>
                        <p className="mt-3 text-[10px] text-slate-400 italic">
                            {t('calculator.total_flour_help')}
                        </p>
                    </div>
                ) : calculationMode === 'TARGET_TIME' ? (
                    <div className="col-span-1 sm:col-span-2">
                        <TargetTimeInput
                            targetTime={config.targetTime}
                            onTargetTimeChange={(iso) => onConfigChange({ targetTime: iso })}
                            numPizzas={config.numPizzas}
                            onNumPizzasChange={(n) => onConfigChange({ numPizzas: n })}
                            ballWeight={config.doughBallWeight}
                            onBallWeightChange={(n) => onConfigChange({ doughBallWeight: n })}
                            minWeight={minDoughBallWeight}
                            maxWeight={maxDoughBallWeight}
                            errors={errors}
                            getInputClasses={getInputClasses}
                        />
                    </div>
                ) : (
                    <>
                        {/* Number of Balls */}
                        <div className="group">
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="numPizzas" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B4332]">
                                    {config.bakeType === 'PIZZAS' ? t('calculator.number_of_pizzas') : t('calculator.number_of_loaves')}
                                </label>
                                <InfoIcon className="h-4 w-4 text-[#51a145]/60 group-hover:text-[#51a145] transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12" />
                            </div>
                            <div className="relative">
                                <input
                                    ref={numPizzasRef}
                                    type="number"
                                    id="numPizzas"
                                    name="numPizzas"
                                    min="1"
                                    max="100"
                                    value={config.numPizzas}
                                    onChange={(e) => onConfigChange({ numPizzas: parseInt(e.target.value) || 0 })}
                                    className={`block w-full rounded-2xl border-slate-200 bg-slate-50 py-4 px-6 text-xl font-bold text-slate-800 focus:border-[#51a145] focus:bg-white focus:ring-4 focus:ring-[#51a145]/5 transition-all outline-none ${errors.numPizzas ? 'border-rose-300 bg-rose-50' : ''}`}
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400 uppercase tracking-widest">{config.bakeType === 'PIZZAS' ? 'Pcs' : 'Units'}</span>
                            </div>
                            {errors.numPizzas && <p className="mt-2 text-[10px] font-bold text-rose-500 uppercase tracking-wider">{errors.numPizzas}</p>}
                        </div>

                        {/* Weight per Ball */}
                        <div className="group">
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="doughBallWeight" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B4332]">
                                    {t('calculator.weight_per_piece')}
                                </label>
                                <InfoIcon className="h-4 w-4 text-[#51a145]/60 group-hover:text-[#51a145] transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                            </div>
                            <div className="relative">
                                <input
                                    type="number"
                                    id="doughBallWeight"
                                    name="doughBallWeight"
                                    min={minDoughBallWeight}
                                    max={maxDoughBallWeight}
                                    value={config.doughBallWeight}
                                    onChange={(e) => onConfigChange({ doughBallWeight: parseInt(e.target.value) || 0 })}
                                    className={`block w-full rounded-2xl border-slate-200 bg-slate-50 py-4 px-6 text-xl font-bold text-slate-800 focus:border-[#51a145] focus:bg-white focus:ring-4 focus:ring-[#51a145]/5 transition-all outline-none ${errors.doughBallWeight ? 'border-rose-300 bg-rose-50' : ''}`}
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">G</span>
                            </div>
                            <p className="mt-2 text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                                Range: {minDoughBallWeight}g - {maxDoughBallWeight}g
                            </p>
                            {errors.doughBallWeight && <p className="mt-2 text-[10px] font-bold text-rose-500 uppercase tracking-wider">{errors.doughBallWeight}</p>}
                        </div>
                    </>
                )}
            </div>
        </AccordionSection>
    );
};

export default QuantitySection;



