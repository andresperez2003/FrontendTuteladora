import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Clock, FileCheck, Scale, Mail, AlertCircle, CheckCircle, XCircle, RefreshCw, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import '../styles/pages/ProcesoTutela.css';

export function ProcesoTutela() {
  const timelineSteps = [
    {
      icon: <FileCheck className="w-6 h-6" />,
      titulo: "1. Presentación",
      descripcion: "La tutela se presenta ante cualquier juez o autoridad judicial.",
      detalles: [
        "Escrito o verbal",
        "Sin abogado ni formalidades",
        "Puede presentarse en cualquier momento, incluso por medios electrónicos habilitados.",
        "Sin costo alguno"
      ],
      duracion: "Inmediato",
      colorClass: "blue"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      titulo: "2. Admisión y Traslado",
      descripcion: "El juez admite la tutela y pide informe al accionado.",
      detalles: [
        "Verificación de requisitos",
        "El juez podrá solicitar informe al accionado dentro del término que señale.",
        "Informe del accionado",
        "Solicitud de pruebas"
      ],
      duracion: "Sujeto al término del juez",
      colorClass: "green"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      titulo: "3. Pruebas y Decisión",
      descripcion: "El juez practica pruebas y toma una decisión judicial.",
      detalles: [
        "Pruebas de oficio o parte",
        "Evaluación de derechos",
        "Concesión o negación",
        "Sentencia motivada"
      ],
      duracion: "Máximo 10 días",
      colorClass: "purple"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      titulo: "4. Impugnación",
      descripcion: "La decisión puede ser impugnada por las partes.",
      detalles: [
        "3 días para presentarla",
        "Resuelve superior jerárquico",
        "El superior jerárquico deberá decidir dentro de los veinte (20) días siguientes a la recepción del expediente.",
        "No suspende el cumplimiento"
      ],
      duracion: "3 días presentación / 20 días resolución",
      colorClass: "orange"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      titulo: "5. Revisión en Corte",
      descripcion: "La Corte Constitucional puede revisar el caso.",
      detalles: [
        "Seleccionada por importancia",
        "Unifica jurisprudencia",
        "Precedente nacional",
        "Decisión definitiva"
      ],
      duracion: "Sujeto a selección",
      colorClass: "red"
    }
  ];

  const posiblesDecisiones = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      titulo: "Concede la tutela",
      descripcion: "El juez ordena proteger el derecho mediante acciones específicas."
    },
    {
      icon: <XCircle className="w-5 h-5 text-red-600" />,
      titulo: "Niega la tutela",
      descripcion: "El juez considera que no hubo vulneración de derechos."
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-yellow-600" />,
      titulo: "Declara improcedente",
      descripcion: "Existen otros mecanismos judiciales para resolver el caso."
    }
  ];

  return (
    <div className="proceso-wrapper">
      <Navbar />

      <div className="container mx-auto px-4 proceso-container max-w-4xl">
        {/* Título */}
        <div className="proceso-header-section">
          <h1 className="proceso-main-title">
            ¿Qué pasa después de presentar la tutela?
          </h1>
          <p className="proceso-subtitle">
            Timeline del proceso judicial y tiempos legales estimados
          </p>
        </div>

        {/* Timeline */}
        <div className="proceso-timeline">
          {timelineSteps.map((step, index) => (
            <div key={index} className="proceso-step-card">
              <div className="proceso-step-layout">
                {/* Info Lateral */}
                <div className="proceso-step-info">
                  <div className={`proceso-icon-box icon-${step.colorClass}`}>
                    {step.icon}
                  </div>
                  <div className="proceso-duration-tag">
                    {step.duracion}
                  </div>
                </div>

                {/* Contenido Principal */}
                <div className="proceso-step-content">
                  <h2 className="proceso-step-title">{step.titulo}</h2>
                  <p className="proceso-step-desc">{step.descripcion}</p>

                  <ul className="proceso-details-list">
                    {step.detalles.map((detalle, i) => (
                      <li key={i}>{detalle}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decisiones */}
        <h2 className="proceso-section-title">Posibles decisiones del juez</h2>
        <div className="proceso-decision-grid">
          {posiblesDecisiones.map((decision, index) => (
            <div key={index} className="proceso-decision-card">
              <div className="proceso-decision-icon">{decision.icon}</div>
              <h3 className="proceso-decision-title">{decision.titulo}</h3>
              <p className="proceso-decision-desc">{decision.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Acciones */}
        <div className="proceso-action-card">
          <h2 className="proceso-step-title mb-4">¿Qué hacer después de la decisión?</h2>
          <div className="proceso-action-grid">
            <div>
              <h3 className="proceso-action-title text-green-700">Si es concedida:</h3>
              <ul className="proceso-action-list">
                <li><CheckCircle className="w-3 h-3 text-green-600 mt-1" /> Esperar cumplimiento judicial</li>
                <li><CheckCircle className="w-3 h-3 text-green-600 mt-1" /> Informar al juez si hay desacato</li>
                <li><CheckCircle className="w-3 h-3 text-green-600 mt-1" /> Pedir medidas de cumplimiento</li>
              </ul>
            </div>
            <div>
              <h3 className="proceso-action-title text-red-700">Si es negada:</h3>
              <ul className="proceso-action-list">
                <li><AlertCircle className="w-3 h-3 text-red-600 mt-1" /> Puede impugnar en 3 días</li>
                <li><AlertCircle className="w-3 h-3 text-red-600 mt-1" /> Acudir a otros mecanismos</li>
                <li><AlertCircle className="w-3 h-3 text-red-600 mt-1" /> Podrá presentarse una nueva tutela únicamente cuando existan hechos nuevos o una vulneración distinta.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Info Extra */}
        <div className="proceso-info-grid">
          <div className="proceso-info-card">
            <h3 className="proceso-info-card-title">
              <Clock className="w-4 h-4" /> Tiempos clave
            </h3>
            <ul className="proceso-info-list">
              <li>• Admisión y traslado: El juez fija el término para el informe</li>
              <li>• Decisión: 10 días hábiles obligatorios</li>
              <li>• Impugnación: Solo 3 días tras notificación</li>
            </ul>
          </div>
          <div className="proceso-info-card">
            <h3 className="proceso-info-card-title">
              <AlertCircle className="w-4 h-4" /> Recomendaciones
            </h3>
            <ul className="proceso-info-list">
              <li>• Guardar copia de radicado y anexo</li>
              <li>• Revisar notificaciones diariamente</li>
              <li>• Consultar estado en Tyba/Justicia21</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="proceso-cta-section">
          <Link to="/tutela">
            <Button className="bg-primary hover:bg-primary/90 proceso-cta-button">
              Comenzar mi tutela ahora <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <p className="proceso-footer-text">
            * Los tiempos pueden variar ligeramente según la carga del juzgado
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
