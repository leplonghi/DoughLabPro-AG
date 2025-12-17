import React from 'react';
import { ExternalLink as ExternalLinkIcon, ShoppingBag } from 'lucide-react';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { InfoTooltip } from '@/components/ui/InfoTooltip';

interface AffiliateIngredientRowProps {
    label: string;
    grams: number;
    displayValue: string;
    hydration?: number;
    subtext?: React.ReactNode;
}

const AFFILIATE_LINKS = {
    strongFlour: 'https://amazon.com/s?k=strong+bread+flour+high+protein',
    precisionScale: 'https://amazon.com/s?k=0.01g+precision+kitchen+scale',
    freshYeast: 'https://amazon.com/s?k=instant+yeast'
};

export const AffiliateIngredientRow: React.FC<AffiliateIngredientRowProps> = ({
    label,
    grams,
    displayValue,
    hydration = 60,
    subtext
}) => {
    const isFlour = label.toLowerCase().includes('flour');
    const isYeast = label.toLowerCase().includes('yeast');
    const isSalt = label.toLowerCase().includes('salt');

    return (
        <div className="flex flex-col py-3 border-b border-dlp-border last:border-0">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <p className="font-medium text-dlp-text-secondary">{label}</p>
                    {isYeast && (
                        <InfoTooltip content="Instant Yeast is more concentrated than Fresh Yeast. 1g Instant ≈ 3g Fresh.">
                        </InfoTooltip>
                    )}
                </div>
                <div className="text-right">
                    <span className="font-mono font-semibold text-dlp-text-primary block">
                        {displayValue}
                    </span>
                    {subtext && (
                        <span className="text-xs text-dlp-text-muted block">
                            {subtext}
                        </span>
                    )}
                </div>
            </div>

            {/* Smart Suggestions */}
            {isFlour && hydration > 65 && (
                <ExternalLink
                    href={AFFILIATE_LINKS.strongFlour}
                    className="mt-1 flex items-center gap-1 text-[10px] sm:text-xs text-dlp-accent hover:underline w-fit"
                >
                    <ShoppingBag className="w-3 h-3" />
                    Recommended: High Protein Flour (W300+)
                    <ExternalLinkIcon className="w-2.5 h-2.5 ml-0.5 opacity-70" />
                </ExternalLink>
            )}

            {isSalt && (
                <ExternalLink
                    href={AFFILIATE_LINKS.precisionScale}
                    className="mt-1 flex items-center gap-1 text-[10px] sm:text-xs text-dlp-text-muted hover:text-dlp-accent transition-colors w-fit"
                >
                    Need precision? Get a 0.01g Scale
                    <ExternalLinkIcon className="w-2.5 h-2.5 ml-0.5 opacity-70" />
                </ExternalLink>
            )}
        </div>
    );
};
