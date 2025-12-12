import React, { useState, useEffect } from 'react';
import { LearnArticleData } from '@/types/learn';
import { GrandmaRenderer } from '@/pages/learn/GrandmaRenderer';
import { generateArticleSummary } from '@/pages/learn/summaryGenerator';
import { CollapseSection, SubCollapse } from '@/pages/learn/LearnComponents';
import {
    BookOpenIcon, ScaleIcon, ChartBarIcon, FireIcon, AdjustmentsIcon,
    SparklesIcon, CalculatorIcon, LightBulbIcon, ExclamationCircleIcon,
    BeakerIcon, CheckIcon, UserCircleIcon, ListBulletIcon, WrenchScrewdriverIcon,
    PhotoIcon, QuestionMarkCircleIcon, CloseIcon, GlobeAmericasIcon, CloudIcon
} from '@/components/ui/Icons';
import { useRouter } from '@/contexts/RouterContext';
import { useLearnContext, LearnMode } from '@/contexts/LearnContext';
import { useTranslation } from '@/i18n';

interface LearnArticleRendererProps {
    articleData?: LearnArticleData;
    data?: LearnArticleData;
    embedded?: boolean;
}

type ArticleReadingMode = LearnMode | 'summary';

const StandardSection: React.FC<{
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}> = ({ title, children, icon }) => (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm mb-6">
        <div className="px-6 sm:px-8 py-6 border-b border-stone-100 bg-stone-50/30">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                {icon && <span className="text-lime-500">{icon}</span>}
                {title}
            </h3>
        </div>
        <div className="p-6 sm:p-8">
            <div className="prose prose-slate max-w-none">
                {children}
            </div>
        </div>
    </div>
);

