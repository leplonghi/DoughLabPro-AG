import React, { useState, useMemo } from 'react';
import {
    BookOpenIcon,
    BeakerIcon,
    FireIcon,
    CubeIcon,
    ChevronRightIcon,
    StarIcon,
    CalculatorIcon,
    TrashIcon,
    FlourIcon,
    SparklesIcon,
    UserCircleIcon,
    GlobeAltIcon,
    TagIcon,
    HeartIcon,
    BarsArrowDownIcon,
    BarsArrowUpIcon,
    FunnelIcon,
    LockClosedIcon
} from '@/components/ui/Icons';
import { DoughStyleDefinition, DoughConfig, StyleCategory } from '@/types';
import { useUser } from '@/contexts/UserProvider';
import { useCalculator } from '@/contexts/CalculatorContext';
import CreateStyleModal from '@/components/styles/CreateStyleModal';
import AiStyleBuilderModal from '@/components/styles/AiStyleBuilderModal';
import { ToppingPlannerModal } from '@/components/modals/ToppingPlannerModal';
import { canUseFeature, getCurrentPlan } from '@/permissions';
import { LibraryPageLayout } from '../learn/LibraryPageLayout';

// --- LIGHT MODE COMPONENTS ---

const DLCard = ({ children, className = '', onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
    <div 
        onClick={onClick}
        className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:border-lime-500 hover:shadow-md transition-all duration-300 ${className}`}
    >
        {children}
    </div>
);

const DLTag = ({ label, color = 'slate', icon }: { label: string; color?: 'lime' | 'slate' | 'pink' | 'blue' | 'orange' | 'amber'; icon?: React.ReactNode }) => {
    const colors = {
        lime: 'bg-lime-50 text-lime-700 border-lime-200',
        slate: 'bg-slate-100 text-slate-600 border-slate-200',
        pink: 'bg-pink-50 text-pink-700 border-pink-200',
        blue: 'bg-blue-50 text-blue-700 border-blue-200',
        orange: 'bg-orange-50 text-orange-700 border-orange-200',
        amber: 'bg-amber-50 text-amber-700 border-amber-200',
    };
    return (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide border ${colors[color] || colors.slate}`}>
            {icon}
            {label}
        </span>
    );
};

interface DoughStylesPageProps {
    doughConfig: DoughConfig;
    onLoadStyle: (style: DoughStyleDefinition) => void;
    onNavigateToDetail: (styleId: string) => void;
}

const CATEGORY_FILTERS: { id: StyleCategory | 'all', label: string }[] = [
    { id: 'all', label: 'All Styles' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'bread', label: 'Breads' },
    { id: 'enriched_bread', label: 'Enriched' },
    { id: 'burger_bun', label: 'Buns' },
    { id: 'pastry', label: 'Pastry' },
    { id: 'cookie', label: 'Cookies' },
];

const getDisplayGroup = (category: StyleCategory): string => {
    switch (category) {
        case 'pizza': return 'Pizzas';
        case 'bread': return 'Breads & Rustic Loaves';
        case 'enriched_bread': return 'Enriched Breads';
        case 'flatbread': return 'Flatbreads';
        case 'burger_bun': return 'Burger Buns';
        case 'pastry': return 'Pastry & Sweet Doughs';
        case 'cookie': return 'Cookies & Confectionery';
        default: return 'Other Styles';
    }
};

const GROUP_ORDER = [
    'Pizzas',
    'Breads & Rustic Loaves',
    'Enriched Breads',
    'Burger Buns',
    'Pastry & Sweet Doughs',
    'Cookies & Confectionery',
    'Other Styles'
];

