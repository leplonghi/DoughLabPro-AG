import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { DownloadIcon, ShareIcon } from 'lucide-react';
import { DoughConfig, DoughResult } from '@/types';

interface RecipeCardGeneratorProps {
    config: DoughConfig;
    result: DoughResult;
    title: string;
    onClose?: () => void;
}

export const RecipeCardGenerator: React.FC<RecipeCardGeneratorProps> = ({ config, result, title, onClose }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const handleDownload = async () => {
        if (!cardRef.current) return;
        setIsGenerating(true);
        try {
            // Wait for fonts or images if needed, but simple DOM is usually fast
            const canvas = await html2canvas(cardRef.current, {
                scale: 2, // Retina quality
                backgroundColor: '#ffffff',
                useCORS: true,
            });

            const link = document.createElement('a');
            link.download = `DoughLabPro-${title.replace(/\s+/g, '-')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (err) {
            console.error('Failed to generate image', err);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2">
                        <ShareIcon className="w-5 h-5 text-indigo-500" />
                        Share Recipe
                    </h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-900">✕</button>
                </div>

                <div className="overflow-y-auto p-6 flex-1 bg-gray-100/50 flex justify-center">
                    {/* The Canvas Area */}
                    <div
                        ref={cardRef}
                        className="w-[320px] bg-white text-slate-900 shadow-xl overflow-hidden relative"
                        style={{ aspectRatio: '9/16', padding: '24px', display: 'flex', flexDirection: 'column' }} // Instagram Story format roughly
                    >
                        {/* Header */}
                        <div className="mb-6 text-center">
                            <div className="inline-block p-2 rounded-full bg-indigo-50 mb-3">
                                <span className="text-2xl">🍕</span>
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight leading-none mb-1">{title}</h2>
                            <p className="text-indigo-600 font-bold text-sm tracking-wider uppercase">DoughLab Pro</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-slate-50 p-3 rounded-lg text-center border border-slate-100">
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Hydration</p>
                                <p className="text-xl font-bold text-slate-900">{config.hydration}%</p>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-lg text-center border border-slate-100">
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Time</p>
                                <p className="text-xl font-bold text-slate-900">{(config.fermentationTechnique === 'DIRECT' ? 4 : 24)}h</p> {/* Rough estimate fallback */}
                            </div>
                        </div>

                        {/* Ingredients */}
                        <div className="flex-1">
                            <h4 className="font-bold text-sm border-b border-slate-200 pb-2 mb-3">Ingredients</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex justify-between">
                                    <span className="text-slate-600 font-medium">Flour</span>
                                    <span className="font-bold">{result.totalFlour.toFixed(0)}g</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-slate-600 font-medium">Water</span>
                                    <span className="font-bold">{result.totalWater.toFixed(0)}g</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-slate-600 font-medium">Salt</span>
                                    <span className="font-bold">{result.totalSalt.toFixed(1)}g</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-slate-600 font-medium">Yeast ({config.yeastType})</span>
                                    <span className="font-bold">{result.totalYeast.toFixed(1)}g</span>
                                </li>
                                {result.totalOil > 0 && (
                                    <li className="flex justify-between">
                                        <span className="text-slate-600 font-medium">Oil</span>
                                        <span className="font-bold">{result.totalOil.toFixed(1)}g</span>
                                    </li>
                                )}
                                {result.totalSugar > 0 && (
                                    <li className="flex justify-between">
                                        <span className="text-slate-600 font-medium">Sugar</span>
                                        <span className="font-bold">{result.totalSugar.toFixed(1)}g</span>
                                    </li>
                                )}
                            </ul>

                            {/* Method Teaser */}
                            <div className="mt-6 bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                                <p className="text-xs text-indigo-800 text-center font-medium">
                                    Technique: {config.fermentationTechnique.replace('_', ' ')}
                                </p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-8 pt-4 border-t border-slate-200 text-center">
                            <p className="text-xs text-slate-400 font-medium">Baked with</p>
                            <p className="font-black text-slate-800 tracking-tight">DoughLabPro.com</p>
                        </div>

                        {/* Decorative blob */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
                    </div>
                </div>

                <div className="p-4 border-t border-gray-100 bg-white flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 text-slate-600 font-bold hover:bg-slate-50 rounded-xl transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDownload}
                        disabled={isGenerating}
                        className="flex-[2] bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-75 transition-all"
                    >
                        {isGenerating ? 'Generating...' : (
                            <>
                                <DownloadIcon className="w-5 h-5" />
                                Download Image
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};
