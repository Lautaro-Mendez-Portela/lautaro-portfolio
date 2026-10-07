# ESPECIFICACIÓN MAESTRA DEL PORTFOLIO

## 1. Objetivo general

El portfolio está pensado principalmente para vender servicios de desarrollo web y sistemas personalizados a negocios y clientes no técnicos.

Como objetivo secundario debe seguir funcionando como portfolio profesional para recruiters y empresas.

El sitio no debe parecer un CV técnico ni un portfolio genérico de programador.

Debe transmitir:

- profesionalismo;
- calidad;
- confianza;
- diseño cuidado;
- capacidad para desarrollar productos completos;
- orientación a problemas reales de negocio.

La tecnología debe servir como respaldo, no como protagonista del mensaje comercial.

---

# 2. Dirección visual

La identidad general será:

- oscura;
- cinematográfica;
- premium;
- tecnológica;
- editorial;
- moderna;
- sobria.

Evitar:

- estética gamer;
- exceso de neon;
- exceso de glassmorphism;
- fondos llenos de gradientes;
- efectos innecesarios;
- tarjetas genéricas repetidas;
- interfaces sobrecargadas;
- estética típica de portfolio de desarrollador con terminales y código por todos lados.

El diseño debe tener mucho espacio, jerarquía tipográfica clara y grandes elementos visuales.

---

# 3. Paleta

Utilizar como base:

Fondo principal:
#050505

Superficies secundarias:
#0D0D0F

Bordes suaves:
#242428

Texto principal:
#F5F5F2

Texto secundario:
#A3A3A8

Acento:
#69C6FF

El cyan debe utilizarse de forma muy puntual.

Ejemplos:

- estados hover;
- pequeños detalles;
- puntos del timeline;
- enlaces;
- líneas;
- highlights;
- pequeños elementos visuales.

No convertir toda la página en azul.

---

# 4. Tipografía

Títulos principales:

Clash Display

Textos generales:

General Sans

Usar Clash Display principalmente en:

- headings grandes;
- títulos de sección;
- elementos editoriales importantes.

Usar General Sans en:

- párrafos;
- navegación;
- botones;
- labels;
- textos secundarios;
- UI general.

No utilizar Clash Display en grandes cantidades de texto pequeño.

Si estas fuentes todavía no están disponibles en el proyecto, incorporarlas correctamente.

Usar fallbacks adecuados.

No romper el proyecto simplemente para instalar tipografías.

---

# 5. Movimiento e interacción

Regla general:

El movimiento debe ser sutil y secundario respecto al contenido.

Utilizar:

- fade;
- desplazamientos verticales pequeños;
- microinteracciones;
- movimientos de 10–20px;
- escalas pequeñas;
- transiciones cuidadas.

Hover aproximado máximo:

scale entre 1.01 y 1.03 cuando tenga sentido.

Evitar:

- rebotes;
- giros;
- animaciones exageradas;
- movimientos agresivos;
- elementos siguiendo directamente el cursor.

Respetar siempre:

prefers-reduced-motion

En dispositivos sin hover no depender de interacciones con mouse.

---

# 6. HERO

El Hero será la primera impresión de la página y debe tener gran presencia visual.

## Altura

Desktop:
100vh

Mobile:
100svh

Debe ocupar prácticamente todo el primer viewport.

---

## Video

El video definitivo del Hero se llama exactamente: 1080p.mp4.
Buscar ese archivo dentro del proyecto y utilizarlo como fondo del Hero.
Si no está en una ubicación adecuada para servirlo públicamente, reubicarlo o referenciarlo correctamente sin duplicarlo innecesariamente.

El video debe:

- reproducirse automáticamente;
- estar muted;
- hacer loop;
- no mostrar controles;
- utilizar playsinline;
- cubrir correctamente el viewport;
- usar object-fit: cover;
- conservar una buena composición responsive.

El video ya fue preparado externamente con efecto ping-pong.

No debes implementar lógica JavaScript para invertirlo.

