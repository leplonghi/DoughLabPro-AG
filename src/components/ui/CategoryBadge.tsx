import React from 'react';
import { StyleCategory } from '@/types/styles';

interface CategoryBadgeProps {
    category: StyleCategory;
}

const CATEGORY_COLORS: Record<StyleCategory, string> = {
    pizza: 'bg-orange-100 text-orange-800 border-orange-200',
    bread: 'bg-amber-100 text-amber-800 border-amber-200',
    enriched_bread: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    burger_bun: 'bg-red-100 text-red-800 border-red-200',
    pastry: 'bg-pink-100 text-pink-800 border-pink-200',
    cookie: 'bg-purple-100 text-purple-800 border-purple-200',
    flatbread: 'bg-stone-100 text-stone-800 border-stone-200',
    other: 'bg-slate-100 text-slate-800 border-slate-200',
};

const CATEGORY_LABELS: Record<StyleCategory, string> = {
    pizza: 'Pizza',
    bread: 'Bread',
    enriched_bread: 'Enriched',
    burger_bun: 'Bun',
    pastry: 'Pastry',
    cookie: 'Cookie',
    flatbread: 'Flatbread',
    other: 'Other',
};

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
    const colorClass = CATEGORY_COLORS[category] || CATEGORY_COLORS.other;
    const label = CATEGORY_LABELS[category] || 'Other';

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${colorClass} uppercase tracking-wider`}>
            {label}
        </span>
    );
};
