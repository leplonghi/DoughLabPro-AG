import React, { useState } from 'react';
import { DoughStyleDefinition } from '@/types';
import { BookOpenIcon, ChevronDownIcon, GlobeAltIcon, SparklesIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface StyleSummaryCardProps {
    style: DoughStyleDefinition;
    className?: string;
}

const StyleSummaryCard: React.FC<StyleSummaryCardProps> = ({ style, className = '' }) => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden ${className}`}>
            {/* Header Bar */}
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-between p-4 cursor-pointer bg-slate-50/50 hover:bg-slate-50 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm text-lime-600">
                        {style.source === 'official' ? <BookOpenIcon className="h-5 w-5" /> : <SparklesIcon className="h-5 w-5" />}
                    </div>
                    <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">{t('common.target_style')}</p>
                        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                            {t(style.name)}
                        </h3>
                    </div>
                </div>
                <div className={`text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon className="h-5 w-5" />
                </div>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="p-5 border-t border-slate-100 bg-white animate-fade-in">
                    {style.origin && (
                        <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
                            <GlobeAltIcon className="h-4 w-4" />
                            <span>{t(style.origin.country)}, {t(style.origin.region)} ({style.origin.period})</span>
                        </div>
                    )}

                    {/* Technical Specs */}
                    {style.technicalProfile && (
                        <div className="mb-5 grid grid-cols-2 gap-3">
                            <div className="p-3 bg-lime-50 rounded-xl border border-lime-100">
                                <span className="block text-[10px] uppercase font-bold text-lime-700 mb-1">{t('general.target_hydration')}</span>
                                <span className="text-lg font-bold text-lime-900">{style.technicalProfile.hydration[0]}-{style.technicalProfile.hydration[1]}%</span>
                            </div>
                            <div className="p-3 bg-lime-50 rounded-xl border border-lime-100">
                                <span className="block text-[10px] uppercase font-bold text-lime-700 mb-1">{t('general.salt_range')}</span>
                                <span className="text-lg font-bold text-lime-900">{style.technicalProfile.salt[0]}-{style.technicalProfile.salt[1]}%</span>
                            </div>
                        </div>
                    )}

                    <div className="mb-4">
                        <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">{t('general.description_2')}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{t(style.description)}</p>
                    </div>

                    <div className="flex justify-end pt-2 border-t border-slate-50">
                        <a
                            href={`#/styles/detail/${style.id}`}
                            className="text-xs font-bold text-lime-600 hover:text-lime-700 flex items-center gap-1"
                        >
                            View Full Style Guide &rarr;
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StyleSummaryCard;
