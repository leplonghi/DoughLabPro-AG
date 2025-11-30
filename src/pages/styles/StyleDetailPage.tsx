import React from 'react';
import { DoughStyleDefinition } from '@/types';
import {
    CalculatorIcon,
    BookOpenIcon,
    BeakerIcon,
    FireIcon,
    InfoIcon,
    ClockIcon,
    ShoppingBagIcon,
    ExternalLinkIcon,
    GlobeAltIcon,
    HeartIcon,
} from '@/components/ui/Icons';
import { AFFILIATE_PRODUCTS } from '@/data/affiliateLinks';
import { Logo } from '@/components/ui/Logo';
import { ProFeatureLock } from '@/components/ui/ProFeatureLock';
import { useUser } from '@/contexts/UserProvider';
import PDFExportButton from '@/components/ui/PDFExportButton';
import ShareButton from '@/components/ui/ShareButton';
import { allLearnArticles } from '@/data/learn';

interface StyleDetailPageProps {
    style: DoughStyleDefinition;
    onLoadAndNavigate: (style: DoughStyleDefinition) => void;
    onBack: () => void;
}

export const StyleDetailPage: React.FC<StyleDetailPageProps> = ({ style, onLoadAndNavigate, onBack }) => {
    const { hasProAccess, openPaywall, isFavorite, toggleFavorite } = useUser();
    const favorited = isFavorite(style.id);

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

    const FormulaTable = () => (
        <div className={`bg-slate-50 rounded-xl border border-slate-200 overflow-hidden`}>
            <table className="w-full text-sm text-left">
                <thead className="bg-slate-100 text-slate-500 uppercase text-xs">
                    <tr>
                        <th className="px-4 py-3">Ingredient</th>
                        <th className="px-4 py-3 text-right">% (Baker's)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                    {style.ingredients.map(ing => (
                        <tr key={ing.id}>
                            <td className="px-4 py-3 font-medium text-slate-700">{ing.name}</td>
                            <td className="px-4 py-3 text-right font-mono text-slate-600">{ing.bakerPercentage}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const TechnicalParams = () => (
        <div className={`bg-slate-50 p-6 rounded-xl border border-slate-200`}>
            <h3 className="font-bold text-slate-900 mb-4">Technical Parameters</h3>
            <div className="space-y-4">
                <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold">Hydration</p>
                    <p className="text-xl font-bold text-slate-800">{style.technical.hydration}%</p>
                </div>
                <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold flex items-center gap-1">
                        <ClockIcon className="h-3 w-3" /> Fermentation
                    </p>
                    <p className="text-base font-medium text-slate-800">{style.technical.fermentation}</p>
                </div>
                <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold flex items-center gap-1">
                        <FireIcon className="h-3 w-3" /> Oven Temp
                    </p>
                    <p className="text-base font-medium text-slate-800">{style.technical.bakingTempC}°C</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="mx-auto max-w-4xl animate-[fadeIn_0.3s_ease-in_out]">
            {/* Back Button */}
            <button onClick={onBack} className="mb-6 text-sm font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 no-print">
                &larr; Back to Library
            </button>

            <div id="style-detail-content" className="bg-white rounded-2xl shadow-lg ring-1 ring-slate-200/50 overflow-hidden">
                {/* Print-only Header */}
                <div className="hidden print-header items-center justify-between p-6 border-b border-slate-200 mb-4">
                    <Logo className="h-8 w-auto" />
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Advanced Dough Science</p>
                </div>

                {/* Header - Updated to Light Premium Design */}
                <div className="bg-gradient-to-br from-slate-50 to-white p-8 border-b border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="flex justify-between items-start relative z-10">
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{style.name}</h1>
                                <button
                                    onClick={() => toggleFavorite({
                                        id: style.id,
                                        type: 'style',
                                        title: style.name,
                                        metadata: { category: style.category }
                                    })}
                                    className={`p-2 rounded-full transition-all no-print ${favorited ? 'bg-pink-100 text-pink-500' : 'bg-white/50 text-slate-400 hover:text-pink-500 hover:bg-white'}`}
                                    title={favorited ? "Remove from favorites" : "Add to favorites"}
                                >
                                    <HeartIcon className={`h-6 w-6 ${favorited ? 'fill-current' : ''}`} />
                                </button>
                            </div>
                            <p className="text-slate-600 mt-2 text-lg leading-relaxed max-w-2xl">{style.description}</p>
                            <div className="flex gap-3 mt-5 text-sm font-bold text-slate-600">
                                <span className="bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span>
                                    {style.category}
                                </span>
                                <span className="bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm flex items-center gap-1">
                                    <GlobeAltIcon className="h-3 w-3 text-slate-400" />
                                    {style.country}
                                </span>
                                {style.year && (
                                    <span className="bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm flex items-center gap-1">
                                        <ClockIcon className="h-3 w-3 text-slate-400" />
                                        {style.year}
                                    </span>
                                )}
                            </div>

                            {/* Action Bar */}
                            <div className="flex flex-wrap items-center gap-3 mt-6 no-print">
                                <PDFExportButton
                                    targetId="style-detail-content"
                                    label="Download PDF"
                                    className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
                                />
                                <ShareButton
                                    title={style.name}
                                    text={`Check out this dough style: ${style.name}`}
                                    className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
                                />
                            </div>
                        </div>
                        {style.isPro && (
                            <span className="bg-gradient-to-r from-lime-500 to-lime-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md animate-pulse">
                                PRO
                            </span>
                        )}
                    </div>
                </div>

                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Technical Data */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* History Section - Always Visible */}
                        <section>
                            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-3">
                                <BookOpenIcon className="h-5 w-5 text-lime-500" />
                                History & Context
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                {style.history}
                            </p>
                        </section>

                        {/* Formula Section - Partially Locked for Pro */}
                        <section>
                            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                                <BeakerIcon className="h-5 w-5 text-lime-500" />
                                Base Formula
                            </h2>
                            {style.isPro ? (
                                <ProFeatureLock
                                    featureKey="styles.full_access"
                                    customMessage="Full style specs and baker's percentages are available in Pro."
                                >
                                    <FormulaTable />
                                </ProFeatureLock>
                            ) : (
                                <FormulaTable />
                            )}
                        </section>

                        {/* Notes & Risks */}
                        {(style.notes || style.risks) && (
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {style.risks && (
                                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                                        <h3 className="font-bold text-amber-800 mb-2 text-sm uppercase tracking-wide">Watch Out</h3>
                                        <ul className="list-disc list-inside text-sm text-amber-900 space-y-1">
                                            {style.risks.map((r, i) => <li key={i}>{r}</li>)}
                                        </ul>
                                    </div>
                                )}
                                {style.notes && (
                                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                        <h3 className="font-bold text-blue-800 mb-2 text-sm uppercase tracking-wide">Chef's Notes</h3>
                                        <ul className="list-disc list-inside text-sm text-blue-900 space-y-1">
                                            {style.notes.map((n, i) => <li key={i}>{n}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </section>
                        )}

                        {/* Learn Foundations */}
                        <section>
                            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                                <BookOpenIcon className="h-5 w-5 text-lime-500" />
                                Learn Foundations
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {allLearnArticles.filter(article =>
                                    article.tags?.some(t => style.name.toLowerCase().includes(t.toLowerCase()) || style.category.toLowerCase().includes(t.toLowerCase())) ||
                                    article.practicalApplications?.some(app => app.toLowerCase().includes(style.name.toLowerCase()))
                                ).slice(0, 6).map(article => (
                                    <a
                                        key={article.id}
                                        href={`#/learn/${encodeURIComponent(article.category)}/${article.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-lime-500/50 hover:shadow-md transition-all group"
                                    >
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">
                                            {article.category}
                                        </span>
                                        <h4 className="font-bold text-slate-800 group-hover:text-lime-600 transition-colors mb-1 line-clamp-1">
                                            {article.title}
                                        </h4>
                                        <p className="text-xs text-slate-500 line-clamp-2">
                                            {article.subtitle}
                                        </p>
                                    </a>
                                ))}
                                {allLearnArticles.filter(article =>
                                    article.tags?.some(t => style.name.toLowerCase().includes(t.toLowerCase()) || style.category.toLowerCase().includes(t.toLowerCase())) ||
                                    article.practicalApplications?.some(app => app.toLowerCase().includes(style.name.toLowerCase()))
                                ).length === 0 && (
                                        <p className="text-sm text-slate-500 col-span-2 italic">
                                            Explore our <a href="#/learn" className="text-lime-600 hover:underline">Learn Library</a> for general baking science.
                                        </p>
                                    )}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Parameters & Action */}
                    <div className="space-y-6">
                        {style.isPro ? (
                            <ProFeatureLock
                                featureKey="styles.full_access"
                                customMessage="Technical Parameters"
                            >
                                <TechnicalParams />
                            </ProFeatureLock>
                        ) : (
                            <TechnicalParams />
                        )}

                        {style.isPro ? (
                            <ProFeatureLock featureKey="styles.full_access" customMessage={`Pro Style: ${style.name}`}>
                                <button
                                    onClick={() => onLoadAndNavigate(style)}
                                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-lime-500 py-4 px-6 text-lg font-bold text-white shadow-lg shadow-lime-200 transition-all hover:bg-lime-600 hover:-translate-y-1 active:translate-y-0 no-print"
                                >
                                    <CalculatorIcon className="h-6 w-6" />
                                    Load into Calculator
                                </button>
                            </ProFeatureLock>
                        ) : (
                            <button
                                onClick={() => onLoadAndNavigate(style)}
                                className="w-full flex items-center justify-center gap-2 rounded-xl bg-lime-500 py-4 px-6 text-lg font-bold text-white shadow-lg shadow-lime-200 transition-all hover:bg-lime-600 hover:-translate-y-1 active:translate-y-0 no-print"
                            >
                                <CalculatorIcon className="h-6 w-6" />
                                Load into Calculator
                            </button>
                        )}

                        <p className="text-xs text-center text-slate-400">
                            This will configure the calculator with the base formula for this style.
                        </p>

                        {renderRecommendation()}

                        {/* Soft Callout for Free Styles */}
                        {!style.isPro && !hasProAccess && (
                            <div className="mt-8 p-4 bg-gradient-to-r from-slate-50 to-lime-50 rounded-lg border border-lime-100 text-center no-print">
                                <p className="text-sm font-bold text-slate-800 mb-2">Want to go deeper?</p>
                                <p className="text-xs text-slate-600 mb-3">Pro unlocks expert-level techniques and insights for all styles.</p>
                                <button
                                    onClick={() => openPaywall('styles')}
                                    className="text-xs font-bold text-lime-600 hover:underline"
                                >
                                    Learn about Pro &rarr;
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};
