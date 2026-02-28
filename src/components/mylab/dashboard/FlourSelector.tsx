
import React from 'react';
import { useTranslation } from '@/i18n';
import { commercialFlours } from '@/data/commercialFlours';
import { BeakerIcon, ScaleIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface FlourSelectorProps {
    onSelect: (flourId: string) => void;
    selectedId?: string;
}

export const FlourSelector: React.FC<FlourSelectorProps> = ({ onSelect, selectedId }) => {
    const { t } = useTranslation();

    return (
        <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <BeakerIcon className="w-5 h-5 text-dlp-brand" />
                {t('flour.commercial_selector')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {commercialFlours.map((flour) => (
                    <button
                        key={flour.id}
                        onClick={() => onSelect(flour.id)}
                        className={`
                            flex items-center justify-between p-4 rounded-2xl border text-left transition-all
                            ${selectedId === flour.id
                                ? 'bg-lime-50 border-dlp-brand shadow-md scale-[1.02]'
                                : 'bg-white border-slate-100 hover:border-lime-200 hover:shadow-sm'}
                        `}
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{flour.brand}</span>
                                <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-600">Type {flour.type}</span>
                            </div>
                            <h4 className="font-bold text-slate-800">{flour.name}</h4>
                            <div className="flex items-center gap-3 mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                                <span className="flex items-center gap-1"><ScaleIcon className="w-3 h-3" />Prot: {flour.protein}%</span>
                                <span>W: {flour.w}</span>
                                <span>P/L: {flour.pl}</span>
                            </div>
                        </div>
                        <ChevronRightIcon className={`w-5 h-5 transition-transform ${selectedId === flour.id ? 'text-dlp-brand rotate-90' : 'text-slate-300'}`} />
                    </button>
                ))}
            </div>
        </div>
    );
};
