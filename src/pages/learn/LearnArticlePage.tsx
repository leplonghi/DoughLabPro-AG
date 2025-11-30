import React, { useEffect } from 'react';
import { getArticleById, getArticlesByCategory } from '@/data/learn';
import { useRouter } from '@/contexts/RouterContext';
import { LearnArticleRenderer } from '@/components/learn/LearnArticleRenderer';
import { ArrowLeftIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface LearnArticlePageProps {
    articleId?: string;
}

const LearnArticlePage: React.FC<LearnArticlePageProps> = ({ articleId }) => {
    const { navigate } = useRouter();
    const { t } = useTranslation();

    const article = articleId ? getArticleById(articleId) : undefined;

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [articleId]);

    if (!articleId || !article) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center bg-stone-50">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('learn.article_not_found', { defaultValue: 'Article Not Found' })}</h2>
                <p className="text-slate-600 mb-6">{t('learn.article_not_found_desc', { defaultValue: 'The article you are looking for does not exist or has been moved.' })}</p>
                <button
                    onClick={() => navigate('learn')}
                    className="px-6 py-2 bg-lime-500 text-white font-bold rounded-xl hover:bg-lime-600 transition-colors"
                >
                    {t('learn.back_to_learn', { defaultValue: 'Back to Learn' })}
                </button>
            </div>
        );
    }

    // Get related articles (same category, excluding current)
    const relatedArticles = getArticlesByCategory(article.category)
        .filter(a => a.id !== article.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-stone-50">
            {/* Breadcrumb Bar */}
            <div className="bg-white border-b border-stone-200 px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
                <div className="max-w-7xl mx-auto flex items-center text-sm text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap">
                    <button onClick={() => navigate('learn')} className="hover:text-slate-900 transition-colors flex items-center gap-1">
                        <ArrowLeftIcon className="w-3 h-3" /> Learn
                    </button>
                    <span className="mx-2">/</span>
                    <button onClick={() => navigate('learn/category', article.category)} className="hover:text-slate-900 transition-colors">
                        {article.category}
                    </button>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-md">
                        {article.title}
                    </span>
                </div>
            </div>

            {/* Main Renderer */}
            <LearnArticleRenderer articleData={article} />

            {/* Related Articles Footer */}
            {relatedArticles.length > 0 && (
                <div className="bg-stone-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-200">
                    <div className="max-w-7xl mx-auto">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedArticles.map(related => (
                                <div
                                    key={related.id}
                                    onClick={() => navigate('learn/article', related.id)}
                                    className="bg-white rounded-xl border border-stone-200 p-6 hover:border-lime-500 hover:shadow-md transition-all cursor-pointer group"
                                >
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                                        {related.category}
                                    </span>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-lime-600 transition-colors">
                                        {related.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 line-clamp-2">
                                        {related.subtitle}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LearnArticlePage;
