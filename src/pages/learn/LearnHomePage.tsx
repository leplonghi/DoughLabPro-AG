import React, { useState } from 'react';
import { useRouter } from '@/contexts/RouterContext';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import AppSurface from '@/components/ui/AppSurface';
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
import { getPageMeta } from '@/app/appShell';

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
        <LibraryPageLayout
            pageHeader={{
                page: 'learn',
                children: (
                    <>
                        <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                            {totalArticles} articles in the library
                        </div>
                        <form onSubmit={handleSearch} className="relative w-full min-w-[280px] max-w-md">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon className="h-4 w-4 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 py-3 text-sm text-slate-700 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-dlp-brand/30 focus:border-dlp-brand transition-all"
                                placeholder={t('learn.search_placeholder', { defaultValue: 'Search topics...' })}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>
                    </>
                ),
            }}
        >
            <div className="mx-auto max-w-7xl animate-fade-in pb-12">
                <div className="px-4 sm:px-6 space-y-8">
                    {featuredArticle && (
                        <AppSurface className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                            onClick={() => navigate('learn/article', featuredArticle.id)}>
                            <div className="md:flex h-full">
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
                                        <div className="text-dlp-brand-hover flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer">{t('learn.read_article')}<ArrowRightIcon className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AppSurface>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {LEARN_TRACKS.map((track) => {
                            const trackCategories = LEARN_CATEGORIES.filter(cat => cat.trackId === track.id);
                            const TrackIcon = TRACK_ICONS[track.iconName] || AcademicCapIcon;
                            const colors = TRACK_COLORS[track.colorTheme] || TRACK_COLORS['lime'];

                            return (
                                <AppSurface key={track.id} className="p-5 h-full flex flex-col">
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
                                                    group relative overflow-hidden rounded-2xl border border-stone-100 
                                                    cursor-pointer bg-stone-50/50 hover:bg-white hover:shadow-md
                                                    transition-all duration-200 p-3 flex items-center gap-3
                                                `}
                                            >
                                                <div className={`
                                                    shrink-0 p-2 rounded-md bg-white border border-stone-200 text-stone-400
                                                    transition-colors duration-200 ${colors.icon} ${colors.border}
                                                `}>
                                                    {React.cloneElement(category.icon as React.ReactElement, { className: "w-4 h-4" })}
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h4 className={`text-sm font-bold text-slate-700 truncate transition-colors ${colors.text}`}>
                                                        {category.title}
                                                    </h4>
                                                    <p className="text-[11px] text-slate-500 truncate group-hover:text-slate-600">
                                                        {category.description}
                                                    </p>
                                                </div>

                                                <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                                                    <ArrowRightIcon className={`w-3.5 h-3.5 ${colors.icon}`} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </AppSurface>
                            );
                        })}
                    </div>

                    <AppSurface className="p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4 bg-stone-50/70">
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
                    </AppSurface>
                </div>
            </div>
        </LibraryPageLayout>
    );
};

export default LearnHomePage;


