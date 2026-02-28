
import React from 'react';
import { DoughConfig, CalculationMode, FormErrors } from '@/types';
import { ListBulletIcon, ClockIcon, ScaleIcon, CalculatorIcon } from '@/components/ui/Icons';
import AccordionSection from '@/components/calculator/AccordionSection';
import { useTranslation } from '@/i18n';
import { InfoTooltip } from '@/components/ui/InfoTooltip';
import TargetTimeInput from '../TargetTimeInput';

interface QuantitySectionProps {
    id?: string;
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
    id,
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

    const MODES = [
        { mode: 'mass' as CalculationMode, label: t('calculator.by_count', { defaultValue: 'By Count' }), icon: <ListBulletIcon /> },
        { mode: 'flour' as CalculationMode, label: t('calculator.by_flour', { defaultValue: 'By Flour' }), icon: <ScaleIcon /> },
        { mode: 'TARGET_TIME' as CalculationMode, label: t('calculator.by_time', { defaultValue: 'Schedule' }), icon: <ClockIcon /> }
    ];

    return (
        <AccordionSection
            id={id}
            index={2}
            accentColor="blue"
            title={t('calculator.quantity')}
            description={t('calculator.quantity_description')}
            icon={<CalculatorIcon />}
        >
            {/* 1. Compact Mode Selector */}
            <div className="bg-slate-50 p-1 rounded-xl mb-3 flex gap-1">
                {MODES.map((item) => {
                    const isActive = calculationMode === item.mode;
                    return (
                        <button
                            key={item.mode}
                            onClick={() => onCalculationModeChange(item.mode)}
                            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-200 min-h-[44px]
                                ${isActive
                                    ? 'bg-white text-blue-600 shadow-sm border border-slate-100'
                                    : 'text-slate-400 hover:text-blue-500 hover:bg-slate-100'
                                }
                            `}
                        >
                            {React.cloneElement(item.icon as React.ReactElement, { size: 14 })}
                            <span className="hidden sm:inline">{item.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* 2. Compact Input Grid */}
            <div>
                {calculationMode === 'flour' ? (
                    <div className="bg-white p-2 rounded-xl border border-slate-100/50">
                        <label htmlFor="totalFlour" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                            {t('calculator.total_flour_weight')}
                        </label>
                        <div className="relative group">
                            <input
                                type="number"
                                id="totalFlour"
                                value={config.totalFlour || 1000}
                                onChange={(e) => onConfigChange({ totalFlour: parseInt(e.target.value) || 0 })}
                                className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-3 pr-8 text-sm font-bold text-slate-700 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all outline-none min-h-[44px]"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <span className="text-[10px] font-bold text-slate-400">g</span>
                            </div>
                        </div>
                    </div>
                ) : calculationMode === 'TARGET_TIME' ? (
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
                ) : (
                    <div className="grid grid-cols-2 gap-3">
                        {/* Number of Balls */}
                        <div className="relative bg-white p-2 rounded-xl border border-slate-100/50 shadow-sm">
                            <label htmlFor="numPizzas" className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                                {config.bakeType === 'PIZZAS' ? 'Count' : 'Loaves'}
                            </label>
                            <div className="relative">
                                <input
                                    ref={numPizzasRef}
                                    type="number"
                                    id="numPizzas"
                                    min="1"
                                    max="100"
                                    value={config.numPizzas}
                                    onChange={(e) => onConfigChange({ numPizzas: parseInt(e.target.value) || 0 })}
                                    className={`block w-full rounded-lg bg-slate-50 border-transparent py-3 pl-2 pr-8 text-base font-bold text-slate-700 focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all outline-none min-h-[44px] ${errors.numPizzas ? 'bg-rose-50 text-rose-600' : ''}`}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <span className="text-[9px] font-bold text-slate-400">
                                        PC
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Weight per Ball */}
                        <div className="relative bg-white p-2 rounded-xl border border-slate-100/50 shadow-sm">
                            <label htmlFor="doughBallWeight" className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">{t('calculator:weight')}</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    id="doughBallWeight"
                                    min={minDoughBallWeight}
                                    max={maxDoughBallWeight}
                                    value={config.doughBallWeight}
                                    onChange={(e) => onConfigChange({ doughBallWeight: parseInt(e.target.value) || 0 })}
                                    className={`block w-full rounded-lg bg-slate-50 border-transparent py-3 pl-2 pr-8 text-base font-bold text-slate-700 focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all outline-none min-h-[44px] ${errors.doughBallWeight ? 'bg-rose-50 text-rose-600' : ''}`}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <span className="text-[9px] font-bold text-slate-400">g</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AccordionSection>
    );
};

export default QuantitySection;