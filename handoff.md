# HANDOFF.md

## Estado actual

Etapa 5 (QA global, accesibilidad y performance) completada en el árbol de trabajo. El portfolio sigue siendo HTML, CSS y JavaScript vanilla, sin build ni tests configurados. No se hizo commit, push ni despliegue.

## Cambios

- `styles.css`: se eliminó el overflow de 10 px a 320 px; el menú mobile cerrado ahora queda fuera del foco y del árbol accesible, mientras que sin JavaScript la navegación permanece visible; se mejoró el contraste de “Próximamente” en el footer y se evitó el borde de foco nativo alrededor de secciones enteras.
- `index.html`: las secciones con anclas pueden recibir foco programático después de navegar; se evitó la solicitud 404 de `favicon.ico` con un icono vacío provisional y se actualizó la versión de la URL de CSS.
- `.vercelignore`: permite publicar solo `index.html`, CSS, JS y `assets/`, dejando fuera el video original `1080p.mp4`, documentación y PNG de referencia sin eliminarlos del repositorio.

## Validación

- Lighthouse 13.5.0 local final: mobile 93 Performance / 100 Accessibility / 100 Best Practices / 100 SEO; LCP 2.7 s, CLS 0, TBT 0 ms. Desktop 99 / 100 / 100 / 100; LCP 0.7 s, CLS 0.005, TBT 0 ms. Antes de corregir favicon y contraste: 93 / 96 / 96 / 100 mobile y 99 / 96 / 96 / 100 desktop. Reportes JSON y capturas en `.impeccable/qa-stage5/` (ignorado por Git).
- Navegador local: 1440×900, 1366×768, 768×1024, 390×844 y 320×568 sin overflow horizontal; navegación, CTA, menú mobile, Escape, foco de anclas y header fijo verificados. Capturas finales desktop/mobile inspeccionadas. Consola final sin errores ni warnings.
- Fallbacks comprobados mediante páginas temporales retiradas: sin JavaScript, contenido y navegación visibles; sin GSAP, timeline legible; simulación de movimiento reducido, poster visible, reveals y timeline estáticos. El timeline GSAP se pausó fuera del viewport y reanudó al volver. `node --check` para ambos JS, referencias locales y `git diff --check` pasaron.

## Pendientes y siguiente acción

- Siguen pendientes los screenshots reales de Servicios y Proyectos y los destinos definitivos de WhatsApp, email, LinkedIn y GitHub. No inventar datos ni sustituir placeholders.
- El video original pesa 18.3 MB y las variantes servidas pesan 5.0 MB desktop / 2.9 MB mobile. Si se busca mejorar LCP mobile, evaluar compresión o formatos nuevos con decisión explícita; no modificar el original automáticamente. Fontshare y CSS son recursos bloqueantes identificados por Lighthouse; `display=swap` ya está activo. La advertencia de caché en Lighthouse corresponde al servidor local sin headers; verificar el despliegue real antes de configurar caché.
- No se probó un despliegue en Vercel. La estructura y rutas estáticas están preparadas; comprobar en preview que `.vercelignore` excluya lo previsto y que carguen video, fuentes y GSAP. Luego, y solo cuando el usuario lo pida, continuar con Etapa 6.
