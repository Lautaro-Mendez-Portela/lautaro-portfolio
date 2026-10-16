# HANDOFF.md

## Estado actual

Datos estructurados Schema.org incorporados localmente. No se hizo commit, push ni deploy.

## Tarea actual: Person y WebSite

- Se agregó un único `<script type="application/ld+json">` dentro del `head` de `index.html`.
- El `@graph` contiene exclusivamente `Person` y `WebSite`.
- Identificadores estables: `https://lautaromendezportela.com/#person` y `https://lautaromendezportela.com/#website`.
- `WebSite.publisher` referencia el `@id` de `Person` para mantener una sola identidad conectada, sin duplicar datos.
- `sameAs` usa los enlaces de LinkedIn y GitHub ya visibles en el footer.
- `homeLocation` se modeló como `Place` con `La Plata, Argentina`, sin dirección ni datos comerciales inventados.
- No se agregaron `LocalBusiness`, `ProfessionalService`, `SearchAction`, dependencias ni JavaScript ejecutable.
- Las optimizaciones de rendimiento del commit anterior permanecen sin cambios.

## Archivos modificados

- `index.html`
- `HANDOFF.md`

## Validación

- Validación sintáctica local: JSON parseable, un solo bloque JSON-LD, `@context` correcto y exactamente dos nodos (`Person` y `WebSite`).
- Comprobación local de relaciones: `WebSite.publisher.@id` coincide con `Person.@id`; todas las URLs del grafo son HTTPS.
- Comprobación en navegador local: el bloque está dentro del DOM, el canonical sigue siendo `https://lautaromendezportela.com/` y no hubo errores ni advertencias de consola.
- Schema.org Validator ejecutado con el fragmento implementado: 0 errores y 0 advertencias; reconoció `WebSite` y la entidad `Person` vinculada.
- `git diff --check` pasó.

## Pendiente

- Publicar únicamente después de la aprobación del usuario.
- Después del despliegue, validar la URL pública en Schema.org Validator y comprobar la indexación en Google Search Console.
- `Person` y `WebSite` describen las entidades, pero no garantizan resultados enriquecidos ni mejoras de posicionamiento.
