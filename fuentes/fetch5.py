#!/usr/bin/env python3
# Imagenes para las rutas clasicas 5 y 6.
import io, json, os, re, time, base64
import requests
from PIL import Image, ImageDraw

UA={"User-Agent":"AlvaroTripPlanner/1.0 (uso personal no comercial; contacto: innovacion@origen.bio)"}
API="https://commons.wikimedia.org/w/api.php"
OUT=os.path.dirname(os.path.abspath(__file__)); W,H,Q=800,520,74

Q5=[("gugong_1",  ["Forbidden City Beijing aerial","Forbidden City Hall of Supreme Harmony"]),
    ("gugong_2",  ["Forbidden City courtyard","Palace Museum Beijing roof"]),
    ("mutianyu_1",["Mutianyu Great Wall","Great Wall Mutianyu autumn"]),
    ("yiheyuan_1",["Summer Palace Beijing","Kunming Lake Summer Palace"]),
    ("bund_1",    ["The Bund Shanghai","Waitan Shanghai night"]),
    ("suzhou_1",  ["Humble Administrator's Garden","Classical Gardens of Suzhou"]),
    ("lijiang_1", ["Li River Guilin","Lijiang River karst"]),
    ("yangshuo_1",["Yangshuo karst landscape","Yangshuo Guangxi"]),
    ("longji_1",  ["Longji Rice Terraces","Longsheng rice terraces"]),
    ("hangzhou_1",["West Lake Hangzhou","Xihu Hangzhou"])]

def api(p):
    for i in range(4):
        try:
            r=requests.get(API,params=p,headers=UA,timeout=45)
            if r.status_code==200: return r.json()
        except Exception: pass
        time.sleep(2+i*2)
    return {}
def srch(t,n=8):
    d=api({"action":"query","format":"json","generator":"search","gsrsearch":t,
      "gsrnamespace":"6","gsrlimit":str(n),"prop":"imageinfo","iiprop":"url|size","iiurlwidth":"1400"})
    pg=(d.get("query") or {}).get("pages") or {}; o=[]
    for _,p in pg.items():
        ii=(p.get("imageinfo") or [{}])[0]; u=ii.get("thumburl"); t2=p.get("title","")
        if not u or not re.search(r"\.(jpg|jpeg|png)$",t2,re.I): continue
        w,h=ii.get("width",0),ii.get("height",0)
        if w<900 or h<600 or w/max(h,1)>3.2: continue
        o.append((t2,u,w*h))
    o.sort(key=lambda x:-x[2]); return o
def grab(u):
    r=requests.get(u,headers=UA,timeout=60); r.raise_for_status()
    im=Image.open(io.BytesIO(r.content)).convert("RGB")
    sw,sh=im.size; s=max(W/sw,H/sh); nw,nh=int(sw*s+.5),int(sh*s+.5)
    im=im.resize((nw,nh),Image.LANCZOS); l,t=(nw-W)//2,(nh-H)//2
    im=im.crop((l,t,l+W,t+H)); b=io.BytesIO()
    im.save(b,"JPEG",quality=Q,optimize=True,progressive=True); return b.getvalue()

path=os.path.join(OUT,"imgs.json"); res=json.load(open(path))
seen=set(v["src"] for v in res.values()); new=[]
for key,terms in Q5:
    if key in res: continue
    got=False
    for t in terms:
        for title,url,_ in srch(t)[:5]:
            nm=title.replace("File:","")
            if nm in seen: continue
            try:
                d=grab(url); res[key]={"b64":base64.b64encode(d).decode(),"src":nm,"kb":len(d)//1024}
                seen.add(nm); new.append(key); print(f"OK   {key:12s} {len(d)//1024:4d} KB  {nm[:55]}"); got=True; break
            except Exception: time.sleep(1)
        if got: break
        time.sleep(.6)
    if not got: print(f"FAIL {key}")
json.dump(res,open(path,"w"))

cols=5; tw,th=300,195; pad=22
rows=(len(new)+cols-1)//cols or 1
s=Image.new("RGB",(cols*tw,rows*(th+pad)),"white"); d=ImageDraw.Draw(s)
for i,k in enumerate(new):
    im=Image.open(io.BytesIO(base64.b64decode(res[k]["b64"]))).resize((tw,th),Image.LANCZOS)
    x,y=(i%cols)*tw,(i//cols)*(th+pad); s.paste(im,(x,y)); d.text((x+4,y+th+5),k,fill="black")
s.save(os.path.join(OUT,"contactos5.png"))
print("TOTAL",len(res),"·",round(sum(len(v['b64']) for v in res.values())/1024/1024,2),"MB")
