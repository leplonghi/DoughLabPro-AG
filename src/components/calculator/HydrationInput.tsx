import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/i18n';
import { InfoIcon, LockClosedIcon, ExclamationCircleIcon } from '@/components/ui/Icons';

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
                name: 'hydration'
            }
        } as React.ChangeEvent<HTMLInputElement>;

        debounceTimeout.current = window.setTimeout(() => {
            onChange(syntheticEvent);
        }, 300);
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
        const val = parseFloat(strVal);
        setInternalValue(val || 0);

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
                const roundedPercent = Number(percent.toFixed(1));
                setInternalValue(roundedPercent);
                triggerChange(roundedPercent);
            }
        }
    };

    const isOutOfRange = (recommendedMin !== undefined && internalValue < recommendedMin) ||
        (recommendedMax !== undefined && internalValue > recommendedMax);

    return (
        <div className={`rounded-xl border border-slate-100 bg-white shadow-sm transition-all overflow-hidden hover:shadow-md hover:border-slate-200 ${disabled ? 'opacity-70' : ''} ${hasError ? 'border-rose-200' : ''}`}>

            {/* Control Header */}
            <div className="flex items-center justify-between px-3 pt-3 pb-2 gap-2">
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-dlp-brand-dark flex items-center gap-1 whitespace-nowrap">
                            {label || t('form.hydration')}
                        </label>
                        {isProFeature && <LockClosedIcon size={10} className="text-amber-500" />}
                        {tooltip && (
                            <div className="group relative cursor-help text-slate-300 hover:text-emerald-600 p-0.5">
                                <InfoIcon size={12} />
                                <div className="pointer-events-none absolute bottom-full left-0 z-[100] mb-2 w-64 p-3 rounded-xl bg-slate-800 text-white text-[10px] opacity-0 group-hover:opacity-100 transition-all shadow-xl leading-relaxed border border-slate-700/50 backdrop-blur-sm">
                                    <p dangerouslySetInnerHTML={{ __html: tooltip.replace(/<[^>]*>?/gm, "") }} />
                                    <div className="absolute -bottom-1 left-2 w-2 h-2 bg-slate-800 rotate-45" />
                                </div>
                            </div>
                        )}
                        {/* Learn Tech Link - Mini Version */}
                        {learnArticle && (
                            <a
                                href={`#/learn/article/${learnArticle.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-slate-100 text-slate-300 hover:text-[#51a145]"
                                title={t('calculator:learn_technical_details')}
                            >
                                <InfoIcon size={10} />
                            </a>
                        )}
                    </div>

                    <div className="flex items-center gap-2 h-3">
                        {recommendedMin && recommendedMax && (
                            <span className={`text-[9px] font-medium transition-colors ${isOutOfRange ? 'text-amber-600' : 'text-slate-300'}`}>
                                Ideal: {recommendedMin}-{recommendedMax}%
                            </span>
                        )}
                        {isOutOfRange && (
                            <div className="flex items-center gap-0.5 text-[9px] font-bold text-amber-600 animate-pulse-subtle">
                                <ExclamationCircleIcon size={10} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Micro Input Matrix */}
                <div className="flex items-center bg-slate-50/50 rounded-lg border border-slate-200/60 p-0.5 flex-shrink-0">
                    <div className="relative group/pct">
                        <input
                            type="number"
                            value={internalValue}
                            onChange={handlePercentageChange}
                            className={`w-14 py-2 pr-4 pl-1 text-right text-sm font-bold bg-transparent focus:bg-white rounded-md transition-all outline-none min-h-[36px] ${hasError ? 'text-rose-500' : 'text-slate-700'}`}
                            min={0}
                            max={200}
                            step={0.1}
                        />
                        <span className="absolute right-1 top-0 bottom-0 flex items-center text-[9px] font-bold text-slate-300 pointer-events-none select-none">%</span>
                    </div>

                    {totalFlour && (
                        <>
                            <div className="w-px h-6 bg-slate-200 mx-0.5" />
                            <div className="relative group/gms">
                                <input
                                    type="number"
                                    value={gramsValue}
                                    onChange={handleGramsChange}
                                    className="w-16 py-2 pr-4 pl-1 text-right text-sm font-bold text-slate-400 focus:text-slate-600 bg-transparent focus:bg-white rounded-md transition-all outline-none min-h-[36px]"
                                    placeholder="g"
                                />
                                <span className="absolute right-1 top-0 bottom-0 flex items-center text-[9px] font-bold text-slate-300 pointer-events-none select-none">g</span>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Slider Deck */}
            <div className="px-3 pb-3 pt-1">
                <div className="relative h-4 group/slider">
                    {/* Recommendation Zone Overlay */}
                    {recommendedMin && recommendedMax && (
                        <div
                            className="absolute top-1/2 -translate-y-1/2 h-1.5 bg-emerald-500/20 rounded-full z-0 pointer-events-none transition-all group-hover/slider:bg-emerald-500/30"
                            style={{
                                left: `${((recommendedMin - min) / (max - min)) * 100}%`,
                                width: `${((recommendedMax - recommendedMin) / (max - min)) * 100}%`
                            }}
                        />
                    )}

                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={internalValue}
                        onChange={handleSliderChange}
                        disabled={disabled}
                        className="absolute inset-0 w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer focus:outline-none z-10 accent-dlp-brand top-1/2 -translate-y-1/2 relative
                        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#51a145] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform active:[&::-webkit-slider-thumb]:scale-105"
                        style={{
                            background: `linear-gradient(to right, var(--dlp-brand) 0%, var(--dlp-brand) ${((internalValue - min) / (max - min)) * 100}%, #e2e8f0 ${((internalValue - min) / (max - min)) * 100}%, #e2e8f0 100%)`
                        }}
                    />
                </div>
            </div>
        </div >
    );
};
