import { useState, useEffect } from 'react';
import { DerechoFundamental } from '../types/tutela';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { ScrollArea } from './ui/scroll-area';
import { X, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { todosLosDerechos, derechosFundamentales } from '../data/derechos';
import { Input } from './ui/input';

interface DerechosFormProps {
  data: DerechoFundamental[];
  onUpdate: (data: DerechoFundamental[]) => void;
  onNext: () => void;
  onPrevious: () => void;
  onDerechoClick: (derecho: DerechoFundamental) => void;
}

export function DerechosForm({ data, onUpdate, onNext, onPrevious, onDerechoClick }: DerechosFormProps) {
  const [selectedDerechos, setSelectedDerechos] = useState<DerechoFundamental[]>(data);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Desktop only
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [blink, setBlink] = useState(false);
  const scrollTimeout = React.useRef<number | NodeJS.Timeout | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isScrolling && isMobile) {
      interval = setInterval(() => {
        setBlink(prev => !prev);
      }, 700);
    } else {
      setBlink(true); // Fijo cuando srollea
    }
    return () => clearInterval(interval);
  }, [isScrolling, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDerechoToggle = (derecho: DerechoFundamental, checked: boolean) => {
    let newSelected;
    if (checked) {
      newSelected = [...selectedDerechos, derecho];
    } else {
      newSelected = selectedDerechos.filter(d => d.nombre !== derecho.nombre);
    }
    setSelectedDerechos(newSelected);
    onUpdate(newSelected);
  };

  const isDerechoSelected = (derecho: DerechoFundamental) => {
    return selectedDerechos.some(d => d.nombre === derecho.nombre);
  };

  const filteredDerechos = derechosFundamentales.filter(derecho =>
    derecho.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    derecho.articulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDerechos.length / itemsPerPage);
  // On mobile show all; on desktop paginate
  const displayedDerechos = isMobile
    ? filteredDerechos
    : filteredDerechos.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const isFormValid = () => {
    return selectedDerechos.length > 0;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Derechos Fundamentales Vulnerados</CardTitle>
        <CardDescription>
          Seleccione los derechos fundamentales que considera han sido vulnerados
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Buscador y Lista de derechos en Grid */}
        <div data-tour="derechos-list" className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nombre o artículo (ej: salud, Art. 11)..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 bg-background/50 border-primary/20 focus-visible:ring-primary"
            />
          </div>

          {/* Mobile: scroll propio sin paginación */}
          {isMobile ? (
            <>              <style>{`
                /* Native Firefox */
                .force-native-scroll {
                  scrollbar-width: thin;
                  scrollbar-color: ${blink ? 'rgba(59,130,246,0.8)' : 'rgba(59,130,246,0.2)'} transparent;
                  transition: scrollbar-color 0.7s;
                }

                /* Native Webkit (Chrome, Safari, Edge) */
                .force-native-scroll::-webkit-scrollbar {
                  width: 8px;
                }
                .force-native-scroll::-webkit-scrollbar-track {
                  background: transparent;
                }
                
                /* Toggled classes driven by React state to bypass CSS animation limits */
                .thumb-bright::-webkit-scrollbar-thumb {
                  border-radius: 10px;
                  background-color: rgba(59, 130, 246, 0.9);
                  border: 2px solid transparent;
                  background-clip: padding-box;
                }
                
                .thumb-dim::-webkit-scrollbar-thumb {
                  border-radius: 10px;
                  background-color: rgba(59, 130, 246, 0.2);
                  border: 2px solid transparent;
                  background-clip: padding-box;
                }
              `}</style>
              <div 
                style={{ height: '350px', maxHeight: '350px', overflowY: 'auto' }} 
                className={`force-native-scroll border border-border rounded-xl p-2 bg-card scroll-smooth transition-all duration-300 transform-gpu ${blink ? 'thumb-bright' : 'thumb-dim'} ${!isScrolling ? 'border-primary/50 shadow-[0_0_8px_rgba(59,130,246,0.2)]' : 'border-border'}`}
                onScroll={() => {
                  setIsScrolling(true);
                  if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
                  scrollTimeout.current = setTimeout(() => setIsScrolling(false), 800);
                }}
              >
                <div className="grid grid-cols-1 gap-3 pr-2">
                  {displayedDerechos.length > 0 ? (
                    displayedDerechos.map((derecho) => {
                      const selected = isDerechoSelected(derecho);
                      return (
                        <div
                          key={derecho.nombre}
                          onClick={() => {
                            handleDerechoToggle(derecho, !selected);
                            onDerechoClick(derecho);
                          }}
                          className={`
                            flex items-start space-x-2 p-3 border rounded-xl cursor-pointer transition-all duration-200
                            ${selected
                              ? 'border-primary bg-primary/5 shadow-sm ring-1 ring-primary/20'
                              : 'border-border bg-card hover:border-primary/50 hover:bg-muted/50'}
                          `}
                        >
                          <Checkbox
                            checked={selected}
                            onCheckedChange={() => { }}
                            className="mt-1 pointer-events-none"
                          />
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <Badge variant={selected ? "default" : "outline"} className="text-[10px] h-5">
                                {derecho.articulo}
                              </Badge>
                              <span className={`text-sm font-semibold ${selected ? 'text-primary' : 'text-foreground'}`}>
                                {derecho.nombre}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              {derecho.descripcion}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="py-12 text-center space-y-2 bg-muted/20 rounded-2xl border border-dashed">
                      <p className="font-medium text-muted-foreground">No encontramos nada con "{searchQuery}"</p>
                      <Button variant="link" onClick={() => handleSearchChange('')} className="text-primary">
                        Ver todos los derechos
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Desktop: grid con paginación */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pr-1">
                {displayedDerechos.length > 0 ? (
                  displayedDerechos.map((derecho) => {
                    const selected = isDerechoSelected(derecho);
                    return (
                      <div
                        key={derecho.nombre}
                        onClick={() => {
                          handleDerechoToggle(derecho, !selected);
                          onDerechoClick(derecho);
                        }}
                        className={`
                          flex items-start space-x-2 p-3 border rounded-xl cursor-pointer transition-all duration-200
                          ${selected
                            ? 'border-primary bg-primary/5 shadow-sm ring-1 ring-primary/20'
                            : 'border-border bg-card hover:border-primary/50 hover:bg-muted/50'}
                        `}
                      >
                        <Checkbox
                          checked={selected}
                          onCheckedChange={() => { }}
                          className="mt-1 pointer-events-none"
                        />
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <Badge variant={selected ? "default" : "outline"} className="text-[10px] h-5">
                              {derecho.articulo}
                            </Badge>
                            <span className={`text-sm font-semibold ${selected ? 'text-primary' : 'text-foreground'}`}>
                              {derecho.nombre}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                            {derecho.descripcion}
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-span-full py-12 text-center space-y-2 bg-muted/20 rounded-2xl border border-dashed">
                    <p className="font-medium text-muted-foreground">No encontramos nada con "{searchQuery}"</p>
                    <Button variant="link" onClick={() => handleSearchChange('')} className="text-primary">
                      Ver todos los derechos
                    </Button>
                  </div>
                )}
              </div>

              {/* Pagination Controls - Desktop only */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1 sm:gap-2 pt-4 px-2 overflow-hidden">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="h-8 w-8 shrink-0"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="flex items-center gap-1 max-w-full overflow-hidden">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(page => {
                        if (totalPages <= 5) return true;
                        return page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1;
                      })
                      .map((page, index, array) => (
                        <React.Fragment key={page}>
                          {index > 0 && page - array[index - 1] > 1 && (
                            <span className="text-muted-foreground px-1 text-xs">...</span>
                          )}
                          <Button
                            variant={currentPage === page ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className={`h-8 w-8 p-0 text-xs shrink-0 ${currentPage === page ? 'shadow-sm' : ''}`}
                          >
                            {page}
                          </Button>
                        </React.Fragment>
                      ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="h-8 w-8 shrink-0"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>

        <div className="flex justify-between pt-4">
          <Button onClick={onPrevious}>
            Anterior
          </Button>
          <Button
            onClick={onNext}
            disabled={!isFormValid()}
          >
            Siguiente
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}