var ROUTES=[
{id:1,name:"La ruta probada",hex:"#C53026",hexm:"#FF8E78",curve:.08,real:true,main:true,
 sub:"La ruta elegida: los destinos de un viaje real, con tiempo de verdad para Pekín, Xi'an, Chongqing y Shanghái",
 extra:'<h3 class="xh">Lo que este itinerario trae aprendido</h3>'+
  '<p class="xlede">La ruta nace de un viaje real de 22 noches por estos mismos destinos (de los diez originales se deja fuera Wangxian, para dar más días a las ciudades), planificado tramo a tramo contra la venta real de billetes durante meses. Estos avisos costaron horas descubrirlos y aquí vienen de serie.</p>'+
  '<div class="xgrid">'+
  '<div class="xcard"><h4>Las estaciones trampa</h4><p>Chongqing tiene cuatro estaciones: se llega a Chongqing Norte y se sale hacia Fenghuang desde Chongqing Este, a 21 km. En Pekín el nocturno sale de Beijing West (北京西站): en la misma búsqueda aparecen trenes desde Fengtai y Qinghe que no son el vuestro. La estación de Fenghuang es Fenghuang Gucheng y la de Furong se escribe todo junto: Furongzhen.</p></div>'+
  '<div class="xcard"><h4>El horario general miente</h4><p>Un tren puede existir en el horario general y no circular vuestro día concreto: en el viaje original pasó dos veces. Solo vale el listado real de la fecha, que se abre 15 días antes. Y el buscador por ruta de Ctrip devuelve cero trenes hacia Fenghuang Gucheng por un fallo suyo, no porque no haya: se comprueba en Trip.com.</p></div>'+
  '<div class="xcard"><h4>Los tramos críticos</h4><p>Chongqing Este a Fenghuang: solo tres directos al día, venta el 25 de julio. Los dos nocturnos, D19 de Pekín a Xi\'an (venta el 19 de julio) y K385 de Xi\'an a Chengdú (21 de julio), con pocas literas de primera o blandas. Se compran en el primer minuto; la hora exacta a la que abre cada estación la da la app 12306 (Me, guía de viaje, hora de salida a la venta). Plan B si se agotan: Chongqing a Fenghuang con transbordo en Huaihua Sur, y en los nocturnos, litera de segunda o el tren rápido de día.</p></div>'+
  '<div class="xcard"><h4>La regla de la hora</h4><p>En la estación una hora antes de la salida, siempre: las estaciones chinas son aeropuertos, con control de pasaporte, escáner y andenes a un cuarto de hora andando. El desayuno que no dé tiempo a tomar se pide para llevar la noche antes en recepción: 打包早餐 (da bao zao can). Funciona en todos los hoteles de esta lista.</p></div>'+
  '<div class="xcard"><h4>Tianmen: solo línea C</h4><p>Desde octubre de 2026 el teleférico grande que salía de la ciudad no funciona: solo se vende la línea C, con entrada por la Puerta de la Montaña (天门山山门, a 20 minutos en Didi) y subida y bajada en el teleférico exprés de la cueva. Ya no hay bus por las 99 curvas. La entrada tiene franja horaria fija y si no llegáis a la vuestra, no se entra. La pasarela de cristal del este está cerrada desde mayo de 2026; Panlong, la del oeste y Guigu Zhandao, abiertas.</p></div>'+
  '<div class="xcard"><h4>Reservas con nombre y ventana</h4><p>Ciudad Prohibida: sin taquilla, cupo de 40.000, la venta abre 7 días antes a las 20:00 de China (las 14:00 en España) y cierra los lunes. La plaza de Tiananmen tiene reserva propia, gratuita, en un mini programa de WeChat y con franjas: la bajada de bandera es una franja concreta. Sin ella no se cruza la plaza ni de paso. Todo se entra escaneando el pasaporte físico.</p></div>'+
  '<div class="xcard"><h4>Terracota a la apertura, en 1 h 15</h4><p>Las guías locales aconsejan entrar a partir de las 13:00 para ir a contracorriente de los grupos, pero a vuestro ritmo funciona mejor lo contrario: estar en la puerta a las 08:30, antes que los autobuses, y hacer los tres fosos a buen paso (1, 3 y 2) en hora y cuarto. El carrito eléctrico del jardín Lishan (15 yuanes) ahorra 2,5 km a pie. Entrada de 120 yuanes, a la venta 7 días antes con pasaporte.</p></div>'+
  '<div class="xcard"><h4>Zhangjiajie, dinero y colas</h4><p>La entrada del parque (236 yuanes) vale cuatro días e incluye los buses internos, pero no el ascensor Bailong (65) ni los teleféricos (72 a 76): el día completo sale por unos 373 yuanes, unos 48 euros. Si la cola del Bailong pasa de una hora, girad el día: arriba por el teleférico de Tianzi y el Bailong para bajar a partir de las 16:00.</p></div>'+
  '<div class="xcard"><h4>Las luces tienen horario</h4><p>Casi todo lo bonito de esta ruta pasa de noche, y cada sitio apaga a su hora: la cascada de Furong y Hongyadong, hasta las 23:00; en Tianmen, la cueva al anochecer desde la explanada de los 999 escalones (sin tour nocturno); los drones de Wulingyuan, hacia las 19:50 si no hay viento; y en Fenghuang los bares del río meten música hasta pasadas las 23:00, así que se pide habitación al río pero lejos del tramo de bares.</p></div>'+
  '<div class="xcard"><h4>Hongyadong se mira desde fuera</h4><p>El edificio de trece pisos apilados es gratis y se ve mejor desde el puente Qiansimen que desde dentro. Se enciende al anochecer y aguanta hasta las 23:00. En verano id después de cenar, que a las 20:00 la ciudad todavía es un horno.</p></div>'+
  '<div class="xcard"><h4>Mutianyu, torre 6</h4><p>El tobogán de 1.580 metros baja desde la torre 6, y a esa torre sube la telesilla: el combo correcto es telesilla más tobogán (140 yuanes). El teleférico de cabina sube a la torre 14 y ahí no hay tobogán. Con lluvia el tobogán no abre, así que si el cielo amenaza, cambiad el día de Muralla por el de ciudad.</p></div>'+
  '<div class="xcard"><h4>El desayuno importa más de lo que parece</h4><p>Al reservar hotel, mirad a qué hora abre el desayuno antes que el precio: un bufé que abre a las 07:30 choca con los pandas, con los parques y con la mitad de los trenes de la mañana. Los dos hoteles que mejor funcionaron del viaje original abrían a las 06:30.</p></div>'+
  '</div>'+
  '<h3 class="xh" style="margin-top:34px">Los pueblos con entrada, y dónde dormir para las luces</h3>'+
  '<p class="xlede">Dos pueblos de esta ruta se viven de noche, y en uno de ellos se paga por entrar: por eso en el viaje original se dormía dentro. Así funciona cada uno, y debajo van los alojamientos con mejores vistas nocturnas que señalan los blogs de viajeros, con su ficha de Trip.com.</p>'+
  '<div class="xgrid xg3">'+
  '<div class="xcard"><h4>Fenghuang: pasear es gratis</h4><p>El casco antiguo es de acceso libre las 24 horas; lo que se paga es el pase de nueve visitas (128 yuanes, válido tres días), que no compensa: no se amortiza sin convertir Fenghuang en una carrera. Lo que sí merece la pena es el paseo en barca por el Tuojiang (de 80 a 120 yuanes) y dormir dentro, por las casas sobre pilotes iluminadas desde el balcón y el pueblo vacío al amanecer.</p></div>'+
  '<div class="xcard"><h4>Furong: recinto de pago, unos 108 yuanes</h4><p>El pueblo entero es área escénica de pago: unos 108 yuanes en taquilla (menos comprándola online), válida 3 días con entradas y salidas, con registro facial y pasaporte. Dormir dentro NO exime de pagarla, pero es la única forma de quedarse con la cascada iluminada cuando se van los autobuses, y el hotel gestiona el registro. El espectáculo nocturno va incluido.</p></div>'+
  '</div>'+
  '<div class="tw" style="margin-top:20px"><table><thead><tr><th>Pueblo</th><th>Alojamiento</th><th class="n">Nota Trip.com</th><th>La baza nocturna</th></tr></thead><tbody>'+
  '<tr><td><b>Fenghuang</b></td><td><a href="https://www.trip.com/hotels/fenghuang-hotel-detail-113977533/phoenix-dayin-qianfu-homestay/" target="_blank" rel="noopener">Secluded Qian Mansion (el del viaje original)</a></td><td class="n">·</td><td>A 84 metros del Snow Bridge, recogida gratis en la estación</td></tr>'+
  '<tr><td><b>Fenghuang</b></td><td><a href="https://www.trip.com/hotels/fenghuang-hotel-detail-603249/phoenix-city-boutique-hotel/" target="_blank" rel="noopener">Phoenix City Boutique Hotel</a></td><td class="n">9,5</td><td>Junto al Tuojiang, en Laoyingshao</td></tr>'+
  '<tr><td><b>Fenghuang</b></td><td><a href="https://www.trip.com/hotels/fenghuang-hotel-detail-52171233/shuiyun-yaju-river-view-bb/" target="_blank" rel="noopener">Shuiyun Yaju River View B&B</a></td><td class="n">9,6</td><td>Habitaciones con vistas al río iluminado</td></tr>'+
  '<tr><td><b>Furong</b></td><td><a href="https://www.trip.com/hotels/yongshun-hotel-detail-5265564/wangcun-caotang-inn/" target="_blank" rel="noopener">Wangcun Caotang Inn (el del viaje original)</a></td><td class="n">9,2</td><td>Encima de la cascada; pedid la habitación Jing Lei Pu Bu Panoramic</td></tr>'+
  '<tr><td><b>Furong</b></td><td><a href="https://www.trip.com/hotels/guzhang-hotel-detail-89860436/furong-town-waterfall-view-inn/" target="_blank" rel="noopener">Furong Town Waterfall View Inn</a></td><td class="n">9,7</td><td>Vista a la cascada desde la orilla sur y traslado gratis a la estación</td></tr>'+
  '</tbody></table></div>'+
  '<h3 class="xh" style="margin-top:34px">Spas de 24 horas, ciudad a ciudad</h3>'+
  '<p class="xlede">Los grandes baños chinos abren día y noche: piscinas, saunas, zona de descanso, comida y masaje con una sola entrada y una pulsera para pagar los extras al salir. Pasaporte encima siempre (a los extranjeros los registran), nombre y dirección en chino en el móvil y compra en Trip.com o Meituan, que sale más barato. Zonas de agua por sexos y sin ropa.</p>'+
  '<div class="tw"><table><thead><tr><th>Ciudad</th><th>Spa</th><th>Qué tiene</th><th class="n">Entrada</th><th>Cuándo encaja</th></tr></thead><tbody>'+
  '<tr><td><b>Pekín</b></td><td>Shuiguo Tangquan (水裹·汤泉生活), Sihui</td><td>Piscinas interiores y exteriores, saunas, cine, karaoke, fruta, queso y helado libres</td><td class="n">unos 320 ¥</td><td>Noche del lunes 2</td></tr>'+
  '<tr><td><b>Xi\'an</b></td><td>Qingshuiwan Letanghui (西安清水湾·乐汤汇温泉), 2ª ronda norte</td><td>Abierto día y noche, piscinas de 10:00 a 04:00; desayuno bufé o masaje de pies según paquete</td><td class="n">89 a 239 ¥</td><td>Ducha antes del nocturno del jueves 5</td></tr>'+
  '<tr><td><b>Chengdú</b></td><td>Tangyue Wenquan (汤悦温泉), Chunxi Road</td><td>Siete plantas, cápsulas para dormir; con bufé completo, Herijun (何日君) en Nijiaqiao</td><td class="n">unos 99 ¥</td><td>Noche del viernes 6</td></tr>'+
  '<tr><td><b>Chongqing</b></td><td>Lan Yue Hot Springs (岚悦汤泉), Nan\'an</td><td>24 horas, cine, videojuegos y bufé con fruta</td><td class="n">desde unos 80 ¥</td><td>Noche del domingo 8, al bajar de Nanshan</td></tr>'+
  '<tr><td><b>Shanghái</b></td><td>Young·SPACE Tangquan (漾·SPACE汤泉生活), Lujiazui</td><td>24 horas, fruta y bebidas libres, cápsulas, cine; 100 minutos de masaje por unos 670 ¥ con todo</td><td class="n">desde 299 ¥</td><td>Tarde del domingo 15, antes del vuelo</td></tr>'+
  '</tbody></table></div>'+
  '<h3 class="xh" style="margin-top:34px">Mercados de réplicas</h3>'+
  '<div class="xgrid">'+
  '<div class="xcard"><h4>Pekín: Perlas y Seda</h4><p>El Mercado de las Perlas (Hongqiao), enfrente de la puerta este del Templo del Cielo, y el Mercado de la Seda (Xiushui, línea 1, Yong\'anli), con cinco plantas de marcas copiadas. Regateo fuerte: empezad por la cuarta parte de lo que pidan. Ojo con la "seda" de Xiushui, que a veces es lyocell. Los dos van el martes 3.</p></div>'+
  '<div class="xcard"><h4>Shanghái: AP Plaza</h4><p>Bajo la estación de metro Science and Technology Museum (línea 2, Pudong): el mayor mercado de réplicas que queda en la ciudad. Las guías de 2026 avisan de que las buenas copias escasean, así que se va por la experiencia. Domingo 15, de camino al spa.</p></div>'+
  '</div>'+
  '<h3 class="xh" style="margin-top:34px">Alojamientos sugeridos</h3>'+
  '<p class="xlede">Doce noches de hotel y dos de tren nocturno. La propuesta principal son los alojamientos del viaje real de octubre de 2026, todos con desayuno; al lado, una alternativa. Notas de Trip.com de noviembre de 2026. Se reservan ya, con cancelación gratuita, y llevad saldo en la tarjeta para los depósitos.</p>'+
  '<div class="tw"><table><thead><tr><th>Noches</th><th>Ciudad</th><th>Propuesta</th><th class="n">Nota</th><th>Por qué</th><th>Alternativa</th></tr></thead><tbody>'+
  '<tr><td>31 jul a 3 ago (3)</td><td><b>Pekín</b></td><td><a href="https://www.trip.com/hotels/beijing-hotel-detail-821303/livefortuna-beijing/" target="_blank" rel="noopener">Liveforturna Hotel</a> (北京福庭酒店), Yabaolu</td><td class="n">9,6</td><td>Del viaje original. Gimnasio, bufé desde 06:30, depósito 500 ¥</td><td><a href="https://www.trip.com/hotels/beijing-hotel-detail-436887/starway-premier-tianan-rega-hotel-beijing/" target="_blank" rel="noopener">UrCove by Hyatt Forbidden City</a> (9,5), junto a la Ciudad Prohibida</td></tr>'+
  '<tr><td>3 ago</td><td><b>Tren</b></td><td>D19 Pekín a Xi\'an, litera de primera</td><td class="n">·</td><td>Compartimento de 4 con puerta</td><td>D43 de las 20:29</td></tr>'+
  '<tr><td>4 ago (1)</td><td><b>Xi\'an</b></td><td><a href="https://www.trip.com/hotels/xi-an-hotel-detail-36148464/sende-hotel/" target="_blank" rel="noopener">Center Hotel Bell Tower</a> (西安钟楼森德酒店)</td><td class="n">9,4</td><td>Del viaje original. A 260 m del Campanario, lavandería gratis</td><td>·</td></tr>'+
  '<tr><td>5 ago</td><td><b>Tren</b></td><td>K385 Xi\'an a Chengdú, litera blanda</td><td class="n">·</td><td>Compartimento de 4 con puerta</td><td>Tren rápido de día, 3 h 44</td></tr>'+
  '<tr><td>6 ago (1)</td><td><b>Chengdú</b></td><td><a href="https://www.trip.com/hotels/chengdu-hotel-detail-890007/guilaiqi-boutique-hotel/" target="_blank" rel="noopener">Guilaiqi Boutique</a> (皈徕栖精品酒店)</td><td class="n">9,5</td><td>Del viaje original. Junto al puente Anshun, lavandería gratis 24 h</td><td><a href="https://www.trip.com/hotels/chengdu-hotel-detail-2036397/the-temple-house/" target="_blank" rel="noopener">The Temple House</a> (9,6), lujo en Taikoo Li</td></tr>'+
  '<tr><td>7 y 8 ago (2)</td><td><b>Chongqing</b></td><td><a href="https://www.trip.com/hotels/chongqing-hotel-detail-127526279/hongyadong-holiday-riverside-hotel/" target="_blank" rel="noopener">Hongyadong Holiday Riverside</a> (Cangbai Lu 73)</td><td class="n">·</td><td>Del viaje original. A minutos de Hongyadong, gimnasio y lavandería gratis</td><td><a href="https://www.trip.com/hotels/chongqing-hotel-detail-61905308/intercontinental-hotels-chongqing-raffles-city-by-ihg/" target="_blank" rel="noopener">InterContinental Raffles City</a> (9,6)</td></tr>'+
  '<tr><td>9 ago (1)</td><td><b>Fenghuang</b></td><td><a href="https://www.trip.com/hotels/fenghuang-hotel-detail-113977533/phoenix-dayin-qianfu-homestay/" target="_blank" rel="noopener">Secluded Qian Mansion</a> (凤凰大隐千府民宿)</td><td class="n">·</td><td>Del viaje original. A 84 m del Snow Bridge, recogida gratis en la estación</td><td><a href="https://www.trip.com/hotels/fenghuang-hotel-detail-603249/phoenix-city-boutique-hotel/" target="_blank" rel="noopener">Phoenix City Boutique</a> (9,5)</td></tr>'+
  '<tr><td>10 ago (1)</td><td><b>Furong</b></td><td><a href="https://www.trip.com/hotels/yongshun-hotel-detail-5265564/wangcun-caotang-inn/" target="_blank" rel="noopener">Wangcun Caotang Inn</a> (王村草堂客栈)</td><td class="n">9,2</td><td>Del viaje original. Sobre la cascada; el coche a Zhangjiajie se reserva aquí</td><td><a href="https://www.trip.com/hotels/guzhang-hotel-detail-89860436/furong-town-waterfall-view-inn/" target="_blank" rel="noopener">Furong Town Waterfall View Inn</a> (9,7)</td></tr>'+
  '<tr><td>11 y 12 ago (2)</td><td><b>Wulingyuan</b></td><td><a href="https://www.trip.com/hotels/zhangjiajie-hotel-detail-1204339/tian-chong-yun-hai-du-jia-jiu-dian/" target="_blank" rel="noopener">Tianchong Yunhai Resort</a> (天崇云海度假酒店)</td><td class="n">9,5</td><td>Del viaje original. A 10 min a pie de la puerta Este, bufé desde 06:30</td><td><a href="https://www.trip.com/hotels/zhangjiajie-hotel-detail-39080925/manyuan-resort-hotel/" target="_blank" rel="noopener">Manyuan Resort</a> (9,7)</td></tr>'+
  '<tr><td>13 y 14 ago (2)</td><td><b>Shanghái</b></td><td><a href="https://www.trip.com/hotels/shanghai-hotel-detail-431900/meta-tree-hotel-people-s-square-city-center-in-shanghai/" target="_blank" rel="noopener">Meta Tree Hotel</a> (美利居酒店)</td><td class="n">9,5</td><td>Del viaje original. Plaza del Pueblo, os lavan la ropa gratis</td><td><a href="https://www.trip.com/hotels/shanghai-hotel-detail-346395/waldorf-astoria-shanghai-on-the-bund/" target="_blank" rel="noopener">Waldorf Astoria on the Bund</a> (9,3)</td></tr>'+
  '</tbody></table></div>',
 may:{
  sub:"Shanghái · Wangxian · Zhangjiajie · Furong · Fenghuang · Chongqing · Xi'an · Pekín",
  pitch:"Los diez destinos de un viaje real de 22 noches, comprimidos a diez días e invertidos para que la Terracota y la Muralla caigan después del Golden Week. Es la ruta más densa de las siete: cada noche se duerme en un sitio que por sí solo justificaría el viaje, y los avisos de estaciones, ventas y madrugones vienen resueltos de serie.",
  yes:["Terracota","Gran Muralla","Zhangjiajie","Valle de Wangxian","Fenghuang y Furong","Chongqing de noche"],
  no:["Sin pandas","Sin Shenzhen","Sin Ciudad Prohibida","Pekín y Shanghái exprés"],
  warnTitle:"La única ruta que pisa un parque nacional en pleno Golden Week",
  warn:"Invertir el orden protege la Terracota y la Muralla, que caen el 10 y el 11 de mayo, pero deja el parque de Zhangjiajie el día 5, último del Golden Week, y Tianmen el 6, primer laborable pero aún con el regreso de la gente: la cola del ascensor Bailong puede pasar de dos horas. Se gestiona madrugando (primera franja de las 07:00, subir por Tianzi si el Bailong está imposible) y comprando las entradas en el minuto en que se abra la venta. Si no queréis veros ahí esos días, las rutas 4 a 7 esquivan el problema.",
  legs:[["shanghai","wangxian","tren",480,"2 h 40 + 1 h de coche"],["wangxian","zhangjiajie","tren",900,"6 h"],["zhangjiajie","furong","bus",95,"1 h 15"],["furong","fenghuang","tren",60,"34 min"],["fenghuang","chongqing","tren",480,"3 h 30"],["chongqing","xian","tren",700,"5 h"],["xian","beijing","tren",1200,"4 h 30"],["beijing","mutianyu","bus",70,"1 h 15"]],
  days:[
  {d:"Dom 2",t:"Aterrizaje en Shanghái",img:"bund_1",cap:"El Bund y Pudong enfrente, un siglo mirándose",x:"Llegáis al amanecer con el directo del sábado. Paseo por el Bund, la Concesión Francesa a pie y el jardín Yu. Al caer la noche, el skyline de Pudong encendido desde la orilla. A la cama pronto, que mañana empieza el viaje de verdad."},
  {d:"Lun 3",t:"El valle de los inmortales",img:"wangxian_1",cap:"El desfiladero de Wangxian, con las pasarelas colgadas del acantilado",x:"Tren de media mañana a Shangrao (ojo: se sale de Hongqiao, no de Shanghai Sur) y una hora de coche hasta Wangxian. Se duerme dentro del valle: la entrada de 140 yuanes va incluida y, cuando los autobuses se van, el desfiladero iluminado (se enciende a las 19:45) se queda solo para los que duermen allí.",m:["tren","Shanghái a Shangrao 2 h 40, más 1 h de coche"]},
  {d:"Mar 4",t:"Travesía a las montañas de Avatar",img:"wangxian_2",cap:"El puente de farolillos sobre el cañón de Wangxian",x:"Mañana por el valle antes de que lleguen los autobuses y tren directo a Zhangjiajie Oeste, unas seis horas cruzando Hunan. Hay cuatro directos al día: este billete se compra en el primer minuto de la venta. Noche en Wulingyuan, a pie de parque.",m:["tren","Shangrao a Zhangjiajie Oeste, unas 6 h"]},
  {d:"Mié 5",t:"Parque Avatar, con estrategia",img:"wulingyuan_1",cap:"Los pilares de Yuanjiajie, los de la película",x:"Golden Week: primera franja de las 07:00 y a correr. Si la cola del ascensor Bailong pasa de una hora, se le da la vuelta al día: arriba por el teleférico de Tianzi y el Bailong para bajar a partir de las 16:00, cuando se vacía. La entrada vale cuatro días y los buses internos van incluidos."},
  {d:"Jue 6",t:"Tianmen, la puerta del cielo",img:"tianmen_1",cap:"Los 999 escalones hasta la Puerta del Cielo",x:"Mudanza en Didi a Zhangjiajie ciudad y franja de las 14:00 en Tianmen (la última que dejan entrar es la de las 16:00). Carretera de las 99 curvas, pasarelas de cristal y los 999 escalones. El tramo alto del teleférico sigue en obras: se sube con teleférico, bus y escaleras mecánicas. Arriba hace 5 a 10 grados menos.",m:["bus","Didi de Wulingyuan a Zhangjiajie ciudad, 45 min","stay"]},
  {d:"Vie 7",t:"Furong, el pueblo sobre la cascada",img:"furong_1",cap:"Furong: dos mil años construido encima de un salto de agua",x:"Coche con chófer hasta Furong, encargado la víspera en recepción con precio cerrado: en este ramal los trenes de la mañana directamente no existen. El pueblo entero es recinto de pago (unos 108 yuanes, valen 3 días) y de noche la cascada iluminada ruge debajo, ya sin autobuses.",m:["bus","Coche con chófer a Furong, 1 h 15"]},
  {d:"Sáb 8",t:"Fenghuang, la ciudad fénix",img:"fenghuang_1",cap:"Casas sobre pilotes en el río Tuojiang",x:"Última mañana de cascada y tren de 34 minutos a Fenghuang. La estación se llama Fenghuang Gucheng, y el buscador por ruta de Ctrip devuelve aquí cero trenes por un fallo suyo, no por falta de trenes. Atardecer sobre el Tuojiang y la ciudad vieja encendida reflejándose en el agua.",m:["tren","Furongzhen a Fenghuang Gucheng, 34 min"]},
  {d:"Dom 9",t:"Hongyadong y la ciudad vertical",img:"chongqing_1",cap:"Hongyadong: trece pisos de casas apiladas sobre el río",x:"Callejones de Fenghuang al amanecer, sin tours, y tren directo a Chongqing, con pocos directos al día: comprar el primer minuto. Ojo al bajar: Chongqing tiene cuatro estaciones. De noche, Hongyadong encendido visto desde el puente Qiansimen.",m:["tren","Fenghuang Gucheng a Chongqing Este, 3 h 30"]},
  {d:"Lun 10",t:"Terracota en orden inverso",img:"terracota_2",cap:"Fosa 1 del Mausoleo del Primer Emperador Qin",x:"Tren de la mañana a Xi'an, unas cinco horas, y entrada a los Guerreros a las 13:30, como recomiendan las guías locales: fosos 3, 2 y 1 en orden inverso, a contracorriente de todos los tours de la mañana. Cena en el barrio musulmán.",m:["tren","Chongqing a Xi'an Norte, unas 5 h"]},
  {d:"Mar 11",t:"AVE, Muralla y a casa",img:"mutianyu_1",cap:"Mutianyu: telesilla de subida y tobogán de bajada",x:"AVE de las 08:00 a Pekín (sale de Xi'an Norte y llega a Beijingxi) y directos a Mutianyu: telesilla a la torre 6, paseo hasta la 12, que suele estar vacía, y bajada en tobogán, que con lluvia no funciona. Cena en Qianmen y al aeropuerto: el vuelo a Madrid sale a la 01:55.",m:["tren","Xi'an a Pekín 4 h 30, y Didi a Mutianyu"]}]},
 ago:{
 "sub": "Pekín · Xi'an · Chengdú · Chongqing · Fenghuang · Furong · Zhangjiajie · Shanghái",
 "pitch": "La ruta elegida, a vuestro ritmo y con lo aprendido por quien la hizo en octubre de 2026: sin siestas, dos trenes nocturnos que regalan días enteros, Pekín tres días completos, Xi'an dos, Chengdú, Chongqing dos, Fenghuang de día y de noche, Furong iluminado, Tianmen por la nueva línea C, el parque de Avatar y el Gran Cañón con su puente de cristal, y Shanghái dos días hasta el vuelo de las 00:40.",
 "yes": [
  "Pekín 3 días",
  "Ciudad Prohibida",
  "Gran Muralla",
  "2 trenes nocturnos",
  "Terracota a la apertura",
  "Pandas",
  "Chongqing 2 días",
  "Fenghuang día y noche",
  "Furong iluminado",
  "Tianmen línea C",
  "Avatar y Gran Cañón",
  "Shanghái 2 días",
  "Spa de 24 horas",
  "Mercados de réplicas"
 ],
 "no": [
  "Sin Wangxian",
  "Sin siestas",
  "Sin crucero de los dos ríos",
  "Sin pase de Fenghuang"
 ],
 "warnTitle": "Calor, lluvias y los cinco billetes que deciden el viaje",
 "warn": "Chongqing pasa de 38 grados, Pekín está en su punta de lluvias, Zhangjiajie suma unos 18 días de lluvia al mes y Shanghái está en temporada de tifones. Los billetes clave: el nocturno Pekín a Xi'an (venta el 19 de julio), el nocturno Xi'an a Chengdú (21 de julio), Chongqing Este a Fenghuang (solo tres directos, 25 de julio), Tianmen con hora fija y el vuelo de Zhangjiajie del viernes a las 20:20. Todo el calendario de compra está en Plan.",
 "legs": [
  [
   "beijing",
   "mutianyu",
   "bus",
   70,
   "1 h 30"
  ],
  [
   "beijing",
   "xian",
   "tren",
   1200,
   "tren nocturno, 12 h"
  ],
  [
   "xian",
   "terracota",
   "bus",
   40,
   "50 min"
  ],
  [
   "xian",
   "chengdu",
   "tren",
   840,
   "tren nocturno, 11 h"
  ],
  [
   "chengdu",
   "chongqing",
   "tren",
   300,
   "1 h 40"
  ],
  [
   "chongqing",
   "fenghuang",
   "tren",
   480,
   "3 h 51"
  ],
  [
   "fenghuang",
   "furong",
   "tren",
   60,
   "34 min"
  ],
  [
   "furong",
   "zhangjiajie",
   "bus",
   95,
   "1 h 30"
  ],
  [
   "zhangjiajie",
   "shanghai",
   "avion",
   1100,
   "2 h 05"
  ]
 ],
 "days": [
  {
   "d": "Sáb 31",
   "c": "Pekín",
   "t": "Aterrizaje y primera noche en Pekín",
   "img": "hutong_1",
   "cap": "Los hutongs de Gulou, el Pekín a pie de calle",
   "x": "<b>18:50.</b> El Air China aterriza en la T3. Entre pasaporte y maletas, una hora. Taxi oficial desde la cola frente a la puerta 7 (24 h, unos 120 a 160 yuanes, exigid taxímetro y no aceptéis a nadie que os aborde dentro) o Airport Express hasta Dongzhimen. Llevad en el móvil el nombre y la dirección del hotel en chino para enseñarlos al taxista.<br><b>Llegada.</b> Activad la eSIM, probad Alipay pagando algo pequeño y comprobad que la VPN conecta.<br><b>Noche.</b> Primera vuelta para coger el pulso: el río Liangma iluminado, el paseo nocturno de moda en Pekín, a un paso del hotel, o Sanlitun y Taikoo Li. Cena de jiaozi o brochetas en cualquier sitio lleno de gente. Plan antijetlag: melatonina de 1 mg a las 21:30 y a la cama a las 22:00, aunque no tengáis sueño.",
   "h": "<b>Liveforturna Hotel</b> (北京福庭酒店), en Yabaolu, Chaoyang, el del viaje original: 9,6 en Trip.com, gimnasio gratis y bufé desde las 06:30 (los fines de semana hasta las 10:30). Entrada 14:00, salida 12:00, depósito de 500 yuanes al llegar. Está entre el Pekín histórico y Sanlitun, a 3,5 km de la Ciudad Prohibida. <a href=\"https://www.trip.com/hotels/beijing-hotel-detail-821303/livefortuna-beijing/\" target=\"_blank\" rel=\"noopener\">Ver en Trip.com</a>. Alternativa pegada a la Ciudad Prohibida: <b>UrCove by Hyatt Beijing Forbidden City</b>, 9,5, a 10 minutos del metro de Wangfujing (<a href=\"https://www.trip.com/hotels/beijing-hotel-detail-436887/starway-premier-tianan-rega-hotel-beijing/\" target=\"_blank\" rel=\"noopener\">Trip.com</a>). Dirección para el taxi: 北京市朝阳区雅宝路甲5号. Tres noches: la cuarta se duerme en el tren.",
   "s": "<b>Shuiguo Tangquan</b> (水裹·汤泉生活), en Sihui, Chaoyang, el más cercano al hotel: piscinas interiores y exteriores, saunas, cine, karaoke, fruta, queso y helado a voluntad. Unos 320 yuanes y desde 2025 lleno de extranjeros. Alternativa con bufé completo: <b>No. 9 Hot Spring</b>, también en Sihui. Encaja la noche del lunes 2.",
   "f": [
    [
     "pk_hutong_01",
     "Esquina de un hutong junto a Shichahai con casas grises y árboles"
    ],
    [
     "pk_hutong_02",
     "Calle comercial de hutong llena de paseantes y tiendas"
    ],
    [
     "pk_hutong_04",
     "Yandai Xiejie, callejón de tiendas con casas grises de tejado curvo"
    ],
    [
     "pk_shichahai_01",
     "Pabellón iluminado reflejado en el lago Shichahai de noche"
    ],
    [
     "pk_shichahai_02",
     "Barca tradicional roja ante los locales de la orilla de Shichahai"
    ],
    [
     "pk_shichahai_03",
     "Bares y restaurantes asomados al agua en la orilla del lago"
    ],
    [
     "pk_shichahai_04",
     "Lago Houhai con barcas y sauces en una tarde despejada"
    ],
    [
     "pk_pato_01",
     "Pato laqueado trinchado con tortitas, salsa, cebolleta y pepino"
    ],
    [
     "pk_pato_02",
     "Horno de leña con patos asándose colgados"
    ]
   ]
  },
  {
   "d": "Dom 1",
   "c": "Pekín",
   "t": "Ciudad Prohibida, Jingshan, Qianmen y la bajada de bandera",
   "img": "gugong_2",
   "cap": "9.000 estancias y ni un centímetro de sombra",
   "x": "<b>07:30.</b> Didi a Donghuamen (东华门) y a pie por el foso este hasta la Puerta del Meridiano, sin pasar por la plaza de Tiananmen, que pide su propia reserva y está vallada. Alternativa: metro línea 1 a Tiananmen East, salida B, calle Nanchizi y entrada por el Templo Ancestral (2 yuanes).<br><b>08:30.</b> Ciudad Prohibida a la apertura, con la reserva de siete días antes y el pasaporte original. Va en domingo porque los lunes cierra. Unas cuatro horas de sur a norte: Puerta del Meridiano, Salón de la Armonía Suprema y la galería del Tesoro, que es lo que menos gente tiene.<br><b>12:30.</b> Por la puerta norte, enfrente, la colina de Jingshan: subid al pabellón Wanchun (万春亭) y mirad al sur desde su terraza, con todos los tejados dorados del palacio y el eje de Pekín.<br><b>14:00.</b> Comida de zhajiangmian y, a cubierto en las horas de calor, el Museo Nacional de China (gratis, con reserva) o la torre de esquina nordeste del palacio reflejada en el foso, que se fotografía desde fuera.<br><b>17:00.</b> Qianmen y Dashilan: la calle con la torre Zhengyangmen al fondo y los callejones laterales.<br><b>19:00.</b> Control sur de Tiananmen, a pie desde Qianmen, para la bajada de bandera (hacia las 19:30 en agosto, franja 降旗及夜间 reservada en WeChat). Cena en Qianmen: Quanjude, la institución del pato desde 1864, en el 30 de Qianmen Street.",
   "f": [
    [
     "pk_gugong_01",
     "Puerta del Meridiano vista desde el primer patio interior"
    ],
    [
     "pk_gugong_02",
     "Salón de la Armonía Suprema sobre su gran explanada de piedra"
    ],
    [
     "pk_gugong_03",
     "Patio ante la Puerta de la Pureza Celestial, con la colina de Jingshan al fondo"
    ],
    [
     "pk_gugong_04",
     "Tejados dorados de la Puerta del Meridiano con palomas en vuelo"
    ],
    [
     "pk_gugong_05",
     "Interior de una sala del Palacio de la Paz y la Longevidad"
    ],
    [
     "pk_gugong_06",
     "Torre de esquina noroeste reflejada en el foso"
    ],
    [
     "pk_gugong_07",
     "Pasillo de arcos rojos y blancos entre patios del palacio"
    ],
    [
     "pk_gugong_08",
     "Puentes de mármol sobre el río de Agua Dorada"
    ],
    [
     "pk_jingshan_01",
     "Panorámica de la Ciudad Prohibida desde Jingshan al atardecer"
    ],
    [
     "pk_jingshan_02",
     "Mar de tejados dorados de la Ciudad Prohibida vistos desde Jingshan"
    ],
    [
     "pk_jingshan_03",
     "Vista hacia el norte desde Jingshan, con el Salón Shouhuang entre árboles"
    ],
    [
     "pk_beihai_01",
     "La estupa blanca de Beihai sobre la isla de Jade, vista desde Jingshan"
    ],
    [
     "pk_beihai_02",
     "Embarcadero del lago Beihai con la estupa blanca al fondo"
    ],
    [
     "pk_beihai_03",
     "Barca de recreo entre lotos en el lago de Beihai"
    ]
   ]
  },
  {
   "d": "Lun 2",
   "c": "Pekín",
   "t": "Gran Muralla, templo del Lama, Gulou y spa",
   "img": "mutianyu_1",
   "cap": "Mutianyu: telesilla de subida y tobogán de bajada",
   "x": "<b>06:30.</b> Didi directo a 慕田峪长城 (Mutianyu), entre 1 h 30 y 2 h según tráfico, para entrar a la apertura de las 07:30. Centro de visitantes, lanzadera interna (15 yuanes) y telesilla a la torre 6 con el combo de telesilla y tobogán (140 yuanes, en taquilla, de otra empresa que el teleférico de cabina de la torre 14, donde no hay tobogán).<br><b>08:30.</b> Caminata por la cresta de la torre 6 a la 12, que suele estar casi vacía, y si queda fuelle hasta la 20, donde se empina. Vuelta a la 6 y bajada en el tobogán de 1.580 metros. Con lluvia no abre: se baja en telesilla. Foto desde las zonas altas mirando al oeste, con la muralla serpenteando por las crestas.<br><b>13:00.</b> Comida sencilla en el área base y vuelta a Pekín.<br><b>15:30.</b> Templo del Lama (Yonghegong), que sí abre los lunes, con el Buda de sándalo de 18 metros tallado de un solo tronco. Al lado, el templo de Confucio y la calle Guozijian.<br><b>17:30.</b> Torres del Tambor y de la Campana, reabiertas en 2026, y hutongs de Gulou hasta Nanluoguxiang. Huguosi Snack Bar (180 Di'anmenwai) para probar de golpe los dulces imperiales.<br><b>Noche.</b> Cena en Guijie (簋街), la calle de restaurantes con farolillos rojos, y spa Shuiguo para las piernas de la Muralla.",
   "m": [
    "bus",
    "Pekín a Mutianyu, 1 h 30"
   ],
   "f": [
    [
     "pk_mutianyu_01",
     "La muralla serpentea por las crestas verdes desde la torre 20"
    ],
    [
     "pk_mutianyu_02",
     "Telecabinas naranjas subiendo entre el bosque hacia la muralla"
    ],
    [
     "pk_mutianyu_03",
     "Tobogán metálico de bajada desde la muralla entre árboles"
    ],
    [
     "pk_mutianyu_04",
     "Torre de vigilancia y adarve de la muralla sobre la ladera"
    ],
    [
     "pk_mutianyu_05",
     "Paso de ronda entre torres con la vegetación en tonos de otoño"
    ],
    [
     "pk_yonghe_01",
     "Salón principal del templo del Lama con incensarios y fieles"
    ],
    [
     "pk_yonghe_02",
     "Arco de entrada policromado del templo del Lama"
    ],
    [
     "pk_yonghe_03",
     "Aleros pintados en verde y oro de un pabellón del templo"
    ],
    [
     "pk_yonghe_04",
     "Estatua dorada de Buda dentro de uno de los salones del templo"
    ],
    [
     "pk_hutong_03",
     "Arco de entrada sur de la calle Nanluoguxiang"
    ]
   ]
  },
  {
   "d": "Mar 3",
   "c": "Pekín",
   "t": "Templo del Cielo, Palacio de Verano, réplicas, pato y tren nocturno",
   "img": "tiantan_1",
   "cap": "Templo del Cielo: a las siete de la mañana es un parque de barrio",
   "x": "<b>07:00.</b> Didi a la puerta este del Templo del Cielo (天坛东门), cuando el parque es de los vecinos: taichí, baile con abanicos y coros entre los cipreses. A las 08:00 abren los recintos: Salón de la Oración por las Buenas Cosechas (la foto, desde el eje sur mirando al norte), Bóveda Imperial con el Muro del Eco y Altar Circular. Dos horas y media.<br><b>09:45.</b> Mercado de las Perlas (红桥市场, Hongqiao), pegado a la salida este.<br><b>11:00.</b> Palacio de Verano en metro (línea 4, Beigongmen): el sitio más tranquilo del viaje según quien lo hizo. Largo Corredor pintado a mano, colina de la Longevidad, barco de mármol y barca por el lago Kunming.<br><b>15:30.</b> Mercado de la Seda (秀水街, Xiushui), en Dongdaqiao Road 8. Y si os tira la tecnología, las tiendas de Xiaomi y DJI de Sanlitun.<br><b>17:30.</b> Pato laqueado de despedida en Siji Minfu (四季民福, 32 Dengshikou West Street, de 150 a 220 yuanes): sin reserva y con cola, así que pronto.<br><b>19:30.</b> Maletas de la consigna del hotel y a Beijing West (北京西站), que no es Fengtai ni Qinghe, con una hora de margen.<br><b>20:41.</b> Tren nocturno D19 a Xi'an, litera de primera: compartimento de cuatro con puerta. Se duerme en el tren y se ahorra hotel y mañana.",
   "f": [
    [
     "yiheyuan_1",
     "Palacio de Verano: el lago Kunming y la colina de la Longevidad"
    ],
    [
     "pk_pato_01",
     "Pato laqueado trinchado con tortitas, salsa, cebolleta y pepino"
    ]
   ],
   "r": "<b>Mercado de las Perlas</b> (红桥市场, Hongqiao), pegado a la salida este del Templo del Cielo, a las 09:45: perlas, relojes, bolsos y ropa de marca copiados en cinco plantas. <b>Mercado de la Seda</b> (秀水街, Xiushui, Dongdaqiao Road 8, metro línea 1, Yong'anli) a las 15:30: el más grande de Pekín, con zapatillas, ropa, bolsos y electrónica, abierto hasta las 21:00. Regateo fuerte: empezad por la cuarta parte de lo que pidan, no enseñéis interés y salid andando si no baja. Ojo con la \"seda\" de Xiushui, que a veces es lyocell."
  },
  {
   "d": "Mié 4",
   "c": "Xi'an",
   "t": "Amanecer en Xi'an: torres, mezquita, caligrafía y muralla al atardecer",
   "img": "xianwall_1",
   "cap": "La muralla Ming de Xi'an, 14 kilómetros en bici",
   "x": "<b>08:35.</b> Llegada a la estación de Xi'an, pegada a la muralla norte. Maletas al hotel, junto al Campanario, y desayuno de hulatang (sopa especiada con albóndigas) y zenggao en Sajinqiao (洒金桥), la calle más auténtica del barrio musulmán.<br><b>10:00.</b> Torre del Tambor (si solo entráis a una, esta, con vistas sobre el barrio; 30 yuanes, 50 con el Campanario) y la Gran Mezquita (25 yuanes), escondida entre patios de madera con su minarete en forma de pagoda.<br><b>13:00.</b> Yangrou paomo en Tong Sheng Xiang (同盛祥, desde 1920, junto al Campanario): os dan un pan, lo desmigáis vosotros y en cocina lo convierten en sopa de cordero.<br><b>15:00.</b> Shuyuanmen (书院门), la calle de los calígrafos, el mejor sitio para un recuerdo: pinceles, sellos y abanicos. Al lado, el Bosque de Estelas si os interesa la caligrafía.<br><b>17:30.</b> Muralla en bici desde la puerta sur, Yongningmen (永宁门): 54 yuanes, sin reserva, bici unos 45 por tres horas. 14 km, unas dos horas, con el sol cayendo. Con lluvia no alquilan bicis.<br><b>Hora azul.</b> La foto del Campanario iluminado desde la terraza exterior de la 5ª planta del centro comercial Kaiyuan (开元商城).<br><b>Noche.</b> Barrio musulmán por Xiyangshi (西羊市) y Dapiyuan (大皮院), mejores que la calle principal: roujiamo, pinchos de cordero, guantang baozi en Jia San (贾三灌汤包) y zumo de granada.",
   "m": [
    "tren",
    "Tren nocturno D19, Pekín 20:41 a Xi'an 08:35"
   ],
   "h": "<b>Center Hotel Xi'an Bell Tower</b> (西安钟楼森德酒店), en Dong Dajie 619, a 260 metros del Campanario, el del viaje original: 9,4 en Trip.com, lavandería gratis, desayuno de 07:00 a 10:00. Entrada 14:00, salida 13:00. Pedid habitación interior. <a href=\"https://www.trip.com/hotels/xi-an-hotel-detail-36148464/sende-hotel/\" target=\"_blank\" rel=\"noopener\">Ver en Trip.com</a>. Una sola noche: la del jueves se duerme en el tren.",
   "s": "<b>Qingshuiwan Letanghui Wenquan</b> (西安清水湾·乐汤汇温泉), en la segunda ronda norte (Mingguang Lu), a unos 6 km del Campanario y cerca de la estación: abierto día y noche, piscinas de 10:00 a 04:00, desde 89 yuanes, 129 con desayuno bufé y 239 con masaje de pies. A partir de las 02:00 registran el pasaporte. Encaja como ducha y cena antes del nocturno del jueves.",
   "f": [
    [
     "xa_muralla_01",
     "Paseo sobre la muralla con sus torres de vigilancia y faroles rojos"
    ],
    [
     "xa_muralla_02",
     "Lienzo de la muralla con torres de esquina entre árboles"
    ],
    [
     "xa_muralla_03",
     "Torre de puerta de la muralla con figuras decorativas en el adarve"
    ],
    [
     "xa_muralla_04",
     "Torre de puerta de la muralla iluminada de noche"
    ],
    [
     "xa_muralla_05",
     "La muralla y el foso iluminados al anochecer"
    ],
    [
     "xa_campana_01",
     "Torre de la Campana de Xi'an con parterres de flores a sus pies"
    ],
    [
     "xa_campana_02",
     "Torre de la Campana iluminada al anochecer en mitad de la rotonda"
    ],
    [
     "xa_campana_03",
     "Hilera de grandes tambores en la galería de la Torre del Tambor"
    ],
    [
     "xa_mezquita_01",
     "Arco de piedra y jardín del primer patio de la Gran Mezquita"
    ],
    [
     "xa_mezquita_02",
     "Puerta de ladrillo tallado con tejado de estilo chino en la mezquita"
    ],
    [
     "xa_mezquita_03",
     "Patio y sala de oración de tejas azules de la Gran Mezquita"
    ],
    [
     "xa_musulman_01",
     "Calle Xiyangshi del barrio musulmán, llena de tiendas y paseantes"
    ],
    [
     "xa_musulman_02",
     "Puesto de pinchos de cordero a la parrilla en el barrio musulmán"
    ],
    [
     "xa_musulman_03",
     "Roujiamo, el bocadillo de carne picada típico de Xi'an"
    ],
    [
     "xa_musulman_04",
     "Fideos biangbiang anchos y aplanados a mano con cilantro"
    ],
    [
     "xianfood_1",
     "Comida callejera del barrio musulmán de Xi'an"
    ]
   ]
  },
  {
   "d": "Jue 5",
   "c": "Xi'an",
   "t": "Terracota a la apertura, museo de Shaanxi y Xi'an Tang de noche",
   "img": "terracota_2",
   "cap": "Ocho mil figuras y ninguna cara repetida",
   "x": "<b>07:30.</b> Didi a 秦始皇帝陵博物院（兵马俑）, de 40 a 60 minutos y de 100 a 150 yuanes el coche, para entrar a las 08:30, antes del pico de grupos (de 10:00 a 14:30). Pasaporte físico: es lo que se escanea.<br><b>08:30.</b> En 1 h 15 a buen paso: la fosa 1, la de las filas de soldados que aparecen de golpe, luego la 3, el cuartel general, y la 2, con los arqueros arrodillados. Zumo de granada de Lintong a la salida.<br><b>11:30.</b> Museo de Historia de Shaanxi, con la franja reservada el 31 de julio a las 17:00: bronces Zhou, cerámica Tang de tres colores, el tesoro de Hejiacun y, aparte, los murales Tang. Dos horas y media sin intentar verlo todo.<br><b>14:30.</b> Comida en Joy City (大悦城), junto a la Gran Pagoda, en Chang'an Da Pai Dang (长安大牌档): cocina de Shaanxi con decorado Tang y el pastel con forma de pincel (毛笔酥).<br><b>16:00.</b> Templo Da Ci'en y Gran Pagoda de la Oca Salvaje, la de Xuanzang (10 yuanes el templo, la subida aparte).<br><b>19:00.</b> Fuente musical de la plaza norte de la pagoda (sesiones hacia las 19:00 y las 21:00) y, de 19:30 a 20:30, Grand Tang Ever-Bright City (大唐不夜城): avenida peatonal gratis de arquitectura Tang iluminada, hanfu y espectáculos.<br><b>20:30.</b> Andad cinco minutos lejos de la avenida antes de pedir el Didi, que se colapsa. Maletas del hotel y estación de Xi'an.<br><b>21:03.</b> Tren nocturno K385 a Chengdú, litera blanda. Confirmad la hora: alguna fuente da 21:40.",
   "m": [
    "bus",
    "Xi'an a los Guerreros, 50 min"
   ],
   "f": [
    [
     "terracota_1",
     "Guerreros de Terracota"
    ],
    [
     "xa_terracota_01",
     "Vista general de la fosa 1 bajo su gran nave cubierta"
    ],
    [
     "xa_terracota_02",
     "Filas de soldados de terracota de cerca, cada uno con rasgos distintos"
    ],
    [
     "xa_terracota_03",
     "Detalle del rostro y el moño de un guerrero de terracota"
    ],
    [
     "xa_terracota_04",
     "Caballos de terracota junto a soldados en formación dentro de la fosa"
    ],
    [
     "xa_terracota_05",
     "Guerreros de Terracota que conservan restos de su color original"
    ],
    [
     "xa_terracota_06",
     "La fosa 1 entera bajo su gran nave cubierta"
    ]
   ]
  },
  {
   "d": "Vie 6",
   "c": "Chengdú",
   "t": "Pandas desde el tren, Taikoo Li, té, ópera y Anshun",
   "img": "panda_1",
   "cap": "La base de cría de Chengdú, en la primera hora",
   "x": "<b>08:08.</b> Llegada a la estación de Chengdú, en el norte, la más cercana a la base de pandas. Maletas a la consigna (行李寄存) y Didi de 20 minutos.<br><b>08:45.</b> Base de cría (55 yuanes, a la venta 14 días antes): los pandas comen fuera de 08:00 a 10:00 y, con el calor, se meten en salas climatizadas. Gigantes, pandas rojos y la guardería en dos horas y media.<br><b>12:00.</b> Maletas al hotel y comida sichuanesa en el distrito de Jinjiang.<br><b>14:00.</b> People's Park: té en la casa Heming entre jubilados jugando al mahjong y limpieza de oídos si os atrevéis. Después, los callejones de Kuanzhai Xiangzi.<br><b>17:00.</b> El templo Daci, un templo histórico metido entre la arquitectura de Taikoo Li, y el panda gigante que trepa por el edificio IFS: primero desde la calle y luego desde la terraza para verle la cara.<br><b>19:00.</b> Hotpot de Chengdú cerca de Chunxi Road, empezando por el caldo suave, y bingfen de postre.<br><b>20:00.</b> Ópera de Sichuan con el cambio de caras (bian lian) en la casa de té Shufeng Yayun.<br><b>Noche.</b> El puente Anshun (安顺廊桥) iluminado sobre el río Jinjiang, la imagen nocturna clásica de Chengdú, y spa Tangyue, a cinco minutos de Chunxi Road.",
   "m": [
    "tren",
    "Tren nocturno K385, Xi'an 21:03 a Chengdú 08:08"
   ],
   "h": "<b>Guilaiqi Boutique</b> (皈徕栖精品酒店, junto al metro de Xinnanmen), el del viaje original: 9,5 en Trip.com, lavandería gratis 24 h. Entrada y salida a las 14:00, desayuno desde las 07:30, depósito de 200 yuanes. A 5 minutos del puente Anshun y a 10 de Taikoo Li. <a href=\"https://www.trip.com/hotels/chengdu-hotel-detail-890007/guilaiqi-boutique-hotel/\" target=\"_blank\" rel=\"noopener\">Ver en Trip.com</a>. Capricho en el corazón de Taikoo Li: <b>The Temple House</b>, 9,6 (<a href=\"https://www.trip.com/hotels/chengdu-hotel-detail-2036397/the-temple-house/\" target=\"_blank\" rel=\"noopener\">Trip.com</a>).",
   "s": "<b>Tangyue Wenquan</b> (汤悦温泉), en la calle Shangdong 322, a 340 metros del metro de Chunxilu: siete plantas, cápsulas para dormir, 4,5 sobre 5, unos 99 yuanes por casi un día entero. Con bufé completo: <b>Herijun Hot Spring</b> (何日君), en Nijiaqiao.",
   "f": [
    [
     "panda_2",
     "Panda gigante en la base de cría de Chengdú"
    ],
    [
     "chengdu_2",
     "Casa de té en Chengdú"
    ],
    [
     "cd_wenshu_01",
     "Muro rojo del monasterio Wenshu, en Chengdú"
    ],
    [
     "cd_wenshu_02",
     "Salón del monasterio Wenshu, budista y en activo"
    ]
   ]
  },
  {
   "d": "Sáb 7",
   "c": "Chongqing",
   "t": "Tren a Chongqing, la ciudad vertical y Hongyadong de noche",
   "img": "chongqing_1",
   "cap": "Hongyadong: trece pisos de casas apiladas sobre el río",
   "x": "<b>08:00.</b> Último paseo por Chengdú: templo Wuhou, el de los héroes de los Tres Reinos, y la calle Jinli, con desayuno de dan dan mian.<br><b>09:20.</b> Tren a Chongqing Norte (重庆北站), 1 h 40. Salida por la plaza norte (北广场) y Didi al hotel.<br><b>12:00.</b> Xiaomian en Pangmei (胖妹面庄) o chaoshou en Wuchaoshou (吴抄手), en Jiefangbei.<br><b>13:30.</b> Kuixinglou (魁星楼): la plaza que parece a ras de suelo y está a decenas de metros sobre otra calle. Chongqing engaña: 800 metros pueden ser muchísimas escaleras.<br><b>15:00.</b> Museo de las Tres Gargantas (gratis, sin reserva desde 2025, cierra los lunes) y enfrente el Gran Salón del Pueblo.<br><b>17:30.</b> Jiefangbei y la calle de snacks de Bayi Road (八一路好吃街): suanlafen, kao shaopi y brochetas, una o dos cosas. Después, Shibati (十八梯), las calles escalonadas, con la última luz.<br><b>20:00.</b> Hotpot de Chongqing en Cangbai Road, la calle del hotel (de 80 a 150 yuanes): más intenso y picante que el de Chengdú. Pedid el yuanyang, mitad y mitad, y bingfen para apagar el fuego.<br><b>21:30.</b> Hongyadong iluminado, nunca antes de anochecer: se ve mejor desde fuera, desde el puente Qiansimen, que desde las tiendas de dentro. Y Chaotianmen con Raffles City, en la proa de la península, a 15 minutos.",
   "m": [
    "tren",
    "Chengdú Este a Chongqing Norte, 1 h 40"
   ],
   "h": "<b>Hongyadong Holiday Riverside Hotel</b> (重庆Holiday Riverside假日江畔酒店, en Cangbai Lu 73, planta 15), el del viaje original: a minutos de Hongyadong y a 8 de Jiefangbei, con gimnasio y lavandería gratis y desayuno de 07:00 a 09:30. Entrada 15:00, salida 12:00. <a href=\"https://www.trip.com/hotels/chongqing-hotel-detail-127526279/hongyadong-holiday-riverside-hotel/\" target=\"_blank\" rel=\"noopener\">Ver en Trip.com</a>. Alternativa: <b>InterContinental Raffles City</b>, 9,6 (<a href=\"https://www.trip.com/hotels/chongqing-hotel-detail-61905308/intercontinental-hotels-chongqing-raffles-city-by-ihg/\" target=\"_blank\" rel=\"noopener\">Trip.com</a>). Dos noches.",
   "s": "<b>Lan Yue Hot Springs</b> (岚悦汤泉), en Nan'an, junto al estadio Jiangnan: abierto 24 horas, con cine, videojuegos y bufé con fruta. Encaja el domingo por la noche, al volver de Longmenhao, que está en la misma orilla. Alternativa: <b>Haitang Xiaoyue</b> (海棠晓月温泉), en Nanping, con bañador.",
   "f": [
    [
     "cq_hongyadong_01",
     "Hongyadong iluminado de noche sobre el río Jialing, con cruceros en la orilla"
    ],
    [
     "cq_hongyadong_02",
     "Hongyadong y el puente de Qiansimen encendidos frente a los rascacielos"
    ],
    [
     "cq_hongyadong_03",
     "Las casas escalonadas de Hongyadong de día, pegadas al acantilado"
    ],
    [
     "cq_skyline_01",
     "La península de Yuzhong iluminada al anochecer, entre el Yangtsé y el Jialing"
    ],
    [
     "cq_skyline_02",
     "El puente de Qiansimen y los rascacielos de Yuzhong de noche"
    ],
    [
     "cq_skyline_03",
     "Panorámica de la península de Yuzhong rodeada por los dos ríos"
    ],
    [
     "cq_raffles_01",
     "Raffles City en la punta de Chaotianmen, con un crucero nocturno en el río"
    ],
    [
     "cq_museo_01",
     "Fachada acristalada del Museo de las Tres Gargantas sobre la plaza del Pueblo"
    ],
    [
     "cq_salon_01",
     "La cúpula de tejas verdes del Gran Salón del Pueblo de Chongqing"
    ],
    [
     "cq_salon_02",
     "La plaza del Pueblo con el Gran Salón al fondo bajo cielo azul"
    ],
    [
     "cq_hotpot_01",
     "Hotpot de Chongqing con caldo rojo picante y olla central de caldo suave"
    ],
    [
     "chongqing_2",
     "Chongqing de noche"
    ]
   ]
  },
  {
   "d": "Dom 8",
   "c": "Chongqing",
   "t": "Liziba, teleférico del Yangtsé y Longmenhao al atardecer",
   "img": "chongqing_3",
   "cap": "Chongqing: rascacielos apilados entre dos ríos",
   "x": "<b>09:00.</b> Liziba (李子坝): el monorraíl de la línea 2 atravesando un bloque de viviendas, desde el mirador de abajo, 30 a 45 minutos. Sigue a pie hasta el parque Eling y el Erchang, la vieja fábrica convertida en barrio creativo.<br><b>11:30.</b> Baixiangju (白象居), la urbanización de pasarelas a distintas alturas que resume Chongqing, y comida de xiaomian.<br><b>14:30.</b> Teleférico del Yangtsé (长江索道) desde Xiaoshizi, salida 5B: cinco minutos colgados sobre el río (30 yuanes la ida; no saquéis la vuelta, que no guarda sitio en la cola).<br><b>15:30.</b> En la orilla sur, Longmenhao y Xiahaoli (龙门浩老街·下浩里): barrios en pendiente con casas tradicionales, escaleras, cafés y vistas, dos o tres horas tranquilas.<br><b>Atardecer.</b> Que os pille aquí: la península de Yuzhong encendiéndose enfrente, rascacielos y puentes, es la mejor vista de la ciudad.<br><b>20:30.</b> Cena en Longmenhao o hotpot en Pipa Yuan (枇杷园), el que ocupa una ladera entera de Nanshan.<br><b>Noche.</b> Spa Lan Yue, en la misma orilla. Para volver al centro, línea 6 de Shangxinjie a Xiaoshizi.",
   "f": [
    [
     "cq_liziba_01",
     "Un tren de la línea 2 atraviesa el bloque de viviendas de Liziba"
    ],
    [
     "cq_liziba_02",
     "El monorraíl entra en el edificio de Liziba, visto desde la calle"
    ],
    [
     "cq_shibati_01",
     "Tejados del barrio de Shibati con los rascacielos de Jiefangbei al fondo"
    ],
    [
     "cq_shibati_02",
     "Casas tradicionales de Shibati escalonadas en la ladera"
    ],
    [
     "cq_teleferico_01",
     "Cabina del teleférico cruzando el Yangtsé frente al centro de Chongqing"
    ],
    [
     "cq_teleferico_02",
     "Cabina roja del teleférico del Yangtsé vista desde abajo"
    ],
    [
     "cq_teleferico_03",
     "Los cables del teleférico sobre el Yangtsé con la ciudad iluminada de noche"
    ],
    [
     "cq_nanshan_01",
     "La península de Yuzhong iluminada de noche vista desde la montaña Nanshan"
    ],
    [
     "cq_hotpot_02",
     "Caldo de hotpot cubierto de guindillas y pimienta de Sichuan"
    ]
   ]
  },
  {
   "d": "Lun 9",
   "c": "Fenghuang",
   "t": "Ciqikou, tren por las montañas y Fenghuang al atardecer",
   "img": "fenghuang_1",
   "cap": "El río Tuojiang al atardecer, con las casas sobre pilotes",
   "x": "<b>08:30.</b> Ciqikou (磁器口), el pueblo antiguo junto al Jialing, antes que los grupos: mahua recién frita en Chen Mahua (陈麻花) y casas de té. Dos horas, no más.<br><b>11:10.</b> Didi a Chongqing Este (重庆东站), a 21 km, de 35 a 50 minutos: no es Chongqing Norte, donde llegasteis. Es el error de estación más fácil del viaje.<br><b>12:55.</b> Tren a Fenghuang Gucheng (凤凰古城站, no «Fenghuang» a secas), 3 h 51 cruzando las montañas de Wuling. Solo hay tres directos al día y el billete se compró el 25 de julio en el primer minuto; plan B, transbordo en Huaihua Sur.<br><b>16:46.</b> El hotel os recoge en la estación (pedidlo por WeChat). Maletas y fuera enseguida, sin parar a cenar: lo que importa ahora es la luz.<br><b>Atardecer.</b> Snow Bridge, la ribera del Tuojiang, las pasaderas de piedra (跳岩) y la Puerta Norte.<br><b>Noche.</b> Río abajo con las casas sobre pilotes iluminadas: Hongqiao, la pagoda Wanming y Shawan. Cena de 血粑鸭 (pato con pastel de arroz y sangre) con verdura, arroz y 米酒, y Dongzheng Street (东正街) con sus caramelos de jengibre. Los bares del río meten música hasta pasadas las 23:00.",
   "m": [
    "tren",
    "Chongqing Este 12:55 a Fenghuang Gucheng 16:46"
   ],
   "h": "<b>Secluded Qian Mansion</b> (凤凰大隐千府民宿, callejón Anle 5), el del viaje original: a 84 metros del Snow Bridge, recogida gratis en la estación, guardan las maletas tras la salida y llevan a la estación por 40 yuanes. Desayuno de 08:00 a 10:00. <a href=\"https://www.trip.com/hotels/fenghuang-hotel-detail-113977533/phoenix-dayin-qianfu-homestay/\" target=\"_blank\" rel=\"noopener\">Ver en Trip.com</a>. Alternativa junto al río: <b>Phoenix City Boutique Hotel</b>, 9,5 (<a href=\"https://www.trip.com/hotels/fenghuang-hotel-detail-603249/phoenix-city-boutique-hotel/\" target=\"_blank\" rel=\"noopener\">Trip.com</a>).",
   "f": [
    [
     "cq_ciqikou_01",
     "Pórtico de piedra con farolillos rojos a la entrada de Ciqikou"
    ],
    [
     "cq_ciqikou_02",
     "Calle principal de Ciqikou llena de gente entre casas de madera"
    ],
    [
     "cq_ciqikou_03",
     "Callejón empedrado de Ciqikou con una casa de té y farolillos"
    ],
    [
     "fh_barcas_01",
     "Barcas de turistas en el Tuojiang junto a un puente de piedra"
    ],
    [
     "fh_barcas_02",
     "Barcas de madera frente a las casas colgadas de la orilla"
    ],
    [
     "fh_diaojiaolou_01",
     "Casas sobre pilotes alineadas a lo largo del río Tuojiang"
    ],
    [
     "fh_diaojiaolou_02",
     "Casas de madera sobre el río al anochecer, con las primeras luces"
    ],
    [
     "fh_diaojiaolou_03",
     "Pilotes de madera que sostienen las casas colgadas sobre el agua"
    ],
    [
     "fh_noche_01",
     "La orilla iluminada de noche se refleja en el río Tuojiang"
    ],
    [
     "fh_noche_02",
     "Puente cubierto iluminado y casas del río al caer la noche"
    ],
    [
     "fh_tuojiang_01",
     "Pasarela de piedras sobre el río Tuojiang frente a la muralla de Fenghuang"
    ]
   ]
  },
  {
   "d": "Mar 10",
   "c": "Furong",
   "t": "Fenghuang de día y Furong iluminado",
   "img": "furong_1",
   "cap": "La cascada de Furong, iluminada por la noche",
   "x": "<b>07:30.</b> Las pasaderas de piedra sin gente, con la niebla subiendo del río: Snow Bridge, pasaderas y Puerta Norte.<br><b>09:00.</b> Fenghuang de día por las dos orillas: casa del escritor Shen Congwen, Puerta Este, la calle Dongzheng y un paseo en barca por el Tuojiang. El casco es gratis: el pase de nueve visitas (128 yuanes) no compensa. Si os apetece, sesión de fotos con ropa miao.<br><b>13:00.</b> Comida junto al río y la tarde libre por los callejones del otro lado.<br><b>16:00.</b> El hotel os lleva a la estación (40 yuanes).<br><b>17:35.</b> Tren a Furongzhen (芙蓉镇站, todo junto: no es Furong, ni Yongshun, ni Guzhang), 34 minutos. Llegada a las 18:09, cuando empieza a oscurecer, que es justo lo que se busca. El hotel recoge gratis en la estación.<br><b>18:30.</b> Entrada al recinto (108 yuanes, vale tres días e incluye la iluminación): el hotel está dentro. Maletas y a la calle.<br><b>19:00.</b> Wuli Stone Street, el puente Tuwang, el palacio Tusi y los miradores de arriba, y la gran cascada iluminada vista desde enfrente y por la pasarela de detrás de la cortina de agua.<br><b>Cena.</b> En el propio hotel, con vistas: 湘西腊肉 (tocino ahumado de Xiangxi), pescado y tofu de arroz.<br><b>21:30.</b> Segundo paseo por la Wuli Stone Street, ya sin gente. Confirmad en recepción el coche de mañana y dónde os recoge, que el hotel está en zona peatonal.",
   "m": [
    "tren",
    "Fenghuang Gucheng 17:35 a Furongzhen 18:09"
   ],
   "h": "<b>Wangcun Caotang Inn</b> (王村草堂客栈, calle Hepan 103), el del viaje original: a menos de 100 metros de la cascada, dentro del recinto, con recogida gratis en la estación y el coche a Zhangjiajie reservado aquí. Desayuno de 07:00 a 09:00. <a href=\"https://www.trip.com/hotels/yongshun-hotel-detail-5265564/wangcun-caotang-inn/\" target=\"_blank\" rel=\"noopener\">Ver en Trip.com</a>. Alternativa mejor valorada en la orilla sur: <b>Furong Town Waterfall View Inn</b>, 9,7 (<a href=\"https://www.trip.com/hotels/guzhang-hotel-detail-89860436/furong-town-waterfall-view-inn/\" target=\"_blank\" rel=\"noopener\">Trip.com</a>).",
   "f": [
    [
     "fh_tuojiang_01",
     "Fenghuang al amanecer: pasarela de piedras sobre el río Tuojiang"
    ],
    [
     "fr_callejon_01",
     "Callejón de losas con farolillos rojos y tiendas de madera"
    ],
    [
     "fr_cascada_01",
     "La cascada de Furong cae bajo las casas de madera del pueblo"
    ],
    [
     "fr_noche_01",
     "La cascada iluminada de noche con el pueblo encendido encima"
    ],
    [
     "fr_noche_02",
     "Furong de noche: el pueblo iluminado se refleja en el agua"
    ],
    [
     "fr_pueblo_01",
     "Vista aérea de Furong sobre el acantilado, entre el río y la cascada"
    ],
    [
     "fr_pueblo_02",
     "Casas colgadas sobre el acantilado de Furong en una mañana de niebla"
    ],
    [
     "fr_pueblo_03",
     "Casas de madera escalonadas sobre el barranco al atardecer"
    ],
    [
     "fr_puente_01",
     "Puente cubierto de estilo tujia sobre el arroyo del pueblo"
    ]
   ]
  },
  {
   "d": "Mié 11",
   "c": "Zhangjiajie",
   "t": "Furong de mañana y Tianmen por la línea C",
   "img": "tianmen_1",
   "cap": "La Puerta del Cielo de Tianmen",
   "x": "<b>07:00.</b> Furong casi vacío: la cascada con la luz de la mañana y el embarcadero de Wangcun. Desayuno (cierra a las 09:00).<br><b>09:30.</b> Coche con chófer reservado con el hotel (unos 36 euros) a Zhangjiajie, 1 h 30.<br><b>11:00.</b> Comida tujia junto a la antigua estación del teleférico de la ciudad.<br><b>12:40.</b> Didi a la Puerta de la Montaña (天门山山门), unos 20 minutos, para la franja de las 13:00. Ojo: desde octubre de 2026 el teleférico grande de la ciudad no funciona y solo se vende la línea C, que sube y baja en el teleférico exprés de la cueva. Ya no hay bus por las 99 curvas. Pasaporte en el control.<br><b>Tarde.</b> Los 999 escalones bajo la Puerta del Cielo, un arco natural de 130 metros, el templo de Tianmen y una pasarela de cristal: la del este está cerrada desde mayo de 2026, pero Panlong (盘龙崖), la del oeste y Guigu Zhandao están abiertas.<br><b>17:45.</b> Quedaos en la explanada al pie de los 999 escalones mientras os dejen: la cueva al anochecer es el momento. No hace falta tour nocturno.<br><b>Noche.</b> Didi a Wulingyuan, unos 45 minutos. No confundáis 天门山夜游 (la montaña iluminada) con 天门狐仙, un espectáculo de teatro.",
   "m": [
    "bus",
    "Coche con chófer de Furong a Zhangjiajie, 1 h 30"
   ],
   "h": "<b>Tianchong Yunhai Resort</b> (天崇云海度假酒店, avenida Wuling 175), el del viaje original: 9,5 en Trip.com, a 10 minutos andando de la puerta Este del parque, bufé desde las 06:30, entrada desde las 10:00 y salida a las 15:00. <a href=\"https://www.trip.com/hotels/zhangjiajie-hotel-detail-1204339/tian-chong-yun-hai-du-jia-jiu-dian/\" target=\"_blank\" rel=\"noopener\">Ver en Trip.com</a>. Alternativa: <b>Manyuan Resort Hotel</b>, 9,7 (<a href=\"https://www.trip.com/hotels/zhangjiajie-hotel-detail-39080925/manyuan-resort-hotel/\" target=\"_blank\" rel=\"noopener\">Trip.com</a>). Dos noches.",
   "f": [
    [
     "zj_tianmen_01",
     "La Puerta del Cielo de Tianmen sobre su gran escalinata"
    ],
    [
     "zj_tianmen_02",
     "El arco natural de la Puerta del Cielo visto desde la base"
    ],
    [
     "zj_tianmen_03",
     "Visitantes subiendo la escalinata de 999 escalones hacia la Puerta del Cielo"
    ],
    [
     "zj_tianmen_04",
     "Las curvas cerradas de la carretera de Tongtian entre picos verdes"
    ],
    [
     "zj_tianmen_05",
     "Cabina del teleférico de Tianmen subiendo sobre el valle"
    ],
    [
     "zj_tianmen_06",
     "El teleférico de Tianmen entre nubes junto a los picos"
    ],
    [
     "zj_tianmen_07",
     "Pasarela colgada de la pared del acantilado en la cima de Tianmen"
    ],
    [
     "zj_tianmen_08",
     "Visitantes en la pasarela del acantilado de Tianmen sobre el vacío"
    ],
    [
     "tianmen_2",
     "La Puerta del Cielo de Tianmen"
    ]
   ]
  },
  {
   "d": "Jue 12",
   "c": "Zhangjiajie",
   "t": "Parque Avatar: Bailong, Yuanjiajie, Mihun y Tianzi",
   "img": "wulingyuan_1",
   "cap": "Yuanjiajie y el pilar Aleluya, entre la niebla",
   "x": "<b>07:05.</b> A pie desde el hotel a la puerta Este para la franja de 07:00 a 08:00, línea B (ascensor Bailong primero). La entrada (236 yuanes) vale cuatro días con los buses internos.<br><b>07:30.</b> Plan B que hay que llevar memorizado: si la pantalla de la puerta marca más de 60 minutos de cola en el Bailong, no esperéis. Subid por el teleférico de Tianzi, haced Tianzi primero, luego Yuanjiajie y bajad por el Bailong (preguntad en ventanilla si os cambian a la línea A antes del torno).<br><b>08:00.</b> Ascensor Bailong, 326 metros pegados a la roca (65 yuanes), y Yuanjiajie: el pilar Aleluya de Avatar, el Primer Puente bajo el Cielo y la terraza Mihun (迷魂台), el mirador más impresionante del parque.<br><b>12:30.</b> Bus interno a Tianzi Shan: la vista más amplia de los tres mil pilares y el jardín Helong. Arriba hace entre 5 y 10 grados menos que en el valle.<br><b>16:00.</b> Bajada en el teleférico de Tianzi (72 yuanes) y, si queda luz, la Galería de las Diez Millas en tren (38 yuanes).<br><b>19:50.</b> Espectáculo de 1.500 drones sobre el río Suoxi, en Wulingyuan: la hora cambia y se cancela con viento, así que miradlo dos o tres días antes en WeChat buscando 武陵源发布. Alternativa, el teatro Charming Xiangxi, a 620 metros del hotel.<br><b>Noche.</b> Mercado nocturno de Jundi Road y cena tujia: tocino ahumado y pescado picante.",
   "f": [
    [
     "zj_bailong_01",
     "El ascensor Bailong sube pegado a la pared del acantilado"
    ],
    [
     "zj_yuanjiajie_01",
     "La Gran Muralla natural de Yuanjiajie, una cresta de pilares de arenisca"
    ],
    [
     "zj_yuanjiajie_02",
     "Bosque de pilares de arenisca de Yuanjiajie bajo cielo despejado"
    ],
    [
     "zj_yuanjiajie_03",
     "Picos de arenisca de Yuanjiajie asomando entre los pinos"
    ],
    [
     "zj_avatar_01",
     "Pilares verticales cubiertos de vegetación en la zona de Avatar de Yuanjiajie"
    ],
    [
     "zj_avatar_02",
     "Torres de roca con árboles en la cima, el paisaje que inspiró Avatar"
    ],
    [
     "zj_tianzi_01",
     "Pilares de Tianzi Shan envueltos en niebla"
    ],
    [
     "zj_tianzi_02",
     "Agujas de arenisca de Tianzi Shan junto a los cables del teleférico"
    ],
    [
     "zj_tianzi_03",
     "Mar de pilares de arenisca desde un mirador de Tianzi Shan"
    ],
    [
     "zj_yangjiajie_01",
     "Pilares de arenisca de Yangjiajie en un día de bruma"
    ]
   ]
  },
  {
   "d": "Vie 13",
   "c": "Shanghái",
   "t": "Gran Cañón y Puente de Cristal, y vuelo de noche a Shanghái",
   "img": "wulingyuan_2",
   "cap": "Los pilares de arenisca de Wulingyuan",
   "x": "<b>08:00.</b> Didi al Gran Cañón de Zhangjiajie, a la entrada de arriba (张家界大峡谷游客中心), unos 30 km y 40 minutos (de 55 a 70 yuanes).<br><b>08:45.</b> Línea B (大峡谷+玻璃桥, 178 yuanes, comprada antes): el Puente de Cristal sobre el cañón, la pasarela, la bajada al fondo, Rainbow Square, la cueva y la barca. Se sale abajo, en 双坪, y el Didi de vuelta se pide desde ahí. Unas cuatro horas.<br><b>13:30.</b> Comida en Wulingyuan y la tarde por el pueblo, o Baofeng Lake si os quedan fuerzas.<br><b>15:00.</b> Maletas del hotel (la salida es a las 15:00) y a las 17:00 Didi al aeropuerto de Hehua, unos 45 minutos.<br><b>20:20.</b> Vuelo HO2200 de Juneyao a Pudong (todos los días menos los martes), llegada a las 22:25. Plan B: el FM9344 de las 22:25.<br><b>Noche.</b> Taxi al hotel, unos 50 minutos, y una Tsingtao en Huanghe Road (黄河路), la calle de comida de al lado del hotel.<br><b>Opción tren nocturno.</b> Existe: el K1374 sale de la estación de Zhangjiajie hacia las 18:15 y llega a Shanghai Songjiang, en las afueras, hacia las 14:30 del sábado, unas 20 horas en litera. Ahorra un hotel pero cuesta la mañana del sábado, el día del mercado de las bodas. Se compraría el 29 de julio.",
   "m": [
    "avion",
    "Zhangjiajie 20:20 a Shanghái Pudong 22:25"
   ],
   "h": "<b>Meta Tree Hotel</b> (美利居酒店, callejón 155 de Weihai Road, número 20), el del viaje original: 9,5 en Trip.com, a 480 metros de la plaza del Pueblo y al lado de Huanghe Road y de Nanjing East, con gimnasio gratis, lavandería gratis (os la lavan) y desayuno de 07:30 a 13:30. Entrada y salida a las 14:00. <a href=\"https://www.trip.com/hotels/shanghai-hotel-detail-431900/meta-tree-hotel-people-s-square-city-center-in-shanghai/\" target=\"_blank\" rel=\"noopener\">Ver en Trip.com</a>. Capricho en el Bund: <b>Waldorf Astoria on the Bund</b>, 9,3 (<a href=\"https://www.trip.com/hotels/shanghai-hotel-detail-346395/waldorf-astoria-shanghai-on-the-bund/\" target=\"_blank\" rel=\"noopener\">Trip.com</a>). Dos noches.",
   "s": "<b>Young·SPACE Tangquan Shenghuo</b> (漾·SPACE汤泉生活), en Pudian Road 57, Lujiazui, metro Century Avenue: abierto 24 horas, desde 299 yuanes, o unos 670 con 100 minutos de masaje. Fruta y bebidas a voluntad, cápsulas, cine y juegos, sin bufé completo. Encaja la tarde del domingo, antes del vuelo. Con bufé de marisco y sushi, pero lejos: <b>Qushui Lanting</b>, en Minhang.",
   "f": [
    [
     "zj_huangshizhai_01",
     "Pilares de arenisca desde los miradores de Huangshizhai"
    ],
    [
     "zj_huangshizhai_02",
     "Panorámica de paredes y agujas de roca desde Huangshizhai"
    ],
    [
     "zj_huangshizhai_03",
     "Grupo de pilares con vegetación en la cima, visto desde Huangshizhai"
    ],
    [
     "zj_niebla_01",
     "Niebla entre los pilares de arenisca del parque forestal de Zhangjiajie"
    ],
    [
     "zj_niebla_02",
     "Pilares de Zhangjiajie difuminados por la bruma de la mañana"
    ],
    [
     "zj_niebla_03",
     "Nubes bajas que se levantan entre las torres de roca"
    ]
   ]
  },
  {
   "d": "Sáb 14",
   "c": "Shanghái",
   "t": "Yuyuan, el mercado de las bodas, Wukang y el Bund de noche",
   "img": "bund_1",
   "cap": "El Bund y Pudong enfrente, un siglo mirándose",
   "x": "<b>07:00.</b> El Bund de mañana, con los vecinos haciendo taichí y Pudong recortado contra el cielo. Desayuno de shengjianbao en Yang's Fried Dumpling (小杨生煎, 178 Ningbo Road).<br><b>08:30.</b> Jardín Yu (40 yuanes, mejor online; cierra los lunes), el bazar de Yuyuan y el puente de los Nueve Recodos (九曲桥) con la casa de té Huxinting.<br><b>11:00.</b> Xiaolongbao en Qiao Ai Lai Lai (Tianjin Road, en la guía Michelin, de 30 a 70 yuanes) o en Nanxiang, la institución de Yuyuan.<br><b>12:30.</b> El mercado de las bodas del parque del Pueblo (人民公园相亲角), solo los sábados de 11:00 a 16:00: padres buscando pareja para sus hijos con fichas sobre paraguas. Y la calle Nanjing East.<br><b>15:00.</b> Wukang Road y el edificio Wukang en proa, Anfu Road y Huaihai Middle Road: art déco, plátanos, tiendas de diseño y marcas chinas. Dos horas y media.<br><b>19:00.</b> Cena de cocina benbang en Old Jesse (老吉士, 41 Tianping Road, de 150 a 250 yuanes): hongshao rou y pescado. Reservad.<br><b>21:30.</b> El Bund de noche con Pudong encendido enfrente, y una azotea para la última copa. Palmeras de hojaldre del Park Hotel (国际饭店) para el desayuno de mañana. Agosto es temporada de tifones: si hay alerta, se intercambia con mañana.",
   "f": [
    [
     "sh_bund_01",
     "Fachadas coloniales del Bund al atardecer, vistas desde la otra orilla del Huangpu"
    ],
    [
     "sh_bund_02",
     "Edificios históricos del Bund con la torre del reloj de la Aduana"
    ],
    [
     "sh_bund_03",
     "Bancos de principios del siglo XX alineados frente al paseo del Bund"
    ],
    [
     "sh_bund_04",
     "Paseo peatonal del Bund lleno de gente al caer la tarde"
    ],
    [
     "sh_bund_05",
     "Edificios coloniales del Bund iluminados de noche"
    ],
    [
     "sh_yuyuan_01",
     "Pabellón de tejados curvos entre bonsáis en el jardín Yu"
    ],
    [
     "sh_yuyuan_02",
     "Estanque y galería cubierta del jardín Yu con rocas decorativas"
    ],
    [
     "sh_yuyuan_03",
     "Casa de té Huxinting sobre el estanque, con el puente en zigzag"
    ],
    [
     "sh_yuyuan_04",
     "Casa de té Huxinting y puente en zigzag con la Torre de Shanghái al fondo"
    ],
    [
     "sh_yuyuan_05",
     "Patio y salón principal del templo del Dios de la Ciudad de Shanghái"
    ],
    [
     "sh_xiaolongbao_01",
     "Xiaolongbao recién hechos en su cesta de bambú"
    ],
    [
     "sh_xiaolongbao_02",
     "Mesa del restaurante Nanxiang con xiaolongbao y bollo de sopa con pajita"
    ],
    [
     "sh_nanjing_01",
     "Calle Nanjing peatonal de día, con tiendas y paseantes"
    ],
    [
     "sh_nanjing_02",
     "Grandes almacenes históricos de la calle Nanjing iluminados de noche"
    ],
    [
     "sh_concesion_01",
     "Edificio Wukang, el antiguo Normandie, con luz de tarde en su esquina"
    ],
    [
     "sh_concesion_02",
     "Calle Wukang bajo la sombra de los plátanos"
    ],
    [
     "sh_concesion_03",
     "Calle arbolada de la antigua Concesión Francesa con villas tras los muros"
    ],
    [
     "sh_concesion_04",
     "Casa antigua cubierta de hiedra en la calle Anfu"
    ],
    [
     "sh_tianzifang_01",
     "Callejón de Tianzifang con plantas, tiendas y casas shikumen"
    ],
    [
     "sh_tianzifang_02",
     "Pasaje estrecho de ladrillo de Tianzifang con cables y tiendas"
    ],
    [
     "sh_xintiandi_01",
     "Calle peatonal de Xintiandi con plátanos y casas shikumen restauradas"
    ],
    [
     "sh_huangpu_01",
     "Barco turístico iluminado en el Huangpu frente al skyline de Lujiazui"
    ]
   ]
  },
  {
   "d": "Dom 15",
   "c": "Shanghái",
   "t": "Torre de Shanghái, AP Plaza, spa y vuelo",
   "img": "shanghai_1",
   "cap": "Pudong, la última postal del viaje",
   "x": "<b>08:30.</b> Check-out y maletas en consigna del hotel. Metro a Lujiazui: Torre de Shanghái, el mirador si solo pagáis uno, en el piso 118 a 546 metros (180 yuanes; se compra el mismo día según la niebla). Después, la pasarela peatonal circular de Lujiazui.<br><b>11:00.</b> AP Plaza (亚太盛汇), el mercado de imitaciones bajo la estación Science and Technology Museum (línea 2): cientos de puestos, regateo y caos, de hora y media a dos horas y media.<br><b>13:30.</b> Comida de congyou banmian (fideos con aceite de cebolleta) y paigu niangao.<br><b>14:30.</b> Maletas del hotel (o directas al spa si las admiten) y spa Young·SPACE en Lujiazui hasta las 20:30: piscinas, saunas, masaje, ducha, cena y un rato de descanso en las cápsulas antes del vuelo. Pasaporte encima.<br><b>20:30.</b> Metro línea 2 directo a Pudong desde Century Avenue (unos 45 minutos) o Maglev desde Longyang Road (8 minutos, deja de circular hacia las 21:40).<br><b>21:30.</b> En Pudong T2. Vuelo de las 00:40 y a las 07:55 del lunes 16 en Barcelona, festivo en Aragón. Plan para la vuelta: dormid en el avión, a la llegada luz de tarde y a la cama no antes de las 23:00.",
   "r": "<b>AP Plaza</b> (亚太盛汇), bajo la estación de metro Science and Technology Museum (línea 2, Pudong), de 11:00 a 13:30: cientos de puestos de ropa, zapatillas, bolsos, relojes, gafas y electrónica. Las guías de 2026 avisan de que las buenas copias escasean: se va por la experiencia y el regateo. Mismas reglas que en Pekín.",
   "f": [
    [
     "sh_lujiazui_01",
     "Perla Oriental, World Financial Center y Torre de Shanghái de noche desde el Bund"
    ],
    [
     "sh_lujiazui_02",
     "Rascacielos de Lujiazui en la hora azul, vistos desde el Bund"
    ],
    [
     "sh_lujiazui_03",
     "Perla Oriental iluminada en rojo y torres de Pudong reflejadas en el río"
    ],
    [
     "sh_lujiazui_04",
     "Skyline de Pudong de noche con las luces de colores de los rascacielos"
    ],
    [
     "sh_torre_01",
     "Torre de Shanghái junto al World Financial Center y la Jin Mao"
    ],
    [
     "sh_torre_02",
     "Vista desde el mirador de la Torre de Shanghái sobre la Perla Oriental y el Huangpu"
    ],
    [
     "sh_torre_03",
     "Lujiazui y el meandro del Huangpu desde lo alto de la Torre de Shanghái"
    ],
    [
     "sh_pasarela_01",
     "Pasarela peatonal circular elevada sobre la rotonda de Lujiazui"
    ],
    [
     "sh_maglev_01",
     "Tren Maglev de Shanghái sobre su vía elevada"
    ]
   ]
  }
 ],
 "trenes": [
  {
   "leg": -1,
   "d": "Sáb 31 jul",
   "modo": "bus",
   "de": "Aeropuerto de Pekín T3 (cola de taxis frente a la puerta 7)",
   "a": "Hotel",
   "tren": "Taxi oficial o Airport Express",
   "hora": "Al salir, hacia las 20:00",
   "dur": "40 a 50 min",
   "plaza": "Taxi con taxímetro, 120 a 160 yuanes",
   "venta": "Allí mismo"
  },
  {
   "leg": 1,
   "d": "Mar 3 ago",
   "modo": "tren",
   "de": "Beijing West (北京西站), no Fengtai ni Qinghe",
   "a": "Xi'an (西安站, la central)",
   "tren": "D19, nocturno con literas",
   "hora": "20:41 a 08:35 (+1)",
   "dur": "11 h 54",
   "plaza": "Litera de primera, compartimento de 4 con puerta",
   "venta": "19 de julio",
   "alt": "D43 de las 20:29. De día, el G351 de las 07:55 a Xi'an North llega a las 12:05"
  },
  {
   "leg": 3,
   "d": "Jue 5 ago",
   "modo": "tren",
   "de": "Xi'an (西安站)",
   "a": "Chengdú (成都站, la del norte)",
   "tren": "K385, nocturno con literas",
   "hora": "21:03 a 08:08 (+1)",
   "dur": "11 h 05",
   "plaza": "Litera blanda, compartimento de 4 con puerta",
   "venta": "21 de julio",
   "alt": "Confirmad la hora (alguna fuente da 21:40). De día, el D1921 de las 09:48 de Xi'an North llega a Chengdu East a las 13:32"
  },
  {
   "leg": 4,
   "d": "Sáb 7 ago",
   "modo": "tren",
   "de": "Chengdu East (成都东站)",
   "a": "Chongqing North (重庆北站), la céntrica",
   "tren": "G8685 o similar",
   "hora": "Hacia las 09:20 a 11:00",
   "dur": "1 h 41",
   "plaza": "Segunda clase basta; fila 1 o última para las maletas",
   "venta": "23 de julio"
  },
  {
   "leg": 5,
   "d": "Lun 9 ago",
   "modo": "tren",
   "de": "Chongqing East (重庆东站), a 21 km, no North",
   "a": "Fenghuang Gucheng (凤凰古城站)",
   "tren": "G2321",
   "hora": "12:55 a 16:46",
   "dur": "3 h 51",
   "plaza": "Primera o segunda clase",
   "venta": "25 de julio, primer minuto (solo tres directos)",
   "alt": "Transbordo en Huaihua Sur"
  },
  {
   "leg": 6,
   "d": "Mar 10 ago",
   "modo": "tren",
   "de": "Fenghuang Gucheng (凤凰古城站)",
   "a": "Furongzhen (芙蓉镇站), todo junto",
   "tren": "G5666",
   "hora": "17:35 a 18:09",
   "dur": "34 min",
   "plaza": "Segunda clase",
   "venta": "26 de julio",
   "alt": "Coche con chófer, unos 50 min"
  },
  {
   "leg": 7,
   "d": "Mié 11 ago",
   "modo": "bus",
   "de": "Furong (hotel)",
   "a": "Zhangjiajie y después la Puerta de la Montaña de Tianmen (天门山山门)",
   "tren": "Coche con chófer, reservado con el hotel",
   "hora": "09:30 a 11:00",
   "dur": "1 h 30",
   "plaza": "Unos 36 euros, se paga allí",
   "venta": "Al reservar el hotel o el día de llegada"
  },
  {
   "leg": 8,
   "d": "Vie 13 ago",
   "modo": "avion",
   "de": "Zhangjiajie Hehua",
   "a": "Shanghái Pudong",
   "tren": "HO2200 de Juneyao",
   "hora": "20:20 a 22:25",
   "dur": "2 h 05",
   "plaza": "Turista",
   "venta": "Cuando salga el horario de verano, hacia finales de marzo",
   "alt": "En tren: nocturno K1374, unas 20 h hasta Shanghai Songjiang (venta el 29 de julio), o rápido de día G1367 a Hongqiao"
  },
  {
   "leg": -1,
   "d": "Dom 15 ago",
   "modo": "tren",
   "de": "Century Avenue o Longyang Road",
   "a": "Aeropuerto de Pudong T2",
   "tren": "Metro línea 2 o Maglev",
   "hora": "Hacia las 20:30 (el Maglev deja de circular hacia las 21:40)",
   "dur": "45 min en metro, 8 en Maglev",
   "plaza": "Sin reserva",
   "venta": "En la estación"
  }
 ],
 "trenesNota": "Nombres de estación tal como salen en Trip.com, para buscar el pedido y para enseñárselos al conductor del Didi. Las maletas grandes no caben encima del asiento: van en los estantes del extremo del vagón, así que pedid la fila 1 o la última. En el Didi normal (快车) entran dos maletas grandes; si el coche es pequeño, 优享 o 六座. Didi admite reservas hasta 7 días antes con precio cerrado."
}},
{id:2,oculta:true,name:"El triángulo clásico",hex:"#B8195C",hexm:"#FB7CA9",curve:.13,classic:true,
 sub:"El primer viaje a China de toda la vida",
 may:{
  sub:"Shanghái · Suzhou · Hangzhou · Xi'an · Pekín",
  pitch:"El primer viaje a China de toda la vida: Shanghái, los Guerreros, la Ciudad Prohibida y la Muralla. Es el circuito que hace todo el mundo, y por algo es. El aviso es serio: también es el que peor encaja con vuestras fechas.",
  yes:["Muralla en Mutianyu","Terracota","Ciudad Prohibida","Shanghái","Todo en tren"],
  no:["Sin Shenzhen","Sin desierto","Sin naturaleza","El más masificado"],
  legs:[["shanghai","suzhou","tren",100,"30 min"],["shanghai","hangzhou","tren",170,"1 h"],["shanghai","xian","tren",1500,"6 h"],["xian","beijing","tren",1200,"4 h 30"],["beijing","mutianyu","bus",70,"1 h 30"]],
  days:[
  {d:"Dom 2",t:"Aterrizaje en Shanghái",img:"bund_1",cap:"El Bund, fachada colonial a un lado del río y Pudong al otro",x:"Llegada al amanecer en vuelo directo desde Barcelona o Madrid. El Bund al atardecer es el contraste que define la ciudad. Cena en la antigua concesión francesa."},
  {d:"Lun 3",t:"Shanghái entera",img:"shanghai_1",cap:"Pudong: en 1990 esto eran campos de arroz",x:"Pudong, el Museo de Shanghái y Tianzifang. Shanghái aguanta bien el Golden Week porque es enorme y no depende de un solo monumento con aforo."},
  {d:"Mar 4",t:"Suzhou, los jardines",img:"suzhou_1",cap:"Jardín del Administrador Humilde, patrimonio de la Unesco",x:"Media hora de tren. Suzhou conserva los mejores jardines clásicos chinos, paisajes en miniatura diseñados entre los siglos XI y XIX.",m:["tren","Shanghái a Suzhou, 30 min"]},
  {d:"Mié 5",t:"Hangzhou y el Lago del Oeste",img:"hangzhou_1",cap:"El Lago del Oeste, mil años de jardín construido",x:"El lago que los poetas chinos llevan un milenio describiendo, con diques, pagodas e islas artificiales.",m:["tren","Shanghái a Hangzhou, 1 h"]},
  {d:"Jue 6",t:"Tren a Xi'an",img:"crh_1",cap:"Seis horas a 300 km/h cruzando China",x:"Día de traslado, lo mejor que se puede hacer el último día del festivo. Por la tarde, el barrio musulmán de Xi'an.",m:["tren","Shanghái a Xi'an, 6 h"]},
  {d:"Vie 7",t:"Guerreros de Terracota",img:"terracota_2",cap:"Ocho mil figuras, ninguna con la misma cara",x:"Primer día limpio tras el Golden Week, por eso la ruta va en este orden y no al revés. Por la tarde, la muralla de Xi'an en bici."},
  {d:"Sáb 8",t:"Tren a Pekín",img:"tiantan_1",cap:"Templo del Cielo: a las siete de la mañana es un parque de barrio",x:"Cuatro horas y media de tren. Por la tarde, el Templo del Cielo y los hutongs de Gulou en bici.",m:["tren","Xi'an a Pekín, 4 h 30"]},
  {d:"Dom 9",t:"Ciudad Prohibida",img:"gugong_2",cap:"9.000 estancias, el mayor conjunto palaciego del mundo",x:"Desde 2026 no se venden entradas en taquilla. Hay que reservar online con pasaporte, el cupo es de 40.000 al día y se abre solo siete días antes a las 20:00 hora de Pekín."},
  {d:"Lun 10",t:"Gran Muralla en Mutianyu",img:"mutianyu_1",cap:"Mutianyu: restaurada, con teleférico y tobogán de bajada",x:"La versión cómoda de la Muralla. Más gente que en Gubeikou, pero se llega en hora y media y no hay que caminar quince kilómetros.",m:["bus","Pekín a Mutianyu, 1 h 30"]},
  {d:"Mar 11",t:"Palacio de Verano",img:"yiheyuan_1",cap:"El lago Kunming, excavado a mano en el siglo XVIII",x:"El jardín imperial donde la corte huía del calor: tres kilómetros cuadrados de lago artificial cavados a mano. Vuelo de madrugada."}]},
 ago:{
  sub:"Pekín · Datong · Xi'an · Huangshan · Hangzhou · Suzhou · Shanghái",
  pitch:"El circuito de agencia de toda la vida, ampliado por el norte y por el sur. Pekín con la Ciudad Prohibida, el Templo del Cielo y la Muralla; Datong y sus budas del siglo V, a 1.000 metros y más fresco; los Guerreros de Xi'an; Huangshan, el refugio climático del este a 1.860 metros; y el remate de lagos, jardines y canales en Hangzhou y Suzhou antes de Shanghái. Es la referencia: lo hace todo el mundo, y por algo es.",
  yes:["Ciudad Prohibida","Muralla en Mutianyu","Templo del Cielo","Grutas de Yungang","Templo colgante","Terracota","Huangshan","Lago del Oeste","Jardines de Suzhou"],
  no:["Sin Shenzhen","Sin desierto","Sin pandas","El más masificado"],
  warnTitle:"El salto de Xi'an a Huangshan",
  warn:"El tramo que sostiene la ruta es el del domingo 8: el vuelo directo de Xi'an a Huangshan Tunxi dura unas 2 h 20, pero opera pocos días por semana y no hay garantía de que vuele ese domingo. Se confirma antes de cerrar nada más; si no vuela, tren directo de unas 7 a 9 horas (un solo par al día). Además Datong a Xi'an tiene solo dos directos rápidos al día, y en agosto Xi'an y Shanghái pasan de 35 grados con las vacaciones escolares llenando cada monumento.",
  legs:[["beijing","mutianyu","bus",70,"1 h 15"],["beijing","datong","tren",340,"unas 2 h"],["datong","xian","tren",860,"unas 5 h"],["xian","terracota","bus",40,"1 h"],["xian","huangshan","avion",1000,"2 h 20"],["huangshan","hangzhou","tren",260,"1 h 30"],["hangzhou","suzhou","tren",160,"1 h 30"],["suzhou","shanghai","tren",100,"30 min"]],
  days:[
  {d:"Sáb 31",t:"Llegada a Pekín de noche",img:"tiantan_1",cap:"Templo del Cielo: a las siete de la mañana es un parque de barrio",x:"Aterrizaje en la T3 a las 18:50; entre pasaporte, maletas y tráfico, al hotel hacia las 21:00. Cena ligera cerca y a dormir. Desde España quedaron hechas dos reservas: la Ciudad Prohibida para mañana (abrió el domingo 25 a las 20:00 de Pekín, las 14:00 en España) y la plaza de Tiananmen en su mini programa de WeChat. El tren a Datong del miércoles salió a la venta en 12306 el 20 de julio."},
  {d:"Dom 1",t:"Ciudad Prohibida",img:"gugong_2",cap:"9.000 estancias, el mayor conjunto palaciego del mundo",x:"Hoy y no mañana, que los lunes cierra. Sin taquilla: se entra escaneando el pasaporte con la reserva hecha siete días antes. Por el Templo Ancestral (dos yuanes, sin cola) se esquiva el vallado de Tiananmen, que pide su propia reserva. De sur a norte, sin un centímetro de sombra: agua y gorra. Remate en la colina de Jingshan, con los tejados dorados a los pies, y tarde de hutongs en Gulou y Houhai cuando afloja el calor."},
  {d:"Lun 2",t:"Gran Muralla en Mutianyu",img:"mutianyu_1",cap:"Mutianyu: telesilla de subida y tobogán de bajada",x:"Lunes de Muralla, el día que la Ciudad Prohibida cierra. Salida a las 07:00 para llegar a la apertura antes que los grupos y que el calor. Telesilla a la torre 6, paseo hasta la 12, que suele estar casi vacía, y bajada en el tobogán de 1.580 metros (combo de 140 yuanes; el teleférico de cabina sube a la torre 14, sin tobogán). Principios de agosto es la punta de lluvias en Pekín: con lluvia el tobogán no abre.",m:["bus","Pekín a Mutianyu, 1 h 15"]},
  {d:"Mar 3",t:"Templo del Cielo y Palacio de Verano",img:"yiheyuan_1",cap:"El lago Kunming, excavado a mano en el siglo XVIII",x:"Templo del Cielo a las 07:00, cuando es un parque de barrio con abuelos haciendo tai chi y cantando ópera; los grupos llegan pasadas las 09:00. Mediodía a cubierto y tarde en el Palacio de Verano, justo el sitio adonde huía la corte del calor de Pekín: barca por el lago Kunming y la galería cubierta de 728 metros. Cena de pato laqueado y maletas listas para el tren de mañana."},
  {d:"Mié 4",t:"Datong y las grutas de Yungang",img:"yungang_1",cap:"Yungang: 51.000 estatuas budistas talladas en el siglo V",x:"Tren rápido a Datong Sur, poco menos de dos horas. Sale de Beijing Norte o de Qinghe y en la búsqueda aparecen las dos: mirad cuál es la vuestra. Datong está a unos 1.000 metros y en agosto se nota. Tarde en las grutas de Yungang, patrimonio de la Unesco, con reserva previa y pasaporte: budas excavados en la arenisca hace 1.500 años y mucha menos gente que en Pekín. Al anochecer, paseo por la muralla restaurada.",m:["tren","Pekín a Datong, unas 2 h"]},
  {d:"Jue 5",t:"El templo colgante de Hengshan",img:"yungang_1",cap:"Los budas de Yungang, tallados hace 1.500 años",x:"Coche con chófer contratado en el hotel hasta Hunyuan, una hora y cuarto, para el templo colgante de Xuankong: encajado en la pared de un barranco desde hace 1.500 años y sujeto con vigas de madera. Subir a sus pasarelas tiene cupo diario: reservadlo en cuanto se pueda en la cuenta oficial de WeChat y llegad a la apertura. De vuelta, el monasterio de Huayan y cena de fideos cortados a cuchillo, la especialidad de Shanxi.",m:["bus","Datong al templo colgante, 1 h 15 por trayecto","stay"]},
  {d:"Vie 6",t:"Tren rápido a Xi'an",img:"xianwall_1",cap:"La muralla Ming de Xi'an, 14 kilómetros en bici",x:"De Datong Sur a Xi'an Norte, unas cinco horas atravesando Shanxi. Solo hay dos directos rápidos al día y el de la mañana salía hacia las 08:00 en el horario publicado (comprobadlo en 12306): billete en el primer minuto de la venta, el 22 de julio. Plan B: transbordo en Taiyuan Sur. Llegada a primera hora de la tarde, siesta y muralla Ming en bici a partir de las 18:00. Cena en el barrio musulmán.",m:["tren","Datong Sur a Xi'an Norte, unas 5 h"]},
  {d:"Sáb 7",t:"Guerreros de Terracota",img:"terracota_2",cap:"Ocho mil figuras, ninguna con la misma cara",x:"Mañana a cubierto en el museo de Historia de Shaanxi, con reserva previa, y entrada a los Guerreros a las 13:30 con los fosos en orden inverso, 3, 2 y 1, a contracorriente de los tours de la mañana. Las fosas están cubiertas pero sin climatizar y Xi'an llega a 40 grados: carrito eléctrico del jardín Lishan (15 yuanes) y agua de sobra. Al terminar, el bus gratuito lleva a los Carruajes de Bronce.",m:["bus","Xi'an a los Guerreros, 1 h"]},
  {d:"Dom 8",t:"Vuelo a las Montañas Amarillas",img:"xianfood_1",cap:"Biangbiang mian, cuyo carácter tiene 58 trazos",x:"Gran Pagoda de la Oca Salvaje temprano, un último biangbiang mian y vuelo directo a Huangshan Tunxi, unas 2 h 20. Es el tramo delicado: opera pocos días por semana, así que se confirma este domingo antes de cerrar el resto. Si no vuela, tren directo de unas 7 a 9 horas desde Xi'an Norte. Noche en Tangkou, al pie de la montaña, con una mochila pequeña preparada: arriba se sube con lo justo.",m:["avion","Xi'an a Huangshan Tunxi, 2 h 20"]},
  {d:"Lun 9",t:"Subida a Huangshan",img:"huangshan_1",cap:"Mar de nubes desde lo alto de las Montañas Amarillas",x:"Teleférico de Yungu o de Yuping a primera hora, que las colas de las vacaciones escolares crecen con el sol. Arriba, a 1.860 metros, se está entre 8 y 10 grados más fresco que en Shanghái: pinos retorcidos, granito y el mar de nubes de la pintura clásica china. Ruta por Beihai y el gran cañón de Xihai, y noche en un hotel de la cumbre, reservado con meses: son pocos, caros y se llenan en agosto."},
  {d:"Mar 10",t:"Amanecer en la cumbre y Hangzhou",img:"hangzhou_1",cap:"El Lago del Oeste, mil años de jardín construido",x:"Amanecer desde Guangmingding o la terraza de Qingliang, que es la razón de dormir arriba; si hay niebla, el mar de nubes compensa. Bajada en teleférico, bus a la estación de Huangshan Norte y tren de hora y media a Hangzhou. Ojo a la estación de llegada: unos trenes paran en Hangzhou Oeste y otros en Hangzhou Este. Atardecer en el dique Bai del Lago del Oeste.",m:["tren","Huangshan Norte a Hangzhou, 1 h 30"]},
  {d:"Mié 11",t:"Hangzhou, lotos y té",img:"hangzhou_1",cap:"Diques, pagodas e islas artificiales sobre el lago",x:"Bici por el dique Su a las 07:00, cuando el lago es de los que corren y hacen tai chi. En agosto los lotos están en flor, que es la estampa clásica del Lago del Oeste. Las horas de calor, en las colinas de Longjing, entre plantaciones de té y con una taza a la sombra. Al anochecer, la pagoda Leifeng iluminada y paseo por la orilla de Hubin."},
  {d:"Jue 12",t:"Suzhou, los jardines",img:"suzhou_1",cap:"Jardín del Administrador Humilde, patrimonio de la Unesco",x:"Tren de primera hora a Suzhou, alrededor de hora y media. Jardín del Administrador Humilde nada más llegar, antes que los grupos (en vacaciones escolares, entrada online con pasaporte), y el del Maestro de las Redes, pequeño y perfecto. El calor del mediodía, en el museo de Suzhou de I. M. Pei, gratuito con reserva. De noche, Pingjiang Lu junto al canal, que es cuando se puede pasear.",m:["tren","Hangzhou a Suzhou, 1 h 30"]},
  {d:"Vie 13",t:"Canales de Suzhou y el Bund",img:"bund_1",cap:"El Bund, fachada colonial a un lado y Pudong al otro",x:"Mañana de canales: Shantang Jie en barca de madera o, si preferís algo menos urbano, el pueblo de agua de Tongli. Tren de media hora a Shanghái; mirad la estación, que hay trenes a Hongqiao y a la estación central. Metro al hotel, ducha y, al anochecer, el Bund con Pudong encendido enfrente: en agosto es la hora en que Shanghái se puede caminar.",m:["tren","Suzhou a Shanghái, 30 min"]},
  {d:"Sáb 14",t:"Shanghái entera",img:"shanghai_1",cap:"Pudong: en 1990 esto eran campos de arroz",x:"Pudong por la mañana, con el mirador de la Shanghai Tower, el más alto de China, mejor temprano y con el cielo limpio. Mediodía a cubierto en el Museo de Shanghái de la plaza del Pueblo, gratuito con reserva. Tarde en la Concesión Francesa a la sombra de los plátanos y Tianzifang. Agosto es temporada de tifones: con alerta, museos y centros comerciales salvan el día, y conviene vigilar el vuelo de mañana."},
  {d:"Dom 15",t:"Último día y vuelo desde Pudong",img:"bund_1",cap:"El Bund, la última postal antes del aeropuerto",x:"Maletas en consigna del hotel y jardín Yu a la apertura, con la ciudad vieja antes del calor. Tarde tranquila en Xintiandi o con un masaje de pies. Hacia las 20:00, a por las maletas y metro línea 2 o taxi a Pudong T2, para estar en el mostrador hacia las 21:30. Vuelo de las 00:40 y a las 07:55 del lunes en Barcelona, festivo en Aragón. Con tifón anunciado, mirad el estado del vuelo antes de salir."}]}},
{id:3,oculta:true,name:"El clásico ampliado",hex:"#33608E",hexm:"#8CBCE8",curve:-.07,classic:true,
 sub:"El circuito de dos semanas de las agencias",
 may:{
  sub:"Shenzhen · Yangshuo · Longji · Chengdú · Xi'an · Pekín",
  pitch:"El circuito clásico completo, el de dos semanas de las agencias, comprimido en diez días: tecnología, los karst de Guilin, las terrazas de arroz, los pandas, los Guerreros y la Muralla. Es el que más cosas distintas mete sin salirse de lo conocido.",
  yes:["Muralla en Mutianyu","Terracota","Pandas de Chengdú","Shenzhen","Karst de Guilin","Minorías zhuang y yao"],
  no:["Sin desierto","Sin Zhangjiajie","Todo muy visitado"],
  legs:[["shenzhen","guilin","tren",700,"2 h 40"],["guilin","yangshuo","bus",65,"1 h 15"],["guilin","longji","bus",100,"2 h"],["guilin","chengdu","avion",1100,"1 h 45"],["chengdu","xian","tren",700,"3 h 10"],["xian","beijing","tren",1200,"4 h 30"],["beijing","mutianyu","bus",70,"1 h 30"]],
  days:[
  {d:"Dom 2",t:"Aterrizaje en Shenzhen",img:"shenzhen_2",cap:"Huaqiangbei, el mayor mercado de electrónica del mundo",x:"Llegada al amanecer. Huaqiangbei, robotaxi por Nanshan y Gangxia North. Un día en la China de 2027 antes de irse a la China de postal."},
  {d:"Lun 3",t:"Tren a Guilin y Yangshuo",img:"yangshuo_1",cap:"Los karst de Yangshuo saliendo de los campos de arroz",x:"Menos de tres horas de tren y cambia el país entero: torres de caliza de doscientos metros brotando de los campos.",m:["tren","Shenzhen a Guilin, 2 h 40"]},
  {d:"Mar 4",t:"Río Li en balsa de bambú",img:"lijiang_1",cap:"El paisaje que sale en el billete de 20 yuanes",x:"Bajar el río Li en balsa entre los karst es literalmente la imagen del billete de 20 yuanes. Por la tarde, bici por el campo entre pueblos."},
  {d:"Mié 5",t:"Terrazas de Longji",img:"longji_1",cap:"Terrazas talladas hace 650 años por los zhuang y los yao",x:"Dos horas al norte. Una ladera entera esculpida en terrazas desde la dinastía Yuan. En mayo están inundadas y reflejan el cielo.",m:["bus","Guilin a Longji, 2 h"]},
  {d:"Jue 6",t:"Vuelo a Chengdú",img:"chengdu_2",cap:"Jinli, calle de casas de té y comida callejera",x:"Hora y tres cuartos de vuelo. Tarde de casas de té en el parque del Pueblo y hotpot sichuanés por la noche.",m:["avion","Guilin a Chengdú, 1 h 45"]},
  {d:"Vie 7",t:"Pandas al amanecer",img:"panda_2",cap:"La base de cría de Chengdú, doscientos y pico ejemplares",x:"A la base a las 7:30, la única franja en la que los pandas están despiertos y comiendo. A partir de las diez se duermen y llega el grueso de la gente."},
  {d:"Sáb 8",t:"Tren a Xi'an",img:"xianfood_1",cap:"Biangbiang mian, cuyo carácter chino tiene 58 trazos",x:"Tres horas de tren atravesando las montañas Qinling por túnel. Tarde de muralla en bici y noche en el barrio musulmán.",m:["tren","Chengdú a Xi'an, 3 h 10"]},
  {d:"Dom 9",t:"Guerreros de Terracota",img:"terracota_1",cap:"Cada rostro es distinto, se cree que retratos reales",x:"Ocho mil figuras enterradas 2.200 años hasta que unos campesinos cavaron un pozo en 1974. Tren nocturno a Pekín.",m:["tren","Xi'an a Pekín, 4 h 30"]},
  {d:"Lun 10",t:"Gran Muralla en Mutianyu",img:"mutianyu_1",cap:"Mutianyu, la sección restaurada más manejable",x:"Teleférico para subir, tobogán para bajar y hora y media desde Pekín.",m:["bus","Pekín a Mutianyu, 1 h 30"]},
  {d:"Mar 11",t:"Ciudad Prohibida y Templo del Cielo",img:"gugong_2",cap:"La entrada a la Ciudad Prohibida",x:"Reserva obligatoria con pasaporte, siete días antes y sin taquilla. Por la tarde el Templo del Cielo y los hutongs. Vuelo de madrugada."}]},
 ago:{
  sub:"Pekín · Xi'an · Chengdú · Leshan · Longji · Yangshuo · Shenzhen · Shanghái",
  pitch:"El circuito de dos semanas de las agencias, ordenado de norte a sur y rematado en Shanghái. Pekín con la Ciudad Prohibida y Mutianyu, los Guerreros en Xi'an, pandas y el Buda de Leshan en Sichuan, las terrazas de Longji y los karst del río Li, un día largo en la Shenzhen de los robotaxis y los drones, y Shanghái para cerrar. Es la ruta que más postales distintas mete sin salir de lo conocido, a cambio de compartirlas con media China de vacaciones.",
  yes:["Ciudad Prohibida","Muralla en Mutianyu","Terracota","Pandas de Chengdú","Buda de Leshan","Terrazas de Longji","Karst del río Li","Shenzhen","Shanghái"],
  no:["Sin desierto","Sin Zhangjiajie","Todo muy visitado","Calor húmedo casi todos los días"],
  warnTitle:"Agosto en el sur: calor, colas y tifones",
  warn:"Todos los nodos de esta ruta pasan de 33 °C con humedad, y agosto es el mes de vacaciones escolares chinas: pandas, Leshan, Mutianyu y el río Li se llenan desde media mañana. Por eso cada visita va al abrir. El tramo de Guilin, Yangshuo, Shenzhen y Shanghái cae en plena temporada de tifones, que cancelan trenes, balsas y vuelos con un día de aviso. Como el vuelo de vuelta sale de Pudong, comprad el Shenzhen a Shanghái del viernes 13 y no del domingo, y seguro con cobertura de cancelación.",
  legs:[["beijing","mutianyu","bus",75,"1 h 30"],["beijing","xian","tren",1200,"4 h 30"],["xian","chengdu","tren",700,"3 h 30"],["chengdu","leshan","tren",130,"1 h"],["chengdu","guilin","avion",1100,"1 h 45"],["guilin","longji","bus",100,"2 h"],["longji","yangshuo","bus",170,"3 h"],["yangshuo","shenzhen","tren",540,"2 h 50"],["shenzhen","shanghai","avion",1200,"2 h 20"]],
  days:[
  {d:"Sáb 31",t:"Llegada nocturna a Pekín",img:"hutong_1",cap:"Los hutongs de Gulou, el Pekín a pie de calle",x:"Aterrizáis en la T3 a las 18:50 y entre inmigración y maletas se os va una hora larga. Taxi o Airport Express al hotel, mejor por Dongcheng, cerca de los hutongs y de la Ciudad Prohibida. Cena ligera de jiaozi y a dormir: mañana se madruga. Si es finales de julio, contad con tormenta de tarde, que es la temporada de lluvias de Pekín."},
  {d:"Dom 1",t:"Ciudad Prohibida y Jingshan",img:"gugong_2",cap:"9.000 estancias y ni un centímetro de sombra",x:"Reservada con pasaporte siete días antes, el domingo 25 de julio a las 20:00 de Pekín (las 14:00 en España): sin taquilla y en agosto se agota en minutos. Entrada a las 8:30, de sur a norte, y remate en la colina de Jingshan con la vista de los tejados. No crucéis por Tiananmen sin su reserva propia en WeChat. Tarde en los hutongs y el lago Houhai."},
  {d:"Lun 2",t:"Gran Muralla en Mutianyu",img:"mutianyu_1",cap:"Telesilla a la torre 6 y tobogán de bajada",x:"Lunes de Muralla porque la Ciudad Prohibida cierra los lunes. Salida a las 7:00 para estar en la apertura, antes del calor y de los grupos escolares. Telesilla hasta la torre 6, caminata hasta la 12, que suele estar casi vacía, y bajada en el tobogán de 1.580 metros. Vuelta a Pekín a mediodía y Templo del Cielo a última hora, cuando baja el sol.",m:["bus","Pekín a Mutianyu, 1 h 30"]},
  {d:"Mar 3",t:"Tren a Xi'an y muralla en bici",img:"xianwall_1",cap:"La muralla de Xi'an, 14 km de perímetro entero",x:"Tren de alta velocidad de la mañana desde Pekín Oeste, unas 4 h 30, y llegada a Xi'an para comer. Las horas centrales pasan de 35 grados: hotel o museo con aire. Hacia las 18:00, los 14 km de muralla en bici, con la luz baja sobre las torres. Cena en el barrio musulmán: biangbiang mian, roujiamo y brochetas de cordero.",m:["tren","Pekín a Xi'an, 4 h 30"]},
  {d:"Mié 4",t:"Guerreros de Terracota",img:"terracota_1",cap:"Cada rostro es distinto, se cree que retratos reales",x:"Mañana en el museo de Historia de Shaanxi, con aire acondicionado y reserva previa con pasaporte. Entrada a los Guerreros a las 13:30 y fosos en orden inverso, 3, 2 y 1, a contracorriente de los tours de la mañana. Carrito eléctrico en el jardín Lishan, que a 38 grados los 2,5 km a pie no tienen gracia. Al acabar, el bus gratuito a los Carruajes de Bronce."},
  {d:"Jue 5",t:"Tren a Chengdú",img:"chengdu_2",cap:"Jinli, calle de casas de té y comida callejera",x:"Unas 3 h 30 de tren cruzando las montañas Qinling por túnel. Tarde de casas de té en el parque del Pueblo, donde los jubilados juegan al mahjong y os limpian las orejas por unos yuanes. Paseo por Kuanzhai Xiangzi y hotpot sichuanés por la noche, pidiendo el caldo yuanyang (mitad picante, mitad suave) si no sois de guindilla.",m:["tren","Xi'an a Chengdú, 3 h 30"]},
  {d:"Vie 6",t:"El Buda gigante de Leshan",img:"leshan_1",cap:"71 metros tallados en el acantilado en el siglo VIII",x:"Va en viernes a propósito: en fin de semana de agosto la escalera lateral del Buda acumula horas de cola. Tren de las 7:00, una hora, y taxi a la entrada. Bajáis por la escalera de los nueve recodos hasta los pies, con 71 metros de piedra encima. Si la cola es imposible, el barco desde el río lo enseña entero en veinte minutos. Vuelta a Chengdú por la tarde.",m:["tren","Chengdú a Leshan, 1 h"]},
  {d:"Sáb 7",t:"Pandas y vuelo a Guilin",img:"panda_2",cap:"La base de cría de Chengdú, doscientos y pico ejemplares",x:"En la puerta a las 7:30. En agosto no es un consejo: en cuanto pasa de 26 grados los pandas se meten en salas climatizadas, y de 8:00 a 10:00 desayunan fuera. A mediodía, vuelo a Guilin, 1 h 45, y coche con conductor contratado de antemano hasta las terrazas, unas 2 h. Llegáis al pueblo de Dazhai o Ping'an con la última luz.",m:["avion","Chengdú a Guilin, 1 h 45, y coche a Longji"]},
  {d:"Dom 8",t:"Terrazas de Longji",img:"longji_1",cap:"Terrazas talladas hace 650 años por los zhuang y los yao",x:"Una montaña entera esculpida en terrazas desde la dinastía Yuan. En agosto están verdes y crecidas, que para muchos es mejor foto que inundadas. Subid al mirador al amanecer, antes de que lleguen los autobuses del día, y caminad de Dazhai a Tiantou entre aldeas yao. Se duerme otra vez en la montaña, que de noche refresca y se agradece."},
  {d:"Lun 9",t:"Bajada a Yangshuo y Yulong",img:"yangshuo_1",cap:"Karst y campos de arroz alrededor de Yangshuo",x:"Coche de unas 3 h hasta Yangshuo. Por la tarde, cuando afloja el calor, balsa de bambú por el río Yulong, más tranquilo que el Li, y bici entre los arrozales hasta el puente del Dragón. Atardecer desde la colina de Xianggong o desde el campo. Cena de pescado a la cerveza, el plato del pueblo, lejos de la calle Oeste.",m:["bus","Longji a Yangshuo, 3 h"]},
  {d:"Mar 10",t:"Río Li en balsa de bambú",img:"lijiang_1",cap:"El paisaje que sale en el billete de 20 yuanes",x:"El tramo bueno es de Yangdi a Xingping: torres de caliza de doscientos metros a los dos lados y, en Xingping, el paisaje exacto del billete de 20 yuanes. Salida temprano por el calor y la gente. Si ha llovido fuerte el río va crecido y pueden suspender las balsas: el plan B es el barco grande. Tarde libre en Xingping, pueblo viejo con mucha menos gente."},
  {d:"Mié 11",t:"Tren rápido a Shenzhen",img:"shenzhen_2",cap:"Huaqiangbei, el mayor mercado de electrónica del mundo",x:"La estación de Yangshuo está a unos 40 minutos del pueblo. Hay pocos directos al día a Shenzhen Norte, unas 2 h 50, así que ese billete se compra en el minuto en que sale a la venta en 12306, quince días antes. Tarde en Huaqiangbei, manzanas enteras de componentes, drones y placas, y la estación de metro de Gangxia North, que parece una nave.",m:["tren","Yangshuo a Shenzhen Norte, 2 h 50"]},
  {d:"Jue 12",t:"Shenzhen tecnológica",img:"shenzhen_3",cap:"Ping An Finance Center, 599 metros",x:"El día de la China de 2027. Robotaxi sin nadie al volante por Nanshan, DJI Sky City, reparto con dron de Meituan en el parque Talent y tiendas de robots humanoides. Al atardecer, el mirador del Ping An Finance Center a 599 metros, con aire acondicionado y la bahía de Hong Kong al fondo. Cena en Shekou, junto al mar."},
  {d:"Vie 13",t:"Vuelo a Shanghái y el Bund",img:"bund_1",cap:"El Bund de noche, frente a los rascacielos de Pudong",x:"Vuelo de la mañana, unas 2 h 20, con margen de dos días sobre el vuelo de vuelta por si un tifón cierra los aeropuertos. Tarde en la Concesión Francesa, entre plátanos y casas de ladrillo, y de noche el paseo del Bund con Pudong iluminado enfrente. Las luces se apagan hacia las 22:00 y en agosto la orilla está a reventar."},
  {d:"Sáb 14",t:"Shanghái antigua y moderna",img:"shanghai_1",cap:"Lujiazui, el skyline que hace treinta años eran campos",x:"Jardín Yuyuan a la apertura, antes de que llegue el gentío del sábado, y xiaolongbao en Nanxiang. Por la tarde, el nuevo Museo de Shanghái del Este, con reserva, y el mirador de la Torre de Shanghái, a 546 metros, a la puesta de sol. Tifón en el parte: museos y centros comerciales unidos por metro, que Shanghái tiene de sobra."},
  {d:"Dom 15",t:"Último día y vuelo de madrugada",img:"bund_1",cap:"El Bund a primera hora, con tai chi y paseantes",x:"Mañana en el pueblo de agua de Zhujiajiao, a una hora en metro, o compras en Nanjing Road si aprieta el calor. Maletas en consigna del hotel y cena tranquila. Hacia las 20:00, Maglev o taxi a Pudong: hay que estar en la T2 a las 21:30 para el vuelo de las 00:40 a Barcelona. El lunes 16 es festivo en Aragón, así que hay día para recuperar."}]}},
{id:8,oculta:true,name:"Taiwán, Avatar y el futuro",hex:"#2563EB",hexm:"#70A5FF",curve:.12,
 sub:"Pekín · Taipéi · Shenzhen · Fenghuang · Furong · Zhangjiajie · Xi'an · Shanghái",
 extra:'<h3 class="xh">Avisos operativos para esta ruta</h3>'+
  '<p class="xlede">Entra por Pekín y sale por Shanghái, como los vuelos ya comprados, y por el camino junta Taiwán, la China tecnológica de Shenzhen y el corredor natural de Hunan con la Terracota. Es la más variada de las cuatro y también la que más logística pide.</p>'+
  '<div class="xgrid">'+
  '<div class="xcard"><h4>Dos fronteras de pasaporte</h4><p>Pekín a Taipéi el lunes 2 y Taipéi a Shenzhen el jueves 5 son vuelos internacionales: control de salida y de entrada, huellas y tarjeta de llegada. Contad dos horas y media de aeropuerto en cada uno. El resto del viaje es interior.</p></div>'+
  '<div class="xcard"><h4>Un solo día para la Ciudad Prohibida</h4><p>Solo cabe el domingo 1, porque cierra los lunes y el lunes 2 se vuela a Taiwán. La reserva con pasaporte abre el domingo 25 de julio a las 20:00 de Pekín (14:00 en España) y en agosto se agota en minutos.</p></div>'+
  '<div class="xcard"><h4>Por qué Furong gana a Chongqing</h4><p>Hongyadong exigía un desvío de nueve horas de tren para ver un centro comercial iluminado. Furong está en la misma línea rápida, a 35 minutos de Fenghuang y 30 de Zhangjiajie: un pueblo tujia colgado sobre una cascada de 60 metros que se ilumina de noche.</p></div>'+
  '<div class="xcard"><h4>Zhangjiajie en vacaciones escolares</h4><p>Agosto es el mes de más visitantes del parque. La regla es estar en la puerta al abrir, hacia las 07:00, y hacer primero el ascensor Bailong. Arriba hace entre 5 y 10 grados menos que en el valle.</p></div>'+
  '<div class="xcard"><h4>Terracota en orden 3, 2, 1</h4><p>Entrar a las 13:30 y recorrer las fosas al revés, empezando por la 3, para ir a contracorriente de los grupos de la mañana. El jueves 12 va justo con el tren de la tarde a Shanghái: si no hay plaza, vuelo de unas 2 h 15.</p></div>'+
  '<div class="xcard"><h4>La vuelta desde Shanghái</h4><p>El Air China a Barcelona sale de Pudong, terminal 2, a las 00:40 del lunes 16. El domingo 15 cuenta entero. El Maglev va desde 2021 a 300 km/h como máximo y deja de circular hacia las 21:40: a las 21:30 hay que estar en el aeropuerto.</p></div>'+
  '</div>',
 may:{
  sub:"Taipéi · Shenzhen · Fenghuang · Furong · Zhangjiajie · Xi'an · Shanghái",
  pitch:"La versión adaptada a diez días en mayo: Taipéi y el festival tecnológico de Shenzhen absorben el Golden Week mientras la metrópoli está vacía, para enlazar en tren rápido Fenghuang, la cascada de Furong, Zhangjiajie, Xi'an y Shanghái justo tras el 6 de mayo con los monumentos limpios de aglomeraciones.",
  yes:["Taiwán","Shenzhen tecnológico","Fenghuang sobre el río","Cascada de Furong","Montañas de Avatar","Guerreros de Terracota","Shanghái"],
  no:["Sin Jiufen","Sin Pekín","Ritmo comprimido a diez días"],
  warnTitle:"Orden calculado para esquivar el Golden Week",
  warn:"Shenzhen es una ciudad donde gran parte de la población procede de otras provincias y viaja a sus lugares de origen durante los festivos del 1 al 5 de mayo, por lo que la ciudad se vive sin atascos. El recorrido por Fenghuang, Furong, Zhangjiajie y Xi'an se realiza a partir del 6 de mayo, una vez finalizado el pico vacacional nacional.",
  legs:[["taipei","shenzhen","avion",800,"1 h 45"],["shenzhen","fenghuang","tren",750,"4 h 45"],["fenghuang","furong","tren",60,"34 min"],["furong","zhangjiajie","tren",80,"30 min"],["zhangjiajie","xian","avion",680,"1 h 30"],["xian","shanghai","tren",1500,"6 h"]],
  days:[
  {d:"Dom 2",t:"Aterrizaje en Taipéi",img:"taipei_1",cap:"Taipéi de noche: la torre Taipei 101 dominando la cuenca",x:"Llegada al amanecer con el vuelo internacional. Check-in, templo Longshan y atardecer desde el mirador de la Montaña Elefante. Primera cena en el mercado nocturno de Raohe probando la comida callejera taiwanesa."},
  {d:"Lun 3",t:"Taipéi monumental",img:"taipei_1",cap:"El Memorial Chiang Kai-shek y el horizonte de Taipéi",x:"Memorial Chiang Kai-shek, plaza de la Libertad y compras de electrónica en el distrito tecnológico de Guanghua antes de preparar las maletas para cruzar el estrecho."},
  {d:"Mar 4",t:"Vuelo a Shenzhen en Golden Week",img:"shenzhen_2",cap:"Huaqiangbei en plena actividad",x:"Vuelo directo de hora y tres cuartos a Shenzhen. Ventaja estratégica: en pleno Golden Week la ciudad está despejada porque sus trabajadores se marchan a sus provincias. Huaqiangbei y robotaxis en Nanshan.",m:["avion","Taipéi a Shenzhen, 1 h 45"]},
  {d:"Mié 5",t:"Shenzhen tecnológico",img:"shenzhen_3",cap:"Ping An Finance Center y el distrito financiero",x:"Visita a las tiendas insignia de robótica, estación Gangxia North y preparativos para tomar el tren de alta velocidad hacia Hunan al día siguiente."},
  {d:"Jue 6",t:"AVE a Fenghuang, la ciudad fénix",img:"fenghuang_1",cap:"Casas sobre pilotes en el río Tuojiang al anochecer",x:"Primer día limpio tras el final del Golden Week. Tren de alta velocidad directo de Shenzhen Norte a Fenghuang Gucheng (4 h 45 min). Tarde de callejones y noche de casas tradicionales iluminadas sobre el río.",m:["tren","Shenzhen Norte a Fenghuang Gucheng, 4 h 45"]},
  {d:"Vie 7",t:"Furong: el pueblo sobre la cascada",img:"furong_1",cap:"Furong: casas tujia y la colosal cascada iluminada",x:"Tren rápido a Furongzhen (solo 34 min). Visita a las pasarelas detrás de la cascada de 60 metros y el pueblo milenario suspendido en el acantilado. Noche contemplando el salto de agua iluminado.",m:["tren","Fenghuang a Furongzhen, 34 min"]},
  {d:"Sáb 8",t:"Zhangjiajie y las montañas de Avatar",img:"wulingyuan_1",cap:"Los pilares de cuarcita de Yuanjiajie",x:"Tren rápido a Zhangjiajie (30 min). Ascensor Bailong a 326 metros de altura, miradores del pilar Aleluya de Avatar y teleférico de Tianzi Shan. Vuelo nocturno a Xi'an.",m:["avion","Zhangjiajie a Xi'an, 1 h 30"]},
  {d:"Dom 9",t:"Guerreros de Terracota en Xi'an",img:"terracota_2",cap:"Mausoleo de Qin Shi Huang",x:"Visita a los Guerreros a las 13:30 en orden 3, 2 y 1, muralla en bici al atardecer y AVE nocturno a 350 km/h hacia Shanghái.",m:["tren","Xi'an a Shanghái Hongqiao, 6 h"]},
  {d:"Lun 10",t:"Shanghái colonial y futurista",img:"bund_1",cap:"El Bund y Pudong al anochecer",x:"Concesión Francesa, jardín Yu, mirador de la Torre de Shanghái a 632 metros de altura y crucero nocturno por el río Huangpu frente al skyline iluminado."},
  {d:"Mar 11",t:"Despedida y vuelo a España",img:"shanghai_1",cap:"Pudong visto desde el río",x:"Últimas compras por Nanjing Road, tren Maglev a 430 km/h al aeropuerto de Pudong y vuelo directo de regreso a España, aterrizando el mismo día."}]},
 ago:{
  sub:"Pekín · Taipéi · Jiufen · Shenzhen · Fenghuang · Furong · Zhangjiajie · Xi'an · Shanghái · Suzhou",
  pitch:"Entráis por Pekín con lo imprescindible (Ciudad Prohibida, Templo del Cielo y Muralla) y esa misma noche saltáis a Taiwán: Taipéi y los farolillos de Jiufen. Después, Shenzhen tecnológico, las dos joyas sobre el agua de Hunan (Fenghuang y la cascada de Furong), las montañas de Avatar, la Terracota, Shanghái y Suzhou. Quince días con dos fronteras de pasaporte y todo el continente en tren rápido salvo dos vuelos cortos.",
  yes:["Pekín y Ciudad Prohibida","Muralla en Mutianyu","Taiwán y Jiufen","Shenzhen tecnológico","Fenghuang iluminado","Cascada de Furong","Montañas de Avatar","Guerreros de Terracota","Shanghái y Suzhou"],
  no:["Pekín en solo dos días","Sin Muralla salvaje ni amanecer en Jinshanling","Sin desierto de Gansu","Sin pandas","Sin desvíos a Chongqing"],
  warnTitle:"Dos fronteras y una sola oportunidad en la Ciudad Prohibida",
  warn:"Pekín tiene un único día para la Ciudad Prohibida (domingo 1, porque cierra los lunes): la reserva con pasaporte se abre el domingo 25 de julio a las 20:00 de Pekín (14:00 en España) y en agosto se agota en minutos. Además, el lunes 2 salís de China continental hacia Taiwán y el jueves 5 volvéis a entrar por Shenzhen: son vuelos internacionales, con control de pasaporte a la salida y a la llegada, así que hay que estar en el aeropuerto unas 2 h 30 antes y llevar las tarjetas de llegada hechas.",
  legs:[["beijing","mutianyu","bus",75,"1 h 30"],["beijing","taipei","avion",1720,"3 h 10 a 3 h 25"],["taipei","shenzhen","avion",800,"unas 2 h"],["shenzhen","fenghuang","tren",950,"unas 5 h"],["fenghuang","furong","tren",60,"35 min"],["furong","zhangjiajie","tren",80,"30 min"],["zhangjiajie","xian","avion",680,"1 h 30 a 1 h 45"],["xian","terracota","bus",40,"1 h"],["xian","shanghai","tren",1500,"unas 6 h"],["shanghai","suzhou","tren",100,"25 a 30 min"]],
  days:[
  {d:"Sáb 31",t:"Llegada nocturna a Pekín",img:"hutong_1",cap:"Los hutongs de Gulou, el Pekín a pie de calle",x:"El Air China aterriza en la terminal 3 a las 18:50. Entre inmigración y maletas, contad una hora; después, Didi o tren exprés del aeropuerto hasta el hotel, mejor en Dongcheng, cerca de los hutongs y de la Ciudad Prohibida. Cena ligera de baozi o jiaozi y a dormir: mañana se madruga. A finales de julio es la temporada de lluvias en Pekín, así que chubasquero a mano."},
  {d:"Dom 1",t:"Ciudad Prohibida y Templo del Cielo",img:"gugong_2",cap:"9.000 estancias y ni un centímetro de sombra",x:"Entrada a las 08:30 con la reserva hecha siete días antes. Truco heredado del viaje original: no se entra cruzando Tiananmen, que está vallada y pide su propia reserva en WeChat; se rodea por el Templo Ancestral, dos yuanes y sin cola. De sur a norte y remate en la colina de Jingshan. Siesta en las horas de 34 grados y Templo del Cielo a última hora de la tarde, cuando el parque se llena de vecinos."},
  {d:"Lun 2",t:"Muralla en Mutianyu y vuelo a Taipéi",img:"mutianyu_1",cap:"Mutianyu: telesilla de subida y tobogán de bajada",x:"Lunes de Muralla porque la Ciudad Prohibida cierra. En Mutianyu al abrir: telesilla a la torre 6, caminata hasta la 12, que suele estar casi vacía, y bajada en tobogán, que con lluvia no funciona. De vuelta en Pekín a primera hora de la tarde, maletas y al aeropuerto: hay directos de EVA Air y China Airlines que salen entre las 19:55 y las 20:50 y aterrizan en Taoyuan antes de medianoche.",m:["avion","Pekín a Taipéi, directo 3 h 10 a 3 h 25"]},
  {d:"Mar 3",t:"Taipéi",img:"taipei_1",cap:"La torre Taipei 101 iluminada sobre la cuenca de Taipéi",x:"Mañana tranquila tras la llegada tardía. Templo Longshan con sus espirales de incienso, Memorial Chiang Kai-shek y plaza de la Libertad, y las horas de calor en el barrio de Ximending o en los centros comerciales de Xinyi. Subida al mirador de la Montaña Elefante para el atardecer frente al Taipei 101 (son veinte minutos de escalones, llevad agua) y cena en el mercado nocturno de Raohe: bollos de pimienta y té de burbujas."},
  {d:"Mié 4",t:"Jiufen y el valle de Shifen",img:"jiufen_1",cap:"Jiufen: callejones colgados del acantilado iluminados por farolillos",x:"Excursión de día completo, mejor con coche y conductor que encadenando trenes y buses. Por la mañana, Shifen: farolillos de papel lanzados desde las vías del tren de Pingxi y la cascada. Por la tarde, Jiufen, con callejones empedrados sobre el mar, la casa de té Amei colgada del abismo y los farolillos rojos que recuerdan a Chihiro. Quedaos hasta que se encienden, hacia las 18:30. En agosto puede haber tifones: mirad la previsión la víspera."},
  {d:"Jue 5",t:"Cruce del estrecho a Shenzhen",img:"shenzhen_2",cap:"Huaqiangbei: el epicentro del hardware mundial",x:"Último desayuno en Taipéi y a Taoyuan con dos horas y media de margen: es vuelo internacional, con salida de pasaporte en Taiwán y entrada de nuevo en China en Shenzhen, huellas incluidas. China Airlines y Shenzhen Airlines vuelan directo en unas 2 h. Al llegar, estación Gangxia North, cuyo techo parece una nave espacial, y cena en Futian.",m:["avion","Taipéi a Shenzhen, directo unas 2 h"]},
  {d:"Vie 6",t:"Shenzhen: la ciudad del futuro",img:"shenzhen_3",cap:"Ping An Finance Center, 599 metros en el centro de Shenzhen",x:"Huaqiangbei por la mañana, laberintos de componentes y prototipos que abren hacia las 10:00. Robotaxi sin conductor de Pony.ai por Nanshan, tienda insignia de DJI y tiendas de robots humanoides. Al atardecer, mirador del Ping An Finance Center. Los espectáculos de drones sobre la bahía de Shenzhen suelen ser en fin de semana: si hay uno programado esta noche, no os lo perdáis. Calor húmedo de 33 grados: el día se hace de interior en interior."},
  {d:"Sáb 7",t:"Tren rápido a la ciudad fénix",img:"fenghuang_1",cap:"Casas sobre pilotes en el río Tuojiang al anochecer",x:"Tren de alta velocidad matinal desde Shenzhen Norte, directo hasta Fenghuang Gucheng en unas 5 h (es la línea que sigue hasta Zhangjiajie). Llegada a primera hora de la tarde. El casco antiguo es de acceso libre: callejones de piedra, cena junto al Tuojiang y, desde las 19:30, las casas sobre pilotes iluminadas reflejándose en el agua. Sábado de agosto: habrá gente, así que hotel dentro del casco y paseo tarde, cuando se van los grupos.",m:["tren","Shenzhen Norte a Fenghuang Gucheng, unas 5 h"]},
  {d:"Dom 8",t:"Furong: el pueblo sobre la cascada",img:"furong_1",cap:"Furong: la cascada iluminada de noche bajo los aleros tradicionales",x:"Paseo temprano por Fenghuang sin gente y tren de unos 35 minutos hasta Furongzhen. Pueblo milenario de la minoría tujia colgado sobre una cascada de 60 metros que cae al río You. La pasarela de piedra pasa justo detrás de la cortina de agua. Tofu de arroz en el puesto histórico 113 y, al anochecer, la cascada y los aleros iluminados. Se duerme en el pueblo para verlo de noche y a primera hora.",m:["tren","Fenghuang Gucheng a Furongzhen, 35 min"]},
  {d:"Lun 9",t:"Tianmen y llegada a Wulingyuan",img:"tianmen_2",cap:"La Puerta del Cielo: arco natural de 130 metros en lo alto de Tianmen",x:"Tren de 30 minutos a Zhangjiajie Oeste, maletas en consigna y al monte Tianmen: teleférico de 7,5 km sobre la ciudad, pasarela de cristal colgada del acantilado y los 999 escalones bajo la Puerta del Cielo. En vacaciones escolares hay colas largas: entrada comprada online y subida antes de las 09:00. Por la tarde, coche de unos 45 minutos a Wulingyuan, a pie del parque de Avatar.",m:["tren","Furongzhen a Zhangjiajie Oeste 30 min, y coche a Wulingyuan"]},
  {d:"Mar 10",t:"Zhangjiajie: los pilares de Avatar",img:"wulingyuan_1",cap:"Yuanjiajie entre la niebla: el pilar Aleluya que inspiró la película",x:"En la puerta del parque nacional al abrir, hacia las 07:00. Ascensor Bailong, 326 metros pegado a la roca (en agosto la cola puede pasar de una hora, así que va primero), miradores de Yuanjiajie frente al pilar de Avatar y bajada en teleférico por Tianzi Shan. Arriba hace entre 5 y 10 grados menos que en el valle, y la niebla matinal deja los monolitos flotando. Noche en Zhangjiajie ciudad, cerca del aeropuerto."},
  {d:"Mié 11",t:"Vuelo a Xi'an y muralla en bici",img:"xianwall_1",cap:"Los 14 kilómetros de muralla Ming cerrada alrededor de Xi'an",x:"Vuelo directo de 1 h 30 a 1 h 45 a Xi'an. Hay pocas frecuencias semanales y no todos los días: comprobad el horario antes de cerrar Hunan. Tarde en la Gran Mezquita, oculta en un laberinto de patios de madera, y, cuando baja el sol, bicicletas de alquiler para los 14 km de muralla Ming bajo los faroles rojos. Cena de fideos biangbiang y pinchos de cordero en el barrio musulmán.",m:["avion","Zhangjiajie a Xi'an, directo 1 h 30 a 1 h 45"]},
  {d:"Jue 12",t:"Terracota y tren rápido a Shanghái",img:"terracota_2",cap:"Fosa principal de los Guerreros de Terracota",x:"Mañana en el Museo de Historia de Shaanxi, climatizado y con reserva previa. Guerreros a las 13:30 en orden 3, 2 y 1, a contracorriente de los grupos de la mañana. Desde allí, directos a Xi'an Norte para un tren rápido de última hora de la tarde: unas 6 h hasta Shanghái Hongqiao, con llegada cerca de medianoche. Si no hay plaza, el plan B es un vuelo de tarde de unas 2 h 15.",m:["tren","Xi'an Norte a Shanghái Hongqiao, unas 6 h"]},
  {d:"Vie 13",t:"El Bund y la Concesión Francesa",img:"bund_1",cap:"El Bund y los rascacielos de Pudong frente a frente",x:"Mañana sin prisa tras la llegada tardía. Jardín Yu al abrir, antes de que apriete el calor de 35 grados húmedos, y tarde de sombra bajo los plátanos de la Concesión Francesa y en los callejones de Tianzifang. Al anochecer, el Bund viendo encenderse la Torre de Shanghái y la Perla Oriental, y crucero por el Huangpu. Agosto es temporada de tifones: si hay alerta, se intercambian días."},
  {d:"Sáb 14",t:"Escapada a Suzhou",img:"suzhou_1",cap:"Jardín del Administrador Humilde, patrimonio de la Unesco",x:"Tren rápido de 25 a 30 minutos a Suzhou, la ciudad de los canales y los jardines clásicos. El Jardín del Administrador Humilde se reserva online con pasaporte y conviene entrar a primera hora, porque en sábado de agosto se llena. Después, la calle Pingjiang y paseo en barca por los canales de Shantang. Si os encaja, cambiad Suzhou al viernes: entre semana hay bastante menos gente. Vuelta a Shanghái al atardecer.",m:["tren","Shanghái a Suzhou ida y vuelta, 25 a 30 min"]},
  {d:"Dom 15",t:"Pudong y vuelo de vuelta",img:"shanghai_1",cap:"El distrito financiero de Pudong, capital económica de China",x:"Check-out tardío y maletas en consigna. Torre de Shanghái, de 632 metros, con mirador cubierto, y paseo por el West Bund. Cena temprana de xiao long bao y, hacia las 20:30, al aeropuerto en Maglev desde Longyang Road: unos 8 minutos a 300 km/h como máximo (ya no va a 430) y deja de circular hacia las 21:40. A las 21:30 hay que estar en Pudong, terminal 2: el vuelo a Barcelona sale a las 00:40.",m:["tren","Maglev de Longyang Road a Pudong, 8 min","stay"]}]}}
];

