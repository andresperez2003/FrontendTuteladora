export interface PersonalData {
  nombre: string;
  apellido: string;
  cedula: string;
  lugarExpedicion: string;
  lugarResidencia: string;
}

export interface AccionadoData {
  nombre: string;
}

export interface Hecho {
  id: string;
  descripcion: string;
  orden: number;
}

export interface DerechoFundamental {
  nombre: string;
  articulo: string;
  descripcion: string;
  tipo: 'fundamental' | 'conexidad';
}

export interface Anexo {
  id: string;
  nombre: string;
}

export interface CommunicationData {
  direccion: string;
  telefono: string;
  correo: string;
}

export interface Peticion {
  protegerDerechos: boolean;
  accionEspecifica: string;
}

export interface TutelaData {
  personalData: PersonalData;
  accionadoData: AccionadoData;
  hechos: Hecho[];
  derechosSeleccionados: DerechoFundamental[];
  anexos: Anexo[];
  communicationData: CommunicationData;
  peticiones: Peticion;
}