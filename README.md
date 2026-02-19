# Tuteladora

**Tuteladora** es una aplicación web diseñada para facilitar la generación de acciones de tutela en Colombia. La aplicación ofrece contenido informativo sobre el proceso de tutela y guía a los usuarios a través de un formulario paso a paso para completar todos los datos necesarios y generar un documento Word con la acción de tutela listo para presentar.

> **Backend:** Este proyecto utiliza un backend API para la generación de documentos. El código del backend está disponible en [GeneradorTuteladora](https://github.com/andresperez2003/GeneradorTuteladora).

---

## 📋 Tabla de Contenidos

1. [Manual de Usuario](#manual-de-usuario)
   - [Introducción](#introducción)
   - [Estructura del Sitio](#estructura-del-sitio)
   - [Requisitos del Sistema](#requisitos-del-sistema)
   - [Acceso a la Aplicación](#acceso-a-la-aplicación)
   - [Guía Paso a Paso del Formulario](#guía-paso-a-paso-del-formulario)
   - [Funcionalidades Principales](#funcionalidades-principales)
   - [Solución de Problemas](#solución-de-problemas)
2. [Manual de Desarrollador](#manual-de-desarrollador)
   - [Requisitos Técnicos](#requisitos-técnicos)
   - [Instalación](#instalación)
   - [Estructura del Proyecto](#estructura-del-proyecto)
   - [Rutas y Navegación](#rutas-y-navegación)
   - [Configuración](#configuración)
   - [Guía de Desarrollo](#guía-de-desarrollo)
   - [Arquitectura](#arquitectura)
   - [Guía de Estilos](#guía-de-estilos)
   - [Despliegue](#despliegue)

---

# 📖 Manual de Usuario

## Introducción

Tuteladora es una herramienta integral diseñada para ayudar a los ciudadanos colombianos a comprender y generar acciones de tutela de manera sencilla y estructurada. La aplicación combina contenido educativo con un generador práctico que le guiará a través de 8 pasos para recopilar toda la información necesaria y producir un documento Word profesional.

### ¿Qué es una Acción de Tutela?

La acción de tutela es un mecanismo constitucional en Colombia que permite a cualquier persona solicitar la protección inmediata de sus derechos fundamentales cuando estos sean vulnerados o amenazados por la acción u omisión de cualquier autoridad pública o particular.

## Estructura del Sitio

La aplicación está organizada en las siguientes secciones:

### 🏠 Página de Inicio (`/`)
Página principal con diseño optimizado y responsivo:
- Hero section con llamado a la acción claro.
- Sección de características con ilustraciones y descripciones.
- Acceso directo a secciones informativas y al generador.
- Diseño equilibrado y centrado para mejor legibilidad.

### 📚 ¿Qué es una Tutela? (`/que-es`)
Sección educativa que explica:
- Definición y fundamento constitucional de la acción de tutela (Artículo 86)
- Características principales: inmediata, informal, subsidiaria y preferente
- Derechos fundamentales que pueden protegerse
- Propósito y alcance del mecanismo

### 👥 Participantes (`/participantes`)
Detalla los actores que intervienen en el proceso:
- **Accionante (Tutelante):** Quien interpone la tutela
- **Accionado:** Entidad o persona contra quien se dirige
- **Juez de Tutela:** Autoridad que tramita y decide
- **Ministerio Público:** Ente que vela por la legalidad
- Rol específico y funciones de cada participante

### ⚖️ Proceso de Tutela (`/proceso`)
Explica el paso a paso después de presentar la tutela:
- Timeline completo del proceso judicial
- Tiempos estimados para cada etapa
- Posibles decisiones del juez
- Recomendaciones y pasos a seguir

### 📝 Generar Tutela (`/tutela`)
Formulario principal de 8 pasos para crear su acción de tutela:
1. Datos Personales
2. Accionado
3. Hechos
4. Derechos
5. Anexos
6. Comunicación
7. Peticiones
8. Previsualización

## Requisitos del Sistema

- **Navegador web moderno:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Conexión a Internet:** Requerida para acceder a la aplicación y generar documentos
- **JavaScript habilitado:** Necesario para el funcionamiento de la aplicación

## Acceso a la Aplicación

1. Abra su navegador web preferido
2. Navegue a la URL de la aplicación (proporcionada por su administrador)
3. Explore las secciones informativas o haga clic en "Comenzar" para ir al formulario

## Guía Paso a Paso del Formulario

### Paso 1: Datos Personales

En este paso, debe proporcionar su información personal:

- **Nombre:** Su nombre de pila
- **Apellido:** Su apellido
- **Cédula:** Su número de cédula de ciudadanía
- **Lugar de Expedición:** Ciudad donde se expidió su cédula
- **Lugar de Residencia:** Ciudad donde reside actualmente

**Consejo:** Asegúrese de que todos los datos sean correctos, ya que aparecerán en el documento final.

### Paso 2: Accionado

Indique quién es la persona o entidad contra la cual presenta la acción de tutela:

- **Nombre del Accionado:** Nombre completo de la persona o entidad

**Ejemplos:**
- "EPS Sanitas S.A."
- "Alcaldía Municipal de Bogotá"
- "Juan Pérez"

### Paso 3: Hechos

Describa los hechos que dieron lugar a la vulneración de sus derechos. Puede agregar múltiples hechos:

1. Haga clic en "Agregar Hecho"
2. Escriba la descripción del hecho en el campo de texto
3. Puede reordenar los hechos arrastrándolos
4. Puede eliminar hechos haciendo clic en el botón de eliminar

**Consejos:**
- Sea claro y específico
- Ordene los hechos cronológicamente
- Incluya fechas cuando sea relevante

### Paso 4: Derechos

Seleccione los derechos fundamentales que considera vulnerados:

1. Busque en la lista o desplácese para encontrar el derecho
2. Haga clic en el derecho para seleccionarlo
3. Puede seleccionar múltiples derechos
4. Cada derecho muestra su artículo constitucional y descripción

**Derechos disponibles incluyen:**
- Derecho a la vida
- Derecho a la salud
- Derecho a la educación
- Derecho al debido proceso
- Y muchos más...

### Paso 5: Anexos

Liste los documentos que acompañará a su acción de tutela:

1. Haga clic en "Agregar Anexo"
2. Escriba el nombre del documento
3. Puede agregar múltiples anexos

**Ejemplos de anexos:**
- Copia de la cédula
- Documentos médicos
- Correspondencia con la entidad
- Fotografías

### Paso 6: Comunicación

Proporcione sus datos de contacto:

- **Dirección:** Dirección completa donde puede recibir notificaciones
- **Teléfono:** Número de teléfono de contacto
- **Correo Electrónico:** Dirección de correo electrónico

**Importante:** Estos datos se utilizarán para notificaciones sobre su caso.

### Paso 7: Peticiones

Especifique qué solicita al juez:

1. **Proteger Derechos Fundamentales:** Marque esta casilla si desea que se protejan los derechos vulnerados
2. **Acción Específica:** Describa cualquier acción específica que solicite al accionado

**Ejemplos de acciones específicas:**
- "Autorizar el procedimiento médico requerido"
- "Entregar el medicamento prescrito"
- "Restablecer el servicio de salud"

### Paso 8: Previsualización

Revise toda la información antes de generar el documento:

1. Revise cada sección cuidadosamente
2. Use los botones "Editar" para modificar cualquier sección
3. Verifique que todos los datos sean correctos
4. Haga clic en "Generar Tutela" para descargar el documento Word

**Nota:** El documento se descargará automáticamente en formato .docx

### Validaciones de Formulario Estrictas

- Validaciones de tipo de datos (solo letras en nombres, solo números en cédula/teléfono).
- Límites de longitud específicos para cada campo para asegurar la calidad de la información.
- Retroalimentación visual inmediata con mensajes de error descriptivos.

### Persistencia de Datos (Auto-guardado)

- Los datos se guardan automáticamente en el almacenamiento local del navegador (`localStorage`).
- **Límite de Tiempo**: Los datos expiran automáticamente después de **1 hora** de inactividad para garantizar la privacidad y frescura de la información.
- **Limpieza Automática**: Al generar con éxito la tutela, el caché se borra automáticamente para permitir un nuevo inicio limpio.
- Restaura tanto la información ingresada como el paso actual en el que se encontraba el usuario.

### Navegación Optimizada

- Desplazamiento automático al inicio de la página (`Scroll to Top`) al navegar entre rutas.
- Mejora la experiencia de usuario en aplicaciones de una sola página (SPA).

### Sistema de Ayuda (Tour Guiado)

La aplicación incluye un sistema de ayuda interactivo en el formulario:

1. Haga clic en el botón "Ayuda" en la parte superior derecha del formulario
2. Se iniciará un tour guiado que explica cada sección
3. Siga las instrucciones en pantalla
4. Puede cerrar el tour en cualquier momento

### Navegación entre Pasos

- **Botón "Siguiente":** Avanza al siguiente paso (se habilita solo si los datos son válidos)
- **Botón "Anterior":** Regresa al paso anterior
- **Stepper (Indicador de Pasos):** Muestra su progreso y le permite hacer clic en cualquier paso para navegar directamente

### Previsualización

En el paso final, puede:
- Ver toda la información recopilada
- Editar cualquier sección haciendo clic en el botón "Editar"
- Generar y descargar el documento Word

## Solución de Problemas

### El documento no se descarga

- Verifique su conexión a Internet
- Asegúrese de que su navegador permita descargas
- Revise la configuración de bloqueadores de anuncios

### Los datos no se muestran correctamente

- Los datos se guardan automáticamente mientras navega o escribe.
- Si recarga la página, los datos deberían restaurarse automáticamente gracias al sistema de persistencia local.
- Si tiene problemas persistentes, intente limpiar el caché del navegador.

### Error al generar el documento

- Verifique que todos los campos obligatorios estén completos
- Asegúrese de tener conexión a Internet
- Intente nuevamente después de unos momentos

### Preguntas Frecuentes

**¿Puedo guardar mi progreso?**
Sí, la aplicación guarda automáticamente su progreso en el almacenamiento local de su navegador. Si cierra la pestaña o recarga la página, podrá continuar donde quedó.

**¿Puedo editar después de generar el documento?**
Sí, puede regresar a cualquier paso usando el stepper o los botones de edición en la previsualización.

**¿El documento es legalmente válido?**
El documento generado es una plantilla. Debe revisarlo y ajustarlo según sus necesidades específicas antes de presentarlo.

**¿Dónde puedo aprender más sobre la tutela?**
Visite nuestras secciones informativas en `/que-es`, `/participantes` y `/proceso` para comprender mejor el proceso.

---

# 👨‍💻 Manual de Desarrollador

## Requisitos Técnicos

### Software Requerido

- **Node.js:** Versión 18.0.0 o superior
- **npm:** Versión 9.0.0 o superior (incluido con Node.js)
- **Git:** Para clonar el repositorio (opcional)

### Herramientas Recomendadas

- **Editor de Código:** VS Code, WebStorm, o cualquier editor moderno
- **Navegador:** Chrome DevTools o Firefox Developer Tools para debugging
- **Git:** Para control de versiones

## Instalación

### 1. Clonar el Repositorio

```bash
git clone <repository-url>
cd TuteladoraActionForm
```

### 2. Instalar Dependencias

```bash
npm install
```

Este comando instalará todas las dependencias necesarias listadas en `package.json`.

### 3. Configurar Variables de Entorno

Cree un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=https://generador-tuteladora.vercel.app
```

Para desarrollo local, puede usar:

```env
VITE_API_URL=http://localhost:3000
```

### 4. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3001`

### 5. Construir para Producción

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `build/`

## Estructura del Proyecto

```
TuteladoraActionForm/
├── build/                  # Archivos de producción (generados)
├── node_modules/          # Dependencias (generadas)
├── public/                # Archivos estáticos públicos
├── src/
│   ├── assets/           # Recursos estáticos
│   │   └── images/       # Imágenes (logo, default placeholders, etc.)
│   ├── components/       # Componentes React
│   │   ├── ui/          # Componentes UI reutilizables (shadcn/ui)
│   │   ├── Navbar.tsx   # Barra de navegación reutilizable y responsiva
│   │   ├── accionado-form.tsx
│   │   ├── anexos-form.tsx
│   │   └── ...
│   ├── pages/            # Páginas de la aplicación
│   │   ├── Home.tsx      # Landing page optimizada
│   │   ├── QueEsTutela.tsx
│   │   ├── Participantes.tsx
│   │   └── ProcesoTutela.tsx
│   ├── App.tsx          # Router y configuración principal
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos principales y variables CSS
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json        # Configuración TypeScript
├── tsconfig.node.json
├── vercel.json         # Configuración Vercel
└── vite.config.ts      # Configuración Vite
```

## Configuración

### Backend API

Este proyecto requiere un backend API para generar los documentos Word. El backend está disponible en el repositorio:

- **Repositorio del Backend:** [GeneradorTuteladora](https://github.com/andresperez2003/GeneradorTuteladora)
- **URL de Producción:** `https://generador-tuteladora.vercel.app`
- **Funcionalidades del Backend:**
  - Generación de documentos Word (.docx)
  - Generación de documentos PDF
  - API REST para integración
  - Validación de datos de entrada

### Variables de Entorno

| Variable | Descripción | Valor por Defecto |
|----------|-------------|-------------------|
| `VITE_API_URL` | URL del backend API | `https://generador-tuteladora.vercel.app` |

### Vite Configuration

El archivo `vite.config.ts` contiene la configuración del bundler:

- **Puerto de desarrollo:** 3001
- **Proxy API:** `/api` → `http://localhost:3000`
- **Directorio de salida:** `build/`

### TypeScript Configuration

El proyecto usa TypeScript con configuración estricta. Los archivos de configuración son:

- `tsconfig.json`: Configuración para el código fuente
- `tsconfig.node.json`: Configuración para herramientas Node.js

## Guía de Desarrollo

### Agregar un Nuevo Paso al Formulario

1. **Crear el componente del formulario:**

```typescript
// src/components/nuevo-paso-form.tsx
import { useState } from 'react';

interface NuevoPasoData {
  campo1: string;
  campo2: string;
}

interface NuevoPasoFormProps {
  data: NuevoPasoData;
  onUpdate: (data: NuevoPasoData) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function NuevoPasoForm({ data, onUpdate, onNext, onPrevious }: NuevoPasoFormProps) {
  // Implementación del formulario
}
```

2. **Agregar el tipo en `src/types/tutela.ts`:**

```typescript
export interface NuevoPasoData {
  campo1: string;
  campo2: string;
}

export interface TutelaData {
  // ... otros campos
  nuevoPaso: NuevoPasoData;
}
```

3. **Actualizar `App.tsx`:**

```typescript
// Agregar al array de steps
const steps = [
  // ... pasos existentes
  'Nuevo Paso',
  'Previsualización'
];

// Agregar el caso en renderCurrentStep
case X: // índice del nuevo paso
  return (
    <NuevoPasoForm
      data={tutelaData.nuevoPaso}
      onUpdate={updateNuevoPaso}
      onNext={nextStep}
      onPrevious={previousStep}
    />
  );
```

### Agregar un Nuevo Derecho Fundamental

Edite `src/data/derechos.ts`:

```typescript
export const derechosFundamentales: DerechoFundamental[] = [
  // ... derechos existentes
  {
    nombre: "Nuevo Derecho",
    articulo: "Art. XX",
    descripcion: "Descripción del derecho",
    tipo: "fundamental" // o "conexidad"
  }
];
```

### Modificar el Servicio de API

El servicio de API está en `src/services/api.ts`. Para agregar nuevos endpoints:

```typescript
static async nuevoMetodo(parametros: Tipo): Promise<ApiResponse> {
  try {
    const response = await fetch(`${this.baseURL}/endpoint`, {
      method: 'POST', // o GET, PUT, DELETE
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parametros),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      message: 'Operación exitosa',
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Error en la operación',
      error: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
}
```

## Arquitectura

### Flujo de Datos

```
App.tsx (Estado Principal)
    ↓
Componentes de Formulario (Props)
    ↓
Actualización de Estado (Callbacks)
    ↓
TutelaData (Estado Global)
    ↓
Preview Component
    ↓
API Service
    ↓
Backend API (GeneradorTuteladora)
    ↓
Documento Word generado
```

### Backend

El frontend se comunica con un backend API desarrollado en Node.js que se encarga de:

- **Generación de Documentos:** Crea documentos Word (.docx) con la estructura legal completa de la acción de tutela
- **Validación de Datos:** Valida la información recibida antes de procesarla
- **Formato Legal:** Aplica el formato y estructura requeridos legalmente para acciones de tutela en Colombia

**Repositorio del Backend:** [GeneradorTuteladora](https://github.com/andresperez2003/GeneradorTuteladora)

El backend expone los siguientes endpoints principales:
- `POST /generar-word`: Genera y retorna un documento Word
- `POST /generar-pdf`: Genera y retorna un documento PDF (opcional)
- `GET /ejemplo-datos`: Retorna un ejemplo de la estructura de datos esperada

### Gestión de Estado y Persistencia

La aplicación usa **React Hooks** y **LocalStorage** para la gestión de estado:

- `useState`: Para el estado local de cada componente y el estado global en `App.tsx`.
- `useEffect`: Para manejar la sincronización con `localStorage` y el posicionamiento de la página.
- **Persistencia**: Se utiliza `localStorage` con un tiempo de vida (TTL) de 1 hora. Se incluye un `timestamp` en el objeto guardado para validar la expiración al cargar y se realiza una limpieza automática en el componente `Preview` tras la generación exitosa.

### Componentes Principales

#### App.tsx
- Componente raíz
- Maneja el estado global (`TutelaData`)
- Controla la navegación entre pasos
- Renderiza el stepper y los formularios

#### Componentes de Formulario
Cada paso tiene su propio componente:
- `PersonalDataForm`: Datos personales del accionante
- `AccionadoForm`: Información del accionado
- `HechosForm`: Lista de hechos (con drag & drop)
- `DerechosForm`: Selección de derechos vulnerados
- `AnexosForm`: Lista de anexos
- `CommunicationForm`: Datos de contacto
- `PeticionesForm`: Peticiones al juez
- `Preview`: Previsualización y generación del documento

#### Servicios

- **ApiService** (`src/services/api.ts`): Comunicación con el backend
  - `submitTutela()`: Envía datos al backend
  - `generateAndDownloadWord()`: Genera y descarga documento Word desde el backend
  - `getTutelaStatus()`: Obtiene estado de una tutela
  - `updateTutela()`: Actualiza una tutela existente
  - **Backend utilizado:** [GeneradorTuteladora](https://github.com/andresperez2003/GeneradorTuteladora)

- **TourService** (`src/services/tourService.ts`): Tours guiados con Driver.js
  - Configura tours para cada paso del formulario
  - Proporciona ayuda contextual

## Guía de Estilos

### Sistema de Colores

El proyecto usa un sistema de colores basado en variables CSS. Los colores principales están definidos en `src/styles/globals.css`:

#### Colores Primarios

- **Primary (Azul):** `#2b70ff`
  - Uso: Botones principales, enlaces, elementos destacados
  - Variable CSS: `--primary`

- **Primary Foreground:** `oklch(1 0 0)` (Blanco)
  - Uso: Texto sobre fondos primarios
  - Variable CSS: `--primary-foreground`

#### Colores Secundarios

- **Secondary:** `oklch(0.95 0.0058 264.53)` (Azul muy claro)
  - Uso: Fondos secundarios, badges
  - Variable CSS: `--secondary`

- **Secondary Foreground:** `#030213` (Azul oscuro)
  - Uso: Texto sobre fondos secundarios
  - Variable CSS: `--secondary-foreground`

#### Colores de Estado

- **Destructive (Rojo):** `#d4183d`
  - Uso: Botones de eliminación, mensajes de error
  - Variable CSS: `--destructive`

- **Muted (Gris claro):** `#ececf0`
  - Uso: Fondos sutiles, bordes
  - Variable CSS: `--muted`

- **Muted Foreground:** `#717182`
  - Uso: Texto secundario, placeholders
  - Variable CSS: `--muted-foreground`

#### Colores de Fondo

- **Background:** `#ffffff` (Blanco)
  - Uso: Fondo principal de la aplicación
  - Variable CSS: `--background`

- **Card:** `#ffffff` (Blanco)
  - Uso: Fondos de tarjetas
  - Variable CSS: `--card`

- **Input Background:** `#f3f3f5` (Gris muy claro)
  - Uso: Fondos de campos de entrada
  - Variable CSS: `--input-background`

#### Paleta Completa

```css
:root {
  --primary: #2b70ff;
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.0058 264.53);
  --secondary-foreground: #030213;
  --destructive: #d4183d;
  --destructive-foreground: #ffffff;
  --muted: #ececf0;
  --muted-foreground: #717182;
  --accent: #e9ebef;
  --accent-foreground: #030213;
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --card: #ffffff;
  --card-foreground: oklch(0.145 0 0);
  --border: rgba(0, 0, 0, 0.1);
  --input: transparent;
  --input-background: #f3f3f5;
  --radius: 0.625rem;
}
```

### Logo

El logo de la aplicación se encuentra en:
- **Ubicación:** `src/assets/images/Logo.png`
- **Uso:** Se muestra en el header de la aplicación
- **Dimensiones recomendadas:** 60x50px (configurable en `App.tsx`)

### Tipografía

- **Familia de fuente:** Sistema (ui-sans-serif)
- **Tamaños:**
  - `text-xs`: 0.75rem (12px)
  - `text-sm`: 0.875rem (14px)
  - `text-base`: 1rem (16px)
  - `text-lg`: 1.125rem (18px)
  - `text-xl`: 1.25rem (20px)
  - `text-2xl`: 1.5rem (24px)

### Espaciado

El proyecto usa un sistema de espaciado basado en múltiplos de 0.25rem (4px):
- `gap-1`: 0.25rem
- `gap-2`: 0.5rem
- `gap-3`: 0.75rem
- `gap-4`: 1rem
- `gap-6`: 1.5rem

### Componentes UI

El proyecto usa **shadcn/ui** como biblioteca de componentes. Los componentes están en `src/components/ui/`:

- `button.tsx`: Botones con variantes
- `card.tsx`: Tarjetas contenedoras
- `input.tsx`: Campos de entrada
- `textarea.tsx`: Áreas de texto
- `badge.tsx`: Etiquetas
- `stepper.tsx`: Indicador de pasos
- Y muchos más...

### Uso de Tailwind CSS

El proyecto usa **Tailwind CSS v4** con configuración personalizada. Ejemplos de uso:

```tsx
// Botón primario
<Button className="bg-primary text-primary-foreground">
  Click me
</Button>

// Card con espaciado
<Card className="p-4 space-y-4">
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
</Card>
```

## Despliegue

### Vercel (Recomendado)

1. **Conectar el repositorio a Vercel:**
   - Vaya a [vercel.com](https://vercel.com)
   - Importe el repositorio de GitHub

2. **Configurar Variables de Entorno:**
   - En la configuración del proyecto, vaya a "Environment Variables"
   - Agregue `VITE_API_URL` con el valor: `https://generador-tuteladora.vercel.app`

3. **Desplegar:**
   - Vercel detectará automáticamente que es un proyecto Vite
   - El despliegue se realizará automáticamente en cada push a la rama principal

### Otros Proveedores

#### Netlify

1. Cree un archivo `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Configure las variables de entorno en el dashboard de Netlify

#### GitHub Pages

1. Instale `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Agregue al `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d build"
  }
}
```

3. Ejecute:
```bash
npm run deploy
```

### Configuración de Build

El archivo `vite.config.ts` ya está configurado para producción:

```typescript
build: {
  target: 'esnext',
  outDir: 'build',
}
```

### Verificación Post-Despliegue

Después del despliegue, verifique:

1. ✅ La aplicación carga correctamente
2. ✅ Los formularios funcionan
3. ✅ La generación de documentos funciona
4. ✅ Las variables de entorno están configuradas
5. ✅ El logo y los estilos se cargan correctamente

---

## Dependencias Principales

### Frontend

- **React 18.3.1:** Biblioteca UI
- **TypeScript:** Tipado estático
- **Vite 6.3.5:** Build tool y dev server
- **Tailwind CSS v4:** Framework CSS
- **Radix UI:** Componentes accesibles
- **Driver.js:** Tours guiados
- **Lucide React:** Iconos

### Desarrollo

- **@vitejs/plugin-react-swc:** Plugin React para Vite
- **@types/react:** Tipos TypeScript para React

## Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en puerto 3001

# Producción
npm run build        # Construye la aplicación para producción
```

## Contribución

1. Fork el repositorio
2. Cree una rama para su feature (`git checkout -b feature/AmazingFeature`)
3. Commit sus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abra un Pull Request

---

## 🚀 Recomendaciones Futuras

Esta sección describe mejoras y funcionalidades propuestas para futuras versiones del proyecto.

### 🤖 Aprendizaje Automático e IA

#### Generación Automática de Contenido

Implementar un sistema de aprendizaje automático que permita:

- **Generación Automática de Hechos:**
  - Analizar la información proporcionada por el usuario (derechos vulnerados, tipo de caso, entidad accionada)
  - Generar sugerencias automáticas de hechos relevantes basados en casos similares
  - Proporcionar plantillas inteligentes adaptadas al contexto específico
  - Mejorar la calidad y completitud de los hechos descritos

- **Generación Automática de Peticiones:**
  - Analizar los hechos y derechos vulnerados para sugerir peticiones apropiadas
  - Generar automáticamente las solicitudes específicas al juez basadas en el tipo de caso
  - Asegurar que las peticiones sean legalmente apropiadas y efectivas
  - Personalizar las peticiones según el contexto del caso

**Tecnologías Sugeridas:**
- Modelos de lenguaje (LLM) como GPT-4, Claude, o modelos especializados en derecho
- Fine-tuning de modelos con casos de tutela históricos
- Análisis de sentencias previas para mejorar las sugerencias
- NLP (Natural Language Processing) para análisis de texto legal

**Beneficios:**
- Reducción del tiempo de completado del formulario
- Mejora en la calidad y precisión de los documentos generados
- Asistencia a usuarios con menos conocimiento legal
- Consistencia en la redacción de documentos legales

### 🔐 Seguridad y Autenticación

#### Sistema de Clave Secreta entre Frontend y Backend

Implementar un mecanismo de autenticación seguro para proteger los endpoints del backend:

- **API Key Authentication:**
  - Generar una clave secreta única para el frontend
  - Enviar la clave en cada solicitud al backend mediante headers
  - Validar la clave en el backend antes de procesar cualquier solicitud
  - Implementar rotación de claves para mayor seguridad

- **Implementación Sugerida:**

**Frontend (`src/services/api.ts`):**
```typescript
const API_KEY = import.meta.env.VITE_API_KEY;

static async generateAndDownloadWord(tutelaData: TutelaData): Promise<ApiResponse> {
  const response = await fetch(`${this.baseURL}/generar-word`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': API_KEY, // Clave secreta
    },
    body: JSON.stringify(backendData),
  });
  // ...
}
```

**Backend (Middleware):**
```javascript
// Middleware de autenticación
function validateApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  const validApiKey = process.env.API_SECRET_KEY;
  
  if (!apiKey || apiKey !== validApiKey) {
    return res.status(401).json({ 
      error: 'Unauthorized: Invalid API key' 
    });
  }
  
  next();
}

// Aplicar a rutas protegidas
app.post('/generar-word', validateApiKey, generarWord);
app.post('/generar-pdf', validateApiKey, generarPDF);
```

**Variables de Entorno:**

**Frontend (`.env`):**
```env
VITE_API_URL=https://generador-tuteladora.vercel.app
VITE_API_KEY=tu-clave-secreta-frontend
```

**Backend (`.env`):**
```env
API_SECRET_KEY=tu-clave-secreta-backend
```



## Soporte

Para soporte técnico o preguntas, contacte al equipo de desarrollo.

---

**Versión:** 1.0.0  
**Última actualización:** Diciembre 2025

