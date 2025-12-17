
import React from 'react';
import { useDoughSession } from '@/contexts/DoughSessionContext';
import { Save } from 'lucide-react';
import { useToast } from '@/components/ToastProvider';

interface DashboardFooterProps {
    onSave: () => void;
}

export const DashboardFooter: React.FC<DashboardFooterProps> = ({ onSave }) => {
    const { isSaving, session } = useDoughSession();
    // const { addToast } = useToast(); // Handled by parent usually, but we can keep for generic feedback? 
    // Actually handleStartBatch in App.tsx handles toasts.

    const handleSave = () => {
        onSave();
    };

    return (
        <div className="sticky bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 z-50">
            <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                    {isSaving ? 'Syncing...' : `Last saved: ${new Date(session.meta.lastSaved).toLocaleTimeString()}`}
                </div>

                <button
                    onClick={handleSave}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
                >
                    <Save size={18} />
                    Save to My Labs
                </button>
            </div>
        </div>
    );
};
