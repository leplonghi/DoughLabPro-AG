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
    const { t } = useTranslation(['common', 'marketing']);
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
            <div className="mx-auto max-w-7xl animate-fade-in pb-12">
                {/* 1. COMPACT HERO SECTION */}
                <div className="mb-6 mx-4 sm:mx-6">
                    <div className="bg-gradient-to-br from-[#3A6B3A] to-[#558B55] rounded-2xl p-6 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-left max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-900/30 border border-lime-500/30 text-lime-200 text-[10px] font-bold uppercase tracking-wider mb-3">
                                    <AcademicCapIcon className="w-3.5 h-3.5" />{t('learn.doughlab_academy')}</div>
                                <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight leading-tight">
                                    Master the Art & Science
                                </h1>
                                <p className="text-sm md:text-base text-lime-100/90 leading-relaxed max-w-lg">
                                    A complete curriculum for the modern pizzaiolo. From flour chemistry to oven thermodynamics.
                                </p>
                            </div>

                            {/* Compact Search Bar in Hero */}
                            <form onSubmit={handleSearch} className="relative w-full md:w-80 shrink-0">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <MagnifyingGlassIcon className="h-4 w-4 text-lime-200" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-lime-400/30 text-white placeholder-lime-200/70 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:bg-white/20 transition-all font-medium"
                                    placeholder={t('learn.search_placeholder', { defaultValue: 'Search topics...' })}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="px-4 sm:px-6 space-y-8">
                    {/* 2. FEATURED CONTENT CARD (Standardized) */}

                    {featuredArticle && (
                        <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
                            onClick={() => navigate('learn/article', featuredArticle.id)}>
                            <div className="md:flex h-full">
                                {/* Featured Image Section */}
                                <div
                                    className="md:w-1/3 relative h-40 md:h-auto bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${(() => {
                                            const cat = LEARN_CATEGORIES.find(c => c.title === featuredArticle.category);
                                            const track = cat ? LEARN_TRACKS.find(t => t.id === cat.trackId) : null;
                                            return track ? TRACK_IMAGES[track.id] : TRACK_IMAGES['science'];
                                        })()
                                            })`
                                    }}
                                >
                                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-sm border border-stone-100">{t('learn.featured')}</div>
                                </div>
                                <div className="p-5 md:w-2/3 flex flex-col justify-center">
                                    <h2 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-lime-700 transition-colors">
                                        {featuredArticle.title}
                                    </h2>
                                    <p className="text-xs text-slate-500 mb-3 line-clamp-2 leading-relaxed">
                                        {featuredArticle.subtitle}
                                    </p>
                                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                                        <div className="flex items-center gap-1">
                                            <ClockIcon className="w-3.5 h-3.5" />
                                            10 min read
                                        </div>
                                        <div className="text-lime-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer">{t('learn.read_article')}<ArrowRightIcon className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 3. TRACKS - Compact Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {LEARN_TRACKS.map((track) => {
                            const trackCategories = LEARN_CATEGORIES.filter(cat => cat.trackId === track.id);
                            const TrackIcon = TRACK_ICONS[track.iconName] || AcademicCapIcon;
                            const colors = TRACK_COLORS[track.colorTheme] || TRACK_COLORS['lime'];

                            return (
                                <section key={track.id} className="bg-white rounded-xl border border-stone-100 shadow-sm p-5 h-full flex flex-col">
                                    {/* Track Header */}
                                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-stone-50">
                                        <div className={`p-2 rounded-lg ${colors.bg} ${colors.icon} border ${colors.border}`}>
                                            <TrackIcon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-slate-900 leading-tight">{track.title}</h3>
                                            <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">{track.description}</p>
                                        </div>
                                    </div>

                                    {/* Categories List (Compact) */}
                                    <div className="grid grid-cols-1 gap-2.5 flex-1">
                                        {trackCategories.map((category) => (
                                            <div
                                                key={category.id}
                                                onClick={() => navigate('learn/category', encodeURIComponent(category.id))}
                                                className={`
                                                    group relative overflow-hidden rounded-lg border border-stone-100 
                                                    cursor-pointer bg-stone-50/50 hover:bg-white
                                                    hover:shadow-md hover:border-${track.colorTheme}-200
                                                    transition-all duration-200 p-3 flex items-center gap-3
                                                `}
                                            >
                                                {/* Icon Box */}
                                                <div className={`
                                                    shrink-0 p-2 rounded-md bg-white border border-stone-200 text-stone-400
                                                    group-hover:text-${track.colorTheme}-600 group-hover:border-${track.colorTheme}-200
                                                    transition-colors duration-200
                                                `}>
                                                    {React.cloneElement(category.icon as React.ReactElement, { className: "w-4 h-4" })}
                                                </div>

                                                {/* Text Content */}
                                                <div className="flex-1 min-w-0">
                                                    <h4 className={`text-sm font-bold text-slate-700 group-hover:text-${track.colorTheme}-700 truncate transition-colors`}>
                                                        {category.title}
                                                    </h4>
                                                    <p className="text-[11px] text-slate-500 truncate group-hover:text-slate-600">
                                                        {category.description}
                                                    </p>
                                                </div>

                                                {/* Arrow */}
                                                <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                                                    <ArrowRightIcon className={`w-3.5 h-3.5 text-${track.colorTheme}-400`} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>

                    {/* 4. FOOTER CTA (Compact) */}
                    <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-left">
                            <h2 className="text-sm font-bold text-slate-900 mb-0.5">{t('learn.explore_the_full_library')}</h2>
                            <p className="text-slate-500 text-xs">
                                Browse our complete collection of scientific articles and guides.
                            </p>
                        </div>
                        <button
                            onClick={() => navigate('learn/all')}
                            className="shrink-0 bg-white text-slate-700 border border-stone-300 hover:bg-stone-50 hover:border-stone-400 px-4 py-2 rounded-lg font-bold transition-all text-xs shadow-sm uppercase tracking-wide"
                        >{t('learn.view_all_articles')}</button>
                    </div>
                </div>
            </div>
        </LibraryPageLayout>
    );
};

export default LearnHomePage;
