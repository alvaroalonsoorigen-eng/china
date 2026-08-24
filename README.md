# China 2027, del desierto al futuro

Documento de **decisión** de viaje: compara **6 rutas por 2 ventanas de fechas** (mayo y
agosto de 2027) para elegir antes de comprar los vuelos. Un solo archivo HTML que funciona
sin conexión: **[index.html](index.html)** (5 MB, 55 fotos incrustadas en base64).

Publicado con GitHub Pages: `https://alvaroalonsoorigen-eng.github.io/china/`

No es una guía cerrada. Cuando se elija ruta, ese itinerario se puede pasar a formato de
guía de viaje.

## Lo que compara

- **Mayo** (sáb 1 → mar 11, 10 días en tierra, 8 de vacaciones) contra **agosto**
  (dom 15 → sáb 28, 14 días, 9 de vacaciones). Agosto rinde más porque el 15 de agosto de
  2027 cae en domingo y en Aragón el festivo se traslada al lunes 16.
- **Seis rutas**, cada una con itinerario propio en cada temporada: la Ruta de la Seda, la
  China del Sur, el Gran Zigzag, Seda y Panda, el Triángulo Clásico y el Clásico Ampliado.
- Los condicionantes que ordenan todo: Golden Week del 30 de abril al 6 de mayo, vuelos de
  vuelta de madrugada, trenes que salen a la venta 15 días antes, la Ciudad Prohibida sin
  taquilla desde 2026 y las Grutas de Mogao sin reserva online para extranjeros.

## El mapa

Cada itinerario lleva su mapa en **SVG generado en el build**, sin librerías, sin teselas y
sin conexión. Antes esto era Leaflet con teselas de un CDN, así que el documento no se podía
mirar sin internet y el mapa no tenía relación con lo que se estaba leyendo.

Ahora:

- El contorno sale de Natural Earth (`fuentes/china-natural-earth.geojson`), proyectado en
  cónica de Albers con paralelos 25 y 47, la habitual para China.
- Cada trayecto es un tramo con su forma según el medio: línea continua el tren, discontinua
  el avión y punteada el bus. Al pasar el ratón, sus kilómetros y su duración.
- **El trazado se enciende según el día que estás leyendo.** Cada día del itinerario sabe en
  qué tramo está, así que el mapa avanza contigo, marca la ciudad en la que estás y deja en
  gris lo que aún no has visto.
- Las ciudades son pulsables: llevan al día en el que llegáis a ellas.
- Los nombres se colocan en el build evitando solaparse entre ellos y con los círculos.

## En el móvil

- El mapa **se queda fijo** debajo de la barra de temporada y **se contrae** a una tira con
  el día actual, su título y una barra de avance de la ruta. Se abre y se cierra tocándola,
  y vuelve solo a su sitio al salir del itinerario.
- La tira mide la barra de temporada con un `ResizeObserver`, así que se coloca justo debajo
  aunque la barra cambie de alto al girar el móvil.
- Las pastillas de ruta y las galerías de fotos pasan a carrusel horizontal con anclaje, en
  vez de desbordar la pantalla.
- Áreas de toque de 30 unidades en las ciudades del mapa, nombres más grandes y días con el
  actual resaltado.

## Regenerar

Requiere Python 3 y Node (solo para leer los datos en `.js`).

```bash
cd fuentes
python3 mapa.py     # recalcula contorno, tramos por día y posición de los nombres
python3 build.py    # escribe ../index.html
```

- `routes.js`: los 12 itinerarios, con sus tramos (`legs`) y sus días.
- `places.js`: la galería de sitios. `seasons.js`: las dos ventanas y sus tablas.
- `imgs.json`: las 55 fotos ya recortadas y comprimidas, en base64.
- `plantilla.html`: la plantilla original con Leaflet, se conserva como referencia.
- `parche_mapa.py`: convierte esa plantilla en `plantilla-svg.html`, que es la que se usa.
- `notas-del-proyecto.md`: el contexto del viaje y los hallazgos que lo condicionan.

## Fotografías

55 imágenes de **Wikimedia Commons**, recortadas a 800×520, todas verificadas a ojo con
hojas de contactos antes de entrar. Aviso aprendido aquí: la búsqueda por texto de Commons
devuelve resultados falsos a menudo (salió una foto de Chile etiquetada como Dunhuang y
gimnasia olímpica como aldea miao), y la búsqueda por categoría ordena por tamaño de archivo
y saca escaneos raros. Hay que mirarlas una a una.

## Aviso

Precios, horarios de vuelo y fechas de apertura son los patrones cargados a día de hoy; las
programaciones de 2027 se confirman a lo largo de 2026. Los trenes chinos se compran en la
app 12306 exactamente 15 días antes: ese es el cuello de botella real del viaje.
