import React, { useRef, useMemo, useState } from "react";
import {
  DoughResult,
  DoughConfig,
  Unit,
  UnitSystem,
  FlourDefinition,
  CalculationMode,
  BakeType,
  Levain,
} from "@/types";
import { gramsToVolume } from "@/helpers";
import {
  ShareIcon,
  DownloadIcon,
  BatchesIcon,
  LockClosedIcon,
  BeakerIcon,
  ScaleIcon,
  InfoIcon,
  FlourIcon,
  CubeIcon,
  ListBulletIcon,
  SparklesIcon,
  ChartBarIcon,
} from "@/components/ui/Icons";
import { useToast } from "@/components/ToastProvider";
import { useTranslation } from "@/i18n";
import { exportBatchToPDF } from "@/services/exportService";
import TechnicalMethodPanel from "@/components/calculator/TechnicalMethodPanel";
import { generateTechnicalMethod } from "@/logic/methodGenerator";
import { useUser } from "@/contexts/UserProvider";
import { canUseFeature, getCurrentPlan } from "@/permissions";
import SocialShareModal from "@/components/social/SocialShareModal";
import { RecommendedProducts } from "@/components/ui/RecommendedProducts";
import { getStyleById } from "@/data/styles";
import { ReverseSchedule } from "@/components/calculator/ReverseSchedule";
import { AffiliateIngredientRow } from "@/components/calculator/AffiliateIngredientRow";
import { StabilityGauge } from "@/components/calculator/StabilityGauge";
import { CostLab } from "@/components/calculator/CostLab";
import html2canvas from "html2canvas";
import { useSavedCalculations } from "@/hooks/useSavedCalculations";

