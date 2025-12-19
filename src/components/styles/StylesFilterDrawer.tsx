import React from 'react';
import { X, Check, Filter } from 'lucide-react';
import { useTranslation } from '@/i18n';

interface StylesFilterDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    availableTags: string[];
    selectedTags: string[];
    onToggleTag: (tag: string) => void;
    selectedDifficulty: string[];
    onToggleDifficulty: (diff: string) => void;
    selectedRegions: string[];
    onToggleRegion: (region: string) => void;
    availableRegions: string[];
    onClearAll: () => void;
}

export const StylesFilterDrawer: React.FC<StylesFilterDrawerProps> = ({
    isOpen,
    onClose,
    availableTags,
    selectedTags,
    onToggleTag,
    selectedDifficulty,
    onToggleDifficulty,
    selectedRegions,
    onToggleRegion,
    availableRegions,
    onClearAll
}) => {
    const { t } = useTranslation();
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />

            <div className="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in-right">
                {/* Header */}
                <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white z-10">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-lime-50 rounded-lg text-dlp-brand-hover">
                            <Filter className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900">{t('general.advanced_filters')}</h2>
                            <p className="text-xs text-slate-500">{t('general.refine_your_style_search')}</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">

                    {/* Difficulty */}
                    <section>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">{t('general.difficulty_level')}</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { id: 'Easy', label: t('common.easy', { defaultValue: 'Easy' }) },
                                { id: 'Medium', label: t('common.medium', { defaultValue: 'Medium' }) },
                                { id: 'Hard', label: t('common.hard', { defaultValue: 'Hard' }) },
                                { id: 'Expert', label: t('common.expert', { defaultValue: 'Expert' }) }
                            ].map(diff => {
                                const isSelected = selectedDifficulty.includes(diff.id);
                                return (
                                    <button
                                        key={diff.id}
                                        onClick={() => onToggleDifficulty(diff.id)}
                                        className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all flex items-center gap-2 ${isSelected
                                            ? 'bg-dlp-brand text-white border-dlp-brand-hover shadow-md'
                                            : 'bg-white text-slate-600 border-slate-200 hover:border-lime-300 hover:bg-lime-50'
                                            }`}
                                    >
                                        {isSelected && <Check className="w-3.5 h-3.5" />}
                                        {diff.label}
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Regions */}
                    <section>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Region / Origin</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {availableRegions.map(region => {
                                const isSelected = selectedRegions.includes(region);
                                return (
                                    <button
                                        key={region}
                                        onClick={() => onToggleRegion(region)}
                                        className={`px-3 py-2 rounded-lg text-xs font-medium border text-left transition-all flex items-center justify-between ${isSelected
                                            ? 'bg-sky-50 text-sky-700 border-sky-200'
                                            : 'bg-white text-slate-600 border-slate-200 hover:border-sky-200 hover:bg-sky-50/50'
                                            }`}
                                    >
                                        <span className="truncate">{region}</span>
                                        {isSelected && <Check className="w-3 h-3 flex-shrink-0" />}
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Tags */}
                    <section>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">{t('styles.characteristics__tags')}</h3>
                        <div className="flex flex-wrap gap-2">
                            {availableTags.map(tag => {
                                const isSelected = selectedTags.includes(tag);
                                return (
                                    <button
                                        key={tag}
                                        onClick={() => onToggleTag(tag)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${isSelected
                                            ? 'bg-slate-800 text-white border-slate-900'
                                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                );
                            })}
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="p-5 border-t border-slate-100 bg-slate-50 flex gap-3">
                    <button
                        onClick={onClearAll}
                        className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-white hover:text-red-500 transition-colors"
                    >{t('common.reset_all')}</button>
                    <button
                        onClick={onClose}
                        className="flex-[2] py-3 px-4 rounded-xl bg-dlp-brand text-white font-bold shadow-lg hover:bg-dlp-brand hover:text-white-hover hover:shadow-xl transition-all"
                    >{t('common.show_results')}</button>
                </div>
            </div>
        </div>
    );
};



