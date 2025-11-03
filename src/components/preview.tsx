import { useState } from 'react';
import { TutelaData } from '../types/tutela';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import { Download, Edit, Loader2 } from 'lucide-react';
import { ApiService } from '../services/api';
import { Alert, AlertDescription } from './ui/alert';

interface PreviewProps {
  data: TutelaData;
  onPrevious: () => void;
  onEdit: (step: number) => void;
}

export function Preview({ data, onPrevious, onEdit }: PreviewProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const formatDate = () => {
    const now = new Date();
    return now.toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };



  const handleGenerateWord = async () => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await ApiService.generateAndDownloadWord(data);
      
      if (response.success) {
        setSubmitStatus({
          type: 'success',
          message: response.message
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: response.message
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Error inesperado al generar el documento Word'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Status Alert */}
      {submitStatus.type && (
        <Alert variant={submitStatus.type === 'success' ? 'default' : 'destructive'}>
          <AlertDescription>{submitStatus.message}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Previsualización de la Acción de Tutela</CardTitle>
          <CardDescription>
            Revise cuidadosamente toda la información antes de generar el documento PDF o enviarlo al sistema
          </CardDescription>
        </CardHeader>
        <CardContent data-tour="preview-content">
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-6 text-sm">
              {/* Encabezado */}
              <div className="text-center space-y-2">
                <h1 className="text-xl font-bold">ACCIÓN DE TUTELA</h1>
                <p>Para la protección de derechos fundamentales</p>
              </div>

              <Separator />

              {/* Datos del accionante */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">ACCIONANTE</h2>
                  <Button variant="ghost" size="sm" onClick={() => onEdit(0)} data-tour="edit-buttons">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
                <p><strong>Nombre:</strong> {data.personalData.nombre} {data.personalData.apellido}</p>
                <p><strong>Cédula:</strong> {data.personalData.cedula} expedida en {data.personalData.lugarExpedicion}</p>
                <p><strong>Residencia:</strong> {data.personalData.lugarResidencia}</p>
              </div>

              <Separator />

              {/* Datos del accionado */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">ACCIONADO</h2>
                  <Button variant="ghost" size="sm" onClick={() => onEdit(1)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
                <p>{data.accionadoData.nombre}</p>
              </div>

              <Separator />

              {/* Hechos */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">HECHOS</h2>
                  <Button variant="ghost" size="sm" onClick={() => onEdit(2)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
                {data.hechos.map((hecho) => (
                  <div key={hecho.id} className="space-y-1">
                    <p><strong>{hecho.orden}.</strong> {hecho.descripcion}</p>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Derechos vulnerados */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">DERECHOS FUNDAMENTALES VULNERADOS</h2>
                  <Button variant="ghost" size="sm" onClick={() => onEdit(3)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {data.derechosSeleccionados.map((derecho) => (
                    <div key={derecho.nombre} className="flex items-start gap-2">
                      <Badge variant={derecho.tipo === 'fundamental' ? 'default' : 'secondary'}>
                        {derecho.articulo}
                      </Badge>
                      <div>
                        <p className="font-medium">{derecho.nombre}</p>
                        <p className="text-muted-foreground text-xs">{derecho.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Anexos */}
              {data.anexos.length > 0 && (
                <>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold">ANEXOS</h2>
                      <Button variant="ghost" size="sm" onClick={() => onEdit(4)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                    <ul className="list-disc list-inside space-y-1">
                      {data.anexos.map((anexo) => (
                        <li key={anexo.id}>
                          {anexo.nombre}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Separator />
                </>
              )}

              {/* Peticiones */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">PETICIONES</h2>
                  <Button variant="ghost" size="sm" onClick={() => onEdit(6)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {data.peticiones.protegerDerechos && (
                    <p><strong>1.</strong> Que se protejan los derechos fundamentales vulnerados mencionados anteriormente.</p>
                  )}
                  {data.peticiones.accionEspecifica.trim() !== '' && (
                    <p>
                      <strong>{data.peticiones.protegerDerechos ? '2' : '1'}.</strong> Que se ordene al accionado a {data.peticiones.accionEspecifica}
                    </p>
                  )}
                </div>
              </div>

              <Separator />

              {/* Datos de comunicación */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">DATOS DE COMUNICACIÓN</h2>
                  <Button variant="ghost" size="sm" onClick={() => onEdit(5)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
                <p><strong>Dirección:</strong> {data.communicationData.direccion}</p>
                <p><strong>Teléfono:</strong> {data.communicationData.telefono}</p>
                <p><strong>Correo:</strong> {data.communicationData.correo}</p>
              </div>

              <Separator />

              {/* Fecha y firma */}
              <div className="space-y-4 pt-4">
                <p>Fecha: {formatDate()}</p>
                <div className="space-y-4">
                  <p>Atentamente,</p>
                  <div className="pt-8">
                    <div className="border-t border-foreground w-64">
                      <p className="pt-1">{data.personalData.nombre} {data.personalData.apellido}</p>
                      <p className="text-xs text-muted-foreground">C.C. {data.personalData.cedula}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Button variant="outline" onClick={onPrevious}>
          Anterior
        </Button>
        
        <div className="flex flex-col sm:flex-row gap-2">

          
          <Button 
            onClick={handleGenerateWord}
            disabled={isSubmitting}
            data-tour="generate-word-button"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generando...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Generar Word
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}