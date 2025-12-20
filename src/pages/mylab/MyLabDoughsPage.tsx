import React, { useMemo } from 'react';
import { Page, BatchStatus } from '@/types';
import { ClockIcon, PlusCircleIcon, BeakerIcon } from '@/components/ui/Icons';
import MyLabLayout from './MyLabLayout';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';

interface MyLabDoughsPageProps {
    onNavigate: (page: Page) => void;
}

const MyLabDoughsPage: React.FC<MyLabDoughsPageProps> = ({ onNavigate }) => {
    const { batches } = useUser();
    const { t } = useTranslation();

    const activeBatches = useMemo(() => {
        return batches.filter(batch =>
            batch.status === BatchStatus.IN_PROGRESS ||
            batch.status === BatchStatus.PLANNED
        ).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }, [batches]);

    return (
        <MyLabLayout activePage="mylab/massas" onNavigate={onNavigate}>
            <div className="animate-fade-in pb-20">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 ">{t('mylab.active_doughs')}</h1>
                        <p className="text-slate-600  mt-2">{t('mylab.monitor_doughs_currently_in_fermentation')}</p>
                    </div>
                    <button
                        onClick={() => onNavigate('calculator')}
                        className="flex items-center gap-2 bg-dlp-brand text-white px-4 py-2 rounded-xl hover:bg-dlp-brand hover:text-white-hover transition-colors shadow-lg shadow-dlp-brand/20"
                    >
                        <PlusCircleIcon className="h-5 w-5" />{t('mylab.start_new_dough')}</button>
                </div>

                {activeBatches.length === 0 ? (
                    <div className="bg-white  rounded-2xl border border-slate-200  p-12 text-center">
                        <div className="w-16 h-16 bg-slate-100  rounded-full flex items-center justify-center mx-auto mb-4">
                            <ClockIcon className="h-8 w-8 text-slate-400 " />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 ">{t('mylab.no_active_doughs')}</h3>
                        <p className="text-slate-500  mt-2 max-w-sm mx-auto">
                            You don't have any doughs currently fermenting. Start a new batch in the calculator!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeBatches.map(batch => (
                            <div
                                key={batch.id}
                                onClick={() => onNavigate(`batch/${batch.id}`)}
                                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`
                                        px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                                        ${batch.status === BatchStatus.IN_PROGRESS ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}
                                    `}>
                                        {batch.status === BatchStatus.IN_PROGRESS ? t('ui.fermenting_416') : t('ui.planned_417')}
                                    </div>
                                    <BeakerIcon className="h-5 w-5 text-slate-300 group-hover:text-dlp-brand transition-colors" />
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-dlp-brand-hover transition-colors">
                                    {batch.name}
                                </h3>
                                <p className="text-sm text-slate-500 mb-4">
                                    {t(`form.${batch.doughConfig.recipeStyle.toLowerCase()}`, { defaultValue: batch.doughConfig.recipeStyle })}
                                </p>

                                <div className="space-y-2 text-sm text-slate-600">
                                    <div className="flex justify-between">
                                        <span>{t('mylab.hydration')}</span>
                                        <span className="font-mono font-medium">{batch.doughConfig.hydration}%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>{t('mylab.weight')}</span>
                                        <span className="font-mono font-medium">
                                            {batch.doughResult?.totalDough ? Math.round(batch.doughResult.totalDough) : '-'}g
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>{t('mylab.created')}</span>
                                        <span className="font-mono font-medium">
                                            {new Date(batch.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </MyLabLayout>
    );
};

export default MyLabDoughsPage;


