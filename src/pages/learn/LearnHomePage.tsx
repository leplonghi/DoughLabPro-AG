import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useRouter } from '@/contexts/RouterContext';
import { learnContent } from '@/data/learn-content';
import { LearnArticleData } from '@/types/learn';
import { LibraryPageLayout } from './LibraryPageLayout';
import { useTranslation } from '@/i18n';
import {
    BeakerIcon,
    BookOpenIcon,
    ScaleIcon,
    FireIcon,
    SparklesIcon,
    ExclamationCircleIcon,
    ChartBarIcon,
    WrenchScrewdriverIcon
} from '@/components/ui/Icons';

// --- Categories Configuration ---
const CATEGORIES = [
    {
        id: 'Ingredient Science',
        title: 'Ingredient Science',
        description: 'Explore the chemistry of flour, water, salts, fats and other key ingredients.',
        color: 'lime',
        icon: <ScaleIcon className="w-6 h-6" />,
        bg: 'bg-lime-50',
        border: 'border-lime-200',
        text: 'text-lime-600',
        hoverBorder: 'hover:border-lime-400'
    },
    {
        id: 'Dough Science',
        title: 'Dough & Gluten Science',
        description: 'Gluten behavior, rheology, extensibility and dough structure.',
        color: 'sky',
        icon: <ChartBarIcon className="w-6 h-6" />,
        bg: 'bg-sky-50',
        border: 'border-sky-200',
        text: 'text-sky-600',
        hoverBorder: 'hover:border-sky-400'
    },
    {
        id: 'Fermentation Science',
        title: 'Fermentation Science',
        description: 'Fermentation curves, temperature control, preferments and proofing.',
        color: 'amber',
        icon: <BeakerIcon className="w-6 h-6" />,
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-600',
        hoverBorder: 'hover:border-amber-400'
    },
    {
        id: 'Baking Science',
        title: 'Baking Science',
        description: 'Heat transfer, browning chemistry, crust formation and oven physics.',
        color: 'rose',
        icon: <FireIcon className="w-6 h-6" />,
        bg: 'bg-rose-50',
        border: 'border-rose-200',
        text: 'text-rose-600',
        hoverBorder: 'hover:border-rose-400'
    },
    {
        id: 'Process Techniques',
        title: 'Process Techniques',
        description: 'Shaping, lamination, balling and handling techniques.',
        color: 'teal',
        icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        text: 'text-teal-600',
        hoverBorder: 'hover:border-teal-400'
    },
    {
        id: 'Troubleshooting',
        title: 'Troubleshooting',
        description: 'Dough diagnostics powered by DoughBot Knowledge.',
        color: 'purple',
        icon: <ExclamationCircleIcon className="w-6 h-6" />,
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        hoverBorder: 'hover:border-purple-400'
    }
];

// --- Components ---

