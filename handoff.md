# HANDOFF.md

## Estado actual

Merge local de `style/compact` en `main` resuelto. Portfolio estático de una página en HTML, CSS y JavaScript vanilla; no hay package.json ni scripts de build o test. No se hizo push ni despliegue. La experiencia actual no implementa tema claro.

## Cambios integrados

- `light-droplets.js` y `styles.css`: luces violetas en canvas detrás de la transición y Servicios; conservan pausas por visibilidad y `prefers-reduced-motion`.
- `index.html`: se añadió el contenedor de luces y su script, se actualizó la versión de CSS y se conservaron el script del Hero y los atributos de accesibilidad de `main`.
- Se mantuvieron las correcciones previas de accesibilidad, responsive y performance de `main`, incluida `.vercelignore`.

## Validación

- `node --check` pasó para `script.js`, `animations.js` y `light-droplets.js`.
- Captura local de Chrome de la vista inicial desktop revisada. Las capturas con ancla a Servicios no permitieron evaluar esa sección durante un scroll interactivo.
- Pendiente verificar visualmente Servicios en desktop y móvil con scroll real, y medir fluidez en un móvil físico.

## Pendientes y siguiente acción

- Siguen pendientes las capturas reales de Servicios y Proyectos, los destinos definitivos de contacto/redes y los detalles de proyectos. No inventar datos ni sustituir placeholders.
- Antes de desplegar, comprobar en preview las rutas de video, fuentes y GSAP, y que `.vercelignore` excluya lo previsto. No se probó despliegue.
