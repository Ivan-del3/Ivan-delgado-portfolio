import React from 'react';
import html2pdf from 'html2pdf.js';

export default function PdfButton({ targetId, filename }) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    
    if (!element) return;

    const opt = {
      margin: 0,
      filename: filename || 'CV-Delgado.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 4, // Mayor escala para evitar borrosidad
        useCORS: true,
        letterRendering: true,
        scrollY: 0,
        scrollX: 0
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' 
      },
      pagebreak: { mode: 'avoid-all' } // Evita saltos de página accidentales
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <button id="downloadPdf" onClick={handleClick}>
      Descargar CV en PDF
    </button>
  );
}