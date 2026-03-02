
import { AccionadoData } from '../types/tutela';
import { Button } from './ui/button';
import { Input } from './ui/input';
import React, { useState } from 'react';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface AccionadoFormProps {
  data: AccionadoData;
  onUpdate: (data: AccionadoData) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function AccionadoForm({ data, onUpdate, onNext, onPrevious }: AccionadoFormProps) {
  const [formData, setFormData] = useState<AccionadoData>(data);
  const [error, setError] = useState<string>('');

  const validate = (value: string) => {
    let newError = '';
    if (value.trim() === '') {
      newError = 'Este campo es requerido';
    } else if (value.trim().length < 3) {
      newError = 'El nombre es demasiado corto';
    }
    setError(newError);
    return newError === '';
  };

  const handleChange = (value: string) => {
    const newData = { nombre: value };
    setFormData(newData);
    validate(value);
    onUpdate(newData);
  };

  const isFormValid = () => {
    return formData.nombre.trim() !== '' && error === '';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Accionado</CardTitle>
        <CardDescription>
          Ingrese el nombre de la institución, autoridad o particular contra quien se instaura la acción de tutela
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="accionado">Nombre del Accionado</Label>
          <Input
            id="accionado"
            data-tour="accionado-input"
            value={formData.nombre}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Ej: Ministerio de Salud y Protección Social"
            className={error ? 'border-destructive' : ''}
          />
          {error && <p className="text-xs text-destructive">{error}</p>}
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