import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Scale, Shield, Heart, BookOpen } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import '../styles/pages/QueEsTutela.css';

export function QueEsTutela() {
  return (
    <div className="quetutela-wrapper">
      {/* Header */}
      <Navbar />

      {/* Contenido */}
      <div className="container mx-auto px-4 quetutela-container max-w-4xl">

        <h1 className="quetutela-title">
          ¿Qué es una tutela y para qué sirve?
        </h1>

        <div className="space-y-6">
          {/* Sección principal */}
          <div className="quetutela-card">
            <div className="quetutela-section-header">
              <Scale className="w-6 h-6 text-primary" />
              <h2 className="quetutela-section-title">Definición</h2>
            </div>
            <p className="quetutela-text quetutela-main-text mb-4">
              La acción de tutela es un mecanismo jurídico establecido en el <strong>Artículo 86 de la
                Constitución Política de Colombia de 1991</strong>. Permite a cualquier persona solicitar
              la protección inmediata de sus derechos fundamentales cuando estos son vulnerados
              o amenazados por acción u omisión de autoridades públicas o, en los casos previstos por la ley, de particulares.
            </p>
            <p className="quetutela-text quetutela-main-text">
              Es un instrumento ágil y preferente que busca garantizar la protección efectiva
              de los derechos constitucionales fundamentales.
            </p>
          </div>

          {/* Características */}
          <h2 className="quetutela-section-title quetutela-section-spacing mb-6">Características principales</h2>
          <div className="quetutela-grid">
            <div className="quetutela-feature-card">
              <div className="quetutela-feature-header">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="quetutela-feature-title">Inmediata</h3>
              </div>
              <p className="quetutela-feature-desc">
                El juez tiene un término máximo de <strong>diez (10) días calendario</strong> para resolver, garantizando una
                respuesta rápida.
              </p>
            </div>
            <div className="quetutela-feature-card">
              <div className="quetutela-feature-header">
                <Heart className="w-5 h-5 text-primary" />
                <h3 className="quetutela-feature-title">Informal</h3>
              </div>
              <p className="quetutela-feature-desc">
                No requiere abogado ni formalidades especiales para su presentación. Puede hacerse
                incluso de manera verbal.
              </p>
            </div>
            <div className="quetutela-feature-card">
              <div className="quetutela-feature-header">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="quetutela-feature-title">Subsidiaria</h3>
              </div>
              <p className="quetutela-feature-desc">
                Procede cuando no exista otro medio de defensa judicial idóneo y eficaz, o se usa como
                mecanismo transitorio para evitar un perjuicio irremediable.
              </p>
            </div>
            <div className="quetutela-feature-card">
              <div className="quetutela-feature-header">
                <Scale className="w-5 h-5 text-primary" />
                <h3 className="quetutela-feature-title">Preferente</h3>
              </div>
              <p className="quetutela-feature-desc">
                Los jueces deben dar prioridad a su trámite sobre otros asuntos.
              </p>
            </div>
          </div>

          {/* Para qué sirve */}
          <div className="quetutela-highlight-section">
            <h2 className="quetutela-highlight-title">¿Para qué sirve?</h2>
            <p className="quetutela-text mb-6">
              La tutela sirve para proteger derechos fundamentales como:
            </p>
            <div className="quetutela-lists-container">
              <ul className="quetutela-list">
                <li>Derecho a la vida</li>
                <li>Derecho a la salud</li>
                <li>Derecho a la educación</li>
                <li>Derecho al debido proceso</li>
              </ul>
              <ul className="quetutela-list">
                <li>Derecho de petición</li>
                <li>Derecho a la igualdad</li>
                <li>Derecho a la intimidad</li>
                <li>Libre desarrollo de la personalidad</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="quetutela-cta-container">
            <Link to="/tutela">
              <Button className="bg-primary hover:bg-primary/90 quetutela-cta-button shadow-xl">
                Comenzar mi tutela ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