/* consejos de partida del módulo de vídeos: los de quien hizo esta ruta en octubre de 2026 */
var TIPS=[
 ["Pekín","La plaza de Tiananmen tiene su propia reserva, aparte de la Ciudad Prohibida, y está vallada: no se puede cruzar para entrar al palacio. Se entra por Donghuamen o por el Templo Ancestral."],
 ["Pekín","Reserva de la plaza: gratis, nominal, en el miniprograma de WeChat 天安门广场预约参观 (opción 个人预约), con siete días de antelación. Guardad el mensaje de confirmación para el control."],
 ["Pekín","La bajada de bandera (降旗) es una franja propia al reservar: no vale la de tarde. Dura unos 30 minutos y es lo que más destacan del viaje."],
 ["Pekín","Sin reserva de plaza: metro línea 1 a Tiananmen East, salida B, calle Nanchizi y entrada por el Templo Ancestral (2 yuanes). Salís directos al control de la Puerta del Meridiano en unos 15 minutos."],
 ["Pekín","En Mutianyu la telesilla sube a la torre 6 y de ahí baja el tobogán. El teleférico de cabina va a la torre 14 y por ahí no hay tobogán. El combo bueno es el de 140 yuanes."],
 ["Pekín","Tramo de muralla recomendado: telesilla a la torre 6, a pie hasta la 12, que estaba casi vacía, y vuelta a la 6 para el tobogán. Una hora por sentido."],
 ["Pekín","El Palacio de Verano fue el sitio más tranquilo de todo el viaje: jardines imperiales, lago Kunming y el Largo Corredor pintado a mano."],
 ["Pekín","En Pekín lo que hace perder tiempo no son las distancias, son las reservas y los accesos: todo lo que se pueda reservar antes, reservado."],
 ["Pekín","La calle de snacks de Wangfujing está cerrada para siempre, aunque sigan circulando vídeos antiguos."],
 ["Xi'an","El Grand Tang Ever-Bright City de día no tiene gracia: hay que ir de 19:00 a 22:30. Para volver, andad cinco o diez minutos antes de pedir el Didi."],
 ["Xi'an","La foto del Campanario iluminado se hace desde la terraza exterior de la 5ª planta del centro comercial Kaiyuan."],
 ["Xi'an","Para comer en el barrio musulmán, mejor Xiyangshi, Dapiyuan y Sajinqiao que la calle principal."],
 ["Chengdú","Los pandas comen fuera a primera hora: salid del hotel antes de las 07:00 para estar en la puerta a la apertura de las 07:30."],
 ["Chengdú","El panda gigante del edificio IFS se ve desde la calle, pero desde la terraza se le ve la cara."],
 ["Chongqing","Se llega a Chongqing Norte y se sale hacia Fenghuang desde Chongqing Este, otra estación a 21 km."],
 ["Chongqing","Hongyadong se ve mejor desde fuera, desde el puente Qiansimen, y nunca antes de que anochezca."],
 ["Chongqing","El mejor plan de la tarde es cruzar en el teleférico y quedarse en Longmenhao hasta que se enciende la península de Yuzhong enfrente."],
 ["Fenghuang","El casco antiguo es gratis: el pase de nueve visitas no se amortiza sin convertir Fenghuang en una carrera."],
 ["Fenghuang","Las pasaderas de piedra (跳岩) hay que cruzarlas a primera hora, antes de las 08:00, cuando no hay nadie."],
 ["Furong","Llegad al anochecer: el pueblo iluminado y la cascada son lo mejor, y la mañana siguiente se repite el paseo casi vacío."],
 ["Furong","El hotel está dentro del recinto de pago: hay que comprar la entrada (108 yuanes) aunque se duerma dentro."],
 ["Zhangjiajie","Desde octubre de 2026 a Tianmen solo se sube por la línea C, desde la Puerta de la Montaña (天门山山门), con el teleférico exprés de la cueva."],
 ["Zhangjiajie","No hace falta tour nocturno en Tianmen: basta con quedarse en la explanada al pie de los 999 escalones al anochecer."],
 ["Zhangjiajie","Si la pantalla de la puerta marca más de 60 minutos de cola en el ascensor Bailong, subid por el teleférico de Tianzi y bajad por el Bailong."],
 ["Zhangjiajie","Gran Cañón: la línea B es la del Puente de Cristal. Se entra arriba y se sale abajo, en 双坪: el Didi de vuelta se pide desde ahí."],
 ["Shanghái","El mercado de las bodas del parque del Pueblo solo es los sábados, de 11:00 a 16:00."],
 ["Shanghái","El jardín Yu cierra los lunes. Mejor comprar la entrada online."],
 ["Shanghái","En AP Plaza se regatea fuerte y se compra mucho: zapatillas, gafas, auriculares, fundas y maletas salieron muy bien de precio."]
];
