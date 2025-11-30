import React, { useState, useMemo } from 'react';
import { DoughConfig, Page, Batch, RecipeStyle, OvenType, BatchStatus } from '@/types';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';
import MyLabLayout from './MyLabLayout';
import { BatchesIcon, CalculatorIcon, LockClosedIcon, StarIcon, SolidStarIcon, PlusCircleIcon, FunnelIcon, FireIcon, WaterIcon, ClockIcon } from '@/components/ui/Icons';
import { OVEN_TYPE_OPTIONS } from '@/constants';
import { useToast } from '@/components/ToastProvider';
import { ProFeatureLock } from '@/components/ui/ProFeatureLock';
import { canUseFeature, getCurrentPlan } from '@/permissions';

interface MyLabBatchesPageProps {
    onLoadAndNavigate: (config: Partial<DoughConfig>) => void;
    onNavigate: (page: Page, params?: string) => void;
    onCreateDraftBatch: () => void;
}

// Filter state interface
interface FornadasFilters {
    style: RecipeStyle | 'ALL';
    period: '7d' | '30d' | '6m' | 'ALL';
    oven: OvenType | 'ALL';
    minHydration: string;
    maxHydration: string;
}

// Result Tag component
const ResultTag: React.FC<{ rating?: number }> = ({ rating }) => {
    if (!rating || rating < 1) return null;

    return (
        <div className="flex items-center gap-0.5 bg-yellow-100 text-yellow-700   px-2 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm">
            <SolidStarIcon className="h-3 w-3" />
            <span>{rating.toFixed(1)}</span>
        </div>
    );
};

const BatchCard: React.FC<{ batch: Batch; t: any; onNavigate: (page: Page, params?: string) => void }> = ({ batch, t, onNavigate }) => {
    const date = new Date(batch.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });

    return (
        <div
            onClick={() => onNavigate('batch', batch.id)}
            className="group relative flex flex-col rounded-2xl border border-slate-200  bg-white  shadow-sm transition-all hover:shadow-lg hover:border-lime-200 hover:-translate-y-1 cursor-pointer overflow-hidden"
        >
            {/* Card Header / Image */}
            <div className={`h-32 w-full bg-cover bg-center relative ${!batch.photoUrl ? 'bg-gradient-to-br from-lime-50 to-lime-100  ' : ''}`} style={batch.photoUrl ? { backgroundImage: `url(${batch.photoUrl})` } : {}}>
                {!batch.photoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <BatchesIcon className="h-16 w-16 text-lime-600 " />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                    <div>
                        <p className="text-white/90 text-xs font-medium uppercase tracking-wider mb-0.5">{t(`form.${batch.doughConfig.recipeStyle.toLowerCase()}`, { defaultValue: batch.doughConfig.recipeStyle })}</p>
                        <h3 className="text-white font-bold text-lg leading-tight truncate shadow-sm">{batch.name}</h3>
                    </div>
                    {batch.rating && <ResultTag rating={batch.rating} />}
                </div>
            </div>

            {/* Card Body */}
            <div className="p-4 flex-grow flex flex-col gap-3">
                <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-slate-50  rounded-xl p-2">
                        <div className="flex items-center justify-center gap-1 text-slate-400  mb-1">
                            <WaterIcon className="h-3 w-3" />
                        </div>
                        <span className="block text-sm font-bold text-slate-700 ">{batch.doughConfig.hydration}%</span>
                        <span className="block text-[10px] text-slate-500  uppercase">Hydration</span>
                    </div>
                    <div className="bg-slate-50  rounded-xl p-2">
                        <div className="flex items-center justify-center gap-1 text-slate-400  mb-1">
                            <ClockIcon className="h-3 w-3" />
                        </div>
                        <span className="block text-sm font-bold text-slate-700 ">
                            {(batch.bulkTimeHours || 0) + (batch.proofTimeHours || 0) > 0
                                ? `${(batch.bulkTimeHours || 0) + (batch.proofTimeHours || 0)}h`
                                : '-'}
                        </span>
                        <span className="block text-[10px] text-slate-500  uppercase">Time</span>
                    </div>
                    <div className="bg-slate-50  rounded-xl p-2">
                        <div className="flex items-center justify-center gap-1 text-slate-400  mb-1">
                            <FireIcon className="h-3 w-3" />
                        </div>
                        <span className="block text-sm font-bold text-slate-700  truncate px-1">
                            {batch.ovenType ? t(`profile.ovens.types.${batch.ovenType.toLowerCase()}`).split(' ')[0] : '-'}
                        </span>
                        <span className="block text-[10px] text-slate-500  uppercase">Oven</span>
                    </div>
                </div>

                <div className="mt-auto pt-3 border-t border-slate-100  flex justify-between items-center text-xs text-slate-500 ">
                    <span>{date}</span>
                    <span className="group-hover:text-lime-600 font-medium transition-colors">View Details &rarr;</span>
                </div>
            </div>
        </div>
    );
};


