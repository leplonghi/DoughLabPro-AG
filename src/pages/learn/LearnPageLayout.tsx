import React from 'react';
import { useRouter } from '@/contexts/RouterContext';
import { useTranslation } from '@/i18n';
import { ArrowLeftIcon } from '@/components/ui/Icons';

interface LearnPageLayoutProps {
    title: string;
    category?: string;
    mode: 'main' | 'grandma';
    onModeChange: (mode: 'main' | 'grandma') => void;
    hasGrandmaVersion: boolean;
    articleId: string;
    children: React.ReactNode;
}

const LearnPageLayout: React.FC<LearnPageLayoutProps> = ({
    title,
    category,
    mode,
    onModeChange,
    hasGrandmaVersion,
    articleId,
    children
}) => {
    const { navigate } = useRouter();
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-stone-50 pb-20">
            {/* Header / Nav */}
            <div className="bg-white border-b border-stone-200 sticky top-0 z-30 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('learn')}
                            className="p-2 -ml-2 rounded-full hover:bg-stone-100 text-stone-500 transition-colors"
                        >
                            <ArrowLeftIcon className="w-5 h-5" />
                        </button>

                        <nav className="hidden sm:flex items-center text-sm text-stone-500">
                            <button onClick={() => navigate('learn')} className="hover:text-lime-600 transition-colors">Learn</button>
                            <span className="mx-2">/</span>
                            {category && (
                                <>
                                    <button onClick={() => navigate('learn/category', encodeURIComponent(category))} className="hover:text-lime-600 transition-colors">
                                        {category}
                                    </button>
                                    <span className="mx-2">/</span>
                                </>
                            )}
                            <span className="text-stone-900 font-medium truncate max-w-[200px]">{title}</span>
                        </nav>
                    </div>

                    {/* Mode Toggle */}
                    {hasGrandmaVersion && (
                        <div className="flex bg-stone-100 p-1 rounded-lg border border-stone-200">
                            <button
                                onClick={() => onModeChange('main')}
                                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${mode === 'main'
                                        ? 'bg-white text-lime-700 shadow-sm border border-stone-200'
                                        : 'text-stone-500 hover:text-stone-700'
                                    }`}
                            >
                                Technical
                            </button>
                            <button
                                onClick={() => onModeChange('grandma')}
                                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${mode === 'grandma'
                                        ? 'bg-white text-amber-700 shadow-sm border border-stone-200'
                                        : 'text-stone-500 hover:text-stone-700'
                                    }`}
                            >
                                Grandma
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden min-h-[60vh]">
                    {/* Article Header */}
                    <div className="p-6 sm:p-10 border-b border-stone-100 bg-gradient-to-b from-white to-stone-50/50">
                        {category && (
                            <div className="mb-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-lime-100 text-lime-800 uppercase tracking-wide">
                                    {category}
                                </span>
                            </div>
                        )}
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                            {title}
                        </h1>
                    </div>

                    {/* Children */}
                    <div className="bg-white">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnPageLayout;
