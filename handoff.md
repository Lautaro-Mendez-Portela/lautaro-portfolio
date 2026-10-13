# HANDOFF.md

## Estado actual

Portfolio estático de una página en HTML, CSS y JavaScript, sin `package.json` ni scripts de build o test. La interfaz mantiene su diseño, Hero, animaciones y tema oscuro actuales. No se hizo commit, push ni deploy.

## Tarea actual: base SEO técnica

- `index.html` tiene un título comercial, meta description, canonical absoluto, Open Graph y Twitter Cards para `https://lautaromendezportela.com/`.
- El documento declara `lang="es-AR"`. Se auditó la semántica: hay un solo H1, la jerarquía H2-H4 es coherente y las seis imágenes tienen `alt` descriptivo o vacío cuando son decorativas.
- Se agregaron `robots.txt` y `sitemap.xml` para la única URL canónica. `.vercelignore` permite publicar ambos archivos.
- `assets/social/og-portfolio.jpg` es un fallback social JPG de 1200x630 derivado del póster del Hero. Conviene reemplazarlo más adelante por una pieza OG editorial con nombre y propuesta de valor; conservar la misma ruta evitará cambiar los metadatos.
- El `<body>` de `index.html` permanece idéntico a `HEAD`, por lo que no se modificó contenido visible, layout, estilos ni comportamiento.

## Validación

- Metadatos únicos: un `title`, una description, un canonical, un `og:title`, un `og:description`, un `og:url`, un `og:image` y una Twitter Card.
- No aparecen directivas `noindex` ni `nofollow`.
- Título de 59 caracteres y description de 150 caracteres.
- `sitemap.xml` se pudo parsear como XML y contiene solo la URL canónica.
- La imagen social se verificó como JPG de 1200x630 y 174241 bytes.
- `git diff --check` no informó errores. No hay scripts de build o test disponibles.

## Pendiente después del deploy

- Confirmar respuesta `200`, tipo MIME y contenido público de `/robots.txt`, `/sitemap.xml` y `/assets/social/og-portfolio.jpg`.
- Verificar redirecciones de HTTP y variantes `www` hacia la URL canónica HTTPS.
- Validar la vista previa en LinkedIn, Facebook y X, y reemplazar el fallback por una pieza OG editorial si se desea una tarjeta más informativa.
- Verificar la propiedad en Google Search Console, enviar `/sitemap.xml` e inspeccionar la URL principal para solicitar indexación.
