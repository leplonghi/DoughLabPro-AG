import React from 'react';
import { Page } from '@/types';
import { PencilIcon, PlusCircleIcon } from '@/components/ui/Icons';
import MyLabLayout from './MyLabLayout';

interface MyLabSensoryDiaryPageProps {
    onNavigate: (page: Page) => void;
}

const MyLabSensoryDiaryPage: React.FC<MyLabSensoryDiaryPageProps> = ({ onNavigate }) => {
    return (
        <MyLabLayout activePage="mylab/diario-sensorial" onNavigate={onNavigate}>
            <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 ">Sensory Diary</h1>
                        <p className="text-slate-600  mt-2">Record your observations and tasting notes.</p>
                    </div>
                    <button className="flex items-center gap-2 bg-lime-500 text-white px-4 py-2 rounded-xl hover:bg-lime-600 transition-colors shadow-lg shadow-lime-500/20">
                        <PlusCircleIcon className="h-5 w-5" />
                        New Entry
                    </button>
                </div>

                <div className="bg-white  rounded-2xl border border-slate-200  p-12 text-center">
                    <div className="w-16 h-16 bg-slate-100  rounded-full flex items-center justify-center mx-auto mb-4">
                        <PencilIcon className="h-8 w-8 text-slate-400 " />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 ">No entries yet</h3>
                    <p className="text-slate-500  mt-2 max-w-sm mx-auto">
                        Start recording your sensory experiences to improve your baking skills over time.
                    </p>
                </div>
            </div>
        </MyLabLayout>
    );
};

export default MyLabSensoryDiaryPage;
