import React from 'react';
import { useTranslation } from '@/i18n';
import { SparklesIcon, MagicWandIcon, GraduationCapIcon } from '@/components/ui/Icons'; // Assuming icons exist or map to existing

interface ModeSelectionScreenProps {
    onSelectMode: (mode: 'wizard' | 'basic' | 'advanced') => void;
    selectedMode: 'wizard' | 'basic' | 'advanced';
}

export const ModeSelectionScreen: React.FC<ModeSelectionScreenProps> = ({ onSelectMode, selectedMode }) => {
    const { t } = useTranslation();

    const modes = [
        {
            id: 'wizard',
            title: t('calculator.wizard_mode_title', { defaultValue: 'Dough Wizard' }),
            description: t('calculator.wizard_desc', { defaultValue: 'Step-by-step guidance. Perfect for beginners who want great results without the math.' }),
            icon: <span className="text-4xl">🪄</span>,
            color: 'bg-blue-50 border-blue-200 hover:border-blue-300 text-blue-900',
            tag: t('calculator.easiest', { defaultValue: 'Easiest' }),
            tagColor: 'bg-blue-100 text-blue-700'
        },
        {
            id: 'basic', // Maps to "Guided" in UI
            title: t('calculator.guided_mode_title', { defaultValue: 'Guided Mode' }),
            description: t('calculator.guided_desc', { defaultValue: 'Classic calculator with helpful tooltips and safety rails. Good for everyday baking.' }),
            icon: <span className="text-4xl">🧭</span>,
            color: 'bg-emerald-50 border-emerald-200 hover:border-emerald-300 text-emerald-900',
            tag: t('calculator.standard', { defaultValue: 'Standard' }),
            tagColor: 'bg-emerald-100 text-emerald-700'
        },
        {
            id: 'advanced', // Maps to "Pro"
            title: t('calculator.pro_mode_title', { defaultValue: 'Pro Mode' }),
            description: t('calculator.pro_desc', { defaultValue: 'Full control. Complex ingredients, preferments, and technical details. For experts.' }),
            icon: <span className="text-4xl">⚡</span>,
            color: 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-900',
            tag: t('calculator.advanced', { defaultValue: 'Advanced' }),
            tagColor: 'bg-slate-200 text-slate-700'
        }
    ] as const;

    return (
        <div className="w-full animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
                <h2 className="text-sm font-bold text-dlp-text-secondary uppercase tracking-wider">
                    {t('calculator.experience_mode', { defaultValue: 'Mode:' })}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {modes.map((mode) => {
                    const isSelected = selectedMode === mode.id;
                    // Colors for "High Contrast" selection
                    const activeClass = isSelected
                        ? mode.id === 'wizard' ? 'bg-blue-600 border-blue-700 text-white ring-2 ring-blue-300'
                            : mode.id === 'basic' ? 'bg-emerald-600 border-emerald-700 text-white ring-2 ring-emerald-300'
                                : 'bg-slate-800 border-slate-900 text-white ring-2 ring-slate-400'
                        : 'bg-white border-slate-200 text-dlp-text-secondary hover:border-slate-300 hover:bg-slate-50';

                    const textClass = isSelected ? 'text-white' : 'text-dlp-text-primary';
                    const descClass = isSelected ? 'text-blue-100' : 'text-slate-400'; // Light text on dark bg

                    return (
                        <button
                            key={mode.id}
                            onClick={() => onSelectMode(mode.id)}
                            className={`
                                relative flex items-center gap-3 p-3 rounded-lg border text-left transition-all duration-200 shadow-sm
                                ${activeClass}
                            `}
                        >
                            <div className="flex-shrink-0 text-2xl">
                                {mode.icon}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-0.5">
                                    <h3 className={`text-sm font-bold truncate ${textClass}`}>{mode.title}</h3>
                                    {isSelected && <span className="flex-shrink-0 text-current">✓</span>}
                                </div>
                                <p className={`text-[10px] leading-tight line-clamp-2 ${isSelected ? 'opacity-90' : 'text-slate-500'}`}>
                                    {mode.description}
                                </p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
