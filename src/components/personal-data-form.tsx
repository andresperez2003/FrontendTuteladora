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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (field: keyof PersonalData, value: string) => {
    let error = '';
    if (value.trim() === '') {
      error = 'Este campo es requerido';
    } else {
      if (field === 'nombre' || field === 'apellido') {
        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        if (!nameRegex.test(value)) {
          error = 'Solo se permiten letras';
        } else if (value.trim().length < 3) {
          error = 'Mínimo 3 caracteres';
        } else if (value.trim().length > 50) {
          error = 'Máximo 50 caracteres';
        }
      } else if (field === 'cedula') {
        const cedulaRegex = /^[0-9]+$/;
        if (!cedulaRegex.test(value)) {
          error = 'Solo se permiten números';
        } else if (value.trim().length < 6 || value.trim().length > 20) {
          error = 'Debe tener entre 6 y 20 dígitos';
        }
      }
    }
    setErrors(prev => ({ ...prev, [field]: error }));
    return error === '';
  };

  const handleChange = (field: keyof PersonalData, value: string) => {
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
              className={errors.nombre ? 'border-destructive' : ''}
            />
            {errors.nombre && <p className="text-xs text-destructive">{errors.nombre}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="apellido">Apellido</Label>
            <Input
              id="apellido"
              data-tour="apellido-input"
              value={formData.apellido}
              onChange={(e) => handleChange('apellido', e.target.value)}
              placeholder="Ingrese su apellido"
              className={errors.apellido ? 'border-destructive' : ''}
            />
            {errors.apellido && <p className="text-xs text-destructive">{errors.apellido}</p>}
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
              className={errors.cedula ? 'border-destructive' : ''}
            />
            {errors.cedula && <p className="text-xs text-destructive">{errors.cedula}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lugarExpedicion">Lugar de Expedición</Label>
            <Input
              id="lugarExpedicion"
              data-tour="lugar-expedicion-input"
              value={formData.lugarExpedicion}
              onChange={(e) => handleChange('lugarExpedicion', e.target.value)}
              placeholder="Ej: Bogotá D.C."
              className={errors.lugarExpedicion ? 'border-destructive' : ''}
            />
            {errors.lugarExpedicion && <p className="text-xs text-destructive">{errors.lugarExpedicion}</p>}
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
            className={errors.lugarResidencia ? 'border-destructive' : ''}
          />
          {errors.lugarResidencia && <p className="text-xs text-destructive">{errors.lugarResidencia}</p>}
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
