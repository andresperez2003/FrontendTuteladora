import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Clock, FileCheck, Scale, Mail, AlertCircle, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { Navbar } from '../components/Navbar';

export function ProcesoTutela() {
  const timelineSteps = [
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      titulo: "1. Presentación",
      descripcion: "La tutela se presenta ante cualquier juez o autoridad judicial.",
      detalles: [
        "Puede presentarse por escrito o verbalmente",
        "No requiere abogado ni formalidades especiales",
        "Se puede presentar cualquier día y hora (incluso en horas no hábiles)",
        "No tiene costo alguno"
      ],
      duracion: "Inmediato",
      color: "blue"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      titulo: "2. Admisión y Traslado",
      descripcion: "El juez admite la tutela y corre traslado al accionado para que rinda informe.",
      detalles: [
        "El juez verifica que cumpla los requisitos básicos",
        "Da traslado al accionado por 1 a 3 días",
        "El accionado debe rendir informe explicando su versión",
        "Puede solicitar pruebas adicionales"
      ],
      duracion: "1-3 días",
      color: "green"
    },
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      titulo: "3. Pruebas y Decisión",
      descripcion: "El juez practica pruebas si es necesario y toma una decisión.",
      detalles: [
        "Puede decretar pruebas de oficio o a solicitud de parte",
        "Evalúa los hechos y derechos vulnerados",
        "Decide si concede o niega el amparo",
        "La decisión debe ser motivada y fundamentada"
      ],
      duracion: "Máximo 10 días hábiles",
      color: "purple"
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      titulo: "4. Impugnación",
      descripcion: "La decisión puede ser impugnada por cualquiera de las partes.",
      detalles: [
        "Puede impugnar quien no esté conforme con la decisión",
        "Se presenta dentro de los 3 días siguientes",
        "El superior jerárquico resuelve en máximo 20 días",
        "La impugnación no suspende el cumplimiento de la decisión"
      ],
      duracion: "3 días para impugnar, 20 para resolver",
      color: "orange"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary" />,
      titulo: "5. Revisión en Corte Constitucional",
      descripcion: "La Corte Constitucional puede seleccionar el caso para revisión.",
      detalles: [
        "No es automático, la Corte selecciona casos",
        "Se revisan casos de importancia nacional o jurídica",
        "La Corte unifica jurisprudencia",
        "La decisión de la Corte es definitiva"
      ],
      duracion: "Variable (si es seleccionado)",
      color: "red"
    }
  ];

  const posiblesDecisiones = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      titulo: "Concede la tutela",
      descripcion: "El juez ordena al accionado proteger el derecho vulnerado mediante acciones específicas."
    },
    {
      icon: <XCircle className="w-6 h-6 text-red-600" />,
      titulo: "Niega la tutela",
      descripcion: "El juez considera que no hubo vulneración de derechos fundamentales."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-yellow-600" />,
      titulo: "Declara improcedente",
      descripcion: "El juez considera que existen otros mecanismos judiciales para resolver el caso."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />

      {/* Contenido */}
      <div className="container mx-auto px-4 py-12 pt-8 max-w-4xl">

        {/* Título */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Qué pasa después de presentar la tutela?
          </h1>
          <p className="text-xl text-gray-600">
            Conoce el paso a paso del proceso judicial y los tiempos estimados
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6 mb-12">
          {timelineSteps.map((step, index) => (
            <Card key={index} className="p-6 relative">
              {/* Línea conectora (excepto último) */}
              {index < timelineSteps.length - 1 && (
                <div className="absolute left-12 top-20 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Icono y duración */}
                <div className="flex-shrink-0 md:w-48">
                  <div className={`w-16 h-16 bg-${step.color}-100 rounded-full flex items-center justify-center mb-3`}>
                    {step.icon}
                  </div>
                  <div className="bg-primary/10 rounded-lg p-2 text-center">
                    <span className="text-sm font-medium text-primary">
                      {step.duracion}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold mb-2">{step.titulo}</h2>
                  <p className="text-gray-600 mb-4 text-lg">{step.descripcion}</p>

                  <ul className="space-y-2">
                    {step.detalles.map((detalle, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-gray-600">{detalle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Posibles Decisiones */}
        <h2 className="text-2xl font-semibold mb-4">Posibles decisiones del juez</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {posiblesDecisiones.map((decision, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {decision.icon}
              </div>
              <h3 className="font-semibold mb-2">{decision.titulo}</h3>
              <p className="text-sm text-gray-600">{decision.descripcion}</p>
            </Card>
          ))}
        </div>

        {/* Qué hacer después */}
        <Card className="p-8 bg-primary/5 border-primary/20 mb-12">
          <h2 className="text-2xl font-semibold mb-4">¿Qué hacer después de la decisión?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-700">Si la tutela es concedida:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Esperar el cumplimiento de la orden judicial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Informar al juez si no se cumple</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Puede solicitar medidas de cumplimiento</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-red-700">Si la tutela es negada:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Puede impugnar la decisión</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Acudir a otros mecanismos judiciales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Presentar nueva tutela si hay nuevos hechos</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Datos importantes */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-primary" />
              Tiempos clave
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Admisión: 1-3 días</li>
              <li>• Decisión: máximo 10 días</li>
              <li>• Impugnación: 3 días</li>
              <li>• Revisión Corte: sin plazo fijo</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-primary" />
              Recomendaciones
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Guardar copia de todo el proceso</li>
              <li>• Estar atento a las notificaciones</li>
              <li>• Cumplir con los plazos establecidos</li>
              <li>• Consultar el estado del proceso</li>
            </ul>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/tutela">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Comenzar mi tutela ahora
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            El proceso puede variar según el caso específico y la carga del juzgado
          </p>
        </div>
      </div>
    </div>
  );
}