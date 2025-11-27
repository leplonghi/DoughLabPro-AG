import React from 'react';

interface ChoiceButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active: boolean;
    label: string;
    subLabel?: string;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({
    active,
    label,
    subLabel,
    className = '',
    ...props
}) => {
    return (
        <button
            type="button"
            className={`flex w-full flex-col items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-all duration-200 ${active
                    ? 'bg-lime-500 text-white shadow-md ring-2 ring-lime-500 ring-offset-1'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                } ${className}`}
            {...props}
        >
            <span>{label}</span>
            {subLabel && (
                <span className={`mt-0.5 text-xs font-normal ${active ? 'text-lime-100' : 'text-slate-500'}`}>
                    {subLabel}
                </span>
            )}
        </button>
    );
};

export default ChoiceButton;
