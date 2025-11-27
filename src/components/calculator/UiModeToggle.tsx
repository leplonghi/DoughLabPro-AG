import React from 'react';

interface UiModeToggleProps {
    mode: 'basic' | 'advanced';
    onModeChange: (mode: 'basic' | 'advanced') => void;
}

const UiModeToggle: React.FC<UiModeToggleProps> = ({ mode, onModeChange }) => {
    const isAdvanced = mode === 'advanced';

    return (
        <div className="flex items-center gap-3 text-sm font-medium">
            <span className={`${!isAdvanced ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>
                Guided
            </span>

            <button
                type="button"
                role="switch"
                aria-checked={isAdvanced}
                onClick={() => onModeChange(isAdvanced ? 'basic' : 'advanced')}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 ${isAdvanced ? 'bg-lime-500' : 'bg-slate-300'
                    }`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isAdvanced ? 'translate-x-5' : 'translate-x-0'
                        }`}
                />
            </button>

            <span className={`${isAdvanced ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>
                Advanced
            </span>
        </div>
    );
};

export default UiModeToggle;
