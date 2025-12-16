import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { InfoIcon, LockClosedIcon, ExclamationCircleIcon } from '@/components/ui/Icons';
import { HydrationVisualizer } from './HydrationVisualizer';
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
    learnArticle
}) => {
    const { t } = useTranslation(['calculator', 'common']);
    const [internalValue, setInternalValue] = useState(value);
    const debounceTimeout = useRef<number | null>(null);

    useEffect(() => {
        setInternalValue(value);
    }, [value]);

    useEffect(() => {
        return () => {
            if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        };
    }, []);

    const handleDebouncedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setInternalValue(newValue);

        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

        debounceTimeout.current = window.setTimeout(() => {
            onChange(e);
        }, 50);
    };

    const visualState = useMemo(() => {
        const h = Math.min(Math.max(internalValue, 45), 95);
        const factor = (h - 50) / 40;

        let scaleX = 1 + (factor * 0.6);
        let scaleY = 1 - (factor * 0.5);

        if (h < 50) {
            scaleX = 0.9;
            scaleY = 1.1;
        }

        return {
            scaleX,
            scaleY,
            borderRadius: h > 65 ? '50% 50% 45% 45%' : '50%',
            backgroundColor: '#f6e6b4',
            shadowOpacity: 0.1 + (factor * 0.2),
            spreadRadius: 10 + (factor * 20),
        };
    }, [internalValue]);

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
                    <span className={`text-base font-bold font-mono ${hasError ? 'text-dlp-error' : 'text-dlp-text-primary'}`}>
                        {internalValue}%
                    </span>
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
                        onChange={handleDebouncedChange}
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

                {/* New Visualizer Component */}
                <HydrationVisualizer hydrationPercentage={internalValue} />

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
