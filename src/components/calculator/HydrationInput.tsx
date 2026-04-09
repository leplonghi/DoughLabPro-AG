import React from 'react';
import SliderInput from '@/components/ui/SliderInput';

interface HydrationInputProps {
    label?: React.ReactNode;
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
    learnArticle?: { id: string; title: string; category: string };
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
    const quickValues = recommendedMin !== undefined && recommendedMax !== undefined
        ? [
            { label: `${recommendedMin}%`, value: recommendedMin },
            { label: `${Math.round((recommendedMin + recommendedMax) / 2)}%`, value: Math.round((recommendedMin + recommendedMax) / 2) },
            { label: `${recommendedMax}%`, value: recommendedMax },
        ]
        : [55, 60, 65, 70, 75];

    return (
        <SliderInput
            label={label || 'Hydration'}
            name="hydration"
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            step={step}
            unit="%"
            tooltip={tooltip}
            hasError={hasError}
            isProFeature={isProFeature}
            recommendedMin={recommendedMin}
            recommendedMax={recommendedMax}
            disabled={disabled}
            learnArticle={learnArticle}
            totalFlour={totalFlour}
            quickValues={quickValues}
        />
    );
};
