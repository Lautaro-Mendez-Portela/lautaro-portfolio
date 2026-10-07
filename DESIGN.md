---
name: "Portfolio L — Etapas 1–3"
description: "Un recorrido cinematográfico y editorial para presentar soluciones digitales a medida."
colors:
  ground: "#050505"
  surface: "#0D0D0F"
  border: "#242428"
  text-primary: "#F5F5F2"
  text-secondary: "#A3A3A8"
  text-subtitle: "#C6C6C8"
  service-copy: "#B8B8BC"
  service-caption: "#A9A9AE"
  mockup-ground: "#09090B"
  mockup-surface: "#111114"
  mockup-border: "#343439"
  mockup-muted: "#424248"
  project-status: "#8F8F94"
  project-status-divider: "#38383D"
  project-tech-divider: "#4D4D52"
  accent: "#69C6FF"
typography:
  display-desktop:
    fontFamily: '"Clash Display", "Arial Black", "Helvetica Neue", sans-serif'
    fontSize: "clamp(4.25rem, 5.25vw, 5.25rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  display-mobile:
    fontFamily: '"Clash Display", "Arial Black", "Helvetica Neue", sans-serif'
    fontSize: "clamp(2.5rem, 11.5vw, 3rem)"
    fontWeight: 600
    lineHeight: 0.99
    letterSpacing: "-0.035em"
  body:
    fontFamily: '"General Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: "clamp(1rem, 1.25vw, 1.18rem)"
    fontWeight: 400
    lineHeight: 1.58
  statement-display:
    fontFamily: '"Clash Display", "Arial Black", "Helvetica Neue", sans-serif'
    fontSize: "clamp(3.5rem, 6.2vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  section-display:
    fontFamily: '"Clash Display", "Arial Black", "Helvetica Neue", sans-serif'
    fontSize: "clamp(3.5rem, 6vw, 5.75rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  service-title:
    fontFamily: '"Clash Display", "Arial Black", "Helvetica Neue", sans-serif'
    fontSize: "clamp(3rem, 4.6vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  service-body:
    fontFamily: '"General Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: "clamp(1rem, 1.1vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.7
  service-sequence:
    fontFamily: '"General Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.12em"
  service-caption:
    fontFamily: '"General Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.78rem"
    fontWeight: 500
    letterSpacing: "0.04em"
  project-title:
    fontFamily: '"Clash Display", "Arial Black", "Helvetica Neue", sans-serif'
    fontSize: "clamp(3rem, 4.25vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 0.97
    letterSpacing: "-0.035em"
  project-card-title:
    fontFamily: '"Clash Display", "Arial Black", "Helvetica Neue", sans-serif'
    fontSize: "clamp(2rem, 2.8vw, 3rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  project-card-body:
    fontFamily: '"General Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  project-tech:
    fontFamily: '"General Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.82rem"
    fontWeight: 500
    lineHeight: 1.4
  project-cta:
    fontFamily: '"General Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.93rem"
    fontWeight: 600
    lineHeight: 1.2
  project-status:
    fontFamily: '"General Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.68rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
  navigation:
    fontFamily: '"General Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.9rem"
    fontWeight: 500
    lineHeight: 1
  button:
    fontFamily: '"General Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.1
rounded:
  control: "0.75rem"
  service-visual: "1rem"
  mockup-commerce: "0.55rem"
  mockup-web: "0.65rem"
  mockup-management: "0.7rem"
  full: "999px"
spacing:
  page-gutter: "clamp(1.25rem, 5vw, 5.5rem)"
  action-gap: "0.75rem"
  button-inset: "0.85rem 1.1rem"
  service-chapter-gap: "clamp(2.75rem, 5.5vw, 6rem)"
  service-chapter-block: "clamp(4.75rem, 8vw, 8rem)"
  project-featured-gap: "clamp(3rem, 5.5vw, 6rem)"
  project-featured-block: "clamp(5.5rem, 8vw, 8rem)"
  project-grid-gap: "clamp(2rem, 4vw, 4.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.text-primary}"
    textColor: "{colors.ground}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "{spacing.button-inset}"
    height: "3.25rem"
  button-secondary:
    backgroundColor: "rgb(5 5 5 / 12%)"
    textColor: "{colors.text-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "{spacing.button-inset}"
    height: "3.25rem"
  navigation-desktop:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    typography: "{typography.navigation}"
    height: "4rem"
  navigation-mobile:
    backgroundColor: "rgb(5 5 5 / 94%)"
    textColor: "{colors.text-primary}"
    height: "3.75rem"
  service-visual-slot:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.service-caption}"
    rounded: "{rounded.service-visual}"
  project-cta-pending:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.project-cta}"
