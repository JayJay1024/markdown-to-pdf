"use client";

import { Button } from "@heroui/button";

interface HtmlExportProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

export default function HtmlExport({ contentRef }: HtmlExportProps) {
  const exportToHtml = async () => {
    if (contentRef.current) {
      try {
        const element = contentRef.current;

        // Create a new HTML document with basic styles
        const htmlContent = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>Markdown Document</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #000000;
                background-color: #ffffff;
                margin: 20px;
                padding: 0;
              }
              h1, h2, h3, h4, h5, h6 {
                color: #000000;
                margin-top: 20px;
                margin-bottom: 10px;
              }
              h1 { font-size: 2em; }
              h2 { font-size: 1.5em; }
              h3 { font-size: 1.3em; }
              p {
                margin-bottom: 10px;
                color: #000000;
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
              }
              table {
                border-collapse: collapse;
                width: 100%;
                margin-bottom: 20px;
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
              }
              ul, ol {
                margin-bottom: 20px;
                padding-left: 20px;
              }
              li {
                margin-bottom: 5px;
                color: #000000;
              }
            </style>
          </head>
          <body>
            ${element.innerHTML}
          </body>
          </html>
        `;

        // Create a blob with the HTML content
        const blob = new Blob([htmlContent], { type: "text/html" });

        // Create download link
        const link = document.createElement("a");

        link.download = "markdown-document.html";
        link.href = URL.createObjectURL(blob);
        link.click();

        // Clean up
        URL.revokeObjectURL(link.href);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("HTML export failed:", error);
      }
    }
  };

  return (
    <Button className="flex-1" color="primary" onClick={exportToHtml}>
      Export as HTML
    </Button>
  );
}
