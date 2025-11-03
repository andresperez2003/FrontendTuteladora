import { useState } from 'react';
import { TutelaData, PersonalData, AccionadoData, Hecho, DerechoFundamental, Anexo, CommunicationData, Peticion } from './types/tutela';
import { Stepper } from './components/stepper';
import { PersonalDataForm } from './components/personal-data-form';
import { AccionadoForm } from './components/accionado-form';
import { HechosForm } from './components/hechos-form';
import { DerechosForm } from './components/derechos-form';
import { AnexosForm } from './components/anexos-form';
import { CommunicationForm } from './components/communication-form';
import { PeticionesForm } from './components/peticiones-form';
import { Preview } from './components/preview';
// import { generateTutelaPDF } from './utils/pdf-generator'; // Ya no se usa, ahora se genera desde el backend
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Scale, HelpCircle } from 'lucide-react';
import React from 'react';
import { tourService } from './services/tourService';

const steps = [
  'Datos Personales',
  'Accionado',
  'Hechos',
  'Derechos',
  'Anexos',
  'Comunicación',
  'Peticiones',
  'Previsualización'
];

const initialPersonalData: PersonalData = {
  nombre: '',
  apellido: '',
  cedula: '',
  lugarExpedicion: '',
  lugarResidencia: ''
};

const initialAccionadoData: AccionadoData = {
  nombre: ''
};

const initialCommunicationData: CommunicationData = {
  direccion: '',
  telefono: '',
  correo: ''
};

const initialPeticiones: Peticion = {
  protegerDerechos: true,
  accionEspecifica: ''
};

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [tutelaData, setTutelaData] = useState<TutelaData>({
    personalData: initialPersonalData,
    accionadoData: initialAccionadoData,
    hechos: [],
    derechosSeleccionados: [],
    anexos: [],
    communicationData: initialCommunicationData,
    peticiones: initialPeticiones
  });

  const updatePersonalData = (data: PersonalData) => {
    setTutelaData(prev => ({ ...prev, personalData: data }));
  };

  const updateAccionadoData = (data: AccionadoData) => {
    setTutelaData(prev => ({ ...prev, accionadoData: data }));
  };

  const updateHechos = (data: Hecho[]) => {
    setTutelaData(prev => ({ ...prev, hechos: data }));
  };

  const updateDerechos = (data: DerechoFundamental[]) => {
    setTutelaData(prev => ({ ...prev, derechosSeleccionados: data }));
  };

  const updateAnexos = (data: Anexo[]) => {
    setTutelaData(prev => ({ ...prev, anexos: data }));
  };

  const updateCommunicationData = (data: CommunicationData) => {
    setTutelaData(prev => ({ ...prev, communicationData: data }));
  };

  const updatePeticiones = (data: Peticion) => {
    setTutelaData(prev => ({ ...prev, peticiones: data }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const startTour = () => {
    switch (currentStep) {
      case 0:
        tourService.startPersonalDataTour();
        break;
      case 1:
        tourService.startAccionadoTour();
        break;
      case 2:
        tourService.startHechosTour();
        break;
      case 3:
        tourService.startDerechosTour();
        break;
      case 4:
        tourService.startAnexosTour();
        break;
      case 5:
        tourService.startCommunicationTour();
        break;
      case 6:
        tourService.startPeticionesTour();
        break;
      case 7:
        tourService.startPreviewTour();
        break;
      default:
        tourService.startGeneralTour();
    }
  };

  // La función generatePDF ahora se maneja en el componente Preview
  // y hace la petición al backend para generar el PDF

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalDataForm
            data={tutelaData.personalData}
            onUpdate={updatePersonalData}
            onNext={nextStep}
          />
        );
      case 1:
        return (
          <AccionadoForm
            data={tutelaData.accionadoData}
            onUpdate={updateAccionadoData}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        );
      case 2:
        return (
          <HechosForm
            data={tutelaData.hechos}
            onUpdate={updateHechos}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        );
      case 3:
        return (
          <DerechosForm
            data={tutelaData.derechosSeleccionados}
            onUpdate={updateDerechos}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        );
      case 4:
        return (
          <AnexosForm
            data={tutelaData.anexos}
            onUpdate={updateAnexos}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        );
      case 5:
        return (
          <CommunicationForm
            data={tutelaData.communicationData}
            onUpdate={updateCommunicationData}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        );
      case 6:
        return (
          <PeticionesForm
            data={tutelaData.peticiones}
            onUpdate={updatePeticiones}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        );
      case 7:
        return (
          <Preview
            data={tutelaData}
            onPrevious={previousStep}
            onEdit={goToStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-6" data-tour="header">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Scale className="w-8 h-8" />
              <div>
                <h1 className="text-2xl">La Tuteladora</h1>
                <p className="text-sm opacity-90">Defensoría del Pueblo - Generador de Acciones de Tutela</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={startTour}
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/20 text-primary-foreground hover:text-primary-foreground cursor-pointer"
              data-tour="tour-button"
            >
              <HelpCircle className="w-4 h-4 mr-2 text-primary-foreground" />
              <span className="text-primary-foreground">Ayuda</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Progress */}
          <Card data-tour="progress-card">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <CardTitle className="text-lg">
                  Paso {currentStep + 1} de {steps.length}
                </CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {steps[currentStep]}
                </Badge>
              </div>
              <CardDescription>
                Complete cada paso para generar su acción de tutela
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Stepper steps={steps} currentStep={currentStep} data-tour="stepper" />
            </CardContent>
          </Card>

          {/* Current Step Content */}
          {renderCurrentStep()}
        </div>
      </div>
    </div>
  );
}