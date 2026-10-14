# HANDOFF.md

## Estado actual

Portfolio estático de una página en HTML, CSS y JavaScript, sin `package.json` ni scripts de build o test. No se hizo commit, push ni deploy. Antes del Bloque 1 el árbol de trabajo estaba limpio; los cambios actuales están pendientes de revisión del usuario.

## Tarea actual: área precisa del hover en Proyectos

- `styles.css` cambió `.project-card:hover .project-card__stage` por `.project-card__stage:hover`.
- El borde celeste de Tienda online y NOVA se activa exclusivamente al pasar el cursor sobre el rectángulo visual.
- Título, descripción, CTA, figcaption y espacios restantes de la tarjeta conservan el borde normal.
- El zoom eliminado previamente continúa ausente; los mockups mantienen tamaño y posición.
- Se conservaron color, grosor, intensidad, transición, radio, proporciones y reglas `:focus-visible`.
- No se modificaron imágenes, textos, layout, JavaScript ni animaciones.
- El árbol conserva además los cambios anteriores pendientes de SEO/copywriting y la simplificación de Sobre mí.

## Archivos modificados

- `styles.css`
- `handoff.md`

## Validación

- Validación del hover en navegador desktop sobre imagen, título, descripción, CTA y espacio bajo la imagen.
- En ambas tarjetas sólo la imagen activa la mezcla celeste; las demás zonas mantienen `rgb(36, 36, 40)`.
- En reposo y hover, ambas mantienen `transform: none`, el mismo ancho y alto, borde de `1px` y radio de `16px`.
- La transición declarada del borde continúa en `border-color 260ms ease`.
- La regla `.project-cta:focus-visible` permanece disponible.
- Validación responsive a 390×844: grilla de una columna, mockups 16:11, sin overflow horizontal.
- Sin errores ni advertencias de consola.
- `git diff --check` y comprobación de sintaxis de los scripts correctos.

## Pendiente

- Revisión del usuario antes de continuar con el Bloque 2 de SEO/copywriting.
- Tras un futuro deploy, volver a comprobar la respuesta pública de metadatos, `robots.txt`, `sitemap.xml` y la tarjeta social.
