import React from 'react';

interface AnimatedButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

/**
 * AnimatedButton - A dynamic button component with smooth animations and multiple variants
 * 
 * Features:
 * - Multiple visual variants (primary, secondary, outline, ghost, danger)
 * - Size options (sm, md, lg)
 * - Loading state with spinner
 * - Icon support with positioning
 * - Smooth hover and press animations
 * - Full accessibility support
 */
export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    loading = false,
    icon,
    iconPosition = 'left',
    className = '',
    type = 'button',
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-smooth btn-press focus-ring';

    const variantClasses = {
        primary: 'bg-gradient-to-br from-[#51a145] to-[#36782c] text-white hover:brightness-110 hover:shadow-lg hover:shadow-emerald-500/30 shadow-md shadow-emerald-900/10',
        secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:shadow-md',
        outline: 'border-2 border-dlp-brand text-dlp-brand hover:bg-dlp-brand hover:text-white hover:shadow-md',
        ghost: 'text-dlp-brand hover:bg-dlp-brand/10 hover:shadow-sm',
        danger: 'bg-red-500 text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30',
    };

    const sizeClasses = {
        sm: 'text-sm px-3 py-1.5 gap-1.5',
        md: 'text-base px-4 py-2.5 gap-2',
        lg: 'text-lg px-6 py-3 gap-2.5',
    };

    const widthClass = fullWidth ? 'w-full' : '';
    const disabledClass = disabled || loading ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

    const combinedClasses = [
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        widthClass,
        disabledClass,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const LoadingSpinner = () => (
        <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
        </svg>
    );

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={combinedClasses}
            aria-busy={loading}
        >
            {loading && <LoadingSpinner />}
            {!loading && icon && iconPosition === 'left' && icon}
            {children}
            {!loading && icon && iconPosition === 'right' && icon}
        </button>
    );
};

export default AnimatedButton;
