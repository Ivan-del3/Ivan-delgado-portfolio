import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';

export default function PdfButton({ filename }) {
  const handleClick = async () => {
    const pages = document.querySelectorAll('.cv-paper');
    if (!pages.length) return;

    const { jsPDF } = await import('jspdf');
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });

    const A4_WIDTH_PX  = 794;
    const A4_HEIGHT_PX = 1123;
    const SCALE = 2;

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], {
        scale: SCALE,
        useCORS: true,
        letterRendering: true,
        scrollX: 0,
        scrollY: 0,
        width:  A4_WIDTH_PX,
        height: A4_HEIGHT_PX,
        windowWidth:  A4_WIDTH_PX,
        windowHeight: A4_HEIGHT_PX,
      });

      const clipped = document.createElement('canvas');
      clipped.width  = A4_WIDTH_PX  * SCALE;
      clipped.height = A4_HEIGHT_PX * SCALE;
      const ctx = clipped.getContext('2d');
      ctx.drawImage(canvas, 0, 0);  

      const imgData = clipped.toDataURL('image/jpeg', 1);

      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
    }

    pdf.save(filename || 'CV.pdf');
  };

  return (
    <button id="downloadPdf" onClick={handleClick}>
      Descargar CV
    </button>
  );
}