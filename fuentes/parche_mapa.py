# -*- coding: utf-8 -*-
"""Sustituye el mapa de Leaflet de la plantilla por el mapa SVG propio.

Se ejecuta una sola vez sobre plantilla.html y deja plantilla-svg.html, que es
la que usa build.py. Cambia tres cosas:
  1. quita las dos etiquetas de Leaflet (el documento pasa a funcionar sin red)
  2. mete el mapa SVG con su barra de día, su leyenda y el CSS que necesita
  3. cambia drawRoute por el pintado en SVG y añade la sincronía con los días
"""
import os, re

BASE = os.path.dirname(os.path.abspath(__file__))
tpl = open(os.path.join(BASE, "plantilla.html"), encoding="utf-8").read()

# ---------------------------------------------------------------- 1. sin Leaflet
tpl = tpl.replace('<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">\n', "")
tpl = tpl.replace('<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>\n', "")
tpl = re.sub(r"\.leaflet-container\{[^}]*\}\n?", "", tpl)
tpl = re.sub(r"\.mlbl[^\n]*\n", "", tpl)

# ---------------------------------------------------------------- 2. CSS
CSS = """
/* ---------- mapa propio en SVG: sin librerías y sin conexión ---------- */
:root{--mapH:min(48dvh,440px)}
.route-map{position:sticky;top:var(--barH,54px);z-index:60;margin-top:32px;
  background:var(--paper);padding-bottom:10px;transition:box-shadow .35s ease}
.route-map[data-state=mini]{box-shadow:0 12px 26px -20px rgba(22,23,27,.5)}
.mapbar{display:flex;align-items:center;gap:12px;width:100%;padding:10px 2px 12px;background:none;
  border:0;border-bottom:1px solid var(--line);font:inherit;color:var(--ink);text-align:left;
  cursor:pointer;-webkit-tap-highlight-color:transparent}
.mapbar .mb-day{font-size:.72rem;text-transform:uppercase;letter-spacing:.14em;font-weight:700;
  white-space:nowrap}
.mapbar .mb-txt{font-size:.93rem;color:var(--ink2);flex:1 1 auto;min-width:0;overflow:hidden;
  text-overflow:ellipsis;white-space:nowrap}
.mapbar .mb-prog{position:absolute;left:0;right:0;bottom:0;height:2px;background:var(--line2);
  overflow:hidden}
.mapbar .mb-prog i{display:block;height:100%;width:0;background:currentColor;
  transition:width .45s cubic-bezier(.33,1,.68,1)}
.mapbar .mb-ico{width:26px;height:26px;flex:none;border:1px solid var(--line);border-radius:999px;
  position:relative;transition:transform .35s cubic-bezier(.33,1,.68,1),border-color .25s}
.mapbar .mb-ico::before,.mapbar .mb-ico::after{content:"";position:absolute;top:50%;left:50%;
  width:8px;height:1.6px;background:var(--ink2);border-radius:2px}
.mapbar .mb-ico::before{transform:translate(-85%,-50%) rotate(45deg)}
.mapbar .mb-ico::after{transform:translate(-15%,-50%) rotate(-45deg)}
.route-map[data-state=mini] .mb-ico{transform:rotate(180deg)}
.mapbox{overflow:hidden;transition:max-height .42s cubic-bezier(.33,1,.68,1),opacity .3s ease,
  margin-top .42s ease}
.route-map[data-state=open] .mapbox{max-height:var(--mapH);margin-top:12px;opacity:1}
.route-map[data-state=mini] .mapbox{max-height:0;opacity:0;margin-top:0}
#mapsvg{width:100%;height:var(--mapH);display:block;border:1px solid var(--line);
  border-radius:var(--rad);background:linear-gradient(#FBFBF9,#F6F5F1)}
#mapsvg .land{fill:#EFEEE9;stroke:#DAD8D1;stroke-width:1.1;vector-effect:non-scaling-stroke}
#mapsvg .leg{fill:none;stroke-linecap:round;stroke-linejoin:round;opacity:.16;
  transition:opacity .32s ease,stroke-width .3s ease}
#mapsvg .leg.done{opacity:.95}
#mapsvg .leg.now{stroke-width:11}
#mapsvg .leg.tren{stroke-width:7}
#mapsvg .leg.avion{stroke-width:6;stroke-dasharray:20 14}
#mapsvg .leg.bus{stroke-width:5;stroke-dasharray:2 12}
#mapsvg .mode{opacity:0;transition:opacity .3s}
#mapsvg .mode.done{opacity:.9}
#mapsvg .node circle{fill:#fff;stroke:#9A9CA3;stroke-width:3;transition:fill .3s,stroke .3s,r .25s}
#mapsvg .node text{font-size:20px;font-weight:650;fill:var(--mute);paint-order:stroke;
  stroke:#FBFBF9;stroke-width:6;transition:fill .3s}
#mapsvg .node.seen circle{stroke:currentColor}
#mapsvg .node.seen text{fill:var(--ink2)}
#mapsvg .node.here circle{fill:currentColor;stroke:currentColor;r:15}
#mapsvg .node.here text{fill:var(--ink);font-weight:800}
#mapsvg .node{cursor:pointer}
#mapsvg .node:hover circle:not(.hit){stroke:currentColor}
#mapsvg .node:focus-visible{outline:none}
#mapsvg .node:focus-visible circle:not(.hit){stroke:currentColor;stroke-width:6}
#mapsvg .leg{cursor:help}
.maplegend{display:flex;gap:20px;flex-wrap:wrap;margin-top:12px;font-size:.8rem;color:var(--mute)}
.day{scroll-margin-top:120px}
.day.on{background:linear-gradient(90deg,rgba(0,0,0,.035),transparent 60%);border-radius:var(--radsm)}

/* ---------- móvil ---------- */
@media (max-width:760px){
  body{font-size:16px}
  .wrap{padding:0 16px}
  .route-map{margin:26px -16px 0;padding:0 16px 8px;border-bottom:1px solid transparent}
  .route-map[data-state=mini]{border-bottom-color:var(--line)}
  :root{--mapH:min(40dvh,330px)}
  .mapbar{padding:9px 0 11px}
  .mapbar .mb-prog{left:16px;right:16px}
  .mapbar .mb-txt{font-size:.88rem}
  .maplegend{gap:12px;font-size:.74rem;margin-top:10px;
    transition:max-height .35s ease,opacity .3s ease,margin-top .35s ease;overflow:hidden}
  .route-map[data-state=mini] .maplegend{max-height:0;opacity:0;margin-top:0}
  #mapsvg .node text{font-size:26px;stroke-width:8}
  #mapsvg .node circle{r:11}
  #mapsvg .leg.tren{stroke-width:9}
  #mapsvg .leg.avion{stroke-width:8;stroke-dasharray:22 15}
  #mapsvg .leg.bus{stroke-width:7;stroke-dasharray:2 14}
  .chips{flex-wrap:nowrap;overflow-x:auto;scroll-snap-type:x proximity;
    margin:0 -16px;padding:0 16px 8px;scrollbar-width:none;-webkit-overflow-scrolling:touch}
  .chips::-webkit-scrollbar{display:none}
  .chips .chip{flex:none;scroll-snap-align:start}
  .day{grid-template-columns:1fr;gap:10px;padding:18px 12px}
  .day figure{order:3}
  .day .daynum{display:flex;align-items:baseline;gap:8px}
  .day:active{transform:none}
  .pgrid{display:grid;grid-auto-flow:column;grid-auto-columns:78%;overflow-x:auto;
    scroll-snap-type:x mandatory;gap:12px;padding-bottom:6px;
    scrollbar-width:none;-webkit-overflow-scrolling:touch}
  .pgrid::-webkit-scrollbar{display:none}
  .pgrid figure{scroll-snap-align:center}
  .seasonbar .in{padding:8px 16px;gap:10px;flex-wrap:nowrap}
  .seg button{padding:7px 15px;font-size:.75rem}
  /* la línea de fechas cabe en una sola línea: el mapa fijo necesita ese sitio */
  .seasonbar .now{font-size:.72rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
    min-width:0;flex:1 1 auto}
}
"""
tpl = tpl.replace("/* ---------- mapa ---------- */", "/* ---------- mapa (Leaflet retirado) ---------- */", 1)
tpl = tpl.replace("</style>", CSS + "\n</style>", 1)

