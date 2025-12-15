import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

interface DoughConsistencyVisualizerProps {
    hydration: number;
}

export const DoughConsistencyVisualizer: React.FC<DoughConsistencyVisualizerProps> = ({ hydration }) => {
    const { t } = useTranslation('calculator');

    const consistencyState = useMemo(() => {
        if (hydration < 58) return 'stiff';
        if (hydration >= 58 && hydration <= 68) return 'classic';
        return 'high';
    }, [hydration]);

    // Dynamic visual properties based on hydration
    const getDoughStyle = () => {
        // Base size
        const baseScale = 1;

        // Low hydration: Taller, narrower, rougher surface (simulated by shadow/gradient), less spread
        if (hydration < 55) {
            return {
                scaleX: 0.9,
                scaleY: 1.05,
                borderRadius: '45% 45% 40% 40%',
                backgroundColor: '#F3E5AB', // Matte dough
                boxShadow: 'inset -2px -2px 10px rgba(0,0,0,0.1), 0 5px 10px rgba(0,0,0,0.2)',
            };
        }

        // Transition to Classic
        if (hydration < 65) {
            // Interpolate roughly
            return {
                scaleX: 1,
                scaleY: 1,
                borderRadius: '50%',
                backgroundColor: '#F7EBC3', // Smoother
                boxShadow: 'inset -5px -5px 15px rgba(0,0,0,0.05), 0 8px 15px rgba(0,0,0,0.15)',
            };
        }

        // High hydration: Flatter, wider, shiny
        const excess = Math.min(hydration - 65, 20); // Cap effect
        const spread = 1 + (excess * 0.015);
        const flatten = 1 - (excess * 0.01);

        return {
            scaleX: spread,
            scaleY: flatten,
            borderRadius: '52% 52% 48% 48%', // More organic spread
            backgroundColor: '#FFF4D6', // Lighter, wetter
            // Wavier surface or shinier
            backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)',
            boxShadow: 'inset -2px -2px 8px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.1)',
        };
    };

    const getInfo = () => {
        switch (consistencyState) {
            case 'stiff':
                return {
                    label: t('consistency.stiff_label', 'Stiff / Firm'),
                    desc: t('consistency.stiff_desc', 'Best for Bagels & Dense Breads'),
                    color: 'text-orange-600',
                    bg: 'bg-orange-50'
                };
            case 'classic':
                return {
                    label: t('consistency.classic_label', 'Classic Balance'),
                    desc: t('consistency.classic_desc', 'Perfect for Neapolitan & NY Style'),
                    color: 'text-green-600',
                    bg: 'bg-green-50'
                };
            case 'high':
                return {
                    label: t('consistency.high_label', 'High Hydration'),
                    desc: t('consistency.high_desc', 'Open crumb, requires technique'),
                    color: 'text-blue-600',
                    bg: 'bg-blue-50'
                };
        }
    };

    const info = getInfo();
    const doughStyle = getDoughStyle();

    return (
        <div className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-4 mt-4 transition-all overflow-hidden">
            <div className="flex flex-col items-center justify-center space-y-4">

                {/* Visualizer Stage */}
                <div className="relative h-24 w-full flex items-center justify-center bg-white rounded-lg shadow-inner py-6 overflow-hidden">
                    {/* Floor Shadow */}
                    <div
                        className="absolute bottom-4 w-20 h-2 bg-black/10 rounded-[50%] blur-sm transition-all duration-300"
                        style={{
                            transform: `scaleX(${doughStyle.scaleX || 1}) opacity(${hydration > 70 ? 0.6 : 0.4})`
                        }}
                    />

                    {/* Dough Ball */}
                    <motion.div
                        className="w-16 h-16 relative z-10"
                        animate={doughStyle}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {/* Highlight for shine on high hydration */}
                        {hydration > 70 && (
                            <div className="absolute top-2 left-3 w-4 h-2 bg-white/60 rounded-[50%] blur-[1px]" />
                        )}
                    </motion.div>

                    <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-400">
                        {hydration}%
                    </div>
                </div>

                {/* Info Text */}
                <div className={`w-full rounded-lg px-3 py-2 text-center transition-colors duration-300 ${info.bg}`}>
                    <h4 className={`text-sm font-bold transition-colors duration-300 ${info.color}`}>
                        {info.label}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                        {info.desc}
                    </p>
                </div>

            </div>
        </div>
    );
};
