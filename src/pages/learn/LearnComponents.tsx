import React, { useState } from 'react';
import { CheckCircleIcon, LightBulbIcon, ExclamationCircleIcon, ClockIcon, ChevronDownIcon, ChevronRightIcon } from '@/components/ui/Icons';

export const LearnSection: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="mt-10 first:mt-0">
        <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-900 mb-4">
            {icon && <span className="text-lime-500">{icon}</span>}
            {title}
        </h3>
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
            {children}
        </div>
    </div>
);

export const LearnKeyTakeaway: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="my-8 rounded-xl bg-lime-50 border border-lime-100 p-6 flex gap-4 shadow-sm">
        <div className="flex-shrink-0 text-lime-600 mt-1">
            <CheckCircleIcon className="h-6 w-6" />
        </div>
        <div className="text-slate-800 font-medium leading-relaxed">
            {children}
        </div>
    </div>
);

export const LearnProTip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="my-8 rounded-xl bg-sky-50 border border-sky-100 p-6 flex gap-4 shadow-sm">
        <div className="flex-shrink-0 text-sky-600 mt-1">
            <LightBulbIcon className="h-6 w-6" />
        </div>
        <div>
            <h4 className="font-bold text-sky-900 mb-1">Pro Tip</h4>
            <div className="text-slate-800 font-medium leading-relaxed">
                {children}
            </div>
        </div>
    </div>
);

export const LearnCriticalPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="my-8 rounded-xl bg-amber-50 border border-amber-100 p-6 flex gap-4 shadow-sm">
        <div className="flex-shrink-0 text-amber-600 mt-1">
            <ExclamationCircleIcon className="h-6 w-6" />
        </div>
        <div>
            <h4 className="font-bold text-amber-900 mb-1">Critical Point</h4>
            <div className="text-slate-800 font-medium leading-relaxed">
                {children}
            </div>
        </div>
    </div>
);

export const LearnHistory: React.FC<{ title?: string; children: React.ReactNode }> = ({ title = "Historical Context", children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="my-8 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-100 transition-colors"
            >
                <div className="flex items-center gap-2 font-semibold text-slate-700">
                    <ClockIcon className="h-5 w-5 text-slate-500" />
                    {title}
                </div>
                {isOpen ? (
                    <ChevronDownIcon className="h-5 w-5 text-slate-400" />
                ) : (
                    <ChevronRightIcon className="h-5 w-5 text-slate-400" />
                )}
            </button>
            {isOpen && (
                <div className="p-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-200/50">
                    {children}
                </div>
            )}
        </div>
    );
};
