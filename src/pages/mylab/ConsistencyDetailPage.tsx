import React, { useState, useMemo } from 'react';
import { Page, TestSeries, Batch } from '@/types';
import MyLabLayout from './MyLabLayout';
import { useUser } from '@/contexts/UserProvider';
import { FlaskIcon, SparklesIcon, BatchesIcon, PlusCircleIcon } from '@/components/ui/Icons';

interface ConsistencyDetailPageProps {
    seriesId: string | null;
    onNavigate: (page: Page, params?: string) => void;
}

const ConsistencyDetailPage: React.FC<ConsistencyDetailPageProps> = ({ seriesId, onNavigate }) => {
    const { testSeries, batches, attachBakeToSeries, updateTestSeries } = useUser();
    const [notes, setNotes] = useState('');
    const [isEditingNotes, setIsEditingNotes] = useState(false);
    const [selectedBake, setSelectedBake] = useState('');

    const series = useMemo(() => testSeries.find(s => s.id === seriesId), [testSeries, seriesId]);

    React.useEffect(() => {
        if (series) {
            setNotes(series.description);
        }
    }, [series]);

    const relatedBakes = useMemo(() => {
        if (!series) return [];
        return series.relatedBakes
            .map(bakeId => batches.find(b => b.id === bakeId))
            .filter((b): b is Batch => b !== undefined)
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }, [series, batches]);

    const unattachedBakes = useMemo(() => {
        if (!series) return [];
        return batches.filter(b => !series.relatedBakes.includes(b.id))
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 20); // Limit to recent bakes
    }, [series, batches]);

    const handleAttachBake = () => {
        if (seriesId && selectedBake) {
            attachBakeToSeries(seriesId, selectedBake);
            setSelectedBake('');
        }
    };

    const handleSaveNotes = () => {
        if (series) {
            updateTestSeries({ id: series.id, description: notes });
            setIsEditingNotes(false);
        }
    };

    if (!series) {
        return (
            <MyLabLayout activePage="mylab/consistency" onNavigate={onNavigate}>
                <div className="p-8 text-center">
                    <p className="text-slate-600 ">Test series not found.</p>
                </div>
            </MyLabLayout>
        );
    }

    return (
        <MyLabLayout activePage="mylab/consistency" onNavigate={onNavigate}>
            <div className="animate-fade-in">
                <div className="mb-8">
                    <button
                        onClick={() => onNavigate('mylab/consistency')}
                        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
                    >
                        &larr; Back to Series
                    </button>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 ">{series.name}</h1>
                    <p className="mt-2 text-slate-600 ">Summary of your controlled test series.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Associated Bakes */}
                        <div className="rounded-2xl border border-slate-200  bg-white  p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900  mb-4">Associated Bakes ({relatedBakes.length})</h3>
                            {relatedBakes.length > 0 ? (
                                <div className="space-y-3">
                                    {relatedBakes.map(bake => (
                                        <div key={bake.id} onClick={() => onNavigate('batch', bake.id)} className="cursor-pointer p-4 rounded-xl bg-slate-50  hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200">
                                            <p className="font-bold text-slate-800 ">{bake.name}</p>
                                            <p className="text-xs text-slate-500  mt-1">{new Date(bake.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : <p className="text-sm text-center text-slate-500  py-6">No bakes associated yet.</p>}

                            <div className="mt-6 pt-6 border-t border-slate-200  flex flex-col sm:flex-row items-center gap-3">
                                <select value={selectedBake} onChange={e => setSelectedBake(e.target.value)} className="w-full flex-grow rounded-xl border-slate-300  bg-white  text-sm py-2.5 px-3 text-slate-700  focus:ring-2 focus:ring-lime-500 focus:border-transparent">
                                    <option value="">Select a bake to associate...</option>
                                    {unattachedBakes.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                                </select>
                                <button onClick={handleAttachBake} disabled={!selectedBake} className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 rounded-xl bg-lime-500 py-2.5 px-4 text-sm font-bold text-white shadow-lg shadow-lime-500/20 disabled:bg-slate-300 disabled:shadow-none transition-all hover:bg-lime-600">
                                    <PlusCircleIcon className="h-5 w-5" /> Associate
                                </button>
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="rounded-2xl border border-slate-200  bg-white  p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900  mb-4">Series Notes</h3>
                            {isEditingNotes ? (
                                <div>
                                    <textarea rows={5} value={notes} onChange={e => setNotes(e.target.value)} className="w-full rounded-xl border-slate-300  bg-white  text-sm text-slate-700  p-3 focus:ring-2 focus:ring-lime-500 focus:border-transparent" />
                                    <div className="flex justify-end gap-2 mt-3">
                                        <button onClick={() => setIsEditingNotes(false)} className="text-sm font-semibold text-slate-600  hover:text-slate-800 px-3 py-2">Cancel</button>
                                        <button onClick={handleSaveNotes} className="text-sm font-bold text-white bg-lime-500 hover:bg-lime-600 px-4 py-2 rounded-lg">Save</button>
                                    </div>
                                </div>
                            ) : (
                                <div onClick={() => setIsEditingNotes(true)} className="cursor-pointer prose-sm text-slate-600  min-h-[5rem] p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                                    {notes || <p className="italic text-slate-400 ">Click to add notes...</p>}
                                </div>
                            )}
                        </div>

                        {/* AI Analysis Placeholder */}
                        <div className="rounded-2xl border-2 border-dashed border-slate-300  p-8 text-center bg-slate-50/50 ">
                            <SparklesIcon className="mx-auto h-10 w-10 text-slate-400 " />
                            <h3 className="mt-3 text-lg font-bold text-slate-800 ">AI Analysis</h3>
                            <p className="mt-2 text-sm text-slate-600 ">Coming soon: AI will analyze your bake results and generate a comparative report.</p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="rounded-2xl border border-slate-200  bg-slate-50  p-6 shadow-sm sticky top-24">
                            <h3 className="text-lg font-bold text-slate-900  mb-4">Test Parameters</h3>
                            <div className="space-y-4 text-sm">
                                <p className="text-slate-700 "><strong className="text-slate-900 ">Variable:</strong> {series.parameters.variable}</p>
                                <div>
                                    <strong className="text-slate-900  block mb-2">Steps tested:</strong>
                                    <ul className="space-y-2">
                                        {series.parameters.steps.map((step, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-700  bg-white  px-3 py-2 rounded-lg border border-slate-200 ">
                                                <span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span>
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MyLabLayout>
    );
};

export default ConsistencyDetailPage;
