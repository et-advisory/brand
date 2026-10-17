# ET Advisory brand kit

One source for the marketing site (etadvisory.xyz) and the product (ETA Workspace).
Change a value here, bump the version, and both surfaces pick it up.

## Install

```sh
pnpm add github:et-advisory/brand#v1.0.0   # era-app
bun add github:et-advisory/brand#v1.0.0    # etadvisory
```

```css
/* src/index.css: fonts first, then the kit, then Tailwind */
@import "@et-advisory/brand/brand.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```ts
// tailwind.config.ts
import brand from "@et-advisory/brand/preset";
export default { presets: [brand], content: ["./src/**/*.{ts,tsx}"], plugins: [tailwindcssAnimate] };
```

Do not redefine kit tokens in an app's CSS. Run `node check.mjs` after any colour change; it fails below WCAG AA.

## Names

| Use | Name | Lockup |
|---|---|---|
| Company, marketing site | **ET Advisory** | mark + "ET Advisory" |
| Product, app.etadvisory.xyz | **ETA Workspace** | mark + "ETA Workspace" |
| Method | **ε·τ·α**: Establish, Tokenize, Activate | Greek letters, lowercase |

Wordmark: Inter, `font-black`, `tracking-[-0.02em]`; 17px in navigation, 24px on sign-in. The mark sits left of the name at the cap height of the text.
Never "ETA — Gold SPV Coordination", "ERA", or "ETA" alone as a product name.

## Mark

`eta-mark.svg`: a copy of `logos/eta-mark.svg` (the three-stone tetrahedron), written by `scripts/logo/generate.py`. Outlined paths, so it renders the same everywhere.
Minimum size 16px (favicon). Do not recolour, rotate, or place it on a fill darker than `--muted`.

## Colour

All tokens are HSL triplets in `brand.css`, used as `hsl(var(--token))` or through the preset (`bg-primary`, `text-eta-status-active-fg`).

| Role | Token | Use |
|---|---|---|
| Ink | `--foreground` | Body text, headings |
| Canvas | `--background` (warm off-white), `--card` (white) | Page and raised surfaces |
| Brand blue | `--primary` = `--accent` = `--ring` | Primary buttons, links, focus. One filled primary button per view. |
| Blue hover | `--eta-accent-hover` | Hover on filled blue |
| Muted | `--muted`, `--muted-foreground` | Secondary text, quiet fills |
| Danger | `--destructive` | Destructive actions and errors only |
| Field edge | `--input` | Input and outline-button borders (3:1) |
| Hairline | `--border` | Dividers, card edges (decorative) |
| ε τ α | `--eta-e`, `--eta-t`, `--eta-a` | Method illustrations and ambient motifs. Never text. |
| Gold | `--eta-gold` | The mark and bullion illustrations |
| Status | `--eta-status-{progress,info,active,planned,blocked}` + `-fg` | Chips only; always pair bg with its `-fg` |

Status meaning: progress = pending, in review or needs attention, info = in motion (submitted, in transit, committed), active = live, approved or agreed, planned = draft, not started or closed, blocked = rejected, failed or expired.
Light only. A dark theme is one more block in `brand.css` when a toggle exists.

## Type

Inter 400–900, loaded by each app (Google Fonts).

| Role | Class |
|---|---|
| Site display (hero) | `text-[44px] sm:text-[60px] md:text-[80px] font-black leading-[1.04] tracking-[-0.03em]` |
| Site section title | `text-[30px] md:text-[38px] font-black leading-[1.1]` |
| App page title (h1) | `text-2xl font-black tracking-tight` |
| App section title (h2) | `text-sm font-bold` |
| Eyebrow (both) | `text-eyebrow uppercase` (11px, 0.18em, bold) |
| Smallest text | `text-2xs` (10px). Nothing smaller. |

Display sizes are for the site only. The app tops out at `text-2xl`.

## Motifs

`.eta-grid-field` (hairline grid behind heroes), `.eta-grid-field-dark`, `.eta-bloom` (blue glow), `.text-gradient` (heading gradient), `eta-spin` keyframes. Motion stops under `prefers-reduced-motion`.

## Voice

- **Site:** declarative and short. "X becomes Y." Speak to organisations at an inflection point.
- **Product:** plain sentence case. Buttons start with a verb and name the object ("Invite investor", not "Submit"). Errors say what happened and what to do next, never a raw code.

## Terminology

| Say | Not |
|---|---|
| Deal | campaign, raise, offering |
| Instruments | Token Studio |
| Sign in | Continue, Log in |
| Data Room | dataroom, documents |

Demo and sample data use generic placeholders: Issuer SPV I, Investor 1, Custodian A, Vendor A. No real company or person names.
