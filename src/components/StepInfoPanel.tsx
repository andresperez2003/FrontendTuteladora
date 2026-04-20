import {
  User,
  Building2,
  FileText,
  Shield,
  Paperclip,
  Phone,
  Gavel,
  CheckCircle2,
  LucideIcon,
  Sparkles,
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import defaultImage from '../assets/images/INFOdefault.jpg';

export interface StepInfo {
  icon: LucideIcon;
  title: string;
  description: string;
  tip: string;
}

export const stepData: StepInfo[] = [
  {
    icon: User,
    title: 'Información de Identificación',
    description:
      'Para que el juez pueda iniciar el análisis de su caso, es necesario que proporcione sus datos básicos de contacto. Nombre y cédula son la base de su identificación legal.',
    tip: 'Toda la información suministrada permitirá al despacho judicial emitir una respuesta oficial y contactarlo durante el trámite de la tutela.',
  },
  {
    icon: Building2,
    title: 'Autoridad o Particular Accionado',
    description:
      'En este punto se debe identificar con precisión a la entidad o persona que ha vulnerado sus derechos; puede tratarse de una EPS, una oficina gubernamental o una empresa privada.',
    tip: 'Identificar correctamente a la contraparte garantiza que el juez le solicite las explicaciones debidas de manera oportuna.',
  },
  {
    icon: FileText,
    title: 'Relato de los Hechos',
    description:
      'Proporcione una descripción cronológica y clara de los sucesos que motivan esta acción. Despachar los eventos con fechas y de manera ordenada facilita la labor del juez.',
    tip: 'Procure ser objetivo y preciso; un relato bien estructurado constituye la base fundamental para el análisis de cualquier caso judicial.',
  },
  {
    icon: Shield,
    title: 'Derechos Fundamentales Vulnerados',
    description:
      'La acción de tutela está diseñada para proteger sus derechos esenciales como la vida, la salud o el debido proceso. Seleccione aquellos que considere afectados.',
    tip: 'Si tiene dudas sobre el derecho exacto, el juez realizará el análisis jurídico necesario para identificar y proteger los derechos que correspondan.',
  },
  {
    icon: Paperclip,
    title: 'Pruebas y Documentos de Soporte',
    description:
      'Incluya los soportes documentales que respalden su petición: cartas, respuestas oficiales, historias clínicas o registros que evidencien la situación narrada.',
    tip: 'Aunque no siempre son obligatorios, estos documentos fortalecen considerablemente su solicitud de amparo ante la autoridad judicial.',
  },
  {
    icon: Phone,
    title: 'Información para Notificaciones',
    description:
      'Indique sus canales de comunicación vigentes para que el juzgado pueda informarle sobre los avances y decisiones finales de su proceso de tutela.',
    tip: 'Verifique cuidadosamente que no existan errores en sus datos de contacto para asegurar que las notificaciones del despacho lleguen a tiempo.',
  },
  {
    icon: Gavel,
    title: 'Pretensiones de la Tutela',
    description:
      'Establezca claramente la orden que solicita al juez para restablecer sus derechos. Por ejemplo: "Que se me entregue el medicamento" o "Que se realice el procedimiento".',
    tip: 'Sea puntual en lo que solicita; definir la orden esperada es clave para que la solución sea efectiva y rápida.',
  },
  {
    icon: CheckCircle2,
    title: 'Verificación Final de la Acción',
    description:
      'Revise detenidamente toda la información consignada antes de generar el documento definitivo. Asegúrese de que el relato sea fiel a la realidad de los hechos.',
    tip: 'Al finalizar la revisión, podrá descargar el documento PDF listo para ser radicado ante las autoridades judiciales competentes.',
  },
];

interface StepInfoPanelProps {
  currentStep: number;
}

export function StepInfoPanel({ currentStep }: StepInfoPanelProps) {
  const info = stepData[currentStep] ?? stepData[0];
  const Icon = info.icon;

  return (
    <div className="flex flex-col gap-6 w-full">
      <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-b from-card to-muted/20">
        <div className="relative h-44 w-full overflow-hidden">
          <img
            src={defaultImage}
            alt="Información del paso"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-primary/90 hover:bg-primary text-[10px] py-0 h-5 px-2 backdrop-blur-md border-white/10 uppercase tracking-widest font-bold">
                Paso {currentStep + 1} de 8
              </Badge>
            </div>
            <h2 className="text-lg font-bold text-foreground leading-tight drop-shadow-sm">
              {info.title}
            </h2>
          </div>
        </div>

        <CardContent className="p-6 space-y-6">
          <div className="flex gap-3 items-start p-4 rounded-xl bg-primary/5 border border-primary/10">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {info.description}
            </p>
          </div>

          <div className="pt-2">
            <p className="text-[11px] text-center text-muted-foreground leading-relaxed italic border-t border-border/40 pt-4 px-2">
              {info.tip}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
