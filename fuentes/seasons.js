var SEASONS={
may:{
 label:"MAYO", rango:"dom 2 → mar 11 de mayo de 2027", dias:10, vac:8,
 hero:"jinshanling_2", heroAlt:"Gran Muralla de Jinshanling recorriendo la cresta de la montaña",
 title:"China, del desierto al futuro",
 pills:["30 abril → 12 mayo 2027","10 días en tierra","8 días de vacaciones","8 rutas a elegir"],
 condTitle:"Lo que condiciona todo el viaje",
 condLede:"Tres hechos que hay que aceptar antes de elegir ruta. Ninguno se negocia, los tres se gestionan. El orden en que se visitan los sitios importa más que qué sitios se visitan.",
 cards:[
  {n:"5",col:"var(--r1)",h:"días de Golden Week",p:"Del <b>1 al 5 de mayo</b> China entera se mueve. Son las fechas oficiales que publicó el Consejo de Estado en noviembre de 2026, con el sábado 8 como laborable de recuperación. El comparable de 2026 registró 325 millones de viajes internos en cinco días. Cae justo en la primera mitad del viaje."},
  {n:"3",col:"var(--r3)",h:"días tarde para el Hyrox",p:"Hyrox Shanghái 2027 es el <b>14, 15 y 16 de mayo</b>. Con vuelta el 12 no entra. Alargando al 17 entra la carrera y cinco días más de viaje."},
  {n:"01:45",h:"hora de todos los regresos",p:"Los vuelos de China a España salen de madrugada. El último día completo en China es siempre <b>el día anterior</b> a aterrizar en Zaragoza."}],
 alertT:"La regla que ordena las ocho rutas",
 alertP:"Terracota, Zhangjiajie y la Gran Muralla van <b>siempre a partir del 6 de mayo</b>, primer día laborable. El Golden Week se pasa en Shenzhen, que es ciudad de origen y se vacía cuando sus trabajadores se van a sus provincias, y en el desierto de Gansu, donde hay sitio de sobra. Por eso las rutas entran por el sur y terminan en el norte.",
 winTitle:"Vuelos: la ida decide cuántos días tenéis",
 winLede:"Con la restricción de no salir el viernes antes de las 20:00, la salida del viernes pierde su ventaja. Los dos escenarios posibles dan los mismos días útiles, pero uno dura siete horas más.",
 winTable:'<table><thead><tr><th>Opción de ida</th><th>Sale</th><th>Llega a China</th><th>Duración</th><th>Días en tierra</th><th></th></tr></thead><tbody>'+
  '<tr class="best"><td><b>Directo del sábado</b><br><span class="sm mute">Madrid a Shenzhen (Hainan HU750) o Barcelona a Shanghái (China Eastern / Air China)</span></td><td class="n">Sáb 1 may<br>10:50 - 12:10</td><td class="n">Dom 2 may<br>05:25 - 06:45</td><td class="n">~13 h</td><td class="n"><b>10</b></td><td><span class="badge">Recomendada</span></td></tr>'+
  '<tr><td><b>Viernes noche con escala</b><br><span class="sm mute">Qatar vía Doha, Turkish vía Estambul, Emirates vía Dubái</span></td><td class="n">Vie 30 abr<br>21:00 - 22:30</td><td class="n">Sáb 1 may<br>21:00 - 22:15</td><td class="n">~20 h</td><td class="n"><b>10</b></td><td><span class="badge dim">Mismos días</span></td></tr>'+
  '<tr><td><b>Directo del viernes</b><br><span class="sm mute">Barcelona a Shenzhen (Shenzhen Airlines ZH866, lu/mi/vi)</span></td><td class="n">Vie 30 abr<br>12:20</td><td class="n">Sáb 1 may<br>07:10</td><td class="n">~13 h</td><td class="n"><b>11</b></td><td><span class="badge no">Fuera de horario</span></td></tr>'+
  '</tbody></table>',
 winNote:"Horarios según los patrones cargados a día de hoy. Las programaciones de primavera de 2027 se confirman hacia mediados de 2026.",
 winCards:'<div class="card"><div class="eyebrow">La vuelta</div><h3 style="margin:10px 0 8px">Dos directos a Madrid, los dos de madrugada</h3><p><b>Pekín a Madrid</b>, Air China CA907, sale 01:55 y llega 07:20. Vuela todos los días menos jueves.<br><br><b>Chengdú a Madrid</b>, Sichuan Airlines 3U3803, sale 01:40 y llega 08:50. Lunes, miércoles, viernes y domingos.<br><br>Volando la madrugada del miércoles 12 estáis en Zaragoza sobre las 11:00 de ese mismo día, y el último día completo en China es el <b>martes 11</b>.</p></div>'+
  '<div class="card"><div class="eyebrow">Coste en vacaciones</div><h3 style="margin:10px 0 8px">Ocho días para diez de viaje</h3><p>El 1 de mayo de 2027 cae en <b>sábado</b>, así que no ahorra nada. Se piden lunes 3, martes 4, miércoles 5, jueves 6, viernes 7, lunes 10, martes 11 y miércoles 12.<br><br>Son <b>8 días de vacaciones para 10 en China</b>. Agosto rinde bastante más: mira la pestaña de arriba.</p></div>',
 check:[
  ["Ahora","Decidir ruta y comprar los vuelos internacionales","El open jaw (entrar por una ciudad y salir por otra) hay que cotizarlo como tal, no como dos billetes sueltos."],
  ["Ahora","Decidir si se alarga hasta el 17 de mayo","Cinco días más y el Hyrox de Shanghái. Es la única decisión que hace que quepa todo. Condiciona la compra."],
  ["6 meses antes","Registrarse en la app 12306 con pasaporte","La verificación de pasaporte, móvil y correo tarda. Hacerla con tiempo, no al llegar."],
  ["2 meses antes","Reservar las Grutas de Mogao por agencia","Los extranjeros no pueden reservar online a título individual. O se compra en persona en el Centro de Exposición Digital el mismo día, o se contrata antes."],
  ["7 días antes","Reservar la plaza de Tiananmen si toca","Rutas 1, 2 y 3: la plaza tiene reserva propia, gratuita pero obligatoria, en un mini programa de WeChat y con franjas. La bajada de bandera es una franja concreta. Sin reserva no se cruza ni de paso."],
  ["7 días antes","Reservar la Ciudad Prohibida a las 20:00 hora de Pekín","Solo rutas 2 y 3. Desde 2026 no hay taquilla: reserva online con pasaporte, cupo de 40.000 al día, ventana de solo siete días. Una entrada por pasaporte y día."],
  ["15 días antes","Comprar TODOS los trenes el día que se abren","Los billetes de tren chinos salen a la venta exactamente 15 días antes. En Golden Week las rutas buenas se agotan en minutos."],
  ["Antes de salir","Alipay o WeChat Pay con tarjeta europea vinculada","En China el efectivo es casi folclore. Vincular y probar la tarjeta desde España."],
  ["Antes de salir","eSIM y VPN","Para WhatsApp, Google Maps e Instagram. Se contrata desde España, dentro ya no se puede."],
  ["Al llegar","Reservar los pandas de Qinling por WeChat","Solo rutas 4 y 7. No tiene taquilla física y cierra los lunes."]]
},
ago:{
 label:"AGOSTO", rango:"sáb 31 jul → dom 15 ago de 2027", dias:15, vac:10,
 hero:"jinshanling_1", heroAlt:"La Gran Muralla en Jinshanling al amanecer",
 title:"China en verano: de Pekín a Shanghái en quince días",
 pills:["Vuelos comprados con Air China","Madrid a Pekín, sáb 31 julio","15 días en tierra (1 al 15)","Shanghái a Barcelona, lun 16 agosto 00:40","Festivo lunes 16 en Aragón"],
 condTitle:"Agosto: 15 días en China por 10 de vacaciones",
 condLede:"Los vuelos ya están comprados: se entra por Pekín el sábado 31 de julio por la noche y se sale de Shanghái en la madrugada del lunes 16 de agosto, que en Aragón es festivo. La ruta va, por tanto, de Pekín a Shanghái.",
 cards:[
  {n:"10",col:"var(--r4)",h:"días de vacaciones para 15 en China",p:"Se piden del <b>2 al 6</b> y del <b>9 al 13 de agosto</b>. El vuelo de ida sale de Barajas a la 01:50 del sábado 31, así que basta con salir de Zaragoza el viernes 30 por la tarde. El 15 cae en domingo y Aragón traslada el festivo al <b>lunes 16</b>, el día en que aterrizáis en Barcelona a las 07:55."},
  {n:"2",col:"var(--r2)",h:"ciudades fijas: entrar por Pekín y salir por Shanghái",p:"Es un billete de ida y vuelta abierto: llegada a <b>Pekín Capital (PEK), terminal 3</b>, a las 18:50, y salida desde <b>Shanghái Pudong (PVG), terminal 2</b>, a las 00:40. El último día completo es el domingo 15: a las 21:30 hay que estar ya en Pudong."},
  {n:"35 °C",col:"var(--r1)",h:"y humedad en las grandes ciudades",p:"Pekín, Xi'an, Chengdú y Shanghái pasan de 33 grados con mucha humedad, y en Pekín coincide el final de la temporada de lluvias. Monumentos a primera hora, museos a mediodía y paseos al caer la tarde. El altiplano de Qinghai y las montañas de Hunan dan respiro."}],
 alertT:"Lo que manda en agosto",
 alertP:"Las <b>vacaciones escolares chinas</b> duran todo el mes, así que no hay ventana limpia: las colas se esquivan madrugando y comprando cada entrada y cada tren en el minuto en que se abre la venta. Los trenes salen <b>15 días antes</b>: el primero del viaje, hacia el 2 de agosto, se compra hacia el 18 de julio.",
 winTitle:"Los vuelos ya comprados",
 winLede:"Air China en directo en los dos sentidos, Economy Standard. Este es el marco fijo de todas las rutas.",
 winTable:'<table><thead><tr><th>Trayecto</th><th>Fecha</th><th>Salida</th><th>Llegada</th><th>Duración</th></tr></thead><tbody>'+
  '<tr class="best"><td><b>Madrid a Pekín</b><br><span class="sm mute">Directo, operado por Air China. MAD T1 a PEK T3</span></td><td class="n">Sáb 31 jul</td><td class="n">01:50</td><td class="n">18:50<br><span class="sm mute">hora de Pekín</span></td><td class="n">11 h</td></tr>'+
  '<tr class="best"><td><b>Shanghái a Barcelona</b><br><span class="sm mute">Directo, operado por Air China. PVG T2 a BCN T1</span></td><td class="n">Lun 16 ago</td><td class="n">00:40<br><span class="sm mute">la noche del domingo 15</span></td><td class="n">07:55<br><span class="sm mute">hora de España</span></td><td class="n">13 h 15</td></tr>'+
  '</tbody></table>',
 winNote:"Precio total pagado: 1.045,71 euros, con impuestos y recargos. Ojo con la hora de ida: el horario publicado del vuelo Madrid a Pekín de Air China sale a mediodía y llega de madrugada al día siguiente. Confirmad en la reserva la hora exacta antes de reservar el primer hotel.",
 winCards:'<div class="card"><div class="eyebrow">Llegada</div><h3 style="margin:10px 0 8px">Primera noche en Pekín</h3><p>Aterrizaje a las 18:50 en la terminal 3. El Airport Express lleva a Dongzhimen en unos 20 minutos y desde ahí metro o Didi al hotel. Primera noche solo para dormir: el viaje de verdad empieza el domingo 1 de agosto.</p></div>'+
  '<div class="card"><div class="eyebrow">Salida</div><h3 style="margin:10px 0 8px">El domingo 15 cuenta entero</h3><p>El vuelo sale a las 00:40 del lunes 16, así que el domingo 15 es un día completo en Shanghái con check-out tardío o consigna. Pudong está a una hora larga en metro desde el centro, o a 8 minutos en Maglev desde Longyang Road (deja de circular hacia las 21:40): a las 21:30 conviene estar ya en el aeropuerto.</p></div>',
 check:[
  ["Ya","Vuelos comprados","Madrid a Pekín el sábado 31 de julio y Shanghái a Barcelona el lunes 16 de agosto a las 00:40, con Air China. Confirmad en la reserva la hora de ida: el horario publicado de ese vuelo sale a mediodía."],
  ["Ahora","Pedir vacaciones del 2 al 13 de agosto","Diez días laborables. El lunes 16 es festivo en Aragón (calendario laboral de 2027 ya publicado)."],
  ["Ahora","Reservar los hoteles con cancelación gratuita","Doce noches, lista completa al final de la ruta. En agosto suben de precio y los de vistas en Fenghuang y Furong vuelan."],
  ["Ahora","Cuenta en 12306 con pasaporte, y Trip.com de respaldo","La verificación de 12306 tarda. El nombre tiene que coincidir letra a letra con el del pasaporte."],
  ["Finales de marzo","Vuelo Zhangjiajie a Pudong del viernes 13, 20:20","HO2200 de Juneyao, vuela todos los días menos los martes. Se compra cuando salga el horario de verano de 2027. Plan B: FM9344 de las 22:25."],
  ["Desde el 12 de julio","Tianmen con hora fija (miércoles 11)","Abre 30 días antes y conviene tenerla antes del 28 de julio. 288 yuanes con teleférico, bus y escaleras. Si no llegáis a vuestra franja, no se entra."],
  ["18 de julio","Mutianyu (lunes 2)","Hasta 15 días antes, un billete por pasaporte y día. El telesilla con tobogán (torre 6) se compra aparte del teleférico (torre 14)."],
  ["19 de julio","Tren nocturno D19 Pekín a Xi'an (martes 3, 20:41)","Litera de primera: compartimento de cuatro con puerta. Si queréis ir solos, hay que comprar las cuatro plazas. Alternativa: D43 de las 20:29."],
  ["21 de julio","Tren nocturno K385 Xi'an a Chengdú (jueves 5, 21:03)","Litera blanda, de cuatro con puerta. Confirmad la hora de salida, que alguna fuente da 21:40."],
  ["23 de julio","Pandas (viernes 6) y tren Chengdú a Chongqing (sábado 7)","Los pandas abren la venta 14 días antes (55 yuanes) y el tren, 15. El de Chengdú a Chongqing tiene muchos al día."],
  ["25 de julio, 20:00 de Pekín","Ciudad Prohibida (domingo 1)","Las 14:00 en España. Solo en el miniprograma oficial, con pasaporte. 60 yuanes más 10 por el Tesoro y 10 por los Relojes. Cierra los lunes."],
  ["25 de julio","Tren Chongqing Este a Fenghuang (lunes 9)","El más crítico: solo tres directos al día. Primer minuto. Plan B, transbordo en Huaihua Sur. Ese mismo día, la reserva gratuita del Museo Nacional de China."],
  ["26 de julio","Templo del Lama (lunes 2) y tren a Furongzhen (martes 10)","El Lama abre 7 días antes a medianoche de Pekín (las 18:00 del 25 en España). El tren de Fenghuang a Furongzhen tiene pocos de mañana."],
  ["27 de julio","Templo del Cielo y Palacio de Verano (martes 3)","De 1 a 7 días antes, en sus miniprogramas oficiales, con pasaporte. Unos 34 y 60 yuanes con las entradas combinadas."],
  ["29 de julio","Guerreros de Terracota (jueves 5, 08:30)","Hasta 7 días antes en la web o el WeChat oficiales. 120 yuanes, con el pasaporte en la puerta."],
  ["31 de julio, 17:00 de Pekín","Museo de Historia de Shaanxi (jueves 5)","Gratis, pero con reserva 5 días antes en su miniprograma (sede principal). Ese día ya estaréis en Pekín. Los murales Tang se pagan aparte."],
  ["29 de julio","Opcional: tren nocturno K1374 Zhangjiajie a Shanghái (viernes 13)","Solo si preferís el tren al vuelo de las 20:20: unas 20 horas en litera, llegada a Shanghai Songjiang hacia las 14:30 del sábado. Ahorra un hotel y cuesta la mañana del sábado."],
  ["Hacia el 5 de agosto","Franjas del parque de Zhangjiajie (jueves 12 y viernes 13)","Una reserva por cada día que se entre, unos 7 días antes en el miniprograma oficial. Las de 07:00 a 10:00 se agotan. Entrada de 236 yuanes que vale cuatro días."],
  ["Hacia el 8 de agosto","Museo de Shanghái Este (domingo 15)","Gratuito, pero en vacaciones de verano pide reserva con pasaporte. Cierra los martes."],
  ["El mismo día","Lo que no hace falta reservar","Torre de Shanghái (mejor el mismo día por la niebla), Furong (108 yuanes), pase de Fenghuang (128), muralla de Xi'an (54 más la bici), museo de las Tres Gargantas (sin reserva desde 2025), teleférico del Yangtsé (o 2 días antes a las 07:45 por WeChat) y los spas."],
  ["Antes de salir","Alipay o WeChat Pay con tarjeta europea vinculada","En China el efectivo es casi folclore. Vincular y probar la tarjeta desde España."],
  ["Antes de salir","eSIM y VPN contratadas desde España","Para WhatsApp, Google Maps e Instagram. Dentro de China ya no se puede contratar."]]
}};
