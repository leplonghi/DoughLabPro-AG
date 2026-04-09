import React from 'react';
import { useTranslation } from '@/i18n';
import { ClockIcon } from '@heroicons/react/24/outline';
import { format } from '@/logic/dateUtils';
import { NumericInputCard } from './NumericInputCard';
import { BakeType } from '@/types';

interface TargetTimeInputProps {
    targetTime?: string;
    onTargetTimeChange: (isoString: string) => void;
    numPizzas: number;
    onNumPizzasChange: (n: number) => void;
    ballWeight: number;
    onBallWeightChange: (n: number) => void;
    minWeight: number;
    maxWeight: number;
    recommendedWeight: number;
    bakeType: BakeType;
    errors?: {
        numPizzas?: string | null;
        doughBallWeight?: string | null;
    };
    getInputClasses: (hasError: boolean) => string;
}

const TargetTimeInput: React.FC<TargetTimeInputProps> = ({
    targetTime,
    onTargetTimeChange,
    numPizzas,
    onNumPizzasChange,
    ballWeight,
    onBallWeightChange,
    minWeight,
    maxWeight,
    recommendedWeight,
    bakeType,
    errors,
    getInputClasses: _getInputClasses
}) => {
    const { t } = useTranslation();

    // Default to tomorrow 8 PM if not set
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 1);
    defaultDate.setHours(20, 0, 0, 0);

    const currentValue = targetTime ? format(new Date(targetTime), 'yyyy-MM-ddTHH:mm') : format(defaultDate, 'yyyy-MM-ddTHH:mm');

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = new Date(e.target.value);
        if (!isNaN(date.getTime())) {
            onTargetTimeChange(date.toISOString());
        }
    };

    const quickTimeOptions = [
        { label: t('calculator.tomorrow_lunch', { defaultValue: 'Tomorrow 12:00' }), date: (() => {
            const next = new Date();
            next.setDate(next.getDate() + 1);
            next.setHours(12, 0, 0, 0);
            return next;
        })() },
        { label: t('calculator.tomorrow_dinner', { defaultValue: 'Tomorrow 20:00' }), date: defaultDate },
        { label: t('calculator.weekend_morning', { defaultValue: 'Weekend 09:00' }), date: (() => {
            const next = new Date();
            const day = next.getDay();
            const daysUntilSaturday = (6 - day + 7) % 7 || 7;
            next.setDate(next.getDate() + daysUntilSaturday);
            next.setHours(9, 0, 0, 0);
            return next;
        })() },
    ];
    const quantityQuickValues = bakeType === BakeType.PIZZAS ? [1, 2, 4, 6, 12] : [1, 2, 4, 6];
    const weightQuickValues = [
        { label: `${minWeight}g`, value: minWeight },
        { label: `${recommendedWeight}g`, value: recommendedWeight },
        { label: `${maxWeight}g`, value: maxWeight },
    ].filter((item, index, list) => list.findIndex((candidate) => candidate.value === item.value) === index);
    const estimatedTotalDough = numPizzas * ballWeight;

    return (
        <div className="rounded-[1.8rem] border border-emerald-100 bg-gradient-to-r from-emerald-50/80 to-white p-4 shadow-sm animate-fade-in">
            <div className="rounded-[1.2rem] bg-white p-4 border border-emerald-100/70">
                <div className="mb-4 flex items-center gap-2 border-b border-emerald-100 pb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <ClockIcon className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-emerald-900">{t('calculator.target_time_mode')}</h3>
                        <p className="text-xs text-emerald-700">Reverse engineering from your meal time</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#385343]">
                            {t('calculator.when_should_it_be_ready', { defaultValue: 'When should it be ready?' })}
                        </label>
                        <input
                            type="datetime-local"
                            value={currentValue}
                            onChange={handleDateChange}
                            className="block w-full rounded-[1.1rem] border border-emerald-200 bg-emerald-50/60 px-4 py-3 text-sm font-bold text-emerald-950 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                        />
                        <div className="mt-3 flex flex-wrap gap-2">
                            {quickTimeOptions.map((option) => (
                                <button
                                    key={option.label}
                                    type="button"
                                    onClick={() => onTargetTimeChange(option.date.toISOString())}
                                    className="rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-[11px] font-bold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <NumericInputCard
                            id="target-time-count"
                            label={bakeType === BakeType.PIZZAS ? t('calculator.number_of_pizzas') : t('calculator.number_of_loaves')}
                            value={numPizzas}
                            onChange={onNumPizzasChange}
                            min={1}
                            max={100}
                            step={1}
                            unit={bakeType === BakeType.PIZZAS ? 'pcs' : 'u'}
                            helper={t('calculator.count_hint', { defaultValue: 'How many portions do you want ready?' })}
                            error={errors?.numPizzas}
                            quickValues={quantityQuickValues.map((value) => ({ label: String(value), value }))}
                        />

                        <NumericInputCard
                            id="target-time-weight"
                            label={t('calculator.weight_per_piece')}
                            value={ballWeight}
                            onChange={onBallWeightChange}
                            min={minWeight}
                            max={maxWeight}
                            step={10}
                            unit="g"
                            helper={t('calculator.weight_hint', { defaultValue: 'Stay close to the style weight for easier planning.' })}
                            error={errors?.doughBallWeight}
                            recommendedValue={recommendedWeight}
                            quickValues={weightQuickValues}
                        />
                    </div>

                    <div className="rounded-[1.25rem] border border-emerald-100 bg-emerald-50/50 px-4 py-3">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700">
                                    {t('calculator.timeline_payload', { defaultValue: 'Planned dough load' })}
                                </p>
                                <p className="mt-1 text-[12px] text-slate-600">
                                    {t('calculator.timeline_payload_hint', { defaultValue: 'This total is used to reverse-calculate your prep timeline.' })}
                                </p>
                            </div>
                            <div className="rounded-full bg-white px-4 py-2 text-sm font-black text-[#1B4332] shadow-sm">
                                {estimatedTotalDough.toLocaleString()} g
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TargetTimeInput;
