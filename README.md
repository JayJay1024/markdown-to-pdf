# Markdown Editor

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![HeroUI](https://img.shields.io/badge/HeroUI-2.4.20-purple?style=for-the-badge)](https://heroui.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![pnpm](https://img.shields.io/badge/pnpm-9.15.4-FF6C37?style=for-the-badge&logo=pnpm)](https://pnpm.io/)
[![ESLint](https://img.shields.io/badge/ESLint-9.25.1-4B32C3?style=for-the-badge&logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.5.3-F7B93E?style=for-the-badge&logo=prettier)](https://prettier.io/)
[![CI/CD](https://img.shields.io/github/actions/workflow/status/JayJay1024/markdown-to-pdf/ci.yml?branch=main&style=for-the-badge)](https://github.com/JayJay1024/markdown-to-pdf/actions)
[![Dependabot](https://img.shields.io/badge/Dependabot-enabled-025E8C?style=for-the-badge&logo=dependabot)](https://dependabot.com/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://markdown-to-pdf-five.vercel.app/)

A powerful Markdown editor with real-time preview, HTML export, and direct PDF export functionality. Convert your Markdown content to professional PDF documents with a single click.

## Features

- **Real-time Preview**: Input Markdown content and see formatted results in real-time
- **HTML Export**: Export content as formatted HTML file
- **PDF Export**: Direct PDF export with professional formatting and styling
- **Syntax Highlighting**: Support for code block syntax highlighting
- **Table Support**: Support for GitHub Flavored Markdown tables
- **Responsive Design**: Adapts to various screen sizes
- **Dark Mode**: Support for dark and light theme switching

## Tech Stack

- **Frontend Framework**: Next.js 15
- **UI Component Library**: HeroUI
- **Styling**: Tailwind CSS
- **Markdown Rendering**: react-markdown + remark-gfm
- **PDF Export**: puppeteer-core + Browserless.io
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

### Live Demo

🌐 **Live Demo**: [https://markdown-to-pdf-five.vercel.app/](https://markdown-to-pdf-five.vercel.app/)

### Build for Production

```bash
pnpm build
pnpm start
```

## Usage

1. **Edit Markdown**: Input Markdown content in the left editor
2. **Real-time Preview**: View formatted results on the right
3. **Export Options**: 
   - Click "Export as HTML" to download content as formatted HTML file
   - Click "Export as PDF" to download content as professional PDF document

## Export to PDF

This editor provides direct PDF export functionality using puppeteer-core connected to Browserless.io. The PDF generation happens on the server-side, ensuring consistent and high-quality output.

### Server-side PDF Generation

The application uses:
- **puppeteer-core**: For browser automation
- **Browserless.io**: Cloud-based Chrome browser service
- **Server-side rendering**: Ensures consistent PDF output across all devices

### Configuration

To enable PDF export functionality, you need to configure Browserless.io:

1. **Get Browserless Token**:
   - Visit [Browserless.io](https://www.browserless.io/)
   - Sign up for a free account
   - Get your API token from the dashboard

2. **Set Environment Variables**:
   Create a `.env.local` file in the project root:
   ```bash
   # Browserless.io Configuration
   BROWSERLESS_TOKEN=your_browserless_token_here
   
   # Optional: Custom Browserless URL (default: https://chrome.browserless.io)
   # BROWSERLESS_URL=https://chrome.browserless.io
   ```

3. **Vercel Deployment**:
   - Add the environment variables in your Vercel project settings
   - Go to Project Settings → Environment Variables
   - Add `BROWSERLESS_TOKEN` with your token value

### PDF Features

- **Professional Formatting**: Clean, readable typography
- **Code Syntax Highlighting**: Properly formatted code blocks
- **Table Support**: Well-formatted tables with borders
- **Page Breaks**: Automatic page breaks for long content
- **Print-optimized**: Optimized for PDF output

### Alternative Export Methods

If you prefer client-side PDF generation, you can also:

1. **Export HTML**: Click "Export as HTML" button to download the HTML file
2. **Browser Print**: Open the HTML file and use browser's print-to-PDF functionality
3. **Online Converters**: Use services like CloudConvert, ILovePDF, etc.

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

## Performance Monitoring

For production deployments, consider adding:

- **Vercel Analytics**: Monitor real user performance
- **Error Tracking**: Add Sentry or similar for error monitoring
- **Performance Budgets**: Set up bundle size limits in CI/CD

## License

MIT License
