import React, { useState, useMemo } from 'react';
import { DoughConfig, BakeType, DoughStylePreset } from '@/types';
import { BookOpenIcon, MagnifyingGlassIcon, PizzaSliceIcon, FlourIcon, SparklesIcon } from '@/components/ui/Icons';
import ChoiceButton from '@/components/ui/ChoiceButton';
import AccordionSection from '@/components/calculator/AccordionSection';
import { useTranslation } from '@/i18n';

interface StyleSectionProps {
    config: DoughConfig;
    onBakeTypeChange: (type: BakeType) => void;
    onStyleChange: (presetId: string) => void;
    recipeStylesToShow: DoughStylePreset[];
    isBasic: boolean;
    currentPreset?: DoughStylePreset;
    onResetPreset: () => void;
}

const StyleSection: React.FC<StyleSectionProps> = ({
    config,
    onBakeTypeChange,
    onStyleChange,
    recipeStylesToShow,
    isBasic,
    currentPreset,
    onResetPreset,
}) => {
    const { t } = useTranslation(['common', 'calculator']);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('All');

    // Filtering Logic
    const { uniqueCountries, filteredStyles } = useMemo(() => {
        let styles = recipeStylesToShow;

        // Filter by Search
        if (searchTerm) {
            styles = styles.filter(s =>
                s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (s.region && s.region.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Extract Countries
        const countries = Array.from(new Set(styles.map(s => s.country || 'Other'))).sort();
        // Move 'Other' to end if present
        if (countries.includes('Other')) {
            countries.push(countries.splice(countries.indexOf('Other'), 1)[0]);
        }

        // Apply Country Filter
        if (selectedCountry !== 'All') {
            styles = styles.filter(s => (s.country || 'Other') === selectedCountry);
        }

        return { uniqueCountries: countries, filteredStyles: styles };
    }, [recipeStylesToShow, searchTerm, selectedCountry]);

    const BAKE_TYPES = [
        { id: BakeType.PIZZAS, label: t('calculator.category_pizzas'), icon: <PizzaSliceIcon className="h-5 w-5" /> },
        { id: BakeType.BREADS_SAVORY, label: t('calculator.category_breads'), icon: <FlourIcon className="h-5 w-5" /> },
        { id: BakeType.SWEETS_PASTRY, label: t('calculator.category_pastry'), icon: <SparklesIcon className="h-5 w-5" /> },
    ];

    return (
        <AccordionSection
            title={t('calculator.dough_style')}
            description={t('calculator.style_section_description')}
            icon={<BookOpenIcon className="h-6 w-6" />}
        >
            {/* 1. DISTINCT BAKE TYPE SELECTOR (Tabs) */}
            <div className="grid grid-cols-3 gap-2 mb-4">
                {BAKE_TYPES.map((type) => {
                    const isActive = config.bakeType === type.id;
                    return (
                        <button
                            key={type.id}
                            onClick={() => onBakeTypeChange(type.id)}
                            className={`
                                relative flex items-center justify-center gap-2 p-2 rounded-lg border transition-all duration-200
                                ${isActive
                                    ? 'border-dlp-accent bg-dlp-accent/10 text-dlp-accent shadow-sm'
                                    : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50'
                                }
                            `}
                        >
                            <div className={`${isActive ? 'text-dlp-accent' : 'text-slate-400'}`}>
                                {type.icon}
                            </div>
                            <span className="text-xs font-bold md:text-sm">{type.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* 2. STYLE SEARCH BAR */}
            <div className="relative mb-4">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="h-4 w-4 text-slate-400" aria-hidden="true" />
                </div>
                <input
                    type="text"
                    className="block w-full rounded-md border-slate-200 bg-slate-50/50 py-1.5 pl-9 pr-3 text-xs placeholder-slate-400 focus:border-dlp-accent focus:bg-white focus:ring-1 focus:ring-dlp-accent transition-all"
                    placeholder={t('calculator.find_a_style')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* 3. COUNTRY FILTERING (Horizontal Scroll) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 -mx-1 px-1 no-scrollbar mb-2">
                <button
                    onClick={() => setSelectedCountry('All')}
                    className={`
                        flex-shrink-0 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border
                        ${selectedCountry === 'All'
                            ? 'bg-dlp-accent text-white border-dlp-accent shadow-md'
                            : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                        }
                    `}
                >
                    All
                </button>
                {uniqueCountries.map(country => (
                    <button
                        key={country}
                        onClick={() => setSelectedCountry(country)}
                        className={`
                             flex-shrink-0 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border
                            ${selectedCountry === country
                                ? 'bg-dlp-accent text-white border-dlp-accent shadow-md'
                                : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                            }
                        `}
                    >
                        {t('countries.' + country.toLowerCase(), { defaultValue: country })}
                    </button>
                ))}
            </div>

            {/* 4. UNIFIED GRID */}
            <div className="animate-fade-in relative min-h-[200px]">
                {filteredStyles.length > 0 ? (
                    <div className={`
                        grid gap-2
                        ${isBasic
                            ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5' // Guided: More compact
                            : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8' // Pro: Very dense
                        }
                    `}>
                        {filteredStyles.map((preset) => {
                            const isSelected = config.stylePresetId === preset.id;
                            return (
                                <button
                                    key={preset.id}
                                    onClick={() => onStyleChange(preset.id)}
                                    className={`
                                        relative flex flex-col items-start text-left transition-all duration-200 group
                                        ${isBasic
                                            ? 'p-2.5 rounded-lg border min-h-[80px]' // Guided Styles
                                            : 'p-2 rounded-lg border items-center text-center justify-center min-h-[50px]' // Pro Styles (Compact)
                                        }
                                        ${isSelected
                                            ? 'border-dlp-accent bg-dlp-accent/10 text-dlp-accent shadow-sm z-10'
                                            : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm'
                                        }
                                    `}
                                >
                                    {/* Selection Indicator (Dot) */}
                                    {isSelected && (
                                        <div className={`absolute rounded-full bg-dlp-accent ${isBasic ? 'top-2 right-2 w-1.5 h-1.5' : 'top-1 right-1 w-1 h-1'}`} />
                                    )}

                                    <span className={`font-bold leading-tight w-full ${isSelected ? 'text-dlp-accent' : 'text-slate-600'} ${isBasic ? 'text-xs mb-0.5 line-clamp-2' : 'text-[10px] line-clamp-2'}`}>
                                        {t(`styles.${preset.name}`)}
                                    </span>

                                    {/* Sub-region Tag (shown if Country is filtered or in All view) */}
                                    {/* If looking at All, show Country. If specific country, show Region if different? */}
                                    {/* Simplification: Just show region if it exists available on card? No, cluttered. */}
                                    {/* Just keep description or maybe a tiny tag for region? */}

                                    {/* Description - ONLY IN GUIDED MODE */}
                                    {isBasic && preset.description && (
                                        <p className={`text-[9px] leading-tight line-clamp-2 mt-0.5 ${isSelected ? 'text-lime-600/70' : 'text-slate-400'}`}>
                                            {t(preset.description)}
                                        </p>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200 flex flex-col items-center justify-center">
                        <MagnifyingGlassIcon className="h-8 w-8 text-slate-300 mb-2" />
                        <p className="text-sm text-slate-500 font-medium">{t('calculator.no_styles_found')} "{searchTerm}"</p>
                        <button onClick={() => setSearchTerm('')} className="mt-2 text-xs text-lime-600 hover:underline">{t('calculator.clear_search')}</button>
                    </div>
                )}
            </div>

            {/* Custom/Selected Indicator if not in list */}
            {(config.baseStyleName && !recipeStylesToShow.some(p => p.id === config.stylePresetId)) && (
                <div className="mt-4 border-t border-dashed border-slate-200 pt-4">
                    <p className="text-xs text-slate-400 mb-2">{t('calculator.selected_custom_style')}</p>
                    <ChoiceButton
                        active={true}
                        label={config.baseStyleName}
                        onClick={() => { }} // No-op
                        className="h-full border-lime-500 bg-lime-50 text-lime-700 w-full sm:w-1/2"
                    />
                </div>
            )}
        </AccordionSection>
    );
};

export default StyleSection;
