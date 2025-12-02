import React from 'react';
import { DoughStyleDefinition } from '@/types/styles';
import { useRouter } from '@/contexts/RouterContext';
import { Droplets, Clock, BarChart, Calculator, Trash2, ArrowRight, Sparkles, User, Globe } from 'lucide-react';
import { CategoryBadge } from '@/components/ui/CategoryBadge';
import { LockFeature } from '@/components/auth/LockFeature';
import { useUser } from '@/contexts/UserProvider';

interface StyleCardProps {
    style: DoughStyleDefinition;
    onUseInCalculator: (style: DoughStyleDefinition) => void;
    onDelete?: (style: DoughStyleDefinition) => void;
}

export const StyleCard: React.FC<StyleCardProps> = ({ style, onUseInCalculator, onDelete }) => {
    const { navigate } = useRouter();
    const { isFavorite, toggleFavorite } = useUser();
    const favorited = isFavorite(style.id);

    const isNew = style.releaseDate ? (new Date().getTime() - new Date(style.releaseDate).getTime()) < 30 * 24 * 60 * 60 * 1000 : false;
    const isUserStyle = style.source.startsWith('user');
    const isAiStyle = style.source === 'user_ai';

    const handleCardClick = () => {
        navigate('styles/detail', style.id);
    };

    return (
        <div
            onClick={handleCardClick}
            className="group bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-lime-200 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full relative"
        >
            {/* Header / Badges */}
            <div className="p-5 pb-3 relative">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-wrap gap-2">
                        <CategoryBadge category={style.category} />
                        {style.isPro && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-lime-500 text-white shadow-sm">
                                PRO
                            </span>
                        )}
                        {isAiStyle && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-100 text-indigo-700 border border-indigo-200">
                                <Sparkles className="w-3 h-3 mr-1" /> AI
                            </span>
                        )}
                        {isUserStyle && !isAiStyle && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-100 text-sky-700 border border-sky-200">
                                <User className="w-3 h-3 mr-1" /> Custom
                            </span>
                        )}
                        {isNew && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500 text-white shadow-sm">
                                NEW
                            </span>
                        )}
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite({
                                id: style.id,
                                type: 'style',
                                title: style.name,
                                metadata: { category: style.category }
                            });
                        }}
                        className={`p-1.5 rounded-full hover:bg-slate-100 transition-colors ${favorited ? 'text-pink-500' : 'text-slate-300 hover:text-pink-400'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={favorited ? "currentColor" : "none"} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-1 group-hover:text-lime-600 transition-colors line-clamp-1">{style.name}</h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium uppercase tracking-wide">
                    <span className="flex items-center gap-1">
                        <Globe className="w-3 h-3" /> {style.origin.country}
                    </span>
                    {style.origin.region && <span>• {style.origin.region}</span>}
                </div>
            </div>

            {/* Description */}
            <div className="px-5 pb-4 flex-grow">
                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{style.description}</p>
            </div>

            {/* Tech Specs Badges */}
            <div className="px-5 pb-3 flex flex-wrap gap-2">
                <div className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                    <Droplets className="w-3 h-3 mr-1.5" />
                    {style.technicalProfile?.hydration[0]}-{style.technicalProfile?.hydration[1]}%
                </div>
                {style.technicalProfile?.fermentation && (
                    <div className="inline-flex items-center px-2 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-medium border border-amber-100">
                        <Clock className="w-3 h-3 mr-1.5" />
                        {typeof style.technicalProfile.fermentation === 'object'
                            ? (style.technicalProfile.fermentation.bulk.includes('h') ? style.technicalProfile.fermentation.bulk : 'Variable')
                            : 'Variable'}
                    </div>
                )}
                <div className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${style.technicalProfile?.difficulty === 'Easy' ? 'bg-green-50 text-green-700 border-green-100' :
                    style.technicalProfile?.difficulty === 'Medium' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' :
                        'bg-red-50 text-red-700 border-red-100'
                    }`}>
                    <BarChart className="w-3 h-3 mr-1.5" />
                    {style.technicalProfile?.difficulty || 'Medium'}
                </div>
            </div>

            {/* Tags */}
            {style.tags && style.tags.length > 0 && (
                <div className="px-5 py-2 border-t border-slate-50 flex flex-wrap gap-1">
                    {style.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full font-medium">
                            #{tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Action Bar */}
            <div className="p-3 border-t border-slate-100 mt-auto grid grid-cols-2 gap-2">
                <LockFeature featureKey="styles.detail" customMessage="Unlock calculator" origin="styles.card">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onUseInCalculator(style);
                        }}
                        className="w-full bg-lime-50 hover:bg-lime-500 hover:text-white text-lime-700 text-xs font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 group/btn"
                    >
                        <Calculator className="h-3.5 w-3.5" />
                        Use Style
                    </button>
                </LockFeature>

                {isUserStyle && onDelete ? (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(style);
                        }}
                        className="w-full bg-red-50 hover:bg-red-500 hover:text-white text-red-700 text-xs font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5"
                    >
                        <Trash2 className="h-3.5 w-3.5" />
                        Delete
                    </button>
                ) : (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick();
                        }}
                        className="w-full bg-slate-50 hover:bg-slate-200 text-slate-600 text-xs font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5"
                    >
                        Details
                        <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                )}
            </div>
        </div>
    );
};
