
import React from 'react';

interface UpgradeModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    ctaLabel?: string;
    onUpgrade?: () => void;
}

export function UpgradeModal({ isOpen, onClose, title, description, ctaLabel = 'Ver planos Pro', onUpgrade }: UpgradeModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95 duration-300 pointer-events-auto"
                onClick={e => e.stopPropagation()}
            >
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner">
                    ⭐
                </div>
                <h2 className="text-2xl font-bold text-dlp-text-primary mb-3 leading-tight">{title}</h2>
                <p className="text-dlp-text-secondary mb-8 leading-relaxed px-2">
                    {description}
                </p>

                <div className="flex flex-col gap-3">
                    <button
                        className="w-full py-4 bg-dlp-accent hover:bg-dlp-accent-hover text-[#065F46] font-bold rounded-2xl shadow-dlp-md transition-all active:scale-95"
                        onClick={onUpgrade ?? (() => window.location.href = '/plans')}
                    >
                        {ctaLabel}
                    </button>

                    <button
                        className="w-full py-3 bg-transparent hover:bg-dlp-bg-soft text-dlp-text-muted font-medium rounded-xl transition-colors"
                        onClick={onClose}
                    >
                        Continuar gratuitamente
                    </button>
                </div>
            </div>
        </div>
    );
}
