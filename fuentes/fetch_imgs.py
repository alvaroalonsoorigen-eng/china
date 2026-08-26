#!/usr/bin/env python3
# Descarga imagenes de Wikimedia Commons, las recorta y las guarda en base64.
import io, json, os, re, sys, time, base64, urllib.parse
import requests
from PIL import Image

UA = {"User-Agent": "TripPlannerPersonal/1.0 (personal, non-commercial)"}
API = "https://commons.wikimedia.org/w/api.php"
OUT = os.path.dirname(os.path.abspath(__file__))
W, H, Q = 800, 520, 74

QUERIES = [
    ("shenzhen_1",   "Shenzhen skyline Futian"),
    ("shenzhen_2",   "Huaqiangbei Shenzhen"),
    ("shenzhen_3",   "Shenzhen Civic Center night"),
    ("zhangye_1",    "Zhangye Danxia landform"),
    ("zhangye_2",    "Zhangye Danxia National Geopark"),
    ("jiayuguan_1",  "Jiayuguan Fort"),
    ("jiayuguan_2",  "Overhanging Great Wall Jiayuguan"),
    ("mogao_1",      "Mogao Caves Dunhuang"),
    ("mogao_2",      "Mogao Caves mural"),
    ("mingsha_1",    "Crescent Lake Dunhuang"),
    ("mingsha_2",    "Mingsha Shan camel"),
    ("yumen_1",      "Yumen Pass"),
    ("hanwall_1",    "Han dynasty Great Wall Dunhuang"),
    ("yardang_1",    "Dunhuang Yardang National Geopark"),
    ("terracota_1",  "Terracotta Army pit 1"),
    ("terracota_2",  "Terracotta Army warrior close"),
    ("xianwall_1",   "Xi'an City Wall"),
    ("xianfood_1",   "Muslim Quarter Xi'an"),
    ("panda_1",      "Giant panda Ailuropoda melanoleuca"),
    ("panda_2",      "Giant panda cub"),
    ("panda_3",      "Qinling panda"),
    ("jinshanling_1","Jinshanling Great Wall"),
    ("jinshanling_2","Jinshanling Great Wall sunrise"),
    ("gubeikou_1",   "Gubeikou Great Wall"),
    ("tiantan_1",    "Temple of Heaven Beijing"),
    ("hutong_1",     "Beijing hutong"),
    ("wulingyuan_1", "Wulingyuan Zhangjiajie"),
    ("wulingyuan_2", "Zhangjiajie National Forest Park pillars"),
    ("tianmen_1",    "Tianmen Mountain Zhangjiajie"),
    ("tianmen_2",    "Tianmen Shan road 99 turns"),
    ("zhaoxing_1",   "Zhaoxing Dong Village"),
    ("dong_1",       "Dong drum tower Guizhou"),
    ("basha_1",      "Basha Miao village"),
    ("jiabang_1",    "Jiabang rice terraces"),
    ("dehang_1",     "Dehang Miao"),
    ("furong_1",     "Furong Town Hunan waterfall"),
    ("fenghuang_1",  "Fenghuang County ancient town"),
    ("chengdu_1",    "Chengdu Research Base of Giant Panda Breeding"),
    ("chengdu_2",    "Jinli Chengdu"),
    ("shanghai_1",   "Shanghai Pudong skyline"),
    ("crh_1",        "China Railway High-speed CRH380"),
]

def search(term, n=6):
    p = {"action":"query","format":"json","generator":"search","gsrsearch":term,
         "gsrnamespace":"6","gsrlimit":str(n),"prop":"imageinfo",
         "iiprop":"url|size|extmetadata","iiurlwidth":"1400"}
    r = requests.get(API, params=p, headers=UA, timeout=30)
    r.raise_for_status()
    pages = (r.json().get("query") or {}).get("pages") or {}
    out=[]
    for _,pg in pages.items():
        ii = (pg.get("imageinfo") or [{}])[0]
        u = ii.get("thumburl") or ii.get("url")
        t = pg.get("title","")
        if not u: continue
        if not re.search(r"\.(jpg|jpeg|png)$", t, re.I): continue
        if ii.get("width",0) < 700: continue
        out.append((t, u, ii.get("width",0)*ii.get("height",0)))
    out.sort(key=lambda x:-x[2])
    return out

def grab(url):
    r = requests.get(url, headers=UA, timeout=60)
    r.raise_for_status()
    im = Image.open(io.BytesIO(r.content))
    im = im.convert("RGB")
    # cover-crop a W x H
    sw, sh = im.size
    s = max(W/sw, H/sh)
    nw, nh = int(sw*s+0.5), int(sh*s+0.5)
    im = im.resize((nw, nh), Image.LANCZOS)
    l, t = (nw-W)//2, (nh-H)//2
    im = im.crop((l, t, l+W, t+H))
    b = io.BytesIO()
    im.save(b, "JPEG", quality=Q, optimize=True, progressive=True)
    return b.getvalue()

res, fails = {}, []
for key, term in QUERIES:
    ok = False
    try:
        cands = search(term)
    except Exception as e:
        cands = []
    for title, url, _ in cands[:4]:
        try:
            data = grab(url)
            res[key] = {"b64": base64.b64encode(data).decode(),
                        "src": title.replace("File:",""), "kb": len(data)//1024}
            print(f"OK   {key:14s} {len(data)//1024:4d} KB  {title[:60]}")
            ok = True
            break
        except Exception as e:
            continue
    if not ok:
        fails.append((key, term)); print(f"FAIL {key:14s} {term}")
    time.sleep(0.2)

with open(os.path.join(OUT,"imgs.json"),"w") as f:
    json.dump(res, f)
total = sum(len(v["b64"]) for v in res.values())
print(f"\n{len(res)} imagenes · base64 total {total/1024/1024:.2f} MB")
if fails: print("FALLOS:", fails)
