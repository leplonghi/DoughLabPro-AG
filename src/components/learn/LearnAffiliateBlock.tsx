import React from 'react';
import { getProductsForPlacement } from '@/data/affiliatePlacements';
import { WrenchScrewdriverIcon, ExternalLinkIcon } from '@/components/ui/Icons';

interface LearnAffiliateBlockProps {
    placementKeys: string[];
}

const LearnAffiliateBlock: React.FC<LearnAffiliateBlockProps> = ({ placementKeys }) => {
    // Aggregate products from all keys, removing duplicates
    const allProducts = placementKeys.flatMap(key => getProductsForPlacement(key));
    const uniqueProducts = Array.from(new Map(allProducts.map(p => [p.id, p])).values());

    if (uniqueProducts.length === 0) return null;

    // Limit to 3 items as requested
    const displayProducts = uniqueProducts.slice(0, 3);

    return (
        <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-500">
                    <WrenchScrewdriverIcon className="h-5 w-5" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                        Recommended Equipment
                    </h4>
                    <p className="text-xs text-slate-500">
                        Tools that help with this technique
                    </p>
                </div>
            </div>

            <p className="text-sm text-slate-600 mb-6 italic">
                If you want to experiment with this concept, the following tools make it easier to get consistent results in a home kitchen.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
                {displayProducts.map(product => (
                    <a
                        key={product.id}
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-white rounded-lg border border-slate-200 p-4 hover:border-lime-300 hover:shadow-md transition-all"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-semibold text-lime-600 bg-lime-50 px-2 py-1 rounded-full">
                                {product.category === 'tools' ? 'Tool' : 'Ingredient'}
                            </span>
                            <ExternalLinkIcon className="h-4 w-4 text-slate-300 group-hover:text-lime-500 transition-colors" />
                        </div>
                        <h5 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-lime-700 transition-colors">
                            {product.name}
                        </h5>
                        {product.description && (
                            <p className="text-xs text-slate-500 line-clamp-2">
                                {product.description}
                            </p>
                        )}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default LearnAffiliateBlock;
