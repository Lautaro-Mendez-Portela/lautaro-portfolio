---
name: "Portfolio L — Etapas 1–2"
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
---

# Design System: Portfolio L — Etapas 1–2

## Overview

**Creative North Star: "El umbral de una propuesta cinematográfica"**

La interfaz implementada comienza como una placa de apertura: el video ocupa todo el primer viewport, la promesa comercial domina la composición y la UI se mantiene deliberadamente silenciosa. Después del umbral negro, el mismo lenguaje continúa sin corte desde la declaración de gran escala hacia capítulos editoriales alternados que explican la oferta sin convertirla en una grilla de tarjetas. Sus visuales ocupan alrededor de la mitad del viewport desktop para sostener presencia sin perder aire editorial.

La profundidad proviene de la imagen en movimiento, de veladuras funcionales y de una transición estructural hacia negro. El cyan aparece como señal de interacción y secuencia, no como superficie de marca. La extensión conserva la sobriedad del Hero: separadores finos, neutrales cercanos y mockups abstractos claramente rotulados como espacios de reemplazo, nunca como prueba de proyectos reales.

**Key Characteristics:**

- Video full-bleed como materia visual principal.
- Declaración negra de escala póster como pausa entre promesa y oferta.
- Capítulos de servicio alternados con visuales cercanos a la mitad del viewport desktop, no cards equivalentes.
- Jerarquía por escala, contraste y espacio negativo.
- Negro casi absoluto, blanco cálido y cyan usado con rareza.
- Controles compactos, bordes suaves y respuesta táctil contenida.
- Movimiento de entrada breve, orquestado y prescindible.

## Colors

La paleta usa negros cercanos, neutrales ligeramente cálidos y un único acento frío de alta legibilidad.

### Primary

