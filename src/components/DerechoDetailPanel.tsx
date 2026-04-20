import { DerechoFundamental } from '../types/tutela';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Info, Shield, HelpCircle, Sparkles } from 'lucide-react';
import infoDefault from '../assets/images/INFOdefault.jpg';

interface DerechoDetailPanelProps {
  derecho: DerechoFundamental | null;
}

export function DerechoDetailPanel({ derecho }: DerechoDetailPanelProps) {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Premium Unified Card */}
      <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-b from-card to-muted/20">
        {/* Header Image with Overlay */}
        <div className="relative h-44 w-full overflow-hidden">
          <img 
            src={infoDefault} 
            alt="Información" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-primary/90 hover:bg-primary text-[10px] py-0 h-5 px-2 backdrop-blur-md border-white/10 uppercase tracking-widest font-bold">
                Paso 4: Derechos
              </Badge>
            </div>
            <h2 className="text-lg font-bold text-foreground leading-tight drop-shadow-sm">
              Derechos Fundamentales Vulnerados
            </h2>
          </div>
        </div>

        <CardContent className="p-6 space-y-6">
          {/* General Description */}
          <div className="flex gap-3 items-start p-4 rounded-xl bg-primary/5 border border-primary/10">
            <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              La acción de tutela está diseñada para proteger sus derechos esenciales como la vida, la salud o el debido proceso. Seleccione aquellos que considere afectados o amenazados.
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Dynamic Detail Section */}
          <div className="space-y-4">
            {!derecho ? (
              <div className="flex flex-col items-center justify-center py-6 px-4 text-center space-y-3 bg-muted/30 rounded-2xl border border-dashed border-border/60">
                <HelpCircle className="w-10 h-10 text-muted-foreground/30" />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-muted-foreground">Explora los derechos</p>
                  <p className="text-[11px] text-muted-foreground/70 leading-relaxed px-4">
                    Haz clic en cualquier derecho de la lista para descubrir su significado legal.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-5 animate-in zoom-in-95 duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-primary uppercase tracking-widest leading-none mb-0.5">Selección Actual</p>
                      <h3 className="text-xs font-bold text-foreground leading-tight">{derecho.nombre}</h3>
                    </div>
                  </div>
                  <Badge variant="outline" className="h-5 px-1.5 border-primary/30 text-[10px] font-mono bg-primary/5">
                    {derecho.articulo}
                  </Badge>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-card p-3 rounded-lg border border-border/50 shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Info className="w-3 h-3 text-primary" />
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Lo que dice la ley</span>
                    </div>
                    <p className="text-[11px] text-foreground leading-relaxed italic">
                      "{derecho.descripcion}"
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Tip */}
          <div className="pt-2">
            <p className="text-[11px] text-center text-muted-foreground leading-relaxed italic border-t border-border/40 pt-4 px-2">
              Si tiene dudas sobre el derecho exacto, el juez realizará el análisis jurídico necesario para identificar y proteger los derechos que correspondan.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