interface ResultsDisplayProps {
  results: DoughResult | null;
  config: DoughConfig;
  unit: Unit;
  onUnitChange: (unit: Unit) => void;
  unitSystem: UnitSystem;
  onConfigChange: (newConfig: Partial<DoughConfig>) => void;
  onStartBatch: () => void;
  selectedFlour?: FlourDefinition;
  calculatorMode: "wizard" | "basic" | "advanced";
  calculationMode: CalculationMode;
  hasProAccess: boolean;
  onOpenPaywall: (origin: any) => void;
  saveButtonRef?: React.Ref<HTMLButtonElement>;
  onboardingStep?: number;
  selectedLevain?: Levain | null;
}
export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  results,
  config,
  unit,
  onUnitChange,
  unitSystem,
  onStartBatch,
  hasProAccess,
  onOpenPaywall,
  saveButtonRef,
  selectedLevain,
  calculationMode,
}) => {
  const { addToast } = useToast();
  const { t } = useTranslation(["common", "calculator", "method"]);
  const { user } = useUser();
  const resultRef = useRef<HTMLDivElement>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const userPlan = getCurrentPlan(user);

  const { save: saveCalc } = useSavedCalculations(user?.uid, userPlan !== 'free');

  const technicalSteps = useMemo(() => {
    if (!results) return [];
    return generateTechnicalMethod(config, results, t);
  }, [config, results, t]);
  const chefNotes = useMemo(() => {
    if (!results) return [];
    const notes = [];
    // 1. Zero Water Balance (The Poolish Scenario)
    if (results.finalDough && results.finalDough.water <= 2) {
      notes.push({
        type: "warning",
        title: t("method.zero_water_balance", {
          defaultValue: "Zero Water Balance",
        }),
        content: t("method.zero_water_balance_desc", {
          defaultValue:
            "Extreme setup: All the hydration is already in your preferment. You will only add flour and salt to the final mix. Handle with care!",
        }),
      });
    }
    // 2. High Preferment Load
    if (config.prefermentFlourPercentage > 50) {
      notes.push({
        type: "info",
        title: t("method.dominant_preferment", {
          defaultValue: "Preferment Dominance",
        }),
        content: t("method.dominant_preferment_desc", {
          defaultValue:
            "Using >50% prefermented flour creates a very active dough. Expect rapid fermentation and a more acidic profile.",
        }),
      });
    }
    // 3. High Hydration Warning
    if (config.hydration > 85) {
      notes.push({
        type: "warning",
        title: t("method.soup_territory", { defaultValue: "High Fluidity" }),
        content: t("method.soup_territory_desc", {
          defaultValue:
            "This hydration level requires advanced handling techniques (like Rubaud or coil folds) and a strong flour.",
        }),
      });
    }
    return notes;
  }, [results, config, t]);
  const displayValue = (grams: number) => {
    if (unit === "volume") return grams.toFixed(0) + "g";
    if (unit === "oz") return (grams * 0.035274).toFixed(2) + " oz";
    return grams.toFixed(1) + "g";
  };
  const displayIngredient = (
    nameKey: string,
    grams: number,
    ingredientId: string,
  ) => {
    if (unit === "volume") {
      let densityKey = ingredientId === "base-flour" ? "flour" : ingredientId;
      return gramsToVolume(
        densityKey,
        grams,
        { cups: "cups", tbsp: "tbsp", tsp: "tsp" },
        unitSystem,
      );
    }
    return displayValue(grams);
  };
  const handleShare = async () => {
    if (!canUseFeature(userPlan, "community.share_and_clone")) {
      addToast("Pro feature: Share your formulas with the community.", "info");
      onOpenPaywall("calculator");
      return;
    }
    try {
      await navigator.clipboard.writeText(window.location.href);
      addToast(t("results.share_link"), "success");
    } catch (e) {
      addToast(t("results.share_error"), "error");
    }
  };
  const handlePrintKitchen = () => {
    window.print();
  };
  const handleExportPDF = async () => {
    if (!canUseFeature(userPlan, "export.pdf_json")) {
      addToast("Share your recipe like a pro. Unlock clean exports.", "info");
      onOpenPaywall("exports_pdf");
      return;
    }
    try {
      const batchMock: any = {
        name: `${config.recipeStyle} Formula`,
        createdAt: new Date().toISOString(),
        doughConfig: config,
        doughResult: results,
        notes: config.notes,
      };
      addToast(t("results.export_pdf_aria"), "info");
      await exportBatchToPDF(batchMock, t);
    } catch (e) {
      console.error("PDF Export Error:", e);
      const errorMsg = e instanceof Error ? e.message : String(e);
      addToast(`${t("common.export_failed")}: ${errorMsg}`, "error");
    }
  };
  const handleExportImage = async () => {
    if (!canUseFeature(userPlan, "export.clean_recipe")) {
      addToast(
        "Pro feature: Export your complete recipe as a high-quality image.",
        "info",
      );
      onOpenPaywall("exports_image");
      return;
    }
    if (!resultRef.current) return;
    setIsGeneratingImage(true);
    addToast(
      t("ui.generating", { defaultValue: "Generating image..." }),
      "info",
    );
    try {
      // Give a small delay for any layout shifts
      await new Promise((resolve) => setTimeout(resolve, 300));
      const canvas = await html2canvas(resultRef.current, {
        scale: 2, // Retina quality
        backgroundColor: "#ffffff", // Clean white background for long export
        useCORS: true,
        logging: false,
        onclone: (clonedDoc) => {
          // We can hide elements we don't want in the image (like action buttons)
          const actionsElement = clonedDoc.getElementById("tour-actions");
          if (actionsElement) actionsElement.style.display = "none";
          const logButton = clonedDoc.getElementById("tour-log-batch");
          if (logButton) logButton.parentElement!.style.display = "none";
          const recommendSection = clonedDoc.querySelector(
            ".dlp-card:last-of-type",
          );
          if (
            recommendSection &&
            recommendSection.textContent?.includes(t("results.tools_title"))
          ) {
            (recommendSection as HTMLElement).style.display = "none";
          }
        },
      });
      const link = document.createElement("a");
      link.download = `DoughLab-Recipe-${config.recipeStyle}-${new Date().toISOString().slice(0, 10)}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      addToast(
        t("common.download_started", { defaultValue: "Download started" }),
        "success",
      );
    } catch (err) {
      console.error("Failed to generate recipe image", err);
      addToast(t("common.export_failed"), "error");
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleSaveCalculation = () => {
    const styleName = getStyleById(config.recipeStyle || '')?.name || config.recipeStyle || 'Custom Style';
    saveCalc({
      styleId: config.recipeStyle || 'custom',
      styleName,
      name: `${styleName} — ${new Date().toLocaleDateString('pt-BR')}`,
      inputs: config as any,
      result: results as any
    });
    addToast('Cálculo salvo no histórico!', 'success');
  };

  const renderIngredientRow = (
    label: string,
    grams: number,
    ingredientId: string,
    subtext?: string,
  ) => (
    <div className="ingredient-row" key={ingredientId + label}>
      <AffiliateIngredientRow
        label={String(label || "")}
        grams={grams}
        displayValue={displayIngredient(label, grams, ingredientId)}
        hydration={config.hydration}
        subtext={subtext}
      />
      {/* Hidden print-only display for massive weights */}
      <span className="hidden print:block weight-display">
        {displayIngredient(label, grams, ingredientId)}
      </span>
    </div>
  );
  if (!results) {
    return (
      <div className="dlp-card border-none bg-slate-50/50 p-8 text-center h-full flex flex-col items-center justify-center text-slate-400 min-h-[400px]">
        <div className="mb-4 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-premium border border-slate-100 transition-all duration-500 hover:scale-110 hover:rotate-12">
          <BeakerIcon className="h-10 w-10 text-dlp-brand" />
        </div>
        <h3 className="text-2xl font-bold font-heading text-slate-800">
          {t("common.general.your_formula_awaits")}
        </h3>
        <p className="text-sm mt-3 max-w-xs mx-auto text-slate-500 leading-relaxed">
          {t(
            "common:set_your_parameters_to_generate_a_scientifically_precise_dou",
          )}
        </p>
      </div>
    );
  }
  return (
    <div key={JSON.stringify(results)} ref={resultRef} className="space-y-6 results-container">
      {/* 🔬 Stability Gauge - Replacement for ConfidenceGauge */}
      <StabilityGauge config={config} results={results} />
      {/* 💰 Cost Lab - Financial Intelligence (Pro) */}
      <CostLab
        config={config}
        results={results}
        hasProAccess={hasProAccess}
        onOpenPaywall={() => onOpenPaywall("cost_lab")}
      />
      {/* Chef's Lab Notes - Proactive Insights */}
      {chefNotes.length > 0 && (
        <div className="space-y-4 no-print">
          {chefNotes.map((note, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden p-5 rounded-[2.5rem] border flex gap-5 items-start shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 group
                                ${note.type === "warning"
                  ? "bg-gradient-to-br from-amber-50 to-white border-amber-100"
                  : "bg-gradient-to-br from-blue-50 to-white border-blue-100"
                }
                            `}
            >
              {/* Decorative background element */}
              <div
                className={`absolute -right-4 -bottom-4 opacity-[0.03] rotate-12 transition-transform group-hover:scale-110 duration-700
                                ${note.type === "warning" ? "text-amber-900" : "text-blue-900"}`}
              >
                <InfoIcon size={80} />
              </div>
              <div
                className={`mt-1 w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-inner
                                ${note.type === "warning" ? "bg-amber-100 text-amber-600" : "bg-blue-100 text-blue-600"}`}
              >
                <InfoIcon size={20} />
              </div>
              <div className="relative z-10">
                <h4
                  className={`text-[11px] font-black uppercase tracking-[0.2em] mb-1.5 ${note.type === "warning" ? "text-amber-900" : "text-blue-900"}`}
                >
                  {note.title}
                </h4>
                <p
                  className={`text-xs font-medium leading-relaxed ${note.type === "warning" ? "text-amber-800/80" : "text-blue-800/80"}`}
                >
                  {note.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Main Result Card: Dough Recipe */}
      <div className="dlp-card bg-gradient-to-br from-white via-white to-blue-50/30 p-6 shadow-sm border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-inner no-print">
              <BeakerIcon className="w-7 h-7 text-dlp-brand-lime" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-heading text-slate-800 print-header">
                {t("results.title", { defaultValue: "Dough Recipe" })}
              </h2>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                {config.recipeStyle || "Custom"} Formulation
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 no-print">
            <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              {config.bakeType || "Pizzas"}
            </span>
          </div>
        </div>
        {/* Metric Boxes */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10"
          id="tour-results-metrics"
        >
          <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 flex flex-col items-center group hover:bg-white hover:shadow-premium transition-all duration-300 print:border-none print:bg-white print:items-start">
            <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform no-print">
              <FlourIcon className="w-4 h-4 text-dlp-brand-lime" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1 print-label">
              {t("results.total_flour")}
            </p>
            <p className="text-lg font-bold font-heading text-slate-800 weight-display">
              {displayValue(results.totalFlour)}
            </p>
          </div>
          <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 flex flex-col items-center group hover:bg-white hover:shadow-premium transition-all duration-300 print:border-none print:bg-white print:items-start">
            <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform no-print">
              <ScaleIcon className="w-4 h-4 text-dlp-brand-lime" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1 print-label">
              {t("results.total_dough")}
            </p>
            <p className="text-lg font-bold font-heading text-slate-800 weight-display">
              {displayValue(results.totalDough)}
            </p>
          </div>
          <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 flex flex-col items-center group hover:bg-white hover:shadow-premium transition-all duration-300 print:border-none print:bg-white print:items-start">
            <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform no-print">
              <CubeIcon className="w-4 h-4 text-dlp-brand-lime" />
            </div>
            {calculationMode === "flour" ? (
              <>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1 print-label">
                  {t("results.est_yield", { defaultValue: "Est. Yield" })}
                </p>
                <p className="text-lg font-bold font-heading text-slate-800 weight-display">
                  {results.projectedYield || 0} Pcs
                </p>
              </>
            ) : (
              <>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1 print-label">
                  {t("results.weight_per_piece", { defaultValue: "Per piece" })}
                </p>
                <p className="text-lg font-bold font-heading text-slate-800 weight-display">
                  {displayValue(results.totalDough / config.numPizzas)}
                </p>
              </>
            )}
          </div>
        </div>
        {/* Ingredients List */}
        <div className="space-y-1 px-1 mb-6" id="tour-results-ingredients">
          <div className="flex items-center gap-3 mb-1">
            <ListBulletIcon className="w-4 h-4 text-dlp-brand-lime no-print" />
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-800 print-header">
              {t("results.ingredients_title", { defaultValue: "INGREDIENTS" })}
            </h4>
            <div className="h-px flex-1 bg-slate-100 no-print"></div>
          </div>
          {results.preferment && (
            <div className="mb-4 bg-slate-50/30 rounded-2xl p-3 border border-dashed border-slate-200 print:border-solid print:border-black print:rounded-none">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-2 print:text-black print:font-black">
                {t("common:preferment_levain")}
              </p>
              <div className="space-y-0.5">
                {renderIngredientRow(
                  t("results.flour"),
                  results.preferment.flour,
                  "flour",
                )}
                {renderIngredientRow(
                  t("results.water"),
                  results.preferment.water,
                  "water",
                )}
                {results.preferment.yeast > 0 &&
                  renderIngredientRow(
                    t("results.yeast"),
                    results.preferment.yeast,
                    "yeast",
                  )}
              </div>
            </div>
          )}
          <div className="space-y-1">
            {results.finalDough ? (
              <>
                {renderIngredientRow(
                  t("results.flour"),
                  results.finalDough.flour,
                  "flour",
                )}
                {renderIngredientRow(
                  t("results.water"),
                  results.finalDough.water,
                  "water",
                )}
                {renderIngredientRow(
                  t("results.salt"),
                  results.finalDough.salt,
                  "salt",
                  `${config.salt}%`,
                )}
                {results.finalDough.yeast > 0 &&
                  renderIngredientRow(
                    t("results.yeast"),
                    results.finalDough.yeast,
                    "yeast",
                  )}
                {results.finalDough.oil > 0 &&
                  renderIngredientRow(
                    t("results.oil"),
                    results.finalDough.oil,
                    "oil",
                    `${config.oil}%`,
                  )}
                {results.finalDough.sugar > 0 &&
                  renderIngredientRow(
                    t("results.sugar"),
                    results.finalDough.sugar,
                    "sugar",
                    `${config.sugar}%`,
                  )}
              </>
            ) : (
              <>
                {renderIngredientRow(
                  t("results.flour"),
                  results.totalFlour,
                  "flour",
                )}
                {renderIngredientRow(
                  t("results.water"),
                  results.totalWater,
                  "water",
                  `${config.hydration}%`,
                )}
                {renderIngredientRow(
                  t("results.salt"),
                  results.totalSalt,
                  "salt",
                  `${config.salt}%`,
                )}
                {results.totalYeast > 0 &&
                  renderIngredientRow(
                    t("results.yeast"),
                    results.totalYeast,
                    "yeast",
                    `${config.yeastPercentage}%`,
                  )}
                {results.totalOil > 0 &&
                  renderIngredientRow(
                    t("results.oil"),
                    results.totalOil,
                    "oil",
                    `${config.oil}%`,
                  )}
                {results.totalSugar > 0 &&
                  renderIngredientRow(
                    t("results.sugar"),
                    results.totalSugar,
                    "sugar",
                    `${config.sugar}%`,
                  )}
              </>
            )}
            {results.ingredientWeights
              ?.filter((i) => i.role === "other")
              .map((ing) =>
                renderIngredientRow(
                  t(ing.name),
                  ing.weight,
                  ing.id,
                  `${ing.bakerPercentage}%`,
                ),
              )}
          </div>
        </div>
        {/* 💼 B2B / Pro Production Teaser */}
        <div
          onClick={() => !hasProAccess && onOpenPaywall("production_hub")}
          className="mb-8 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between cursor-pointer group hover:border-emerald-500 transition-all overflow-hidden relative no-print"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[40px] -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-emerald-600">
              <ChartBarIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-0.5">
                {t("ui:mylab.production_hub")}
              </h4>
              <p className="text-[10px] text-slate-500 font-medium">
                B2B Inventory & Multi-batch Manager
              </p>
            </div>
          </div>
          {!hasProAccess && (
            <LockClosedIcon className="w-4 h-4 text-slate-400 group-hover:text-emerald-500" />
          )}
        </div>
        {/* Primary Action Button */}
        <div className="relative group mt-4 no-print">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-dlp-brand to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <button
            id="tour-log-batch"
            onClick={onStartBatch}
            ref={saveButtonRef}
            className="relative dlp-button-primary w-full py-4 text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl active:scale-[0.98] transition-all bg-dlp-brand text-[#1B4332] font-bold rounded-2xl border-none"
          >
            <BatchesIcon className="h-5 w-5" />
            {t("common.diary_page.new_batch", { defaultValue: "Log New Bake" })}
          </button>
        </div>
        {/* Bottom Secondary Actions */}
        <div className="flex flex-col gap-3 mt-6 no-print" id="tour-actions">
          <button
            onClick={handleSaveCalculation}
            className="relative dlp-button-secondary w-full py-3.5 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-2xl border border-slate-200 shadow-sm active:scale-[0.98] transition-all bg-white text-slate-700 hover:bg-slate-50"
          >
            <span>💾</span> {t('common.save_calculation', { defaultValue: 'Salvar cálculo' })}
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handlePrintKitchen}
              className="group flex flex-col items-center justify-center gap-1.5 py-4 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold text-[10px] uppercase tracking-[0.1em] hover:bg-slate-50 hover:border-slate-300 transition-all font-heading shadow-sm"
            >
              <span className="text-lg">🖨️</span>
              {t("common:print_kitchen_sheet")}
            </button>
            <button
              onClick={handleExportPDF}
              className="group flex flex-col items-center justify-center gap-1.5 py-4 rounded-2xl bg-white border border-slate-100 text-slate-500 font-bold text-[10px] uppercase tracking-[0.1em] hover:bg-slate-50 transition-all font-heading shadow-sm active:translate-y-0.5"
            >
              <DownloadIcon className="h-4 w-4 text-dlp-brand/60 group-hover:text-dlp-brand transition-all duration-300 group-hover:scale-110" />
              {t("common:official_pdf")}
            </button>
          </div>
          <button
            onClick={handleExportImage}
            disabled={isGeneratingImage}
            className="group flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-gradient-to-br from-emerald-50 to-lime-50 text-slate-800 font-bold text-[10px] uppercase tracking-[0.1em] hover:bg-[#2d5a45] transition-all font-heading shadow-md active:translate-y-0.5 disabled:opacity-50"
          >
            {isGeneratingImage ? (
              <span className="animate-pulse">
                {t("ui.generating", { defaultValue: "GENERATING..." })}
              </span>
            ) : (
              <>
                <DownloadIcon className="h-4 w-4 text-lime-400 group-hover:scale-110 transition-transform" />
                {t("results.export_image", {
                  defaultValue: "EXPORT RECIPE IMAGE",
                })}
              </>
            )}
          </button>
        </div>
      </div>
      {/* Smart Schedule Integrated */}
      {user?.enableSmartSchedule && (
        <div className="dlp-card p-0 overflow-hidden border-teal-100/50 print:border-black print:rounded-none">
          <ReverseSchedule
            config={config}
            levain={selectedLevain || undefined}
          />
        </div>
      )}
      {/* Step-by-Step Method Panel */}
      <div
        className="dlp-card border-slate-100 p-0 overflow-hidden print:border-black print:rounded-none"
        id="tour-method"
      >
        <div className="p-6">
          <TechnicalMethodPanel steps={technicalSteps} />
        </div>
      </div>
      {/* Recommended Lab Gear */}
      <div className="dlp-card border-slate-100 p-8 no-print">
        <RecommendedProducts
          tags={[
            config.recipeStyle?.toLowerCase() || "general",
            "calculator",
            "baking",
          ]}
          title={t("common.general.tools_for_this_formula")}
        />
      </div>
      <SocialShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        config={config}
        results={results}
      />
    </div>
  );
};
