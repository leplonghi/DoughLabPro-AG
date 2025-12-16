import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface InfoTooltipProps {
    content: string;
    children?: React.ReactNode;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({ content, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative inline-flex items-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onClick={() => setIsVisible(!isVisible)}
        >
            {children || <Info className="h-4 w-4 text-dlp-text-muted cursor-help hover:text-dlp-accent transition-colors" />}

            {isVisible && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 z-50">
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-3 rounded-xl border border-dlp-border shadow-xl text-xs text-dlp-text-primary animate-in fade-in zoom-in-95 duration-200">
                        {content}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/90 dark:bg-slate-800/90 rotate-45 border-b border-r border-dlp-border"></div>
                    </div>
                </div>
            )}
        </div>
    );
};
