import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { ArrowDownTrayIcon } from '@/components/ui/Icons';

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
            container.style.position = 'absolute';
            container.style.top = '-9999px';
            container.style.left = '0';
            container.style.width = '210mm'; // A4 width
            container.style.backgroundColor = '#ffffff';
            container.style.zIndex = '-1';
            document.body.appendChild(container);

            // 2. Clone the content
            const clone = sourceElement.cloneNode(true) as HTMLElement;

            // 3. Apply "Print" transformations to the clone

            // Remove "no-print" elements
            const noPrintElements = clone.querySelectorAll('.no-print');
            noPrintElements.forEach(el => el.remove());

            // Show "print-header" elements (remove 'hidden' class)
            const printHeaders = clone.querySelectorAll('.print-header');
            printHeaders.forEach(el => {
                el.classList.remove('hidden');
                el.classList.add('flex'); // Ensure it displays correctly
            });

            // Force specific styles for the PDF look
            clone.style.padding = '40px'; // More padding for "page" feel
            clone.style.backgroundColor = '#ffffff';
            clone.style.width = '100%';
            clone.classList.remove('shadow-lg', 'ring-1', 'rounded-2xl'); // Remove card styling
            clone.classList.add('pdf-mode');

            // Inject a style tag for granular control over the PDF content
            const style = document.createElement('style');
            style.innerHTML = `
                .pdf-mode {
                    font-family: 'Helvetica', 'Arial', sans-serif !important;
                    color: #000000 !important;
                    line-height: 1.3 !important;
                }
                .pdf-mode h1 {
                    font-size: 24px !important;
                    margin-bottom: 8px !important;
                    color: #000000 !important;
                    letter-spacing: -0.5px;
                }
                .pdf-mode h2 {
                    font-size: 18px !important;
                    margin-top: 16px !important;
                    margin-bottom: 6px !important;
                    color: #000000 !important;
                    border-bottom: 1px solid #e2e8f0;
                    padding-bottom: 4px;
                }
                .pdf-mode h3 {
                    font-size: 14px !important;
                    margin-top: 12px !important;
                    margin-bottom: 4px !important;
                    color: #000000 !important;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .pdf-mode p {
                    font-size: 10px !important;
                    margin-bottom: 8px !important;
                    color: #1a1a1a !important;
                    text-align: justify;
                }
                .pdf-mode ul, .pdf-mode ol {
                    margin-bottom: 8px !important;
                    padding-left: 16px !important;
                }
                .pdf-mode li {
                    font-size: 10px !important;
                    margin-bottom: 2px !important;
                    color: #1a1a1a !important;
                }
                .pdf-mode .text-sm {
                    font-size: 9px !important;
                }
                .pdf-mode .text-xs {
                    font-size: 8px !important;
                }
                /* Hide interactive elements that might have slipped through */
                .pdf-mode button {
                    display: none !important;
                }
                /* Compact the pro-tip/critical boxes */
                .pdf-mode .rounded-xl {
                    border-radius: 6px !important;
                    padding: 10px !important;
                    margin-top: 10px !important;
                    margin-bottom: 10px !important;
                }
                .pdf-mode .h-6.w-6 {
                    height: 16px !important;
                    width: 16px !important;
                }
            `;
            container.appendChild(style);

            // Append clone to container
            container.appendChild(clone);

            // Wait for images to load (if any) - though cloning usually keeps them if loaded
            // A small delay allows the DOM to settle
            await new Promise(resolve => setTimeout(resolve, 500));

            // 4. Capture with html2canvas
            const canvas = await html2canvas(container, {
                scale: 2, // High resolution
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff',
                windowWidth: 1200 // Ensure responsive styles don't break
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
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {isGenerating ? (
                <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
