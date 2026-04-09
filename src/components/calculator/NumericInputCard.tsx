import React, { forwardRef, useMemo, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { useTranslation } from '@/i18n';

type QuickValue = {
  label: string;
  value: number;
};

interface NumericInputCardProps {
  id: string;
  label: React.ReactNode;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  helper?: string;
  error?: string | null;
  accentLabel?: string;
  recommendedValue?: number;
  quickValues?: QuickValue[];
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
}

const getPrecision = (step: number): number => {
  if (Number.isInteger(step)) return 0;
  const decimalPart = step.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
};

const clampValue = (value: number, min: number, max: number) => {
  return Math.min(max, Math.max(min, value));
};

const roundToStep = (value: number, step: number, min: number) => {
  const precision = getPrecision(step);
  const rounded = Math.round((value - min) / step) * step + min;
  return Number(rounded.toFixed(precision));
};

export const NumericInputCard = forwardRef<HTMLInputElement, NumericInputCardProps>(function NumericInputCard(
  {
    id,
    label,
    value,
    onChange,
    min,
    max,
    step = 1,
    unit,
    helper,
    error,
    accentLabel,
    recommendedValue,
    quickValues = [],
    inputMode = 'numeric',
  },
  ref,
) {
  const { t } = useTranslation();
  const [draftValue, setDraftValue] = useState<string>(String(value));
  const precision = useMemo(() => getPrecision(step), [step]);

  React.useEffect(() => {
    setDraftValue(String(value));
  }, [value]);

  const commitValue = (nextValue: number) => {
    const safeValue = roundToStep(clampValue(nextValue, min, max), step, min);
    onChange(safeValue);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextDraft = event.target.value;
    setDraftValue(nextDraft);

    const parsed = Number.parseFloat(nextDraft);
    if (!Number.isNaN(parsed)) {
      commitValue(parsed);
    }
  };

  const handleBlur = () => {
    const parsed = Number.parseFloat(draftValue);
    if (Number.isNaN(parsed)) {
      setDraftValue(String(value));
      return;
    }

    const safeValue = roundToStep(clampValue(parsed, min, max), step, min);
    setDraftValue(String(safeValue));
    onChange(safeValue);
  };

  const currentRatio = ((value - min) / Math.max(max - min, step)) * 100;

  return (
    <div
      className={`overflow-hidden rounded-[1.6rem] border bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,250,247,0.98))] shadow-[0_24px_44px_-34px_rgba(27,67,50,0.28)] transition-all ${
        error ? 'border-rose-200' : 'border-slate-200/80'
      }`}
    >
      <div className="flex items-start justify-between gap-3 border-b border-slate-200/70 px-4 py-3">
        <div className="min-w-0">
          <label htmlFor={id} className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#385343]">
            {label}
          </label>
          {helper && <p className="mt-1 text-[12px] leading-relaxed text-slate-500">{helper}</p>}
        </div>
        {accentLabel && (
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-700">
            {accentLabel}
          </span>
        )}
      </div>

      <div className="space-y-4 px-4 py-4">
        <div className="grid grid-cols-[52px,1fr,52px] items-center gap-3">
          <button
            type="button"
            onClick={() => commitValue(value - step)}
            className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-slate-200 bg-white text-slate-500 transition hover:border-emerald-200 hover:text-emerald-700 active:scale-[0.98]"
            aria-label={t('calculator.decrease_value', { defaultValue: 'Decrease value' })}
          >
            <Minus size={18} />
          </button>

          <div className="relative overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white">
            <input
              ref={ref}
              id={id}
              type="number"
              inputMode={inputMode}
              value={draftValue}
              min={min}
              max={max}
              step={step}
              onChange={handleTextChange}
              onBlur={handleBlur}
              className={`h-14 w-full border-0 bg-transparent px-4 text-center text-[28px] font-black tracking-[-0.04em] outline-none ${
                error ? 'text-rose-600' : 'text-slate-900'
              }`}
            />
            {unit && (
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {unit}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => commitValue(value + step)}
            className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-slate-200 bg-white text-slate-500 transition hover:border-emerald-200 hover:text-emerald-700 active:scale-[0.98]"
            aria-label={t('calculator.increase_value', { defaultValue: 'Increase value' })}
          >
            <Plus size={18} />
          </button>
        </div>

        <div className="space-y-2">
          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,#51a145,#2f8b49)] transition-[width] duration-200"
              style={{ width: `${Math.max(0, Math.min(100, currentRatio))}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            <span>{min}{unit}</span>
            {recommendedValue !== undefined && (
              <span className="text-emerald-700">{t('calculator.best_around', { defaultValue: 'Best around' })} {Number(recommendedValue.toFixed(precision))}{unit}</span>
            )}
            <span>{max}{unit}</span>
          </div>
        </div>

        {quickValues.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {quickValues.map((quickValue) => {
              const isActive = Math.abs(quickValue.value - value) < step / 2 || quickValue.value === value;
              return (
                <button
                  key={`${id}-${quickValue.label}-${quickValue.value}`}
                  type="button"
                  onClick={() => commitValue(quickValue.value)}
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

        {error ? (
          <p className="text-[11px] font-bold text-rose-600">{error}</p>
        ) : (
          <p className="text-[11px] text-slate-500">
            {t('calculator.tap_type_stepper', { defaultValue: 'Tap, type, or use the stepper for fine adjustment.' })}
          </p>
        )}
      </div>
    </div>
  );
});
