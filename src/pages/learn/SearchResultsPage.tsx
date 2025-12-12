import React, { useEffect, useState } from 'react';
import { useRouter } from '@/contexts/RouterContext';
import { searchLearn, SearchResult } from '@/utils/learnSearch';
import { MagnifyingGlassIcon, ArrowRightIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

const SearchResultsPage: React.FC = () => {
  const { t } = useTranslation();
    const { routeParams, navigate } = useRouter();

    // Parse query from routeParams (expected format: "query=value")
    const query = React.useMemo(() => {
        if (!routeParams) return '';
        const params = new URLSearchParams(routeParams);
        return params.get('query') || '';
    }, [routeParams]);

    const [results, setResults] = useState<SearchResult[]>([]);

    useEffect(() => {
        if (query) {
            const hits = searchLearn(query);
            setResults(hits);
        }
    }, [query]);

    return (
        <div className="min-h-screen bg-stone-50 text-slate-900 pb-20">
            <div className="bg-white border-b border-stone-200 pt-8 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <button onClick={() => navigate('learn')} className="text-slate-500 hover:text-slate-900 mb-6 text-sm">
                        &larr; Back to Learn
                    </button>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">{t('learn.search_results')}</h1>
                    <p className="text-slate-600">{t('learn.showing_results_for')}<span className="text-slate-900 font-bold">"{query}"</span>
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                {results.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 border-dashed">
                        <MagnifyingGlassIcon className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-500 mb-2">{t('learn.no_results_found')}</h3>
                        <p className="text-slate-500">{t('learn.try_adjusting_your_search_terms_or_browse_by_categ')}</p>
                        <button onClick={() => navigate('learn')} className="mt-6 px-6 py-2 bg-lime-600 hover:bg-lime-500 text-white rounded-lg font-bold transition-colors">{t('learn.browse_library')}</button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {results.map(({ article, matches }) => (
                            <div
                                key={article.id}
                                onClick={() => navigate('learn/article', article.id)}
                                className="bg-white p-6 rounded-xl border border-stone-200 hover:border-lime-500 hover:shadow-md transition-all cursor-pointer group"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-bold text-lime-600 uppercase tracking-wider">
                                                {article.category}
                                            </span>
                                            {matches.length > 0 && (
                                                <span className="text-xs text-slate-500 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
                                                    Matches: {matches.slice(0, 2).join(', ')}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-lime-600 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm line-clamp-2">
                                            {article.subtitle}
                                        </p>
                                    </div>
                                    <ArrowRightIcon className="w-5 h-5 text-slate-400 group-hover:text-lime-500 transition-colors mt-2" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;
