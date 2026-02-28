import jsPDF from 'jspdf';
import { Batch } from '../types';
import { generateTechnicalMethod } from '../logic/methodGenerator';

// --- RICH UI DESIGN SYSTEM ---
const BRAND = {
    PRIMARY: [27, 67, 50] as [number, number, number], // #1B4332 (Deep Emerald)
    ACCENT: [81, 161, 69] as [number, number, number], // #51a145 (Vibrant Green)
    HIGHLIGHT: [236, 253, 245] as [number, number, number], // #ECFDF5 (Minty bg)
    DARK: [15, 23, 42] as [number, number, number],
    GRAY: [100, 116, 139] as [number, number, number],
    LIGHT_BG: [248, 250, 252] as [number, number, number],
    WHITE: [255, 255, 255] as [number, number, number],
};

export const exportBatchToPDF = async (batch: Batch, t: (key: string, options?: any) => string): Promise<void> => {
    try {
        if (!batch) throw new Error(t('common.batch_data_is_missing_175'));

        const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
        const PAGE_W = 210;
        const PAGE_H = 297;
        const MARGIN = 10; // Tight margins for dense layout
        const CONTENT_W = PAGE_W - (MARGIN * 2);

        let cy = MARGIN; // Cursor Y

        // --- UTILS ---
        const checkBreak = (h: number) => {
            if (cy + h > PAGE_H - MARGIN) {
                doc.addPage();
                cy = MARGIN + 5;
            }
        };

        const drawCard = (x: number, y: number, w: number, h: number, fill: [number, number, number] = BRAND.WHITE) => {
            doc.setFillColor(...fill);
            doc.setDrawColor(230, 230, 230);
            doc.setLineWidth(0.3);
            doc.roundedRect(x, y, w, h, 3, 3, 'FD');
        };

        // ==========================================
        // 1. HEADER (VIBRANT BANNER)
        // ==========================================
        // Full width color bar
        doc.setFillColor(...BRAND.PRIMARY);
        doc.rect(0, 0, PAGE_W, 45, 'F');

        // Logo / Brand
        doc.setFontSize(30);
        doc.setTextColor(...BRAND.ACCENT);
        doc.setFont('helvetica', 'bold');
        doc.text('DLP.', MARGIN, 20); // Logo-ish shorthand

        // Title
        doc.setFontSize(22);
        doc.setTextColor(...BRAND.WHITE);
        doc.text((batch.name || 'Untitled').toUpperCase(), MARGIN + 25, 20);

        // Metadata Pill
        doc.setFillColor(...BRAND.ACCENT);
        doc.roundedRect(MARGIN + 25, 26, 60, 8, 2, 2, 'F');
        doc.setFontSize(9);
        doc.setTextColor(...BRAND.WHITE);
        const styleName = batch.doughConfig.recipeStyle.replace(/_/g, ' ');
        doc.text(styleName, MARGIN + 28, 31);

        // Date Right
        doc.setFontSize(10);
        doc.setTextColor(200, 200, 200);
        const dateStr = new Date(batch.createdAt).toLocaleDateString();
        doc.text(dateStr, PAGE_W - MARGIN, 20, { align: 'right' });

        // Export ID
        doc.setFontSize(8);
        const batchId = batch.id ? batch.id.slice(0, 8).toUpperCase() : 'DRAFT';
        doc.text(`#${batchId}`, PAGE_W - MARGIN, 25, { align: 'right' });

        cy = 55;

        // ==========================================
        // 2. METRICS DASHBOARD (DENSE COMPACT)
        // ==========================================
        const config = batch.doughConfig;
        const results = batch.doughResult!;

        const metricW = (CONTENT_W - 6) / 4;
        const metricH = 18;

        const drawMetric = (lbl: string, val: string, x: number) => {
            drawCard(x, cy, metricW, metricH, BRAND.HIGHLIGHT);

            doc.setFontSize(7);
            doc.setTextColor(...BRAND.PRIMARY);
            doc.setFont('helvetica', 'bold');
            doc.text(lbl.toUpperCase(), x + 4, cy + 6);

            doc.setFontSize(11);
            doc.setTextColor(...BRAND.DARK);
            doc.text(val, x + 4, cy + 13);
        };

        drawMetric(t('common.hydration_178', { defaultValue: 'Hydration' }), `${config.hydration}%`, MARGIN);
        drawMetric('Salt', `${config.salt}%`, MARGIN + metricW + 2);
        drawMetric('Total Mass', `${Math.round(results.totalDough)}g`, MARGIN + (metricW * 2) + 4);
        const yieldVal = `${config.numPizzas} x ${Math.round(results.totalDough / config.numPizzas)}g`;
        drawMetric('Yield', yieldVal, MARGIN + (metricW * 3) + 6);

        cy += metricH + 8;

        // ==========================================
        // 3. FORMULA TABLE (RICH & STRIPED)
        // ==========================================
        doc.setFontSize(10);
        doc.setTextColor(...BRAND.DARK);
        doc.setFont('helvetica', 'bold');
        doc.text('MASTER FORMULA', MARGIN, cy);

        cy += 4;

        // Table Header
        doc.setFillColor(...BRAND.DARK);
        doc.rect(MARGIN, cy, CONTENT_W, 8, 'F');

        doc.setFontSize(8);
        doc.setTextColor(...BRAND.WHITE);
        doc.text('INGREDIENT', MARGIN + 4, cy + 5);
        doc.text('BAKER %', PAGE_W - MARGIN - 35, cy + 5, { align: 'right' });
        doc.text('WEIGHT', PAGE_W - MARGIN - 4, cy + 5, { align: 'right' });

        cy += 8;

        const ings = results.ingredientWeights || [];
        ings.forEach((ing, i) => {
            const rowH = 8;

            // Zebra Stripe
            if (i % 2 === 0) {
                doc.setFillColor(...BRAND.LIGHT_BG);
                doc.rect(MARGIN, cy, CONTENT_W, rowH, 'F');
            } else {
                // border line for white rows
                doc.setDrawColor(240, 240, 240);
                doc.line(MARGIN, cy + rowH, PAGE_W - MARGIN, cy + rowH);
            }

            doc.setFontSize(9);
            // Name
            doc.setTextColor(...BRAND.DARK);
            doc.setFont('helvetica', 'bold');
            const name = t(ing.name as any) || ing.name;
            doc.text(name, MARGIN + 4, cy + 5.5);

            // Values
            doc.setFont('helvetica', 'normal');
            doc.text(`${Number(ing.bakerPercentage).toFixed(1)}%`, PAGE_W - MARGIN - 35, cy + 5.5, { align: 'right' });

            doc.setFont('helvetica', 'bold');
            doc.text(`${Math.round(ing.weight)}g`, PAGE_W - MARGIN - 4, cy + 5.5, { align: 'right' });

            cy += rowH;
        });

        // Totals Bar
        cy += 2;
        doc.setFillColor(...BRAND.ACCENT);
        doc.rect(MARGIN, cy, CONTENT_W, 1, 'F');
        cy += 5;

        cy += 8;

        // ==========================================
        // 4. NOTES (COLOR BOX)
        // ==========================================
        if (config.notes) {
            checkBreak(30);

            doc.setFillColor(255, 252, 235); // Amber-50
            doc.setDrawColor(252, 211, 77); // Amber-300

            const noteText = doc.splitTextToSize(config.notes, CONTENT_W - 10);
            const boxH = (noteText.length * 5) + 12;

            doc.roundedRect(MARGIN, cy, CONTENT_W, boxH, 2, 2, 'FD');

            doc.setFontSize(8);
            doc.setTextColor(180, 83, 9); // Amber-700
            doc.setFont('helvetica', 'bold');
            doc.text('NOTES', MARGIN + 5, cy + 6);

            doc.setFont('helvetica', 'italic');
            doc.setTextColor(69, 26, 3); // Amber-950
            doc.text(noteText, MARGIN + 5, cy + 12);

            cy += boxH + 8;
        }

        // ==========================================
        // 5. METHOD (RICH CARDS)
        // ==========================================
        const steps = generateTechnicalMethod(config, results, t);
        if (steps.length > 0) {
            checkBreak(40);

            doc.setFontSize(10);
            doc.setTextColor(...BRAND.DARK);
            doc.setFont('helvetica', 'bold');
            doc.text('EXECUTION STEPS', MARGIN, cy);
            cy += 6;

            steps.forEach((step, i) => {
                const stepNum = i + 1;

                // Measure
                doc.setFontSize(9);
                doc.setFont('helvetica', 'normal');
                const lines = doc.splitTextToSize(step.actionInstructions, CONTENT_W - 20); // -20 for padding
                const cardH = (lines.length * 5) + 14; // Header space + text

                checkBreak(cardH);

                // Draw Card
                // Left border accent
                drawCard(MARGIN, cy, CONTENT_W, cardH, BRAND.WHITE);
                doc.setFillColor(...BRAND.ACCENT);
                doc.rect(MARGIN, cy, 2, cardH, 'F'); // Left Green Strip

                // Step Number Circle
                const circleY = cy + 8;
                const circleX = MARGIN + 8;
                doc.setFillColor(...BRAND.PRIMARY);
                doc.circle(circleX, circleY, 4, 'F');
                doc.setTextColor(...BRAND.WHITE);
                doc.setFontSize(8);
                doc.setFont('helvetica', 'bold');
                doc.text(String(stepNum), circleX, circleY + 1, { align: 'center' });

                // Title
                doc.setTextColor(...BRAND.PRIMARY);
                doc.setFontSize(9);
                doc.text(step.title.toUpperCase(), MARGIN + 16, cy + 7);

                // Body
                doc.setTextColor(...BRAND.GRAY);
                doc.setFontSize(9);
                doc.setFont('helvetica', 'normal');
                doc.text(lines, MARGIN + 16, cy + 13);

                cy += cardH + 4; // Tight gap
            });
        }

        // Footer
        const pages = doc.internal.pages.length - 1;
        for (let i = 1; i <= pages; i++) {
            doc.setPage(i);

            // Bottom Bar
            doc.setFillColor(...BRAND.LIGHT_BG);
            doc.rect(0, PAGE_H - 12, PAGE_W, 12, 'F');

            doc.setFontSize(8);
            doc.setTextColor(...BRAND.GRAY);
            doc.text('Generated by DoughLab Pro', MARGIN, PAGE_H - 5);
            doc.text(`Page ${i}/${pages}`, PAGE_W - MARGIN, PAGE_H - 5, { align: 'right' });
        }

        doc.save(`${batch.name?.replace(/\s+/g, '_') || 'formula'}_pro_color.pdf`);

    } catch (e) {
        console.error(e);
        throw e;
    }
};
