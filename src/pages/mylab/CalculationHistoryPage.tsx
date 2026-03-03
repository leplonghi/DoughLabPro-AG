import React, { useMemo } from 'react';
import { useSavedCalculations } from '@/hooks/useSavedCalculations';
import { useUser } from '@/contexts/UserProvider';
import { getCurrentPlan } from '@/permissions';
import { DoughConfig } from '@/types';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { TrashIcon, BeakerIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';
import { useRouter } from '@/contexts/RouterContext';
import { useCalculator } from '@/contexts/CalculatorContext';
import { EmptyState } from '@/components/ui/EmptyState';

export default function CalculationHistoryPage() {
    const { user } = useUser();
    const { t } = useTranslation();
    const { navigate } = useRouter();
    const { handleConfigChange } = useCalculator();
    const userPlan = getCurrentPlan(user);
    const { calculations: history, loading: isLoading, remove } = useSavedCalculations(user?.uid, userPlan !== 'free');

    const handleReuse = (config: DoughConfig) => {
        handleConfigChange(config);
        navigate('calculator');
    };

    const isFree = userPlan === 'free';
    const historyLimit = isFree ? 5 : 100;

    if (isLoading) {
        return <div className="flex h-64 items-center justify-center"><LoadingSpinner /></div>;
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-20">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black font-heading text-slate-800">
                        {t('common.calculation_history', { defaultValue: 'Histórico de Cálculos' })}
                    </h1>
                    <p className="text-slate-500 mt-2 text-sm">
                        {t('common.calculation_history_desc', { defaultValue: 'Restaure fórmulas que você calculou no passado.' })}
                    </p>
                </div>
                <div className="text-right">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        {history.length} / {historyLimit} salvos
                    </span>
                </div>
            </div>

            {history.length === 0 ? (
                <div className="py-12">
                    <EmptyState
                        icon="📋"
                        title="Nenhum cálculo salvo"
                        description="Seus cálculos de massa aparecerão aqui para você repetir quando quiser."
                        action={{ label: 'Novo cálculo', onClick: () => navigate('calculator') }}
                    />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {history.map((calc) => (
                        <div key={calc.id} className="dlp-card bg-white p-5 flex flex-col relative group hover:shadow-md transition-all">
                            <div className="flex justify-between mb-4">
                                <div>
                                    <h3 className="font-bold text-slate-800 line-clamp-1">{calc.name}</h3>
                                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">
                                        {calc.styleName}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <div>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Farinha</span>
                                    <span className="font-bold text-slate-700">{calc.result.totalFlour.toFixed(0)}g</span>
                                </div>
                                <div>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Massa</span>
                                    <span className="font-bold text-slate-700">{calc.result.totalDough.toFixed(0)}g</span>
                                </div>
                            </div>

                            <div className="mt-auto flex gap-2">
                                <button
                                    onClick={() => handleReuse(calc.inputs as unknown as DoughConfig)}
                                    className="flex-1 py-2.5 bg-dlp-brand/20 hover:bg-dlp-brand text-dlp-brand-dark font-bold text-xs uppercase tracking-widest rounded-xl transition-colors"
                                >
                                    Reusar
                                </button>
                                <button
                                    onClick={() => remove(calc.id)}
                                    className="p-2.5 bg-rose-50 hover:bg-rose-100 text-rose-500 rounded-xl transition-colors"
                                    aria-label="Deletar cálculo"
                                >
                                    <TrashIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {isFree && history.length >= historyLimit && (
                <div className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl flex flex-col items-center text-center">
                    <span className="text-3xl mb-3">⭐</span>
                    <h3 className="font-bold text-amber-900 text-lg mb-2">Limite Atingido</h3>
                    <p className="text-amber-800/80 max-w-sm mb-5 text-sm">
                        Usuários do plano Free podem salvar até {historyLimit} cálculos. Faça o upgrade para remover o limite.
                    </p>
                    <button
                        onClick={() => navigate('plans')}
                        className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-sm transition-transform hover:-translate-y-0.5"
                    >
                        Fazer Upgrade
                    </button>
                </div>
            )}
        </div>
    );
}
