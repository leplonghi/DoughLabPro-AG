import React from 'react';
import { getProductsForPlacement } from '@/data/affiliatePlacements';
import { AffiliateProduct } from '@/data/affiliates';
import { WrenchScrewdriverIcon, ExternalLinkIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface LearnAffiliateBlockProps {
    placementKeys: string[];
    userContext?: {
        levainHealth?: number;
        averageFermentationTemp?: number;
        averageHydration?: number;
    };
}

const LearnAffiliateBlock: React.FC<LearnAffiliateBlockProps> = ({ placementKeys, userContext }) => {
  const { t } = useTranslation();
    // Aggregate products from all keys, removing duplicates
    const allProducts: AffiliateProduct[] = placementKeys.flatMap(key => getProductsForPlacement(key));

    // Intelligent adaptation based on user context
    let contextMessage = t('learn.tools_that_help_with_this_technique');

    if (userContext) {
        const { levainHealth, averageFermentationTemp, averageHydration } = userContext;

        // Suggest based on levain health
        if (levainHealth !== undefined && levainHealth < 70) {
            contextMessage = "Strengthen your starter with high-protein flour";
            // Could filter/prioritize strong flour products here
        }

        // Suggest based on fermentation temperature
        if (averageFermentationTemp !== undefined && averageFermentationTemp > 28) {
            contextMessage ={t('learn.control_fermentation_with_proofing_tools')};
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
                    <h4 className="text-sm font-bold text-dlp-text-primary uppercase tracking-wider">{t('learn.recommended_equipment')}</h4>
                    <p className="text-xs text-dlp-text-secondary">
                        {contextMessage}
                    </p>
                </div>
            </div>

            <p className="text-sm text-dlp-text-secondary mb-6 italic">
                If you want to experiment with this concept, the following tools make it easier to get consistent results in a home kitchen.
            </p>

            <div className="flex flex-col gap-3">
                {displayProducts.map(product => (
                    <a
                        key={product.id}
                        href={product.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex bg-dlp-bg-card rounded-lg border border-dlp-border overflow-hidden hover:border-dlp-accent hover:shadow-dlp-md transition-all h-20"
                    >
                        {/* Image - Fixed width */}
                        <div className="w-20 shrink-0 bg-slate-50 relative overflow-hidden">
                            {product.imageUrl && (
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-2.5 flex flex-col justify-between min-w-0">
                            <div className="flex justify-between items-start gap-2">
                                <span className="text-xs font-semibold text-dlp-accent bg-dlp-accent/10 px-2 py-0.5 rounded-full shrink-0">
                                    {product.category === 'equipment' ? 'Tool' : 'Ingredient'}
                                </span>
                                <ExternalLinkIcon className="h-3.5 w-3.5 text-dlp-text-muted group-hover:text-dlp-accent transition-colors shrink-0" />
                            </div>

                            <h5 className="font-bold text-dlp-text-primary text-sm leading-tight truncate group-hover:text-dlp-accent-hover transition-colors">
                                {product.name}
                            </h5>
                        </div>
                    </a>
                ))}
            </div>

            <div className="text-[10px] text-dlp-text-muted text-center italic mt-3">
                As an Amazon Associate, DoughLab Pro earns from qualifying purchases.
            </div>
        </div>
    );
};

export default LearnAffiliateBlock;
