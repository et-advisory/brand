/* @ds-bundle: {"format":4,"namespace":"ETA","components":[{"name":"Logo"},{"name":"Button"},{"name":"Badge"},{"name":"StatusChip"},{"name":"StatTile"},{"name":"ServiceCard"},{"name":"Eyebrow"},{"name":"SectionHeading"}]} */
(function () {
  "use strict";
  var React = window.React;
  var h = React.createElement;
  var G = {"MW": 120, "MH": 103.92, "WMW": 153, "CAP": 64, "DESC_H": 11.5, "DESC_SW": 1.9, "mark": ["M57.91 3.62 L2.57 99.47 L64.83 62.19Z", "M116.72 98.24 L63.16 5.48 L69.86 62.16Z", "M4.87 103.92 L115.9 103.92 L67.32 66.52Z"], "wm": "M0 0 L42 0 L42 14.5 L14.5 14.5 L14.5 24.75 L38 24.75 L38 39.25 L14.5 39.25 L14.5 49.5 L42 49.5 L42 64 L0 64ZM49 0 L97 0 L97 14.5 L80.25 14.5 L80.25 64 L65.75 64 L65.75 14.5 L49 14.5ZM93 64 L116.11 0 L129.89 0 L153 64 L137.58 64 L123 23.62 L108.42 64ZM116.2 39.68 L129.8 39.68 L134.09 51.57 L111.91 51.57Z", "desc": "M8.08 0H0.95V11.5H8.08M0.95 5.75H7.275M14.957358490566037 0H23.237358490566038M19.097358490566037 0V11.5M41.118490566037735 11.5L45.948490566037734 0L50.77849056603773 11.5M42.95849056603774 7.13H48.938490566037736M57.65584905660377 0V11.5H60.87584905660377A5.75 5.75 0 0 0 60.87584905660377 0ZM73.50320754716981 0L78.3332075471698 11.5L83.1632075471698 0M90.04056603773584 0V11.5M102.28267452830188 1.4375A2.875 2.875 0 1 0 99.79292452830188 5.75A2.875 2.875 0 1 1 97.30317452830188 10.0625M115.29528301886792 0A5.75 5.75 0 1 1 115.29528301886792 11.5A5.75 5.75 0 1 1 115.29528301886792 0ZM127.92264150943396 11.5V0H132.29264150943396A2.875 2.875 0 0 1 132.29264150943396 5.75H127.92264150943396M131.83264150943396 5.75L135.51264150943396 11.5M142.39 0L147.22 5.75L152.04999999999998 0M147.22 5.75V11.5"};

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
  function StatTile(props) {
    return h("div", Object.assign({ className: cx("eta-stat", props.className) }, omit(props, ["value", "label", "source", "className"])),
      h("span", { className: "eta-stat-value" }, props.value == null ? "[00]" : props.value),
      h("span", { className: "eta-stat-label" }, props.label),
      h("span", { className: "eta-stat-source" }, "Source: " + (props.source || "[add before use]")));
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
    color:        { f: ["--mark-facet-light", "--mark-facet-mid", "--mark-facet-deep"], t: "--ink" },
    reversed:     { f: ["--mark-reversed-light", "--mark-reversed-mid", "--mark-reversed-deep"], t: "--on-band-dark" },
    mono:         { f: ["--ink", "--ink", "--ink"], t: "--ink" },
    monoReversed: { f: ["--on-band-dark", "--on-band-dark", "--on-band-dark"], t: "--on-band-dark" },
    onAccent:     { f: ["--on-accent", "--on-accent", "--on-accent"], t: "--on-accent" },
    gold:         { f: ["--gold-light", "--gold", "--gold-deep"], t: "--on-band-dark" }
  };
  function v(name) { return "var(" + name + ")"; }
  function markPaths(tone, dx, dy) {
    return G.mark.map(function (d, i) {
      return h("path", { key: "m" + i, d: d, transform: (dx || dy) ? "translate(" + dx + " " + dy + ")" : undefined, style: { fill: v(tone.f[i]) } });
    });
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
    var gap = 30, W, H, kids;
    if (variant === "mark") { W = G.MW; H = G.MH; kids = markPaths(tone, 0, 0); }
    else if (variant === "wordmark") { W = G.WMW; H = G.CAP + 17 + G.DESC_H + 1.5; kids = textPaths(tone, 0, 0); }
    else if (variant === "stacked") {
      var wy = G.MH + 36; W = G.WMW; H = wy + G.CAP + 17 + G.DESC_H + 1.5;
      kids = markPaths(tone, (G.WMW - G.MW) / 2, 0).concat(textPaths(tone, 0, wy));
    } else {
      W = G.MW + gap + G.WMW; H = G.MH + 1;
      kids = markPaths(tone, 0, 0).concat([
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

  var api = { Button: Button, Badge: Badge, StatusChip: StatusChip, StatTile: StatTile, StatRow: StatRow, ServiceCard: ServiceCard, ServiceRow: ServiceRow, Eyebrow: Eyebrow, SectionHeading: SectionHeading, Logo: Logo, SERVICES: SERVICES };
  window.ETA = Object.assign(window.ETA || {}, api);
})();
