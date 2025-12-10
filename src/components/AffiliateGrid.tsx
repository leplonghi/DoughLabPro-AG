
import React, { useMemo } from 'react';
import { getRecommendedProducts, AffiliateProduct } from '@/data/affiliates';
import { ExternalLink, ShoppingBag, Tag } from 'lucide-react';

interface AffiliateGridProps {
    tags: string[];
    limit?: number;
    title?: string;
    className?: string;
}

export const AffiliateGrid: React.FC<AffiliateGridProps> = ({
    tags,
    limit = 3,
    title = "Recommended Gear",
    className = ""
}) => {

    // Memoize recommendations to avoid recalc on every render
    const products = useMemo(() => getRecommendedProducts(tags, limit), [tags, limit]);

    if (!products || products.length === 0) {
        return null; // Don't render empty sections
    }

    return (
        <div className={`space-y-3 ${className}`}>
            <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="w-4 h-4 text-dlp-primary-600" />
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                    {title}
                </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
                {products.map(product => (
                    <a
                        key={product.id}
                        href={product.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-dlp-primary-500 hover:shadow-md transition-all duration-300"
                    >
                        {/* Compact layout: Image + Content */}
                        <div className="flex flex-row h-24">
                            {/* Image - 1/3 width */}
                            <div className="w-1/3 bg-slate-50 relative overflow-hidden">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content - 2/3 width */}
                            <div className="w-2/3 p-3 flex flex-col justify-between bg-white relative">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <span className="text-[10px] font-bold text-dlp-primary-600 uppercase tracking-tight mb-1">
                                            {product.category}
                                        </span>
                                        <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-dlp-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    <h4 className="text-sm font-bold text-slate-900 leading-tight line-clamp-2 group-hover:text-dlp-primary-600 transition-colors">
                                        {product.name}
                                    </h4>
                                </div>

                                <div className="mt-1 flex items-center justify-between">
                                    <span className="text-[10px] text-slate-500 font-medium">
                                        Check Price &rarr;
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="text-[10px] text-slate-400 text-center italic mt-2">
                As an Amazon Associate, DoughLab Pro earns from qualifying purchases.
            </div>
        </div>
    );
};