No modificar el archivo de video.

El video debe permanecer visualmente estático respecto al scroll.

NO implementar parallax.

NO implementar zoom con scroll en esta etapa.

Existe como posible experimento futuro un zoom cinematográfico muy suave desde aproximadamente scale(1) hasta scale(1.04), pero NO debe implementarse ahora.

---

## Overlay

Colocar una capa oscura MUY SUAVE sobre el video.

El objetivo es únicamente mejorar la legibilidad.

No debe apagar el video.

Debe ser sencillo modificar o eliminar posteriormente este overlay.

Puede ser ligeramente más oscuro en la zona izquierda donde estará el contenido.

---

## Fade inferior

Este punto es importante.

El Hero debe fundirse progresivamente hacia negro en su parte inferior.

No debe existir un corte visible entre video y fondo negro.

El fade debería comenzar aproximadamente dentro del último tercio del Hero.

Al llegar al final debe convertirse completamente en:

#050505

La próxima sección utilizará ese mismo color, generando continuidad visual.

---

# 7. NAVBAR DEL HERO

La navbar debe ser pequeña y discreta.

No utilizar una navbar enorme ni una cápsula flotante grande.

Estructura:

Izquierda:

L

Derecha:

Servicios
Proyectos
Sobre mí
Contacto

Características:

- texto blanco;
- tipografía pequeña;
- aproximadamente 14–15px;
- altura aproximada entre 56 y 64px;
- fondo transparente inicialmente;
- diseño minimalista.

La marca debe ser únicamente:

L

No utilizar:

LM
LM.
nombre completo

Al hacer scroll la navbar podrá adquirir:

- fondo negro translúcido;
- blur suave;
- borde muy sutil si ayuda a separar.

Debe sentirse elegante y discreta.

Mobile:

convertirla en una navegación compacta adecuada.

No implementar un menú mobile visualmente pesado.

---

# 8. CONTENIDO DEL HERO

Todo el contenido debe estar alineado a la izquierda.

No centrar horizontalmente el Hero.

El bloque debe ocupar aproximadamente:

40–45% del ancho útil en desktop.

Debe estar aproximadamente centrado verticalmente pero ligeramente desplazado hacia abajo.

Como referencia:

el inicio del bloque puede encontrarse alrededor del 38–42% de la altura.

No interpretar estos porcentajes como valores rígidos si visualmente requieren ajustes.

---

## Título

Texto exacto:

Desarrollá el sistema que tu negocio necesita.

Utilizar:

Clash Display

Debe tener mucha presencia.

Referencia de tamaño:

Desktop:
72–88px aproximadamente

Tablet:
56–64px aproximadamente

Mobile:
40–48px aproximadamente

Debe ajustarse de forma fluida usando técnicas responsive apropiadas como clamp() si corresponde.

Intentar que en desktop visualmente funcione alrededor de dos líneas, por ejemplo:

Desarrollá el sistema
que tu negocio necesita.

No forzar saltos de línea que rompan mal en otros breakpoints.

Peso visual aproximado:

600–700 según cómo renderice Clash Display.

Line-height relativamente compacto.

Texto blanco/off-white.

No utilizar gradientes en el título.

---

## Subtítulo

Texto exacto:

Sitios web, sistemas de gestión y soluciones digitales diseñadas a medida para simplificar procesos y hacer crecer tu negocio.

Utilizar General Sans.

Texto secundario claro.

Mantener un ancho menor que el título.

Buena legibilidad.

No utilizar un tamaño excesivamente pequeño.

---

# 9. CTA DEL HERO

Debajo del subtítulo habrá dos acciones.

CTA principal:

Hablemos de tu proyecto

CTA secundario:

Ver proyectos

---

## CTA principal

Estilo:

- fondo claro;
- texto oscuro;
- padding generoso;
- bordes redondeados sin convertirlo necesariamente en una píldora exagerada;
- pequeño icono o flecha hacia la derecha.

Hover:

