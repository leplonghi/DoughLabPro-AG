import React from 'react';
import { SparklesIcon } from '@/components/ui/Icons';

interface UiModeToggleProps {
    calculatorMode: 'basic' | 'advanced';
    setCalculatorMode: (mode: 'basic' | 'advanced') => void;
}

const UiModeToggle: React.FC<UiModeToggleProps> = ({ calculatorMode, setCalculatorMode }) => {
    const isAdvanced = calculatorMode === 'advanced';

    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
                <SparklesIcon className={`h-5 w-5 ${isAdvanced ? 'text-lime-600' : 'text-slate-400'}`} />
                <span className="text-sm font-medium text-slate-600">
                    {isAdvanced ? 'Pro Mode' : 'Guided Mode'}
                </span>
            </div>
            
            <div className="flex items-center gap-3">
                <span className={`${!isAdvanced ? 'text-slate-900 font-bold' : 'text-slate-500'} text-xs uppercase tracking-wide transition-colors`}>Guided</span>
                
                <button
                    onClick={() => setCalculatorMode(isAdvanced ? 'basic' : 'advanced')}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 ${isAdvanced ? 'bg-lime-500' : 'bg-slate-300'}`}
                    role="switch"
                    aria-checked={isAdvanced}
                >
                    <span
                        aria-hidden="true"
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isAdvanced ? 'translate-x-5' : 'translate-x-0'}`}
                    />
                </button>

                <span className={`${isAdvanced ? 'text-slate-900 font-bold' : 'text-slate-500'} text-xs uppercase tracking-wide transition-colors`}>Pro</span>
            </div>
        </div>
    );
};

export default UiModeToggle;
