import React from 'react';
import { StyleCategory } from '@/types/styles';

interface CategoryBadgeProps {
    category: StyleCategory;
}



const CATEGORY_LABELS: Record<StyleCategory, string> = {
    pizza: 'Pizza',
    bread: 'Bread',
    enriched_bread: 'Enriched',
    burger_bun: 'Bun',
    pastry: 'Pastry',
    cookie: 'Cookie',
    cookies_confectionery: 'Confectionery',
    flatbread: 'Flatbread',
    other: 'Other',
};

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
    // Standardized badge style for consistency
    const colorClass = 'bg-dlp-bg-muted text-dlp-text-secondary border-dlp-border';
    const label = CATEGORY_LABELS[category] || 'Other';

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colorClass} uppercase tracking-wider`}>
            {label}
        </span>
    );
};
