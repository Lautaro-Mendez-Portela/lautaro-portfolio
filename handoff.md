# HANDOFF.md

## Estado actual

Portfolio estático de una página en HTML, CSS y JavaScript, sin `package.json` ni scripts de build o test. No se hizo commit ni push.

## Tarea actual: CTA de Proyectos igual al Hero

- Los tres enlaces «Quiero algo similar» conservan su texto, `aria-label` y destino `#contacto`.
- Ahora comparten `button button--primary` y el mismo SVG de flecha con el CTA «Hablemos de tu proyecto» del Hero. El botón original no cambió.
- `.project-cta` conserva únicamente el espaciado y la posición de los botones en Proyectos. Se retiraron sus estilos visuales y estados anteriores.
- El CTA del proyecto destacado conserva su animación de entrada; una regla puntual permite que sus transiciones y transformación en hover coincidan con el botón compartido.

## Archivos modificados

- `index.html`
- `styles.css`
- `handoff.md`

## Validación

- Comparación de estilos calculados en navegador: los cuatro CTA comparten fondo `rgb(245, 245, 242)`, texto `rgb(5, 5, 5)`, padding, altura, radio, tipografía, borde, sombra y SVG. El ancho varía por el texto y el contenedor.
- En desktop (1440 px) y mobile (390 px) no se observó overflow horizontal. Inspección visual mobile de Proyectos: CTA destacado alineado y sin cambios imprevistos de layout.
- Foco de teclado verificado en un CTA de Proyectos: `:focus-visible` activo con contorno celeste de 2 px y offset de 4 px.
- El hover y la reducción de movimiento usan las reglas ya existentes de `.button` y `prefers-reduced-motion`; no se añadieron animaciones nuevas.
- `git diff --check` sin errores.

## Pendiente

- Revisión del usuario. Los archivos sin seguimiento `LICENSE-Uiverse-project-cta.txt` y `project-flip-text.js` ya estaban presentes y no se tocaron.