- micro escala;
- movimiento muy suave;
- cambio sutil de sombra o brillo.

Debe dirigir posteriormente a:

#contacto

No crear todavía la sección Contacto completa.

---

## CTA secundario

Estilo:

- más liviano;
- transparente;
- texto blanco;
- visualmente secundario;
- puede incluir flecha.

Debe dirigir posteriormente a:

#proyectos

No crear todavía la sección Proyectos completa.

---

# 10. ANIMACIÓN DE ENTRADA DEL HERO

La entrada debe ocurrir solamente al cargar la página.

Secuencia:

1. aparece el título;
2. aparece el subtítulo;
3. aparecen los CTA.

Utilizar:

fade + pequeño desplazamiento vertical.

Duración total aproximada:

700–1000ms

Mantener la animación elegante.

No utilizar:

- efecto máquina de escribir;
- rebotes;
- letras entrando individualmente;
- animaciones exageradas.

Si prefers-reduced-motion está activo, reducir o eliminar estas animaciones.

---

# 11. ESTRUCTURA FUTURA DEL PORTFOLIO

NO implementar estas secciones en la Etapa 1.

Esta información existe únicamente para que entiendas la visión global del proyecto y no tomes decisiones en el Hero que entren en conflicto con lo que vendrá después.

---

## TRANSICIÓN POST HERO

Después del Hero aparecerá una transición sobre negro con la frase:

Soluciones digitales pensadas para resolver problemas reales.

No implementar todavía.

---

# 12. SERVICIOS

La sección Servicios tendrá diseño editorial.

No utilizar tres cards genéricas iguales.

Habrá tres bloques grandes alternados.

01 — Sitios web profesionales

Texto:

Diseños modernos, rápidos y adaptados a todos los dispositivos para que tu negocio tenga una presencia online clara, confiable y preparada para convertir visitas en clientes.

Composición:

texto izquierda / visual derecha.

Visual pendiente:

landing comercial premium dentro de notebook u otro mockup similar.

No inventar todavía el asset final.

---

02 — Sistemas de gestión a medida

Texto:

Digitalizá y organizá procesos clave de tu negocio con herramientas diseñadas específicamente para tu forma de trabajar.

Composición:

visual izquierda / texto derecha.

No utilizar aquí el proyecto real de reservas como case study.

El visual puede ser genérico o inspirado en sistemas de gestión.

---

03 — E-commerce e integraciones

Texto:

Vendé online con una tienda rápida, clara y preparada para conectarse con pagos, productos, clientes y las herramientas que tu negocio necesita.

Composición:

texto izquierda / visual derecha.

Visual:

e-commerce, producto, checkout o tienda.

No llenar la sección de logos técnicos.

---

# 13. PROYECTOS

La sección Proyectos comenzará con un case study destacado.

Proyecto principal:

Sistema de reservas para canchas

No utilizar en ningún lugar el nombre comercial:

Megaestadio

Este proyecto todavía no fue vendido al cliente asociado a esa marca.

Presentarlo de manera genérica como producto/caso de estudio.

Debe mostrar:

- qué problema resuelve;
- gestión de reservas;
- disponibilidad;
- clientes;
- pagos/comprobantes;
- roles;
- mockups reales del producto.

Debe ser importante pero NO ocupar todo el viewport.

Referencia aproximada:

65–75% del ancho útil.

Altura visual aproximada:

500–650px

Después habrá proyectos secundarios.

Cards visuales con imagen grande.

Desktop:

2 columnas.

Mobile:

1 columna.

Proyectos actuales previstos:

- E-Commerce Full Stack
- AI PDF Chat

Puede existir un tercer proyecto únicamente si aporta valor real.

No añadir proyectos ficticios para llenar espacio.

---

# 14. CÓMO TRABAJO

Título:

De una idea a una solución real.

Subtítulo:

Un proceso claro, de principio a fin.

Diseño:

timeline horizontal premium en desktop.

En mobile:

