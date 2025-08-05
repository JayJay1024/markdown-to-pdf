declare module "html2pdf.js" {
  interface Html2PdfOptions {
    margin?: number | [number, number, number, number];
    filename?: string;
    image?: {
      type?: string;
      quality?: number;
    };
    enableLinks?: boolean;
    html2canvas?: {
      scale?: number;
      useCORS?: boolean;
      allowTaint?: boolean;
      backgroundColor?: string;
      width?: number;
      height?: number;
      scrollX?: number;
      scrollY?: number;
    };
    jsPDF?: {
      orientation?: "portrait" | "landscape";
      unit?: "mm" | "cm" | "in" | "pt";
      format?: string | [number, number];
    };
  }

  interface Html2PdfInstance {
    from(element: HTMLElement): Html2PdfInstance;
    set(options: Html2PdfOptions): Html2PdfInstance;
    save(): Promise<void>;
    outputPdf(): Promise<Blob>;
    outputImg(): Promise<string>;
  }

  function html2pdf(): Html2PdfInstance;
  function html2pdf(
    element: HTMLElement,
    options?: Html2PdfOptions,
  ): Promise<void>;
  function html2pdf(options?: Html2PdfOptions): Html2PdfInstance;

  export = html2pdf;
}
