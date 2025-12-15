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

                        {/* Big Stats */}
                        <div className="relative z-10 grid grid-cols-2 gap-4 my-8">
                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-xl">
                                <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{t('common.share_card.hydration')}</span>
                                <span className="block text-4xl font-black text-white mt-1">{hydration}%</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-xl">
                                <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{t('common.share_card.time')}</span>
                                <span className="block text-4xl font-black text-white mt-1">{fermentation}h</span>
                            </div>
                        </div>

                        {/* Formula List */}
                        <div className="relative z-10 space-y-3 text-sm border-t border-white/10 pt-6">
                            <div className="flex justify-between items-center group">
                                <span className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">{t('common.flour')}</span>
                                <span className="font-mono font-bold text-white">100%</span>
                            </div>
                            <div className="flex justify-between items-center group">
                                <span className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">{t('common.water')}</span>
                                <span className="font-mono font-bold text-lime-400">{config.hydration}%</span>
                            </div>
                            <div className="flex justify-between items-center group">
                                <span className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">{t('common.salt')}</span>
                                <span className="font-mono font-bold text-white">{config.salt}%</span>
                            </div>
                            {config.yeastPercentage > 0 && (
                                <div className="flex justify-between items-center group">
                                    <span className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">{t('common.share_card.fermentation')} (Yeast)</span>
                                    <span className="font-mono font-bold text-white">{config.yeastPercentage}%</span>
                                </div>
                            )}
                            {config.prefermentPercentage > 0 && (
                                <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5 border-dashed">
                                    <span className="text-amber-400 font-medium">{t('general.preferment')}</span>
                                    <span className="font-mono font-bold text-amber-400">{config.prefermentPercentage}%</span>
                                </div>
                            )}
                        </div>



                        {/* Assembly Increments Section */}
                        {config.assemblyIncrements && config.assemblyIncrements.length > 0 && (
                            <div className="relative z-10 border-t border-white/10 mt-3 pt-3">
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">Toppings</p>
                                <p className="text-sm font-medium text-white leading-tight">
                                    {config.assemblyIncrements.map(i => i.visibleName).slice(0, 3).join(', ')}
                                    {config.assemblyIncrements.length > 3 && '...'}
                                </p>
                            </div>
                        )}

                        {/* Footer */}
                        <div className="relative z-10 mt-auto pt-8 flex justify-between items-end">
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-0.5">{t('common.share_card.created_with')}</p>
                                <p className="font-bold text-sm text-white tracking-wide">DoughLab Pro</p>
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
