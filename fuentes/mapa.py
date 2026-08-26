# -*- coding: utf-8 -*-
"""Mapa de China en SVG, sin librerías ni teselas: contorno, tramos y días.

Genera mapa.json, que la plantilla incrusta. Para cada ruta y temporada guarda:
  - un camino por tramo (avión, tren o bus), con sus kilómetros y duración
  - los nodos de las ciudades, con nombre
  - a qué tramo corresponde cada día, para poder encender el mapa al leer

Proyección: cónica de Albers con paralelos 25 y 47 y meridiano central 105,
la habitual para mapas de China.
"""
import json, math, os, re, subprocess

BASE = os.path.dirname(os.path.abspath(__file__))
W, H = 1000.0, 720.0
LAT0, LAT1, LON0 = 25.0, 47.0, 105.0     # paralelos estándar y meridiano central
VENTANA = (92.0, 20.3, 123.5, 43.0)      # el trozo de China por el que pasan las rutas
PANEL_W, PANEL_H = 430.0, 576.0          # el panel lateral del ordenador, en píxeles
LETRA_PX = 13.0                          # tamaño en pantalla al que debe quedar cada nombre
RAD = math.pi / 180.0


def albers(lon, lat):
    fi0, fi1 = LAT0 * RAD, LAT1 * RAD
    n = 0.5 * (math.sin(fi0) + math.sin(fi1))
    c = math.cos(fi0) ** 2 + 2 * n * math.sin(fi0)
    ro0 = math.sqrt(c - 2 * n * math.sin(0)) / n
    fi, lam = lat * RAD, (lon - LON0) * RAD
    ro = math.sqrt(c - 2 * n * math.sin(fi)) / n
    th = n * lam
    # OJO: en Albers la Y crece hacia el norte y en SVG hacia abajo, así que se invierte.
    # Sin este signo el mapa sale boca abajo (Pekín al sur de Shenzhen).
    return ro * math.sin(th), -(ro0 - ro * math.cos(th))


def _encaje():
    lo0, la0, lo1, la1 = VENTANA
    xs, ys = [], []
    for i in range(41):
        for lo, la in ((lo0 + (lo1 - lo0) * i / 40, la0), (lo0 + (lo1 - lo0) * i / 40, la1),
                       (lo0, la0 + (la1 - la0) * i / 40), (lo1, la0 + (la1 - la0) * i / 40)):
            x, y = albers(lo, la)
            xs.append(x); ys.append(y)
    x0, x1, y0, y1 = min(xs), max(xs), min(ys), max(ys)
    s = min(W / (x1 - x0), H / (y1 - y0))
    return x0, y0, s, (W - (x1 - x0) * s) / 2, (H - (y1 - y0) * s) / 2


X0, Y0, S, DX, DY = _encaje()


def proj(lon, lat):
    x, y = albers(lon, lat)
    return round((x - X0) * S + DX, 1), round((y - Y0) * S + DY, 1)


def contorno(eps=1.6):
    gj = json.load(open(os.path.join(BASE, "china-natural-earth.geojson")))
    geom = gj["geometry"] if gj.get("type") == "Feature" else gj["features"][0]["geometry"]
    polys = geom["coordinates"] if geom["type"] == "MultiPolygon" else [geom["coordinates"]]
    trozos = []
    for poly in polys:
        pts = [proj(lo, la) for lo, la in poly[0]]
        dentro = [p for p in pts if -160 <= p[0] <= W + 160 and -160 <= p[1] <= H + 160]
        if len(dentro) < 8:                       # islas y tramos fuera del recorte
            continue
        keep = [pts[0]]
        for p in pts[1:]:
            if abs(p[0] - keep[-1][0]) + abs(p[1] - keep[-1][1]) > eps:
                keep.append(p)
        if len(keep) < 8:
            continue
        trozos.append("M" + "L".join("%g %g" % p for p in keep) + "Z")
    return " ".join(trozos)


