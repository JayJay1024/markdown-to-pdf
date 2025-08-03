"use client";

import { useState, useRef } from "react";
import { Textarea } from "@heroui/input";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { subtitle } from "@/components/primitives";
import HtmlExport from "@/components/html-export";
import { Logo } from "@/components/logo";

export default function Home() {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Editor

Start typing your Markdown content here...

## Features

- **Real-time Preview**: See your content formatted as you type
- **HTML Export**: Export your content as a formatted HTML file
- **Syntax Highlighting**: Code blocks with syntax highlighting
- **Table Support**: Create tables easily with Markdown syntax

### Example

\`\`\`javascript
console.log("Hello, World!");
\`\`\`

> This is a blockquote example.

**Happy writing!**`);

  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Logo size={48} />
        </div>
        <p className={subtitle({ class: "mt-2" })}>
          Input Markdown content, preview in real-time and export as HTML
        </p>
      </div>

      <div className="flex justify-center mb-4">
        <HtmlExport contentRef={previewRef} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor */}
        <Card className="h-[600px]">
          <CardHeader>
            <h3 className="text-lg font-semibold">Editor</h3>
          </CardHeader>
          <Divider />
          <CardBody className="p-0">
            <Textarea
              className="h-full min-h-[500px] resize-none border-0 focus:ring-0"
              placeholder="Enter Markdown content here..."
              value={markdown}
              variant="bordered"
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </CardBody>
        </Card>

        {/* Preview */}
        <Card className="h-[600px]">
          <CardHeader>
            <h3 className="text-lg font-semibold">Preview</h3>
          </CardHeader>
          <Divider />
          <CardBody className="overflow-auto">
            <div
              ref={previewRef}
              className="prose prose-sm max-w-none dark:prose-invert"
            >
              <ReactMarkdown
                components={{
                  code({
                    node: _node,
                    inline,
                    className,
                    children,
                    ...props
                  }: any) {
                    const match = /language-(\w+)/.exec(className || "");

                    return !inline && match ? (
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    ) : (
                      <code
                        className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                  table({ children }) {
                    return (
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                          {children}
                        </table>
                      </div>
                    );
                  },
                  th({ children }) {
                    return (
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 bg-gray-100 dark:bg-gray-700 font-semibold">
                        {children}
                      </th>
                    );
                  },
                  td({ children }) {
                    return (
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        {children}
                      </td>
                    );
                  },
                }}
                remarkPlugins={[remarkGfm]}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
