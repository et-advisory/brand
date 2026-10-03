// WCAG contrast gate for brand.css. `node check.mjs`; exits 1 on any failure.
import { readFileSync } from "node:fs";

const css = readFileSync(new URL("./brand.css", import.meta.url), "utf8");
const raw = Object.fromEntries([...css.matchAll(/--([\w-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]));
const val = (k) => {
  const v = raw[k];
  if (v === undefined) throw new Error(`--${k} is not defined`);
  const alias = v.match(/^var\(--([\w-]+)\)$/);
  return alias ? val(alias[1]) : v;
};

const rgb = (k) => {
  const [h, s, l] = val(k).replace(/%/g, "").split(/\s+/).map(Number);
  const a = (s / 100) * Math.min(l / 100, 1 - l / 100);
  const f = (n) => {
    const t = (n + h / 30) % 12;
    return l / 100 - a * Math.max(-1, Math.min(t - 3, 9 - t, 1));
  };
  return [f(0), f(8), f(4)];
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
  ["foreground", "card", TEXT],
  ["muted-foreground", "background", TEXT],
  ["muted-foreground", "card", TEXT],
  ["muted-foreground", "muted", TEXT],
  ["primary", "background", TEXT],
  ["primary", "card", TEXT],
  ["primary-foreground", "primary", TEXT],
  ["primary-foreground", "eta-accent-hover", TEXT],
  ["secondary-foreground", "secondary", TEXT],
  ["destructive", "card", TEXT],
  ["destructive-foreground", "destructive", TEXT],
  ["eta-status-progress-fg", "eta-status-progress", TEXT],
  ["eta-status-active-fg", "eta-status-active", TEXT],
  ["eta-status-info-fg", "eta-status-info", TEXT],
  ["eta-status-planned-fg", "eta-status-planned", TEXT],
  ["primary-foreground", "eta-status-active-fg", TEXT],
  ["eta-status-blocked-fg", "eta-status-blocked", TEXT],
  ["input", "background", UI],
  ["input", "card", UI],
  ["ring", "card", UI],
].map(([fg, bg, min]) => [`${fg} on ${bg}`, ratio(rgb(fg), rgb(bg)), min]);

// shadcn buttons hover at bg-primary/90 over the card.
pairs.push(["primary-foreground on primary/90", ratio(rgb("primary-foreground"), over(rgb("primary"), 0.9, rgb("card"))), TEXT]);

let failed = 0;
for (const [name, r, min] of pairs) {
  const ok = r >= min;
  if (!ok) failed++;
  console.log(`${ok ? "ok  " : "FAIL"} ${r.toFixed(2).padStart(5)}:1 (min ${min}) ${name}`);
}
process.exit(failed ? 1 : 0);
