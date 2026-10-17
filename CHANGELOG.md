# Changelog

## 3.1.0 (2026-10-17)

- Logo: the mark is a true tetrahedron, apex on the centreline above the centroid (`C=(60,58)`), channels widened to 6; each face is a cut stone with a table and three bevels, lit from the upper left, in Ruby, Sapphire and Emerald; mono variants stay flat. All twelve SVGs regenerated from `scripts/logo/generate.py`. The PNG exports and `ETA.Logo` in the component bundle still show the 3.0.0 geometry until re-exported and rebuilt.
- Components: added `ETA.Card` with `ETA.CardFooter` (the footer carries a card's source, credit or links); `ETA.StatTile` is now a Card whose footer is its source line. `index.d.ts`, `bundle.js` and `bundle.css` updated by hand; rebuild the bundle to confirm.
- Photography: added `assets/scenes/` (four licence-free aerial grounds for the site's story scenes, with credits) and the scene treatment recipe.
- Graphic language: documented the scene drawing kinds the site draws over the grounds.
- The "ET Advisory" Design System artifact on claude.ai carries the same logos, grounds and README text (Version 42).

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
