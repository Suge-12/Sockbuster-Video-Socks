# Entregables y estado de cumplimiento

**Evaluación Sumativa 03 — TI3025**  
**Autores:** Juan Pablo Barrientos Otero y Benjamin Leiva

## Páginas

- `index.html` — Presentación, marca y créditos.
- `catalogo.html` — Productos de `data/productos.json`, filtros, carrito, pago simulado y reseñas locales.
- `diagramas.html` — Cinco vistas UML originales y explicación 4+1.
- `documentacion.html` — Dossier de requisitos, casos de uso, trazabilidad y pruebas.
- `admin.html` — Demostración de gestión de productos mediante `localStorage`.

## Rúbrica

| Requisito | Cobertura de la versión GitHub Pages |
|---|---|
| RF01 | Catálogo con filtros funcionales, imágenes ilustrativas, precios y tallas; stock local |
| RF02 | Carrito, cantidades, datos y código de pedido simulado; localStorage |
| RF03 | Panel de edición local y exportación JSON, sin login seguro ni inventario centralizado — parcial |
| RF04 | Comentarios y estrellas locales con alias ficticio, sin usuarios registrados reales — parcial |
| RNF01 | Hosting GitHub Pages cuando se publique; carga menor a 2 s pendiente de medir |
| RNF02 | HTTPS al publicar, sin JWT; requisito de autenticación administrativa no cumplido |

## Diagramas

La web muestra las imágenes originales adjuntas por el equipo, que reflejan un diseño objetivo con API y base de datos. Las fuentes PlantUML `03`, `04` y `05` se actualizaron para explicar la arquitectura real estática. Se recomienda renderizarlas y sustituir las imágenes originales si el profesor exige correspondencia exacta.

## Pendiente antes de entregar

- [x] Nombres de Juan Pablo Barrientos Otero y Benjamin Leiva.
- [x] Tres páginas obligatorias y documentación adicional.
- [x] Catálogo JSON y simulación local sin backend.
- [x] Cinco fuentes PlantUML incluidas.
- [ ] Subir a repositorio GitHub público.
- [ ] Publicar con GitHub Pages.
- [ ] Poner el enlace real del sitio en `README.md`.
- [ ] Comprobar rendimiento menor a 2 segundos.
- [ ] Si se busca la puntuación máxima, implementar una autenticación y persistencia real para RF03, RF04 y RNF02.
