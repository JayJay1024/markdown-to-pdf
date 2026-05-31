import { Link } from "@heroui/link";

export default function Header() {
  return (
    <header className="w-full border-b border-divider py-4 px-6 bg-background sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold">Markdown to PDF</h1>
        </div>

        <nav className="flex items-center gap-4">
          <Link
            className="flex items-center gap-2 text-sm text-default-500 hover:text-default-700 transition-colors"
            href="https://github.com/JayJay1024/markdown-to-pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
            GitHub
          </Link>

          <Link
            className="flex items-center gap-2 text-sm text-default-500 hover:text-default-700 transition-colors"
            href="https://github.com/JayJay1024/markdown-to-pdf?tab=readme-ov-file#usage"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
            Docs
          </Link>
        </nav>
      </div>
    </header>
  );
}
