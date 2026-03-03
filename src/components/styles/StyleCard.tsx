import React from 'react';
import { DoughStyleDefinition } from '@/types/styles';
import { useRouter } from '@/contexts/RouterContext';
import {
    WaterIcon as Droplets,
    ClockIcon as Clock,
    InsightsIcon as BarChart,
    CalculatorIcon as Calculator,
    TrashIcon as Trash2,
    ArrowRightIcon as ArrowRight,
    SparklesIcon as Sparkles,
    UserCircleIcon as User,
    GlobeAltIcon as Globe,
    PizzaSliceIcon
} from '@/components/ui/Icons';
import { CategoryBadge } from '@/components/ui/CategoryBadge';
import { LockFeature } from '@/components/auth/LockFeature';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';
import { canAccessStyle } from '@/domain/usecases/canAccess';

interface StyleCardProps {
    style: DoughStyleDefinition;
    onUseInCalculator: (style: DoughStyleDefinition) => void;
    onDelete?: (style: DoughStyleDefinition) => void;
}

export const StyleCard: React.FC<StyleCardProps> = ({ style, onUseInCalculator, onDelete }) => {
    const { t } = useTranslation(['common', 'styles']);
    const { navigate } = useRouter();
    const { user, hasProAccess, isFavorite, toggleFavorite, setUpgradeModalConfig } = useUser();
    const favorited = isFavorite(style.id);

    const entitlements = { plan: user?.plan || null, isPro: hasProAccess };
    const access = canAccessStyle(entitlements, style.isPro);

    const isNew = style.releaseDate ? (new Date().getTime() - new Date(style.releaseDate).getTime()) < 30 * 24 * 60 * 60 * 1000 : false;
    const isUserStyle = style.source?.startsWith('user') || false;
    const isAiStyle = style.source === 'user_ai';

    const handleCardClick = () => {
        if (!access.granted) {
            setUpgradeModalConfig({
                isOpen: true,
                title: `Desbloqueie o ${t(style.name)}`,
                description: `O ${t(style.name)} faz parte do plano Pro com mais de 80 estilos premium — AVPN, UNESCO e muito mais.`,
            });
            return;
        }
        navigate('styles/detail', style.id);
    };

    return (
        <div
            onClick={handleCardClick}
            className="group dlp-card hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full relative border-transparent hover:border-dlp-brand-light"
        >
            {/* Image Header */}
            <div className="relative h-52 overflow-hidden bg-dlp-bg-soft">
                {style.images?.hero ? (
                    <img
                        src={style.images.hero}
                        alt={t(style.name)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/styles/placeholder-dough.png';
                            (e.target as HTMLImageElement).style.opacity = "0.5";
                        }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-dlp-border-strong bg-dlp-bg-soft">
                        <PizzaSliceIcon className="w-16 h-16 opacity-20" />
                    </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                {/* Floating Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                    <CategoryBadge
                        category={style.category}
                        className="shadow-sm bg-white/95 backdrop-blur-sm border-white/50"
                    />
                    <div className="flex flex-col gap-2">
                        {style.isPro && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black bg-gradient-to-r from-dlp-brand to-emerald-600 text-white shadow-md border border-white/20">
                                ✨ {t('common.pro')}
                            </span>
                        )}
                        {isNew && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black bg-blue-600 text-white shadow-md border border-white/20">
                                🆕 {t('common.new')}
                            </span>
                        )}
                    </div>
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                        <Globe className="w-3 h-3" /> {style.origin.country || ''}
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-5 relative flex-grow flex flex-col z-10">
                {/* Favorite Button */}
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
                    className={`absolute -top-5 right-5 p-2.5 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 border ${favorited
                        ? 'bg-rose-500 border-rose-500 text-white'
                        : 'bg-white border-dlp-border text-dlp-text-muted hover:text-rose-500 hover:border-rose-200'
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={favorited ? "currentColor" : "none"} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </button>

                <h3 className="text-lg font-heading font-bold text-dlp-text-primary mb-1 mt-1 group-hover:text-dlp-brand transition-colors line-clamp-1">
                    {t(style.name)}
                </h3>

                <p className="text-xs text-dlp-text-muted line-clamp-2 leading-relaxed mb-4 min-h-[36px]">
                    {t(style.description)}
                </p>

                {/* Tech Specs Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100">
                        <Droplets className="w-3 h-3 mr-1" />
                        {style.technicalProfile?.hydration?.[0] === style.technicalProfile?.hydration?.[1]
                            ? `${style.technicalProfile?.hydration[0]}%`
                            : `${style.technicalProfile?.hydration[0]}-${style.technicalProfile?.hydration[1]}%`
                        }
                    </div>
                    {(style.technicalProfile?.fermentation || (style.technicalProfile?.fermentationSteps && style.technicalProfile.fermentationSteps.length > 0)) && (
                        <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">
                            <Clock className="w-3 h-3 mr-1" />
                            {style.technicalProfile?.fermentation
                                ? (typeof style.technicalProfile.fermentation === 'object'
                                    ? (style.technicalProfile.fermentation.bulk.includes('h') ? style.technicalProfile.fermentation.bulk : t('common.standard'))
                                    : t('common.standard'))
                                : t('common.multi_stage')}
                        </div>
                    )}
                    <div className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold border ${style.technicalProfile?.difficulty === 'Easy'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                        : style.technicalProfile?.difficulty === 'Hard' || style.technicalProfile?.difficulty === 'Expert'
                            ? 'bg-rose-50 text-rose-700 border-rose-100'
                            : 'bg-dlp-bg-soft text-dlp-text-secondary border-dlp-border'
                        }`}>
                        <BarChart className="w-3 h-3 mr-1" />
                        {t(`common.${(style.technicalProfile?.difficulty || 'Medium').toLowerCase()}`)}
                    </div>
                </div>
            </div>

            {/* Action Bar */}
            <div className="p-4 pt-0 mt-auto">
                <LockFeature featureKey="styles.detail" isLocked={!access.granted} customMessage={access.reason || t('general.unlock_calculator')} origin="styles">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onUseInCalculator(style);
                        }}
                        className="w-full bg-dlp-brand hover:bg-dlp-brand-hover text-white text-[11px] font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-[0.98] flex items-center justify-center gap-1.5"
                    >
                        <Calculator className="h-3.5 w-3.5" />
                        {t('common.use_style').toUpperCase()}
                    </button>
                </LockFeature>
            </div>
        </div>
    );
};

