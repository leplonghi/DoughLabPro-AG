import React from 'react';
import { Unit } from '@/types';

interface UnitSelectorProps {
    unit: Unit;
    onUnitChange: (unit: Unit) => void;
}

const UnitSelector: React.FC<UnitSelectorProps> = ({ unit, onUnitChange }) => {
    return (
        <div className="inline-flex items-center gap-1 bg-slate-100 rounded-lg p-1 h-9">
            <button
                onClick={() => onUnitChange('g')}
                className={`relative px-2 py-1 text-xs font-medium rounded-md transition-all duration-200 ${unit === 'g'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                title="Grams"
            >
                g
            </button>
            <button
                onClick={() => onUnitChange('oz')}
                className={`relative px-2 py-1 text-xs font-medium rounded-md transition-all duration-200 ${unit === 'oz'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                title="Ounces"
            >
                oz
            </button>
            <button
                onClick={() => onUnitChange('volume')}
                className={`relative px-2 py-1 text-xs font-medium rounded-md transition-all duration-200 ${unit === 'volume'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                title="Cups"
            >
                cups
            </button>
        </div>
    );
};

export default UnitSelector;