def arco(a, b, k):
    """Arco suave entre dos puntos, como el que trazaba el mapa anterior."""
    ax, ay = a
    bx, by = b
    mx, my = (ax + bx) / 2, (ay + by) / 2
    cx, cy = mx - (by - ay) * k, my + (bx - ax) * k
    return ("M%g %g Q%.1f %.1f %g %g" % (ax, ay, cx, cy, bx, by),
            (round(0.25 * ax + 0.5 * cx + 0.25 * bx, 1),
             round(0.25 * ay + 0.5 * cy + 0.25 * by, 1)),
            (cx, cy))


# de qué ciudad habla la foto de cada día; las genéricas heredan el día anterior
LUGAR_DE_FOTO = {
    "shenzhen": "shenzhen", "xining": "xining", "qinghai": "qinghai", "chaka": "chaka",
    "zhangye": "zhangye", "jiayuguan": "jiayuguan",
    "mogao": "dunhuang", "mingsha": "dunhuang", "yumen": "dunhuang", "yardang": "dunhuang",
    "terracota": "xian", "xianfood": "xian", "xianwall": "xian",
    "gubeikou": "jinshanling", "jinshanling": "jinshanling", "mutianyu": "mutianyu",
    "tiantan": "beijing", "gugong": "beijing", "yiheyuan": "beijing", "hutong": "beijing",
    "yungang": "datong",
    "wulingyuan": "zhangjiajie", "tianmen": "zhangjiajie",
    "furong": "furong", "fenghuang": "fenghuang", "jishou": "jishou",
    "chongqing": "chongqing", "wangxian": "wangxian",
    "dong": "zhaoxing", "jiabang": "congjiang", "basha": "basha", "congjiang": "congjiang",
    "longji": "longji", "yangshuo": "yangshuo", "lijiang": "yangshuo", "guilin": "guilin",
    "chengdu": "chengdu", "leshan": "leshan",
    # el panda es ambiguo, así que aquí manda el nombre completo de la foto
    "panda_3": "qinling", "panda_1": "chengdu", "panda_2": "chengdu", "panda": None,
    "shanghai": "shanghai", "bund": "shanghai", "suzhou": "suzhou", "hangzhou": "hangzhou",
    "huangshan": "huangshan", "crh": None,
}


def coloca_etiquetas(nodos, esc, limites):
    """Elige lado y desplazamiento de cada nombre para que no se pisen entre ellos.

    esc es el zoom de la ruta: al encuadrar más cerca, las unidades de usuario valen
    más píxeles, así que el texto tiene que medir menos para verse igual de grande.
    """
    ANCHO_CAR, ALTO, SEP = 10.5 * esc, 26.0 * esc, 19.0 * esc
    bx0, by0, bx1, by1 = limites
    radio = 17.0 * esc
    puestas = [(n["x"] - radio, n["y"] - radio, n["x"] + radio, n["y"] + radio) for n in nodos]
    cajas = []
    orden = sorted(range(len(nodos)), key=lambda i: (nodos[i]["y"], nodos[i]["x"]))
    for i in orden:
        n = nodos[i]
        ancho = len(n["n"]) * ANCHO_CAR
        opciones = [("start", SEP, 7 * esc), ("end", -SEP, 7 * esc),
                    ("middle", 0, -22 * esc), ("middle", 0, 34 * esc),
                    ("start", SEP, -14 * esc), ("end", -SEP, -14 * esc),
                    ("start", SEP, 28 * esc), ("end", -SEP, 28 * esc),
                    ("middle", 0, -40 * esc), ("middle", 0, 52 * esc)]
        elegida, mejor = None, None
        for lado, dx, dy in opciones:
            x = n["x"] + dx
            x0 = x if lado == "start" else (x - ancho if lado == "end" else x - ancho / 2)
            caja = (x0, n["y"] + dy - ALTO * 0.75, x0 + ancho, n["y"] + dy + ALTO * 0.25)
            fuera = max(0.0, bx0 - caja[0]) + max(0.0, caja[2] - bx1) \
                  + max(0.0, by0 - caja[1]) + max(0.0, caja[3] - by1)
            choque = sum(max(0.0, min(caja[2], c[2]) - max(caja[0], c[0]))
                         * max(0.0, min(caja[3], c[3]) - max(caja[1], c[1]))
                         for c in puestas)
            coste = choque + fuera * 40.0
            if coste == 0:
                elegida = (lado, dx, dy, caja)
                break
            if mejor is None or coste < mejor[0]:
                mejor = (coste, (lado, dx, dy, caja))
        if elegida is None:
            elegida = mejor[1]
        lado, dx, dy, caja = elegida
        puestas.append(caja)
        cajas.append(caja)
        n["lado"], n["dx"], n["dy"] = lado, round(dx, 1), round(dy, 1)
    return cajas


