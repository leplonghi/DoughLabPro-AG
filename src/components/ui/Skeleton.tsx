import React from 'react';

interface SkeletonProps {
    variant?: 'text' | 'title' | 'card' | 'circle' | 'custom';
    width?: string;
    height?: string;
    className?: string;
    count?: number;
}

/**
 * Skeleton - Loading placeholder component with shimmer animation
 * 
 * @param variant - Type of skeleton (text, title, card, circle, custom)
 * @param width - Custom width (for custom variant)
 * @param height - Custom height (for custom variant)
 * @param className - Additional CSS classes
 * @param count - Number of skeleton elements to render (for text/title)
 */
export const Skeleton: React.FC<SkeletonProps> = ({
    variant = 'text',
    width,
    height,
    className = '',
    count = 1,
}) => {
    const getVariantClasses = () => {
        switch (variant) {
            case 'text':
                return 'skeleton skeleton-text';
            case 'title':
                return 'skeleton skeleton-title';
            case 'card':
                return 'skeleton skeleton-card';
            case 'circle':
                return 'skeleton rounded-full';
            case 'custom':
                return 'skeleton';
            default:
                return 'skeleton skeleton-text';
        }
    };

    const style: React.CSSProperties = {};
    if (width) style.width = width;
    if (height) style.height = height;

    const skeletonClasses = `${getVariantClasses()} ${className}`;

    if (count > 1) {
        return (
            <>
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index} className={skeletonClasses} style={style} />
                ))}
            </>
        );
    }

    return <div className={skeletonClasses} style={style} />;
};

/**
 * SkeletonCard - Pre-configured skeleton for card layouts
 */
export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <div className={`dlp-card p-6 ${className}`}>
            <Skeleton variant="title" />
            <Skeleton variant="text" count={3} />
            <div className="mt-4 flex gap-2">
                <Skeleton variant="custom" width="80px" height="32px" />
                <Skeleton variant="custom" width="80px" height="32px" />
            </div>
        </div>
    );
};

/**
 * SkeletonList - Pre-configured skeleton for list layouts
 */
export const SkeletonList: React.FC<{ items?: number; className?: string }> = ({
    items = 3,
    className = '',
}) => {
    return (
        <div className={`space-y-4 ${className}`}>
            {Array.from({ length: items }).map((_, index) => (
                <div key={index} className="flex items-center gap-4">
                    <Skeleton variant="circle" width="48px" height="48px" />
                    <div className="flex-1">
                        <Skeleton variant="title" />
                        <Skeleton variant="text" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skeleton;
