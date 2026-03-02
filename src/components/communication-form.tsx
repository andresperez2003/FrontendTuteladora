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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (field: keyof CommunicationData, value: string) => {
    let error = '';
    if (value.trim() === '') {
      error = 'Este campo es requerido';
    } else {
      if (field === 'telefono') {
        const telRegex = /^[0-9]{7,10}$/;
        if (!telRegex.test(value)) {
          error = 'El teléfono debe tener entre 7 y 10 dígitos';
        }
      } else if (field === 'correo') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = 'Ingrese un correo electrónico válido';
        }
      }
    }
    setErrors(prev => ({ ...prev, [field]: error }));
    return error === '';
  };

  const handleChange = (field: keyof CommunicationData, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    validateField(field, value);
    onUpdate(newData);
  };

  const isFormValid = () => {
    const hasEmptyFields = Object.values(formData).some(value => value.trim() === '');
    const hasErrors = Object.values(errors).some(error => error !== '');
    return !hasEmptyFields && !hasErrors;
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
            className={errors.direccion ? 'border-destructive' : ''}
          />
          {errors.direccion && <p className="text-xs text-destructive">{errors.direccion}</p>}
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
              className={errors.telefono ? 'border-destructive' : ''}
            />
            {errors.telefono && <p className="text-xs text-destructive">{errors.telefono}</p>}
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
              className={errors.correo ? 'border-destructive' : ''}
            />
            {errors.correo && <p className="text-xs text-destructive">{errors.correo}</p>}
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
