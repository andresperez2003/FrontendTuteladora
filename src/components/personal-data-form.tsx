import { useState } from 'react';
import { PersonalData } from '../types/tutela';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import React from 'react';

interface PersonalDataFormProps {
  data: PersonalData;
  onUpdate: (data: PersonalData) => void;
  onNext: () => void;
}

export function PersonalDataForm({ data, onUpdate, onNext }: PersonalDataFormProps) {
  const [formData, setFormData] = useState<PersonalData>(data);

  const handleChange = (field: keyof PersonalData, value: string) => {
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
        <CardTitle>Datos Personales del Accionante</CardTitle>
        <CardDescription>
          Ingrese sus datos personales para la acción de tutela
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              id="nombre"
              data-tour="nombre-input"
              value={formData.nombre}
              onChange={(e) => handleChange('nombre', e.target.value)}
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apellido">Apellido</Label>
            <Input
              id="apellido"
              data-tour="apellido-input"
              value={formData.apellido}
              onChange={(e) => handleChange('apellido', e.target.value)}
              placeholder="Ingrese su apellido"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cedula">Número de Cédula</Label>
            <Input
              id="cedula"
              data-tour="cedula-input"
              value={formData.cedula}
              onChange={(e) => handleChange('cedula', e.target.value)}
              placeholder="Ej: 12345678"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lugarExpedicion">Lugar de Expedición</Label>
            <Input
              id="lugarExpedicion"
              data-tour="lugar-expedicion-input"
              value={formData.lugarExpedicion}
              onChange={(e) => handleChange('lugarExpedicion', e.target.value)}
              placeholder="Ej: Bogotá D.C."
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="lugarResidencia">Lugar de Residencia</Label>
          <Input
            id="lugarResidencia"
            data-tour="lugar-residencia-input"
            value={formData.lugarResidencia}
            onChange={(e) => handleChange('lugarResidencia', e.target.value)}
            placeholder="Ciudad, municipio, vereda"
          />
        </div>

        <div className="flex justify-end pt-4">
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