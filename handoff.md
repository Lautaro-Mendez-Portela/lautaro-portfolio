# HANDOFF.md

## Estado actual

Portfolio profesional de una página en HTML, CSS y JavaScript vanilla. No hay `package.json` ni scripts de build o test. La identidad actual es oscura y cinematográfica; el repositorio aún no implementa un tema claro.

## Último trabajo: carga progresiva del Hero

La rama `style/compact` incorporó la carga progresiva del Hero sobre la compactación visual ya integrada en `main`. Los tres recursos de `assets/hero/` están incluidos en el commit `9dfb4f7` y no fueron recomprimidos durante la integración.

- `index.html`: muestra `hero-poster.avif` con prioridad alta. El video comienza sin fuente ni `autoplay` HTML; `script.js` carga antes del CDN de GSAP. Las URLs de CSS y JS tienen versión nueva.
- `script.js`: selecciona `hero-mobile.mp4` hasta 47.99rem y `hero-desktop.mp4` por encima. Muestra el video después del primer fotograma; ante error o rechazo de reproducción conserva el poster. Con movimiento reducido o `Save-Data` no asigna fuente.
- `styles.css`: poster y video comparten encuadre y tamaño; el video aparece mediante una transición de opacidad de 400 ms. Se conservan overlays, fade, layout y animaciones.
- La compactación previa de títulos y espacios debajo del Hero permanece en `styles.css`. Servicios, Proyectos, Proceso, Sobre mí y Contacto conservaron contenido y estructura.

## Verificación

- El commit de la rama pasó `git diff --check`; `node --check script.js` y `node --check animations.js` pasaron antes del merge.
- La verificación HTTP anterior recibió 200 para HTML y poster y 206 para las dos variantes MP4, con MIME correcto.
- El navegador integrado pudo abrir el servidor local durante este merge. En 1440×900 cargaron poster y video desktop; en 390×844 cargaron poster y video mobile. En ambos tamaños se verificaron selección de fuente, reproducción, ausencia de overflow horizontal y de texto recortado, y consola sin errores.
- No se verificaron todavía `Save-Data`, movimiento reducido, métricas de red/Core Web Vitals ni el despliegue en Vercel.
- No se modificó manualmente el código durante la resolución del conflicto de merge; solo se consolidó este handoff.

## Pendientes y siguiente acción

Revisar la transición poster/video con movimiento reducido y `Save-Data` y comprobar red y rendimiento en el preview desplegado. Los visuales de Servicios y Proyectos son temporales. Destinos de contacto y detalles de proyectos siguen pendientes. GSAP 3.15.0 se carga desde el CDN fijado en `index.html`; Proceso conserva un estado estático si no carga.
