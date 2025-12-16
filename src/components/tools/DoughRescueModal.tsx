import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { AlertCircle, Thermometer, Droplets, Wind, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface RescueOption {
    id: string;
    icon: any;
    label: string;
    description: string;
    fix: string;
    color: string;
}

const RESCUE_OPTIONS: RescueOption[] = [
    {
        id: 'sticky',
        icon: Droplets,
        label: 'Too Sticky',
        description: 'Dough is clinging to hands/bowl excessively.',
        fix: 'Stop! Do not add more flour yet. Let it rest for 15 minutes (Autolyse). The flour needs time to absorb the water. If still sticky, use wet hands to fold, not flour.',
        color: 'text-blue-500 bg-blue-50 border-blue-100'
    },
    {
        id: 'dry',
        icon: Wind,
        label: 'Too Dry / Crumbly',
        description: 'Dough won\'t come together or feels hard.',
        fix: 'Do not pour water directly. Wet your hands repeatedly and fold the water into the dough. Cover and rest for 20 minutes to let hydration equalize.',
        color: 'text-amber-500 bg-amber-50 border-amber-100'
    },
    {
        id: 'cold',
        icon: Thermometer,
        label: 'Not Rising / Slow',
        description: 'It\'s been hours and nothing is happening.',
        fix: 'Yeast might be cold. Move the bowl to a warmer spot (e.g., inside the oven with just the light on). Target 24°C-26°C (75°F-78°F). Be patient.',
        color: 'text-purple-500 bg-purple-50 border-purple-100'
    },
    {
        id: 'tear',
        icon: AlertCircle,
        label: 'Tearing When Stretched',
        description: 'Gluten structure is breaking or weak.',
        fix: 'The gluten is tight or underdeveloped. Let it relax! Cover and rest for 20-30 minutes. Do not force it. Time builds strength.',
        color: 'text-rose-500 bg-rose-50 border-rose-100'
    }
];

interface DoughRescueModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DoughRescueModal: React.FC<DoughRescueModalProps> = ({ isOpen, onClose }) => {
    const [selectedIssue, setSelectedIssue] = useState<RescueOption | null>(null);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="relative z-50">
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" onClick={onClose} />

                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl max-w-md w-full overflow-hidden border border-dlp-border"
                        >
                            <div className="p-5 border-b border-dlp-border flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                                <div>
                                    <h3 className="text-lg font-bold text-dlp-text-primary flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5 text-dlp-accent" />
                                        Dough Rescue
                                    </h3>
                                    <p className="text-xs text-dlp-text-muted">Don't panic. Everything is fixable.</p>
                                </div>
                                <button onClick={onClose} className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                                    <X className="w-5 h-5 text-dlp-text-secondary" />
                                </button>
                            </div>

                            <div className="p-4 max-h-[70vh] overflow-y-auto">
                                {!selectedIssue ? (
                                    <div className="grid grid-cols-1 gap-3">
                                        <p className="text-sm font-medium text-dlp-text-secondary mb-2">What seems to be the problem?</p>
                                        {RESCUE_OPTIONS.map((option) => (
                                            <button
                                                key={option.id}
                                                onClick={() => setSelectedIssue(option)}
                                                className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all hover:scale-[1.02] active:scale-[0.98] ${option.color} border-current`} // specialized border
                                                style={{ borderColor: 'transparent' }} // override for calmer look if needed, but color class handles it
                                            >
                                                <div className={`p-2 rounded-full bg-white/80`}>
                                                    <option.icon className={`w-6 h-6 ${option.color.split(' ')[0]}`} />
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-dlp-text-primary">{option.label}</span>
                                                    <span className="text-xs text-dlp-text-secondary opacity-80">{option.description}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <button
                                            onClick={() => setSelectedIssue(null)}
                                            className="text-xs font-semibold text-dlp-text-muted hover:text-dlp-text-primary flex items-center gap-1 mb-2"
                                        >
                                            ← Back to issues
                                        </button>

                                        <div className={`p-5 rounded-xl ${selectedIssue.color} bg-opacity-30`}>
                                            <div className="flex items-center gap-3 mb-3">
                                                <selectedIssue.icon className={`w-8 h-8 ${selectedIssue.color.split(' ')[0]}`} />
                                                <h4 className="text-xl font-bold text-dlp-text-primary">{selectedIssue.label}</h4>
                                            </div>
                                            <div className="bg-white/60 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                                                <p className="font-semibold text-sm text-dlp-text-secondary mb-1 uppercase tracking-wider">The Fix</p>
                                                <p className="text-base text-dlp-text-primary leading-relaxed">
                                                    {selectedIssue.fix}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-dlp-border text-center">
                                            <p className="text-sm text-dlp-text-secondary italic">
                                                "Dough is alive. It responds to time and patience better than force."
                                            </p>
                                        </div>

                                        <button
                                            onClick={onClose}
                                            className="w-full py-3 bg-dlp-accent hover:bg-dlp-accent-hover text-white rounded-xl font-bold shadow-dlp-sm transition-all"
                                        >
                                            Got it, trying this now
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};
