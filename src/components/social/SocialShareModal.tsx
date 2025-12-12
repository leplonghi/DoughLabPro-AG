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
                        {/* Background Accents - Keeping these specific for the share card aesthetic */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/20 blur-3xl rounded-full -mr-10 -mt-10"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/20 blur-3xl rounded-full -ml-10 -mb-10"></div>

                        {/* Header */}
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="h-6 w-6 rounded bg-lime-500 flex items-center justify-center font-bold text-slate-900 text-xs">DL</div>
                                <span className="font-bold tracking-wider text-sm text-slate-300">{t('general.doughlab_pro')}</span>
                            </div>
                            <h2 className="text-2xl font-black text-white mt-2 leading-tight">
                                {styleName} <br />{t('common.master_formula')}</h2>
                        </div>

                        {/* Big Stats */}
                        <div className="relative z-10 grid grid-cols-2 gap-4 my-6">
                            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/10">
                                <span className="block text-xs text-slate-400 uppercase tracking-wider">{t('form.hydration')}</span>
                                <span className="block text-3xl font-bold text-lime-400">{hydration}%</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/10">
                                <span className="block text-xs text-slate-400 uppercase tracking-wider">{t('general.time')}</span>
                                <span className="block text-3xl font-bold text-sky-400">{fermentation}h</span>
                            </div>
                        </div>

                        {/* Formula List */}
                        <div className="relative z-10 space-y-2 text-sm border-t border-white/10 pt-4">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-300">{t('results.flour')}</span>
                                <span className="font-mono font-bold">100%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-300">{t('results.water')}</span>
                                <span className="font-mono font-bold text-lime-300">{config.hydration}%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-300">{t('results.salt')}</span>
                                <span className="font-mono font-bold">{config.salt}%</span>
                            </div>
                            {config.yeastPercentage > 0 && (
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-300">{t('results.yeast')}</span>
                                    <span className="font-mono font-bold">{config.yeastPercentage}%</span>
                                </div>
                            )}
                            {config.prefermentPercentage > 0 && (
                                <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/10">
                                    <span className="text-amber-400">{t('general.preferment')}</span>
                                    <span className="font-mono font-bold text-amber-400">{config.prefermentPercentage}%</span>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="relative z-10 mt-auto pt-6 flex justify-between items-end">
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{t('general.created_by')}</p>
                                <p className="font-bold text-sm">{t('general.doughlab_pro_2')}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-slate-500">{new Date().toLocaleDateString()}</p>
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
        </div>
    );
};

export default SocialShareModal;
