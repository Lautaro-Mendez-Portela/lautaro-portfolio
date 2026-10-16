# HANDOFF.md

## Estado actual

Imagen Open Graph definitiva corregida localmente: el nombre dentro de la pieza ahora dice «Lautaro Mendez Portela». Los datos estructurados Schema.org de la tarea anterior permanecen incorporados. No se hizo commit, push ni deploy.

## Tarea actual: imagen Open Graph

- Se reemplazó `assets/social/og-portfolio.jpg` por una pieza de 1200 × 630 basada exclusivamente en `assets/hero/hero-poster.avif`, sin modificar el original.
- La composición se generó mediante HTML/CSS y una captura headless de Chrome. Se usaron los WOFF2 oficiales de Fontshare para Clash Display 700 (nombre/monograma) y 600 (título).
- La hoja combinada actual de Fontshare no entrega General Sans; la descripción replica la cadena efectiva del sitio: `"General Sans", "Helvetica Neue", Arial, sans-serif`, que cae en Arial en este entorno Windows.
- El fondo conserva `object-fit: cover` y `object-position: center`; sólo se añadieron overlays negros semitransparentes para contraste.
- Se mantuvo la URL existente de Open Graph y Twitter. Sólo se actualizaron `og:image:alt` y `twitter:image:alt`.
- `.vercelignore` ya permite publicar `assets/`; no requirió cambios.
- A pedido del usuario se eliminó sólo la tilde visible de «Méndez» en la imagen, reconstruyendo el pequeño fondo bajo el acento; la composición y el resto del texto se conservaron.

## Archivos modificados

- `assets/social/og-portfolio.jpg`
- `index.html`
- `handoff.md`

## Validación

- JPG válido, 1200 × 630, `yuvj420p`, 105.437 bytes (aprox. 103 KiB).
- Inspección visual a tamaño completo y reducción Lanczos a 400 × 210: textos legibles, sin recortes ni distorsión.
- Nombre corregido a «Lautaro Mendez Portela» y título/descripción conservados; no se incluyó “en La Plata”.
- Metadatos verificados: URL compartida, `image/jpeg`, ancho 1200 y alto 630.
- No se modificaron CSS, JavaScript funcional, Hero, animaciones, secciones, sitemap ni robots.
- Detector Impeccable ejecutado una vez; sólo señaló patrones preexistentes en la página fuera del alcance de esta tarea.

## Pendiente

- Publicar únicamente después de la aprobación del usuario.
- Después del despliegue, comprobar la imagen pública y refrescar las vistas previas de WhatsApp y LinkedIn, teniendo en cuenta sus cachés.
