import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import logoImage from '../assets/images/Logo.png';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-2 px-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Logo" width={60} height={50} />
              <div>
                <h1 className="text-xl">Tuteladora del pueblo</h1>
                <p className="text-xs opacity-90">Generador de Acciones de Tutela</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/que-es" className="text-sm hover:underline">¿Qué es?</Link>
              <Link to="/participantes" className="text-sm hover:underline">Participantes</Link>
              <Link to="/proceso" className="text-sm hover:underline">Proceso</Link>
              <Link to="/tutela">
                <Button variant="secondary" size="sm">Comenzar</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - visible en móviles */}
      <div className="md:hidden bg-white border-b py-2 px-4">
        <div className="container mx-auto flex justify-center gap-4">
          <Link to="/que-es" className="text-sm text-gray-600">¿Qué es?</Link>
          <Link to="/participantes" className="text-sm text-gray-600">Participantes</Link>
          <Link to="/proceso" className="text-sm text-gray-600">Proceso</Link>
          <Link to="/tutela" className="text-sm font-semibold text-primary">Comenzar</Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Protege tus derechos fundamentales
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Genera tu acción de tutela de manera sencilla, rápida y guiada. 
            Un mecanismo constitucional para proteger tus derechos en Colombia.
          </p>
          <Link to="/tutela">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Comenzar mi tutela ahora
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            Sin registro, sin complicaciones. Completamente gratuito.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">Paso a Paso</h3>
            <p className="text-gray-600">
              Formulario guiado en 8 simples pasos para recopilar toda la información necesaria
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-semibold mb-2">Derechos Fundamentales</h3>
            <p className="text-gray-600">
              Selecciona los derechos vulnerados de una lista completa con artículos constitucionales
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-2">Documento Profesional</h3>
            <p className="text-gray-600">
              Genera un documento Word listo para presentar ante las autoridades
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para proteger tus derechos?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            En menos de 15 minutos tendrás tu acción de tutela lista para presentar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/que-es">
              <Button variant="outline" size="lg">
                Aprender más
              </Button>
            </Link>
            <Link to="/tutela">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Comenzar ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}