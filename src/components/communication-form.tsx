import { useState } from 'react';
import { CommunicationData } from '../types/tutela';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface CommunicationFormProps {
  data: CommunicationData;
  onUpdate: (data: CommunicationData) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function CommunicationForm({ data, onUpdate, onNext, onPrevious }: CommunicationFormProps) {
  const [formData, setFormData] = useState<CommunicationData>(data);

  const handleChange = (field: keyof CommunicationData, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onUpdate(newData);
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Datos de Comunicación</CardTitle>
        <CardDescription>
          Ingrese sus datos de contacto para recibir respuesta a su acción de tutela
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="direccion">Dirección</Label>
          <Input
            id="direccion"
            data-tour="direccion-input"
            value={formData.direccion}
            onChange={(e) => handleChange('direccion', e.target.value)}
            placeholder="Ej: Calle 123 #45-67, Bogotá D.C."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="telefono">Teléfono</Label>
            <Input
              id="telefono"
              data-tour="telefono-input"
              value={formData.telefono}
              onChange={(e) => handleChange('telefono', e.target.value)}
              placeholder="Ej: 3001234567"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="correo">Correo Electrónico</Label>
            <Input
              id="correo"
              type="email"
              data-tour="correo-input"
              value={formData.correo}
              onChange={(e) => handleChange('correo', e.target.value)}
              placeholder="Ej: correo@ejemplo.com"
            />
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <Button onClick={onPrevious}>
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