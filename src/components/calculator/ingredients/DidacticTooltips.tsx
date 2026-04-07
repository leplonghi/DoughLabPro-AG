import React from 'react';
import { useTranslation } from '@/i18n';

interface DidacticTooltipProps {
    title: string;
    description: string;
    example?: string;
    analogy?: string;
    tip?: string;
    visual?: {
        icon: string;
        label: string;
    };
}

/**
 * Ultra-Didactic Tooltip Component
 * 
 * Designed to explain concepts in simple, friendly language
 * suitable for children or elderly users.
 */
export const DidacticTooltip: React.FC<DidacticTooltipProps> = ({
    title,
    description,
    example,
    analogy,
    tip,
    visual
}) => {
    return (
        <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-80 rounded-2xl bg-white p-4 opacity-0 shadow-2xl transition-all duration-300 group-hover:opacity-100 z-50 border-2 border-[#51a145]/20">
            {/* Title */}
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
                <span className="text-2xl">💡</span>
                <h4 className="font-bold text-sm text-[#51a145]">{title}</h4>
            </div>

            {/* Description */}
            <p className="text-slate-700 text-xs leading-relaxed mb-3">
                {description}
            </p>

            {/* Example */}
            {example && (
                <div className="bg-[#51a145]/5 rounded-lg p-2 mb-2 border border-[#51a145]/20">
                    <p className="text-[10px] font-bold text-[#51a145] uppercase mb-1">📝 Example:</p>
                    <p className="text-xs text-slate-700 leading-snug">{example}</p>
                </div>
            )}

            {/* Analogy */}
            {analogy && (
                <div className="bg-blue-50 rounded-lg p-2 mb-2 border border-blue-200">
                    <p className="text-[10px] font-bold text-blue-600 uppercase mb-1">🎯 Think of it like:</p>
                    <p className="text-xs text-slate-700 leading-snug">{analogy}</p>
                </div>
            )}

            {/* Visual Guide */}
            {visual && (
                <div className="bg-purple-50 rounded-lg p-2 mb-2 border border-purple-200">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">{visual.icon}</span>
                        <p className="text-xs text-slate-700 font-medium">{visual.label}</p>
                    </div>
                </div>
            )}

            {/* Tip */}
            {tip && (
                <div className="bg-amber-50 rounded-lg p-2 border border-amber-200">
                    <p className="text-[10px] font-bold text-amber-600 uppercase mb-1">💡 Helpful Tip:</p>
                    <p className="text-xs text-slate-700 leading-snug">{tip}</p>
                </div>
            )}

            {/* Arrow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r-2 border-b-2 border-[#51a145]/20"></div>
        </div>
    );
};

interface SimpleTooltipProps {
    children: React.ReactNode;
    content: string;
    icon?: string;
}

/**
 * Simple Tooltip Component
 * 
 * For quick, one-line explanations
 */
export const SimpleTooltip: React.FC<SimpleTooltipProps> = ({ children, content, icon = "💡" }) => {
    return (
        <div className="group relative inline-block">
            {children}
            <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 rounded-lg bg-white px-3 py-2 text-xs opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 z-50 border border-slate-200">
                <div className="flex items-start gap-2">
                    <span className="text-base flex-shrink-0">{icon}</span>
                    <p className="text-slate-700 leading-relaxed">{content}</p>
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-slate-200"></div>
            </div>
        </div>
    );
};

interface CategoryBadgeProps {
    category: 'sauce' | 'topping' | 'filling' | 'finish';
}

/**
 * Category Badge with Tooltip
 * 
 * Shows category with icon and helpful tooltip
 */
export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
    const { t } = useTranslation(['calculator']);

    const categoryInfo = {
        sauce: {
            icon: '🍅',
            color: 'bg-red-100 text-red-700 border-red-200',
            tooltip: t('calculator.category_sauce_tooltip')
        },
        topping: {
            icon: '🧀',
            color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
            tooltip: t('calculator.category_topping_tooltip')
        },
        filling: {
            icon: '🥟',
            color: 'bg-purple-100 text-purple-700 border-purple-200',
            tooltip: t('calculator.category_filling_tooltip')
        },
        finish: {
            icon: '✨',
            color: 'bg-lime-100 text-lime-700 border-lime-200',
            tooltip: t('calculator.category_finish_tooltip')
        }
    };

    const info = categoryInfo[category] || {
        icon: '📦',
        color: 'bg-slate-100 text-slate-700 border-slate-200',
        tooltip: t('calculator.ingredient_426')
    };

    return (
        <SimpleTooltip content={info.tooltip} icon={info.icon}>
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border cursor-help ${info.color}`}>
                <span>{info.icon}</span>
                <span>{category}</span>
            </span>
        </SimpleTooltip>
    );
};


