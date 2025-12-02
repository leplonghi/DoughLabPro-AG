import React from 'react';
import { getProductsForPlacement } from '@/data/affiliatePlacements';
import { AffiliateProduct } from '@/data/affiliateLinks';
import { WrenchScrewdriverIcon, ExternalLinkIcon } from '@/components/ui/Icons';

interface LearnAffiliateBlockProps {
    placementKeys: string[];
    userContext?: {
        levainHealth?: number;
        averageFermentationTemp?: number;
        averageHydration?: number;
    };
}

const LearnAffiliateBlock: React.FC<LearnAffiliateBlockProps> = ({ placementKeys, userContext }) => {
    // Aggregate products from all keys, removing duplicates
    const allProducts: AffiliateProduct[] = placementKeys.flatMap(key => getProductsForPlacement(key));

    // Intelligent adaptation based on user context
    let contextMessage = "Tools that help with this technique";

    if (userContext) {
        const { levainHealth, averageFermentationTemp, averageHydration } = userContext;

        // Suggest based on levain health
        if (levainHealth !== undefined && levainHealth < 70) {
            contextMessage = "Strengthen your starter with high-protein flour";
            // Could filter/prioritize strong flour products here
        }

        // Suggest based on fermentation temperature
        if (averageFermentationTemp !== undefined && averageFermentationTemp > 28) {
            contextMessage = "Control fermentation with proofing tools";
            // Could filter/prioritize proofing boxes, cooling tools
        }

        // Suggest based on hydration
        if (averageHydration !== undefined && averageHydration > 70) {
            contextMessage = "High-protein flours for better structure";
            // Could filter/prioritize high-protein flours
        }
    }

    const uniqueProducts = Array.from(new Map(allProducts.map(p => [p.id, p])).values());

    if (uniqueProducts.length === 0) return null;

    // Limit to 3 items as requested
    const displayProducts = uniqueProducts.slice(0, 3);

    return (
        <div className="mt-12 rounded-xl border border-dlp-border bg-dlp-bg-muted p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-dlp-bg-card rounded-lg border border-dlp-border text-dlp-text-muted">
                    <WrenchScrewdriverIcon className="h-5 w-5" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-dlp-text-primary uppercase tracking-wider">
                        Recommended Equipment
                    </h4>
                    <p className="text-xs text-dlp-text-secondary">
                        {contextMessage}
                    </p>
                </div>
            </div>

            <p className="text-sm text-dlp-text-secondary mb-6 italic">
                If you want to experiment with this concept, the following tools make it easier to get consistent results in a home kitchen.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
                {displayProducts.map(product => (
                    <a
                        key={product.id}
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-dlp-bg-card rounded-lg border border-dlp-border p-4 hover:border-dlp-accent hover:shadow-dlp-md transition-all"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-semibold text-dlp-accent bg-dlp-accent/10 px-2 py-1 rounded-full">
                                {product.category === 'tools' ? 'Tool' : 'Ingredient'}
                            </span>
                            <ExternalLinkIcon className="h-4 w-4 text-dlp-text-muted group-hover:text-dlp-accent transition-colors" />
                        </div>
                        <h5 className="font-bold text-dlp-text-primary text-sm mb-1 group-hover:text-dlp-accent-hover transition-colors">
                            {product.name}
                        </h5>
                        {product.description && (
                            <p className="text-xs text-dlp-text-secondary line-clamp-2">
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
