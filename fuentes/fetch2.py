#!/usr/bin/env python3
# Segunda pasada: reintenta las que fallaron, con UA valido, backoff y varios terminos.
import io, json, os, re, time, base64, random
import requests
from PIL import Image

UA = {"User-Agent": "AlvaroTripPlanner/1.0 (uso personal no comercial; contacto: innovacion@origen.bio)"}
API = "https://commons.wikimedia.org/w/api.php"
OUT = os.path.dirname(os.path.abspath(__file__))
W, H, Q = 800, 520, 74

RETRY = {
 "shenzhen_3":  ["Shenzhen Ping An Finance Center", "Shenzhen night skyline", "Shenzhen Nanshan"],
 "zhangye_2":   ["Danxia landform Gansu", "Zhangye Danxia colorful", "Rainbow Mountains Zhangye"],
 "jiayuguan_1": ["Jiayuguan", "Jiayu Pass", "Jiayuguan Great Wall fortress"],
 "jiayuguan_2": ["Great Wall Jiayuguan", "Jiayuguan pass gate", "Hanging Great Wall"],
 "mogao_1":     ["Mogao Caves", "Mogao Grottoes", "Dunhuang Mogao"],
 "mingsha_1":   ["Yueyaquan", "Crescent Moon Lake Gansu", "Crescent Spring Dunhuang"],
 "mingsha_2":   ["Mingsha", "Singing Sand Dunes Dunhuang", "Dunhuang camel dunes"],
 "yumen_1":     ["Yumenguan", "Jade Gate Pass", "Yumen Pass Gansu"],
 "hanwall_1":   ["Great Wall Han dynasty Gansu", "Han Great Wall Dunhuang", "Great Wall ruins Gansu"],
 "yardang_1":   ["Yardang", "Dunhuang Yardang", "Yardang landform China"],
 "xianfood_1":  ["Muslim Quarter Xian", "Beiyuanmen Xian", "Xian street food"],
 "panda_1":     ["Ailuropoda melanoleuca", "Giant panda eating bamboo", "Panda China"],
 "panda_2":     ["Chengdu pandas", "Panda cub China", "Baby giant panda"],
 "jinshanling_2":["Jinshanling", "Jinshanling Great Wall tower", "Great Wall Jinshanling autumn"],
 "tianmen_2":   ["Tianmen Mountain road", "Tianmenshan", "Tianmen cave stairs"],
 "basha_1":     ["Basha Miao", "Miao people Guizhou", "Miao village Guizhou"],
 "jiabang_1":   ["Rice terraces Guizhou", "Congjiang", "Terraced fields Guizhou"],
 "dehang_1":    ["Dehang", "Xiangxi Miao", "Dehang canyon Hunan"],
 "fenghuang_1": ["Fenghuang Hunan", "Fenghuang ancient city", "Fenghuang County stilt houses"],
 "chengdu_1":   ["Chengdu panda base", "Chengdu Giant Panda Breeding", "Chengdu panda"],
 "chengdu_2":   ["Jinli Street", "Chengdu Kuanzhai", "Chengdu teahouse"],
 "crh_1":       ["CRH380A", "China high speed train", "China Railway High-speed"],
}

def get(url, **kw):
    for i in range(4):
        try:
            r = requests.get(url, headers=UA, timeout=60, **kw)
            if r.status_code == 200: return r
            if r.status_code in (429, 503): time.sleep(3 + i*4); continue
            r.raise_for_status()
        except Exception:
            time.sleep(2 + i*3)
    return None

def search(term, n=8):
    p = {"action":"query","format":"json","generator":"search","gsrsearch":term,
         "gsrnamespace":"6","gsrlimit":str(n),"prop":"imageinfo",
         "iiprop":"url|size","iiurlwidth":"1400"}
    r = get(API, params=p)
    if not r: return []
    pages = (r.json().get("query") or {}).get("pages") or {}
    out=[]
    for _,pg in pages.items():
        ii=(pg.get("imageinfo") or [{}])[0]
        u=ii.get("thumburl") or ii.get("url"); t=pg.get("title","")
        if not u or not re.search(r"\.(jpg|jpeg|png)$", t, re.I): continue
        if ii.get("width",0) < 700: continue
        out.append((t,u,ii.get("width",0)*ii.get("height",0)))
    out.sort(key=lambda x:-x[2])
    return out

def grab(url):
    r = get(url)
    if not r: raise RuntimeError("descarga fallida")
    im = Image.open(io.BytesIO(r.content)).convert("RGB")
    sw,sh = im.size; s = max(W/sw, H/sh)
    nw,nh = int(sw*s+.5), int(sh*s+.5)
    im = im.resize((nw,nh), Image.LANCZOS)
    l,t = (nw-W)//2, (nh-H)//2
    im = im.crop((l,t,l+W,t+H))
    b = io.BytesIO(); im.save(b,"JPEG",quality=Q,optimize=True,progressive=True)
    return b.getvalue()

path = os.path.join(OUT,"imgs.json")
res = json.load(open(path)) if os.path.exists(path) else {}
used = set(v.get("src","") for v in res.values())
still = []

for key, terms in RETRY.items():
    if key in res: continue
    done=False
    for term in terms:
        for title,url,_ in search(term)[:5]:
            if title.replace("File:","") in used: continue
            try:
                data = grab(url)
                res[key] = {"b64": base64.b64encode(data).decode(),
                            "src": title.replace("File:",""), "kb": len(data)//1024}
                used.add(title.replace("File:",""))
                print(f"OK   {key:14s} {len(data)//1024:4d} KB  {title[:58]}")
                done=True; break
            except Exception as e:
                time.sleep(1)
        if done: break
        time.sleep(1)
    if not done:
        still.append(key); print(f"FAIL {key}")
    time.sleep(0.8)

json.dump(res, open(path,"w"))
total = sum(len(v["b64"]) for v in res.values())
print(f"\nTOTAL {len(res)} imagenes · base64 {total/1024/1024:.2f} MB")
if still: print("SIGUEN FALLANDO:", still)
