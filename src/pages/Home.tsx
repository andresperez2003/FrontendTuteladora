import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Navbar } from '../components/Navbar';
import defaultImage from '../assets/images/default.webp';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-4 py-12 md:py-16 pt-6 md:pt-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
            Protege tus derechos fundamentales
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 px-2">
            Genera tu acción de tutela de manera sencilla, rápida y guiada.
            Un mecanismo constitucional para proteger tus derechos en Colombia.
          </p>
          <Link to="/tutela">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg">
              Comenzar mi tutela ahora
            </Button>
          </Link>
          <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4 px-2">
            Sin registro, sin complicaciones. Completamente gratuito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 max-w-4xl mx-auto">
          <Card className="p-5 md:p-6 text-center hover:shadow-lg transition-shadow bg-white items-center flex flex-col">
            <img src={defaultImage} alt="Paso a Paso" className="h-32 md:h-24 w-auto object-contain rounded-lg mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">Paso a Paso</h3>
            <p className="text-sm md:text-base text-gray-600">
              Formulario guiado en 8 simples pasos para recopilar toda la información necesaria
            </p>
          </Card>

          <Card className="p-5 md:p-6 text-center hover:shadow-lg transition-shadow bg-white items-center flex flex-col">
            <img src={defaultImage} alt="Derechos Fundamentales" className="h-32 md:h-24 w-auto object-contain rounded-lg mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">Derechos Fundamentales</h3>
            <p className="text-sm md:text-base text-gray-600">
              Selecciona los derechos vulnerados de una lista completa con artículos constitucionales
            </p>
          </Card>

          <Card className="p-5 md:p-6 text-center hover:shadow-lg transition-shadow bg-white items-center flex flex-col">
            <img src={defaultImage} alt="Documento Profesional" className="h-32 md:h-24 w-auto object-contain rounded-lg mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">Documento Profesional</h3>
            <p className="text-sm md:text-base text-gray-600">
              Genera un documento Word listo para presentar ante las autoridades
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-2xl p-6 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
            ¿Listo para proteger tus derechos?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            En menos de 15 minutos tendrás tu acción de tutela lista para presentar
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
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