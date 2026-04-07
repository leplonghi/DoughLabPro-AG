
import { useState, useEffect, useCallback } from 'react';
import Decimal from 'decimal.js';

interface UseDoughInputProps {
    value: Decimal | number;
    onChange: (value: Decimal) => void;
    min?: number;
    max?: number;
    precision?: number;
}

export function useDoughInput({ value, onChange, min, max, precision = 1 }: UseDoughInputProps) {
    // Local state to handle string input (e.g. "70.") before it becomes a valid number
    const [inputValue, setInputValue] = useState<string>(value.toString());
    const [error, setError] = useState<string | null>(null);
    const [isFocused, setIsFocused] = useState(false);

    // Sync with external value changes (unless focused, to prevent fighting)
    useEffect(() => {
        if (!isFocused) {
            const d = new Decimal(value);
            setInputValue(d.toFixed(precision)); // Normalize display? Or just string?
            // Maybe just value.toString() if precision not strict
        }
    }, [value, isFocused, precision]);

    const handleChange = useCallback((raw: string) => {
        // Sanitize: commas to dots
        let sanitized = raw.replace(/,/g, '.');

        // Prevent multiple dots
        if ((sanitized.match(/\./g) || []).length > 1) {
            return; // Ignore invalid char
        }

        // Allow empty string
        if (sanitized === '') {
            setInputValue('');
            return;
        }

        setInputValue(sanitized);

        // Parse
        const parsed = parseFloat(sanitized);

        if (isNaN(parsed)) {
            // setError('Invalid number');
            return;
        }

        // specific check for trailing dot to avoid parsing "70." as 70 immediately if needed?
        // Actually new Decimal("70.") is 70.

        try {
            const decimalVal = new Decimal(sanitized);

            // Validation
            if (min !== undefined && decimalVal.lessThan(min)) {
                // setError(`Min: ${min}`);
            } else if (max !== undefined && decimalVal.greaterThan(max)) {
                // setError(`Max: ${max}`);
            } else {
                setError(null);
                // Propagate change
                onChange(decimalVal);
            }
        } catch (e) {
            // ignore
        }

    }, [onChange, min, max]);

    const handleBlur = useCallback(() => {
        setIsFocused(false);
        // On blur, re-format to clean string
        try {
            if (inputValue === '') {
                // Reset to current prop value
                setInputValue(new Decimal(value).toFixed(precision));
            } else {
                // Format current input
                const d = new Decimal(inputValue);
                setInputValue(d.toFixed(precision));
            }
        } catch {
            setInputValue(new Decimal(value).toFixed(precision));
        }
    }, [inputValue, value, precision]);

    const handleFocus = useCallback(() => {
        setIsFocused(true);
        // Select all logic can go here if passed ref
    }, []);

    return {
        value: inputValue,
        error,
        onChange: handleChange, // binds to input's onChangeText or onChange
        onBlur: handleBlur,
        onFocus: handleFocus,
    };
}
