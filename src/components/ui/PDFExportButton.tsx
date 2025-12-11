import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { ArrowDownTrayIcon } from '@/components/ui/Icons';
// Import the logo component directly or import the path if it's an image
import { Logo } from '@/components/ui/Logo';

interface PDFExportButtonProps {
    targetId: string;
    fileName?: string;
    label?: string;
    className?: string;
}

const PDFExportButton: React.FC<PDFExportButtonProps> = ({
    targetId,
    fileName = 'doughlab-document.pdf',
    label = 'Export PDF',
    className = ''
}) => {
    const [isGenerating, setIsGenerating] = useState(false);

    const handleExport = async () => {
        const sourceElement = document.getElementById(targetId);
        if (!sourceElement) {
            console.error(`Element with id ${targetId} not found`);
            return;
        }

        try {
            setIsGenerating(true);

            // 1. Create a temporary container for the print layout
            const container = document.createElement('div');
            container.style.position = 'fixed'; // Use fixed to ensure rendering even if scrolled
            container.style.top = '-9999px';
            container.style.left = '0';
            container.style.width = '210mm'; // A4 width
            container.style.minHeight = '297mm'; // A4 min height
            container.style.backgroundColor = '#ffffff';
            container.style.zIndex = '9999'; // High Z-index to ensure it captures properly
            document.body.appendChild(container);

            // 2. Clone the content
            const clone = sourceElement.cloneNode(true) as HTMLElement;

            // 3. Create a wrapper for the entire page content including the header
            const wrapper = document.createElement('div');
            wrapper.style.padding = '40px';
            wrapper.style.backgroundColor = '#ffffff';
            wrapper.style.position = 'relative';
            wrapper.style.fontFamily = "'Inter', 'Helvetica', 'Arial', sans-serif";
            wrapper.classList.add('pdf-mode');

            // --- Header Construction ---
            const header = document.createElement('div');
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.borderBottom = '2px solid #84cc16'; // Lime-500
            header.style.paddingBottom = '20px';
            header.style.marginBottom = '30px';

            // Logo Section (Left)
            const logoContainer = document.createElement('div');
            logoContainer.style.display = 'flex';
            logoContainer.style.alignItems = 'center';
            logoContainer.style.gap = '12px';

            // We'll insert an SVG string for the logo for reliable rendering
            const logoSvg = `
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 95C74.8528 95 95 74.8528 95 50C95 25.1472 74.8528 5 50 5C25.1472 5 5 25.1472 5 50C5 74.8528 25.1472 95 50 95Z" fill="#84cc16" fill-opacity="0.2"/>
                  <path d="M50 85C69.33 85 85 69.33 85 50C85 30.67 69.33 15 50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85Z" stroke="#65a30d" stroke-width="3"/>
                  <path d="M35 55C35 45 40 35 50 35C60 35 65 45 65 55" stroke="#4d7c0f" stroke-width="4" stroke-linecap="round"/>
                </svg>
            `;
            logoContainer.innerHTML = logoSvg;

            const titleContainer = document.createElement('div');
            titleContainer.innerHTML = `
                <h1 style="margin:0; font-size:20px; font-weight:800; color:#365314; letter-spacing: -0.5px;">DoughLab</h1>
                <p style="margin:0; font-size:10px; color:#65a30d; text-transform:uppercase; letter-spacing: 1px; font-weight:600;">Pro Recipe Export</p>
            `;
            logoContainer.appendChild(titleContainer);

            // Date/Metadata Section (Right)
            const metaContainer = document.createElement('div');
            metaContainer.style.textAlign = 'right';
            metaContainer.innerHTML = `
                <p style="margin:0; font-size:10px; color:#64748b;">Generated on</p>
                <p style="margin:0; font-size:12px; font-weight:600; color:#334155;">${new Date().toLocaleDateString()}</p>
            `;

            header.appendChild(logoContainer);
            header.appendChild(metaContainer);
            wrapper.appendChild(header);
            // --- End Header ---

            // --- Process Content ---
            // Remove "no-print" elements
            const noPrintElements = clone.querySelectorAll('.no-print');
            noPrintElements.forEach(el => el.remove());

            // Remove any existing buttons
            const buttons = clone.querySelectorAll('button');
            buttons.forEach(el => el.remove());

            // Add the cloned content to wrapper
            wrapper.appendChild(clone);

            // Footer
            const footer = document.createElement('div');
            footer.style.marginTop = '40px';
            footer.style.paddingTop = '20px';
            footer.style.borderTop = '1px solid #e2e8f0';
            footer.style.textAlign = 'center';
            footer.innerHTML = `
                <p style="margin:0; font-size:10px; color:#94a3b8;">Created with DoughLab Pro • www.doughlab.app</p>
            `;
            wrapper.appendChild(footer);

            // Inject Custom Styles for Clean PDF Look
            const style = document.createElement('style');
            style.innerHTML = `
                .pdf-mode {
                    color: #1e293b;
                    line-height: 1.4;
                    font-size: 9px;
                }
                .pdf-mode h1, .pdf-mode h2, .pdf-mode h3 {
                    color: #0f172a;
                    margin-top: 0;
                }
                .pdf-mode h1 { font-size: 18px; font-weight: 800; margin-bottom: 8px; letter-spacing: -0.02em; }
                .pdf-mode h2 { font-size: 13px; font-weight: 700; margin-bottom: 6px; margin-top: 16px; color: #3f6212; border-bottom: 1px solid #d9f99d; padding-bottom: 2px; }
                .pdf-mode h3 { font-size: 11px; font-weight: 600; margin-bottom: 4px; color: #334155; text-transform: uppercase; letter-spacing: 0.05em; }
                .pdf-mode p { font-size: 9px; margin-bottom: 6px; text-align: justify; color: #475569; }
                .pdf-mode ul, .pdf-mode ol { margin-bottom: 8px; padding-left: 16px; }
                .pdf-mode li { font-size: 9px; margin-bottom: 2px; }
                
                /* Table Styles for Ingredients */
                .pdf-mode table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 9px; }
                .pdf-mode th { text-align: left; border-bottom: 1px solid #cbd5e1; padding: 4px 2px; color: #64748b; font-weight: 700; font-size: 8px; text-transform: uppercase; letter-spacing: 0.05em; }
                .pdf-mode td { border-bottom: 1px solid #f1f5f9; padding: 4px 2px; color: #334155; vertical-align: middle; }
                .pdf-mode tr:last-child td { border-bottom: none; }
                
                /* Grid adjustments */
                .pdf-mode .grid { display: grid; gap: 12px; }
                .pdf-mode .grid-cols-2 { grid-template-columns: 1fr 1fr; }
                .pdf-mode .grid-cols-3 { grid-template-columns: 1fr 1fr 1fr; }
                
                /* Card Flattening */
                .pdf-mode .bg-white { background-color: transparent !important; }
                .pdf-mode .shadow-sm, .pdf-mode .shadow-md, .pdf-mode .shadow-dlp-md { box-shadow: none !important; border: 1px solid #e2e8f0; }
                .pdf-mode .border, .pdf-mode .border-t { border-color: #e2e8f0 !important; }
                .pdf-mode .rounded-xl, .pdf-mode .rounded-2xl { border-radius: 6px !important; }
                
                /* Specific component tweaks */
                .pdf-mode .text-lime-600 { color: #4d7c0f !important; }
                .pdf-mode .bg-lime-50 { background-color: #f7fee7 !important; border: 1px solid #d9f99d; }
                .pdf-mode .bg-slate-50 { background-color: #f8fafc !important; }
                
                /* Image specific */
                .pdf-mode img { max-width: 100%; height: auto; border-radius: 4px; }
            `;
            container.appendChild(style);
            container.appendChild(wrapper);

            // Wait for DOM to settle
            await new Promise(resolve => setTimeout(resolve, 800));

            // 4. Capture with html2canvas
            const canvas = await html2canvas(container, {
                scale: 2, // High resolution (300DPI equivalent roughly)
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff',
                width: 794, // A4 width in px at 96 DPI (approx) - actually html2canvas uses pixels
                windowWidth: 1200 // Ensure responsive styles don't break layout
            });

            // 5. Generate PDF
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save(fileName);

            // 6. Cleanup
            document.body.removeChild(container);

        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Failed to generate PDF. Please try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <button
            onClick={handleExport}
            disabled={isGenerating}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dlp-bg-muted text-dlp-text-secondary hover:bg-dlp-border transition-colors font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {isGenerating ? (
                <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-dlp-text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                </>
            ) : (
                <>
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    {label || 'Download PDF'}
                </>
            )}
        </button>
    );
};

export default PDFExportButton;
