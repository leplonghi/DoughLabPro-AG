import React, { useState } from 'react';
import { LearnArticleData } from '@/types/learn';
import TechnicalPageLayout from '@/pages/learn/TechnicalPageLayout';
import {
    LightBulbIcon,
    ExclamationCircleIcon,
    BookOpenIcon,
    CheckCircleIcon,
    GlobeAltIcon,
    ChevronDownIcon
} from '@/components/ui/Icons';

import LearnAffiliateBlock from './LearnAffiliateBlock';

interface LearnArticleRendererProps {
    data: LearnArticleData;
}

const LearnArticleRenderer: React.FC<LearnArticleRendererProps> = ({ data }) => {
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);

    return (
        <TechnicalPageLayout
            title={data.title}
            subtitle={data.subtitle}
            showReferencesSection={false} // We handle references manually in this new standard
        >
            {/* History Section */}
            {data.history && (
                <div className="mb-12 rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm animate-fade-in">
                    <button
                        onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-500">
                                <GlobeAltIcon className="h-5 w-5" />
                            </div>
                            <span className="font-bold text-slate-700">{data.history.heading}</span>
                        </div>
                        <ChevronDownIcon className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${isHistoryOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isHistoryOpen && (
                        <div className="p-6 border-t border-slate-200 bg-white prose prose-slate max-w-none text-slate-600">
                            {data.history.paragraphs.map((para, idx) => (
                                <p key={idx} className="mb-4 last:mb-0">{para}</p>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Main Sections */}
            <div className="space-y-12">
                {data.sections.map((section, index) => (
                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-4">
                            {section.icon && <span className="text-lime-600">{section.icon}</span>}
                            {section.title}
                        </h3>
                        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4">
                            {section.content.map((block, i) => (
                                <div key={i}>{block}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pro Tip Box */}
            {data.proTip && (
                <div className="mt-12 rounded-2xl bg-amber-50 border border-amber-100 p-8 shadow-sm animate-fade-in">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 bg-amber-100 rounded-lg text-amber-600">
                            <LightBulbIcon className="h-6 w-6" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">
                                {data.proTip.title || 'Pro Tip'}
                            </h4>
                            <div className="text-slate-800 leading-relaxed">
                                {data.proTip.content}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Critical Point Box */}
            {data.criticalPoint && (
                <div className="mt-8 rounded-2xl bg-red-50 border border-red-100 p-8 shadow-sm animate-fade-in">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 bg-red-100 rounded-lg text-red-600">
                            <ExclamationCircleIcon className="h-6 w-6" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">
                                {data.criticalPoint.title || 'Critical Point'}
                            </h4>
                            <div className="text-slate-800 leading-relaxed">
                                {data.criticalPoint.content}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Affiliate Suggestions */}
            {data.affiliatePlacementKeys && data.affiliatePlacementKeys.length > 0 && (
                <LearnAffiliateBlock placementKeys={data.affiliatePlacementKeys} />
            )}

            {/* Internal Call to Action */}
            {data.callToAction && (
                <div className="mt-12 rounded-2xl bg-gradient-to-r from-lime-500 to-lime-600 p-8 text-white shadow-lg animate-fade-in text-center">
                    <h4 className="text-xl font-bold mb-3">
                        {data.callToAction.text}
                    </h4>
                    <button
                        onClick={() => window.location.hash = data.callToAction!.link} // Simple hash navigation or use useRouter if available
                        className="inline-flex items-center gap-2 bg-white text-lime-600 px-6 py-3 rounded-xl font-bold shadow-md hover:bg-lime-50 transition-colors hover:scale-105 active:scale-95"
                    >
                        {data.callToAction.icon}
                        {data.callToAction.buttonText}
                    </button>
                </div>
            )}

            {/* References Section */}
            {data.references && data.references.length > 0 && (
                <div className="mt-16 border-t border-slate-200 pt-10 animate-fade-in">
                    <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-6">
                        <BookOpenIcon className="h-6 w-6 text-lime-600" />
                        <span>Technical References</span>
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {data.references.map((ref, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-lime-200 transition-colors">
                                <CheckCircleIcon className="h-5 w-5 text-lime-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-slate-900">{ref.title}</p>
                                    {(ref.author || ref.year) && (
                                        <p className="text-sm text-slate-500 mt-1">
                                            {ref.author} {ref.year && `(${ref.year})`}
                                        </p>
                                    )}
                                    {ref.link && (
                                        <a
                                            href={ref.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-bold text-lime-600 hover:underline mt-2 inline-block"
                                        >
                                            Verify Source &rarr;
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-slate-400 italic mt-6">
                        All references in DoughLab Pro are verified against scientific literature or recognized culinary authorities.
                    </p>
                </div>
            )}
        </TechnicalPageLayout>
    );
};

export default LearnArticleRenderer;
