import React, { useState } from 'react';
import { useTranslation } from '@/i18n';
import { CheckCircleIcon, LightBulbIcon, ExclamationCircleIcon, ClockIcon, ChevronDownIcon, ChevronRightIcon } from '@/components/ui/Icons';

// Renamed from CollapseSection to LearnCollapseSection
export const LearnCollapseSection: React.FC<{
    title: string;
    children: React.ReactNode;
    defaultExpanded?: boolean;
    icon?: React.ReactNode;
}> = ({ title, children, defaultExpanded = false, icon }) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between py-6 px-6 sm:px-8 text-left group hover:bg-slate-50/50 transition-colors"
            >
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-lime-600 transition-colors flex items-center gap-3">
                    {icon && <span className="text-lime-500">{icon}</span>}
                    {title}
                </h3>
                <div className={`p-2 rounded-full transition-all duration-300 ${isExpanded ? 'bg-lime-100 text-lime-600 rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-lime-50 group-hover:text-lime-500'}`}>
                    <ChevronDownIcon className="h-5 w-5" />
                </div>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="prose prose-slate max-w-none px-6 sm:px-8 pb-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CollapseSection = LearnCollapseSection;

export const SubCollapse: React.FC<{
    title: string;
    children: React.ReactNode;
}> = ({ title, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mt-4 border border-slate-200 rounded-xl overflow-hidden bg-white">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between p-4 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
            >
                <span className="font-semibold text-slate-700">{title}</span>
                <ChevronDownIcon className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
            {isExpanded && (
                <div className="p-4 border-t border-slate-200">
                    {children}
                </div>
            )}
        </div>
    );
};

export const GrandmaCard: React.FC<{
    data: {
        introAnalogy: string;
        simpleExplanation: string;
        whatItDoes: string;
        whyItMatters: string;
        softWarning: string;
    };
    onSwitchToMain: () => void;
}> = ({ data, onSwitchToMain }) => {
    const { t } = useTranslation();

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-[fadeIn_0.5s_ease-out]">
            <div className="bg-[#FFFBF0] border border-[#E6DCC0] rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#F5EBD0] rounded-full opacity-50 blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">👵</span>
                        <h2 className="text-2xl font-serif font-bold text-[#5C4B30]">{t('learn.grandma_wisdom', { defaultValue: "Grandma's Wisdom" })}</h2>
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed text-[#4A3B22] font-serif">
                        <div className="p-4 bg-white/60 rounded-2xl border border-[#E6DCC0]/50 italic">
                            "{data.introAnalogy}"
                        </div>

                        <div>
                            <h3 className="font-bold text-[#5C4B30] mb-2 text-base uppercase tracking-wide opacity-80">{t('learn.simply_put', { defaultValue: 'Simply Put' })}</h3>
                            <p>{data.simpleExplanation}</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-[#5C4B30] mb-2 text-base uppercase tracking-wide opacity-80">{t('learn.what_it_does', { defaultValue: 'What it does' })}</h3>
                                <p>{data.whatItDoes}</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#5C4B30] mb-2 text-base uppercase tracking-wide opacity-80">{t('learn.why_it_matters', { defaultValue: 'Why it matters' })}</h3>
                                <p>{data.whyItMatters}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-amber-100/50 rounded-xl text-base">
                            <ExclamationCircleIcon className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                            <p className="text-amber-900">{data.softWarning}</p>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-[#E6DCC0] text-center">
                        <p className="text-[#5C4B30] mb-4 italic">{t('learn.want_details', { defaultValue: 'Want the fancy scientific details?' })}</p>
                        <button
                            onClick={onSwitchToMain}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5C4B30] text-[#FFFBF0] rounded-full font-bold hover:bg-[#4A3B22] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            {t('learn.see_full_article', { defaultValue: 'See Full Article' })}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SummaryCard: React.FC<{
    summary: string;
    ranges?: { min: string; max: string; optimal: string; unit: string };
    mistakes?: string[];
}> = ({ summary }) => {
    return (
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100 mb-10">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">{t('learn.quick_summary')}</h3>
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                        {summary}
                    </p>
                </div>
            </div>
        </div>
    );
};

// Aliases and Compatibility Components
export const LearnSection = LearnCollapseSection;

export const LearnKeyTakeaway: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-lime-50 border border-lime-200 rounded-xl p-6 my-6">
        <h4 className="flex items-center gap-2 font-bold text-lime-700 mb-2">
            <CheckCircleIcon className="h-5 w-5" />{t('learn.key_takeaway')}</h4>
        <div className="text-slate-700">{children}</div>
    </div>
);

export const LearnProTip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
        <h4 className="flex items-center gap-2 font-bold text-amber-700 mb-2">
            <LightBulbIcon className="h-5 w-5" />{t('learn.pro_tip')}</h4>
        <div className="text-slate-700">{children}</div>
    </div>
);

export const LearnCriticalPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 my-6">
        <h4 className="flex items-center gap-2 font-bold text-rose-700 mb-2">
            <ExclamationCircleIcon className="h-5 w-5" />{t('learn.critical_point')}</h4>
        <div className="text-slate-700">{children}</div>
    </div>
);

export const LearnHistory: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 my-6">
        <h4 className="flex items-center gap-2 font-bold text-stone-700 mb-2">
            <ClockIcon className="h-5 w-5" />{t('learn.history')}</h4>
        <div className="text-slate-700 italic">{children}</div>
    </div>
);
