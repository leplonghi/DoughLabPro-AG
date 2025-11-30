import React, { useState } from 'react';
import { DoughStyleDefinition } from '@/types';
import {
    CalculatorIcon,
    BookOpenIcon,
    BeakerIcon,
    ShoppingBagIcon,
    ExternalLinkIcon,
    GlobeAltIcon,
    HeartIcon,
    ArrowLeftIcon,
    ShareIcon,
    PrinterIcon
} from '@/components/ui/Icons';
import { AFFILIATE_PRODUCTS } from '@/data/affiliateLinks';
import { Logo } from '@/components/ui/Logo';
import { ProFeatureLock } from '@/components/ui/ProFeatureLock';
import { useUser } from '@/contexts/UserProvider';
import PDFExportButton from '@/components/ui/PDFExportButton';
import ShareButton from '@/components/ui/ShareButton';
import { allLearnArticles } from '@/data/learn';
import { LibraryPageLayout } from '../learn/LibraryPageLayout';
import { getCurrentPlan } from '@/permissions';
import {

    OriginBadge,
    DifficultyBadge
} from '@/components/styles/StyleComponents';
import { TechnicalProfileCard } from '@/components/styles/TechnicalProfileCard';

import { ChevronDown, ChevronUp, Layers, Globe, Calendar, FlaskConical } from 'lucide-react';

interface StyleDetailPageProps {
    style: DoughStyleDefinition;
    onLoadAndNavigate: (style: DoughStyleDefinition) => void;
    onBack: () => void;
}

