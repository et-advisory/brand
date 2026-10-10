// Builds tokens/tokens.css from tokens/tokens.json. Run: npm run build:tokens
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const t = JSON.parse(readFileSync(join(root, "tokens/tokens.json"), "utf8"));
const [first, ...others] = t.color.themes.map((th) => th.id);

const colorVars = (theme) =>
  t.color.tokens
    .map((tok) => {
      const v = typeof tok.value === "string" ? tok.value : tok.value[theme] ?? tok.value[first];
      return `  --${tok.name}: ${v};`;
    })
    .join("\n");
const listVars = (fam) => (t[fam]?.tokens ?? []).map((tok) => `  --${tok.name}: ${tok.value};`).join("\n");
const fontVars = Object.entries(t.type.families).map(([k, v]) => `  --font-${k}: ${v};`).join("\n");

let css = `/* ${t.name} — generated from tokens/tokens.json by scripts/build-tokens.mjs. Do not edit by hand. */\n\n`;
css += `:root {\n${colorVars(first)}\n\n${listVars("spacing")}\n\n${listVars("radius")}\n\n${fontVars}\n}\n`;
for (const theme of others) {
  css += `\n@media (prefers-color-scheme: ${theme}) {\n  :root:not([data-theme="${first}"]) {\n${colorVars(theme).replace(/^/gm, "  ")}\n  }\n}\n`;
  css += `\n:root[data-theme="${theme}"] {\n${colorVars(theme)}\n}\n`;
}
css += `\n/* Type styles */\n`;
for (const g of t.type.groups) {
  for (const s of g.styles) {
    css += `.t-${s.name} { font-family: var(--font-${g.family}); font-size: ${s.fontSize}; line-height: ${s.lineHeight}; font-weight: ${s.fontWeight};${s.letterSpacing ? ` letter-spacing: ${s.letterSpacing};` : ""} }\n`;
  }
}
writeFileSync(join(root, "tokens/tokens.css"), css);
console.log(`tokens.css: ${t.color.tokens.length} colors x ${t.color.themes.length} themes, ${t.type.groups.reduce((n, g) => n + g.styles.length, 0)} type styles`);
