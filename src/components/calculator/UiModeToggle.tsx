import React from 'react';
import { SparklesIcon } from '@/components/ui/Icons';

interface UiModeToggleProps {
    calculatorMode: 'basic' | 'advanced';
    setCalculatorMode: (mode: 'basic' | 'advanced') => void;
}

const UiModeToggle: React.FC<UiModeToggleProps> = ({ calculatorMode, setCalculatorMode }) => {
    const isAdvanced = calculatorMode === 'advanced';

    return (
        <div className="inline-flex items-center gap-2 bg-slate-100 rounded-lg p-1 h-9">
            <button
                onClick={() => setCalculatorMode('basic')}
                className={`relative px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${!isAdvanced
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
            >
                Guided
            </button>
            <button
                onClick={() => setCalculatorMode('advanced')}
                className={`relative px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 flex items-center gap-1 ${isAdvanced
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
            >
                <SparklesIcon className={`h-3 w-3 ${isAdvanced ? 'text-lime-600' : 'text-slate-400'}`} />
                Pro
            </button>
        </div>
    );
};

export default UiModeToggle;
