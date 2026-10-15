# Logo

Logo draws the ETA mark and its lockups as inline SVG bound to the mark tokens, so the same markup works in both themes.

**Status.** Adopted with the Brand Evolution 12 canon (2026-10-14): a faceted crystal with Ruby on the left face, Sapphire on the right and Emerald on the bottom, each face cut into a lit, a shaded and a deep facet with a faint sheen, lit from the upper left. It replaces the earlier all-blue mark and the letter-colored wordmark; the legacy marks (`eta-logo.png`, the four-glyph Logo in the Claude Design project) are retired.

**Usage.** `<ETA.Logo variant="horizontal" tone="color" width={200} />`. `variant` is `horizontal`, `stacked`, `mark` or `wordmark`; `tone` is `color`, `reversed`, `mono`, `monoReversed`, `onAccent` or `gold`; `width` sets the size and the height follows.

**The consumer provides** the ground and picks the tone to match it: `paper`, `surface` or `card` take the full-color mark (`mark-facet-*`, type in `ink`); `band-dark` (Forest) takes the reversed mark (`mark-reversed-*`, lifted so each face clears 3:1, type in `on-band-dark`); an `accent` fill takes the one-color mark in `on-accent`. For files, use the SVGs in the Logos asset group rather than redrawing.

**Variants.** Horizontal lockup (primary), stacked lockup, wordmark, mark. Colourways: full color, reversed, one color, ceremonial gold (band-dark only).

**Do**
- Keep clear space of one third of the mark's height on every side.
- Use the mark alone below 160px wide; use a one-color mark below 24px.
- Point the apex up.

**Do not**
- Do not flatten the full-color mark, move the light source, or recolor or reorder the faces (Ruby left, Sapphire right, Emerald bottom), or put the gold mark beside the three-color mark.
- Do not stretch, rotate, outline, shadow or gradient the mark, or close the channels between faces.
- Do not set "ET Advisory" in live type beside the mark; the lockup files already carry the name.
