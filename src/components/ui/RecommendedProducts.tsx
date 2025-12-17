import React from 'react';
import { getRecommendedProducts } from '../../data/affiliates';
import { ShoppingBag, ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { useTranslation } from '@/i18n';

interface RecommendedProductsProps {
    tags: string[];
    limit?: number;
    title?: string;
    className?: string;
}

export const RecommendedProducts: React.FC<RecommendedProductsProps> = ({
    tags,
    limit = 3,
    title = 'Professional Baking Gear',
    className = ''
}) => {
    const { t } = useTranslation();
    const products = getRecommendedProducts(tags, limit);

    if (!products || products.length === 0) return null;

    return (
        <div className={`space-y-3 ${className}`}>
            <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="w-4 h-4 text-dlp-primary-600" />
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                    {title}
                </h3>
            </div>

            <div className="flex flex-col gap-3">
                {products.map(product => (
                    <ExternalLink
                        key={product.id}
                        href={product.affiliateLink}
                        className="group flex bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-dlp-primary-500 hover:shadow-md transition-all duration-300 h-20"
                    >
                        {/* Image - Fixed width */}
                        <div className="w-20 shrink-0 bg-slate-50 relative overflow-hidden">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-2.5 flex flex-col justify-between bg-white min-w-0">
                            <div className="flex justify-between items-start gap-2">
                                <h4 className="text-sm font-bold text-slate-900 leading-tight truncate group-hover:text-dlp-primary-600 transition-colors">
                                    {product.name}
                                </h4>
                                <ExternalLinkIcon className="w-3 h-3 text-slate-300 group-hover:text-dlp-primary-500 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="flex items-center justify-between mt-1">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                                    {product.category}
                                </span>
                                <span className="text-[10px] font-medium text-dlp-primary-600">
                                    Check Price &rarr;
                                </span>
                            </div>
                        </div>
                    </ExternalLink>
                ))}
            </div>

            <div className="text-[10px] text-slate-400 text-center italic mt-2">
                As an Amazon Associate, DoughLab Pro earns from qualifying purchases.
            </div>
        </div>
    );
};
