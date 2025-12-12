import React, { useState, useMemo } from 'react';
import { Page, TestSeries } from '@/types';
import MyLabLayout from './MyLabLayout';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';
import { FlaskIcon, PlusCircleIcon } from '@/components/ui/Icons';
import ConsistencySeriesModal from '@/components/mylab/ConsistencySeriesModal';
import { LockFeature } from '@/components/auth/LockFeature';

const ConsistencyListPage: React.FC<{ onNavigate: (page: Page, params?: string) => void }> = ({ onNavigate }) => {
    const { testSeries, addTestSeries, updateTestSeries } = useUser();
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSeries, setEditingSeries] = useState<TestSeries | null>(null);

    const handleOpenModal = (series: TestSeries | null = null) => {
        setEditingSeries(series);
        setIsModalOpen(true);
    };

    // FIX: Make function async to handle promises from context.
    const handleSaveSeries = async (seriesData: Omit<TestSeries, 'id' | 'createdAt' | 'updatedAt' | 'relatedBakes'> | (Partial<TestSeries> & { id: string })) => {
        if ('id' in seriesData) {
            await updateTestSeries(seriesData);
        } else {
            await addTestSeries(seriesData);
        }
        setIsModalOpen(false);
    };

    const sortedSeries = useMemo(() =>
        [...testSeries].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
        [testSeries]);

    return (
        <>
            <MyLabLayout activePage="mylab/consistency" onNavigate={onNavigate}>
                <div className="animate-fade-in">
                    <LockFeature
                        featureKey="mylab.unlimited_advanced"
                        customMessage="Unlock Consistency Mode to plan and track test series with Lab Pro."
                    >
                        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight text-slate-900 ">{t('mylab.consistency_mode')}</h1>
                                <p className="mt-2 text-slate-600 ">{t('mylab.plan_and_track_test_series_with_controlled_variabl')}</p>
                            </div>
                            <button onClick={() => handleOpenModal()} className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-lime-500 py-2.5 px-5 font-bold text-white shadow-lg shadow-lime-500/20 hover:bg-lime-600 transition-all hover:scale-105 active:scale-95">
                                <PlusCircleIcon className="h-5 w-5" />{t('mylab.create_new_series')}</button>
                        </div>

                        {sortedSeries.length > 0 ? (
                            <div className="space-y-4">
                                {sortedSeries.map(series => (
                                    <div key={series.id} className="rounded-2xl bg-white  p-6 border border-slate-200  shadow-sm hover:shadow-md transition-all">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold text-lg text-slate-900 ">{series.name}</h4>
                                                <p className="text-sm text-slate-600  mt-1">{series.description}</p>
                                            </div>
                                            <button onClick={() => onNavigate(`mylab/consistency/${series.id}`)} className="text-sm font-bold text-lime-600  hover:underline uppercase tracking-wider">{t('mylab.view_details')}</button>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-slate-200  flex flex-wrap items-center gap-4 text-xs text-slate-500 ">
                                            <span className="bg-slate-100  px-2 py-1 rounded-md">Variable: <strong className="text-slate-700 ">{series.parameters.variable}</strong></span>
                                            <span className="bg-slate-100  px-2 py-1 rounded-md">Steps: <strong className="text-slate-700 ">{series.parameters.steps.join(' / ')}</strong></span>
                                            <span className="bg-slate-100  px-2 py-1 rounded-md">Bakes: <strong className="text-slate-700 ">{series.relatedBakes.length}</strong></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 rounded-2xl border-2 border-dashed border-slate-300  bg-slate-50/50 ">
                                <FlaskIcon className="mx-auto h-12 w-12 text-slate-400 " />
                                <p className="mt-4 font-bold text-slate-700 ">{t('mylab.no_test_series_created')}</p>
                                <p className="text-sm text-slate-500  mt-1">{t('mylab.click_create_new_series_to_start_your_first_experi')}</p>
                            </div>
                        )}
                    </LockFeature>
                </div>
            </MyLabLayout>
            <ConsistencySeriesModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveSeries}
                seriesToEdit={editingSeries}
            />
        </>
    );
};

export default ConsistencyListPage;