---

# Design System: Portfolio L — Etapas 1–3

## Overview

**Creative North Star: "El umbral de una propuesta cinematográfica"**

La interfaz implementada comienza como una placa de apertura: el video ocupa todo el primer viewport, la promesa comercial domina la composición y la UI se mantiene deliberadamente silenciosa. Después del umbral negro, el mismo lenguaje continúa sin corte desde la declaración de gran escala hacia capítulos editoriales alternados que explican la oferta sin convertirla en una grilla de tarjetas. Proyectos prolonga ese recorrido como un portfolio cinematográfico: un caso principal con copy cercano a un tercio y visual cercano a dos tercios, seguido por dos casos secundarios en una grilla amplia.

La profundidad proviene de la imagen en movimiento, de veladuras funcionales y de una transición estructural hacia negro. El cyan aparece como señal de interacción y secuencia, no como superficie de marca. Las extensiones de Servicios y Proyectos conservan la sobriedad del Hero: separadores finos, neutrales cercanos y mockups abstractos claramente rotulados como espacios de reemplazo, nunca como prueba visual definitiva. Etapa 3 no redefine Hero ni Servicios: es una extensión local del contrato de dirección existente (seed `fb07d1ed`), no una identidad nueva.

**Key Characteristics:**

- Video full-bleed como materia visual principal.
- Declaración negra de escala póster como pausa entre promesa y oferta.
- Capítulos de servicio alternados con visuales cercanos a la mitad del viewport desktop, no cards equivalentes.
- Caso destacado de Proyectos con protagonismo visual y dos secundarios en grilla editorial.
- Jerarquía por escala, contraste y espacio negativo.
- Negro casi absoluto, blanco cálido y cyan usado con rareza.
- Controles compactos, bordes suaves y respuesta táctil contenida.
- Movimiento de entrada breve, orquestado y prescindible.
- Seis slots reemplazables sin assets raster nuevos: tres de Servicios y tres de Proyectos.

## Colors

La paleta usa negros cercanos, neutrales ligeramente cálidos y un único acento frío de alta legibilidad.

### Primary