const StyleCard: React.FC<{ style: DoughStyleDefinition; onClick: () => void; onUse: (e: React.MouseEvent) => void; onDelete?: (e: React.MouseEvent) => void }> = ({ style, onClick, onUse, onDelete }) => {
    const isNew = useMemo(() => {
        if (!style.releaseDate) return false;
        const release = new Date(style.releaseDate);
        const diffTime = Math.abs(new Date().getTime() - release.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 30;
    }, [style.releaseDate]);

    const hydrationDisplay = style.technicalProfile
        ? `${style.technicalProfile.hydration[0]}-${style.technicalProfile.hydration[1]}%`
        : `${style.technical.hydration}%`;

    const getCategoryColor = (cat: string) => {
        switch (cat) {
            case 'pizza': return 'orange';
            case 'bread': return 'amber';
            case 'pastry': return 'pink';
            default: return 'slate';
        }
    };

    return (
        <DLCard onClick={onClick} className="h-full flex flex-col relative group cursor-pointer bg-white">
            {/* Badges */}
            <div className="absolute top-0 right-0 z-10 flex flex-col items-end">
                {style.isPro && (
                    <div className="bg-gradient-to-br from-lime-500 to-lime-600 text-white text-[9px] font-bold px-2 py-1 rounded-bl-xl shadow-md uppercase tracking-wide">
                        PRO MASTERCLASS
                    </div>
                )}
            </div>
            
            {!style.isCanonical && (
                <div className={`absolute top-0 left-0 text-white text-[9px] font-bold px-2 py-1 rounded-br-xl shadow-md z-10 uppercase tracking-wide flex items-center gap-1 ${style.source === 'user_ai' ? 'bg-indigo-500' : 'bg-sky-500'}`}>
                    {style.source === 'user_ai' ? <SparklesIcon className="h-2.5 w-2.5" /> : <UserCircleIcon className="h-2.5 w-2.5" />}
                    {style.source === 'user_ai' ? 'AI' : 'CUSTOM'}
                </div>
            )}

            {isNew && style.isCanonical && (
                <div className="absolute top-0 left-0 bg-blue-500 text-white text-[9px] font-bold px-2 py-1 rounded-br-xl shadow-md z-10 uppercase tracking-wide flex items-center gap-1">
                    <SparklesIcon className="h-2.5 w-2.5" /> NEW
                </div>
            )}

            <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2 mt-2">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-lime-600 transition-colors line-clamp-1 leading-tight">
                        {style.name}
                    </h3>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                    <DLTag label={style.category} color={getCategoryColor(style.category) as any} />
                    <DLTag label={style.origin.country} color="slate" icon={<GlobeAltIcon className="h-3 w-3" />} />
                </div>

                <p className="text-xs text-slate-500 mb-4 line-clamp-2 flex-grow leading-relaxed">
                    {style.description}
                </p>

                {/* Technical Grid */}
                <div className="grid grid-cols-3 gap-2 mb-4 bg-slate-50 rounded-lg p-2 border border-slate-100">
                    <div className="text-center">
                        <span className="block text-[9px] uppercase text-slate-400 font-bold tracking-wider">Hydration</span>
                        <span className="block text-xs font-mono text-lime-600 font-bold">{hydrationDisplay}</span>
                    </div>
                    <div className="text-center border-l border-slate-200">
                        <span className="block text-[9px] uppercase text-slate-400 font-bold tracking-wider">Ferm</span>
                        <span className="block text-xs font-mono text-slate-700">{style.fermentationType === 'cold' ? 'COLD' : 'RT'}</span>
                    </div>
                    <div className="text-center border-l border-slate-200">
                        <span className="block text-[9px] uppercase text-slate-400 font-bold tracking-wider">Diff</span>
                        <span className="block text-xs font-mono text-slate-700">{style.technicalProfile?.difficulty || 'MED'}</span>
                    </div>
                </div>

                <div className="mt-auto flex gap-2">
                    <button
                        onClick={onUse}
                        className="flex-1 bg-lime-500 hover:bg-lime-600 text-white text-[10px] font-bold py-2.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg hover:scale-[1.02]"
                    >
                        <CalculatorIcon className="h-3.5 w-3.5" /> Use
                    </button>
                    <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-bold py-2.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 hover:scale-[1.02]">
                        Details <ChevronRightIcon className="h-3.5 w-3.5" />
                    </button>
                    {!style.isCanonical && onDelete && (
                        <button
                            onClick={onDelete}
                            className="bg-red-50 text-red-500 hover:bg-red-100 p-2.5 rounded-lg transition-all border border-red-100"
                        >
                            <TrashIcon className="h-3.5 w-3.5" />
                        </button>
                    )}
                </div>
            </div>
        </DLCard>
    );
};

const DoughStylesPage: React.FC<DoughStylesPageProps> = ({ doughConfig, onLoadStyle, onNavigateToDetail }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<StyleCategory | 'all'>('all');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isAiModalOpen, setIsAiModalOpen] = useState(false);
    const [styleToEdit, setStyleToEdit] = useState<Partial<DoughStyleDefinition> | undefined>(undefined);
    const [isPlannerOpen, setIsPlannerOpen] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState<'name' | 'newest' | 'hydration'>('name');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const { userStyles, addUserStyle, deleteUserStyle, isFavorite, toggleFavorite, hasProAccess, openPaywall, user } = useUser();
    const { styles: contextStyles } = useCalculator();
    const userPlan = getCurrentPlan(user);

    const allStyles = useMemo(() => [...contextStyles, ...userStyles], [contextStyles, userStyles]);

    const availableTags = useMemo(() => {
        const tags = new Set<string>();
        allStyles.forEach(style => {
            style.tags?.forEach(t => tags.add(t));
        });
        return Array.from(tags).sort();
    }, [allStyles]);

    const countByCategory = (cat: string) => {
        if (cat === 'all') return allStyles.length;
        return allStyles.filter(s => s.category === cat).length;
    };

    const stylesByGroup = useMemo(() => {
        const filtered = allStyles.filter(style => {
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = style.name.toLowerCase().includes(searchLower) ||
                style.description.toLowerCase().includes(searchLower) ||
                (style.tags && style.tags.some(t => t.toLowerCase().includes(searchLower)));

            const matchesCategory = selectedCategory === 'all' || style.category === selectedCategory;
            const matchesTag = selectedTag ? style.tags?.includes(selectedTag) : true;
            const matchesFavorite = showFavorites ? isFavorite(style.id) : true;

            return matchesSearch && matchesCategory && matchesTag && matchesFavorite;
        });

        filtered.sort((a, b) => {
            let comparison = 0;
            switch (sortBy) {
                case 'name':
                    comparison = a.name.localeCompare(b.name);
                    break;
                case 'newest':
                    const dateA = new Date(a.releaseDate || 0).getTime();
                    const dateB = new Date(b.releaseDate || 0).getTime();
                    comparison = dateA - dateB;
                    break;
                case 'hydration':
                    const hydA = a.technicalProfile ? (a.technicalProfile.hydration[0] + a.technicalProfile.hydration[1]) / 2 : a.technical.hydration;
                    const hydB = b.technicalProfile ? (b.technicalProfile.hydration[0] + b.technicalProfile.hydration[1]) / 2 : b.technical.hydration;
                    comparison = hydA - hydB;
                    break;
            }
            return sortOrder === 'asc' ? comparison : -comparison;
        });

        const grouped: Record<string, DoughStyleDefinition[]> = {};
        filtered.forEach(style => {
            const groupName = getDisplayGroup(style.category);
            if (!grouped[groupName]) grouped[groupName] = [];
            grouped[groupName].push(style);
        });

        return grouped;
    }, [searchTerm, selectedCategory, selectedTag, allStyles, sortBy, sortOrder, showFavorites]);

    const handleUseStyle = (e: React.MouseEvent, style: DoughStyleDefinition) => {
        e.stopPropagation();
        if (style.isPro && !canUseFeature(userPlan, 'styles.full_access')) {
            openPaywall('styles');
            return;
        }
        if (onLoadStyle) {
            onLoadStyle(style);
        }
    };

    const handleDeleteUserStyle = async (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        if (confirm('Are you sure you want to delete this custom style?')) {
            await deleteUserStyle(id);
        }
    };

    const handleAiStyleGenerated = (style: Partial<DoughStyleDefinition>) => {
        setStyleToEdit({ ...style, source: 'user_ai' });
        setIsCreateModalOpen(true);
        setIsAiModalOpen(false);
    };

    return (
        <LibraryPageLayout>
            {/* Hero Section */}
            <div className="relative overflow-hidden border-b border-slate-200 bg-white">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-100 border border-lime-200 text-lime-700 text-xs font-bold uppercase tracking-wider mb-4">
                                <BookOpenIcon className="w-4 h-4" />
                                Validated Formula Library
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                                Global Dough Atlas
                            </h1>
                            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
                                Explore a scientifically validated collection of dough styles. 
                                From Neapolitan fermentation schedules to Japanese Tangzhong ratios.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setIsCreateModalOpen(true)}
                                className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm border border-slate-200 transition-all flex items-center gap-2"
                            >
                                <UserCircleIcon className="h-5 w-5" />
                                My Styles
                            </button>
                            <button
                                onClick={() => setIsAiModalOpen(true)}
                                className="px-5 py-3 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-bold text-sm shadow-lg shadow-indigo-200 hover:scale-105 transition-all flex items-center gap-2"
                            >
                                <SparklesIcon className="h-5 w-5" />
                                AI Generator
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm mt-0">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Categories */}
                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-1">
                            {CATEGORY_FILTERS.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id as any)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                                        selectedCategory === cat.id 
                                        ? 'bg-lime-500 text-white shadow-md shadow-lime-200' 
                                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                                >
                                    {cat.label}
                                    <span className={`text-[9px] py-0.5 px-1.5 rounded-full font-mono ${
                                        selectedCategory === cat.id 
                                        ? 'bg-white/20 text-white' 
                                        : 'bg-slate-200 text-slate-500'
                                    }`}>
                                        {countByCategory(cat.id)}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <button
                                onClick={() => setShowFavorites(!showFavorites)}
                                className={`p-2.5 rounded-lg border transition-all ${showFavorites ? 'bg-pink-50 border-pink-200 text-pink-500' : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'}`}
                            >
                                <HeartIcon className={`h-5 w-5 ${showFavorites ? 'fill-current' : ''}`} />
                            </button>

                            <div className="relative flex-grow md:w-64">
                                <input
                                    type="text"
                                    className="block w-full rounded-lg bg-slate-50 border border-slate-200 py-2.5 pl-4 pr-10 text-sm text-slate-900 placeholder-slate-400 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-all focus:bg-white"
                                    placeholder="Search styles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <FunnelIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8 pb-32">
                <div className="space-y-12">
                    {Object.keys(stylesByGroup).length === 0 ? (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                                <FlourIcon className="h-8 w-8 text-slate-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">No styles found</h3>
                            <p className="text-slate-500">Try adjusting your search filters.</p>
                        </div>
                    ) : (
                        GROUP_ORDER.map(groupName => {
                            const styles = stylesByGroup[groupName];
                            if (!styles || styles.length === 0) return null;

                            return (
                                <section key={groupName}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <h2 className="text-xl font-bold text-slate-800 tracking-wide">{groupName}</h2>
                                        <div className="h-px bg-slate-200 flex-grow"></div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {styles.map(style => (
                                            <StyleCard
                                                key={style.id}
                                                style={style}
                                                onClick={() => onNavigateToDetail(style.id)}
                                                onUse={(e) => handleUseStyle(e, style)}
                                                onDelete={!style.isCanonical ? (e) => handleDeleteUserStyle(e, style.id) : undefined}
                                            />
                                        ))}
                                    </div>
                                </section>
                            );
                        })
                    )}
                </div>
            </div>

            <CreateStyleModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                defaultValues={styleToEdit}
                onSave={async (style) => {
                    await addUserStyle(style);
                    setIsCreateModalOpen(false);
                }}
            />

            <AiStyleBuilderModal
                isOpen={isAiModalOpen}
                onClose={() => setIsAiModalOpen(false)}
                onStyleGenerated={handleAiStyleGenerated}
            />

            {isPlannerOpen && <ToppingPlannerModal onClose={() => setIsPlannerOpen(false)} totalBalls={doughConfig.numPizzas} />}
        </LibraryPageLayout>
    );
};

export default DoughStylesPage;
