# HANDOFF.md

## Estado actual

Portfolio de una página en HTML, CSS y JavaScript vanilla, sin `package.json` ni scripts de build/test. Identidad oscura y cinematográfica. El repositorio aún no contiene un tema claro implementado.

## Última tarea: carga progresiva del Hero

**Estado:** implementada; pendiente de revisión visual en navegador y despliegue. Sin commit ni push.

- `index.html`: el Hero muestra `assets/hero/hero-poster.avif` desde el HTML con prioridad alta. El video ya no tiene fuente inicial ni referencia a `1080p.mp4`. `script.js` carga antes del CDN de GSAP para que ese recurso externo no retrase la preparación del video. Se actualizaron las versiones de CSS y JS en las URLs.
- `styles.css`: poster y video comparten tamaño, `object-fit` y encuadre desktop/mobile. El video aparece con una transición de opacidad de 400 ms; se preservan overlays, fade, layout y animaciones existentes.
- `script.js`: elige `hero-mobile.mp4` hasta 47.99rem y `hero-desktop.mp4` por encima; asigna solo esa URL. Espera el primer fotograma mediante `requestVideoFrameCallback` (con fallback de `playing`) antes de mostrar el video. Ante rechazo de `play()` o error conserva el poster. Con movimiento reducido o `Save-Data`, evita asignar una fuente. Al cruzar el breakpoint cambia de variante; otros cambios de tamaño no reinician el video.
- `assets/hero/`: tres recursos provistos por el usuario, aún sin seguimiento en Git (`?? assets/`). No se modificaron ni recomprimieron.

## Verificación y pendientes

- `node --check script.js`, `node --check animations.js` y `git diff --check` completados.
- Servidor HTTP local: HTML y poster responden 200; ambas variantes MP4 responden 206 a solicitudes parciales, con MIME correcto.
- El navegador integrado bloqueó `localhost` y `127.0.0.1` (`ERR_BLOCKED_BY_CLIENT`). No se pudo inspeccionar visualmente la transición, consola, red, Core Web Vitals ni simular condiciones móviles en navegador. Tampoco se verificó el despliegue real en Vercel.
- Próxima acción: revisión visual y de red en un navegador local o el preview de Vercel, en desktop/mobile y con movimiento reducido; después agregar los tres assets a Git junto con los cambios al preparar el commit. El usuario gestiona commit y push.

## Otros pendientes del portfolio

Los visuales de Servicios y Proyectos son temporales. Destinos de contacto y detalles de proyectos siguen pendientes. GSAP 3.15.0 se carga desde el CDN fijado en `index.html`; Proceso tiene estado estático si no carga.
