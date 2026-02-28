import React, { useState, useEffect, useRef } from 'react';
import { InfoIcon, LockClosedIcon, ExclamationCircleIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface SliderInputProps {
  label: string;
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  tooltip?: string;
  disabled?: boolean;
  disabledTooltip?: string;
  hasError?: boolean;
  presetValue?: number;
  isProFeature?: boolean;
  recommendedMin?: number;
  recommendedMax?: number;
  learnArticle?: { id: string; title: string; category: string };
  totalFlour?: number;
}

const SliderInput: React.FC<SliderInputProps> = ({
  label,
  name,
  value,
  onChange,
  min,
  max,
  step,
  unit,
  tooltip,
  disabled = false,
  disabledTooltip,
  hasError = false,
  presetValue,
  isProFeature = false,
  recommendedMin,
  recommendedMax,
  learnArticle,
  totalFlour,
}) => {
  const { t } = useTranslation();
  const [internalValue, setInternalValue] = useState(value);
  const [gramsValue, setGramsValue] = useState<string>('');
  const debounceTimeout = useRef<number | null>(null);

  useEffect(() => {
    setInternalValue(value);
    if (totalFlour && unit === '%') {
      const grams = (value / 100) * totalFlour;
      const formattedGrams = Math.abs(Math.round(grams) - grams) < 0.1 ? Math.round(grams).toString() : grams.toFixed(1);
      setGramsValue(formattedGrams);
    }
  }, [value, totalFlour, unit]);

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, []);

  const triggerChange = (newValue: number) => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = window.setTimeout(() => {
      const syntheticEvent = {
        target: { name: name, value: String(newValue) },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }, 300);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setInternalValue(newValue);
    if (totalFlour && unit === '%') {
      const grams = (newValue / 100) * totalFlour;
      setGramsValue(Math.abs(Math.round(grams) - grams) < 0.1 ? Math.round(grams).toString() : grams.toFixed(1));
    }
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = window.setTimeout(() => {
      onChange(e);
    }, 50);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const strVal = e.target.value;
    const val = parseFloat(strVal);
    setInternalValue(val || 0);

    if (!isNaN(val)) {
      if (totalFlour && unit === '%') {
        const grams = (val / 100) * totalFlour;
        setGramsValue(Math.abs(Math.round(grams) - grams) < 0.1 ? Math.round(grams).toString() : grams.toFixed(1));
      }
      triggerChange(val);
    }
  };

  const handleGramsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const strVal = e.target.value;
    setGramsValue(strVal);
    if (totalFlour && unit === '%') {
      const grams = parseFloat(strVal);
      if (!isNaN(grams)) {
        const percent = (grams / totalFlour) * 100;
        const roundedPercent = Number(percent.toFixed(2));
        setInternalValue(roundedPercent);
        triggerChange(roundedPercent);
      }
    }
  };

  const isOutOfRange = (recommendedMin !== undefined && value < recommendedMin) || (recommendedMax !== undefined && value > recommendedMax);

  return (
    <div className={`relative rounded-2xl border border-dlp-border bg-white shadow-sm transition-all hover:shadow-md hover:border-dlp-brand/20 ${disabled ? 'opacity-70 grayscale-[0.5]' : ''} ${hasError ? 'border-rose-200 ring-1 ring-rose-100' : ''}`}>
      {/* Header Row: Label + Action Inputs */}
      <div className="px-4 pt-3 pb-2 flex items-center justify-between gap-3">
        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <label htmlFor={name} className="text-[11px] font-bold uppercase tracking-wider text-dlp-text-secondary font-heading whitespace-nowrap">
              {label}
            </label>
            {isProFeature && (
              <span className="text-[9px] bg-gradient-to-r from-dlp-brand to-emerald-600 text-white px-1.5 py-0.5 rounded-full font-black tracking-tighter shadow-sm">
                {t('learn:pro')}
              </span>
            )}
            {tooltip && (
              <div className="group relative">
                <div className="text-dlp-text-muted hover:text-dlp-brand transition-colors cursor-help p-0.5">
                  <InfoIcon size={12} />
                </div>
                <div className="pointer-events-none absolute bottom-full left-0 z-[100] mb-2 w-64 p-3 rounded-xl bg-slate-800 text-white text-[10px] opacity-0 group-hover:opacity-100 transition-all shadow-xl leading-relaxed border border-slate-700/50 backdrop-blur-sm">
                  <p dangerouslySetInnerHTML={{ __html: tooltip }} />
                  <div className="absolute -bottom-1 left-2 w-2 h-2 bg-slate-800 rotate-45" />
                </div>
              </div>
            )}
            {learnArticle && (
              <a
                href={`#/learn/${encodeURIComponent(learnArticle.category)}/${learnArticle.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-dlp-bg-soft text-dlp-text-muted hover:text-dlp-brand"
                title={t('calculator:learn_technical_details')}
              >
                <InfoIcon size={12} />
              </a>
            )}
          </div>

          <div className="flex items-center gap-2 h-3">
            {recommendedMin !== undefined && recommendedMax !== undefined && (
              <span className={`text-[9px] font-medium transition-colors ${isOutOfRange ? 'text-amber-600' : 'text-dlp-text-muted'}`}>
                {recommendedMin}-{recommendedMax}{unit}
              </span>
            )}
            {isOutOfRange && (
              <div className="flex items-center gap-0.5 text-[9px] font-bold text-amber-600 animate-pulse-subtle">
                <ExclamationCircleIcon size={10} />
              </div>
            )}
          </div>
        </div>

        {/* Inputs */}
        <div className="flex items-center bg-dlp-bg-soft rounded-xl border border-dlp-border p-0.5 flex-shrink-0 focus-within:ring-2 focus-within:ring-dlp-brand/10 focus-within:border-dlp-brand/30 transition-all">
          <div className="relative">
            <input
              type="number"
              value={internalValue}
              onChange={handleTextChange}
              disabled={disabled}
              className={`w-16 py-1.5 pr-5 pl-2 text-right text-sm font-bold bg-transparent focus:bg-white rounded-lg transition-all outline-none min-h-[36px] ${hasError ? 'text-rose-500' : 'text-dlp-text-primary'}`}
              min={min} max={max} step={step}
            />
            <span className="absolute right-2 top-0 bottom-0 flex items-center text-[10px] font-bold text-dlp-text-muted pointer-events-none select-none">{unit}</span>
          </div>
          {totalFlour && unit === '%' && (
            <>
              <div className="w-px h-5 bg-dlp-border mx-0.5" />
              <div className="relative">
                <input
                  type="number"
                  value={gramsValue}
                  onChange={handleGramsChange}
                  disabled={disabled}
                  className="w-16 py-1.5 pr-5 pl-2 text-right text-sm font-bold text-dlp-text-secondary focus:text-dlp-text-primary bg-transparent focus:bg-white rounded-lg transition-all outline-none min-h-[36px]"
                  placeholder="g"
                />
                <span className="absolute right-2 top-0 bottom-0 flex items-center text-[10px] font-bold text-dlp-text-muted pointer-events-none select-none">g</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Range Control Area */}
      <div className="px-4 pb-4 pt-1">
        <div className="relative h-5 flex items-center group/slider">
          {/* Recommended Zone Highlight */}
          {recommendedMin !== undefined && recommendedMax !== undefined && (
            <div
              className="absolute h-1.5 bg-dlp-brand/10 rounded-full z-0 pointer-events-none transition-all group-hover/slider:bg-dlp-brand/20"
              style={{
                left: `${((recommendedMin - min) / (max - min)) * 100}%`,
                width: `${((recommendedMax - recommendedMin) / (max - min)) * 100}%`
              }}
            />
          )}
          <input
            type="range"
            value={internalValue}
            onChange={handleSliderChange}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            className="w-full h-1.5 bg-dlp-bg-soft rounded-full appearance-none cursor-pointer focus:outline-none z-10 accent-dlp-brand relative
                            [&::-webkit-slider-thumb]:appearance-none 
                            [&::-webkit-slider-thumb]:w-5 
                            [&::-webkit-slider-thumb]:h-5 
                            [&::-webkit-slider-thumb]:bg-white 
                            [&::-webkit-slider-thumb]:border-2 
                            [&::-webkit-slider-thumb]:border-dlp-brand 
                            [&::-webkit-slider-thumb]:rounded-full 
                            [&::-webkit-slider-thumb]:shadow-sm 
                            [&::-webkit-slider-thumb]:hover:scale-110 
                            [&::-webkit-slider-thumb]:transition-transform 
                            active:[&::-webkit-slider-thumb]:scale-105"
            style={{
              background: `linear-gradient(to right, var(--dlp-brand) 0%, var(--dlp-brand) ${((internalValue - min) / (max - min)) * 100}%, var(--dlp-bg-soft) ${((internalValue - min) / (max - min)) * 100}%, var(--dlp-bg-soft) 100%)`
            }}
          />
        </div>
      </div>

      {disabled && disabledTooltip && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] rounded-2xl flex items-center justify-center cursor-not-allowed z-50">
          <div className="bg-white px-3 py-1.5 rounded-lg border border-dlp-border shadow-sm flex items-center gap-2">
            <LockClosedIcon size={12} className="text-dlp-text-muted" />
            <span className="text-[10px] font-bold text-dlp-text-secondary">{disabledTooltip}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderInput;