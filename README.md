# Omar Becerra Sierra — Perfil profesional

Sitio personal en español de Omar Alexis Becerra Sierra: ingeniería de datos e investigación independiente en estadística robusta y análisis espacial.

## Desarrollo local

Sitio estático sin dependencias ni compilación. Ejecuta `python3 scripts/preview.py` y abre `http://localhost:8000`.

- `index.html`: perfil, experiencia, investigación, publicaciones, proyectos y formación.
- `assets/css/styles.css`: diseño adaptable, temas claro y oscuro e impresión.
- `assets/js/main.js`: navegación y preferencias de tema.
- `assets/cv/HVOmarEspanol.pdf`: CV actualizado en español aportado por el propietario.
- `404.html`: página de error en español.

## Criterios de contenido

El CV actualizado y el sitio sitúan BIKY.ai entre febrero de 2022 y febrero de 2025, y el enfoque en servicios financieros desde 2025. Los títulos de publicaciones y nombres de productos conservan su idioma original.

Se retiraron las cuatro certificaciones anteriores por falta de año de emisión y URL individual verificable. AWS Certified Data Engineer tampoco se publica: no figura en el CV actualizado ni hay evidencia de verificación en el repositorio. Para incorporar una sección de insignias, aportar para cada credencial el nombre exacto, año de emisión y enlace individual de Credly o Microsoft Learn. No usar enlaces genéricos como prueba de certificación.

El sitio y la descarga principal están en español por indicación del propietario. No se genera una versión inglesa del CV en esta revisión.

La investigación se presenta como independiente, sin atribuir una afiliación institucional actual. No se publican nombres de clientes de consultoría ni microdatos de seguridad ciudadana.

GitHub Pages sirve los archivos del repositorio. Mantener los DOI y perfiles académicos al actualizar contenido, y actualizar `sitemap.xml` después de cambios relevantes.

## SEO y rendimiento

- Título y descripción específicos, URL canónica, idioma español y encabezados por tema.
- Datos estructurados `ProfilePage` y `Person`, con identidad y perfiles académicos coherentes con el contenido visible.
- Metadatos Open Graph y Twitter con `assets/images/social-preview.png` (1200 × 630). Esta imagen se usa al compartir el enlace; no se descarga como parte del contenido de la página.
- `robots.txt` permite el rastreo y declara `sitemap.xml`; la página 404 conserva `noindex`.
- HTML estático: el contenido y la navegación son accesibles sin JavaScript. CSS y JavaScript locales, fuentes del sistema, sin bibliotecas, analítica ni solicitudes a terceros durante la carga.
- Se eliminó `site.webmanifest`: este perfil no necesita instalación como aplicación. También se retiró JavaScript sin uso para animaciones, retrato y seguimiento del desplazamiento del encabezado.

Se conservan `404.html`, `.nojekyll`, `robots.txt`, `sitemap.xml`, el favicon y el CV porque cumplen funciones de publicación, navegación o búsqueda. No se necesitan dependencias, carpetas de compilación ni archivos minificados duplicados.

### Verificación

Comprobación local en Chrome a 320, 390, 768 y 1440 píxeles: sin desbordamiento horizontal, menú móvil funcional, persistencia del tema y navegación sin JavaScript. Validación de enlaces internos, recursos HTTP, sintaxis JavaScript, XML y JSON-LD. Estas comprobaciones no equivalen a una medición de Core Web Vitals en producción.

Después de publicar, verificar la URL en Google Search Console y enviar el sitemap desde una cuenta con acceso a la propiedad. La configuración local no garantiza indexación ni una posición específica en resultados.

Referencias: [Guía SEO de Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) y [datos estructurados de perfiles](https://developers.google.com/search/docs/appearance/structured-data/profile-page).

La vista previa sirve siempre esta carpeta y desactiva la caché. Mantener la terminal abierta; detener con Ctrl+C. Si el puerto está ocupado, usar `python3 scripts/preview.py --port 8001`. Al cambiar CSS o JavaScript, actualizar su parámetro `?v=` en el HTML para renovar la caché de los navegadores.
