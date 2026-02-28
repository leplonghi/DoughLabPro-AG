
import { useTranslation } from '@/i18n';
import React, { useState, Fragment } from 'react';
import { Info, HelpCircle } from 'lucide-react';
import { Popover, Transition } from '@headlessui/react';

interface InfoTooltipProps {
    content: string | React.ReactNode;
    children?: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'tutorial' | 'warning' | 'success';
    showIcon?: boolean;
    alwaysVisible?: boolean;
}

/**
 * InfoTooltip Component
 * 
 * Refactored to use Headless UI Popover with anchor support.
 * This ensures the tooltip is portaled and not clipped by overflow:hidden containers.
 */
export const InfoTooltip: React.FC<InfoTooltipProps> = ({
    content,
    children,
    position = 'top',
    size = 'md',
    variant = 'default',
    showIcon = true,
    alwaysVisible = false
}) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(alwaysVisible);

    const sizeClasses = {
        sm: 'w-48 text-[10px] p-2',
        md: 'w-64 text-xs p-3',
        lg: 'w-80 text-sm p-4'
    };

    const variantClasses = {
        default: 'bg-white text-slate-600 border-slate-100',
        tutorial: 'bg-white text-slate-700 border-emerald-200 shadow-xl shadow-emerald-500/10',
        warning: 'bg-amber-50 text-amber-900 border-amber-200',
        success: 'bg-emerald-50 text-emerald-900 border-emerald-200'
    };

    const iconComponent = variant === 'tutorial' ? (
        <HelpCircle className="h-4 w-4 text-[#51a145] cursor-help hover:text-[#1B4332] transition-all hover:scale-110 animate-pulse" />
    ) : (
        <Info className="h-4 w-4 text-slate-400 cursor-help hover:text-[#51a145] transition-all hover:scale-110" />
    );

    // Map internal position to Headless UI anchor
    const anchorMap: Record<string, string> = {
        top: 'top',
        bottom: 'bottom',
        left: 'left',
        right: 'right'
    };

    const arrowPositionClasses: Record<string, string> = {
        top: '-bottom-1.5 left-1/2 -translate-x-1/2 rotate-45 border-r border-b',
        bottom: '-top-1.5 left-1/2 -translate-x-1/2 rotate-45 border-l border-t',
        left: '-right-1.5 top-1/2 -translate-y-1/2 rotate-45 border-r border-t',
        right: '-left-1.5 top-1/2 -translate-y-1/2 rotate-45 border-l border-b'
    };

    return (
        <Popover className="relative inline-flex items-center">
            <div
                onMouseEnter={() => !alwaysVisible && setIsOpen(true)}
                onMouseLeave={() => !alwaysVisible && setIsOpen(false)}
                onClick={(e) => {
                    if (window.innerWidth < 768) {
                        e.stopPropagation();
                        setIsOpen(!isOpen);
                    }
                }}
            >
                <Popover.Button as="div" className="outline-none ring-0 cursor-help">
                    {children || (showIcon && iconComponent)}
                </Popover.Button>

                <Transition
                    show={isOpen}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        static
                        anchor={anchorMap[position] as any}
                        className="z-[300] pointer-events-none"
                    >
                        <div className={`
                            ${sizeClasses[size]} ${variantClasses[variant]}
                            bg-white rounded-2xl border shadow-2xl m-2
                            backdrop-blur-md relative
                            ${variant === 'tutorial' ? 'ring-2 ring-emerald-400/10' : ''}
                        `}>
                            {/* Tutorial badge */}
                            {variant === 'tutorial' && (
                                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-emerald-50">
                                    <HelpCircle className="h-3.5 w-3.5 text-emerald-500" />
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-600">{t('learn:pro_tip')}</span>
                                </div>
                            )}

                            <div className="leading-relaxed">
                                {typeof content === 'string' ? (
                                    <p dangerouslySetInnerHTML={{ __html: content }} />
                                ) : (
                                    content
                                )}
                            </div>

                            {/* Arrow */}
                            <div className={`
                                absolute ${arrowPositionClasses[position]} w-3 h-3
                                bg-white
                                border-slate-200
                            `} />
                        </div>
                    </Popover.Panel>
                </Transition>
            </div>
        </Popover>
    );
};
