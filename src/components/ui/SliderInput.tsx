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
    <div className={`rounded-xl border-[0.5px] border-slate-100 bg-white shadow-sm transition-all overflow-hidden ${disabled ? 'opacity-70' : ''} ${hasError ? 'border-rose-200' : ''}`}>

      {/* Input Deck */}
      <div className="px-4 py-2.5 bg-slate-50/50 border-b-[0.5px] border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex flex-col">
          <label htmlFor={name} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B4332] flex items-center gap-2 mb-1">
            {label}
            {isProFeature && <span className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-md font-black">{t('common.pro')}</span>}
            {tooltip && (
              <div className="group relative cursor-help">
                <InfoIcon size={12} className="text-slate-300" />
                <div className="pointer-events-none absolute bottom-full left-0 z-50 mb-3 w-64 p-4 rounded-2xl bg-[#1B4332] text-white text-[11px] opacity-0 group-hover:opacity-100 transition-all shadow-xl leading-relaxed italic border border-white/10">
                  <p dangerouslySetInnerHTML={{ __html: tooltip }} />
                  <div className="absolute -bottom-1 left-4 w-2 h-2 bg-[#1B4332] rotate-45 border-r border-b border-white/10" />
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
            {recommendedMin !== undefined && recommendedMax !== undefined && (
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic">Rec: {recommendedMin}-{recommendedMax}{unit}</span>
            )}
          </div>
        </div>

        {/* Action matrix */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white border-[0.5px] border-slate-100 rounded-lg overflow-hidden shadow-sm">
            <div className="relative group/val">
              <input
                type="number"
                value={internalValue}
                onChange={handleTextChange}
                disabled={disabled}
                className={`w-14 py-1.5 px-2 text-right text-sm font-black font-heading focus:bg-emerald-50 focus:text-[#1B4332] transition-colors outline-none h-8 ${hasError ? 'text-rose-500' : 'text-slate-700'}`}
                min={min}
                max={max}
                step={step}
              />
              <span className="absolute right-0 top-0 bottom-0 flex items-center pr-1 text-[9px] font-bold text-slate-300 pointer-events-none group-focus-within/val:text-[#1B4332] transition-colors">{unit}</span>
            </div>

            {totalFlour && unit === '%' && (
              <>
                <div className="w-[1px] h-4 bg-slate-100" />
                <div className="relative group/gms">
                  <input
                    type="number"
                    value={gramsValue}
                    onChange={handleGramsChange}
                    disabled={disabled}
                    className="w-16 py-1.5 px-2 text-right text-sm font-black font-heading text-slate-500 focus:bg-emerald-50 focus:text-[#51a145] transition-colors outline-none h-8 bg-slate-50/20"
                    placeholder="g"
                  />
                  <span className="absolute right-0 top-0 bottom-0 flex items-center pr-1 text-[9px] font-bold text-slate-300 pointer-events-none group-focus-within/gms:text-[#51a145] transition-colors">g</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Control Deck */}
      <div className="p-4 pt-4 relative">
        <div className="relative h-1">
          {recommendedMin !== undefined && recommendedMax !== undefined && (
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
            value={internalValue}
            onChange={handleSliderChange}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            className="absolute inset-0 w-full h-1 bg-slate-100 rounded-full appearance-none cursor-pointer focus:outline-none z-10 accent-[#51a145]"
            style={{
              background: `linear-gradient(to right, #51a145 0%, #51a145 ${((internalValue - min) / (max - min)) * 100}%, #f1f5f9 ${((internalValue - min) / (max - min)) * 100}%, #f1f5f9 100%)`
            }}
          />
        </div>

        {/* Technical insight link */}
        {learnArticle && (
          <div className="mt-4 flex items-center justify-between border-t-[0.5px] border-slate-50 pt-3">
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{t('calculator.science_of')} {String(label || '').toLowerCase()}</span>
            <a
              href={`#/learn/${encodeURIComponent(learnArticle.category)}/${learnArticle.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <span className="text-[10px] font-bold text-[#51a145]/60 group-hover:text-[#51a145] transition-colors">{t('ui.dive_into_technical_details')}</span>
              <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-[#51a145]/40 group-hover:bg-[#51a145] group-hover:text-white transition-all shadow-sm">
                <InfoIcon size={10} />
              </div>
            </a>
          </div>
        )}

        {disabled && disabledTooltip && (
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] flex items-center justify-center group cursor-not-allowed z-50">
            <div className="bg-[#1B4332] px-4 py-2 rounded-xl text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
              {disabledTooltip}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SliderInput;


