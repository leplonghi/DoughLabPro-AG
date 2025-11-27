import React from 'react';
import { useUser } from '@/contexts/UserProvider';
import { FireIcon } from '@/components/ui/Icons';

const MeuLabLevainPetPage: React.FC = () => {
    const { levains } = useUser();
    const activeLevain = levains.find(l => l.status === 'ativo');

    return (
        <div className="max-w-4xl mx-auto p-6 animate-fade-in">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Levain Pet Dashboard</h1>

            {activeLevain ? (
                <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                            <FireIcon className="h-8 w-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">{activeLevain.name}</h2>
                            <p className="text-slate-600">Status: Active</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 bg-slate-50 rounded-lg">
                            <p className="text-sm text-slate-500">Last Feeding</p>
                            <p className="font-semibold">{new Date(activeLevain.lastFeeding).toLocaleDateString()}</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg">
                            <p className="text-sm text-slate-500">Age</p>
                            <p className="font-semibold">{Math.floor((Date.now() - new Date(activeLevain.createdAt).getTime()) / (1000 * 60 * 60 * 24))} days</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg">
                            <p className="text-sm text-slate-500">Hydration</p>
                            <p className="font-semibold">100%</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                    <FireIcon className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900">No active Levain</h3>
                    <p className="text-slate-500 mt-2">Go to the Levain List to create or activate one.</p>
                </div>
            )}
        </div>
    );
};

export default MeuLabLevainPetPage;
