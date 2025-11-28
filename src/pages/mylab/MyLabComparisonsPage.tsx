import React from 'react';
import { Page, DoughConfig } from '@/types';
import { ChartBarIcon, PlusCircleIcon } from '@/components/ui/Icons';
import MyLabLayout from './MyLabLayout';
import { ProFeatureLock } from '@/components/ProFeatureLock';

interface MyLabComparisonsPageProps {
    onNavigate: (page: Page) => void;
    onLoadAndNavigate?: (config: Partial<DoughConfig>) => void;
}

const MyLabComparisonsPage: React.FC<MyLabComparisonsPageProps> = ({ onNavigate }) => {
    return (
        <MyLabLayout activePage="mylab/comparacoes" onNavigate={onNavigate}>
            <div className="animate-fade-in">
                <ProFeatureLock featureKey="mylab_comparisons" contextLabel="Batch Comparisons" origin="mylab">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 ">Comparisons</h1>
                            <p className="text-slate-600  mt-2">Compare different batches side-by-side.</p>
                        </div>
                        <button className="flex items-center gap-2 bg-lime-500 text-white px-4 py-2 rounded-xl hover:bg-lime-600 transition-colors shadow-lg shadow-lime-500/20">
                            <PlusCircleIcon className="h-5 w-5" />
                            New Comparison
                        </button>
                    </div>

                    <div className="bg-white  rounded-2xl border border-slate-200  p-12 text-center">
                        <div className="w-16 h-16 bg-slate-100  rounded-full flex items-center justify-center mx-auto mb-4">
                            <ChartBarIcon className="h-8 w-8 text-slate-400 " />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 ">No comparisons yet</h3>
                        <p className="text-slate-500  mt-2 max-w-sm mx-auto">
                            Select two or more batches to compare their outcomes and learn what works best.
                        </p>
                    </div>
                </ProFeatureLock>
            </div>
        </MyLabLayout>
    );
};

export default MyLabComparisonsPage;
