import React, { useMemo } from 'react';
import { getRecommendedProducts, AffiliateProduct } from '@/data/affiliates';
import { getProductsForPlacement, getCategoryPlacement, AFFILIATE_PLACEMENTS } from '@/data/affiliatePlacements';
import {
    ShoppingBagIcon as ShoppingBag,
    TagIcon as Tag,
    ArrowTopRightOnSquareIcon as ExternalLinkIcon,
    ChevronRightIcon as ChevronRight,
    FireIcon as Flame,
    FlourIcon as Wheat,
    ScaleIcon as Scale,
    WrenchScrewdriverIcon as Tool
} from '@/components/ui/Icons';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { useTranslation } from '@/i18n';

interface AffiliateGridProps {
    tags: string[];
    limit?: number;
    title?: string;
    className?: string;
    placementId?: string;
    category?: string;
}

const CategoryIcon: React.FC<{ category: string; className?: string }> = ({ category, className }) => {
    switch (category.toLowerCase()) {
        case 'ingredient': return <Wheat className={className} />;
        case 'equipment': return <Flame className={className} />;
        case 'accessory': return <Tool className={className} />;
        default: return <ShoppingBag className={className} />;
    }
};

export const AffiliateGrid: React.FC<AffiliateGridProps> = ({
    tags,
    limit = 3,
    title,
    className = "",
    placementId,
    category
}) => {
    const { t } = useTranslation(['common', 'ui', 'general']);

    const { products, displayTitle } = useMemo(() => {
        let activePlacementId = placementId;
        if (!activePlacementId && category) {
            activePlacementId = getCategoryPlacement(category);
        }

        if (activePlacementId) {
            const placedProducts = getProductsForPlacement(activePlacementId);
            const placement = AFFILIATE_PLACEMENTS[activePlacementId];

            if (placedProducts && placedProducts.length > 0) {
                return {
                    products: placedProducts.slice(0, limit),
                    displayTitle: title || (placement ? placement.title : t('ui.recommended_gear_386'))
                };
            }
        }

        return {
            products: getRecommendedProducts(tags, limit),
            displayTitle: title || t('ui.recommended_gear_386')
        };
    }, [tags, limit, placementId, category, title, t]);

    if (!products || products.length === 0) return null;

    return (
        <div className={`space-y-4 ${className}`}>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-indigo-50 rounded-xl">
                        <ShoppingBag className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                        {displayTitle}
                    </h3>
                </div>
                <div className="h-px flex-1 bg-slate-100 ml-4 hidden sm:block" />
            </div>

            <div className="grid grid-cols-1 gap-3">
                {products.map(product => (
                    <ExternalLink
                        key={product.id}
                        href={product.affiliateLink}
                        className="group relative flex items-center gap-4 bg-white p-3 rounded-2xl border border-slate-100 transition-all hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 active:scale-[0.98]"
                    >
                        {/* Product Image */}
                        <div className="relative w-16 h-16 flex-shrink-0 bg-slate-50 rounded-xl overflow-hidden border border-slate-50 group-hover:border-emerald-100 transition-colors">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-emerald-500/5 transition-colors" />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                                <CategoryIcon category={product.category} className="w-2.5 h-2.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover:text-emerald-600 transition-colors">
                                    {product.category}
                                </span>
                            </div>
                            <h4 className="text-[13px] font-black text-slate-800 leading-tight truncate group-hover:text-emerald-900 transition-colors">
                                {product.name}
                            </h4>
                            <div className="flex items-center gap-1 mt-1 text-emerald-600">
                                <span className="text-[10px] font-black uppercase tracking-tighter">Check Price</span>
                                <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                            </div>
                        </div>

                        {/* Price Indicator (Optional hint of premium feel) */}
                        <div className="pr-1">
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-all">
                                <ExternalLinkIcon className="w-3.5 h-3.5" />
                            </div>
                        </div>
                    </ExternalLink>
                ))}
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-xl border border-slate-100/50">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <p className="text-[9px] font-bold text-slate-400 italic leading-snug">
                    As an Amazon Associate, DoughLab Pro earns from qualifying purchases. This helps support our scientific research.
                </p>
            </div>
        </div>
    );
};