- **Cyan Signal** (`accent`, #69C6FF): reserva visual para foco de teclado, selección, subrayado de navegación, CTA de proyecto y bordes hover sutiles.

### Neutral

- **Cinematic Ground** (`ground`, #050505): fondo raíz, destino del fade inferior y texto oscuro del CTA principal.
- **Raised Black** (`surface`, #0D0D0F): superficie secundaria disponible en el sistema; no reemplaza el plano negro dominante del Hero.
- **Quiet Border** (`border`, #242428): scrollbar, divisores y separación discreta de navegación.
- **Warm White** (`text-primary`, #F5F5F2): titulares, navegación, marca y CTA secundario.
- **Muted Copy** (`text-secondary`, #A3A3A8): neutral secundario del sistema.
- **Readable Overlay Copy** (`text-subtitle`, #C6C6C8): subtítulo del Hero sobre video, elevado respecto del neutral secundario para asegurar legibilidad.
- **Service Copy** (`service-copy`, #B8B8BC): párrafos de servicio y proyecto con contraste sostenido sobre negro en bloques de lectura más largos.
- **Service Caption** (`service-caption`, #A9A9AE): rótulos de reemplazo y stacks de proyecto, subordinados a la composición editorial.
- **Mockup Ground** (`mockup-ground`, #09090B): plano más oscuro dentro de las interfaces abstractas.
- **Mockup Surface** (`mockup-surface`, #111114): paneles internos y módulos de los mockups temporales.
- **Mockup Border** (`mockup-border`, #343439): contorno estructural repetido en marcos y divisiones de los placeholders.
- **Mockup Muted** (`mockup-muted`, #424248): trazos de contenido secundario dentro de las representaciones abstractas.
- **Project Status** (`project-status`, #8F8F94): estado visible `Próximamente` junto a los CTA de proyecto sin destino.
- **Project Status Divider** (`project-status-divider`, #38383D): divisor corto entre el CTA de proyecto y su estado pendiente.
- **Project Tech Divider** (`project-tech-divider`, #4D4D52): slash que separa tecnologías sin convertirlas en badges.

### Named Rules

**The Cyan Is a Signal Rule.** El acento se limita a estados interactivos y detalles pequeños; nunca se convierte en un campo de fondo dominante.

**The Continuous Black Rule.** El fade del Hero siempre termina en `ground`, de modo que el video no produzca un corte visible contra la continuación negra.

## Typography

**Display Font:** Clash Display, con Arial Black y Helvetica Neue como fallbacks.
**Body Font:** General Sans, con Helvetica Neue y Arial como fallbacks.

**Character:** Clash Display aporta convicción editorial en una sola declaración grande. General Sans mantiene párrafos, navegación, botones y UI neutrales, claros y comerciales.

### Hierarchy

- **Display desktop** (600, 68–84px fluidos, 0.96): titular principal en dos líneas intencionales a ancho desktop.
- **Display mobile** (600, 40–48px fluidos, 0.99): titular compacto, con ancho máximo de 13 caracteres y salto natural.
- **Body** (400, 16–18.88px fluidos, 1.58): subtítulo del Hero, con máximo de 38rem en desktop y 31rem en mobile.
- **Statement display** (600, 56–96px fluidos, 0.96): declaración de transición sobre negro; en mobile usa 44.8–68px y line-height 0.98.
- **Section display** (600, 56–92px fluidos, 0.94): título de apertura de Servicios; en mobile usa 48–72px.
- **Service title** (600, 48–76px fluidos, 0.96): nombre de cada servicio con un ancho máximo de 12 caracteres; en mobile usa 44–60px y line-height 0.98.
- **Service body** (400, 16–17px fluidos, 1.7): explicación comercial con ancho máximo de 34rem; en mobile queda en 17px con line-height 1.68.
- **Service sequence** (600, 12.48px, 0.12em): numeración tabular 01/02/03 en cyan; comunica orden de lectura, no decoración.
- **Service caption** (500, 12.48px, 0.04em): rótulo uppercase de cada visual reemplazable.
- **Project title** (600, 48–72px fluidos, 0.97): nombre del caso destacado; en mobile usa 44–60px y line-height 0.98.
- **Project card title** (600, 32–48px fluidos, 1): nombre de cada proyecto secundario; en mobile usa 36–48px.
- **Project card body** (400, 16px, 1.65): resumen de cada caso secundario; en mobile sube a 17px.
- **Project tech** (500, 13.12px, 1.4): stack inline separado por slash.
- **Project CTA** (600, 14.88px, 1.2): etiqueta cyan `Ver proyecto →` sin microaffordance activa mientras no exista destino.
- **Project status** (600, 10.88px, 0.08em): `Próximamente` en mayúsculas como estado explícito, no como badge promocional.
- **Navigation** (500, 14.4px, 1): enlaces discretos del masthead; en el menú mobile suben a 15.2px.
- **Button** (600, 15.2px, 1.1): CTA claros y firmes sin convertirse en etiquetas gritadas.

### Named Rules

**The One Editorial Voice Rule.** Clash Display se reserva para promesas, encabezados editoriales y la marca; General Sans gobierna todo el texto funcional, secuencial y explicativo.

## Layout

El Hero ocupa `100vh` en desktop y `100svh` en mobile. El contenido se alinea a la izquierda dentro de un gutter fluido de 20–88px, ocupa hasta 46vw/46rem y se centra verticalmente con un leve desplazamiento hacia abajo. La composición deja el resto del video libre como espacio negativo activo. La declaración posterior permanece sobre negro, usa un ancho corto de 15ch y compacta la pausa con una altura mínima de `clamp(32rem, 62vh, 40rem)` y padding vertical de `clamp(6rem, 10vw, 9rem)` para sostener un recorrido continuo Hero → declaración → Servicios.

Servicios continúa dentro del mismo gutter. Su encabezado usa una altura mínima de `clamp(8rem, 13vw, 11rem)` y padding inferior de `clamp(1.75rem, 3vw, 2.75rem)`. Cada capítulo usa columnas asimétricas de `0.78fr / 1.12fr` —y `1.12fr / 0.78fr` al invertirse—, gap de `clamp(2.75rem, 5.5vw, 6rem)` y padding vertical de `clamp(4.75rem, 8vw, 8rem)`. Los visuales quedan alrededor del 50% del viewport desktop, con suficiente aire editorial entre copy, imagen y separadores. La secuencia 01/02/03 fija el orden de la oferta y usa margen inferior de `clamp(1.5rem, 2.5vw, 2.5rem)`; el cuerpo comienza a `clamp(1.25rem, 2vw, 2rem)` del título.

Proyectos continúa el negro editorial dentro del mismo gutter y abre con un encabezado simple `Proyectos`. El caso destacado usa columnas `0.5fr / 1.3fr`: la medición renderizada asigna 67.8% del ancho útil al visual, cerca de la relación copy un tercio / visual dos tercios. Su gap es `clamp(3rem, 5.5vw, 6rem)` y su bloque vertical `clamp(5.5rem, 8vw, 8rem)`. Las capacidades se leen como una lista con divisores finos, nunca como badges. El visual principal ocupa 16:10 y contiene una pantalla central con dos paneles superpuestos, caption y `data-replace-target` para su reemplazo explícito.

Los proyectos secundarios se organizan en una grilla de dos columnas con gap de `clamp(2rem, 4vw, 4.5rem)`. Cada caso prioriza un visual grande, luego título, resumen, stack inline separado por slash y CTA pendiente. En mobile, tanto el caso destacado como la grilla refluyen a una sola columna copy-first; los tres escenarios visuales pasan a 4:3 y la separación entre casos secundarios queda en 4.5rem.

Hasta 64rem, los capítulos conservan la asimetría con `0.82fr / 1.18fr` —`1.18fr / 0.82fr` al invertirse— y un gap de `clamp(2.5rem, 4vw, 3.5rem)`; el caso destacado de Proyectos ajusta sus columnas a `0.56fr / 1.24fr`. Debajo de 47.99rem, la declaración usa `clamp(27rem, 56svh, 31rem)` de altura mínima y `clamp(5.5rem, 18vw, 7rem)` de padding vertical; los encabezados de sección compactan su altura y padding. Servicios y el caso destacado pasan a una sola columna copy-first, mientras los secundarios pasan de dos columnas a una. Las secciones `#servicios` y `#proyectos` aplican un offset de anclaje igual a la altura del header más 24px para no quedar ocultas.

El header fijo resuelve a 64px en desktop y 60px en mobile. En desktop muestra la marca a la izquierda y cuatro enlaces a la derecha; debajo de 47.99rem cambia a un toggle de 40px y un menú compacto de ancho completo. Debajo de 25rem, los CTA se apilan y pasan a ocupar todo el ancho. Los breakpoints implementados son 64rem, 47.99rem y 25rem.

**The First-Viewport Rule.** La composición inicial contiene únicamente video, navegación, promesa, subtítulo y dos acciones. La franja negra posterior continúa el mismo mundo y prepara la declaración editorial sin producir un corte visual.

**The Chapters, Not Cards Rule.** Servicios se presenta como tres capítulos grandes y secuenciales; no se comprime en una grilla de cards iguales.

**The Portfolio Hierarchy Rule.** Proyectos distingue un caso dominante y dos secundarios; no iguala los tres casos ni los reduce a una colección de badges.

## Elevation & Depth

El sistema es plano por defecto y construye profundidad con capas tonales. Un overlay izquierdo mejora la lectura sin apagar el video; un segundo gradiente vertical suaviza la imagen; el fade inferior ocupa 38% del Hero en desktop y 44% en mobile hasta alcanzar el negro base. El header gana fondo negro al 78%, blur de 14px y borde tenue solo al hacer scroll o abrir el menú. La única sombra de reposo de la interfaz pertenece al CTA principal; los mockups abstractos pueden usar sombra interna para separar pantallas superpuestas. Servicios permanece plano. En Proyectos, el destacado solo cambia el borde del visual y los secundarios elevan su escenario 3px, escalan a 1.01 y reciben un borde cyan sutil, exclusivamente en punteros finos con hover.

### Shadow Vocabulary

- **CTA ambient** (`0 0.75rem 2.5rem rgb(0 0 0 / 28%)`): separa el CTA claro del material de video.
- **CTA ambient hover** (`0 1rem 3rem rgb(0 0 0 / 38%)`): confirma interacción sin crear una tarjeta flotante.

### Named Rules

**The Depth Without Cards Rule.** La atmósfera se construye con video, overlays, fade y blur contextual; no con contenedores elevados genéricos.

## Shapes

Los CTA usan esquinas suavemente redondeadas de 12px: accesibles y contemporáneas, pero lejos de una píldora exagerada. Los slots visuales de Servicios y Proyectos usan un marco exterior de 16px; sus mockups abstractos internos conservan radios pequeños y específicos —entre 4.8px y 12px— que sugieren interfaz sin parecer cards promocionales. El toggle mobile se compone de dos líneas de 1px que rotan en cruz. Bordes de 1px separan elementos solo cuando el estado o la estructura lo necesitan. El scrollbar es la única forma completamente redondeada.

## Components

### Buttons

- **Shape:** rectángulo compacto con radio suave (12px), altura mínima de 52px en desktop y 50px en mobile.
- **Primary:** fondo blanco cálido, texto negro, padding de 13.6px × 17.6px, flecha lineal y sombra ambiental.
- **Secondary:** fondo negro al 12%, texto blanco cálido y borde blanco al 22%; en hover el borde vira a cyan al 58% y el fondo sube a 28%.
- **Hover / Focus:** ambos elevan 1px y escalan a 1.015; la flecha avanza 3px. El foco visible es un outline cyan de 2px con offset de 4px. En dispositivos sin hover se elimina la transformación.

### Navigation

La navegación desktop permanece transparente en reposo. Cada enlace revela una línea cyan desde la derecha hacia la izquierda en hover o focus. Al superar 18px de scroll, el header adquiere la capa negra translúcida, blur y borde sutil documentados en Elevation & Depth.

En mobile, un control de dos líneas abre un panel negro compacto debajo del header; los enlaces quedan separados por divisores tenues. El toggle mantiene `aria-expanded`, cambia su etiqueta accesible y el menú se cierra al elegir un enlace, pulsar Escape o volver a un viewport desktop.

### Hero Title Card

El video cubre el viewport con `object-fit: cover`; en mobile el punto de encuadre se desplaza al 58% horizontal. El titular, subtítulo y acciones aparecen en tres pasos de 680ms con desplazamiento vertical de 16px y demoras de 0ms, 150ms y 300ms. Bajo `prefers-reduced-motion: reduce`, se elimina la puesta en escena y también el smooth scroll.

### Transition Statement

Bloque negro de pausa con una única declaración de hasta 15ch. Usa Clash Display a escala póster, sin CTA, ilustración ni contenedor. Su función es articular el paso desde el Hero hacia la explicación de Servicios.

### Service Chapters

Tres capítulos editoriales ordenados 01, 02 y 03. Cada uno reúne número cyan, título display, explicación en neutral claro y un único visual reemplazable. En desktop alternan texto/visual y visual/texto; en mobile todos adoptan copy-first en una columna. Los separadores de 1px sostienen el ritmo sin encerrar cada capítulo como una card.

### Service Visual Replacement Slots

Cada visual usa `figure`, un escenario 16:10 con radio de 16px y un `figcaption` uppercase que declara qué activo final debe reemplazarlo. El atributo `data-replace-target` identifica el destino de reemplazo. Los interiores son diagramas HTML/CSS abstractos, no screenshots ni evidencia de trabajo; el rótulo debe conservarse mientras el activo definitivo no exista. En mobile el escenario cambia a 4:3.

### Projects Section

El encabezado simple `Proyectos` abre la sección sin kicker, descripción ni ornamento nuevo. El negro continuo, el gutter, los divisores de 1px y las jerarquías tipográficas la integran con Servicios. Tanto la navegación como el CTA secundario del Hero enlazan a `#proyectos`, cuyo `scroll-margin-top` respeta el header fijo.

### Featured Project

`Sistema de reservas para canchas` combina copy cercano a un tercio y visual cercano a dos tercios en desktop; la medición renderizada del visual es 67.8%. El bloque de texto incluye descripción, cinco capacidades en una lista de divisores finos y el CTA pendiente. El visual 16:10 es un mockup abstracto compuesto por una pantalla principal y dos paneles; en mobile el artículo refluye a una columna copy-first y el visual pasa a 4:3. En punteros finos, el hover solo cambia el borde del escenario.

### Secondary Project Cards

`E-Commerce Full Stack` y `AI PDF Chat` forman una grilla de dos columnas en desktop y una sola en mobile. Cada card permanece abierta sobre el fondo, sin contenedor elevado: visual grande, título, texto, stack inline separado por slash y CTA pendiente. En punteros finos, el escenario visual se eleva 3px, escala a 1.01 y recibe un borde cyan sutil; el texto no se desplaza.

### Project Pending CTA

Los tres casos conservan `Ver proyecto →` como etiqueta editorial, seguida por el estado visible `Próximamente`. Mientras no exista un destino real, el conjunto es texto no navegable, usa cursor por defecto y no recibe hover, focus, desplazamiento de flecha ni otra microaffordance que prometa interacción.

### Project Visual Replacement Slots

Los tres visuales de Proyectos son `figure` con escenario, `figcaption` y `data-replace-target`. Se construyen solo con HTML/CSS y neutrales existentes; no incorporan assets raster. Deben seguir identificándose como espacios reservados hasta que capturas reales reemplacen de forma explícita cada slot.

### Orchestrated Scroll Reveal

Un único `IntersectionObserver` revela cada elemento una vez al alcanzar 5% de visibilidad, con `rootMargin` inferior de -5%, y luego deja de observarlo. Un chequeo liviano por scroll y resize replica la activación por posición como respaldo. El estado oculto es opt-in mediante `reveal-enabled`: si el script falla, queda desactualizado o el observer no se inicializa, el contenido permanece visible por defecto. La declaración combina 28px de ascenso con 960ms de opacidad/transform y un recorte de 1000ms. En Servicios y en el proyecto destacado, el copy hereda la entrada escalonada existente y los visuales ascienden 24px, reducen desde 0.985 y disipan 5.6px de blur durante 920ms. Las cards secundarias ascienden 24px durante 860ms y la segunda comienza 140ms después. Toda la secuencia usa `cubic-bezier(0.22, 1, 0.36, 1)`. Si el usuario prefiere movimiento reducido o el observer no está disponible, todos los elementos se muestran inmediatamente.

### Global Interaction States

La selección usa fondo cyan y texto negro. Links y botones comparten foco visible cyan. El scrollbar es fino, con thumb gris bordeado por el negro base. Estas señales forman parte del sistema y deben conservarse aunque la UI permanezca visualmente sobria.

Bajo `prefers-reduced-motion: reduce`, smooth scroll se desactiva y transiciones/animaciones se reducen a 0.01ms con una sola iteración. Ningún contenido depende de la animación para hacerse visible.

## Do's and Don'ts

### Do:

- **Do** preservar el video full-bleed como protagonista del primer viewport.
- **Do** mantener el fade estructural hasta negro continuo antes de la declaración de transición.
- **Do** usar Clash Display solo para jerarquía editorial y General Sans para la UI.
- **Do** conservar foco visible, navegación por teclado, estados sin hover y reducción de movimiento.
- **Do** mantener el CTA principal visualmente dominante y el secundario transparente.
- **Do** mantener 01/02/03 como orden significativo de los servicios y conservar el reflujo copy-first en mobile.
- **Do** preservar la jerarquía del portfolio: destacado con 67.8% visual medido y secundarios en grilla 2→1.
- **Do** presentar capacidades con divisores finos y stacks tecnológicos inline separados por slash.
- **Do** mantener `Próximamente` visible y `Ver proyecto →` sin interacción hasta contar con destinos reales.
- **Do** rotular los seis visuales temporales como espacios de reemplazo hasta contar con activos definitivos.

### Don't:

- **Don't** extender el cyan a grandes superficies, títulos o gradientes decorativos.
- **Don't** convertir los capítulos de servicio en una grilla de cards equivalentes.
- **Don't** convertir capacidades o stacks de proyecto en nubes de badges.
- **Don't** presentar los mockups abstractos como screenshots o prueba visual definitiva.
- **Don't** añadir hover, focus o enlace activo a un CTA de proyecto sin URL real.
- **Don't** implementar parallax, zoom por scroll, cursor tracking, WebGL, 3D ni animación pesada.
- **Don't** convertir la navegación mobile en un drawer pesado o una cápsula flotante.
