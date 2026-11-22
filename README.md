# China 2027, del desierto al futuro

Documento de viaje que compara **4 rutas** para quince días en China en agosto de 2027,
encajadas en los vuelos ya comprados: **Madrid a Pekín el sábado 31 de julio** y
**Shanghái a Barcelona el lunes 16 de agosto** (salida a las 00:40). Un solo archivo HTML:
**[index.html](index.html)** (39 MB, 211 fotos, tipografía y vídeo de portada en Full HD
incrustados en base64).

Publicado con GitHub Pages: `https://alvaroalonsoorigen-eng.github.io/china/`

## Las rutas

Todas entran por Pekín y salen por Shanghái, con 16 jornadas del sábado 31 al domingo 15:

- **Ruta principal, Taiwán, Avatar y el futuro**: Pekín, Taipéi y Jiufen, Shenzhen,
  Fenghuang, Furong, Zhangjiajie, Xi'an, Shanghái y Suzhou.
- **Ruta 1, la ruta probada**: los diez destinos de un viaje real, de Pekín a Shanghái por
  Xi'an, Chengdú, Chongqing, Hunan y el valle de Wangxian.
- **Ruta 2, el triángulo clásico**: Pekín, Datong, Xi'an, Huangshan, Hangzhou, Suzhou y
  Shanghái.
- **Ruta 3, el clásico ampliado**: Pekín, Xi'an, Chengdú, Leshan, Longji, Yangshuo,
  Shenzhen y Shanghái.

Los condicionantes que ordenan todo: diez días de vacaciones para quince en China (el
lunes 16 es festivo en Aragón), vacaciones escolares chinas todo agosto, calor húmedo en
las grandes ciudades, trenes que salen a la venta 15 días antes y la Ciudad Prohibida sin
taquilla, con reserva siete días antes y cerrada los lunes.

## El mapa

Cada itinerario lleva su mapa en **SVG generado en el build** sobre un **relieve de
Natural Earth** incrustado en la propia guía, que funciona siempre, también sin conexión.
Al acercar en la web publicada se añade el detalle de **OpenStreetMap**.

- Proyección Mercator web, la misma de las teselas, para que cada ciudad caiga en su sitio.
- Cada trayecto tiene su forma según el medio: línea continua el tren, discontinua el avión
  y punteada el bus. Al pasar el ratón, sus kilómetros y su duración.
- **El trazado se enciende según el día que estás leyendo** y marca la ciudad en la que
  estás. Las ciudades son pulsables: llevan al día en el que llegáis a ellas.
- **Pantalla completa** con zoom (rueda, pellizco o botones) y arrastre.

## Ordenador y móvil

- En ordenador (desde 1000 px), dos columnas: el itinerario se desplaza y el mapa queda fijo
  al lado.
- En móvil, barra inferior fija tipo app (Inicio, Rutas, Sitios y Plan) y mapa compacto.

## Regenerar

Requiere Python 3 con Pillow, y Node solo para que `mapa.py` lea los datos en `.js`.

```bash
cd fuentes
python3 mapa.py     # solo si se tocan rutas, tramos o coordenadas
python3 build.py    # escribe ../index.html
```

- `routes.js`: las 4 rutas, con tramos (`legs`) y días.
- `places.js`: la galería de sitios. `seasons.js`: fechas, vuelos y lista de tareas.
- `plantilla-svg.html`: estructura, estilos y motor de la página y del mapa.
- `imgs.json`: las 63 fotos ya recortadas y comprimidas, en base64.
- `hero_video.swift`: genera el vídeo de portada con las herramientas de vídeo de macOS.
- `fondo_mapa.swift`: genera `fondo_mapa.jpg`, el relieve del mapa, desde Natural Earth.

## Fotografías

63 imágenes de **Wikimedia Commons**, todas verificadas a ojo con hojas de contactos antes
de entrar. Aviso aprendido aquí: la búsqueda por texto de Commons devuelve resultados falsos
a menudo. El vídeo de portada es de Pexels. Mapa: relieve de Natural Earth y © colaboradores de
OpenStreetMap.

## Aviso

Horarios de tren y frecuencias de vuelos interiores son los patrones cargados a día de hoy;
las programaciones de 2027 se van confirmando. Los trenes chinos se compran en la app 12306
exactamente 15 días antes: ese es el cuello de botella real del viaje.
