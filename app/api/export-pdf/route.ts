import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer-core";

export async function POST(request: NextRequest) {
  try {
    const { markdown, filename = "document.pdf" } = await request.json();

    if (!markdown) {
      return NextResponse.json(
        { error: "Markdown content is required" },
        { status: 400 },
      );
    }

    // Browserless.io configuration
    const browserlessUrl =
      process.env.BROWSERLESS_URL || "https://chrome.browserless.io";
    const browserlessToken = process.env.BROWSERLESS_TOKEN;

    if (!browserlessToken) {
      return NextResponse.json(
        { error: "Browserless token not configured" },
        { status: 500 },
      );
    }

    // Connect to Browserless
    const browser = await puppeteer.connect({
      browserWSEndpoint: `${browserlessUrl}?token=${browserlessToken}`,
    });

    const page = await browser.newPage();

    // Set viewport size
    await page.setViewport({
      width: 1200,
      height: 800,
    });

    // Encode the markdown content for URL
    const encodedContent = encodeURIComponent(markdown);

    // Get the base URL from the request
    const protocol = request.headers.get("x-forwarded-proto") || "http";
    const host = request.headers.get("host") || "localhost:3000";
    const baseUrl = `${protocol}://${host}`;

    const previewUrl = `${baseUrl}/pdf-preview?content=${encodedContent}`;

    await page.goto(previewUrl, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });

    // Wait for content rendering
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Generate PDF
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "20mm",
        right: "20mm",
        bottom: "20mm",
        left: "20mm",
      },
      preferCSSPageSize: true,
    });

    await browser.disconnect();

    // Return PDF file
    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": pdf.length.toString(),
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("PDF generation error:", error);

    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 },
    );
  }
}
