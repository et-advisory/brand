# Card and CardFooter

Card is the bordered panel every tile and case study sits in. It has four fixed slots, each with one style: an optional icon tile (40px, `surface` fill, `accent` stroke), a title (18px, 700, `ink`), the content (14px, `ink-muted`), and a footer for provenance: a source line, a photo credit, a date of record, the links behind a figure.

**The consumer provides** the content as children, a `title` when the card names one thing, an `icon` (a Lucide SVG node) when a row of cards needs a glance-level cue, and a `footer` when the content makes a claim. Render it as `<ETA.Card footer="Source: RWA.xyz, 16 Oct 2026">…</ETA.Card>`; the footer may also hold links or a short list. `ETA.StatTile` is a Card whose footer is its source line.

**When to use.** Any panel on paper, surface or a slide that states a figure, quotes a document or shows an example from outside ETA.

**Do**
- Put every source, credit or link in the footer, not in the body.
- Keep the footer to one or two lines in the mono source style; links in `accent-strong`.
- Let the body carry the claim and the footer carry the evidence.

**Do not**
- Do not leave a figure or an example without a footer.
- Do not put calls to action in the footer; it is for provenance.
- Do not restyle the hairline or the mono type per card, and do not restyle a slot per card; if a slot needs a different look, it is a different component.
