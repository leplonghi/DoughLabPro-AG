
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardHeader } from '@/components/dashboard/Header';
import { DashboardFooter } from '@/components/dashboard/Footer';
import { LabSection } from '@/components/dashboard/sections/LabSection';
import { SchedulerSection } from '@/components/dashboard/sections/SchedulerSection';
import { AssemblySection } from '@/components/dashboard/sections/AssemblySection';
import { LogisticsSection } from '@/components/dashboard/sections/LogisticsSection';
import { Beaker, Calendar, Layers, Truck } from 'lucide-react';

const SectionWrapper: React.FC<{
    title: string;
    icon: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}> = ({ title, icon, isOpen, onToggle, children }) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isOpen ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>
                        {icon}
                    </div>
                    <span className="font-bold text-slate-700 dark:text-slate-200">{title}</span>
                </div>
                <div className={`transform transition-transform duration-300 text-slate-400 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="p-4 pt-0 border-t border-slate-100 dark:border-slate-800/50">
                            <div className="pt-4">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ProductionDashboard: React.FC<{ onSave: () => void }> = ({ onSave }) => {
    // State for collapsible sections
    // Default: Lab is open, others closed or maybe all open?
    // Let's keep Lab open by default.
    const [sections, setSections] = useState({
        lab: true,
        scheduler: false,
        assembly: false,
        logistics: false
    });

    const toggle = (key: keyof typeof sections) => {
        setSections(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pb-24">
            <div className="max-w-3xl mx-auto px-4">

                <DashboardHeader />

                <div className="space-y-4">

                    <SectionWrapper
                        title="The Lab"
                        icon={<Beaker size={20} />}
                        isOpen={sections.lab}
                        onToggle={() => toggle('lab')}
                    >
                        <LabSection />
                    </SectionWrapper>

                    <SectionWrapper
                        title="Scheduler"
                        icon={<Calendar size={20} />}
                        isOpen={sections.scheduler}
                        onToggle={() => toggle('scheduler')}
                    >
                        <SchedulerSection />
                    </SectionWrapper>

                    <SectionWrapper
                        title="Assembly Line"
                        icon={<Layers size={20} />}
                        isOpen={sections.assembly}
                        onToggle={() => toggle('assembly')}
                    >
                        <AssemblySection />
                    </SectionWrapper>

                    <SectionWrapper
                        title="Logistics"
                        icon={<Truck size={20} />}
                        isOpen={sections.logistics}
                        onToggle={() => toggle('logistics')}
                    >
                        <LogisticsSection />
                    </SectionWrapper>

                </div>

            </div>

            <DashboardFooter onSave={onSave} />
        </div>
    );
};

export default ProductionDashboard;
