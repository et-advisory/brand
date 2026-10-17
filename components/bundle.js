/* @ds-bundle: {"format":4,"namespace":"ETA","components":[{"name":"Logo"},{"name":"Button"},{"name":"Badge"},{"name":"StatusChip"},{"name":"Card"},{"name":"Gallery"},{"name":"CardFooter"},{"name":"StatTile"},{"name":"ServiceCard"},{"name":"Eyebrow"},{"name":"SectionHeading"}]} */
(function () {
  "use strict";
  var React = window.React;
  var h = React.createElement;
  var G = {"MW": 120, "MH": 103.92, "WMW": 153, "CAP": 64, "DESC_H": 11.5, "DESC_SW": 1.9, "mark": ["M57.91 3.62 L2.57 99.47 L64.83 62.19Z", "M116.72 98.24 L63.16 5.48 L69.86 62.16Z", "M4.87 103.92 L115.9 103.92 L67.32 66.52Z"], "wm": "M0 0 L42 0 L42 14.5 L14.5 14.5 L14.5 24.75 L38 24.75 L38 39.25 L14.5 39.25 L14.5 49.5 L42 49.5 L42 64 L0 64ZM49 0 L97 0 L97 14.5 L80.25 14.5 L80.25 64 L65.75 64 L65.75 14.5 L49 14.5ZM93 64 L116.11 0 L129.89 0 L153 64 L137.58 64 L123 23.62 L108.42 64ZM116.2 39.68 L129.8 39.68 L134.09 51.57 L111.91 51.57Z", "desc": "M8.08 0H0.95V11.5H8.08M0.95 5.75H7.275M14.957358490566037 0H23.237358490566038M19.097358490566037 0V11.5M41.118490566037735 11.5L45.948490566037734 0L50.77849056603773 11.5M42.95849056603774 7.13H48.938490566037736M57.65584905660377 0V11.5H60.87584905660377A5.75 5.75 0 0 0 60.87584905660377 0ZM73.50320754716981 0L78.3332075471698 11.5L83.1632075471698 0M90.04056603773584 0V11.5M102.28267452830188 1.4375A2.875 2.875 0 1 0 99.79292452830188 5.75A2.875 2.875 0 1 1 97.30317452830188 10.0625M115.29528301886792 0A5.75 5.75 0 1 1 115.29528301886792 11.5A5.75 5.75 0 1 1 115.29528301886792 0ZM127.92264150943396 11.5V0H132.29264150943396A2.875 2.875 0 0 1 132.29264150943396 5.75H127.92264150943396M131.83264150943396 5.75L135.51264150943396 11.5M142.39 0L147.22 5.75L152.04999999999998 0M147.22 5.75V11.5", "facets": [[["M57.91 3.62 L2.57 99.47 L40.62 54.74Z", "L"], ["M2.57 99.47 L64.83 62.19 L40.62 54.74Z", "D"], ["M64.83 62.19 L57.91 3.62 L40.62 54.74Z", "DD"]], [["M63.16 5.48 L69.86 62.16 L83.92 54.95Z", "L"], ["M63.16 5.48 L116.72 98.24 L83.92 54.95Z", "D"], ["M69.86 62.16 L116.72 98.24 L83.92 54.95Z", "DD"]], [["M4.87 103.92 L67.32 66.52 L62.47 92.7Z", "L"], ["M67.32 66.52 L115.9 103.92 L62.47 92.7Z", "D"], ["M4.87 103.92 L115.9 103.92 L62.47 92.7Z", "DD"]]], "sheen": [[2.57, 3.62, 64.83, 99.47], [63.16, 5.48, 116.72, 98.24], [4.87, 66.52, 115.9, 103.92]], "fgrad": [[[30.24, 51.55, 40.62, 54.74, "L"], [33.7, 80.83, 40.62, 54.74, "D"], [61.37, 32.91, 40.62, 54.74, "DD"]], [[66.51, 33.82, 83.92, 54.95, "L"], [89.94, 51.86, 83.92, 54.95, "D"], [93.29, 80.2, 83.92, 54.95, "DD"]], [[36.09, 85.22, 62.47, 92.7, "L"], [91.61, 85.22, 62.47, 92.7, "D"], [60.39, 103.92, 62.47, 92.7, "DD"]]], "gradspec": {"L": ["#fff", 0.24, 0.0], "D": ["#000", 0.0, 0.26], "DD": ["#000", 0.0, 0.2]}};

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(" ");
  }
  function omit(props, keys) {
    var o = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && keys.indexOf(k) < 0) o[k] = props[k];
    return o;
  }
  function pick(value, allowed, fallback) {
    return allowed.indexOf(value) >= 0 ? value : fallback;
  }

  /* ---------- Button ---------- */
  var BUTTON_VARIANTS = ["primary", "secondary", "outline", "ghost", "link", "inverse", "onDark"];
  function Button(props) {
    var variant = pick(props.variant, BUTTON_VARIANTS, "primary");
    var size = pick(Number(props.size), [32, 40, 48], 40);
    var rest = omit(props, ["variant", "size", "className", "children", "href", "type"]);
    var className = cx("eta-btn", "eta-btn-" + variant, variant !== "link" && "eta-btn-" + size, props.className);
    if (props.href) return h("a", Object.assign({ href: props.href, className: className }, rest), props.children);
    return h("button", Object.assign({ type: props.type || "button", className: className }, rest), props.children);
  }

  /* ---------- Badge ---------- */
  function Badge(props) {
    var tone = pick(props.tone, ["neutral", "accent", "gold"], "neutral");
    return h("span", Object.assign({ className: cx("eta-badge", "eta-badge-" + tone, props.className) }, omit(props, ["tone", "className", "children"])), props.children);
  }

  /* ---------- StatusChip ---------- */
  function StatusChip(props) {
    var tone = pick(props.tone, ["neutral", "info", "success", "pending", "danger"], "neutral");
    return h("span", Object.assign({ className: cx("eta-chip", "eta-chip-" + tone, props.className) }, omit(props, ["tone", "className", "children"])), props.children);
  }

  /* ---------- StatTile and StatRow ---------- */
  /* ---------- Card and CardFooter ---------- */
  function CardFooter(props) {
    return h("footer", Object.assign({ className: cx("eta-card-footer", props.className) }, omit(props, ["className", "children"])), props.children);
  }
  function Card(props) {
    return h("div", Object.assign({ className: cx("eta-card", props.className) }, omit(props, ["icon", "title", "footer", "className", "children"])),
      props.icon == null ? null : h("div", { className: "eta-card-icon", "aria-hidden": true }, props.icon),
      props.title == null ? null : h("h3", { className: "eta-card-title" }, props.title),
      h("div", { className: "eta-card-content" }, props.children),
      props.footer == null ? null : h(CardFooter, null, props.footer));
  }

  /* ---------- Gallery ---------- */
  function Gallery(props) {
    return h(props.ordered ? "ol" : "ul", { className: cx("eta-gallery", "eta-gallery-" + (props.columns || 3), props.className) },
      React.Children.map(props.children, function (c) { return c == null ? null : h("li", { className: "eta-gallery-item" }, c); }));
  }

  function StatTile(props) {
    return h(Card, Object.assign({ className: cx("eta-stat", props.className), footer: "Source: " + (props.source || "[add before use]") }, omit(props, ["value", "label", "source", "className"])),
      h("span", { className: "eta-stat-value" }, props.value == null ? "[00]" : props.value),
      h("span", { className: "eta-stat-label" }, props.label));
  }
  function StatRow(props) {
    var n = React.Children.count(props.children);
    return h("div", { className: cx("eta-row", props.className), style: { "--eta-cols": Math.min(Math.max(n, 2), 4) } }, props.children);
  }

  /* ---------- ServiceCard and ServiceRow ---------- */
  var SERVICES = [
    { number: "01", title: "Entity architecture", description: "The legal structure that holds the asset and the raise." },
    { number: "02", title: "Capital formation", description: "Token economics and governance design that investors can underwrite." },
    { number: "03", title: "Go-to-market activation", description: "Stakeholder relations and market positioning that carry the raise to close." }
  ];
  function ServiceCard(props) {
    var Tag = "h" + pick(Number(props.level), [2, 3, 4], 3);
    return h("div", Object.assign({ className: cx("eta-svc", props.className) }, omit(props, ["number", "title", "level", "className", "children"])),
      h("span", { className: "eta-svc-no" }, props.number),
      h(Tag, { className: "eta-svc-title" }, props.title),
      h("p", { className: "eta-svc-body" }, props.children));
  }
  function ServiceRow(props) {
    var items = (props.items && props.items.length === 3) ? props.items : SERVICES;
    return h("div", { className: cx("eta-row", props.className), style: { "--eta-cols": 3 } },
      items.map(function (s, i) {
        return h(ServiceCard, { key: i, number: "0" + (i + 1), title: s.title, level: props.level }, s.description);
      }));
  }

  /* ---------- Eyebrow and SectionHeading ---------- */
  function Eyebrow(props) {
    var size = pick(props.size, ["default", "slide"], "default");
    return h(props.as || "p", Object.assign({ className: cx("eta-eyebrow", size === "slide" && "eta-eyebrow-slide", props.className) }, omit(props, ["as", "size", "className", "children"])), props.children);
  }
  function SectionHeading(props) {
    var Tag = "h" + pick(Number(props.level), [1, 2, 3], 2);
    return h("div", Object.assign({ className: cx("eta-sh", props.align === "center" && "eta-sh-center", props.className) }, omit(props, ["eyebrow", "title", "lead", "level", "align", "className"])),
      props.eyebrow ? h(Eyebrow, null, props.eyebrow) : null,
      h(Tag, { className: "eta-sh-title" }, props.title),
      props.lead ? h("p", { className: "eta-sh-lead" }, props.lead) : null);
  }

  /* ---------- Logo ---------- */
  var TONES = {
    color:        { f: ["--mark-facet-light", "--mark-facet-mid", "--mark-facet-deep"], t: "--ink", crystal: true },
    reversed:     { f: ["--mark-reversed-light", "--mark-reversed-mid", "--mark-reversed-deep"], t: "--on-band-dark", crystal: true },
    mono:         { f: ["--ink", "--ink", "--ink"], t: "--ink" },
    monoReversed: { f: ["--on-band-dark", "--on-band-dark", "--on-band-dark"], t: "--on-band-dark" },
    onAccent:     { f: ["--on-accent", "--on-accent", "--on-accent"], t: "--on-accent" },
    gold:         { f: ["--gold-light", "--gold", "--gold-deep"], t: "--on-band-dark", crystal: true }
  };
  function v(name) { return "var(" + name + ")"; }
  /* Facet shades: the face token shifted in oklch (lighter and more vivid, or darker), the way a cut stone catches light from the upper left. */
  var ADJ = {"L": [0.04, 1.1], "D": [-0.12, 1.05], "DD": [-0.2, 1.0]};
  function shadeFill(tok, kind) {
    var a = ADJ[kind];
    return "oklch(from var(" + tok + ") calc(l + " + a[0] + ") calc(c * " + a[1] + ") h)";
  }
  function markPaths(tone, dx, dy, uid) {
    var tr = (dx || dy) ? "translate(" + dx + " " + dy + ")" : undefined;
    if (!tone.crystal) {
      return G.mark.map(function (d, i) {
        return h("path", { key: "m" + i, d: d, transform: tr, style: { fill: v(tone.f[i]) } });
      });
    }
    var defs = h("defs", { key: "defs" }, G.sheen.map(function (s, i) {
      return h("linearGradient", { key: "g" + i, id: uid + i, gradientUnits: "userSpaceOnUse", x1: s[0], y1: s[1], x2: s[2], y2: s[3] },
        h("stop", { offset: 0, stopColor: "#fff", stopOpacity: 0.16 }),
        h("stop", { offset: 0.5, stopColor: "#fff", stopOpacity: 0 }),
        h("stop", { offset: 1, stopColor: "#000", stopOpacity: 0.22 }));
    }).concat(G.fgrad.reduce(function (acc, row, i) {
      return acc.concat(row.map(function (g, j) {
        var sp = G.gradspec[g[4]];
        return h("linearGradient", { key: "fg" + i + j, id: uid + "f" + i + j, gradientUnits: "userSpaceOnUse", x1: g[0], y1: g[1], x2: g[2], y2: g[3] },
          h("stop", { offset: 0, stopColor: sp[0], stopOpacity: sp[1] }),
          h("stop", { offset: 1, stopColor: sp[0], stopOpacity: sp[2] }));
      }));
    }, [])));
    var faces = G.mark.map(function (d, i) {
      var kids = [h("path", { key: "b", d: d, style: { fill: v(tone.f[i]) } })];
      G.facets[i].forEach(function (ft, j) {
        kids.push(h("path", { key: "f" + j, d: ft[0], fill: v(tone.f[i]), style: { fill: shadeFill(tone.f[i], ft[1]) } }));
        kids.push(h("path", { key: "fg" + j, d: ft[0], fill: "url(#" + uid + "f" + i + j + ")" }));
      });
      kids.push(h("path", { key: "s", d: d, fill: "url(#" + uid + i + ")" }));
      return h("g", { key: "face" + i, transform: tr }, kids);
    });
    return [defs].concat(faces);
  }
  function textPaths(tone, dx, dy) {
    return [
      h("path", { key: "w", d: G.wm, transform: "translate(" + dx + " " + dy + ")", style: { fill: v(tone.t) } }),
      h("path", { key: "d", d: G.desc, transform: "translate(" + dx + " " + (dy + G.CAP + 17) + ")", style: { fill: "none", stroke: v(tone.t), strokeWidth: G.DESC_SW, strokeLinejoin: "bevel" } })
    ];
  }
  function Logo(props) {
    var variant = pick(props.variant, ["horizontal", "stacked", "mark", "wordmark"], "horizontal");
    var toneName = pick(props.tone, Object.keys(TONES), "color");
    var tone = TONES[toneName];
    var uid = "eta" + (React.useId ? React.useId().replace(/[^a-zA-Z0-9]/g, "") : "0");
    var gap = 30, W, H, kids;
    if (variant === "mark") { W = G.MW; H = G.MH; kids = markPaths(tone, 0, 0, uid); }
    else if (variant === "wordmark") { W = G.WMW; H = G.CAP + 17 + G.DESC_H + 1.5; kids = textPaths(tone, 0, 0); }
    else if (variant === "stacked") {
      var wy = G.MH + 36; W = G.WMW; H = wy + G.CAP + 17 + G.DESC_H + 1.5;
      kids = markPaths(tone, (G.WMW - G.MW) / 2, 0, uid).concat(textPaths(tone, 0, wy));
    } else {
      W = G.MW + gap + G.WMW; H = G.MH + 1;
      kids = markPaths(tone, 0, 0, uid).concat([
        h("path", { key: "w", d: G.wm, transform: "translate(" + (G.MW + gap) + " 12)", style: { fill: v(tone.t) } }),
        h("path", { key: "d", d: G.desc, transform: "translate(" + (G.MW + gap) + " " + (G.MH - G.DESC_H) + ")", style: { fill: "none", stroke: v(tone.t), strokeWidth: G.DESC_SW, strokeLinejoin: "bevel" } })
      ]);
    }
    var style = Object.assign({ display: "block", width: props.width || (variant === "mark" ? 48 : 200), height: "auto", maxWidth: "100%" }, props.style);
    var label = props.title || "ET Advisory";
    return h("svg", Object.assign({ viewBox: "0 0 " + W.toFixed(2) + " " + H.toFixed(2), role: "img", "aria-label": label, className: cx("eta-logo", props.className), style: style },
      omit(props, ["variant", "tone", "width", "title", "className", "style"])),
      h("title", null, label), kids);
  }

  var api = { Button: Button, Badge: Badge, StatusChip: StatusChip, Card: Card, CardFooter: CardFooter, Gallery: Gallery, StatTile: StatTile, StatRow: StatRow, ServiceCard: ServiceCard, ServiceRow: ServiceRow, Eyebrow: Eyebrow, SectionHeading: SectionHeading, Logo: Logo, SERVICES: SERVICES };
  window.ETA = Object.assign(window.ETA || {}, api);
})();
