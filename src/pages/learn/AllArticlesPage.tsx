import React, { useState, useMemo } from 'react';
import { useTranslation } from '@/i18n';
import { useRouter } from '@/contexts/RouterContext';
import { allLearnArticles, learnCategories } from '@/data/learn';
import { LibraryPageLayout } from './LibraryPageLayout';
import { MagnifyingGlassIcon, ChevronDownIcon, ChevronUpIcon, BookOpenIcon } from '@/components/ui/Icons';

export const AllArticlesPage: React.FC = () => {
    const { t } = useTranslation();
    const { navigate } = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(
        learnCategories.reduce((acc, cat) => ({ ...acc, [cat]: true }), {})
    );

    const toggleCategory = (category: string) => {
        setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }));
    };

    const filteredArticles = useMemo(() => {
        if (!searchQuery) return allLearnArticles;
        const lowerQuery = searchQuery.toLowerCase();
        return allLearnArticles.filter(article =>
            article.title.toLowerCase().includes(lowerQuery) ||
            article.subtitle.toLowerCase().includes(lowerQuery) ||
            article.category.toLowerCase().includes(lowerQuery)
        );
    }, [searchQuery]);

    const groupedArticles = useMemo(() => {
        const groups: Record<string, typeof allLearnArticles> = {};
        learnCategories.forEach(cat => {
            const articles = filteredArticles.filter(a => a.category === cat);
            if (articles.length > 0) {
                groups[cat] = articles;
            }
        });
        return groups;
    }, [filteredArticles]);

    return (
        <LibraryPageLayout>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">{t('learn.all_articles')}</h1>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={t('learn.search_library')}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-dlp-brand focus:ring-2 focus:ring-lime-200 outline-none transition-all"
                        />
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    </div>
                </div>

                <div className="space-y-6">
                    {Object.entries(groupedArticles).map(([category, articles]: [string, typeof allLearnArticles]) => (
                        <div key={category} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <button
                                onClick={() => toggleCategory(category)}
                                className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="bg-lime-100 text-lime-700 p-2 rounded-lg">
                                        <BookOpenIcon className="h-5 w-5" />
                                    </span>
                                    <h2 className="text-xl font-bold text-slate-900">{category}</h2>
                                    <span className="text-sm text-slate-500 font-medium bg-white px-2 py-0.5 rounded-full border border-slate-200">
                                        {articles.length}
                                    </span>
                                </div>
                                {expandedCategories[category] ? (
                                    <ChevronUpIcon className="h-5 w-5 text-slate-400" />
                                ) : (
                                    <ChevronDownIcon className="h-5 w-5 text-slate-400" />
                                )}
                            </button>

                            {expandedCategories[category] && (
                                <div className="divide-y divide-slate-100">
                                    {articles.map(article => (
                                        <div key={article.id} className="p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-dlp-brand-hover transition-colors">
                                                    {article.title}
                                                </h3>
                                                <p className="text-slate-600 mt-1 text-sm">
                                                    {article.subtitle}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => navigate('learn/article', article.id)}
                                                className="shrink-0 px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold text-sm rounded-lg hover:border-dlp-brand hover:text-dlp-brand-hover transition-all shadow-sm"
                                            >{t('learn.read_article')}</button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {Object.keys(groupedArticles).length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-slate-500">{t('learn.no_articles_found_matching_your_search')}</p>
                        </div>
                    )}
                </div>
            </div>
        </LibraryPageLayout>
    );
};

export default AllArticlesPage;


