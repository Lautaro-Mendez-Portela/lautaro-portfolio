# HANDOFF.md

## Estado actual

Portfolio de una página en HTML, CSS y JavaScript vanilla, sin `package.json` ni scripts de build o test. `main` contiene la compactación visual y la carga progresiva del Hero. La tarea actual corrige la activación visual del video del Hero; los cambios están en el árbol de trabajo y no se han commiteado ni publicado.

## Corrección del video del Hero

- `script.js`: la aparición del video ya no depende de una única llamada a `requestVideoFrameCallback`. Una comprobación idempotente exige fuente vigente, reproducción iniciada, fotograma disponible, `readyState >= HAVE_CURRENT_DATA`, ausencia de error y video no pausado. Se invoca desde `loadeddata`, `playing`, `timeupdate`, la resolución de `play()` y el callback de fotograma. El cambio de fuente cancela el callback y los listeners previos; `mediaVersion` descarta resultados obsoletos. Ante error o rechazo de `play()` queda el poster y se informa por consola.
- `index.html`: se actualizó la versión de la URL de `script.js` para evitar servir una copia anterior desde caché.
- El diseño, CSS, transición de opacidad de 400 ms, video y poster originales, breakpoints, GSAP, textos y protecciones de movimiento reducido y `Save-Data` permanecen intactos.

## Verificación

- `node --check script.js`, `node --check animations.js` y `git diff --check` pasaron. Una prueba temporal de estados simulados cubrió callback temprano o ausente, reproducción lenta, rechazo de `play()`, error, cambios de fuente, movimiento reducido y `Save-Data`; el archivo temporal se retiró.
- Navegador integrado local: carga inicial desktop a 1440×900 y mobile a 390×844 reprodujeron la fuente correcta y revelaron el video. Desktop 1440→1200 no reinició la fuente; desktop→mobile→desktop seleccionó cada variante. Con el callback de fotograma deliberadamente suprimido en una página temporal, `loadeddata`/`playing` revelaron el video y la opacidad llegó a 1. Sin errores de consola observados. Los archivos HTML temporales se retiraron.
- El problema específico en Chrome Desktop maximizado no pudo reproducirse aquí. Quedan pendientes las pruebas manuales en ese navegador con caché vacía y existente, sin DevTools ni resize, además de red lenta/fallo real, movimiento reducido y `Save-Data` reales. No se verificó el despliegue en Vercel.

## Siguiente acción

Probar la versión local en Chrome Desktop maximizado y luego desplegar cuando el cambio sea aprobado. Los visuales de Servicios y Proyectos, destinos de contacto y detalles de proyectos siguen pendientes como contenido del portfolio.
