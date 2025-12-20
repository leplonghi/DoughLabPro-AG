import React, { useState, useRef, useEffect } from 'react';

interface AnimatedInputProps {
    label?: string;
    value: string | number;
    onChange: (value: string) => void;
    type?: 'text' | 'number' | 'email' | 'password';
    placeholder?: string;
    error?: string;
    hint?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    disabled?: boolean;
    required?: boolean;
    className?: string;
    min?: number;
    max?: number;
    step?: number;
    autoFocus?: boolean;
}

/**
 * AnimatedInput - Enhanced input component with smooth animations and visual feedback
 * 
 * Features:
 * - Floating label animation
 * - Icon support
 * - Error and hint messages
 * - Focus states with smooth transitions
 * - Number input with increment/decrement buttons
 * - Accessibility support
 */
export const AnimatedInput: React.FC<AnimatedInputProps> = ({
    label,
    value,
    onChange,
    type = 'text',
    placeholder,
    error,
    hint,
    icon,
    iconPosition = 'left',
    disabled = false,
    required = false,
    className = '',
    min,
    max,
    step = 1,
    autoFocus = false,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const hasValue = value !== '' && value !== null && value !== undefined;
    const showFloatingLabel = label && (isFocused || hasValue);

    useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    const handleIncrement = () => {
        if (type === 'number') {
            const numValue = Number(value) || 0;
            const newValue = max !== undefined ? Math.min(numValue + step, max) : numValue + step;
            onChange(String(newValue));
        }
    };

    const handleDecrement = () => {
        if (type === 'number') {
            const numValue = Number(value) || 0;
            const newValue = min !== undefined ? Math.max(numValue - step, min) : numValue - step;
            onChange(String(newValue));
        }
    };

    const baseInputClasses = `
    w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus-ring
    ${icon && iconPosition === 'left' ? 'pl-11' : ''}
    ${icon && iconPosition === 'right' ? 'pr-11' : ''}
    ${type === 'number' ? 'pr-20' : ''}
    ${error
            ? 'border-red-300 focus:border-red-500 bg-red-50/30'
            : 'border-slate-200 focus:border-dlp-brand bg-white hover:border-slate-300'
        }
    ${disabled ? 'opacity-50 cursor-not-allowed bg-slate-50' : ''}
    ${showFloatingLabel ? 'pt-6 pb-2' : ''}
  `;

    return (
        <div className={`relative ${className}`}>
            {/* Floating Label */}
            {label && (
                <label
                    className={`
            absolute left-4 pointer-events-none transition-all duration-300
            ${showFloatingLabel
                            ? 'top-2 text-xs font-semibold text-dlp-brand'
                            : 'top-1/2 -translate-y-1/2 text-base text-slate-500'
                        }
            ${error ? 'text-red-500' : ''}
          `}
                >
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            {/* Input Container */}
            <div className="relative">
                {/* Left Icon */}
                {icon && iconPosition === 'left' && (
                    <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isFocused ? 'text-dlp-brand' : 'text-slate-400'
                        }`}>
                        {icon}
                    </div>
                )}

                {/* Input Field */}
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={showFloatingLabel ? '' : placeholder}
                    disabled={disabled}
                    required={required}
                    min={min}
                    max={max}
                    step={step}
                    className={baseInputClasses}
                    aria-invalid={!!error}
                    aria-describedby={error ? 'input-error' : hint ? 'input-hint' : undefined}
                />

                {/* Right Icon */}
                {icon && iconPosition === 'right' && !type.includes('number') && (
                    <div className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isFocused ? 'text-dlp-brand' : 'text-slate-400'
                        }`}>
                        {icon}
                    </div>
                )}

                {/* Number Input Controls */}
                {type === 'number' && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
                        <button
                            type="button"
                            onClick={handleIncrement}
                            disabled={disabled || (max !== undefined && Number(value) >= max)}
                            className="p-1 rounded hover:bg-slate-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Increment"
                        >
                            <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={handleDecrement}
                            disabled={disabled || (min !== undefined && Number(value) <= min)}
                            className="p-1 rounded hover:bg-slate-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Decrement"
                        >
                            <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            {/* Error Message */}
            {error && (
                <p id="input-error" className="mt-2 text-sm text-red-600 animate-slide-in-left flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                </p>
            )}

            {/* Hint Message */}
            {hint && !error && (
                <p id="input-hint" className="mt-2 text-sm text-slate-500">
                    {hint}
                </p>
            )}
        </div>
    );
};

export default AnimatedInput;
