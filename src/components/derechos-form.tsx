import { useState } from 'react';
import { DerechoFundamental } from '../types/tutela';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { ScrollArea } from './ui/scroll-area';
import { X } from 'lucide-react';
import React from 'react';
import { todosLosDerechos, derechosFundamentales } from '../data/derechos';

interface DerechosFormProps {
  data: DerechoFundamental[];
  onUpdate: (data: DerechoFundamental[]) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function DerechosForm({ data, onUpdate, onNext, onPrevious }: DerechosFormProps) {
  const [selectedDerechos, setSelectedDerechos] = useState<DerechoFundamental[]>(data);

  const handleDerechoToggle = (derecho: DerechoFundamental, checked: boolean) => {
    let newSelected;
    if (checked) {
      newSelected = [...selectedDerechos, derecho];
    } else {
      newSelected = selectedDerechos.filter(d => d.nombre !== derecho.nombre);
    }
    setSelectedDerechos(newSelected);
    onUpdate(newSelected);
  };

  const removeDerecho = (derecho: DerechoFundamental) => {
    const newSelected = selectedDerechos.filter(d => d.nombre !== derecho.nombre);
    setSelectedDerechos(newSelected);
    onUpdate(newSelected);
  };

  const isDerechoSelected = (derecho: DerechoFundamental) => {
    return selectedDerechos.some(d => d.nombre === derecho.nombre);
  };

  const isFormValid = () => {
    return selectedDerechos.length > 0;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Derechos Fundamentales Vulnerados</CardTitle>
        <CardDescription>
          Seleccione los derechos fundamentales que considera han sido vulnerados
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Derechos seleccionados - Siempre visible */}
        <div data-tour="selected-derechos">
          <h3 className="text-lg mb-3">Derechos Seleccionados ({selectedDerechos.length})</h3>
          {selectedDerechos.length > 0 ? (
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {selectedDerechos.map((derecho) => (
                <div key={derecho.nombre} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="default">
                        {derecho.articulo}
                      </Badge>
                      <span className="font-medium">{derecho.nombre}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{derecho.descripcion}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeDerecho(derecho)}
                    className="text-destructive hover:text-destructive"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-4 text-muted-foreground border border-dashed rounded-lg">
              <p>No hay derechos seleccionados</p>
              <p className="text-sm">Selecciona los derechos vulnerados de la lista a continuación</p>
            </div>
          )}
        </div>

        {/* Lista de derechos */}
        <div data-tour="derechos-list">
          <h3 className="text-lg mb-3">Seleccionar Derechos Vulnerados</h3>
          <ScrollArea className="h-96">
            <div className="space-y-3 pr-4">
              {derechosFundamentales.map((derecho) => (
                <div key={derecho.nombre} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <Checkbox
                    checked={isDerechoSelected(derecho)}
                    onCheckedChange={(checked) => handleDerechoToggle(derecho, !!checked)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="default">{derecho.articulo}</Badge>
                      <span className="font-medium">{derecho.nombre}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{derecho.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
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