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
RAD = math.pi / 180.0


def albers(lon, lat):
    fi0, fi1 = LAT0 * RAD, LAT1 * RAD
    n = 0.5 * (math.sin(fi0) + math.sin(fi1))
    c = math.cos(fi0) ** 2 + 2 * n * math.sin(fi0)
    ro0 = math.sqrt(c - 2 * n * math.sin(0)) / n
    fi, lam = lat * RAD, (lon - LON0) * RAD
    ro = math.sqrt(c - 2 * n * math.sin(fi)) / n
    th = n * lam
    return ro * math.sin(th), ro0 - ro * math.cos(th)


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
    return "M%g %g Q%.1f %.1f %g %g" % (ax, ay, cx, cy, bx, by), (
        round(0.25 * ax + 0.5 * cx + 0.25 * bx, 1), round(0.25 * ay + 0.5 * cy + 0.25 * by, 1))


# de qué ciudad habla la foto de cada día; las genéricas heredan el día anterior
LUGAR_DE_FOTO = {
    "shenzhen": "shenzhen", "xining": "xining", "qinghai": "qinghai", "chaka": "chaka",
    "zhangye": "zhangye", "jiayuguan": "jiayuguan",
    "mogao": "dunhuang", "mingsha": "dunhuang", "yumen": "dunhuang", "yardang": "dunhuang",
    "terracota": "xian", "xianfood": "xian",
    "gubeikou": "jinshanling", "jinshanling": "jinshanling", "mutianyu": "mutianyu",
    "tiantan": "beijing", "gugong": "beijing", "yiheyuan": "beijing",
    "yungang": "datong",
    "wulingyuan": "zhangjiajie", "tianmen": "zhangjiajie",
    "furong": "furong", "fenghuang": "fenghuang", "jishou": "jishou",
    "dong": "zhaoxing", "jiabang": "congjiang", "basha": "basha", "congjiang": "congjiang",
    "longji": "longji", "yangshuo": "yangshuo", "lijiang": "yangshuo", "guilin": "guilin",
    "chengdu": "chengdu", "panda": None, "leshan": "leshan",
    "shanghai": "shanghai", "bund": "shanghai", "suzhou": "suzhou", "hangzhou": "hangzhou",
    "huangshan": "huangshan", "crh": None,
}


def coloca_etiquetas(nodos):
    """Elige lado y desplazamiento de cada nombre para que no se pisen entre ellos."""
    ANCHO_CAR, ALTO = 10.5, 26.0
    # los propios círculos de ciudad son obstáculos: ningún nombre debe caer encima
    puestas = [(n["x"] - 17, n["y"] - 17, n["x"] + 17, n["y"] + 17) for n in nodos]
    orden = sorted(range(len(nodos)), key=lambda i: (nodos[i]["y"], nodos[i]["x"]))
    for i in orden:
        n = nodos[i]
        ancho = len(n["n"]) * ANCHO_CAR
        opciones = [("start", 19, 7), ("end", -19, 7),
                    ("middle", 0, -22), ("middle", 0, 34),
                    ("start", 19, -14), ("end", -19, -14),
                    ("start", 19, 28), ("end", -19, 28)]
        elegida = opciones[0]
        for lado, dx, dy in opciones:
            x = n["x"] + dx
            x0 = x if lado == "start" else (x - ancho if lado == "end" else x - ancho / 2)
            caja = (x0, n["y"] + dy - ALTO * 0.75, x0 + ancho, n["y"] + dy + ALTO * 0.25)
            if caja[0] < 6 or caja[2] > W - 6 or caja[1] < 4 or caja[3] > H - 4:
                continue
            if any(not (caja[2] < c[0] or caja[0] > c[2] or caja[3] < c[1] or caja[1] > c[3])
                   for c in puestas):
                continue
            elegida = (lado, dx, dy)
            break
        lado, dx, dy = elegida
        x = n["x"] + dx
        x0 = x if lado == "start" else (x - ancho if lado == "end" else x - ancho / 2)
        puestas.append((x0, n["y"] + dy - ALTO * 0.75, x0 + ancho, n["y"] + dy + ALTO * 0.25))
        n["lado"], n["dx"], n["dy"] = lado, dx, dy
    return nodos


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
            tramos, nodos, orden = [], [], []
            for a, b, modo, km, dur in S_.get("legs", []):
                if a not in C or b not in C:
                    continue
                pa = proj(C[a][1], C[a][0])
                pb = proj(C[b][1], C[b][0])
                camino, medio = arco(pa, pb, 0 if modo == "bus" else k)
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
                prefijo = re.sub(r"_\d+$", "", dia.get("img", "") or "")
                actual = max(actual, indice(LUGAR_DE_FOTO.get(prefijo), actual))
                dia_tramo.append(actual)
            coloca_etiquetas(nodos)
            salida["rutas"]["%d%s" % (R["id"], temporada)] = {
                "hex": R["hex"], "tramos": tramos, "nodos": nodos, "diaTramo": dia_tramo}

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
