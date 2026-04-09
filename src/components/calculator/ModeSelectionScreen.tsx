import React from 'react';
import { useTranslation } from '@/i18n';
import { CheckIcon } from '@/components/ui/Icons';

interface ModeSelectionScreenProps {
    onSelectMode: (mode: 'wizard' | 'basic' | 'advanced') => void;
    selectedMode: 'wizard' | 'basic' | 'advanced';
}

export const ModeSelectionScreen: React.FC<ModeSelectionScreenProps> = ({ onSelectMode, selectedMode }) => {
    const { t } = useTranslation();

    const modes = [
        {
            id: 'basic',
            title: t('calculator.guided_mode_title', { defaultValue: 'Guided Mode' }),
            description: t('calculator.guided_desc', { defaultValue: 'Best default. Safe recipe with almost no setup mistakes.' }),
            icon: "🧭",
            tag: t('calculator.standard', { defaultValue: 'Recommended' }),
            helper: t('calculator.workflow_guided_helper', { defaultValue: 'Fastest path to a solid first bake.' }),
        },
        {
            id: 'wizard',
            title: t('calculator.wizard_mode_title', { defaultValue: 'Dough Wizard' }),
            description: t('calculator.wizard_desc', { defaultValue: 'Step-by-step flow that teaches while you configure.' }),
            icon: "🪄",
            tag: t('calculator.easiest', { defaultValue: 'Guided Steps' }),
            helper: t('calculator.workflow_wizard_helper', { defaultValue: 'Great when you want clarity, not complexity.' }),
        },
        {
            id: 'advanced',
            title: t('calculator.pro_mode_title', { defaultValue: 'Pro Mode' }),
            description: t('calculator.pro_desc', { defaultValue: 'Full control for technical experts.' }),
            icon: "⚡",
            tag: t('calculator.advanced', { defaultValue: t('calculator.advanced_391') }),
            helper: t('calculator.workflow_advanced_helper', { defaultValue: 'Use when you need full parameter freedom.' }),
        }
    ] as const;

    return (
        <div>
            <div className="grid grid-cols-1 gap-2.5 md:grid-cols-3 md:gap-3">
                {modes.map((mode) => {
                    const isSelected = selectedMode === mode.id;
                    const tagLabel = mode.id === 'basic'
                        ? t('calculator.standard_390', { defaultValue: mode.tag })
                        : mode.id === 'wizard'
                            ? t('calculator.easiest', { defaultValue: mode.tag })
                            : t('calculator.advanced_391', { defaultValue: mode.tag });

                    return (
                        <button
                            key={mode.id}
                            onClick={() => onSelectMode(mode.id)}
                            className={`
                                relative group flex min-h-[96px] w-full flex-col items-start justify-between gap-2 rounded-2xl border px-3.5 py-3 text-left transition-all duration-300
                                ${isSelected
                                    ? 'border-emerald-300/70 bg-[linear-gradient(155deg,rgba(255,255,255,0.96)_0%,rgba(238,249,240,0.94)_100%)] text-dlp-text-primary shadow-[0_16px_32px_-20px_rgba(47,139,73,0.42)] ring-1 ring-emerald-200/70'
        : 'border-emerald-100 bg-white/90 text-dlp-text-secondary shadow-[0_10px_22px_-18px_rgba(21,38,23,0.2)] hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50/70'
                                }
                            `}
                        >
                            <div className="flex w-full items-start justify-between gap-2">
                                <div className={`flex h-9 w-9 items-center justify-center rounded-xl text-lg transition-all duration-300 ${isSelected ? 'bg-emerald-100 text-emerald-700 shadow-[inset_0_0_0_1px_rgba(47,139,73,0.16)]' : 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100'}`}>
                                    {mode.icon}
                                </div>
                                <span className={`rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] ${isSelected ? 'border-emerald-200/80 bg-emerald-50/80 text-emerald-700' : 'border-emerald-100 bg-white text-emerald-700'}`}>
                                    {tagLabel}
                                </span>
                            </div>

                            <div className="w-full space-y-1">
                                <h3 className={`text-sm font-bold transition-colors ${isSelected ? 'text-dlp-text-primary' : 'text-dlp-text-primary group-hover:text-emerald-800'}`}>
                                    {mode.title}
                                </h3>
                                <p className={`text-[11px] leading-snug ${isSelected ? 'text-dlp-text-secondary' : 'text-dlp-text-muted group-hover:text-dlp-text-secondary'}`}>
                                    {mode.description}
                                </p>
                                <p className={`text-[10px] leading-snug ${isSelected ? 'text-dlp-text-muted' : 'text-dlp-text-muted/90'}`}>
                                    {mode.helper}
                                </p>
                            </div>

                            <span className={`absolute right-3 top-3 inline-flex h-5 w-5 items-center justify-center rounded-full border transition-all ${isSelected ? 'border-emerald-300 bg-emerald-600 text-white shadow-[0_8px_18px_-10px_rgba(47,139,73,0.7)]' : 'border-emerald-200 bg-white text-emerald-500'}`}>
                                {isSelected ? <CheckIcon className="h-3.5 w-3.5" /> : <span className="h-2 w-2 rounded-full bg-emerald-200" />}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

