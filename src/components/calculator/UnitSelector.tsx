
import { useTranslation } from '@/i18n';
import React from 'react';
import { Unit } from '@/types';

interface UnitSelectorProps {
    unit: Unit;
    onUnitChange: (unit: Unit) => void;
}

const UnitSelector: React.FC<UnitSelectorProps> = ({ unit, onUnitChange }) => {
    const { t } = useTranslation();

    return (
        <div className="inline-flex items-center gap-1 bg-slate-100 rounded-lg p-1 min-h-[44px]">
            <button
                onClick={() => onUnitChange('g')}
                className={`relative px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 min-h-[44px] flex items-center ${unit === 'g'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
                title={t('calculator:grams')}
            >
                g
            </button>
            <button
                onClick={() => onUnitChange('oz')}
                className={`relative px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 min-h-[44px] flex items-center ${unit === 'oz'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
                title={t('calculator:ounces')}
            >
                oz
            </button>
            <button
                onClick={() => onUnitChange('volume')}
                className={`relative px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 min-h-[44px] flex items-center ${unit === 'volume'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
                title={t('calculator:cups')}
            >
                cups
            </button>
        </div>
    );
};

export default UnitSelector;
