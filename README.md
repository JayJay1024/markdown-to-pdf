# Markdown Editor

A powerful Markdown editor with real-time preview and HTML export functionality. Convert your HTML exports to PDF using browser print or online tools.

## Features

- **Real-time Preview**: Input Markdown content and see formatted results in real-time
- **HTML Export**: Export content as formatted HTML file (can be converted to PDF via browser print)
- **Syntax Highlighting**: Support for code block syntax highlighting
- **Table Support**: Support for GitHub Flavored Markdown tables
- **Responsive Design**: Adapts to various screen sizes
- **Dark Mode**: Support for dark and light theme switching

## Tech Stack

- **Frontend Framework**: Next.js 15
- **UI Component Library**: HeroUI
- **Styling**: Tailwind CSS
- **Markdown Rendering**: react-markdown + remark-gfm
- **Export**: Native browser APIs
- **Type Safety**: TypeScript

## Quick Start

### Install Dependencies

```bash
pnpm install
```

### Start Development Server

```bash
pnpm dev
```

The application will start at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
pnpm build
pnpm start
```

## Usage

1. **Edit Markdown**: Input Markdown content in the left editor
2. **Real-time Preview**: View formatted results on the right
3. **Export HTML**: Click "Export as HTML" to download content as formatted HTML file

## Export to PDF

Since this editor exports HTML files, you can easily convert them to PDF using your browser's print functionality:

### Method 1: Browser Print (Recommended)

1. **Export HTML**: Click "Export as HTML" button to download the HTML file
2. **Open in Browser**: Double-click the downloaded HTML file to open it in your default browser
3. **Print to PDF**:
   - Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
   - Or go to Menu → Print
4. **Save as PDF**:
   - In the print dialog, select "Save as PDF" or "Microsoft Print to PDF" as the destination
   - Click "Save" to download the PDF file

### Method 2: Online Converters

1. **Export HTML**: Download the HTML file using the export button
2. **Upload to Converter**: Use online services like:
   - [CloudConvert](https://cloudconvert.com/html-to-pdf)
   - [ILovePDF](https://www.ilovepdf.com/html-to-pdf)
   - [SmallPDF](https://smallpdf.com/html-to-pdf)
3. **Download PDF**: Convert and download the PDF file

### Method 3: Command Line Tools

If you have tools like `wkhtmltopdf` installed:

```bash
# Install wkhtmltopdf (macOS)
brew install wkhtmltopdf

# Convert HTML to PDF
wkhtmltopdf input.html output.pdf
```

### PDF Quality Tips

- **Use Browser Print**: Generally provides the best formatting and quality
- **Check Margins**: Adjust page margins in the print dialog for better layout
- **Select Paper Size**: Choose A4 or Letter size as needed
- **Enable Background Graphics**: Check this option to include colors and images

## Supported Markdown Syntax

- Headers (H1-H6)
- Bold, Italic
- Code blocks and inline code
- Lists (ordered and unordered)
- Links and images
- Tables
- Blockquotes
- Horizontal rules
- Task lists
- Strikethrough

## Project Structure

```
markdown-to-pdf/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── ...
├── components/            # React components
│   ├── html-export.tsx    # HTML export component
│   ├── logo.tsx           # Logo component
│   └── primitives.ts      # Style primitives
├── config/               # Configuration files
├── styles/               # Style files
└── public/               # Static assets
```

## Development

### Code Standards

The project uses ESLint and Prettier for code formatting:

```bash
pnpm lint
```

### Type Checking

```bash
pnpm type-check
```

## License

MIT License
