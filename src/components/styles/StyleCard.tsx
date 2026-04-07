import React from 'react';
import { DoughStyleDefinition } from '@/types/styles';
import { useRouter } from '@/contexts/RouterContext';
import { useUser } from '@/contexts/UserProvider';
import { CategoryBadge } from '@/components/ui/CategoryBadge';
import StatusBadge from '@/components/ui/StatusBadge';
import { useTranslation } from '@/i18n';
import { getStyleCatalogMeta } from '@/utils/styleEditorialAdapter';
import {
    CalculatorIcon as Calculator,
    HeartIcon as Heart,
    ArrowsRightLeftIcon as CompareArrows,
    GlobeAltIcon as Globe,
    ArrowRightIcon as ArrowRight,
    WaterIcon as Droplets,
    InsightsIcon as Sparkline,
    UserCircleIcon as User,
    SparklesIcon as Sparkles,
} from '@/components/ui/Icons';

type StyleCardMode = 'browse' | 'compare';

interface StyleCardProps {
    style: DoughStyleDefinition;
    allStyles?: DoughStyleDefinition[];
    onUseInCalculator: (style: DoughStyleDefinition) => void;
    onDelete?: (style: DoughStyleDefinition) => void;
    mode?: StyleCardMode;
    isSelectedForCompare?: boolean;
    onToggleCompare?: (styleId: string) => void;
}

const completenessTone: Record<string, 'neutral' | 'info' | 'warning'> = {
    core: 'neutral',
    rich: 'info',
    expert: 'warning',
};

const curationTone: Record<string, 'brand' | 'neutral' | 'warning' | 'info'> = {
    flagship: 'brand',
    core: 'neutral',
    specialist: 'warning',
    community: 'info',
};

