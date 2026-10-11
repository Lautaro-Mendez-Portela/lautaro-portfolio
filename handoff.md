# HANDOFF.md

## Estado actual

Portfolio estático de una página (HTML, CSS y JavaScript nativo), sin scripts de build/test. Rama style/compact. La interfaz implementa solo tema oscuro. No hay commit, push ni deploy de esta tarea.

## Tarea actual: CTA comerciales en Proyectos

**Estado:** implementado en código; validación visual real pendiente.

- `styles.css`: los tres `.project-cta` ahora son enlaces con apariencia de botón compacto, fondo celeste de acento, texto oscuro, radio de 0.5rem, alto mínimo de 44 px y hover/activo sutiles. El foco usa contorno claro; `prefers-reduced-motion` sigue anulando las transiciones.
- `index.html`: solo se actualizó la versión de la hoja CSS para evitar caché. Los tres CTA conservan texto, flecha y `href="#contacto"`; no se cambió el HTML del proyecto destacado porque su orden ya era lista → CTA → capturas tanto en lectura como en mobile. La distribución desktop permanece.
- Validación estática: se comprobaron los tres enlaces, texto, orden DOM, reglas de scroll/foco/movimiento y breakpoints. Detector Impeccable ejecutado sin avisos relacionados con los CTA. `git diff --check` sin errores. No hay scripts de build/test configurados.
- Pendiente: capturas reales, overflow, interacción y consola a 1440, 900, 768, 390 y 320 px. El navegador integrado bloquea el archivo local y prohíbe vías alternativas; próxima acción: validar en un navegador con acceso al portfolio o revisar capturas facilitadas por el usuario.

## Tarea previa: ícono de WhatsApp

**Estado:** reemplazado en código; revisión visual en navegador pendiente.

- `assets/icons/whatsapp.png`: copia exacta del PNG adjunto, 24 × 24 px, transparencia y 700 bytes.
- `index.html`: el SVG del enlace de WhatsApp en Contacto se reemplazó por el PNG. Conserva enlace, textos y flecha; la imagen es decorativa (`alt=""`) porque el enlace ya tiene nombre visible. Se actualizó la versión de CSS para evitar caché.
- `styles.css`: el PNG ocupa el mismo espacio de 1.65rem que el SVG anterior. No se modificaron otras secciones.
- Validación estática: archivo y dimensiones confirmados, referencia y estilos revisados, `git diff --check` sin errores. Pendiente revisar el render en navegador; el navegador integrado bloquea el archivo local.

## Tarea previa: reemplazo de imágenes en Otros proyectos

**Estado:** implementado en código; validación visual real pendiente.

- `assets/projects/nova-studio-concepto-16x11.webp` y `assets/projects/ecommerce-streetwear-concepto-16x11.webp`: conversiones sin recorte de las nuevas imágenes adjuntas. Miden 1512 × 1040 px (161122 bytes) y 1495 × 1052 px (179990 bytes), respectivamente. Se retiraron los WebP anteriores.
- `index.html`: rutas y dimensiones declaradas actualizadas para ambas imágenes; se mantienen títulos, descripciones, pies conceptuales, textos alternativos, carga diferida y CTA. Se cambió la versión de CSS para evitar una vista cacheada.
- `styles.css`: ambas tarjetas comparten un marco 16:11 y el mismo ancho de imagen (94%) con centrado vertical y márgenes discretos en todos los breakpoints. Se retiraron los encuadres especiales que necesitaban las imágenes anteriores. La alineación de contenido y CTA se conserva; no se tocó el proyecto destacado ni otras secciones.
- Validación estática: ambas conversiones inspeccionadas, dimensiones y recursos confirmados, rutas y reglas CSS verificadas. `git diff --check` sin errores. No hay scripts de build/test configurados.
- Pendiente: capturas reales y comprobación de overflow y consola a 1440, 900, 768, 390 y 320 px. El navegador integrado bloquea el archivo local y prohíbe vías alternativas. Próxima acción: validar en un navegador con acceso al portfolio o revisar capturas facilitadas por el usuario.

## Tarea previa: CTA de Proyectos hacia Contacto

**Estado:** implementado; prueba interactiva en navegador pendiente.

- `index.html`: los tres CTA de Proyectos son enlaces nativos `href="#contacto"` con el texto `Quiero algo similar →` y nombres accesibles que identifican cada proyecto; se quitaron las tres etiquetas `Próximamente` asociadas. No se cambiaron otros enlaces ni el contenido de Contacto.
- `styles.css`: se conserva el estilo de `.project-cta` como enlace sin subrayado permanente y se retiran los estilos de estado pendiente ya sin uso. El scroll suave, `scroll-margin-top` de Contacto, el foco visible y `prefers-reduced-motion` ya existían; no se añadió JavaScript.
- Validación estática: tres enlaces de proyecto apuntan al `id="contacto"` único; no quedan CTA anteriores. `node --check` pasó en los cuatro JavaScript existentes y `git diff --check` terminó sin errores. No hay scripts de build/test configurados.
- Pendiente: probar scroll, header, overflow y errores JavaScript a 1440, 900, 768, 390 y 320 px. El navegador integrado bloquea el archivo local y prohíbe vías alternativas; no se pudo efectuar una prueba interactiva.

## Tarea previa: marco visual del proyecto destacado

**Estado:** ajuste implementado; revisión visual en navegador pendiente.

