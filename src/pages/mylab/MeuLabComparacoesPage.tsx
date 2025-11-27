import React from 'react';
import { Page, DoughConfig } from '@/types';
import { ChartBarIcon, PlusCircleIcon } from '@/components/ui/Icons';

interface MeuLabComparacoesPageProps {
    onNavigate: (page: Page) => void;
    onLoadAndNavigate?: (config: Partial<DoughConfig>) => void;
}

const MeuLabComparacoesPage: React.FC<MeuLabComparacoesPageProps> = ({ onNavigate }) => {
    return (
        <div className="max-w-4xl mx-auto p-6 animate-fade-in">
            <button
                onClick={() => onNavigate('mylab')}
                className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
            >
                &larr; Back to Lab
            </button>

            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Comparisons</h1>
                    <p className="text-slate-600 mt-2">Compare different batches side-by-side.</p>
                </div>
                <button className="flex items-center gap-2 bg-lime-500 text-white px-4 py-2 rounded-lg hover:bg-lime-600 transition-colors">
                    <PlusCircleIcon className="h-5 w-5" />
                    New Comparison
                </button>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ChartBarIcon className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">No comparisons yet</h3>
                <p className="text-slate-500 mt-2 max-w-sm mx-auto">
                    Select two or more batches to compare their outcomes and learn what works best.
                </p>
            </div>
        </div>
    );
};

export default MeuLabComparacoesPage;
