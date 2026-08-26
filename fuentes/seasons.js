var SEASONS={
may:{
 label:"MAYO", rango:"dom 2 → mar 11 de mayo de 2027", dias:10, vac:8,
 hero:"jinshanling_2", heroAlt:"Gran Muralla de Jinshanling recorriendo la cresta de la montaña",
 title:"China, del desierto al futuro",
 pills:["30 abril → 12 mayo 2027","10 días en tierra","8 días de vacaciones","7 rutas a elegir"],
 condTitle:"Lo que condiciona todo el viaje",
 condLede:"Tres hechos que hay que aceptar antes de elegir ruta. Ninguno se negocia, los tres se gestionan. El orden en que se visitan los sitios importa más que qué sitios se visitan.",
 cards:[
  {n:"7",col:"var(--r1)",h:"días de Golden Week",p:"Del <b>30 de abril al 6 de mayo</b> China entera se mueve. El comparable de 2026 registró 325 millones de viajes internos en cinco días. Cae justo en la primera mitad del viaje."},
  {n:"3",col:"var(--r3)",h:"días tarde para el Hyrox",p:"Hyrox Shanghái 2027 es el <b>14, 15 y 16 de mayo</b>. Con vuelta el 12 no entra. Alargando al 17 entra la carrera y cinco días más de viaje."},
  {n:"01:45",h:"hora de todos los regresos",p:"Los vuelos de China a España salen de madrugada. El último día completo en China es siempre <b>el día anterior</b> a aterrizar en Zaragoza."}],
 alertT:"La regla que ordena las siete rutas",
 alertP:"Terracota, Zhangjiajie y la Gran Muralla van <b>siempre después del 6 de mayo</b>. El Golden Week se pasa en Shenzhen, que es ciudad de origen y se vacía cuando sus trabajadores se van a sus provincias, y en el desierto de Gansu, donde hay sitio de sobra. Por eso las rutas entran por el sur y terminan en el norte.",
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
  ["7 días antes","Reservar la plaza de Tiananmen si toca","Rutas 5, 6 y 7: la plaza tiene reserva propia, gratuita pero obligatoria, en un mini programa de WeChat y con franjas. La bajada de bandera es una franja concreta. Sin reserva no se cruza ni de paso."],
  ["7 días antes","Reservar la Ciudad Prohibida a las 20:00 hora de Pekín","Solo rutas 5 y 6. Desde 2026 no hay taquilla: reserva online con pasaporte, cupo de 40.000 al día, ventana de solo siete días. Una entrada por pasaporte y día."],
  ["15 días antes","Comprar TODOS los trenes el día que se abren","Los billetes de tren chinos salen a la venta exactamente 15 días antes. En Golden Week las rutas buenas se agotan en minutos."],
  ["Antes de salir","Alipay o WeChat Pay con tarjeta europea vinculada","En China el efectivo es casi folclore. Vincular y probar la tarjeta desde España."],
  ["Antes de salir","eSIM y VPN","Para WhatsApp, Google Maps e Instagram. Se contrata desde España, dentro ya no se puede."],
  ["Al llegar","Reservar los pandas de Qinling por WeChat","Solo rutas 1 y 4. No tiene taquilla física y cierra los lunes."]]
},
ago:{
 label:"AGOSTO", rango:"dom 15 → sáb 28 de agosto de 2027", dias:14, vac:9,
 hero:"qinghai_2", heroAlt:"Campos de colza en flor a orillas del lago Qinghai",
 title:"China en verano, a 3.000 metros del calor",
 pills:["13 → 29 agosto 2027","14 días en tierra","9 días de vacaciones","El lunes 16 es festivo"],
 condTitle:"Agosto cambia las reglas",
 condLede:"En agosto no hay un Golden Week que esquivar: la masificación dura el mes entero. A cambio, el festivo del lunes 16 regala un día, se ganan cuatro días de viaje y se abre el altiplano de Qinghai, que en mayo no funciona.",
 cards:[
  {n:"9",col:"var(--r4)",h:"días de vacaciones para 14 en China",p:"Saliendo el <b>viernes 13</b> después de trabajar y volviendo el <b>domingo 29</b>. El lunes 16 es festivo en Zaragoza, así que solo se piden nueve días: martes 17, miércoles 18, jueves 19 y viernes 20, y luego de lunes 23 a viernes 27. Es el mejor rendimiento de todo el año."},
  {n:"4-6",col:"var(--r1)",h:"tifones de media en agosto",p:"Agosto es el pico de la temporada de tifones en Guangdong. Afecta directamente a <b>Shenzhen</b>: cancelaciones de vuelos y trenes son habituales. Hay que dejar colchón y no poner Shenzhen el último día."},
  {n:"22°",col:"var(--r3)",h:"en Xining mientras el resto arde",p:"El altiplano de Qinghai se queda en <b>22 a 25 grados</b> en agosto mientras Xi'an pasa de 38. Es el único momento del año en que ese tramo tiene sentido, y en mayo aún está pelado y frío."}],
 alertT:"En agosto no hay ventana limpia, se asume",
 alertP:"Las vacaciones escolares chinas duran julio y agosto enteros, así que no se puede ordenar la ruta para esquivar la multitud como en mayo. Lo que sí se puede es <b>elegir dónde estar</b>: el desierto de Gansu y el altiplano de Qinghai tienen espacio de sobra y temperaturas buenas, mientras que Zhangjiajie suma 18 días de lluvia de media y Xi'an llega a 40 grados. Eso reordena qué ruta conviene: en agosto ganan las del noroeste.",
 winTitle:"Tres ventanas posibles en agosto",
 winLede:"Vuestro margen va del 1 al 29 de agosto, con salida posible desde el último viernes de julio. El festivo del lunes 16 es la pieza que decide cuál rinde más.",
 winTable:'<table><thead><tr><th>Ventana</th><th>Salida</th><th>Vuelta a Zaragoza</th><th>Días en China</th><th>Vacaciones</th><th>Rinde</th></tr></thead><tbody>'+
  '<tr class="best"><td><b>A · Corta y eficiente</b><br><span class="sm mute">Aprovecha el puente del 16 al principio</span></td><td class="n">Vie 13 ago noche<br>o sáb 14 directo</td><td class="n">Dom 29 ago</td><td class="n"><b>14</b></td><td class="n"><b>9</b></td><td><span class="badge">1,56 ★</span></td></tr>'+
  '<tr><td><b>B · Primera quincena</b><br><span class="sm mute">Vuelta en el propio festivo</span></td><td class="n">Vie 30 jul noche<br>o sáb 31 directo</td><td class="n">Lun 16 ago<br><span class="sm mute">festivo</span></td><td class="n"><b>15</b></td><td class="n">10</td><td><span class="badge dim">1,50</span></td></tr>'+
  '<tr><td><b>C · El mes entero</b><br><span class="sm mute">Roza el límite de 30 días del visado</span></td><td class="n">Vie 30 jul noche</td><td class="n">Dom 29 ago</td><td class="n"><b>28</b></td><td class="n">19</td><td><span class="badge dim">1,47</span></td></tr>'+
  '</tbody></table>',
 winNote:"Los itinerarios de abajo están calculados sobre la ventana A, la recomendada. El 15 de agosto de 2027 cae en domingo, y en Aragón el festivo se traslada al lunes 16: eso es lo que ahorra el día.",
 winCards:'<div class="card"><div class="eyebrow">Vuelos</div><h3 style="margin:10px 0 8px">Mismo patrón que en mayo</h3><p>Los directos España-China salen a mediodía, así que el <b>viernes después de las 20:00 solo hay opciones con escala</b> (Qatar, Turkish, Emirates) que aterrizan el sábado por la noche. El directo del sábado da los mismos días y dura siete horas menos.<br><br>La vuelta sigue siendo de madrugada: Pekín a Madrid con Air China a las 01:55, Chengdú a Madrid con Sichuan a las 01:40 o Shanghái a Madrid con China Eastern a las 00:45.<br><br><b>Aviso de tifones:</b> si salís por Shenzhen o Cantón en agosto, dejad un día de colchón antes del internacional.</p></div>'+
  '<div class="card"><div class="eyebrow">Por qué la ventana A</div><h3 style="margin:10px 0 8px">Mejor rendimiento y mejor tiempo</h3><p>Además de ser la que menos vacaciones consume, la segunda quincena tiene <b>menos lluvia en Zhangjiajie</b> que la primera y ya ha pasado el pico de calor.<br><br>La contrapartida: la <b>colza en flor del lago Qinghai</b> va de finales de junio a principios de agosto, así que en la ventana A ya se ha pasado. Si esa foto os importa, la ventana B es la vuestra.</p></div>',
 check:[
  ["Ahora","Elegir ventana (A, B o C) y comprar los vuelos","La ventana cambia la longitud de la ruta. La A da 14 días por 9 de vacaciones; la C da 28 días pero se come 19."],
  ["Ahora","Confirmar el festivo del lunes 16 en vuestra empresa","El 15 cae en domingo y en Aragón se traslada al lunes 16. Si vuestro convenio no lo traslada, se pierde un día."],
  ["Cuando salgan","Vigilar el calendario Hyrox 2027 de China","En 2026 hubo Chengdú el 1-2 y Shenzhen el 15-16 de agosto. Si repiten patrón, entra en el viaje."],
  ["6 meses antes","Registrarse en la app 12306 con pasaporte","La verificación tarda. Agosto es temporada altísima de tren: sin cuenta lista no hay billetes."],
  ["30 días antes","Reservar las Grutas de Mogao","En verano la reserva anticipada es obligatoria y el cupo diario se agota. Los extranjeros no pueden reservar online solos: hay que ir por agencia."],
  ["7 días antes","Reservar la Ciudad Prohibida a las 20:00 hora de Pekín","Rutas 5, 6 y 7. Cupo de 40.000 al día y sin taquilla. En agosto se agota en minutos."],
  ["7 días antes","Reservar la plaza de Tiananmen si toca","Rutas 5, 6 y 7: reserva propia, gratuita pero obligatoria, en un mini programa de WeChat y con franjas. La bajada de bandera es una franja concreta."],
  ["15 días antes","Comprar TODOS los trenes el día que se abren","Se abren exactamente 15 días antes. En agosto, con las vacaciones escolares chinas, es todavía más crítico que en Golden Week."],
  ["Antes de salir","Seguro con cobertura de cancelación por tifón","Agosto es el pico en Guangdong. Un tifón puede tumbar dos días de itinerario."],
  ["Antes de salir","Alipay o WeChat Pay, eSIM y VPN","Todo se contrata desde España. Dentro ya no se puede."],
  ["Al llegar","Reservar los pandas de Qinling por WeChat","Solo rutas 1 y 4. Sin taquilla física y cierra los lunes."]]
}};
