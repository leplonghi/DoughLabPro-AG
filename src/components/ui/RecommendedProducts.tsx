
import React from 'react';
import { getRelatedProducts } from '../../data/affiliateProducts';
import { Card } from './Card';
import { ShoppingBag, ExternalLink } from 'lucide-react';

interface RecommendedProductsProps {
    tags: string[];
    limit?: number;
    title?: string;
    className?: string;
}

export const RecommendedProducts: React.FC<RecommendedProductsProps> = ({
    tags,
    limit = 3,
    title = "Recommended Gear",
    className = ''
}) => {
    const products = getRelatedProducts(tags, limit);

    if (products.length === 0) return null;

    return (
        <div className={`space-y-4 ${className}`}>
            <div className="flex items-center gap-2 mb-2">
                <ShoppingBag className="w-4 h-4 text-dlp-primary-500" />
                <h3 className="text-sm font-semibold text-dlp-text-primary uppercase tracking-wider">
                    {title}
                </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(product => (
                    <a
                        key={product.id}
                        href={product.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block h-full"
                    >
                        <Card className="h-full hover:border-dlp-primary-500/50 transition-all duration-300 overflow-hidden bg-dlp-bg-secondary/50 hover:bg-dlp-bg-secondary group-hover:shadow-md flex flex-col">
                            <div className="relative h-32 overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                                </div>
                            </div>

                            <div className="p-4 flex flex-col flex-grow">
                                <div className="text-xs font-medium text-dlp-primary-500 mb-1 uppercase tracking-wide">
                                    {product.category}
                                </div>
                                <h4 className="text-sm font-bold text-dlp-text-primary mb-1 line-clamp-1 group-hover:text-dlp-primary-500 transition-colors">
                                    {product.name}
                                </h4>
                                <p className="text-xs text-dlp-text-secondary line-clamp-2 mb-3 flex-grow">
                                    {product.description}
                                </p>

                                <div className="mt-auto pt-2 border-t border-dlp-border/50 flex items-center justify-between">
                                    <span className="text-xs text-dlp-text-muted">Check Price</span>
                                    <span className="text-xs font-medium text-dlp-text-primary group-hover:translate-x-1 transition-transform">View &rarr;</span>
                                </div>
                            </div>
                        </Card>
                    </a>
                ))}
            </div>
        </div>
    );
};
