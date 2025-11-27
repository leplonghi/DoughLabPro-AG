import React from 'react';
import { useUser } from '@/contexts/UserProvider';
import { DocumentTextIcon, PlusCircleIcon } from '@/components/ui/Icons';
import { Page } from '@/types';

interface MeuLabReceitasPageProps {
    onNavigate: (page: Page) => void;
}

const MeuLabReceitasPage: React.FC<MeuLabReceitasPageProps> = ({ onNavigate }) => {
    const { user } = useUser();

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
                    <h1 className="text-3xl font-bold text-slate-900">My Recipes</h1>
                    <p className="text-slate-600 mt-2">Manage your saved dough recipes.</p>
                </div>
                <button
                    onClick={() => onNavigate('calculator')}
                    className="flex items-center gap-2 bg-lime-500 text-white px-4 py-2 rounded-lg hover:bg-lime-600 transition-colors"
                >
                    <PlusCircleIcon className="h-5 w-5" />
                    New Recipe
                </button>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">No recipes yet</h3>
                <p className="text-slate-500 mt-2 max-w-sm mx-auto">
                    Save your favorite dough configurations as recipes to quickly access them later.
                </p>
            </div>
        </div>
    );
};

export default MeuLabReceitasPage;
