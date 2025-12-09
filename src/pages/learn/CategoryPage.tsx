import React from 'react';
import { useRouter } from '@/contexts/RouterContext';
import { getArticlesByCategory } from '@/data/learn';
import { ArrowLeftIcon, BookOpenIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';
import { LEARN_CATEGORIES } from '@/data/learn/categories';

interface CategoryPageProps {
    categoryId?: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId }) => {
    const { navigate } = useRouter();
    const { t } = useTranslation();

    // Decode category from URL (e.g. "Ingredient%20Science" -> "Ingredient Science")
    const decodedCategory = categoryId ? decodeURIComponent(categoryId) : '';
    const articles = getArticlesByCategory(decodedCategory);

    // Find category configuration
    const categoryData = LEARN_CATEGORIES.find(c => c.title === decodedCategory);

    if (!decodedCategory) return <div>Category not found</div>;

    return (
        <div className="min-h-screen bg-stone-50 text-slate-900 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-stone-200 pt-8 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="flex items-center text-sm text-slate-500 mb-6">
                        <button onClick={() => navigate('learn')} className="hover:text-slate-900 transition-colors">Learn</button>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900 font-medium">{decodedCategory}</span>
                    </nav>

                    <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 bg-stone-100 rounded-xl border border-stone-200 ${categoryData?.text || 'text-slate-600'}`}>
                            {categoryData?.icon || <BookOpenIcon className="w-8 h-8" />}
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                                {decodedCategory}
                            </h1>
                            <p className="text-lg text-slate-600 mt-1 max-w-2xl">
                                {categoryData?.description || t('learn.category_default_desc', { defaultValue: 'Explore our comprehensive knowledge base.' })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map(article => (
                        <div
                            key={article.id}
                            onClick={() => navigate('learn/article', article.id)}
                            className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-lime-500 hover:shadow-lg hover:shadow-lime-900/5 transition-all cursor-pointer group flex flex-col h-full"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-3">
                                    <span className={`text-xs font-bold px-2 py-1 rounded border ${article.difficulty === 'Advanced' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                        article.difficulty === 'Intermediate' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                                            'bg-lime-50 text-lime-700 border-lime-200'
                                        }`}>
                                        {article.difficulty}
                                    </span>
                                    <span className="text-xs text-slate-500">5 min read</span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-lime-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
                                    {article.subtitle}
                                </p>

                                <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                                    <span className="text-sm font-bold text-lime-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                        Read Article <ArrowLeftIcon className="w-3 h-3 rotate-180" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {articles.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-500 text-lg">No articles found in this category yet.</p>
                        <button onClick={() => navigate('learn')} className="mt-4 text-lime-600 hover:underline">Return to Learn Home</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
