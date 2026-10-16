# HANDOFF.md

## Estado actual

Portfolio estático de una página en HTML, CSS y JavaScript, sin `package.json` ni scripts de build o test. No se hizo commit ni push.

## Tarea actual: recorte del hover en los CTA de Proyectos

- Causa: la regla general `.js.reveal-enabled [data-reveal].is-visible` aplicaba `clip-path: inset(0)` al copy destacado y a las tarjetas. El hover compartido escala el CTA a `1.015`, por lo que el contenedor recortaba sus bordes al sobresalir.
- Solución: `clip-path: inset(0)` se aplica solo al título `data-reveal="statement"`, que sí usa un reveal con recorte. Los contenedores de Proyectos quedan con `clip-path: none` tras su entrada.
- Se conservaron las clases, medidas, colores, flecha, posición, hover y foco de los CTA. No se modificó el Hero ni el HTML de Proyectos.

## Archivos modificados

- `styles.css`
- `handoff.md`

## Validación

- Navegador desktop (1270 px) y mobile (390 px): inspección visual de los tres botones en reposo y hover; los cuatro bordes redondeados y el contorno de foco permanecen visibles.
- Estilos calculados: `clip-path: none` en los padres de los tres CTA; el hover conserva el escalado existente. En mobile no hay overflow horizontal y, tras salir del hover, el botón vuelve a 340 × 50 px con `transform: none`.
- `git diff --check` sin errores.

## Pendiente

- Revisión del usuario. No quedan problemas conocidos en los CTA.
