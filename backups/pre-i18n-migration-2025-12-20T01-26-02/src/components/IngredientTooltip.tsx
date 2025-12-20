import React from 'react';
import { Increment, UserIngredient } from '@/types/ingredients';
import { FlavorComponent } from '@/types/flavor';
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
                <div className="absolute z-50 w-80 p-4 bg-white rounded-xl shadow-2xl border border-slate-200 bottom-full left-0 mb-2 animate-fade-in">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3 pb-3 border-b border-slate-100">
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-800 text-sm">{ingredient.visibleName}</h4>
                            <p className="text-xs text-slate-500 uppercase tracking-wide mt-0.5">{ingredient.category}</p>
                        </div>
                        {ingredient.source === 'user' && (
                            <span className="px-2 py-0.5 bg-violet-100 text-violet-700 text-[10px] font-bold rounded-full">
                                Custom
                            </span>
                        )}
                        {ingredient.source === 'official' && (
                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full">
                                Official
                            </span>
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
                                <div className="mb-3 p-2 bg-amber-50 rounded-lg">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <BookOpenIcon className="h-3 w-3 text-amber-600" />
                                        <span className="text-[10px] uppercase font-bold text-amber-700">Origin</span>
                                    </div>
                                    <p className="text-xs text-amber-900">{flavorComponent.origin}</p>
                                    {flavorComponent.historyContext && (
                                        <p className="text-[11px] text-amber-700 mt-1 italic">{flavorComponent.historyContext}</p>
                                    )}
                                </div>
                            )}

                            {/* Technical Implementation */}
                            {flavorComponent.technicalNotes && (
                                <div className="mb-3 p-2 bg-blue-50 rounded-lg">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <BeakerIcon className="h-3 w-3 text-blue-600" />
                                        <span className="text-[10px] uppercase font-bold text-blue-700">Implementation</span>
                                    </div>
                                    <p className="text-xs text-blue-900">{flavorComponent.technicalNotes}</p>
                                </div>
                            )}

                            {/* Classic Combinations */}
                            {flavorComponent.classicCombinations && flavorComponent.classicCombinations.length > 0 && (
                                <div className="mb-3 p-2 bg-purple-50 rounded-lg">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <LightBulbIcon className="h-3 w-3 text-purple-600" />
                                        <span className="text-[10px] uppercase font-bold text-purple-700">Classic Pairings</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {flavorComponent.classicCombinations.slice(0, 3).map((combo, i) => (
                                            <span key={i} className="text-[10px] px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded">
                                                {combo}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Application Moment */}
                            <div className="mb-3 flex items-center gap-2">
                                <span className="text-[10px] uppercase font-bold text-slate-400">Application:</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${flavorComponent.applicationMoment === 'post_oven'
                                        ? 'bg-purple-100 text-purple-700'
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
                                    <div className="p-2 bg-slate-50 rounded">
                                        <span className="text-[10px] uppercase text-slate-400 block">Moisture</span>
                                        <span className="text-xs font-bold text-slate-700">{ingredient.technicalProfile.moistureLevel}</span>
                                    </div>
                                )}
                                {ingredient.technicalProfile.fatContent && (
                                    <div className="p-2 bg-slate-50 rounded">
                                        <span className="text-[10px] uppercase text-slate-400 block">Fat</span>
                                        <span className="text-xs font-bold text-slate-700">{ingredient.technicalProfile.fatContent}</span>
                                    </div>
                                )}
                            </div>
                            {ingredient.technicalProfile.thermalBehavior && (
                                <div className="p-2 bg-blue-50 rounded-lg">
                                    <span className="text-[10px] uppercase font-bold text-blue-700 block mb-1">Thermal Behavior</span>
                                    <p className="text-xs text-blue-900">{ingredient.technicalProfile.thermalBehavior}</p>
                                </div>
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


