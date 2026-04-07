import React from 'react';

interface AnimatedCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    delay?: number;
    variant?: 'default' | 'hover-lift' | 'hover-scale' | 'hover-glow';
    animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'fade-in-scale';
}

/**
 * AnimatedCard - A reusable card component with smooth animations and hover effects
 * 
 * @param children - Content to render inside the card
 * @param className - Additional CSS classes
 * @param onClick - Optional click handler
 * @param delay - Animation delay (0-5 for stagger effects)
 * @param variant - Hover effect variant
 * @param animation - Entry animation type
 */
export const AnimatedCard: React.FC<AnimatedCardProps> = ({
    children,
    className = '',
    onClick,
    delay = 0,
    variant = 'hover-lift',
    animation = 'fade-in-scale',
}) => {
    const baseClasses = 'dlp-card transition-smooth';
    const variantClass = variant !== 'default' ? variant : '';
    const animationClass = `animate-${animation}`;
    const staggerClass = delay > 0 && delay <= 5 ? `stagger-${delay}` : '';
    const interactiveClass = onClick ? 'cursor-pointer interactive' : '';

    const combinedClasses = [
        baseClasses,
        variantClass,
        animationClass,
        staggerClass,
        interactiveClass,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={combinedClasses} onClick={onClick}>
            {children}
        </div>
    );
};

export default AnimatedCard;
