import io,json,os,re,time,base64,requests
from PIL import Image,ImageDraw
UA={'User-Agent':'AlvaroTripPlanner/1.0 (uso personal no comercial; contacto: innovacion@origen.bio)'}
API='https://commons.wikimedia.org/w/api.php'; W,H,Q=800,520,74
JOB=[("qinghai_1",["Qinghai Lake","Qinghai Lake Kokonor"]),
     ("qinghai_2",["Qinghai Lake rapeseed","Rapeseed field Qinghai"]),
     ("chaka_1",  ["Chaka Salt Lake","Chaka Salt Lake Qinghai"]),
     ("labrang_1",["Labrang Monastery","Labrang Monastery Xiahe"]),
     ("pingyao_1",["Pingyao ancient city","Pingyao city wall"]),
     ("leshan_1", ["Leshan Giant Buddha","Leshan Buddha Sichuan"]),
     ("xining_1", ["Dongguan Mosque Xining","Xining Qinghai city"])]
def srch(t,n=8):
    r=requests.get(API,params={'action':'query','format':'json','generator':'search','gsrsearch':t,'gsrnamespace':'6','gsrlimit':str(n),'prop':'imageinfo','iiprop':'url|size','iiurlwidth':'1400'},headers=UA,timeout=45)
    pg=(r.json().get('query') or {}).get('pages') or {}; o=[]
    for _,p in pg.items():
        ii=(p.get('imageinfo') or [{}])[0]; u=ii.get('thumburl'); t2=p.get('title','')
        if not u or not re.search(r'\.(jpg|jpeg|png)$',t2,re.I): continue
        w,h=ii.get('width',0),ii.get('height',0)
        if w<900 or h<600 or w/max(h,1)>3.2: continue
        o.append((t2,u,w*h))
    o.sort(key=lambda x:-x[2]); return o
def grab(u):
    r=requests.get(u,headers=UA,timeout=60); r.raise_for_status()
    im=Image.open(io.BytesIO(r.content)).convert('RGB'); sw,sh=im.size; s=max(W/sw,H/sh)
    nw,nh=int(sw*s+.5),int(sh*s+.5); im=im.resize((nw,nh),Image.LANCZOS)
    l,t=(nw-W)//2,(nh-H)//2; im=im.crop((l,t,l+W,t+H)); b=io.BytesIO()
    im.save(b,'JPEG',quality=Q,optimize=True,progressive=True); return b.getvalue()
res=json.load(open('imgs.json')); seen=set(v['src'] for v in res.values()); new=[]
for k,terms in JOB:
    if k in res: continue
    ok=False
    for t in terms:
        for title,url,_ in srch(t)[:5]:
            nm=title.replace('File:','')
            if nm in seen: continue
            try:
                d=grab(url); res[k]={'b64':base64.b64encode(d).decode(),'src':nm,'kb':len(d)//1024}
                seen.add(nm); new.append(k); print('OK  ',k,len(d)//1024,'KB',nm[:55]); ok=True; break
            except Exception: pass
        if ok: break
        time.sleep(.5)
    if not ok: print('FAIL',k)
json.dump(res,open('imgs.json','w'))
cols=4; tw,th=320,208; pad=22; rows=(len(new)+cols-1)//cols or 1
s=Image.new('RGB',(cols*tw,rows*(th+pad)),'white'); dd=ImageDraw.Draw(s)
for i,k in enumerate(new):
    im=Image.open(io.BytesIO(base64.b64decode(res[k]['b64']))).resize((tw,th),Image.LANCZOS)
    x,y=(i%cols)*tw,(i//cols)*(th+pad); s.paste(im,(x,y)); dd.text((x+4,y+th+5),k,fill='black')
s.save('contactos7.png')
print('TOTAL',len(res),round(sum(len(v['b64']) for v in res.values())/1024/1024,2),'MB')
