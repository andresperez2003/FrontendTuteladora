import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import defaultImage from '../assets/images/default.webp';
import '../styles/pages/Home.css';

export function Home() {
  const [api, setApi] = useState<CarouselApi>();

  const handlePrev = useCallback(() => {
    if (!api) return;
    api.scrollPrev();
    api.plugins().autoplay?.reset();
  }, [api]);

  const handleNext = useCallback(() => {
    if (!api) return;
    api.scrollNext();
    api.plugins().autoplay?.reset();
  }, [api]);

  return (
    <div className="home-wrapper">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4">
          <h1 className="hero-title">
            Protege tus derechos fundamentales
          </h1>
          <p className="hero-description">
            Genera tu acción de tutela de manera sencilla, rápida y guiada.
            Un mecanismo constitucional para proteger tus derechos en Colombia.
          </p>
          <Link to="/tutela">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white hero-button shadow-xl">
              Comenzar mi tutela ahora
            </Button>
          </Link>
          <p className="hero-caption">
            Sin registro, sin complicaciones. Completamente gratuito.
          </p>
        </div>
      </section>

      {/* Spacing */}
      <div className="spacer-sm" />

      {/* Carousel Section */}
      <section className="carousel-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 10000,
                  stopOnInteraction: false,
                }),
              ]}
              className="carousel-container-custom"
            >
              <CarouselContent className="-ml-4 carousel-content-custom">
                <CarouselItem className="pl-4 basis-full carousel-item-custom" style={{ flexBasis: '100%' }}>
                  <div className="carousel-card-wrapper">
                    <Card variant="carousel" className="hover:shadow-lg transition-all bg-white carousel-card-custom border-gray-200">
                      <img src={defaultImage} alt="Paso a Paso" className="carousel-card-img" />
                      <div className="carousel-card-text">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">Paso a Paso</h3>
                        <p className="text-base md:text-lg text-gray-600 line-clamp-2">
                          Formulario guiado en 8 simples pasos para recopilar toda la información necesaria
                        </p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="pl-4 basis-full carousel-item-custom" style={{ flexBasis: '100%' }}>
                  <div className="carousel-card-wrapper">
                    <Card variant="carousel" className="hover:shadow-lg transition-all bg-white carousel-card-custom border-gray-200">
                      <img src={defaultImage} alt="Derechos Fundamentales" className="carousel-card-img" />
                      <div className="carousel-card-text">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">Derechos Fundamentales</h3>
                        <p className="text-base md:text-lg text-gray-600 line-clamp-2">
                          Selecciona los derechos vulnerados de una lista completa con artículos constitucionales
                        </p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="pl-4 basis-full carousel-item-custom" style={{ flexBasis: '100%' }}>
                  <div className="carousel-card-wrapper">
                    <Card variant="carousel" className="hover:shadow-lg transition-all bg-white carousel-card-custom border-gray-200">
                      <img src={defaultImage} alt="Documento Profesional" className="carousel-card-img" />
                      <div className="carousel-card-text">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">Documento Profesional</h3>
                        <p className="text-base md:text-lg text-gray-600 line-clamp-2">
                          Genera un documento Word listo para presentar ante las autoridades
                        </p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious
                className="carousel-nav-button left-4 md:left-6"
                onClick={handlePrev}
              />
              <CarouselNext
                className="carousel-nav-button right-4 md:right-6"
                onClick={handleNext}
              />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Large Spacing for distinct separation */}
      <div className="spacer-lg" />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container mx-auto px-4">
          <div className="cta-container-inner">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 md:mb-8">
              ¿Listo para proteger tus derechos?
            </h2>
            <p className="text-lg md:text-2xl text-gray-600 mb-10 md:mb-14 leading-relaxed max-w-2xl mx-auto">
              En menos de 15 minutos tendrás tu acción de tutela lista para presentar ante las autoridades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link to="/que-es">
                <Button variant="outline" size="lg" className="border-2 px-8 rounded-full">
                  Aprender más
                </Button>
              </Link>
              <Link to="/tutela">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-xl px-8 rounded-full">
                  Comenzar ahora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}