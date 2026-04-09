import React, { useMemo, useState } from 'react';
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
    const [imageFailed, setImageFailed] = useState(false);
    const favorited = isFavorite(style.id);
    const meta = getStyleCatalogMeta(style, { allStyles, t });
    const isUserStyle = style.source?.startsWith('user') || false;
    const usesSafePlaceholderHero = useMemo(
        () => imageFailed || !meta.image || meta.image.includes('/images/styles/placeholder-dough.png'),
        [imageFailed, meta.image],
    );

    return (
        <article className="dlp-surface-interactive dlp-tone-neutral group flex h-full flex-col overflow-hidden rounded-[28px] border">
            <div
                className="dlp-media-hero h-56"
                data-media-state={usesSafePlaceholderHero ? 'placeholder' : 'visual'}
            >
                {!usesSafePlaceholderHero ? (
                    <img
                        src={meta.image}
                        alt={`${meta.title} style reference`}
                        loading="lazy"
                        width={640}
                        height={480}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={() => setImageFailed(true)}
                    />
                ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(141,224,161,0.34)_0%,transparent_30%),radial-gradient(circle_at_80%_18%,rgba(67,176,93,0.18)_0%,transparent_28%),linear-gradient(160deg,rgba(249,253,249,0.98)_0%,rgba(236,244,237,0.98)_54%,rgba(226,238,228,0.98)_100%)]" />
                )}

                <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                    <CategoryBadge category={style.category} className="bg-white/90 shadow-sm backdrop-blur" />
                    <StatusBadge tone={curationTone[meta.libraryTier] || curationTone.core} size="sm">
                        {meta.libraryTier}
                    </StatusBadge>
                    <StatusBadge tone={completenessTone[meta.completeness] || completenessTone.core} size="sm">
                        {meta.completeness}
                    </StatusBadge>
                    {style.isPro && (
              <StatusBadge tone="brand" size="sm" className="border-white/40 bg-white/90 text-dlp-brand-dark backdrop-blur">
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

                <div className="absolute inset-x-4 bottom-4">
                    <div className="dlp-media-hero-copy rounded-[1.4rem] px-4 py-4">
                    <div className="dlp-media-hero-kicker mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
                        <Globe className="h-3.5 w-3.5" />
                        <span>{meta.regionLabel}</span>
                    </div>
                    <h3 className="dlp-media-hero-title text-2xl font-black tracking-tight">{meta.title}</h3>
                    <p className="dlp-media-hero-body mt-2 max-w-xl text-sm leading-relaxed">{meta.description}</p>
                    </div>
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
