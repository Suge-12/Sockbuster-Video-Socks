# Sockbuster Video & Socks

**Prototipo académico de comercio electrónico** — Evaluación Sumativa 03, Modelamiento de Soluciones Informáticas (TI3025), Punta Arenas.

**Autores:** Juan Pablo Barrientos Otero y Benjamin Leiva.

## Sitio web publicado

**URL GitHub Pages:** `LINK: https://suge-12.github.io/Sockbuster-Video-Socks/`

> Reemplazar el enlace anterior por la URL real una vez activado GitHub Pages. La guía exige enviar solo la URL del repositorio público, cuyo README debe incluir el enlace al sitio.

## ¿Qué incluye?

- `index.html`: portada retro VHS y créditos de estudiantes.
- `catalogo.html`: catálogo de nueve productos ilustrativos, filtros, reseñas, carrito, checkout simulado y comprobante con código SB.
- `admin.html`: panel de administración **demostrativo** que modifica productos, precios y stock solo en el navegador. Permite exportar un `productos.json` actualizado.
- `diagramas.html`: las cinco imágenes UML originales y descripciones técnicas del modelo 4+1.
- `documentacion.html`: análisis de requisitos, actores, modelo de datos, trazabilidad y pruebas conforme a la guía.
- `data/productos.json`: catálogo base de lectura pública.
- `js/store-local.js`: lectura de JSON y persistencia local.
- `Documentacion_Proyecto/`: guía suministrada y fuentes PlantUML editables que describen el despliegue estático.

## Arquitectura de esta versión

```text
GitHub Pages (HTTPS)
├── HTML, CSS, JS, fotografías ilustrativas y UML
└── data/productos.json (solo lectura)

Navegador de cada visitante
└── localStorage
    ├── perfil ficticio (nombre o apodo)
    ├── carrito
    ├── pedidos simulados
    ├── reseñas locales
    └── inventario local editable
```

**No hay Node.js, dependencias npm, API, SQL ni servicios externos.** El navegador no envía pedidos ni datos personales a ningún servidor del proyecto: `localStorage` conserva los datos solo en ese dispositivo y origen web.

## Requisitos y limitaciones

| Requisito | Estado | Qué demuestra / qué falta |
|---|---|---|
| RF01 Catálogo | Implementado como demo | Filtros, productos y tallas desde JSON; el stock no es compartido |
| RF02 Carrito y pedido | Simulado localmente | Cantidades, totales y código SB; no hay pago ni pedido real |
| RF03 Administración | **Parcial** | Edita stock, precio, modelos y temática en localStorage; no hay administración protegida ni cambios sincronizados |
| RF04 Reseñas | **Parcial** | Califica y comenta con apodo ficticio; no hay clientes registrados auténticos ni reseñas compartidas |
| RNF01 Hosting cloud y menos de 2 s | Pendiente de medir | GitHub Pages ofrece hosting estático; verificar URL y medir carga después de publicar |
| RNF02 HTTPS + JWT | **Parcial / JWT no cumplido** | GitHub Pages puede servir HTTPS; sin backend no se autentican administradores con JWT |

Esta versión sirve para exponer y demostrar los flujos y las vistas UML, pero **no cumple íntegramente RF03, RF04 ni RNF02** de la rúbrica. Los diagramas originales adjuntos representan una arquitectura objetivo con backend; las fuentes `.puml` actualizadas distinguen la implementación local.

## Cómo publicar en GitHub Pages

1. Crea un repositorio público en GitHub llamado `Sockbuster-Video-Socks`.
2. Sube **el contenido de esta carpeta**, de modo que `index.html`, `catalogo.html`, `diagramas.html`, `documentacion.html`, `admin.html`, `data/`, `css/`, `js/` y `assets/` queden en la raíz del repositorio. No subas una carpeta contenedora extra.
3. En el repositorio abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**; elige **main** y **/(root)**; guarda.
5. Espera la publicación y abre la URL `https://TU-USUARIO.github.io/Sockbuster-Video-Socks/`.
6. Prueba el catálogo, carrito, reseñas, panel admin y diagramas. Reemplaza el enlace `PENDIENTE` de este README por la URL real.
7. Entrega en la plataforma académica la URL del **repositorio público**.

No necesitas configurar Render, una base de datos, claves de API ni variables de entorno.

## Cómo probar antes de publicar

La carga de `data/productos.json` mediante `fetch()` requiere un servidor HTTP. No basta abrir `index.html` haciendo doble clic desde `file://`.

Si tienes Python instalado puedes ejecutar `python -m http.server 8000` desde esta carpeta y abrir `http://localhost:8000`. Esto es solo una herramienta opcional para probar, no una dependencia de la web publicada. También puedes subirla directamente a GitHub Pages y probarla allí.

## Editar el catálogo global desde JSON

El panel `admin.html` permite modificar los productos y descargar `productos.json`. Para hacer visibles esos cambios a **todos** los visitantes:

1. Descarga el JSON exportado por el panel.
2. Reemplaza manualmente `data/productos.json` en el repositorio de GitHub.
3. Espera que GitHub Pages publique la nueva versión.

Los visitantes que ya tengan un inventario modificado en su `localStorage` deberán pulsar **Restablecer JSON** en el panel para cargar el archivo nuevo. El panel no tiene autenticación; no debe tratarse como una administración segura.

## Rendimiento y entrega

Las fotografías ilustrativas están optimizadas en WebP y el proyecto no carga fuentes externas. El objetivo de carga inicial menor a dos segundos debe comprobarse tras publicar la página; depende del dispositivo y la red.

## Autores

- **Juan Pablo Barrientos Otero** — Ingeniería en Informática
- **Benjamin Leiva** — Ingeniería en Informática
