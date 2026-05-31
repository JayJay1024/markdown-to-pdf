"use client";

import { Button } from "@heroui/button";
import { useState } from "react";

interface PdfExportProps {
  markdown: string;
}

export default function PdfExport({ markdown }: PdfExportProps) {
  const [isLoading, setIsLoading] = useState(false);

  const exportToPdf = async () => {
    if (markdown.trim()) {
      setIsLoading(true);
      try {
        // Call API to generate PDF
        const response = await fetch("/api/export-pdf", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            markdown: markdown,
            filename: "markdown-document.pdf",
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();

          throw new Error(errorData.error || "Failed to generate PDF");
        }

        // Download PDF file
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = "markdown-document.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("PDF export failed:", error);
        alert("Failed to export PDF. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Button
      className="flex-1"
      color="secondary"
      isLoading={isLoading}
      onPress={exportToPdf}
    >
      Export as PDF
    </Button>
  );
}
