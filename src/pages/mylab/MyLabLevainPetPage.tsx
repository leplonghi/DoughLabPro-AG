import React from 'react';
import { useUser } from '@/contexts/UserProvider';
import { FireIcon } from '@/components/ui/Icons';
import { ProFeatureLock } from '@/components/ProFeatureLock';
import MyLabLayout from './MyLabLayout';
import { Page } from '@/types';

interface MyLabLevainPetPageProps {
    onNavigate: (page: Page) => void;
}

const MyLabLevainPetPage: React.FC<MyLabLevainPetPageProps> = ({ onNavigate }) => {
    const { levains } = useUser();
    const activeLevain = levains.find(l => l.status === 'ativo');

    return (
        <MyLabLayout activePage="mylab/levain-pet" onNavigate={onNavigate}>
            <div className="animate-fade-in">
                <h1 className="text-3xl font-bold text-slate-900  mb-6">Levain Pet Dashboard</h1>

                {activeLevain ? (
                    <div className="bg-white  rounded-2xl border border-slate-200  p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-orange-100  rounded-full text-orange-600 ">
                                <FireIcon className="h-8 w-8" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 ">{activeLevain.name}</h2>
                                <p className="text-slate-600 ">Status: Active</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4 bg-slate-50  rounded-xl">
                                <p className="text-sm text-slate-500 ">Last Feeding</p>
                                <p className="font-semibold text-slate-900 ">{new Date(activeLevain.lastFeeding).toLocaleDateString()}</p>
                            </div>
                            <div className="p-4 bg-slate-50  rounded-xl">
                                <p className="text-sm text-slate-500 ">Age</p>
                                <p className="font-semibold text-slate-900 ">{Math.floor((Date.now() - new Date(activeLevain.createdAt).getTime()) / (1000 * 60 * 60 * 24))} days</p>
                            </div>
                            <div className="p-4 bg-slate-50  rounded-xl">
                                <p className="text-sm text-slate-500 ">Hydration</p>
                                <p className="font-semibold text-slate-900 ">100%</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white  rounded-2xl border border-slate-200  p-12 text-center">
                        <FireIcon className="h-12 w-12 text-slate-300  mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-slate-900 ">No active Levain</h3>
                        <p className="text-slate-500  mt-2">Go to the Levain List to create or activate one.</p>
                    </div>
                )}

                {/* Advanced Analytics Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-bold text-slate-900  mb-4">Fermentation Health</h3>
                    <ProFeatureLock origin="levain" featureKey="levain_unlimited" contextLabel="Advanced Levain Analytics">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="h-48 bg-slate-50  rounded-2xl border border-slate-200  flex items-center justify-center">
                                <span className="text-slate-400  font-medium">Activity Chart</span>
                            </div>
                            <div className="h-48 bg-slate-50  rounded-2xl border border-slate-200  flex items-center justify-center">
                                <span className="text-slate-400  font-medium">pH History</span>
                            </div>
                        </div>
                    </ProFeatureLock>
                </div>
            </div>
        </MyLabLayout>
    );
};

export default MyLabLevainPetPage;
