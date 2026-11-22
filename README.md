# China 2027, del desierto al futuro

Documento de **decisión** de viaje: compara **8 rutas por 2 ventanas de fechas** (mayo y
agosto de 2027) para elegir antes de comprar los vuelos. Un solo archivo HTML que funciona
sin conexión: **[index.html](index.html)** (18 MB, 63 fotos, tipografía y vídeo de portada en Full HD
incrustados en base64).

Publicado con GitHub Pages: `https://alvaroalonsoorigen-eng.github.io/china/`

No es una guía cerrada. Cuando se elija ruta, ese itinerario se puede pasar a formato de
guía de viaje.

## Lo que compara

- **Mayo** (dom 2 a mar 11, 10 días en tierra, 8 de vacaciones) contra **agosto** (vuelo el
  sábado 7, aterrizaje el domingo 8 y vuelta el domingo 22: 14 días, 9 de vacaciones).
  Agosto rinde más porque el 15 de agosto de 2027 cae en domingo y en Aragón el festivo se
  traslada al lunes 16.
- **Ocho rutas**, cada una con itinerario propio en cada temporada: la ruta probada (calcada
  de un viaje real), el triángulo clásico, el clásico ampliado, la Ruta de la Seda, la China
  del sur, el gran zigzag, Seda y panda, y Taiwán, Avatar y el futuro.
- Los condicionantes que ordenan todo: Golden Week del 1 al 5 de mayo (calendario oficial
  publicado en noviembre de 2026), vuelos de vuelta de madrugada, trenes que salen a la
  venta 15 días antes, la Ciudad Prohibida sin taquilla desde 2026 y las Grutas de Mogao
  sin reserva online para extranjeros.

## El mapa

Cada itinerario lleva su mapa en **SVG generado en el build**, sin librerías, sin teselas y
sin conexión.

- El contorno sale de Natural Earth (`fuentes/china-natural-earth.geojson`), proyectado en
  cónica de Albers con paralelos 25 y 47, la habitual para China.
- Cada trayecto es un tramo con su forma según el medio: línea continua el tren, discontinua
  el avión y punteada el bus. Al pasar el ratón, sus kilómetros y su duración.
- **El trazado se enciende según el día que estás leyendo.** Cada día del itinerario sabe en
  qué tramo está, así que el mapa avanza contigo, marca la ciudad en la que estás y deja en
  gris lo que aún no has visto.
- Las ciudades son pulsables: llevan al día en el que llegáis a ellas.
- Los nombres se colocan en el build evitando solaparse entre ellos y con los círculos.

## Ordenador y móvil

- En ordenador (desde 1000 px), dos columnas: el itinerario se desplaza y el mapa queda fijo
  al lado.
- En móvil, barra inferior fija tipo app (Inicio, Rutas, Sitios y Plan) y mapa compacto
  para que no se coma la pantalla mientras se lee.
- Las pastillas de ruta y las galerías de fotos pasan a carrusel horizontal con anclaje.

## Regenerar

Requiere Python 3 con Pillow, y Node solo para que `mapa.py` lea los datos en `.js`.

```bash
cd fuentes
python3 mapa.py     # solo si se tocan rutas, tramos o coordenadas
python3 build.py    # escribe ../index.html
```

- `routes.js`: las 8 rutas en sus dos temporadas (16 itinerarios), con tramos (`legs`) y días.
- `places.js`: la galería de sitios. `seasons.js`: las dos ventanas y sus tablas.
- `plantilla-svg.html`: estructura, estilos y motor de la página.
- `imgs.json`: las 63 fotos ya recortadas y comprimidas, en base64.
- `notas-del-proyecto.md`: el contexto del viaje y los hallazgos que lo condicionan.

## Fotografías

63 imágenes de **Wikimedia Commons**, todas verificadas a ojo con hojas de contactos antes
de entrar. Aviso aprendido aquí: la búsqueda por texto de Commons devuelve resultados falsos
a menudo (salió una foto de Chile etiquetada como Dunhuang y gimnasia olímpica como aldea
miao). Hay que mirarlas una a una. El vídeo de portada es de Pexels.

## Aviso

Precios, horarios de vuelo y fechas de apertura son los patrones cargados a día de hoy; las
programaciones de 2027 se van confirmando. Los trenes chinos se compran en la app 12306
exactamente 15 días antes: ese es el cuello de botella real del viaje.
