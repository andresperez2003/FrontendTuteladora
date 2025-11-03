import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

export interface TourStep {
  element: string;
  popover: {
    title: string;
    description: string;
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
  };
}

export class TourService {
  private driverInstance: any;
  private currentStep = 0;

  constructor() {
    this.driverInstance = driver({
      showProgress: true,
      showButtons: ['next', 'previous', 'close'],
      progressText: 'Paso {{current}} de {{total}}',
      nextBtnText: 'Siguiente',
      prevBtnText: 'Anterior',
      doneBtnText: 'Finalizar',
      closeBtnText: 'Cerrar',
      steps: []
    });
  }

  // Tour general para todos los pasos
  startGeneralTour() {
    const steps: TourStep[] = [
      {
        element: '[data-tour="header"]',
        popover: {
          title: '¡Bienvenido a La Tuteladora!',
          description: 'Esta aplicación te ayudará a generar una Acción de Tutela de manera guiada y sencilla. Te explicaremos cada paso del proceso.',
          side: 'bottom'
        }
      },
      {
        element: '[data-tour="progress-card"]',
        popover: {
          title: 'Progreso del formulario',
          description: 'Aquí puedes ver en qué paso te encuentras y cuántos pasos faltan por completar.',
          side: 'bottom'
        }
      },
      {
        element: '[data-tour="stepper"]',
        popover: {
          title: 'Navegación entre pasos',
          description: 'Puedes hacer clic en cualquier paso completado para volver a editarlo.',
          side: 'bottom'
        }
      },
      {
        element: '[data-tour="tour-button"]',
        popover: {
          title: 'Ayuda contextual',
          description: 'Este botón te permite obtener ayuda específica para el paso actual.',
          side: 'left'
        }
      }
    ];

    this.driverInstance.destroy();
    this.driverInstance = driver({
      showProgress: true,
      showButtons: ['next', 'previous', 'close'],
      progressText: 'Paso {{current}} de {{total}}',
      nextBtnText: 'Siguiente',
      prevBtnText: 'Anterior',
      doneBtnText: 'Finalizar',
      closeBtnText: 'Cerrar',
      steps: steps.map(step => ({
        element: step.element,
        popover: step.popover
      }))
    });

    this.driverInstance.drive();
  }

  // Tour específico para datos personales
  startPersonalDataTour() {
    const steps: TourStep[] = [
      {
        element: '[data-tour="nombre-input"]',
        popover: {
          title: 'Nombre completo',
          description: 'Ingresa tu nombre tal como aparece en tu cédula de ciudadanía. Ejemplo: "Juan Carlos"',
          side: 'right'
        }
      },
      {
        element: '[data-tour="apellido-input"]',
        popover: {
          title: 'Apellidos',
          description: 'Ingresa tus apellidos completos. Ejemplo: "García López"',
          side: 'right'
        }
      },
      {
        element: '[data-tour="cedula-input"]',
        popover: {
          title: 'Número de cédula',
          description: 'Ingresa tu número de cédula de ciudadanía sin puntos ni espacios. Ejemplo: "12345678"',
          side: 'right'
        }
      },
      {
        element: '[data-tour="lugar-expedicion-input"]',
        popover: {
          title: 'Lugar de expedición',
          description: 'Ingresa el lugar donde fue expedida tu cédula de ciudadanía. Ejemplo: "Bogotá D.C."',
          side: 'right'
        }
      },
      {
        element: '[data-tour="lugar-residencia-input"]',
        popover: {
          title: 'Lugar de residencia',
          description: 'Ingresa tu dirección completa de residencia. Ejemplo: "Calle 123 #45-67, Bogotá D.C."',
          side: 'right'
        }
      }
    ];

    this.startTourForSteps(steps);
  }

  // Tour específico para datos del accionado
  startAccionadoTour() {
    const steps: TourStep[] = [
      {
        element: '[data-tour="accionado-input"]',
        popover: {
          title: 'Nombre del accionado',
          description: 'Ingresa el nombre completo de la entidad, autoridad o particular contra quien presentas la tutela. Ejemplo: "Ministerio de Salud y Protección Social".',
          side: 'right'
        }
      }
    ];

    this.startTourForSteps(steps);
  }

  // Tour específico para hechos
  startHechosTour() {
    const steps: TourStep[] = [
      {
        element: '[data-tour="hechos-description"]',
        popover: {
          title: 'Descripción de los hechos',
          description: 'Describe de manera clara y cronológica los hechos que dieron lugar a la violación de tus derechos fundamentales.',
          side: 'right'
        }
      },
      {
        element: '[data-tour="add-hecho-button"]',
        popover: {
          title: 'Agregar más hechos',
          description: 'Si necesitas agregar más hechos relacionados, haz clic en este botón.',
          side: 'top'
        }
      }
    ];

    this.startTourForSteps(steps);
  }