# ---------------------------------------------------------------- 3. HTML del mapa
viejo_html = re.search(r'    <div id="map" class="rv"></div>\n    <div class="maplegend">.*?</div>\n', tpl, re.S).group(0)
nuevo_html = """    <div class="route-map" id="routemap" data-state="open">
      <button class="mapbar" type="button" id="mapbar" aria-expanded="true"
              aria-controls="mapbox" aria-label="Mostrar u ocultar el mapa">
        <span class="mb-day" id="mbDay">Ruta 1</span>
        <span class="mb-txt" id="mbTxt">Mapa del itinerario</span>
        <span class="mb-prog"><i id="mbProg"></i></span>
        <span class="mb-ico" aria-hidden="true"></span>
      </button>
      <div class="mapbox" id="mapbox">
        <svg id="mapsvg" viewBox="0 0 1000 720" role="img"
             aria-label="Mapa del itinerario por China, día a día"></svg>
      </div>
      <div class="maplegend">
        <span><i class="lgline" style="border-top:5px solid #3C3E46"></i> Tren</span>
        <span><i class="lgline" style="border-top:4px dashed #3C3E46"></i> Avión</span>
        <span><i class="lgline" style="border-top:3px dotted #8A8C93"></i> Bus o coche</span>
        <span class="mute">El trazado se enciende según el día que estás leyendo</span>
      </div>
    </div>
"""
tpl = tpl.replace(viejo_html, nuevo_html)

