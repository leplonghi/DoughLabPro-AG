import React from 'react';

interface TechnicalBadgeProps {
    label: string;
    value: string | number;
    unit?: string;
    color?: 'blue' | 'green' | 'red' | 'slate';
}

const COLOR_MAP = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    green: 'bg-green-50 text-green-700 border-green-200',
    red: 'bg-red-50 text-red-700 border-red-200',
    slate: 'bg-slate-50 text-slate-700 border-slate-200',
};

export const TechnicalBadge: React.FC<TechnicalBadgeProps> = ({ label, value, unit, color = 'slate' }) => {
    return (
        <div className={`flex flex-col items-center justify-center p-2 rounded-lg border ${COLOR_MAP[color]} min-w-[80px]`}>
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">{label}</span>
            <span className="text-lg font-bold leading-none mt-1">
                {value}<span className="text-xs font-normal ml-0.5">{unit}</span>
            </span>
        </div>
    );
};
