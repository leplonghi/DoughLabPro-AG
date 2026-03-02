import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { DoughConfig, DoughResult, AmbientTemperature } from "@/types";
import {
    InfoIcon,
    SparklesIcon,
    AlertTriangleIcon,
    CheckCircleIcon,
    ScaleIcon,
} from "@/components/ui/Icons";
import { useTranslation } from "@/i18n";
import { FLOURS } from "@/flours-constants";
interface StabilityGaugeProps {
    config: DoughConfig;
    results: DoughResult;
}
export const StabilityGauge: React.FC<StabilityGaugeProps> = ({
    config,
    results,
}) => {
    const { t } = useTranslation(["calculator", "common"]);
    const analysis = useMemo(() => {
        let score = 100;
        const warnings: string[] = [];
        const successes: string[] = [];
        const flour = FLOURS.find((f) => f.id === config.flourId);
        const protein = flour?.protein || 11; // Default to medium protein if unknown
        // 1. Protein vs Hydration Stability
        const isHighHydration = config.hydration >= 70;
        const isExtremeHydration = config.hydration >= 80;
        if (isExtremeHydration && protein < 13) {
            score -= 35;
            warnings.push(
                t("analysis.extreme_instability", {
                    defaultValue:
                        "Critical Stability: Selected flour lacks gluten structure for 80%+ hydration.",
                }),
            );
        } else if (isHighHydration && protein < 11.5) {
            score -= 20;
            warnings.push(
                t("analysis.protein_risk", {
                    defaultValue:
                        "Handling Risk: Low protein flour will result in sticky, difficult dough at this hydration.",
                }),
            );
        } else if (isHighHydration && protein >= 13) {
            successes.push(
                t("analysis.strong_match", {
                    defaultValue:
                        "Structural Synergy: High-protein flour perfectly supports this hydration level.",
                }),
            );
        }
        // 2. Salt & Structure Strength
        if (config.salt < 1.8) {
            score -= 15;
            warnings.push(
                t("analysis.low_salt_strength", {
                    defaultValue:
                        "Structural Weakness: Low salt (<1.8%) reduces gluten tightening and fermentation control.",
                }),
            );
        }
        // 3. Thermal Stability
        const isHot = config.ambientTemperature === AmbientTemperature.HOT;
        if (
            isHot &&
            config.yeastPercentage > 0.5 &&
            config.fermentationTechnique === "DIRECT"
        ) {
            score -= 15;
            warnings.push(
                t("analysis.thermal_collapse", {
                    defaultValue:
                        "Thermal Risk: High yeast in hot environment may lead to enzymatic collapse.",
                }),
            );
        }
        // 4. Preferment Benefit
        if (config.fermentationTechnique !== "DIRECT") {
            successes.push(
                t("analysis.preferment_boost", {
                    defaultValue:
                        "Enzymatic Maturity: Preferment technique enhances dough extensibility and stability.",
                }),
            );
        }
        return {
            score: Math.max(0, Math.min(100, score)),
            warnings,
            successes,
            protein,
        };
    }, [config, t]);
    const getStatusInfo = (score: number) => {
        if (score >= 90)
            return {
                color: "text-emerald-500",
                bg: "bg-emerald-500",
                label: "ROCK SOLID",
                desc: "Highly predictable structure.",
            };
        if (score >= 70)
            return {
                color: "text-lime-500",
                bg: "bg-lime-500",
                label: "STABLE",
                desc: "Good handling required.",
            };
        if (score >= 50)
            return {
                color: "text-amber-500",
                bg: "bg-amber-500",
                label: "VULNERABLE",
                desc: "Requires advanced technique.",
            };
        return {
            color: "text-rose-500",
            bg: "bg-rose-500",
            label: "CRITICAL",
            desc: "High risk of failure/collapse.",
        };
    };
    const status = getStatusInfo(analysis.score);
    return (
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-premium overflow-hidden relative group">
            {/* Background Accent */}
            <div
                className={`absolute top-0 right-0 w-32 h-32 ${status.bg} opacity-[0.03] rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150`}
            ></div>
            <div className="flex items-start justify-between mb-8 relative z-10">
                <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-1 flex items-center gap-2">
                        <ScaleIcon size={14} className={status.color} />
                        {t("calculator:recipe_stability_score")}
                    </h3>
                    <div className="flex items-baseline gap-3">
                        <span
                            className={`text-4xl font-black font-heading ${status.color}`}
                        >
                            {analysis.score}%
                        </span>
                        <span
                            className={`text-[10px] font-black px-2 py-0.5 rounded-md ${status.bg} text-white uppercase`}
                        >
                            {status.label}
                        </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium mt-1">
                        {status.desc}
                    </p>
                </div>
                <div className="text-right">
                    <div className="inline-flex flex-col items-end">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                            {t("calculator:input_analysis")}
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                            {analysis.protein}% Protein • {config.hydration}% Hydration
                        </span>
                    </div>
                </div>
            </div>
            {/* Progress Track */}
            <div className="h-4 w-full bg-slate-50 rounded-2xl mb-8 overflow-hidden p-1 shadow-inner relative">
                {/* Snap markers */}
                <div className="absolute inset-0 flex justify-between px-1 pointer-events-none opacity-20">
                    <div className="w-px h-full bg-slate-300"></div>
                    <div className="w-px h-full bg-slate-300"></div>
                    <div className="w-px h-full bg-slate-300"></div>
                    <div className="w-px h-full bg-slate-300"></div>
                </div>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${analysis.score}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className={`h-full rounded-xl ${status.bg} shadow-lg relative`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                </motion.div>
            </div>
            {/* Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysis.warnings.length > 0 && (
                    <div className="space-y-3">
                        {analysis.warnings.map((w, i) => (
                            <div
                                key={i}
                                className="flex gap-3 items-start p-4 bg-rose-50/40 rounded-2xl border border-rose-100/50 transition-all hover:bg-rose-50"
                            >
                                <AlertTriangleIcon className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                                <p className="text-[11px] font-bold text-rose-900 leading-relaxed">
                                    {w}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
                {analysis.successes.length > 0 && (
                    <div className="space-y-3">
                        {analysis.successes.map((s, i) => (
                            <div
                                key={i}
                                className="flex gap-3 items-start p-4 bg-emerald-50/40 rounded-2xl border border-emerald-100/50 transition-all hover:bg-emerald-50"
                            >
                                <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <p className="text-[11px] font-bold text-emerald-900 leading-relaxed">
                                    {s}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        {t("calculator:doughlab_predictive_intelligence_activated")}
                    </span>
                </div>
                <button className="text-[10px] font-black text-[#51a145] hover:text-[#36782c] transition-colors flex items-center gap-1 uppercase tracking-widest">
                    Technical Docs <InfoIcon size={12} />
                </button>
            </div>
        </div>
    );
};
