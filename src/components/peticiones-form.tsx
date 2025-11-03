import { useState } from 'react';
import { Peticion } from '../types/tutela';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import React from 'react';

interface PeticionesFormProps {
  data: Peticion;
  onUpdate: (data: Peticion) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function PeticionesForm({ data, onUpdate, onNext, onPrevious }: PeticionesFormProps) {
  const [formData, setFormData] = useState<Peticion>({
    ...data,
    protegerDerechos: true // Siempre marcado por defecto
  });

  const handleAccionEspecificaChange = (value: string) => {
    const newData = { ...formData, accionEspecifica: value, protegerDerechos: true };
    setFormData(newData);
    onUpdate(newData);
  };

  const isFormValid = () => {
    return formData.accionEspecifica.trim() !== '';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Peticiones</CardTitle>
        <CardDescription>
          Especifique las peticiones que realizará al juzgado
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="proteger-derechos"
              data-tour="proteger-derechos-checkbox"
              checked={true}
              onCheckedChange={() => {}} // Función vacía para evitar cambios
              className="mt-1 cursor-default"
              style={{ pointerEvents: 'none' }}
            />
            <div className="space-y-1">
              <Label htmlFor="proteger-derechos" className="text-base">
                Que se protejan los derechos fundamentales vulnerados
              </Label>
              <p className="text-sm text-muted-foreground">
                Se solicitará al juzgado la protección de los derechos fundamentales que ha seleccionado anteriormente
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="accion-especifica">
              Acción específica que debe realizar el accionado
            </Label>
            <Textarea
              id="accion-especifica"
              data-tour="accion-especifica-input"
              value={formData.accionEspecifica}
              onChange={(e) => handleAccionEspecificaChange(e.target.value)}
              placeholder="Describa la acción específica que debe realizar el accionado para subsanar la vulneración de derechos."
              className="min-h-[120px]"
            />
            <p className="text-xs text-muted-foreground">
              Esta petición será incluida en el documento: "Que se ordene al accionado a [su descripción]"
            </p>
            
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={onPrevious}>
            Anterior
          </Button>
          <Button 
            onClick={onNext} 
            disabled={!isFormValid()}
          >
            Siguiente
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}