"use client";

import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { useState } from "react";

interface PdfExportProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

export default function PdfExport({ contentRef }: PdfExportProps) {
  const [isLoading, setIsLoading] = useState(false);

  const exportToPdf = async () => {
    if (contentRef.current) {
      setIsLoading(true);
      try {
        const element = contentRef.current;

        // Dynamically import and use html2pdf.js
        const html2pdf = (await import("html2pdf.js")).default;

        await html2pdf(element, {
          margin: [10, 10, 10, 10],
          filename: "markdown-document.pdf",
          image: {
            type: "jpeg",
            quality: 0.98,
          },
          enableLinks: true,
          html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: "#ffffff",
            width: 800,
            scrollX: 0,
            scrollY: 0,
          },
          jsPDF: {
            orientation: "portrait",
            unit: "mm",
            format: "a4",
          },
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("PDF export failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Tooltip content="Coming soon ~">
      <div className="flex-1">
        <Button
          isDisabled
          className="w-full"
          color="secondary"
          isLoading={isLoading}
          onPress={exportToPdf}
        >
          Export as PDF
        </Button>
      </div>
    </Tooltip>
  );
}
