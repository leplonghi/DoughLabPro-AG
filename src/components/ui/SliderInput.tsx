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

  const isOutOfRange = (recommendedMin !== undefined && value < recommendedMin) ||
    (recommendedMax !== undefined && value > recommendedMax);

  return (
    <div className={`relative rounded-2xl border-[0.5px] border-slate-100 bg-white shadow-sm transition-all hover:shadow-md ${disabled ? 'opacity-70 grayscale-[0.5]' : ''} ${hasError ? 'border-rose-200 ring-1 ring-rose-100' : ''}`}>

      {/* Label & Primary Input Row */}
      <div className="px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label htmlFor={name} className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 font-heading">
              {label}
            </label>
            {isProFeature && (
              <span className="text-[8px] bg-[#1B4332] text-white px-2 py-0.5 rounded-full font-black tracking-tighter shadow-sm animate-pulse-subtle">
                PRO
              </span>
            )}
            {tooltip && (
              <div className="group relative">
                <div className="p-1 rounded-full bg-slate-50 text-slate-300 hover:text-[#51a145] transition-colors cursor-help">
                  <InfoIcon size={12} />
                </div>
                {/* Repositioned Tooltip to avoid clip with better z-index */}
                <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 z-[60] mb-3 w-64 p-4 rounded-2xl bg-[#1B4332] text-white text-[11px] opacity-0 group-hover:opacity-100 transition-all shadow-2xl leading-relaxed italic border border-white/10 backdrop-blur-md">
                  <p dangerouslySetInnerHTML={{ __html: tooltip }} />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#1B4332] rotate-45 border-r border-b border-white/10" />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {recommendedMin !== undefined && recommendedMax !== undefined && (
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50/50 border border-emerald-100/50">
                <span className="text-[9px] font-bold text-emerald-700/60 uppercase tracking-widest whitespace-nowrap">
                  Ideal: {recommendedMin}-{recommendedMax}{unit}
                </span>
              </div>
            )}
            {isOutOfRange && (
              <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100 animate-slide-in-left">
                <ExclamationCircleIcon size={10} className="text-amber-500" />
                <span className="text-[8px] font-black text-amber-700 uppercase tracking-tight">Variant</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Inputs: Pct & Grams */}
        <div className="flex items-center bg-slate-50/50 p-1 rounded-xl border border-slate-100/50 shadow-inner w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <input
              type="number"
              value={internalValue}
              onChange={handleTextChange}
              disabled={disabled}
              className={`w-full sm:w-16 py-2 px-3 text-right text-base font-black font-heading bg-transparent focus:bg-white rounded-lg transition-all outline-none ${hasError ? 'text-rose-500' : 'text-[#1B4332]'}`}
              min={min}
              max={max}
              step={step}
            />
            <span className="absolute right-1 top-0 bottom-0 flex items-center pr-2 text-[10px] font-bold text-slate-300 pointer-events-none">{unit}</span>
          </div>

          {totalFlour && unit === '%' && (
            <>
              <div className="w-px h-6 bg-slate-200 mx-1" />
              <div className="relative flex-1 sm:flex-none">
                <input
                  type="number"
                  value={gramsValue}
                  onChange={handleGramsChange}
                  disabled={disabled}
                  className="w-full sm:w-20 py-2 px-3 text-right text-base font-black font-heading text-slate-400 bg-transparent focus:bg-white rounded-lg transition-all outline-none"
                  placeholder="g"
                />
                <span className="absolute right-1 top-0 bottom-0 flex items-center pr-2 text-[10px] font-bold text-slate-300 pointer-events-none">g</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Range Control Area */}
      <div className="px-5 pb-6 pt-2">
        <div className="relative group/slider pt-8 pb-2">
          {/* Floating Value Indicator */}
          <div
            className="absolute -top-1 pointer-events-none transition-all duration-75 z-20"
            style={{
              left: `${((internalValue - min) / (max - min)) * 100}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <div className="bg-[#1B4332] text-white px-2 py-1 rounded-lg text-[10px] font-black shadow-lg relative animate-fade-in-scale">
              {internalValue}{unit}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#1B4332] rotate-45" />
            </div>
          </div>

          {/* Track Markers (Min/Max Visual) */}
          <div className="absolute -top-1 left-0 right-0 flex justify-between text-[9px] font-bold text-slate-300 uppercase tracking-widest pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <span>{min}{unit}</span>
            <span>{max}{unit}</span>
          </div>

          <div className="relative h-2 flex items-center">
            {/* Recommended Zone Highlight */}
            {recommendedMin !== undefined && recommendedMax !== undefined && (
              <div
                className="absolute h-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full z-0 pointer-events-none blur-[1px]"
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
              className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer focus:outline-none z-10 accent-[#51a145] relative
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-[#51a145] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-xl [&::-webkit-slider-thumb]:hover:scale-125 [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:active:cursor-grabbing"
              style={{
                background: `linear-gradient(to right, #51a145 0%, #51a145 ${((internalValue - min) / (max - min)) * 100}%, #f1f5f9 ${((internalValue - min) / (max - min)) * 100}%, #f1f5f9 100%)`
              }}
            />
          </div>
        </div>

        {/* Technical Footer */}
        {learnArticle && (
          <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#51a145]/40" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Technical Mastery: {String(label || '').toLowerCase()}
              </span>
            </div>
            <a
              href={`#/learn/${encodeURIComponent(learnArticle.category)}/${learnArticle.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-[#51a145]/5 rounded-xl transition-all group border border-transparent hover:border-[#51a145]/10"
            >
              <span className="text-[10px] font-bold text-slate-500 group-hover:text-[#51a145] transition-colors">
                {t('ui.dive_into_technical_details')}
              </span>
              <InfoIcon size={12} className="text-slate-300 group-hover:text-[#51a145] transition-colors" />
            </a>
          </div>
        )}
      </div>

      {disabled && disabledTooltip && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] rounded-2xl flex items-center justify-center group cursor-not-allowed z-50 transition-all">
          <div className="bg-[#1B4332] px-6 py-3 rounded-2xl text-white text-xs font-bold shadow-2xl border border-white/20 transform scale-90 group-hover:scale-100 transition-transform flex items-center gap-3">
            <LockClosedIcon size={16} className="text-lime-400" />
            {disabledTooltip}
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderInput;