- **Cyan Signal** (`accent`, #69C6FF): reserva visual para foco de teclado, selección, subrayado de navegación y borde hover del CTA secundario.

### Neutral

- **Cinematic Ground** (`ground`, #050505): fondo raíz, destino del fade inferior y texto oscuro del CTA principal.
- **Raised Black** (`surface`, #0D0D0F): superficie secundaria disponible en el sistema; no reemplaza el plano negro dominante del Hero.
- **Quiet Border** (`border`, #242428): scrollbar, divisores y separación discreta de navegación.
- **Warm White** (`text-primary`, #F5F5F2): titulares, navegación, marca y CTA secundario.
- **Muted Copy** (`text-secondary`, #A3A3A8): neutral secundario del sistema.
- **Readable Overlay Copy** (`text-subtitle`, #C6C6C8): subtítulo del Hero sobre video, elevado respecto del neutral secundario para asegurar legibilidad.
- **Service Copy** (`service-copy`, #B8B8BC): párrafos de servicio con contraste sostenido sobre negro en bloques de lectura más largos.
- **Service Caption** (`service-caption`, #A9A9AE): rótulos de reemplazo en mayúsculas, subordinados a la composición editorial.
- **Mockup Ground** (`mockup-ground`, #09090B): plano más oscuro dentro de las interfaces abstractas.
- **Mockup Surface** (`mockup-surface`, #111114): paneles internos y módulos de los mockups temporales.
- **Mockup Border** (`mockup-border`, #343439): contorno estructural repetido en marcos y divisiones de los placeholders.
- **Mockup Muted** (`mockup-muted`, #424248): trazos de contenido secundario dentro de las representaciones abstractas.

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
- **Navigation** (500, 14.4px, 1): enlaces discretos del masthead; en el menú mobile suben a 15.2px.
- **Button** (600, 15.2px, 1.1): CTA claros y firmes sin convertirse en etiquetas gritadas.

### Named Rules

**The One Editorial Voice Rule.** Clash Display se reserva para promesas, encabezados editoriales y la marca; General Sans gobierna todo el texto funcional, secuencial y explicativo.

## Layout

El Hero ocupa `100vh` en desktop y `100svh` en mobile. El contenido se alinea a la izquierda dentro de un gutter fluido de 20–88px, ocupa hasta 46vw/46rem y se centra verticalmente con un leve desplazamiento hacia abajo. La composición deja el resto del video libre como espacio negativo activo. La declaración posterior permanece sobre negro, usa un ancho corto de 15ch y compacta la pausa con una altura mínima de `clamp(32rem, 62vh, 40rem)` y padding vertical de `clamp(6rem, 10vw, 9rem)` para sostener un recorrido continuo Hero → declaración → Servicios.

Servicios continúa dentro del mismo gutter. Su encabezado usa una altura mínima de `clamp(8rem, 13vw, 11rem)` y padding inferior de `clamp(1.75rem, 3vw, 2.75rem)`. Cada capítulo usa columnas asimétricas de `0.78fr / 1.12fr` —y `1.12fr / 0.78fr` al invertirse—, gap de `clamp(2.75rem, 5.5vw, 6rem)` y padding vertical de `clamp(4.75rem, 8vw, 8rem)`. Los visuales quedan alrededor del 50% del viewport desktop, con suficiente aire editorial entre copy, imagen y separadores. La secuencia 01/02/03 fija el orden de la oferta y usa margen inferior de `clamp(1.5rem, 2.5vw, 2.5rem)`; el cuerpo comienza a `clamp(1.25rem, 2vw, 2rem)` del título.

Hasta 64rem, los capítulos conservan la asimetría con `0.82fr / 1.18fr` —`1.18fr / 0.82fr` al invertirse— y un gap de `clamp(2.5rem, 4vw, 3.5rem)`. Debajo de 47.99rem, la declaración usa `clamp(27rem, 56svh, 31rem)` de altura mínima y `clamp(5.5rem, 18vw, 7rem)` de padding vertical; el encabezado de Servicios queda en 8rem con 1.5rem de padding inferior. Los capítulos pasan a una sola columna y refluyen copy-first —número, título, descripción y luego visual— con gap de 2.5rem y padding vertical de 5rem. En este tamaño, el número conserva 1.5rem de margen inferior y el cuerpo empieza a 1.25rem del título. La sección `#servicios` aplica un offset de anclaje igual a la altura del header más 24px para que el encabezado no quede oculto.

El header fijo resuelve a 64px en desktop y 60px en mobile. En desktop muestra la marca a la izquierda y cuatro enlaces a la derecha; debajo de 47.99rem cambia a un toggle de 40px y un menú compacto de ancho completo. Debajo de 25rem, los CTA se apilan y pasan a ocupar todo el ancho. Los breakpoints implementados son 64rem, 47.99rem y 25rem.

**The First-Viewport Rule.** La composición inicial contiene únicamente video, navegación, promesa, subtítulo y dos acciones. La franja negra posterior continúa el mismo mundo y prepara la declaración editorial sin producir un corte visual.

**The Chapters, Not Cards Rule.** Servicios se presenta como tres capítulos grandes y secuenciales; no se comprime en una grilla de cards iguales.

## Elevation & Depth

El sistema es plano por defecto y construye profundidad con capas tonales. Un overlay izquierdo mejora la lectura sin apagar el video; un segundo gradiente vertical suaviza la imagen; el fade inferior ocupa 38% del Hero en desktop y 44% en mobile hasta alcanzar el negro base. El header gana fondo negro al 78%, blur de 14px y borde tenue solo al hacer scroll o abrir el menú. La única sombra de reposo pertenece al CTA principal y se intensifica suavemente en hover. La declaración y Servicios permanecen planos: borde, escala, alternancia y neutrales internos separan contenido sin simular elevación.

### Shadow Vocabulary

- **CTA ambient** (`0 0.75rem 2.5rem rgb(0 0 0 / 28%)`): separa el CTA claro del material de video.
- **CTA ambient hover** (`0 1rem 3rem rgb(0 0 0 / 38%)`): confirma interacción sin crear una tarjeta flotante.

### Named Rules

**The Depth Without Cards Rule.** La atmósfera se construye con video, overlays, fade y blur contextual; no con contenedores elevados genéricos.

## Shapes

Los CTA usan esquinas suavemente redondeadas de 12px: accesibles y contemporáneas, pero lejos de una píldora exagerada. Los slots visuales de servicio usan un marco exterior de 16px; sus mockups abstractos internos conservan radios pequeños y específicos —8.8px para comercio, 10.4px para web y 11.2px para gestión— que sugieren interfaz sin parecer cards promocionales. El toggle mobile se compone de dos líneas de 1px que rotan en cruz. Bordes de 1px separan elementos solo cuando el estado o la estructura lo necesitan. El scrollbar es la única forma completamente redondeada.

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

### Orchestrated Scroll Reveal

Un único `IntersectionObserver` revela cada elemento una vez al alcanzar 5% de visibilidad, con `rootMargin` inferior de -5%, y luego deja de observarlo. Un chequeo liviano por scroll y resize replica la activación por posición como respaldo. El estado oculto es opt-in mediante `reveal-enabled`: si el script falla, queda desactualizado o el observer no se inicializa, el contenido permanece visible por defecto. La declaración combina 28px de ascenso con 960ms de opacidad/transform y un recorte de 1000ms. En cada bloque de servicio, número, título y párrafo ascienden 24px con un stagger de 140ms: el número dura 680ms, el título 780–840ms y el párrafo 720–760ms. Los visuales ascienden 24px, reducen desde 0.985 y disipan 5.6px de blur durante 920ms. Toda la secuencia usa `cubic-bezier(0.22, 1, 0.36, 1)`. Si el usuario prefiere movimiento reducido o el observer no está disponible, todos los elementos se muestran inmediatamente.

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
- **Do** rotular los visuales temporales como espacios de reemplazo hasta contar con activos definitivos.

### Don't:

- **Don't** extender el cyan a grandes superficies, títulos o gradientes decorativos.
- **Don't** convertir los capítulos de servicio en una grilla de cards equivalentes.
- **Don't** presentar los mockups abstractos como proyectos, screenshots o prueba de trabajo real.
- **Don't** implementar parallax, zoom por scroll, cursor tracking, WebGL, 3D ni animación pesada.
- **Don't** convertir la navegación mobile en un drawer pesado o una cápsula flotante.
