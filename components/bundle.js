/* @ds-bundle: {"format":4,"namespace":"ETA","components":[{"name":"Logo"},{"name":"Button"},{"name":"Badge"},{"name":"StatusChip"},{"name":"Card"},{"name":"Gallery"},{"name":"CardFooter"},{"name":"StatTile"},{"name":"StatRow"},{"name":"ServiceCard"},{"name":"ServiceRow"},{"name":"Eyebrow"},{"name":"SectionHeading"}]} */
(function () {
  "use strict";
  var React = window.React;
  var h = React.createElement;
  var G = {"MW":120,"MH":103.92,"WMW":153,"CAP":64,"DESC_H":11.5,"DESC_SW":1.9,"wm":"M0 0 L42 0 L42 14.5 L14.5 14.5 L14.5 24.75 L38 24.75 L38 39.25 L14.5 39.25 L14.5 49.5 L42 49.5 L42 64 L0 64ZM49 0 L97 0 L97 14.5 L80.25 14.5 L80.25 64 L65.75 64 L65.75 14.5 L49 14.5ZM93 64 L116.11 0 L129.89 0 L153 64 L137.58 64 L123 23.62 L108.42 64ZM116.2 39.68 L129.8 39.68 L134.09 51.57 L111.91 51.57Z","desc":"M8.08 0H0.95V11.5H8.08M0.95 5.75H7.275M14.957358490566037 0H23.237358490566038M19.097358490566037 0V11.5M41.118490566037735 11.5L45.948490566037734 0L50.77849056603773 11.5M42.95849056603774 7.13H48.938490566037736M57.65584905660377 0V11.5H60.87584905660377A5.75 5.75 0 0 0 60.87584905660377 0ZM73.50320754716981 0L78.3332075471698 11.5L83.1632075471698 0M90.04056603773584 0V11.5M102.28267452830188 1.4375A2.875 2.875 0 1 0 99.79292452830188 5.75A2.875 2.875 0 1 1 97.30317452830188 10.0625M115.29528301886792 0A5.75 5.75 0 1 1 115.29528301886792 11.5A5.75 5.75 0 1 1 115.29528301886792 0ZM127.92264150943396 11.5V0H132.29264150943396A2.875 2.875 0 0 1 132.29264150943396 5.75H127.92264150943396M131.83264150943396 5.75L135.51264150943396 11.5M142.39 0L147.22 5.75L152.04999999999998 0M147.22 5.75V11.5","faces":[{"d":"M57 5.2 L3.91 97.15 L57 56.52Z","parts":[{"d":"M57 5.2 L3.91 97.15 L23.02 73.29 L47.44 30.99Z","g":[30.45,51.18,35.23,52.14]},{"d":"M3.91 97.15 L57 56.52 L47.44 54.59 L23.02 73.29Z","g":[30.45,76.84,35.23,63.94]},{"d":"M57 56.52 L57 5.2 L47.44 30.99 L47.44 54.59Z","g":[57.0,30.86,47.44,42.79]},{"d":"M47.44 30.99 L23.02 73.29 L47.44 54.59Z","g":[47.44,30.99,47.44,54.59]}],"sheen":[57.0,5.2,57.0,56.52]},{"d":"M116.09 97.15 L63 5.2 L63 56.52Z","parts":[{"d":"M63 5.2 L63 56.52 L72.56 54.59 L72.56 30.99Z","g":[63.0,30.86,72.56,42.79]},{"d":"M116.09 97.15 L63 5.2 L72.56 30.99 L96.98 73.29Z","g":[89.55,51.18,84.77,52.14]},{"d":"M63 56.52 L116.09 97.15 L96.98 73.29 L72.56 54.59Z","g":[89.55,76.84,84.77,63.94]},{"d":"M96.98 73.29 L72.56 30.99 L72.56 54.59Z","g":[72.56,30.99,72.56,54.59]}],"sheen":[63.0,5.2,116.09,97.15]},{"d":"M4.94 103.92 L115.06 103.92 L60 61.78Z","parts":[{"d":"M4.94 103.92 L60 61.78 L60 76.95 L34.67 96.34Z","g":[32.47,82.85,47.34,86.64]},{"d":"M60 61.78 L115.06 103.92 L85.33 96.34 L60 76.95Z","g":[87.53,82.85,72.66,86.64]},{"d":"M4.94 103.92 L115.06 103.92 L85.33 96.34 L34.67 96.34Z","g":[60.0,103.92,60.0,96.34]},{"d":"M34.67 96.34 L85.33 96.34 L60 76.95Z","g":[34.67,96.34,34.67,96.34]}],"sheen":[4.94,103.92,115.06,103.92]}],"sheen":["#000000",0.0,0.18],"tones":{"color":[[["#c77d8f","#b14a64"],["#951636","#831330"],["#76112b","#650f25"],["#c47589","#a52e4c"]],[["#7b92bd","#4868a4"],["#143c84","#123574"],["#102f69","#0e285a"],["#748cba","#2c5196"]],[["#7aa99c","#468876"],["#11624c","#0f5643"],["#0e4e3c","#0c4334"],["#72a497","#2a7561"]]],"reversed":[[["#f8b1c0","#f593a8"],["#e86f89","#cc6279"],["#b8586d","#9e4c5e"],["#f7acbc","#f3829a"]],[["#b4caf8","#97b6f5"],["#759ce8","#6789cc"],["#5d7bb8","#506a9e"],["#b0c8f7","#87abf3"]],[["#9edeca","#78d1b5"],["#4fbc9a","#46a588"],["#3e957a","#358069"],["#98dcc7","#63caaa"]]],"gold":[[["#fae6b4","#f8dc97"],["#ecca75","#d0b267"],["#bba05d","#a18a50"],["#fae4b0","#f7d687"]],[["#f6d588","#f2c45a"],["#e4ac29","#c99724"],["#b58821","#9c751c"],["#f5d281","#f0bb40"]],[["#ceb27e","#bb944c"],["#a17119","#8e6316"],["#805a14","#6e4d11"],["#ccae77","#b18431"]]]}};

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

  /* ---------- Card and CardFooter ---------- */
  function CardFooter(props) {
    return h("div", Object.assign({ className: cx("eta-card-footer", props.className) }, omit(props, ["className", "children"])), props.children);
  }
  function Card(props) {
    var Tag = "h" + pick(Number(props.level), [2, 3, 4], 3);
    return h("div", Object.assign({ className: cx("eta-card", props.className) }, omit(props, ["icon", "title", "footer", "level", "className", "children"])),
      props.icon == null ? null : h("div", { className: "eta-card-icon", "aria-hidden": true }, props.icon),
      props.title == null ? null : h(Tag, { className: "eta-card-title" }, props.title),
      h("div", { className: "eta-card-content" }, props.children),
      props.footer == null ? null : h(CardFooter, null, props.footer));
  }

  /* ---------- Gallery ---------- */
  function Gallery(props) {
    var columns = pick(Number(props.columns), [2, 3, 4], 3);
    return h(props.ordered ? "ol" : "ul", Object.assign({ className: cx("eta-gallery", "eta-gallery-" + columns, props.className) }, omit(props, ["columns", "ordered", "className", "children"])),
      React.Children.map(props.children, function (c) { return c == null ? null : h("li", { className: "eta-gallery-item" }, c); }));
  }

  /* ---------- StatTile and StatRow ---------- */
  function StatTile(props) {
    return h(Card, Object.assign(omit(props, ["value", "label", "source", "footer", "title", "icon"]), { footer: "Source: " + (props.source || "[add before use]") }),
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
    return h("div", Object.assign({ className: cx("eta-card", "eta-svc", props.className) }, omit(props, ["number", "title", "level", "className", "children"])),
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
  /* Shaded tones take their gradient stops from G.tones (written by scripts/logo/generate.py); flat tones fill from a token. */
  var TONES = {
    color:        { t: "--ink" },
    reversed:     { t: "--on-band-dark" },
    mono:         { f: "--ink", t: "--ink" },
    monoReversed: { f: "--on-band-dark", t: "--on-band-dark" },
    onAccent:     { f: "--on-accent", t: "--on-accent" },
    gold:         { t: "--on-band-dark" }
  };
  function v(name) { return "var(" + name + ")"; }
  function grad(id, g, c0, c1, o0, o1) {
    return h("linearGradient", { key: id, id: id, gradientUnits: "userSpaceOnUse", x1: g[0], y1: g[1], x2: g[2], y2: g[3] },
      h("stop", { offset: 0, stopColor: c0, stopOpacity: o0 == null ? 1 : o0 }),
      h("stop", { offset: 1, stopColor: c1, stopOpacity: o1 == null ? 1 : o1 }));
  }
  function stones(fills, uid, defs) {
    var out = [];
    G.faces.forEach(function (f, i) {
      f.parts.forEach(function (p, j) {
        var id = uid + "-" + i + j;
        defs.push(grad(id, p.g, fills[i][j][0], fills[i][j][1]));
        out.push(h("path", { key: id, d: p.d, fill: "url(#" + id + ")" }));
      });
      var sid = uid + "-" + i + "s";
      defs.push(grad(sid, f.sheen, G.sheen[0], G.sheen[0], G.sheen[1], G.sheen[2]));
      out.push(h("path", { key: sid, d: f.d, fill: "url(#" + sid + ")" }));
    });
    return out;
  }
  /* tone "color" carries the reversed stones too; bundle.css shows the pair that matches the theme. */
  function markPaths(toneName, dx, dy, uid) {
    var tr = (dx || dy) ? "translate(" + dx + " " + dy + ")" : undefined;
    if (!G.tones[toneName]) {
      return [h("g", { key: "mark", transform: tr }, G.faces.map(function (f, i) {
        return h("path", { key: "f" + i, d: f.d, style: { fill: v(TONES[toneName].f) } });
      }))];
    }
    var defs = [], groups;
    if (toneName === "color") {
      groups = [
        h("g", { key: "l", className: "eta-mark-light" }, stones(G.tones.color, uid + "l", defs)),
        h("g", { key: "d", className: "eta-mark-dark" }, stones(G.tones.reversed, uid + "d", defs))
      ];
    } else groups = stones(G.tones[toneName], uid, defs);
    return [h("defs", { key: "defs" }, defs), h("g", { key: "mark", transform: tr }, groups)];
  }
  function textPaths(tone, dx, dy) {
    return [
      h("path", { key: "w", d: G.wm, transform: "translate(" + dx + " " + dy + ")", style: { fill: v(tone.t) } }),
      h("path", { key: "d", d: G.desc, transform: "translate(" + dx + " " + (dy + G.CAP + 17) + ")", style: { fill: "none", stroke: v(tone.t), strokeWidth: G.DESC_SW, strokeLinejoin: "bevel" } })
    ];
  }
  var logoSeq = 0;
  function Logo(props) {
    var variant = pick(props.variant, ["horizontal", "stacked", "mark", "wordmark"], "horizontal");
    var toneName = pick(props.tone, Object.keys(TONES), "color");
    var tone = TONES[toneName];
    var uid = "eta" + (React.useId ? React.useId().replace(/[^a-zA-Z0-9]/g, "") : "n" + (++logoSeq));
    var gap = 30, W, H, kids;
    if (variant === "mark") { W = G.MW; H = G.MH; kids = markPaths(toneName, 0, 0, uid); }
    else if (variant === "wordmark") { W = G.WMW; H = G.CAP + 17 + G.DESC_H + 1.5; kids = textPaths(tone, 0, 0); }
    else if (variant === "stacked") {
      var wy = G.MH + 36; W = G.WMW; H = wy + G.CAP + 17 + G.DESC_H + 1.5;
      kids = markPaths(toneName, (G.WMW - G.MW) / 2, 0, uid).concat(textPaths(tone, 0, wy));
    } else {
      W = G.MW + gap + G.WMW; H = G.MH + 1;
      kids = markPaths(toneName, 0, 0, uid).concat([
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