timeline vertical.

Pasos:

01 — Entendemos la idea

Analizamos qué necesitás, qué problema querés resolver y cuáles son los objetivos.

02 — Diseñamos la solución

Definimos estructura, funcionalidades y experiencia antes de desarrollar.

03 — Desarrollo y pruebas

Construyo la solución, la adapto a distintos dispositivos y pruebo que todo funcione correctamente.

04 — Publicación y soporte

Ponemos el proyecto online y queda preparado para mejoras y mantenimiento.

Utilizar números grandes, línea fina y pequeños visuales.

El color cyan podrá utilizarse en pequeños detalles del timeline.

---

# 15. SOBRE MÍ

No utilizar fotografía por ahora.

Título:

Sobre mí

No agregar una frase comercial gigante adicional.

Texto base:

Soy desarrollador Full Stack y trabajo en sitios web, sistemas a medida y soluciones digitales, buscando que cada proyecto sea claro, útil y fácil de usar.

Datos breves:

Full Stack
La Plata / Remoto
Webs · Sistemas · E-commerce

Diseño:

editorial, simple y limpio.

---

# 16. CONTACTO

Título:

¿Tenés un proyecto en mente? Hablemos.

Texto:

Contame qué necesitás y vemos juntos la mejor forma de llevarlo a la realidad.

CTA principal:

icono de WhatsApp
Escribime por WhatsApp

CTA secundario:

icono de email
Enviarme un email

Debe resultar evidente para el usuario que el primer botón abre WhatsApp y el segundo email.

No utilizar un formulario de contacto por ahora.

Footer:

Email
LinkedIn
GitHub

Los enlaces reales se proporcionarán más adelante si no están disponibles actualmente.

No inventarlos.

---

# 17. RESPONSIVE GENERAL

La página debe diseñarse correctamente para:

- desktop;
- notebook;
- tablet;
- mobile.

No simplemente reducir tamaños.

Adaptar las composiciones.

En mobile:

- Hero sigue siendo protagonista;
- navegación compacta;
- servicios se apilan;
- proyectos pasan a una columna;
- timeline pasa a vertical;
- evitar interacciones dependientes del mouse;
- mantener legibilidad y espacio suficiente.

Evitar overflow horizontal.

---

# 18. ACCESIBILIDAD

Mantener:

- HTML semántico;
- contraste adecuado;
- focus visible;
- navegación por teclado;
- alt apropiados;
- botones y links correctamente identificables;
- prefers-reduced-motion.

No sacrificar accesibilidad por estética.

---

# 19. PERFORMANCE

Priorizar especialmente el rendimiento del primer viewport.

El Hero utiliza video, por lo que debe manejarse con cuidado.

Evitar cargar assets innecesarios.

Utilizar lazy loading para imágenes fuera del primer viewport cuando corresponda.

No introducir librerías pesadas solamente para efectos simples.

Preferir CSS y APIs nativas cuando sea razonable.

Evitar listeners costosos de scroll.

No introducir WebGL ni 3D.

---

# 20. ASSETS

Actualmente el único asset definitivo disponible es el video del Hero, cuyo nombre exacto es: 1080p.mp4.

El resto de imágenes definitivas todavía NO están disponibles.

Por lo tanto:

NO inventar imágenes finales.

NO descargar imágenes aleatorias.

NO llenar las secciones con stock definitivo.

Cuando se implementen las secciones futuras, preparar placeholders o contenedores correctamente dimensionados para reemplazarlos posteriormente.

---

# PLAN DE IMPLEMENTACIÓN

## ETAPA 1 — Base visual + Hero

Esta es la ÚNICA etapa que debes ejecutar ahora.

Incluye:

- inspección inicial del proyecto;
- integración del sistema de colores;
- integración de tipografías;
- estilos globales necesarios;
- navbar;
- video Hero;
- overlay;
- fade a negro;
- contenido;
- CTAs;
- animación inicial;
- responsive del Hero;
- accesibilidad correspondiente;
- prefers-reduced-motion;
- comportamiento básico de navbar al scroll.