def muestrea(a, c, b, n=14):
    """Puntos a lo largo del arco cuadrático, para saber cuánto sitio ocupa."""
    pts = []
    for i in range(n + 1):
        u = i / n
        v = 1 - u
        pts.append((v * v * a[0] + 2 * v * u * c[0] + u * u * b[0],
                    v * v * a[1] + 2 * v * u * c[1] + u * u * b[1]))
    return pts


def datos_js():
    """Lee routes.js y la tabla de coordenadas de la plantilla con node."""
    guion = """
      const fs=require('fs'), vm=require('vm'), ctx={};
      vm.createContext(ctx);
      vm.runInContext(fs.readFileSync('routes.js','utf8'), ctx);
      const tpl=fs.readFileSync('plantilla.html','utf8');
      const coord=tpl.match(/var C=\\{[\\s\\S]*?\\};/)[0];
      const nom=tpl.match(/var N=\\{[\\s\\S]*?\\};/)[0];
      vm.runInContext(coord+nom, ctx);
      console.log(JSON.stringify({ROUTES:ctx.ROUTES, C:ctx.C, N:ctx.N}));
    """
    r = subprocess.run(["node", "-e", guion], cwd=BASE, capture_output=True, text=True)
    if r.returncode:
        raise SystemExit("node falló: " + r.stderr[:400])
    return json.loads(r.stdout)


