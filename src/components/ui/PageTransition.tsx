import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
    children: React.ReactNode;
    pageKey: string;
    animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';
    duration?: number;
}

/**
 * PageTransition - Smooth page transition wrapper component
 * 
 * Provides smooth animations when navigating between pages
 * 
 * @param children - Page content to render
 * @param pageKey - Unique key for the current page (triggers animation on change)
 * @param animation - Type of transition animation
 * @param duration - Animation duration in milliseconds
 */
export const PageTransition: React.FC<PageTransitionProps> = ({
    children,
    pageKey,
    animation = 'fade',
    duration = 300,
}) => {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (children !== displayChildren) {
            setIsTransitioning(true);

            const timer = setTimeout(() => {
                setDisplayChildren(children);
                setIsTransitioning(false);
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [children, displayChildren, duration]);

    const getAnimationClass = () => {
        if (isTransitioning) {
            switch (animation) {
                case 'fade':
                    return 'opacity-0';
                case 'slide-up':
                    return 'opacity-0 translate-y-4';
                case 'slide-left':
                    return 'opacity-0 -translate-x-4';
                case 'slide-right':
                    return 'opacity-0 translate-x-4';
                case 'scale':
                    return 'opacity-0 scale-95';
                default:
                    return 'opacity-0';
            }
        }
        return 'opacity-100 translate-y-0 translate-x-0 scale-100';
    };

    return (
        <div
            key={pageKey}
            className={`transition-all ${getAnimationClass()}`}
            style={{ transitionDuration: `${duration}ms` }}
        >
            {displayChildren}
        </div>
    );
};

/**
 * FadeTransition - Quick fade transition wrapper
 */
export const FadeTransition: React.FC<{ children: React.ReactNode; pageKey: string }> = ({
    children,
    pageKey,
}) => {
    return (
        <PageTransition pageKey={pageKey} animation="fade" duration={200}>
            {children}
        </PageTransition>
    );
};

/**
 * SlideTransition - Slide up transition wrapper
 */
export const SlideTransition: React.FC<{ children: React.ReactNode; pageKey: string }> = ({
    children,
    pageKey,
}) => {
    return (
        <PageTransition pageKey={pageKey} animation="slide-up" duration={300}>
            {children}
        </PageTransition>
    );
};

export default PageTransition;
