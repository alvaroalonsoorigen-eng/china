#!/usr/bin/env python3
"""Monta index.html: plantilla + datos + mapa + fotos, todo en un archivo.

    python3 mapa.py     # recalcula el mapa (contorno, tramos y días)
    python3 build.py    # escribe ../index.html
"""
import io, json, os

BASE = os.path.dirname(os.path.abspath(__file__))
tpl = io.open(os.path.join(BASE, "plantilla-svg.html"), encoding="utf-8").read()

for marca, fichero in (("/*__ROUTES__*/", "routes.js"),
                       ("/*__SEASONS__*/", "seasons.js"),
                       ("/*__PLACES__*/", "places.js")):
    assert tpl.count(marca) == 1, "falta el marcador " + marca
    tpl = tpl.replace(marca, io.open(os.path.join(BASE, fichero), encoding="utf-8").read())

# La tipografia DM Sans viaja embebida: el fichero no depende de Google Fonts
import base64
woff = base64.b64encode(open(os.path.join(BASE, "dm-sans-latin.woff2"), "rb").read()).decode()
fuente = ("@font-face{font-family:'DM Sans';font-style:normal;font-weight:100 1000;"
          "font-display:swap;src:url(data:font/woff2;base64," + woff + ") format('woff2');"
          "unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+2000-206F,U+20AC,U+2122;}")
assert tpl.count("/*__FONT__*/") == 1, "falta el marcador /*__FONT__*/"
tpl = tpl.replace("/*__FONT__*/", fuente)

# El video del heroe (Muralla en slow motion, Pexels) viaja embebido igual que las fotos
vid = base64.b64encode(open(os.path.join(BASE, "hero_wall.mp4"), "rb").read()).decode()
assert tpl.count("/*__VIDEO__*/") == 1, "falta el marcador /*__VIDEO__*/"
tpl = tpl.replace("/*__VIDEO__*/", "data:video/mp4;base64," + vid)

mapa = json.load(open(os.path.join(BASE, "mapa.json")))
tpl = tpl.replace("/*__MAPDATA__*/{}", json.dumps(mapa, separators=(",", ":"), ensure_ascii=False))

import urllib.parse
# Bandera oficial de China para el favicon: fondo rojo y cinco estrellas doradas
p_big = "M 5.00,2.00 L 5.67,4.07 L 7.85,4.07 L 6.09,5.35 L 6.76,7.43 L 5.00,6.15 L 3.24,7.43 L 3.91,5.35 L 2.15,4.07 L 4.33,4.07 Z"
p_s1 = "M 9.14,2.51 L 9.62,1.97 L 9.25,1.34 L 9.91,1.63 L 10.39,1.08 L 10.33,1.80 L 11.00,2.09 L 10.29,2.25 L 10.22,2.97 L 9.85,2.35 Z"
p_s2 = "M 11.01,4.14 L 11.66,3.82 L 11.56,3.10 L 12.07,3.62 L 12.72,3.30 L 12.38,3.95 L 12.88,4.47 L 12.17,4.34 L 11.83,4.99 L 11.73,4.27 Z"
p_s3 = "M 11.04,6.73 L 11.76,6.70 L 11.96,6.00 L 12.21,6.68 L 12.94,6.66 L 12.37,7.10 L 12.62,7.79 L 12.01,7.38 L 11.44,7.83 L 11.64,7.13 Z"
p_s4 = "M 9.22,8.38 L 9.90,8.63 L 10.35,8.06 L 10.32,8.79 L 11.00,9.05 L 10.30,9.24 L 10.26,9.96 L 9.87,9.36 L 9.16,9.55 L 9.62,8.98 Z"
flag_svg = ("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'>"
            "<rect width='30' height='20' fill='#DE2910' rx='3'/>"
            f"<path d='{p_big} {p_s1} {p_s2} {p_s3} {p_s4}' fill='#FFDE00'/></svg>")
tpl = tpl.replace("/*__FAVICON__*/",
                  '<link rel="icon" href="data:image/svg+xml,%s">' % urllib.parse.quote(flag_svg))

imgs = json.load(open(os.path.join(BASE, "imgs.json")))
blob = "var IMG=" + json.dumps({k: {"b64": v["b64"]} for k, v in imgs.items()},
                               separators=(",", ":")) + ";"
out = tpl.replace("/*__IMGDATA__*/", blob)
assert "IMGDATA" not in out and "__ROUTES__" not in out and "__MAPDATA__" not in out

destino = os.path.join(os.path.dirname(BASE), os.environ.get("OUTNAME", "index.html"))
io.open(destino, "w", encoding="utf-8").write(out)
print("%s: %.2f MB · %d fotos · %d itinerarios en el mapa"
      % (os.path.basename(destino), os.path.getsize(destino) / 1048576, len(imgs), len(mapa["rutas"])))