const LearnArticleCard: React.FC<{ article: LearnArticleData; onClick: () => void }> = ({ article, onClick }) => {
    const { t } = useTranslation();

    return (
        <div
            onClick={onClick}
            className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col h-full hover:border-lime-500"
        >
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${article.category === 'Ingredient Science' ? 'bg-lime-100 text-lime-800' :
                        article.category === 'Dough Science' ? 'bg-sky-100 text-sky-800' :
                            article.category === 'Fermentation Science' ? 'bg-amber-100 text-amber-800' :
                                'bg-stone-100 text-stone-600'
                        }`}>
                        {article.category || 'General'}
                    </span>
                    {article.difficulty && (
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                            {article.difficulty}
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-lime-600 transition-colors">
                    {article.title}
                </h3>

                <p className="text-sm text-stone-500 mb-4 line-clamp-2 font-medium">
                    {article.subtitle}
                </p>
                <p className="text-sm text-stone-600 line-clamp-3 mb-4 flex-grow">
                    {article.intro}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-lime-600 mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    {t('learn.read_article', { defaultValue: 'Read Article' })} &rarr;
                </div>
            </div>
        </div>
    );
};

const CategoryCard: React.FC<{
    category: typeof CATEGORIES[0];
    onClick: () => void
}> = ({ category, onClick }) => {
    const { t } = useTranslation();

    return (
        <div
            onClick={onClick}
            className={`rounded-xl border ${category.border} ${category.bg} p-6 cursor-pointer transition-all duration-300 hover:shadow-md ${category.hoverBorder} group h-full flex flex-col`}
        >
            <div className={`w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform ${category.text}`}>
                {category.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{category.title}</h3>
            <p className="text-sm text-slate-600 mb-4 flex-grow">
                {category.description}
            </p>
            <span className={`text-xs font-bold uppercase tracking-wider ${category.text} flex items-center gap-1 mt-auto`}>
                {t('learn.view_articles', { defaultValue: 'View Articles' })} &rarr;
            </span>
        </div>
    );
};

// --- Main Page Component ---

const LearnHomePage: React.FC = () => {
    const { navigate } = useRouter();
    const { t } = useTranslation();

    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const articlesRef = useRef<HTMLDivElement>(null);

    // Debounce search input
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchQuery);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    // Helper to normalize category matching
    const matchCategory = (articleCat: string | undefined, filterCat: string) => {
        if (filterCat === 'All') return true;
        if (!articleCat) return false;

        const normArticle = articleCat.toLowerCase();
        const normFilter = filterCat.toLowerCase();

        if (normFilter === 'dough & gluten science') return normArticle.includes('dough') || normArticle.includes('gluten');

        // Exact match first, then partial
        return normArticle === normFilter || normArticle.includes(normFilter.split(' ')[0]);
    };

    const filteredArticles = useMemo(() => {
        // Only show articles if searching or a category is selected (implied by "View Articles" click)
        // However, the requirement says "Remove ALL individual article previews... The homepage must show ONLY category-level navigation."
        // But if we click a category, we probably want to see the articles for that category.
        // Or if we search, we want to see results.
        // If selectedCategory is 'All' AND search is empty, show nothing.

        if (selectedCategory === 'All' && !debouncedSearch) {
            return [];
        }

        const allArticles = Object.values(learnContent);

        return allArticles.filter(article => {
            // Category Filter
            let categoryMatch = true;
            if (selectedCategory !== 'All') {
                categoryMatch = matchCategory(article.category, selectedCategory);
            }

            // Search Filter
            const searchLower = debouncedSearch.toLowerCase();
            const searchMatch = !debouncedSearch ||
                article.title.toLowerCase().includes(searchLower) ||
                article.subtitle.toLowerCase().includes(searchLower) ||
                (article.category && article.category.toLowerCase().includes(searchLower));

            return categoryMatch && searchMatch;
        });
    }, [debouncedSearch, selectedCategory]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate('learn/search', `query=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <LibraryPageLayout>
            {/* 1. Hero Section */}
            <div className="mb-12 mx-4 sm:mx-6">
                <div className="bg-gradient-to-br from-[#3A6B3A] to-[#558B55] rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-900/50 border border-lime-700/50 text-lime-300 text-xs font-bold uppercase tracking-wider mb-6">
                            <BookOpenIcon className="w-4 h-4" />
                            DoughLab Learning Hub
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                            DoughLab Learning Hub
                        </h1>
                        <p className="text-lg md:text-xl text-lime-100/90 mb-8 leading-relaxed">
                            A complete scientific library on dough chemistry, fermentation, baking physics and troubleshooting.
                        </p>
                        <button
                            onClick={() => navigate('learn/all')}
                            className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-lime-900/20"
                        >
                            <BookOpenIcon className="w-5 h-5" />
                            Explore All Articles
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. Category Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 mx-4 sm:mx-6 animate-fadeIn">
                {CATEGORIES.map(category => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                        onClick={() => navigate('learn/category', encodeURIComponent(category.title))}
                    />
                ))}
            </div>

            {/* 3. Search Bar (Below Grid) */}
            <div className="mx-4 sm:mx-6 mb-20">
                <div className="max-w-2xl mx-auto relative">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder={t('learn.search_placeholder', { defaultValue: 'Search topics...' })}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-stone-200 bg-white focus:border-lime-500 focus:ring-4 focus:ring-lime-500/10 outline-none transition-all text-base shadow-sm hover:shadow-md"
                        />
                        <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-lime-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </LibraryPageLayout >
    );
};

export default LearnHomePage;
