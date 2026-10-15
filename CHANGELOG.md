# Changelog

## 3.0.0 (2026-10-15)

Brand Evolution 13 is the canon. Replaces Royal Blue (v2) and the short-lived Evolution 12.

- Tokens: `accent` is Emerald #12664F; added `digital` (Sapphire #153E8A), `ruby`, `emerald`, `sapphire`, `white` #F7F7F4, `obsidian` #111214, `silver` #B9BEC4 and `gold-canon` #B79A58. `band-dark` is Obsidian. `forest`, `sage` and `paper` stay as legacy tokens. `accent-strong`, `accent-tint` and the dark-theme values are derived. `mono` resolves to Inter.
- Logo: the faceted three-face crystal (Ruby left, Sapphire right, Emerald bottom) replaces the all-blue tetrahedron. New PNG exports of the color and reversed lockups and marks.
- Components: `Logo` draws the faceted mark; added the BrandCanon reference; BrandApplications follows the board.
- Preset: added `eta-digital`, `eta-sapphire`, `eta-emerald`, `eta-ruby`, `eta-forest`, `eta-sage`, `eta-white`, `eta-obsidian`, `eta-silver`, `eta-gold-canon` and `font-serif`. Class names unchanged, so consumers re-skin on upgrade.
- Breaking for consumers that hard-coded #1d73ed or the blue marks.

## 2026-10-10 (later)

- Tailwind 3 preset at `@et-advisory/brand/preset`, rebuilt on the v2 tokens; replaces the v1 HSL preset.
- Components are now live React parts in the `ETA` namespace: `Logo`, `Button`, `Badge`, `StatusChip`, `StatTile` with `StatRow`, `ServiceCard` with `ServiceRow`, `Eyebrow`, `SectionHeading`. Added `components/bundle.js`, `bundle.css`, `index.d.ts` and React 18.3.1 in `components/lib/`.
- Renamed `ink-band`, `on-ink-band`, `on-ink-band-muted` to `band-dark`, `on-band-dark`, `on-band-dark-muted`; values unchanged.
- `onDark` buttons now use `on-band-dark` for border and label.

## 2026-10-10

- Added `accent-fill` (#1c70e8 light, #6aa5f7 dark) as the primary Button fill, so small white labels reach 4.63:1. `accent` stays the ratified Royal Blue.
- Reworded the `on-accent` and `ink-band` (now `band-dark`) usage notes; no color values changed.
- Business card reworked: wordmark and bleeding mark on the front; on the back, Email, Telephone and Address labels whose initials spell ETA.
- Social avatar and app icon: the mark is now nudged up for optical centering (previously nudged down in error).
- Social row centered in BrandApplications.
- Lifted `ink-band` (now `band-dark`) in the dark theme to #2a2e3b so the band stays visible against the page.

## 2026-10-09

- Proposed logo: faceted tetrahedron mark, drawn `ETA` wordmark, `ET ADVISORY` descriptor; horizontal and stacked lockups; reversed, one-color and ceremonial gold variants; app icon.
- Added mark tokens (`mark-facet-*`, `mark-reversed-*`), `band-dark`, `on-band-dark`, `on-band-dark-muted`, `gold-light`, `gold-deep`.
- Added Logo and BrandApplications references; regenerated the cover.
- `letter-e`, `letter-t`, `letter-a` marked legacy.

## 2026-10-08

- Added Button, Badge, StatusChip, StatTile, ServiceCard, Eyebrow, SectionHeading, the Logo placeholder, the cover and the `on-gold` token.
