#!/usr/bin/env python3
import io, json, os, re, time, base64
import requests
from PIL import Image, ImageDraw

UA = {"User-Agent": "AlvaroTripPlanner/1.0 (uso personal no comercial; contacto: innovacion@origen.bio)"}
API = "https://commons.wikimedia.org/w/api.php"
OUT = os.path.dirname(os.path.abspath(__file__))
W,H,Q = 800,520,74

FIX = {
 "dehang_1":  (["Category:Dehang Miao Village","Category:Miao people in Hunan",
                "Category:Xiangxi Tujia and Miao Autonomous Prefecture"],
               ["Dehang village Hunan karst","Miao women Hunan"]),
 "hanwall_1": (["Category:Yumen Pass","Category:Great Wall in Gansu"],
               ["Yumenguan Small Fangpan Castle","Great Wall ruins Gansu desert"]),
 "chengdu_1": (["Category:Chengdu Research Base of Giant Panda Breeding"],
               ["Giant panda Chengdu base","Panda climbing tree Chengdu"]),
 "xianfood_1":(["Category:Muslim Quarter, Xi'an","Category:Beiyuanmen","Category:Street food in China"],
               ["Xian Muslim quarter street food night","Roujiamo Xian"]),
}

def api(p):
    for i in range(4):
        try:
            r=requests.get(API,params=p,headers=UA,timeout=45)
            if r.status_code==200: return r.json()
        except Exception: pass
        time.sleep(2+i*2)
    return {}

def _pick(d, minw=900):
    pages=(d.get("query") or {}).get("pages") or {}
    out=[]
    for _,pg in pages.items():
        ii=(pg.get("imageinfo") or [{}])[0]
        u=ii.get("thumburl") or ii.get("url"); t=pg.get("title","")
        if not u or not re.search(r"\.(jpg|jpeg|png)$",t,re.I): continue
        w,h=ii.get("width",0),ii.get("height",0)
        if w<minw or h<600 or w/max(h,1)>3.2: continue
        out.append((t,u,w*h))
    out.sort(key=lambda x:-x[2]); return out

def cat(c,n=40):
    return _pick(api({"action":"query","format":"json","generator":"categorymembers",
        "gcmtitle":c,"gcmtype":"file","gcmlimit":str(n),"prop":"imageinfo",
        "iiprop":"url|size","iiurlwidth":"1400"}))
def srch(t,n=8):
    return _pick(api({"action":"query","format":"json","generator":"search","gsrsearch":t,
        "gsrnamespace":"6","gsrlimit":str(n),"prop":"imageinfo",
        "iiprop":"url|size","iiurlwidth":"1400"}))

def grab(u):
    for i in range(3):
        try:
            r=requests.get(u,headers=UA,timeout=60)
            if r.status_code!=200: time.sleep(2); continue
            im=Image.open(io.BytesIO(r.content)).convert("RGB")
            sw,sh=im.size; s=max(W/sw,H/sh)
            nw,nh=int(sw*s+.5),int(sh*s+.5)
            im=im.resize((nw,nh),Image.LANCZOS)
            l,t=(nw-W)//2,(nh-H)//2
            im=im.crop((l,t,l+W,t+H))
            b=io.BytesIO(); im.save(b,"JPEG",quality=Q,optimize=True,progressive=True)
            return b.getvalue()
        except Exception: time.sleep(2)
    raise RuntimeError

path=os.path.join(OUT,"imgs.json"); res=json.load(open(path))
seen=set(v["src"] for v in res.values())
for key,(cats,terms) in FIX.items():
    got=False
    for src in [("CAT",c) for c in cats]+[("SRCH",t) for t in terms]:
        cands = cat(src[1]) if src[0]=="CAT" else srch(src[1])
        for title,url,_ in cands[:8]:
            nm=title.replace("File:","")
            if nm in seen: continue
            try:
                data=grab(url)
                res[key]={"b64":base64.b64encode(data).decode(),"src":nm,"kb":len(data)//1024}
                seen.add(nm); print(f"{src[0]:4s} {key:12s} {len(data)//1024:4d} KB  {nm[:56]}"); got=True; break
            except Exception: pass
        if got: break
        time.sleep(.4)
    if not got: print(f"FAIL {key}")

json.dump(res,open(path,"w"))
keys=["dehang_1","hanwall_1","chengdu_1","xianfood_1"]
cols=4; tw,th=300,195; pad=22
sheet=Image.new("RGB",(cols*tw,th+pad),"white"); d=ImageDraw.Draw(sheet)
for i,k in enumerate(keys):
    im=Image.open(io.BytesIO(base64.b64decode(res[k]["b64"]))).resize((tw,th),Image.LANCZOS)
    sheet.paste(im,(i*tw,0)); d.text((i*tw+4,th+5),k,fill="black")
sheet.save(os.path.join(OUT,"contactos2.png"))
print("total",len(res),"·",sum(len(v['b64']) for v in res.values())/1024/1024,"MB")