# ---------------------------------------------------------------- 4. JS del mapa
ini = tpl.index("/* ---------- mapa (Leaflet retirado) ---------- */")
fin = tpl.index("/* ---------- render ---------- */")
JS = """/* ---------- mapa propio: contorno, tramos por día y sincronía ---------- */
var MAPA=/*__MAPDATA__*/{};
var svg=$('#mapsvg'), rmap=$('#routemap'), bar=$('#mapbar');
var mbDay=$('#mbDay'), mbTxt=$('#mbTxt'), mbProg=$('#mbProg');
var NS='http://www.w3.org/2000/svg';
function nodo(t,a){var e=document.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);return e}

var mapaActual=null, manual=false, forzado=0, forzadoHasta=0;

/* alto real de la barra de temporada: en móvil ocupa dos líneas y el mapa
   tiene que pegarse justo debajo, no encima */
function mideBarra(){
  var b=document.querySelector('.seasonbar');
  if(!b)return;
  var alto=Math.round(b.getBoundingClientRect().height);
  document.documentElement.style.setProperty('--barH',alto+'px');
}
mideBarra();
addEventListener('resize',mideBarra);
addEventListener('orientationchange',mideBarra);
/* la barra cambia de alto cuando se rellena el texto o se gira el móvil:
   se vigila su tamaño en vez de medirla una sola vez */
if(window.ResizeObserver){
  var ro=new ResizeObserver(mideBarra);
  ro.observe(document.querySelector('.seasonbar'));
}
addEventListener('load',mideBarra);

function nombreNodo(M,id){
  for(var i=0;i<M.nodos.length;i++)if(M.nodos[i].id===id)return M.nodos[i].n;
  return id;
}
/* primer día en el que se llega a esa ciudad, para poder saltar desde el mapa */
function diaDeNodo(M,id){
  var primero=0;
  for(var i=0;i<M.tramos.length;i++){
    if(M.tramos[i].a!==id&&!(i===0&&M.tramos[i].de===id))continue;
    for(var d=0;d<M.diaTramo.length;d++){
      if(M.diaTramo[d]>=(M.tramos[i].a===id?i:-1)){primero=d+1;break}
    }
    if(primero)break;
  }
  return primero;
}

function pintaMapa(clave){
  var M=MAPA.rutas[clave];
  svg.innerHTML='';
  if(!M){mapaActual=null;return}
  svg.appendChild(nodo('path',{'class':'land',d:MAPA.contorno}));
  svg.style.color=M.hex;
  var gl=nodo('g',{'class':'legs'}); svg.appendChild(gl);
  var NOMBREMODO={tren:'Tren',avion:'Avión',bus:'Bus o coche'};
  M.tramos.forEach(function(t,i){
    var p=nodo('path',{'class':'leg '+t.modo,'data-i':i,d:t.d,stroke:M.hex});
    var info=document.createElementNS(NS,'title');
    info.textContent=nombreNodo(M,t.de)+' a '+nombreNodo(M,t.a)+' · '+NOMBREMODO[t.modo]+
      ' · '+t.km.toLocaleString('es-ES')+' km · '+t.dur;
    p.appendChild(info);
    gl.appendChild(p);
  });
  var gn=nodo('g',{'class':'nodes'}); svg.appendChild(gn);
  M.nodos.forEach(function(n){
    var g=nodo('g',{'class':'node','data-id':n.id,tabindex:'0',role:'button',
                    'aria-label':'Ir al día en el que llegáis a '+n.n});
    g.appendChild(nodo('circle',{'class':'hit',cx:n.x,cy:n.y,r:30,fill:'transparent'}));
    g.appendChild(nodo('circle',{cx:n.x,cy:n.y,r:9}));
    var t=nodo('text',{x:n.x+(n.dx||16),y:n.y+(n.dy===undefined?7:n.dy),
                       'text-anchor':n.lado||'start'});
    t.textContent=n.n; g.appendChild(t);
    function ir(){
      var d=diaDeNodo(M,n.id);
      var e=d?document.getElementById('dia'+d):null;
      if(!e)return;
      forzado=d; forzadoHasta=Date.now()+1100;   // mientras baja, manda el día pulsado
      e.scrollIntoView({block:'start',behavior:reduce?'auto':'smooth'});
    }
    g.addEventListener('click',ir);
    g.addEventListener('keydown',function(ev){
      if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();ir()}
    });
    gn.appendChild(g);
  });
  mapaActual={clave:clave,M:M,legs:[].slice.call(gl.children),nodes:[].slice.call(gn.children),estado:-2};
  marcaMapa(0,'');
}

function marcaMapa(dia,titulo){
  if(!mapaActual)return;
  var M=mapaActual.M, total=M.diaTramo.length;
  var hasta=dia>0?M.diaTramo[dia-1]:-1;
  if(mapaActual.estado!==hasta){
    mapaActual.estado=hasta;
    mapaActual.legs.forEach(function(p,i){
      p.classList.toggle('done',i<=hasta);
      p.classList.toggle('now',i===hasta);
    });
    var vistos={};
    M.tramos.forEach(function(t,i){if(i<=hasta){vistos[t.de]=1;vistos[t.a]=1}});
    if(hasta<0&&M.tramos.length)vistos[M.tramos[0].de]=1;
    var aqui=hasta>=0?M.tramos[hasta].a:(M.tramos.length?M.tramos[0].de:null);
    mapaActual.nodes.forEach(function(g){
      var id=g.getAttribute('data-id');
      g.classList.toggle('seen',!!vistos[id]);
      g.classList.toggle('here',id===aqui);
    });
  }
  mbDay.textContent=dia>0?('Día '+(dia<10?'0':'')+dia):('Ruta '+current);
  mbTxt.textContent=dia>0&&titulo?titulo:(SEASONS[SEASON].label.toLowerCase()==='mayo'?
    'Itinerario de mayo, '+total+' días':'Itinerario de agosto, '+total+' días');
  mbProg.style.width=(dia>0?(dia/total*100):0)+'%';
}

function estadoMapa(v){
  if(rmap.dataset.state===v)return;
  rmap.dataset.state=v;
  bar.setAttribute('aria-expanded',String(v==='open'));
}
bar.addEventListener('click',function(){
  manual=true; estadoMapa(rmap.dataset.state==='mini'?'open':'mini');
});

/* el día que se está leyendo manda: enciende su tramo y titula la barra */
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
var mqEstrecho=matchMedia('(max-width:760px)');
function estrecho(){return mqEstrecho.matches}
mqEstrecho.addEventListener('change',function(){manual=false;alScroll()});
function vh(){return window.innerHeight||document.documentElement.clientHeight||800}
var pendiente=false;
function sincroniza(){
  pendiente=false;
  /* la línea de lectura va justo debajo del mapa fijo, no en medio de la pantalla:
     así el día marcado es el que se está leyendo y no el de más abajo */
  var caja=rmap.getBoundingClientRect();
  var linea=Math.min(vh()*0.72,Math.max(vh()*0.26,caja.bottom+56));
  var dias=$$('.day'), act=0, titulo='';
  for(var i=0;i<dias.length;i++){
    var cd=dias[i].getBoundingClientRect();
    if(cd.top<=linea){act=i+1;titulo=dias[i].getAttribute('data-t')||''}
  }
  if(forzado&&Date.now()<forzadoHasta){
    act=forzado;
    var df=document.getElementById('dia'+forzado);
    titulo=df?(df.getAttribute('data-t')||''):titulo;
  }
  dias.forEach(function(d,i){d.classList.toggle('on',i+1===act)});
  marcaMapa(act,titulo);
  var box=$('#routebox').getBoundingClientRect();
  if(box.bottom<0||box.top>vh())manual=false;
  if(!manual&&estrecho())estadoMapa(dias.length&&dias[0].getBoundingClientRect().top<130?'mini':'open');
}
function alScroll(){if(!pendiente){pendiente=true;requestAnimationFrame(sincroniza)}}
addEventListener('scroll',alScroll,{passive:true});
addEventListener('resize',alScroll);
addEventListener('orientationchange',alScroll);
addEventListener('beforeprint',function(){
  estadoMapa('open');
  if(mapaActual)mapaActual.legs.forEach(function(p){p.classList.add('done')});
});

"""
tpl = tpl[:ini] + JS + tpl[fin:]

