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
                        className="w-[320px] aspect-[4/5] bg-slate-900 text-white p-6 flex flex-col justify-between relative overflow-hidden"
                    >
                        {/* Background Accents - Enhanced */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-lime-500/20 blur-3xl rounded-full -mr-16 -mt-16 mix-blend-screen"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/20 blur-3xl rounded-full -ml-16 -mb-16 mix-blend-screen"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-800/50 rounded-full blur-2xl"></div>

                        {/* Header */}
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="h-6 w-6 rounded bg-lime-500 flex items-center justify-center font-black text-slate-900 text-xs shadow-lg shadow-lime-500/20">DL</div>
                                <span className="font-bold tracking-widest text-[10px] text-slate-400 uppercase">{t('common.share_card.doughlab_title')}</span>
                            </div>
                            <h2 className="text-3xl font-black text-white mt-1 leading-none tracking-tight">
                                {styleName}
                            </h2>
                            <p className="text-sm font-medium text-lime-400 mt-1 uppercase tracking-wide opacity-90">{t('common.share_card.master_formula')}</p>
                        </div>

                        {/* Donut Chart Visualization */}
                        <div className="relative z-10 flex flex-col items-center justify-center my-6">
                            <div className="relative w-40 h-40">
                                {/* Chart */}
                                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 drop-shadow-2xl">
                                    {/* Background Circle */}
                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />

                                    {/* Flour Segment (White) */}
                                    <circle
                                        cx="50" cy="50" r="40"
                                        fill="transparent"
                                        stroke="white"
                                        strokeWidth="12"
                                        strokeDasharray={`${(100 / (100 + config.hydration + config.salt + (config.oil || 0) + (config.sugar || 0) + (config.yeastPercentage || 0))) * 251.2} 251.2`}
                                        className="opacity-90"
                                    />

                                    {/* Water Segment (Lime) - Offset by Flour */}
                                    <circle
                                        cx="50" cy="50" r="40"
                                        fill="transparent"
                                        stroke="#84cc16" // lime-500
                                        strokeWidth="12"
                                        strokeDasharray={`${(config.hydration / (100 + config.hydration + config.salt + (config.oil || 0) + (config.sugar || 0) + (config.yeastPercentage || 0))) * 251.2} 251.2`}
                                        strokeDashoffset={`-${(100 / (100 + config.hydration + config.salt + (config.oil || 0) + (config.sugar || 0) + (config.yeastPercentage || 0))) * 251.2}`}
                                        className="opacity-90"
                                    />
                                </svg>

                                {/* Center Text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <span className="text-3xl font-black text-white tracking-tighter shadow-black drop-shadow-md">{hydration}%</span>
                                    <span className="text-[9px] font-bold text-lime-400 uppercase tracking-widest">Hydration</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="relative z-10 grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center">
                                <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{t('common.share_card.time')}</span>
                                <span className="block text-xl font-bold text-white mt-1">{fermentation}h</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{t('common.salt')}</span>
                                <span className="block text-xl font-bold text-white mt-1">{config.salt}%</span>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="relative z-10 mt-auto pt-4 flex justify-between items-end border-t border-white/10">
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-0.5">{t('common.share_card.created_with')}</p>
                                <p className="font-extrabold text-sm text-lime-400 tracking-wide uppercase">Calculated by DoughLab Pro</p>
                            </div>
                            <div className="flex items-center justify-center bg-white p-1 rounded">
                                {/* Simulated QR Code */}
                                <div className="w-8 h-8 grid grid-cols-4 grid-rows-4 gap-0.5">
                                    <div className="bg-black col-span-2 row-span-2"></div>
                                    <div className="bg-black col-start-4 row-start-1"></div>
                                    <div className="bg-black col-start-3 row-start-2"></div>
                                    <div className="bg-black col-start-1 row-start-4"></div>
                                    <div className="bg-black col-start-2 row-start-3"></div>
                                    <div className="bg-black col-start-4 row-start-4"></div>
                                </div>
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
