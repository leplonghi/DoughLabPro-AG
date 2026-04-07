
import React, { useMemo } from 'react';
import { DoughConfig } from '@/types';
import { resolveAffiliateLink } from '@/utils/affiliate';
import { useCalculator } from '@/contexts/CalculatorContext';

interface AffiliateIngredientLinkProps {
    ingredientName: string;
    className?: string;
    showIcon?: boolean;
}

export const AffiliateIngredientLink: React.FC<AffiliateIngredientLinkProps> = ({
    ingredientName,
    className = "",
    showIcon = false
}) => {
    const { config } = useCalculator();

    const match = useMemo(() =>
        resolveAffiliateLink(ingredientName, config),
        [ingredientName, config]);

    if (!match) {
        return <span className={className}>{ingredientName}</span>;
    }

    return (
        <a
            href={match.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                group relative inline-flex items-center 
                decoration-dotted underline decoration-dlp-accent/50 hover:decoration-dlp-accent 
                cursor-help transition-colors
                ${className}
            `}
            title={`Recommended for this recipe: ${match.productName}`}
        >
            {ingredientName}
            {showIcon && (
                <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-dlp-accent">
                    ↗
                </span>
            )}
        </a>
    );
};
