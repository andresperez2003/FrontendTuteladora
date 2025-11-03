import { TutelaData } from '../types/tutela';

// Configuración de la API
const API_BASE_URL = process.env.REACT_APP_API_URL;

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

// Interfaz que espera el backend
interface BackendTutelaData {
  juez: {
    nombre: string;
    entidad: string;
  };
  accionante: {
    nombre: string;
    cedula: string;
    ciudadExpedicion: string;
  };
  accionado: {
    nombre: string;
  };
  hechos: string[];
  derechosVulnerados: string[];
  pretensiones: string;
  anexos: string[];
  contacto: {
    email: string;
    telefono: string;
    direccion: string;
  };
}

export class ApiService {
  private static baseURL = API_BASE_URL;

  /**
   * Convierte los datos del frontend al formato que espera el backend
   */
  private static transformToBackendFormat(tutelaData: TutelaData): BackendTutelaData {
    return {
      juez: {
        nombre: "Juez Promiscuo Municipal", // Valor por defecto, puede ser configurable
        entidad: "Juzgado Promiscuo Municipal"
      },
      accionante: {
        nombre: `${tutelaData.personalData.nombre} ${tutelaData.personalData.apellido}`,
        cedula: tutelaData.personalData.cedula,
        ciudadExpedicion: tutelaData.personalData.lugarExpedicion
      },
      accionado: {
        nombre: tutelaData.accionadoData.nombre
      },
      hechos: tutelaData.hechos.map(hecho => hecho.descripcion),
      derechosVulnerados: tutelaData.derechosSeleccionados.map(derecho => derecho.nombre),
      pretensiones: tutelaData.peticiones.protegerDerechos 
        ? (tutelaData.peticiones.accionEspecifica.trim() !== '' 
          ? `Proteger los derechos fundamentales vulnerados y ordenar al accionado a ${tutelaData.peticiones.accionEspecifica}`
          : "Proteger los derechos fundamentales vulnerados")
        : tutelaData.peticiones.accionEspecifica,
      anexos: tutelaData.anexos.map(anexo => anexo.nombre),
      contacto: {
        email: tutelaData.communicationData.correo,
        telefono: tutelaData.communicationData.telefono,
        direccion: tutelaData.communicationData.direccion
      }
    };
  }

  /**
   * Envía los datos de la tutela al backend
   */
  static async submitTutela(tutelaData: TutelaData): Promise<ApiResponse> {
    try {
      const backendData = this.transformToBackendFormat(tutelaData);
      
      const response = await fetch(`${this.baseURL} `, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(backendData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        message: 'Acción de tutela enviada exitosamente',
        data: result,
      };
    } catch (error) {
      console.error('Error al enviar tutela:', error);
      return {
        success: false,
        message: 'Error al enviar la acción de tutela',
        error: error instanceof Error ? error.message : 'Error desconocido',
      };
    }
  }

  /**
   * Genera y descarga el documento Word desde el backend
   */
  static async generateAndDownloadWord(tutelaData: TutelaData): Promise<ApiResponse> {
    try {
      const backendData = this.transformToBackendFormat(tutelaData);
      console.log('Enviando datos al backend:', backendData);
      console.log('URL del backend:', this.baseURL);
      
      const response = await fetch(`${this.baseURL}/generar-word`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(backendData),
      });

      console.log('Respuesta del servidor:', response);
      console.log('Status:', response.status);
      console.log('Content-Type:', response.headers.get('content-type'));

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Verificar si la respuesta es un documento Word
      const contentType = response.headers.get('content-type');
      console.log('Content-Type detectado:', contentType);
      
      if (contentType && (contentType.includes('application/vnd.openxmlformats-officedocument.wordprocessingml.document') || contentType.includes('application/octet-stream'))) {
        console.log('Procesando documento Word...');
        // Crear blob del documento Word
        const blob = await response.blob();
        console.log('Blob creado:', blob);
        const url = window.URL.createObjectURL(blob);
        console.log('URL del blob:', url);
        
        // Crear enlace de descarga
        const link = document.createElement('a');
        link.href = url;
        link.download = `Accion_Tutela_${tutelaData.personalData.nombre}_${tutelaData.personalData.apellido}.docx`;
        console.log('Nombre del archivo:', link.download);
        document.body.appendChild(link);
        link.click();
        
        // Limpiar
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        return {
          success: true,
          message: 'Documento Word generado y descargado exitosamente',
        };
      } else {
        console.log('No es documento Word, procesando como JSON...');
        // Si no es documento Word, tratar como JSON
        const result = await response.json();
        console.log('Respuesta JSON:', result);
        return {
          success: true,
          message: 'Acción de tutela procesada exitosamente',
          data: result,
        };
      }
    } catch (error) {
      console.error('Error al generar documento Word:', error);
      return {
        success: false,
        message: 'Error al generar el documento Word',
        error: error instanceof Error ? error.message : 'Error desconocido',
      };
    }
  }

  /**
   * Obtiene el estado de una tutela por ID
   */
  static async getTutelaStatus(id: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseURL}/tutela/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        message: 'Estado obtenido exitosamente',
        data: result,
      };
    } catch (error) {
      console.error('Error al obtener estado:', error);
      return {
        success: false,
        message: 'Error al obtener el estado de la tutela',
        error: error instanceof Error ? error.message : 'Error desconocido',
      };
    }
  }

  /**
   * Actualiza una tutela existente
   */
  static async updateTutela(id: string, tutelaData: TutelaData): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseURL}/tutela/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tutelaData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        message: 'Acción de tutela actualizada exitosamente',
        data: result,
      };
    } catch (error) {
      console.error('Error al actualizar tutela:', error);
      return {
        success: false,
        message: 'Error al actualizar la acción de tutela',
        error: error instanceof Error ? error.message : 'Error desconocido',
      };
    }
  }
}