export const StyleDetailPage: React.FC<StyleDetailPageProps> = ({ style, onLoadAndNavigate, onBack }) => {
    const { hasProAccess, openPaywall, isFavorite, toggleFavorite, user } = useUser();
    const userPlan = getCurrentPlan(user);
    const isPro = hasProAccess; // Simplified check

    // No adaptation needed

    const favorited = isFavorite(style.id);
    const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'science'>('overview');

    // Accordion States
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        substyles: true,
        regional: false,
        seasonal: false,
        experimental: false
    });

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };



    const renderRecommendation = () => {
        let text = "";
        let linkId = "";

        if (style.category === 'pizza') {
            if (style.name.includes('Neapolitan')) {
                text = "For authentic Neapolitan-style baking, high-heat pizza ovens (450°C+) make a huge difference.";
                linkId = "ooni_oven";
            } else {
                text = "For crispy bottoms in a home oven, a heavy-duty baking steel performs better than stone.";
                linkId = "baking_steel";
            }
        } else if (style.category === 'bread') {
            text = "Bread doughs, especially high hydration ones, are much easier to handle with a good bench scraper and proofing box.";
            linkId = "proofing_box";
        } else {
            text = "Precision is key for pastry. A digital scale with 0.1g accuracy is essential.";
            linkId = "scale_precision";
        }

        const product = AFFILIATE_PRODUCTS.find(p => p.id === linkId);
        const url = product ? product.url : '/shop';

        return (
            <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-3">
                    <ShoppingBagIcon className="h-5 w-5 text-lime-500" />
                    Recommended Tools
                </h3>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="text-sm text-slate-700 mb-3">{text}</p>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-lime-600 hover:underline"
                    >
                        See recommended gear in Shop <ExternalLinkIcon className="h-3 w-3" />
                    </a>
                </div>
            </div>
        );
    };

    const handleLoadCalculator = () => {
        onLoadAndNavigate(style);
    };

    return (
        <LibraryPageLayout>
            <div className="max-w-5xl mx-auto animate-fade-in pb-20">
                {/* Sticky Mini Header */}
            </div>

            {/* Hero */}
            <div className="relative bg-slate-900 text-white overflow-hidden rounded-b-3xl sm:rounded-3xl shadow-xl mb-8 mx-0 sm:mx-4">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                <div className="relative z-10 p-8 md:p-12">
                    <div className="flex flex-wrap gap-3 mb-6">
                        <OriginBadge origin={style.origin} />
                        <DifficultyBadge difficulty={style.technicalProfile.difficulty} />
                        {style.isCanonical && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-500/20 text-sky-200 border border-sky-500/30">
                                Official Standard
                            </span>
                        )}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">{style.name}</h1>
                    <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
                        {style.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={handleLoadCalculator}
                            className="bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold py-3 px-6 rounded-xl shadow-lg shadow-lime-900/20 flex items-center gap-2 transition-transform hover:scale-105"
                        >
                            <CalculatorIcon className="h-5 w-5" />
                            Use in Calculator
                        </button>

                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Technical Profile Card */}
                    <TechnicalProfileCard profile={style.technicalProfile} />

                    {/* History & Context */}
                    <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <BookOpenIcon className="h-5 w-5 text-lime-600" />
                            History & Context
                        </h2>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p>{style.history}</p>
                        </div>
                    </section>



                    {/* Substyles Section */}
                    {style.substyles && style.substyles.length > 0 && (
                        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <button
                                onClick={() => toggleSection('substyles')}
                                className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors"
                            >
                                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    <Layers className="h-5 w-5 text-purple-600" />
                                    Substyles & Variations
                                </h2>
                                {openSections['substyles'] ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                            </button>

                            {openSections['substyles'] && (
                                <div className="p-6 border-t border-slate-200">
                                    <div className="space-y-4">
                                        {style.substyles.slice(0, isPro ? undefined : 1).map((sub, idx) => (
                                            <div key={sub.id} className="p-4 rounded-xl border border-slate-200 hover:border-purple-300 transition-all bg-white">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-bold text-slate-800">{sub.title}</h4>
                                                    {sub.isNew && <span className="text-[10px] font-bold px-2 py-0.5 bg-lime-100 text-lime-700 rounded-full">NEW</span>}
                                                </div>
                                                <p className="text-sm text-slate-600 mb-3">{sub.description}</p>
                                                {isPro && sub.technicalAdjustments && (
                                                    <div className="text-xs bg-slate-50 p-2 rounded border border-slate-100">
                                                        <span className="font-semibold text-slate-700">Adjustments: </span>
                                                        <span className="text-slate-500">
                                                            {sub.technicalAdjustments.hydration && `Hydration ${sub.technicalAdjustments.hydration[0]}-${sub.technicalAdjustments.hydration[1]}%`}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                        {!isPro && style.substyles.length > 1 && (
                                            <div className="relative p-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center">
                                                <div className="absolute inset-0 backdrop-blur-[1px] bg-white/50" />
                                                <div className="relative z-10 flex flex-col items-center">
                                                    <Lock className="h-6 w-6 text-slate-400 mb-2" />
                                                    <p className="font-semibold text-slate-700 mb-1">Unlock {style.substyles.length - 1} more substyles</p>
                                                    <p className="text-sm text-slate-500 mb-3">Get access to all variations and technical adjustments.</p>
                                                    <button onClick={() => openPaywall('styles')} className="text-sm font-bold text-indigo-600 hover:underline">
                                                        Upgrade to Pro
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </section>
                    )}

                    {/* Regional Expressions Section */}
                    {style.regionExpressions && style.regionExpressions.length > 0 && (
                        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <button
                                onClick={() => toggleSection('regional')}
                                className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors"
                            >
                                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    <GlobeAltIcon className="h-5 w-5 text-teal-600" />
                                    Regional Expressions
                                </h2>
                                {openSections['regional'] ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                            </button>

                            {openSections['regional'] && (
                                <div className="p-6 border-t border-slate-200">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {style.regionExpressions.slice(0, isPro ? undefined : 1).map((reg, idx) => (
                                            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white">
                                                <h4 className="font-bold text-slate-800 mb-1">{reg.region}</h4>
                                                <p className="text-sm text-slate-600">{reg.description}</p>
                                            </div>
                                        ))}

                                        {!isPro && style.regionExpressions.length > 1 && (
                                            <div className="flex items-center justify-center p-6 rounded-xl border border-dashed border-slate-300 bg-slate-50">
                                                <div className="text-center">
                                                    <Lock className="h-5 w-5 text-slate-400 mx-auto mb-1" />
                                                    <p className="text-sm font-medium text-slate-600">Unlock {style.regionExpressions.length - 1} more regions</p>
                                                    <button onClick={() => openPaywall('styles')} className="text-xs font-bold text-indigo-600 hover:underline mt-1">Upgrade</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </section>
                    )}

                    {/* Seasonal Variants Section */}
                    {style.seasonalVariants && style.seasonalVariants.length > 0 && (
                        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <button
                                onClick={() => toggleSection('seasonal')}
                                className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors"
                            >
                                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-amber-600" />
                                    Seasonal Variants
                                </h2>
                                {openSections['seasonal'] ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                            </button>

                            {openSections['seasonal'] && (
                                <div className="p-6 border-t border-slate-200">
                                    <div className="space-y-4">
                                        {style.seasonalVariants.slice(0, isPro ? undefined : 1).map((season, idx) => (
                                            <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white">
                                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xs uppercase">
                                                    {season.season.substring(0, 3)}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-800 mb-1">{season.season}</h4>
                                                    <p className="text-sm text-slate-600">{season.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                        {!isPro && style.seasonalVariants.length > 1 && (
                                            <div className="p-4 text-center bg-slate-50 rounded-xl border border-slate-200">
                                                <p className="text-sm text-slate-500">More seasonal variants available for Pro users.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </section>
                    )}

                    {/* Experimental Variants Section */}
                    {style.experimentalVariants && style.experimentalVariants.length > 0 && (
                        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden border-l-4 border-l-rose-500">
                            <button
                                onClick={() => toggleSection('experimental')}
                                className="w-full flex items-center justify-between p-6 bg-rose-50 hover:bg-rose-100 transition-colors"
                            >
                                <h2 className="text-xl font-bold text-rose-900 flex items-center gap-2">
                                    <FlaskConical className="h-5 w-5 text-rose-600" />
                                    Lab Exclusive / Experimental
                                </h2>
                                {openSections['experimental'] ? <ChevronUp className="h-5 w-5 text-rose-400" /> : <ChevronDown className="h-5 w-5 text-rose-400" />}
                            </button>

                            {openSections['experimental'] && (
                                <div className="p-6 border-t border-rose-100 bg-rose-50/30">
                                    <ProFeatureLock featureKey="styles.full_access" customMessage="Unlock experimental lab variants.">
                                        <div className="grid grid-cols-1 gap-4">
                                            {style.experimentalVariants.map((exp, idx) => (
                                                <div key={idx} className="p-4 rounded-xl border border-rose-200 bg-white">
                                                    <h4 className="font-bold text-slate-800 mb-1 flex items-center gap-2">
                                                        {exp.title}
                                                        <span className="text-[10px] font-bold px-2 py-0.5 bg-rose-100 text-rose-700 rounded-full">EXPERIMENTAL</span>
                                                    </h4>
                                                    <p className="text-sm text-slate-600 mb-2">{exp.description}</p>
                                                    {exp.cautionPoints && (
                                                        <div className="text-xs text-rose-600 bg-rose-50 p-2 rounded">
                                                            <span className="font-bold">Caution:</span> {exp.cautionPoints.join(', ')}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </ProFeatureLock>
                                </div>
                            )}
                        </section>
                    )}

                    {/* Learn Connections */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Related Foundations</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {allLearnArticles.filter(article =>
                                article.tags?.some(t => style.name.toLowerCase().includes(t.toLowerCase()) || style.category.toLowerCase().includes(t.toLowerCase()))
                            ).slice(0, 4).map(article => (
                                <a
                                    key={article.id}
                                    href={`#/learn/article/${article.id}`}
                                    className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-lime-500 hover:shadow-md transition-all group"
                                >
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">
                                        {article.category}
                                    </span>
                                    <h4 className="font-bold text-slate-800 group-hover:text-lime-600 transition-colors mb-1">
                                        {article.title}
                                    </h4>
                                </a>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Actions & Tools */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-24">
                        <h3 className="font-bold text-slate-900 mb-4">Apply in DoughLab</h3>

                        <button
                            onClick={handleLoadCalculator}
                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-lime-500 py-3 px-4 text-white font-bold shadow-md hover:bg-lime-600 transition-all mb-3"
                        >
                            <CalculatorIcon className="h-5 w-5" />
                            Load Formula
                        </button>

                        <div className="space-y-2 mb-6">
                            <button className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-sm font-medium text-slate-700 transition-colors">
                                <span>Compare with...</span>
                                <ArrowLeftIcon className="h-4 w-4 rotate-180" />
                            </button>
                            <button className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-sm font-medium text-slate-700 transition-colors">
                                <span>MyLab Experiments</span>
                                <BeakerIcon className="h-4 w-4" />
                            </button>
                        </div>

                        {renderRecommendation()}

                        <div className="mt-6 pt-6 border-t border-slate-100">
                            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Recommended Experiments</h4>
                            <ul className="space-y-2">
                                {style.parameterSensitivity && style.parameterSensitivity.length > 0 ? (
                                    style.parameterSensitivity.slice(0, 3).map((param, idx) => (
                                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                                            Test sensitivity: {param}
                                        </li>
                                    ))
                                ) : (
                                    <>
                                        <li className="text-xs text-slate-600 flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                                            Try increasing hydration by 2% to open crumb.
                                        </li>
                                        <li className="text-xs text-slate-600 flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                                            Test cold fermentation vs room temp (24h).
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </LibraryPageLayout>
    );
};
