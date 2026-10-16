# HANDOFF.md

## Estado actual

Optimización móvil e incidente tipográfico corregidos localmente. No se hizo commit, push ni deploy.

## Tarea actual: Web Performance / LCP

- Referencia de producción (PageSpeed Mobile, 16/10/2026): Performance 92, Accessibility 100, Best Practices 96, SEO 100; FCP/LCP/Speed Index 2,7 s; TBT 0 ms; CLS 0.
- Lighthouse identifica `.brand` (`L`) como LCP porque el contenido principal del Hero empieza oculto para su reveal y la marca queda como el mayor texto pintado antes. En la medición actual el retraso propio del elemento es 200 ms; la demora dominante sigue siendo la ruta crítica de CSS/fuentes.
- La optimización que inlineaba cinco `@font-face` fue revertida. Aunque los WOFF2 y pesos coincidían con las reglas individuales de Fontshare, la hoja combinada original actualmente entrega solo Clash Display; antes, General Sans caía a `Helvetica Neue`/Arial. Al cargar General Sans real inline cambiaron grosor, métricas `ch` y saltos de línea.
- Se restauraron exactamente el `preconnect` a `api.fontshare.com` y el `<link rel="stylesheet">` original. Se priorizó fidelidad visual y se aceptó recuperar la solicitud bloqueante de Fontshare.
- Se conservaron `styles.css`, el reveal del Hero, video/póster, GSAP, Light Droplets, tipografías, composición y responsive.
- Se agregaron variantes WebP 768/1200 y `srcset`/`sizes` solamente a las tres imágenes señaladas. Los originales permanecen como fallback; se mantienen dimensiones, lazy loading, aspect ratio y encuadre.
- Se agregó `services-tilt.js` a `.vercelignore`: producción devolvía 404 porque el HTML lo referencia pero el allowlist no lo publicaba.

## Archivos modificados

- `.vercelignore`
- `index.html`
- `assets/projects/ecommerce-streetwear-concepto-16x11-{768,1200}.webp`
- `assets/projects/reservas-portada-{768,1200}.webp`
- `assets/projects/reservas-turno-768.webp`
- `handoff.md`

## Validación

- Comparación navegador producción/local con fuentes listas: en 1440 px coinciden familia declarada, peso, estilo, tamaño, line-height, ancho, altura y cantidad de líneas en Hero, Servicios, Proyectos, Proceso, Sobre mí y Contacto.
- Capturas e inspección visual local: 1440×900, 900×900, 768×1024, 390×844 y 320×844. Se recuperaron grosor, definición y saltos de línea; sin overflow horizontal ni errores de consola.
- Red verificada: con la implementación inline se descargaban cinco WOFF2; con la restauración se reproducen la hoja oficial y los dos WOFF2 de Clash Display observados en producción, mientras el body vuelve al fallback anterior.
- Variantes seleccionadas correctamente por `srcset`; reducción potencial aproximada de 262 KiB en la selección 768 frente a los tres originales, sin afirmar resultado Lighthouse posdeploy.
- `node --check` pasó para los cinco JS; `git diff --check` pasó; 16 referencias locales verificadas; dimensiones de variantes verificadas con `ffprobe`.
- Detector Impeccable ejecutado una vez; solo reportó patrones visuales preexistentes fuera de alcance.

## Pendiente

- Publicar únicamente con aprobación del usuario y repetir PageSpeed Mobile sobre producción para obtener un antes/después comparable. No hay medición posdeploy local equivalente a la limitación de red de PageSpeed.
- Confirmar en producción que desaparece el 404 de `services-tilt.js`. La solicitud CSS externa de Fontshare vuelve a ser bloqueante por decisión de fidelidad visual.