def main():
    d = datos_js()
    ROUTES, C, N = d["ROUTES"], d["C"], d["N"]
    salida = {"contorno": contorno(), "vista": [W, H], "rutas": {}}

    for R in ROUTES:
        for temporada in ("may", "ago"):
            S_ = R.get(temporada)
            if not S_:
                continue
            k = R.get("curve", 0.08)
            tramos, nodos, orden, curvas = [], [], [], []
            for a, b, modo, km, dur in S_.get("legs", []):
                if a not in C or b not in C:
                    continue
                pa = proj(C[a][1], C[a][0])
                pb = proj(C[b][1], C[b][0])
                camino, medio, control = arco(pa, pb, 0 if modo == "bus" else k)
                curvas.append((pa, control, pb))
                tramos.append({"de": a, "a": b, "modo": modo, "km": km, "dur": dur,
                               "d": camino, "mx": medio[0], "my": medio[1]})
                for slug, p in ((a, pa), (b, pb)):
                    if slug not in orden:
                        orden.append(slug)
                        nodos.append({"id": slug, "x": p[0], "y": p[1],
                                      "n": N.get(slug, slug.title())})
            # a qué tramo corresponde cada día, mirando siempre hacia delante
            def indice(lugar, actual):
                if not lugar or not tramos:
                    return actual
                desde = max(actual, 0)
                for i in range(desde, len(tramos)):
                    if tramos[i]["a"] == lugar:
                        return i
                for i in range(desde, len(tramos)):
                    if tramos[i]["de"] == lugar:
                        return i - 1
                if lugar in C:
                    px, py = proj(C[lugar][1], C[lugar][0])
                    return min(range(len(tramos)),
                               key=lambda i: (tramos[i]["mx"] - px) ** 2 + (tramos[i]["my"] - py) ** 2)
                return actual

            dia_tramo, actual = [], -1
            for dia in S_.get("days", []):
                img = dia.get("img", "") or ""
                lugar = LUGAR_DE_FOTO.get(img)
                if lugar is None and img not in LUGAR_DE_FOTO:
                    lugar = LUGAR_DE_FOTO.get(re.sub(r"_\d+$", "", img))
                nuevo = indice(lugar, actual)
                # Un día con traslado tiene que encender su tramo aunque la foto sea
                # de la ciudad de la que se sale (el vuelo nocturno del primer día, p. ej.).
                mov = dia.get("m")
                # los traslados internos (mismo nodo del mapa) llevan "stay" y no encienden tramo
                if mov and len(mov) > 2 and mov[2] == "stay":
                    mov = None
                if mov and nuevo <= actual and actual + 1 < len(tramos):
                    nuevo = actual + 1
                actual = max(actual, nuevo)
                dia_tramo.append(actual)
            # ----- encuadre propio: cada ruta usa solo el trozo de China que pisa -----
            pts = [(n["x"], n["y"]) for n in nodos]
            for a, c, b in curvas:
                pts += muestrea(a, c, b)
            nx0 = min(p[0] for p in pts); nx1 = max(p[0] for p in pts)
            ny0 = min(p[1] for p in pts); ny1 = max(p[1] for p in pts)

            # El texto debe verse del mismo tamaño en todas las rutas. Como el SVG se
            # escala para caber en el panel, el tamaño en unidades de usuario depende
            # del encuadre, y el encuadre depende del texto. Se itera hasta que cuadra.
            esc, cajas, caja_v = 0.70, [], None
            for _ in range(6):
                margen = 46 * esc
                cajas = coloca_etiquetas(
                    nodos, esc, (nx0 - margen * 3, ny0 - margen * 2,
                                 nx1 + margen * 3, ny1 + margen * 2))
                ex0 = min([nx0] + [c[0] for c in cajas]) - margen
                ex1 = max([nx1] + [c[2] for c in cajas]) + margen
                ey0 = min([ny0] + [c[1] for c in cajas]) - margen
                ey1 = max([ny1] + [c[3] for c in cajas]) + margen
                caja_v = (ex0, ey0, ex1 - ex0, ey1 - ey0)
                # el panel lateral del ordenador manda: 430 x 576 px
                nueva = (LETRA_PX / 20.0) * max(caja_v[2] / PANEL_W, caja_v[3] / PANEL_H)
                nueva = max(0.28, min(1.80, nueva))
                if abs(nueva - esc) < 0.008:
                    break
                esc = nueva
            ex0, ey0, vw, vh = caja_v
            salida["rutas"]["%d%s" % (R["id"], temporada)] = {
                "hex": R["hex"], "hexm": R.get("hexm", R["hex"]), "tramos": tramos, "nodos": nodos, "diaTramo": dia_tramo,
                "vista": [round(ex0, 1), round(ey0, 1), round(vw, 1), round(vh, 1)],
                "fuente": round(20 * esc, 1), "r": round(9 * esc, 1),
                "toque": round(30 * esc, 1)}

    json.dump(salida, open(os.path.join(BASE, "mapa.json"), "w"), separators=(",", ":"))
    n = len(salida["rutas"])
    print("mapa.json: %d itinerarios · contorno de %d trozos · %.0f KB"
          % (n, salida["contorno"].count("M"),
             os.path.getsize(os.path.join(BASE, "mapa.json")) / 1024))
    for clave in ("1may", "1ago", "3ago"):
        r = salida["rutas"].get(clave)
        if r:
            print("  %-5s %2d tramos, %2d nodos, días→tramo %s"
                  % (clave, len(r["tramos"]), len(r["nodos"]), r["diaTramo"]))


if __name__ == "__main__":
    main()
