import React from 'react';
import { Increment, UserIngredient } from '@/types/ingredients';
import { FlavorComponent } from '@/types/flavor';
import InlineNotice from '@/components/ui/InlineNotice';
import StatusBadge from '@/components/ui/StatusBadge';
import { InformationCircleIcon, BookOpenIcon, LightBulbIcon, BeakerIcon } from '@heroicons/react/24/outline';

interface IngredientTooltipProps {
    ingredient: Increment | UserIngredient;
    flavorComponent?: FlavorComponent;
    children: React.ReactNode;
}

export const IngredientTooltip: React.FC<IngredientTooltipProps> = ({ ingredient, flavorComponent, children }) => {
    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <div className="relative inline-block">
            <div
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            >
                {children}
            </div>

            {isVisible && (
                <div className="dlp-surface-elevated dlp-tone-neutral absolute bottom-full left-0 z-50 mb-2 w-80 rounded-[1.4rem] p-4 animate-fade-in">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3 pb-3 border-b border-slate-100">
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-800 text-sm">{ingredient.visibleName}</h4>
                            <p className="text-xs text-slate-500 uppercase tracking-wide mt-0.5">{ingredient.category}</p>
                        </div>
                        {ingredient.source === 'user' && (
                            <StatusBadge tone="info" size="sm">
                                Custom
                            </StatusBadge>
                        )}
                        {ingredient.source === 'official' && (
                            <StatusBadge tone="brand" size="sm">
                                Official
                            </StatusBadge>
                        )}
                    </div>

                    {/* Flavor Component Info */}
                    {flavorComponent && (
                        <>
                            {/* Description */}
                            <div className="mb-3">
                                <p className="text-xs text-slate-600 leading-relaxed">{flavorComponent.description}</p>
                            </div>

                            {/* Origin & History */}
                            {flavorComponent.origin && (
                                <InlineNotice tone="warning" className="mb-3">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <BookOpenIcon className="h-3 w-3 text-amber-600" />
                                        <span className="text-[10px] uppercase font-bold text-amber-700">Origin</span>
                                    </div>
                                    <p className="text-xs text-amber-900">{flavorComponent.origin}</p>
                                    {flavorComponent.historyContext && (
                                        <p className="text-[11px] text-amber-700 mt-1 italic">{flavorComponent.historyContext}</p>
                                    )}
                                </InlineNotice>
                            )}

                            {/* Technical Implementation */}
                            {flavorComponent.technicalNotes && (
                                <InlineNotice tone="info" className="mb-3">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <BeakerIcon className="h-3 w-3 text-blue-600" />
                                        <span className="text-[10px] uppercase font-bold text-blue-700">Implementation</span>
                                    </div>
                                    <p className="text-xs text-blue-900">{flavorComponent.technicalNotes}</p>
                                </InlineNotice>
                            )}

                            {/* Classic Combinations */}
                            {flavorComponent.classicCombinations && flavorComponent.classicCombinations.length > 0 && (
                                <InlineNotice tone="info" className="mb-3">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <LightBulbIcon className="h-3 w-3 text-blue-600" />
                                        <span className="text-[10px] uppercase font-bold text-blue-700">Classic Pairings</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {flavorComponent.classicCombinations.slice(0, 3).map((combo, i) => (
                                            <span key={i} className="text-[10px] px-1.5 py-0.5 bg-white/80 text-blue-700 rounded-full border border-blue-100">
                                                {combo}
                                            </span>
                                        ))}
                                    </div>
                                </InlineNotice>
                            )}

                            {/* Application Moment */}
                            <div className="mb-3 flex items-center gap-2">
                                <span className="text-[10px] uppercase font-bold text-slate-400">Application:</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${flavorComponent.applicationMoment === 'post_oven'
                                        ? 'bg-blue-50 text-blue-700'
                                        : flavorComponent.applicationMoment === 'mid_bake'
                                            ? 'bg-orange-100 text-orange-700'
                                            : 'bg-orange-100 text-orange-700'
                                    }`}>
                                    {flavorComponent.applicationMoment === 'post_oven' ? 'After Baking' :
                                        flavorComponent.applicationMoment === 'mid_bake' ? 'Mid-Bake' : 'Before Baking'}
                                </span>
                            </div>

                            {/* References */}
                            {flavorComponent.references && flavorComponent.references.length > 0 && (
                                <div className="pt-2 border-t border-slate-100">
                                    <div className="flex items-center gap-1.5 mb-1.5">
                                        <InformationCircleIcon className="h-3 w-3 text-slate-400" />
                                        <span className="text-[10px] uppercase font-bold text-slate-400">References</span>
                                    </div>
                                    <div className="space-y-1">
                                        {flavorComponent.references.slice(0, 2).map((ref, i) => (
                                            <div key={i} className="text-[10px]">
                                                <a
                                                    href={ref.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                                                >
                                                    {ref.title}
                                                </a>
                                                {ref.summary && (
                                                    <p className="text-slate-500 mt-0.5 italic">{ref.summary}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {/* Technical Profile (for all ingredients) */}
                    {!flavorComponent && ingredient.technicalProfile && (
                        <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                                {ingredient.technicalProfile.moistureLevel && (
                                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-2">
                                        <span className="text-[10px] uppercase text-slate-400 block">Moisture</span>
                                        <span className="text-xs font-bold text-slate-700">{ingredient.technicalProfile.moistureLevel}</span>
                                    </div>
                                )}
                                {ingredient.technicalProfile.fatContent && (
                                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-2">
                                        <span className="text-[10px] uppercase text-slate-400 block">Fat</span>
                                        <span className="text-xs font-bold text-slate-700">{ingredient.technicalProfile.fatContent}</span>
                                    </div>
                                )}
                            </div>
                            {ingredient.technicalProfile.thermalBehavior && (
                                <InlineNotice tone="info">
                                    <span className="text-[10px] uppercase font-bold text-blue-700 block mb-1">Thermal Behavior</span>
                                    <p className="text-xs text-blue-900">{ingredient.technicalProfile.thermalBehavior}</p>
                                </InlineNotice>
                            )}
                        </div>
                    )}

                    {/* Variations */}
                    {flavorComponent?.variations && (
                        <div className="mt-3 pt-2 border-t border-slate-100">
                            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Variations</span>
                            <p className="text-[11px] text-slate-600 italic">{flavorComponent.variations}</p>
                        </div>
                    )}

                    {/* Arrow pointer */}
                    <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white border-r border-b border-slate-200 transform rotate-45"></div>
                </div>
            )}
        </div>
    );
};