export const StyleCard: React.FC<StyleCardProps> = ({
    style,
    allStyles = [],
    onUseInCalculator,
    onDelete,
    mode = 'browse',
    isSelectedForCompare = false,
    onToggleCompare,
}) => {
    const { t } = useTranslation(['common', 'styles']);
    const { navigate } = useRouter();
    const { isFavorite, toggleFavorite } = useUser();
    const favorited = isFavorite(style.id);
    const meta = getStyleCatalogMeta(style, { allStyles, t });
    const isUserStyle = style.source?.startsWith('user') || false;

    return (
<<<<<<< HEAD
        <article className="dlp-surface-interactive dlp-tone-neutral group flex h-full flex-col overflow-hidden rounded-[28px] border">
            <div className="relative h-56 overflow-hidden bg-dlp-bg-muted">
                <img
                    src={meta.image}
                    alt={`${meta.title} style reference`}
                    loading="lazy"
                    width={640}
                    height={480}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(event) => {
                        (event.target as HTMLImageElement).src = '/images/styles/placeholder-dough.png';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16351f]/85 via-[#16351f]/18 to-transparent" />

                <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                    <CategoryBadge category={style.category} className="bg-white/90 shadow-sm backdrop-blur" />
                    <StatusBadge tone={curationTone[meta.libraryTier] || curationTone.core} size="sm">
                        {meta.libraryTier}
                    </StatusBadge>
                    <StatusBadge tone={completenessTone[meta.completeness] || completenessTone.core} size="sm">
                        {meta.completeness}
                    </StatusBadge>
                    {style.isPro && (
                        <StatusBadge tone="brand" size="sm" className="border-white/40 bg-white/88 text-dlp-brand-dark backdrop-blur">
                            Pro
                        </StatusBadge>
                    )}
                </div>

                <div className="absolute right-4 top-4 flex items-center gap-2">
                    {mode === 'compare' && onToggleCompare ? (
                        <button
                            type="button"
                            onClick={() => onToggleCompare(style.id)}
                            className={`rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm transition-all ${
                                isSelectedForCompare
                                    ? 'border-lime-300 bg-lime-50 text-lime-700'
                                    : 'border-white/30 bg-white/90 text-dlp-text-secondary backdrop-blur hover:border-lime-200 hover:text-lime-700'
                            }`}
                            aria-pressed={isSelectedForCompare}
                        >
                            Compare
                        </button>
                    ) : null}

                    <button
                        type="button"
                        onClick={() =>
                            toggleFavorite({
                                id: style.id,
                                type: 'style',
                                title: meta.title,
                                metadata: { category: style.category },
                            })
                        }
                        className="rounded-full bg-white/90 p-2 text-dlp-text-muted shadow-sm backdrop-blur transition-colors hover:text-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-brand focus-visible:ring-offset-2"
                        aria-label={favorited ? `Remove ${meta.title} from favorites` : `Add ${meta.title} to favorites`}
                    >
                        <Heart className={`h-5 w-5 ${favorited ? 'fill-current text-pink-500' : ''}`} />
                    </button>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                        <Globe className="h-3.5 w-3.5" />
                        <span>{meta.regionLabel}</span>
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">{meta.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85">{meta.description}</p>
                </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
                <div className="mb-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        <Droplets className="h-3.5 w-3.5 text-dlp-brand-hover" />
                        {meta.hydrationRange[0]}-{meta.hydrationRange[1]}%
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        <Sparkline className="h-3.5 w-3.5 text-amber-500" />
                        {meta.difficulty}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {style.source === 'official' ? <Sparkles className="h-3.5 w-3.5 text-lime-600" /> : <User className="h-3.5 w-3.5 text-blue-600" />}
                        {meta.editorialStatus}
                    </span>
                </div>

                <div className="mb-4 space-y-3">
                    <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Signature trait</div>
                        <p className="mt-1 text-sm font-semibold text-slate-800">{meta.signatureTrait}</p>
                    </div>
                    <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Why open this style</div>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{meta.editorialLine}</p>
                    </div>
                    <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Why it belongs in the library</div>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{meta.curationNote}</p>
                    </div>
                </div>

                {style.tags?.length ? (
                    <div className="mb-5 flex flex-wrap gap-2">
                        {style.tags.slice(0, 4).map((tag) => (
                            <span key={tag} className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                                #{t(tag, { defaultValue: tag })}
                            </span>
                        ))}
                    </div>
                ) : null}

                <div className="mt-auto grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <button
                        type="button"
                        onClick={() => navigate('styles/detail', style.id)}
                        className="dlp-button-primary inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm"
                    >
                        Open style
                        <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                        type="button"
                        onClick={() => onUseInCalculator(style)}
                        className="dlp-button-secondary inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm"
                    >
                        <Calculator className="h-4 w-4" />
                        Use in calculator
                    </button>
                </div>

                {isUserStyle && onDelete ? (
                    <button
                        type="button"
                        onClick={() => onDelete(style)}
                        className="mt-2 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-700 transition-colors hover:bg-red-100"
                    >
                        Delete custom style
                    </button>
                ) : null}

                {mode === 'compare' && onToggleCompare ? (
                    <button
                        type="button"
                        onClick={() => onToggleCompare(style.id)}
                        className={`mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition-colors ${
                            isSelectedForCompare
                                ? 'border-lime-200 bg-lime-50 text-lime-700'
                                : 'border-slate-200 bg-white text-slate-600 hover:border-lime-200 hover:text-lime-700'
                        }`}
                    >
                        <CompareArrows className="h-4 w-4" />
                        {isSelectedForCompare ? 'Selected for compare' : 'Add to compare'}
                    </button>
                ) : null}
            </div>
        </article>
    );
};
=======
        <div
            onClick={handleCardClick}
            className="group bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-lime-500/10 hover:border-lime-300/50 hover:-translate-y-1 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col h-full relative"
        >
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-lime-400/0 via-lime-500/0 to-emerald-500/0 group-hover:from-lime-400/5 group-hover:via-lime-500/5 group-hover:to-emerald-500/5 rounded-3xl transition-all duration-500 pointer-events-none z-0"></div>

            {/* Image Header */}
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                {style.images?.hero ? (
                    <img
                        src={style.images.hero}
                        alt={t(style.name)}
                        className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/styles/placeholder-dough.png';
                            (e.target as HTMLImageElement).style.opacity = "0.5";
                        }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300 bg-gradient-to-br from-slate-50 to-slate-100">
                        <PizzaSliceIcon className="w-16 h-16 opacity-20" />
                    </div>
                )}

                {/* Enhanced Overlay Gradient with Glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                    <CategoryBadge
                        category={style.category}
                        className="shadow-xl backdrop-blur-xl bg-white/95 border border-white/50 transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex flex-col gap-2">
                        {style.isPro && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black bg-gradient-to-r from-lime-400 to-lime-500 text-white shadow-lg border border-lime-300/50 backdrop-blur-sm animate-pulse-subtle">
                                ✨ {t('common.pro')}
                            </span>
                        )}
                        {isNew && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg border border-blue-400/50 backdrop-blur-sm">
                                🆕 {t('common.new')}
                            </span>
                        )}
                    </div>
                </div>

                {/* Bottom Info Bar with Glassmorphism */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/40 to-transparent backdrop-blur-md">
                    <div className="flex items-center gap-2 text-[10px] text-white/90 font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/20">
                            <Globe className="w-3.5 h-3.5" /> {style.origin.country || ''}
                        </span>
                        {style.origin.region && (
                            <span className="bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/20 line-clamp-1">
                                {style.origin.region}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 pb-2 relative flex-grow flex flex-col z-10">
                {/* Favorite Button - Floating */}
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
                    className={`absolute -top-6 right-6 p-3 rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 transform hover:scale-110 ${favorited
                        ? 'bg-pink-500 border-pink-400 text-white shadow-pink-500/50 animate-pulse-subtle'
                        : 'bg-white/95 border-slate-200 text-slate-400 hover:text-pink-500 hover:border-pink-300 hover:bg-pink-50'
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={favorited ? "currentColor" : "none"} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </button>

                <h3 className="text-xl font-bold text-slate-900 mb-2 mt-1 group-hover:text-dlp-brand-hover transition-colors line-clamp-1 tracking-tight">
                    {t(style.name)}
                </h3>

                {/* Description - Fixed height for alignment */}
                <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4 min-h-[40px]">
                    {t(style.description)}
                </p>

                {/* Tech Specs Badges - Enhanced */}
                <div className="flex flex-wrap gap-2 mb-4">
                    <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-blue-50/50 text-blue-700 text-[11px] font-bold border border-blue-100/50">
                        <Droplets className="w-3.5 h-3.5 mr-1.5" />
                        {style.technicalProfile?.hydration?.[0] === style.technicalProfile?.hydration?.[1]
                            ? `${style.technicalProfile?.hydration[0]}%`
                            : `${style.technicalProfile?.hydration[0]}-${style.technicalProfile?.hydration[1]}%`
                        }
                    </div>
                    {(style.technicalProfile?.fermentation || (style.technicalProfile?.fermentationSteps && style.technicalProfile.fermentationSteps.length > 0)) && (
                        <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-amber-50/50 text-amber-700 text-[11px] font-bold border border-amber-100/50">
                            <Clock className="w-3.5 h-3.5 mr-1.5" />
                            {style.technicalProfile?.fermentation
                                ? (typeof style.technicalProfile.fermentation === 'object'
                                    ? (style.technicalProfile.fermentation.bulk.includes('h') ? style.technicalProfile.fermentation.bulk : t('common.standard'))
                                    : t('common.standard'))
                                : t('common.multi_stage')}
                        </div>
                    )}
                    <div className={`inline-flex items-center px-3 py-1.5 rounded-xl text-[11px] font-bold border ${style.technicalProfile?.difficulty === 'Easy'
                        ? 'bg-green-50/50 text-green-700 border-green-100/50'
                        : style.technicalProfile?.difficulty === 'Hard' || style.technicalProfile?.difficulty === 'Expert'
                            ? 'bg-rose-50/50 text-rose-700 border-rose-100/50'
                            : 'bg-amber-50/50 text-amber-700 border-amber-100/50'
                        }`}>
                        <BarChart className="w-3.5 h-3.5 mr-1.5" />
                        {t(`common.${(style.technicalProfile?.difficulty || 'Medium').toLowerCase()}`)}
                    </div>
                </div>
            </div>

            {/* Tags - Optional but aligned */}
            {style.tags && style.tags.length > 0 && (
                <div className="px-6 py-3 border-t border-slate-50 flex flex-wrap gap-1.5 overflow-hidden h-[42px]">
                    {style.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] px-2.5 py-1 bg-slate-100/50 text-slate-500 rounded-lg font-bold">
                            #{t(tag).split(' ').pop()}
                        </span>
                    ))}
                </div>
            )}

            {/* Action Bar - Premium Buttons */}
            <div className="p-4 pt-0">
                <div className="grid grid-cols-2 gap-3">
                    <LockFeature featureKey="styles.detail" customMessage={t('general.unlock_calculator')} origin="styles.card">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onUseInCalculator(style);
                            }}
                            className="w-full bg-gradient-to-r from-[#51a145] to-[#36782c] hover:brightness-110 text-white text-[11px] font-black py-3 px-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
                        >
                            <Calculator className="h-4 w-4" />
                            {t('common.use_style').toUpperCase()}
                        </button>
                    </LockFeature>

                    {isUserStyle && onDelete ? (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete(style);
                            }}
                            className="w-full bg-rose-50 hover:bg-rose-500 text-rose-600 hover:text-white text-[11px] font-black py-3 px-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 border border-rose-100 hover:border-rose-500 active:scale-95"
                        >
                            <Trash2 className="h-4 w-4" />
                            {t('common.delete').toUpperCase()}
                        </button>
                    ) : (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCardClick();
                            }}
                            className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 text-[11px] font-black py-3 px-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 border border-slate-100 hover:border-slate-200 active:scale-95"
                        >
                            {t('common.details').toUpperCase()}
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
