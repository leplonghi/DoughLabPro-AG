
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
}) => {
  const { t } = useTranslation();
  const [internalValue, setInternalValue] = useState(value);
  const debounceTimeout = useRef<number | null>(null);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  const handleDebouncedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setInternalValue(newValue);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = window.setTimeout(() => {
      const syntheticEvent = {
        target: {
          name: name,
          value: String(newValue),
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }, 150);
  };

  const isOutOfRange = (recommendedMin !== undefined && value < recommendedMin) ||
    (recommendedMax !== undefined && value > recommendedMax);

  const formattedValue = internalValue.toFixed(2).replace(/\.00$/, '').replace(/\.([1-9])0$/, '.$1');
  const wrapperClasses = `relative ${disabled ? 'opacity-70' : ''}`;
  const inputContainerClasses = `flex items-center gap-4 ${disabled ? 'rounded-lg border-2 border-dashed border-dlp-border bg-dlp-bg-muted p-2' : ''}`;

  return (
    <div className={wrapperClasses}>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <label htmlFor={name} className="block text-sm font-medium text-dlp-text-secondary flex items-center gap-2">
            {label}
            {isProFeature && (
              <span className="inline-flex items-center gap-0.5 rounded-full bg-dlp-bg-muted px-1.5 py-0.5 text-[10px] font-bold text-dlp-accent uppercase tracking-wide border border-dlp-border">
                <LockClosedIcon className="h-2.5 w-2.5" />{t('common.pro')}</span>
            )}
          </label>
          {tooltip && (
            <div className="group relative flex items-center">
              <InfoIcon className="h-4 w-4 cursor-help text-dlp-text-muted" />
              <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-72 -translate-x-1/2 rounded-md bg-dlp-bg-card p-3 text-xs text-dlp-text-primary border border-dlp-border opacity-0 shadow-dlp-md transition-opacity duration-300 group-hover:opacity-100">
                <p dangerouslySetInnerHTML={{ __html: tooltip }} />
                <svg
                  className="absolute left-0 top-full h-2 w-full text-dlp-bg-card"
                  x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"
                >
                  <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                </svg>
              </div>
            </div>
          )}
          {learnArticle && (
            <a
              href={`#/learn/${encodeURIComponent(learnArticle.category)}/${learnArticle.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center ml-1"
              title={`Learn more about ${learnArticle.title}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-dlp-bg-muted p-1 rounded-full hover:bg-dlp-border-strong transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-dlp-accent">
                  <path d="M11.25 4.533A9.707 9.707 0 006 3.057c-5.105 0-8.568 4.064-8.568 8.4 0 4.417 4.554 7.491 8.568 7.491 2.536 0 4.944-1.04 6.75-2.916a9.768 9.768 0 001.508-2.031c.09-.166.354-.42.48-.58a.75.75 0 111.18 1.026c-.14.17-.42.44-.52.6a11.268 11.268 0 01-1.74 2.343c-2.08 2.16-4.854 3.358-7.658 3.358-4.638 0-9.868-3.547-9.868-8.65 0-5.023 3.996-9.65 9.868-9.65 2.155 0 4.216.78 5.82 2.207.16.143.32.29.47.44a.75.75 0 01-1.06 1.06c-.13-.13-.27-.27-.41-.39A8.208 8.208 0 0011.25 4.533z" />
                  <path fillRule="evenodd" d="M13.28 1.72a.75.75 0 00-1.06 1.06l4.5 4.5H10.5a.75.75 0 000 1.5h6.22l-4.5 4.5a.75.75 0 101.06 1.06l5.78-5.78a.75.75 0 000-1.06l-5.78-5.78z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-48 -translate-x-1/2 rounded-xl bg-dlp-bg-card p-3 text-xs text-dlp-text-primary opacity-0 shadow-dlp-md transition-opacity duration-300 group-hover:opacity-100 border border-dlp-border">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase font-bold text-dlp-accent">{t('nav.learn')}</span>
                </div>
                <p className="font-bold text-dlp-text-primary mb-1">{learnArticle.title}</p>
                <p className="text-[10px] text-dlp-text-muted">{t('ui.click_to_read_full_article')}</p>
                <svg
                  className="absolute left-0 top-full h-2 w-full text-dlp-bg-card"
                  x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"
                >
                  <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                </svg>
              </div>
            </a>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isOutOfRange && (
            <div className="group relative flex items-center text-dlp-warning">
              <ExclamationCircleIcon className="h-4 w-4" />
              <div className="pointer-events-none absolute bottom-full right-0 z-10 mb-2 w-64 rounded-md bg-dlp-bg-card p-2 text-xs text-dlp-text-primary shadow-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100 border border-dlp-border">
                Value is outside the recommended stylistic range ({recommendedMin}-{recommendedMax}{unit}).
              </div>
            </div>
          )}
          <span className={`rounded-md px-2 py-0.5 text-lg font-bold transition-colors ${hasError
            ? 'bg-dlp-error/10 text-dlp-error'
            : isOutOfRange ? 'text-dlp-warning' : 'text-dlp-text-primary'
            }`}>
            {formattedValue}{unit}
          </span>
        </div>
      </div>

      <div className={inputContainerClasses}>
        <input
          type="range"
          id={name}
          name={name}
          value={internalValue}
          onChange={handleDebouncedChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className={`h-2 w-full appearance-none rounded-lg ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
        />
        {disabled && presetValue !== undefined && (
          <span className="flex-shrink-0 rounded-md bg-dlp-bg-muted px-2 py-1 text-sm font-semibold text-dlp-text-primary">
            {presetValue.toFixed(1)}{unit}
          </span>
        )}
      </div>

      {recommendedMin !== undefined && recommendedMax !== undefined && !disabled && (
        <div className="flex justify-between px-1 mt-1">
          <span className="text-[10px] text-dlp-text-muted"></span>
          <span className="text-[10px] text-dlp-text-muted">Rec: {recommendedMin}-{recommendedMax}{unit}</span>
        </div>
      )}

      {disabled && disabledTooltip && (
        <div className="group absolute inset-0 z-10 cursor-not-allowed">
          <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-md bg-dlp-bg-card p-2 text-xs text-dlp-text-primary opacity-0 shadow-dlp-md transition-opacity duration-300 group-hover:opacity-100 border border-dlp-border">
            {disabledTooltip}
            <svg
              className="absolute left-0 top-full h-2 w-full text-dlp-bg-card"
              x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"
            >
              <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderInput;
