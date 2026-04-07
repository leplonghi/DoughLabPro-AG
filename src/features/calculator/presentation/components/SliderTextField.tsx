
import React, { useRef, useState, useEffect } from 'react';
import { useDoughInput } from '../hooks/useDoughInput';
import Decimal from 'decimal.js';

interface SliderTextFieldProps {
    label: string;
    value: Decimal;
    onChange: (val: Decimal) => void;
    min: number;
    max: number;
    step?: number;
    unit?: string;
}

export const SliderTextField: React.FC<SliderTextFieldProps> = ({
    label,
    value,
    onChange,
    min,
    max,
    step = 1,
    unit = ''
}) => {
    const inputProps = useDoughInput({
        value,
        onChange,
        min,
        max,
        precision: step < 1 ? 1 : 0
    });

    const [sliderValue, setSliderValue] = useState<number>(value.toNumber());

    // Sync slider local state with external value when not dragging? 
    // Actually simpler to just drive slider from prop value, 
    // but for performance on slow devices we might want local state.
    // For now, let's drive it directly to ensure single source of truth.

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = parseFloat(e.target.value);
        setSliderValue(newVal);
        onChange(new Decimal(newVal));
    };

    useEffect(() => {
        setSliderValue(value.toNumber());
    }, [value]);

    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-dlp-text-primary">
                    {label}
                </label>
                <div className="relative w-24">
                    <input
                        type="text"
                        inputMode="decimal"
                        className={`w-full text-right p-1 pr-8 border rounded 
                            ${inputProps.error ? 'border-dlp-error text-dlp-error' : 'border-dlp-border text-dlp-text-primary'}
                            focus:ring-2 focus:ring-dlp-brand focus:border-transparent outline-none transition-all`}
                        value={inputProps.value}
                        onChange={(e) => inputProps.onChange(e.target.value)}
                        onBlur={inputProps.onBlur}
                        onFocus={inputProps.onFocus}
                    />
                    <span className="absolute right-2 top-1.5 text-xs text-dlp-text-muted select-none pointer-events-none">
                        {unit}
                    </span>
                </div>
            </div>

            <div className="relative h-6 flex items-center">
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-dlp-bg-soft rounded-lg appearance-none cursor-pointer accent-dlp-brand"
                />
            </div>
            {inputProps.error && (
                <p className="text-xs text-dlp-error mt-1">{inputProps.error}</p>
            )}
        </div>
    );
};
