# et-advisory

The brand system for ET Advisory (ETA): design tokens, logo files, component references and the brand book.

ET Advisory helps founders and asset owners close capital raises, with a focus on real-world asset tokenization. The look is confident, bright and precise: warm paper, near-black ink, Emerald as the interface accent, Obsidian as the dark ground, Sapphire for the digital layer, Silver and Gold as metals, heavy Inter headlines.

> **Canon.** Brand Evolution 13 (2026-10-14) replaces the Royal Blue direction. The mark is a three-face crystal: Ruby left, Sapphire right, Emerald bottom.

## What is here

| Path | What |
| --- | --- |
| `docs/BRAND.md` | The brand book: principles, voice, visual foundations, logo rules, iconography. Start here. |
| `tokens/tokens.json` | Source of truth: colors in light and dark themes, type scale, spacing, radius, each with a usage note. |
| `tokens/tokens.css` | Generated CSS custom properties and `.t-*` type classes. Do not edit by hand. |
| `logos/` | SVG logo files, PNG exports and a 512px app icon, all outlined paths. Usage notes in `logos/README.md`. |
| `components/bundle.js` | The live components: one classic script that sets `window.ETA`. Styled by `components/bundle.css`, typed in `components/index.d.ts`. |
| `components/lib/` | React and ReactDOM 18.3.1 (UMD), which the bundle needs. |
| `components/<Name>/` | Guidelines (`README.md`) and a standalone `preview.html` for each component. |
| `index.html` | A gallery of the logos and every component preview. |
| `scripts/build-tokens.mjs` | Rebuilds `tokens.css` from `tokens.json`. |
| `scripts/logo/generate.py` | Regenerates every logo SVG, the root `eta-mark.svg` and the mark data in `components/bundle.js`. |

## Viewing the gallery

Open `index.html` through a local server so the component previews load:

```sh
npx serve .            # or: python3 -m http.server
```

## Using the tokens

```html
<link rel="stylesheet" href="tokens/tokens.css">
<style>
  .cta { background: var(--accent-fill); color: var(--on-accent); border-radius: var(--radius-md); }
</style>
<h1 class="t-h1">Close the raise.</h1>
```

The dark theme follows `prefers-color-scheme`. To force a theme, set `data-theme="light"` or `data-theme="dark"` on `<html>`. Load Inter (400 to 900) and IBM Plex Mono (400 to 500) from Google Fonts; the token stacks fall back to Arial and the system monospace.

Key contrast rules (full detail in the brand book):

- Small white text sits on `accent-fill` (6.91:1); since Evolution 12 `accent` equals it.
- Text under 24px in Emerald uses `accent-strong`. `digital` (Sapphire) marks only tokens, rights and principle numerals.
- `band-dark` is a background that stays dark in both themes; text on it is `on-band-dark` or `on-band-dark-muted`.
- `ruby` appears only in the mark. `gold` never sits beside the three-color mark.

## Using Tailwind

`preset.js` maps the tokens onto shadcn-style names (`bg-primary`, `text-muted-foreground`, `border-border`) plus `eta-*`, `success`, `warning` and `danger`, with `/opacity` modifiers. It also sets body, borders, reduced motion and the `eta-grid-field`, `eta-bloom` and `eta-spin` motifs. Tailwind 3.4.

```css
@import "@et-advisory/brand/tokens.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```ts
import brand from "@et-advisory/brand/preset";
export default { presets: [brand], content: ["./src/**/*.{ts,tsx}"] };
```

Emerald text (`text-primary`, `text-eta-accent`) resolves to `accent-strong`; Emerald fills resolve to `accent-fill`. `eta-digital`, `eta-sapphire`, `eta-emerald`, `eta-ruby`, `eta-white`, `eta-obsidian`, `eta-silver` and `eta-gold-canon` carry the canon swatches.

## Using the components

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<script src="components/lib/react.production.min.js"></script>
<script src="components/lib/react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
<div id="app"></div>
<script>
  const { Logo, SectionHeading, Button, ServiceRow } = window.ETA, h = React.createElement;
  ReactDOM.createRoot(document.getElementById("app")).render(h("div", null,
    h(Logo, { variant: "horizontal", width: 200 }),
    h(SectionHeading, { eyebrow: "Capital formation", title: "Tokenization is the instrument.", lead: "The deliverable is a closed raise." }),
    h(ServiceRow),
    h(Button, { variant: "primary", size: 48, href: "/contact" }, "Initiate Contact")
  ));
</script>
```

| Component | Key props |
| --- | --- |
| `Logo` | `variant`: horizontal, stacked, mark, wordmark · `tone`: color, reversed, mono, monoReversed, onAccent, gold · `width` |
| `Button` | `variant`: primary, secondary, outline, ghost, link, inverse, onDark · `size`: 32, 40, 48 · `href` or `onClick` |
| `Badge` | `tone`: neutral, accent, gold |
| `StatusChip` | `tone`: neutral, info, success, pending, danger |
| `Card` / `CardFooter` | `title`, `icon` (a Lucide SVG node), `footer`, `level` (2 to 4, default 3); `CardFooter` is the footer on its own |
| `Gallery` | `columns`: 2, 3, 4 (default 3) · `ordered` renders an `ol`; each child gets its own list item |
| `StatTile` / `StatRow` | `value`, `label`, `source` (no `value` shows `[00]`); a row holds two to four tiles |
| `ServiceCard` / `ServiceRow` | the row always renders exactly three, 01 to 03; `items` rewords them |
| `Eyebrow` | `size`: default (12px), slide (24px) |
| `SectionHeading` | `eyebrow`, `title`, `lead`, `level`, `align` |

Full prop types are in `components/index.d.ts`; rules for each are in its `README.md`.

## Changing things

- **Components:** edit `components/bundle.js` and `components/bundle.css` directly (plain JavaScript, no build step), keep `components/index.d.ts` in step, and check every preview in both themes.
- **Tokens:** edit `tokens/tokens.json`, then run `npm run build:tokens`. Every color needs a value for each theme and a usage note.
- **Logo:** edit the geometry in `scripts/logo/generate.py` and run `npm run build:logos`, which also updates the mark in `components/bundle.js`, then re-export `logos/*.png` from the SVGs at their existing pixel sizes. Never hand-edit or redraw the SVGs or the bundle's `G`.
- Record every change in `CHANGELOG.md`.

## Open decisions

The base spacing unit (4px here, 8px in the Style Guide), whether Instrument Serif and IBM Plex Mono are adopted, and whether the Sage wireframe weight needs a token.

All rights reserved, ET Advisory.
