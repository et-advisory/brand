# et-advisory

The brand system for ET Advisory (ETA): design tokens, logo files, component references and the brand book.

ET Advisory helps founders and asset owners close capital raises, with a focus on real-world asset tokenization. The look is confident, bright and precise: warm paper, near-black ink, one Royal Blue accent, heavy Inter headlines.

> **Logo status.** The faceted tetrahedron mark is proposed (2026-10-09) and pending ratification. Until it is ratified, treat the files in `logos/` as the working version.

## What is here

| Path | What |
| --- | --- |
| `docs/BRAND.md` | The brand book: principles, voice, visual foundations, logo rules, iconography. Start here. |
| `tokens/tokens.json` | Source of truth: colors in light and dark themes, type scale, spacing, radius, each with a usage note. |
| `tokens/tokens.css` | Generated CSS custom properties and `.t-*` type classes. Do not edit by hand. |
| `logos/` | 12 SVG logo files and a 512px PNG app icon, all outlined paths. Usage notes in `logos/README.md`. |
| `components/<Name>/` | Guidelines (`README.md`) and a standalone `preview.html` for each component. |
| `index.html` | A gallery of the logos and every component preview. |
| `scripts/build-tokens.mjs` | Rebuilds `tokens.css` from `tokens.json`. |
| `scripts/logo/generate.py` | Regenerates every logo SVG from its geometry. |

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

- Small white text sits on `accent-fill` (4.63:1), not on `accent` (4.44:1, 24px and up or bold only).
- Text under 24px in blue uses `accent-strong`.
- `ink-band` is a background that stays dark in both themes; text on it is `on-ink-band` or `on-ink-band-muted`.
- `gold` never sits beside blue.

## Changing things

- **Tokens:** edit `tokens/tokens.json`, then run `npm run build:tokens`. Every color needs a value for each theme and a usage note.
- **Logo:** edit the geometry in `scripts/logo/generate.py` and run `npm run build:logos`, then re-export `logos/eta-app-icon-512.png` from `eta-app-icon.svg`. Never hand-edit or redraw the SVGs.
- Record every change in `CHANGELOG.md`.

## Open decisions

The base spacing unit (4px here, 8px in the Style Guide), whether Instrument Serif and IBM Plex Mono are adopted, and ratifying the proposed logo.

All rights reserved, ET Advisory.
