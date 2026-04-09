import React from 'react';
import { DoughConfig, QuantityInputMode, FormErrors } from '@/types';
import { ListBulletIcon, ClockIcon } from '@/components/ui/Icons';
import AccordionSection from '@/components/calculator/AccordionSection';
import { useTranslation } from '@/i18n';
import TargetTimeInput from '../TargetTimeInput';
import { NumericInputCard } from '@/components/calculator/NumericInputCard';

interface QuantitySectionProps {
    config: DoughConfig;
    quantityInputMode: QuantityInputMode;
    onQuantityInputModeChange: (mode: QuantityInputMode) => void;
    onConfigChange: (newConfig: Partial<DoughConfig>) => void;
    errors: FormErrors;
    getInputClasses: (hasError: boolean) => string;
    numPizzasRef: React.Ref<HTMLInputElement>;
    minDoughBallWeight?: number;
    maxDoughBallWeight?: number;
    recommendedDoughBallWeight?: number;
}

const QuantitySection: React.FC<QuantitySectionProps> = ({
    config,
    quantityInputMode,
    onQuantityInputModeChange,
    onConfigChange,
    errors,
    getInputClasses,
    numPizzasRef,
    minDoughBallWeight = 10,
    maxDoughBallWeight = 2000,
    recommendedDoughBallWeight,
}) => {
    const { t } = useTranslation();
    const normalizedMode = quantityInputMode;
    const quantityQuickValues = config.bakeType === 'PIZZAS'
        ? [1, 2, 4, 6, 12]
        : [1, 2, 4, 6];
    const safeRecommendedWeight = recommendedDoughBallWeight ?? Math.round((minDoughBallWeight + maxDoughBallWeight) / 2);
    const weightQuickValues = [
        { label: `${minDoughBallWeight}g`, value: minDoughBallWeight },
        { label: `${safeRecommendedWeight}g`, value: safeRecommendedWeight },
        { label: `${maxDoughBallWeight}g`, value: maxDoughBallWeight },
    ].filter((item, index, list) => list.findIndex((candidate) => candidate.value === item.value) === index);
    const flourQuickValues = [500, 1000, 2000, 5000].map((value) => ({ label: `${value}g`, value }));
    const estimatedTotalDough = config.numPizzas * config.doughBallWeight;

    return (
        <AccordionSection
            title={t('calculator.quantity')}
            description={t('calculator.quantity_description')}
            icon={<ListBulletIcon />}
        >
            <div className="dlp-calc-rail mb-5 grid grid-cols-1 gap-2 rounded-[1.6rem] p-1.5 sm:grid-cols-3">
                {[
                    { mode: 'mass' as QuantityInputMode, label: t('calculator.by_total_weight'), note: t('calculator.fast_for_piece_count', { defaultValue: 'Pieces + weight per piece' }) },
                    { mode: 'flour' as QuantityInputMode, label: t('calculator.by_flour_weight'), note: t('calculator.best_for_batch_scaling', { defaultValue: 'Start from your flour bag' }) },
                    { mode: 'target_time' as QuantityInputMode, label: t('calculator.by_target_time'), icon: <ClockIcon size={14} /> }
                ].map((item) => (
                    <button
                        key={item.mode}
                        onClick={() => onQuantityInputModeChange(item.mode)}
                        className={`dlp-calc-option flex flex-col items-center justify-center gap-1 rounded-[1.2rem] py-3 px-4 text-center
                            ${normalizedMode === item.mode
                                ? 'dlp-calc-option--active'
                                : ''}
                        `}
                    >
                        <span className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
                            {item.icon}
                            {item.label}
                        </span>
                        {'note' in item && item.note && (
                            <span className="text-[10px] font-medium normal-case tracking-normal opacity-70">
                                {item.note}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {normalizedMode === 'flour' ? (
                    <div className="col-span-1 sm:col-span-2">
                        <NumericInputCard
                            id="totalFlour"
                            label={t('calculator.total_flour_weight')}
                            value={config.totalFlour || 1000}
                            onChange={(nextValue) => onConfigChange({ totalFlour: nextValue })}
                            min={100}
                            max={50000}
                            step={100}
                            unit="g"
                            helper={t('calculator.total_flour_help')}
                            accentLabel={t('calculator.batch_base', { defaultValue: 'Batch base' })}
                            quickValues={flourQuickValues}
                            inputMode="numeric"
                        />
                    </div>
                ) : normalizedMode === 'target_time' ? (
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
                            recommendedWeight={safeRecommendedWeight}
                            errors={errors}
                            getInputClasses={getInputClasses}
                            bakeType={config.bakeType}
                        />
                    </div>
                ) : (
                    <>
                        <NumericInputCard
                            ref={numPizzasRef}
                            id="numPizzas"
                            label={config.bakeType === 'PIZZAS' ? t('calculator.number_of_pizzas') : t('calculator.number_of_loaves')}
                            value={config.numPizzas}
                            onChange={(nextValue) => onConfigChange({ numPizzas: nextValue })}
                            min={1}
                            max={100}
                            step={1}
                            unit={config.bakeType === 'PIZZAS' ? 'pcs' : 'u'}
                            helper={t('calculator.pieces_hint', { defaultValue: 'Choose how many portions you want to bake.' })}
                            error={errors.numPizzas}
                            accentLabel={t('calculator.portions', { defaultValue: 'Portions' })}
                            quickValues={quantityQuickValues.map((value) => ({ label: String(value), value }))}
                        />

                        <NumericInputCard
                            id="doughBallWeight"
                            label={t('calculator.weight_per_piece')}
                            value={config.doughBallWeight}
                            onChange={(nextValue) => onConfigChange({ doughBallWeight: nextValue })}
                            min={minDoughBallWeight}
                            max={maxDoughBallWeight}
                            step={10}
                            unit="g"
                            helper={t('calculator.weight_hint', { defaultValue: 'The right weight keeps this style inside its ideal range.' })}
                            error={errors.doughBallWeight}
                            accentLabel={t('calculator.style_range', { defaultValue: 'Style range' })}
                            recommendedValue={safeRecommendedWeight}
                            quickValues={weightQuickValues}
                        />

                        <div className="col-span-1 sm:col-span-2 rounded-[1.4rem] border border-emerald-100 bg-[linear-gradient(180deg,rgba(241,250,244,0.95),rgba(252,255,253,0.98))] px-4 py-3">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700">
                                        {t('calculator.live_batch_preview', { defaultValue: 'Live batch preview' })}
                                    </p>
                                    <p className="mt-1 text-[12px] text-slate-600">
                                        {t('calculator.total_dough_estimate', { defaultValue: 'Estimated total dough based on the numbers above.' })}
                                    </p>
                                </div>
                                <div className="rounded-full bg-white px-4 py-2 text-sm font-black text-[#1B4332] shadow-sm">
                                    {estimatedTotalDough.toLocaleString()} g
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </AccordionSection>
    );
};

export default QuantitySection;



