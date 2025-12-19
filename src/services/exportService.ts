import { jsPDF } from 'jspdf';
import { Batch, DoughConfig, DoughResult } from '../types';
import { FLOURS } from '../flours-constants';
import { generateTechnicalMethod } from '../logic/methodGenerator';

const COLORS = {
    PRIMARY: [81, 161, 69], // #51a145 (Brand Green)
    SECONDARY: [54, 120, 44], // #36782c (Darker Green)
    TEXT_DARK: [30, 41, 59], // Slate-800
    TEXT_GRAY: [100, 116, 139], // Slate-500
    DIVIDER: [241, 245, 249], // Slate-100
    WHITE: [255, 255, 255],
    BG_LIGHT: [248, 250, 252] // Slate-50
};

/**
 * Generates a PDF with the specific UI design requested.
 */
export const exportBatchToPDF = async (batch: Batch, t: (key: string, options?: any) => string): Promise<void> => {
    try {
        const doc = new jsPDF();

        // Page Config
        const PAGE_HEIGHT = doc.internal.pageSize.getHeight();
        const PAGE_WIDTH = doc.internal.pageSize.getWidth();
        const MARGIN_X = 20;
        const CONTENT_WIDTH = PAGE_WIDTH - (MARGIN_X * 2);

        let cursorY = 0;

        // --- Helpers ---
        const checkPageBreak = (spaceNeeded: number) => {
            if (cursorY + spaceNeeded > PAGE_HEIGHT - 20) {
                doc.addPage();
                cursorY = 20;
            }
        };

        const drawDivider = (y: number) => {
            doc.setDrawColor(COLORS.PRIMARY[0], COLORS.PRIMARY[1], COLORS.PRIMARY[2]);
            doc.setLineWidth(0.5);
            doc.line(MARGIN_X, y, PAGE_WIDTH - MARGIN_X, y);
        };

        // --- 1. HEADER (Pre-load image for reliable export) ---
        // Brand Logo Background
        doc.setFillColor(COLORS.BG_LIGHT[0], COLORS.BG_LIGHT[1], COLORS.BG_LIGHT[2]);
        doc.rect(0, 0, PAGE_WIDTH, 40, 'F');

        // Robust Logo Loading
        try {
            const logoBase64 = await new Promise<string>((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'Anonymous';
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx?.drawImage(img, 0, 0);
                    resolve(canvas.toDataURL('image/png'));
                };
                img.onerror = reject;
                img.src = '/logo.png';
            });
            doc.addImage(logoBase64, 'PNG', MARGIN_X, 10, 35, 20);
        } catch (e) {
            console.warn("PDF Export: Logo image failed to load, using fallback text.", e);
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(COLORS.PRIMARY[0], COLORS.PRIMARY[1], COLORS.PRIMARY[2]);
            doc.text('DoughLabPro', MARGIN_X, 22);
        }

        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(COLORS.TEXT_GRAY[0], COLORS.TEXT_GRAY[1], COLORS.TEXT_GRAY[2]);
        doc.text('Advanced Dough Engineering', MARGIN_X, 32);

        cursorY = 55;

        // Recipe Title
        doc.setFontSize(22);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(COLORS.TEXT_DARK[0], COLORS.TEXT_DARK[1], COLORS.TEXT_DARK[2]);
        const recipeName = (batch.name || 'Untitled Recipe').toUpperCase();
        const titleLines = doc.splitTextToSize(recipeName, CONTENT_WIDTH);
        doc.text(titleLines, MARGIN_X, cursorY);
        cursorY += (titleLines.length * 8) + 4;

        // --- 2. KEY METRICS GRID ---
        const colWidth = CONTENT_WIDTH / 4;
        const metricsY = cursorY + 5;

        doc.setFillColor(COLORS.BG_LIGHT[0], COLORS.BG_LIGHT[1], COLORS.BG_LIGHT[2]);
        doc.roundedRect(MARGIN_X - 2, metricsY - 8, CONTENT_WIDTH + 4, 18, 3, 3, 'F');

        const drawMetric = (label: string, value: string, x: number) => {
            doc.setFontSize(7);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(COLORS.TEXT_GRAY[0], COLORS.TEXT_GRAY[1], COLORS.TEXT_GRAY[2]);
            doc.text(label.toUpperCase(), x, metricsY);

            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(COLORS.PRIMARY[0], COLORS.PRIMARY[1], COLORS.PRIMARY[2]);
            doc.text(value, x, metricsY + 6);
        };

        drawMetric('Hydration', `${batch.doughConfig.hydration}%`, MARGIN_X);

        const servingsLabel = batch.doughConfig.bakeType === 'PIZZAS'
            ? `${batch.doughConfig.numPizzas} Pizzas`
            : `${batch.doughConfig.numPizzas} Loaves`;
        drawMetric('Yield', servingsLabel, MARGIN_X + colWidth);

        const totalWeight = batch.doughResult ? batch.doughResult.totalDough.toFixed(0) : '0';
        drawMetric('Total Mass', `${totalWeight}g`, MARGIN_X + (colWidth * 2));

        const strategyTxt = batch.doughConfig.fermentationTechnique || 'Direct';
        drawMetric('Strategy', strategyTxt, MARGIN_X + (colWidth * 3));

        cursorY += 25;

        // --- 3. INGREDIENTS SECTION ---
        checkPageBreak(60);
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(COLORS.TEXT_DARK[0], COLORS.TEXT_DARK[1], COLORS.TEXT_DARK[2]);
        doc.text('1. DOUGH COMPOSITION', MARGIN_X, cursorY);

        cursorY += 2;
        drawDivider(cursorY);
        cursorY += 10;

        const resultForMethod = batch.doughResult || {
            totalFlour: 1000,
            totalWater: 600,
            totalSalt: 20,
            totalOil: 0,
            totalSugar: 0,
            totalYeast: 5,
            totalDough: 1625
        };

        const ingredients = resultForMethod.ingredientWeights || [];
        if (ingredients.length === 0) {
            const flourName = FLOURS.find(f => f.id === batch.doughConfig.flourId)?.name || 'Flour';
            ingredients.push({ name: flourName, weight: (resultForMethod as any).totalFlour || 1000, bakerPercentage: 100 } as any);
            ingredients.push({ name: 'Water', weight: (resultForMethod as any).totalWater || 600, bakerPercentage: batch.doughConfig.hydration || 60 } as any);
        }

        doc.setFontSize(10);
        ingredients.forEach((ing) => {
            checkPageBreak(8);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(COLORS.TEXT_DARK[0], COLORS.TEXT_DARK[1], COLORS.TEXT_DARK[2]);
            doc.text(ing.name, MARGIN_X, cursorY);

            doc.setFont('helvetica', 'normal');
            doc.setTextColor(COLORS.TEXT_GRAY[0], COLORS.TEXT_GRAY[1], COLORS.TEXT_GRAY[2]);
            const pctTxt = `${(ing.bakerPercentage || 0).toFixed(1)}%`;
            doc.text(pctTxt, MARGIN_X + 60, cursorY);

            doc.setTextColor(COLORS.TEXT_DARK[0], COLORS.TEXT_DARK[1], COLORS.TEXT_DARK[2]);
            const weightTxt = `${Math.round(ing.weight)} g`;
            const textWidth = doc.getTextWidth(weightTxt);
            doc.text(weightTxt, PAGE_WIDTH - MARGIN_X - textWidth, cursorY);
            cursorY += 7;
        });

        // --- Assembly Toppings ---
        const assembly = batch.doughConfig.assemblyIncrements || [];
        if (assembly.length > 0) {
            cursorY += 5;
            checkPageBreak(30);
            doc.setFontSize(11);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(COLORS.TEXT_DARK[0], COLORS.TEXT_DARK[1], COLORS.TEXT_DARK[2]);
            doc.text('2. ASSEMBLY & TOPPINGS', MARGIN_X, cursorY);
            cursorY += 6;

            assembly.forEach((item: any) => {
                checkPageBreak(8);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(COLORS.TEXT_GRAY[0], COLORS.TEXT_GRAY[1], COLORS.TEXT_GRAY[2]);
                doc.text(item.name, MARGIN_X, cursorY);

                const grams = item.grams || 0;
                const totalGrams = grams * (batch.doughConfig.numPizzas || 1);
                const weightTxt = `${Math.round(totalGrams)} g`;
                const textWidth = doc.getTextWidth(weightTxt);
                doc.text(weightTxt, PAGE_WIDTH - MARGIN_X - textWidth, cursorY);
                cursorY += 6;
            });
        }

        cursorY += 10;

        // --- 4. METHOD SECTION ---
        const steps = generateTechnicalMethod(batch.doughConfig, resultForMethod as any, t);
        checkPageBreak(40);
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(COLORS.TEXT_DARK[0], COLORS.TEXT_DARK[1], COLORS.TEXT_DARK[2]);
        doc.text('3. TECHNICAL METHOD', MARGIN_X, cursorY);

        cursorY += 2;
        drawDivider(cursorY);
        cursorY += 10;

        steps.forEach((step, index) => {
            doc.setFontSize(10);
            const instructions = doc.splitTextToSize(step.actionInstructions, CONTENT_WIDTH - 15);
            const stepHeight = 8 + (instructions.length * 5) + 6;
            checkPageBreak(stepHeight);

            const circleX = MARGIN_X + 4;
            const circleY = cursorY - 1;
            doc.setFillColor(COLORS.PRIMARY[0], COLORS.PRIMARY[1], COLORS.PRIMARY[2]);
            doc.circle(circleX, circleY, 4, 'F');

            doc.setTextColor(COLORS.WHITE[0], COLORS.WHITE[1], COLORS.WHITE[2]);
            doc.setFontSize(8);
            doc.setFont('helvetica', 'bold');
            const numStr = String(index + 1);
            const numWidth = doc.getTextWidth(numStr);
            doc.text(numStr, circleX - (numWidth / 2), circleY + 1.2);

            doc.setTextColor(COLORS.TEXT_DARK[0], COLORS.TEXT_DARK[1], COLORS.TEXT_DARK[2]);
            doc.setFontSize(11);
            doc.text(step.title, MARGIN_X + 12, cursorY - 0.5);

            cursorY += 5;
            doc.setTextColor(COLORS.TEXT_GRAY[0], COLORS.TEXT_GRAY[1], COLORS.TEXT_GRAY[2]);
            doc.setFontSize(10);
            doc.text(instructions, MARGIN_X + 12, cursorY);
            cursorY += (instructions.length * 5) + 8;
        });

        // --- 5. NOTES ---
        if (batch.notes?.trim()) {
            checkPageBreak(40);
            cursorY += 5;
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(COLORS.TEXT_DARK[0], COLORS.TEXT_DARK[1], COLORS.TEXT_DARK[2]);
            doc.text('CHEF NOTES', MARGIN_X, cursorY);
            cursorY += 6;
            doc.setFontSize(10);
            doc.setFont('helvetica', 'italic');
            doc.setTextColor(COLORS.TEXT_GRAY[0], COLORS.TEXT_GRAY[1], COLORS.TEXT_GRAY[2]);
            const noteLines = doc.splitTextToSize(batch.notes, CONTENT_WIDTH);
            doc.text(noteLines, MARGIN_X, cursorY);
            cursorY += (noteLines.length * 5) + 12;
        }

        // --- 6. FOOTER ---
        const footerY = PAGE_HEIGHT - 12;
        doc.setDrawColor(COLORS.DIVIDER[0], COLORS.DIVIDER[1], COLORS.DIVIDER[2]);
        doc.line(MARGIN_X, footerY - 5, PAGE_WIDTH - MARGIN_X, footerY - 5);
        doc.setFontSize(8);
        doc.setTextColor(COLORS.TEXT_GRAY[0], COLORS.TEXT_GRAY[1], COLORS.TEXT_GRAY[2]);
        const footerText = 'Generated with DoughLabPro | doughlabpro.com';
        const footerWidth = doc.getTextWidth(footerText);
        doc.text(footerText, (PAGE_WIDTH - footerWidth) / 2, footerY + 2);

        const safeName = (batch.name || 'recipe').replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const date = (batch.createdAt || new Date().toISOString()).split('T')[0];
        doc.save(`doughlab-${date}-${safeName}.pdf`);

    } catch (error) {
        console.error("Failed to export batch to PDF:", error);
        throw new Error(t('ui.failed_to_generate_pdf_file'));
    }
};

