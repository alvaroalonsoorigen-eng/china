# China 2027 · Del desierto al futuro

Documento de **decisión** de viaje (no es una guía de viaje cerrada). Compara **6 rutas** por **2 ventanas de fechas** y sirve para elegir antes de comprar vuelos.

> Ojo: esto **no usa el motor `TRIP`** de `_PLANTILLA`. Ese motor es para un viaje ya decidido, con itinerario único. Aquí hacen falta 12 itinerarios comparables y un selector de temporada, así que es un archivo aparte. Cuando se elija ruta, ese itinerario sí se puede volcar al formato `TRIP`.

## Qué es

`index.html` de ~5 MB, un solo archivo, con **55 fotos incrustadas en base64**. Se envía por WhatsApp o correo y se abre sin nada más. Solo el mapa necesita internet (Leaflet y las teselas vienen de CDN).

## Datos del viaje

- **Dos personas**, 32 años, ritmo intenso, sin techo de presupuesto.
- **Salida** desde Madrid o Barcelona; viven en Zaragoza (AVE 1 h 20 / 1 h 30).
- **Restricción dura**: el viernes solo pueden volar **después de las 20:00**. Como los directos España-China salen a mediodía, eso obliga a escala el viernes o directo el sábado.
- **Deseos**: Guerreros de Terracota, Shenzhen tecnológico, minorías étnicas, Ruta de la Seda, Gran Muralla (innegociable), Zhangjiajie, pandas.

## Las dos ventanas

| | Mayo | Agosto |
|---|---|---|
| Fechas | sáb 1 → mar 11 may 2027 | dom 15 → sáb 28 ago 2027 |
| Días en China | 10 | 14 |
| Días de vacaciones | 8 | 9 |
| Rinde | 1,25 | **1,56** |

**Agosto rinde más** porque el 15 de agosto de 2027 cae en domingo y en Aragón el festivo **se traslada al lunes 16**. Verificado en el calendario laboral de Zaragoza 2027.

Otras ventanas de agosto contempladas en el documento: **B** (30 jul → 16 ago, 15 días por 10 de vacaciones) y **C** (30 jul → 29 ago, 28 días por 19, roza el límite de 30 días del visado).

## Las 6 rutas

