import React from 'react';
import { StyleCategory } from '@/types/styles';
import { useTranslation } from '@/i18n';

interface CategoryBadgeProps {
    category: StyleCategory;
    className?: string;
}

const CATEGORY_LABELS: Record<StyleCategory, string> = {
    pizza: 'styles_page.categories.pizza',
    bread: 'styles_page.categories.bread',
    enriched_bread: 'styles_page.categories.enriched_bread',
    burger_bun: 'styles_page.categories.burger_bun',
    pastry: 'styles_page.categories.pastry',
    cookie: 'styles_page.categories.cookie',
    cookies_confectionery: 'styles_page.categories.cookies',
    flatbread: 'styles_page.categories.flatbread',
    other: 'styles_page.categories.other',
};

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, className }) => {
    const { t } = useTranslation(['common', 'styles']);
    const labelKey = CATEGORY_LABELS[category] || 'styles_page.categories.other';

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black border shadow-lg backdrop-blur-xl bg-white/95 border-white/50 transform group-hover:scale-105 transition-all duration-300 uppercase tracking-widest text-slate-800 ${className}`}>
            {t(labelKey).toUpperCase()}
        </span>
    );
};

