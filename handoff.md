# HANDOFF.md

## Estado actual

Portfolio de una página en HTML, CSS y JavaScript nativo, sin paquete ni scripts de build/test. Rama style/compact. El CSS actual solo implementa tema oscuro. Los cambios de Sobre mí siguen locales, sin commit, push ni deploy.

## Tarea actual: microajustes de Sobre mí

**Estado:** implementado y revisado visualmente.

- styles.css: se redujo solo en anchos desde 833 px el padding inferior de Sobre mí mediante clamp(3.25rem, 5vw, 5.25rem). En Chrome pasó de 122.4 a 72 px a 1440 px y de 92 a 52 px a 900 px. El resto de la composición y los breakpoints menores permanecen iguales.
- index.html: se actualizó únicamente la versión de caché del CSS a v=14-about-spacing.
- Se conservaron los párrafos mobile en 16 px, line-height 1.65 y separación de 16 px: ya superaban el rango sugerido de 14–15 px y eran legibles. Las gotas cercanas a UBICACIÓN no impidieron leer la fila en las capturas; no se cambió Light Droplets ni el fondo.

## Verificación

- Chrome headless con capturas y métricas a 1440, 900, 768, 390 y 320 px, antes y después del ajuste: sin overflow horizontal, un solo Canvas y sin excepciones de JavaScript. La transición a Contacto y el fade de las gotas siguen visibles. La altura del Canvas coincide con el viewport.
- Las capturas mobile muestran párrafos y fila informativa legibles incluso con gotas próximas. Los tamaños de 768, 390 y 320 px no cambiaron.
- git diff --check se ejecutó tras el ajuste. No se probó en un móvil físico. No hay tema claro implementado actualmente.

## Pendientes

Validar scroll y rendimiento en un móvil físico. Destinos de contacto y detalles de proyectos siguen pendientes de datos reales. Revisar los cambios locales antes de commitear.