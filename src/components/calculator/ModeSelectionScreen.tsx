import React from 'react';
import { useTranslation } from '@/i18n';
import { SparklesIcon } from '@/components/ui/Icons';

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
            description: t('calculator.wizard_desc', { defaultValue: 'Step-by-step guidance for beginners.' }),
            icon: "🪄",
            activeStyle: 'bg-blue-900 shadow-lg shadow-blue-500/20',
            textColor: 'text-blue-50',
            descColor: 'text-blue-200/80',
            hoverTextColor: 'group-hover:text-blue-700',
            hoverDescColor: 'group-hover:text-blue-600/80',
            checkBg: 'bg-blue-800',
            hoverBorder: '',
            hoverBg: 'hover:bg-blue-50/50',
            groupHoverText: 'group-hover:text-blue-700',
            tag: t('calculator.easiest', { defaultValue: 'Easiest' }),
        },
        {
            id: 'basic',
            title: t('calculator.guided_mode_title', { defaultValue: 'Guided Mode' }),
            description: t('calculator.guided_desc', { defaultValue: 'Classic calculator with safety rails.' }),
            icon: "🧭",
            activeStyle: 'bg-[#18540e] shadow-lg shadow-[#18540e]/20',
            textColor: 'text-emerald-50',
            descColor: 'text-emerald-200/80',
            hoverTextColor: 'group-hover:text-[#18540e]',
            hoverDescColor: 'group-hover:text-[#18540e]/80',
            checkBg: 'bg-[#2d8a1a]',
            hoverBorder: '',
            hoverBg: 'hover:bg-[#18540e]/5',
            groupHoverText: 'group-hover:text-[#18540e]',
            tag: t('calculator.standard', { defaultValue: t('calculator.standard_390') }),
        },
        {
            id: 'advanced',
            title: t('calculator.pro_mode_title', { defaultValue: 'Pro Mode' }),
            description: t('calculator.pro_desc', { defaultValue: 'Full control for technical experts.' }),
            icon: "⚡",
            activeStyle: 'bg-[#51a145] shadow-lg shadow-[#51a145]/20',
            textColor: 'text-white',
            descColor: 'text-white/80',
            hoverTextColor: 'group-hover:text-[#51a145]',
            hoverDescColor: 'group-hover:text-[#51a145]/80',
            checkBg: 'bg-[#36782c]',
            hoverBorder: '',
            hoverBg: 'hover:bg-[#51a145]/5',
            groupHoverText: 'group-hover:text-[#51a145]',
            tag: t('calculator.advanced', { defaultValue: t('calculator.advanced_391') }),
        }
    ] as const;

    return (
        <div className="">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B4332] opacity-60">MODE:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {modes.map((mode) => {
                    const isSelected = selectedMode === mode.id;

                    return (
                        <button
                            key={mode.id}
                            onClick={() => onSelectMode(mode.id)}
                            className={`
                                relative group flex flex-row items-center p-3 rounded-xl transition-all duration-300 text-left gap-3 h-[60px]
                                ${isSelected
                                    ? mode.activeStyle
                                    : `bg-white shadow-sm hover:shadow-md text-slate-600 ${mode.hoverBorder} ${mode.hoverBg}`
                                }
                            `}
                        >
                            <div className={`
                                w-8 h-8 rounded-lg flex items-center justify-center text-lg transition-all duration-300
                                ${isSelected ? 'bg-white shadow-sm' : `bg-slate-50 text-slate-400 ${mode.groupHoverText}`}
                            `}>
                                {mode.icon}
                            </div>

                            <div className="flex-grow min-w-0 flex flex-col justify-center">
                                <h3 className={`text-xs font-bold font-heading truncate transition-colors ${isSelected ? mode.textColor : `text-slate-700 ${mode.hoverTextColor}`}`}>
                                    {mode.title}
                                </h3>
                                <p className={`text-[10px] leading-tight truncate transition-colors ${isSelected ? mode.descColor : `text-slate-400 ${mode.hoverDescColor}`}`}>
                                    {mode.description}
                                </p>
                            </div>

                            {isSelected ? (
                                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center shadow-md transition-all duration-500 animate-in zoom-in-50 ${mode.checkBg}`}>
                                    <CheckIcon className="w-3 h-3 text-white" />
                                </div>
                            ) : (
                                <span className="flex-shrink-0 px-2 py-0.5 rounded text-[9px] font-bold text-slate-400 bg-slate-100 uppercase tracking-widest border border-slate-200/50">
                                    {mode.id === 'basic' ? t('calculator.standard_390') : mode.id === 'advanced' ? t('calculator.advanced_391') : ''}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
// Helper for the check icon which might not be imported as CheckIcon
const CheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);



