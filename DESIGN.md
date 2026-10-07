---
name: "Portfolio L — Etapa 1"
description: "Un umbral cinematográfico y sobrio para presentar soluciones digitales a medida."
colors:
  ground: "#050505"
  surface: "#0D0D0F"
  border: "#242428"
  text-primary: "#F5F5F2"
  text-secondary: "#A3A3A8"
  text-subtitle: "#C6C6C8"
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
  full: "999px"
spacing:
  page-gutter: "clamp(1.25rem, 5vw, 5.5rem)"
  action-gap: "0.75rem"
  button-inset: "0.85rem 1.1rem"
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
---

# Design System: Portfolio L — Etapa 1

## Overview

**Creative North Star: "El umbral de una propuesta cinematográfica"**

La interfaz implementada funciona como una placa de apertura: el video ocupa todo el primer viewport, la promesa comercial domina la composición y la UI se mantiene deliberadamente silenciosa. La identidad es oscura, editorial, premium y tecnológica sin adoptar códigos gamer, terminales, neón dominante ni glassmorphism ornamental.

La profundidad proviene de la imagen en movimiento, de veladuras funcionales y de una transición estructural hacia negro. El cyan aparece como señal de interacción, no como superficie de marca. Esta documentación cubre exclusivamente la Etapa 1 ya construida: Hero, navegación, CTA, movimiento de entrada y estados globales; no define ni anticipa componentes para secciones futuras.

**Key Characteristics:**

- Video full-bleed como materia visual principal.
- Jerarquía por escala, contraste y espacio negativo.
- Negro casi absoluto, blanco cálido y cyan usado con rareza.
- Controles compactos, bordes suaves y respuesta táctil contenida.
- Movimiento de entrada breve, escalonado y prescindible.

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
- **Navigation** (500, 14.4px, 1): enlaces discretos del masthead; en el menú mobile suben a 15.2px.
- **Button** (600, 15.2px, 1.1): CTA claros y firmes sin convertirse en etiquetas gritadas.

### Named Rules

**The One Editorial Voice Rule.** Clash Display se reserva para el titular y la marca; General Sans gobierna todo el texto funcional y explicativo.

## Layout

El Hero ocupa `100vh` en desktop y `100svh` en mobile. El contenido se alinea a la izquierda dentro de un gutter fluido de 20–88px, ocupa hasta 46vw/46rem y se centra verticalmente con un leve desplazamiento hacia abajo. La composición deja el resto del video libre como espacio negativo activo.

El header fijo resuelve a 64px en desktop y 60px en mobile. En desktop muestra la marca a la izquierda y cuatro enlaces a la derecha; debajo de 47.99rem cambia a un toggle de 40px y un menú compacto de ancho completo. Debajo de 25rem, los CTA se apilan y pasan a ocupar todo el ancho. Los breakpoints implementados son 64rem, 47.99rem y 25rem.

**The First-Viewport Rule.** La composición inicial contiene únicamente video, navegación, promesa, subtítulo y dos acciones. La franja negra posterior es continuidad espacial, no una sección nueva.

## Elevation & Depth

El sistema es plano por defecto y construye profundidad con capas tonales. Un overlay izquierdo mejora la lectura sin apagar el video; un segundo gradiente vertical suaviza la imagen; el fade inferior ocupa 38% del Hero en desktop y 44% en mobile hasta alcanzar el negro base. El header gana fondo negro al 78%, blur de 14px y borde tenue solo al hacer scroll o abrir el menú. La única sombra de reposo pertenece al CTA principal y se intensifica suavemente en hover.

### Shadow Vocabulary

- **CTA ambient** (`0 0.75rem 2.5rem rgb(0 0 0 / 28%)`): separa el CTA claro del material de video.
- **CTA ambient hover** (`0 1rem 3rem rgb(0 0 0 / 38%)`): confirma interacción sin crear una tarjeta flotante.

### Named Rules

**The Depth Without Cards Rule.** La atmósfera se construye con video, overlays, fade y blur contextual; no con contenedores elevados genéricos.

## Shapes

Los CTA usan esquinas suavemente redondeadas de 12px: accesibles y contemporáneas, pero lejos de una píldora exagerada. El toggle mobile se compone de dos líneas de 1px que rotan en cruz. Bordes de 1px separan elementos solo cuando el estado o la estructura lo necesitan. El scrollbar es la única forma completamente redondeada.

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

### Global Interaction States

La selección usa fondo cyan y texto negro. Links y botones comparten foco visible cyan. El scrollbar es fino, con thumb gris bordeado por el negro base. Estas señales forman parte del sistema y deben conservarse aunque la UI permanezca visualmente sobria.

## Do's and Don'ts

### Do:

- **Do** preservar el video full-bleed como protagonista del primer viewport.
- **Do** mantener el fade estructural hasta negro continuo antes de cualquier contenido futuro.
- **Do** usar Clash Display solo para jerarquía editorial y General Sans para la UI.
- **Do** conservar foco visible, navegación por teclado, estados sin hover y reducción de movimiento.
- **Do** mantener el CTA principal visualmente dominante y el secundario transparente.

### Don't:

- **Don't** extender el cyan a grandes superficies, títulos o gradientes decorativos.
- **Don't** agregar cards, formularios, claims, imágenes o patrones de secciones que todavía no existen.
- **Don't** implementar parallax, zoom por scroll, cursor tracking, WebGL, 3D ni animación pesada.
- **Don't** convertir la navegación mobile en un drawer pesado o una cápsula flotante.
- **Don't** avanzar la Etapa 2 desde este sistema documentado.