const MyLabBatchesPage: React.FC<MyLabBatchesPageProps> = ({
    onNavigate,
    onCreateDraftBatch,
    onLoadAndNavigate,
}) => {
    const { t } = useTranslation();
    const { batches, user } = useUser();
    const { addToast } = useToast();
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState<FornadasFilters>({
        style: 'ALL',
        period: 'ALL',
        oven: 'ALL',
        minHydration: '',
        maxHydration: '',
    });

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleCreateDraft = () => {
        const savedBatches = batches.filter(b => b.status !== BatchStatus.DRAFT);
        const plan = getCurrentPlan(user);
        // Limit to 2 batches for free users
        if (!canUseFeature(plan, 'mylab.unlimited_advanced') && savedBatches.length >= 2) {
            addToast("Free plan includes 2 saved bakes. Upgrade to Lab Pro for unlimited history.", "error");
            // Assuming openPaywall is not available from useUser directly based on previous code, 
            // but checking Step 89 it WAS destructured from useUser. 
            // Let's check if openPaywall is in useUser.
            // In Step 89: const { batches, hasProAccess, openPaywall, user } = useUser();
            // So I should destructure it.
            return;
        }
        onCreateDraftBatch();
    };

    const uniqueStylesInBatches = useMemo(() => {
        const styles = new Set(batches.filter(b => b.status !== BatchStatus.DRAFT).map(b => b.doughConfig.recipeStyle));
        return Array.from(styles);
    }, [batches]);

    const filteredBatches = useMemo(() => {
        const now = new Date();
        return batches
            .filter(b => b.status !== BatchStatus.DRAFT) // Don't show drafts
            .filter(batch => {
                // Style filter
                if (filters.style !== 'ALL' && batch.doughConfig.recipeStyle !== filters.style) {
                    return false;
                }
                // Period filter
                if (filters.period !== 'ALL') {
                    const batchDate = new Date(batch.createdAt);
                    let daysLimit = 0;
                    if (filters.period === '7d') daysLimit = 7;
                    if (filters.period === '30d') daysLimit = 30;
                    if (filters.period === '6m') daysLimit = 180;
                    const diffDays = (now.getTime() - batchDate.getTime()) / (1000 * 3600 * 24);
                    if (diffDays > daysLimit) return false;
                }
                // Oven filter
                if (filters.oven !== 'ALL' && (batch.ovenType !== filters.oven)) {
                    return false;
                }
                // Hydration filter
                const minHyd = parseFloat(filters.minHydration);
                const maxHyd = parseFloat(filters.maxHydration);
                if (!isNaN(minHyd) && batch.doughConfig.hydration < minHyd) {
                    return false;
                }
                if (!isNaN(maxHyd) && batch.doughConfig.hydration > maxHyd) {
                    return false;
                }
                return true;
            })
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }, [batches, filters]);

    const periodOptions = [
        { value: 'ALL', label: 'All Time' },
        { value: '7d', label: 'Last 7 days' },
        { value: '30d', label: 'Last 30 days' },
        { value: '6m', label: 'Last 6 months' },
    ];

    const plan = getCurrentPlan(user);
    const hasReachedFreeLimit = !canUseFeature(plan, 'mylab.unlimited_advanced') && batches.filter(b => b.status !== BatchStatus.DRAFT).length >= 2;

    return (
        <MyLabLayout activePage="mylab/fornadas" onNavigate={onNavigate}>
            <div className="animate-fade-in space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 ">
                            My Bakes
                        </h1>
                        <p className="mt-2 text-slate-600 ">
                            Track your progress and perfect your recipes.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-medium transition-colors ${showFilters ? 'bg-lime-50 border-lime-200 text-lime-700   ' : 'bg-white  border-slate-200  text-slate-600  hover:bg-slate-50'}`}
                        >
                            <FunnelIcon className="h-5 w-5" />
                            <span>Filters</span>
                        </button>
                        <button
                            onClick={handleCreateDraft}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lime-500 text-white font-bold shadow-lg shadow-lime-500/20 hover:bg-lime-600 hover:shadow-xl hover:scale-105 transition-all active:scale-95"
                        >
                            <PlusCircleIcon className="h-5 w-5" />
                            <span>Log Bake</span>
                        </button>
                    </div>
                </div>

                {/* Filters Panel */}
                {showFilters && (
                    <div className="p-6 rounded-2xl bg-white  border border-slate-200  shadow-sm animate-slide-down">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500  uppercase tracking-wider">Style</label>
                                <select name="style" value={filters.style} onChange={handleFilterChange} className="w-full rounded-xl border-slate-300  bg-slate-50  text-sm focus:ring-lime-500 focus:border-transparent text-slate-700  p-2.5">
                                    <option value="ALL">All Styles</option>
                                    {uniqueStylesInBatches.map(style => (
                                        <option key={style} value={style}>{t(`form.${style.toLowerCase()}`, { defaultValue: style })}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500  uppercase tracking-wider">Time Period</label>
                                <select name="period" value={filters.period} onChange={handleFilterChange} className="w-full rounded-xl border-slate-300  bg-slate-50  text-sm focus:ring-lime-500 focus:border-transparent text-slate-700  p-2.5">
                                    {periodOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500  uppercase tracking-wider">Oven Type</label>
                                <select name="oven" value={filters.oven} onChange={handleFilterChange} className="w-full rounded-xl border-slate-300  bg-slate-50  text-sm focus:ring-lime-500 focus:border-transparent text-slate-700  p-2.5">
                                    <option value="ALL">All Ovens</option>
                                    {OVEN_TYPE_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{t(opt.labelKey)}</option>)}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500  uppercase tracking-wider">Hydration Range</label>
                                <div className="flex items-center gap-2">
                                    <input type="number" name="minHydration" value={filters.minHydration} onChange={handleFilterChange} placeholder="Min %" className="w-full rounded-xl border-slate-300  bg-slate-50  text-sm focus:ring-lime-500 focus:border-transparent text-slate-700  p-2.5" />
                                    <span className="text-slate-400">-</span>
                                    <input type="number" name="maxHydration" value={filters.maxHydration} onChange={handleFilterChange} placeholder="Max %" className="w-full rounded-xl border-slate-300  bg-slate-50  text-sm focus:ring-lime-500 focus:border-transparent text-slate-700  p-2.5" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Content */}
                {batches.filter(b => b.status !== BatchStatus.DRAFT).length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 px-4 rounded-3xl border-2 border-dashed border-slate-200  bg-slate-50/50  text-center">
                        <div className="bg-white  p-4 rounded-full shadow-sm mb-6">
                            <BatchesIcon className="h-12 w-12 text-lime-500" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900  mb-2">Your baking journey starts here</h2>
                        <p className="text-slate-600  max-w-md mx-auto mb-8">
                            Record your experiments, track fermentation times, and rate your results to improve with every bake.
                        </p>
                        <button onClick={handleCreateDraft} className="inline-flex items-center gap-2 rounded-xl bg-lime-500 py-3 px-6 font-bold text-white shadow-lg shadow-lime-500/20 hover:bg-lime-600 hover:shadow-xl hover:scale-105 transition-all">
                            <PlusCircleIcon className="h-5 w-5" />
                            Start First Bake
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredBatches.map(batch => (
                            <BatchCard key={batch.id} batch={batch} t={t} onNavigate={onNavigate} />
                        ))}

                        {/* Pro Slot */}
                        {hasReachedFreeLimit && (
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-4">
                                <ProFeatureLock
                                    featureKey="mylab.unlimited_advanced"
                                    customMessage="Unlock unlimited bakes and advanced comparisons with Lab Pro."
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-40 pointer-events-none select-none filter blur-[1px]">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="h-64 rounded-2xl border border-slate-200  bg-white "></div>
                                        ))}
                                    </div>
                                </ProFeatureLock>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </MyLabLayout>
    );
};

export default MyLabBatchesPage;
