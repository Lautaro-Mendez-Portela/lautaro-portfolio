# HANDOFF.md

## Estado actual

Portfolio de una página en HTML, CSS y JavaScript nativo, sin paquete ni scripts de build/test. Rama style/compact. No hay tema claro implementado.

## Tarea actual: Light Droplets hasta Sobre mí

**Estado:** implementado localmente, sin commit, push, merge ni deploy.

- index.html: el único contenedor .light-droplets ahora incluye transición, Servicios, Proyectos, Cómo trabajo y Sobre mí. Cierra antes de Contacto. Solo cambió además la versión de caché de styles.css.
- styles.css: Proyectos y Cómo trabajo tienen fondos transparentes y quedan por delante del Canvas; Sobre mí conserva un tono más claro con una capa rgb(10 10 12 / 72%). La máscara existente mantiene la entrada gradual y el fade en los últimos 12rem del contenedor. Contacto y footer no se tocaron.
- light-droplets.js no cambió. Conserva un Canvas sticky de 100vh, DPR máximo 1.5, tope de 60 FPS, IntersectionObserver, pausa por pestaña oculta y prefers-reduced-motion.
- No existe .vercelignore en esta rama; no hay regla que excluya light-droplets.js, así que no se creó un archivo de excepción.

## Verificación

- HTMLParser: cierres correctos, un Canvas, cuatro secciones dentro del contenedor y Contacto fuera.
- node --check light-droplets.js y git diff --check correctos.
- Chrome headless con scroll programado: capturas a 1440 y 390 px en Servicios, Proyectos, Cómo trabajo, Sobre mí y Contacto; capturas adicionales a 320 px. Las luces aparecen en las cuatro secciones y se desvanecen al final de Sobre mí. Contacto y footer se ven libres de gotas; textos, tarjetas y mockups siguen legibles.
- Métricas de Chrome a 1440, 900, 768, 390 y 320 px: un solo Canvas; su altura siempre igual al viewport; sin overflow horizontal ni excepciones de JavaScript. El Hero no se editó.
- En Chrome móvil emulado a 390 px: 60 redibujos en un segundo en Proyectos; cero con prefers-reduced-motion; 60 tras reactivarlo. A 390 × 600 se midieron 61 redibujos en Proyectos y cero al salir completamente la región del viewport (borde inferior a -179 px). No se probó en un móvil físico. En 390 × 844, el final de Sobre mí aún ocupa 65 px al llegar al máximo scroll, por lo que el IntersectionObserver sigue activo; el fade oculta las luces en Contacto.

## Pendientes

Validar rendimiento y scroll con entrada física en un móvil real. Destinos de contacto y detalles de proyectos continúan pendientes de datos reales.
