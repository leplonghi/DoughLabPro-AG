import React, { useState, useEffect } from 'react';
import { InfoTooltip } from './InfoTooltip';
import { X, HelpCircle } from 'lucide-react';

interface FloatingHelpButtonProps {
    tips: {
        id: string;
        title: string;
        content: string | React.ReactNode;
        icon?: string;
    }[];
}

export const FloatingHelpButton: React.FC<FloatingHelpButtonProps> = ({ tips }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTip, setCurrentTip] = useState(0);
    const [hasSeenTips, setHasSeenTips] = useState(false);

    useEffect(() => {
        const seen = localStorage.getItem('dlp_has_seen_floating_tips');
        if (!seen) {
            // Show after 3 seconds for first-time users
            const timer = setTimeout(() => setIsOpen(true), 3000);
            return () => clearTimeout(timer);
        }
        setHasSeenTips(true);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        if (!hasSeenTips) {
            localStorage.setItem('dlp_has_seen_floating_tips', 'true');
            setHasSeenTips(true);
        }
    };

    const nextTip = () => {
        setCurrentTip((prev) => (prev + 1) % tips.length);
    };

    const prevTip = () => {
        setCurrentTip((prev) => (prev - 1 + tips.length) % tips.length);
    };

    const tip = tips[currentTip];

    return (
        <>
            {/* Floating Help Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-[#51a145] to-[#1B4332] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-bounce hover:animate-none"
                aria-label="Ajuda"
            >
                <HelpCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                {!hasSeenTips && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
                )}
            </button>

            {/* Tips Panel */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#51a145] to-[#1B4332] text-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <HelpCircle className="h-5 w-5" />
                            <h3 className="font-bold text-sm">Dicas Rápidas</h3>
                        </div>
                        <button
                            onClick={handleClose}
                            className="hover:bg-white/20 rounded-full p-1 transition-colors"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                {tip.icon && <span className="text-2xl">{tip.icon}</span>}
                                <h4 className="font-bold text-slate-800">{tip.title}</h4>
                            </div>
                            <div className="text-sm text-slate-600 leading-relaxed">
                                {typeof tip.content === 'string' ? (
                                    <p dangerouslySetInnerHTML={{ __html: tip.content }} />
                                ) : (
                                    tip.content
                                )}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                            <button
                                onClick={prevTip}
                                className="text-xs font-bold text-[#51a145] hover:text-[#1B4332] transition-colors"
                            >
                                ← Anterior
                            </button>
                            <div className="flex gap-1">
                                {tips.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentTip(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentTip
                                                ? 'bg-[#51a145] w-6'
                                                : 'bg-slate-200 hover:bg-slate-300'
                                            }`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={nextTip}
                                className="text-xs font-bold text-[#51a145] hover:text-[#1B4332] transition-colors"
                            >
                                Próxima →
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
