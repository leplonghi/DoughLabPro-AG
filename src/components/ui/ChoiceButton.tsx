import React from 'react';
import { useTranslation } from '@/i18n';

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
  const { t } = useTranslation();
    return (
        <button
            type="button"
            className={`flex w-full flex-col items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-all duration-200 ${active
                ? 'bg-dlp-accent text-white shadow-dlp-md ring-2 ring-dlp-accent ring-offset-1'
                : 'bg-dlp-bg-muted text-dlp-text-secondary hover:bg-dlp-border-strong'
                } ${className}`}
            {...props}
        >
            <span>{label}</span>
            {subLabel && (
                <span className={`mt-0.5 text-xs font-normal ${active ? 'text-white/90' : 'text-dlp-text-muted'}`}>
                    {subLabel}
                </span>
            )}
        </button>
    );
};

export default ChoiceButton;
