import React, { useState, useRef } from 'react';
import { useUser } from '@/contexts/UserProvider';
import { Page, Levain } from '@/types';
import { PlusCircleIcon, BeakerIcon, DownloadIcon, ShareIcon } from '@/components/ui/Icons';
import MyLabLayout from '../MyLabLayout';
import LevainModal from '@/components/LevainModal';
import { importLevains, exportLevains } from '@/services/storageService';
import { useToast } from '@/components/ToastProvider';
import { canUseFeature, getCurrentPlan } from '@/permissions';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import { AdCard } from "@/marketing/ads/AdCard";
import { useTranslation } from '@/i18n';

interface LevainListPageProps {
    onNavigate: (page: Page, params?: string) => void;
}

const statusStyles: Record<string, { color: string, text: string }> = {
    ativo: { color: 'bg-lime-100 text-lime-700', text: 'Active' },
    precisa_atencao: { color: 'bg-orange-100 text-orange-700', text: 'Hungry' },
    descanso: { color: 'bg-blue-100 text-blue-700', text: 'Hibernating' },
    arquivado: { color: 'bg-slate-100 text-slate-500', text: 'Discarded' },
};

const formatTimeSince = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 24) return `${diffInHours}h`;
    return `${Math.floor(diffInHours / 24)}d`;
};

const LevainListPage: React.FC<LevainListPageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
    const { user, levains, addLevain, updateLevain } = useUser();
    const { addToast } = useToast();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const plan = getCurrentPlan(user);

    const handleAddLevainClick = () => {
        if (!canUseFeature(plan, 'levain.multipleLevains') && levains.length >= 1) {
            // This should be handled by LockedTeaser now, but keeping as fallback
            return;
        }
        setIsModalOpen(true);
    };

    const handleSaveLevain = async (levainData: Omit<Levain, 'id' | 'createdAt' | 'updatedAt'>) => {
        try {
            await addLevain(levainData);
            addToast('Levain created successfully', 'success');
            setIsModalOpen(false);
        } catch (error) {
            console.error(error);
            addToast('Failed to create levain', 'error');
        }
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            const importedLevains = await importLevains(file);
            for (const levain of importedLevains) {
                // Remove ID to create new entry
                const { id, ...data } = levain;
                await addLevain(data);
            }
            addToast(`Imported ${importedLevains.length} levains successfully`, 'success');
        } catch (error) {
            console.error(error);
            addToast('Failed to import levains', 'error');
        }
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleExport = () => {
        if (!canUseFeature(plan, 'levain.exportPDF')) {
            return;
        }
        try {
            exportLevains(levains);
            addToast('Levains exported successfully', 'success');
        } catch (error) {
            console.error(error);
            addToast('Failed to export levains', 'error');
        }
    };

    return (
        <MyLabLayout activePage="mylab/levain" onNavigate={onNavigate}>
            <div className="animate-[fadeIn_0.5s_ease-in_out]">
                <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 ">{t('mylab.levain_pet')}</h1>
                        <p className="mt-2 text-sm text-slate-500 ">
                            Track your starters as partners in your dough lab.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        {levains.length >= 1 && !canUseFeature(plan, 'levain.lab_full') ? (
                            <LockedTeaser featureKey="levain.multipleLevains">
                                <button
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime-500 py-2.5 px-5 font-bold text-white shadow-lg shadow-lime-500/20 transition-all opacity-50 cursor-not-allowed"
                                >
                                    <PlusCircleIcon className="h-5 w-5" />
                                    <span>{t('mylab.add_levain')}</span>
                                </button>
                            </LockedTeaser>
                        ) : (
                            <button
                                onClick={handleAddLevainClick}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime-500 py-2.5 px-5 font-bold text-white shadow-lg shadow-lime-500/20 transition-all hover:bg-lime-600 hover:scale-105 active:scale-95"
                            >
                                <PlusCircleIcon className="h-5 w-5" />
                                <span>{t('mylab.add_levain')}</span>
                            </button>
                        )}
                        <div className="flex gap-2">
                            <button onClick={handleImportClick} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white  border border-slate-200  py-2.5 px-4 font-semibold text-slate-700  shadow-sm hover:bg-slate-50 transition-colors">
                                <DownloadIcon className="h-5 w-5" />{t('mylab.import')}</button>
                            <LockedTeaser featureKey="levain.exportPDF">
                                <button onClick={handleExport} disabled={levains.length === 0} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white  border border-slate-200  py-2.5 px-4 font-semibold text-slate-700  shadow-sm hover:bg-slate-50 disabled:opacity-50 transition-colors">
                                    <ShareIcon className="h-5 w-5" />{t('mylab.export')}</button>
                            </LockedTeaser>
                            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".json" style={{ display: 'none' }} />
                        </div>
                    </div>
                </div>

                {levains.length === 0 ? (
                    <div className="text-center rounded-2xl border border-dashed border-slate-300  bg-slate-50  p-12">
                        <div className="mx-auto h-16 w-16 bg-lime-100  rounded-full flex items-center justify-center mb-4">
                            <BeakerIcon className="h-8 w-8 text-lime-600 " />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 ">
                            You don't have a Levain Pet yet.
                        </h2>
                        <p className="mt-2 text-slate-500  max-w-md mx-auto">
                            Create your first starter and track everything—feeding, routine, observations, and usage in recipes.
                        </p>
                        <button
                            onClick={handleAddLevainClick}
                            className="mt-6 rounded-xl bg-lime-500 py-2.5 px-6 font-bold text-white shadow-lg hover:bg-lime-600 transition-all"
                        >{t('mylab.create_levain')}</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {levains.map(starter => {
                            return (
                                <div key={starter.id} className="group relative overflow-hidden rounded-2xl border border-slate-200  bg-white  p-6 shadow-sm transition-all hover:shadow-md hover:border-lime-300">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 bg-orange-100  rounded-xl text-orange-600  group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                            <BeakerIcon className="h-6 w-6" />
                                        </div>
                                        <span className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-lg ${statusStyles[starter.status].color}`}>
                                            {statusStyles[starter.status].text}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900  mb-1">{starter.name}</h3>
                                    <p className="text-sm text-slate-500 ">
                                        Last fed: {formatTimeSince(starter.lastFeeding)} ago
                                    </p>

                                    <div className="mt-6">
                                        <button
                                            onClick={() => onNavigate('mylab/levain/detail', starter.id)}
                                            className="w-full py-2 rounded-lg bg-slate-50  text-sm font-semibold text-slate-700  hover:bg-lime-50 hover:text-lime-700 transition-colors"
                                        >{t('mylab.view_details_3')}</button>
                                    </div>
                                </div>
                            )
                        })}

                        {!canUseFeature(plan, 'levain.lab_full') && levains.length >= 1 && (
                            <LockedTeaser featureKey="levain.multipleLevains">
                                <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-lime-200 bg-lime-50/50 p-6 h-full min-h-[200px]">
                                    <div className="p-3 bg-lime-100 rounded-full text-lime-600 mb-3">
                                        <PlusCircleIcon className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-bold text-lime-800 text-lg">{t('mylab.add_another_levain')}</h3>
                                    <p className="mt-2 text-xs text-center text-lime-700 max-w-[200px]">
                                        Free plan includes 1 Levain Pet.
                                    </p>
                                </div>
                            </LockedTeaser>
                        )}
                    </div>
                )}
                <AdCard context="levain_footer" className="mt-8" />
            </div>
            <LevainModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveLevain}
                levainToEdit={null}
            />
        </MyLabLayout>
    );
};

export default LevainListPage;
