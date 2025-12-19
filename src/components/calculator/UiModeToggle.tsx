import React from 'react';
import { SparklesIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface UiModeToggleProps {
    calculatorMode: 'wizard' | 'basic' | 'advanced';
    setCalculatorMode: (mode: 'wizard' | 'basic' | 'advanced') => void;
}

const UiModeToggle: React.FC<UiModeToggleProps> = ({ calculatorMode, setCalculatorMode }) => {
    const { t } = useTranslation();

    return (
        <div className="inline-flex items-center gap-1.5 bg-slate-100 rounded-lg p-1 h-9">
            <button
                onClick={() => setCalculatorMode('wizard')}
                className={`relative px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 flex items-center gap-1 ${calculatorMode === 'wizard'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
            >
                <span className={`${calculatorMode === 'wizard' ? 'text-blue-500' : 'text-slate-400'}`}>🪄</span>
                {t('calculator.wizard')}
            </button>
            <button
                onClick={() => setCalculatorMode('basic')}
                className={`relative px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${calculatorMode === 'basic'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
            >{t('calculator.guided')}</button>
            <button
                onClick={() => setCalculatorMode('advanced')}
                className={`relative px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 flex items-center gap-1 ${calculatorMode === 'advanced'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
            >
                <SparklesIcon className={`h-3 w-3 ${calculatorMode === 'advanced' ? 'text-dlp-brand-hover' : 'text-slate-400'}`} />{t('calculator.pro')}</button>
        </div>
    );
};

export default UiModeToggle;

