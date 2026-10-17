"""Generate the ET Advisory logo files.

Writes the twelve SVGs to logos/ (or to the directory given as the only argument, and nothing
else), the root copy eta-mark.svg, and the mark data `G` that ETA.Logo draws from into
components/bundle.js. `--json` prints `G` instead. Every file is outlined vector paths, so
nothing depends on a font. Geometry: see S, C, G below.

Run:  python3 scripts/logo/generate.py
Then re-export logos/*.png from the SVGs at their existing pixel sizes.
"""
import math, json

def line_offset(p, q, d, inside):
    # offset line pq by d toward point 'inside'
    dx, dy = q[0]-p[0], q[1]-p[1]
    L = math.hypot(dx, dy); nx, ny = -dy/L, dx/L
    # choose normal pointing to inside
    if (inside[0]-p[0])*nx + (inside[1]-p[1])*ny < 0: nx, ny = -nx, -ny
    return (p[0]+nx*d, p[1]+ny*d), (q[0]+nx*d, q[1]+ny*d)

def intersect(a1, a2, b1, b2):
    x1,y1=a1;x2,y2=a2;x3,y3=b1;x4,y4=b2
    den=(x1-x2)*(y3-y4)-(y1-y2)*(x3-x4)
    t=((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/den
    return (x1+t*(x2-x1), y1+t*(y2-y1))

def facet(pts, offs):
    cx=sum(p[0] for p in pts)/3; cy=sum(p[1] for p in pts)/3
    lines=[line_offset(pts[i], pts[(i+1)%3], offs[i], (cx,cy)) for i in range(3)]
    out=[]
    for i in range(3):
        out.append(intersect(*lines[i-1], *lines[i]))
    return out

def fmt(v): return f"{v:.2f}".rstrip('0').rstrip('.')
def poly(pts, ox=0, oy=0, sc=1):
    return "M"+" L".join(f"{fmt(ox+x*sc)} {fmt(oy+y*sc)}" for x,y in pts)+"Z"

# ---- Mark geometry (120 x 103.92 box)
S=120; H=S*math.sqrt(3)/2
T=(60,0); Lp=(0,H); Rp=(S,H)
C=(60,58)   # apex on the centreline, above the centroid: a tetrahedron seen from the front and above
G=6.0
faces = {
  'left':   facet([T, Lp, C], [0, G/2, G/2]),
  'right':  facet([Rp, T, C], [0, G/2, G/2]),
  'bottom': facet([Lp, Rp, C], [0, G/2, G/2]),
}
MARK_W, MARK_H = S, H

def mix(hexcol, other, k):
    a=bytes.fromhex(hexcol[1:]); b=bytes.fromhex(other[1:])
    return "#"+"".join(f"{round(x+(y-x)*k):02x}" for x,y in zip(a,b))

# Each face is one cut stone: a lighter table in the middle and three bevels around it, the
# upper-left bevel lit and the other two in shade. Channels keep the three stones apart.
FACES = ('left','right','bottom')
EDGES = {'left': ((0,1),(1,2),(2,0)), 'right': ((1,2),(0,1),(2,0)), 'bottom': ((0,2),(2,1),(0,1))}
# (tone, amount mixed into the face, gradient start, gradient end) for the three bevels, then the table
SHADE = (('#ffffff',0.22,0.28,0.0), ('#000000',0.04,0.0,0.12), ('#000000',0.24,0.0,0.14), ('#ffffff',0.10,0.34,0.0))
TABLE = 0.46
SHEEN = ('#000000', 0.0, 0.18)

def r2(p): return [round(v,2) for v in p]
def mid(a, b): return ((a[0]+b[0])/2, (a[1]+b[1])/2)

def stone(k):
    pts=faces[k]
    cn=(sum(p[0] for p in pts)/3, sum(p[1] for p in pts)/3)
    tab=[(cn[0]+(p[0]-cn[0])*TABLE, cn[1]+(p[1]-cn[1])*TABLE) for p in pts]
    parts=[{'d':poly([pts[a],pts[b],tab[b],tab[a]]), 'g':r2(mid(pts[a],pts[b])+mid(tab[a],tab[b]))} for a,b in EDGES[k]]
    parts.append({'d':poly(tab), 'g':r2(tab[EDGES[k][0][0]]+tab[EDGES[k][2][0]])})
    key=lambda p:p[0]+p[1]
    return {'d':poly(pts), 'parts':parts, 'sheen':r2(min(pts,key=key)+max(pts,key=key))}

def stops(base):
    out=[]
    for tone,amt,g0,g1 in SHADE:
        c=mix(base,tone,amt); out.append([mix(c,tone,g0), mix(c,tone,g1)])
    return out

def grad(gid, g, c0, c1, o0=1, o1=1):
    op=lambda o: '' if o==1 else f' stop-opacity="{o}"'
    return (f'<linearGradient id="{gid}" gradientUnits="userSpaceOnUse" x1="{fmt(g[0])}" y1="{fmt(g[1])}" x2="{fmt(g[2])}" y2="{fmt(g[3])}">'
            f'<stop offset="0" stop-color="{c0}"{op(o0)}/><stop offset="1" stop-color="{c1}"{op(o1)}/></linearGradient>')

def mark_paths(cols, uid, ox=0, oy=0, sc=1):
    defs=out=""
    for i,(k,s) in enumerate(zip(FACES, STONES)):
        if len({cols[f] for f in FACES})==1:
            out+=f'<path d="{s["d"]}" fill="{cols[k]}"/>'; continue
        for j,(p,(c0,c1)) in enumerate(zip(s['parts'], stops(cols[k]))):
            gid=f"{uid}-{i}{j}"; defs+=grad(gid, p['g'], c0, c1)
            out+=f'<path d="{p["d"]}" fill="url(#{gid})"/>'
        gid=f"{uid}-{i}s"; defs+=grad(gid, s['sheen'], SHEEN[0], SHEEN[0], SHEEN[1], SHEEN[2])
        out+=f'<path d="{s["d"]}" fill="url(#{gid})"/>'
    tr='' if (ox,oy,sc)==(0,0,1) else f' transform="translate({fmt(ox)} {fmt(oy)}){"" if sc==1 else f" scale({sc:.6g})"}"'
    return (f"<defs>{defs}</defs>" if defs else "")+(f'<g{tr}>{out}</g>' if tr else out)

STONES=[stone(k) for k in FACES]

# ---- Heavy wordmark ETA (filled polygons; overlaps in one colour are invisible)
CAP=64; W=14.5
def E(x):
    w=42; m=w-4
    return [[(x,0),(x+w,0),(x+w,W),(x+W,W),(x+W,(CAP-W)/2),(x+m,(CAP-W)/2),(x+m,(CAP+W)/2),(x+W,(CAP+W)/2),(x+W,CAP-W),(x+w,CAP-W),(x+w,CAP),(x,CAP)]], w
def Tg(x):
    w=48
    return [[(x,0),(x+w,0),(x+w,W),(x+w/2+W/2,W),(x+w/2+W/2,CAP),(x+w/2-W/2,CAP),(x+w/2-W/2,W),(x,W)]], w
def A(x):
    w=60; cx=x+w/2; t=W*0.95  # flat apex width
    # leg angle
    ang=math.atan2(CAP, (w-t)/2)
    lw=W/math.sin(ang)           # horizontal leg width for consistent stroke
    # inner apex: inner edges parallel to outer edges
    # left inner edge passes (x+lw, CAP) with same slope as outer edge (x,CAP)->(cx-t/2,0)
    slope=(cx-t/2-x)/CAP          # dx per dy (going up)
    yi=CAP-(cx-(x+lw))/slope
    outer=[(x,CAP),(cx-t/2,0),(cx+t/2,0),(x+w,CAP),(x+w-lw,CAP),(cx,yi),(x+lw,CAP)]
    by=CAP*0.62; bh=W*0.82
    def xl(y): return x+lw+(CAP-y)*slope
    def xr(y): return x+w-lw-(CAP-y)*slope
    bar=[(xl(by)-1,by),(xr(by)+1,by),(xr(by+bh)+1,by+bh),(xl(by+bh)-1,by+bh)]
    return [outer,bar], w

def wordmark(ox, oy, col, sc=1):
    shapes=[]; x=0
    s,w=E(x); shapes+=s; x+=w+7
    s,w=Tg(x); shapes+=s; x+=w-4   # kern T/A
    s,w=A(x); shapes+=s; x+=w
    d="".join(poly(p,ox,oy,sc) for p in shapes)
    return f'<path d="{d}" fill="{col}"/>', x*sc

WM_W = wordmark(0,0,'#000')[1]

# ---- Monoline descriptor ET ADVISORY
def mono_glyphs(h):
    r=h/4
    g={}
    g['E']=(lambda x: f"M{x+h*0.62} 0H{x}V{h}H{x+h*0.62}M{x} {h/2}H{x+h*0.55}", h*0.62)
    g['T']=(lambda x: f"M{x} 0H{x+h*0.72}M{x+h*0.36} 0V{h}", h*0.72)
    g['A']=(lambda x: f"M{x} {h}L{x+h*0.42} 0L{x+h*0.84} {h}M{x+h*0.16} {h*0.62}H{x+h*0.68}", h*0.84)
    g['D']=(lambda x: f"M{x} 0V{h}H{x+h*0.28}A{h/2} {h/2} 0 0 0 {x+h*0.28} 0Z", h*0.78)
    g['V']=(lambda x: f"M{x} 0L{x+h*0.42} {h}L{x+h*0.84} 0", h*0.84)
    g['I']=(lambda x: f"M{x} 0V{h}", 0)
    sx=lambda x: (f"M{x+r+r*0.866} {r*0.5}A{r} {r} 0 1 0 {x+r} {2*r}A{r} {r} 0 1 1 {x+r-r*0.866} {3.5*r}", 2*r)
    g['S']=(lambda x: sx(x)[0], 2*r)
    g['O']=(lambda x: f"M{x+h/2} 0A{h/2} {h/2} 0 1 1 {x+h/2} {h}A{h/2} {h/2} 0 1 1 {x+h/2} 0Z", h)
    g['R']=(lambda x: f"M{x} {h}V0H{x+h*0.38}A{h/4} {h/4} 0 0 1 {x+h*0.38} {h/2}H{x}M{x+h*0.34} {h/2}L{x+h*0.66} {h}", h*0.66)
    g['Y']=(lambda x: f"M{x} 0L{x+h*0.42} {h*0.5}L{x+h*0.84} 0M{x+h*0.42} {h*0.5}V{h}", h*0.84)
    return g

def descriptor(ox, oy, col, target_w, h=11.5, sw=1.9, text="ET ADVISORY"):
    g=mono_glyphs(h)
    words=text.split(' ')
    letters=[c for c in text if c!=' ']
    base=sum(g[c][1] for c in letters)
    n_gaps=len(letters)-1
    inner_w = target_w - sw   # stroke overhang both sides
    k=1.6  # a word space is the letter track plus 1.6 tracks
    track=(inner_w-base)/(n_gaps+k*(len(words)-1))
    wordgap_extra=k*track
    x=ox+sw/2; d=""
    for i,c in enumerate(text):
        if c==' ': x+=wordgap_extra; continue
        d+=g[c][0](x); x+=g[c][1]+track
    return (f'<path d="{d}" fill="none" stroke="{col}" stroke-width="{sw}" stroke-linejoin="bevel" stroke-linecap="butt" transform="translate(0 {oy})"/>', track)

PAL = {
 'light': {'left':'#9b1738','right':'#153e8a','bottom':'#12664f','ink':'#14151a','bg':'#fbfaf9'},
 'dark':  {'left':'#f2748f','right':'#7aa2f2','bottom':'#52c4a0','ink':'#f4f4f2','bg':'#111214'},
 'mono':  {'left':'#14151a','right':'#14151a','bottom':'#14151a','ink':'#14151a','bg':'#fbfaf9'},
 'mono-paper': {'left':'#f4f4f2','right':'#f4f4f2','bottom':'#f4f4f2','ink':'#f4f4f2','bg':'#111214'},
 'gold':  {'left':'#f6d27a','right':'#eeb32b','bottom':'#a8761a','ink':'#f4f4f2','bg':'#111214'},
}

def svg(w,h,body,title):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {fmt(w)} {fmt(h)}" width="{fmt(w)}" height="{fmt(h)}" role="img" aria-label="{title}"><title>{title}</title>{body}</svg>'

def mark_svg(pal, uid):
    return svg(MARK_W, MARK_H, mark_paths(PAL[pal], uid), "ET Advisory mark")

def horizontal(pal, uid):
    p=PAL[pal]
    gap=30; ty=12
    wm,_=wordmark(MARK_W+gap, ty, p['ink'])
    ds,_=descriptor(MARK_W+gap, MARK_H-11.5, p['ink'], WM_W)
    w=MARK_W+gap+WM_W
    return svg(w, MARK_H+1, mark_paths(p, uid)+wm+ds, "ET Advisory")

def stacked(pal, uid):
    p=PAL[pal]
    w=max(MARK_W, WM_W)
    wy=MARK_H+36
    wm,_=wordmark((w-WM_W)/2, wy, p['ink'])
    dy=wy+CAP+17
    ds,_=descriptor((w-WM_W)/2, dy, p['ink'], WM_W)
    return svg(w, dy+11.5+1.5, mark_paths(p, uid, (w-MARK_W)/2)+wm+ds, "ET Advisory")

def wordmark_svg(pal, uid):
    p=PAL[pal]
    wm,_=wordmark(0,0,p['ink'])
    ds,_=descriptor(0, CAP+17, p['ink'], WM_W)
    return svg(WM_W, CAP+17+11.5+1.5, wm+ds, "ET Advisory")

def app_icon(pal, uid, size=512):
    p=PAL[pal]
    sc=size*0.56/MARK_W
    # optical centring: nudge up from the box centre
    ox=(size-MARK_W*sc)/2; oy=(size-MARK_H*sc)/2 - size*0.025
    body=f'<rect width="{size}" height="{size}" rx="{size*0.22}" fill="{p["bg"]}"/>'+mark_paths(p, uid, ox, oy, sc)
    return svg(size,size,body,"ET Advisory app icon")

SPEC = {
 'eta-mark.svg': (mark_svg,'light'),
 'eta-mark-reversed.svg': (mark_svg,'dark'),
 'eta-mark-mono-ink.svg': (mark_svg,'mono'),
 'eta-mark-mono-white.svg': (mark_svg,'mono-paper'),
 'eta-mark-ceremonial-gold.svg': (mark_svg,'gold'),
 'eta-lockup-horizontal.svg': (horizontal,'light'),
 'eta-lockup-horizontal-reversed.svg': (horizontal,'dark'),
 'eta-lockup-horizontal-mono-ink.svg': (horizontal,'mono'),
 'eta-lockup-stacked.svg': (stacked,'light'),
 'eta-lockup-stacked-reversed.svg': (stacked,'dark'),
 'eta-wordmark.svg': (wordmark_svg,'light'),
 'eta-app-icon.svg': (app_icon,'dark'),
}
# gradient ids are prefixed per file so two inlined SVGs never share them
files = {name: fn(pal, name[4:-4]) for name,(fn,pal) in SPEC.items()}

# ETA.Logo draws from this: faces and parts in mark units, gradient stops per shaded tone.
BUNDLE_G = {
 'MW': MARK_W, 'MH': round(MARK_H,2), 'WMW': round(WM_W,2), 'CAP': CAP, 'DESC_H': 11.5, 'DESC_SW': 1.9,
 'wm': wordmark(0,0,'#000')[0].split('"')[1],
 'desc': descriptor(0,0,'#000',WM_W)[0].split('"')[1],
 'faces': STONES,
 'sheen': list(SHEEN),
 'tones': {tone: [stops(PAL[pal][k]) for k in FACES] for tone,pal in (('color','light'),('reversed','dark'),('gold','gold'))},
}

if __name__=='__main__':
    import os, re, sys
    G_JSON=json.dumps(BUNDLE_G, separators=(',',':'))
    if '--json' in sys.argv:
        print(G_JSON); sys.exit()
    root=os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..'))
    out=sys.argv[1] if len(sys.argv)>1 else os.path.join(root,'logos')
    os.makedirs(out,exist_ok=True)
    for k,v in files.items():
        open(os.path.join(out,k),'w').write(v)
    print(f'Wrote {len(files)} SVG files to {out}')
    if len(sys.argv)==1:
        open(os.path.join(root,'eta-mark.svg'),'w').write(files['eta-mark.svg'])
        bundle=os.path.join(root,'components','bundle.js')
        js=open(bundle).read()
        js,n=re.subn(r'^  var G = .*;$', lambda m: f'  var G = {G_JSON};', js, count=1, flags=re.M)
        assert n==1, 'var G line not found in bundle.js'
        open(bundle,'w').write(js)
        print('Wrote eta-mark.svg and the mark geometry in components/bundle.js')
