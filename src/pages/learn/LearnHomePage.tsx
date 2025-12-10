import React, { useState } from 'react';
import { useRouter } from '@/contexts/RouterContext';
import { learnContent } from '@/data/learn-content';
import { useTranslation } from '@/i18n';
import {
    SparklesIcon,
    MagnifyingGlassIcon,
    ArrowRightIcon,
    AcademicCapIcon,
    BeakerIcon,
    WrenchScrewdriverIcon,
    AlertTriangleIcon,
    BookOpenIcon,
    ClockIcon
} from '@/components/ui/Icons';
import { LEARN_CATEGORIES } from '@/data/learn/categories';
import { LEARN_TRACKS } from '@/data/learn/tracks';

// Icon Map for dynamic tracks
const TRACK_ICONS: Record<string, React.FC<any>> = {
    'academic': AcademicCapIcon,
    'wrench': WrenchScrewdriverIcon,
    'beaker': BeakerIcon,
    'alert': AlertTriangleIcon,
    'book': BookOpenIcon
};

// Color Map for dynamic tracks (Tailwind classes)
const TRACK_COLORS: Record<string, { bg: string, text: string, border: string, icon: string }> = {
    'emerald': { bg: 'bg-emerald-50', text: 'text-emerald-900', border: 'border-emerald-200', icon: 'text-emerald-600' },
    'blue': { bg: 'bg-blue-50', text: 'text-blue-900', border: 'border-blue-200', icon: 'text-blue-600' },
    'purple': { bg: 'bg-purple-50', text: 'text-purple-900', border: 'border-purple-200', icon: 'text-purple-600' },
    'orange': { bg: 'bg-orange-50', text: 'text-orange-900', border: 'border-orange-200', icon: 'text-orange-600' },
    'lime': { bg: 'bg-lime-50', text: 'text-lime-900', border: 'border-lime-200', icon: 'text-lime-600' }, // Fallback
};

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
        <div className="min-h-screen bg-stone-50 font-sans pb-20">
            {/* 1. ACADEMY HERO */}
            <div className="bg-slate-900 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #84cc16 1px, transparent 1px), radial-gradient(circle at 80% 80%, #38bdf8 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-lime-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <AcademicCapIcon className="w-4 h-4" />
                            DoughLab Academy
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
                            Master the <span className="text-lime-400">Art & Science</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                            A complete curriculum for the modern pizzaiolo. From flour chemistry to oven thermodynamics.
                        </p>

                        {/* Search Bar */}
                        <form onSubmit={handleSearch} className="relative max-w-lg">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:bg-white/20 transition-all font-medium"
                                placeholder={t('learn.search_placeholder', { defaultValue: 'Search topics, science, or techniques...' })}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-lime-500/10 to-transparent pointer-events-none hidden lg:block" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 space-y-16">

                {/* 2. FEATURED CONTENT CARD */}
                {featuredArticle && (
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-200 group cursor-pointer"
                        onClick={() => navigate('learn/article', featuredArticle.id)}>
                        <div className="md:flex">
                            <div className="md:w-2/5 h-64 md:h-auto bg-stone-200 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-lime-100 to-stone-200 flex items-center justify-center">
                                    <SparklesIcon className="w-16 h-16 text-lime-600/50" />
                                </div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                                    Featured Article
                                </div>
                            </div>
                            <div className="p-8 md:w-3/5 flex flex-col justify-center">
                                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-lime-600 transition-colors">
                                    {featuredArticle.title}
                                </h2>
                                <p className="text-slate-500 mb-6 leading-relaxed line-clamp-3">
                                    {featuredArticle.subtitle}
                                </p>
                                <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
                                    <span className="flex items-center gap-1.5 bg-stone-100 px-3 py-1 rounded-full">
                                        <ClockIcon className="w-4 h-4 text-lime-600" />
                                        10 min read
                                    </span>
                                    <span className="text-lime-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Read Now <ArrowRightIcon className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. TRACKS & CURRICULUM */}
                <div className="space-y-12">
                    <div className="flex items-end justify-between border-b border-stone-200 pb-4">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Curriculum Tracks</h2>
                            <p className="text-slate-500">Structured learning paths to mastery</p>
                        </div>
                        <div className="hidden sm:block text-sm text-slate-400 font-medium">
                            {LEARN_TRACKS.length} Tracks • {totalArticles} Articles
                        </div>
                    </div>

                    <div className="grid gap-8">
                        {LEARN_TRACKS.map((track) => {
                            // Filter categories dynamically
                            const trackCategories = LEARN_CATEGORIES.filter(cat => cat.trackId === track.id);

                            // Resolve icons and colors
                            const TrackIcon = TRACK_ICONS[track.iconName] || AcademicCapIcon;
                            const colors = TRACK_COLORS[track.colorTheme] || TRACK_COLORS['lime'];

                            return (
                                <section key={track.id} className="scroll-mt-24">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.icon} flex items-center justify-center border ${colors.border}`}>
                                            <TrackIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold ${colors.text}`}>{track.title}</h3>
                                            <p className="text-slate-500 text-sm">{track.description}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {trackCategories.map((category) => (
                                            <div
                                                key={category.id}
                                                onClick={() => navigate('learn/category', encodeURIComponent(category.id))}
                                                className={`bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all cursor-pointer group relative overflow-hidden`}
                                            >
                                                {/* Category styling from dynamic data */}
                                                <div className={`absolute top-0 right-0 w-24 h-24 ${category.bg} rounded-bl-[100px] opacity-20 -mr-4 -mt-4 transition-transform group-hover:scale-110`} />

                                                <div className="relative z-10">
                                                    );
                        })}
                                                </div>
                                            </div>

                {/* 4. FOOTER / ALL ARTICLES CTA */ }
                                            < div className = "bg-stone-900 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden" >
                                            <div className="relative z-10">
                                                <h2 className="text-3xl font-bold mb-4">Explore the Full Library</h2>
                                                <p className="text-stone-400 mb-8 max-w-xl mx-auto">
                                                    Browse our complete collection of scientific articles, recipes, and troubleshooting guides in one place.
                                                </p>
                                                <button
                                                    onClick={() => navigate('learn/all')}
                                                    className="bg-lime-500 text-stone-900 hover:bg-lime-400 px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-lime-900/20"
                                                >
                                                    View All Articles
                                                </button>
                                            </div>
                </div>
                                </div>
        </div>
                    );
};

                    export default LearnHomePage;
