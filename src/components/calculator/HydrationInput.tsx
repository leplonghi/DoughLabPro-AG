import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { InfoIcon, LockClosedIcon, ExclamationCircleIcon } from '@/components/ui/Icons';
import { InfoTooltip } from '@/components/ui/InfoTooltip';

interface HydrationInputProps {
    label?: string;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    max?: number;
    step?: number;
    hasError?: boolean;
    isProFeature?: boolean;
    recommendedMin?: number;
    recommendedMax?: number;
    disabled?: boolean;
    tooltip?: string;
    learnArticle?: any;
    totalFlour?: number;
}

export const HydrationInput: React.FC<HydrationInputProps> = ({
    label,
    value,
    onChange,
    min = 40,
    max = 100,
    step = 1,
    hasError = false,
    isProFeature = false,
    recommendedMin,
    recommendedMax,
    disabled = false,
    tooltip,
    learnArticle,
    totalFlour
}) => {
    const { t } = useTranslation(['calculator', 'common']);
    const [internalValue, setInternalValue] = useState(value);
    const [gramsValue, setGramsValue] = useState<string>('');
    const debounceTimeout = useRef<number | null>(null);

    // Sync internal state with props
    useEffect(() => {
        setInternalValue(value);
        if (totalFlour) {
            setGramsValue(Math.round((value / 100) * totalFlour).toString());
        }
    }, [value, totalFlour]);

    useEffect(() => {
        return () => {
            if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        };
    }, []);

    const triggerChange = (newValue: number) => {
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

        const syntheticEvent = {
            target: {
                value: String(newValue),
                name: 'hydration' // Default name, though often unused by parent's direct handler which might expect event
            }
        } as React.ChangeEvent<HTMLInputElement>;

        debounceTimeout.current = window.setTimeout(() => {
            onChange(syntheticEvent);
        }, 300); // Slightly longer debounce for text inputs
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setInternalValue(newValue);
        if (totalFlour) {
            setGramsValue(Math.round((newValue / 100) * totalFlour).toString());
        }

        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        debounceTimeout.current = window.setTimeout(() => {
            onChange(e);
        }, 50);
    };

    const handlePercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const strVal = e.target.value;
        setInternalValue(Number(strVal)); // Update UI immediately for responsiveness

        const val = parseFloat(strVal);
        if (!isNaN(val)) {
            if (totalFlour) {
                setGramsValue(Math.round((val / 100) * totalFlour).toString());
            }
            triggerChange(val);
        }
    };

    const handleGramsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const strVal = e.target.value;
        setGramsValue(strVal);

        if (totalFlour) {
            const grams = parseFloat(strVal);
            if (!isNaN(grams)) {
                const percent = (grams / totalFlour) * 100;
                setInternalValue(Number(percent.toFixed(1)));
                triggerChange(Number(percent.toFixed(1)));
            }
        }
    };

    const isOutOfRange = (recommendedMin !== undefined && internalValue < recommendedMin) ||
        (recommendedMax !== undefined && internalValue > recommendedMax);

    return (
        <div className={`rounded-xl border border-dlp-border bg-white shadow-sm transition-all overflow-hidden ${disabled ? 'opacity-70' : ''}`}>

            {/* Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-dlp-border/50">
                <label className="text-sm font-bold text-dlp-text-secondary flex items-center gap-2">
                    {label || t('form.hydration')}
                    {isProFeature && <LockClosedIcon className="h-3 w-3 text-dlp-accent" />}
                    {tooltip && (
                        <InfoTooltip content={tooltip.replace(/<[^>]*>?/gm, "")} />
                    )}
                </label>
                <div className="flex items-center gap-2">
                    {isOutOfRange && <ExclamationCircleIcon className="h-4 w-4 text-dlp-warning" />}

                    {/* Inputs Container */}
                    <div className="flex items-center gap-2">
                        {/* Percentage Input */}
                        <div className="relative">
                            <input
                                type="number"
                                value={internalValue}
                                onChange={handlePercentageChange}
                                className={`w-16 rounded-md border-dlp-border py-1 px-2 text-right text-sm font-bold font-mono focus:border-dlp-accent focus:ring-dlp-accent ${hasError ? 'text-dlp-error border-dlp-error' : 'text-dlp-text-primary'}`}
                                min={0}
                                max={200}
                                step={0.1}
                            />
                            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-dlp-text-muted pointer-events-none">%</span>
                        </div>

                        {/* Grams Input (if totalFlour available) */}
                        {totalFlour && (
                            <>
                                <span className="text-dlp-text-muted text-xs">=</span>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={gramsValue}
                                        onChange={handleGramsChange}
                                        className="w-20 rounded-md border-dlp-border py-1 px-2 text-right text-sm font-bold font-mono focus:border-dlp-accent focus:ring-dlp-accent text-dlp-text-secondary bg-slate-50/50"
                                        placeholder="g"
                                    />
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-dlp-text-muted pointer-events-none">g</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex flex-col p-4">
                {/* Controls */}
                <div className="relative z-20">
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={internalValue}
                        onChange={handleSliderChange}
                        disabled={disabled}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-dlp-accent/50"
                        style={{
                            backgroundImage: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${(internalValue - min) / (max - min) * 100}%, #e2e8f0 ${(internalValue - min) / (max - min) * 100}%, #e2e8f0 100%)`
                        }}
                    />

                    {/* Ticks/Rec Range Overlay */}
                    {recommendedMin && recommendedMax && (
                        <div className="relative w-full h-1 mt-1">
                            <div
                                className="absolute top-0 h-1 bg-green-500/30 rounded-full"
                                style={{
                                    left: `${(recommendedMin - min) / (max - min) * 100}%`,
                                    width: `${(recommendedMax - recommendedMin) / (max - min) * 100}%`
                                }}
                                title={`Recommended: ${recommendedMin}-${recommendedMax}%`}
                            />
                        </div>
                    )}
                </div>

                {/* Footer Link */}
                {learnArticle && (
                    <div className="text-right mt-2">
                        <a href={`#/learn/article/${learnArticle.id}`} className="text-[10px] text-dlp-text-muted hover:text-dlp-accent underline">
                            {t('calculator.learn_hydration_science', 'Water Science')}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};