1. **La Ruta de la Seda** (recomendada) · Gansu de punta a punta. En agosto añade el altiplano de Qinghai.
2. **La China del Sur** · aldeas dong y miao + Zhangjiajie.
3. **El Gran Zigzag** · máxima cobertura, muchos vuelos internos.
4. **Seda y Panda** · sale por Chengdú con el directo a Madrid.
5. **El Triángulo Clásico** · circuito de agencia (Shanghái, Xi'an, Pekín).
6. **El Clásico Ampliado** · clásico + Guilin, Longji y pandas.

Cada una tiene versión de mayo (10 días) y de agosto (14 días), con itinerario propio.

## Hallazgos que condicionan todo

- **Golden Week 2027: 30 abril a 6 mayo.** Cae en la primera mitad de la ventana de mayo. Regla aplicada: Terracota, Zhangjiajie y Muralla **siempre después del 6 de mayo**; el festivo se pasa en Shenzhen (ciudad de origen, se vacía) y en el desierto de Gansu.
- **Agosto no tiene ventana limpia**: las vacaciones escolares chinas duran los dos meses. No se esquiva, se elige dónde estar.
- **Tifones**: 4 a 6 de media en agosto en Guangdong. Afecta a Shenzhen.
- **Altiplano de Qinghai**: Xining a 22-25 °C en agosto mientras Xi'an pasa de 38. Colza en flor de finales de junio a principios de agosto. En mayo no funciona.
- **Hyrox Shanghái 2027: 14-16 de mayo**, tres días después de la vuelta de mayo. Las fechas de agosto en China (Chengdú y Shenzhen en 2026) aún no están publicadas para 2027.
- **Ciudad Prohibida**: desde 2026 **sin taquilla**. Reserva online con pasaporte, cupo 40.000/día, ventana de solo 7 días, se abre a las 20:00 hora de Pekín.
- **Grutas de Mogao**: los extranjeros **no pueden reservar online** a título individual. Agencia o en persona.
- **Trenes**: se abren **exactamente 15 días antes** en la app 12306. Es el cuello de botella real del viaje.
- **Vuelo directo BCN a Shenzhen** (Shenzhen Airlines ZH866) vuela lunes, miércoles y **viernes** a las 12:20. Descartado por la restricción de las 20:00.
- **Vuelos de vuelta**: Pekín a Madrid (Air China CA907, 01:55, todos los días menos jueves) y Chengdú a Madrid (Sichuan 3U3803, 01:40, lu/mi/vi/do). Salen de madrugada, así que el último día completo en China es siempre el día anterior a aterrizar.

## Fotografías

55 imágenes de **Wikimedia Commons**, recortadas a 800×520 y comprimidas a JPEG 74. **Todas verificadas visualmente** con hojas de contactos antes de entrar.

> Aviso para futuras guías: la búsqueda por texto de Commons devuelve resultados falsos con frecuencia. En este trabajo salió una foto de Chile etiquetada como Dunhuang, gimnasia olímpica como aldea miao, un autobús como Ciudad Prohibida y un tren como Pingyao. **Hay que montar una hoja de contactos y mirarlas una a una.** La búsqueda por categoría tampoco es fiable: ordena por tamaño de archivo y saca escaneos raros.

## Cómo regenerarlo

```bash
cd fuentes
python3 build.py
```

`build.py` sustituye tres marcadores de `plantilla.html` (`__ROUTES__`, `__SEASONS__`, `__PLACES__`) por los `.js` correspondientes, incrusta `imgs.json` en base64 y escribe `../index.html`.

- **`plantilla.html`** — estructura, estilos y motor. Aquí no suele hacer falta tocar.
- **`seasons.js`** — todo lo que cambia entre mayo y agosto: fechas, tarjetas, tablas de vuelos, lista de comprobación.
- **`routes.js`** — las 6 rutas, cada una con bloque `may` y bloque `ago` (tramos del mapa + día a día).
- **`places.js`** — la galería por lugar.
- **`imgs.json`** — las 55 fotos en base64. Los `fetch*.py` son los scripts que las descargaron.

## Diseño

Aplicadas las skills de `Documents/AGENTES/_SKILLS COMPARTIDAS`:

- **`apple-design`** — tipografía con tracking negativo en display e interlineado inverso al tamaño, jerarquía por peso, materiales translúcidos con respaldo sólido para `prefers-reduced-transparency`.
- **`taste-skill`** — anti plantilla: sin degradados morados, sin serif, un solo sistema de radios, tema bloqueado en claro, y **el color reservado exclusivamente a identificar rutas**. La interfaz es monocroma; si algo tiene color, codifica información.

Iconos de transporte en SVG en línea, no emojis. Movimiento contenido y con red de seguridad: si el `IntersectionObserver` falla, a los 2,5 s se revela todo igualmente.

## Verificado

- Las **12 combinaciones** (6 rutas × 2 temporadas) renderizan con su número de días correcto y sin errores de consola.
- **Cero imágenes rotas** y cero sin datos.
- **Móvil a 375 px**: sin desbordamiento horizontal; los selectores de ruta pasan a tira deslizable.

## Pendiente de decidir

1. **Mayo o agosto.**
2. **Qué ruta** de las seis.
3. En agosto, **qué ventana** (A, B o C).
4. Si en mayo se alarga hasta el 17 para entrar en el Hyrox de Shanghái.

Con eso se baja a trenes con horario, hoteles por ciudad y precios, y el itinerario elegido se puede volcar al motor `TRIP` de `_PLANTILLA`.
