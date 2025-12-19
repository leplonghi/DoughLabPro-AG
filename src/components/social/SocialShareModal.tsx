import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { DoughConfig, DoughResult } from '@/types';
import { CloseIcon, DownloadIcon, ShareIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface SocialShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    config: DoughConfig;
    results: DoughResult;
}

const SocialShareModal: React.FC<SocialShareModalProps> = ({ isOpen, onClose, config, results }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const { t } = useTranslation();

    if (!isOpen) return null;

    const handleDownload = async () => {
        if (!cardRef.current) return;
        setIsGenerating(true);
        try {
            // Wait for fonts/images
            await new Promise(resolve => setTimeout(resolve, 500));

            const canvas = await html2canvas(cardRef.current, {
                scale: 2, // Retina quality
                backgroundColor: '#1e293b', // Ensure dark background
                useCORS: true,
                logging: false,
            });

            const link = document.createElement('a');
            link.download = `doughlab-formula-${new Date().toISOString().slice(0, 10)}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (err) {
            console.error('Failed to generate image', err);
        } finally {
            setIsGenerating(false);
        }
    };

    const hydration = config.hydration;
    const fermentation = config.fermentationTime;
    const styleName = config.recipeStyle.charAt(0).toUpperCase() + config.recipeStyle.slice(1);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-md rounded-2xl bg-dlp-bg-card p-6 shadow-dlp-lg border border-dlp-border">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 text-dlp-text-muted hover:text-dlp-text-secondary"
                >
                    <CloseIcon className="h-6 w-6" />
                </button>

                <h3 className="mb-6 text-xl font-bold text-dlp-text-primary flex items-center gap-2">
                    <ShareIcon className="h-5 w-5 text-dlp-accent" />{t('common.share_your_formula')}</h3>

                {/* The Card to be Captured */}
                <div className="flex justify-center mb-8 overflow-hidden rounded-xl shadow-dlp-md">
                    <div
                        ref={cardRef}
                        id="baker-card"
                        className="w-[320px] aspect-[4/5] bg-gradient-to-br from-[#144225] to-[#1e5c35] text-white p-6 flex flex-col justify-between relative overflow-hidden ring-1 ring-white/10"
                    >
                        {/* Background Accents - Enhanced */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#51a145]/20 blur-3xl rounded-full -mr-20 -mt-20 mix-blend-screen animate-pulse-slow"></div>
                        <div className="absolute bottom-0 left-0 w-56 h-56 bg-lime-500/10 blur-3xl rounded-full -ml-16 -mb-16 mix-blend-screen"></div>

                        {/* Header */}
                        <div className="relative z-10 text-center mt-2">
                            <div className="inline-flex items-center gap-1.5 mb-2 px-2 py-0.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
                                <span className="font-bold tracking-[0.2em] text-[8px] text-lime-300 uppercase">{t('common.share_card.doughlab_title', { defaultValue: 'DoughLab Pro' })}</span>
                            </div>
                            <h2 className="text-3xl font-black text-white leading-none tracking-tight drop-shadow-sm uppercase">
                                {styleName}
                            </h2>
                            <p className="text-[10px] font-bold text-slate-200 mt-1 uppercase tracking-[0.2em] opacity-80">{t('common.share_card.master_formula')}</p>
                        </div>

                        {/* Donut Chart Visualization */}
                        <div className="relative z-10 flex flex-col items-center justify-center my-4">
                            <div className="relative w-36 h-36">
                                {/* Chart */}
                                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 drop-shadow-xl">
                                    {/* Background Circle */}
                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />

                                    {/* Flour Segment (White) */}
                                    <circle
                                        cx="50" cy="50" r="40"
                                        fill="transparent"
                                        stroke="white"
                                        strokeWidth="8"
                                        strokeDasharray={`${(100 / (100 + config.hydration + config.salt + (config.oil || 0) + (config.sugar || 0) + (config.yeastPercentage || 0))) * 251.2} 251.2`}
                                        className="opacity-90"
                                    />

                                    {/* Water Segment (Lime) */}
                                    <circle
                                        cx="50" cy="50" r="40"
                                        fill="transparent"
                                        stroke="#a3e635"
                                        strokeWidth="8"
                                        strokeDasharray={`${(config.hydration / (100 + config.hydration + config.salt + (config.oil || 0) + (config.sugar || 0) + (config.yeastPercentage || 0))) * 251.2} 251.2`}
                                        strokeDashoffset={`-${(100 / (100 + config.hydration + config.salt + (config.oil || 0) + (config.sugar || 0) + (config.yeastPercentage || 0))) * 251.2}`}
                                        className="opacity-90"
                                    />
                                </svg>

                                {/* Center Text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <span className="text-3xl font-black text-white tracking-tighter drop-shadow-md">{hydration}%</span>
                                    <span className="text-[8px] font-bold text-lime-300 uppercase tracking-widest">Hydration</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="relative z-10 grid grid-cols-2 gap-3 mb-4 bg-white/5 rounded-xl p-3 border border-white/5 backdrop-blur-sm">
                            <div className="text-center p-1 border-r border-white/10">
                                <span className="block text-[8px] text-lime-200/70 uppercase tracking-widest font-bold mb-0.5">{t('common.share_card.time')}</span>
                                <span className="block text-lg font-bold text-white">{fermentation}h</span>
                            </div>
                            <div className="text-center p-1">
                                <span className="block text-[8px] text-lime-200/70 uppercase tracking-widest font-bold mb-0.5">{t('common.salt')}</span>
                                <span className="block text-lg font-bold text-white">{config.salt}%</span>
                            </div>
                            <div className="text-center p-1 border-r border-t border-white/10 pt-2">
                                <span className="block text-[8px] text-lime-200/70 uppercase tracking-widest font-bold mb-0.5">{t('results.yield', { defaultValue: 'Yield' })}</span>
                                <span className="block text-lg font-bold text-white">{config.bakeType === 'PIZZAS' ? `${config.numPizzas}x` : `${config.numPizzas} Pcs`}</span>
                            </div>
                            <div className="text-center p-1 border-t border-white/10 pt-2">
                                <span className="block text-[8px] text-lime-200/70 uppercase tracking-widest font-bold mb-0.5">{t('results.total_mass', { defaultValue: 'Mass' })}</span>
                                <span className="block text-lg font-bold text-white">{Number(results.totalDough || 0).toFixed(0)}g</span>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="relative z-10 mt-auto pt-3 flex justify-between items-center border-t border-white/10">
                            <div>
                                <p className="text-[8px] text-slate-300 uppercase tracking-widest font-semibold mb-0.5 opacity-70">{t('common.share_card.created_with')}</p>
                                <p className="font-bold text-xs text-white tracking-wider uppercase">DOUGHLAB PRO</p>
                            </div>
                            <div className="bg-white/10 p-1.5 rounded-lg backdrop-blur-md">
                                <img src="/app-logo.png" alt="DoughLab" className="h-6 w-auto invert brightness-0" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={handleDownload}
                        disabled={isGenerating}
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-dlp-text-primary py-3 text-sm font-bold text-dlp-bg-card shadow-dlp-lg transition-transform active:scale-95 disabled:opacity-50 hover:bg-dlp-text-secondary"
                    >
                        {isGenerating ? (
                            <span>{t('ui.generating')}</span>
                        ) : (
                            <>
                                <DownloadIcon className="h-5 w-5" />{t('common.download_image')}</>
                        )}
                    </button>
                </div>
                <p className="mt-4 text-center text-xs text-dlp-text-muted">
                    Perfect for Instagram Stories or sharing with friends.
                </p>
            </div>
        </div >
    );
};

export default SocialShareModal;