  // Tour específico para derechos
  startDerechosTour() {
    const steps: TourStep[] = [
      {
        element: '[data-tour="derechos-list"]',
        popover: {
          title: 'Selección de derechos vulnerados',
          description: 'Selecciona todos los derechos fundamentales que consideras que han sido vulnerados. Puedes seleccionar múltiples opciones.',
          side: 'right'
        }
      },
      {
        element: '[data-tour="selected-derechos"]',
        popover: {
          title: 'Derechos seleccionados',
          description: 'Aquí puedes ver los derechos que has seleccionado y eliminarlos si es necesario.',
          side: 'top'
        }
      }
    ];

    this.startTourForSteps(steps);
  }

  // Tour específico para anexos
  startAnexosTour() {
    const steps: TourStep[] = [
      {
        element: '[data-tour="anexos-description"]',
        popover: {
          title: 'Descripción de anexos',
          description: 'Lista los documentos que vas a adjuntar como pruebas. Ejemplo: "Copia de cédula, Certificado médico, etc."',
          side: 'right'
        }
      },
      {
        element: '[data-tour="add-anexo-button"]',
        popover: {
          title: 'Agregar más anexos',
          description: 'Haz clic aquí para agregar más documentos a la lista.',
          side: 'top'
        }
      }
    ];

    this.startTourForSteps(steps);
  }

  // Tour específico para comunicación
  startCommunicationTour() {
    const steps: TourStep[] = [
      {
        element: '[data-tour="direccion-input"]',
        popover: {
          title: 'Dirección de notificación',
          description: 'Ingresa la dirección donde deseas recibir las notificaciones de la tutela.',
          side: 'right'
        }
      },
      {
        element: '[data-tour="telefono-input"]',
        popover: {
          title: 'Teléfono de contacto',
          description: 'Ingresa tu número de teléfono para contacto. Ejemplo: "3001234567"',
          side: 'right'
        }
      },
      {
        element: '[data-tour="correo-input"]',
        popover: {
          title: 'Correo electrónico',
          description: 'Ingresa tu correo electrónico válido para recibir notificaciones.',
          side: 'right'
        }
      }
    ];

    this.startTourForSteps(steps);
  }

  // Tour específico para peticiones
  startPeticionesTour() {
    const steps: TourStep[] = [
      {
        element: '[data-tour="proteger-derechos-checkbox"]',
        popover: {
          title: 'Protección de derechos',
          description: 'Marca esta casilla si solicitas que se protejan los derechos fundamentales vulnerados.',
          side: 'right'
        }
      },
      {
        element: '[data-tour="accion-especifica-input"]',
        popover: {
          title: 'Acción específica',
          description: 'Describe qué acción específica solicitas que realice la entidad accionada. Ejemplo: "Que se ordene la entrega del medicamento requerido"',
          side: 'right'
        }
      }
    ];

    this.startTourForSteps(steps);
  }

  // Tour específico para previsualización
  startPreviewTour() {
    const steps: TourStep[] = [
      {
        element: '[data-tour="preview-content"]',
        popover: {
          title: 'Previsualización del documento',
          description: 'Aquí puedes revisar toda la información que ingresaste antes de generar el PDF.',
          side: 'bottom'
        }
      },
      {
        element: '[data-tour="edit-buttons"]',
        popover: {
          title: 'Botones de edición',
          description: 'Usa estos botones para volver a editar cualquier sección si necesitas hacer cambios.',
          side: 'top'
        }
      },
      {
        element: '[data-tour="generate-word-button"]',
        popover: {
          title: 'Generar Word',
          description: 'Haz clic aquí para generar y descargar el documento Word de tu acción de tutela.',
          side: 'top'
        }
      }
    ];

    this.startTourForSteps(steps);
  }

  private startTourForSteps(steps: TourStep[]) {
    this.driverInstance.destroy();
    this.driverInstance = driver({
      showProgress: true,
      showButtons: ['next', 'previous', 'close'],
      progressText: 'Paso {{current}} de {{total}}',
      nextBtnText: 'Siguiente',
      prevBtnText: 'Anterior',
      doneBtnText: 'Finalizar',
      closeBtnText: 'Cerrar',
      steps: steps.map(step => ({
        element: step.element,
        popover: step.popover
      }))
    });

    this.driverInstance.drive();
  }

  destroy() {
    if (this.driverInstance) {
      this.driverInstance.destroy();
    }
  }
}

// Instancia singleton del servicio
export const tourService = new TourService();