export const LearnArticleRenderer: React.FC<LearnArticleRendererProps> = ({ articleData, data, embedded = false }) => {
    const finalData = articleData || data;
    if (!finalData) return null;

    const { t } = useTranslation();
    const { navigate } = useRouter();
    const { mode: globalMode, setMode: setGlobalMode } = useLearnContext();

    const [localMode, setLocalMode] = useState<ArticleReadingMode>(globalMode);

    useEffect(() => {
        if (localMode !== 'summary') {
            setLocalMode(globalMode);
        }
    }, [globalMode]);

    const handleModeChange = (newMode: ArticleReadingMode) => {
        setLocalMode(newMode);
        if (newMode !== 'summary') {
            setGlobalMode(newMode);
        }
    };

    const summaryData = generateArticleSummary(finalData);

    return (
        <div className={embedded ? "" : "min-h-screen bg-stone-50 text-slate-900 pb-20"}>
            {/* Header Section - Hide if embedded */}
            {!embedded && (
                <div className="bg-white border-b border-stone-200 pt-8 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-4">
                            {finalData.category && (
                                <button
                                    onClick={() => navigate('learn/category', encodeURIComponent(finalData.category!))}
                                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-80 transition-opacity ${finalData.category === 'Ingredient Science' ? 'bg-lime-900 text-lime-300 border border-lime-700' :
                                        finalData.category === 'Dough Science' ? 'bg-sky-900 text-sky-300 border border-sky-700' :
                                            finalData.category === 'Fermentation Science' ? 'bg-amber-900 text-amber-300 border border-amber-700' :
                                                'bg-stone-700 text-stone-300 border border-stone-600'
                                        }`}
                                >
                                    {finalData.category}
                                </button>
                            )}
                            {finalData.difficulty && (
                                <span className="px-3 py-1 rounded-full bg-stone-700 text-stone-300 text-xs font-bold border border-stone-600">
                                    {finalData.difficulty}
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight leading-tight">
                            {finalData.title}
                        </h1>
                        <p className="text-xl text-slate-500 font-light leading-relaxed">
                            {finalData.subtitle}
                        </p>

                        {finalData.tags && finalData.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-6">
                                {finalData.tags.map(tag => (
                                    <span key={tag} className="text-xs text-lime-800 bg-lime-100 px-2.5 py-1 rounded-md border border-lime-200 font-medium">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Mode Selector - Hide if embedded (assuming new page handles summary/modes differently, or we force technical) */}
            {!embedded && (
                <div className="sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex space-x-2 overflow-x-auto py-3 no-scrollbar justify-center">
                            <button
                                onClick={() => handleModeChange('technical')}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap border-2 ${localMode === 'technical'
                                    ? 'bg-lime-600 border-lime-600 text-white shadow-lg shadow-lime-900/20 scale-105'
                                    : 'bg-white border-stone-200 text-stone-500 hover:border-lime-500 hover:text-lime-600'
                                    }`}
                            >
                                <BookOpenIcon className="w-4 h-4" />
                                {t('learn.technical_mode', { defaultValue: 'Technical Mode' })}
                            </button>
                            <button
                                onClick={() => handleModeChange('grandma')}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap border-2 ${localMode === 'grandma'
                                    ? 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-900/20 scale-105'
                                    : 'bg-white border-stone-200 text-stone-500 hover:border-amber-400 hover:text-amber-600'
                                    }`}
                            >
                                <UserCircleIcon className="w-4 h-4" />
                                {t('learn.grandma_mode', { defaultValue: 'Grandma Mode' })}
                            </button>
                            <button
                                onClick={() => handleModeChange('summary')}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap border-2 ${localMode === 'summary'
                                    ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-900/20 scale-105'
                                    : 'bg-white border-stone-200 text-stone-500 hover:border-purple-400 hover:text-purple-600'
                                    }`}
                            >
                                <ListBulletIcon className="w-4 h-4" />
                                {t('learn.summary_mode', { defaultValue: 'Summary Mode' })}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className={embedded ? "" : "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8"}>

                {/* MODE: GRANDMA */}
                {localMode === 'grandma' && (
                    finalData.grandmaVersion ? (
                        <GrandmaRenderer data={finalData.grandmaVersion} />
                    ) : (
                        <div className="p-8 bg-white rounded-2xl text-center text-slate-500 border border-stone-200">
                            {t('learn.grandma_nap', { defaultValue: 'Grandma is taking a nap. (No simplified version available for this article yet).' })}
                            <button onClick={() => handleModeChange('technical')} className="block mx-auto mt-4 text-lime-600 hover:underline">{t('learn.return_main', { defaultValue: 'Return to Main Article' })}</button>
                        </div>
                    )
                )}

                {/* MODE: SUMMARY */}
                {localMode === 'summary' && (
                    <div className="space-y-6 animate-fadeIn">
                        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <ListBulletIcon className="w-5 h-5 text-purple-500" />
                                {t('learn.executive_summary', { defaultValue: 'Executive Summary' })}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6">{summaryData.intro}</p>

                            <h4 className="font-bold text-slate-700 mb-2 text-sm uppercase tracking-wider">{t('learn.key_takeaways', { defaultValue: 'Key Takeaways' })}</h4>
                            <ul className="space-y-2 mb-6">
                                {summaryData.keyPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-600">
                                        <CheckIcon className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* MODE: TECHNICAL (MAIN) */}
                {localMode === 'technical' && (
                    <div className="space-y-4 animate-fadeIn">

                        {/* Intro */}
                        <StandardSection title={t('learn.introduction', { defaultValue: 'Introduction' })} icon={<BookOpenIcon className="h-5 w-5" />}>
                            <p className="text-lg leading-relaxed text-slate-700">{finalData.intro}</p>
                        </StandardSection>

                        {/* History */}
                        <StandardSection title={t('learn.history_context', { defaultValue: 'History & Context' })} icon={<BookOpenIcon className="h-5 w-5" />}>
                            <p className="text-slate-600 leading-relaxed">{finalData.history}</p>
                        </StandardSection>

                        {/* Technical Foundations */}
                        {finalData.technicalFoundations && finalData.technicalFoundations.length > 0 && (
                            <StandardSection title={t('learn.technical_foundations', { defaultValue: 'Technical Foundations' })} icon={<ScaleIcon className="h-5 w-5" />}>
                                <ul className="space-y-3">
                                    {finalData.technicalFoundations.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </StandardSection>
                        )}

                        {/* Dough Impact */}
                        {finalData.doughImpact && finalData.doughImpact.length > 0 && (
                            <StandardSection title={t('learn.impact_dough', { defaultValue: 'Impact on Dough' })} icon={<ChartBarIcon className="h-5 w-5" />}>
                                <ul className="space-y-3">
                                    {finalData.doughImpact.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </StandardSection>
                        )}

                        {/* Baking Impact */}
                        {finalData.bakingImpact && finalData.bakingImpact.length > 0 && (
                            <StandardSection title={t('learn.baking_performance', { defaultValue: 'Baking Performance' })} icon={<FireIcon className="h-5 w-5" />}>
                                <ul className="space-y-3">
                                    {finalData.bakingImpact.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </StandardSection>
                        )}

                        {/* Practical Ranges */}
                        {finalData.practicalRanges && finalData.practicalRanges.length > 0 && (
                            <StandardSection title={t('learn.practical_ranges', { defaultValue: 'Practical Ranges' })} icon={<AdjustmentsIcon className="h-5 w-5" />}>
                                <div className="space-y-4">
                                    {finalData.practicalRanges.map((range, i) => (
                                        <div key={i} className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                                            <div className="font-bold text-slate-900 mb-1">{range.label}</div>
                                            <div className="text-sm text-slate-600">
                                                {range.notes || (
                                                    range.recommended ?
                                                        `Recommended: ${range.recommended}${range.unit} (Range: ${range.min}-${range.max}${range.unit})` :
                                                        `${range.min}-${range.max}${range.unit}`
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </StandardSection>
                        )}

                        {/* Practical Applications (New) */}
                        {finalData.practicalApplications && finalData.practicalApplications.length > 0 && (
                            <StandardSection title={t('learn.practical_applications', { defaultValue: 'Practical Applications' })} icon={<WrenchScrewdriverIcon className="h-5 w-5" />}>
                                <ul className="space-y-3">
                                    {finalData.practicalApplications.map((app, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <CheckIcon className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
                                            <span>{app}</span>
                                        </li>
                                    ))}
                                </ul>
                            </StandardSection>
                        )}

                        {/* Pro Tips */}
                        {finalData.proTips && finalData.proTips.length > 0 && (
                            <StandardSection title={t('learn.pro_tips', { defaultValue: 'Pro Tips' })} icon={<LightBulbIcon className="h-5 w-5" />}>
                                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 space-y-4">
                                    {finalData.proTips.map((tip, i) => (
                                        <div key={i} className="flex gap-3">
                                            <LightBulbIcon className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <p className="text-amber-900/90">{tip}</p>
                                        </div>
                                    ))}
                                </div>
                            </StandardSection>
                        )}

                        {/* Critical Points */}
                        {finalData.criticalPoints && finalData.criticalPoints.length > 0 && (
                            <StandardSection title={t('learn.critical_points', { defaultValue: 'Critical Points' })} icon={<ExclamationCircleIcon className="h-5 w-5" />}>
                                <div className="bg-rose-50 p-6 rounded-xl border border-rose-100 space-y-4">
                                    {finalData.criticalPoints.map((point, i) => (
                                        <div key={i} className="flex gap-3">
                                            <ExclamationCircleIcon className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                                            <p className="text-rose-900/90">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </StandardSection>
                        )}

                        {/* Regional Variants */}
                        {finalData.regionalVariants && finalData.regionalVariants.length > 0 && (
                            <StandardSection title={t('learn.regional_variants', { defaultValue: 'Regional Variants' })} icon={<GlobeAmericasIcon className="h-5 w-5" />}>
                                <ul className="space-y-3">
                                    {finalData.regionalVariants.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </StandardSection>
                        )}

                        {/* Climate Scenarios */}
                        {finalData.climateScenarios && finalData.climateScenarios.length > 0 && (
                            <StandardSection title={t('learn.climate_scenarios', { defaultValue: 'Climate Scenarios' })} icon={<CloudIcon className="h-5 w-5" />}>
                                <ul className="space-y-3">
                                    {finalData.climateScenarios.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </StandardSection>
                        )}

                        {/* Variants & Implications */}
                        {finalData.variantsAndImplications && finalData.variantsAndImplications.length > 0 && (
                            <StandardSection title={t('learn.variants_implications', { defaultValue: 'Variants & Implications' })} icon={<SparklesIcon className="h-5 w-5" />}>
                                <div className="space-y-4">
                                    {finalData.variantsAndImplications.map((variant, i) => (
                                        <SubCollapse key={i} title={variant.variant || variant.name || 'Variant'}>
                                            <div className="space-y-2">
                                                <p className="text-slate-700 text-sm">{variant.implications || variant.description}</p>
                                                {/* Legacy Support */}
                                                {variant.doughImplications && (
                                                    <p className="text-xs text-slate-500"><strong>{t('learn.dough')}</strong> {variant.doughImplications}</p>
                                                )}
                                                {variant.bakingImplications && (
                                                    <p className="text-xs text-slate-500"><strong>{t('learn.baking')}</strong> {variant.bakingImplications}</p>
                                                )}
                                            </div>
                                        </SubCollapse>
                                    ))}
                                </div>
                            </StandardSection>
                        )}

                        {/* FAQ */}
                        {finalData.faq && finalData.faq.length > 0 && (
                            <CollapseSection title={t('learn.faq', { defaultValue: 'Frequently Asked Questions' })} icon={<QuestionMarkCircleIcon className="h-5 w-5" />}>
                                <div className="space-y-4">
                                    {finalData.faq.map((item, i) => (
                                        <div key={i} className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                                            <h4 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                                                <QuestionMarkCircleIcon className="h-5 w-5 text-lime-600 flex-shrink-0 mt-0.5" />
                                                {item.q}
                                            </h4>
                                            <p className="text-slate-700 pl-7">{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </CollapseSection>
                        )}

                        {/* References */}
                        {finalData.references && finalData.references.length > 0 && (
                            <CollapseSection title={t('learn.references', { defaultValue: 'References' })} icon={<BookOpenIcon className="h-5 w-5" />}>
                                <ul className="list-decimal pl-5 space-y-2 text-stone-500 text-sm">
                                    {finalData.references.map((ref, i) => (
                                        <li key={i}>{ref}</li>
                                    ))}
                                </ul>
                            </CollapseSection>
                        )}

                    </div>
                )}
            </div>
        </div>
    );
};

export default LearnArticleRenderer;
