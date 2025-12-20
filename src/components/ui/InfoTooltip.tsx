import React, { useState, useRef, useEffect } from 'react';
import { Info, HelpCircle } from 'lucide-react';

interface InfoTooltipProps {
    content: string | React.ReactNode;
    children?: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'tutorial' | 'warning' | 'success';
    showIcon?: boolean;
    alwaysVisible?: boolean;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
    content,
    children,
    position = 'top',
    size = 'md',
    variant = 'default',
    showIcon = true,
    alwaysVisible = false
}) => {
    const [isVisible, setIsVisible] = useState(alwaysVisible);
    const [isMobile, setIsMobile] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = () => {
        if (!isMobile && !alwaysVisible) {
            timeoutRef.current = setTimeout(() => setIsVisible(true), 200);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile && !alwaysVisible) {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setIsVisible(false);
        }
    };

    const handleClick = (e: React.MouseEvent) => {
        if (isMobile || alwaysVisible) {
            e.stopPropagation();
            setIsVisible(!isVisible);
        }
    };

    const sizeClasses = {
        sm: 'w-48 text-[10px] p-2',
        md: 'w-64 text-xs p-3',
        lg: 'w-80 text-sm p-4'
    };

    const variantClasses = {
        default: 'bg-[#1B4332] text-white border-[#1B4332]/20',
        tutorial: 'bg-gradient-to-br from-[#51a145] to-[#1B4332] text-white border-emerald-400/30 shadow-lg shadow-emerald-900/20',
        warning: 'bg-amber-50 text-amber-900 border-amber-200',
        success: 'bg-emerald-50 text-emerald-900 border-emerald-200'
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
        <HelpCircle className="h-4 w-4 text-[#51a145] cursor-help hover:text-[#1B4332] transition-all hover:scale-110 animate-pulse" />
    ) : (
        <Info className="h-4 w-4 text-slate-400 cursor-help hover:text-[#51a145] transition-all hover:scale-110" />
    );

    return (
        <div
            className="relative inline-flex items-center group/tooltip"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {children || (showIcon && iconComponent)}

            {isVisible && (
                <>
                    {/* Backdrop for mobile */}
                    {isMobile && (
                        <div
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] animate-in fade-in duration-200"
                            onClick={() => setIsVisible(false)}
                        />
                    )}

                    <div className={`
                        absolute ${positionClasses[position]} z-[70]
                        ${isMobile ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-sm' : ''}
                    `}>
                        <div className={`
                            ${sizeClasses[size]} ${variantClasses[variant]}
                            backdrop-blur-md rounded-2xl border shadow-2xl
                            animate-in fade-in zoom-in-95 duration-300
                            ${variant === 'tutorial' ? 'ring-2 ring-emerald-400/30' : ''}
                        `}>
                            {/* Tutorial badge */}
                            {variant === 'tutorial' && (
                                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/20">
                                    <HelpCircle className="h-3.5 w-3.5 text-emerald-200" />
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-100">Tutorial</span>
                                </div>
                            )}

                            <div className="leading-relaxed">
                                {typeof content === 'string' ? (
                                    <p dangerouslySetInnerHTML={{ __html: content }} />
                                ) : (
                                    content
                                )}
                            </div>

                            {/* Close hint for mobile */}
                            {isMobile && (
                                <div className="mt-3 pt-3 border-t border-current/10 text-center">
                                    <span className="text-[9px] opacity-60 uppercase tracking-wider">Toque para fechar</span>
                                </div>
                            )}

                            {/* Arrow */}
                            {!isMobile && (
                                <div className={`
                                    absolute ${arrowClasses[position]} w-3 h-3
                                    ${variantClasses[variant].split(' ')[0]} 
                                    border-r border-b ${variantClasses[variant].split('border-')[1]}
                                `} />
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
