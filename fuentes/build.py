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

mapa = json.load(open(os.path.join(BASE, "mapa.json")))
tpl = tpl.replace("/*__MAPDATA__*/{}", json.dumps(mapa, separators=(",", ":"), ensure_ascii=False))

import urllib.parse
svg = ("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 720'>"
       "<rect width='1000' height='720' fill='%23FAFAF8'/>"
       "<path d='" + mapa["contorno"] + "' fill='%23D4541F' stroke='%23D4541F' stroke-width='10'/></svg>")
tpl = tpl.replace("/*__FAVICON__*/",
                  '<link rel="icon" href="data:image/svg+xml,%s">' % urllib.parse.quote(svg))

imgs = json.load(open(os.path.join(BASE, "imgs.json")))
blob = "var IMG=" + json.dumps({k: {"b64": v["b64"]} for k, v in imgs.items()},
                               separators=(",", ":")) + ";"
out = tpl.replace("/*__IMGDATA__*/", blob)
assert "IMGDATA" not in out and "__ROUTES__" not in out and "__MAPDATA__" not in out

destino = os.path.join(os.path.dirname(BASE), os.environ.get("OUTNAME", "index.html"))
io.open(destino, "w", encoding="utf-8").write(out)
print("%s: %.2f MB · %d fotos · %d itinerarios en el mapa"
      % (os.path.basename(destino), os.path.getsize(destino) / 1048576, len(imgs), len(mapa["rutas"])))
