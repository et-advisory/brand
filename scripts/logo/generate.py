"""Generate the ET Advisory logo files (SVG) into ../../logos.

Every file is outlined vector paths, so nothing depends on a font.
Geometry: an equilateral triangle (side 120) split into three faces that meet at an
off-centre apex C, the faces separated by a 5-unit channel; the ETA wordmark is drawn
as polygons at a 64-unit cap height; the ET ADVISORY descriptor is monoline strokes
tracked to the wordmark's width.

Run:  python3 scripts/logo/generate.py
The 512px PNG app icon is a raster of eta-app-icon.svg; re-export it with any SVG
renderer (for example: npx playwright screenshot, Inkscape, or rsvg-convert -w 512).
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
    a=[int(hexcol[i:i+2],16) for i in (1,3,5)]; b=[int(other[i:i+2],16) for i in (1,3,5)]
    return "#"+"".join(f"{round(x+(y-x)*k):02x}" for x,y in zip(a,b))

# Each face is one cut stone: a lighter table in the middle and three bevels around it, the
# bevel on the upper-left edge lit, the opposite one deep. Channels keep the three stones apart.
EDGES = {'left': ((0,1),(1,2),(2,0)), 'right': ((1,2),(0,1),(2,0)), 'bottom': ((0,2),(2,1),(0,1))}
BEVEL = ((('#ffffff',0.22),('#ffffff',0.28,0.0)), (('#000000',0.04),('#000000',0.0,0.12)), (('#000000',0.24),('#000000',0.0,0.14)))
TABLE = 0.46

def mark_paths(ox, oy, sc, cols, shaded=True, uid="m"):
    out=""; defs=""
    T=lambda p:(ox+p[0]*sc, oy+p[1]*sc)
    def grad(gid, a, b, col, o0, o1):
        (x1,y1),(x2,y2)=T(a),T(b)
        return f'<linearGradient id="{gid}" gradientUnits="userSpaceOnUse" x1="{fmt(x1)}" y1="{fmt(y1)}" x2="{fmt(x2)}" y2="{fmt(y2)}"><stop offset="0" stop-color="{col}" stop-opacity="{o0}"/><stop offset="1" stop-color="{col}" stop-opacity="{o1}"/></linearGradient>'
    for fi,k in enumerate(('left','right','bottom')):
        pts=faces[k]; base=cols[k]
        if not shaded:
            out+=f'<path d="{poly(pts,ox,oy,sc)}" fill="{base}"/>'; continue
        cn=(sum(p[0] for p in pts)/3, sum(p[1] for p in pts)/3)
        tab=[(cn[0]+(p[0]-cn[0])*TABLE, cn[1]+(p[1]-cn[1])*TABLE) for p in pts]
        for j,(a,b) in enumerate(EDGES[k]):
            (tone,amt),(gcol,g0,g1)=BEVEL[j]
            quad=[pts[a],pts[b],tab[b],tab[a]]
            mid=((pts[a][0]+pts[b][0])/2,(pts[a][1]+pts[b][1])/2); tmid=((tab[a][0]+tab[b][0])/2,(tab[a][1]+tab[b][1])/2)
            gid=f"{uid}{fi}b{j}"; defs+=grad(gid, mid, tmid, gcol, g0, g1)
            out+=f'<path d="{poly(quad,ox,oy,sc)}" fill="{mix(base,tone,amt)}"/><path d="{poly(quad,ox,oy,sc)}" fill="url(#{gid})"/>'
        lit=tab[EDGES[k][0][0]]; far=tab[EDGES[k][2][0]]
        gid=f"{uid}{fi}t"; defs+=grad(gid, lit, far, '#ffffff', 0.34, 0.0)
        out+=f'<path d="{poly(tab,ox,oy,sc)}" fill="{mix(base,"#ffffff",0.10)}"/><path d="{poly(tab,ox,oy,sc)}" fill="url(#{gid})"/>'
        gid=f"{uid}{fi}s"; defs+=grad(gid, min(pts, key=lambda p:p[0]+p[1]), max(pts, key=lambda p:p[0]+p[1]), '#000000', 0.0, 0.18)
        out+=f'<path d="{poly(pts,ox,oy,sc)}" fill="url(#{gid})"/>'
    return (f"<defs>{defs}</defs>" if defs else "")+out

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
 'gold':  {'left':'#f6d27a','right':'#eeb32b','bottom':'#a8761a','ink':'#f4f4f2','bg':'#14151a'},
}

def svg(w,h,body,title):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {fmt(w)} {fmt(h)}" width="{fmt(w)}" height="{fmt(h)}" role="img" aria-label="{title}"><title>{title}</title>{body}</svg>'

FLAT={'mono','mono-paper'}
def mark_svg(pal, pad=0):
    p=PAL[pal]
    return svg(MARK_W+2*pad, MARK_H+2*pad, mark_paths(pad,pad,1,p,pal not in FLAT), "ET Advisory mark")

def horizontal(pal):
    p=PAL[pal]
    gap=30; ty=12
    wm,_=wordmark(MARK_W+gap, ty, p['ink'])
    ds,_=descriptor(MARK_W+gap, MARK_H-11.5, p['ink'], WM_W)
    w=MARK_W+gap+WM_W
    return svg(w, MARK_H+1, mark_paths(0,0,1,p,pal not in FLAT)+wm+ds, "ET Advisory")

def stacked(pal):
    p=PAL[pal]
    tw=max(MARK_W, WM_W); w=tw
    mx=(w-MARK_W)/2
    wy=MARK_H+36
    wm,_=wordmark((w-WM_W)/2, wy, p['ink'])
    dy=wy+CAP+17
    ds,_=descriptor((w-WM_W)/2, dy, p['ink'], WM_W)
    h=dy+11.5+1.5
    return svg(w, h, mark_paths(mx,0,1,p,pal not in FLAT)+wm+ds, "ET Advisory")

def wordmark_svg(pal):
    p=PAL[pal]
    wm,_=wordmark(0,0,p['ink'])
    ds,_=descriptor(0, CAP+17, p['ink'], WM_W)
    return svg(WM_W, CAP+17+11.5+1.5, wm+ds, "ET Advisory")

def app_icon(size=512, pal='dark', bg='#111214'):
    p=PAL[pal]
    sc=size*0.56/MARK_W
    mw, mh = MARK_W*sc, MARK_H*sc
    # optical centring: triangle centroid sits at 2/3 height; nudge up slightly from box centre
    ox=(size-mw)/2; oy=(size-mh)/2 - size*0.025
    body=f'<rect width="{size}" height="{size}" rx="{size*0.22}" fill="{bg}"/>'+mark_paths(ox,oy,sc,p,True)
    return svg(size,size,body,"ET Advisory app icon")

files = {
 'eta-mark.svg': mark_svg('light'),
 'eta-mark-reversed.svg': mark_svg('dark'),
 'eta-mark-mono-ink.svg': mark_svg('mono'),
 'eta-mark-mono-white.svg': mark_svg('mono-paper'),
 'eta-mark-ceremonial-gold.svg': mark_svg('gold'),
 'eta-lockup-horizontal.svg': horizontal('light'),
 'eta-lockup-horizontal-reversed.svg': horizontal('dark'),
 'eta-lockup-horizontal-mono-ink.svg': horizontal('mono'),
 'eta-lockup-stacked.svg': stacked('light'),
 'eta-lockup-stacked-reversed.svg': stacked('dark'),
 'eta-wordmark.svg': wordmark_svg('light'),
 'eta-app-icon.svg': app_icon(),
}
import os
OUT=os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..','logos'))
if __name__=='__main__':
    os.makedirs(OUT,exist_ok=True)
    for k,v in files.items():
        open(os.path.join(OUT,k),'w').write(v)
    print(f'Wrote {len(files)} SVG files to {OUT}')
