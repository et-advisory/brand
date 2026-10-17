# Card and CardFooter

Card is the bordered panel every tile and case study sits in. It has four fixed slots, each with one style: an optional icon tile (40px, `surface` fill, `accent` stroke), a title (18px, 700, `ink`), the content (14px, `ink-muted`), and a footer for provenance: a source line, a photo credit, a date of record, the links behind a figure. The footer is `ETA.CardFooter`, also exported for layouts that need the same hairline and mono style.

**The consumer provides** the content as children, a `title` when the card names one thing (an `h3` by default; set `level` 2 to 4 to fit the heading outline), an `icon` (a Lucide SVG node) when a row of cards needs a glance-level cue, and a `footer` when the content makes a claim. Render it as `<ETA.Card title="Gold, PAXG" footer="Source: Paxos, paxos.com/paxg">…</ETA.Card>`; the footer may also hold links or a short list. `ETA.StatTile` is a Card whose footer is its source line.

**When to use.** Any panel on paper, surface or a slide that states a figure, quotes a document or shows an example from outside ETA.

**Do**
- Give every figure or outside example a footer: source, credit or links, never a call to action.

**Do not**
- Do not restyle a slot; a different look is a different component.
