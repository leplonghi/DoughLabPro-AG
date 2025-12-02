import React from 'react';
import { DoughStyleDefinition } from '@/types/styles';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CategoryBadge } from '@/components/ui/CategoryBadge';
import { TechnicalBadge } from '@/components/ui/TechnicalBadge';
import { useUser } from '@/contexts/UserProvider';
import {
    BookOpen,
    Beaker,
    Clock,
    Globe,
    Sparkles,
    ArrowLeft,
    Heart,
    Calculator,
    Share2,
    FileText,
    AlertTriangle,
    ChefHat,
    Thermometer,
    Scale,
    MapPin,
    Calendar
} from 'lucide-react';
import ShareButton from '@/components/ui/ShareButton';
import PDFExportButton from '@/components/ui/PDFExportButton';
import { allLearnArticles } from '@/data/learn';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import { AdCard } from "@/marketing/ads/AdCard";
import { SocialShare } from "@/marketing/social/SocialShare";

interface StyleDetailPageProps {
    style: DoughStyleDefinition;
    onLoadAndNavigate: (style: DoughStyleDefinition) => void;
    onBack: () => void;
}

export const StyleDetailPage: React.FC<StyleDetailPageProps> = ({ style, onLoadAndNavigate, onBack }) => {
    const { isFavorite, toggleFavorite, userLoading, planLoading } = useUser();

    if (userLoading || planLoading) {
        return (
            <LibraryPageLayout>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-500"></div>
                </div>
            </LibraryPageLayout>
        );
    }

    const favorited = isFavorite(style.id);

    // Helper to render ranges
    const renderRange = (range: [number, number] | undefined, unit: string = '%') => {
        if (!range) return 'N/A';
        return `${range[0]}-${range[1]}${unit}`;
    };

    return (
        <LibraryPageLayout>
            {/* Sticky Header */}
            <div className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200 px-4 py-3 flex items-center justify-between transition-all mb-6 -mx-4 sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-8 shadow-sm">
                <button onClick={onBack} className="text-sm font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1">
                    <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <span className="font-bold text-slate-800 hidden sm:block">{style.name}</span>
                <div className="flex gap-2">
                    <button
                        onClick={() => toggleFavorite({
                            id: style.id,
                            type: 'style',
                            title: style.name,
                            metadata: { category: style.category }
                        })}
                        className={`p-2 rounded-full hover:bg-slate-100 transition-colors ${favorited ? 'text-pink-500' : 'text-slate-400 hover:text-pink-400'}`}
                        title={favorited ? "Remove from favorites" : "Add to favorites"}
                    >
                        <Heart className={`h-5 w-5 ${favorited ? 'fill-current' : ''}`} />
                    </button>
                    <ShareButton title={style.name} text={style.description} className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors" />
                    <PDFExportButton targetId="style-detail-content" label="Download PDF" className="hidden sm:flex bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-3 py-2 rounded-xl text-sm font-bold" />
                    <LockedTeaser featureKey="calculator.advanced">
                        <button
                            onClick={() => onLoadAndNavigate(style)}
                            className="ml-2 bg-lime-500 hover:bg-lime-600 text-white text-sm font-bold py-2 px-4 rounded-xl shadow-sm transition-all flex items-center gap-2"
                        >
                            <Calculator className="h-4 w-4" />
                            <span className="hidden sm:inline">Use in Calculator</span>
                        </button>
                    </LockedTeaser>
                </div>
            </div>

            {/* Hero Section (Spec 2025.3: 16:9 Image) */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg mb-8 group bg-slate-100">
                {style.images?.hero ? (
                    <img
                        src={style.images.hero}
                        alt={style.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#3A6B3A] to-[#558B55] flex items-center justify-center p-8">
                        <div className="text-center opacity-20">
                            <ChefHat className="w-24 h-24 mx-auto mb-4" />
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight">{style.name}</h1>
                        </div>
                    </div>
                )}
            </div>

            {/* Title & Metadata Section (Spec 2025.3: Title + Category + Region + Period + Favorite) */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 animate-fade-in">
                <div className="space-y-4 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                        <CategoryBadge category={style.category} />

                        {style.origin?.region && (
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider border border-slate-200">
                                <MapPin className="w-3.5 h-3.5" />
                                <span>{style.origin.region}, {style.origin.country}</span>
                            </div>
                        )}

                        {style.origin?.period && (
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider border border-slate-200">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{style.origin.period}</span>
                            </div>
                        )}

                        {style.isCanonical && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-700 border border-sky-200">
                                Official Standard
                            </span>
                        )}

                        {style.isPro && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-lime-500 to-green-600 text-white shadow-sm">
                                PRO
                            </span>
                        )}
                    </div>

                    <div>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
                            {style.name}
                        </h1>
                        <p className="text-xl text-slate-500 font-medium">
                            {style.family || 'Global Dough Style'}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                    <button
                        onClick={() => toggleFavorite({
                            id: style.id,
                            type: 'style',
                            title: style.name,
                            metadata: { category: style.category }
                        })}
                        className={`group flex items-center gap-2 px-5 py-3 rounded-2xl border-2 transition-all duration-300 ${favorited
                            ? 'bg-pink-50 border-pink-200 text-pink-500 shadow-sm'
                            : 'bg-white border-slate-200 text-slate-500 hover:border-pink-200 hover:text-pink-500 hover:bg-pink-50'
                            }`}
                    >
                        <Heart className={`w-6 h-6 ${favorited ? 'fill-current' : 'group-hover:scale-110 transition-transform'}`} />
                        <span className="font-bold hidden sm:inline">{favorited ? 'Saved' : 'Save'}</span>
                    </button>
                </div>
            </div>

            {/* Main Content Grid */}
            <div id="style-detail-content" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

                {/* Left Column (2/3) - UNIFIED DOCUMENT */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 animate-fade-in">

                        {/* 1. Introduction / Dossier */}
                        <div className="prose prose-slate max-w-none">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <FileText className="w-6 h-6 text-slate-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 m-0">
                                    About this Style
                                </h2>
                            </div>

                            <p className="lead text-lg text-slate-700 mb-8 leading-relaxed">{style.description}</p>

                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8">
                                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-teal-600" /> History & Context
                                </h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">{style.history}</p>
                                {style.culturalContext && (
                                    <div className="pl-4 border-l-4 border-teal-500 italic text-slate-600">
                                        {style.culturalContext}
                                    </div>
                                )}
                            </div>
                        </div>

                        <AdCard context="style_detail_bottom" className="my-8" />
                        <hr className="my-10 border-slate-100" />

                        {/* 2. Formula */}
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Scale className="w-6 h-6 text-indigo-600" /> Base Formula (Baker's %)
                            </h3>
                            <LockedTeaser featureKey="styles.advancedSpecs">
                                <div className="overflow-hidden border rounded-xl border-slate-200 shadow-sm">
                                    <table className="w-full text-sm text-left">
                                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                                            <tr>
                                                <th className="px-6 py-4 font-bold">Ingredient</th>
                                                <th className="px-6 py-4 font-bold text-right">Min %</th>
                                                <th className="px-6 py-4 font-bold text-right">Max %</th>
                                                <th className="px-6 py-4 font-bold text-right">Typical</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 bg-white">
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 font-medium text-slate-900">Flour</td>
                                                <td className="px-6 py-4 text-right text-slate-600">100%</td>
                                                <td className="px-6 py-4 text-right text-slate-600">100%</td>
                                                <td className="px-6 py-4 text-right text-slate-600">100%</td>
                                            </tr>
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 font-medium text-slate-900">Hydration (Water)</td>
                                                <td className="px-6 py-4 text-right text-slate-600">{style.technicalProfile.hydration[0]}%</td>
                                                <td className="px-6 py-4 text-right text-slate-600">{style.technicalProfile.hydration[1]}%</td>
                                                <td className="px-6 py-4 text-right font-bold text-indigo-600">
                                                    {Math.round((style.technicalProfile.hydration[0] + style.technicalProfile.hydration[1]) / 2)}%
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 font-medium text-slate-900">Salt</td>
                                                <td className="px-6 py-4 text-right text-slate-600">{style.technicalProfile.salt[0]}%</td>
                                                <td className="px-6 py-4 text-right text-slate-600">{style.technicalProfile.salt[1]}%</td>
                                                <td className="px-6 py-4 text-right font-bold text-slate-700">
                                                    {((style.technicalProfile.salt[0] + style.technicalProfile.salt[1]) / 2).toFixed(1)}%
                                                </td>
                                            </tr>
                                            {style.technicalProfile.fat && (
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                    <td className="px-6 py-4 font-medium text-slate-900">Fat / Oil</td>
                                                    <td className="px-6 py-4 text-right text-slate-600">{style.technicalProfile.fat[0]}%</td>
                                                    <td className="px-6 py-4 text-right text-slate-600">{style.technicalProfile.fat[1]}%</td>
                                                    <td className="px-6 py-4 text-right font-bold text-slate-700">
                                                        {Math.round((style.technicalProfile.fat[0] + style.technicalProfile.fat[1]) / 2)}%
                                                    </td>
                                                </tr>
                                            )}
                                            {style.technicalProfile.sugar && (
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                    <td className="px-6 py-4 font-medium text-slate-900">Sugar</td>
                                                    <td className="px-6 py-4 text-right text-slate-600">{style.technicalProfile.sugar[0]}%</td>
                                                    <td className="px-6 py-4 text-right text-slate-600">{style.technicalProfile.sugar[1]}%</td>
                                                    <td className="px-6 py-4 text-right font-bold text-slate-700">
                                                        {Math.round((style.technicalProfile.sugar[0] + style.technicalProfile.sugar[1]) / 2)}%
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </LockedTeaser>
                        </div>

                        <hr className="my-10 border-slate-100" />

                        {/* 3. Tips & Risks (Unified) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-amber-500" /> Pro Tips
                                </h3>
                                <ul className="space-y-4">
                                    {style.notes?.map((note, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 shadow-sm" />
                                            <span>{note}</span>
                                        </li>
                                    ))}
                                    {(!style.notes || style.notes.length === 0) && (
                                        <li className="text-sm text-slate-500 italic">No specific pro tips available.</li>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-rose-500" /> Watch Out
                                </h3>
                                <ul className="space-y-4">
                                    {style.risks ? style.risks.map((risk, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0 shadow-sm" />
                                            <span>{risk}</span>
                                        </li>
                                    )) : (
                                        <li className="text-sm text-slate-500 italic">No specific risks noted.</li>
                                    )}
                                </ul>
                            </div>
                        </div>

                        <hr className="my-10 border-slate-100" />

                        {/* 4. Related Knowledge (Integrated) */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-indigo-600" /> Related Articles
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {allLearnArticles
                                    .filter(article =>
                                        article.tags?.some(tag => style.tags?.includes(tag))
                                    )
                                    .slice(0, 4)
                                    .map(article => (
                                        <div key={article.id} className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group cursor-pointer bg-slate-50/50">
                                            {article.thumbnailUrl && (
                                                <img src={article.thumbnailUrl} alt={article.title} className="w-16 h-16 rounded-lg object-cover shadow-sm" />
                                            )}
                                            <div>
                                                <h4 className="font-bold text-slate-800 text-sm group-hover:text-indigo-700 line-clamp-2 mb-1">{article.title}</h4>
                                                <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{article.category}</span>
                                            </div>
                                        </div>
                                    ))}
                                {allLearnArticles.filter(article => article.tags?.some(tag => style.tags?.includes(tag))).length === 0 && (
                                    <p className="text-sm text-slate-500 italic">Explore the Learn section for general baking science.</p>
                                )}
                            </div>
                            <SocialShare type="style" title={style.name} data={style} className="mt-8" />
                        </div>

                    </div>
                </div>

                {/* Right Column (1/3) - SIDEBAR */}
                <div className="space-y-6">

                    {/* Technical Profile Panel */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
                        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800">
                            <h3 className="font-bold text-white flex items-center gap-2">
                                <Beaker className="w-5 h-5 text-lime-400" /> Technical Profile
                            </h3>
                        </div>
                        <LockedTeaser featureKey="styles.advancedSpecs">
                            <div className="p-6 space-y-8">

                                {/* Hydration Meter */}
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-slate-500 font-medium">Hydration</span>
                                        <span className="font-bold text-slate-900">{renderRange(style.technicalProfile.hydration)}</span>
                                    </div>
                                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                                            style={{ width: `${Math.min(100, Math.max(0, (style.technicalProfile.hydration[1] || 60)))}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2">
                                        Target water content relative to flour weight.
                                    </p>
                                </div>

                                {/* Key Stats Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                                        <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1 tracking-wider">Difficulty</span>
                                        <span className={`font-bold text-sm ${style.technicalProfile.difficulty === 'Easy' ? 'text-green-600' :
                                            style.technicalProfile.difficulty === 'Medium' ? 'text-amber-600' :
                                                'text-red-600'
                                            }`}>
                                            {style.technicalProfile.difficulty}
                                        </span>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                                        <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1 tracking-wider">Oven Temp</span>
                                        <span className="font-bold text-sm text-slate-900">
                                            {style.technicalProfile.oven?.temperatureC ? `${style.technicalProfile.oven.temperatureC[0]}-${style.technicalProfile.oven.temperatureC[1]}°C` : 'Variable'}
                                        </span>
                                    </div>
                                </div>

                                {/* Fermentation Details */}
                                <div>
                                    <span className="text-xs text-slate-500 uppercase font-bold block mb-3 tracking-wider">Fermentation Process</span>
                                    <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 text-sm space-y-3">
                                        {typeof style.technicalProfile.fermentation === 'object' ? (
                                            <>
                                                <div className="flex justify-between items-center border-b border-indigo-100 pb-2">
                                                    <span className="text-indigo-700">Bulk Ferment</span>
                                                    <span className="font-bold text-indigo-900">{style.technicalProfile.fermentation.bulk}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-indigo-700">Final Proof</span>
                                                    <span className="font-bold text-indigo-900">{style.technicalProfile.fermentation.proof || 'N/A'}</span>
                                                </div>
                                            </>
                                        ) : (
                                            <span className="text-indigo-900 font-medium">Variable Process</span>
                                        )}
                                    </div>
                                </div>

                                {/* Quick Facts List */}
                                <div>
                                    <span className="text-xs text-slate-500 uppercase font-bold block mb-3 tracking-wider">Origin & Type</span>
                                    <ul className="space-y-3">
                                        <li className="flex items-center justify-between text-sm">
                                            <span className="text-slate-500">Country</span>
                                            <span className="font-medium text-slate-900">{style.origin.country}</span>
                                        </li>
                                        {style.origin.region && (
                                            <li className="flex items-center justify-between text-sm">
                                                <span className="text-slate-500">Region</span>
                                                <span className="font-medium text-slate-900">{style.origin.region}</span>
                                            </li>
                                        )}
                                        <li className="flex items-center justify-between text-sm">
                                            <span className="text-slate-500">Category</span>
                                            <span className="font-medium text-slate-900 capitalize">{style.category.replace('_', ' ')}</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Recommended Tools */}
                                <div>
                                    <span className="text-xs text-slate-500 uppercase font-bold block mb-3 tracking-wider">Recommended Tools</span>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md border border-slate-200">Scale</span>
                                        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md border border-slate-200">Scraper</span>
                                        {style.technicalProfile.oven?.type === 'wood_fired' && (
                                            <span className="px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-md border border-orange-100">Peel</span>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </LockedTeaser>
                    </div>

                </div>
            </div>
        </LibraryPageLayout>
    );
};
