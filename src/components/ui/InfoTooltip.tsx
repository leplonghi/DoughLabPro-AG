import React, { useEffect, useId, useRef, useState } from 'react';
import { HelpCircle, Info, X } from 'lucide-react';

interface InfoTooltipProps {
    content: string | React.ReactNode;
    children?: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'tutorial' | 'warning' | 'success';
    showIcon?: boolean;
    alwaysVisible?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    ariaLabel?: string;
    stopPropagation?: boolean;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
    content,
    children,
    position = 'top',
    size = 'md',
    variant = 'default',
    showIcon = true,
    alwaysVisible = false,
    open,
    onOpenChange,
    ariaLabel = 'Open help',
    stopPropagation = false,
}) => {
    const [internalOpen, setInternalOpen] = useState(alwaysVisible);
    const [isMobile, setIsMobile] = useState(false);
    const rootRef = useRef<HTMLDivElement | null>(null);
    const panelId = useId();
    const isControlled = typeof open === 'boolean';
    const isOpen = isControlled ? open : internalOpen;

    const setIsOpen = (nextOpen: boolean) => {
        if (!isControlled) {
            setInternalOpen(nextOpen);
        }
        onOpenChange?.(nextOpen);
    };

    useEffect(() => {
        if (typeof window === 'undefined') return undefined;

        const syncMobile = () => setIsMobile(window.innerWidth < 768);
        syncMobile();
        window.addEventListener('resize', syncMobile);
        return () => window.removeEventListener('resize', syncMobile);
    }, []);

    useEffect(() => {
        if (!isOpen) return undefined;

        const handlePointerDown = (event: MouseEvent | TouchEvent) => {
            const target = event.target as Node | null;
            if (!rootRef.current || !target || rootRef.current.contains(target)) return;
            setIsOpen(false);
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('touchstart', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('touchstart', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const handleToggle = (event: React.MouseEvent | React.KeyboardEvent) => {
        if (stopPropagation) {
            event.stopPropagation();
        }
        setIsOpen(!isOpen);
    };

    const handleWrapperClick = (event: React.MouseEvent) => {
        if (stopPropagation) {
            event.stopPropagation();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleToggle(event);
        }
    };

    const sizeClasses = {
        sm: 'w-52 text-[11px] p-3',
        md: 'w-72 text-xs p-3.5',
        lg: 'w-80 text-sm p-4'
    };

    const variantClasses = {
        default: 'bg-white text-slate-700 border-slate-200 shadow-xl',
        tutorial: 'bg-[linear-gradient(160deg,_#f3fbf2_0%,_#ffffff_100%)] text-slate-700 border-emerald-200 shadow-[0_24px_50px_-30px_rgba(47,139,73,0.45)]',
        warning: 'bg-amber-50 text-amber-900 border-amber-200 shadow-xl',
        success: 'bg-emerald-50 text-emerald-900 border-emerald-200 shadow-xl'
    };

    const positionClasses = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-3',
        left: 'right-full top-1/2 -translate-y-1/2 mr-3',
        right: 'left-full top-1/2 -translate-y-1/2 ml-3'
    };

    const arrowClasses = {
        top: '-bottom-1.5 left-1/2 -translate-x-1/2 rotate-45',
        bottom: '-top-1.5 left-1/2 -translate-x-1/2 rotate-45',
        left: '-right-1.5 top-1/2 -translate-y-1/2 rotate-45',
        right: '-left-1.5 top-1/2 -translate-y-1/2 rotate-45'
    };

    const iconComponent = variant === 'tutorial' ? (
        <HelpCircle className="h-4 w-4 text-emerald-700 transition-colors" />
    ) : (
        <Info className="h-4 w-4 text-slate-500 transition-colors" />
    );

    return (
        <div
            ref={rootRef}
            className="relative inline-flex items-center"
            onClick={handleWrapperClick}
        >
            <span
                role="button"
                tabIndex={0}
                aria-label={ariaLabel}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="inline-flex cursor-pointer items-center"
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
            >
                {children || (showIcon ? iconComponent : null)}
            </span>

            {isOpen ? (
                <div
                    id={panelId}
                    role="dialog"
                    aria-modal="false"
                    className={[
                        'absolute z-[70]',
                        isMobile
                            ? 'left-1/2 top-full mt-3 w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2'
                            : positionClasses[position],
                    ].join(' ')}
                >
                    <div
                        className={[
                            'relative rounded-2xl border backdrop-blur-md',
                            sizeClasses[size],
                            variantClasses[variant],
                        ].join(' ')}
                        onClick={(event) => {
                            if (stopPropagation) {
                                event.stopPropagation();
                            }
                        }}
                    >
                        {variant === 'tutorial' ? (
                            <div className="mb-2 flex items-center gap-2 border-b border-emerald-100 pb-2">
                                <HelpCircle className="h-3.5 w-3.5 text-emerald-600" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                                    Guidance
                                </span>
                            </div>
                        ) : null}

                        <div className="pr-6 leading-relaxed">
                            {typeof content === 'string' ? (
                                <p dangerouslySetInnerHTML={{ __html: content }} />
                            ) : (
                                content
                            )}
                        </div>

                        <button
                            type="button"
                            onClick={(event) => {
                                if (stopPropagation) {
                                    event.stopPropagation();
                                }
                                setIsOpen(false);
                            }}
                            className="absolute right-2 top-2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
                            aria-label="Close help"
                        >
                            <X className="h-3.5 w-3.5" />
                        </button>

                        {!isMobile ? (
                            <div
                                className={[
                                    'absolute h-3 w-3 border-r border-b bg-white',
                                    arrowClasses[position],
                                    variant === 'tutorial'
                                        ? 'border-emerald-200 bg-[#f8fcf7]'
                                        : variant === 'warning'
                                            ? 'border-amber-200 bg-amber-50'
                                            : variant === 'success'
                                                ? 'border-emerald-200 bg-emerald-50'
                                                : 'border-slate-200 bg-white',
                                ].join(' ')}
                                aria-hidden="true"
                            />
                        ) : null}
                    </div>
                </div>
            ) : null}
        </div>
    );
};
