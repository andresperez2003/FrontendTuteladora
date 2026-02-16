import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowLeft, Scale, Shield, Heart, BookOpen } from 'lucide-react';
import logoImage from '../assets/images/Logo.png';

export function QueEsTutela() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-2 px-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImage} alt="Logo" width={60} height={50} />
              <div>
                <h1 className="text-xl">Tuteladora del pueblo</h1>
                <p className="text-xs opacity-90">Generador de Acciones de Tutela</p>
              </div>
            </Link>
            <Link to="/tutela">
              <Button variant="secondary" size="sm">Generar Tutela</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Contenido */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Botón volver */}
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          ¿Qué es una tutela y para qué sirve?
        </h1>

        <div className="space-y-8">
          {/* Sección principal */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Scale className="w-6 h-6 mr-2 text-primary" />
              Definición
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La acción de tutela es un mecanismo jurídico establecido en el <strong>Artículo 86 de la 
              Constitución Política de Colombia de 1991</strong>. Permite a cualquier persona solicitar 
              la protección inmediata de sus derechos fundamentales cuando estos son vulnerados 
              o amenazados por acción u omisión de cualquier autoridad pública o particular.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Es un instrumento ágil y preferente que busca garantizar la protección efectiva 
              de los derechos constitucionales fundamentales.
            </p>
          </Card>

          {/* Características */}
          <h2 className="text-2xl font-semibold mb-4">Características principales</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary" />
                Inmediata
              </h3>
              <p className="text-gray-600">
                El juez tiene un término máximo de <strong>10 días</strong> para resolver, garantizando una 
                respuesta rápida.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-primary" />
                Informal
              </h3>
              <p className="text-gray-600">
                No requiere abogado ni formalidades especiales para su presentación. Puede hacerse 
                incluso de manera verbal.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-primary" />
                Subsidiaria
              </h3>
              <p className="text-gray-600">
                Procede cuando no existe otro medio de defensa judicial, o se usa como 
                mecanismo transitorio para evitar un perjuicio irremediable.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Scale className="w-5 h-5 mr-2 text-primary" />
                Preferente
              </h3>
              <p className="text-gray-600">
                Los jueces deben dar prioridad a su trámite sobre otros asuntos.
              </p>
            </Card>
          </div>

          {/* Para qué sirve */}
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-semibold mb-4">¿Para qué sirve?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La tutela sirve para proteger derechos fundamentales como:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <ul className="list-disc pl-6 space-y-2">
                <li>Derecho a la vida</li>
                <li>Derecho a la salud</li>
                <li>Derecho a la educación</li>
                <li>Derecho al debido proceso</li>
              </ul>
              <ul className="list-disc pl-6 space-y-2">
                <li>Derecho de petición</li>
                <li>Derecho a la igualdad</li>
                <li>Derecho a la intimidad</li>
                <li>Libre desarrollo de la personalidad</li>
              </ul>
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
    </div>
  );
}