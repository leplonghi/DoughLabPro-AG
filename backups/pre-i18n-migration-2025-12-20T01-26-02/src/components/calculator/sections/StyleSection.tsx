import React, { useState, useMemo } from 'react';
import { DoughConfig, BakeType, DoughStylePreset, CustomPreset } from '@/types';
import { BookOpenIcon, MagnifyingGlassIcon, PizzaSliceIcon, FlourIcon, SparklesIcon } from '@/components/ui/Icons';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import ChoiceButton from '@/components/ui/ChoiceButton';
import AccordionSection from '@/components/calculator/AccordionSection';
import { InfoTooltip } from '@/components/ui/InfoTooltip';
import { useTranslation } from '@/i18n';

interface StyleSectionProps {
    config: DoughConfig;
    onBakeTypeChange: (type: BakeType) => void;
    onStyleChange: (presetId: string) => void;
    recipeStylesToShow: DoughStylePreset[];
    isBasic: boolean;
    currentPreset?: DoughStylePreset;
    onResetPreset: () => void;
    customPresets?: CustomPreset[];
    isFavorite: (id: string, type: string) => boolean;
}

const StyleSection: React.FC<StyleSectionProps> = ({
    config,
    onBakeTypeChange,
    onStyleChange,
    recipeStylesToShow,
    isBasic,
    currentPreset,
    onResetPreset,
    customPresets = [],
    isFavorite,
}) => {
    const { t } = useTranslation(['common', 'calculator', 'styles']);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('All');

    // Filtering Logic
    const { uniqueCountries, filteredStyles } = useMemo(() => {
        let styles = recipeStylesToShow;
        if (searchTerm) {
            styles = styles.filter(s =>
                s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (s.region && s.region.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }
        const countries = Array.from(new Set(styles.map(s => s.country || 'Other'))).sort();
        if (countries.includes('Other')) {
            countries.push(countries.splice(countries.indexOf('Other'), 1)[0]);
        }
        if (selectedCountry === 'Favorites') {
            styles = styles.filter(s => isFavorite && isFavorite(s.id, 'style'));
        } else if (selectedCountry !== 'All') {
            styles = styles.filter(s => (s.country || 'Other') === selectedCountry);
        }
        return { uniqueCountries: countries, filteredStyles: styles };
    }, [recipeStylesToShow, searchTerm, selectedCountry, isFavorite]);

    const BAKE_TYPES = [
        { id: BakeType.PIZZAS, label: t('calculator.pizzas'), icon: <PizzaSliceIcon /> },
        { id: BakeType.BREADS_SAVORY, label: t('calculator.breads'), icon: <FlourIcon /> },
        { id: BakeType.SWEETS_PASTRY, label: t('calculator.pastry'), icon: <SparklesIcon /> },
    ];

    return (
        <AccordionSection
            id="style-selector"
            title={
                <div className="flex items-center gap-2">
                    <span>{t('calculator.dough_style')}</span>
                    <InfoTooltip
                        variant="tutorial"
                        size="lg"
                        position="bottom"
                        content={
                            <div>
                                <p className="font-bold mb-2">🎯 Como escolher seu estilo:</p>
                                <ul className="space-y-1.5 text-[11px]">
                                    <li>• <strong>Pizzas:</strong> Napolitana, NY, Detroit e mais</li>
                                    <li>• <strong>Pães:</strong> Baguete, Ciabatta, Focaccia</li>
                                    <li>• <strong>Confeitaria:</strong> Croissants, Brioche, Babka</li>
                                </ul>
                                <p className="mt-3 text-[10px] opacity-80">💡 Cada estilo ajusta automaticamente hidratação, fermentação e ingredientes!</p>
                            </div>
                        }
                    />
                </div>
            }
            description={t('calculator.style_section_description')}
            icon={<BookOpenIcon />}
        >
            {/* 1. Category Tabs */}
            <div className="grid grid-cols-3 gap-3 mb-6 bg-slate-100/50 p-1.5 rounded-[1.5rem] border border-slate-100">
                {BAKE_TYPES.map((type) => {
                    const isActive = config.bakeType === type.id;
                    return (
                        <button
                            key={type.id}
                            onClick={() => onBakeTypeChange(type.id)}
                            className={`
                                relative group/item flex items-center justify-center gap-2 py-3 px-4 rounded-[1.2rem] transition-all duration-300
                                ${isActive
                                    ? 'bg-[#51a145] text-white shadow-lg shadow-[#51a145]/30 scale-[1.02]'
                                    : 'bg-white text-slate-500 hover:text-[#51a145] hover:shadow-md'
                                }
                            `}
                        >
                            <span className={`transition-transform duration-500 ${isActive ? 'scale-110' : 'opacity-70 group-hover/item:scale-110 group-hover/item:opacity-100 group-hover/item:text-[#51a145]'}`}>
                                {React.cloneElement(type.icon as React.ReactElement, { size: 18 })}
                            </span>
                            <span className="text-xs font-bold font-heading hidden sm:inline">{type.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* 2. Style Search Bar */}
            <div className="relative mb-6 group">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <MagnifyingGlassIcon className="h-4 w-4 text-slate-400 group-focus-within:text-[#51a145] transition-colors" />
                </div>
                <input
                    type="text"
                    className="block w-full rounded-2xl border-slate-200 bg-slate-50 py-3 pl-11 pr-12 text-sm placeholder-slate-400 focus:border-[#51a145] focus:bg-white focus:ring-4 focus:ring-[#51a145]/5 transition-all outline-none"
                    placeholder={t('calculator.find_a_style')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <InfoTooltip
                        variant="tutorial"
                        position="left"
                        content="🔍 Digite para filtrar estilos por nome ou região. Ex: 'napolitana', 'francesa', 'sourdough'"
                    />
                </div>
            </div>

            {/* 3. Country & Custom Presets */}
            <div className="space-y-6 mb-8">
                {/* Country Filter Chips */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                    <button
                        onClick={() => setSelectedCountry('All')}
                        className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all
                            ${selectedCountry === 'All' ? 'bg-[#51a145] text-white shadow-md' : 'bg-white shadow-sm text-slate-500 hover:text-[#51a145] hover:shadow-md'}
                        `}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setSelectedCountry('Favorites')}
                        className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all flex items-center gap-2
                            ${selectedCountry === 'Favorites' ? 'bg-amber-50 rounded-full shadow-sm text-amber-600' : 'bg-white shadow-sm text-slate-500 hover:text-[#51a145] hover:shadow-md'}
                        `}
                    >
                        <BookmarkIcon className="h-3 w-3" /> {t('ui.favorites')}
                    </button>
                    {uniqueCountries.map(country => (
                        <button
                            key={country}
                            onClick={() => setSelectedCountry(country)}
                            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all
                                ${selectedCountry === country ? 'bg-[#51a145] text-white shadow-md' : 'bg-white shadow-sm text-slate-500 hover:text-[#51a145] hover:shadow-md'}
                            `}
                        >
                            {t('countries.' + country.toLowerCase(), { defaultValue: country })}
                        </button>
                    ))}
                </div>

                {/* My Custom Presets */}
                {customPresets.some(p => p.config.bakeType === config.bakeType) && (
                    <div className="animate-fade-in">
                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <BookmarkIcon className="h-3 w-3" />
                            {t('styles.my_custom_presets')}
                        </h3>
                        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
                            {customPresets
                                .filter(p => p.config.bakeType === config.bakeType)
                                .map(preset => {
                                    const isSelected = config.stylePresetId === preset.id;
                                    return (
                                        <button
                                            key={preset.id}
                                            onClick={() => onStyleChange(preset.id)}
                                            className={`
                                                flex-shrink-0 relative group/item flex flex-col p-4 rounded-2xl transition-all duration-300 text-left min-w-[140px]
                                                ${isSelected
                                                    ? 'bg-[#51a145] text-white shadow-lg shadow-[#51a145]/30 scale-[1.02] z-10'
                                                    : 'bg-white shadow-sm hover:shadow-md text-slate-600 hover:text-[#51a145] hover:-translate-y-1'
                                                }
                                            `}
                                        >
                                            <span className="text-xs font-bold font-heading line-clamp-1">{preset.name}</span>
                                            <span className={`text-[10px] mt-1 transition-colors ${isSelected ? 'text-emerald-100' : 'text-slate-400 group-hover/item:text-[#51a145]/70'}`}>
                                                {new Date(preset.createdAt).toLocaleDateString()}
                                            </span>
                                        </button>
                                    );
                                })}
                        </div>
                    </div>
                )}
            </div>

            {/* 4. The Library Grid */}
            <div className="relative min-h-[200px]">
                {filteredStyles.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {filteredStyles.map((preset) => {
                            const isSelected = config.stylePresetId === preset.id;
                            return (
                                <button
                                    key={preset.id}
                                    onClick={() => onStyleChange(preset.id)}
                                    className={`
                                        relative group/item flex flex-col p-4 rounded-3xl transition-all duration-300 text-left min-h-[90px]
                                        ${isSelected
                                            ? 'bg-[#51a145] text-white shadow-lg z-10 scale-[1.04]'
                                            : 'bg-white shadow-sm text-slate-700 hover:shadow-xl hover:shadow-[#51a145]/20 hover:-translate-y-1'
                                        }
                                    `}
                                >
                                    <div className={`mb-auto text-xs font-bold font-heading transition-colors ${isSelected ? 'text-white' : 'text-slate-800 group-hover/item:text-[#51a145]'}`}>
                                        {t(preset.name)}
                                    </div>
                                    <div className={`text-[9px] mt-2 leading-relaxed line-clamp-2 uppercase tracking-wide font-bold transition-colors ${isSelected ? 'text-emerald-100 opacity-90' : 'text-slate-400 group-hover/item:text-[#51a145]/70'}`}>
                                        {t(preset.description || '')}
                                    </div>
                                    {isSelected && <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 mx-auto mb-4">
                            <MagnifyingGlassIcon className="h-6 w-6 text-slate-300" />
                        </div>
                        <p className="text-sm text-slate-500 font-bold font-heading">{t('calculator.no_styles_found')} "{searchTerm}"</p>
                        <button onClick={() => setSearchTerm('')} className="mt-3 text-xs font-bold text-[#1B4332] hover:underline uppercase tracking-widest">{t('calculator.clear_search')}</button>
                    </div>
                )}
            </div>

            {/* Custom/Selected Indicator */}
            {(config.baseStyleName && !recipeStylesToShow.some(p => p.id === config.stylePresetId)) && (
                <div className="mt-10 border-t border-slate-100 pt-6">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">{t('calculator.selected_custom_style')}</p>
                    <div className="bg-gradient-to-r from-[#51a145] to-[#1B4332] text-white p-5 rounded-3xl shadow-xl shadow-emerald-900/10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                                <SparklesIcon className="text-white" />
                            </div>
                            <span className="text-lg font-bold font-heading">{config.baseStyleName}</span>
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Custom Formula</div>
                    </div>
                </div>
            )}
        </AccordionSection>
    );
};

export default StyleSection;



