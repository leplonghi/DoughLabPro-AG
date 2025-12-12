import React, { useState, useMemo } from 'react';
import { Page, Batch, DoughConfig, BatchStatus } from '@/types';
import { ChartBarIcon, PlusCircleIcon, CheckCircleIcon, ArrowLeftIcon } from '@/components/ui/Icons';
import MyLabLayout from './MyLabLayout';
import { LockFeature } from '@/components/auth/LockFeature';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';

interface MyLabComparisonsPageProps {
    onNavigate: (page: Page) => void;
    onLoadAndNavigate?: (config: Partial<DoughConfig>) => void;
}

const MyLabComparisonsPage: React.FC<MyLabComparisonsPageProps> = ({ onNavigate }) => {
    const { batches } = useUser();
    const { t } = useTranslation();
    const [selectedBatchIds, setSelectedBatchIds] = useState<string[]>([]);
    const [isComparing, setIsComparing] = useState(false);

    // Filter out drafts
    const validBatches = useMemo(() =>
        batches
            .filter(b => b.status !== BatchStatus.DRAFT)
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
        [batches]
    );

    const toggleSelection = (id: string) => {
        if (selectedBatchIds.includes(id)) {
            setSelectedBatchIds(prev => prev.filter(bId => bId !== id));
        } else {
            if (selectedBatchIds.length >= 3) return; // Max 3
            setSelectedBatchIds(prev => [...prev, id]);
        }
    };

    const handleCompare = () => {
        if (selectedBatchIds.length >= 2) {
            setIsComparing(true);
        }
    };

    const clearSelection = () => {
        setIsComparing(false);
        setSelectedBatchIds([]);
    };

    const selectedBatches = validBatches.filter(b => selectedBatchIds.includes(b.id));

    return (
        <MyLabLayout activePage="mylab/comparacoes" onNavigate={onNavigate}>
            <div className="animate-fade-in pb-20">
                <LockFeature featureKey="mylab.unlimited_advanced" customMessage="Unlock Batch Comparisons with Lab Pro.">
                    {!isComparing ? (
                        <>
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-900">{t('mylab.comparisons')}</h1>
                                    <p className="text-slate-600 mt-2">{t('mylab.select_up_to_3_batches_to_compare_sidebyside')}</p>
                                </div>
                                {selectedBatchIds.length > 0 && (
                                    <button
                                        onClick={clearSelection}
                                        className="text-sm font-bold text-slate-500 hover:text-red-500"
                                    >{t('mylab.clear_selection')}</button>
                                )}
                            </div>

                            {/* Batch List */}
                            {validBatches.length === 0 ? (
                                <div className="text-center py-12 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200">
                                    <div className="mx-auto w-12 h-12 text-slate-300 mb-3">
                                        <ChartBarIcon />
                                    </div>
                                    <p className="text-slate-500 font-medium">{t('mylab.no_completed_batches_found_to_compare')}</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {validBatches.map(batch => {
                                        const isSelected = selectedBatchIds.includes(batch.id);
                                        return (
                                            <div
                                                key={batch.id}
                                                onClick={() => toggleSelection(batch.id)}
                                                className={`
                                                    relative p-4 rounded-xl border cursor-pointer transition-all hover:shadow-md
                                                    ${isSelected
                                                        ? 'border-lime-500 bg-lime-50 ring-2 ring-lime-500 ring-offset-2'
                                                        : 'border-slate-200 bg-white hover:border-lime-300'
                                                    }
                                                `}
                                            >
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className={`
                                                            w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs
                                                            ${batch.rating && batch.rating >= 4 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}
                                                        `}>
                                                            {batch.rating || '-'}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 text-sm line-clamp-1">{batch.name}</h4>
                                                            <span className="text-xs text-slate-500">{new Date(batch.createdAt).toLocaleDateString()}</span>
                                                        </div>
                                                    </div>
                                                    {isSelected && <CheckCircleIcon className="w-6 h-6 text-lime-600" />}
                                                </div>

                                                <div className="grid grid-cols-3 gap-2 text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200/50">
                                                    <div className="text-center">
                                                        <span className="block font-bold text-slate-700">{batch.doughConfig.hydration}%</span>
                                                        <span className="">{t('form.hydration')}</span>
                                                    </div>
                                                    <div className="text-center">
                                                        <span className="block font-bold text-slate-700">{batch.doughConfig.recipeStyle}</span>
                                                        <span className="">{t('mylab.style_2')}</span>
                                                    </div>
                                                    <div className="text-center">
                                                        <span className="block font-bold text-slate-700">
                                                            {(batch.bulkTimeHours || 0) + (batch.proofTimeHours || 0)}h
                                                        </span>
                                                        <span className="">{t('mylab.total_time_2')}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Floating Action Bar */}
                            <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${selectedBatchIds.length >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                                <button
                                    onClick={handleCompare}
                                    className="flex items-center gap-2 bg-lime-600 hover:bg-lime-500 text-white px-8 py-3 rounded-full shadow-xl font-bold text-lg transition-colors"
                                >
                                    <ChartBarIcon className="w-5 h-5" />
                                    Compare {selectedBatchIds.length} Batches
                                </button>
                            </div>
                        </>
                    ) : (
                        // Comparison View
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setIsComparing(false)}
                                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <ArrowLeftIcon className="w-6 h-6 text-slate-600" />
                                </button>
                                <h1 className="text-2xl font-bold text-slate-900">{t('mylab.comparison_result')}</h1>
                            </div>

                            <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50">
                                            <th className="p-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-r border-slate-200 w-32 sticky left-0 bg-slate-50 z-10">{t('mylab.metric')}</th>
                                            {selectedBatches.map(batch => (
                                                <th key={batch.id} className="p-4 text-left border-b border-slate-200 min-w-[200px]">
                                                    <div className="font-bold text-slate-900 text-lg mb-1">{batch.name}</div>
                                                    <div className="text-xs text-slate-500">{new Date(batch.createdAt).toLocaleDateString()}</div>
                                                    {batch.rating && (
                                                        <div className={`mt-2 inline-flex px-2 py-0.5 rounded textxs font-bold ${batch.rating >= 4 ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                            Rating: {batch.rating}/5
                                                        </div>
                                                    )}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <ComparisonRow label={t('mylab.style_2')} values={selectedBatches.map(b => b.doughConfig.recipeStyle)} />
                                        <ComparisonRow label={t('form.hydration')} values={selectedBatches.map(b => `${b.doughConfig.hydration}%`)} highlight />
                                        <ComparisonRow label={t('results.flour')} values={selectedBatches.map(b => `${b.doughConfig.flourAmount}g`)} />
                                        <ComparisonRow label={t('results.salt')} values={selectedBatches.map(b => `${b.doughConfig.salt}%`)} />
                                        <ComparisonRow label={t('results.yeast')} values={selectedBatches.map(b => `${b.doughConfig.yeastValue}${b.doughConfig.yeastType === 'sourdough' ? '%' : 'g'}`)} />

                                        <tr className="bg-slate-50/50"><td colSpan={selectedBatches.length + 1} className="p-2 px-4 text-xs font-bold text-slate-400 uppercase">{t('mylab.process')}</td></tr>

                                        <ComparisonRow label={t('mylab.bulk_ferm')} values={selectedBatches.map(b => b.bulkTimeHours ? `${b.bulkTimeHours}h` : '-')} />
                                        <ComparisonRow label={t('mylab.proofing')} values={selectedBatches.map(b => b.proofTimeHours ? `${b.proofTimeHours}h` : '-')} />
                                        <ComparisonRow label={t('mylab.oven_type')} values={selectedBatches.map(b => b.ovenType || '-')} />

                                        <tr className="bg-slate-50/50"><td colSpan={selectedBatches.length + 1} className="p-2 px-4 text-xs font-bold text-slate-400 uppercase">{t('mylab.outcome')}</td></tr>

                                        <ComparisonRow label={t('mylab.notes')} values={selectedBatches.map(b => b.notes || '-')} isLongText />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </LockFeature>
            </div>
        </MyLabLayout>
    );
};

const ComparisonRow: React.FC<{ label: string; values: string[]; highlight?: boolean; isLongText?: boolean }> = ({ label, values, highlight, isLongText }) => (
    <tr className={highlight ? 'bg-lime-50/30' : ''}>
        <td className="p-4 text-sm font-bold text-slate-500 border-r border-slate-100 sticky left-0 bg-white z-10">{label}</td>
        {values.map((v, i) => (
            <td key={i} className={`p-4 text-sm text-slate-800 ${isLongText ? 'min-w-[250px] leading-relaxed' : 'font-medium'}`}>
                {v}
            </td>
        ))}
    </tr>
);

export default MyLabComparisonsPage;
