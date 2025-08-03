# Markdown Editor

A powerful Markdown editor with real-time preview and PDF export functionality.

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
│   ├── pdf-export.tsx     # PDF export component
│   ├── navbar.tsx         # Navigation bar
│   └── ...
├── config/               # Configuration files
├── styles/               # Style files
├── types/                # TypeScript type definitions
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
