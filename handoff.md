# HANDOFF.md

## Estado actual

Portfolio de una página en HTML, CSS y JavaScript vanilla, sin paquete ni scripts de build/test. Rama `style/compact`. No hay tema claro implementado.

## Tarea actual: escala visual de Light Droplets

**Estado:** implementada localmente, sin commit, push, merge ni deploy.

- light-droplets.js: se añadió sizeScale: 1.7 a LIGHT_DROPLETS_CONFIG. Con 1.0 el sprite conserva su tamaño previo; con 1.7 crecen por igual la longitud visible, cuerpo, cabeza y halo. Se conservaron color #A378FF, intensidad 2.0, lengthScale, thicknessScale y parámetros de forma.
- La escala se aplica solo al sprite Canvas. streak.trail continúa determinando el ciclo original, y las posiciones, velocidades, trayectorias, cantidad y distribución no cambiaron. La cabeza permanece anclada a la coordenada original de la partícula. La cola se desvanece al salir por abajo antes de reaparecer, para evitar un corte visible por la nueva longitud.
- No cambiaron los alfas, gradientes ni la lógica de FPS, DPR, visibilidad o movimiento reducido. index.html solo actualiza el parámetro de caché a v=5-size.

## Verificación

- node --check light-droplets.js y git diff --check: correctos.
- Chrome headless local: se tomaron y revisaron capturas a 1440 y 390 px. Se observan gotas violetas alargadas en la transición, con cabeza inferior y cola difusa; el texto visible de escritorio sigue legible. El navegador abrió la página cerca de la transición, por lo que estas capturas no permiten confirmar la legibilidad de las tarjetas de Servicios.
- La escala 1,7 de longitud y anchura se comprobó en las fórmulas del sprite. Las rutinas de movimiento, cantidad y pausas no se editaron.
- No se midió rendimiento de frames ni se probó en un móvil físico en esta tarea.

## Pendientes

Revisar Servicios durante un scroll interactivo completo, confirmar la legibilidad de sus tarjetas y medir rendimiento en un móvil físico. No hay tema claro para verificar. Los visuales de Servicios y Proyectos siguen siendo temporales; destinos de contacto y detalles de proyectos siguen pendientes.
