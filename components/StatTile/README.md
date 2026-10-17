# StatTile

StatTile is an `ETA.Card` that leads with one big numeral, then a label; its source line is the card footer.

**The consumer provides** the figure, a label that says what it counts, and a source. Render it as `<ETA.StatTile value="3" label="Service lines" source="ETA offerings" />` inside an `ETA.StatRow`, which lays out two to four tiles. Leave `value` out to show the `[00]` placeholder; the source line always shows, reading `[add before use]` until one is given.

**When to use.** To state one verified number in a row of two to four tiles on a page or slide.

**Do**
- Show the numeral in `accent` (it is 48px, which passes 3:1) and the label in `ink`.
- Give every figure a source in `ink-muted` mono; nothing unsourced.
- Keep the figures tabular.

**Do not**
- Do not invent statistics or fill a row with filler numbers; use the bracketed placeholder until the figure is verified.
- Do not set the numeral smaller than 24px in `accent`; below that, use `accent-strong`.
