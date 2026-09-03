var SEASONS={
may:{
 label:"MAYO", rango:"dom 2 → mar 11 de mayo de 2027", dias:10, vac:8,
 hero:"jinshanling_2", heroAlt:"Gran Muralla de Jinshanling recorriendo la cresta de la montaña",
 title:"China, del desierto al futuro",
 pills:["30 abril → 12 mayo 2027","10 días en tierra","8 días de vacaciones","8 rutas a elegir"],
 condTitle:"Lo que condiciona todo el viaje",
 condLede:"Tres hechos que hay que aceptar antes de elegir ruta. Ninguno se negocia, los tres se gestionan. El orden en que se visitan los sitios importa más que qué sitios se visitan.",
 cards:[
  {n:"7",col:"var(--r1)",h:"días de Golden Week",p:"Del <b>30 de abril al 6 de mayo</b> China entera se mueve. El comparable de 2026 registró 325 millones de viajes internos en cinco días. Cae justo en la primera mitad del viaje."},
  {n:"3",col:"var(--r3)",h:"días tarde para el Hyrox",p:"Hyrox Shanghái 2027 es el <b>14, 15 y 16 de mayo</b>. Con vuelta el 12 no entra. Alargando al 17 entra la carrera y cinco días más de viaje."},
  {n:"01:45",h:"hora de todos los regresos",p:"Los vuelos de China a España salen de madrugada. El último día completo en China es siempre <b>el día anterior</b> a aterrizar en Zaragoza."}],
 alertT:"La regla que ordena las ocho rutas",
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
  ["7 días antes","Reservar la plaza de Tiananmen si toca","Rutas 1, 2 y 3: la plaza tiene reserva propia, gratuita pero obligatoria, en un mini programa de WeChat y con franjas. La bajada de bandera es una franja concreta. Sin reserva no se cruza ni de paso."],
  ["7 días antes","Reservar la Ciudad Prohibida a las 20:00 hora de Pekín","Solo rutas 2 y 3. Desde 2026 no hay taquilla: reserva online con pasaporte, cupo de 40.000 al día, ventana de solo siete días. Una entrada por pasaporte y día."],
  ["15 días antes","Comprar TODOS los trenes el día que se abren","Los billetes de tren chinos salen a la venta exactamente 15 días antes. En Golden Week las rutas buenas se agotan en minutos."],
  ["Antes de salir","Alipay o WeChat Pay con tarjeta europea vinculada","En China el efectivo es casi folclore. Vincular y probar la tarjeta desde España."],
  ["Antes de salir","eSIM y VPN","Para WhatsApp, Google Maps e Instagram. Se contrata desde España, dentro ya no se puede."],
  ["Al llegar","Reservar los pandas de Qinling por WeChat","Solo rutas 4 y 7. No tiene taquilla física y cierra los lunes."]]
},
ago:{
 label:"AGOSTO", rango:"sáb 7 → dom 22 de agosto de 2027", dias:14, vac:9,
 hero:"qinghai_2", heroAlt:"Campos de colza en flor a orillas del lago Qinghai",
 title:"China en verano: Taiwán, Hunan, la Terracota y el futuro",
 pills:["Volar sáb 7 agosto","14 días en tierra (8 al 21)","Vuelta dom 22 agosto","El domingo 15 en pleno viaje","Festivo lunes 16"],
 condTitle:"Agosto: 14 días en China por 9 de vacaciones",
 condLede:"Volar el sábado 7 de agosto, aterrizar el domingo 8 y aprovechar el puente del 16 de agosto (Zaragoza): 14 días completos en tierra con el domingo 15 en pleno viaje y regreso aterrizando el domingo 22 de agosto.",
 cards:[
  {n:"9",col:"var(--r4)",h:"días de vacaciones para 14 en China",p:"Volando el <b>sábado 7 de agosto</b> (o viernes 6 noche) y volviendo el <b>domingo 22</b>. El 15 cae en domingo y en Aragón se traslada al lunes 16 como festivo, así que solo se piden nueve días laborables: del 9 al 13, y del 17 al 20 de agosto. Rendimiento récord: 1,56 días de viaje por día pedido."},
  {n:"15",col:"var(--r2)",h:"de agosto en pleno corazón del viaje",p:"El <b>domingo 15 de agosto</b> está incluido sí o sí en el viaje, disfrutando del Parque Nacional de Zhangjiajie (las montañas de Avatar) en el ecuador exacto de la ruta antes de enlazar con el festivo del lunes 16."},
  {n:"100 %",col:"var(--r1)",h:"tren de alta velocidad en el interior",p:"Al hacer los trayectos de China continental en <b>tren de alta velocidad</b> se evitan los retrasos veraniegos por tormentas en aeropuertos del sur y se viaja directo de centro a centro a 350 km/h."}],
 alertT:"El rendimiento óptimo de agosto",
 alertP:"En agosto el festivo del 16 regala un día en Aragón. La ventana del <b>sábado 7 al domingo 22 de agosto</b> permite 14 días completos en tierra consumiendo solo 9 días de vacaciones laborales.",
 winTitle:"La ventana cerrada de agosto",
 winLede:"Vuestro margen va del 1 al 22 de agosto. Volar el sábado 7 y aterrizar el domingo 22 es la fórmula matemática que más estira los días libres con el día 15 en el corazón del itinerario.",
 winTable:'<table><thead><tr><th>Plan</th><th>Salida</th><th>Día 15 de agosto</th><th>Vuelta a España</th><th>Días en tierra</th><th>Vacaciones</th><th>Rendimiento</th></tr></thead><tbody>'+
  '<tr class="best"><td><b>Ventana elegida</b><br><span class="sm mute">14 días en tierra, el 15 en el centro del viaje y festivo del lunes 16</span></td><td class="n">Sáb 7 ago<br><span class="sm mute">o vie 6 noche</span></td><td class="n">En pleno viaje<br><span class="sm mute">Zhangjiajie (Avatar)</span></td><td class="n">Dom 22 ago</td><td class="n"><b>14</b></td><td class="n"><b>9</b></td><td><span class="badge">1,56 ★</span></td></tr>'+
  '</tbody></table>',
 winNote:"Itinerario calculado para volar el sábado 7 de agosto y aterrizar el domingo 8. El domingo 15 de agosto queda en pleno viaje, y el festivo de Aragón del lunes 16 permite 14 días en tierra con solo 9 días pedidos de vacaciones.",
 winCards:'<div class="card"><div class="eyebrow">Vuelos</div><h3 style="margin:10px 0 8px">Patrón de vuelos confirmado</h3><p>Volar el <b>sábado 7 de agosto</b> permite salir con opciones directas o escala corta diurna, o bien salir el viernes 6 noche con escala (Qatar, Emirates, Cathay) para aterrizar el domingo 8 por la mañana en Taipéi.<br><br>La vuelta es en vuelo directo nocturno desde Shanghái a Madrid con China Eastern (MU709, sale a las 00:45) o a Barcelona con Air China: aterrizaje en España el domingo 22 de agosto por la mañana.</p></div>'+
  '<div class="card"><div class="eyebrow">Aprovechamiento</div><h3 style="margin:10px 0 8px">Mejor rendimiento del año</h3><p>Esta ventana es la que menos vacaciones consume de todo el calendario (9 días pedidos para 14 en destino). Además, el <b>domingo 15 de agosto</b> se vive en el Parque Nacional de Zhangjiajie, y el lunes 16 festivo se aprovecha en Xi\'an recorriendo la muralla Ming en bicicleta.</p></div>',
 check:[
  ["Ahora","Comprar los vuelos para volar el sábado 7 de agosto","Salida el sábado 7 de agosto (o viernes 6 noche) hacia Taipéi y regreso desde Shanghái de madrugada el sábado 21 aterrizando el domingo 22."],
  ["Ahora","Confirmar el festivo del lunes 16 en vuestra empresa","El 15 cae en domingo y en Aragón se traslada al lunes 16. Si vuestro convenio no lo traslada, se pide un día más."],
  ["Cuando salgan","Vigilar el calendario Hyrox 2027 de China","En 2026 hubo Chengdú el 1-2 y Shenzhen el 15-16 de agosto. Si repiten patrón, entra en el viaje."],
  ["6 meses antes","Registrarse en la app 12306 con pasaporte","La verificación tarda. Agosto es temporada altísima de tren: con la cuenta lista se compran los billetes en segundos."],
  ["15 días antes","Comprar los billetes de tren el día que abren","Los billetes se abren exactamente 15 días antes a la hora indicada por la app 12306."],
  ["Antes de salir","Alipay o WeChat Pay con tarjeta europea vinculada","En China el efectivo es casi folclore. Vincular y probar la tarjeta desde España."],
  ["Antes de salir","eSIM y VPN contratadas desde España","Para WhatsApp, Google Maps e Instagram. Dentro de China ya no se puede contratar."]]
}};
