
import React, { useMemo } from 'react';
import { DoughStyleDefinition } from '@/types/styles';
import { useTranslation } from '@/i18n';
import { motion } from 'framer-motion';

interface StyleComparatorProps {
    styleA: DoughStyleDefinition;
    styleB?: DoughStyleDefinition; // Compare against a second style or a baseline
}

// Normalize values to 0-100 scale for the chart
const normalize = (val: number, min: number, max: number) => {
    return Math.min(Math.max(((val - min) / (max - min)) * 100, 0), 100);
};

export const StyleComparator: React.FC<StyleComparatorProps> = ({ styleA, styleB }) => {
    const { t } = useTranslation(['styles', 'common']);

    const metrics = useMemo(() => [
        { id: 'hydration', label: t('mylab.hydration'), min: 50, max: 90 },
        { id: 'temp', label: t('styles.oven_temp'), min: 200, max: 500 },
        { id: 'difficulty', label: t('common.difficulty'), min: 1, max: 4 }, // 1: Easy, 4: Expert
        { id: 'fermentation', label: t('styles.fermentation'), min: 2, max: 72 }, // hours (approx)
        { id: 'crispiness', label: t('styles.crispiness'), min: 0, max: 10 }, // Abstract, derived from texture tags if possible
    ], [t]);

    const getMetricValue = (style: DoughStyleDefinition, metricId: string): number => {
        switch (metricId) {
            case 'hydration':
                return (style.technicalProfile.hydration[0] + style.technicalProfile.hydration[1]) / 2;
            case 'temp':
                return (style.technicalProfile.ovenTemp[0] + style.technicalProfile.ovenTemp[1]) / 2;
            case 'difficulty':
                const diffMap: any = { 'Easy': 1, 'Medium': 2, 'Hard': 3, 'Expert': 4 };
                return diffMap[style.technicalProfile.difficulty || 'Medium'] || 2;
            case 'fermentation':
                // Simplified heuristic for demo
                const isSourdough = style.fermentationType === 'levain' || style.fermentationType === 'hybrid';
                return isSourdough ? 24 : 8;
            case 'crispiness':
                // Heuristic based on description/tags
                const desc = (style.description || '').toLowerCase();
                if (desc.includes('crispy') || desc.includes('crunchy')) return 8;
                if (desc.includes('soft') || desc.includes('fluffy')) return 3;
                return 5;
            default:
                return 50;
        }
    };

    const dataA = metrics.map(m => normalize(getMetricValue(styleA, m.id), m.min, m.max));
    const dataB = styleB ? metrics.map(m => normalize(getMetricValue(styleB, m.id), m.min, m.max)) : null;

    // SVG Layout Config
    const size = 300;
    const center = size / 2;
    const radius = 100;
    const angleStep = (Math.PI * 2) / metrics.length;

    const getCoordinates = (value: number, index: number) => {
        const angle = index * angleStep - Math.PI / 2; // Start at top
        const r = (value / 100) * radius;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return { x, y };
    };

    const getPath = (data: number[]) => {
        return data.map((val, i) => {
            const { x, y } = getCoordinates(val, i);
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ') + ' Z';
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white/50 rounded-3xl border border-slate-100 relative">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 absolute top-6 left-6">{t('common.style_fingerprint')}</h3>

            <svg width={size} height={size} className="overflow-visible">
                {/* Background Grid (Web) */}
                {[20, 40, 60, 80, 100].map(level => (
                    <polygon
                        key={level}
                        points={metrics.map((_, i) => {
                            const { x, y } = getCoordinates(level, i);
                            return `${x},${y}`;
                        }).join(' ')}
                        fill="none"
                        stroke="#e2e8f0" // slate-200
                        strokeWidth="1"
                        strokeDasharray={level === 100 ? "0" : "4 4"}
                    />
                ))}

                {/* Axes */}
                {metrics.map((_, i) => {
                    const { x, y } = getCoordinates(100, i);
                    return (
                        <line
                            key={i}
                            x1={center}
                            y1={center}
                            x2={x}
                            y2={y}
                            stroke="#e2e8f0"
                            strokeWidth="1"
                        />
                    );
                })}

                {/* Data A Area */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    d={getPath(dataA)}
                    fill="rgba(81, 161, 69, 0.2)" // dlp-brand with opacity
                    stroke="#51a145" // dlp-brand
                    strokeWidth="2"
                    className="drop-shadow-sm"
                />

                {/* Data B Area (Comparison) */}
                {dataB && (
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        d={getPath(dataB)}
                        fill="rgba(99, 102, 241, 0.2)" // indigo-500
                        stroke="#6366f1" // indigo-500
                        strokeWidth="2"
                        className="drop-shadow-sm"
                    />
                )}

                {/* Labels */}
                {metrics.map((m, i) => {
                    const { x, y } = getCoordinates(115, i); // Push labels out slightly
                    return (
                        <text
                            key={i}
                            x={x}
                            y={y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-[10px] fill-slate-500 font-bold uppercase tracking-wider"
                            style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}
                        >
                            {m.label}
                        </text>
                    );
                })}
            </svg>

            {/* Legend */}
            <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-dlp-brand rounded-full opacity-60"></div>
                    <span className="text-xs font-bold text-slate-700">{styleA.name}</span>
                </div>
                {styleB && (
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full opacity-60"></div>
                        <span className="text-xs font-bold text-slate-700">{styleB.name}</span>
                    </div>
                )}
            </div>
        </div>
    );
};
