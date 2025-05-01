import html2pdf from "html2pdf.js";

const generatePdf = (element: HTMLElement, fileName: string = "document.pdf") => {
  if (!element) {
    console.error("Element not provided.");
    return;
  }

  const options = {
    margin: 1,
    filename: fileName,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  // Generate the PDF and open it in a new tab
  html2pdf()
    .set(options)
    .from(element)
    .outputPdf("datauristring")
    .then((pdfDataUri: any) => {
      const pdfWindow = window.open();
      if (pdfWindow) {
        pdfWindow.document.write(
          `<iframe width="100%" height="100%" src="${pdfDataUri}"></iframe>`
        );
      }
    });
};

export default generatePdf;