import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { InfoIcon, ExclamationCircleIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

type QuickValue = number | { label: string; value: number };

interface SliderInputProps {
  label: React.ReactNode;
  name: string;
  value: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: number, name: string) => void;
  min: number;
  max: number;
  step?: number;
  unit: string;
  tooltip?: string;
  disabled?: boolean;
  disabledTooltip?: string;
  hasError?: boolean;
  presetValue?: number;
  isProFeature?: boolean;
  recommendedMin?: number;
  recommendedMax?: number;
  quickValues?: QuickValue[];
  learnArticle?: { id: string; title: string; category: string };
  totalFlour?: number;
}

const getPrecision = (step: number): number => {
  if (Number.isInteger(step)) return 0;
  const decimalPart = step.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
};

const clampValue = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const roundToStep = (value: number, min: number, step: number) => {
  const precision = getPrecision(step);
  const rounded = Math.round((value - min) / step) * step + min;
  return Number(rounded.toFixed(precision));
};

const normalizeQuickValues = (quickValues: QuickValue[], unit: string) => {
  return quickValues.map((quickValue) =>
    typeof quickValue === 'number'
      ? { label: `${quickValue}${unit}`, value: quickValue }
      : quickValue,
  );
};

const SliderInput: React.FC<SliderInputProps> = ({
  label,
  name,
  value,
  onChange,
  onValueChange,
  min,
  max,
  step = 1,
  unit,
  tooltip,
  disabled = false,
  disabledTooltip,
  hasError = false,
  presetValue,
  isProFeature = false,
  recommendedMin,
  recommendedMax,
  quickValues = [],
  learnArticle,
  totalFlour,
}) => {
  const { t } = useTranslation();
  const [internalValue, setInternalValue] = useState(value);
  const [gramsValue, setGramsValue] = useState<string>('');
  const debounceTimeout = useRef<number | null>(null);
  const precision = useMemo(() => getPrecision(step), [step]);
  const safeQuickValues = useMemo(() => normalizeQuickValues(quickValues, unit), [quickValues, unit]);
  const safeRecommendedValue = useMemo(() => {
    if (presetValue !== undefined) return presetValue;
    if (recommendedMin !== undefined && recommendedMax !== undefined) {
      return Number((((recommendedMin + recommendedMax) / 2)).toFixed(precision));
    }
    return undefined;
  }, [presetValue, recommendedMin, recommendedMax, precision]);

  useEffect(() => {
    setInternalValue(value);
    if (totalFlour && unit === '%') {
      const grams = (value / 100) * totalFlour;
      setGramsValue(Math.abs(Math.round(grams) - grams) < 0.1 ? Math.round(grams).toString() : grams.toFixed(1));
    }
  }, [value, totalFlour, unit]);

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, []);

  const emitValue = (nextValue: number, immediate = false) => {
    const safeValue = roundToStep(clampValue(nextValue, min, max), min, step);
    setInternalValue(safeValue);

    if (totalFlour && unit === '%') {
      const grams = (safeValue / 100) * totalFlour;
      setGramsValue(Math.abs(Math.round(grams) - grams) < 0.1 ? Math.round(grams).toString() : grams.toFixed(1));
    }

    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    const run = () => {
      if (onValueChange) {
        onValueChange(safeValue, name);
        return;
      }

      if (onChange) {
        const syntheticEvent = {
          target: { name, value: String(safeValue) },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    };

    if (immediate) {
      run();
      return;
    }

    debounceTimeout.current = window.setTimeout(run, 80);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(Number(e.target.value));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = Number.parseFloat(e.target.value);
    if (!Number.isNaN(parsed)) {
      emitValue(parsed, true);
    } else {
      setInternalValue(0);
    }
  };

  const handleGramsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const strVal = e.target.value;
    setGramsValue(strVal);

    if (totalFlour && unit === '%') {
      const grams = Number.parseFloat(strVal);
      if (!Number.isNaN(grams)) {
        emitValue((grams / totalFlour) * 100, true);
      }
    }
  };

  const isOutOfRange =
    (recommendedMin !== undefined && value < recommendedMin) ||
    (recommendedMax !== undefined && value > recommendedMax);

  const fillPercent = ((internalValue - min) / Math.max(max - min, step)) * 100;

  return (
    <div className={`dlp-calc-panel overflow-hidden rounded-[1.65rem] border transition-all ${disabled ? 'opacity-70' : ''} ${hasError ? '!border-rose-200' : ''}`}>
      <div className="flex flex-col items-start justify-between gap-3 border-b border-slate-200/70 px-4 py-3 sm:flex-row sm:items-center">
        <div className="flex flex-col">
          <label htmlFor={name} className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#385343] dark:text-emerald-100">
            {label}
            {isProFeature && <span className="rounded-md bg-amber-100 px-1.5 py-0.5 text-[9px] font-black text-amber-700">{t('common.pro')}</span>}
            {tooltip && (
              <div className="group relative cursor-help">
                <InfoIcon size={12} className="text-slate-300" />
                <div className="pointer-events-none absolute bottom-full left-0 z-50 mb-3 w-64 rounded-2xl border border-white/10 bg-[#1B4332] p-4 text-[11px] leading-relaxed text-white opacity-0 shadow-xl transition-all group-hover:opacity-100">
                  <p dangerouslySetInnerHTML={{ __html: tooltip }} />
                  <div className="absolute -bottom-1 left-4 h-2 w-2 rotate-45 border-r border-b border-white/10 bg-[#1B4332]" />
                </div>
              </div>
            )}
          </label>
          <div className="flex flex-wrap items-center gap-2">
            {isOutOfRange && (
              <div className="flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5">
                <ExclamationCircleIcon size={10} className="text-amber-500" />
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-amber-700">Variation</span>
              </div>
            )}
            {recommendedMin !== undefined && recommendedMax !== undefined && (
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Best zone: {recommendedMin}-{recommendedMax}{unit}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => emitValue(internalValue - step, true)}
            disabled={disabled}
            className="flex h-10 w-10 items-center justify-center rounded-[0.95rem] border border-slate-200 bg-white text-slate-500 transition hover:border-emerald-200 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Minus size={16} />
          </button>

          <div className="dlp-calc-field flex items-center overflow-hidden rounded-[1rem] border">
            <div className="relative group/val">
              <input
                id={name}
                type="number"
                value={internalValue}
                onChange={handleTextChange}
                disabled={disabled}
                className={`h-10 w-16 bg-transparent py-2 px-3 text-right text-sm font-semibold font-heading outline-none transition-colors ${hasError ? 'text-rose-600 dark:text-rose-300' : 'text-slate-800 dark:text-slate-100'}`}
                min={min}
                max={max}
                step={step}
              />
              <span className="pointer-events-none absolute bottom-0 right-0 top-0 flex items-center pr-1 text-[9px] font-bold text-slate-300 transition-colors group-focus-within/val:text-[#1B4332]">
                {unit}
              </span>
            </div>

            {totalFlour && unit === '%' && (
              <>
                <div className="h-5 w-px bg-slate-200 dark:bg-slate-700" />
                <div className="relative group/gms">
                  <input
                    type="number"
                    value={gramsValue}
                    onChange={handleGramsChange}
                    disabled={disabled}
                    className="h-10 w-16 bg-transparent py-2 px-3 text-right text-sm font-semibold font-heading text-slate-600 outline-none transition-colors dark:text-slate-200"
                    placeholder="g"
                  />
                  <span className="pointer-events-none absolute bottom-0 right-0 top-0 flex items-center pr-1 text-[9px] font-bold text-slate-300 transition-colors group-focus-within/gms:text-[#51a145]">g</span>
                </div>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => emitValue(internalValue + step, true)}
            disabled={disabled}
            className="flex h-10 w-10 items-center justify-center rounded-[0.95rem] border border-slate-200 bg-white text-slate-500 transition hover:border-emerald-200 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="relative space-y-4 p-4 pt-5">
        <div className="relative h-1.5">
          {recommendedMin !== undefined && recommendedMax !== undefined && (
            <div
              className="pointer-events-none absolute top-1/2 z-0 h-4 -translate-y-1/2 rounded-full border border-emerald-100 bg-emerald-50/70 sm:h-6"
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
            className="absolute inset-0 z-10 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-100 accent-[#51a145] focus:outline-none dark:bg-slate-800"
            style={{
              background: `linear-gradient(to right, #51a145 0%, #51a145 ${fillPercent}%, #e5ece6 ${fillPercent}%, #e5ece6 100%)`
            }}
          />
        </div>

        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          <span>{min}{unit}</span>
          {safeRecommendedValue !== undefined && <span className="text-emerald-700">Target {safeRecommendedValue}{unit}</span>}
          <span>{max}{unit}</span>
        </div>

        {safeQuickValues.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {safeQuickValues.map((quickValue) => {
              const isActive = Math.abs(quickValue.value - internalValue) < step / 2 || quickValue.value === internalValue;
              return (
                <button
                  key={`${name}-${quickValue.label}-${quickValue.value}`}
                  type="button"
                  onClick={() => emitValue(quickValue.value, true)}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-bold transition ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:text-emerald-700'
                  }`}
                >
                  {quickValue.label}
                </button>
              );
            })}
          </div>
        )}

        {learnArticle && (
          <div className="flex items-center justify-between border-t border-slate-200/60 pt-3 dark:border-slate-800">
            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">{t('calculator.science_of')} {typeof label === 'string' ? label.toLowerCase() : t('calculator.this_value', { defaultValue: 'this value' })}</span>
            <a
              href={`#/learn/${encodeURIComponent(learnArticle.category)}/${learnArticle.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2"
            >
              <span className="text-[10px] font-bold text-[#51a145]/60 transition-colors group-hover:text-[#51a145]">{t('ui.dive_into_technical_details')}</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-50 text-[#51a145]/40 transition-all group-hover:bg-[#51a145] group-hover:text-white dark:bg-slate-900/60">
                <InfoIcon size={10} />
              </div>
            </a>
          </div>
        )}

        {disabled && disabledTooltip && (
          <div className="group absolute inset-0 z-50 flex cursor-not-allowed items-center justify-center bg-white/40 backdrop-blur-[1px]">
            <div className="rounded-xl bg-[#1B4332] px-4 py-2 text-[10px] font-bold opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
              {disabledTooltip}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SliderInput;
