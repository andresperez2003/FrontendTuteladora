import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { User, Building2, Scale, FileText, Users, Gavel } from 'lucide-react';
import { Navbar } from '../components/Navbar';

export function Participantes() {
  const participantes = [
    {
      icon: <User className="w-8 h-8 text-primary" />,
      titulo: "Accionante (Tutelante)",
      definicion: "Es la persona que interpone la acción de tutela porque considera que sus derechos fundamentales están siendo vulnerados o amenazados.",
      rol: [
        "Presenta la solicitud de tutela",
        "Expone los hechos que motivan la vulneración",
        "Identifica los derechos que considera vulnerados",
        "Aporta las pruebas de la vulneración",
        "Formula las peticiones al juez"
      ],
      puedeSer: "Cualquier persona natural o jurídica, sin importar su edad, nacionalidad o condición. Incluso puede presentarse a nombre de otro (agencia oficiosa).",
      color: "blue"
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      titulo: "Accionado",
      definicion: "Es la persona, entidad o autoridad contra quien se dirige la acción de tutela, por ser quien presuntamente está vulnerando los derechos fundamentales.",
      rol: [
        "Debe rendir informe sobre los hechos",
        "Explica por qué no ha vulnerado derechos",
        "Presenta las pruebas que respalden su posición",
        "Puede allanarse a las pretensiones (aceptar la vulneración)"
      ],
      puedeSer: "Autoridades públicas (alcaldías, ministerios), particulares que presten servicios públicos (EPS, colegios privados), o personas naturales en contextos específicos.",
      color: "red"
    },
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      titulo: "Juez de Tutela",
      definicion: "Es la autoridad judicial encargada de tramitar y decidir la acción de tutela. Puede ser cualquier juez de la República, sin importar su especialidad.",
      rol: [
        "Admite la solicitud de tutela",
        "Notifica al accionado para que rinda informe",
        "Practica pruebas si lo considera necesario",
        "Decide si concede o niega el amparo",
        "Ordena las acciones para proteger los derechos"
      ],
      puedeSer: "Cualquier juez municipal, del circuito, tribunal o incluso la Corte Constitucional en revisión.",
      color: "green"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      titulo: "Ministerio Público",
      definicion: "Representado por el Procurador Judicial, el Personero Municipal o el Defensor del Pueblo. Vela por la protección de los derechos fundamentales y el orden jurídico.",
      rol: [
        "Interviene en el proceso para garantizar la legalidad",
        "Emite concepto sobre el caso",
        "Puede impugnar la decisión si lo considera necesario",
        "Vigila el cumplimiento de la sentencia"
      ],
      puedeSer: "Procuradores, personeros municipales, defensores del pueblo y sus delegados.",
      color: "purple"
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
            ¿Quiénes participan en una acción de tutela?
          </h1>
          <p className="text-xl text-gray-600">
            Conoce los actores principales que intervienen en el proceso y el rol que cada uno desempeña
          </p>
        </div>

        {/* Participantes */}
        <div className="space-y-8">
          {participantes.map((p, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icono */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-${p.color}-100 rounded-full flex items-center justify-center`}>
                    {p.icon}
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold mb-3">{p.titulo}</h2>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {p.definicion}
                  </p>

                  {/* Rol específico */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Gavel className="w-4 h-4 mr-2 text-primary" />
                      ¿Qué hace?
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      {p.rol.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Quién puede ser */}
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      ¿Quién puede ser?
                    </h3>
                    <p className="text-gray-600">{p.puedeSer}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Nota adicional */}
        <Card className="mt-8 p-6 bg-primary/10 border-primary/30">
          <div className="flex items-start gap-4">
            <Scale className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Importante</h3>
              <p className="text-gray-700">
                La Corte Constitucional puede seleccionar tutelas para revisión. Esto significa que
                si tu caso es seleccionado, la Corte emitirá una sentencia que unifica jurisprudencia
                y puede sentar precedente para casos similares en todo el país.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/tutela">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Comenzar mi tutela ahora
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}