# ---------------------------------------------------------------- 5. enganches en el render
tpl = tpl.replace("""  var R=ROUTES.filter(function(r){return r.id===id})[0];
  var S=R[SEASON];
  drawRoute(R);""",
"""  var R=ROUTES.filter(function(r){return r.id===id})[0];
  var S=R[SEASON];
  pintaMapa(R.id+SEASON);""")
tpl = tpl.replace("""  S.days.forEach(function(D,i){
    var d=el('div','day');""",
"""  S.days.forEach(function(D,i){
    var d=el('div','day');
    d.setAttribute('data-day',i+1);
    d.setAttribute('data-t',D.t);
    d.id='dia'+(i+1);""")
tpl = tpl.replace("""  box.appendChild(list);
}""",
"""  box.appendChild(list);
  manual=false;
  requestAnimationFrame(sincroniza);
}""")
# la llamada final de arranque de Leaflet ya no existe
tpl = tpl.replace("  setTimeout(function(){map.invalidateSize()},120);\n", "")
tpl = tpl.replace("setTimeout(function(){map.invalidateSize()},260);\n", "")

assert "leaflet" not in tpl.lower(), "quedan restos de Leaflet"
assert "/*__MAPDATA__*/" in tpl
open(os.path.join(BASE, "plantilla-svg.html"), "w", encoding="utf-8").write(tpl)
print("plantilla-svg.html escrita:", len(tpl) // 1024, "KB")
