import React, { Fragment, useState } from 'react';
import { useTranslation } from '@/i18n';
import { Popover, Transition } from '@headlessui/react';

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
    children?: React.ReactNode;
}

/**
 * Ultra-Didactic Tooltip Component
 * 
 * Refactored to use Headless UI Popover for Portal support 
 * to prevent clipping by overflow:hidden parents.
 * Now includes hover trigger logic.
 */
export const DidacticTooltip: React.FC<DidacticTooltipProps> = ({
    title,
    description,
    example,
    analogy,
    tip,
    visual,
    children
}) => {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <Popover className="relative inline-block">
            <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <Popover.Button as="div" className="inline-block cursor-help outline-none ring-0">
                    {children}
                </Popover.Button>

                <Transition
                    show={isOpen}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel
                        static
                        anchor={{ to: 'bottom start', gap: 12, offset: -10 }}
                        className="w-[calc(100vw-64px)] sm:w-96 rounded-2xl bg-white p-4 shadow-2xl z-[400] border-2 border-[#51a145]/20 focus:outline-none ring-0 pointer-events-auto"
                    >
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

                        <div className="absolute -top-2 left-4 w-4 h-4 bg-white rotate-45 border-l-2 border-t-2 border-[#51a145]/20"></div>
                    </Popover.Panel>
                </Transition>
            </div>
        </Popover>
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
 * Uses Headless UI Popover with hover triggers.
 */
export const SimpleTooltip: React.FC<SimpleTooltipProps> = ({ children, content, icon = "💡" }) => {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <Popover className="relative inline-block">
            <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <Popover.Button as="div" className="inline-block cursor-help outline-none ring-0">
                    {children}
                </Popover.Button>

                <Transition
                    show={isOpen}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel
                        static
                        anchor="top"
                        className="w-64 rounded-xl bg-white px-3 py-2 text-xs shadow-xl z-[300] border border-slate-200 pointer-events-none"
                    >
                        <div className="flex items-start gap-2">
                            <span className="text-base flex-shrink-0">{icon}</span>
                            <p className="text-slate-700 leading-relaxed font-medium">{content}</p>
                        </div>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-slate-200"></div>
                    </Popover.Panel>
                </Transition>
            </div>
        </Popover>
    );
};

interface CategoryBadgeProps {
    category: 'sauce' | 'topping' | 'filling' | 'finish';
}

/**
 * Category Badge with Tooltip
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

    const info = categoryInfo[category as keyof typeof categoryInfo] || {
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
