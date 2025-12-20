import jsPDF from 'jspdf';
import { Batch, DoughConfig, DoughResult } from '../types';
import { FLOURS } from '../flours-constants';
import { generateTechnicalMethod } from '../logic/methodGenerator';

const COLORS = {
    PRIMARY: [81, 161, 69], // #51a145 (Brand Green)
    SECONDARY: [54, 120, 44], // #36782c (Darker Green)
    TEXT_DARK: [30, 41, 59], // Slate-800
    TEXT_GRAY: [100, 116, 139], // Slate-500
    DIVIDER: [226, 232, 240], // Slate-200
    WHITE: [255, 255, 255],
    BG_LIGHT: [248, 250, 252], // Slate-50
    CARD_BG: [255, 255, 255],
    ACCENT_LIME: [132, 204, 22] // Lime-500 for subtle accents
};

/**
 * Generates a PDF with the specific UI design requested.
 */
export const exportBatchToPDF = async (batch: Batch, t: (key: string, options?: any) => string): Promise<void> => {
    try {
        if (!batch) throw new Error("Batch data is missing");

        const doc = new jsPDF();

        // Page Config
        const PAGE_HEIGHT = doc.internal.pageSize.getHeight();
        const PAGE_WIDTH = doc.internal.pageSize.getWidth();
        const MARGIN_X = 15;
        const CONTENT_WIDTH = PAGE_WIDTH - (MARGIN_X * 2);

        let cursorY = 0;

        // --- Helpers ---
        const drawDivider = (y: number) => {
            doc.setDrawColor(COLORS.PRIMARY[0], COLORS.PRIMARY[1], COLORS.PRIMARY[2]);
            doc.setLineWidth(0.3);
            doc.line(MARGIN_X, y, PAGE_WIDTH - MARGIN_X, y);
        };

        // --- 1. HEADER (More Compact) ---
        doc.setFillColor(COLORS.BG_LIGHT[0], COLORS.BG_LIGHT[1], COLORS.BG_LIGHT[2]);
        doc.rect(0, 0, PAGE_WIDTH, 32, 'F');

        // Robust Logo Loading with ASPECT RATIO detection
        try {
            const logoInfo = await new Promise<{ data: string, ratio: number }>((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'Anonymous';
                const timeout = setTimeout(() => reject(new Error("Timeout")), 3000);
                img.onload = () => {
                    clearTimeout(timeout);
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx?.drawImage(img, 0, 0);
                    resolve({
                        data: canvas.toDataURL('image/png'),
                        ratio: img.width / img.height
                    });
                };
                img.onerror = () => reject(new Error("Fail"));
                img.src = '/app-logo.png';
            });

            const logoHeight = 12;
            const logoWidth = logoHeight * logoInfo.ratio;
            doc.addImage(logoInfo.data, 'PNG', MARGIN_X, 6, logoWidth, logoHeight);
        } catch (e) {
            doc.setFontSize(14); doc.setFont('helvetica', 'bold');
            doc.setTextColor(COLORS.PRIMARY[0], COLORS.PRIMARY[1], COLORS.PRIMARY[2]);
            doc.text('DoughLabPro', MARGIN_X, 15);
        }

        doc.setFontSize(7); doc.setFont('helvetica', 'normal');
        doc.setTextColor(COLORS.TEXT_GRAY[0], COLORS.TEXT_GRAY[1], COLORS.TEXT_GRAY[2]);
        doc.text('Advanced Dough Engineering', MARGIN_X, 23);

        cursorY = 42;

        // Recipe Title (Compacted)
        doc.setFontSize(18); doc.setFont('helvetica', 'bold');
        doc.setTextColor(COLORS.TEXT_DARK[0], COLORS.TEXT_DARK[1], COLORS.TEXT_DARK[2]);
        const recipeName = (batch.name || 'Untitled Recipe').toUpperCase();
        const titleLines = doc.splitTextToSize(recipeName, CONTENT_WIDTH);
        doc.text(titleLines, MARGIN_X, cursorY);
        cursorY += (titleLines.length * 7) + 2;

        // --- 2. KEY METRICS GRID (Compact Card Style) ---
        const colWidth = (CONTENT_WIDTH - 6) / 4;
        const metricsY = cursorY + 8;
        const cardHeight = 16;

        const drawMetricCard = (label: string, value: string, x: number) => {
            doc.setFillColor(COLORS.BG_LIGHT[0], COLORS.BG_LIGHT[1], COLORS.BG_LIGHT[2]);
            doc.setDrawColor(COLORS.DIVIDER[0], COLORS.DIVIDER[1], COLORS.DIVIDER[2]);
            doc.setLineWidth(0.1);
            doc.roundedRect(x, metricsY - 6, colWidth - 2, cardHeight, 2, 2, 'DF');
            doc.setFillColor(COLORS.PRIMARY[0], COLORS.PRIMARY[1], COLORS.PRIMARY[2]);
            doc.rect(x, metricsY - 6, 1.2, cardHeight, 'F');

            doc.setFontSize(6); doc.setFont('helvetica', 'bold');
            doc.setTextColor(COLORS.TEXT_GRAY[0], COLORS.TEXT_GRAY[1], COLORS.TEXT_GRAY[2]);
            doc.text(label.toUpperCase(), x + 4, metricsY);

            doc.setFontSize(9); doc.setFont('helvetica', 'bold');
            doc.setTextColor(COLORS.PRIMARY[0], COLORS.PRIMARY[1], COLORS.PRIMARY[2]);
            doc.text(String(value), x + 4, metricsY + 6);
        };

        const config = batch.doughConfig || {} as DoughConfig;
        drawMetricCard('Hydration', `${config.hydration || 0}%`, MARGIN_X);
        const servingsLabel = config.bakeType === 'PIZZAS' ? `${config.numPizzas || 0} Pizzas` : `${config.numPizzas || 1} Pcs`;
        drawMetricCard('Yield', servingsLabel, MARGIN_X + colWidth);
        const totalWeight = batch.doughResult ? Number(batch.doughResult.totalDough || 0).toFixed(0) : '0';
        drawMetricCard('Total Mass', `${totalWeight}g`, MARGIN_X + (colWidth * 2));
        drawMetricCard('Strategy', config.fermentationTechnique || 'Direct', MARGIN_X + (colWidth * 3));

        cursorY += 24;

        // --- 3. INGREDIENTS SECTION ---
        doc.setFontSize(11); doc.setFont('helvetica', 'bold');
        doc.setTextColor(COLORS.TEXT_DARK[0], COLORS.TEXT_DARK[1], COLORS.TEXT_DARK[2]);
        doc.text('1. DOUGH COMPOSITION', MARGIN_X, cursorY);
        cursorY += 2; drawDivider(cursorY); cursorY += 6;

        const results = batch.doughResult || { totalFlour: 1000, totalWater: 600, totalSalt: 20, totalOil: 0, totalSugar: 0, totalYeast: 5, totalDough: 1625, ingredientWeights: [] };
        const ings = [...(results.ingredientWeights || [])];
        if (ings.length === 0) {
            const flourName = FLOURS.find(f => f.id === config.flourId)?.name || 'Flour';
            ings.push({ name: flourName, weight: Number(results.totalFlour || 1000), bakerPercentage: 100 } as any);
            ings.push({ name: 'Water', weight: Number(results.totalWater || 600), bakerPercentage: Number(config.hydration || 60) } as any);
        }

        const ingredientsCardHeight = (ings.length * 6) + 4;
        doc.setFillColor(COLORS.BG_LIGHT[0], COLORS.BG_LIGHT[1], COLORS.BG_LIGHT[2]);
        doc.roundedRect(MARGIN_X, cursorY, CONTENT_WIDTH, ingredientsCardHeight, 2, 2, 'F');
        cursorY += 4.5;

        doc.setFontSize(9);
        ings.forEach((ing) => {
            if (!ing) return;
            doc.setFont('helvetica', 'bold'); doc.setTextColor(COLORS.TEXT_DARK[0], COLORS.TEXT_DARK[1], COLORS.TEXT_DARK[2]);
            const displayName = (ing.name && ing.name.includes('.')) ? t(ing.name) : (ing.name || 'Ingredient');
            doc.text(String(displayName), MARGIN_X + 4, cursorY);

            doc.setFont('helvetica', 'normal'); doc.setTextColor(COLORS.TEXT_GRAY[0], COLORS.TEXT_GRAY[1], COLORS.TEXT_GRAY[2]);
            doc.text(`${Number(ing.bakerPercentage || 0).toFixed(1)}%`, MARGIN_X + 60, cursorY);

            doc.setTextColor(COLORS.TEXT_DARK[0], COLORS.TEXT_DARK[1], COLORS.TEXT_DARK[2]);
            const weightTxt = `${Math.round(Number(ing.weight || 0))} g`;
            doc.text(weightTxt, PAGE_WIDTH - MARGIN_X - doc.getTextWidth(weightTxt) - 4, cursorY);
            cursorY += 6;
        });

        const assembly = config.assemblyIncrements || [];
        if (assembly.length > 0) {
            cursorY += 4; doc.setFontSize(10); doc.setFont('helvetica', 'bold');
            doc.text('2. ASSEMBLY & TOPPINGS', MARGIN_X, cursorY);
            const assemblyHeight = (assembly.length * 6) + 4;
            cursorY += 2;
            doc.setFillColor(COLORS.BG_LIGHT[0], COLORS.BG_LIGHT[1], COLORS.BG_LIGHT[2]);
            doc.roundedRect(MARGIN_X, cursorY, CONTENT_WIDTH, assemblyHeight, 2, 2, 'F');
            cursorY += 4.5;

            assembly.forEach((item: any) => {
                if (!item) return;
                doc.setFontSize(8.5); doc.setFont('helvetica', 'normal');
                doc.setTextColor(COLORS.TEXT_GRAY[0], COLORS.TEXT_GRAY[1], COLORS.TEXT_GRAY[2]);
                const tName = (item.name && item.name.includes('.')) ? t(item.name) : (item.name || 'Item');
                doc.text(tName, MARGIN_X + 4, cursorY);
                const gTotal = Math.round(Number(item.grams || 0) * Number(config.numPizzas || 1));
                const gTxt = `${gTotal} g`;
                doc.text(gTxt, PAGE_WIDTH - MARGIN_X - doc.getTextWidth(gTxt) - 4, cursorY);
                cursorY += 6;
            });
        }

        cursorY += 6;

        // --- 4. METHOD SECTION ---
        try {
            const steps = generateTechnicalMethod(config, results as any, t) || [];
            if (steps.length > 0) {
                doc.setFontSize(11); doc.setFont('helvetica', 'bold');
                doc.setTextColor(COLORS.TEXT_DARK[0], COLORS.TEXT_DARK[1], COLORS.TEXT_DARK[2]);
                doc.text('3. TECHNICAL METHOD', MARGIN_X, cursorY);
                cursorY += 2; drawDivider(cursorY); cursorY += 5;

                steps.forEach((step, index) => {
                    if (!step) return;
                    doc.setFontSize(8.5);
                    const instr = doc.splitTextToSize(step.actionInstructions || '', CONTENT_WIDTH - 15);
                    const stepHeight = 6 + (instr.length * 4);

                    if (cursorY + stepHeight > PAGE_HEIGHT - 12) return; // Forced single page limit

                    doc.setFillColor(COLORS.BG_LIGHT[0], COLORS.BG_LIGHT[1], COLORS.BG_LIGHT[2]);
                    doc.setDrawColor(COLORS.DIVIDER[0], COLORS.DIVIDER[1], COLORS.DIVIDER[2]);
                    doc.roundedRect(MARGIN_X, cursorY - 3, CONTENT_WIDTH, stepHeight, 2, 2, 'DF');

                    doc.setFillColor(COLORS.PRIMARY[0], COLORS.PRIMARY[1], COLORS.PRIMARY[2]);
                    doc.circle(MARGIN_X + 4, cursorY, 2.5, 'F');
                    doc.setTextColor(COLORS.WHITE[0], COLORS.WHITE[1], COLORS.WHITE[2]);
                    doc.setFontSize(6.5); doc.setFont('helvetica', 'bold');
                    doc.text(String(index + 1), MARGIN_X + 3.4, cursorY + 0.8);

                    doc.setTextColor(COLORS.TEXT_DARK[0], COLORS.TEXT_DARK[1], COLORS.TEXT_DARK[2]);
                    doc.setFontSize(9); doc.text(String(step.title || 'Step'), MARGIN_X + 9, cursorY + 0.5);

                    cursorY += 4;
                    doc.setTextColor(COLORS.TEXT_GRAY[0], COLORS.TEXT_GRAY[1], COLORS.TEXT_GRAY[2]);
                    doc.setFontSize(8); doc.setFont('helvetica', 'normal');
                    doc.text(instr, MARGIN_X + 9, cursorY);
                    cursorY += (instr.length * 4) + 3;
                });
            }
        } catch (mErr) { console.error("PDF Method err", mErr); }

        if (batch.notes?.trim() && cursorY < PAGE_HEIGHT - 20) {
            cursorY += 2; doc.setFontSize(9); doc.setFont('helvetica', 'bold');
            doc.text('CHEF NOTES', MARGIN_X, cursorY);
            cursorY += 4; doc.setFontSize(8); doc.setFont('helvetica', 'italic');
            doc.setTextColor(COLORS.TEXT_GRAY[0], COLORS.TEXT_GRAY[1], COLORS.TEXT_GRAY[2]);
            const nLines = doc.splitTextToSize(batch.notes, CONTENT_WIDTH);
            doc.text(nLines, MARGIN_X, cursorY);
        }

        const footY = PAGE_HEIGHT - 8;
        doc.setLineWidth(0.1); doc.setDrawColor(COLORS.DIVIDER[0], COLORS.DIVIDER[1], COLORS.DIVIDER[2]);
        doc.line(MARGIN_X, footY - 3, PAGE_WIDTH - MARGIN_X, footY - 3);
        doc.setFontSize(6); doc.setTextColor(COLORS.TEXT_GRAY[0], COLORS.TEXT_GRAY[1], COLORS.TEXT_GRAY[2]);
        doc.text('Generated with DoughLabPro | doughlabpro.com', PAGE_WIDTH / 2 - 20, footY);

        const sName = (batch.name || 'recipe').replace(/[^a-z0-9]/gi, '_').toLowerCase();
        doc.save(`doughlab-${sName}.pdf`);

    } catch (error) {
        console.error("PDF Export crash", error);
        throw error;
    }
};

