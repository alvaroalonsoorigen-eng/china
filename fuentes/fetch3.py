#!/usr/bin/env python3
# Corrige imagenes erroneas usando CATEGORIAS de Commons (mas fiable que la busqueda)
# y genera una hoja de contactos para verificacion visual.
import io, json, os, re, time, base64
import requests
from PIL import Image, ImageDraw

UA = {"User-Agent": "AlvaroTripPlanner/1.0 (uso personal no comercial; contacto: innovacion@origen.bio)"}
API = "https://commons.wikimedia.org/w/api.php"
OUT = os.path.dirname(os.path.abspath(__file__))
W, H, Q = 800, 520, 74

# clave -> (lista de categorias a probar, lista de busquedas de reserva)
FIX = {
 "yardang_1":  (["Category:Dunhuang Yardang National Geopark","Category:Yardangs in China",
                 "Category:Yadan National Geopark"], ["Yadan Dunhuang", "Yardang Gansu"]),
 "hanwall_1":  (["Category:Great Wall of Han Dynasty","Category:Han dynasty Great Wall in Gansu",
                 "Category:Great Wall in Dunhuang"], ["Han Great Wall Dunhuang ruins"]),
 "dehang_1":   (["Category:Dehang","Category:Aizhai Bridge","Category:Xiangxi"],
                ["Dehang Miao village Hunan", "Xiangxi canyon Hunan"]),
 "basha_1":    (["Category:Basha Miao Village","Category:Congjiang County",
                 "Category:Miao villages in Guizhou"], ["Basha Miao Congjiang"]),
 "jiabang_1":  (["Category:Jiabang Rice Terraces","Category:Rice terraces in Guizhou",
                 "Category:Congjiang County"], ["Jiabang terraces Congjiang"]),
 "zhangye_2":  (["Category:Zhangye National Geopark","Category:Danxia landform of Zhangye"],
                ["Zhangye Danxia rainbow"]),
 "yumen_1":    (["Category:Yumen Pass","Category:Yumenguan"], ["Yumen Pass Dunhuang ruins"]),
 "jiayuguan_2":(["Category:Great Wall of Jiayuguan","Category:Jiayuguan Fortress"],
                ["Jiayuguan fortress wall desert"]),
}

def api(params):
    for i in range(4):
        try:
            r = requests.get(API, params=params, headers=UA, timeout=45)
            if r.status_code == 200: return r.json()
            time.sleep(2+i*3)
        except Exception: time.sleep(2+i*3)
    return {}

def from_category(cat, n=30):
    d = api({"action":"query","format":"json","generator":"categorymembers",
             "gcmtitle":cat,"gcmtype":"file","gcmlimit":str(n),
             "prop":"imageinfo","iiprop":"url|size","iiurlwidth":"1400"})
    return _pick(d)

def from_search(term, n=8):
    d = api({"action":"query","format":"json","generator":"search","gsrsearch":term,
             "gsrnamespace":"6","gsrlimit":str(n),"prop":"imageinfo",
             "iiprop":"url|size","iiurlwidth":"1400"})
    return _pick(d)

def _pick(d):
    pages = (d.get("query") or {}).get("pages") or {}
    out=[]
    for _,pg in pages.items():
        ii=(pg.get("imageinfo") or [{}])[0]
        u=ii.get("thumburl") or ii.get("url"); t=pg.get("title","")
        if not u or not re.search(r"\.(jpg|jpeg|png)$", t, re.I): continue
        w,h = ii.get("width",0), ii.get("height",0)
        if w<900 or h<600: continue
        if w/max(h,1) > 3.2: continue          # descarta panoramicas extremas
        out.append((t,u,w*h))
    out.sort(key=lambda x:-x[2])
    return out

def grab(url):
    for i in range(3):
        try:
            r = requests.get(url, headers=UA, timeout=60)
            if r.status_code!=200: time.sleep(2); continue
            im = Image.open(io.BytesIO(r.content)).convert("RGB")
            sw,sh=im.size; s=max(W/sw,H/sh)
            nw,nh=int(sw*s+.5),int(sh*s+.5)
            im=im.resize((nw,nh),Image.LANCZOS)
            l,t=(nw-W)//2,(nh-H)//2
            im=im.crop((l,t,l+W,t+H))
            b=io.BytesIO(); im.save(b,"JPEG",quality=Q,optimize=True,progressive=True)
            return b.getvalue()
        except Exception: time.sleep(2)
    raise RuntimeError("fallo")

path=os.path.join(OUT,"imgs.json")
res=json.load(open(path))

for key,(cats,terms) in FIX.items():
    got=False
    for cat in cats:
        for title,url,_ in from_category(cat)[:6]:
            try:
                data=grab(url)
                res[key]={"b64":base64.b64encode(data).decode(),
                          "src":title.replace("File:",""),"kb":len(data)//1024}
                print(f"CAT  {key:13s} {len(data)//1024:4d} KB  {title[:56]}")
                got=True; break
            except Exception: pass
        if got: break
        time.sleep(.5)
    if not got:
        for term in terms:
            for title,url,_ in from_search(term)[:5]:
                try:
                    data=grab(url)
                    res[key]={"b64":base64.b64encode(data).decode(),
                              "src":title.replace("File:",""),"kb":len(data)//1024}
                    print(f"SRCH {key:13s} {len(data)//1024:4d} KB  {title[:56]}")
                    got=True; break
                except Exception: pass
            if got: break
    if not got: print(f"FAIL {key}")
    time.sleep(.5)

json.dump(res, open(path,"w"))

# ---- hoja de contactos para verificacion visual ----
keys=sorted(res.keys())
cols=6; tw,th=260,170; pad=22
rows=(len(keys)+cols-1)//cols
sheet=Image.new("RGB",(cols*tw, rows*(th+pad)), "white")
d=ImageDraw.Draw(sheet)
for i,k in enumerate(keys):
    im=Image.open(io.BytesIO(base64.b64decode(res[k]["b64"]))).resize((tw,th),Image.LANCZOS)
    x,y=(i%cols)*tw,(i//cols)*(th+pad)
    sheet.paste(im,(x,y))
    d.rectangle([x,y+th,x+tw,y+th+pad],fill="white")
    d.text((x+4,y+th+5), k, fill="black")
sheet.save(os.path.join(OUT,"contactos.png"))
total=sum(len(v["b64"]) for v in res.values())
print(f"\nTOTAL {len(res)} · base64 {total/1024/1024:.2f} MB · hoja de contactos lista")
