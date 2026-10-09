# HANDOFF.md

## Estado actual

Portfolio de una página en HTML, CSS y JavaScript vanilla, sin paquete ni scripts de build/test. La rama actual es `style/compact`; `main` no incluye los cambios aprobados del Hero presentes en esta rama. No hay tema claro implementado.

## Tarea actual: estelas luminosas en transición y Servicios

**Estado:** implementada localmente, sin commit, push ni deploy.

- `index.html`: una sola capa Canvas decorativa envuelve la transición y Servicios; Proyectos queda fuera. Se cargó `light-droplets.js` y se actualizó la versión de CSS para evitar caché.
- `styles.css`: la capa se recorta y desvanece al entrar y salir. Transición y Servicios mantienen su geometría y fondo oscuro; el Canvas queda detrás del contenido y no recibe eventos.
- `light-droplets.js`: implementación propia en Canvas 2D, sin React ni dependencias. Entre 12 y 38 estelas finas de la paleta cyan, según el ancho; movimiento lento con brillo y velocidad variables. Limita a 60 FPS y DPR 1.5; pausa con IntersectionObserver, pestaña oculta o movimiento reducido; reanuda sin salto temporal y limpia listeners en pagehide. El video del Hero y su lógica no se tocaron.
- Se mantuvo `style/compact` porque crear `feat/light-droplets-services` desde `main` habría dejado fuera los cambios actuales del Hero.

## Verificación

- `node --check light-droplets.js` y `git diff --check` completados.
- Chrome headless local mediante DevTools: capturas reales de transición, Servicios y Proyectos; estelas visibles en las dos primeras zonas y ausentes en Proyectos. Capturas de Servicios a 390 y 320 px; contenido legible.
- Anchos 1440, 900, 768, 390 y 320 px: `scrollWidth <= innerWidth`. No se registraron excepciones de JavaScript. Con `prefers-reduced-motion: reduce`, el Canvas quedó vacío.
- Pausa fuera de viewport verificada: la suma alfa del Canvas cambia en la transición y permanece idéntica tras desplazar toda la región fuera de pantalla. No se midieron FPS reales en dispositivo físico ni se probó un tema claro porque el proyecto no lo tiene.

## Pendientes

Revisar en un navegador interactivo la sutileza del efecto durante un scroll completo y el rendimiento en móvil real. El Hero conserva sus assets y lógica de carga anteriores. Los visuales de Servicios y Proyectos siguen siendo temporales; destinos de contacto y detalles de proyectos siguen pendientes.
