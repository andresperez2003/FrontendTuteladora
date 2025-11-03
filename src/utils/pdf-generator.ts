import { jsPDF } from 'jspdf';
import { TutelaData } from '../types/tutela';

export function generateTutelaPDF(data: TutelaData) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const margin = 20;
  const lineHeight = 6;
  let yPosition = 30;

  // Función para agregar texto con salto de línea automático
  const addText = (text: string, x: number, y: number, options?: { align?: 'center' | 'left' | 'right', fontSize?: number, bold?: boolean }) => {
    if (options?.fontSize) {
      doc.setFontSize(options.fontSize);
    }
    if (options?.bold) {
      doc.setFont('helvetica', 'bold');
    } else {
      doc.setFont('helvetica', 'normal');
    }

    const lines = doc.splitTextToSize(text, pageWidth - (margin * 2));
    
    if (options?.align === 'center') {
      doc.text(lines, pageWidth / 2, y, { align: 'center' });
    } else {
      doc.text(lines, x, y);
    }
    
    return y + (lines.length * lineHeight);
  };

  // Función para verificar si necesitamos una nueva página
  const checkNewPage = (requiredSpace: number) => {
    if (yPosition + requiredSpace > doc.internal.pageSize.height - margin) {
      doc.addPage();
      yPosition = margin;
    }
  };

  // Título principal
  yPosition = addText('ACCIÓN DE TUTELA', pageWidth / 2, yPosition, { align: 'center', fontSize: 18, bold: true });
  yPosition = addText('Para la protección de derechos fundamentales', pageWidth / 2, yPosition + 5, { align: 'center', fontSize: 12 });
  yPosition += 20;

  // Datos del accionante
  checkNewPage(40);
  yPosition = addText('ACCIONANTE', margin, yPosition, { bold: true, fontSize: 14 });
  yPosition += 5;
  yPosition = addText(`Nombre: ${data.personalData.nombre} ${data.personalData.apellido}`, margin, yPosition);
  yPosition = addText(`Cédula: ${data.personalData.cedula} expedida en ${data.personalData.lugarExpedicion}`, margin, yPosition);
  yPosition = addText(`Residencia: ${data.personalData.lugarResidencia}`, margin, yPosition);
  yPosition += 10;

  // Datos del accionado
  checkNewPage(30);
  yPosition = addText('ACCIONADO', margin, yPosition, { bold: true, fontSize: 14 });
  yPosition += 5;
  yPosition = addText(data.accionadoData.nombre, margin, yPosition);
  yPosition += 10;

  // Hechos
  checkNewPage(50);
  yPosition = addText('HECHOS', margin, yPosition, { bold: true, fontSize: 14 });
  yPosition += 5;
  
  data.hechos.forEach((hecho) => {
    checkNewPage(30);
    yPosition = addText(`${hecho.orden}. ${hecho.descripcion}`, margin, yPosition);
    yPosition += 5;
  });
  yPosition += 10;

  // Derechos vulnerados
  checkNewPage(50);
  yPosition = addText('DERECHOS FUNDAMENTALES VULNERADOS', margin, yPosition, { bold: true, fontSize: 14 });
  yPosition += 5;
  
  data.derechosSeleccionados.forEach((derecho) => {
    checkNewPage(30);
    yPosition = addText(`• ${derecho.nombre} (${derecho.articulo}): ${derecho.descripcion}`, margin, yPosition);
    yPosition += 5;
  });
  yPosition += 10;

  // Anexos
  if (data.anexos.length > 0) {
    checkNewPage(30);
    yPosition = addText('ANEXOS', margin, yPosition, { bold: true, fontSize: 14 });
    yPosition += 5;
    
    data.anexos.forEach((anexo, index) => {
      yPosition = addText(`${index + 1}. ${anexo.nombre}`, margin, yPosition);
    });
    yPosition += 10;
  }

  // Peticiones
  checkNewPage(50);
  yPosition = addText('PETICIONES', margin, yPosition, { bold: true, fontSize: 14 });
  yPosition += 5;
  
  let peticionNumero = 1;
  
  if (data.peticiones.protegerDerechos) {
    yPosition = addText(`${peticionNumero}. Que se protejan los derechos fundamentales vulnerados mencionados anteriormente.`, margin, yPosition);
    yPosition += 5;
    peticionNumero++;
  }
  
  if (data.peticiones.accionEspecifica.trim() !== '') {
    yPosition = addText(`${peticionNumero}. Que se ordene al accionado a ${data.peticiones.accionEspecifica}`, margin, yPosition);
    yPosition += 5;
  }
  yPosition += 10;

  // Datos de comunicación
  checkNewPage(40);
  yPosition = addText('DATOS DE COMUNICACIÓN', margin, yPosition, { bold: true, fontSize: 14 });
  yPosition += 5;
  yPosition = addText(`Dirección: ${data.communicationData.direccion}`, margin, yPosition);
  yPosition = addText(`Teléfono: ${data.communicationData.telefono}`, margin, yPosition);
  yPosition = addText(`Correo: ${data.communicationData.correo}`, margin, yPosition);
  yPosition += 20;

  // Fecha y firma
  checkNewPage(60);
  const fecha = new Date().toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  yPosition = addText(`Fecha: ${fecha}`, margin, yPosition);
  yPosition += 20;
  yPosition = addText('Atentamente,', margin, yPosition);
  yPosition += 30;
  
  // Línea de firma
  doc.line(margin, yPosition, margin + 100, yPosition);
  yPosition += 5;
  yPosition = addText(`${data.personalData.nombre} ${data.personalData.apellido}`, margin, yPosition);
  yPosition = addText(`C.C. ${data.personalData.cedula}`, margin, yPosition, { fontSize: 10 });

  // Guardar el PDF
  doc.save(`Accion_Tutela_${data.personalData.nombre}_${data.personalData.apellido}.pdf`);
}