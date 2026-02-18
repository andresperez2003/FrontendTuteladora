import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { User, Building2, Scale, FileText, Users, Gavel } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import '../styles/pages/Participantes.css';

export function Participantes() {
  const participantes = [
    {
      icon: <User className="w-6 h-6" />,
      titulo: "Accionante (Tutelante)",
      definicion: "Es la persona —como tú, que estás utilizando nuestra plataforma— que interpone la acción de tutela porque considera que sus derechos fundamentales están siendo vulnerados o amenazados.",
      rol: [
        "Presenta la solicitud de tutela",
        "Expone los hechos que motivan la vulneración",
        "Identifica los derechos que considera vulnerados",
        "Aporta las pruebas de la vulneración",
        "Formula las peticiones al juez"
      ],
      puedeSer: "Cualquier persona natural o jurídica, sin importar su edad, nacionalidad o condición. Incluso puede presentarse a nombre de otro (agencia oficiosa).",
      colorClass: "blue"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      titulo: "Accionado",
      definicion: "Es la persona, entidad o autoridad contra quien se dirige la acción de tutela, por ser quien presuntamente está vulnerando los derechos fundamentales.",
      rol: [
        "Debe rendir informe sobre los hechos",
        "Explica por qué no ha vulnerado derechos",
        "Presenta las pruebas que respalden su posición",
        "Puede allanarse a las pretensiones (aceptar la vulneración)"
      ],
      puedeSer: "Autoridades públicas (alcaldías, ministerios), particulares que presten servicios públicos (EPS, colegios privados), o personas naturales en contextos específicos.",
      colorClass: "red"
    },
    {
      icon: <Scale className="w-6 h-6" />,
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
      colorClass: "green"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      titulo: "Ministerio Público",
      definicion: "Representado por el Procurador Judicial, el Personero Municipal o el Defensor del Pueblo. Vela por la protección de los derechos fundamentales y el orden jurídico.",
      rol: [
        "Interviene en el proceso para garantizar la legalidad",
        "Emite concepto sobre el caso",
        "Puede impugnar la decisión si lo considera necesario",
        "Vigila el cumplimiento de la sentencia"
      ],
      puedeSer: "Procuradores, personeros municipales, defensores del pueblo y sus delegados.",
      colorClass: "purple"
    }
  ];

  return (
    <div className="participantes-wrapper">
      {/* Header */}
      <Navbar />

      {/* Contenido */}
      <div className="container mx-auto px-4 participantes-container max-w-4xl">

        {/* Título */}
        <div className="participantes-header-section">
          <h1 className="participantes-main-title">
            ¿Quiénes participan en una acción de tutela?
          </h1>
          <p className="participantes-subtitle">
            Conoce los actores principales que intervienen en el proceso y el rol que cada uno desempeña
          </p>
        </div>

        {/* Participantes */}
        <div className="space-y-4">
          {participantes.map((p, index) => (
            <div key={index} className="participantes-card">
              <div className="participantes-card-layout">
                {/* Icono */}
                <div className="participantes-icon-container">
                  <div className={`participantes-icon-box icon-box-${p.colorClass}`}>
                    {p.icon}
                  </div>
                </div>

                {/* Contenido */}
                <div className="participantes-content">
                  <h2 className="participantes-card-title">{p.titulo}</h2>

                  <p className="participantes-desc">
                    {p.definicion}
                  </p>

                  {/* Rol específico */}
                  <div className="participantes-info-box role-box">
                    <h3 className="info-box-header">
                      <Gavel className="w-4 h-4" />
                      ¿Qué hace?
                    </h3>
                    <ul className="participantes-list">
                      {p.rol.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Quién puede ser */}
                  <div className="participantes-info-box users-box">
                    <h3 className="info-box-header">
                      <Users className="w-4 h-4" />
                      ¿Quién puede ser?
                    </h3>
                    <p className="info-box-text">{p.puedeSer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota adicional */}
        <div className="participantes-important-card">
          <div className="important-layout">
            <Scale className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="important-title">Importante</h3>
              <p className="important-text">
                La Corte Constitucional puede seleccionar tutelas para revisión. Esto significa que
                si tu caso es seleccionado, la Corte emitirá una sentencia que unifica jurisprudencia
                y puede sentar precedente para casos similares en todo el país.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="participantes-cta-container">
          <Link to="/tutela">
            <Button className="bg-primary hover:bg-primary/90 participantes-cta-button">
              Comenzar mi tutela ahora
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
