import React, { useState } from 'react';
import { useRouter } from '@/contexts/RouterContext';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import { learnContent } from '@/data/learn-content';
import { useTranslation } from '@/i18n';
import {
    SparklesIcon,
    MagnifyingGlassIcon,
    ArrowRightIcon,
    AcademicCapIcon,
    ClockIcon
} from '@/components/ui/Icons';
import { LEARN_CATEGORIES } from '@/data/learn/categories';
import { LEARN_TRACKS } from '@/data/learn/tracks';
import { TRACK_ICONS, TRACK_IMAGES, TRACK_COLORS } from '@/data/learn/ui-config';

const LearnHomePage: React.FC = () => {
    const { navigate } = useRouter();
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate('learn/search', { q: searchQuery });
        }
    };

    // Calculate generic stats
    const totalArticles = Object.keys(learnContent).length;
    // Dynamic featured article selection (could be improved to rotate)
    const featuredArticleId = 'fermentation-basics';
    const featuredArticle = learnContent[featuredArticleId] || Object.values(learnContent)[0];

    return (
        <LibraryPageLayout>
            <div className="mx-auto max-w-7xl animate-fade-in pb-20">
                {/* 1. STANDARD HERO SECTION (Green Gradient) */}
                <div className="mb-8 mx-4 sm:mx-6">
                    <div className="bg-gradient-to-br from-[#3A6B3A] to-[#558B55] rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-900/50 border border-lime-700/50 text-lime-300 text-xs font-bold uppercase tracking-wider mb-4">
                                <AcademicCapIcon className="w-4 h-4" />
                                DoughLab Academy
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight">
                                Master the Art & Science
                            </h1>
                            <p className="text-base md:text-lg text-lime-100/90 mb-6 leading-relaxed">
                                A complete curriculum for the modern pizzaiolo. From flour chemistry to oven thermodynamics.
                            </p>

                            {/* Search Bar - Integrated in Hero for Learn Page or below? keeping in hero for now as it looks good centered here, but using standard styles */}
                            <form onSubmit={handleSearch} className="relative max-w-lg mx-auto">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    <MagnifyingGlassIcon className="h-5 w-5 text-lime-200" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-lime-400/30 text-white placeholder-lime-200/70 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:bg-white/20 transition-all font-medium"
                                    placeholder={t('learn.search_placeholder', { defaultValue: 'Search topics...' })}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="px-4 sm:px-6 space-y-12">
                    {/* 2. FEATURED CONTENT CARD (Standardized) */}
                    {featuredArticle && (
                        <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
                            onClick={() => navigate('learn/article', featuredArticle.id)}>
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-stone-100 relative h-48 md:h-auto flex items-center justify-center">
                                    <SparklesIcon className="w-12 h-12 text-stone-300" />
                                    <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-stone-600 shadow-sm border border-stone-100">
                                        Featured
                                    </div>
                                </div>
                                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                                    <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-lime-700 transition-colors">
                                        {featuredArticle.title}
                                    </h2>
                                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                                        {featuredArticle.subtitle}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <ClockIcon className="w-3.5 h-3.5" />
                                            10 min
                                        </div>
                                        <div className="text-lime-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            Read Article <ArrowRightIcon className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 3. TRACKS */}
                    <div className="space-y-10">
                        {LEARN_TRACKS.map((track) => {
                            const trackCategories = LEARN_CATEGORIES.filter(cat => cat.trackId === track.id);
                            const TrackIcon = TRACK_ICONS[track.iconName] || AcademicCapIcon;
                            const colors = TRACK_COLORS[track.colorTheme] || TRACK_COLORS['lime'];
                            const bgImage = TRACK_IMAGES[track.id] || TRACK_IMAGES['fundamentals'];

                            return (
                                <section key={track.id}>
                                    <div className="flex items-center gap-3 mb-6 px-1">
                                        <div className={`p-2 rounded-lg ${colors.bg} ${colors.icon} border ${colors.border}`}>
                                            <TrackIcon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900">{track.title}</h3>
                                            <p className="text-slate-500 text-xs">{track.description}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {trackCategories.map((category) => (
                                            <div
                                                key={category.id}
                                                onClick={() => navigate('learn/category', encodeURIComponent(category.id))}
                                                className="group relative overflow-hidden rounded-xl border border-stone-200 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 aspect-[16/9] sm:aspect-[2/1] lg:aspect-[16/9]"
                                            >
                                                {/* Background Image */}
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                                    style={{ backgroundImage: `url(${bgImage})` }}
                                                />

                                                {/* Dark Overlay Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:via-black/60 transition-colors" />

                                                {/* Content */}
                                                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                                                    <div className="mb-auto">
                                                        <div className={`inline-flex p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white mb-2`}>
                                                            {React.cloneElement(category.icon as React.ReactElement, { className: "w-5 h-5" })}
                                                        </div>
                                                    </div>

                                                    <h4 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-lime-300 transition-colors">
                                                        {category.title}
                                                    </h4>
                                                    <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100">
                                                        {category.description}
                                                    </p>

                                                    <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                        <ArrowRightIcon className="w-5 h-5 text-lime-400" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>

                    {/* 4. FOOTER CTA (Standardized) */}
                    <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 text-center">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Explore the Full Library</h2>
                        <p className="text-slate-500 mb-6 max-w-xl mx-auto text-sm">
                            Browse our complete collection of scientific articles, recipes, and troubleshooting guides.
                        </p>
                        <button
                            onClick={() => navigate('learn/all')}
                            className="bg-white text-slate-900 border border-stone-300 hover:bg-stone-50 hover:border-stone-400 px-6 py-2 rounded-lg font-bold transition-all text-sm shadow-sm"
                        >
                            View All Articles
                        </button>
                    </div>
                </div>
            </div>
        </LibraryPageLayout>
    );
};

export default LearnHomePage;
