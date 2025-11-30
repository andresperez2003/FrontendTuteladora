import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Hecho } from '../types/tutela';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { GripVertical, Trash2, Plus } from 'lucide-react';
import React from 'react';

interface HechosFormProps {
  data: Hecho[];
  onUpdate: (data: Hecho[]) => void;
  onNext: () => void;
  onPrevious: () => void;
}

interface DraggableHechoProps {
  hecho: Hecho;
  index: number;
  moveHecho: (dragIndex: number, hoverIndex: number) => void;
  onUpdate: (id: string, descripcion: string) => void;
  onDelete: (id: string) => void;
}

function DraggableHecho({ hecho, index, moveHecho, onUpdate, onDelete }: DraggableHechoProps) {
  const [, drag] = useDrag({
    type: 'hecho',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'hecho',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveHecho(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={(node) => { drag(drop(node)); }} className="bg-background border rounded-lg p-4 cursor-move">
      <div className="flex items-start gap-3">
        <GripVertical className="w-5 h-5 text-muted-foreground mt-1 cursor-grab" />
        <div className="flex-1 space-y-2">
          <div className="flex justify-between items-center">
            <Label>Hecho #{hecho.orden}</Label>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(hecho.id)}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
          <Textarea
            data-tour="hechos-description"
            value={hecho.descripcion}
            onChange={(e) => onUpdate(hecho.id, e.target.value)}
            placeholder="Describa el hecho que sustenta la acción de tutela..."
            className="min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
}

export function HechosForm({ data, onUpdate, onNext, onPrevious }: HechosFormProps) {
  // Asegurar que siempre haya al menos un hecho
  const [hechos, setHechos] = useState<Hecho[]>(() => {
    if (data.length === 0) {
      return [{
        id: Date.now().toString(),
        descripcion: '',
        orden: 1
      }];
    }
    return data;
  });

  const updateHechos = (newHechos: Hecho[]) => {
    // Reordenar los números de orden
    const ordenedHechos = newHechos.map((hecho, index) => ({
      ...hecho,
      orden: index + 1
    }));
    setHechos(ordenedHechos);
    onUpdate(ordenedHechos);
  };

  const addHecho = () => {
    const newHecho: Hecho = {
      id: Date.now().toString(),
      descripcion: '',
      orden: hechos.length + 1
    };
    updateHechos([...hechos, newHecho]);
  };

  const updateHecho = (id: string, descripcion: string) => {
    const newHechos = hechos.map(hecho =>
      hecho.id === id ? { ...hecho, descripcion } : hecho
    );
    updateHechos(newHechos);
  };

  const deleteHecho = (id: string) => {
    const newHechos = hechos.filter(hecho => hecho.id !== id);
    // Si se eliminó el último hecho, crear uno nuevo automáticamente
    if (newHechos.length === 0) {
      const nuevoHecho: Hecho = {
        id: Date.now().toString(),
        descripcion: '',
        orden: 1
      };
      updateHechos([nuevoHecho]);
    } else {
      updateHechos(newHechos);
    }
  };

  const moveHecho = (dragIndex: number, hoverIndex: number) => {
    const dragHecho = hechos[dragIndex];
    const newHechos = [...hechos];
    newHechos.splice(dragIndex, 1);
    newHechos.splice(hoverIndex, 0, dragHecho);
    updateHechos(newHechos);
  };

  const isFormValid = () => {
    return hechos.length > 0 && hechos.some(hecho => hecho.descripcion.trim() !== '');
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Card>
        <CardHeader>
          <CardTitle>Hechos</CardTitle>
          <CardDescription>
            Agregue los hechos que sustentan la acción de tutela. Puede reordenarlos arrastrándolos para mantener un orden cronológico.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {hechos.map((hecho, index) => (
              <DraggableHecho
                key={hecho.id}
                hecho={hecho}
                index={index}
                moveHecho={moveHecho}
                onUpdate={updateHecho}
                onDelete={deleteHecho}
              />
            ))}
          </div>

          <Button onClick={addHecho} variant="outline" className="w-full" data-tour="add-hecho-button">
            <Plus className="w-4 h-4 mr-2" />
            Agregar Hecho
          </Button>

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
    </DndProvider>
  );
}