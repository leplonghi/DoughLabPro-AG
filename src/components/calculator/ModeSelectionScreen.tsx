import React from 'react';
import { useTranslation } from '@/i18n';
import { SparklesIcon, CompassIcon, ZapIcon } from '@/components/ui/Icons';

interface ModeSelectionScreenProps {
    onSelectMode: (mode: 'wizard' | 'basic' | 'advanced') => void;
    selectedMode: 'wizard' | 'basic' | 'advanced';
}

export const ModeSelectionScreen: React.FC<ModeSelectionScreenProps> = ({ onSelectMode, selectedMode }) => {
    const { t } = useTranslation();

    const modes = [
        {
            id: 'wizard' as const,
            title: t('calculator.wizard_mode_title', { defaultValue: 'Wizard' }),
            shortDesc: t('calculator.wizard_short', { defaultValue: 'Step-by-step' }),
            activeBg: 'bg-blue-600',
            activeText: 'text-white',
            hoverBg: 'hover:bg-blue-50',
            hoverText: 'hover:text-blue-700',
            dotColor: 'bg-blue-500',
        },
        {
            id: 'basic' as const,
            title: t('calculator.guided_mode_title', { defaultValue: 'Guided' }),
            shortDesc: t('calculator.guided_short', { defaultValue: 'Classic' }),
            activeBg: 'bg-[#1B4332]',
            activeText: 'text-white',
            hoverBg: 'hover:bg-emerald-50',
            hoverText: 'hover:text-[#1B4332]',
            dotColor: 'bg-[#1B4332]',
        },
        {
            id: 'advanced' as const,
            title: t('calculator.pro_mode_title', { defaultValue: 'Pro' }),
            shortDesc: t('calculator.pro_short', { defaultValue: 'Full control' }),
            activeBg: 'bg-[#51a145]',
            activeText: 'text-white',
            hoverBg: 'hover:bg-emerald-50',
            hoverText: 'hover:text-[#51a145]',
            dotColor: 'bg-[#51a145]',
        }
    ];

    return (
        <div className="flex bg-slate-100/80 p-1 rounded-xl border border-slate-200/60 gap-1">
            {modes.map((mode) => {
                const isSelected = selectedMode === mode.id;

                return (
                    <button
                        key={mode.id}
                        onClick={() => onSelectMode(mode.id)}
                        className={`
                            relative flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg transition-all duration-250
                            text-xs font-bold uppercase tracking-wide min-h-[44px] touch-target
                            ${isSelected
                                ? `${mode.activeBg} ${mode.activeText} shadow-sm`
                                : `bg-transparent text-slate-500 ${mode.hoverBg} ${mode.hoverText}`
                            }
                        `}
                    >
                        {mode.id === 'wizard' && <SparklesIcon className="w-3.5 h-3.5" />}
                        {mode.id === 'basic' && <CompassIcon className="w-3.5 h-3.5" />}
                        {mode.id === 'advanced' && <ZapIcon className="w-3.5 h-3.5" />}
                        <span className="hidden sm:inline">{mode.title}</span>
                        <span className="sm:hidden">{mode.title}</span>
                    </button>
                );
            })}
        </div>
    );
};
