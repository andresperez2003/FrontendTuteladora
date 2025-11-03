import { useState } from 'react';
import { Anexo } from '../types/tutela';
import { Button } from './ui/button';
import { Input } from './ui/input';
import React from 'react';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Plus, Trash2, FileText } from 'lucide-react';

interface AnexosFormProps {
  data: Anexo[];
  onUpdate: (data: Anexo[]) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function AnexosForm({ data, onUpdate, onNext, onPrevious }: AnexosFormProps) {
  // Asegurar que siempre haya al menos un anexo
  const [anexos, setAnexos] = useState<Anexo[]>(() => {
    if (data.length === 0) {
      return [{
        id: Date.now().toString(),
        nombre: ''
      }];
    }
    return data;
  });

  const updateAnexos = (newAnexos: Anexo[]) => {
    setAnexos(newAnexos);
    onUpdate(newAnexos);
  };

  const addAnexo = () => {
    const newAnexo: Anexo = {
      id: Date.now().toString(),
      nombre: ''
    };
    updateAnexos([...anexos, newAnexo]);
  };

  const updateAnexo = (id: string, nombre: string) => {
    const newAnexos = anexos.map(anexo =>
      anexo.id === id ? { ...anexo, nombre } : anexo
    );
    updateAnexos(newAnexos);
  };

  const deleteAnexo = (id: string) => {
    const newAnexos = anexos.filter(anexo => anexo.id !== id);
    // Si se eliminó el último anexo, crear uno nuevo automáticamente
    if (newAnexos.length === 0) {
      const nuevoAnexo: Anexo = {
        id: Date.now().toString(),
        nombre: ''
      };
      updateAnexos([nuevoAnexo]);
    } else {
      updateAnexos(newAnexos);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Anexos</CardTitle>
        <CardDescription>
          Liste los nombres de los documentos que acompañarán su acción de tutela
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          {anexos.map((anexo) => (
            <div key={anexo.id} className="flex items-center gap-3 p-4 border rounded-lg">
              <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1">
                <Input
                  data-tour="anexos-description"
                  value={anexo.nombre}
                  onChange={(e) => updateAnexo(anexo.id, e.target.value)}
                  placeholder="Nombre del documento"
                  className="border-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteAnexo(anexo.id)}
                className="text-destructive hover:text-destructive flex-shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <Button onClick={addAnexo} variant="outline" className="w-full" data-tour="add-anexo-button">
          <Plus className="w-4 h-4 mr-2" />
          Agregar Anexo
        </Button>

        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={onPrevious}>
            Anterior
          </Button>
          <Button onClick={onNext}>
            Siguiente
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}