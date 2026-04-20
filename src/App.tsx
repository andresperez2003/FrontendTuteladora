import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Scale, HelpCircle, Info, X as XIcon } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StepInfoPanel, stepData } from './components/StepInfoPanel';
import { DerechoDetailPanel } from './components/DerechoDetailPanel';

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

const STORAGE_KEY = 'tutela_form_data';
const MAX_AGE = 60 * 60 * 1000; // 1 hora en milisegundos

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
  const [lastClickedDerecho, setLastClickedDerecho] = useState<DerechoFundamental | null>(null);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const [isAppMobile, setIsAppMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsAppMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const { data, step, timestamp } = JSON.parse(saved);

        // Verificar si los datos han expirado (1 hora)
        const isExpired = timestamp && (Date.now() - timestamp > MAX_AGE);

        if (isExpired) {
          localStorage.removeItem(STORAGE_KEY);
          return;
        }

        if (data) setTutelaData(data);
        if (typeof step === 'number') setCurrentStep(step);
      } catch (e) {
        console.error('Error loading saved tutela data:', e);
      }
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      data: tutelaData,
      step: currentStep,
      timestamp: Date.now()
    }));
  }, [tutelaData, currentStep]);

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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            onDerechoClick={setLastClickedDerecho}
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
      <Navbar data-tour="header" />

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pt-8 max-w-6xl">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Help & Info Buttons */}
          <div className="flex justify-end gap-2">
            {/* Mobile Only: Información del paso */}
            {isAppMobile && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  console.log("MOBILE BOTON CLICK: abriendo modal...");
                  setMobileInfoOpen(true);
                }}
                className="flex items-center justify-center gap-2 cursor-pointer h-9 px-3 z-50 relative"
                title="Mostrar información"
              >
                <Info className="w-4 h-4" />
                <span>Información del paso</span>
              </Button>
            )}

            {/* General Tour Button */}
            <Button
              size="sm"
              onClick={startTour}
              data-tour="tour-button"
              variant="outline"
              className="gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">¿Necesitas ayuda?</span>
              <span className="sm:hidden">Ayuda</span>
            </Button>
          </div>

          {/* Progress */}
          <div data-tour="progress-card" className="flex items-center gap-2 px-1">
            <span className="text-sm text-muted-foreground">
              Paso {currentStep + 1} de {steps.length}
            </span>
            <Badge variant="default" className="w-fit font-bold">
              {steps[currentStep]}
            </Badge>
          </div>

          {/* Two-column layout: info panel + form */}
          <div className="flex flex-row gap-6 items-start">
            {/* Left — Contextual info (35%), hidden on mobile via CSS class */}
            <div className="info-panel-side space-y-5">
              {currentStep !== 3 ? (
                <StepInfoPanel currentStep={currentStep} />
              ) : (
                <DerechoDetailPanel derecho={lastClickedDerecho} />
              )}
            </div>

            {/* Right — Form (65%) */}
            <div className="form-content-side min-w-0">
              {renderCurrentStep()}
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Native Mobile Custom Sheet */}
      {mobileInfoOpen && createPortal(
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 99999, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={{ backgroundColor: 'white', width: '100%', height: '85vh', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', padding: '24px', position: 'relative' }}>
            <button 
              onClick={() => setMobileInfoOpen(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', padding: '8px', backgroundColor: '#f1f5f9', borderRadius: '50%', zIndex: 999999, border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
            >
              X Cerrar
            </button>
            <div style={{ overflowY: 'auto', height: '100%', marginTop: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>
                 {currentStep !== 3 ? (stepData[currentStep]?.title || "Información del paso") : (lastClickedDerecho?.nombre || "Derechos Fundamentales")}
              </h2>
              <p style={{ marginTop: '16px', color: '#334155', fontSize: '16px', lineHeight: '1.6' }}>
                 {currentStep !== 3 ? (stepData[currentStep]?.description || "Descripción no disponible.") : (lastClickedDerecho?.descripcion || "Seleccione un derecho para ver su descripción.")}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}