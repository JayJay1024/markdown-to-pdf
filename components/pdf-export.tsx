"use client";

import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface PdfExportProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

export default function PdfExport({ contentRef }: PdfExportProps) {
  const exportToPdf = async () => {
    if (contentRef.current) {
      try {
        const element = contentRef.current;

        // Create a temporary container with proper styling for PDF
        const tempContainer = document.createElement("div");

        tempContainer.style.position = "absolute";
        tempContainer.style.left = "-9999px";
        tempContainer.style.top = "0";
        tempContainer.style.width = "800px"; // Fixed width for consistent PDF layout
        tempContainer.style.backgroundColor = "#ffffff";
        tempContainer.style.padding = "40px";
        tempContainer.style.fontFamily = "Arial, sans-serif";
        tempContainer.style.fontSize = "14px";
        tempContainer.style.lineHeight = "1.6";
        tempContainer.style.color = "#000000";

        // Clone the content
        const clonedContent = element.cloneNode(true) as HTMLElement;

        // Apply PDF-specific styles to the cloned content
        const style = document.createElement("style");

        style.textContent = `
          h1, h2, h3, h4, h5, h6 {
            color: #000000;
            margin-top: 20px;
            margin-bottom: 10px;
            page-break-after: avoid;
          }
          h1 { font-size: 24px; }
          h2 { font-size: 20px; }
          h3 { font-size: 18px; }
          p {
            margin-bottom: 10px;
            color: #000000;
            page-break-inside: avoid;
          }
          code {
            background-color: #f5f5f5;
            padding: 2px 4px;
            border-radius: 3px;
            font-family: monospace;
            color: #000000;
          }
          pre {
            background-color: #f5f5f5;
            padding: 10px;
            border-radius: 5px;
            overflow: auto;
            font-family: monospace;
            color: #000000;
            page-break-inside: avoid;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
          table {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 20px;
            page-break-inside: avoid;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            color: #000000;
          }
          th {
            background-color: #f2f2f2;
            font-weight: bold;
          }
          blockquote {
            border-left: 4px solid #ddd;
            padding-left: 20px;
            margin: 20px 0;
            font-style: italic;
            color: #000000;
            page-break-inside: avoid;
          }
          ul, ol {
            margin-bottom: 20px;
            padding-left: 20px;
            page-break-inside: avoid;
          }
          li {
            margin-bottom: 5px;
            color: #000000;
          }
          img {
            max-width: 100%;
            height: auto;
            page-break-inside: avoid;
          }
        `;

        tempContainer.appendChild(style);
        tempContainer.appendChild(clonedContent);
        document.body.appendChild(tempContainer);

        // Convert to canvas
        const canvas = await html2canvas(tempContainer, {
          scale: 2, // Higher resolution
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
          width: 800,
          height: tempContainer.scrollHeight,
          scrollX: 0,
          scrollY: 0,
        });

        // Remove temporary container
        document.body.removeChild(tempContainer);

        // Calculate PDF dimensions
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Create PDF
        const pdf = new jsPDF("p", "mm", "a4");
        let heightLeft = imgHeight;
        let position = 0;

        // Add first page
        pdf.addImage(canvas, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add additional pages if content is longer than one page
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(canvas, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        // Save the PDF
        pdf.save("markdown-document.pdf");
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("PDF export failed:", error);
      }
    }
  };

  return (
    <Tooltip
      showArrow
      content="Coming soon! PDF export feature is under development."
      placement="top"
    >
      <div className="flex-1">
        <Button
          isDisabled
          className="w-full"
          color="secondary"
          onPress={exportToPdf}
        >
          Export as PDF
        </Button>
      </div>
    </Tooltip>
  );
}
