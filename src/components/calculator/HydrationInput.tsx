import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
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
        <div className={`rounded-3xl border border-slate-100 bg-white shadow-sm transition-all overflow-hidden ${disabled ? 'opacity-70' : ''} ${hasError ? 'border-rose-200' : ''}`}>

            {/* Control Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-5 bg-slate-50/50 border-b border-slate-100 gap-4">
                <div className="flex flex-col">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-dlp-brand-dark flex items-center gap-2 mb-1">
                        {label || t('form.hydration')}
                        {isProFeature && <LockClosedIcon size={12} className="text-amber-500" />}
                        {tooltip && (
                            <div className="group relative cursor-help">
                                <InfoIcon size={12} className="text-slate-300" />
                                <div className="pointer-events-none absolute bottom-full left-0 z-50 mb-3 w-64 p-4 rounded-2xl bg-dlp-brand-dark text-white text-[11px] opacity-0 group-hover:opacity-100 transition-all shadow-xl leading-relaxed italic border border-white/10">
                                    {tooltip.replace(/<[^>]*>?/gm, "")}
                                    <div className="absolute -bottom-1 left-4 w-2 h-2 bg-dlp-brand-dark rotate-45 border-r border-b border-white/10" />
                                </div>
                            </div>
                        )}
                    </label>
                    <div className="flex items-center gap-2">
                        {isOutOfRange && (
                            <div className="flex items-center gap-1.5 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                                <ExclamationCircleIcon size={10} className="text-amber-500" />
                                <span className="text-[9px] font-bold text-amber-600 uppercase tracking-tighter">Variations Lab</span>
                            </div>
                        )}
                        {recommendedMin && recommendedMax && (
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic">Rec: {recommendedMin}-{recommendedMax}%</span>
                        )}
                    </div>
                </div>

                {/* Micro Input Matrix */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
                        <div className="relative group/pct">
                            <input
                                type="number"
                                value={internalValue}
                                onChange={handlePercentageChange}
                                className={`w-16 py-2 px-3 text-right text-sm font-black font-heading focus:bg-emerald-50 focus:text-dlp-brand-dark transition-colors outline-none h-10 ${hasError ? 'text-rose-500' : 'text-slate-700'}`}
                                min={0}
                                max={200}
                                step={0.1}
                            />
                            <span className="absolute right-0 top-0 bottom-0 flex items-center pr-1 text-[9px] font-bold text-slate-300 pointer-events-none group-focus-within/pct:text-dlp-brand-dark transition-colors">%</span>
                        </div>

                        {totalFlour && (
                            <>
                                <div className="w-[1px] h-4 bg-slate-100" />
                                <div className="relative group/gms">
                                    <input
                                        type="number"
                                        value={gramsValue}
                                        onChange={handleGramsChange}
                                        className="w-20 py-2 px-3 text-right text-sm font-black font-heading text-slate-500 focus:bg-emerald-50 focus:text-dlp-brand-dark transition-colors outline-none h-10 bg-slate-50/20"
                                        placeholder="g"
                                    />
                                    <span className="absolute right-0 top-0 bottom-0 flex items-center pr-1 text-[9px] font-bold text-slate-300 pointer-events-none group-focus-within/gms:text-dlp-brand-dark transition-colors">g</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Slider Deck */}
            <div className="p-6 pt-8">
                <div className="relative h-2">
                    {/* Recommendation Zone Overlay */}
                    {recommendedMin && recommendedMax && (
                        <div
                            className="absolute top-1/2 -translate-y-1/2 h-4 sm:h-6 bg-emerald-50/50 border border-emerald-100 rounded-full z-0 pointer-events-none opacity-40"
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
                        className="absolute inset-0 w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer focus:outline-none z-10 accent-dlp-brand"
                        style={{
                            background: `linear-gradient(to right, var(--dlp-brand) 0%, var(--dlp-brand) ${((internalValue - min) / (max - min)) * 100}%, #f1f5f9 ${((internalValue - min) / (max - min)) * 100}%, #f1f5f9 100%)`
                        }}
                    />
                </div>

                {/* Footer Insight */}
                {learnArticle && (
                    <div className="mt-8 flex items-center justify-between border-t border-slate-50 pt-4">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{t('calculator.science_of')} {label || t('form.hydration')}</span>
                        <a href={`#/learn/article/${learnArticle.id}`} className="flex items-center gap-2 group">
                            <span className="text-[10px] font-bold text-dlp-brand-dark/60 group-hover:text-dlp-brand-dark transition-colors">{t('ui.dive_into_technical_details')}</span>
                            <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-dlp-brand-dark/40 group-hover:bg-dlp-brand-dark group-hover:text-white transition-all shadow-sm">
                                <InfoIcon size={10} />
                            </div>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};


