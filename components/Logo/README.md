# Logo

Logo draws the proposed ETA mark (2026-10-09) and its lockups as inline SVG bound to the mark tokens, so the same markup works in both themes.

**Status.** Proposed, pending ratification. It replaces the plain-type placeholder and settles the triangle direction under review in favor of the dimensional tetrahedron. The legacy marks (`eta-logo.png`, `eta-mark.svg`, the four-glyph Logo in the Claude Design project) are retired once this is ratified.

**Usage.** `<ETA.Logo variant="horizontal" tone="color" width={200} />`. `variant` is `horizontal`, `stacked`, `mark` or `wordmark`; `tone` is `color`, `reversed`, `mono`, `monoReversed`, `onAccent` or `gold`; `width` sets the size and the height follows.

**The consumer provides** the ground and picks the tone to match it: `paper`, `surface` or `card` take the full-color mark (`mark-facet-*`, type in `ink`); `band-dark` takes the reversed mark (`mark-reversed-*`, type in `on-band-dark`); an `accent` fill takes the one-color mark in `on-accent`. For files, use the SVGs in the Logos asset group rather than redrawing.

**Variants.** Horizontal lockup (primary), stacked lockup, wordmark, mark. Colourways: full color, reversed, one color, ceremonial gold (band-dark only).

**Do**
- Keep clear space of one third of the mark's height on every side.
- Use the mark alone below 160px wide; use a one-color mark below 24px.
- Point the apex up.

**Do not**
- Do not recolor the faces, including with `letter-e`, `letter-t`, `letter-a`, or put the gold mark beside blue.
- Do not stretch, rotate, outline, shadow or gradient the mark, or close the channels between faces.
- Do not set "ET Advisory" in live type beside the mark; the lockup files already carry the name.
