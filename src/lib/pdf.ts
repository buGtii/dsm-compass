import jsPDF from 'jspdf';

export function exportNoteToPDF(title: string, content: string, meta?: string) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const margin = 48;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const usable = pageWidth - margin * 2;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(title || 'Untitled note', margin, margin + 6);

  if (meta) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(120);
    doc.text(meta, margin, margin + 26);
  }

  doc.setTextColor(20);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  const startY = margin + (meta ? 50 : 32);
  const lines = doc.splitTextToSize(content || '', usable);
  let y = startY;
  for (const line of lines) {
    if (y > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
    doc.text(line, margin, y);
    y += 16;
  }

  // Footer
  doc.setFontSize(9);
  doc.setTextColor(140);
  doc.text('PsychRef · Educational reference only — not a clinical record.', margin, pageHeight - 24);

  doc.save(`${(title || 'note').replace(/[^a-z0-9-_]+/gi, '_')}.pdf`);
}
