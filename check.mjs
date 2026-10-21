// WCAG contrast gate for the preset's colour pairs in every theme. `node check.mjs`; exits 1 on any failure.
import { readFileSync } from "node:fs";
import preset from "./preset.js";

const tokens = JSON.parse(readFileSync(new URL("./tokens/tokens.json", import.meta.url), "utf8"));
const themes = tokens.color.themes.map((t) => t.id);
const hex = Object.fromEntries(tokens.color.tokens.map((t) => [t.name, t.value]));
const { colors, textColor } = preset.theme.extend;

// "primary-foreground" -> colors.primary.foreground -> "--on-accent"; text: names read textColor.
const tokenOf = (name, table = colors) => {
  const parts = name.split("-");
  for (let i = parts.length; i > 0; i--) {
    let v = table[parts.slice(0, i).join("-")];
    const rest = parts.slice(i).join("-");
    if (v && typeof v === "object") v = rest ? v[rest] : v.DEFAULT;
    else if (rest) v = undefined;
    if (typeof v === "string") return v.match(/var\(--([\w-]+)\)/)[1];
  }
  throw new Error(`${name} is not in the preset`);
};
const resolve = (name) => (name.startsWith("text:") ? tokenOf(name.slice(5), textColor) : tokenOf(name));
const rgb = (name, theme) => {
  const v = hex[resolve(name)];
  const h = typeof v === "string" ? v : v[theme] ?? v[themes[0]];
  return [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
};
const over = (top, alpha, under) => top.map((c, i) => c * alpha + under[i] * (1 - alpha));
const lum = (c) => c.map((x) => (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4)).reduce((s, x, i) => s + x * [0.2126, 0.7152, 0.0722][i], 0);
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const TEXT = 4.5, UI = 3;
const pairs = [
  ["foreground", "background", TEXT],
  ["card-foreground", "card", TEXT],
  ["popover-foreground", "popover", TEXT],
  ["muted-foreground", "background", TEXT],
  ["muted-foreground", "card", TEXT],
  ["muted-foreground", "muted", TEXT],
  ["text:primary", "background", TEXT],
  ["text:primary", "card", TEXT],
  ["primary-foreground", "primary", TEXT],
  ["secondary-foreground", "secondary", TEXT],
  ["accent-foreground", "accent", TEXT],
  ["muted-foreground", "accent", TEXT],
  ["destructive", "card", TEXT],
  ["destructive-foreground", "destructive", TEXT],
  ["success-foreground", "success", TEXT],
  ["warning-foreground", "warning", TEXT],
  ["danger-foreground", "danger", TEXT],
  ["success", "success-bg", TEXT],
  ["warning", "warning-bg", TEXT],
  ["danger", "danger-bg", TEXT],
  ["eta-status-info-fg", "eta-status-info", TEXT],
  ["eta-status-planned-fg", "eta-status-planned", TEXT],
  ["sidebar-foreground", "sidebar", TEXT],
  ["sidebar-primary-foreground", "sidebar-primary", TEXT],
  ["sidebar-accent-foreground", "sidebar-accent", TEXT],
  ["input", "background", UI],
  ["input", "card", UI],
  ["ring", "card", UI],
  ...[1, 2, 3, 4, 5].map((n) => [`chart-${n}`, "card", UI]),
];

let failed = 0;
for (const theme of themes) {
  const rows = pairs.map(([fg, bg, min]) => [`${fg} on ${bg}`, ratio(rgb(fg, theme), rgb(bg, theme)), min]);
  // shadcn buttons hover at bg-primary/90 over the card.
  rows.push(["primary-foreground on primary/90", ratio(rgb("primary-foreground", theme), over(rgb("primary", theme), 0.9, rgb("card", theme))), TEXT]);
  for (const [name, r, min] of rows) {
    const ok = r >= min;
    if (!ok) failed++;
    console.log(`${ok ? "ok  " : "FAIL"} ${theme.padEnd(5)} ${r.toFixed(2).padStart(5)}:1 (min ${min}) ${name}`);
  }
}
process.exit(failed ? 1 : 0);