- `styles.css`: el marco de la captura principal pasó de proporción 16:10 a 16:9. La captura ocupa ahora 96% del ancho, con 2% de separación superior y lateral (antes 92%, 7% y 4%). También se evitó que el breakpoint de 47.99rem devolviera ese marco a 4:3; los otros proyectos conservan su proporción. La captura secundaria, el borde y las esquinas se mantienen.
- `index.html`: se actualizó la versión de la hoja de estilos para evitar una vista cacheada. No se modificaron textos, imágenes, enlaces ni otras secciones.
- Comprobación geométrica de las reglas CSS: la captura principal permanece dentro del marco y los estilos mobile siguen apilando ambas imágenes sin ancho extra. `git diff --check` sin errores. No hay scripts de build/test configurados.
- Pendiente: comparación visual y verificación real de overflow a 1440, 900, 768, 390 y 320 px. El navegador integrado bloquea el archivo local y prohíbe vías alternativas de acceso; no se efectuó esa revisión.

## Tarea previa: refinamiento del proyecto de reservas

**Estado:** cambios implementados; revisión visual en navegador pendiente.

- `index.html`: la descripción del proyecto destacado usa el texto comercial indicado por el usuario. El pie de imagen se conserva porque describe con mayor precisión las dos vistas. El CTA sigue en estado `Próximamente`: no hay URL pública confirmada en el repositorio.
- `styles.css`: la captura superpuesta pasó de 48% a 42% del ancho del visual (12,5% menos), con más separación de los bordes y una sombra más suave. La captura principal, la estructura y los breakpoints existentes se conservaron.
- Las dos imágenes WebP de `assets/projects/` permanecen sin cambios. No se tocaron otras secciones ni enlaces.
- Validación realizada: comprobaciones estáticas de rutas, dimensiones declaradas y reglas responsive; `git diff --check` sin errores. No hay scripts de build/test configurados.
- Pendiente: capturas y revisión visual a 1440, 900, 768, 390 y 320 px, overflow y errores JavaScript en navegador. El navegador integrado rechazó el acceso al archivo local por política de URL y prohibió vías alternativas; el usuario indicó dejar esta validación pendiente. Para activar el CTA falta la URL pública confirmada del proyecto.

## Tarea previa: incorporación de capturas del proyecto de reservas

**Estado:** implementado; verificación visual en navegador pendiente.

- `index.html`: el visual provisorio del proyecto destacado se reemplazó por las dos capturas reales, con dimensiones, carga diferida y textos alternativos. Los demás proyectos, textos y enlaces de la página no se tocaron en esta tarea.
- `styles.css`: portada como imagen principal y pantalla de selección de turno superpuesta en escritorio. Desde 896 px la tarjeta pasa a una columna; desde 640 px las capturas se apilan a ancho completo, sin recorte.
- `assets/projects/reservas-portada.webp` y `assets/projects/reservas-turno.webp`: conversiones WebP de los dos PNG proporcionados. Conservan 1665×945 y 1903×1080 px; pesan 120 KB y 75 KB aproximadamente.
- Verificación: dimensiones de salida confirmadas con `ffprobe`; PSNR promedio de 46,0 y 48,4 dB; `git diff --check` sin errores. El detector Impeccable informó avisos previos fuera del alcance de Proyectos.
- Pendiente: revisar visualmente ambas imágenes y ausencia de overflow en navegador a 1440, 900, 768, 390 y 320 px. El navegador integrado bloqueó el archivo local por política de URL y prohibió intentos alternativos de acceso. No se efectuó esa verificación.

## Tarea previa: Contacto y footer

**Estado:** implementado y revisado visualmente.

- `index.html`: WhatsApp, email, LinkedIn y GitHub ahora usan los destinos reales proporcionados por el usuario. WhatsApp abre `wa.me` con un saludo breve; email usa `mailto:`. Se quitaron los mensajes provisorios y se agregaron las descripciones solicitadas y flechas diagonales a las dos tarjetas.
- `styles.css`: se conserva la composición y el fondo. Las tarjetas tienen un ancho máximo de 480 px en desktop, una disposición de una columna desde 960 px y ancho útil completo en mobile. Se ajustaron alineación, alturas, tipografía secundaria, footer y estados hover, focus y active; las transiciones respetan movimiento reducido.
- No se modificaron Hero, Servicios, Proyectos, Cómo trabajo, Sobre mí, Light Droplets ni los JavaScript del portfolio.

## Verificación

- Chrome mediante emulación real de viewport a 1440, 900, 768, 390 y 320 px: capturas de Contacto/footer y sin overflow horizontal. Dos tarjetas de igual altura en cada ancho; 2 enlaces en Contacto y 3 en footer.
- Tab desde WhatsApp llega a email con `:focus-visible` y contorno de 2 px. `prefers-reduced-motion` reduce la transición de la flecha a 0.01 ms. No se registraron excepciones JavaScript.
- Las URL de GitHub y WhatsApp devolvieron HTTP 200. LinkedIn rechazó las solicitudes automatizadas con HTTP 999; se conservó exactamente la URL proporcionada por el usuario. No se verificó la entrega real de email ni la apertura de una conversación de WhatsApp.
- Se ejecutó el detector de Impeccable; sus avisos corresponden principalmente a estilos existentes fuera del alcance. `git diff --check` terminó sin errores.

## Pendientes

Los cuatro destinos fueron configurados; no faltan datos de contacto. Conviene abrir manualmente LinkedIn y WhatsApp en un navegador real antes de publicar. Revisar los cambios locales antes de commitear. La validación de scroll y rendimiento en un móvil físico sigue pendiente.
