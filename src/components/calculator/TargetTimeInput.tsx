import React from 'react';
import { useTranslation } from '@/i18n';
import { CalendarIcon, ClockIcon, PizzaSliceIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline'; // Using heroicons as standard in project
import { format } from '@/logic/dateUtils';

interface TargetTimeInputProps {
    targetTime?: string;
    onTargetTimeChange: (isoString: string) => void;
    numPizzas: number;
    onNumPizzasChange: (n: number) => void;
    ballWeight: number;
    onBallWeightChange: (n: number) => void;
    minWeight: number;
    maxWeight: number;
    errors?: {
        numPizzas?: string | null;
        ballWeight?: string | null;
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
    errors,
    getInputClasses
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

    return (
        <div className="rounded-xl border-2 border-transparent bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-[2px] shadow-sm animate-fade-in">
            <div className="rounded-[10px] bg-white p-4">
                <div className="mb-4 flex items-center gap-2 border-b border-indigo-100 pb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <ClockIcon className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-indigo-900">{t('calculator.target_time_mode')}</h3>
                        <p className="text-xs text-indigo-600">Reverse engineering from your meal time</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {/* Time Input */}
                    <div>
                        <label className="mb-1 block text-xs font-bold text-gray-700">
                            When do you want to eat?
                        </label>
                        <input
                            type="datetime-local"
                            value={currentValue}
                            onChange={handleDateChange}
                            className="block w-full rounded-md border-indigo-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-3 font-bold text-indigo-950 bg-indigo-50/50"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {/* Num Pizzas */}
                        <div>
                            <label className="mb-1 block text-xs font-bold text-gray-700">
                                Count
                            </label>
                            <input
                                type="number"
                                min={1}
                                max={100}
                                value={numPizzas}
                                onChange={(e) => onNumPizzasChange(parseInt(e.target.value) || 0)}
                                className={getInputClasses(!!errors?.numPizzas)}
                            />
                        </div>

                        {/* Ball Weight */}
                        <div>
                            <label className="mb-1 block text-xs font-bold text-gray-700">
                                Weight (g)
                            </label>
                            <input
                                type="number"
                                min={minWeight}
                                max={maxWeight}
                                value={ballWeight}
                                onChange={(e) => onBallWeightChange(parseInt(e.target.value) || 0)}
                                className={getInputClasses(!!errors?.ballWeight)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TargetTimeInput;