No implementar ninguna sección completa posterior.

El final del Hero debe quedar preparado para fundirse naturalmente con fondo #050505.

---

## ETAPA 2 — Transición + Servicios

NO ejecutar todavía.

Incluye:

- frase post Hero;
- sección Servicios;
- 3 bloques editoriales;
- responsive;
- placeholders visuales.

---

## ETAPA 3 — Proyectos

NO ejecutar todavía.

Incluye:

- case study Sistema de reservas para canchas;
- proyectos secundarios;
- estructura para capturas reales;
- responsive.

---

## ETAPA 4 — Cómo trabajo + Sobre mí + Contacto

NO ejecutar todavía.

Incluye:

- timeline;
- Sobre mí;
- WhatsApp;
- email;
- footer.

---

## ETAPA 5 — QA responsive + accesibilidad + performance

NO ejecutar todavía.

Auditoría global de:

- desktop;
- tablet;
- mobile;
- navegación;
- teclado;
- accesibilidad;
- performance;
- video;
- assets;
- scroll;
- reduced motion.

---

## ETAPA 6 — Polish final

NO ejecutar todavía.

Revisión visual global:

- espaciados;
- jerarquía;
- consistencia;
- microinteracciones;
- hover;
- transiciones;
- alineaciones;
- detalles visuales.

No cambiar la dirección de diseño sin autorización.

---

# REGLAS PARA LA ETAPA 1

Antes de modificar archivos:

1. inspeccioná el proyecto;
2. identificá los componentes y estilos actuales;
3. identificá si ya existe un Hero o navbar reutilizable;
4. buscá el video disponible;
5. revisá dependencias;
6. evitá instalar dependencias nuevas si no hacen falta.

Conservá cualquier funcionalidad existente que no entre en conflicto con el nuevo diseño.

No reescribas toda la aplicación si no es necesario.

No elimines archivos o componentes sin justificarlo.

No inventes contenido fuera de esta especificación.

No implementes ninguna de las siguientes secciones completas:

Servicios
Proyectos
Cómo trabajo
Sobre mí
Contacto

No avances a Etapa 2 aunque la Etapa 1 termine antes de lo esperado.

---

# VALIDACIONES DE LA ETAPA 1

Antes de dar por terminada la etapa, verificar como mínimo:

- la aplicación compila;
- no hay errores relevantes en consola;
- el Hero ocupa correctamente el viewport;
- el video cubre el Hero;
- el video funciona con autoplay muted loop playsinline;
- no hay controles visibles;
- el texto tiene buena legibilidad;
- el overlay no apaga excesivamente el video;
- el fade termina realmente en negro;
- la navbar funciona correctamente;
- el Hero se adapta a mobile;
- no existe overflow horizontal;
- los CTA son accesibles;
- prefers-reduced-motion funciona;
- las fuentes tienen fallback;
- no se agregaron dependencias innecesarias.

Si el proyecto ya tiene tests/lint/build configurados, ejecutar los checks apropiados.

---

# INFORME OBLIGATORIO AL FINALIZAR

Cuando termines, DETENETE.

No avances a Etapa 2.

Entregame un informe con:

- resumen de lo implementado;
- archivos creados;
- archivos modificados;
- componentes reutilizados;
- decisiones técnicas tomadas;
- ubicación del video utilizada;
- comportamiento responsive implementado;
- comportamiento de las animaciones;
- comportamiento con prefers-reduced-motion;
- validaciones realizadas;
- resultado de build/lint/tests si existen;
- problemas encontrados;
- cosas que todavía necesitan assets o información del usuario;
- cualquier desviación respecto a esta especificación y el motivo.

Finalmente indicá claramente:

ETAPA 1 COMPLETADA

o, si existe algún bloqueo:

ETAPA 1 BLOQUEADA

explicando exactamente qué falta.

No continúes trabajando después de entregar ese informe.

