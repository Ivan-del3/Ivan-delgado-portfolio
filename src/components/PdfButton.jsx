import React from 'react';
import html2pdf from 'html2pdf.js';

export default function PdfButton({ targetId, filename }) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    console.log(element)
    if (!element) return;
    html2pdf()
      .set({
        margin: 1,
        filename,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      })
      .from(element)
      .save();
  };

  return <button onClick={handleClick}>Descargar PDF</button>;
}