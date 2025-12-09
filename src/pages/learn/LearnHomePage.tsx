import React, { useState } from 'react';
import { useRouter } from '@/contexts/RouterContext';
import { learnContent } from '@/data/learn-content';
import { LibraryPageLayout } from './LibraryPageLayout';
import { useTranslation } from '@/i18n';
import {
    BookOpenIcon,
    SparklesIcon,
    MagnifyingGlassIcon,
    ArrowRightIcon
} from '@/components/ui/Icons';
import { AdCard } from '@/marketing/ads/AdCard';
import { LEARN_CATEGORIES, LearnCategory } from '@/data/learn/categories';

// --- Components ---

const CategoryCard: React.FC<{
    category: LearnCategory;
    onClick: () => void
}> = ({ category, onClick }) => {
    const { t } = useTranslation();

    return (
        <div
            onClick={onClick}
            className={`
                group relative overflow-hidden rounded-2xl border ${category.border} bg-white 
                p-6 cursor-pointer transition-all duration-500 ease-out
                hover:shadow-xl hover:-translate-y-1 hover:border-transparent
            `}
        >
            <div className={`
                absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 
                group-hover:opacity-100 transition-opacity duration-500
            `}></div>

            <div className="relative z-10 flex flex-col h-full">
                <div className={`
                    w-14 h-14 rounded-2xl ${category.bg} border ${category.border}
                    flex items-center justify-center mb-5 shadow-sm 
                    group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500
                    ${category.text}
                `}>
                    {category.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-800">
                    {category.title}
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
                    {category.description}
                </p>

                <div className={`
                    flex items-center gap-2 text-xs font-bold uppercase tracking-wider 
                    ${category.text} mt-auto group-hover:translate-x-1 transition-transform
                `}>
                    <span>{t('learn.view_articles', { defaultValue: 'Explore Topics' })}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
};

const FeaturedCard: React.FC<{
    title: string;
    subtitle: string;
    category: string;
    color: string;
    onClick: () => void;
}> = ({ title, subtitle, category, color, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="bg-white rounded-xl p-5 border border-stone-100 shadow-sm hover:shadow-md hover:border-lime-200 transition-all cursor-pointer flex flex-col h-full group"
        >
            <div className={`text-xs font-bold uppercase tracking-wider mb-2 text-${color}-600`}>
                {category}
            </div>
            <h4 className="font-bold text-stone-900 mb-2 leading-snug group-hover:text-lime-700 transition-colors">
                {title}
            </h4>
            <p className="text-xs text-stone-500 line-clamp-2">
                {subtitle}
            </p>
        </div>
    );
};

// --- Main Page Component ---

const LearnHomePage: React.FC = () => {
    const { navigate } = useRouter();
    const { t } = useTranslation();

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate('learn/search', `query=${encodeURIComponent(searchQuery)}`);
        }
    };

    // Get 3 random or specific articles for "Featured" or "Essential Reading"
    const featuredArticles = [
        learnContent['fermentation-basics'],
        learnContent['gluten-network'],
        learnContent['flours']
    ].filter(Boolean);

    const displayFeatured = featuredArticles.length >= 3
        ? featuredArticles
        : Object.values(learnContent).slice(0, 3);

    return (
        <LibraryPageLayout>
            {/* 1. Modern Hero Section */}
            <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl mx-4 sm:mx-6">
                <div className="absolute inset-0 bg-[#0f2819]">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-900/40 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-900/30 rounded-full blur-[80px] -ml-20 -mb-20"></div>
                </div>

                <div className="relative z-10 px-6 py-16 md:py-20 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                        <SparklesIcon className="w-4 h-4 text-lime-400" />
                        <span>The Science of Baking</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Art & Science</span> of Dough
                    </h1>

                    <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        A definitive library of baking knowledge. Deep dive into fermentation dynamics, enzyme activity, rheology, and thermal thermodynamics.
                    </p>

                    {/* Integrated Search */}
                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSearch} className="relative group">
                            <div className="absolute inset-0 bg-lime-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden shadow-lg transition-colors focus-within:bg-white/20 focus-within:border-lime-500/50">
                                <MagnifyingGlassIcon className="w-6 h-6 text-stone-400 ml-5" />
                                <input
                                    type="text"
                                    placeholder={t('learn.search_placeholder', { defaultValue: 'What do you want to learn today?' })}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-transparent border-none text-white placeholder-stone-400 px-4 py-4 focus:ring-0 text-lg outline-none"
                                />
                                <button
                                    type="submit"
                                    className="mr-2 bg-lime-500 hover:bg-lime-400 text-[#0f2819] font-bold py-2.5 px-6 rounded-xl transition-all"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-stone-400">
                            <span>Popular:</span>
                            <button onClick={() => navigate('learn/search', 'query=hydration')} className="hover:text-lime-400 transition-colors underline decoration-dotted">Hydration</button>
                            <button onClick={() => navigate('learn/search', 'query=gluten')} className="hover:text-lime-400 transition-colors underline decoration-dotted">Gluten</button>
                            <button onClick={() => navigate('learn/search', 'query=sourdough')} className="hover:text-lime-400 transition-colors underline decoration-dotted">Sourdough</button>
                            <button onClick={() => navigate('learn/search', 'query=autolyse')} className="hover:text-lime-400 transition-colors underline decoration-dotted">Autolyse</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Essentials / Featured Section */}
            {displayFeatured.length > 0 && (
                <div className="mb-12 mx-4 sm:mx-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                            <BookOpenIcon className="w-5 h-5 text-lime-600" />
                            Essential Reading
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {displayFeatured.map(article => (
                            <FeaturedCard
                                key={article.id}
                                title={article.title}
                                subtitle={article.subtitle}
                                category={article.category || 'General'}
                                color={
                                    article.category === 'Ingredient Science' ? 'lime' :
                                        article.category === 'Dough Science' ? 'sky' :
                                            'amber'
                                }
                                onClick={() => navigate('learn', { articleId: article.id })}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* 3. Category Grid */}
            <div className="mx-4 sm:mx-6 mb-16">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-stone-900">Explore by Topic</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                    {LEARN_CATEGORIES.map(category => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                            onClick={() => navigate('learn/category', encodeURIComponent(category.title))}
                        />
                    ))}
                </div>
            </div>

            {/* 4. Advertisement Wrapper */}
            <div className="mx-4 sm:mx-6 mb-8">
                <AdCard context="learn_home" />
            </div>
        </LibraryPageLayout>
    );
};

export default LearnHomePage;
